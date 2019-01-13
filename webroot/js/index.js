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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvY2FwdGNoYS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2NvcnJlY3QtdGltZS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2RlbGV0ZS1mb3JtLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9uZXctcG9zdHMtZGV0ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3N0LXJlZmVyZW5jZS1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3N0aW5nLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3N0eWxlLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudC1idXMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXZlbnRzLnRzIiwid2VicGFjazovLy8uL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9kb20udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvdGltZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsdXhvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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bUJBQU8sQ0FBQyxzQ0FBVTtBQUNqQztBQUNBLFlBQVksbUJBQU8sQ0FBQyxnQ0FBTztBQUMzQjtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxrQ0FBUTtBQUM3Qjs7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6QkEsdUI7Ozs7Ozs7Ozs7O0FDQUEscUIiLCJmaWxlIjoiLi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvYXBwLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgY29tcG9uZW50c18xID0gcmVxdWlyZShcIi4vY29tcG9uZW50c1wiKTtcbm5ldyBjb21wb25lbnRzXzEuQ2FwdGNoYSgpO1xubmV3IGNvbXBvbmVudHNfMS5Db3JyZWN0VGltZSgpO1xubmV3IGNvbXBvbmVudHNfMS5EZWxldGVGb3JtKCk7XG5uZXcgY29tcG9uZW50c18xLlBvc3RpbmdGb3JtKCk7XG5uZXcgY29tcG9uZW50c18xLlBvc3RSZWZlcmVuY2VNYXAoKTtcbm5ldyBjb21wb25lbnRzXzEuU2V0dGluZ3MoKTtcbm5ldyBjb21wb25lbnRzXzEuU3R5bGVTd2l0Y2goKTtcbm5ldyBjb21wb25lbnRzXzEuTmV3UG9zdHNEZXRlY3RvcigpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGUgPT4ge1xuICAgIF8xLmV2ZW50QnVzLiRlbWl0KF8xLkV2ZW50cy5SZWFkeSk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIENhcHRjaGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9yaWdpbmFsU3JjID0gJyc7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYWltYWdlJyk7XG4gICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFNyYyA9IGltYWdlLnNyYztcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxvYWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICBjb25zdCBjYXB0Y2hhID0gdXRpbHNfMS5ET00ucWlkKCdjYXB0Y2hhJyk7XG4gICAgICAgIGNhcHRjaGEudmFsdWUgPSAnJztcbiAgICAgICAgY2FwdGNoYS5mb2N1cygpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYWltYWdlJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGAke3RoaXMub3JpZ2luYWxTcmN9IyR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2FwdGNoYSA9IENhcHRjaGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGx1eG9uXzEgPSByZXF1aXJlKFwibHV4b25cIik7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ29ycmVjdFRpbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBMb2FkIHNldHRpbmdzIGZyb20gYSBjb29raWVcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IEpTT04ucGFyc2UodXRpbHNfMS5Db29raWUuZ2V0KCdzZXR0aW5ncycsICd7fScpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHV0aWxzXzEuRE9NLnFzYSgnLnBvc3QtaGVhZGVyX19kYXRldGltZScpO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gdGhpcy5jb3JyZWN0VGltZShlbGVtZW50KSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydChwb3N0KSB7XG4gICAgICAgIGNvbnN0IHRpbWVfZWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX19kYXRldGltZScsIHBvc3QpO1xuICAgICAgICBpZiAoIXRpbWVfZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvcnJlY3RUaW1lKHRpbWVfZWwpO1xuICAgIH1cbiAgICBjb3JyZWN0VGltZShlbCkge1xuICAgICAgICBjb25zdCB0aW1lX3N0ciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0ZXRpbWUnKTtcbiAgICAgICAgaWYgKCF0aW1lX3N0cikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWUgPSBsdXhvbl8xLkRhdGVUaW1lLmZyb21JU08odGltZV9zdHIpO1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHV0aWxzXzEuVGltZS5mb3JtYXQodGltZSwgdGhpcy5zZXR0aW5ncyk7XG4gICAgfVxufVxuZXhwb3J0cy5Db3JyZWN0VGltZSA9IENvcnJlY3RUaW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgRGVsZXRlRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBmb3JtID0gdXRpbHNfMS5ET00ucWlkKCdkZWxmb3JtJyk7XG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlbGV0ZV9wb3N0X3Bhc3N3b3JkID0gdXRpbHNfMS5ET00ucWlkKCdkZWxldGVwb3N0cGFzc3dvcmQnKTtcbiAgICAgICAgaWYgKGRlbGV0ZV9wb3N0X3Bhc3N3b3JkKSB7XG4gICAgICAgICAgICAvLyBMb2FkIGRlbGV0ZSBwb3N0IHBhc3N3b3JkLlxuICAgICAgICAgICAgZGVsZXRlX3Bvc3RfcGFzc3dvcmQudmFsdWUgPSB1dGlsc18xLkNvb2tpZS5nZXQoJ3RpbnlpYl9wYXNzd29yZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5EZWxldGVGb3JtID0gRGVsZXRlRm9ybTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNhcHRjaGFfMSA9IHJlcXVpcmUoXCIuL2NhcHRjaGFcIik7XG5leHBvcnRzLkNhcHRjaGEgPSBjYXB0Y2hhXzEuQ2FwdGNoYTtcbnZhciBjb3JyZWN0X3RpbWVfMSA9IHJlcXVpcmUoXCIuL2NvcnJlY3QtdGltZVwiKTtcbmV4cG9ydHMuQ29ycmVjdFRpbWUgPSBjb3JyZWN0X3RpbWVfMS5Db3JyZWN0VGltZTtcbnZhciBkZWxldGVfZm9ybV8xID0gcmVxdWlyZShcIi4vZGVsZXRlLWZvcm1cIik7XG5leHBvcnRzLkRlbGV0ZUZvcm0gPSBkZWxldGVfZm9ybV8xLkRlbGV0ZUZvcm07XG52YXIgbmV3X3Bvc3RzX2RldGVjdG9yXzEgPSByZXF1aXJlKFwiLi9uZXctcG9zdHMtZGV0ZWN0b3JcIik7XG5leHBvcnRzLk5ld1Bvc3RzRGV0ZWN0b3IgPSBuZXdfcG9zdHNfZGV0ZWN0b3JfMS5OZXdQb3N0c0RldGVjdG9yO1xudmFyIHBvc3RpbmdfZm9ybV8xID0gcmVxdWlyZShcIi4vcG9zdGluZy1mb3JtXCIpO1xuZXhwb3J0cy5Qb3N0aW5nRm9ybSA9IHBvc3RpbmdfZm9ybV8xLlBvc3RpbmdGb3JtO1xudmFyIHBvc3RfcmVmZXJlbmNlX21hcF8xID0gcmVxdWlyZShcIi4vcG9zdC1yZWZlcmVuY2UtbWFwXCIpO1xuZXhwb3J0cy5Qb3N0UmVmZXJlbmNlTWFwID0gcG9zdF9yZWZlcmVuY2VfbWFwXzEuUG9zdFJlZmVyZW5jZU1hcDtcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzID0gc2V0dGluZ3NfMS5TZXR0aW5ncztcbnZhciBzdHlsZV9zd2l0Y2hfMSA9IHJlcXVpcmUoXCIuL3N0eWxlLXN3aXRjaFwiKTtcbmV4cG9ydHMuU3R5bGVTd2l0Y2ggPSBzdHlsZV9zd2l0Y2hfMS5TdHlsZVN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIE5ld1Bvc3RzRGV0ZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKiogQHRvZG86IHJlbW92ZSBNdXRhdGlvbk9ic2VydmVyIEFTQVAsIHdpdGggaW50ZWdyYXRlZCB0aHJlYWQgdXBkYXRpbmcuICovXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gbXV0YXRpb25zXG4gICAgICAgICAgICAgICAgLy8gR2V0IGFkZGVkIHBvc3RzLCBpZiBhbnkuXG4gICAgICAgICAgICAgICAgLm1hcChtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUxpc3QgPSBtdXRhdGlvbi5hZGRlZE5vZGVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50IGlzIHBvc3QgaXRzZWxmLCByZXR1cm4gaXQsXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgcXVlcnkgZm9yIGVsZW1lbnQgY2hpbGRyZW4uXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncG9zdCcpXG4gICAgICAgICAgICAgICAgICAgID8gW2VsZW1lbnRdXG4gICAgICAgICAgICAgICAgICAgIDogdXRpbHNfMS5ET00ucXNhKCcucG9zdCcsIGVsZW1lbnQpKVxuICAgICAgICAgICAgICAgICAgICAvLyBGbGF0dGVuIHBvc3RzIGFycmF5LlxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwuY29uY2F0KGN1cnJlbnQpLCBbXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIEZsYXR0ZW4gcG9zdHMgYXJyYXkuXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsLmNvbmNhdChjdXJyZW50KSwgW10pO1xuICAgICAgICAgICAgaWYgKHBvc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCBwb3N0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNldHVwIE11dGF0aW9uT2JzZXJ2ZXIuXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0Jyk7XG4gICAgICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5OZXdQb3N0c0RldGVjdG9yID0gTmV3UG9zdHNEZXRlY3RvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RSZWZlcmVuY2VNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvc3RzID0ge307XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSArcG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICAvLyBTdG9yZSBwb3N0LlxuICAgICAgICB0aGlzLnBvc3RzW3Bvc3RJZF0gPSBwb3N0O1xuICAgICAgICAvLyBHZXQgcmVmZXJlbmNlcy5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlRWxlbWVudHMgPSB1dGlsc18xLkRPTS5xc2EoJ2FbZGF0YS10YXJnZXQtcG9zdC1pZF0nLCBwb3N0KTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZUVsZW1lbnRzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBpZDogK2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldC1wb3N0LWlkJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBhdXRob3IgbmFtZSBvZiB0aGUgcmVmZXJlbmNlZCBwb3N0IHRvIHRoZSByZWZlcmVuY2UgbGluayB0ZXh0LlxuICAgICAgICByZWZlcmVuY2VzLmZvckVhY2gocmVmZXJlbmNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0aGlzLnBvc3RzW3JlZmVyZW5jZS5pZF07XG4gICAgICAgICAgICBpZiAoIXBvc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuY2xhc3NMaXN0LmFkZCgncG9zdF9fcmVmZXJlbmNlLWxpbmstYXV0aG9yJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuaW5uZXJIVE1MID0gdGhpcy5nZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSByZWZlcmVuY2UuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSByZWZlcmVuY2UuZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocmVmZXJlbmNlQXV0aG9yLCBuZXh0U2libGluZyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCkge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX19uYW1lJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX190cmlwY29kZScsIHBvc3QpO1xuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVsID8gbmFtZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBjb25zdCB0cmlwY29kZSA9IHRyaXBjb2RlRWwgPyB0cmlwY29kZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBpZiAobmFtZS5sZW5ndGggfHwgdHJpcGNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYCg8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLW5hbWVcIj4ke25hbWV9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICArIGA8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLXRyaXBjb2RlXCI+JHt0cmlwY29kZX08L3NwYW4+KWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYGA7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBQb3N0UmVmZXJlbmNlTWFwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RpbmdGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0luVGhyZWFkID0gZmFsc2U7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgdGhpcy5vblBvc3RzSW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKC9cXC9yZXNcXC8oXFxkKykvaSk7XG4gICAgICAgIGNvbnN0IGlzSW5UaHJlYWQgPSAhIW1hdGNoO1xuICAgICAgICBjb25zdCB0aHJlYWRJZCA9IGlzSW5UaHJlYWQgPyArbWF0Y2hbMV0gOiAwO1xuICAgICAgICB0aGlzLmlzSW5UaHJlYWQgPSBpc0luVGhyZWFkO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UodXRpbHNfMS5Db29raWUuZ2V0KCdzZXR0aW5ncycsICd7fScpKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXcgdnVlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBlbDogZm9ybSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgXG48Zm9ybSBjbGFzcz1cImNvbnRlbnRfX3Bvc3RpbmctZm9ybSBwb3N0aW5nLWZvcm1cIiBpZD1cInBvc3RpbmctZm9ybVwiXG4gIHYtYmluZDpjbGFzcz1cInsgJ3Bvc3RpbmctZm9ybS0tZmxvYXRpbmcnOiBwb3NpdGlvbiA9PSAnZmxvYXQnIH1cIlxuICB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXQoKVwiIHYtc2hvdz1cInBvc2l0aW9uICE9PSAnaGlkZGVuJ1wiXG4gIHJlZj1cImZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyXCIgcmVmPVwiaGVhZGVyXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3RpdGxlXCI+e3tcbiAgICAgIHRocmVhZElkID8gJ1JlcGx5IHRvIHRocmVhZCAjJyArIHRocmVhZElkIDogJ0NyZWF0ZSB0aHJlYWQnXG4gICAgfX08L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyLWJ1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fY2xvc2VcIlxuICAgICAgICB2LW9uOmNsaWNrPVwib25DbG9zZUNsaWNrKClcIj7iqK88L2J1dHRvbj5cbiAgICA8L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyLWJ1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fZmxvYXRcIlxuICAgICAgICB2LWlmPVwicG9zaXRpb24gIT09ICdmbG9hdCcgJiYgbW9kZSAhPT0gJ21vYmlsZSdcIlxuICAgICAgICB2LW9uOmNsaWNrPVwicG9zaXRpb24gPSAnZmxvYXQnXCI+4oaRPC9idXR0b24+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcHJldmlld1wiIHYtb246Y2xpY2s9XCJzaG93RmlsZURpYWxvZygpXCJcbiAgICAgIHYtYmluZDpjbGFzcz1cInsgJ3Bvc3RpbmctZm9ybV9fcHJldmlldy0tbW9iaWxlJzogbW9kZSA9PSAnbW9iaWxlJyxcbiAgICAgICAgJ3Bvc3RpbmctZm9ybV9fcHJldmlldy0tcmlnaHQnOiBwcmV2aWV3QWxpZ24gPT0gJ3JpZ2h0JyB9XCJcbiAgICAgIHYtc2hvdz1cIm1vZGUgPT0gJ2RlZmF1bHQnIHx8IGZpbGVcIlxuICAgICAgdi1vbjpkcmFnZW50ZXIuc3RvcC5wcmV2ZW50XG4gICAgICB2LW9uOmRyYWdsZWF2ZS5zdG9wLnByZXZlbnRcbiAgICAgIHYtb246ZHJhZ292ZXIuc3RvcC5wcmV2ZW50XG4gICAgICB2LW9uOmRyb3Auc3RvcC5wcmV2ZW50PVwib25GaWxlRHJvcCgkZXZlbnQpXCI+XG4gICAgICA8aW1nIHYtaWY9XCJwcmV2aWV3VHlwZSA9PSAnaW1hZ2UnXCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXctaW1hZ2VcIlxuICAgICAgICB2LWJpbmQ6c3JjPVwicHJldmlld1NyY1wiIC8+XG4gICAgICA8dmlkZW8gdi1lbHNlLWlmPVwicHJldmlld1R5cGUgPT0gJ3ZpZGVvJ1wiIGNsYXNzPVwicG9zdGluZy1mb3JtX19wcmV2aWV3LWltYWdlXCJcbiAgICAgICAgdi1iaW5kOnNyYz1cInByZXZpZXdTcmNcIiBhdXRvcGxheSBsb29wIG11dGVkPjwvdmlkZW8+XG4gICAgICA8cCB2LWVsc2UtaWY9XCJwcmV2aWV3VHlwZSA9PSAnJ1wiPlVwbG9hZCBmaWxlPC9wPlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX3ByZXZpZXctcmVtb3ZlXCJcbiAgICAgICAgdi1pZj1cImZpbGVcIiB2LW9uOmNsaWNrLnN0b3A9XCJmaWxlID0gbnVsbCwgdXBkYXRlUHJldmlldygpXCI+4qivPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19tYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19yb3dcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBwb3N0aW5nLWZvcm1fX3N1YmplY3RcIlxuICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMuc3ViamVjdFwiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgLz5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fbmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5uYW1lXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIiB2LW9uOmNoYW5nZT1cIm9uTmFtZUNoYW5nZSgpXCIgLz5cblxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2F0dGFjaG1lbnRcIiB2LXNob3c9XCJtb2RlID09ICdtb2JpbGUnXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2F0dGFjaG1lbnQtaW5wdXRcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5maWxlXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgdi1vbjpjaGFuZ2U9XCJvbkZpbGVDaGFuZ2UoJGV2ZW50LnRhcmdldC5maWxlcylcIlxuICAgICAgICAgICAgcmVmPVwiZmlsZVwiIC8+XG5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fYXR0YWNobWVudC1pY29uXCI+PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fc3VibWl0XCJcbiAgICAgICAgICB2LWlmPVwibW9kZSA9PSAnZGVmYXVsdCdcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlJlcGx5PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fbWFya3VwLXJvdyBtYXJrdXBcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2InKVwiPlxuICAgICAgICAgIDxzdHJvbmc+Yjwvc3Ryb25nPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnaScpXCI+XG4gICAgICAgICAgPGVtPmk8L2VtPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgndScpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3VuZGVybGluZVwiPnU8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzJylcIj5cbiAgICAgICAgICA8ZGVsPnM8L2RlbD5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3N1YicpXCI+XG4gICAgICAgICAgPHN1Yj5zPC9zdWI+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzdXAnKVwiPlxuICAgICAgICAgIDxzdXA+czwvc3VwPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnY29kZScpXCI+XG4gICAgICAgICAgPGNvZGU+YzwvY29kZT5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3Nwb2lsZXInKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFya3VwX19zcG9pbGVyIG1hcmt1cF9fc3BvaWxlci0tdmlzaWJsZVwiPnNwPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgncnAnKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFya3VwX19ycCBtYXJrdXBfX3JwLS12aXNpYmxlXCI+cnA8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0UXVvdGUoKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFya3VwX19xdW90ZVwiPiZndDs8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3Jvd1wiPlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJpbnB1dCBwb3N0aW5nLWZvcm1fX21lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxuICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMubWVzc2FnZVwiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICB2LW9uOmtleWRvd249XCJvbk1lc3NhZ2VLZXlEb3duKCRldmVudClcIlxuICAgICAgICAgIHYtb246cGFzdGU9XCJvbk1lc3NhZ2VQYXN0ZSgkZXZlbnQpXCJcbiAgICAgICAgICByZWY9XCJtZXNzYWdlXCI+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHYtaWY9XCJzdGF0dXNcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fc3RhdHVzXCI+e3sgc3RhdHVzIH19PC9kaXY+XG5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwicG9zdGluZy1mb3JtX19zdWJtaXQgIHBvc3RpbmctZm9ybV9fc3VibWl0LS1tb2JpbGVcIlxuICAgICAgICB2LWlmPVwibW9kZSA9PSAnbW9iaWxlJ1wiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCI+UmVwbHk8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Zvcm0+YCxcbiAgICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld1NyYzogJycsXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdUeXBlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICdtb2JpbGUnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgICAgICB0aHJlYWRJZCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocmVhZElkO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJldmlld0FsaWduKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0dGluZ3MuZm9ybVByZXZpZXdBbGlnbjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9hZCBzYXZlZCBuYW1lLlxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsb2NhbFN0b3JhZ2VbJ3Bvc3RpbmctZm9ybS5uYW1lJ107XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZSA9IHRoaXMudXBkYXRlTW9kZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy4kcmVmcy5oZWFkZXI7XG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuX21vdXNlRG93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgcmVzZXRGaWVsZHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLnN1YmplY3QgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5maWxlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJldmlldygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvd0ZpbGVEaWFsb2coKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZS5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVNb2RlKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCA/ICdtb2JpbGUnIDogJ2RlZmF1bHQnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2RlID09ICdtb2JpbGUnICYmIHRoaXMucG9zaXRpb24gPT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVQcmV2aWV3KCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZmlsZS50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZS5zdGFydHNXaXRoKCd2aWRlby8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHlwZSA9ICd2aWRlbyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZS5zdGFydHNXaXRoKCdhdWRpby8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHlwZSA9ICdhdWRpbyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUeXBlID0gJ2ltYWdlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmZpbGUubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5maWxlLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lLmVuZHNXaXRoKCcud2VibScpIHx8IG5hbWUuZW5kc1dpdGgoJy5tcDQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHlwZSA9ICd2aWRlbyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZS5lbmRzV2l0aCgnLm1wMycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUeXBlID0gJ2F1ZGlvJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1R5cGUgPSAnaW1hZ2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUeXBlID0gJ2ltYWdlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3U3JjID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHlwZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3U3JjID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuJHJlZnMuZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3JtIHx8IHRoaXMucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZURvd25Gb3JtTGVmdCA9IGZvcm0ub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91c2VEb3duRm9ybVRvcCA9IGZvcm0ub2Zmc2V0VG9wO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZURvd25Nb3VzZUxlZnQgPSBlLmNsaWVudFg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlRG93bk1vdXNlVG9wID0gZS5jbGllbnRZO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX21vdXNlTW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW91c2VNb3ZlID0gdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5fbW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX21vdXNlVXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlVXAgPSB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuX21vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLl9tb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Nb3VzZU1vdmUoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtID0gdGhpcy4kcmVmcy5mb3JtO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZvcm0gfHwgdGhpcy5wb3NpdGlvbiAhPT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IGUuY2xpZW50WCAtIHRoaXMuX21vdXNlRG93bk1vdXNlTGVmdDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsdGFZID0gZS5jbGllbnRZIC0gdGhpcy5fbW91c2VEb3duTW91c2VUb3A7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLl9tb3VzZURvd25Gb3JtTGVmdCArIGRlbHRhWDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHRoaXMuX21vdXNlRG93bkZvcm1Ub3AgKyBkZWx0YVk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vdXNlTW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5fbW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlTW92ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vdXNlVXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLl9tb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5fbW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZVVwID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25OYW1lQ2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLm5hbWUnXSA9IHRoaXMuZmllbGRzLm5hbWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkZpbGVEcm9wKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQgJiYgdGV4dC5tYXRjaCgvaHR0cHM/OlxcL1xcL1stYS16QS1aMC05QDolLl9cXCt+Iz1dezIsfVxcLlthLXpdezIsfVxcYlstYS16QS1aMC05QDolX1xcKy5+Iz8mXFwvPV0qLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB0ZXh0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcmV2aWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBFcnJvcjogJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRmlsZUNoYW5nZShmaWxlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBmaWxlcy5sZW5ndGggPyBmaWxlc1swXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJldmlldygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlS2V5RG93bihlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Ym1pdCBmb3JtIG9uIEN0cmwrRW50ZXIgaW4gdGhlIG1lc3NhZ2UgZmllbGQuXG4gICAgICAgICAgICAgICAgICAgIGlmICgoZS5rZXlDb2RlID09IDEwIHx8IGUua2V5Q29kZSA9PSAxMykgJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTWVzc2FnZVBhc3RlKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzdGUgZmlsZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGUuY2xpcGJvYXJkRGF0YSB8fCBlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXRhLml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUuc3RhcnRzV2l0aCgnYXVkaW8vJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUuc3RhcnRzV2l0aCgndmlkZW8vJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJldmlldygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRNYXJrdXAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHRoaXMuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5pbmdUYWcgPSBgWyR7dGFnfV1gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zaW5nVGFnID0gYFsvJHt0YWd9XWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0ZXh0IGlzIHNlbGVjdGVkLCB3cmFwIGl0IGluIGEgdGFnIHBhaXIuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uYmVnaW4sIHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5sYXN0SW5kZXhPZihvcGVuaW5nVGFnLCBzZWxlY3Rpb24uYmVnaW4pID4gbWVzc2FnZS5sYXN0SW5kZXhPZihjbG9zaW5nVGFnLCBzZWxlY3Rpb24uYmVnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2luZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHNlbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHNlbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRRdW90ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmxlbmd0aCAmJiAhbWVzc2FnZS5lbmRzV2l0aCgnXFxuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgKz0gJ1xcbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgKz0gYD4gJHtzZWxlY3Rpb259XFxuYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgKz0gJz4gJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Ym1pdCByZXF1ZXN0IHRvIGNyZWF0ZSBwb3N0LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt3aW5kb3cuYmFzZVVybH0vYWpheC9wb3N0L2NyZWF0ZWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3BhcmVudCcsIHRocmVhZElkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnc3ViamVjdCcsIHRoaXMuZmllbGRzLnN1YmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMuZmllbGRzLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbWVzc2FnZScsIHRoaXMuZmllbGRzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIHRoaXMuZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NQZXJjZW50ID0gTWF0aC5jZWlsKGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBVcGxvYWRpbmcuLi4gJHtwcm9ncmVzc1BlcmNlbnR9JWA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGZvcm0uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBmb3JtIHRvIHRoZSBpbml0aWFsIGxvY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0luVGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgREUgdGhyZWFkIHVwZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlciA9IHV0aWxzXzEuRE9NLnFzKCcuZGUtdGhyLXVwZGF0ZXItbGluaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlci5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byB0aHJlYWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEVycm9yOiAke2RhdGEuZXJyb3J9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEVycm9yOiAke3hoci5zdGF0dXN9ICR7eGhyLnN0YXR1c1RleHR9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Qb3N0c0luc2VydGVkKHBvc3RzKSB7XG4gICAgICAgIHBvc3RzLmZvckVhY2gocG9zdCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VMaW5rcyA9IHV0aWxzXzEuRE9NLnFzYSgnYVtkYXRhLXJlZmxpbmtdJywgcG9zdCk7XG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gK2xpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmxpbmsnKTtcbiAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJblRocmVhZCAmJiB0aGlzLnZpZXdNb2RlbC5wb3NpdGlvbiAhPT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBmb3JtIHRvIHRoZSBwb3N0LlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Qb3N0KHBvc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEluc2VydCByZXBseSBtYXJrdXAuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnZpZXdNb2RlbC5maWVsZHMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoICYmICFtZXNzYWdlLmVuZHNXaXRoKCdcXG4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuZmllbGRzLm1lc3NhZ2UgKz0gJ1xcbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuZmllbGRzLm1lc3NhZ2UgKz0gYD4+JHtpZH1cXG5gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuZmllbGRzLm1lc3NhZ2UgKz0gYD4gJHtzZWxlY3Rpb259XFxuYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHRoaXMudmlld01vZGVsLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnZpZXdNb2RlbC5wb3NpdGlvbiA9ICdoaWRkZW4nO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlVG9Qb3N0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtJyk7XG4gICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICBwb3N0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGZvcm0sIHBvc3QubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlld01vZGVsLnBvc2l0aW9uID0gJ3Bvc3QnO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnZpZXdNb2RlbC4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtb3ZlVG9Cb3R0b20oKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0td3JhcHBlcicpO1xuICAgICAgICBpZiAoZm9ybSAmJiB3cmFwcGVyKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmluc2VydEJlZm9yZShmb3JtLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdNb2RlbC5wb3NpdGlvbiA9ICdib3R0b20nO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnZpZXdNb2RlbC4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9zdGluZ0Zvcm0gPSBQb3N0aW5nRm9ybTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbHV4b25fMSA9IHJlcXVpcmUoXCJsdXhvblwiKTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzRm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgnc2V0dGluZ3NfZm9ybScpO1xuICAgICAgICBpZiAoIXNldHRpbmdzRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3IHZ1ZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgZWw6ICcjc2V0dGluZ3NfZm9ybScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImNvbnRlbnRfX3NldHRpbmdzLWZvcm0gc2V0dGluZ3MtZm9ybVwiIGlkPVwic2V0dGluZ3NfZm9ybVwiPlxuICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zZWN0aW9uLXRpdGxlXCI+Rm9ybSBzZXR0aW5nczwvaDM+XG4gIDxmaWVsZHNldCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb25cIj5cbiAgICA8bGVnZW5kIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPkZpbGUgcHJldmlldzwvbGVnZW5kPlxuXG4gICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJmb3JtX3ByZXZpZXdfYWxpZ25fcmlnaHRcIiBuYW1lPVwiZm9ybV9wcmV2aWV3X2FsaWduXCJcbiAgICAgICAgdmFsdWU9XCJyaWdodFwiIHYtbW9kZWw9XCJzZXR0aW5ncy5mb3JtUHJldmlld0FsaWduXCIgLz5cblxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIiBmb3I9XCJmb3JtX3ByZXZpZXdfYWxpZ25fcmlnaHRcIj5PbiB0aGUgcmlnaHQ8L2xhYmVsPlxuICAgIDwvcD5cblxuICAgIDxwIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIGlkPVwiZm9ybV9wcmV2aWV3X2FsaWduX2xlZnRcIiBuYW1lPVwiZm9ybV9wcmV2aWV3X2FsaWduXCJcbiAgICAgICAgdmFsdWU9XCJsZWZ0XCIgdi1tb2RlbD1cInNldHRpbmdzLmZvcm1QcmV2aWV3QWxpZ25cIiAvPlxuXG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiIGZvcj1cImZvcm1fcHJldmlld19hbGlnbl9sZWZ0XCI+T24gdGhlIGxlZnQ8L2xhYmVsPlxuICAgIDwvcD5cbiAgPC9maWVsZHNldD5cblxuICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zZWN0aW9uLXRpdGxlXCI+VGltZSBzZXR0aW5nczwvaDM+XG4gIDxmaWVsZHNldCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb25cIj5cbiAgICA8bGVnZW5kIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPkxhbmd1YWdlPC9sZWdlbmQ+XG5cbiAgICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIiB0eXBlPVwicmFkaW9cIiBpZD1cInRpbWVfbG9jYWxlX2RlZmF1bHRcIiBuYW1lPVwidGltZV9sb2NhbGVcIlxuICAgICAgICB2YWx1ZT1cImRlZmF1bHRcIiB2LW1vZGVsPVwic2V0dGluZ3MudGltZUxvY2FsZVwiIC8+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiIGZvcj1cInRpbWVfbG9jYWxlX2RlZmF1bHRcIj5Ccm93c2VyIGRlZmF1bHQ8L2xhYmVsPlxuICAgIDwvcD5cblxuICAgIDxwIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIGlkPVwidGltZV9sb2NhbGVfY3VzdG9tXCIgbmFtZT1cInRpbWVfbG9jYWxlXCJcbiAgICAgICAgdmFsdWU9XCJjdXN0b21cIiB2LW1vZGVsPVwic2V0dGluZ3MudGltZUxvY2FsZVwiIC8+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiIGZvcj1cInRpbWVfbG9jYWxlX2N1c3RvbVwiPkN1c3RvbTwvbGFiZWw+XG5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIiB0eXBlPVwidGV4dFwiIHYtb246Y2xpY2s9XCJzZXR0aW5ncy50aW1lTG9jYWxlID0gJ2N1c3RvbSdcIlxuICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZUxvY2FsZUN1c3RvbVZhbHVlXCIgcGxhY2Vob2xkZXI9XCJlblwiIC8+XG4gICAgPC9wPlxuICA8L2ZpZWxkc2V0PlxuXG4gIDxmaWVsZHNldCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb25cIj5cbiAgICA8bGVnZW5kIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPkZvcm1hdDwvbGVnZW5kPlxuXG4gICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aW1lX2Zvcm1hdF9kZWZhdWx0XCIgbmFtZT1cInRpbWVfZm9ybWF0XCJcbiAgICAgICAgdmFsdWU9XCJkZWZhdWx0XCIgdi1tb2RlbD1cInNldHRpbmdzLnRpbWVGb3JtYXRcIiAvPlxuXG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiIGZvcj1cInRpbWVfZm9ybWF0X2RlZmF1bHRcIj5Ccm93c2VyIGRlZmF1bHQ8L2xhYmVsPlxuICAgIDwvcD5cblxuICAgIDxwIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIGlkPVwidGltZV9mb3JtYXRfY3VzdG9tXCIgbmFtZT1cInRpbWVfZm9ybWF0XCJcbiAgICAgICAgdmFsdWU9XCJjdXN0b21cIiB2LW1vZGVsPVwic2V0dGluZ3MudGltZUZvcm1hdFwiIC8+XG5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xhYmVsXCIgZm9yPVwidGltZV9mb3JtYXRfY3VzdG9tXCI+Q3VzdG9tPC9sYWJlbD5cblxuICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiIHR5cGU9XCJ0ZXh0XCIgdi1vbjpjbGljaz1cInNldHRpbmdzLnRpbWVGb3JtYXQgPSAnY3VzdG9tJ1wiXG4gICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lRm9ybWF0Q3VzdG9tVmFsdWVcIiBwbGFjZWhvbGRlcj1cIkVFRSwgZGQgTU1NIHl5eXkgSEg6bW06c3NcIiAvPlxuICAgIDwvcD5cblxuICAgIDxwPlNlZSB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbHV4b24vYmxvYi9tYXN0ZXIvZG9jcy9mb3JtYXR0aW5nLm1kI3RhYmxlLW9mLXRva2Vuc1wiPmx1eG9uIGRvY3VtZW50YXRpb248L2E+IGZvciB0aGUgY3VzdG9tIHRva2VucyByZWZlcmVuY2UuPC9wPlxuICA8L2ZpZWxkc2V0PlxuXG4gIDxmaWVsZHNldCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb25cIj5cbiAgICA8bGVnZW5kIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPlRpbWUgem9uZTwvbGVnZW5kPlxuXG4gICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aW1lX3pvbmVfZGVmYXVsdFwiIG5hbWU9XCJ0aW1lX3pvbmVcIlxuICAgICAgICB2YWx1ZT1cImRlZmF1bHRcIiB2LW1vZGVsPVwic2V0dGluZ3MudGltZVpvbmVcIiAvPlxuXG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiIGZvcj1cInRpbWVfem9uZV9kZWZhdWx0XCI+QnJvd3NlciBkZWZhdWx0PC9sYWJlbD5cbiAgICA8L3A+XG5cbiAgICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIiB0eXBlPVwicmFkaW9cIiBpZD1cInRpbWVfem9uZV9maXhlZFwiIG5hbWU9XCJ0aW1lX3pvbmVcIlxuICAgICAgICB2YWx1ZT1cImZpeGVkXCIgdi1tb2RlbD1cInNldHRpbmdzLnRpbWVab25lXCIgLz5cblxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIiBmb3I9XCJ0aW1lX3pvbmVfZml4ZWRcIj5GaXhlZCBVVEMgb2Zmc2V0PC9sYWJlbD5cblxuICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiIHR5cGU9XCJudW1iZXJcIiB2LW9uOmNsaWNrPVwic2V0dGluZ3MudGltZVpvbmUgPSAnZml4ZWQnXCJcbiAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnRpbWVab25lRml4ZWRPZmZzZXRcIiBtaW49XCItOTlcIiBtYXg9XCI5OVwiIC8+XG4gICAgPC9wPlxuICA8L2ZpZWxkc2V0PlxuXG4gIDxmaWVsZHNldCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb25cIj5cbiAgICA8bGVnZW5kIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPkN1cnJlbnQgZm9ybWF0PC9sZWdlbmQ+XG5cbiAgICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPnt7IHRpbWUgfX08L3A+XG4gIDwvZmllbGRzZXQ+XG5cbiAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zdGF0dXNcIiBpZD1cInN0YXR1c1wiPnt7IHN0YXR1cyB9fTwvcD5cblxuICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2J1dHRvbnNcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIHNldHRpbmdzLWZvcm1fX3NhdmVcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIHYtb246Y2xpY2sucHJldmVudD1cInNhdmVTZXR0aW5ncygpXCI+U2F2ZTwvYnV0dG9uPlxuICA8L3A+XG48L2Rpdj5gLFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVByZXZpZXdBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVMb2NhbGU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVMb2NhbGVDdXN0b21WYWx1ZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRm9ybWF0OiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRm9ybWF0Q3VzdG9tVmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVpvbmU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVab25lRml4ZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgICAgICAvLyBMb2FkIHNldHRpbmdzIGZyb20gYSBjb29raWVcbiAgICAgICAgICAgICAgICBjb25zdCBzZXR0aW5nc1N0ciA9IHV0aWxzXzEuQ29va2llLmdldCgnc2V0dGluZ3MnLCAne30nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2Uoc2V0dGluZ3NTdHIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLCBzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveWVkKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gbHV4b25fMS5EYXRlVGltZS5mcm9tSlNEYXRlKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gdXRpbHNfMS5UaW1lLmZvcm1hdCh0aW1lLCB0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZSA9ICdJbnZhbGlkIGZvcm1hdCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25lIHllYXIuXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZS5zZXRUaW1lKGV4cGlyZS5nZXRUaW1lKCkgKyAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHNfMS5Db29raWUuc2V0KCdzZXR0aW5ncycsIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpLCBleHBpcmUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbmRpY2F0ZSB0aGF0IHNldHRpbmdzIGFyZSBzYXZlZC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdTZXR0aW5ncyBzYXZlZC4nO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwIC8gMyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuU2V0dGluZ3MgPSBTZXR0aW5ncztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFN0eWxlU3dpdGNoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSB7fTtcbiAgICAgICAgLy8gUGFyc2Ugc2VsZWN0YWJsZSBzdHlsZXMgZnJvbSA8aGVhZD5cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gdXRpbHNfMS5ET00ucXNhKCdsaW5rW3RpdGxlXScpO1xuICAgICAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHN0eWxlLnRpdGxlO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gc3R5bGUuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlc1t0aXRsZV0gPSB1cmw7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEdldCBzZWxlY3RlZCBzdHlsZVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3N0eWxlJywgJ1N5bnRod2F2ZScpO1xuICAgICAgICB0aGlzLnNldFN0eWxlKHNlbGVjdGVkX3N0eWxlKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlX3N3aXRjaGVyID0gdXRpbHNfMS5ET00ucWlkKCdzdHlsZS1zd2l0Y2hlcicpO1xuICAgICAgICBpZiAoc3R5bGVfc3dpdGNoZXIpIHtcbiAgICAgICAgICAgIC8vIFBvcHVsYXRlIHN0eWxlIHN3aXRjaGVyIHdpZGdldFxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gT2JqZWN0LmtleXModGhpcy5zdHlsZXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHN0eWxlc1tpXTtcbiAgICAgICAgICAgICAgICBzdHlsZV9zd2l0Y2hlci5pbm5lckhUTUwgKz0gYDxvcHRpb24gY2xhc3M9XCJzdHlsZS1zd2l0Y2hlcl9fb3B0aW9uXCIgdmFsdWU9XCIke3RpdGxlfVwiPiR7dGl0bGV9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBzdHlsZSBjaGFuZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgIHN0eWxlX3N3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0eWxlKHN0eWxlX3N3aXRjaGVyLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFN0eWxlKHN0eWxlKSB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSB1dGlsc18xLkRPTS5xcygnaGVhZCcpO1xuICAgICAgICAvLyBJZiBubyA8aGVhZD4gZWxlbWVudCwgZG8gbm90aGluZ1xuICAgICAgICBpZiAoIWhlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuRE9NLnFzKCdsaW5rW2RhdGEtc2VsZWN0ZWRdJyk7XG4gICAgICAgIGlmIChzZWxlY3RlZF9zdHlsZSkge1xuICAgICAgICAgICAgLy8gSWYgc3R5bGUgYWxyZWFkeSBzZWxlY3RlZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkX3N0eWxlLnRpdGxlID09PSBzdHlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmV2aW91c2x5IHNlbGVjdGVkIHN0eWxlIGZyb20gPGhlYWQ+XG4gICAgICAgICAgICBzZWxlY3RlZF9zdHlsZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgY3VycmVudGx5IHNlbGVjdGVkIHN0eWxlIHRvIDxoZWFkPlxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnN0eWxlc1tzdHlsZV07XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgICAgIGxpbmsudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIC8vIFNhdmUgc2VsZWN0ZWQgc3R5bGVcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9kYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZXhwaXJhdGlvbl9kYXRlLnNldFRpbWUoZXhwaXJhdGlvbl9kYXRlLmdldFRpbWUoKSArIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICB1dGlsc18xLkNvb2tpZS5zZXQoJ3RpbnlpYl9zdHlsZScsIHN0eWxlLCBleHBpcmF0aW9uX2RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3R5bGVTd2l0Y2ggPSBTdHlsZVN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBldmVudEJ1cyA9IG5ldyB2dWVfMS5kZWZhdWx0KCk7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRCdXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFdmVudHM7XG4oZnVuY3Rpb24gKEV2ZW50cykge1xuICAgIEV2ZW50c1tcIlJlYWR5XCJdID0gXCJyZWFkeVwiO1xuICAgIEV2ZW50c1tcIlBvc3RzSW5zZXJ0ZWRcIl0gPSBcInBvc3RzX2luc2VydGVkXCI7XG4gICAgRXZlbnRzW1wiUG9zdENyZWF0ZWRcIl0gPSBcInBvc3RfY3JlYXRlZFwiO1xuICAgIEV2ZW50c1tcIkluc2VydE1hcmt1cFwiXSA9IFwiaW5zZXJ0X21hcmt1cFwiO1xufSkoRXZlbnRzID0gZXhwb3J0cy5FdmVudHMgfHwgKGV4cG9ydHMuRXZlbnRzID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV2ZW50X2J1c18xID0gcmVxdWlyZShcIi4vZXZlbnQtYnVzXCIpO1xuZXhwb3J0cy5ldmVudEJ1cyA9IGV2ZW50X2J1c18xLmV2ZW50QnVzO1xudmFyIGV2ZW50c18xID0gcmVxdWlyZShcIi4vZXZlbnRzXCIpO1xuZXhwb3J0cy5FdmVudHMgPSBldmVudHNfMS5FdmVudHM7XG52YXIgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuZXhwb3J0cy5TZXR0aW5ncyA9IHNldHRpbmdzXzEuU2V0dGluZ3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtUHJldmlld0FsaWduLCB0aW1lTG9jYWxlLCB0aW1lTG9jYWxlQ3VzdG9tVmFsdWUsIHRpbWVab25lLCB0aW1lWm9uZUZpeGVkT2Zmc2V0LCB0aW1lRm9ybWF0LCB0aW1lRm9ybWF0Q3VzdG9tVmFsdWUpIHtcbiAgICAgICAgdGhpcy5mb3JtUHJldmlld0FsaWduID0gZm9ybVByZXZpZXdBbGlnbjtcbiAgICAgICAgdGhpcy50aW1lTG9jYWxlID0gdGltZUxvY2FsZTtcbiAgICAgICAgdGhpcy50aW1lTG9jYWxlQ3VzdG9tVmFsdWUgPSB0aW1lTG9jYWxlQ3VzdG9tVmFsdWU7XG4gICAgICAgIHRoaXMudGltZVpvbmUgPSB0aW1lWm9uZTtcbiAgICAgICAgdGhpcy50aW1lWm9uZUZpeGVkT2Zmc2V0ID0gdGltZVpvbmVGaXhlZE9mZnNldDtcbiAgICAgICAgdGhpcy50aW1lRm9ybWF0ID0gdGltZUZvcm1hdDtcbiAgICAgICAgdGhpcy50aW1lRm9ybWF0Q3VzdG9tVmFsdWUgPSB0aW1lRm9ybWF0Q3VzdG9tVmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoc2V0dGluZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXR0aW5ncyhzZXR0aW5ncy5mb3JtUHJldmlld0FsaWduLCBzZXR0aW5ncy50aW1lTG9jYWxlLCBzZXR0aW5ncy50aW1lTG9jYWxlQ3VzdG9tVmFsdWUsIHNldHRpbmdzLnRpbWVab25lLCBzZXR0aW5ncy50aW1lWm9uZUZpeGVkT2Zmc2V0LCBzZXR0aW5ncy50aW1lRm9ybWF0LCBzZXR0aW5ncy50aW1lRm9ybWF0Q3VzdG9tVmFsdWUpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2V0dGluZ3MgPSBTZXR0aW5ncztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29va2llIHtcbiAgICBzdGF0aWMgZ2V0KG5hbWUsIF9kZWZhdWx0ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb29raWVfc3RyID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcbiAgICAgICAgY29uc3QgY29va2llX3BhcnRzID0gY29va2llX3N0ci5zcGxpdChgOyAke25hbWV9PWApO1xuICAgICAgICBpZiAoY29va2llX3BhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gY29va2llX3BhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWVfZW5jKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQobmFtZSwgdmFsdWUsIGV4cGlyYXRpb24pIHtcbiAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9zdHIgPSBleHBpcmF0aW9uLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWVfZW5jfTsgcGF0aD0vOyBleHBpcmVzPSR7ZXhwaXJhdGlvbl9zdHJ9YDtcbiAgICB9XG59XG5leHBvcnRzLkNvb2tpZSA9IENvb2tpZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRE9NIHtcbiAgICBzdGF0aWMgcWlkKGlkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICAgIHN0YXRpYyBxcyhzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuICAgIHN0YXRpYyBxc2Eoc2VsZWN0b3IsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRMaXN0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRMaXN0KTtcbiAgICB9XG59XG5leHBvcnRzLkRPTSA9IERPTTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvb2tpZV8xID0gcmVxdWlyZShcIi4vY29va2llXCIpO1xuZXhwb3J0cy5Db29raWUgPSBjb29raWVfMS5Db29raWU7XG52YXIgZG9tXzEgPSByZXF1aXJlKFwiLi9kb21cIik7XG5leHBvcnRzLkRPTSA9IGRvbV8xLkRPTTtcbnZhciB0aW1lXzEgPSByZXF1aXJlKFwiLi90aW1lXCIpO1xuZXhwb3J0cy5UaW1lID0gdGltZV8xLlRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFRpbWUge1xuICAgIHN0YXRpYyBmb3JtYXQodGltZSwgc2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gc2V0dGluZ3MudGltZUxvY2FsZTtcbiAgICAgICAgY29uc3QgbG9jYWxlVmFsdWUgPSBzZXR0aW5ncy50aW1lTG9jYWxlQ3VzdG9tVmFsdWU7XG4gICAgICAgIGNvbnN0IHpvbmUgPSBzZXR0aW5ncy50aW1lWm9uZTtcbiAgICAgICAgY29uc3Qgem9uZUZpeGVkT2Zmc2V0ID0gc2V0dGluZ3MudGltZVpvbmVGaXhlZE9mZnNldDtcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gc2V0dGluZ3MudGltZUZvcm1hdDtcbiAgICAgICAgY29uc3QgZm9ybWF0VmFsdWUgPSBzZXR0aW5ncy50aW1lRm9ybWF0Q3VzdG9tVmFsdWU7XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5zZXRMb2NhbGUobG9jYWxlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh6b25lID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRTdHIgPSAnVVRDJyArICh6b25lRml4ZWRPZmZzZXQgPj0gMCA/ICcrJyA6ICcnKSArIHpvbmVGaXhlZE9mZnNldC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGltZSA9IHRpbWUuc2V0Wm9uZShvZmZzZXRTdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdChmb3JtYXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdCgnZC5MTC55eXl5IEhIOm1tOnNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRpbWUgPSBUaW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBsdXhvbjsiLCJtb2R1bGUuZXhwb3J0cyA9IFZ1ZTsiXSwic291cmNlUm9vdCI6IiJ9