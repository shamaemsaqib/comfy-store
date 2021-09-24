// Imports
import { displayAllProducts } from "../displayAllProducts.js";

// Function to Filter the Products by Name and then display
// Accepts user input and all products array as parameter
export const filterItemsByNames = (input, products) => {
  // Filtering Products by Comparing start of product name with user input
  const filteredProducts = products.filter((item) => {
    const {
      fields: { name },
    } = item;

    // Returns true if current product name starts with user input
    return name.startsWith(input.value);
  });

  // Display the Filtered Products
  displayAllProducts(filteredProducts);
};
