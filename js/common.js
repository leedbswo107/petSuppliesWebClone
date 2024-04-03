const disappearHead = document.querySelector('.utilHeader');
const btnTop = document.querySelector('.top');
const topText = btnTop.querySelector('span');
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
  let isContain = ham.classList.contains('on');
  if (btnTop.classList.contains('on')) {
    if (isContain === true) {
      btnTop.classList.remove('on');
      btnTop.classList.add('off');
    } else {
      btnTop.classList.remove('off');
      btnTop.classList.add('on');
    }
  }
  disappearHead.classList.toggle('scrolled');
  document.body.classList.toggle('stop-scrolling');
});
gnb.addEventListener('click', (e) => {
  const list = gnb.querySelectorAll('li');
  let closestA = e.target.closest('a');
  let closestLI = e.target.closest('li');
  if (!closestLI) return;
  if (closestA.parentElement.parentElement === gnb) {
    e.preventDefault();
  } else {
    list.forEach((element) => {
      element.classList.remove('on');
    });
    gnb.classList.remove('on');
    ham.classList.remove('on');
  }
  list.forEach((item) => {
    if (item !== closestLI) {
      item.classList.remove('on');
    }
  });
  if (closestLI) {
    closestLI.classList.toggle('on');
  }
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
      } else return;
    });
    item.classList.toggle('on');
    footInner[index].classList.toggle('on');
  });
});

// slider func
// product, review, reviewImg, brandComment, designProduct, brand
let brandSlide = new Swiper('.brandSlide', {
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
});
let productSlide = new Swiper('.productSlide', {
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
  loop: true,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.reviewPagination',
  },
});
reviewImgSlide.controller.control = reviewSlide;
reviewSlide.controller.control = reviewImgSlide;

let brandCommentSlide = new Swiper('.brandCommentSlide', {
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
});
