import { eventBus, Events } from '..';
import { Settings } from '../services';
import { DOM } from '../utils';

export class PostReferenceMap {
  protected readonly posts: { [id: number]: Element } = {};

  constructor() {
    eventBus.on(Events.PostsInserted, (posts: Element[]) => {
      if (!Settings.get('link.add-names-to-links')) {
        return;
      }

      posts.forEach(this.onPostInsert.bind(this));
    });
  }

  protected onPostInsert(post: Element) {
    const postId = +post.getAttribute('data-post-id');

    // Store post.
    this.posts[postId] = post;

    // Get references.
    const referenceElements = DOM.qsa('a[data-target-post-id]', post);
    const references = referenceElements.map(element => {
      return {
        element,
        id: +element.getAttribute('data-target-post-id'),
      };
    });

    // Append the author name of the referenced post to the reference link text.
    references.forEach(reference => {
      const post = this.posts[reference.id];
      if (!post) {
        return;
      }

      const referenceAuthor = document.createElement('span');
      referenceAuthor.classList.add('post__reference-link-author');
      referenceAuthor.innerHTML = this.getPostRefLinkAuthorHtml(post);

      const parent = reference.element.parentElement;
      const nextSibling = reference.element.nextSibling;
      parent.insertBefore(referenceAuthor, nextSibling);
    });
  }

  protected getPostRefLinkAuthorHtml(post: Element) {
    const nameEl = DOM.qs('.post-header__name', post);
    const tripcodeEl = DOM.qs('.post-header__tripcode', post);

    const name = nameEl ? nameEl.innerHTML : '';
    const tripcode = tripcodeEl ? tripcodeEl.innerHTML : '';

    if (name.length || tripcode.length) {
      return `(<span class="post__reference-link-name">${name}</span>`
        + `<span class="post__reference-link-tripcode">${tripcode}</span>)`;
    } else {
      return ``;
    }
  }
}
