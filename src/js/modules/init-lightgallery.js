export const initLightgallery = () => {
  const gallery = document.querySelector('[data-lightgallery]');

  if (!gallery) {
    return;
  }

  require('fslightbox');
};
