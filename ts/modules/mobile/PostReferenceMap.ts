import PostModule from '../PostModule';
import ModuleManager from '../../ModuleManager';
import { qs, qsa } from '../../utils/DOM';

export default class PostReferenceMap extends PostModule {
  protected readonly user: { name?: string, tripcode?: string } = {};
  protected readonly posts: { [id: number]: Element } = {};

  constructor(manager: ModuleManager) {
    super(manager);

    this.user.name = localStorage.getItem('user.name');
    this.user.tripcode = localStorage.getItem('user.tripcode');
  }

  protected getPostAuthor(post: Element) {
    const nameEl = qs('.post__name', post);
    const tripcodeEl = qs('.post__tripcode', post);

    return {
      name: nameEl ? nameEl.textContent : '',
      tripcode: tripcodeEl ? tripcodeEl.textContent : '',
    };
  }

  protected getPostRefLinkHtml(post: Element) {
    const postId = +post.getAttribute('data-post-id');

    const nameEl = qs('.post__name', post);
    const tripcodeEl = qs('.post__tripcode', post);

    const name = nameEl ? nameEl.innerHTML : '';
    const tripcode = tripcodeEl ? tripcodeEl.innerHTML : '';

    if (name.length || tripcode.length) {
      return `<span class="post__reference-link-id">&gt;&gt;${postId}</span>`
        + ` <span class="post__reference-link-author">`
        + `(<span class="post__reference-link-name">${name}</span>`
        + `<span class="post__reference-link-tripcode">${tripcode}</span>)`
        + `</span>`;
    } else {
      return `<span class="post__reference-link-id">&gt;&gt;${postId}</span>`;
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

    // Get referenced posts.
    const referencedPosts = references
      .filter((reference, index) => references.indexOf(reference) === index)
      .map(reference => this.posts[reference.id])
      .filter(post => post);

    // Append the author name of the referenced post to the reference link text.
    references.forEach(reference => {
      const post = this.posts[reference.id];
      if (!post) {
        return;
      }

      reference.element.innerHTML = this.getPostRefLinkHtml(post);
    });

    // Check if it is user own post.
    const author = this.getPostAuthor(post);
    if (this.user.tripcode && this.user.tripcode.length && this.user.tripcode === author.tripcode
      || this.user.name && this.user.name.length && this.user.name === author.name) {
      post.classList.add('post_own');
    }

    // Append to posts a reference to this post.
    referencedPosts.forEach(referencedPost => {
      // Create post footer if it is not exists.
      let footer = qs('.post__footer', referencedPost);
      if (!footer) {
        footer = document.createElement('div');
        footer.classList.add('post__footer');
        referencedPost.appendChild(footer);
      }

      // Append reference to the footer.
      const link = document.createElement('a');
      link.classList.add('post__reference-link');
      link.href = `#post_${postId}`;

      // Check if it is reply to user own post.
      const refPostAuthor = this.getPostAuthor(referencedPost);
      if (this.user.tripcode && this.user.tripcode.length && this.user.tripcode === refPostAuthor.tripcode
        || this.user.name && this.user.name.length && this.user.name === refPostAuthor.name) {
        post.classList.add('post_own-reply');
      }

      link.innerHTML = this.getPostRefLinkHtml(post);
      footer.appendChild(link);
    });
  }
}
