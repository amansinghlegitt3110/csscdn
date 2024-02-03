// Select all elements with the class "ddropdown-menu"
const dropdownMenus = document.querySelectorAll(".ddropdown-menu");
const toggleNavbar = document.querySelector(".toggle-navbar");
const dropdownClose = document.querySelectorAll(".dropdown-close");
const navMenu = document.querySelector(".nav-menu");

// Add click event listeners to each dropdown menu
dropdownMenus.forEach(function (dropdownMenu) {
  dropdownMenu.previousElementSibling.addEventListener("click", function () {
    if (window.innerWidth < 1050) {
      closeOtherMenus(dropdownMenu);
      dropdownMenu.classList.add("show");
      toggleNavbar.classList.add("hide");
    }
  });
});

dropdownClose.forEach(function (closeButton) {
  closeButton.addEventListener("click", function () {
    if (window.innerWidth < 1050) {
      dropdownMenus.forEach(function (dropdownMenu) {
        dropdownMenu.classList.remove("show");
        toggleNavbar.classList.remove("hide");
      });
    }
  });
});

toggleNavbar.addEventListener("click", function () {
  if (window.innerWidth < 1050) {
    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {
      this.classList.replace("bx-menu", "bx-x");
    } else {
      this.classList.replace("bx-x", "bx-menu");
    }
  }
});

// Function to close other open menus
function closeOtherMenus(currentMenu) {
  dropdownMenus.forEach(function (menu) {
    if (menu !== currentMenu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  });
}
