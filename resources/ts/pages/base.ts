import { Page } from '.';
import { Settings } from '../services';
import { DOM } from '../utils';
import { CaptchaView, StyleSelectorView, ToolsView } from '../views';

export class BasePage implements Page {
  readonly style: StyleSelectorView;
  readonly captha: CaptchaView;
  readonly tools: ToolsView;

  constructor() {
    this.captha = new CaptchaView();

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

      if (e.target.tagName === 'A'
        && (e.target.classList.contains('post-header__hide')
          || e.target.classList.contains('post-header-mobile__hide'))) {
        e.preventDefault();

        const $post = e.target.closest('.post');
        if ($post) {
          $post.classList.toggle('post--hidden');
          const id = +$post.getAttribute('data-post-id');
          const hidden = $post.classList.contains('post--hidden');
          let hiddenPosts = Settings.get<number[]>('filter.hidden-posts') || [];
          if (hidden) {
            hiddenPosts.push(id);
          } else {
            hiddenPosts = hiddenPosts.filter(h => h !== id);
          }
          Settings.set('filter.hidden-posts', hiddenPosts);
        }

        return false;
      }
    });
  }
}
