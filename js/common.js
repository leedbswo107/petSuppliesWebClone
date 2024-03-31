const disappearHead = document.querySelector('.utilHeader');
const btnTop = document.querySelector('.top');
const topText = btnTop.querySelector('span');

// scroll event func
window.addEventListener('scroll', () => {
  if (parseInt(window.scrollY) === 0)
    disappearHead.classList.remove('scrolled');
  else disappearHead.classList.add('scrolled');
  if (window.scrollY > window.innerHeight / 5) btnTop.classList.add('on');
  else btnTop.classList.remove('on');
});

// go top event func
btnTop.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// slider func
// product, review, reviewImg, brandComment, designProduct, brand
let brandSlide = new Swiper('.brandSlide', {
  slidesPerView: 6,
  spaceBetween: 20,
  speed: 11000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
let productSlide = new Swiper('.productSlide', {
  slidesPerView: '1',
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    541: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
});
let reviewImgSlide = new Swiper('.reviewImgSlide', {
  effect: 'fade',
  loop: true,
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },
});
let reviewSlide = new Swiper('.reviewSlide', {
  autoHeight: true,
  spaceBetween: 10,
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.reviewPagination',
  },
});
reviewImgSlide.controller.control = reviewSlide;
reviewSlide.controller.control = reviewImgSlide;

let brandCommentSlide = new Swiper('.brandCommentSlide', {
  // centeredSlides: true,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.next3',
    prevEl: '.prev3',
  },
  pagination: {
    el: '.brandCommentPagination',
  },
});
let designProductSlide = new Swiper('.designProductSlide', {
  slidesPerView: '1',
  navigation: {
    nextEl: '.next4',
    prevEl: '.prev4',
  },
  breakpoints: {
    1211: {
      slidesPerView: 2,
    },
  },
});
