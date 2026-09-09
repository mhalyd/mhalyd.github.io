/*
  =======================================================
  MHALYD — EDIT HERE
  =======================================================
  This top block is the only place you normally need to edit.

  PHOTO FILENAMES:
  - hero.jpg
  - dulse-001.jpeg
  - dulse-002.jpeg
  - dulse-003.jpeg

  Upload those image files to the SAME level as index.html.
  If an image field is left blank, the original abstract artwork remains.
*/

const STORE = {
  heroImage: "", // Example: "hero.jpg"

  instagram: "https://www.instagram.com/mhalydcorp/",
  tiktok: "https://www.tiktok.com/@mhalyd",

  products: {
    "dulse-001": {
      code: "DULSE / 001",
      title: "ABYSSAL RELIQUARY",
      description: "Heavyweight T-shirt · Washed Charcoal",
      price: "$27.99",
      sizes: "S / M / L / XL / XXL",
      image: "dulse-001.jpeg",
      checkoutUrl: "", // Paste Stripe Payment Link here later
      artClass: "art-one",
      shape: "shirt"
    },

    "dulse-002": {
      code: "DULSE / 002",
      title: "DROWNED THORN",
      description: "Heavyweight T-shirt · Black",
      price: "$27.99",
      sizes: "S / M / L / XL / XXL",
      image: "dulse-002.jpeg",
      checkoutUrl: "",
      artClass: "art-two",
      shape: "shirt alt"
    },

    "dulse-003": {
      code: "DULSE / 003",
      title: "PALE MERIDIAN",
      description: "Heavyweight T-shirt · Bone",
      price: "$27.99",
      sizes: "S / M / L / XL / XXL",
      image: "dulse-003.jpeg",
      checkoutUrl: "",
      artClass: "art-three",
      shape: "shirt"
    }
  }
};

/* Everything below this line powers the storefront. */

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

// Optional hero photo
const heroArt = document.querySelector('.hero-art');
if (STORE.heroImage && heroArt) {
  heroArt.classList.add('has-photo');
  heroArt.style.backgroundImage = `url("${STORE.heroImage}")`;
}

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

function applyProductImage(element, product) {
  element.style.backgroundImage = '';
  element.classList.remove('has-photo');

  if (product.image) {
    element.classList.add('has-photo');
    element.style.backgroundImage = `url("${product.image}")`;
  }
}

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
  applyProductImage(dialogArt, p);

  if (p.image) {
    dialogArt.innerHTML = '';
  } else {
    dialogArt.innerHTML = p.shape.startsWith('cap')
      ? '<span class="cap-shape" aria-hidden="true"></span>'
      : `<span class="shirt-shape ${p.shape.includes('alt') ? 'alt' : ''}" aria-hidden="true"></span>`;
  }

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
  if (!p) return;

  const title = card.querySelector('.product-meta h3');
  const description = card.querySelector('.product-meta div p');
  const price = card.querySelector('.price');
  const productImage = card.querySelector('.product-image');

  if (title) title.textContent = p.title;
  if (description) description.textContent = p.description;
  if (price) price.textContent = p.price;
  if (productImage) applyProductImage(productImage, p);

  card.querySelectorAll('.product-image, .quick-view').forEach(btn =>
    btn.addEventListener('click', () => openProduct(id))
  );
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
