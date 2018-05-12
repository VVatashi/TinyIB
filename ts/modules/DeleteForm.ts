import BaseModule from './BaseModule';
import ModuleManager from '../ModuleManager';
import { qid } from '../utils/DOM';
import * as Cookie from '../utils/Cookie';

export default class DeleteForm extends BaseModule {
  constructor(manager: ModuleManager) {
    super(manager);
  }

  onReady() {
    const form = qid('delform');
    if (!form) {
      return;
    }

    const delete_post_password = qid('deletepostpassword') as HTMLInputElement;
    if (delete_post_password) {
      // Load delete post password.
      delete_post_password.value = Cookie.get('tinyib_password');
    }
  }
}
