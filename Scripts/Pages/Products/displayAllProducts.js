// Imports
import { addIDtoLocalStorage } from "../../Global/addIDtoLocalStorage.js";
import { addtoCart } from "../../Global/Cart/addtoCart.js";
// End of Imports

// Function to Display All Products to the Products Container
export const displayAllProducts = (products) => {
  const container = document.querySelector(".products-container");

  // Adding a condition to be Used to display filtered products
  if (products.length !== 0) {
    container.style.display = "grid";
    container.innerHTML = products
      .map((item) => {
        // Destructuring Data for easier use
        const {
          id: productID,
          fields: {
            price,
            name,
            image: [{ id: imageID, url: imageURL }],
          },
        } = item;
        // Adding Single Product
        return `<article class="single-product" data-productID=${productID}>
          <img src="${imageURL}" alt="${name}" class="product-image" data-imageID=${imageID} />
          <h3 class="product-title">${name}</h3>
          <h5 class="product-price">$${(price / 100).toFixed(2)}</h5>
          <div class="product-options">
            <a href="./single-product.html" class="product-link">
              <button class="product-details">
                <i class="fas fa-search"></i>
              </button>
            </a>
            <button class="product-addtocart">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </article>`;
      })
      .join("");
  }
  // If no Product available than display the Message
  else {
    container.style.display = "block";
    container.innerHTML = `<h1>sorry, no items matched your result`;
  }

  // Adding funtionality to view More info about the single product
  const singleProductLinkBtns = [...document.querySelectorAll(".product-link")];
  singleProductLinkBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Adds productID to Local Storage to be used by single-product.html
      addIDtoLocalStorage(e);
    });
  });

  // Adding funtionality to Add Product to Cart
  const addtoCartBtns = [...document.querySelectorAll(".product-addtocart")];
  addtoCartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      addtoCart(e);
    });
  });
};
