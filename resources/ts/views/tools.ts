import { View } from '.';
import { DOM } from '../utils';

export class ToolsView implements View {
  constructor(readonly $tools: HTMLElement) {
    const $scrollElement = document.documentElement || document.body;

    const $scrollTop = DOM.qs('#tools-scroll-top', $tools);
    if ($scrollTop) {
      $scrollTop.addEventListener('click', e => {
        e.preventDefault();
        $scrollElement.scrollTop = 0;
        return false;
      });
    }

    const $scrollBottom = DOM.qs('#tools-scroll-bottom', $tools);
    if ($scrollBottom) {
      $scrollBottom.addEventListener('click', e => {
        e.preventDefault();
        $scrollElement.scrollTop = document.body.scrollHeight;
        return false;
      });
    }
  }
}
