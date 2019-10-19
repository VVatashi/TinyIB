import { Page } from '.';
import { DOM } from '../utils';
import { eventBus } from '../event-bus';
import { Events } from '../events';
import { store, setOption } from '../store';

export class BasePage implements Page {
  constructor() {
    document.addEventListener('click', e => {
      if (!(e.target instanceof HTMLElement)) {
        return;
      }

      if (e.button !== 0) {
        return;
      }

      const { settings } = store.getState().settings;

      if (e.target.tagName === 'A') {
        if (e.target.classList.contains('post-header__hide')
          || e.target.classList.contains('post-header-mobile__hide')) {
          e.preventDefault();

          const $post = e.target.closest('.post');
          if ($post) {
            $post.classList.toggle('post--hidden');
            const id = +$post.getAttribute('data-post-id');
            const hidden = $post.classList.contains('post--hidden');
            let hiddenPosts = [...settings.filter.hiddenPosts || []];
            if (hidden) {
              hiddenPosts.push(id);
            } else {
              hiddenPosts = hiddenPosts.filter(h => h !== id);
            }

            store.dispatch(setOption('filter.hiddenPosts', hiddenPosts));
          }

          return false;
        } else if (e.target.classList.contains('post-header__delete')) {
          e.preventDefault();

          const $post = e.target.closest('.post');
          if ($post) {
            const id = +$post.getAttribute('data-post-id');

            if (confirm(`Delete post #${id}?`)) {
              try {
                eventBus.emit(Events.PostDeleted, id);
              } catch (e) {
                console.error(e);
              }
            }
          }

          return false;
        } else if (e.target.classList.contains('post-header__score-up')) {
          e.preventDefault();

          const $post = e.target.closest('.post');
          if ($post) {
            const id = +$post.getAttribute('data-post-id');

            try {
              eventBus.emit(Events.PostVoted, id, 'up');
            } catch (e) {
              console.error(e);
            }
          }

          return false;
        } else if (e.target.classList.contains('post-header__score-down')) {
          e.preventDefault();

          const $post = e.target.closest('.post');
          if ($post) {
            const id = +$post.getAttribute('data-post-id');

            try {
              eventBus.emit(Events.PostVoted, id, 'down');
            } catch (e) {
              console.error(e);
            }
          }

          return false;
        }
      }
    });
  }
}
