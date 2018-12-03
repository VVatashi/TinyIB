import PostModule from './PostModule';
import ModuleManager from '../ModuleManager';
import { qs, qsa } from '../utils/DOM';

export default class PostReferenceMap extends PostModule {
  protected readonly posts: { [id: number]: Element } = {};

  constructor(manager: ModuleManager) {
    super(manager);
  }

  protected getPostRefLinkAuthorHtml(post: Element) {
    const nameEl = qs('.post-header__name', post);
    const tripcodeEl = qs('.post-header__tripcode', post);

    const name = nameEl ? nameEl.innerHTML : '';
    const tripcode = tripcodeEl ? tripcodeEl.innerHTML : '';

    if (name.length || tripcode.length) {
      return `(<span class="post__reference-link-name">${name}</span>`
        + `<span class="post__reference-link-tripcode">${tripcode}</span>)`;
    } else {
      return ``;
    }
  }

  protected processPost(post: Element) {
    const postId = +post.getAttribute('data-post-id');

    // Store post.
    this.posts[postId] = post;

    // Get references.
    const referenceElements = qsa('a[data-target-post-id]', post);
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
}
