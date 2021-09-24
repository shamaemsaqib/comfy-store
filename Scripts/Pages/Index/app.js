// Imports
import { addCartToLocalStorage } from "../../Global/Cart/addCartToLocalStorage.js";
import { setUpCart } from "../../Global/Cart/setupCart.js";
import { setUpFeaturedProducts } from "./setUpFeaturedProducts.js";
import { productsURL } from "../../Global/urls.js";
// End of Imports

window.addEventListener("DOMContentLoaded", () => {
  //Fetch and Display Featured Products
  setUpFeaturedProducts(productsURL);

  // Get Cart from Local Storage and Display
  setUpCart();
});

// Add Cart Details to Local Storage
window.addEventListener("unload", addCartToLocalStorage);
