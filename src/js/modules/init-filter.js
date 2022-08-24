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

    if (rooms) {
      const values = Array.from(rooms)
        .filter(item => item.checked)
        .map(item => item.value);

      data['rooms'] = values;
    }

    filter.classList.add('loading');

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data).toString(),
    })
      .then(response => {
        return response.text();
      })
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
