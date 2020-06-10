// Navbar

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

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".main-header").style.top = "0";
  } else {
    document.querySelector(".main-header").style.top = "-30vh";
  }
  prevScrollpos = currentScrollPos;
};

// Gallery

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});
