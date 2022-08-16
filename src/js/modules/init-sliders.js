import Swiper, { Navigation, Scrollbar } from 'swiper';
import { debounce } from '../utils/debounce';
import { TEAM_SLIDER_OPTIONS, TESTIMONIALS_SLIDER_OPTIONS } from '../../blocks';

const SINGLE_PAGE_SLIDER_OPTIONS = {
  modules: [Navigation, Scrollbar],
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragClass: 'slider__drag',
  },
  observer: true,
  observeParents: true,
  slidesPerView: 1,
};

export const initSliders = () => {
  const sliders = document.querySelectorAll('[data-slider]');

  if (!sliders.length) {
    return;
  }

  sliders.forEach(slider => {
    let destroyBreakpoint = Boolean(slider.dataset.breakpoint)
      ? window.matchMedia(`(min-width: ${slider.dataset.breakpoint}px)`)
      : null;
    let breakpoints = Boolean(slider.dataset.breakpoints)
      ? JSON.parse(slider.dataset.breakpoints)
      : {};
    let options = { breakpoints };
    const sliderType = slider.dataset.type;

    switch (sliderType) {
      case 'team':
        options = { ...options, ...TEAM_SLIDER_OPTIONS };
        break;
      case 'testimonials':
        options = { ...options, ...TESTIMONIALS_SLIDER_OPTIONS };
        break;
      default:
        options = { ...options, ...SINGLE_PAGE_SLIDER_OPTIONS };
        break;
    }

    let sliderInst = new Swiper(slider, options);

    const onResize = () => {
      if (destroyBreakpoint && destroyBreakpoint.matches) {
        sliderInst.destroy(true, true);
        positionLegends(slider);
      } else if (destroyBreakpoint && !destroyBreakpoint.matches) {
        clearLegendsPosition(slider);
        sliderInst = new Swiper(slider, options);
      }
    };

    const resizeWatcher = debounce(onResize, 300);

    window.addEventListener('resize', resizeWatcher);
  });
};
