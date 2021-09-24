const cartTotal = document.querySelector(".total-price");
const cartCount = document.querySelector(".cart-length");

// Function to add or subtract from the cart total price and total cart count once an item is added or removed or increased or decreased from the cart
// Takes amount to be added or subtracted, a flag which is true if amount is to be added and number to which count will be increased or decreased which is 1 by defualt
export const addCartTotalAndCount = (amount, add, countvalue = 1) => {
  // Gets current total of cart
  var total = parseFloat(cartTotal.textContent);

  // if user passes true then item will be added and if passes false item will be decreased
  if (add) {
    total += amount;
    // Gets current count of cart
    let currentCount = parseInt(cartCount.textContent);

    currentCount += countvalue;

    // Changes cart count
    cartCount.textContent = currentCount;
  } else {
    total -= amount;

    // Gets current count of cart
    var currentCount = parseInt(cartCount.textContent);
    currentCount -= countvalue;

    // Changes cart count
    cartCount.textContent = currentCount;
  }
  total = total.toFixed(2);

  // Changes cart total price
  cartTotal.innerText = total;
};
