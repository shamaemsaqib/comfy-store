const preloader = document.querySelector(".preloader");
const container = document.querySelector(".main");

// Function to hide the preloader once data is fetched and displayed
export const hidePreloader = () => {
  preloader.classList.add("hide-preloader");
  container.classList.add("show-main");
};
