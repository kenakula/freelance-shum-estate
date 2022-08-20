export const blockReveal = () => {
  const blocks = document.querySelectorAll('[data-reveal]');

  if (!blocks) {
    return;
  }

  const options = {
    rootMargin: '0px',
    threshold: 0.4,
  };

  const callback = function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('visible');

        observer.unobserve(el);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  blocks.forEach(block => {
    observer.observe(block);
  });
};
