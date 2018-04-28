import BaseModule from './BaseModule';
import ModuleManager from '../ModuleManager';
import { qid, qs } from '../utils/DOM';
import * as Cookie from '../utils/Cookie';

export default class FormSave extends BaseModule {
  constructor(manager: ModuleManager) {
    super(manager);
  }

  onReady() {
    const name = qs('input[name="name"]') as HTMLInputElement;

    if (name) {
      // Load name
      name.value = Cookie.get('tinyib_name', '');

      // Save name on change
      name.addEventListener('change', () => {
        const expiration_date = new Date();
        expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);
        Cookie.set('tinyib_name', name.value, expiration_date);
      });
    }

    const new_post_password = qid('newpostpassword') as HTMLInputElement;

    if (new_post_password) {
      // Load delete post password
      const password = Cookie.get('tinyib_password');
      new_post_password.value = password;

      const delete_post_password = qid('deletepostpassword') as HTMLInputElement;

      if (delete_post_password) {
        delete_post_password.value = password;
      }

      // Save delete post password on change
      new_post_password.addEventListener('change', () => {
        const expiration_date = new Date();
        expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);
        Cookie.set('tinyib_password', new_post_password.value, expiration_date);
      });
    }
  }
}
