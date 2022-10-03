const body = document.querySelector('.body')
const burgerBtn = document.querySelector('.burger-btn');
const headerInner = document.querySelector('.header__inner');
const anchorLink = document.querySelectorAll('a[data-scroll]');
const header = document.querySelector('.header');
const btnModal = document.querySelectorAll('button[data-modal]');
const programBtnAll = document.querySelectorAll('.program__btn');
const programCardAll = document.querySelectorAll('.program-slider__card');
const inputs = document.querySelectorAll('input[type="tel"]');
//Плагин валидации инпута(начало)
const im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);
//Плагин валидации инпута(конец)


//Плагин анимациий при скролле(начало)
// AOS.init({
//   once: true
// });
//Плагин анимациий при скролле(конец)

//Якорные ссылки(начало)
anchorLink.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href')
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
})
//Якорные ссылки(конец)


document.addEventListener('click', function (e) {
  if (headerInner.classList.contains('header__inner--visible')) {
    anchorLink.forEach((link => {
      link.addEventListener('click', function (params) {
        closeMenu()
      })
    }))
  }
})


window.addEventListener('resize', function () {
  if (window.innerWidth <= 768) {

  } else {

  }
  if (window.innerWidth >= 768 && headerInner.classList.contains('header__inner--visible')) {
    closeMenu()
  }
})

function closeMenu() {
  burgerBtn.classList.remove('burger-btn--active');
  burgerBtn.classList.remove('burger-btn--fixed');
  headerInner.classList.remove('header__inner--visible');
  body.classList.remove('body--hidden')
}

burgerBtn.addEventListener('click', function () {
  // closeMenu()
  this.classList.toggle('burger-btn--active');
  this.classList.remove('burger-btn--fixed')
  body.classList.toggle('body--hidden');
  headerInner.classList.toggle('header__inner--visible')
})


headerInner.addEventListener('scroll', function () {
  if (headerInner.classList.contains('header__inner--visible')) {
    if (this.scrollTop > 5) {
      burgerBtn.classList.add('burger-btn--fixed')
    } else {
      burgerBtn.classList.remove('burger-btn--fixed')
    }
  }
})

const gallertSwiper = new Swiper(".gallery__swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  preloadImages: false,
  lazy: true,
  slideToClicked: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 25,
    modifier: 1,
    slideShadows: true
  },
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      coverflowEffect: {
        rotate: 30,
      }
    },
    // when window width is >= 480px
    576: {
      coverflowEffect: {
        rotate: 50,
      }
    },

  }
});


const heroesSlider = new Swiper('.heroes__slider', {
  spaceBetween: 1,
  slidesPerView: 5,
  centeredSlides: true,
  // roundLengths: true,
  watchSlidesProgress: true,
  preloadImages: false,
  lazy: true,
  loop: true,
  grabCursor: true,
  // loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    }
  }
});

const programIndividSlider = new Swiper('.program-slider', {
  spaceBetween: 10,
  slidesPerView: 1,
  autoHeight: 'auto',
  grabCursor: true,
  navigation: {
    nextEl: ".program-slider__btn--next",
    prevEl: ".program-slider__btn--prev"
  }
});

const programSlider = new Swiper('.gallery-slider', {
  spaceBetween: 10,
  slidesPerView: 1,
  autoHeight: 'auto',
  grabCursor: true,
  navigation: {
    nextEl: ".gallery-slider__btn--next",
    prevEl: ".gallery-slider__btn--prev"
  }
});


const videos = document.querySelectorAll('.reviews__box[data-video]')

//Отложенная загрузка видео(начало)
let generateUrl = function (id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
};

// creating iframe
let createIframe = function (id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
  iframe.setAttribute('src', generateUrl(id));
  iframe.classList.add('reviews__iframe')
  return iframe;
};

// main code
videos.forEach((el) => {
  let videoHref = el.getAttribute('data-video');

  let deletedLength = 'https://www.youtube.com/watch?v='.length;

  let videoId = videoHref.substring(deletedLength, videoHref.length);

  let img = el.querySelector('img');
  let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';
  img.setAttribute('src', youtubeImgSrc);

  if (el.classList.contains('reviews__box')) {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      let iframe = createIframe(videoId);
      el.querySelector('.reviews__img').remove();
      el.querySelector('.reviews__text').remove();
      el.appendChild(iframe);
      el.querySelector('button').remove();
    });
  }
});


const headerTop = header.offsetTop;
window.addEventListener('scroll', function () {
  let scroll = window.pageYOffset;
  if (scroll >= headerTop) {
    header.classList.add('header--fixed')
  } else {
    header.classList.remove('header--fixed')
  }
})


// Открытие и закртие модалок(начало)
btnModal.forEach(item => {
  item.addEventListener('click', function (e) {
    disableScroll()
    e.preventDefault()
    const getAttr = e.target.getAttribute('data-modal');
    const modal = document.querySelector(`.modal[data-modal="${getAttr}"]`)
    modal.classList.add('modal--visible');
    body.classList.add('body--hidden');
    modal.addEventListener('click', function (e) {
      if (e.target.classList == 'modal__close' || e.target.classList[0] == 'modal') {
        enableScroll()
        modal.classList.remove('modal--visible');
        body.classList.remove('body--hidden');
      }
    })
  })
})

const productBtnAll = document.querySelectorAll('.individual-program__more');
const galleryBtnAll = document.querySelectorAll('.program__btn');
const modalProduct = document.querySelector('.modal[data-modal="product"]');

productBtnAll.forEach(btn => {
  btn.addEventListener('click', function () {
    const parent = btn.closest('.individual-program__card');
    let dataTarget = +parent.getAttribute('data-target');

    programIndividSlider.slideTo(dataTarget);

    listenModal('product')
  })
})

galleryBtnAll.forEach(btn => {
  btn.addEventListener('click', function () {
    const parent = btn.closest('.program__card');
    let dataTarget = +parent.getAttribute('data-target');

    programSlider.slideTo(dataTarget);

    listenModal('gallery')
  })
})

function listenModal(nameModal) {
  disableScroll()
  const modal = document.querySelector(`.modal[data-modal="${nameModal}"]`);

  modal.classList.add('modal--visible');
  body.classList.add('body--hidden');
  modal.addEventListener('click', function (e) {
    if (e.target.classList == 'modal__close' || e.target.classList[0] == 'modal') {
      enableScroll()
      modal.classList.remove('modal--visible');
      body.classList.remove('body--hidden');
    }
  })
}


let disableScroll = function () {
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  body.style.paddingRight = paddingOffset;
}

let enableScroll = function () {
  // body.classList.remove('disable-scroll');
  body.style.paddingRight = '0px';
}