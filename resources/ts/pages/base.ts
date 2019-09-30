import { Page } from '.';
import { Settings } from '../settings';
import { DOM } from '../utils';
import { StyleSelectorView, ToolsView } from '../views';
import { eventBus } from '../event-bus';
import { Events } from '../events';

export class BasePage implements Page {
  protected readonly settings: Settings;

  readonly style: StyleSelectorView;
  readonly tools: ToolsView;

  constructor() {
    this.settings = Settings.load();

    const $style = DOM.qid('style-selector') as HTMLSelectElement;
    if ($style) {
      this.style = new StyleSelectorView($style);
    }

    const $tools = DOM.qs('.tools') as HTMLElement;
    if ($tools) {
      this.tools = new ToolsView($tools);
    }

    document.addEventListener('click', e => {
      if (!(e.target instanceof HTMLElement)) {
        return;
      }

      if (e.button !== 0) {
        return;
      }

      if (e.target.tagName === 'A') {
        if (e.target.classList.contains('post-header__hide')
          || e.target.classList.contains('post-header-mobile__hide')) {
          e.preventDefault();

          const $post = e.target.closest('.post');
          if ($post) {
            const settings = Settings.load();

            $post.classList.toggle('post--hidden');
            const id = +$post.getAttribute('data-post-id');
            const hidden = $post.classList.contains('post--hidden');
            let hiddenPosts = settings.filter.hiddenPosts || [];
            if (hidden) {
              hiddenPosts.push(id);
            } else {
              hiddenPosts = hiddenPosts.filter(h => h !== id);
            }

            this.settings.filter.hiddenPosts = hiddenPosts;

            settings.filter.hiddenPosts = hiddenPosts;
            Settings.save(settings);
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
