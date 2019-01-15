import Vue from 'vue';
import { draggable, FilePreview } from '.';
import { eventBus, Events, SettingsManager } from '..';
import { DOM } from '../utils';

interface ViewModel {
  fields: {
    subject: string;
    name: string;
    file: string;
    message: string;
  };
  file?: File;
  disabled: boolean;
  status: string;
  position: 'hidden' | 'bottom' | 'post' | 'float';
  mode: 'mobile' | 'default';
}

export class PostingForm {
  protected isInThread: boolean = false;
  protected viewModel: Vue & ViewModel;

  constructor() {
    eventBus.$on(Events.Ready, this.onReady.bind(this));
  }

  onReady() {
    const form = DOM.qid('posting-form');
    if (!form) {
      return;
    }

    const match = window.location.href.match(/\/res\/(\d+)/i);
    const isInThread = !!match;
    const threadId = isInThread ? +match[1] : 0;

    this.isInThread = isInThread;

    const settings = SettingsManager.load();

    const component = this;
    this.viewModel = new Vue({
      el: form,
      template: `
<form class="content__posting-form posting-form" id="posting-form"
  v-bind:class="{ 'posting-form--floating': position == 'float' }"
  v-on:submit.prevent="onSubmit()" v-show="position !== 'hidden'"
  ref="form">
  <div class="posting-form__header" ref="header">
    <span class="posting-form__title">{{
      threadId ? 'Reply to thread #' + threadId : 'Create thread'
    }}</span>

    <span class="posting-form__header-buttons">
      <span class="posting-form__reset"
        v-on:click="resetFields()" title="Clear form"></span>

      <span class="posting-form__float"
        v-if="position !== 'float' && mode !== 'mobile'"
        v-on:click="makeFloating()" title="Floating form"></span>

      <span class="posting-form__close"
        v-on:click="onCloseClick()" title="Close form"></span>
    </span>
  </div>

  <div class="posting-form__content">
    <x-file-preview class="posting-form__preview"
      v-bind:class="{
        'posting-form__preview--mobile': mode == 'mobile',
        'posting-form__preview--right': settings.previewAlign == 'right',
      }"
      v-bind:file="file"
      v-on:click="showFileDialog()"
      v-on:drop="onFileDrop($event)"
      v-show="mode == 'default' || file">
      <button type="button" class="button posting-form__preview-remove"
        v-if="file" v-on:click.stop="file = null">⨯</button>
    </x-file-preview>

    <div class="posting-form__main">
      <div class="posting-form__row">
        <input type="text" class="input posting-form__subject"
          v-model="fields.subject" v-bind:disabled="disabled" placeholder="Subject" />

        <input type="text" class="input posting-form__name" placeholder="Name"
          v-model="fields.name" v-bind:disabled="disabled" v-on:change="onNameChange()" />

        <label class="posting-form__attachment" v-show="mode == 'mobile'">
          <input type="file" class="posting-form__attachment-input"
            v-model="fields.file" v-bind:disabled="disabled"
            v-on:change="onFileChange($event.target.files)"
            ref="file" />
        </label>

        <button type="submit" class="button posting-form__submit"
          v-if="mode == 'default'" v-bind:disabled="disabled">Reply</button>
      </div>

      <div class="posting-form__markup-row markup"
        v-show="(mode === 'mobile') && settings.showMarkupMobile
          || (mode !== 'mobile') && settings.showMarkup">
        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('b')">
          <strong>b</strong>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('i')">
          <em>i</em>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('u')">
          <span class="markup__underline">u</span>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('s')">
          <del>s</del>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('sub')">
          <sub>s</sub>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('sup')">
          <sup>s</sup>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('code')">
          <code>c</code>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('spoiler')">
          <span class="markup__spoiler markup__spoiler--visible">sp</span>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('rp')">
          <span class="markup__rp markup__rp--visible">rp</span>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertQuote()">
          <span class="markup__quote">&gt;</span>
        </button>
      </div>

      <div class="posting-form__row">
        <textarea class="input posting-form__message" placeholder="Message"
          v-model="fields.message" v-bind:disabled="disabled"
          v-on:keydown="onMessageKeyDown($event)"
          v-on:paste="onMessagePaste($event)"
          ref="message"></textarea>
      </div>

      <div v-if="status" class="posting-form__status">{{ status }}</div>

      <button type="submit" class="posting-form__submit  posting-form__submit--mobile"
        v-if="mode == 'mobile'" v-bind:disabled="disabled">Reply</button>
    </div>
  </div>
</form>`,
      data(): ViewModel {
        return {
          fields: {
            subject: '',
            name: '',
            file: '',
            message: '',
          },
          file: null,
          disabled: false,
          status: '',
          position: 'hidden',
          mode: 'mobile',
        };
      },
      computed: {
        threadId() {
          return threadId;
        },
        settings() {
          return settings.form;
        },
      },
      created() {
        // Load saved name.
        const name = localStorage['posting-form.name'];
        if (name) {
          this.fields.name = name;
        }

        this.updateMode();
        this._resize = this.updateMode.bind(this);
        window.addEventListener('resize', this._resize);
      },
      destroyed() {
        if (this._resize) {
          window.removeEventListener('resize', this._resize);
          this._resize = null;
        }
      },
      components: {
        'x-file-preview': FilePreview,
      },
      mixins: [
        draggable,
      ],
      methods: {
        getDragHandle() {
          return this.$refs.header;
        },
        getDraggable() {
          if (this.position !== 'float') {
            return null;
          }

          return this.$refs.form;
        },
        resetFields() {
          this.fields.subject = '';
          this.fields.message = '';
          this.fields.file = '';
          this.file = null;
        },
        makeFloating() {
          this.position = 'float';

          const form = this.$refs.form as HTMLElement;
          if (!form) {
            return;
          }

          if (!form.style.top) {
            const rect = form.getBoundingClientRect();

            const x = window.innerWidth - rect.width - 100;
            const y = window.innerHeight - rect.height - 100;

            form.style.left = `${x}px`;
            form.style.top = `${y}px`;
          }
        },
        showFileDialog() {
          if (this.$refs.file) {
            this.$refs.file.click();
          }
        },
        updateMode() {
          this.mode = window.innerWidth < 600 ? 'mobile' : 'default';
          if (this.mode === 'mobile' && this.position === 'float') {
            component.moveToBottom();
          }
        },
        onCloseClick() {
          component.hide();
        },
        onNameChange() {
          // Save name.
          localStorage['posting-form.name'] = this.fields.name;
        },
        async onFileDrop(e: DragEvent) {
          const file = e.dataTransfer.files[0];
          if (file) {
            this.file = file;
          } else {
            const text = e.dataTransfer.getData('text');
            if (text && text.match(/https?:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,}\.[a-z]{2,}\b[-a-zA-Z0-9@:%_\+.~#?&\/=]*/)) {
              const xhr = new XMLHttpRequest();
              xhr.open('GET', text, true);
              xhr.responseType = 'blob';

              xhr.addEventListener('readystatechange', e => {
                if (xhr.readyState !== XMLHttpRequest.DONE) {
                  return;
                }

                if (xhr.status < 400) {
                  this.status = '';
                  this.file = xhr.response;
                } else {
                  this.status = `Error: ${xhr.status} ${xhr.statusText}`;
                  this.file = null;
                }
              });

              xhr.send();
            }
          }
        },
        onFileChange(files: FileList) {
          this.file = files.length ? files[0] : null;
        },
        onMessageKeyDown(e: KeyboardEvent) {
          // Submit form on Ctrl+Enter in the message field.
          if ((e.keyCode == 10 || e.keyCode == 13) && e.ctrlKey) {
            this.onSubmit();
          }
        },
        onMessagePaste(e: ClipboardEvent) {
          // Paste file.
          const data = e.clipboardData || (e as any).originalEvent.clipboardData as DataTransfer;
          const items = Array.prototype.slice.call(data.items) as DataTransferItem[];
          const item = items.filter(item => {
            return item.type.startsWith('image/')
              || item.type.startsWith('audio/')
              || item.type.startsWith('video/');
          })[0];
          if (item) {
            this.file = item.getAsFile();
          }
        },
        insertMarkup(tag: string) {
          const messageEl = this.$refs.message as HTMLTextAreaElement;
          const selection = {
            begin: messageEl.selectionStart,
            end: messageEl.selectionEnd,
            length: messageEl.selectionEnd - messageEl.selectionStart,
          };
          const message = this.fields.message as string;
          const openingTag = `[${tag}]`;
          const closingTag = `[/${tag}]`;

          if (selection.length) {
            // If text is selected, wrap it in a tag pair.
            this.fields.message = [
              message.substring(0, selection.begin),
              openingTag,
              message.substring(selection.begin, selection.end),
              closingTag,
              message.substring(selection.end),
            ].join('');

            // Restore selection.
            this.$nextTick(() => {
              messageEl.focus();
              messageEl.selectionStart = selection.begin + openingTag.length;
              messageEl.selectionEnd = selection.end + openingTag.length;
            });
          } else {
            if (message.lastIndexOf(openingTag, selection.begin) > message.lastIndexOf(closingTag, selection.begin)) {
              this.fields.message = [
                message.substring(0, selection.begin),
                closingTag,
                message.substring(selection.end),
              ].join('');

              // Restore selection.
              this.$nextTick(() => {
                messageEl.focus();
                messageEl.selectionStart = selection.begin + closingTag.length;
                messageEl.selectionEnd = selection.end + closingTag.length;
              });
            } else {
              this.fields.message = [
                message.substring(0, selection.begin),
                openingTag,
                message.substring(selection.end),
              ].join('');

              // Restore selection.
              this.$nextTick(() => {
                messageEl.focus();
                messageEl.selectionStart = selection.begin + openingTag.length;
                messageEl.selectionEnd = selection.end + openingTag.length;
              });
            }
          }
        },
        insertQuote() {
          const message = this.fields.message;
          if (message.length && !message.endsWith('\n')) {
            this.fields.message += '\n';
          }

          const selection = window.getSelection().toString();
          if (selection) {
            this.fields.message += `> ${selection}\n`;
          } else {
            this.fields.message += '> ';
          }
        },
        onSubmit() {
          // Submit request to create post.
          const url = `${window.baseUrl}/ajax/post/create`;
          const data = new FormData();
          data.append('parent', threadId.toString());
          data.append('subject', this.fields.subject);
          data.append('name', this.fields.name);
          data.append('message', this.fields.message);
          data.append('file', this.file);

          const xhr = new XMLHttpRequest();
          xhr.open('POST', url, true);
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.withCredentials = true;

          xhr.upload.addEventListener('progress', e => {
            const progressPercent = Math.ceil(e.loaded / e.total * 100);
            this.status = `Uploading... ${progressPercent}%`;
          });

          xhr.addEventListener('readystatechange', e => {
            if (xhr.readyState !== XMLHttpRequest.DONE) {
              return;
            }

            // Enable form.
            this.disabled = false;

            if (xhr.status === 201) {
              this.resetFields();
              this.status = '';

              if (this.position !== 'float') {
                // Move form to the initial location.
                component.moveToBottom();
              }

              if (isInThread) {
                // Trigger DE thread update.
                const updater = DOM.qs('.de-thr-updater-link') as HTMLAnchorElement;
                if (updater) {
                  updater.click();
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
                this.status = `Error: ${data.error}`;
              } else {
                this.status = `Error: ${xhr.status} ${xhr.statusText}`;
              }
            }
          });

          xhr.send(data);
          this.disabled = true;
        },
      },
    });

    const showButton = DOM.qid('posting-form-show');
    if (showButton) {
      showButton.addEventListener('click', () => {
        this.moveToBottom();
      });
    }

    const content = DOM.qs('.layout__content');
    if (content) {
      content.addEventListener('click', e => {
        const target = e.target as HTMLElement;
        if (!target.getAttribute('data-reflink')) {
          return;
        }

        e.preventDefault();

        const vm = this.viewModel;
        if (this.isInThread && vm.position !== 'float') {
          // Move form to the post.
          const post = target.closest('.post') as HTMLElement;
          this.moveToPost(post);
        }

        // Insert reply markup.
        const message = vm.fields.message;
        if (message.length && !message.endsWith('\n')) {
          vm.fields.message += '\n';
        }

        const id = target.getAttribute('data-reflink');
        vm.fields.message += `>>${id}\n`;

        const selection = window.getSelection().toString();
        if (selection) {
          vm.fields.message += `> ${selection}\n`;
        }

        vm.$nextTick(() => {
          const messageEl = vm.$refs.message as HTMLElement;
          if (messageEl) {
            messageEl.focus();
          }
        });
      });
    }
  }

  protected hide() {
    this.viewModel.position = 'hidden';

    const showButton = DOM.qid('posting-form-show');
    if (showButton) {
      showButton.classList.remove('hidden');
    }
  }

  protected moveToPost(post: HTMLElement) {
    const form = DOM.qid('posting-form');
    if (form) {
      post.parentElement.insertBefore(form, post.nextSibling);
    }

    const vm = this.viewModel;
    vm.position = 'post';

    const showButton = DOM.qid('posting-form-show');
    if (showButton) {
      showButton.classList.remove('hidden');
    }

    vm.$nextTick(() => {
      const message = vm.$refs.message as HTMLElement;
      if (message) {
        message.focus();
      }
    });
  }

  protected moveToBottom() {
    const form = DOM.qid('posting-form');
    const wrapper = DOM.qid('posting-form-wrapper');
    if (form && wrapper) {
      wrapper.insertBefore(form, null);
    }

    const vm = this.viewModel;
    vm.position = 'bottom';

    const showButton = DOM.qid('posting-form-show');
    if (showButton) {
      showButton.classList.add('hidden');
    }

    vm.$nextTick(() => {
      const message = vm.$refs.message as HTMLElement;
      if (message) {
        message.focus();
      }
    });
  }
}
