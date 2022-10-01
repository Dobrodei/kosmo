const gallertSwiper = new Swiper(".gallery__swiper", {
  effect: "coverflow",
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: 3,
  // slidesPerGroup: 2,
  // centeredSlides: true,
  spaceBetween: 20,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 130,
    // modifier: 1,
    // slideShadows: true
  }
  // effect: 'coverflow',
  // grabCursor: true,
  // centeredSlides: true,
  // slidesPerView: 3,
  // // slidesPerView: 'auto',
  // coverflow: {
  //   rotate: 40,
  //   stretch: 0,
  //   depth: 10,
  //   // modifier: 1,
  //   // slideShadows: true
  // },
  // loop: true
});

var heroesSlider = new Swiper('.heroes__slider', {
  spaceBetween: 1,
  slidesPerView: 5,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  grabCursor: true,
  // loopAdditionalSlides: 30,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev"
  // }
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