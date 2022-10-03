const body = document.querySelector('.body')
const burgerBtn = document.querySelector('.burger-btn');
const headerInner = document.querySelector('.header__inner');
const anchorLink = document.querySelectorAll('a[data-scroll]');
const header = document.querySelector('.header');
const btnModal = document.querySelectorAll('button[data-modal]');
const programBtnAll = document.querySelectorAll('.program__btn');
const programCardAll = document.querySelectorAll('.program-slider__card');



console.log(btnModal);
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
  // if (e.target != headerMiddle && e.target != burgerBtn) {
  //   closeMenu()
  // }
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



// const gallertSwiper = new Swiper(".gallery__swiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   // centeredSlides: true,
//   slidesPerView: 3,
//   // slidesPerGroup: 2,
//   // centeredSlides: true,
//   spaceBetween: 20,
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 130,
//     // modifier: 1,
//     // slideShadows: true
//   }
//   // effect: 'coverflow',
//   // grabCursor: true,
//   // centeredSlides: true,
//   // slidesPerView: 3,
//   // // slidesPerView: 'auto',
//   // coverflow: {
//   //   rotate: 40,
//   //   stretch: 0,
//   //   depth: 10,
//   //   // modifier: 1,
//   //   // slideShadows: true
//   // },
//   // loop: true
// });

const heroesSlider = new Swiper('.heroes__slider', {
  spaceBetween: 1,
  slidesPerView: 5,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  grabCursor: true,
  // loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 'auto',
      // slidesPerView: 4,
      spaceBetween: 10
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 4,
      // spaceBetween: 30
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 5,
      // spaceBetween: 40
    }
  }
});

const programIndividSlider = new Swiper('.program-slider', {
  spaceBetween: 10,
  slidesPerView: 1,
  autoHeight: 'auto',
  // initialSlide: 2,
  // centeredSlides: true,
  // roundLengths: true,
  // loop: true,
  grabCursor: true,
  // loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".program-slider__btn--next",
    prevEl: ".program-slider__btn--prev"
  }
});

const programSlider = new Swiper('.gallery-slider', {
  spaceBetween: 10,
  slidesPerView: 1,
  autoHeight: 'auto',
  // initialSlide: 2,
  // centeredSlides: true,
  // roundLengths: true,
  // loop: true,
  grabCursor: true,
  // loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".gallery-slider__btn--next",
    prevEl: ".gallery-slider__btn--prev"
  }
});

// var mySwiper = new Swiper(".swiper-container", {
//   // spaceBetween: 1,
//   // slidesPerView: 3,
//   // centeredSlides: true,
//   // roundLengths: true,
//   // loop: true,
//   // loopAdditionalSlides: 30,
//   // navigation: {
//   //   nextEl: ".swiper-button-next",
//   //   prevEl: ".swiper-button-prev"
//   // }
// });

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
// const headerHeight = header.getBoundingClientRect().height;
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
    const getAttr = e.target.getAttribute('data-modal');
    const modal = document.querySelector(`.modal[data-modal="${getAttr}"]`)
    modal.classList.add('modal--visible');
    body.classList.add('body--hidden');
    modal.addEventListener('click', function (e) {
      if (e.target.classList == 'modal__close' || e.target.classList[0] == 'modal') {
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