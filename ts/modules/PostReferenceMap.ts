import PostModule from './PostModule';
import ModuleManager from '../ModuleManager';
import { qs, qsa } from '../utils/DOM';

export default class PostReferenceMap extends PostModule {
  protected readonly posts: { [id: number]: Element } = {};

  constructor(manager: ModuleManager) {
    super(manager);
  }

  protected getPostRefLinkHtml(post: Element) {
    const postId = +post.getAttribute('data-post-id');

    const nameEl = qs('.post-header__name', post);
    const tripcodeEl = qs('.post-header__tripcode', post);

    const name = nameEl ? nameEl.innerHTML : '';
    const tripcode = tripcodeEl ? tripcodeEl.innerHTML : '';

    if (name.length || tripcode.length) {
      return `&gt;&gt;${postId}`
        + ` <span class="post__reference-link-author">`
        + `(<span class="post__reference-link-name">${name}</span>`
        + `<span class="post__reference-link-tripcode">${tripcode}</span>)`
        + `</span>`;
    } else {
      return `&gt;&gt;${postId}`;
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

      reference.element.innerHTML = this.getPostRefLinkHtml(post);
    });
  }
}
