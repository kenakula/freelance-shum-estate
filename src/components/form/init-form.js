import JustValidate from 'just-validate';

export const initForm = () => {
  const form = document.querySelector('[data-form]');

  if (!form) {
    return;
  }

  const validate = new JustValidate(form);

  validate
    .addField('#mail', [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        rule: 'email',
        errorMessage: 'Email is invalid!',
      },
    ])
    .onSuccess(e => {
      e.target.reset();
      const btn = e.target.querySelector('input[type="submit"]');
      btn.value = 'Успех';
      btn.style = 'pointer-events: none';
    });

  validate.dictLocale = [
    {
      key: 'Email is required',
      dict: {
        ru: 'Обязательное поле',
      },
    },
    {
      key: 'Email is invalid!',
      dict: {
        ru: 'Неправильно',
      },
    },
  ];

  validate.setCurrentLocale('ru');
};
