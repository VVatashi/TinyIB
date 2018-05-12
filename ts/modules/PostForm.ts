import BaseModule from './BaseModule';
import ModuleManager from '../ModuleManager';
import ISettingsDto from '../ISettingsDto';
import { qid, qs } from '../utils/DOM';
import * as Cookie from '../utils/Cookie';

export default class PostForm extends BaseModule {
  protected readonly settings: ISettingsDto;
  protected form: HTMLElement;
  protected resize_width = false;
  protected resize_height = false;

  constructor(manager: ModuleManager) {
    super(manager);

    // Load settings from a cookie
    this.settings = JSON.parse(Cookie.get('tinyib_settings', '{}'));
    this.form = null;
  }

  protected insertMarkup(before: string, after: string) {
    const message = qid('message') as HTMLTextAreaElement;
    if (message) {
      const str = message.value;
      const begin = message.selectionStart;
      const end = message.selectionEnd;

      message.value = [
        str.substring(0, begin),
        before,
        str.substring(begin, end),
        after,
        str.substring(end),
      ].join('');

      message.focus();
      message.selectionStart = begin + before.length;
      message.selectionEnd = begin + before.length + (end - begin);
    }

    return false;
  }

  protected insertBBCode(code: string) {
    return this.insertMarkup(`[${code}]`, `[/${code}]`);
  }

  protected setupMarkupButtons() {
    const buttons: { [key: string]: EventListener } = {
      'markup_quote': () => this.insertMarkup('>', ''),
      'markup_b': () => this.insertBBCode('b'),
      'markup_i': () => this.insertBBCode('i'),
      'markup_u': () => this.insertBBCode('u'),
      'markup_s': () => this.insertBBCode('s'),
      'markup_sup': () => this.insertBBCode('sup'),
      'markup_sub': () => this.insertBBCode('sub'),
      'markup_spoiler': () => this.insertBBCode('spoiler'),
      'markup_code': () => this.insertBBCode('code'),
      'markup_rp': () => this.insertBBCode('rp'),
    };

    const ids = Object.keys(buttons);
    ids.forEach((id) => {
      const button = qid(id);
      if (button) {
        button.addEventListener('click', buttons[id]);
      }
    });
  }

  protected beginResize = (event: MouseEvent) => {
    this.resize_width = event.pageX - this.form.offsetLeft > this.form.clientWidth - 10;
    this.resize_height = event.pageY - this.form.offsetTop > this.form.clientHeight - 10;

    window.addEventListener('mousemove', this.resize);
    window.addEventListener('mouseup', this.endResize);
  }

  protected resize = (event: MouseEvent) => {
    if (this.resize_width) {
      const width = event.pageX - this.form.offsetLeft;
      this.form.style.width = `${width}px`;
    }

    if (this.resize_height) {
      const height = event.pageY - this.form.offsetTop;
      this.form.style.height = `${height}px`;
    }

    event.preventDefault();
    event.stopPropagation();
  }

  protected endResize = (event: MouseEvent) => {
    window.removeEventListener('mousemove', this.resize);
    window.removeEventListener('mouseup', this.endResize);
  }

  onReady() {
    this.form = qid('postform');
    if (!this.form) {
      return;
    }

    const name = qid('name') as HTMLInputElement;
    if (name) {
      // Load name.
      name.value = Cookie.get('tinyib_name', '');

      // Save name on change.
      name.addEventListener('change', () => {
        const expiration_date = new Date();
        expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);
        Cookie.set('tinyib_name', name.value, expiration_date);
      });
    }

    this.setupMarkupButtons();

    const message = qid('message') as HTMLTextAreaElement;
    if (message) {
      // Reset the message size.
      message.setAttribute('style', '');
      message.classList.remove('de-textarea');
    }

    const message_resizer = qid('de-resizer-text');
    if (message_resizer) {
      // Hide broken DE message resizer.
      message_resizer.setAttribute('style', 'display: none !important;');
    }

    const file_preview = qs('.de-file', this.form);
    if (file_preview) {
      // Fix DE file preview.
      const preview_field = document.createElement('tr');
      preview_field.classList.add('form__field', 'form__field_fixed-width', 'field');

      const preview_label_wrapper = document.createElement('td');
      preview_label_wrapper.classList.add('field__label-wrapper');
      preview_field.appendChild(preview_label_wrapper);

      const preview_input_wrapper = document.createElement('td');
      preview_input_wrapper.classList.add('field__input-wrapper');
      preview_input_wrapper.appendChild(file_preview);
      preview_field.appendChild(preview_input_wrapper);

      const message_group = qs('.form__group_message', this.form);

      if (this.settings.form_preview_align === 'left') {
        message_group.insertBefore(preview_field, message_group.firstChild);
      } else {
        message_group.appendChild(preview_field);
      }
    }

    const new_post_password = qid('newpostpassword') as HTMLInputElement;
    if (new_post_password) {
      // Load delete post password.
      new_post_password.value = Cookie.get('tinyib_password');

      // Save delete post password on change.
      new_post_password.addEventListener('change', () => {
        const expiration_date = new Date();
        expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);
        Cookie.set('tinyib_password', new_post_password.value, expiration_date);
      });
    }

    this.form.addEventListener('mousedown', this.beginResize);
  }
}
