import { eventBus, Events } from '../..';
import { DOM } from '../../utils';

export class PostQuote {
  constructor() {
    eventBus.on(Events.PostsInserted, (posts: Element[]) =>
      posts.forEach(this.onPostInsert.bind(this)));
  }

  protected onPostInsert(post: Element) {
    const quoteLink = DOM.qs('.post__id-link', post) as HTMLAnchorElement;
    if (quoteLink) {
      quoteLink.addEventListener('click', e => {
        e.preventDefault();
        const id = quoteLink.getAttribute('data-post-id');
        eventBus.emit(Events.InsertMarkup, [`>>${id}\n`, '', true]);
        return false;
      });
    }
  }
}
