import BaseModule from './BaseModule';
import { qid } from '../utils/DOM';

export default class Captcha extends BaseModule {
  protected original_src = '';

  constructor() {
    super();
  }

  onReady() {
    const image = qid('captchaimage') as HTMLImageElement;

    if (image) {
      this.original_src = image.src;
      image.addEventListener('click', () => this.reload());
    }
  }

  protected reload() {
    const captcha = qid('captcha') as HTMLInputElement;
    captcha.value = '';
    captcha.focus();

    const image = qid('captchaimage') as HTMLImageElement;
    image.src = `${this.original_src}#${new Date().getTime()}`;

    return false;
  }
}
