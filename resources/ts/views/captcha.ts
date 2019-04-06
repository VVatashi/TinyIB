import { View } from '.';
import { DOM } from '../utils';

export class CaptchaView implements View {
  protected readonly originalSrc: string;

  constructor() {
    const $image = DOM.qid('captchaimage') as HTMLImageElement;
    if ($image) {
      this.originalSrc = $image.src;
      $image.addEventListener('click', this.reload.bind(this));
    }
  }

  protected reload(e: Event) {
    e.preventDefault();

    const $captcha = DOM.qid('captcha') as HTMLInputElement;
    if ($captcha) {
      $captcha.value = '';
      $captcha.focus();
    }

    const $image = DOM.qid('captchaimage') as HTMLImageElement;
    if ($image) {
      $image.src = `${this.originalSrc}#${new Date().getTime()}`;
    }

    return false;
  }
}
