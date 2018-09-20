import BaseModule from '../BaseModule';
import ModuleManager from '../../ModuleManager';
import { qsa } from '../../utils/DOM';

export default abstract class PostModule extends BaseModule {
  constructor(manager: ModuleManager) {
    super(manager);
  }

  protected processPost(post: Element) { };

  onReady() {
    const posts = qsa('.post');
    const count = posts.length;
    for (let i = 0; i < count; ++i) {
      this.processPost(posts[i]);
    }
  }

  onPostInsert(post: Element) {
    this.processPost(post);
  }
}
