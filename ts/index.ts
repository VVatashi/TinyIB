import IModule from './modules/IModule';

import Captcha from './modules/Captcha';
import CorrectTime from './modules/CorrectTime';
import ExpandFile from './modules/ExpandFile';
import FormMarkup from './modules/FormMarkup';
import FormSave from './modules/FormSave';
import QuotePost from './modules/QuotePost';
import StyleSwitcher from './modules/StyleSwitcher';

const modules: { [key: string]: IModule } = {};

modules['Captcha'] = new Captcha();
modules['CorrectTime'] = new CorrectTime();
modules['ExpandFile'] = new ExpandFile();
modules['FormMarkup'] = new FormMarkup();
modules['FormSave'] = new FormSave();
modules['QuotePost'] = new QuotePost();
modules['StyleSwitcher'] = new StyleSwitcher();

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    for (let i = 0; i < mutation.addedNodes.length; ++i) {
      const node = mutation.addedNodes[i];

      if (node.nodeType !== Node.ELEMENT_NODE) {
        continue;
      }

      const element = node as Element;

      if (element.classList.contains('post')) {
        const keys = Object.keys(modules);
        keys.forEach(key => {
          modules[key].onPostInsert(element);
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

  const keys = Object.keys(modules);
  keys.forEach(key => {
    modules[key].onReady();
  });
});
