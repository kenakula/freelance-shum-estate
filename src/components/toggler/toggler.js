export const initTogglers = () => {
  const togglers = document.querySelectorAll('[data-toggler]');

  const switchClass = e => {
    const target = e.target.closest('[data-toggler]');

    if (!target) {
      return;
    }

    const targetId = target.dataset.targetId;
    const targetEl = document.querySelector(`#${targetId}`);
    const switchableClass = target.dataset.targetClassToggle;

    if (!targetEl) {
      return;
    }

    targetEl.classList.toggle(switchableClass);
    target.classList.toggle('toggler--close');
  };

  togglers.forEach(toggler => {
    toggler.addEventListener('click', switchClass);
  });
};
