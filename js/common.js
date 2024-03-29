const disappearHead = document.querySelector('.hd .inner .utilHeader');
// .hd .inner:nth-of-type(2) disappear func
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 50) disappearHead.style.height = `0px`;
//   else disappearHead.style.height = '43px';
// });

const btnTop = document.querySelector('.top');
const topText = btnTop.querySelector('span');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) disappearHead.style.height = `0px`;
  else disappearHead.style.height = '43px';
  if (window.scrollY > window.innerHeight / 5) {
    btnTop.style.width = '5rem';
    btnTop.style.visibility = 'visible';
    btnTop.style.backgroundColor = 'var(--scrollPink)';
    topText.style.color = 'black';
  } else {
    btnTop.style.width = 0;
    btnTop.style.visibility = 'hidden';
    btnTop.style.backgroundColor = 'transparent';
    topText.style.color = 'transparent';
  }
});
btnTop.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
  loop: true,
  slidesPerView: 1,
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
