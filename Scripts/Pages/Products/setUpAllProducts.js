// Imports
import { fetchProducts } from "../../Global/fetchProducts.js";
import { displayAllProducts } from "./displayAllProducts.js";
import { filterItemsByNames } from "./Filters Section/filterItemsByNames.js";
import { filterItemsByCompany } from "./Filters Section/filterItemsByCompany.js";
import { filterItemsByPrice } from "./Filters Section/filterItemsByPrice.js";
// End of Imports

// Function to Fetch Products, Display and adding funtionality to  Add to Cart and Viewing More Info for each product
export const setUpAllProducts = async (url) => {
  // Fetching Products
  const products = await fetchProducts(url);

  // Displaying Products
  displayAllProducts(products);

  // Adding Filter Functionality

  // Filter Items by Names
  const searchInput = document.querySelector("#search-input");
  searchInput.addEventListener("keyup", () => {
    filterItemsByNames(searchInput, products);
  });

  // Filter Items by Company Name
  const companyList = document.querySelector(".company-list");
  companyList.addEventListener("click", (e) => {
    filterItemsByCompany(e, products);
  });

  // Filter Items by Price Range
  const rangeInput = document.getElementById("range-input");
  rangeInput.addEventListener("input", () => {
    filterItemsByPrice(rangeInput.value, products);
  });
};
