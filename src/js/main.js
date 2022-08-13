import { initTogglers } from '../components/toggler/toggler';
import { initPage } from './modules/init-page';
import { initSliders } from './modules/init-sliders';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initTogglers();
  initSliders();
});
