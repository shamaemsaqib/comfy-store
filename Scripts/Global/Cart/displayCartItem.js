// Imports
import { addCartTotalAndCount } from "./addCartTotalAndCount.js";

const cartItemsContainer = document.querySelector(".cart-items-container");

// Function to add an item to the cart
// Takes the product data to be added to cart
// Also takes the count of product to be added in case item is coming from local storage on page load , else it 1 by default
export const displayCartItem = (product, productCount = 1) => {
  // Destructuring data for easier use
  const {
    id: productID,
    fields: {
      price,
      name,
      image: [{ url: imageURL }],
    },
  } = product;

  // Creates a new child of cart items container
  const newItem = document.createElement("article");
  newItem.classList.add("single-cart-item");
  newItem.dataset.productid = productID;

  newItem.innerHTML = `<img src="${imageURL}" alt="${name}" class="cart-item-img" />
                  <div class="cart-item-info">
                    <h3 class="cart-item-title">${name}</h3>
                    <h4 class="cart-item-price">
                $ <span class="item-price">${price / 100}</span>
              </h4>
                    <button class="remove-item-btn">remove</button>
                  </div>
                  <div class="cart-item-count-container">
                    <button class="inc-btn">
                      <i class="fas fa-angle-up"></i>
                    </button>
                    <h4 class="item-count">${productCount}</h4>
                    <button class="dec-btn">
                      <i class="fas fa-angle-down"></i>
                    </button>
                  </div>`;
  cartItemsContainer.appendChild(newItem);

  // Adds fucntionality to increase, decrease count or remove item from cart
  const incBtn = newItem.querySelector(".inc-btn");
  const decBtn = newItem.querySelector(".dec-btn");
  const removeBtn = newItem.querySelector(".remove-item-btn");

  incBtn.addEventListener("click", () => {
    // Adds item price to cart total and increase cart count
    addCartTotalAndCount(price / 100, true);

    // Increases the count of item
    const itemCount = newItem.querySelector(".item-count");
    itemCount.textContent++;
  });
  decBtn.addEventListener("click", () => {
    // Subtracts item price to cart total and decrease cart count
    addCartTotalAndCount(price / 100, false);

    // decreases the count of item
    const itemCount = newItem.querySelector(".item-count");
    itemCount.textContent--;

    // Checks if count is 0, if true it removes the item from the cart
    if (itemCount.textContent == 0) {
      cartItemsContainer.removeChild(newItem);
    }
  });

  removeBtn.addEventListener("click", () => {
    // Gets item price
    const itemPrice = parseFloat(
      newItem.querySelector(".item-price").textContent
    );

    // Gets count of item
    const itemCount = parseInt(
      newItem.querySelector(".item-count").textContent
    );

    // Calculates the total amount to be subtracted from cart total
    let totalPrice = parseFloat((itemPrice * itemCount).toFixed(2));

    // Subtracts cart total and also subtracts cart count by item count
    addCartTotalAndCount(totalPrice, false, itemCount);

    // Removes the item from cart
    cartItemsContainer.removeChild(newItem);
  });
};
