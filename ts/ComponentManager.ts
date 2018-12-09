import { Component } from "./components/Component";
import { Event } from "./Event";
import { qsa, qs } from "./utils/DOM";

type Components = { [key: string]: Component };

export class ComponentManager {
  protected components: Components = {};

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
                : qsa('.post', element))
            // Flatten posts array.
            .reduce((total, current) =>
              total.concat(current), []);
        })
        // Flatten posts array.
        .reduce((total, current) =>
          total.concat(current), []);

      if (posts.length > 0) {
        this.dispatchEvent(Event.PostsInserted, { posts });
      }
    });

    document.addEventListener('DOMContentLoaded', e => {
      // Setup MutationObserver.
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      this.dispatchEvent(Event.Ready);

      const posts = qsa('.post');
      if (posts.length > 0) {
        this.dispatchEvent(Event.PostsInserted, { posts });
      }
    });
  }

  dispatchEvent(event: Event, data: any = null) {
    const componentKeys = Object.keys(this.components);
    componentKeys.forEach(componentKey => {
      const component = this.components[componentKey];

      try {
        component.dispatchEvent(event, data);
      } catch (error) {
        console.error(error);
      }
    });
  }

  addComponent(component: Component) {
    this.components[component.constructor.name] = component;
  }
}
