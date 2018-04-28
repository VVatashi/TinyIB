import ModuleManager from './ModuleManager';

declare global {
  interface Window {
    tinyib?: {
      moduleManager?: ModuleManager,
    }
  }
}

window.tinyib = {};
window.tinyib.moduleManager = new ModuleManager();
