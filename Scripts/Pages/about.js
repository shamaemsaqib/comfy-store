// Imports
import { setUpCart } from "../Global/Cart/setupCart.js";
import { addCartToLocalStorage } from "../Global/Cart/addCartToLocalStorage.js";
// End of Imports

// Gets cart details from local storage and displays it on page load
window.addEventListener("DOMContentLoaded", setUpCart);

// Add Cart Details to Local Storage
window.addEventListener("unload", addCartToLocalStorage);
