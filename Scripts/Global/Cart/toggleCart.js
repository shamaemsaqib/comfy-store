const cartBtn = document.querySelector(".cart-btn");
const cartSection = document.querySelector(".cart-section");

// Function to opem cart overlay when a new item is added to cart
export const openCart = () => {
  // Shows cart
  cartSection.classList.add("show-cart");

  // Add event listener to close the cart overlay
  const cartCloseBtn = cartSection.querySelector(".cart-close-btn");
  cartCloseBtn.addEventListener("click", () => {
    cartSection.classList.remove("show-cart");
  });
};

// opens cart overlay when user clicks on cart icon
cartBtn.addEventListener("click", () => {
  openCart();
});
