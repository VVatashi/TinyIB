import { Page } from '.';
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

      if (e.target.tagName === 'A'
        && (e.target.classList.contains('post-header__hide')
          || e.target.classList.contains('post-header-mobile__hide'))) {
        e.preventDefault();

        const $post = e.target.closest('.post');
        if ($post) {
          $post.classList.toggle('post--hidden');
        }

        return false;
      }
    });
  }
}
