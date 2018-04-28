import { mapValues } from 'lodash-es';
import { throttle } from 'lodash-es';

import IModule from './modules/IModule';

import Captcha from './modules/Captcha';
import CorrectTime from './modules/CorrectTime';
import ExpandFile from './modules/ExpandFile';
import FormMarkup from './modules/FormMarkup';
import FormSave from './modules/FormSave';
import QuotePost from './modules/QuotePost';
import Settings from './modules/Settings';
import StyleSwitcher from './modules/StyleSwitcher';

export default class ModuleManager {
  protected readonly modules: { [key: string]: IModule } = {};

  constructor() {
    this.modules['Captcha'] = new Captcha(this);
    this.modules['CorrectTime'] = new CorrectTime(this);
    this.modules['ExpandFile'] = new ExpandFile(this);
    this.modules['FormMarkup'] = new FormMarkup(this);
    this.modules['FormSave'] = new FormSave(this);
    this.modules['QuotePost'] = new QuotePost(this);
    this.modules['Settings'] = new Settings(this);
    this.modules['StyleSwitcher'] = new StyleSwitcher(this);

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        for (let i = 0; i < mutation.addedNodes.length; ++i) {
          const node = mutation.addedNodes[i];

          if (node.nodeType !== Node.ELEMENT_NODE) {
            continue;
          }

          const element = node as Element;

          if (element.classList.contains('post')) {
            mapValues(this.modules, (module, key) => {
              return new Promise(() => {
                try {
                  module.onPostInsert(element);
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
