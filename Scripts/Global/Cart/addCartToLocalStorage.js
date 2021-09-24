// Function to add cart to local storage to be used on all pages of the website
// It gets the productId, product count, total cart price, total cart count and add it to local storage

export const addCartToLocalStorage = () => {
  const cartItems = [
    ...document.querySelector(".cart-items-container").children,
  ];

  // Stores the IDs of all cart items
  var cartItemIDs = cartItems.map((item) => {
    return {
      id: item.dataset.productid,
      count: parseInt(item.querySelector(".item-count").textContent),
    };
  });
  // Stores IDs
  localStorage.setItem("cartItemsID", JSON.stringify(cartItemIDs));

  // Stores total price of cart
  localStorage.setItem(
    "cartTotal",
    `${document.querySelector(".total-price").textContent}`
  );

  // Stores total number of items in cart
  localStorage.setItem(
    "cartCount",
    `${document.querySelector(".cart-length").textContent}`
  );
};
