// Imports
import { addIDtoLocalStorage } from "../../Global/addIDtoLocalStorage.js";
import { addtoCart } from "../../Global/Cart/addtoCart.js";
import { displayFeaturedProducts } from "./displayFeaturedProducts.js";
import { fetchProducts } from "../../Global/fetchProducts.js";
// End of Imports

// Function to Fetch Products, Display and adding funtionality to  Add to Cart and Viewing More Info for each product
export const setUpFeaturedProducts = async (url) => {
  // Fetching Products
  const products = await fetchProducts(url);

  // Filtering Featured Products from all Products
  const featuredProducts = products.filter((item) => {
    const {
      fields: { featured },
    } = item;
    return featured;
  });

  // Displaying only Featured Productss
  displayFeaturedProducts(featuredProducts);

  // Adding funtionality to view More info about the single product
  const singleProductLinkBtns = [...document.querySelectorAll(".product-link")];
  singleProductLinkBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Adds productID to Local Storage to be used by single-product.html
      addIDtoLocalStorage(e);
    });
  });

  // Adding funtionality to Add Product to Cart
  const addtoCartBtns = [...document.querySelectorAll(".product-addtocart")];
  addtoCartBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      addtoCart(e);
    });
  });
};
