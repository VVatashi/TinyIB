import ModuleManager from './ModuleManager';

import PostForm from './modules/mobile/PostForm';
import PostImagePopup from './modules/mobile/PostImagePopup';
import PostQuote from './modules/mobile/PostQuote';

declare global {
  interface Window {
    tinyib?: {
      moduleManager?: ModuleManager,
    }
  }
}

const moduleManager = new ModuleManager();
moduleManager.addModule('PostForm', new PostForm(moduleManager));
moduleManager.addModule('PostImagePopup', new PostImagePopup(moduleManager));
moduleManager.addModule('PostQuote', new PostQuote(moduleManager));

window.tinyib = {};
window.tinyib.moduleManager = moduleManager;
