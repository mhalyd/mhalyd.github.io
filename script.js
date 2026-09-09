/*
  =======================================================
  MHALYD — EDIT HERE
  =======================================================

  IMAGE FILES:
  - hero.png
  - dulse-001.jpeg
  - dulse-002.jpeg
  - dulse-003.jpeg

  Upload all image files to the SAME level as:
  index.html
  styles.css
  script.js
*/

const STORE = {

  /* HERO IMAGE */
  heroImage: "hero.png",

  /* SOCIAL MEDIA */
  instagram: "https://www.instagram.com/mhalydcorp/",
  tiktok: "https://www.tiktok.com/@mhalyd",

  /* PRODUCTS */
  products: {

    "dulse-001": {
      code: "DULSE / 001",
      title: "ABYSSAL RELIQUARY",
      description: "Heavyweight T-shirt · Washed Charcoal",
      price: "$27.99",
      sizes: "S / M / L / XL / XXL",
      image: "dulse-001.jpeg",
      checkoutUrl: "",
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
      shape: "shirt"
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


/*
  =======================================================
  MOBILE MENU
  =======================================================
*/

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    const open = document.body.classList.toggle("menu-open");

    menuButton.setAttribute(
      "aria-expanded",
      String(open)
    );

  });


  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      document.body.classList.remove("menu-open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


/*
  =======================================================
  HERO IMAGE
  =======================================================
*/

const heroArt = document.querySelector(".hero-art");

if (STORE.heroImage && heroArt) {

  heroArt.classList.add("has-photo");

  heroArt.style.backgroundImage =
    `url("${STORE.heroImage}")`;


  /*
    Remove the original abstract hero design
    so only hero.png is visible.
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
  document.getElementById("product-dialog");

const closeDialog =
  dialog
    ? dialog.querySelector(".dialog-close")
    : null;

const dialogArt =
  document.getElementById("dialog-art");

const dialogCode =
  document.getElementById("dialog-code");

const dialogTitle =
  document.getElementById("dialog-title");

const dialogDescription =
  document.getElementById("dialog-description");

const dialogPrice =
  document.getElementById("dialog-price");

const dialogSizes =
  document.getElementById("dialog-sizes");

const checkoutButton =
  document.getElementById("checkout-button");

const checkoutStatus =
  document.getElementById("checkout-status");


/*
  =======================================================
  PRODUCT IMAGE
  =======================================================
*/

function applyProductImage(element, product) {

  if (!element || !product) {
    return;
  }

  element.style.backgroundImage = "";

  element.classList.remove("has-photo");


  if (product.image) {

    element.classList.add("has-photo");

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

  const p = STORE.products[id];

  if (!p || !dialog) {
    return;
  }


  if (dialogCode) {
    dialogCode.textContent = p.code;
  }


  if (dialogTitle) {
    dialogTitle.textContent = p.title;
  }


  if (dialogDescription) {
    dialogDescription.textContent = p.description;
  }


  if (dialogPrice) {
    dialogPrice.textContent = p.price;
  }


  if (dialogSizes) {
    dialogSizes.textContent = p.sizes;
  }


  if (checkoutStatus) {
    checkoutStatus.textContent = "";
  }


  /*
    PRODUCT PHOTO IN POPUP
  */

  if (dialogArt) {

    dialogArt.className =
      `dialog-art product-art ${p.artClass}`;

    applyProductImage(
      dialogArt,
      p
    );


    if (p.image) {

      /*
        Remove fake shirt graphics
        when real photography exists.
      */

      dialogArt.innerHTML = "";

    } else {

      dialogArt.innerHTML =
        `<span class="shirt-shape ${
          p.shape.includes("alt")
            ? "alt"
            : ""
        }" aria-hidden="true"></span>`;

    }

  }


  /*
    CHECKOUT
  */

  if (checkoutButton) {

    if (p.checkoutUrl) {

      checkoutButton.href =
        p.checkoutUrl;

      checkoutButton.removeAttribute(
        "aria-disabled"
      );

    } else {

      checkoutButton.href = "#";

      checkoutButton.setAttribute(
        "aria-disabled",
        "true"
      );

    }

  }


  dialog.showModal();

}


/*
  =======================================================
  PRODUCT CARDS
  =======================================================
*/

document
  .querySelectorAll(".product-card")
  .forEach(card => {

    const id =
      card.dataset.product;

    const p =
      STORE.products[id];


    if (!p) {
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
      title.textContent = p.title;
    }


    if (description) {
      description.textContent =
        p.description;
    }


    if (price) {
      price.textContent = p.price;
    }


    /*
      REAL PRODUCT PHOTO
    */

    if (productImage) {

      applyProductImage(
        productImage,
        p
      );


      if (p.image) {

        /*
          Remove all old fake garment drawings.
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
      OPEN PRODUCT BUTTON
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

if (closeDialog && dialog) {

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
  CHECKOUT
  =======================================================
*/

if (checkoutButton) {

  checkoutButton.addEventListener(
    "click",
    event => {

      if (
        checkoutButton.getAttribute(
          "aria-disabled"
        ) === "true"
      ) {

        event.preventDefault();


        if (checkoutStatus) {

          checkoutStatus.textContent =
            "Online checkout is coming soon.";

        }

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
  SOCIAL LINKS
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
