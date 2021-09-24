// Imports
import { productsURL, singleProductURL } from "../urls.js";
import { fetchProducts } from "../fetchProducts.js";
import { openCart } from "./toggleCart.js";
import { displayCartItem } from "./displayCartItem.js";
import { addCartTotalAndCount } from "./addCartTotalAndCount.js";
// End of Imports

const cartItemsContainer = document.querySelector(".cart-items-container");

// Function to add an item to the cart
export const addtoCart = async (e) => {
  // Gets product id from clicked item
  const currentItem = e.currentTarget.parentElement.parentElement;
  const id = currentItem.dataset.productid;

  var alreadyHas = false;
  var formattedPrice;

  // Checks if same product is already present in cart or not
  const cartItems = [...cartItemsContainer.children];
  cartItems.forEach((item) => {
    const itemID = item.dataset.productid;
    // Compares productID with ID of all cart items
    // If true then it will just increment the count of that item by 1
    if (itemID == id) {
      const itemCount = item.querySelector(".item-count");
      const itemPrice = item.querySelector(".item-price");
      itemCount.textContent++;
      // Stores the price of matched item to be added to cart total
      formattedPrice = parseFloat(itemPrice.textContent);
      alreadyHas = true;
    }
  });

  // If item is not already present
  if (!alreadyHas) {
    // Gets url for the product and fetched data of  that product
    var url = singleProductURL + id;
    const response = await fetchProducts(url);

    // Adds a new item to cart
    displayCartItem(response);

    // Stores the product price to be added to cart total
    var {
      fields: { price },
    } = response;
    // Dividing by 100 becuase price fetched is in cents
    formattedPrice = price / 100;
    formattedPrice.toFixed(2);
  }

  // Opens the cart so that users sees the item added
  openCart();

  // Modifies cart total and cart count
  addCartTotalAndCount(formattedPrice, true);
};
