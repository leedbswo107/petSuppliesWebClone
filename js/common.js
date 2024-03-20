let productSlide = new Swiper('.productSlide', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
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
