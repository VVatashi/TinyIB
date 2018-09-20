import BaseModule from '../BaseModule';
import ModuleManager from '../../ModuleManager';
import { qs, qsa, qid } from '../../utils/DOM';

export default class PostForm extends BaseModule {
  constructor(manager: ModuleManager) {
    super(manager);
  }

  protected insertMarkup(
    message: HTMLTextAreaElement,
    before: string,
    after: string,
    insertNewLine = false,
  ) {
    const str = message.value;
    const begin = message.selectionStart;
    const end = message.selectionEnd;

    const strStart = str.substring(0, begin);
    const strSelection = str.substring(begin, end);
    const strEnd = str.substring(end);

    if (insertNewLine && strStart.length && !strStart.endsWith('\n')) {
      before = `\n${before}`;
    }

    message.value = [
      strStart,
      before,
      strSelection,
      after,
      strEnd,
    ].join('');

    message.focus();
    message.selectionStart = begin + before.length;
    message.selectionEnd = begin + before.length + (end - begin);
  }

  protected insertBBCode(message: HTMLTextAreaElement, code: string) {
    return this.insertMarkup(message, `[${code}]`, `[/${code}]`);
  }

  onReady() {
    const form = qid('postform');
    if (!form) {
      console.warn('#postform is not found.');
      return;
    }

    const subject = qs('#subject', form) as HTMLInputElement;
    if (subject) {
      const value = localStorage.getItem('postform.subject');
      if (value) {
        subject.value = value;
      }

      subject.addEventListener('change', e => {
        localStorage.setItem('postform.subject', subject.value)
      });
    }

    const name = qs('#name', form) as HTMLInputElement;
    if (name) {
      const value = localStorage.getItem('postform.name');
      if (value) {
        name.value = value;
      }

      name.addEventListener('change', e => {
        localStorage.setItem('postform.name', name.value)
      });
    }

    const email = qs('#email', form) as HTMLInputElement;
    if (email) {
      const value = localStorage.getItem('postform.email');
      if (value) {
        email.value = value;
      }

      email.addEventListener('change', e => {
        localStorage.setItem('postform.email', email.value)
      });
    }

    const message = qs('#message', form) as HTMLTextAreaElement;
    if (message) {
      const markup_buttons: { [key: string]: EventListener } = {
        'postform-markup-bold': e => this.insertBBCode(message, 'b'),
        'postform-markup-italic': e => this.insertBBCode(message, 'i'),
        'postform-markup-underline': e => this.insertBBCode(message, 'u'),
        'postform-markup-strike': e => this.insertBBCode(message, 's'),
        'postform-markup-sup': e => this.insertBBCode(message, 'sup'),
        'postform-markup-sub': e => this.insertBBCode(message, 'sub'),
        'postform-markup-spoiler': e => this.insertBBCode(message, 'spoiler'),
        'postform-markup-rp': e => this.insertBBCode(message, 'rp'),
        'postform-markup-code': e => this.insertBBCode(message, 'code'),
        'postform-markup-quote': e => this.insertMarkup(message, '>', '', true),
      };

      const markup_buttons_ids = Object.keys(markup_buttons);
      markup_buttons_ids.forEach(id => {
        const button = qs(`#${id}`, form);
        if (button) {
          button.addEventListener('click', markup_buttons[id]);
        }
      });
    }

    const file_inputs = qsa('#file', form);
    const count = file_inputs.length;
    for (let i = 0; i < count; ++i) {
      const file_input = file_inputs[i] as HTMLInputElement;
      file_input.addEventListener('change', e => {
        if (file_input.files && file_input.files.length) {
          const reader = new FileReader();
          reader.addEventListener('load', e => {
            const file_wrapper = file_input.parentElement;

            let file_preview = qs('.form__file-preview', file_wrapper) as HTMLImageElement;
            if (!file_preview) {
              file_preview = document.createElement('img');
              file_preview.classList.add('form__file-preview');
              file_wrapper.appendChild(file_preview);
            }

            file_preview.src = (e.target as any).result;
          });
          reader.readAsDataURL(file_input.files[0]);
        }
      });
    }
  }

  onEvent(event: string, data?: any) {
    if (event === 'insertMarkup') {
      const form = qid('postform');
      if (!form) {
        console.warn('#postform is not found.');
        return;
      }

      const message = qs('#message', form) as HTMLTextAreaElement;
      if (!message) {
        console.warn('#message is not found.');
        return;
      }

      data.unshift(message);
      this.insertMarkup.apply(this, data);
    }
  }
}
