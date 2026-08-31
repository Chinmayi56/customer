// Farm Craft — mock service layer.
// Every service here talks to localStorage today. When a backend exists,
// only the function bodies below need to change to fetch() calls — nothing
// in pages/components should ever touch localStorage directly.

import { PRODUCTS, DEMO_CUSTOMER, COMPANY } from './data.js';

const KEYS = {
  auth: 'fc_auth_session',
  orders: 'fc_orders',
  wishlist: 'fc_wishlist',
  addresses: 'fc_addresses',
  orderSeq: 'fc_order_seq',
};

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}
function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/* ---------------- authService ---------------- */
export const authService = {
  login(email, password) {
    if (email === DEMO_CUSTOMER.email && password === DEMO_CUSTOMER.password) {
      const session = { email, name: DEMO_CUSTOMER.name, mobile: DEMO_CUSTOMER.mobile, loggedInAt: Date.now() };
      write(KEYS.auth, session);
      return { ok: true, session };
    }
    return { ok: false, error: 'Invalid email or password. Try the demo credentials below.' };
  },
  loginAsDemo() {
    const session = { email: DEMO_CUSTOMER.email, name: DEMO_CUSTOMER.name, mobile: DEMO_CUSTOMER.mobile, loggedInAt: Date.now() };
    write(KEYS.auth, session);
    return session;
  },
  logout() {
    localStorage.removeItem(KEYS.auth);
  },
  getSession() {
    return read(KEYS.auth, null);
  },
  isLoggedIn() {
    return !!read(KEYS.auth, null);
  },
};

/* ---------------- productService ---------------- */
export const productService = {
  list() { return PRODUCTS; },
  search(query, { category, minMotor, availability } = {}) {
    const q = (query || '').trim().toLowerCase();
    return PRODUCTS.filter(p => {
      if (category && p.category !== category) return false;
      if (availability === 'in-stock' && p.stockStatus !== 'In Stock') return false;
      if (availability === 'low-stock' && p.stockStatus !== 'Low Stock') return false;
      if (!q) return true;
      const haystack = [
        p.name, p.description, p.category,
        ...(p.specifications || []).map(s => `${s.label} ${s.value}`),
        ...(p.applications || []),
        ...(p.features || []),
      ].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  },
  bySlug(slug) { return PRODUCTS.find(p => p.slug === slug) || null; },
};

/* ---------------- customerService ---------------- */
export const customerService = {
  getProfile() {
    const session = authService.getSession();
    if (!session) return null;
    return { ...session, addresses: read(KEYS.addresses, []) };
  },
  saveAddress(address) {
    const list = read(KEYS.addresses, []);
    list.unshift({ id: 'addr_' + Date.now(), ...address });
    write(KEYS.addresses, list);
    return list;
  },
  getAddresses() { return read(KEYS.addresses, []); },
  toggleWishlist(productId) {
    const list = read(KEYS.wishlist, []);
    const idx = list.indexOf(productId);
    if (idx >= 0) list.splice(idx, 1); else list.unshift(productId);
    write(KEYS.wishlist, list);
    return list;
  },
  getWishlist() { return read(KEYS.wishlist, []); },
};

/* ---------------- orderService ---------------- */
function nextOrderId() {
  const seq = read(KEYS.orderSeq, 10024) + 1;
  write(KEYS.orderSeq, seq);
  return `FC-${seq}`;
}
function makePurchaseCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const part = (n) => Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return `FC-${part(4)}-${part(4)}`;
}

export const orderService = {
  create(payload) {
    // payload: { customer, address, product, quantity, configuration, paymentMethod, total }
    const order = {
      orderId: nextOrderId(),
      purchaseCode: makePurchaseCode(),
      customerName: payload.customer.name,
      email: payload.customer.email,
      mobile: payload.customer.mobile,
      address: payload.address,
      product: payload.product,
      quantity: payload.quantity,
      configuration: payload.configuration || '',
      price: payload.total,
      paymentMethod: payload.paymentMethod,
      date: new Date().toISOString(),
      status: 'Pending',
    };
    const all = read(KEYS.orders, []);
    all.unshift(order);
    write(KEYS.orders, all);
    return order;
  },
  list() {
    const session = authService.getSession();
    const all = read(KEYS.orders, []);
    if (!session) return [];
    return all.filter(o => o.email === session.email);
  },
  // Read across ALL customers — this is what the Admin portal reads from the
  // same localStorage store to simulate customer -> admin communication.
  listAll() {
    return read(KEYS.orders, []);
  },
  byId(orderId) {
    return read(KEYS.orders, []).find(o => o.orderId === orderId) || null;
  },
};

/* ---------------- invoiceService ---------------- */

// A tiny green-leaf SVG used if the real logo file can't be fetched/embedded
// (e.g. opened from an unusual context). Keeps the invoice looking finished
// either way instead of showing a broken image icon.
const LOGO_FALLBACK_SVG = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
     <rect width="64" height="64" rx="12" fill="#1E7A3D"/>
     <path d="M32 14 C20 14 14 24 14 34 C14 44 22 50 32 50 C42 50 50 44 50 34 C50 24 44 14 32 14 Z"
           fill="none" stroke="#ffffff" stroke-width="2.4"/>
     <path d="M32 20 V44 M32 44 L24 36 M32 38 L40 30" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round"/>
   </svg>`
);

let logoDataUrlPromise = null;
// Fetches the bundled logo and inlines it as a base64 data URL so the
// downloaded invoice file still shows the logo correctly when opened later,
// from a different folder, or offline — a relative "assets/logo.jpeg" path
// would break once the file leaves the project folder.
function getLogoDataUrl() {
  if (logoDataUrlPromise) return logoDataUrlPromise;
  logoDataUrlPromise = fetch(COMPANY.logo)
    .then(res => { if (!res.ok) throw new Error('logo fetch failed'); return res.blob(); })
    .then(blob => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    }))
    .catch(() => LOGO_FALLBACK_SVG);
  return logoDataUrlPromise;
}

function invoiceNumber(order) {
  return `INV-${order.orderId}`;
}

export const invoiceService = {
  async buildInvoiceHtml(order) {
    const logoSrc = await getLogoDataUrl();
    const hasPrice = order.price != null && order.price !== '';
    const unitPrice = hasPrice ? Number(order.price) / Math.max(1, order.quantity) : null;
    const priceLabel = hasPrice ? `₹${Number(order.price).toLocaleString('en-IN')}` : 'Contact for Price';
    const unitPriceLabel = hasPrice ? `₹${unitPrice.toLocaleString('en-IN', { maximumFractionDigits: 2 })}` : '—';
    const totalLabel = priceLabel;
    const issueDate = new Date(order.date);

    return `
    <div style="font-family: 'Inter', Arial, sans-serif; color:#2A2E29; max-width:720px; margin:0 auto; background:#FCFBF8;">

      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:24px; padding:36px 40px 24px; border-bottom:4px solid #1E7A3D;">
        <div style="display:flex; align-items:center; gap:14px;">
          <img src="${logoSrc}" alt="Farm Craft logo" width="56" height="56" style="width:56px; height:56px; border-radius:12px; object-fit:cover; display:block;" />
          <div>
            <div style="font-size:22px; font-weight:700; letter-spacing:0.5px; color:#134A26;">FARM CRAFT</div>
            <div style="font-size:11px; color:#666; margin-top:2px;">Agricultural Machinery &amp; Grain Handling Equipment</div>
            <div style="font-size:11px; color:#666; margin-top:2px;">GSTIN: ${COMPANY.gstin}</div>
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:20px; font-weight:700; color:#1E7A3D; letter-spacing:1px;">INVOICE</div>
          <div style="font-size:12px; color:#666; margin-top:6px;">Invoice No: <strong style="color:#2A2E29;">${invoiceNumber(order)}</strong></div>
          <div style="font-size:12px; color:#666;">Order ID: <strong style="color:#2A2E29;">${order.orderId}</strong></div>
          <div style="font-size:12px; color:#666;">Date: <strong style="color:#2A2E29;">${issueDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</strong></div>
        </div>
      </div>

      <div style="padding:24px 40px 0;">
        <div style="background:#134A26; color:#fff; border-radius:14px; padding:16px 20px; display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
          <div>
            <div style="font-size:10px; text-transform:uppercase; letter-spacing:1px; color:rgba(255,255,255,0.6);">Purchase Code</div>
            <div style="font-size:20px; font-weight:700; letter-spacing:2px; margin-top:2px;">${order.purchaseCode}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:10px; text-transform:uppercase; letter-spacing:1px; color:rgba(255,255,255,0.6);">Status</div>
            <div style="font-size:13px; font-weight:600; margin-top:2px;">${order.status}</div>
          </div>
        </div>

        <div style="display:flex; gap:32px; margin-bottom:24px;">
          <div style="flex:1;">
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#888; margin-bottom:6px; font-weight:600;">Billed To</div>
            <div style="font-size:13px; line-height:1.6;">
              <div style="font-weight:600;">${order.customerName || ''}</div>
              <div>${order.email || ''}</div>
              <div>${order.mobile || ''}</div>
            </div>
          </div>
          <div style="flex:1;">
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#888; margin-bottom:6px; font-weight:600;">Delivery Address</div>
            <div style="font-size:13px; line-height:1.6;">
              <div>${order.address?.line1 || '—'}</div>
              <div>${[order.address?.city, order.address?.state, order.address?.pincode].filter(Boolean).join(', ') || ''}</div>
            </div>
          </div>
          <div style="flex:1;">
            <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#888; margin-bottom:6px; font-weight:600;">From</div>
            <div style="font-size:13px; line-height:1.6;">
              <div style="font-weight:600;">${COMPANY.name}</div>
              <div>${COMPANY.email}</div>
              <div>${COMPANY.phone}</div>
            </div>
          </div>
        </div>

        <table style="width:100%; border-collapse:collapse; margin-bottom:4px;">
          <thead>
            <tr style="background:#E8F3EC; text-align:left;">
              <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; border-radius:8px 0 0 8px;">Product</th>
              <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26;">Configuration</th>
              <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; text-align:center;">Qty</th>
              <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; text-align:right;">Unit Price</th>
              <th style="padding:10px 12px; font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#134A26; text-align:right; border-radius:0 8px 8px 0;">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; font-weight:600;">${order.product?.name || ''}</td>
              <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:12px; color:#666;">${order.configuration || '—'}</td>
              <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; text-align:center;">${order.quantity}</td>
              <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; text-align:right;">${unitPriceLabel}</td>
              <td style="padding:12px; border-bottom:1px solid #E4E2D9; font-size:13px; text-align:right; font-weight:600;">${priceLabel}</td>
            </tr>
          </tbody>
        </table>

        <div style="display:flex; justify-content:flex-end; margin-bottom:28px;">
          <div style="width:260px;">
            <div style="display:flex; justify-content:space-between; padding:8px 12px; font-size:13px; color:#666;">
              <span>Subtotal</span><span>${totalLabel}</span>
            </div>
            <div style="display:flex; justify-content:space-between; padding:8px 12px; font-size:13px; color:#666;">
              <span>Taxes</span><span>${hasPrice ? 'Included' : '—'}</span>
            </div>
            <div style="display:flex; justify-content:space-between; padding:12px; background:#E8F3EC; border-radius:10px; font-size:15px; font-weight:700; color:#134A26; margin-top:4px;">
              <span>Total</span><span>${totalLabel}</span>
            </div>
          </div>
        </div>

        <div style="display:flex; gap:32px; margin-bottom:28px; font-size:12px; color:#666;">
          <div><span style="color:#888;">Payment Method:</span> <strong style="color:#2A2E29;">${order.paymentMethod || '—'}</strong></div>
          <div><span style="color:#888;">Order Date:</span> <strong style="color:#2A2E29;">${issueDate.toLocaleDateString('en-IN')}</strong></div>
        </div>
      </div>

      <div style="border-top:1px solid #E4E2D9; padding:20px 40px 32px; font-size:11px; color:#999; text-align:center; line-height:1.7;">
        Thank you for choosing Farm Craft. Our team will contact you regarding order confirmation and delivery.<br />
        This is a demo invoice generated for preview purposes — no real payment has been processed.<br />
        Farm Craft &middot; ${COMPANY.address} &middot; ${COMPANY.email} &middot; ${COMPANY.phone}
      </div>
    </div>
    `;
  },

  async downloadInvoice(order) {
    const body = await this.buildInvoiceHtml(order);
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8" />
      <title>Invoice ${invoiceNumber(order)} — Farm Craft</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        body { margin:0; padding:32px 16px; background:#F1EFE7; font-family: Inter, Arial, sans-serif; }
        @media print { body { background:#fff; padding:0; } }
        table { width:100%; }
      </style>
      </head><body>${body}</body></html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FarmCraft-Invoice-${order.orderId}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  },
};
