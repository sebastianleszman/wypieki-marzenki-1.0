// header //

const mainHeader = document.querySelector('.nav-scroll');

let last = 0;
let scrollHeight = document.documentElement.scrollHeight;
let clientHeight = document.documentElement.clientHeight;

document.addEventListener('scroll', function () {
  let scroll = document.documentElement.scrollTop;

  if(scrollHeight - scroll > clientHeight){
    if (scroll > -1) {
      if (scroll > last) {
        mainHeader.classList.add('hide');
      } else if(scroll < last) {
        mainHeader.classList.remove('hide');
      } 
    }

    last = scroll;
  }
});

// Navbar

const menuToggleBtn = document.querySelector('.main-header__nav-toggle-btn');
const mainNav = document.querySelector('.main-header__nav');

menuToggleBtn.addEventListener('click', function (e) {
  e.stopPropagation();
  console.log('click');
  mainNav.classList.toggle('menu--active');
  menuToggleBtn.classList.toggle('hamburger--active');
});

document.addEventListener('touchstart', function (e) {
  e.stopPropagation();
  if (
    menuToggleBtn.classList.contains('hamburger--active') // tutaj skonczyc warunek
  ) {
    console.log('touch');
    mainNav.classList.remove('menu--active');
    menuToggleBtn.classList.remove('hamburger--active');
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
