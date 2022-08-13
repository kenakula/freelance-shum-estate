import { initTogglers } from '../components/toggler/toggler';
import { initPage } from './modules/init-page';
import { initSliders } from './modules/init-sliders';
import { initScrollTo } from './modules/scroll-to';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initScrollTo();
  initTogglers();
  initSliders();
});
