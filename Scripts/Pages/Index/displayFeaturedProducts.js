// Function to Display Featured Products to index.html

export const displayFeaturedProducts = (products) => {
  const container = document.querySelector(".featured-products");

  // Adding All Products to Products Container
  container.innerHTML = products
    .map((item) => {
      // Deconstructing Data for Easier Use
      const {
        id: productID,
        fields: {
          price,
          name,
          image: [{ id: imageID, url: imageURL }],
        },
      } = item;
      // Adding Single Featured Product
      return `<article class="single-featured-product" data-productid=${productID}>
          <img src="${imageURL}" alt="${name}" class="product-image" data-imageid=${imageID} />
          <h3 class="product-title">${name}</h3>
          <h5 class="product-price">$${(price / 100).toFixed(2)}</h5>
          <div class="product-options">
            <a href="./single-product.html" class="product-link">
              <button class="product-details">
                <i class="fas fa-search"></i>
              </button>
            </a>
            <button class="product-addtocart">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </article>`;
    })
    .join("");
};
