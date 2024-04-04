const BRAND_SLIDE = {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  speed: 11000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    541: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1211: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
};
const PRODUCT_SLIDE = {
  slidesPerView: 1,
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
};
const REVIEW_IMG_SLIDE = {
  effect: 'fade',
  loop: true,
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },
};
const REVIEW_SLIDE = {
  loop: true,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.reviewPagination',
  },
};
const BRAND_COMMENT_SLIDE = {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.next3',
    prevEl: '.prev3',
  },
  pagination: {
    el: '.brandCommentPagination',
  },
};
const DESIGN_PRODUCT_SLIDE = {
  slidesPerView: 1,
  navigation: {
    nextEl: '.next4',
    prevEl: '.prev4',
  },
  breakpoints: {
    1211: {
      slidesPerView: 2,
    },
  },
};

export {
  BRAND_SLIDE,
  PRODUCT_SLIDE,
  REVIEW_IMG_SLIDE,
  REVIEW_SLIDE,
  BRAND_COMMENT_SLIDE,
  DESIGN_PRODUCT_SLIDE,
};
