import { eventBus, Events } from '..';
import { DOM } from '../utils';

export class NewPostsDetector {
  constructor() {
    /** @todo: remove MutationObserver ASAP, with integrated thread updating. */
    const observer = new MutationObserver(mutations => {
      const posts = mutations
        // Get added posts, if any.
        .map(mutation => {
          const nodeList = mutation.addedNodes;
          const nodes = Array.prototype.slice.call(nodeList) as Node[];

          const elements = nodes.filter(node =>
            node.nodeType === Node.ELEMENT_NODE) as Element[];

          return elements
            // If element is post itself, return it,
            // else query for element children.
            .map(element =>
              element.classList.contains('post')
                ? [element]
                : DOM.qsa('.post', element))
            // Flatten posts array.
            .reduce((total, current) =>
              total.concat(current), []);
        })
        // Flatten posts array.
        .reduce((total, current) =>
          total.concat(current), [])
        .filter(post => !post.hasAttribute('data-processed') && !post.classList.contains('post--popup'));

      posts.forEach(post => post.setAttribute('data-processed', 'true'));

      if (posts.length > 0) {
        eventBus.$emit(Events.PostsInserted, posts, false);
      }
    });

    eventBus.$on(Events.Ready, () => {
      // Setup MutationObserver.
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }
}
