import BaseModule from '../BaseModule';
import ModuleManager from '../../ModuleManager';
import { qs, qsa } from '../../utils/DOM';

export default class PostQuote extends BaseModule {
  constructor(manager: ModuleManager) {
    super(manager);
  }

  protected processPost(post: Element) {
    const quoteLink = qs('.post__id-link', post) as HTMLAnchorElement;
    if (quoteLink) {
      quoteLink.addEventListener('click', e => {
        e.preventDefault();
        const id = quoteLink.getAttribute('data-post-id');
        this.manager.emit('insertMarkup', [`>>${id}\n`, '', true]);
        return false;
      });
    }
  }

  onReady() {
    const posts = qsa('.post');
    const count = posts.length;
    for (let i = 0; i < count; ++i) {
      this.processPost(posts[i]);
    }
  }

  onPostInsert(post: Element) {
    this.processPost(post);
  }
}
