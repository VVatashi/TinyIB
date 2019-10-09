import Vue from 'vue';
import { HSVColorPicker } from '@vvatashi/color-picker';
import { draggable, FilePreview } from '.';
import { eventBus, Events } from '..';
import { Api } from '../api';
import { Coords } from './draggable';
import { HotKeys } from '../hotkeys';
import { LocalStorage } from '../local-storage';
import { store } from '../store';
import { DOM, Keyboard } from '../utils';

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
  hidden: boolean;
  position: 'bottom' | 'post' | 'float';
  colorPopupVisible: boolean;
  hotKeys: HotKeys;
}

export class PostingForm {
  protected isInThread: boolean = false;
  protected viewModel: Vue & ViewModel;

  constructor() {
    eventBus.on(Events.Ready, this.onReady.bind(this));
    eventBus.on(Events.PostsInserted, this.onPostsInserted.bind(this));
  }

  onReady() {
    const { settings } = store.getState().settings;
    const form = DOM.qid('posting-form');
    if (!form) {
      return;
    }

    const match = window.location.href.match(/\/res\/(\d+)/i);
    const isInThread = !!match;
    const threadId = isInThread ? +match[1] : 0;

    this.isInThread = isInThread;

    const component = this;
    this.viewModel = new Vue({
      el: form,
      template: `
<form class="content__posting-form posting-form" id="posting-form"
  v-bind:class="{ 'posting-form--floating': position == 'float' }"
  v-on:submit.prevent="onSubmit()" v-show="!hidden"
  ref="form">
  <div class="posting-form__header" ref="header">
    <span class="posting-form__title">{{
      threadId ? 'Reply to thread #' + threadId : 'Create thread'
    }}</span>

    <span class="posting-form__header-buttons">
      <span class="posting-form__reset fas fa-ban"
        v-on:click.stop="resetFields()" title="Clear form"></span>

      <span class="posting-form__float far fa-window-maximize"
        v-if="position !== 'float'"
        v-on:click.stop="makeFloating()" title="Floating form"></span>

      <span class="posting-form__restore fas fa-arrow-down"
        v-if="position === 'float'"
        v-on:click.stop="moveToBottom()" title="Move form to bottom"></span>

      <span class="posting-form__close far fa-window-close"
        v-on:click.stop="onCloseClick()" title="Close form"></span>
    </span>
  </div>

  <div class="posting-form__content">
    <x-file-preview class="posting-form__preview posting-form__preview--mobile"
      v-bind:file="file"
      v-on:click="showFileDialog()"
      v-on:drop="onFileDrop($event)"
      v-show="file">
      <span class="posting-form__preview-remove fas fa-window-close" v-on:click.stop="file = null"></span>
    </x-file-preview>

    <x-file-preview class="posting-form__preview posting-form__preview--desktop"
      v-bind:class="{ 'posting-form__preview--right': previewAlign == 'right' }"
      v-bind:file="file"
      v-on:click="showFileDialog()"
      v-on:drop="onFileDrop($event)">
      <span class="posting-form__preview-remove fas fa-window-close"
        v-if="file" v-on:click.stop="file = null"></span>
    </x-file-preview>

    <div class="posting-form__main">
      <div class="posting-form__row">
        <input type="text" class="input posting-form__subject" placeholder="Subject"
          v-model="fields.subject"
          v-bind:disabled="disabled"
          v-on:change="onSubjectChange()" />

        <input type="text" class="input posting-form__name" placeholder="Name"
          v-model="fields.name"
          v-bind:disabled="disabled"
          v-on:change="onNameChange()" />

        <label class="posting-form__attachment fas fa-paperclip">
          <input type="file" class="posting-form__attachment-input"
            v-model="fields.file" v-bind:disabled="disabled"
            v-on:change="onFileChange($event.target.files)"
            ref="file" />
        </label>

        <button type="submit" class="button posting-form__submit  posting-form__submit--desktop"
          v-bind:disabled="disabled">Reply</button>
      </div>

      <div class="posting-form__row posting-form__row--markup markup">
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
          <sub>sub</sub>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('sup')">
          <sup>sup</sup>
        </button>

        <button type="button" class="button posting-form__markup-button"
          @click.prevent="toggleColorPopup">
          color
        </button>

        <div class="color-picker-overlay"
          v-if="colorPopupVisible"
          @click="onColorPopupCancel">
        </div>

        <div class="color-picker-popup"
          v-if="colorPopupVisible">
          <x-color-picker ref="color-picker" class="color-picker-popup__picker"
            :width="128" :height="128" :showLabels="false">
          </x-color-picker>

          <div class="color-picker-popup__buttons">
            <button type="button" class="button"
              @click.prevent="onColorPopupOk">Ok</button>

            <button type="button" class="button"
              @click.prevent="onColorPopupCancel">Cancel</button>
          </div>
        </div>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('code')">
          <code>code</code>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('spoiler')">
          <span class="markup__spoiler markup__spoiler--visible">sp</span>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertQuote()">
          <span class="markup__quote">&gt;</span>
        </button>
      </div>

      <div class="posting-form__row posting-form__row--message">
        <textarea class="input posting-form__message" placeholder="Message"
          v-model="fields.message" v-bind:disabled="disabled"
          v-on:keydown="onMessageKeyDown"
          v-on:paste="onMessagePaste"
          ref="message"></textarea>
      </div>

      <div class="posting-form__row posting-form__row--bottom">
        <button type="submit" class="posting-form__submit posting-form__submit--mobile"
          v-bind:disabled="disabled">Reply</button>

        <div v-if="status" class="posting-form__status">{{ status }}</div>
      </div>
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
          hidden: true,
          position: settings.form.saveFormState
            && LocalStorage.get('form.fload')
            ? 'float' : 'bottom',
          colorPopupVisible: false,
          hotKeys: {},
        };
      },
      computed: {
        threadId() {
          return threadId;
        },
        previewAlign() {
          return settings.form.previewAlign;
        },
      },
      created() {
        if (settings.form.saveSubject) {
          // Load saved subject.
          const subject = LocalStorage.get('posting-form.subject', '');
          if (subject) {
            this.fields.subject = subject;
          }
        }

        if (settings.form.saveName) {
          // Load saved name.
          const name = LocalStorage.get('posting-form.name', '');
          if (name) {
            this.fields.name = name;
          }
        }

        this.hotKeys = store.getState().hotKeys.hotKeys;

        window.addEventListener('resize', this._resize);
      },
      mounted() {
        if (this.position === 'float') {
          const position = LocalStorage.get('form.float-position') || { x: 0, y: 0 };
          this.setPosition(this.checkBounds(position));
        }
      },
      destroyed() {
        if (this._resize) {
          window.removeEventListener('resize', this._resize);
          this._resize = null;
        }
      },
      components: {
        'x-file-preview': FilePreview,
        'x-color-picker': HSVColorPicker,
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
        setPosition(coords: Coords) {
          const draggable = this.getDraggable();
          if (!draggable) {
            return;
          }

          draggable.style.left = `${coords.x}px`;
          draggable.style.top = `${coords.y}px`;

          LocalStorage.set('form.float-position', coords);
        },
        onDraggableResize() {
          if (this.hidden) {
            return;
          }

          this.setPosition(this.checkBounds(this.getPosition()));
        },
        resetFields() {
          if (!settings.form.saveSubject) {
            this.fields.subject = '';
          }

          if (!settings.form.saveName) {
            this.fields.name = '';
          }

          this.fields.message = '';
          this.fields.file = '';
          this.file = null;
        },
        makeFloating() {
          component.makeFloating();
        },
        moveToBottom() {
          component.moveToBottom();
        },
        showFileDialog() {
          if (this.$refs.file) {
            this.$refs.file.click();
          }
        },
        onCloseClick() {
          component.hide();
          component.updateReplyButton();
        },
        onSubjectChange() {
          LocalStorage.set('posting-form.subject', this.fields.subject);
        },
        onNameChange() {
          LocalStorage.set('posting-form.name', this.fields.name);
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
          if (HotKeys.check(this.hotKeys['send'], e)) {
            this.onSubmit();
          } else if (Keyboard.checkKeyChar(e, 'b') && e.altKey) {
            e.preventDefault();
            this.insertMarkup('b');
          } else if (Keyboard.checkKeyChar(e, 'i') && e.altKey) {
            e.preventDefault();
            this.insertMarkup('i');
          } else if (Keyboard.checkKeyChar(e, 't') && e.altKey) {
            e.preventDefault();
            this.insertMarkup('s');
          } else if (Keyboard.checkKeyChar(e, 'p') && e.altKey) {
            e.preventDefault();
            this.insertMarkup('spoiler');
          } else if (Keyboard.checkKeyChar(e, 'c') && e.altKey) {
            e.preventDefault();
            this.insertMarkup('code');
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
        toggleColorPopup() {
          this.colorPopupVisible = !this.colorPopupVisible;
        },
        onColorPopupOk() {
          this.colorPopupVisible = false;
          this.insertMarkup('color', this.$refs['color-picker'].hex);
        },
        onColorPopupCancel() {
          this.colorPopupVisible = false;
        },
        insertMarkup(tag: string, attribute: string = null) {
          const messageEl = this.$refs.message as HTMLTextAreaElement;
          const selection = {
            begin: messageEl.selectionStart,
            end: messageEl.selectionEnd,
            length: messageEl.selectionEnd - messageEl.selectionStart,
          };

          const openingTag = `[${tag}${attribute ? '=' + attribute : ''}]`;
          const closingTag = `[/${tag}]`;

          let message = this.fields.message as string;

          if (selection.length || settings.form.insertTagsInPairs) {
            // If text is selected, wrap it in a tag pair.
            message = [
              message.substring(0, selection.begin),
              openingTag,
              message.substring(selection.begin, selection.end),
              closingTag,
              message.substring(selection.end),
            ].join('');

            selection.begin += openingTag.length;
            selection.end += openingTag.length;
          } else if (message.lastIndexOf(openingTag, selection.begin)
            > message.lastIndexOf(closingTag, selection.begin)) {
            message = [
              message.substring(0, selection.begin),
              closingTag,
              message.substring(selection.end),
            ].join('');

            selection.begin += closingTag.length;
            selection.end += closingTag.length;
          } else {
            message = [
              message.substring(0, selection.begin),
              openingTag,
              message.substring(selection.end),
            ].join('');

            selection.begin += openingTag.length;
            selection.end += openingTag.length;
          }

          const scroll = messageEl.scrollTop;
          this.fields.message = message;
          this.$nextTick(() => {
            messageEl.focus();
            // Restore selection.
            messageEl.selectionStart = selection.begin;
            messageEl.selectionEnd = selection.end;
            // Restore scroll position in the Chrome.
            messageEl.scrollTop = scroll;
          });
        },
        insertQuote() {
          const messageEl = this.$refs.message as HTMLTextAreaElement;
          const selection = {
            begin: messageEl.selectionStart,
            end: messageEl.selectionEnd,
          };

          const message = this.fields.message as string;
          const before = message.substring(0, selection.begin);
          const after = message.substring(selection.end);
          const selectionText = component.getSelection();
          const quoteText = selectionText.length ? selectionText.replace(/^(.+)$/gm, '> $1') : '> ';
          const newLineBefore = before.length && !before.endsWith('\n') ? '\n' : '';
          const newLineAfter = (!after.length || !after.startsWith('\n')) && quoteText.length > 2 ? '\n' : '';
          const quote = `${newLineBefore}${quoteText}${newLineAfter}`;

          const scroll = messageEl.scrollTop;
          this.fields.message = [
            before,
            quote,
            after,
          ].join('');

          this.$nextTick(() => {
            messageEl.focus();

            let cursorPosition = selection.begin + quote.replace(/\r/g, '').length;
            if (!quote.endsWith('\n') && after.startsWith('\n')) {
              cursorPosition += 1;
            }

            messageEl.setSelectionRange(cursorPosition, cursorPosition, 'none');

            // Restore scroll position in the Chrome.
            messageEl.scrollTop = scroll;
          });
        },
        async onSubmit() {
          this.disabled = true;

          // Apply replaces to the message.
          const replaces = settings.form.replaces || [];
          const message = replaces.reduce((message: string, item) => {
            const regexp = new RegExp(item.pattern, 'gm');
            return message.replace(regexp, item.replace);
          }, this.fields.message as string);

          try {
            const {
              post,
              location,
            } = await Api.createPost({
              parent: threadId,
              subject: this.fields.subject,
              name: this.fields.name,
              message: message,
              file: this.file,
            }, e => {
              const progressPercent = Math.ceil(e.loaded / e.total * 100);
              this.status = `Uploading... ${progressPercent}%`;
            });

            LocalStorage.set('user.name', post.name);
            LocalStorage.set('user.tripcode', post.tripcode.length ? '!' + post.tripcode : '');

            this.resetFields();
            this.status = '';

            if (this.position !== 'float') {
              // Move form to the initial location.
              component.moveToBottom();
            }

            if (isInThread) {
              if (settings.post.enableThreadAutoupdate) {
                eventBus.emit(Events.PostCreated);
              }
            } else {
              // Redirect to thread.
              if (location) {
                window.location.href = location.replace(/#[^\/]*$/g, '');
              }
            }
          } catch (e) {
            this.status = `Error: ${e}`;
          }

          this.disabled = false;

          if (document.activeElement) {
            const element = document.activeElement;
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
              (element as any).blur();
            }
          }

          if (settings.post.scrollToNewPosts) {
            // Scroll to the last post.
            setTimeout(() => {
              const el = DOM.qs('.post:nth-last-of-type(1)');
              if (el) {
                el.scrollIntoView(true);
              }
            }, 300);
          }
        },
      },
    });

    const showButton = DOM.qid('posting-form-show');
    if (showButton) {
      showButton.addEventListener('click', () => {
        this.moveToBottom();
      });
    }

    const layout = DOM.qs('.layout');
    if (layout) {
      layout.addEventListener('click', e => {
        const target = e.target as HTMLElement;
        if (!target.getAttribute('data-reflink') && !target.getAttribute('data-quote-reflink')) {
          return;
        }

        e.preventDefault();

        const vm = this.viewModel;
        const messageEl = vm.$refs.message as HTMLTextAreaElement;
        const selection = {
          begin: messageEl.selectionStart,
          end: messageEl.selectionEnd,
        };

        const message = vm.fields.message as string;
        const before = message.substring(0, selection.begin);
        const after = message.substring(selection.end);
        const newLineBefore = before.length && !before.endsWith('\n') ? '\n' : '';

        const quoteText = target.getAttribute('data-quote-reflink')
          ? this.getSelection().replace(/^(.+)$/gm, '> $1')
          : '';

        let newLineAfter;
        if (!after.length || target.getAttribute('data-reflink')) {
          newLineAfter = '\n';
        } else if (target.getAttribute('data-quote-reflink')) {
          if (!after.startsWith('\n')) {
            newLineAfter = '\n\n';
          } else {
            newLineAfter = '\n';
          }
        } else {
          newLineAfter = '';
        }

        const id = target.getAttribute('data-reflink') || target.getAttribute('data-quote-reflink');

        const lastQuoteIndex = before.lastIndexOf('>>');
        const quoteSamePost = lastQuoteIndex !== -1 && lastQuoteIndex === before.lastIndexOf(`>>${id}`);

        // If quoting the same post again, not insert id.
        let quote = '';
        if (quoteSamePost) {
          quote = quoteText
            ? `${newLineBefore}${quoteText}${newLineAfter}`
            : '';
        } else {
          quote = quoteText
            ? `${newLineBefore}>>${id}\n${quoteText}${newLineAfter}`
            : `${newLineBefore}>>${id}${newLineAfter}`;
        }

        if (this.isInThread) {
          if (quoteSamePost && !quoteText && !vm.hidden && vm.position !== 'bottom') {
            this.hide();
          } else {
            // Insert reply markup.
            vm.fields.message = [
              before,
              quote,
              after,
            ].join('');

            if (vm.position !== 'float') {
              // Move form to the post.
              const targetPost = target.closest('.post') as HTMLElement;
              if (targetPost) {
                const postId = targetPost.getAttribute('data-post-id');
                const post = DOM.qid(`reply_${postId}`);
                if (post) {
                  this.moveToPost(post);
                } else {
                  this.moveToBottom();
                }
              } else {
                this.moveToBottom();
              }
            } else {
              this.show();
            }
          }
        } else {
          // Insert reply markup.
          vm.fields.message = [
            before,
            quote,
            after,
          ].join('');
        }

        const scroll = messageEl.scrollTop;
        vm.$nextTick(() => {
          messageEl.focus();

          let cursorPosition = selection.begin + quote.length;
          if (!quote.endsWith('\n') && after.startsWith('\n')) {
            cursorPosition += 1;
          }

          if (quote.endsWith('\n\n')) {
            cursorPosition -= 1;
          }

          messageEl.setSelectionRange(cursorPosition, cursorPosition, 'none');

          // Restore scroll position in the Chrome.
          messageEl.scrollTop = scroll;
        });
      });
    }
  }

  protected onPostsInserted(posts: HTMLElement[], initial: boolean) {
    const { settings } = store.getState().settings;
    if (!initial && settings.post.scrollToNewPosts) {
      const scrollingEl = document.scrollingElement || document.body;
      const postsHeight = posts.reduce((total, post) => {
        const style = document.defaultView.getComputedStyle(post, '');
        const margin = parseInt(style.getPropertyValue('margin-top'))
          + parseInt(style.getPropertyValue('margin-bottom'));
        return total + post.offsetHeight + margin;
      }, 0);

      // If in the bottom area.
      const bottomOffset = scrollingEl.scrollHeight - scrollingEl.scrollTop;
      const bottomArea = postsHeight + 1.25 * window.innerHeight;
      if (bottomOffset < bottomArea) {
        // Scroll to the last post.
        setTimeout(() => {
          const el = DOM.qs('.post:nth-last-of-type(1)');
          if (el) {
            el.scrollIntoView(true);
          }
        }, 300);
      }
    }
  }

  protected updateReplyButton() {
    const showButton = DOM.qid('posting-form-show');
    if (!showButton) {
      return;
    }

    if (this.viewModel.hidden || this.viewModel.position !== 'bottom') {
      showButton.classList.remove('hidden');
    } else {
      showButton.classList.add('hidden');
    }
  }

  protected getSelection(): string {
    // On windows '\n' in the selection is replaced by '\r\n',
    // increasing the length of the selection.
    // Fix this by replacing '\r' with ''.
    return window.getSelection().toString().replace(/\r/g, '').trim();
  }

  protected hide() {
    this.viewModel.hidden = true;
  }

  protected show() {
    this.viewModel.hidden = false;
  }

  protected makeFloating() {
    this.show();

    const vm = this.viewModel as any;
    vm.position = 'float';
    LocalStorage.set('form.float', true);

    const position = LocalStorage.get('form.float-position') || { x: 0, y: 0 };
    vm.setPosition(vm.checkBounds(position));

    this.updateReplyButton();
  }

  protected moveToPost(post: HTMLElement, focus = false) {
    const form = DOM.qid('posting-form');
    if (form) {
      post.parentElement.insertBefore(form, post.nextSibling);
    }

    this.show();

    const vm = this.viewModel;
    vm.position = 'post';
    LocalStorage.set('form.float', false);

    const showButton = DOM.qid('posting-form-show');
    if (showButton) {
      showButton.classList.remove('hidden');
    }

    this.updateReplyButton();

    if (focus) {
      vm.$nextTick(() => {
        const message = vm.$refs.message as HTMLElement;
        if (message) {
          message.focus();
        }
      });
    }
  }

  protected moveToBottom(focus = false) {
    const form = DOM.qid('posting-form');
    const wrapper = DOM.qid('posting-form-wrapper');
    if (form && wrapper) {
      wrapper.insertBefore(form, null);
    }

    this.show();

    const vm = this.viewModel;
    vm.position = 'bottom';
    LocalStorage.set('form.float', false);

    this.updateReplyButton();

    if (focus) {
      vm.$nextTick(() => {
        const message = vm.$refs.message as HTMLElement;
        if (message) {
          message.focus();
        }
      });
    }
  }
}
