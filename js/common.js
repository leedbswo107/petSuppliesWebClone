let productSlide = new Swiper('.productSlide', {
  slidesPerView: 'auto',
  spaceBetween: 32,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

let reviewSlide = new Swiper('.reviewSlide', {
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },
});
let brandCommentSlide = new Swiper('.brandCommentSlide', {
  navigation: {
    nextEl: '.next3',
    prevEl: '.prev3',
  },
});
let designProductSlide = new Swiper('.designProductSlide', {
  slidesPerView: 2,
  spaceBetween: 50,
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
