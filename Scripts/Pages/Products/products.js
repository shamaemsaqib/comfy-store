// Imports
import { addCartToLocalStorage } from "../../Global/Cart/addCartToLocalStorage.js";
import { hidePreloader } from "../../Global/hidePreloader.js";
import { setUpAllProducts } from "./setUpAllProducts.js";
import { setUpCart } from "../../Global/Cart/setupCart.js";
import { productsURL } from "../../Global/urls.js";
// End of Imports

window.addEventListener("DOMContentLoaded", async () => {
  // Fetch and Display All Products
  await setUpAllProducts(productsURL);

  // Hide PreLoader once all data is fetched
  hidePreloader();

  // Get Cart from Local Storage and Display
  setUpCart();
});

// Add Cart Details to Local Storage
window.addEventListener("unload", addCartToLocalStorage);
