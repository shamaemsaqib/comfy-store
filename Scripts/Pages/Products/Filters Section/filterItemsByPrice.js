import { displayAllProducts } from "../displayAllProducts.js";

const rangeValue = document.querySelector(".range-value");

// Function to Filter  the Products by Price and then display
// Accepts input value and all products array as parameter
export const filterItemsByPrice = (inputValue, products) => {
  // Filtering Products by Comparing input price with product price
  const filteredProducts = products.filter((item) => {
    const {
      fields: { price },
    } = item;

    // Returns true if current product price is less than input price i.e is in range
    //Divinding product price by 100 bcz by defualt price is in cents
    return price / 100 <= inputValue;
  });
  // Adding input value to the specified span to display
  rangeValue.textContent = inputValue;

  // Display the Filtered Products
  displayAllProducts(filteredProducts);
};
