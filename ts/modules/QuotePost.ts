import IModule from './IModule';
import { qid } from '../utils/DOM';

export default class QuotePost implements IModule {
  public constructor() {
    document.addEventListener('DOMContentLoaded', () => this.onLoad());
  }

  protected onLoad() {
    const hash = window.location.hash;

    if (hash) {
      const match = hash.match(/^#q\d+$/i);

      if (match !== null) {
        const id = match[0].substr(2);
        this.quotePost(id);
      }
    }
  }

  protected quotePost(id: string) {
    const message = qid('message') as HTMLInputElement;
    message.value = `${message.value}>>${id}\n`;
    message.focus();

    return false;
  }
}
