import { initTogglers } from '../components/toggler/toggler';
import { initPage } from './modules/init-page';

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  initTogglers();
});
