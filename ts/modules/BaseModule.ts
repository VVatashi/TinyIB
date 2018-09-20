import IModule from './IModule';
import ModuleManager from '../ModuleManager';

export default abstract class BaseModule implements IModule {
  protected readonly manager: ModuleManager;

  constructor(manager: ModuleManager) {
    this.manager = manager;
  }

  onReady() { }
  onResize() { }
  onPostInsert(post: Element) { }
  onEvent(event: string, data?: any) { }
}
