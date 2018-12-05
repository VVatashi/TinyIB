import ModuleManager from './ModuleManager';

import PostCorrectTime from './modules/mobile/PostCorrectTime';
import PostForm from './modules/mobile/PostForm';
import PostImagePopup from './modules/mobile/PostImagePopup';
import PostQuote from './modules/mobile/PostQuote';
import PostReferenceMap from './modules/mobile/PostReferenceMap';
import ThreadUpdater from './modules/mobile/ThreadUpdater';

declare global {
  interface Window {
    baseUrl: string;
    tinyib?: {
      moduleManager?: ModuleManager,
    },
    Vue: any,
  }
}

const moduleManager = new ModuleManager();
moduleManager.addModule('PostCorrectTime', new PostCorrectTime(moduleManager));
moduleManager.addModule('PostForm', new PostForm(moduleManager));
moduleManager.addModule('PostImagePopup', new PostImagePopup(moduleManager));
moduleManager.addModule('PostQuote', new PostQuote(moduleManager));
moduleManager.addModule('PostReferenceMap', new PostReferenceMap(moduleManager));
moduleManager.addModule('ThreadUpdater', new ThreadUpdater(moduleManager));

window.tinyib = {};
window.tinyib.moduleManager = moduleManager;
