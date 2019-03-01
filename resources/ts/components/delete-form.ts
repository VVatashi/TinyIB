import { eventBus, Events } from '..';
import { Cookie, DOM } from '../utils';

export class DeleteForm {
  constructor() {
    eventBus.$on(Events.Ready, this.onReady.bind(this));
  }

  onReady() {
    const form = DOM.qid('delform');
    if (!form) {
      return;
    }

    const delete_post_password = DOM.qid('deletepostpassword') as HTMLInputElement;
    if (delete_post_password) {
      // Load delete post password.
      delete_post_password.value = Cookie.get('tinyib_password');
    }
  }
}
