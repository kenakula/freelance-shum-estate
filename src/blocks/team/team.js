import { Navigation, Scrollbar } from 'swiper';

export const TEAM_SLIDER_OPTIONS = {
  modules: [Navigation, Scrollbar],
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragClass: 'slider__drag',
  },
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 20,
  centerInsufficientSlides: true,
  breakpoints: {
    768: {
      spaceBetween: 40,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 60,
      slidesPerView: 3,
    },
  },
};
