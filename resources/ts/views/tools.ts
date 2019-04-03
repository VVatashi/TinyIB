import { View } from '.';
import { Tools } from '../model';
import { DOM } from '../utils';

export class ToolsView implements View {
  readonly model: Tools;

  constructor(readonly $tools: HTMLElement) {
    this.model = new Tools();

    const $scrollTop = DOM.qs('#tools-scroll-top', $tools);
    if ($scrollTop) {
      $scrollTop.addEventListener('click', e => {
        e.preventDefault();
        this.model.scrollToTop();
        return false;
      });
    }

    const $scrollBottom = DOM.qs('#tools-scroll-bottom', $tools);
    if ($scrollBottom) {
      $scrollBottom.addEventListener('click', e => {
        e.preventDefault();
        this.model.scrollToBottom();
        return false;
      });
    }

    const $container = document.documentElement || document.body;

    this.model.on('scroll-top', () => {
      $container.scrollTop = 0;
    });

    this.model.on('scroll-bottom', () => {
      $container.scrollTop = document.body.scrollHeight;
    });
  }
}
