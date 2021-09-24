const container = document.querySelector(".single-product-container");
const pageTitle = document.querySelector("title");
const bannerTitle = document.querySelector(".banner-product-name");

// Displays the product info to the page
// Takes single product as a parameter
export const displaySingleProduct = (product) => {
  // Destructuring data for easier use
  const {
    id: productID,
    fields: {
      price,
      company,
      name,
      description,
      image: [{ id: imageID, url: imageURL }],
    },
  } = product;

  // Adding product id and details to product container
  container.dataset.productid = productID;
  container.innerHTML = `<div class="product-img-container" data-imageid="${imageID}">
            <img src="${imageURL}" alt="${name}" class="product-image"  data-imageid="${imageID}"/>
          </div>
          <div class="product-info">
            <h1 class="product-title">${name}</h1>
            <h3 class="product-company">by ${company}</h3>
            <h5 class="product-price">$${(price / 100).toFixed(2)}</h5>
            <p class="product-text">${description}</p>
            <button class="addtocart-btn">add to cart</button>`;
  // Changing page title to product name
  pageTitle.innerText = `${name.toUpperCase()} - Comfy`;

  // Changing product name in banner
  bannerTitle.innerText = name;
};
