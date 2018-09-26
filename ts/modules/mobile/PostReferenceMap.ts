import PostModule from './PostModule';
import ModuleManager from '../../ModuleManager';
import { qs, qsa } from '../../utils/DOM';

export default class PostReferenceMap extends PostModule {
  protected posts: { [id: number]: Element } = {};

  constructor(manager: ModuleManager) {
    super(manager);
  }

  protected processPost(post: Element) {
    const postId = +post.getAttribute('data-post-id');

    // Store post.
    this.posts[postId] = post;

    // Get references.
    const referenceElements = qsa('a[data-target-post-id]', post);
    const references = referenceElements.map(element => {
      return +element.getAttribute('data-target-post-id');
    });

    // Get referenced posts.
    const referencedPosts = references
      .map(reference => this.posts[reference])
      .filter(post => post);

    // Append to posts a reference to this post.
    referencedPosts.forEach(post => {
      // Create post footer if it is not exists.
      let footer = qs('.post__footer', post);
      if (!footer) {
        footer = document.createElement('div');
        footer.classList.add('post__footer');
        post.appendChild(footer);
      }

      // Append reference to the footer.
      const link = document.createElement('a');
      link.classList.add('post__reference-link');
      link.href = `#post_${postId}`;
      link.textContent = `>>${postId}`;
      footer.appendChild(link);
    });
  }
}
