import { eventBus, Events } from '..';
import { DOM } from '../utils';

export class Captcha {
  protected originalSrc = '';

  constructor() {
    eventBus.$on(Events.Ready, this.onReady.bind(this));
  }

  onReady() {
    const image = DOM.qid('captchaimage') as HTMLImageElement;

    if (image) {
      this.originalSrc = image.src;
      image.addEventListener('click', this.reload.bind(this));
    }
  }

  protected reload() {
    const captcha = DOM.qid('captcha') as HTMLInputElement;
    captcha.value = '';
    captcha.focus();

    const image = DOM.qid('captchaimage') as HTMLImageElement;
    image.src = `${this.originalSrc}#${new Date().getTime()}`;

    return false;
  }
}
