const navToggle = document.querySelector(".nav-toggle");
const sidebarContainer = document.querySelector(".nav-sidebar-container");

// Function to show nav links when user clicks on Nav Toggle Button on smaller screens
navToggle.addEventListener("click", () => {
  // Shows the links
  sidebarContainer.classList.add("show-sidebar");

  // Add event Listener to close the nav links
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () =>
    sidebarContainer.classList.remove("show-sidebar")
  );
});
