// Function to add product id to local storage once user clicks on more info option, to be used by single-product.html to display more info about the product
// Takes Event object as parameter
export const addIDtoLocalStorage = (e) => {
  // gets id from selected product
  const id = e.currentTarget.parentElement.parentElement.dataset.productid;
  localStorage.setItem("productid", id);
};
