import { initTogglers } from '../components/toggler/toggler';
import { blockReveal } from './modules/block-reveal';
import { initLightgallery } from './modules/init-lightgallery';
import { initPage } from './modules/init-page';
import { initSelects } from './modules/init-selects';
import { initSliders } from './modules/init-sliders';
import { initScrollTo } from './modules/scroll-to';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initScrollTo();
  initTogglers();
  initSliders();
  initSelects();
  initLightgallery();
  blockReveal();
});
