import { eventBus, Events } from '..';
import { DOM } from '../utils';

export class PostingForm {
  protected isInThread: boolean = false;

  protected wrapper: HTMLElement;
  protected form: HTMLFormElement;

  protected subject: HTMLInputElement;
  protected name: HTMLInputElement;
  protected fileInput: HTMLInputElement;
  protected message: HTMLTextAreaElement;

  protected status: HTMLElement;
  protected preview: HTMLElement;

  // Overrides file in the form.
  protected file: File = null;

  protected submit: HTMLButtonElement;
  protected close: HTMLButtonElement;
  protected previewRemove: HTMLButtonElement;

  constructor() {
    eventBus.$on(Events.Ready, this.onReady.bind(this));
    eventBus.$on(Events.PostsInserted, this.onPostsInserted.bind(this));
  }

  protected onReady() {
    this.wrapper = DOM.qs('#posting-form-wrapper') as HTMLElement;
    if (!this.wrapper) {
      return;
    }

    this.form = DOM.qs('#posting-form', this.wrapper) as HTMLFormElement;

    const parent = DOM.qs('[name="parent"]', this.form) as HTMLInputElement;
    this.isInThread = +parent.value !== 0;

    this.subject = DOM.qs('[name="subject"]', this.form) as HTMLInputElement;
    this.name = DOM.qs('[name="name"]', this.form) as HTMLInputElement;
    this.fileInput = DOM.qs('[name="file"]', this.form) as HTMLInputElement;
    this.message = DOM.qs('[name="message"]', this.form) as HTMLTextAreaElement;

    this.status = DOM.qs('#posting-form-status', this.form) as HTMLElement;
    this.preview = DOM.qs('#posting-form-preview', this.form) as HTMLElement;

    this.submit = DOM.qs('[type="submit"]', this.form) as HTMLButtonElement;
    this.close = DOM.qs('#posting-form-close', this.form) as HTMLButtonElement;
    this.previewRemove = DOM.qs('#posting-form-preview-remove', this.form) as HTMLButtonElement;

    // Load saved name.
    const name = localStorage['posting-form.name'];
    if (name) {
      this.name.value = name;
    }

    // Save name on change.
    this.name.addEventListener('change', e => {
      localStorage['posting-form.name'] = this.name.value;
    });

    this.fileInput.addEventListener('change', e => {
      // Reset file override on file field change.
      this.file = null;

      if (this.fileInput.files && this.fileInput.files.length) {
        this.showPreview(this.fileInput.files[0]);
      } else {
        this.hidePreview();
      }
    });

    // Submit form on the Ctrl+Enter in the message field.
    this.message.addEventListener('keydown', e => {
      if ((e.keyCode == 10 || e.keyCode == 13) && e.ctrlKey) {
        this.submitForm();
      }
    });

    // Paste file.
    this.message.addEventListener('paste', e => {
      const data = e.clipboardData || (e as any).originalEvent.clipboardData as DataTransfer;
      const items = Array.prototype.slice.call(data.items) as DataTransferItem[];
      const item = items.filter(item => {
        return item.type.startsWith('image/')
          || item.type.startsWith('audio/')
          || item.type.startsWith('video/');
      })[0];

      if (item) {
        this.file = item.getAsFile();

        // Show preview.
        this.showPreview(this.file);
      }
    });

    // Handle form submit.
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.submitForm();
    });

    // Handle form close.
    this.close.addEventListener('click', e => {
      e.preventDefault();
      this.restoreForm();
    });

    // Handle preview remove.
    this.previewRemove.addEventListener('click', e => {
      e.preventDefault();
      this.resetFileField();
    });
  }

  protected onPostsInserted(posts: HTMLElement[]) {
    posts.forEach(post => {
      const referenceLinks = DOM.qsa('a[data-reflink]', post);
      referenceLinks.forEach(link => {
        const id = +link.getAttribute('data-reflink');
        link.addEventListener('click', e => {
          e.preventDefault();

          if (this.isInThread) {
            // Move form to the post.
            this.moveFormToPost(post);
          }

          // Insert markup.
          this.insert(`>>${id}\n`, { newLine: true });
        });
      });
    });
  }

  protected submitForm() {
    // Submit create post request.
    const url = `${window.baseUrl}/ajax/post/create`;
    const data = new FormData(this.form);

    // Override file from the form.
    if (this.file) {
      data.append('file', this.file);
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.withCredentials = true;

    xhr.upload.addEventListener('progress', e => {
      const progressPercent = Math.ceil(e.loaded / e.total * 100);
      this.status.textContent = `Uploading... ${progressPercent}%`;
    });

    xhr.addEventListener('readystatechange', e => {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
      }

      // Enable form.
      this.setFormState({ enabled: true });

      if (xhr.status === 201) {
        this.resetForm();
        this.status.textContent = '';

        // Move form to the initial location.
        this.restoreForm();

        if (this.isInThread) {
          // Trigger DE thread update.
          const update = DOM.qs('.de-thr-updater-link') as HTMLAnchorElement;
          if (update) {
            update.click();
          }
        } else {
          // Redirect to thread.
          const location = xhr.getResponseHeader('Location');
          if (location) {
            window.location.href = location;
          }
        }
      } else {
        const data = JSON.parse(xhr.responseText);
        if (data && data.error) {
          this.status.textContent = `Error: ${data.error}`;
        } else {
          this.status.textContent = `Error: ${xhr.status} ${xhr.statusText}`;
        }
      }
    });

    xhr.send(data);

    // Disable form.
    this.setFormState({ enabled: false });
  }

  protected setFormState({ enabled }: { enabled: boolean }) {
    const controls = [
      this.subject,
      this.name,
      this.fileInput,
      this.message,
      this.submit,
    ];

    controls.filter(control => control)
      .forEach(control => {
        control.disabled = !enabled;
      });
  }

  protected resetForm() {
    // Reset not required for the name field.
    const controls = [
      this.subject,
      this.message,
    ];

    controls.filter(control => control)
      .forEach(control => {
        control.value = '';
      });

    // File field needs special handling.
    this.resetFileField();
  }

  protected resetFileField() {
    if (this.fileInput) {
      this.fileInput.type = 'text';
      this.fileInput.value = '';
      this.fileInput.type = 'file';
    }

    this.file = null;

    this.hidePreview();
  }

  protected moveFormToPost(post: HTMLElement) {
    this.form.style.marginLeft = '0';
    this.close.classList.remove('hidden');
    post.parentElement.insertBefore(this.form, post.nextSibling);
  }

  protected restoreForm() {
    this.form.style.marginLeft = 'auto';
    this.close.classList.add('hidden');
    this.wrapper.insertBefore(this.form, null);
    this.wrapper.scrollIntoView();
  }

  protected showPreview(file: File) {
    const reader = new FileReader();
    reader.addEventListener('load', e => {
      let image = DOM.qs('#posting-form-preview-image', this.preview) as HTMLImageElement;
      if (!image) {
        image = document.createElement('img');
        image.id = 'posting-form-preview-image';
        image.classList.add('posting-form__preview-image');
        this.preview.appendChild(image);
      }

      image.src = (e.target as any).result;
      this.preview.classList.remove('hidden');
    });
    reader.readAsDataURL(file);
  }

  protected hidePreview() {
    this.preview.classList.add('hidden');
  }

  protected insert(str: string, { newLine }: { newLine: boolean } = { newLine: false }) {
    if (this.message) {
      const content = this.message.value;
      const begin = this.message.selectionStart;
      const end = this.message.selectionEnd;

      const before = content.substring(0, begin);
      const after = content.substring(end);

      const insertNewLine = newLine
        && before.length > 0
        && !before.endsWith('\n')
        && !str.startsWith('\n');

      this.message.value = [
        before,
        insertNewLine ? '\n' : '',
        str,
        after,
      ].join('');

      this.message.focus();

      const position = begin + str.length + (insertNewLine ? 1 : 0);
      this.message.selectionStart = position;
      this.message.selectionEnd = position;
    }

    return false;
  }
}
