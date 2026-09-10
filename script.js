/*
  =======================================================
  MHALYD — STORE CONFIG
  =======================================================

  IMAGE FILES:
  - hero.png
  - dulse-001.jpeg
  - dulse-002.jpeg
  - dulse-003.jpeg

  PRE-ORDER:
  Opens September 10, 2026
  Official release November 15, 2026
  Limited quantities
*/

const STORE = {

  /* =====================================================
     BRAND / PRE-ORDER
     ===================================================== */

  heroImage: "hero.png",

  instagram: "https://www.instagram.com/mhalydcorp/",
  tiktok: "https://www.tiktok.com/@mhalyd",
  email: "Mhalyd@proton.me",

  whatsappNumber: "19392628824",

  collection: "DULSE / COLLECTION 001",
  preorderStart: "September 10, 2026",
  releaseDate: "November 15, 2026",
  limitedQuantities: true,


  /* =====================================================
     PRODUCTS
     ===================================================== */

  products: {

    "dulse-001": {
      code: "DULSE / 001",
      title: "ABYSSAL RELIQUARY",
      description: "Heavyweight T-shirt · Washed Charcoal",
      price: "$27.99",
      sizes: "S / M / L / XL / XXL",
      image: "dulse-001.jpeg",

      /* Stripe test link saved for later */
      stripePaymentUrl:
        "https://buy.stripe.com/test_fZu00kaWO4bhaZmgqAgIo00",

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

      /* Stripe test link saved for later */
      stripePaymentUrl:
        "https://buy.stripe.com/test_7sY4gA0iabDJgjGdeogIo01",

      artClass: "art-two",
      shape: "shirt"
    },


    "dulse-003": {
      code: "DULSE / 003",
      title: "PALE MERIDIAN",
      description: "Heavyweight T-shirt · Bone",
      price: "$27.99",
      sizes: "S / M / L / XL / XXL",
      image: "dulse-003.jpeg",

      /* Stripe test link saved for later */
      stripePaymentUrl:
        "https://buy.stripe.com/test_4gMfZi2qi2392sQa2cgIo02",

      artClass: "art-three",
      shape: "shirt"
    }

  }
};


/*
  =======================================================
  WHATSAPP PRE-ORDER LINK
  =======================================================
*/

function buildWhatsAppUrl(product) {

  const message =
`Hi MHALYD, I'd like to pre-order ${product.title} from ${STORE.collection}.

Price: ${product.price}
Size:
Quantity: 1

I understand that this is a limited pre-order and the official release date is ${STORE.releaseDate}.`;

  return `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}


/*
  =======================================================
  PRE-ORDER ANNOUNCEMENT
  =======================================================
*/

const announcement =
  document.querySelector(".announcement");

if (announcement) {

  announcement.textContent =
    `PRE-ORDER NOW OPEN — ${STORE.collection} — OFFICIAL RELEASE ${STORE.releaseDate.toUpperCase()} — LIMITED QUANTITIES`;
}


/*
  =======================================================
  PRE-ORDER BANNER
  =======================================================
*/

const heroSection =
  document.querySelector(".hero");

if (
  heroSection &&
  !document.querySelector(".preorder-banner")
) {

  const preorderBanner =
    document.createElement("section");

  /*
    Uses the existing manifesto styling
    so it stays consistent with MHALYD.
  */
  preorderBanner.className =
    "manifesto preorder-banner";

  preorderBanner.innerHTML = `
    <p>PRE-ORDER / NOW OPEN</p>

    <h2>
      DULSE / COLLECTION 001<br>
      RELEASES NOVEMBER 15, 2026
    </h2>

    <div class="manifesto-grid">

      <p>
        Pre-orders are open beginning September 10, 2026.
        Secure your piece before the official release.
      </p>

      <p>
        This collection is available in limited quantities.
        Once the allocated pre-order inventory is reserved,
        availability may close before release day.
      </p>

    </div>
  `;

  heroSection.insertAdjacentElement(
    "afterend",
    preorderBanner
  );
}


/*
  =======================================================
  MOBILE MENU
  =======================================================
*/

const menuButton =
  document.querySelector(".menu-button");

const nav =
  document.querySelector(".site-nav");

if (menuButton && nav) {

  menuButton.addEventListener(
    "click",
    () => {

      const open =
        document.body.classList.toggle(
          "menu-open"
        );

      menuButton.setAttribute(
        "aria-expanded",
        String(open)
      );
    }
  );


  nav
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          document.body.classList.remove(
            "menu-open"
          );

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );
        }
      );
    });
}


/*
  =======================================================
  HERO IMAGE
  =======================================================
*/

const heroArt =
  document.querySelector(
    ".hero-art"
  );

if (
  STORE.heroImage &&
  heroArt
) {

  heroArt.classList.add(
    "has-photo"
  );

  heroArt.style.backgroundImage =
    `url("${STORE.heroImage}")`;


  /*
    Remove original abstract hero elements
    so only hero.png remains.
  */

  heroArt
    .querySelectorAll(
      ".orb, .metal-mark, .vertical-copy"
    )
    .forEach(element => {

      element.remove();
    });
}


/*
  =======================================================
  PRODUCT DIALOG
  =======================================================
*/

const dialog =
  document.getElementById(
    "product-dialog"
  );

const closeDialog =
  dialog
    ? dialog.querySelector(
        ".dialog-close"
      )
    : null;

const dialogArt =
  document.getElementById(
    "dialog-art"
  );

const dialogCode =
  document.getElementById(
    "dialog-code"
  );

const dialogTitle =
  document.getElementById(
    "dialog-title"
  );

const dialogDescription =
  document.getElementById(
    "dialog-description"
  );

const dialogPrice =
  document.getElementById(
    "dialog-price"
  );

const dialogSizes =
  document.getElementById(
    "dialog-sizes"
  );

const checkoutButton =
  document.getElementById(
    "checkout-button"
  );

const checkoutStatus =
  document.getElementById(
    "checkout-status"
  );

const checkoutNote =
  document.querySelector(
    ".checkout-note"
  );


/*
  =======================================================
  PRODUCT IMAGE FUNCTION
  =======================================================
*/

function applyProductImage(
  element,
  product
) {

  if (
    !element ||
    !product
  ) {
    return;
  }

  element.style.backgroundImage =
    "";

  element.classList.remove(
    "has-photo"
  );


  if (product.image) {

    element.classList.add(
      "has-photo"
    );

    element.style.backgroundImage =
      `url("${product.image}")`;
  }
}


/*
  =======================================================
  OPEN PRODUCT
  =======================================================
*/

function openProduct(id) {

  const product =
    STORE.products[id];

  if (
    !product ||
    !dialog
  ) {
    return;
  }


  /*
    PRODUCT INFORMATION
  */

  if (dialogCode) {

    dialogCode.textContent =
      product.code;
  }


  if (dialogTitle) {

    dialogTitle.textContent =
      product.title;
  }


  if (dialogDescription) {

    dialogDescription.textContent =
      product.description;
  }


  if (dialogPrice) {

    dialogPrice.textContent =
      product.price;
  }


  if (dialogSizes) {

    dialogSizes.textContent =
      product.sizes;
  }


  if (checkoutStatus) {

    checkoutStatus.textContent =
      "";
  }


  /*
    PRE-ORDER INFORMATION
  */

  if (checkoutNote) {

    checkoutNote.textContent =
      `Pre-order now. Official release: ${STORE.releaseDate}. Limited quantities available.`;
  }


  /*
    PRODUCT PHOTO IN POPUP
  */

  if (dialogArt) {

    dialogArt.className =
      `dialog-art product-art ${product.artClass}`;


    applyProductImage(
      dialogArt,
      product
    );


    if (product.image) {

      /*
        Remove fake shirt artwork
        because we have a real product image.
      */

      dialogArt.innerHTML =
        "";

    } else {

      dialogArt.innerHTML =
        `<span class="shirt-shape ${
          product.shape.includes("alt")
            ? "alt"
            : ""
        }" aria-hidden="true"></span>`;
    }
  }


  /*
    WHATSAPP PRE-ORDER
  */

  if (checkoutButton) {

    checkoutButton.href =
      buildWhatsAppUrl(product);

    checkoutButton.removeAttribute(
      "aria-disabled"
    );

    checkoutButton.textContent =
      "PRE-ORDER VIA WHATSAPP";

    checkoutButton.setAttribute(
      "target",
      "_blank"
    );

    checkoutButton.setAttribute(
      "rel",
      "noreferrer"
    );
  }


  /*
    OPEN POPUP
  */

  dialog.showModal();
}


/*
  =======================================================
  PRODUCT CARDS
  =======================================================
*/

document
  .querySelectorAll(
    ".product-card"
  )
  .forEach(card => {

    const id =
      card.dataset.product;

    const product =
      STORE.products[id];


    if (!product) {
      return;
    }


    const title =
      card.querySelector(
        ".product-meta h3"
      );


    const description =
      card.querySelector(
        ".product-meta div p"
      );


    const price =
      card.querySelector(
        ".price"
      );


    const productImage =
      card.querySelector(
        ".product-image"
      );


    /*
      PRODUCT TEXT
    */

    if (title) {

      title.textContent =
        product.title;
    }


    if (description) {

      description.textContent =
        product.description;
    }


    if (price) {

      price.textContent =
        product.price;
    }


    /*
      REAL PRODUCT PHOTO
    */

    if (productImage) {

      applyProductImage(
        productImage,
        product
      );


      if (product.image) {

        /*
          Remove old placeholder garment shapes.
        */

        productImage
          .querySelectorAll(
            ".shirt-shape, .cap-shape"
          )
          .forEach(element => {

            element.remove();
          });
      }
    }


    /*
      OPEN PRODUCT
    */

    card
      .querySelectorAll(
        ".product-image, .quick-view"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => openProduct(id)
        );
      });
  });


/*
  =======================================================
  CLOSE PRODUCT DIALOG
  =======================================================
*/

if (
  closeDialog &&
  dialog
) {

  closeDialog.addEventListener(
    "click",
    () => {

      dialog.close();
    }
  );


  dialog.addEventListener(
    "click",
    event => {

      const rect =
        dialog.getBoundingClientRect();


      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;


      if (!inside) {

        dialog.close();
      }
    }
  );
}


/*
  =======================================================
  NEWSLETTER
  =======================================================
*/

const newsletterForm =
  document.getElementById(
    "newsletter-form"
  );

const formStatus =
  document.getElementById(
    "form-status"
  );


if (newsletterForm) {

  newsletterForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      if (formStatus) {

        formStatus.textContent =
          "Thank you for entering the MHALYD archive.";
      }
    }
  );
}


/*
  =======================================================
  SOCIAL LINKS / EMAIL
  =======================================================
*/

const instagramLink =
  document.getElementById(
    "instagram-link"
  );

const tiktokLink =
  document.getElementById(
    "tiktok-link"
  );


if (instagramLink) {

  instagramLink.href =
    STORE.instagram;
}


if (tiktokLink) {

  tiktokLink.href =
    STORE.tiktok;
}


/*
  Keeps every email link synced
  with the official MHALYD email.
*/

document
  .querySelectorAll(
    'a[href^="mailto:"]'
  )
  .forEach(link => {

    link.href =
      `mailto:${STORE.email}`;
  });


/*
  =======================================================
  COPYRIGHT YEAR
  =======================================================
*/

const year =
  document.getElementById(
    "year"
  );


if (year) {

  year.textContent =
    new Date().getFullYear();
}
