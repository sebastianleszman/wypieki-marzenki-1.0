// header //

const mainHeader = document.querySelector('.nav-scroll');
let scrollBottom = document.documentElement.scrollHeight;
let last = 0;

window.addEventListener('scroll', function () {
  let scroll = document.documentElement.scrollTop;

  if (scroll > -1 && scroll < scrollBottom - 1) {
    if (scroll > last) {
      mainHeader.classList.add('hide');
    } else {
      mainHeader.classList.remove('hide');
    }
    last = scroll;
  }
});

// Navbar

const menuToggleBtn = document.querySelector('.main-header__nav-toggle-btn');
const mainNav = document.querySelector('.main-header__nav');

function menuToggleClickHandler(e) {
  e.stopPropagation();
  mainNav.classList.toggle('menu--active');
  menuToggleBtn.classList.toggle('hamburger--active');
}

menuToggleBtn.addEventListener('click', menuToggleClickHandler);

window.addEventListener('touchstart', function (e) {
  if (menuToggleBtn.classList.contains('menu--active')) {
    if (e.target.getAttribute('class') !== 'main-header__nav') {
      mainNav.classList.remove('menu--active');
      menuToggleBtn.classList.remove('hamburger--active');
    }
  }
});

document.addEventListener('keydown', function (event) {
  if (mainNav.classList.contains('menu--active')) {
    if (event.key === 'Escape') {
      mainNav.classList.remove('menu--active');
      menuToggleBtn.classList.remove('hamburger--active');
    }
  }
});

// Gallery

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach((image) => {
  image.addEventListener('click', (e) => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});
