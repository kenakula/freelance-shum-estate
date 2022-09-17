export const initFormParams = () => {
  const FORM_PARAM = 'contact';

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const form = document.querySelector('[data-form]');
  const mailInput = document.getElementById('mail');

  if (!urlParams.has(FORM_PARAM) || !form || !mailInput) {
    return;
  }

  const formRadios = form['radio-option'];
  const paramValue = urlParams.get(FORM_PARAM);
  mailInput.focus();

  if (formRadios.length) {
    formRadios.forEach(radio => {
      if (radio.value === paramValue) {
        radio.checked = true;
      }
    });
  }
};
