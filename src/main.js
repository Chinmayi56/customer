import { header, footer, mobileTabBar, icons, initRevealObserver, attachHeaderBehaviour, skeletonCard, toast } from './components.js';
import {
  loginPage, attachLoginPage,
  homePage,
  shopPage, attachShopPage,
  productDetailPage, attachProductDetailPage,
  wishlistPage,
  ordersPage, orderDetailPage, successOrderCard, attachOrderCardPage,
  profilePage, attachProfilePage,
  aboutPage,
  servicesPage,
  contactPage, attachContactPage,
} from './pages.js';
import { authService, orderService, customerService } from './services.js';
import { openGetCodeModal } from './getCodeModal.js';
import { mountHelpWidget } from './helpWidget.js';

const app = document.getElementById('app');

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const [path, queryString] = raw.split('?');
  const params = Object.fromEntries(new URLSearchParams(queryString || ''));
  return { path: path.replace(/\/$/, '') || '/', params };
}

const NO_CHROME = new Set(['/login']);

function layout(contentHtml, { chrome = true } = {}) {
  if (!chrome) return contentHtml;
  return `${header()}<main class="min-h-[60vh]">${contentHtml}</main>${footer()}${mobileTabBar()}`;
}

function render({ resetScroll = true } = {}) {
  const { path, params } = parseHash();
  if (resetScroll) {
    window.scrollTo({ top: 0, behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' });
  }

  let content = '';
  let after = null;
  const showChrome = !NO_CHROME.has(path);

  if (path === '/login') {
    content = loginPage();
    after = () => attachLoginPage(render);
  } else if (path === '/' ) {
    content = homePage();
    after = () => initRevealObserver();
  } else if (path === '/shop') {
    content = shopPage(params);
    after = () => attachShopPage(params);
  } else if (path.startsWith('/product/')) {
    const slug = path.replace('/product/', '');
    content = productDetailPage(slug);
    after = () => attachProductDetailPage();
  } else if (path === '/wishlist') {
    content = wishlistPage();
  } else if (path === '/orders') {
    content = ordersPage();
    after = () => attachOrderCardPage();
  } else if (path.startsWith('/order/')) {
    const id = path.replace('/order/', '');
    content = orderDetailPage(id);
    after = () => attachOrderCardPage();
  } else if (path.startsWith('/success/')) {
    const id = path.replace('/success/', '');
    const order = orderService.byId(id);
    content = order ? successOrderCard(order) : `<div class="max-w-xl mx-auto px-4 py-24 text-center">Order not found.</div>`;
    after = () => attachOrderCardPage();
  } else if (path === '/profile') {
    content = profilePage();
    after = () => attachProfilePage();
  } else if (path === '/about') {
    content = aboutPage();
  } else if (path === '/services') {
    content = servicesPage();
    after = () => initRevealObserver();
  } else if (path === '/contact') {
    content = contactPage();
    after = () => attachContactPage();
  } else {
    content = `<div class="max-w-xl mx-auto px-4 py-32 text-center">
      <h1 class="font-display text-2xl font-semibold mb-2">Page not found</h1>
      <a href="#/" class="text-fc-green font-medium">Back to Home</a>
    </div>`;
  }

  app.innerHTML = layout(content, { chrome: showChrome });
  icons();
  if (showChrome) attachHeaderBehaviour(render);
  if (after) after();
  bindGlobalDelegates();
}

// Delegated handlers for controls that appear inside dynamically-rendered
// HTML strings across many pages (product cards, detail page, etc).
function bindGlobalDelegates() {
  app.querySelectorAll('[data-getcode]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openGetCodeModal(btn.getAttribute('data-getcode'));
    });
  });
  app.querySelectorAll('[data-wishlist]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); e.stopPropagation();
      const id = btn.getAttribute('data-wishlist');
      const nowIn = customerService.toggleWishlist(id).includes(id);
      toast(nowIn ? 'Added to wishlist' : 'Removed from wishlist');
      // Re-render in place (no scroll jump) so every heart icon, the header
      // badge, the mobile tab bar count and the wishlist page itself stay
      // in sync immediately.
      render({ resetScroll: false });
    });
  });
}

window.addEventListener('hashchange', () => render());
window.addEventListener('DOMContentLoaded', () => render());
render();
mountHelpWidget(); // mounted once, independent of the router — persists across page navigations
