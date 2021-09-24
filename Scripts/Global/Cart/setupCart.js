// Imports
import { displayCartItem } from "./displayCartItem.js";
import { fetchProducts } from "../fetchProducts.js";
import { singleProductURL } from "../urls.js";
// End of Imports

// Function to get cart details from local storage and dsiplay once page loads
export const setUpCart = () => {
  const cartTotal = document.querySelector(".total-price");
  const cartCount = document.querySelector(".cart-length");

  // Gets data from local storage
  const cartItemIds = JSON.parse(localStorage.getItem("cartItemsID"));
  const totalPrice = localStorage.getItem("cartTotal");
  const cartItemsCount = localStorage.getItem("cartCount");

  // Checks if data is present or not
  if (cartItemIds && totalPrice && cartItemsCount) {
    // Modifies cart total and cart count
    cartTotal.textContent = totalPrice;
    cartCount.textContent = cartItemsCount;

    // fetches from each id from local storage and adds that item to cart
    cartItemIds.forEach(async (item) => {
      // Fetches data
      const { id, count } = item;
      var url = singleProductURL + id;
      const response = await fetchProducts(url);

      // Adds item to cart and increase count of that product by relative count from local storage
      displayCartItem(response, count);
    });
  }
};
