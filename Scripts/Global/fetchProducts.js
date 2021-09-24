// Function to fetch data from url and convert that data to json notation
// Takes url from which data is to be fetched as parameter

export const fetchProducts = async (url) => {
  try {
    const data = await fetch(url);
    const products = await data.json();
    return products;
  } catch (err) {
    // In case data cannot be fetched
    console.log(err);
  }
};
