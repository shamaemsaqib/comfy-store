// Imports
import { displayAllProducts } from "../displayAllProducts.js";

// Function to Filter the Products by Company Name and then display
// Accepts event object and all products array as parameter
export const filterItemsByCompany = (e, products) => {
  // Adding a Condition so that it only works when a company name is clicked this fucntion works
  if (e.target.classList.contains("single-company-name")) {
    // Selected Company Name
    const companyName = e.target.textContent;

    // If users clicks on "All" then all Products are displayed otherwise filter products
    if (companyName !== "all") {
      // Filtering Products by Comparing product company with selected Company
      const filteredProducts = products.filter((item) => {
        const {
          fields: { company },
        } = item;
        // Returns true if Selected Company Name matches the current Product Company name
        return company === companyName;
      });

      // Display the Filtered Products
      displayAllProducts(filteredProducts);
    } else displayAllProducts(products);
  }
};
