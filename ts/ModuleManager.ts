import { mapValues } from 'lodash-es';
import { throttle } from 'lodash-es';

import { qsa } from './utils/DOM';

import IModule from './modules/IModule';

export default class ModuleManager {
  protected readonly modules: { [key: string]: IModule } = {};

  constructor() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        for (let i = 0; i < mutation.addedNodes.length; ++i) {
          const node = mutation.addedNodes[i];

          if (node.nodeType !== Node.ELEMENT_NODE) {
            continue;
          }

          const element = node as Element;
          const posts = qsa('.post', element);
          const count = posts.length;
          if (count) {
            mapValues(this.modules, (module, key) => {
              return new Promise(() => {
                try {
                  for (let i = 0; i < count; ++i) {
                    module.onPostInsert(posts[i]);
                  }
                }
                catch (error) {
                  console.error(`Error in ${key}.onPostInsert(): ${error}`);
                }
              });
            });
          }
        }
      });
    });

    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      mapValues(this.modules, (module, key) => {
        return new Promise(() => {
          try {
            module.onReady();
          }
          catch (error) {
            console.error(`Error in ${key}.onReady(): ${error}`);
          }
        });
      });
    });

    const resize = throttle(() => {
      mapValues(this.modules, (module, key) => {
        return new Promise(() => {
          try {
            module.onResize();
          }
          catch (error) {
            console.error(`Error in ${key}.onResize(): ${error}`);
          }
        });
      });
    }, 50);

    window.addEventListener('resize', resize);
  }

  addModule(key: string, value: IModule) {
    this.modules[key] = value;
  }

  emit(event: string, data?: any) {
    mapValues(this.modules, (module, key) => {
      return new Promise(() => {
        try {
          module.onEvent(event, data);
        }
        catch (error) {
          console.error(`Error in ${key}.onEvent(): ${error}`);
        }
      });
    });
  }
}
