import PostModule from './PostModule';
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

      const nameEl = qs('.post__name', post);
      const name = nameEl ? nameEl.innerHTML : '';

      const tripcodeEl = qs('.post__tripcode', post);
      const tripcode = tripcodeEl ? tripcodeEl.innerHTML : '';

      if (name.length || tripcode.length) {
        reference.element.innerHTML = `<span class="post__reference-link-id">&gt;&gt;${reference.id}</span>`
          + ` <span class="post__reference-link-author">`
          + `(<span class="post__reference-link-name">${name}</span>`
          + `<span class="post__reference-link-tripcode">${tripcode}</span>)`
          + `</span>`;
      } else {
        reference.element.innerHTML = `<span class="post__reference-link-id">&gt;&gt;${reference.id}</span>`;
      }
    });

    // Check if it is user own post.
    const nameEl = qs('.post__name', post);
    const name = nameEl ? nameEl.textContent : '';

    const tripcodeEl = qs('.post__tripcode', post);
    const tripcode = tripcodeEl ? tripcodeEl.textContent : '';

    if (this.user.tripcode && this.user.tripcode.length && this.user.tripcode === tripcode
      || this.user.name && this.user.name.length && this.user.name === name) {
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

      const nameEl = qs('.post__name', referencedPost);
      const name = nameEl ? nameEl.innerHTML : '';

      const tripcodeEl = qs('.post__tripcode', referencedPost);
      const tripcode = tripcodeEl ? tripcodeEl.innerHTML : '';

      // Check if it is reply to user own post.
      if (this.user.tripcode && this.user.tripcode.length && this.user.tripcode === tripcode
        || this.user.name && this.user.name.length && this.user.name === name) {
        post.classList.add('post_own-reply');
      }

      if (name.length || tripcode.length) {
        link.innerHTML = `<span class="post__reference-link-id">&gt;&gt;${postId}</span>`
          + ` <span class="post__reference-link-author">`
          + `(<span class="post__reference-link-name">${name}</span>`
          + `<span class="post__reference-link-tripcode">${tripcode}</span>)`
          + `</span>`;
      } else {
        link.innerHTML = `<span class="post__reference-link-id">&gt;&gt;${postId}</span>`;
      }

      footer.appendChild(link);
    });
  }
}
