import ModuleManager from './ModuleManager';

import Captcha from './modules/Captcha';
import CorrectTime from './modules/CorrectTime';
import DeleteForm from './modules/DeleteForm';
import ExpandFile from './modules/ExpandFile';
import PostForm from './modules/PostForm';
import QuotePost from './modules/QuotePost';
import Settings from './modules/Settings';
import StyleSwitcher from './modules/StyleSwitcher';

declare global {
  interface Window {
    tinyib?: {
      moduleManager?: ModuleManager,
    }
  }
}

const moduleManager = new ModuleManager(true);
moduleManager.addModule('Captcha', new Captcha(moduleManager));
moduleManager.addModule('CorrectTime', new CorrectTime(moduleManager));
moduleManager.addModule('DeleteForm', new DeleteForm(moduleManager));
moduleManager.addModule('ExpandFile', new ExpandFile(moduleManager));
moduleManager.addModule('PostForm', new PostForm(moduleManager));
moduleManager.addModule('QuotePost', new QuotePost(moduleManager));
moduleManager.addModule('Settings', new Settings(moduleManager));
moduleManager.addModule('StyleSwitcher', new StyleSwitcher(moduleManager));

window.tinyib = {};
window.tinyib.moduleManager = moduleManager;
