import BaseModule from './BaseModule';
import ModuleManager from '../ModuleManager';
import { qid, qsa } from '../utils/DOM';

export default class QuotePost extends BaseModule {
  constructor(manager: ModuleManager) {
    super(manager);
  }

  onReady() {
    const hash = window.location.hash;

    if (hash) {
      const match = hash.match(/^#q\d+$/i);

      if (match !== null) {
        const id = Number(match[0].substr(2));
        this.quotePost(id);
      }
    }

    const links = qsa('.post-header__reflink,.post-header-mobile__reflink');
    links.forEach(link => {
      const id = Number(link.getAttribute('data-id'));
      link.addEventListener('click', () => this.quotePost(id));
    });
  }

  protected quotePost(id: number) {
    const message = qid('message') as HTMLInputElement;
    message.value = `${message.value}>>${id}\n`;
    message.focus();

    return false;
  }
}
