import { Event } from '../Event';
import { qs, qsa } from '../utils/DOM';

export class PostingForm {
  protected isInThread: boolean = false;

  protected wrapper: HTMLElement;
  protected form: HTMLFormElement;

  protected subject: HTMLInputElement;
  protected name: HTMLInputElement;
  protected file: HTMLInputElement;
  protected message: HTMLTextAreaElement;
  protected status: HTMLElement;

  protected submit: HTMLButtonElement;

  dispatchEvent(event: Event, data: any) {
    switch (event) {
      case Event.Ready:
        this.onReady();
        break;

      case Event.PostsInserted:
        this.onPostsInserted(data.posts);
        break;
    }
  }

  protected onReady() {
    this.wrapper = qs('#posting-form-wrapper') as HTMLElement;
    if (!this.wrapper) {
      return;
    }

    this.form = qs('#posting-form', this.wrapper) as HTMLFormElement;

    const parent = qs('[name="parent"]', this.form) as HTMLInputElement;
    this.isInThread = +parent.value !== 0;

    this.subject = qs('[name="subject"]', this.form) as HTMLInputElement;
    this.name = qs('[name="name"]', this.form) as HTMLInputElement;
    this.file = qs('[name="file"]', this.form) as HTMLInputElement;
    this.message = qs('[name="message"]', this.form) as HTMLTextAreaElement;
    this.status = qs('#posting-form-status', this.form) as HTMLElement;

    this.submit = qs('[type="submit"]', this.form) as HTMLButtonElement;

    // Load saved name.
    const name = localStorage['posting-form.name'];
    if (name) {
      this.name.value = name;
    }

    // Save name on change.
    this.name.addEventListener('change', e => {
      localStorage['posting-form.name'] = this.name.value;
    });

    // Handle form submit.
    this.form.addEventListener('submit', e => {
      e.preventDefault();

      // Submit create post request.
      const url = `${window.baseUrl}/ajax/post/create`;
      const data = new FormData(this.form);

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
          this.wrapper.insertBefore(this.form, null);
          this.wrapper.scrollIntoView();

          if (this.isInThread) {
            // Trigger DE thread update.
            const update = qs('.de-thr-updater-link') as HTMLAnchorElement;
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
    });
  }

  protected onPostsInserted(posts: HTMLElement[]) {
    posts.forEach(post => {
      const referenceLinks = qsa('a[data-reflink]', post);
      referenceLinks.forEach(link => {
        const id = +link.getAttribute('data-reflink');
        link.addEventListener('click', e => {
          e.preventDefault();

          if (this.isInThread) {
            // Move form to the post.
            post.parentElement.insertBefore(this.form, post.nextSibling);
          }

          // Insert markup.
          this.insert(`>>${id}\n`, { newLine: true });
        });
      });
    });
  }

  protected setFormState({ enabled }: { enabled: boolean }) {
    const controls = [
      this.subject,
      this.name,
      this.file,
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
    if (this.file) {
      this.file.type = 'text';
      this.file.value = '';
      this.file.type = 'file';
    }
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
