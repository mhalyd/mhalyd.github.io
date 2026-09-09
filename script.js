/*
  MHALYD STORE CONFIG
  -------------------------------------------------------
  1) Replace each price and checkoutUrl after creating the product in Stripe.
  2) In Stripe Payment Links, add a REQUIRED dropdown custom field called SIZE
     for T-shirts (S, M, L, XL, etc.).
  3) Enable billing/shipping address collection and shipping rates as needed.
  4) Replace Instagram/TikTok URLs below.
*/

const STORE = {
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
  products: {
    "dulse-001": {
      code: "DULSE / 001",
      title: "DULSE / 001 TEE",
      description: "Heavyweight T-shirt · Black",
      price: "$00.00",
      sizes: "S / M / L / XL",
      checkoutUrl: "",
      artClass: "art-one",
      shape: "shirt"
    },
    "dulse-002": {
      code: "DULSE / 002",
      title: "DULSE / 002 TEE",
      description: "Heavyweight T-shirt · Ash",
      price: "$00.00",
      sizes: "S / M / L / XL",
      checkoutUrl: "",
      artClass: "art-two",
      shape: "shirt alt"
    },
    "dulse-003": {
      code: "DULSE / 003",
      title: "DULSE / 003 CAP",
      description: "Limited cap · Black / Silver",
      price: "$00.00",
      sizes: "ONE SIZE",
      checkoutUrl: "",
      artClass: "art-three",
      shape: "cap"
    }
  }
};

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const dialog = document.getElementById('product-dialog');
const closeDialog = dialog.querySelector('.dialog-close');
const dialogArt = document.getElementById('dialog-art');
const dialogCode = document.getElementById('dialog-code');
const dialogTitle = document.getElementById('dialog-title');
const dialogDescription = document.getElementById('dialog-description');
const dialogPrice = document.getElementById('dialog-price');
const dialogSizes = document.getElementById('dialog-sizes');
const checkoutButton = document.getElementById('checkout-button');
const checkoutStatus = document.getElementById('checkout-status');

function openProduct(id) {
  const p = STORE.products[id];
  if (!p) return;

  dialogCode.textContent = p.code;
  dialogTitle.textContent = p.title;
  dialogDescription.textContent = p.description;
  dialogPrice.textContent = p.price;
  dialogSizes.textContent = p.sizes;
  checkoutStatus.textContent = '';

  dialogArt.className = `dialog-art product-art ${p.artClass}`;
  dialogArt.innerHTML = p.shape.startsWith('cap')
    ? '<span class="cap-shape" aria-hidden="true"></span>'
    : `<span class="shirt-shape ${p.shape.includes('alt') ? 'alt' : ''}" aria-hidden="true"></span>`;

  if (p.checkoutUrl) {
    checkoutButton.href = p.checkoutUrl;
    checkoutButton.removeAttribute('aria-disabled');
  } else {
    checkoutButton.href = '#';
    checkoutButton.setAttribute('aria-disabled', 'true');
  }

  dialog.showModal();
}

document.querySelectorAll('.product-card').forEach(card => {
  const id = card.dataset.product;
  const p = STORE.products[id];
  if (p) card.querySelector('.price').textContent = p.price;
  card.querySelectorAll('.product-image, .quick-view').forEach(btn => btn.addEventListener('click', () => openProduct(id)));
});

closeDialog.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {
  const rect = dialog.getBoundingClientRect();
  const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
  if (!inside) dialog.close();
});

checkoutButton.addEventListener('click', e => {
  if (checkoutButton.getAttribute('aria-disabled') === 'true') {
    e.preventDefault();
    checkoutStatus.textContent = 'Checkout is not connected yet. Add your Stripe Payment Link in script.js.';
  }
});

const newsletterForm = document.getElementById('newsletter-form');
const formStatus = document.getElementById('form-status');
newsletterForm.addEventListener('submit', e => {
  e.preventDefault();
  formStatus.textContent = 'Form ready. Connect it to your email platform before launch.';
});

document.getElementById('instagram-link').href = STORE.instagram;
document.getElementById('tiktok-link').href = STORE.tiktok;
document.getElementById('year').textContent = new Date().getFullYear();
