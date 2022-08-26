import { initForm } from '../components';
import { initTogglers } from '../components';
import { blockReveal } from './modules/block-reveal';
import { initFilter } from './modules/init-filter';
import { initLightgallery } from './modules/init-lightgallery';
import { initPage } from './modules/init-page';
import { initSliders } from './modules/init-sliders';
import { initScrollTo } from './modules/scroll-to';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initScrollTo();
  initTogglers();
  initSliders();
  initLightgallery();
  blockReveal();
  initFilter();
  initForm();
});
