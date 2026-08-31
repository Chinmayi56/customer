import { getProductById } from './data.js';
import { authService, customerService, orderService } from './services.js';
import { icons, toast } from './components.js';

let state = null;

function initialState(product) {
  const session = authService.getSession();
  const savedAddr = customerService.getAddresses()[0] || {};
  return {
    product,
    step: 1,
    customer: { name: session?.name || '', email: session?.email || '', mobile: session?.mobile || '' },
    address: { line1: savedAddr.line1 || '', city: savedAddr.city || '', state: savedAddr.state || '', pincode: savedAddr.pincode || '' },
    quantity: 1,
    configuration: product.specifications?.[0] ? `${product.specifications[0].label}: ${product.specifications[0].value}` : '',
    paymentMethod: '',
    paymentStage: 'select', // select | demo-processing | demo-done | visit
  };
}

export function openGetCodeModal(productId) {
  if (!authService.isLoggedIn()) {
    toast('Please log in to get a purchase code', { type: 'error' });
    window.location.hash = '#/login';
    return;
  }
  const product = getProductById(productId);
  if (!product) return;
  state = initialState(product);
  render();
}

function closeModal() {
  const root = document.getElementById('getcode-modal-root');
  if (root) root.remove();
  state = null;
}

function stepLabel(n) {
  return ['Customer Details', 'Delivery Address', 'Product', 'Payment Method'][n - 1];
}

function stepper() {
  return `
  <div class="flex items-center gap-2 mb-6">
    ${[1,2,3,4].map(n => `
      <div class="flex-1 flex items-center gap-2">
        <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
          n < state.step ? 'bg-fc-green text-white' : n === state.step ? 'bg-fc-green text-white' : 'bg-fc-offwhite text-fc-slate/50 border border-fc-line'
        }">${n < state.step ? '<i data-lucide=\"check\" class=\"w-3.5 h-3.5\"></i>' : n}</div>
        ${n < 4 ? `<div class="h-0.5 flex-1 ${n < state.step ? 'bg-fc-green' : 'bg-fc-line'}"></div>` : ''}
      </div>`).join('')}
  </div>
  <p class="text-xs uppercase tracking-wide text-fc-green font-semibold mb-4">Step ${state.step} of 4 &middot; ${stepLabel(state.step)}</p>`;
}

function stepCustomer() {
  const c = state.customer;
  return `
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-1.5">Name</label>
      <input data-field="name" value="${c.name}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Email</label>
      <input data-field="email" type="email" value="${c.email}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Mobile Number</label>
      <input data-field="mobile" value="${c.mobile}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
  </div>`;
}

function stepAddress() {
  const a = state.address;
  return `
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-1.5">Address</label>
      <textarea data-field="line1" rows="2" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green resize-none">${a.line1}</textarea>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium mb-1.5">City</label>
        <input data-field="city" value="${a.city}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
      </div>
      <div>
        <label class="block text-sm font-medium mb-1.5">State</label>
        <input data-field="state" value="${a.state}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Pincode</label>
      <input data-field="pincode" value="${a.pincode}" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green" />
    </div>
  </div>`;
}

function stepProduct() {
  const p = state.product;
  const priceLabel = p.price ? `₹${Number(p.price).toLocaleString('en-IN')}` : 'Contact for Price';
  return `
  <div class="flex gap-4 mb-5">
    <img src="${p.images[0]}" class="w-20 h-20 rounded-xl object-cover border border-fc-line shrink-0" alt="${p.name}" />
    <div>
      <div class="font-display font-semibold">${p.name}</div>
      <div class="text-sm text-fc-slate/60">${priceLabel}</div>
    </div>
  </div>
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium mb-1.5">Quantity</label>
      <div class="flex items-center gap-3">
        <button data-qty="dec" type="button" class="w-9 h-9 rounded-lg border border-fc-line flex items-center justify-center hover:border-fc-green">−</button>
        <span class="w-8 text-center font-medium" id="qty-value">${state.quantity}</span>
        <button data-qty="inc" type="button" class="w-9 h-9 rounded-lg border border-fc-line flex items-center justify-center hover:border-fc-green">+</button>
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium mb-1.5">Selected Configuration</label>
      <select data-field="configuration" class="w-full border border-fc-line rounded-xl px-4 py-2.5 text-sm outline-none focus:border-fc-green">
        ${p.specifications.map(s => `<option value="${s.label}: ${s.value}" ${state.configuration === `${s.label}: ${s.value}` ? 'selected' : ''}>${s.label}: ${s.value}</option>`).join('')}
      </select>
    </div>
  </div>`;
}

function stepPayment() {
  if (state.paymentStage === 'demo-processing') {
    return `
    <div class="flex flex-col items-center justify-center py-10 text-center">
      <div class="w-10 h-10 border-4 border-fc-green/20 border-t-fc-green rounded-full animate-spin mb-4"></div>
      <p class="text-sm text-fc-slate/60">Processing demo payment…</p>
    </div>`;
  }
  if (state.paymentStage === 'demo-done') {
    return `
    <div class="flex flex-col items-center justify-center py-6 text-center">
      <div class="w-14 h-14 rounded-full bg-fc-greenlight flex items-center justify-center mb-4">
        <i data-lucide="check" class="w-7 h-7 text-fc-green"></i>
      </div>
      <p class="font-display font-semibold mb-1">Demo Payment Complete</p>
      <p class="text-sm text-fc-slate/60">This is a simulated payment — no real transaction has occurred.</p>
    </div>`;
  }
  if (state.paymentStage === 'visit') {
    return `
    <div class="text-center py-6">
      <div class="w-14 h-14 rounded-full bg-fc-greenlight flex items-center justify-center mx-auto mb-4">
        <i data-lucide="map-pin" class="w-7 h-7 text-fc-green"></i>
      </div>
      <p class="font-display font-semibold mb-1">Prefer to visit us?</p>
      <p class="text-sm text-fc-slate/60 mb-4">We'll hold your purchase code and confirm details when you visit.</p>
      <a href="#/about" class="inline-block text-sm font-medium border border-fc-line rounded-xl px-4 py-2 hover:border-fc-green hover:text-fc-green">View Company Details</a>
    </div>`;
  }
  const methods = [
    { id: 'Cash on Delivery', icon: 'banknote', desc: 'Pay when your product is delivered.' },
    { id: 'Online Payment', icon: 'credit-card', desc: 'Secure online payment.' },
    { id: 'Visit the Company', icon: 'map-pin', desc: 'Prefer to visit us?' },
  ];
  return `
  <div class="space-y-3">
    ${methods.map(m => `
      <button type="button" data-payment="${m.id}" class="w-full text-left flex items-center gap-4 border rounded-xl p-4 transition-colors ${
        state.paymentMethod === m.id ? 'border-fc-green bg-fc-greenlight/50' : 'border-fc-line hover:border-fc-green/50'
      }">
        <div class="w-10 h-10 rounded-lg bg-white border border-fc-line flex items-center justify-center shrink-0">
          <i data-lucide="${m.icon}" class="w-5 h-5 text-fc-green"></i>
        </div>
        <div class="flex-1">
          <div class="font-medium text-sm">${m.id}</div>
          <div class="text-xs text-fc-slate/60">${m.desc}</div>
        </div>
        <div class="w-5 h-5 rounded-full border-2 ${state.paymentMethod === m.id ? 'border-fc-green bg-fc-green' : 'border-fc-line'} flex items-center justify-center shrink-0">
          ${state.paymentMethod === m.id ? '<div class="w-2 h-2 rounded-full bg-white"></div>' : ''}
        </div>
      </button>`).join('')}
  </div>`;
}

function footerButtons() {
  if (state.step === 4 && state.paymentMethod === 'Online Payment' && state.paymentStage === 'select') {
    return `
    <button data-action="back" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green">Back</button>
    <button data-action="pay-demo" class="flex-1 bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark">Complete Demo Payment</button>`;
  }
  if (state.step === 4 && (state.paymentStage === 'demo-done' || (state.paymentMethod && state.paymentMethod !== 'Online Payment'))) {
    return `
    <button data-action="back" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green">Back</button>
    <button data-action="confirm" class="flex-1 bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark">Confirm Purchase</button>`;
  }
  if (state.step === 4) {
    return `
    <button data-action="back" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green">Back</button>
    <button data-action="next" disabled class="flex-1 bg-fc-green/40 cursor-not-allowed text-white font-medium py-2.5 rounded-xl">Select a payment method</button>`;
  }
  return `
    ${state.step > 1 ? `<button data-action="back" class="flex-1 border border-fc-line font-medium py-2.5 rounded-xl hover:border-fc-green">Back</button>` : `<div class="flex-1"></div>`}
    <button data-action="next" class="flex-1 bg-fc-green text-white font-medium py-2.5 rounded-xl hover:bg-fc-greendark">Continue</button>`;
}

function render() {
  let existing = document.getElementById('getcode-modal-root');
  if (!existing) {
    existing = document.createElement('div');
    existing.id = 'getcode-modal-root';
    document.body.appendChild(existing);
  }
  const body = state.step === 1 ? stepCustomer() : state.step === 2 ? stepAddress() : state.step === 3 ? stepProduct() : stepPayment();

  existing.innerHTML = `
  <div class="fixed inset-0 z-[70] flex items-end sm:items-center justify-center">
    <div class="absolute inset-0 bg-black/50 modal-backdrop" data-close></div>
    <div class="modal-panel relative bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-3xl max-h-[92vh] overflow-y-auto thin-scroll">
      <div class="sticky top-0 bg-white border-b border-fc-line px-6 pt-5 pb-4 flex items-center justify-between">
        <h2 class="font-display font-semibold text-lg">Get Your Farm Craft Purchase Code</h2>
        <button data-close aria-label="Close" class="w-8 h-8 rounded-full hover:bg-fc-offwhite flex items-center justify-center">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>
      <div class="px-6 pt-5">
        ${stepper()}
        ${body}
      </div>
      <div class="px-6 py-5 flex gap-3 mt-2">
        ${footerButtons()}
      </div>
    </div>
  </div>`;
  icons();
  bind(existing);
}

function readFields(container) {
  container.querySelectorAll('[data-field]').forEach(el => {
    const key = el.getAttribute('data-field');
    if (state.step === 1) state.customer[key] = el.value;
    if (state.step === 2) state.address[key] = el.value;
    if (state.step === 3 && key === 'configuration') state.configuration = el.value;
  });
}

function validateStep() {
  if (state.step === 1) {
    const { name, email, mobile } = state.customer;
    if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !mobile.trim()) {
      toast('Please fill in all customer details correctly', { type: 'error' });
      return false;
    }
  }
  if (state.step === 2) {
    const { line1, city, state: st, pincode } = state.address;
    if (!line1.trim() || !city.trim() || !st.trim() || !pincode.trim()) {
      toast('Please complete the delivery address', { type: 'error' });
      return false;
    }
  }
  return true;
}

function bind(root) {
  root.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));

  root.querySelectorAll('[data-qty]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.getAttribute('data-qty');
      state.quantity = Math.max(1, state.quantity + (dir === 'inc' ? 1 : -1));
      root.querySelector('#qty-value').textContent = state.quantity;
    });
  });

  root.querySelectorAll('[data-payment]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.paymentMethod = btn.getAttribute('data-payment');
      state.paymentStage = state.paymentMethod === 'Visit the Company' ? 'visit' : 'select';
      render();
    });
  });

  root.querySelector('[data-action="back"]')?.addEventListener('click', () => {
    if (state.step === 4 && state.paymentStage !== 'select') { state.paymentStage = 'select'; state.paymentMethod = ''; render(); return; }
    state.step = Math.max(1, state.step - 1);
    render();
  });

  root.querySelector('[data-action="next"]')?.addEventListener('click', () => {
    const panel = root.querySelector('.modal-panel');
    readFields(panel);
    if (!validateStep()) return;
    state.step = Math.min(4, state.step + 1);
    render();
  });

  root.querySelector('[data-action="pay-demo"]')?.addEventListener('click', () => {
    state.paymentStage = 'demo-processing';
    render();
    setTimeout(() => { state.paymentStage = 'demo-done'; render(); }, 1100);
  });

  root.querySelector('[data-action="confirm"]')?.addEventListener('click', () => {
    customerService.saveAddress(state.address);
    const order = orderService.create({
      customer: state.customer,
      address: state.address,
      product: { id: state.product.id, name: state.product.name, slug: state.product.slug },
      quantity: state.quantity,
      configuration: state.configuration,
      paymentMethod: state.paymentMethod,
      total: state.product.price ? state.product.price * state.quantity : null,
    });
    closeModal();
    toast('Purchase code generated!');
    window.location.hash = `#/success/${order.orderId}`;
  });
}
