/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ts/app.ts":
/*!*******************!*\
  !*** ./ts/app.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./ts/index.ts");
const components_1 = __webpack_require__(/*! ./components */ "./ts/components/index.ts");
new components_1.Captcha();
new components_1.CorrectTime();
new components_1.DeleteForm();
new components_1.PostingForm();
new components_1.PostReferenceMap();
new components_1.Settings();
new components_1.StyleSwitch();
new components_1.NewPostsDetector();
document.addEventListener('DOMContentLoaded', e => {
    _1.eventBus.$emit(_1.Events.Ready);
});


/***/ }),

/***/ "./ts/components/captcha.ts":
/*!**********************************!*\
  !*** ./ts/components/captcha.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class Captcha {
    constructor() {
        this.originalSrc = '';
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
    }
    onReady() {
        const image = utils_1.DOM.qid('captchaimage');
        if (image) {
            this.originalSrc = image.src;
            image.addEventListener('click', this.reload.bind(this));
        }
    }
    reload() {
        const captcha = utils_1.DOM.qid('captcha');
        captcha.value = '';
        captcha.focus();
        const image = utils_1.DOM.qid('captchaimage');
        image.src = `${this.originalSrc}#${new Date().getTime()}`;
        return false;
    }
}
exports.Captcha = Captcha;


/***/ }),

/***/ "./ts/components/correct-time.ts":
/*!***************************************!*\
  !*** ./ts/components/correct-time.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class CorrectTime {
    constructor() {
        // Load settings from a cookie
        this.settings = JSON.parse(utils_1.Cookie.get('settings', '{}'));
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
        __1.eventBus.$on(__1.Events.PostsInserted, (posts) => posts.forEach(this.onPostInsert.bind(this)));
    }
    onReady() {
        const elements = utils_1.DOM.qsa('.post-header__datetime');
        elements.forEach(element => this.correctTime(element));
    }
    onPostInsert(post) {
        const time_el = utils_1.DOM.qs('.post-header__datetime', post);
        if (!time_el) {
            return;
        }
        this.correctTime(time_el);
    }
    correctTime(el) {
        const time_str = el.getAttribute('datetime');
        if (!time_str) {
            return;
        }
        const time = luxon_1.DateTime.fromISO(time_str);
        el.textContent = utils_1.Time.format(time, this.settings);
    }
}
exports.CorrectTime = CorrectTime;


/***/ }),

/***/ "./ts/components/delete-form.ts":
/*!**************************************!*\
  !*** ./ts/components/delete-form.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class DeleteForm {
    constructor() {
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
    }
    onReady() {
        const form = utils_1.DOM.qid('delform');
        if (!form) {
            return;
        }
        const delete_post_password = utils_1.DOM.qid('deletepostpassword');
        if (delete_post_password) {
            // Load delete post password.
            delete_post_password.value = utils_1.Cookie.get('tinyib_password');
        }
    }
}
exports.DeleteForm = DeleteForm;


/***/ }),

/***/ "./ts/components/index.ts":
/*!********************************!*\
  !*** ./ts/components/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var captcha_1 = __webpack_require__(/*! ./captcha */ "./ts/components/captcha.ts");
exports.Captcha = captcha_1.Captcha;
var correct_time_1 = __webpack_require__(/*! ./correct-time */ "./ts/components/correct-time.ts");
exports.CorrectTime = correct_time_1.CorrectTime;
var delete_form_1 = __webpack_require__(/*! ./delete-form */ "./ts/components/delete-form.ts");
exports.DeleteForm = delete_form_1.DeleteForm;
var new_posts_detector_1 = __webpack_require__(/*! ./new-posts-detector */ "./ts/components/new-posts-detector.ts");
exports.NewPostsDetector = new_posts_detector_1.NewPostsDetector;
var posting_form_1 = __webpack_require__(/*! ./posting-form */ "./ts/components/posting-form.ts");
exports.PostingForm = posting_form_1.PostingForm;
var post_reference_map_1 = __webpack_require__(/*! ./post-reference-map */ "./ts/components/post-reference-map.ts");
exports.PostReferenceMap = post_reference_map_1.PostReferenceMap;
var settings_1 = __webpack_require__(/*! ./settings */ "./ts/components/settings.ts");
exports.Settings = settings_1.Settings;
var style_switch_1 = __webpack_require__(/*! ./style-switch */ "./ts/components/style-switch.ts");
exports.StyleSwitch = style_switch_1.StyleSwitch;


/***/ }),

/***/ "./ts/components/new-posts-detector.ts":
/*!*********************************************!*\
  !*** ./ts/components/new-posts-detector.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class NewPostsDetector {
    constructor() {
        /** @todo: remove MutationObserver ASAP, with integrated thread updating. */
        const observer = new MutationObserver(mutations => {
            const posts = mutations
                // Get added posts, if any.
                .map(mutation => {
                const nodeList = mutation.addedNodes;
                const nodes = Array.prototype.slice.call(nodeList);
                const elements = nodes.filter(node => node.nodeType === Node.ELEMENT_NODE);
                return elements
                    // If element is post itself, return it,
                    // else query for element children.
                    .map(element => element.classList.contains('post')
                    ? [element]
                    : utils_1.DOM.qsa('.post', element))
                    // Flatten posts array.
                    .reduce((total, current) => total.concat(current), []);
            })
                // Flatten posts array.
                .reduce((total, current) => total.concat(current), []);
            if (posts.length > 0) {
                __1.eventBus.$emit(__1.Events.PostsInserted, posts);
            }
        });
        __1.eventBus.$on(__1.Events.Ready, () => {
            // Setup MutationObserver.
            observer.observe(document.body, {
                childList: true,
                subtree: true,
            });
            const posts = utils_1.DOM.qsa('.post');
            if (posts.length > 0) {
                __1.eventBus.$emit(__1.Events.PostsInserted, posts);
            }
        });
    }
}
exports.NewPostsDetector = NewPostsDetector;


/***/ }),

/***/ "./ts/components/post-reference-map.ts":
/*!*********************************************!*\
  !*** ./ts/components/post-reference-map.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class PostReferenceMap {
    constructor() {
        this.posts = {};
        __1.eventBus.$on(__1.Events.PostsInserted, (posts) => posts.forEach(this.onPostInsert.bind(this)));
    }
    onPostInsert(post) {
        const postId = +post.getAttribute('data-post-id');
        // Store post.
        this.posts[postId] = post;
        // Get references.
        const referenceElements = utils_1.DOM.qsa('a[data-target-post-id]', post);
        const references = referenceElements.map(element => {
            return {
                element,
                id: +element.getAttribute('data-target-post-id'),
            };
        });
        // Append the author name of the referenced post to the reference link text.
        references.forEach(reference => {
            const post = this.posts[reference.id];
            if (!post) {
                return;
            }
            const referenceAuthor = document.createElement('span');
            referenceAuthor.classList.add('post__reference-link-author');
            referenceAuthor.innerHTML = this.getPostRefLinkAuthorHtml(post);
            const parent = reference.element.parentElement;
            const nextSibling = reference.element.nextSibling;
            parent.insertBefore(referenceAuthor, nextSibling);
        });
    }
    getPostRefLinkAuthorHtml(post) {
        const nameEl = utils_1.DOM.qs('.post-header__name', post);
        const tripcodeEl = utils_1.DOM.qs('.post-header__tripcode', post);
        const name = nameEl ? nameEl.innerHTML : '';
        const tripcode = tripcodeEl ? tripcodeEl.innerHTML : '';
        if (name.length || tripcode.length) {
            return `(<span class="post__reference-link-name">${name}</span>`
                + `<span class="post__reference-link-tripcode">${tripcode}</span>)`;
        }
        else {
            return ``;
        }
    }
}
exports.PostReferenceMap = PostReferenceMap;


/***/ }),

/***/ "./ts/components/posting-form.ts":
/*!***************************************!*\
  !*** ./ts/components/posting-form.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class PostingForm {
    constructor() {
        this.isInThread = false;
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
        __1.eventBus.$on(__1.Events.PostsInserted, this.onPostsInserted.bind(this));
    }
    onReady() {
        const form = utils_1.DOM.qid('posting-form');
        if (!form) {
            return;
        }
        const match = window.location.href.match(/\/res\/(\d+)/i);
        const isInThread = !!match;
        const threadId = isInThread ? +match[1] : 0;
        this.isInThread = isInThread;
        const settings = JSON.parse(utils_1.Cookie.get('settings', '{}'));
        const component = this;
        this.viewModel = new vue_1.default({
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
      <button type="button" class="button posting-form__close"
        v-on:click="onCloseClick()">⨯</button>
    </span>

    <span class="posting-form__header-buttons">
      <button type="button" class="button posting-form__float"
        v-if="position !== 'float' && mode !== 'mobile'"
        v-on:click="position = 'float'">↑</button>
    </span>
  </div>

  <div class="posting-form__content">
    <div class="posting-form__preview" v-on:click="showFileDialog()"
      v-bind:class="{ 'posting-form__preview--mobile': mode == 'mobile',
        'posting-form__preview--right': previewAlign == 'right' }"
      v-show="mode == 'default' || file"
      v-on:dragenter.stop.prevent
      v-on:dragleave.stop.prevent
      v-on:dragover.stop.prevent
      v-on:drop.stop.prevent="onFileDrop($event)">
      <img v-if="previewType == 'image'" class="posting-form__preview-image"
        v-bind:src="previewSrc" />
      <video v-else-if="previewType == 'video'" class="posting-form__preview-image"
        v-bind:src="previewSrc" autoplay loop muted></video>
      <p v-else-if="previewType == ''">Upload file</p>

      <button type="button" class="button posting-form__preview-remove"
        v-if="file" v-on:click.stop="file = null, updatePreview()">⨯</button>
    </div>

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

          <span class="posting-form__attachment-icon"></span>
        </label>

        <button type="submit" class="button posting-form__submit"
          v-if="mode == 'default'" v-bind:disabled="disabled">Reply</button>
      </div>

      <div class="posting-form__markup-row markup">
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
            data() {
                return {
                    fields: {
                        subject: '',
                        name: '',
                        file: '',
                        message: '',
                    },
                    file: null,
                    previewSrc: '',
                    previewType: '',
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
                previewAlign() {
                    return settings.formPreviewAlign;
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
            mounted() {
                const header = this.$refs.header;
                if (header) {
                    this._mouseDown = this.onMouseDown.bind(this);
                    header.addEventListener('pointerdown', this._mouseDown);
                }
            },
            destroyed() {
                if (this._resize) {
                    window.removeEventListener('resize', this._resize);
                    this._resize = null;
                }
            },
            methods: {
                resetFields() {
                    this.fields.subject = '';
                    this.fields.message = '';
                    this.fields.file = '';
                    this.file = null;
                    this.updatePreview();
                },
                showFileDialog() {
                    if (this.$refs.file) {
                        this.$refs.file.click();
                    }
                },
                updateMode() {
                    this.mode = window.innerWidth < 600 ? 'mobile' : 'default';
                    if (this.mode == 'mobile' && this.position == 'float') {
                        component.moveToBottom();
                    }
                },
                updatePreview() {
                    if (this.file) {
                        const reader = new FileReader();
                        reader.addEventListener('load', e => {
                            if (this.file.type) {
                                const type = this.file.type;
                                if (type.startsWith('video/')) {
                                    this.previewType = 'video';
                                }
                                else if (type.startsWith('audio/')) {
                                    this.previewType = 'audio';
                                }
                                else {
                                    this.previewType = 'image';
                                }
                            }
                            else if (this.file.name) {
                                const name = this.file.name;
                                if (name.endsWith('.webm') || name.endsWith('.mp4')) {
                                    this.previewType = 'video';
                                }
                                else if (name.endsWith('.mp3')) {
                                    this.previewType = 'audio';
                                }
                                else {
                                    this.previewType = 'image';
                                }
                            }
                            else {
                                this.previewType = 'image';
                            }
                            this.previewSrc = e.target.result;
                        });
                        reader.readAsDataURL(this.file);
                    }
                    else {
                        this.previewType = '';
                        this.previewSrc = '';
                    }
                },
                onMouseDown(e) {
                    const form = this.$refs.form;
                    if (!form || this.position !== 'float') {
                        return;
                    }
                    this._mouseDownFormLeft = form.offsetLeft;
                    this._mouseDownFormTop = form.offsetTop;
                    this._mouseDownMouseLeft = e.clientX;
                    this._mouseDownMouseTop = e.clientY;
                    if (!this._mouseMove) {
                        this._mouseMove = this.onMouseMove.bind(this);
                        window.addEventListener('pointermove', this._mouseMove);
                    }
                    if (!this._mouseUp) {
                        this._mouseUp = this.onMouseUp.bind(this);
                        window.addEventListener('pointerup', this._mouseUp);
                        window.addEventListener('pointercancel', this._mouseUp);
                    }
                },
                onMouseMove(e) {
                    const form = this.$refs.form;
                    if (!form || this.position !== 'float') {
                        return;
                    }
                    const deltaX = e.clientX - this._mouseDownMouseLeft;
                    const deltaY = e.clientY - this._mouseDownMouseTop;
                    const x = this._mouseDownFormLeft + deltaX;
                    const y = this._mouseDownFormTop + deltaY;
                    form.style.left = `${x}px`;
                    form.style.top = `${y}px`;
                },
                onMouseUp(e) {
                    if (this._mouseMove) {
                        window.removeEventListener('pointermove', this._mouseMove);
                        this._mouseMove = null;
                    }
                    if (this._mouseUp) {
                        window.removeEventListener('pointerup', this._mouseUp);
                        window.removeEventListener('pointercancel', this._mouseUp);
                        this._mouseUp = null;
                    }
                },
                onCloseClick() {
                    component.hide();
                },
                onNameChange() {
                    // Save name.
                    localStorage['posting-form.name'] = this.fields.name;
                },
                onFileDrop(e) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const file = e.dataTransfer.files[0];
                        if (file) {
                            this.file = file;
                            this.updatePreview();
                        }
                        else {
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
                                        this.updatePreview();
                                    }
                                    else {
                                        this.status = `Error: ${xhr.status} ${xhr.statusText}`;
                                        this.file = null;
                                        this.updatePreview();
                                    }
                                });
                                xhr.send();
                            }
                        }
                    });
                },
                onFileChange(files) {
                    this.file = files.length ? files[0] : null;
                    this.updatePreview();
                },
                onMessageKeyDown(e) {
                    // Submit form on Ctrl+Enter in the message field.
                    if ((e.keyCode == 10 || e.keyCode == 13) && e.ctrlKey) {
                        this.onSubmit();
                    }
                },
                onMessagePaste(e) {
                    // Paste file.
                    const data = e.clipboardData || e.originalEvent.clipboardData;
                    const items = Array.prototype.slice.call(data.items);
                    const item = items.filter(item => {
                        return item.type.startsWith('image/')
                            || item.type.startsWith('audio/')
                            || item.type.startsWith('video/');
                    })[0];
                    if (item) {
                        this.file = item.getAsFile();
                        this.updatePreview();
                    }
                },
                insertMarkup(tag) {
                    const messageEl = this.$refs.message;
                    const selection = {
                        begin: messageEl.selectionStart,
                        end: messageEl.selectionEnd,
                        length: messageEl.selectionEnd - messageEl.selectionStart,
                    };
                    const message = this.fields.message;
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
                        setTimeout(() => {
                            messageEl.focus();
                            messageEl.selectionStart = selection.begin + openingTag.length;
                            messageEl.selectionEnd = selection.end + openingTag.length;
                        });
                    }
                    else {
                        if (message.lastIndexOf(openingTag, selection.begin) > message.lastIndexOf(closingTag, selection.begin)) {
                            this.fields.message = [
                                message.substring(0, selection.begin),
                                closingTag,
                                message.substring(selection.end),
                            ].join('');
                            // Restore selection.
                            setTimeout(() => {
                                messageEl.focus();
                                messageEl.selectionStart = selection.begin + closingTag.length;
                                messageEl.selectionEnd = selection.end + closingTag.length;
                            });
                        }
                        else {
                            this.fields.message = [
                                message.substring(0, selection.begin),
                                openingTag,
                                message.substring(selection.end),
                            ].join('');
                            // Restore selection.
                            setTimeout(() => {
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
                    }
                    else {
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
                                const updater = utils_1.DOM.qs('.de-thr-updater-link');
                                if (updater) {
                                    updater.click();
                                }
                            }
                            else {
                                // Redirect to thread.
                                const location = xhr.getResponseHeader('Location');
                                if (location) {
                                    window.location.href = location;
                                }
                            }
                        }
                        else {
                            const data = JSON.parse(xhr.responseText);
                            if (data && data.error) {
                                this.status = `Error: ${data.error}`;
                            }
                            else {
                                this.status = `Error: ${xhr.status} ${xhr.statusText}`;
                            }
                        }
                    });
                    xhr.send(data);
                    this.disabled = true;
                },
            },
        });
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.addEventListener('click', () => {
                this.moveToBottom();
            });
        }
    }
    onPostsInserted(posts) {
        posts.forEach(post => {
            const referenceLinks = utils_1.DOM.qsa('a[data-reflink]', post);
            referenceLinks.forEach(link => {
                const id = +link.getAttribute('data-reflink');
                link.addEventListener('click', e => {
                    e.preventDefault();
                    if (this.isInThread && this.viewModel.position !== 'float') {
                        // Move form to the post.
                        this.moveToPost(post);
                    }
                    // Insert reply markup.
                    const message = this.viewModel.fields.message;
                    if (message.length && !message.endsWith('\n')) {
                        this.viewModel.fields.message += '\n';
                    }
                    this.viewModel.fields.message += `>>${id}\n`;
                    const selection = window.getSelection().toString();
                    if (selection) {
                        this.viewModel.fields.message += `> ${selection}\n`;
                    }
                    setTimeout(() => {
                        const messageEl = this.viewModel.$refs.message;
                        if (messageEl) {
                            messageEl.focus();
                        }
                    });
                });
            });
        });
    }
    hide() {
        this.viewModel.position = 'hidden';
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.classList.remove('hidden');
        }
    }
    moveToPost(post) {
        const form = utils_1.DOM.qid('posting-form');
        if (form) {
            post.parentElement.insertBefore(form, post.nextSibling);
        }
        this.viewModel.position = 'post';
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.classList.remove('hidden');
        }
        setTimeout(() => {
            const message = this.viewModel.$refs.message;
            if (message) {
                message.focus();
            }
        });
    }
    moveToBottom() {
        const form = utils_1.DOM.qid('posting-form');
        const wrapper = utils_1.DOM.qid('posting-form-wrapper');
        if (form && wrapper) {
            wrapper.insertBefore(form, null);
        }
        this.viewModel.position = 'bottom';
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.classList.add('hidden');
        }
        setTimeout(() => {
            const message = this.viewModel.$refs.message;
            if (message) {
                message.focus();
            }
        });
    }
}
exports.PostingForm = PostingForm;


/***/ }),

/***/ "./ts/components/settings.ts":
/*!***********************************!*\
  !*** ./ts/components/settings.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class Settings {
    constructor() {
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
    }
    onReady() {
        const settingsForm = utils_1.DOM.qid('settings_form');
        if (!settingsForm) {
            return;
        }
        this.viewModel = new vue_1.default({
            el: '#settings_form',
            template: `
<div class="content__settings-form settings-form" id="settings_form">
  <h3 class="settings-form__section-title">Form settings</h3>
  <fieldset class="settings-form__section">
    <legend class="settings-form__section-title">File preview</legend>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="form_preview_align_right" name="form_preview_align"
        value="right" v-model="settings.formPreviewAlign" />

      <label class="settings-form__label" for="form_preview_align_right">On the right</label>
    </p>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="form_preview_align_left" name="form_preview_align"
        value="left" v-model="settings.formPreviewAlign" />

      <label class="settings-form__label" for="form_preview_align_left">On the left</label>
    </p>
  </fieldset>

  <h3 class="settings-form__section-title">Time settings</h3>
  <fieldset class="settings-form__section">
    <legend class="settings-form__section-title">Language</legend>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_locale_default" name="time_locale"
        value="default" v-model="settings.timeLocale" />
      <label class="settings-form__label" for="time_locale_default">Browser default</label>
    </p>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_locale_custom" name="time_locale"
        value="custom" v-model="settings.timeLocale" />
      <label class="settings-form__label" for="time_locale_custom">Custom</label>

      <input class="input settings-form__text" type="text" v-on:click="settings.timeLocale = 'custom'"
        v-model="settings.timeLocaleCustomValue" placeholder="en" />
    </p>
  </fieldset>

  <fieldset class="settings-form__section">
    <legend class="settings-form__section-title">Format</legend>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_format_default" name="time_format"
        value="default" v-model="settings.timeFormat" />

      <label class="settings-form__label" for="time_format_default">Browser default</label>
    </p>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_format_custom" name="time_format"
        value="custom" v-model="settings.timeFormat" />

      <label class="settings-form__label" for="time_format_custom">Custom</label>

      <input class="input settings-form__text" type="text" v-on:click="settings.timeFormat = 'custom'"
        v-model="settings.timeFormatCustomValue" placeholder="EEE, dd MMM yyyy HH:mm:ss" />
    </p>

    <p>See the <a href="https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens">luxon documentation</a> for the custom tokens reference.</p>
  </fieldset>

  <fieldset class="settings-form__section">
    <legend class="settings-form__section-title">Time zone</legend>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_zone_default" name="time_zone"
        value="default" v-model="settings.timeZone" />

      <label class="settings-form__label" for="time_zone_default">Browser default</label>
    </p>

    <p class="settings-form__row">
      <input class="settings-form__radio" type="radio" id="time_zone_fixed" name="time_zone"
        value="fixed" v-model="settings.timeZone" />

      <label class="settings-form__label" for="time_zone_fixed">Fixed UTC offset</label>

      <input class="input settings-form__text" type="number" v-on:click="settings.timeZone = 'fixed'"
        v-model="settings.timeZoneFixedOffset" min="-99" max="99" />
    </p>
  </fieldset>

  <fieldset class="settings-form__section">
    <legend class="settings-form__section-title">Current format</legend>

    <p class="settings-form__row">{{ time }}</p>
  </fieldset>

  <p class="settings-form__status" id="status">{{ status }}</p>

  <p class="settings-form__buttons">
    <button class="button settings-form__save" type="button"
      v-on:click.prevent="saveSettings()">Save</button>
  </p>
</div>`,
            data() {
                return {
                    settings: {
                        formPreviewAlign: 'right',
                        timeLocale: 'default',
                        timeLocaleCustomValue: '',
                        timeFormat: 'default',
                        timeFormatCustomValue: '',
                        timeZone: 'default',
                        timeZoneFixedOffset: 0,
                    },
                    time: '',
                    status: '',
                };
            },
            created() {
                // Load settings from a cookie
                const settingsStr = utils_1.Cookie.get('settings', '{}');
                const settings = JSON.parse(settingsStr);
                this.settings = Object.assign({}, this.settings, settings);
                this._timer = setInterval(this.updateTime.bind(this), 1000);
            },
            destroyed() {
                if (this._timer) {
                    clearInterval(this._timer);
                }
            },
            methods: {
                updateTime() {
                    try {
                        const time = luxon_1.DateTime.fromJSDate(new Date());
                        this.time = utils_1.Time.format(time, this.settings);
                    }
                    catch (_a) {
                        this.time = 'Invalid format';
                    }
                },
                saveSettings() {
                    const expire = new Date();
                    // One year.
                    expire.setTime(expire.getTime() + 365 * 24 * 60 * 60 * 1000);
                    utils_1.Cookie.set('settings', JSON.stringify(this.settings), expire);
                    // Indicate that settings are saved.
                    this.status = '';
                    setTimeout(() => {
                        this.status = 'Settings saved.';
                    }, 1000 / 3);
                },
            },
        });
    }
}
exports.Settings = Settings;


/***/ }),

/***/ "./ts/components/style-switch.ts":
/*!***************************************!*\
  !*** ./ts/components/style-switch.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class StyleSwitch {
    constructor() {
        this.styles = {};
        // Parse selectable styles from <head>
        const styles = utils_1.DOM.qsa('link[title]');
        styles.forEach(style => {
            const title = style.title;
            const url = style.getAttribute('href');
            this.styles[title] = url;
            style.remove();
        });
        // Get selected style
        const selected_style = utils_1.Cookie.get('tinyib_style', 'Synthwave');
        this.setStyle(selected_style);
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
    }
    onReady() {
        const style_switcher = utils_1.DOM.qid('style-switcher');
        if (style_switcher) {
            // Populate style switcher widget
            const styles = Object.keys(this.styles);
            for (let i = 0; i < styles.length; ++i) {
                const title = styles[i];
                style_switcher.innerHTML += `<option class="style-switcher__option" value="${title}">${title}</option>`;
            }
            // Set style change callback
            style_switcher.addEventListener('change', () => {
                this.setStyle(style_switcher.value);
            });
        }
        const selected_style = utils_1.Cookie.get('tinyib_style', 'Synthwave');
        window.dataLayer.push({ 'theme': selected_style });
    }
    setStyle(style) {
        const head = utils_1.DOM.qs('head');
        // If no <head> element, do nothing
        if (!head) {
            return;
        }
        const selected_style = utils_1.DOM.qs('link[data-selected]');
        if (selected_style) {
            // If style already selected, do nothing
            if (selected_style.title === style) {
                return;
            }
            // Remove previously selected style from <head>
            selected_style.remove();
        }
        // Add currently selected style to <head>
        const url = this.styles[style];
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        link.setAttribute('data-selected', 'true');
        head.appendChild(link);
        // Save selected style
        const expiration_date = new Date();
        expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);
        utils_1.Cookie.set('tinyib_style', style, expiration_date);
    }
}
exports.StyleSwitch = StyleSwitch;


/***/ }),

/***/ "./ts/event-bus.ts":
/*!*************************!*\
  !*** ./ts/event-bus.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
const eventBus = new vue_1.default();
exports.eventBus = eventBus;


/***/ }),

/***/ "./ts/events.ts":
/*!**********************!*\
  !*** ./ts/events.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Events;
(function (Events) {
    Events["Ready"] = "ready";
    Events["PostsInserted"] = "posts_inserted";
    Events["PostCreated"] = "post_created";
    Events["InsertMarkup"] = "insert_markup";
})(Events = exports.Events || (exports.Events = {}));


/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var event_bus_1 = __webpack_require__(/*! ./event-bus */ "./ts/event-bus.ts");
exports.eventBus = event_bus_1.eventBus;
var events_1 = __webpack_require__(/*! ./events */ "./ts/events.ts");
exports.Events = events_1.Events;
var settings_1 = __webpack_require__(/*! ./settings */ "./ts/settings.ts");
exports.Settings = settings_1.Settings;


/***/ }),

/***/ "./ts/settings.ts":
/*!************************!*\
  !*** ./ts/settings.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Settings {
    constructor(formPreviewAlign, timeLocale, timeLocaleCustomValue, timeZone, timeZoneFixedOffset, timeFormat, timeFormatCustomValue) {
        this.formPreviewAlign = formPreviewAlign;
        this.timeLocale = timeLocale;
        this.timeLocaleCustomValue = timeLocaleCustomValue;
        this.timeZone = timeZone;
        this.timeZoneFixedOffset = timeZoneFixedOffset;
        this.timeFormat = timeFormat;
        this.timeFormatCustomValue = timeFormatCustomValue;
    }
    static create(settings) {
        return new Settings(settings.formPreviewAlign, settings.timeLocale, settings.timeLocaleCustomValue, settings.timeZone, settings.timeZoneFixedOffset, settings.timeFormat, settings.timeFormatCustomValue);
    }
}
exports.Settings = Settings;


/***/ }),

/***/ "./ts/utils/cookie.ts":
/*!****************************!*\
  !*** ./ts/utils/cookie.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Cookie {
    static get(name, _default = null) {
        const cookie_str = `; ${document.cookie}`;
        const cookie_parts = cookie_str.split(`; ${name}=`);
        if (cookie_parts.length === 2) {
            const value_enc = cookie_parts.pop().split(';').shift();
            return decodeURIComponent(value_enc);
        }
        return _default;
    }
    static set(name, value, expiration) {
        const value_enc = encodeURIComponent(value);
        const expiration_str = expiration.toUTCString();
        document.cookie = `${name}=${value_enc}; path=/; expires=${expiration_str}`;
    }
}
exports.Cookie = Cookie;


/***/ }),

/***/ "./ts/utils/dom.ts":
/*!*************************!*\
  !*** ./ts/utils/dom.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DOM {
    static qid(id) {
        return document.getElementById(id);
    }
    static qs(selector, context = null) {
        if (!context) {
            context = document;
        }
        return context.querySelector(selector);
    }
    static qsa(selector, context = null) {
        if (!context) {
            context = document;
        }
        const elementList = context.querySelectorAll(selector);
        return Array.prototype.slice.call(elementList);
    }
}
exports.DOM = DOM;


/***/ }),

/***/ "./ts/utils/index.ts":
/*!***************************!*\
  !*** ./ts/utils/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cookie_1 = __webpack_require__(/*! ./cookie */ "./ts/utils/cookie.ts");
exports.Cookie = cookie_1.Cookie;
var dom_1 = __webpack_require__(/*! ./dom */ "./ts/utils/dom.ts");
exports.DOM = dom_1.DOM;
var time_1 = __webpack_require__(/*! ./time */ "./ts/utils/time.ts");
exports.Time = time_1.Time;


/***/ }),

/***/ "./ts/utils/time.ts":
/*!**************************!*\
  !*** ./ts/utils/time.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Time {
    static format(time, settings) {
        const locale = settings.timeLocale;
        const localeValue = settings.timeLocaleCustomValue;
        const zone = settings.timeZone;
        const zoneFixedOffset = settings.timeZoneFixedOffset;
        const format = settings.timeFormat;
        const formatValue = settings.timeFormatCustomValue;
        if (locale === 'custom') {
            time = time.setLocale(localeValue);
        }
        if (zone === 'fixed') {
            const offsetStr = 'UTC' + (zoneFixedOffset >= 0 ? '+' : '') + zoneFixedOffset.toString();
            time = time.setZone(offsetStr);
        }
        if (format === 'custom') {
            return time.toFormat(formatValue);
        }
        else {
            return time.toFormat('d.LL.yyyy HH:mm:ss');
        }
    }
}
exports.Time = Time;


/***/ }),

/***/ "luxon":
/*!************************!*\
  !*** external "luxon" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = luxon;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvY2FwdGNoYS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2NvcnJlY3QtdGltZS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2RlbGV0ZS1mb3JtLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9uZXctcG9zdHMtZGV0ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3N0LXJlZmVyZW5jZS1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3N0aW5nLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3N0eWxlLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudC1idXMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXZlbnRzLnRzIiwid2VicGFjazovLy8uL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9kb20udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvdGltZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsdXhvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxXQUFXLG1CQUFPLENBQUMsd0JBQUc7QUFDdEIscUJBQXFCLG1CQUFPLENBQUMsOENBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZFk7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxZQUFZLG1CQUFPLENBQUMseUJBQUk7QUFDeEIsZ0JBQWdCLG1CQUFPLENBQUMscUNBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUIsR0FBRyxxQkFBcUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxvQkFBTztBQUMvQixZQUFZLG1CQUFPLENBQUMseUJBQUk7QUFDeEIsZ0JBQWdCLG1CQUFPLENBQUMscUNBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELFlBQVksbUJBQU8sQ0FBQyx5QkFBSTtBQUN4QixnQkFBZ0IsbUJBQU8sQ0FBQyxxQ0FBVTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsNkNBQVc7QUFDbkM7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyx1REFBZ0I7QUFDN0M7QUFDQSxvQkFBb0IsbUJBQU8sQ0FBQyxxREFBZTtBQUMzQztBQUNBLDJCQUEyQixtQkFBTyxDQUFDLG1FQUFzQjtBQUN6RDtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLHVEQUFnQjtBQUM3QztBQUNBLDJCQUEyQixtQkFBTyxDQUFDLG1FQUFzQjtBQUN6RDtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFZO0FBQ3JDO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsdURBQWdCO0FBQzdDOzs7Ozs7Ozs7Ozs7O0FDakJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLHlCQUFJO0FBQ3hCLGdCQUFnQixtQkFBTyxDQUFDLHFDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLHlCQUFJO0FBQ3hCLGdCQUFnQixtQkFBTyxDQUFDLHFDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxLQUFLO0FBQ3BFLGlFQUFpRSxTQUFTO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakRhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyxnQkFBSztBQUMzQyxZQUFZLG1CQUFPLENBQUMseUJBQUk7QUFDeEIsZ0JBQWdCLG1CQUFPLENBQUMscUNBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQWdEO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdEQUF3RCxVQUFVOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxFQUFFO0FBQzNDLHdDQUF3QyxFQUFFO0FBQzFDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsR0FBRyxRQUFRLEdBQUc7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsV0FBVyxHQUFHLGVBQWU7QUFDN0Y7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLElBQUk7QUFDL0MsNENBQTRDLElBQUk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxVQUFVO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxtQ0FBbUMsZUFBZTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsZ0JBQWdCO0FBQ3RFLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxXQUFXO0FBQ25FO0FBQ0E7QUFDQSx3REFBd0QsV0FBVyxHQUFHLGVBQWU7QUFDckY7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEdBQUc7QUFDN0Q7QUFDQTtBQUNBLDhEQUE4RCxVQUFVO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMWtCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsb0JBQU87QUFDL0IsOEJBQThCLG1CQUFPLENBQUMsZ0JBQUs7QUFDM0MsWUFBWSxtQkFBTyxDQUFDLHlCQUFJO0FBQ3hCLGdCQUFnQixtQkFBTyxDQUFDLHFDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsUUFBUTtBQUM1Qzs7QUFFQSxpREFBaUQsVUFBVTs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUthO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLHlCQUFJO0FBQ3hCLGdCQUFnQixtQkFBTyxDQUFDLHFDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBLDZGQUE2RixNQUFNLElBQUksTUFBTTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsK0JBQStCLDBCQUEwQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xFYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsZ0JBQUs7QUFDM0M7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxpREFBaUQ7Ozs7Ozs7Ozs7Ozs7QUNSckM7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxrQkFBa0IsbUJBQU8sQ0FBQyxzQ0FBYTtBQUN2QztBQUNBLGVBQWUsbUJBQU8sQ0FBQyxnQ0FBVTtBQUNqQztBQUNBLGlCQUFpQixtQkFBTyxDQUFDLG9DQUFZO0FBQ3JDOzs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsNkJBQTZCLEdBQUcsZ0JBQWdCO0FBQ2hELGdEQUFnRCxHQUFHLEtBQUs7QUFDeEQ7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSyxHQUFHLFdBQVcsUUFBUSxXQUFXLGVBQWU7QUFDbEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsc0NBQVU7QUFDakM7QUFDQSxZQUFZLG1CQUFPLENBQUMsZ0NBQU87QUFDM0I7QUFDQSxhQUFhLG1CQUFPLENBQUMsa0NBQVE7QUFDN0I7Ozs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekJBLHVCOzs7Ozs7Ozs7OztBQ0FBLHFCIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2FwcC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHNcIik7XG5uZXcgY29tcG9uZW50c18xLkNhcHRjaGEoKTtcbm5ldyBjb21wb25lbnRzXzEuQ29ycmVjdFRpbWUoKTtcbm5ldyBjb21wb25lbnRzXzEuRGVsZXRlRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0aW5nRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0UmVmZXJlbmNlTWFwKCk7XG5uZXcgY29tcG9uZW50c18xLlNldHRpbmdzKCk7XG5uZXcgY29tcG9uZW50c18xLlN0eWxlU3dpdGNoKCk7XG5uZXcgY29tcG9uZW50c18xLk5ld1Bvc3RzRGV0ZWN0b3IoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBlID0+IHtcbiAgICBfMS5ldmVudEJ1cy4kZW1pdChfMS5FdmVudHMuUmVhZHkpO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDYXB0Y2hhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFNyYyA9ICcnO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGFpbWFnZScpO1xuICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTcmMgPSBpbWFnZS5zcmM7XG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVsb2FkLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgY29uc3QgY2FwdGNoYSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYScpO1xuICAgICAgICBjYXB0Y2hhLnZhbHVlID0gJyc7XG4gICAgICAgIGNhcHRjaGEuZm9jdXMoKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGFpbWFnZScpO1xuICAgICAgICBpbWFnZS5zcmMgPSBgJHt0aGlzLm9yaWdpbmFsU3JjfSMke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnRzLkNhcHRjaGEgPSBDYXB0Y2hhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsdXhvbl8xID0gcmVxdWlyZShcImx1eG9uXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIENvcnJlY3RUaW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gTG9hZCBzZXR0aW5ncyBmcm9tIGEgY29va2llXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBKU09OLnBhcnNlKHV0aWxzXzEuQ29va2llLmdldCgnc2V0dGluZ3MnLCAne30nKSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgKHBvc3RzKSA9PiBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0LmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0LWhlYWRlcl9fZGF0ZXRpbWUnKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHRoaXMuY29ycmVjdFRpbWUoZWxlbWVudCkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCB0aW1lX2VsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0LWhlYWRlcl9fZGF0ZXRpbWUnLCBwb3N0KTtcbiAgICAgICAgaWYgKCF0aW1lX2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3JyZWN0VGltZSh0aW1lX2VsKTtcbiAgICB9XG4gICAgY29ycmVjdFRpbWUoZWwpIHtcbiAgICAgICAgY29uc3QgdGltZV9zdHIgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGV0aW1lJyk7XG4gICAgICAgIGlmICghdGltZV9zdHIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lID0gbHV4b25fMS5EYXRlVGltZS5mcm9tSVNPKHRpbWVfc3RyKTtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB1dGlsc18xLlRpbWUuZm9ybWF0KHRpbWUsIHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29ycmVjdFRpbWUgPSBDb3JyZWN0VGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIERlbGV0ZUZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgnZGVsZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWxldGVfcG9zdF9wYXNzd29yZCA9IHV0aWxzXzEuRE9NLnFpZCgnZGVsZXRlcG9zdHBhc3N3b3JkJyk7XG4gICAgICAgIGlmIChkZWxldGVfcG9zdF9wYXNzd29yZCkge1xuICAgICAgICAgICAgLy8gTG9hZCBkZWxldGUgcG9zdCBwYXNzd29yZC5cbiAgICAgICAgICAgIGRlbGV0ZV9wb3N0X3Bhc3N3b3JkLnZhbHVlID0gdXRpbHNfMS5Db29raWUuZ2V0KCd0aW55aWJfcGFzc3dvcmQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRGVsZXRlRm9ybSA9IERlbGV0ZUZvcm07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjYXB0Y2hhXzEgPSByZXF1aXJlKFwiLi9jYXB0Y2hhXCIpO1xuZXhwb3J0cy5DYXB0Y2hhID0gY2FwdGNoYV8xLkNhcHRjaGE7XG52YXIgY29ycmVjdF90aW1lXzEgPSByZXF1aXJlKFwiLi9jb3JyZWN0LXRpbWVcIik7XG5leHBvcnRzLkNvcnJlY3RUaW1lID0gY29ycmVjdF90aW1lXzEuQ29ycmVjdFRpbWU7XG52YXIgZGVsZXRlX2Zvcm1fMSA9IHJlcXVpcmUoXCIuL2RlbGV0ZS1mb3JtXCIpO1xuZXhwb3J0cy5EZWxldGVGb3JtID0gZGVsZXRlX2Zvcm1fMS5EZWxldGVGb3JtO1xudmFyIG5ld19wb3N0c19kZXRlY3Rvcl8xID0gcmVxdWlyZShcIi4vbmV3LXBvc3RzLWRldGVjdG9yXCIpO1xuZXhwb3J0cy5OZXdQb3N0c0RldGVjdG9yID0gbmV3X3Bvc3RzX2RldGVjdG9yXzEuTmV3UG9zdHNEZXRlY3RvcjtcbnZhciBwb3N0aW5nX2Zvcm1fMSA9IHJlcXVpcmUoXCIuL3Bvc3RpbmctZm9ybVwiKTtcbmV4cG9ydHMuUG9zdGluZ0Zvcm0gPSBwb3N0aW5nX2Zvcm1fMS5Qb3N0aW5nRm9ybTtcbnZhciBwb3N0X3JlZmVyZW5jZV9tYXBfMSA9IHJlcXVpcmUoXCIuL3Bvc3QtcmVmZXJlbmNlLW1hcFwiKTtcbmV4cG9ydHMuUG9zdFJlZmVyZW5jZU1hcCA9IHBvc3RfcmVmZXJlbmNlX21hcF8xLlBvc3RSZWZlcmVuY2VNYXA7XG52YXIgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuZXhwb3J0cy5TZXR0aW5ncyA9IHNldHRpbmdzXzEuU2V0dGluZ3M7XG52YXIgc3R5bGVfc3dpdGNoXzEgPSByZXF1aXJlKFwiLi9zdHlsZS1zd2l0Y2hcIik7XG5leHBvcnRzLlN0eWxlU3dpdGNoID0gc3R5bGVfc3dpdGNoXzEuU3R5bGVTd2l0Y2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBOZXdQb3N0c0RldGVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqIEB0b2RvOiByZW1vdmUgTXV0YXRpb25PYnNlcnZlciBBU0FQLCB3aXRoIGludGVncmF0ZWQgdGhyZWFkIHVwZGF0aW5nLiAqL1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IG11dGF0aW9uc1xuICAgICAgICAgICAgICAgIC8vIEdldCBhZGRlZCBwb3N0cywgaWYgYW55LlxuICAgICAgICAgICAgICAgIC5tYXAobXV0YXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVMaXN0ID0gbXV0YXRpb24uYWRkZWROb2RlcztcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVMaXN0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IG5vZGVzLmZpbHRlcihub2RlID0+IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgZWxlbWVudCBpcyBwb3N0IGl0c2VsZiwgcmV0dXJuIGl0LFxuICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIHF1ZXJ5IGZvciBlbGVtZW50IGNoaWxkcmVuLlxuICAgICAgICAgICAgICAgICAgICAubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bvc3QnKVxuICAgICAgICAgICAgICAgICAgICA/IFtlbGVtZW50XVxuICAgICAgICAgICAgICAgICAgICA6IHV0aWxzXzEuRE9NLnFzYSgnLnBvc3QnLCBlbGVtZW50KSlcbiAgICAgICAgICAgICAgICAgICAgLy8gRmxhdHRlbiBwb3N0cyBhcnJheS5cbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsLmNvbmNhdChjdXJyZW50KSwgW10pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyBGbGF0dGVuIHBvc3RzIGFycmF5LlxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB0b3RhbC5jb25jYXQoY3VycmVudCksIFtdKTtcbiAgICAgICAgICAgIGlmIChwb3N0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgX18xLmV2ZW50QnVzLiRlbWl0KF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgcG9zdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBTZXR1cCBNdXRhdGlvbk9ic2VydmVyLlxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gdXRpbHNfMS5ET00ucXNhKCcucG9zdCcpO1xuICAgICAgICAgICAgaWYgKHBvc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCBwb3N0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuTmV3UG9zdHNEZXRlY3RvciA9IE5ld1Bvc3RzRGV0ZWN0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0UmVmZXJlbmNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3N0cyA9IHt9O1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgKHBvc3RzKSA9PiBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0LmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgcG9zdElkID0gK3Bvc3QuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgLy8gU3RvcmUgcG9zdC5cbiAgICAgICAgdGhpcy5wb3N0c1twb3N0SWRdID0gcG9zdDtcbiAgICAgICAgLy8gR2V0IHJlZmVyZW5jZXMuXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZUVsZW1lbnRzID0gdXRpbHNfMS5ET00ucXNhKCdhW2RhdGEtdGFyZ2V0LXBvc3QtaWRdJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSByZWZlcmVuY2VFbGVtZW50cy5tYXAoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgaWQ6ICtlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQtcG9zdC1pZCcpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgYXV0aG9yIG5hbWUgb2YgdGhlIHJlZmVyZW5jZWQgcG9zdCB0byB0aGUgcmVmZXJlbmNlIGxpbmsgdGV4dC5cbiAgICAgICAgcmVmZXJlbmNlcy5mb3JFYWNoKHJlZmVyZW5jZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gdGhpcy5wb3N0c1tyZWZlcmVuY2UuaWRdO1xuICAgICAgICAgICAgaWYgKCFwb3N0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlQXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmVmZXJlbmNlQXV0aG9yLmNsYXNzTGlzdC5hZGQoJ3Bvc3RfX3JlZmVyZW5jZS1saW5rLWF1dGhvcicpO1xuICAgICAgICAgICAgcmVmZXJlbmNlQXV0aG9yLmlubmVySFRNTCA9IHRoaXMuZ2V0UG9zdFJlZkxpbmtBdXRob3JIdG1sKHBvc3QpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gcmVmZXJlbmNlLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gcmVmZXJlbmNlLmVsZW1lbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHJlZmVyZW5jZUF1dGhvciwgbmV4dFNpYmxpbmcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UG9zdFJlZkxpbmtBdXRob3JIdG1sKHBvc3QpIHtcbiAgICAgICAgY29uc3QgbmFtZUVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0LWhlYWRlcl9fbmFtZScsIHBvc3QpO1xuICAgICAgICBjb25zdCB0cmlwY29kZUVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0LWhlYWRlcl9fdHJpcGNvZGUnLCBwb3N0KTtcbiAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbCA/IG5hbWVFbC5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgY29uc3QgdHJpcGNvZGUgPSB0cmlwY29kZUVsID8gdHJpcGNvZGVFbC5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoIHx8IHRyaXBjb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGAoPHNwYW4gY2xhc3M9XCJwb3N0X19yZWZlcmVuY2UtbGluay1uYW1lXCI+JHtuYW1lfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgKyBgPHNwYW4gY2xhc3M9XCJwb3N0X19yZWZlcmVuY2UtbGluay10cmlwY29kZVwiPiR7dHJpcGNvZGV9PC9zcGFuPilgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGBgO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0UmVmZXJlbmNlTWFwID0gUG9zdFJlZmVyZW5jZU1hcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0aW5nRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNJblRocmVhZCA9IGZhbHNlO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHRoaXMub25Qb3N0c0luc2VydGVkLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBmb3JtID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0nKTtcbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2ggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaCgvXFwvcmVzXFwvKFxcZCspL2kpO1xuICAgICAgICBjb25zdCBpc0luVGhyZWFkID0gISFtYXRjaDtcbiAgICAgICAgY29uc3QgdGhyZWFkSWQgPSBpc0luVGhyZWFkID8gK21hdGNoWzFdIDogMDtcbiAgICAgICAgdGhpcy5pc0luVGhyZWFkID0gaXNJblRocmVhZDtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKHV0aWxzXzEuQ29va2llLmdldCgnc2V0dGluZ3MnLCAne30nKSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3IHZ1ZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgZWw6IGZvcm0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGZvcm0gY2xhc3M9XCJjb250ZW50X19wb3N0aW5nLWZvcm0gcG9zdGluZy1mb3JtXCIgaWQ9XCJwb3N0aW5nLWZvcm1cIlxuICB2LWJpbmQ6Y2xhc3M9XCJ7ICdwb3N0aW5nLWZvcm0tLWZsb2F0aW5nJzogcG9zaXRpb24gPT0gJ2Zsb2F0JyB9XCJcbiAgdi1vbjpzdWJtaXQucHJldmVudD1cIm9uU3VibWl0KClcIiB2LXNob3c9XCJwb3NpdGlvbiAhPT0gJ2hpZGRlbidcIlxuICByZWY9XCJmb3JtXCI+XG4gIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2hlYWRlclwiIHJlZj1cImhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX190aXRsZVwiPnt7XG4gICAgICB0aHJlYWRJZCA/ICdSZXBseSB0byB0aHJlYWQgIycgKyB0aHJlYWRJZCA6ICdDcmVhdGUgdGhyZWFkJ1xuICAgIH19PC9zcGFuPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2hlYWRlci1idXR0b25zXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX2Nsb3NlXCJcbiAgICAgICAgdi1vbjpjbGljaz1cIm9uQ2xvc2VDbGljaygpXCI+4qivPC9idXR0b24+XG4gICAgPC9zcGFuPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2hlYWRlci1idXR0b25zXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX2Zsb2F0XCJcbiAgICAgICAgdi1pZj1cInBvc2l0aW9uICE9PSAnZmxvYXQnICYmIG1vZGUgIT09ICdtb2JpbGUnXCJcbiAgICAgICAgdi1vbjpjbGljaz1cInBvc2l0aW9uID0gJ2Zsb2F0J1wiPuKGkTwvYnV0dG9uPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXdcIiB2LW9uOmNsaWNrPVwic2hvd0ZpbGVEaWFsb2coKVwiXG4gICAgICB2LWJpbmQ6Y2xhc3M9XCJ7ICdwb3N0aW5nLWZvcm1fX3ByZXZpZXctLW1vYmlsZSc6IG1vZGUgPT0gJ21vYmlsZScsXG4gICAgICAgICdwb3N0aW5nLWZvcm1fX3ByZXZpZXctLXJpZ2h0JzogcHJldmlld0FsaWduID09ICdyaWdodCcgfVwiXG4gICAgICB2LXNob3c9XCJtb2RlID09ICdkZWZhdWx0JyB8fCBmaWxlXCJcbiAgICAgIHYtb246ZHJhZ2VudGVyLnN0b3AucHJldmVudFxuICAgICAgdi1vbjpkcmFnbGVhdmUuc3RvcC5wcmV2ZW50XG4gICAgICB2LW9uOmRyYWdvdmVyLnN0b3AucHJldmVudFxuICAgICAgdi1vbjpkcm9wLnN0b3AucHJldmVudD1cIm9uRmlsZURyb3AoJGV2ZW50KVwiPlxuICAgICAgPGltZyB2LWlmPVwicHJldmlld1R5cGUgPT0gJ2ltYWdlJ1wiIGNsYXNzPVwicG9zdGluZy1mb3JtX19wcmV2aWV3LWltYWdlXCJcbiAgICAgICAgdi1iaW5kOnNyYz1cInByZXZpZXdTcmNcIiAvPlxuICAgICAgPHZpZGVvIHYtZWxzZS1pZj1cInByZXZpZXdUeXBlID09ICd2aWRlbydcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcHJldmlldy1pbWFnZVwiXG4gICAgICAgIHYtYmluZDpzcmM9XCJwcmV2aWV3U3JjXCIgYXV0b3BsYXkgbG9vcCBtdXRlZD48L3ZpZGVvPlxuICAgICAgPHAgdi1lbHNlLWlmPVwicHJldmlld1R5cGUgPT0gJydcIj5VcGxvYWQgZmlsZTwvcD5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19wcmV2aWV3LXJlbW92ZVwiXG4gICAgICAgIHYtaWY9XCJmaWxlXCIgdi1vbjpjbGljay5zdG9wPVwiZmlsZSA9IG51bGwsIHVwZGF0ZVByZXZpZXcoKVwiPuKorzwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fbWFpblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19zdWJqZWN0XCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLnN1YmplY3RcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIC8+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBwb3N0aW5nLWZvcm1fX25hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMubmFtZVwiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCIgdi1vbjpjaGFuZ2U9XCJvbk5hbWVDaGFuZ2UoKVwiIC8+XG5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9zdGluZy1mb3JtX19hdHRhY2htZW50XCIgdi1zaG93PVwibW9kZSA9PSAnbW9iaWxlJ1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwicG9zdGluZy1mb3JtX19hdHRhY2htZW50LWlucHV0XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMuZmlsZVwiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIHYtb246Y2hhbmdlPVwib25GaWxlQ2hhbmdlKCRldmVudC50YXJnZXQuZmlsZXMpXCJcbiAgICAgICAgICAgIHJlZj1cImZpbGVcIiAvPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2F0dGFjaG1lbnQtaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX3N1Ym1pdFwiXG4gICAgICAgICAgdi1pZj1cIm1vZGUgPT0gJ2RlZmF1bHQnXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIj5SZXBseTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX21hcmt1cC1yb3cgbWFya3VwXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdiJylcIj5cbiAgICAgICAgICA8c3Ryb25nPmI8L3N0cm9uZz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2knKVwiPlxuICAgICAgICAgIDxlbT5pPC9lbT5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3UnKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFya3VwX191bmRlcmxpbmVcIj51PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgncycpXCI+XG4gICAgICAgICAgPGRlbD5zPC9kZWw+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzdWInKVwiPlxuICAgICAgICAgIDxzdWI+czwvc3ViPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnc3VwJylcIj5cbiAgICAgICAgICA8c3VwPnM8L3N1cD5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2NvZGUnKVwiPlxuICAgICAgICAgIDxjb2RlPmM8L2NvZGU+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzcG9pbGVyJylcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fc3BvaWxlciBtYXJrdXBfX3Nwb2lsZXItLXZpc2libGVcIj5zcDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3JwJylcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fcnAgbWFya3VwX19ycC0tdmlzaWJsZVwiPnJwPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydFF1b3RlKClcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fcXVvdGVcIj4mZ3Q7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19yb3dcIj5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLm1lc3NhZ2VcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjprZXlkb3duPVwib25NZXNzYWdlS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICB2LW9uOnBhc3RlPVwib25NZXNzYWdlUGFzdGUoJGV2ZW50KVwiXG4gICAgICAgICAgcmVmPVwibWVzc2FnZVwiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwic3RhdHVzXCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3N0YXR1c1wiPnt7IHN0YXR1cyB9fTwvZGl2PlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fc3VibWl0ICBwb3N0aW5nLWZvcm1fX3N1Ym1pdC0tbW9iaWxlXCJcbiAgICAgICAgdi1pZj1cIm1vZGUgPT0gJ21vYmlsZSdcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlJlcGx5PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb3JtPmAsXG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdTcmM6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3VHlwZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbW9iaWxlJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAgICAgdGhyZWFkSWQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJlYWRJZDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHByZXZpZXdBbGlnbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzLmZvcm1QcmV2aWV3QWxpZ247XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgICAgIC8vIExvYWQgc2F2ZWQgbmFtZS5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbG9jYWxTdG9yYWdlWydwb3N0aW5nLWZvcm0ubmFtZSddO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemUgPSB0aGlzLnVwZGF0ZU1vZGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuJHJlZnMuaGVhZGVyO1xuICAgICAgICAgICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91c2VEb3duID0gdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLl9tb3VzZURvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIHJlc2V0RmllbGRzKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5zdWJqZWN0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZmlsZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNob3dGaWxlRGlhbG9nKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4kcmVmcy5maWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGUuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlTW9kZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlID0gd2luZG93LmlubmVyV2lkdGggPCA2MDAgPyAnbW9iaWxlJyA6ICdkZWZhdWx0JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PSAnbW9iaWxlJyAmJiB0aGlzLnBvc2l0aW9uID09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlUHJldmlldygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbGUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUuc3RhcnRzV2l0aCgndmlkZW8vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1R5cGUgPSAndmlkZW8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUuc3RhcnRzV2l0aCgnYXVkaW8vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1R5cGUgPSAnYXVkaW8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHlwZSA9ICdpbWFnZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5maWxlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZmlsZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aCgnLndlYm0nKSB8fCBuYW1lLmVuZHNXaXRoKCcubXA0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1R5cGUgPSAndmlkZW8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy5tcDMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHlwZSA9ICdhdWRpbyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUeXBlID0gJ2ltYWdlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHlwZSA9ICdpbWFnZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1NyYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1R5cGUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1NyYyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLiRyZWZzLmZvcm07XG4gICAgICAgICAgICAgICAgICAgIGlmICghZm9ybSB8fCB0aGlzLnBvc2l0aW9uICE9PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91c2VEb3duRm9ybUxlZnQgPSBmb3JtLm9mZnNldExlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlRG93bkZvcm1Ub3AgPSBmb3JtLm9mZnNldFRvcDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91c2VEb3duTW91c2VMZWZ0ID0gZS5jbGllbnRYO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZURvd25Nb3VzZVRvcCA9IGUuY2xpZW50WTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9tb3VzZU1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlTW92ZSA9IHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuX21vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9tb3VzZVVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZVVwID0gdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLl9tb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5fbW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuJHJlZnMuZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3JtIHx8IHRoaXMucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVggPSBlLmNsaWVudFggLSB0aGlzLl9tb3VzZURvd25Nb3VzZUxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IGUuY2xpZW50WSAtIHRoaXMuX21vdXNlRG93bk1vdXNlVG9wO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5fbW91c2VEb3duRm9ybUxlZnQgKyBkZWx0YVg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLl9tb3VzZURvd25Gb3JtVG9wICsgZGVsdGFZO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5zdHlsZS50b3AgPSBgJHt5fXB4YDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTW91c2VVcChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tb3VzZU1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuX21vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZU1vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tb3VzZVVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5fbW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHRoaXMuX21vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91c2VVcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xvc2VDbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTmFtZUNoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBuYW1lLlxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VbJ3Bvc3RpbmctZm9ybS5uYW1lJ10gPSB0aGlzLmZpZWxkcy5uYW1lO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25GaWxlRHJvcChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcmV2aWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0ICYmIHRleHQubWF0Y2goL2h0dHBzPzpcXC9cXC9bLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLH1cXC5bYS16XXsyLH1cXGJbLWEtekEtWjAtOUA6JV9cXCsufiM/JlxcLz1dKi8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgdGV4dCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJldmlldygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgRXJyb3I6ICR7eGhyLnN0YXR1c30gJHt4aHIuc3RhdHVzVGV4dH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcmV2aWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkZpbGVDaGFuZ2UoZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZXMubGVuZ3RoID8gZmlsZXNbMF0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTWVzc2FnZUtleURvd24oZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdWJtaXQgZm9ybSBvbiBDdHJsK0VudGVyIGluIHRoZSBtZXNzYWdlIGZpZWxkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoKGUua2V5Q29kZSA9PSAxMCB8fCBlLmtleUNvZGUgPT0gMTMpICYmIGUuY3RybEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbk1lc3NhZ2VQYXN0ZShlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3RlIGZpbGUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBlLmNsaXBib2FyZERhdGEgfHwgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZGF0YS5pdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXRlbS50eXBlLnN0YXJ0c1dpdGgoJ2F1ZGlvLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXRlbS50eXBlLnN0YXJ0c1dpdGgoJ3ZpZGVvLycpO1xuICAgICAgICAgICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5zZXJ0TWFya3VwKHRhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRWwgPSB0aGlzLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgLSBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmZpZWxkcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVuaW5nVGFnID0gYFske3RhZ31dYDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2luZ1RhZyA9IGBbLyR7dGFnfV1gO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGV4dCBpcyBzZWxlY3RlZCwgd3JhcCBpdCBpbiBhIHRhZyBwYWlyLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmJlZ2luLCBzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgb3BlbmluZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5lbmQgKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubGFzdEluZGV4T2Yob3BlbmluZ1RhZywgc2VsZWN0aW9uLmJlZ2luKSA+IG1lc3NhZ2UubGFzdEluZGV4T2YoY2xvc2luZ1RhZywgc2VsZWN0aW9uLmJlZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBjbG9zaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5lbmQgKyBjbG9zaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5lbmQgKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5zZXJ0UXVvdGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmZpZWxkcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5sZW5ndGggJiYgIW1lc3NhZ2UuZW5kc1dpdGgoJ1xcbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlICs9ICdcXG4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlICs9IGA+ICR7c2VsZWN0aW9ufVxcbmA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlICs9ICc+ICc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VibWl0KCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdWJtaXQgcmVxdWVzdCB0byBjcmVhdGUgcG9zdC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FqYXgvcG9zdC9jcmVhdGVgO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdwYXJlbnQnLCB0aHJlYWRJZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3N1YmplY3QnLCB0aGlzLmZpZWxkcy5zdWJqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ25hbWUnLCB0aGlzLmZpZWxkcy5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ21lc3NhZ2UnLCB0aGlzLmZpZWxkcy5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCB0aGlzLmZpbGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudCA9IE1hdGguY2VpbChlLmxvYWRlZCAvIGUudG90YWwgKiAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgVXBsb2FkaW5nLi4uICR7cHJvZ3Jlc3NQZXJjZW50fSVgO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBmb3JtLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgZm9ybSB0byB0aGUgaW5pdGlhbCBsb2NhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJblRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIERFIHRocmVhZCB1cGRhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZXIgPSB1dGlsc18xLkRPTS5xcygnLmRlLXRoci11cGRhdGVyLWxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gdGhyZWFkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBFcnJvcjogJHtkYXRhLmVycm9yfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBFcnJvcjogJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b24pIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uUG9zdHNJbnNlcnRlZChwb3N0cykge1xuICAgICAgICBwb3N0cy5mb3JFYWNoKHBvc3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlTGlua3MgPSB1dGlsc18xLkRPTS5xc2EoJ2FbZGF0YS1yZWZsaW5rXScsIHBvc3QpO1xuICAgICAgICAgICAgcmVmZXJlbmNlTGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9ICtsaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1yZWZsaW5rJyk7XG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSW5UaHJlYWQgJiYgdGhpcy52aWV3TW9kZWwucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgZm9ybSB0byB0aGUgcG9zdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvUG9zdChwb3N0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgcmVwbHkgbWFya3VwLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy52aWV3TW9kZWwuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmxlbmd0aCAmJiAhbWVzc2FnZS5lbmRzV2l0aCgnXFxuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsLmZpZWxkcy5tZXNzYWdlICs9ICdcXG4nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsLmZpZWxkcy5tZXNzYWdlICs9IGA+PiR7aWR9XFxuYDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlld01vZGVsLmZpZWxkcy5tZXNzYWdlICs9IGA+ICR7c2VsZWN0aW9ufVxcbmA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRWwgPSB0aGlzLnZpZXdNb2RlbC4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VFbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy52aWV3TW9kZWwucG9zaXRpb24gPSAnaGlkZGVuJztcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b24pIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW92ZVRvUG9zdChwb3N0KSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoZm9ybSkge1xuICAgICAgICAgICAgcG9zdC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShmb3JtLCBwb3N0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdNb2RlbC5wb3NpdGlvbiA9ICdwb3N0JztcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b24pIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy52aWV3TW9kZWwuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbW92ZVRvQm90dG9tKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0nKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXdyYXBwZXInKTtcbiAgICAgICAgaWYgKGZvcm0gJiYgd3JhcHBlcikge1xuICAgICAgICAgICAgd3JhcHBlci5pbnNlcnRCZWZvcmUoZm9ybSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3TW9kZWwucG9zaXRpb24gPSAnYm90dG9tJztcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b24pIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy52aWV3TW9kZWwuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlBvc3RpbmdGb3JtID0gUG9zdGluZ0Zvcm07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGx1eG9uXzEgPSByZXF1aXJlKFwibHV4b25cIik7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBzZXR0aW5nc0Zvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3NldHRpbmdzX2Zvcm0nKTtcbiAgICAgICAgaWYgKCFzZXR0aW5nc0Zvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyB2dWVfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGVsOiAnI3NldHRpbmdzX2Zvcm0nLFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJjb250ZW50X19zZXR0aW5ncy1mb3JtIHNldHRpbmdzLWZvcm1cIiBpZD1cInNldHRpbmdzX2Zvcm1cIj5cbiAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPkZvcm0gc2V0dGluZ3M8L2gzPlxuICA8ZmllbGRzZXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zZWN0aW9uXCI+XG4gICAgPGxlZ2VuZCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb24tdGl0bGVcIj5GaWxlIHByZXZpZXc8L2xlZ2VuZD5cblxuICAgIDxwIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIGlkPVwiZm9ybV9wcmV2aWV3X2FsaWduX3JpZ2h0XCIgbmFtZT1cImZvcm1fcHJldmlld19hbGlnblwiXG4gICAgICAgIHZhbHVlPVwicmlnaHRcIiB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybVByZXZpZXdBbGlnblwiIC8+XG5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xhYmVsXCIgZm9yPVwiZm9ybV9wcmV2aWV3X2FsaWduX3JpZ2h0XCI+T24gdGhlIHJpZ2h0PC9sYWJlbD5cbiAgICA8L3A+XG5cbiAgICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIiB0eXBlPVwicmFkaW9cIiBpZD1cImZvcm1fcHJldmlld19hbGlnbl9sZWZ0XCIgbmFtZT1cImZvcm1fcHJldmlld19hbGlnblwiXG4gICAgICAgIHZhbHVlPVwibGVmdFwiIHYtbW9kZWw9XCJzZXR0aW5ncy5mb3JtUHJldmlld0FsaWduXCIgLz5cblxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIiBmb3I9XCJmb3JtX3ByZXZpZXdfYWxpZ25fbGVmdFwiPk9uIHRoZSBsZWZ0PC9sYWJlbD5cbiAgICA8L3A+XG4gIDwvZmllbGRzZXQ+XG5cbiAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPlRpbWUgc2V0dGluZ3M8L2gzPlxuICA8ZmllbGRzZXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zZWN0aW9uXCI+XG4gICAgPGxlZ2VuZCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb24tdGl0bGVcIj5MYW5ndWFnZTwvbGVnZW5kPlxuXG4gICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aW1lX2xvY2FsZV9kZWZhdWx0XCIgbmFtZT1cInRpbWVfbG9jYWxlXCJcbiAgICAgICAgdmFsdWU9XCJkZWZhdWx0XCIgdi1tb2RlbD1cInNldHRpbmdzLnRpbWVMb2NhbGVcIiAvPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIiBmb3I9XCJ0aW1lX2xvY2FsZV9kZWZhdWx0XCI+QnJvd3NlciBkZWZhdWx0PC9sYWJlbD5cbiAgICA8L3A+XG5cbiAgICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIiB0eXBlPVwicmFkaW9cIiBpZD1cInRpbWVfbG9jYWxlX2N1c3RvbVwiIG5hbWU9XCJ0aW1lX2xvY2FsZVwiXG4gICAgICAgIHZhbHVlPVwiY3VzdG9tXCIgdi1tb2RlbD1cInNldHRpbmdzLnRpbWVMb2NhbGVcIiAvPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIiBmb3I9XCJ0aW1lX2xvY2FsZV9jdXN0b21cIj5DdXN0b208L2xhYmVsPlxuXG4gICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCIgdHlwZT1cInRleHRcIiB2LW9uOmNsaWNrPVwic2V0dGluZ3MudGltZUxvY2FsZSA9ICdjdXN0b20nXCJcbiAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnRpbWVMb2NhbGVDdXN0b21WYWx1ZVwiIHBsYWNlaG9sZGVyPVwiZW5cIiAvPlxuICAgIDwvcD5cbiAgPC9maWVsZHNldD5cblxuICA8ZmllbGRzZXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zZWN0aW9uXCI+XG4gICAgPGxlZ2VuZCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb24tdGl0bGVcIj5Gb3JtYXQ8L2xlZ2VuZD5cblxuICAgIDxwIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIGlkPVwidGltZV9mb3JtYXRfZGVmYXVsdFwiIG5hbWU9XCJ0aW1lX2Zvcm1hdFwiXG4gICAgICAgIHZhbHVlPVwiZGVmYXVsdFwiIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lRm9ybWF0XCIgLz5cblxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIiBmb3I9XCJ0aW1lX2Zvcm1hdF9kZWZhdWx0XCI+QnJvd3NlciBkZWZhdWx0PC9sYWJlbD5cbiAgICA8L3A+XG5cbiAgICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIiB0eXBlPVwicmFkaW9cIiBpZD1cInRpbWVfZm9ybWF0X2N1c3RvbVwiIG5hbWU9XCJ0aW1lX2Zvcm1hdFwiXG4gICAgICAgIHZhbHVlPVwiY3VzdG9tXCIgdi1tb2RlbD1cInNldHRpbmdzLnRpbWVGb3JtYXRcIiAvPlxuXG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiIGZvcj1cInRpbWVfZm9ybWF0X2N1c3RvbVwiPkN1c3RvbTwvbGFiZWw+XG5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIiB0eXBlPVwidGV4dFwiIHYtb246Y2xpY2s9XCJzZXR0aW5ncy50aW1lRm9ybWF0ID0gJ2N1c3RvbSdcIlxuICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZUZvcm1hdEN1c3RvbVZhbHVlXCIgcGxhY2Vob2xkZXI9XCJFRUUsIGRkIE1NTSB5eXl5IEhIOm1tOnNzXCIgLz5cbiAgICA8L3A+XG5cbiAgICA8cD5TZWUgdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L2x1eG9uL2Jsb2IvbWFzdGVyL2RvY3MvZm9ybWF0dGluZy5tZCN0YWJsZS1vZi10b2tlbnNcIj5sdXhvbiBkb2N1bWVudGF0aW9uPC9hPiBmb3IgdGhlIGN1c3RvbSB0b2tlbnMgcmVmZXJlbmNlLjwvcD5cbiAgPC9maWVsZHNldD5cblxuICA8ZmllbGRzZXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zZWN0aW9uXCI+XG4gICAgPGxlZ2VuZCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb24tdGl0bGVcIj5UaW1lIHpvbmU8L2xlZ2VuZD5cblxuICAgIDxwIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIGlkPVwidGltZV96b25lX2RlZmF1bHRcIiBuYW1lPVwidGltZV96b25lXCJcbiAgICAgICAgdmFsdWU9XCJkZWZhdWx0XCIgdi1tb2RlbD1cInNldHRpbmdzLnRpbWVab25lXCIgLz5cblxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIiBmb3I9XCJ0aW1lX3pvbmVfZGVmYXVsdFwiPkJyb3dzZXIgZGVmYXVsdDwvbGFiZWw+XG4gICAgPC9wPlxuXG4gICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aW1lX3pvbmVfZml4ZWRcIiBuYW1lPVwidGltZV96b25lXCJcbiAgICAgICAgdmFsdWU9XCJmaXhlZFwiIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lWm9uZVwiIC8+XG5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xhYmVsXCIgZm9yPVwidGltZV96b25lX2ZpeGVkXCI+Rml4ZWQgVVRDIG9mZnNldDwvbGFiZWw+XG5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIiB0eXBlPVwibnVtYmVyXCIgdi1vbjpjbGljaz1cInNldHRpbmdzLnRpbWVab25lID0gJ2ZpeGVkJ1wiXG4gICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lWm9uZUZpeGVkT2Zmc2V0XCIgbWluPVwiLTk5XCIgbWF4PVwiOTlcIiAvPlxuICAgIDwvcD5cbiAgPC9maWVsZHNldD5cblxuICA8ZmllbGRzZXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zZWN0aW9uXCI+XG4gICAgPGxlZ2VuZCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb24tdGl0bGVcIj5DdXJyZW50IGZvcm1hdDwvbGVnZW5kPlxuXG4gICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj57eyB0aW1lIH19PC9wPlxuICA8L2ZpZWxkc2V0PlxuXG4gIDxwIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc3RhdHVzXCIgaWQ9XCJzdGF0dXNcIj57eyBzdGF0dXMgfX08L3A+XG5cbiAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19idXR0b25zXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBzZXR0aW5ncy1mb3JtX19zYXZlXCIgdHlwZT1cImJ1dHRvblwiXG4gICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJzYXZlU2V0dGluZ3MoKVwiPlNhdmU8L2J1dHRvbj5cbiAgPC9wPlxuPC9kaXY+YCxcbiAgICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1QcmV2aWV3QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lTG9jYWxlOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lTG9jYWxlQ3VzdG9tVmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUZvcm1hdDogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUZvcm1hdEN1c3RvbVZhbHVlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVab25lOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lWm9uZUZpeGVkT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9hZCBzZXR0aW5ncyBmcm9tIGEgY29va2llXG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3NTdHIgPSB1dGlsc18xLkNvb2tpZS5nZXQoJ3NldHRpbmdzJywgJ3t9Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKHNldHRpbmdzU3RyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5ncywgc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZSA9IGx1eG9uXzEuRGF0ZVRpbWUuZnJvbUpTRGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZSA9IHV0aWxzXzEuVGltZS5mb3JtYXQodGltZSwgdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSAnSW52YWxpZCBmb3JtYXQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzYXZlU2V0dGluZ3MoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIE9uZSB5ZWFyLlxuICAgICAgICAgICAgICAgICAgICBleHBpcmUuc2V0VGltZShleHBpcmUuZ2V0VGltZSgpICsgMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzXzEuQ29va2llLnNldCgnc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnNldHRpbmdzKSwgZXhwaXJlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5kaWNhdGUgdGhhdCBzZXR0aW5ncyBhcmUgc2F2ZWQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnU2V0dGluZ3Mgc2F2ZWQuJztcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCAvIDMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlNldHRpbmdzID0gU2V0dGluZ3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBTdHlsZVN3aXRjaCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3R5bGVzID0ge307XG4gICAgICAgIC8vIFBhcnNlIHNlbGVjdGFibGUgc3R5bGVzIGZyb20gPGhlYWQ+XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHV0aWxzXzEuRE9NLnFzYSgnbGlua1t0aXRsZV0nKTtcbiAgICAgICAgc3R5bGVzLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBzdHlsZS50aXRsZTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHN0eWxlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZXNbdGl0bGVdID0gdXJsO1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBHZXQgc2VsZWN0ZWQgc3R5bGVcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRfc3R5bGUgPSB1dGlsc18xLkNvb2tpZS5nZXQoJ3RpbnlpYl9zdHlsZScsICdTeW50aHdhdmUnKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZShzZWxlY3RlZF9zdHlsZSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBzdHlsZV9zd2l0Y2hlciA9IHV0aWxzXzEuRE9NLnFpZCgnc3R5bGUtc3dpdGNoZXInKTtcbiAgICAgICAgaWYgKHN0eWxlX3N3aXRjaGVyKSB7XG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSBzdHlsZSBzd2l0Y2hlciB3aWRnZXRcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBzdHlsZXNbaV07XG4gICAgICAgICAgICAgICAgc3R5bGVfc3dpdGNoZXIuaW5uZXJIVE1MICs9IGA8b3B0aW9uIGNsYXNzPVwic3R5bGUtc3dpdGNoZXJfX29wdGlvblwiIHZhbHVlPVwiJHt0aXRsZX1cIj4ke3RpdGxlfTwvb3B0aW9uPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgc3R5bGUgY2hhbmdlIGNhbGxiYWNrXG4gICAgICAgICAgICBzdHlsZV9zd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdHlsZShzdHlsZV9zd2l0Y2hlci52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3N0eWxlJywgJ1N5bnRod2F2ZScpO1xuICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goeyAndGhlbWUnOiBzZWxlY3RlZF9zdHlsZSB9KTtcbiAgICB9XG4gICAgc2V0U3R5bGUoc3R5bGUpIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHV0aWxzXzEuRE9NLnFzKCdoZWFkJyk7XG4gICAgICAgIC8vIElmIG5vIDxoZWFkPiBlbGVtZW50LCBkbyBub3RoaW5nXG4gICAgICAgIGlmICghaGVhZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX3N0eWxlID0gdXRpbHNfMS5ET00ucXMoJ2xpbmtbZGF0YS1zZWxlY3RlZF0nKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkX3N0eWxlKSB7XG4gICAgICAgICAgICAvLyBJZiBzdHlsZSBhbHJlYWR5IHNlbGVjdGVkLCBkbyBub3RoaW5nXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRfc3R5bGUudGl0bGUgPT09IHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzbHkgc2VsZWN0ZWQgc3R5bGUgZnJvbSA8aGVhZD5cbiAgICAgICAgICAgIHNlbGVjdGVkX3N0eWxlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBjdXJyZW50bHkgc2VsZWN0ZWQgc3R5bGUgdG8gPGhlYWQ+XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuc3R5bGVzW3N0eWxlXTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgbGluay5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgbGluay50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgLy8gU2F2ZSBzZWxlY3RlZCBzdHlsZVxuICAgICAgICBjb25zdCBleHBpcmF0aW9uX2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBleHBpcmF0aW9uX2RhdGUuc2V0VGltZShleHBpcmF0aW9uX2RhdGUuZ2V0VGltZSgpICsgMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHV0aWxzXzEuQ29va2llLnNldCgndGlueWliX3N0eWxlJywgc3R5bGUsIGV4cGlyYXRpb25fZGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHlsZVN3aXRjaCA9IFN0eWxlU3dpdGNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGV2ZW50QnVzID0gbmV3IHZ1ZV8xLmRlZmF1bHQoKTtcbmV4cG9ydHMuZXZlbnRCdXMgPSBldmVudEJ1cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEV2ZW50cztcbihmdW5jdGlvbiAoRXZlbnRzKSB7XG4gICAgRXZlbnRzW1wiUmVhZHlcIl0gPSBcInJlYWR5XCI7XG4gICAgRXZlbnRzW1wiUG9zdHNJbnNlcnRlZFwiXSA9IFwicG9zdHNfaW5zZXJ0ZWRcIjtcbiAgICBFdmVudHNbXCJQb3N0Q3JlYXRlZFwiXSA9IFwicG9zdF9jcmVhdGVkXCI7XG4gICAgRXZlbnRzW1wiSW5zZXJ0TWFya3VwXCJdID0gXCJpbnNlcnRfbWFya3VwXCI7XG59KShFdmVudHMgPSBleHBvcnRzLkV2ZW50cyB8fCAoZXhwb3J0cy5FdmVudHMgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZXZlbnRfYnVzXzEgPSByZXF1aXJlKFwiLi9ldmVudC1idXNcIik7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRfYnVzXzEuZXZlbnRCdXM7XG52YXIgZXZlbnRzXzEgPSByZXF1aXJlKFwiLi9ldmVudHNcIik7XG5leHBvcnRzLkV2ZW50cyA9IGV2ZW50c18xLkV2ZW50cztcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzID0gc2V0dGluZ3NfMS5TZXR0aW5ncztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKGZvcm1QcmV2aWV3QWxpZ24sIHRpbWVMb2NhbGUsIHRpbWVMb2NhbGVDdXN0b21WYWx1ZSwgdGltZVpvbmUsIHRpbWVab25lRml4ZWRPZmZzZXQsIHRpbWVGb3JtYXQsIHRpbWVGb3JtYXRDdXN0b21WYWx1ZSkge1xuICAgICAgICB0aGlzLmZvcm1QcmV2aWV3QWxpZ24gPSBmb3JtUHJldmlld0FsaWduO1xuICAgICAgICB0aGlzLnRpbWVMb2NhbGUgPSB0aW1lTG9jYWxlO1xuICAgICAgICB0aGlzLnRpbWVMb2NhbGVDdXN0b21WYWx1ZSA9IHRpbWVMb2NhbGVDdXN0b21WYWx1ZTtcbiAgICAgICAgdGhpcy50aW1lWm9uZSA9IHRpbWVab25lO1xuICAgICAgICB0aGlzLnRpbWVab25lRml4ZWRPZmZzZXQgPSB0aW1lWm9uZUZpeGVkT2Zmc2V0O1xuICAgICAgICB0aGlzLnRpbWVGb3JtYXQgPSB0aW1lRm9ybWF0O1xuICAgICAgICB0aGlzLnRpbWVGb3JtYXRDdXN0b21WYWx1ZSA9IHRpbWVGb3JtYXRDdXN0b21WYWx1ZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZShzZXR0aW5ncykge1xuICAgICAgICByZXR1cm4gbmV3IFNldHRpbmdzKHNldHRpbmdzLmZvcm1QcmV2aWV3QWxpZ24sIHNldHRpbmdzLnRpbWVMb2NhbGUsIHNldHRpbmdzLnRpbWVMb2NhbGVDdXN0b21WYWx1ZSwgc2V0dGluZ3MudGltZVpvbmUsIHNldHRpbmdzLnRpbWVab25lRml4ZWRPZmZzZXQsIHNldHRpbmdzLnRpbWVGb3JtYXQsIHNldHRpbmdzLnRpbWVGb3JtYXRDdXN0b21WYWx1ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5TZXR0aW5ncyA9IFNldHRpbmdzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBDb29raWUge1xuICAgIHN0YXRpYyBnZXQobmFtZSwgX2RlZmF1bHQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZV9zdHIgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xuICAgICAgICBjb25zdCBjb29raWVfcGFydHMgPSBjb29raWVfc3RyLnNwbGl0KGA7ICR7bmFtZX09YCk7XG4gICAgICAgIGlmIChjb29raWVfcGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZV9lbmMgPSBjb29raWVfcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZV9lbmMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfZGVmYXVsdDtcbiAgICB9XG4gICAgc3RhdGljIHNldChuYW1lLCB2YWx1ZSwgZXhwaXJhdGlvbikge1xuICAgICAgICBjb25zdCB2YWx1ZV9lbmMgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICBjb25zdCBleHBpcmF0aW9uX3N0ciA9IGV4cGlyYXRpb24udG9VVENTdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZV9lbmN9OyBwYXRoPS87IGV4cGlyZXM9JHtleHBpcmF0aW9uX3N0cn1gO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29va2llID0gQ29va2llO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBET00ge1xuICAgIHN0YXRpYyBxaWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB9XG4gICAgc3RhdGljIHFzKHNlbGVjdG9yLCBjb250ZXh0ID0gbnVsbCkge1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG4gICAgc3RhdGljIHFzYShzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudExpc3QgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudExpc3QpO1xuICAgIH1cbn1cbmV4cG9ydHMuRE9NID0gRE9NO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29va2llXzEgPSByZXF1aXJlKFwiLi9jb29raWVcIik7XG5leHBvcnRzLkNvb2tpZSA9IGNvb2tpZV8xLkNvb2tpZTtcbnZhciBkb21fMSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcbmV4cG9ydHMuRE9NID0gZG9tXzEuRE9NO1xudmFyIHRpbWVfMSA9IHJlcXVpcmUoXCIuL3RpbWVcIik7XG5leHBvcnRzLlRpbWUgPSB0aW1lXzEuVGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgVGltZSB7XG4gICAgc3RhdGljIGZvcm1hdCh0aW1lLCBzZXR0aW5ncykge1xuICAgICAgICBjb25zdCBsb2NhbGUgPSBzZXR0aW5ncy50aW1lTG9jYWxlO1xuICAgICAgICBjb25zdCBsb2NhbGVWYWx1ZSA9IHNldHRpbmdzLnRpbWVMb2NhbGVDdXN0b21WYWx1ZTtcbiAgICAgICAgY29uc3Qgem9uZSA9IHNldHRpbmdzLnRpbWVab25lO1xuICAgICAgICBjb25zdCB6b25lRml4ZWRPZmZzZXQgPSBzZXR0aW5ncy50aW1lWm9uZUZpeGVkT2Zmc2V0O1xuICAgICAgICBjb25zdCBmb3JtYXQgPSBzZXR0aW5ncy50aW1lRm9ybWF0O1xuICAgICAgICBjb25zdCBmb3JtYXRWYWx1ZSA9IHNldHRpbmdzLnRpbWVGb3JtYXRDdXN0b21WYWx1ZTtcbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICAgIHRpbWUgPSB0aW1lLnNldExvY2FsZShsb2NhbGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHpvbmUgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFN0ciA9ICdVVEMnICsgKHpvbmVGaXhlZE9mZnNldCA+PSAwID8gJysnIDogJycpICsgem9uZUZpeGVkT2Zmc2V0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5zZXRab25lKG9mZnNldFN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lLnRvRm9ybWF0KGZvcm1hdFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lLnRvRm9ybWF0KCdkLkxMLnl5eXkgSEg6bW06c3MnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGltZSA9IFRpbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGx1eG9uOyIsIm1vZHVsZS5leHBvcnRzID0gVnVlOyJdLCJzb3VyY2VSb290IjoiIn0=