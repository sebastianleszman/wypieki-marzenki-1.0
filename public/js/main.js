const menuToggleBtn = document.querySelector(".main-header__nav-toggle-btn");
const mainNav = document.querySelector(".main-header__nav");

function menuToggleClickHandler() {
  mainNav.classList.toggle("menu--active");
  menuToggleBtn.classList.toggle("hamburger--active");
}

menuToggleBtn.addEventListener("click", menuToggleClickHandler);

document.addEventListener("keydown", function (event) {
  if (mainNav.classList.contains("menu--active")) {
    if (event.key === "Escape") {
      mainNav.classList.remove("menu--active");
      menuToggleBtn.classList.remove("hamburger--active");
    }
  }
});
