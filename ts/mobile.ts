import ModuleManager from './ModuleManager';

import PostImagePopup from './modules/mobile/PostImagePopup';

declare global {
  interface Window {
    tinyib?: {
      moduleManager?: ModuleManager,
    }
  }
}

const moduleManager = new ModuleManager();
moduleManager.addModule('PostImagePopup', new PostImagePopup(moduleManager));

window.tinyib = {};
window.tinyib.moduleManager = moduleManager;
