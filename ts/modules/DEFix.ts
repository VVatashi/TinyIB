import BaseModule from './BaseModule';
import ModuleManager from '../ModuleManager';
import { qid, qsa, qs } from '../utils/DOM';

export default class DEFix extends BaseModule {
  constructor(manager: ModuleManager) {
    super(manager);
  }

  onReady() {
    setTimeout(() => {
      // Reset the posting form size.
      const message = qid('message') as HTMLTextAreaElement;
      message.style.width = '';
      message.style.height = '';
    });
  }
}
