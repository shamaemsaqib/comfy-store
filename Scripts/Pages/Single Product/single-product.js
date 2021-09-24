// Imports
import { addCartToLocalStorage } from "../../Global/Cart/addCartToLocalStorage.js";
import { addtoCart } from "../../Global/Cart/addtoCart.js";
import { setUpCart } from "../../Global/Cart/setupCart.js";
import { displaySingleProduct } from "./displaySingleProduct.js";
import { fetchProducts } from "../../Global/fetchProducts.js";
import { hidePreloader } from "../../Global/hidePreloader.js";
import { singleProductURL } from "../../Global/urls.js";
// End of Imports

window.addEventListener("DOMContentLoaded", async () => {
  // Gets the productID from Local Storage and concatenates it to single product URL
  const productid = localStorage.getItem("productid");
  const url = singleProductURL + productid;

  // Fetch Product Specific Data
  const product = await fetchProducts(url);

  // Display Data
  displaySingleProduct(product);

  // Hide the PreLoader once data is fetched and displayed
  hidePreloader();

  // Gets cart details from local storage and displays cart items
  setUpCart();

  // Adding functionality to add product to cart
  const addtoCartBtn = document.querySelector(".addtocart-btn");
  addtoCartBtn.addEventListener("click", addtoCart);
});

// Add Cart Details to Local Storage
window.addEventListener("unload", addCartToLocalStorage);
