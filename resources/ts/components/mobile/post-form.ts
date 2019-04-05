import { eventBus, Events } from '../..';
import { DOM } from '../../utils';

export class PostForm {
  constructor() {
    eventBus.on(Events.Ready, this.onReady.bind(this));
    eventBus.on(Events.InsertMarkup, (data: any[]) => {
      const form = DOM.qid('postform');
      if (!form) {
        console.warn('#postform is not found.');
        return;
      }

      const message = DOM.qs('#message', form) as HTMLTextAreaElement;
      if (!message) {
        console.warn('#message is not found.');
        return;
      }

      data.unshift(message);
      this.insertMarkup.apply(this, data);
    });
  }

  onReady() {
    const form = DOM.qid('postform') as HTMLFormElement;
    if (!form) {
      console.warn('#postform is not found.');
      return;
    }

    const subject = DOM.qs('#subject', form) as HTMLInputElement;
    if (subject) {
      const value = localStorage.getItem('postform.subject');
      if (value) {
        subject.value = value;
      }

      subject.addEventListener('change', e => {
        localStorage.setItem('postform.subject', subject.value)
      });
    }

    const name = DOM.qs('#name', form) as HTMLInputElement;
    if (name) {
      const value = localStorage.getItem('postform.name');
      if (value) {
        name.value = value;
      }

      name.addEventListener('change', e => {
        localStorage.setItem('postform.name', name.value);
      });
    }

    const email = DOM.qs('#email', form) as HTMLInputElement;
    if (email) {
      const value = localStorage.getItem('postform.email');
      if (value) {
        email.value = value;
      }

      email.addEventListener('change', e => {
        localStorage.setItem('postform.email', email.value);
      });
    }

    const message = DOM.qs('#message', form) as HTMLTextAreaElement;
    if (message) {
      const markup_buttons: { [key: string]: EventListener } = {
        'postform-markup-bold': e => this.insertBBCode(message, 'b'),
        'postform-markup-italic': e => this.insertBBCode(message, 'i'),
        'postform-markup-underline': e => this.insertBBCode(message, 'u'),
        'postform-markup-strike': e => this.insertBBCode(message, 's'),
        'postform-markup-sup': e => this.insertBBCode(message, 'sup'),
        'postform-markup-sub': e => this.insertBBCode(message, 'sub'),
        'postform-markup-spoiler': e => this.insertBBCode(message, 'spoiler'),
        'postform-markup-code': e => this.insertBBCode(message, 'code'),
        'postform-markup-quote': e => this.insertMarkup(message, '>', '', true),
      };

      const markup_buttons_ids = Object.keys(markup_buttons);
      markup_buttons_ids.forEach(id => {
        const button = DOM.qs(`#${id}`, form);
        if (button) {
          button.addEventListener('click', markup_buttons[id]);
        }
      });
    }

    const file_inputs = DOM.qsa('#file', form) as HTMLInputElement[];
    file_inputs.forEach(file_input => {
      file_input.addEventListener('change', e => {
        if (file_input.files && file_input.files.length) {
          const reader = new FileReader();
          reader.addEventListener('load', e => {
            const file_wrapper = file_input.parentElement;

            let file_preview = DOM.qs('.form__file-preview', file_wrapper) as HTMLImageElement;
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
    });

    form.addEventListener('submit', async e => {
      e.preventDefault();

      const formData = new FormData(form);
      const response = await fetch(`${window.baseUrl}/ajax/mobile/post/create`, {
        method: 'POST',
        body: formData,
        credentials: 'same-origin',
      });

      const isOnBoardPage = DOM.qsa('.thread').length === 0;
      if (isOnBoardPage) {
        if (response.headers.has('Location')) {
          window.location.href = response.headers.get('Location');
        }
      }

      if (response.status < 400) {
        // Clear form message and file.
        message.value = '';
        file_inputs.forEach(el => {
          el.type = 'text';
          el.value = '';
          el.type = 'file';
        });

        // Clear form file preview.
        DOM.qsa('.form__file-preview', form).forEach(el => el.remove());

        const data = await response.json();
        if (data.name) {
          localStorage.setItem('user.name', data.name);
        } else {
          localStorage.removeItem('user.name');
        }

        if (data.tripcode) {
          localStorage.setItem('user.tripcode', data.tripcode);
        } else {
          localStorage.removeItem('user.tripcode');
        }

        eventBus.emit(Events.PostCreated);
      } else {
        // TODO: show error in the form.
        console.error(response);
      }
    });
  }

  protected insertBBCode(message: HTMLTextAreaElement, code: string) {
    return this.insertMarkup(message, `[${code}]`, `[/${code}]`);
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
}
