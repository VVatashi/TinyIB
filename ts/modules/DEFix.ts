import BaseModule from './BaseModule';
import ModuleManager from '../ModuleManager';
import { qid, qsa, qs } from '../utils/DOM';

export default class DEFix extends BaseModule {
  constructor(manager: ModuleManager) {
    super(manager);
  }

  onReady() {
    setTimeout(() => {
      // Reset the message size.
      const message = qid('message') as HTMLTextAreaElement;
      message.classList.remove('de-textarea');

      // Fix file preview.
      const preview = qs('.de-file');

      if (preview) {
        const preview_field = document.createElement('tr');
        preview_field.classList.add('form__field', 'form__field_fixed-width', 'field');

        const preview_label_wrapper = document.createElement('td');
        preview_label_wrapper.classList.add('field__label-wrapper');
        preview_field.appendChild(preview_label_wrapper);

        const preview_input_wrapper = document.createElement('td');
        preview_input_wrapper.classList.add('field__input-wrapper');
        preview_input_wrapper.appendChild(preview);
        preview_field.appendChild(preview_input_wrapper);

        const message_group = qs('.form__group_message');
        message_group.appendChild(preview_field);
      }
    }, 1000);
  }
}
