export const initFilter = () => {
  const filter = document.querySelector('[data-filter]');
  const resultContainer = document.getElementById('filter-result');

  if (!filter || !resultContainer) {
    return;
  }

  const onFilterChange = e => {
    e.preventDefault();
    const action = e.currentTarget.dataset.action;
    const data = {};
    const url = `${
      global.wpGlobal ? global.wpGlobal.ajaxUrl : '#'
    }?action=${action}`;

    const rooms = e.currentTarget.rooms;
    const sortOrder = e.currentTarget.order;

    if (rooms) {
      const values = Array.from(rooms)
        .filter(item => item.checked)
        .map(item => item.value);

      data['rooms'] = values;
    }

    if (sortOrder) {
      data['order'] = sortOrder.value;
    }

    filter.classList.add('loading');

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data).toString(),
    })
      .then(response => response.text())
      .then(result => {
        if (result) {
          resultContainer.innerHTML = result;
        }
      })
      .finally(() => {
        filter.classList.remove('loading');
      });
  };

  filter.addEventListener('change', onFilterChange);
};
