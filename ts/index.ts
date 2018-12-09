import ModuleManager from './ModuleManager';

import Captcha from './modules/Captcha';
import CorrectTime from './modules/CorrectTime';
import DeleteForm from './modules/DeleteForm';
import PostReferenceMap from './modules/PostReferenceMap';
import Settings from './modules/Settings';
import StyleSwitcher from './modules/StyleSwitcher';

import { ComponentManager } from './ComponentManager';
import { PostingForm } from './components';

declare global {
  interface Window {
    baseUrl: string;
    tinyib?: {
      moduleManager?: ModuleManager,
    }
  }
}

const componentManager = new ComponentManager();
componentManager.addComponent(new PostingForm());

const moduleManager = new ModuleManager(true);
moduleManager.addModule('Captcha', new Captcha(moduleManager));
moduleManager.addModule('CorrectTime', new CorrectTime(moduleManager));
moduleManager.addModule('DeleteForm', new DeleteForm(moduleManager));
moduleManager.addModule('PostReferenceMap', new PostReferenceMap(moduleManager));
moduleManager.addModule('Settings', new Settings(moduleManager));
moduleManager.addModule('StyleSwitcher', new StyleSwitcher(moduleManager));

window.tinyib = {};
window.tinyib.moduleManager = moduleManager;
