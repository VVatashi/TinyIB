import IModule from './IModule';

export default class BaseModule implements IModule {
  onReady() { }
  onPostInsert(post: Element) { }
}
