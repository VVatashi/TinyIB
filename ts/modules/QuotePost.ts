import IModule from './IModule';
import { qid, qsa } from '../utils/DOM';

export default class QuotePost implements IModule {
  public constructor() {
    document.addEventListener('DOMContentLoaded', () => this.onLoad());
  }

  protected onLoad() {
    const hash = window.location.hash;

    if (hash) {
      const match = hash.match(/^#q\d+$/i);

      if (match !== null) {
        const id = Number(match[0].substr(2));
        this.quotePost(id);
      }
    }

    const links = qsa('.post-header__reflink');

    for (let i = 0; i < links.length; ++i) {
      const id = Number(links[i].getAttribute('data-id'));
      links[i].addEventListener('click', () => this.quotePost(id));
    }
  }

  protected quotePost(id: number) {
    const message = qid('message') as HTMLInputElement;
    message.value = `${message.value}>>${id}\n`;
    message.focus();

    return false;
  }
}
