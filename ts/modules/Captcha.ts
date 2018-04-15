import IModule from './IModule';
import { qid } from '../utils/DOM';

export default class Captcha implements IModule {
  protected original_src = '';

  public constructor() {
    document.addEventListener('DOMContentLoaded', () => this.onLoad());
  }

  protected onLoad() {
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
