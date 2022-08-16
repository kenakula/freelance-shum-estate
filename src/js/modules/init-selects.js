import Choices from 'choices.js';

export const initSelects = () => {
  const selects = document.querySelectorAll('[data-select]');

  if (!selects) {
    return;
  }

  selects.forEach(select => {
    const inst = new Choices(select, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices select',
        containerInner: 'choices__inner',
        input: 'choices__input',
        inputCloned: 'choices__input--cloned',
        list: 'choices__list',
        listItems: 'choices__list--multiple',
        listSingle: 'choices__list--single',
        listDropdown: 'choices__list--dropdown',
        item: 'choices__item',
        itemSelectable: 'choices__item--selectable',
        itemDisabled: 'choices__item--disabled',
        itemOption: 'choices__item--choice',
        group: 'choices__group',
        groupHeading: 'choices__heading',
        button: 'choices__button',
        activeState: 'is-active',
        focusState: 'is-focused',
        openState: 'is-open',
        disabledState: 'is-disabled',
        highlightedState: 'is-highlighted',
        selectedState: 'is-selected',
        flippedState: 'is-flipped',
      },
    });
  });
};
