import { DOM } from './utils/dom';

function setupListAjaxUpdate() {
  const list = DOM.qid('list');
  if (!list) {
    return;
  }

  if (!list.hasAttribute('data-url')) {
    return;
  }

  const listUrl = list.getAttribute('data-url');
  list.addEventListener('click', async (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName !== 'A') {
      return;
    }

    if (!target.hasAttribute('data-page')) {
      return;
    }

    e.preventDefault();

    const page = target.getAttribute('data-page');
    const query = new URLSearchParams(window.location.search);
    query.set('page', page);
    const url = `${listUrl}?${query}`;

    const response = await fetch(url, {
      credentials: 'same-origin',
    });

    if (response.status !== 200) {
      console.warn(`Can\'t load '${listUrl}':`, response.status, response.statusText);
      return false;
    }

    list.innerHTML = await response.text();
    return false;
  });
}

document.addEventListener('DOMContentLoaded', e => {
  setupListAjaxUpdate();
});
