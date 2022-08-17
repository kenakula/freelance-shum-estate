import lightGallery from 'lightgallery';

export const initLightgalleries = () => {
  const galleries = document.querySelectorAll('[data-lightgaller]');

  if (!galleries.length) {
    return;
  }

  galleries.forEach(gallery => {
    lightGallery(gallery, {
      speed: 500,
    });
  });
};
