import PostModule from '../PostModule';
import ModuleManager from '../../ModuleManager';
import { qs } from '../../utils/DOM';

export default class PostQuote extends PostModule {
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
}
