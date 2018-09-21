import { qsa } from './utils/DOM';

import IModule from './modules/IModule';

export default class ModuleManager {
  protected readonly modules: { [key: string]: IModule } = {};

  constructor() {
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

      // Call onPostInsert() for each post x module.
      this.forEachModule((moduleName, module) => {
        return new Promise((resolve, reject) => {
          try {
            posts.forEach(post => module.onPostInsert(post));
          }
          catch (error) {
            console.error(`Error in ${moduleName}.onPostInsert(): ${error}`);
            reject(error);
          }

          resolve();
        });
      });
    });

    document.addEventListener('DOMContentLoaded', () => {
      // Setup MutationObserver.
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Call onReady() for each module.
      this.forEachModule((moduleName, module) => {
        return new Promise((resolve, reject) => {
          try {
            module.onReady();
          }
          catch (error) {
            console.error(`Error in ${moduleName}.onReady(): ${error}`);
            reject(error);
          }

          resolve();
        });
      });
    });

    const resize = () => {
      // Call onResize() for each module.
      this.forEachModule((moduleName, module) => {
        return new Promise(() => {
          try {
            module.onResize();
          }
          catch (error) {
            console.error(`Error in ${moduleName}.onResize(): ${error}`);
          }
        });
      });
    };

    window.addEventListener('resize', resize);
  }

  protected forEachModule(
    callback: (moduleName: string, module: IModule) => any
  ) {
    const moduleNames = Object.keys(this.modules);
    return moduleNames.map(moduleName => {
      const module = this.modules[moduleName];
      return callback(moduleName, module);
    });
  }

  addModule(key: string, value: IModule) {
    this.modules[key] = value;
  }

  emit(event: string, data?: any) {
    // Call onEvent() for each module.
    this.forEachModule((moduleName, module) => {
      return new Promise(() => {
        try {
          module.onEvent(event, data);
        }
        catch (error) {
          console.error(`Error in ${moduleName}.onEvent(${event}): ${error}`);
        }
      });
    });
  }
}
