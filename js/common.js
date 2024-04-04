import {
  BRAND_SLIDE,
  PRODUCT_SLIDE,
  REVIEW_IMG_SLIDE,
  REVIEW_SLIDE,
  BRAND_COMMENT_SLIDE,
  DESIGN_PRODUCT_SLIDE,
} from './swiper.js';
const disappearHead = document.querySelector('.utilHeader');
const btnTop = document.querySelector('.top');
const ham = document.querySelector('.ham');
const gnb = document.querySelector('.gnb');
const searchAndShoppingA = document.querySelectorAll('.searchAndShopping > a');

// scroll event func
window.addEventListener('scroll', () => {
  if (parseInt(window.scrollY) === 0)
    disappearHead.classList.remove('scrolled');
  else disappearHead.classList.add('scrolled');
  if (window.scrollY > window.innerHeight / 5) btnTop.classList.add('on');
  else btnTop.classList.remove('on');
});

// mobile header func
ham.addEventListener('click', (e) => {
  e.preventDefault();
  ham.classList.toggle('on');
  gnb.classList.toggle('on');
  if (btnTop.classList.contains('on')) {
    if (ham.classList.contains('on')) btnTop.classList.replace('on', 'off');
    else btnTop.classList.replace('off', 'on');
  }
  disappearHead.classList.toggle('scrolled');
  document.body.classList.toggle('stop-scrolling');
});
gnb.addEventListener('click', (e) => {
  const list = gnb.querySelectorAll('.gnb > li');
  let closestA = e.target.closest('a');
  let closestLI = e.target.closest('li');
  if (!closestLI) return;
  if (closestA.closest('.gnb') === gnb) e.preventDefault();
  else {
    list.forEach((element) => {
      element.classList.remove('on');
    });
    gnb.classList.remove('on');
    ham.classList.remove('on');
  }
  list.forEach((item) => {
    item.classList.remove('on');
  });
  closestLI.classList.toggle('on');
});
searchAndShoppingA.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

// go top event func
btnTop.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// footer func
const clickedStrong = document.querySelectorAll('.footInfo strong');
const footInner = document.querySelectorAll('.footInfo .inner');
clickedStrong.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    footInner.forEach((element, i) => {
      if (e.target !== clickedStrong[i]) {
        clickedStrong[i].classList.remove('on');
        element.classList.remove('on');
      }
    });
    item.classList.toggle('on');
    footInner[index].classList.toggle('on');
  });
});

// slider func
// product, review, reviewImg, brandComment, designProduct, brand
let brandSlide = new Swiper('.brandSlide', BRAND_SLIDE);
let productSlide = new Swiper('.productSlide', PRODUCT_SLIDE);
let reviewImgSlide = new Swiper('.reviewImgSlide', REVIEW_IMG_SLIDE);
let reviewSlide = new Swiper('.reviewSlide', REVIEW_SLIDE);
reviewImgSlide.controller.control = reviewSlide;
reviewSlide.controller.control = reviewImgSlide;

let brandCommentSlide = new Swiper('.brandCommentSlide', BRAND_COMMENT_SLIDE);
let designProductSlide = new Swiper(
  '.designProductSlide',
  DESIGN_PRODUCT_SLIDE
);
