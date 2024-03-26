let productSlide = new Swiper('.productSlide', {
  slidesPerView: '4',
  spaceBetween: 32,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
let reviewImgSlide = new Swiper('.reviewImgSlide', {
  effect: 'fade',
  loop: true,
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});
let reviewSlide = new Swiper('.reviewSlide', {
  loop: true,
  slidesPerView: 1,
  // navigation: {
  //   nextEl: '.next2',
  //   prevEl: '.prev2',
  // },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});
reviewImgSlide.controller.control = reviewSlide;
reviewSlide.controller.control = reviewImgSlide;

let brandCommentSlide = new Swiper('.brandCommentSlide', {
  loop: true,
  navigation: {
    nextEl: '.next3',
    prevEl: '.prev3',
  },
});
let designProductSlide = new Swiper('.designProductSlide', {
  slidesPerView: 2,
  // spaceBetween: 16,
  navigation: {
    nextEl: '.next4',
    prevEl: '.prev4',
  },
});
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
