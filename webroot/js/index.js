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
        this.settings = __1.SettingsManager.load();
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

/***/ "./ts/components/draggable.ts":
/*!************************************!*\
  !*** ./ts/components/draggable.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const pointerEvents = 'PointerEvent' in window;
const touchEvents = 'ontouchstart' in window;
exports.draggable = {
    mounted() {
        if (!this.getDragHandle) {
            return;
        }
        const handle = this.getDragHandle();
        if (!handle) {
            return;
        }
        this._mouseDown = this._onMouseDown.bind(this);
        if (pointerEvents) {
            handle.addEventListener('pointerdown', this._mouseDown);
        }
        else {
            if (touchEvents) {
                handle.addEventListener('touchstart', this._mouseDown);
            }
            handle.addEventListener('mousedown', this._mouseDown);
        }
    },
    methods: {
        _onMouseDown(e) {
            if (!this.getDraggable) {
                return;
            }
            const draggable = this.getDraggable();
            if (!draggable) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            this._draggablePosition = {
                x: draggable.offsetLeft,
                y: draggable.offsetTop,
            };
            if (e instanceof MouseEvent || e instanceof PointerEvent) {
                this._dragStart = {
                    x: e.clientX,
                    y: e.clientY,
                };
            }
            else {
                const touch = e.touches[0];
                this._dragStart = {
                    x: touch.clientX,
                    y: touch.clientY,
                };
            }
            if (!this._mouseMove) {
                this._mouseMove = this._onMouseMove.bind(this);
                if (pointerEvents) {
                    window.addEventListener('pointermove', this._mouseMove);
                }
                else {
                    if (touchEvents) {
                        window.addEventListener('touchmove', this._mouseMove);
                    }
                    window.addEventListener('mousemove', this._mouseMove);
                }
            }
            if (!this._mouseUp) {
                this._mouseUp = this._onMouseUp.bind(this);
                if (pointerEvents) {
                    window.addEventListener('pointerup', this._mouseUp);
                    window.addEventListener('pointercancel', this._mouseUp);
                }
                else {
                    if (touchEvents) {
                        window.addEventListener('touchend', this._mouseUp);
                        window.addEventListener('touchcancel', this._mouseUp);
                    }
                    window.addEventListener('mouseup', this._mouseUp);
                }
            }
        },
        _checkBounds({ x, y }) {
            if (!this.getDraggable) {
                return { x, y };
            }
            const draggable = this.getDraggable();
            if (!draggable) {
                return { x, y };
            }
            const rect = draggable.getBoundingClientRect();
            const minX = 0;
            const minY = 0;
            const maxX = document.body.clientWidth - rect.width;
            const maxY = window.innerHeight - rect.height;
            return {
                x: Math.min(Math.max(minX, x), maxX),
                y: Math.min(Math.max(minY, y), maxY),
            };
        },
        _onMouseMove(e) {
            if (!this.getDraggable) {
                return;
            }
            const draggable = this.getDraggable();
            if (!draggable) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            let deltaX = 0;
            let deltaY = 0;
            if (e instanceof MouseEvent || e instanceof PointerEvent) {
                deltaX = e.clientX - this._dragStart.x;
                deltaY = e.clientY - this._dragStart.y;
            }
            else {
                const touch = e.touches[0];
                deltaX = touch.clientX - this._dragStart.x;
                deltaY = touch.clientY - this._dragStart.y;
            }
            const coords = this._checkBounds({
                x: this._draggablePosition.x + deltaX,
                y: this._draggablePosition.y + deltaY,
            });
            draggable.style.left = `${coords.x}px`;
            draggable.style.top = `${coords.y}px`;
        },
        _onMouseUp(e) {
            if (this._mouseMove) {
                if (pointerEvents) {
                    window.removeEventListener('pointermove', this._mouseMove);
                }
                else {
                    if (touchEvents) {
                        window.removeEventListener('touchmove', this._mouseMove);
                    }
                    window.removeEventListener('mousemove', this._mouseMove);
                }
            }
            if (this._mouseUp) {
                if (pointerEvents) {
                    window.removeEventListener('pointerup', this._mouseUp);
                    window.removeEventListener('pointercancel', this._mouseUp);
                }
                else {
                    if (touchEvents) {
                        window.removeEventListener('touchend', this._mouseUp);
                        window.removeEventListener('touchcancel', this._mouseUp);
                    }
                    window.removeEventListener('mouseup', this._mouseUp);
                }
            }
            this._mouseMove = null;
            this._mouseUp = null;
        },
    },
};


/***/ }),

/***/ "./ts/components/file-preview.ts":
/*!***************************************!*\
  !*** ./ts/components/file-preview.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
exports.FilePreview = vue_1.default.extend({
    template: `
<div class="file-preview"
  v-on:click="onClick($event)"
  v-on:dragenter.stop.prevent
  v-on:dragleave.stop.prevent
  v-on:dragover.stop.prevent
  v-on:drop.stop.prevent="onDrop($event)">
  <img class="file-preview__content"
    v-bind:src="previewSrc"
    v-if="previewType === 'image' && previewSrc" />
  <video class="file-preview__content" autoplay loop muted
    v-bind:src="previewSrc"
    v-else-if="previewType === 'video' && previewSrc"></video>
  <span class="file-preview__label"
    v-else>Upload file</span>

  <slot></slot>
</div>`,
    props: ['file'],
    data() {
        return {
            previewSrc: null,
        };
    },
    computed: {
        previewType() {
            if (!this.file) {
                return null;
            }
            const type = this.file.type;
            if (type) {
                if (type.startsWith('video/')) {
                    return 'video';
                }
                else if (type.startsWith('audio/')) {
                    return 'audio';
                }
                else {
                    return 'image';
                }
            }
            const name = this.file.name;
            if (name) {
                if (name.endsWith('.webm') || name.endsWith('.mp4')) {
                    return 'video';
                }
                else if (name.endsWith('.mp3')) {
                    return 'audio';
                }
                else {
                    return 'image';
                }
            }
            return 'image';
        },
    },
    watch: {
        file(value) {
            if (!value) {
                this.previewSrc = null;
                return;
            }
            const reader = new FileReader();
            reader.addEventListener('load', e => {
                this.previewSrc = e.target.result;
            });
            reader.readAsDataURL(value);
        },
    },
    methods: {
        onClick(e) {
            this.$emit('click', e);
        },
        onDrop(e) {
            this.$emit('drop', e);
        },
    },
});


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
var draggable_1 = __webpack_require__(/*! ./draggable */ "./ts/components/draggable.ts");
exports.draggable = draggable_1.draggable;
var file_preview_1 = __webpack_require__(/*! ./file-preview */ "./ts/components/file-preview.ts");
exports.FilePreview = file_preview_1.FilePreview;
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
const _1 = __webpack_require__(/*! . */ "./ts/components/index.ts");
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class PostingForm {
    constructor() {
        this.isInThread = false;
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
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
        const settings = __1.SettingsManager.load();
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
            data() {
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
                'x-file-preview': _1.FilePreview,
            },
            mixins: [
                _1.draggable,
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
                    const form = this.$refs.form;
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
                onFileDrop(e) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const file = e.dataTransfer.files[0];
                        if (file) {
                            this.file = file;
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
                                    }
                                    else {
                                        this.status = `Error: ${xhr.status} ${xhr.statusText}`;
                                        this.file = null;
                                    }
                                });
                                xhr.send();
                            }
                        }
                    });
                },
                onFileChange(files) {
                    this.file = files.length ? files[0] : null;
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
                        this.$nextTick(() => {
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
                            this.$nextTick(() => {
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
        const content = utils_1.DOM.qs('.layout__content');
        if (content) {
            content.addEventListener('click', e => {
                const target = e.target;
                if (!target.getAttribute('data-reflink')) {
                    return;
                }
                e.preventDefault();
                const vm = this.viewModel;
                if (this.isInThread && vm.position !== 'float') {
                    // Move form to the post.
                    const post = target.closest('.post');
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
                    const messageEl = vm.$refs.message;
                    if (messageEl) {
                        messageEl.focus();
                    }
                });
            });
        }
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
        const vm = this.viewModel;
        vm.position = 'post';
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.classList.remove('hidden');
        }
        vm.$nextTick(() => {
            const message = vm.$refs.message;
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
        const vm = this.viewModel;
        vm.position = 'bottom';
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.classList.add('hidden');
        }
        vm.$nextTick(() => {
            const message = vm.$refs.message;
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
  <ul class="settings-form__tabs">
    <li class="settings-form__tab"
      v-bind:class="{ 'settings-form__tab--active': tab === 'form' }"
      v-on:click="tab = 'form'">Form</li>

    <li class="settings-form__tab"
      v-bind:class="{ 'settings-form__tab--active': tab === 'time' }"
      v-on:click="tab = 'time'">Time</li>
  </ul>

  <div class="settings-form__tab-content"
    v-show="tab === 'form'">
    <h3 class="settings-form__option-title">Preview Alignment</h3>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="radio" class="settings-form__radio"
          name="form_preview_align" value="left"
          v-model="settings.form.previewAlign" />
        On the left
      </label>
    </div>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="radio" class="settings-form__radio"
          name="form_preview_align" value="right"
          v-model="settings.form.previewAlign" />
        On the right
      </label>
    </div>

    <h3 class="settings-form__option-title">Markup buttons</h3>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="checkbox" class="settings-form__checkbox"
          v-model="settings.form.showMarkup" />
        Show markup
      </label>
    </div>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="checkbox" class="settings-form__checkbox"
          v-model="settings.form.showMarkupMobile" />
        Show markup (mobile)
      </label>
    </div>
  </div>

  <div class="settings-form__tab-content"
    v-show="tab === 'time'">
    <h3 class="settings-form__option-title">Language</h3>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="radio" class="settings-form__radio"
          name="time_locale" value="default"
          v-model="settings.time.locale" />
        Browser default
      </label>
    </div>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="radio" class="settings-form__radio"
          name="time_locale" value="custom"
          v-model="settings.time.locale" />
        Custom
      </label>

      <input type="text" class="input settings-form__text" placeholder="en"
        v-on:click="settings.time.locale = 'custom'"
        v-model="settings.time.localeCustom" />
    </div>

    <h3 class="settings-form__option-title">Format</h3>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="radio" class="settings-form__radio"
          name="time_format" value="default"
          v-model="settings.time.format" />
        Browser default
      </label>
    </div>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="radio" class="settings-form__radio"
          name="time_format" value="custom"
          v-model="settings.time.format" />
        Custom
      </label>

      <input type="text" class="input settings-form__text"
        placeholder="EEE, dd MMM yyyy HH:mm:ss"
        v-on:click="settings.time.format = 'custom'"
        v-model="settings.time.formatCustom" />
    </div>

    <p>See the <a href="https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens">luxon documentation</a> for the custom tokens reference.</p>

    <h3 class="settings-form__option-title">Time zone</h3>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="radio" class="settings-form__radio"
          name="time_zone" value="default"
          v-model="settings.time.zone" />
        Browser default
      </label>
    </div>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="radio" class="settings-form__radio"
          name="time_zone" value="fixed"
          v-model="settings.time.zone" />
        Fixed UTC offset
      </label>

      <input type="number" class="input settings-form__text"
        min="-99" max="99"
        v-on:click="settings.time.zone = 'fixed'"
        v-model="settings.time.zoneFixed" />
    </div>

    <h3 class="settings-form__option-title">Current format</h3>

    <p>{{ time }}</p>
  </div>

  <div class="settings-form__footer">
    <div class="settings-form__buttons">
      <p class="settings-form__status" >{{ status }}</p>

      <button type="button" class="button settings-form__save"
        v-on:click.prevent="saveSettings()">Save</button>
    </div>
  </div>
</div>`,
            data() {
                return {
                    settings: null,
                    tab: 'form',
                    time: '',
                    status: '',
                };
            },
            created() {
                // Load settings from a cookie
                this.settings = __1.SettingsManager.load();
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
                    __1.SettingsManager.save(this.settings);
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
exports.SettingsManager = settings_1.SettingsManager;


/***/ }),

/***/ "./ts/settings.ts":
/*!************************!*\
  !*** ./ts/settings.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const settingsKey = 'settings';
const defaultSettings = {
    form: {
        previewAlign: 'left',
        showMarkup: true,
        showMarkupMobile: false,
    },
    time: {
        locale: 'default',
        localeCustom: '',
        zone: 'default',
        zoneFixed: 0,
        format: 'default',
        formatCustom: '',
    },
};
function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}
function merge(target, source) {
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                }
                else {
                    output[key] = merge(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}
class SettingsManager {
    static load() {
        const settings = JSON.parse(localStorage.getItem(settingsKey));
        return merge(defaultSettings, settings);
    }
    static save(settings) {
        const data = JSON.stringify(settings);
        localStorage.setItem(settingsKey, data);
    }
}
exports.SettingsManager = SettingsManager;


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
        if (settings.time.locale === 'custom') {
            time = time.setLocale(settings.time.localeCustom);
        }
        if (settings.time.zone === 'fixed') {
            const offset = settings.time.zoneFixed;
            const offsetStr = 'UTC' + (offset >= 0 ? '+' : '') + offset.toString();
            time = time.setZone(offsetStr);
        }
        if (settings.time.format === 'custom') {
            return time.toFormat(settings.time.formatCustom);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvY2FwdGNoYS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2NvcnJlY3QtdGltZS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2RlbGV0ZS1mb3JtLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvZHJhZ2dhYmxlLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvZmlsZS1wcmV2aWV3LnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9uZXctcG9zdHMtZGV0ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3N0LXJlZmVyZW5jZS1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3N0aW5nLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3N0eWxlLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudC1idXMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXZlbnRzLnRzIiwid2VicGFjazovLy8uL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9kb20udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvdGltZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsdXhvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isc0NBQXNDLFNBQVM7QUFDL0MscUNBQXFDLFNBQVM7QUFDOUMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7QUMxSmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLGdCQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkEsdUI7Ozs7Ozs7Ozs7O0FDQUEscUIiLCJmaWxlIjoiLi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvYXBwLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgY29tcG9uZW50c18xID0gcmVxdWlyZShcIi4vY29tcG9uZW50c1wiKTtcbm5ldyBjb21wb25lbnRzXzEuQ2FwdGNoYSgpO1xubmV3IGNvbXBvbmVudHNfMS5Db3JyZWN0VGltZSgpO1xubmV3IGNvbXBvbmVudHNfMS5EZWxldGVGb3JtKCk7XG5uZXcgY29tcG9uZW50c18xLlBvc3RpbmdGb3JtKCk7XG5uZXcgY29tcG9uZW50c18xLlBvc3RSZWZlcmVuY2VNYXAoKTtcbm5ldyBjb21wb25lbnRzXzEuU2V0dGluZ3MoKTtcbm5ldyBjb21wb25lbnRzXzEuU3R5bGVTd2l0Y2goKTtcbm5ldyBjb21wb25lbnRzXzEuTmV3UG9zdHNEZXRlY3RvcigpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGUgPT4ge1xuICAgIF8xLmV2ZW50QnVzLiRlbWl0KF8xLkV2ZW50cy5SZWFkeSk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIENhcHRjaGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9yaWdpbmFsU3JjID0gJyc7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYWltYWdlJyk7XG4gICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFNyYyA9IGltYWdlLnNyYztcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxvYWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICBjb25zdCBjYXB0Y2hhID0gdXRpbHNfMS5ET00ucWlkKCdjYXB0Y2hhJyk7XG4gICAgICAgIGNhcHRjaGEudmFsdWUgPSAnJztcbiAgICAgICAgY2FwdGNoYS5mb2N1cygpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYWltYWdlJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGAke3RoaXMub3JpZ2luYWxTcmN9IyR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2FwdGNoYSA9IENhcHRjaGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGx1eG9uXzEgPSByZXF1aXJlKFwibHV4b25cIik7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ29ycmVjdFRpbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgKHBvc3RzKSA9PiBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0LmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0LWhlYWRlcl9fZGF0ZXRpbWUnKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHRoaXMuY29ycmVjdFRpbWUoZWxlbWVudCkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCB0aW1lX2VsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0LWhlYWRlcl9fZGF0ZXRpbWUnLCBwb3N0KTtcbiAgICAgICAgaWYgKCF0aW1lX2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3JyZWN0VGltZSh0aW1lX2VsKTtcbiAgICB9XG4gICAgY29ycmVjdFRpbWUoZWwpIHtcbiAgICAgICAgY29uc3QgdGltZV9zdHIgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGV0aW1lJyk7XG4gICAgICAgIGlmICghdGltZV9zdHIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lID0gbHV4b25fMS5EYXRlVGltZS5mcm9tSVNPKHRpbWVfc3RyKTtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB1dGlsc18xLlRpbWUuZm9ybWF0KHRpbWUsIHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29ycmVjdFRpbWUgPSBDb3JyZWN0VGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIERlbGV0ZUZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgnZGVsZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWxldGVfcG9zdF9wYXNzd29yZCA9IHV0aWxzXzEuRE9NLnFpZCgnZGVsZXRlcG9zdHBhc3N3b3JkJyk7XG4gICAgICAgIGlmIChkZWxldGVfcG9zdF9wYXNzd29yZCkge1xuICAgICAgICAgICAgLy8gTG9hZCBkZWxldGUgcG9zdCBwYXNzd29yZC5cbiAgICAgICAgICAgIGRlbGV0ZV9wb3N0X3Bhc3N3b3JkLnZhbHVlID0gdXRpbHNfMS5Db29raWUuZ2V0KCd0aW55aWJfcGFzc3dvcmQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRGVsZXRlRm9ybSA9IERlbGV0ZUZvcm07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBvaW50ZXJFdmVudHMgPSAnUG9pbnRlckV2ZW50JyBpbiB3aW5kb3c7XG5jb25zdCB0b3VjaEV2ZW50cyA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdztcbmV4cG9ydHMuZHJhZ2dhYmxlID0ge1xuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5nZXREcmFnSGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlID0gdGhpcy5nZXREcmFnSGFuZGxlKCk7XG4gICAgICAgIGlmICghaGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW91c2VEb3duID0gdGhpcy5fb25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuX21vdXNlRG93bik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX21vdXNlRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fbW91c2VEb3duKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBfb25Nb3VzZURvd24oZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdldERyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2FibGVQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB4OiBkcmFnZ2FibGUub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgICAgICB5OiBkcmFnZ2FibGUub2Zmc2V0VG9wLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW91c2VFdmVudCB8fCBlIGluc3RhbmNlb2YgUG9pbnRlckV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGUuY2xpZW50WSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiB0b3VjaC5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICB5OiB0b3VjaC5jbGllbnRZLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuX21vdXNlTW92ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlTW92ZSA9IHRoaXMuX29uTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5fbW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX21vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX21vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9tb3VzZVVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2VVcCA9IHRoaXMuX29uTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLl9tb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLl9tb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5fbW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLl9tb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX21vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX2NoZWNrQm91bmRzKHsgeCwgeSB9KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2V0RHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGRyYWdnYWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IG1pblggPSAwO1xuICAgICAgICAgICAgY29uc3QgbWluWSA9IDA7XG4gICAgICAgICAgICBjb25zdCBtYXhYID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIHJlY3Qud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IE1hdGgubWluKE1hdGgubWF4KG1pblgsIHgpLCBtYXhYKSxcbiAgICAgICAgICAgICAgICB5OiBNYXRoLm1pbihNYXRoLm1heChtaW5ZLCB5KSwgbWF4WSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBfb25Nb3VzZU1vdmUoZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmdldERyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgZGVsdGFYID0gMDtcbiAgICAgICAgICAgIGxldCBkZWx0YVkgPSAwO1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8IGUgaW5zdGFuY2VvZiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkZWx0YVggPSBlLmNsaWVudFggLSB0aGlzLl9kcmFnU3RhcnQueDtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBlLmNsaWVudFkgLSB0aGlzLl9kcmFnU3RhcnQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IHRvdWNoLmNsaWVudFggLSB0aGlzLl9kcmFnU3RhcnQueDtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSB0b3VjaC5jbGllbnRZIC0gdGhpcy5fZHJhZ1N0YXJ0Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSB0aGlzLl9jaGVja0JvdW5kcyh7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5fZHJhZ2dhYmxlUG9zaXRpb24ueCArIGRlbHRhWCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9kcmFnZ2FibGVQb3NpdGlvbi55ICsgZGVsdGFZLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUubGVmdCA9IGAke2Nvb3Jkcy54fXB4YDtcbiAgICAgICAgICAgIGRyYWdnYWJsZS5zdHlsZS50b3AgPSBgJHtjb29yZHMueX1weGA7XG4gICAgICAgIH0sXG4gICAgICAgIF9vbk1vdXNlVXAoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21vdXNlTW92ZSkge1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuX21vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9tb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9tb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9tb3VzZVVwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuX21vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHRoaXMuX21vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9tb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuX21vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fbW91c2VVcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbW91c2VNb3ZlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX21vdXNlVXAgPSBudWxsO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmV4cG9ydHMuRmlsZVByZXZpZXcgPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJmaWxlLXByZXZpZXdcIlxuICB2LW9uOmNsaWNrPVwib25DbGljaygkZXZlbnQpXCJcbiAgdi1vbjpkcmFnZW50ZXIuc3RvcC5wcmV2ZW50XG4gIHYtb246ZHJhZ2xlYXZlLnN0b3AucHJldmVudFxuICB2LW9uOmRyYWdvdmVyLnN0b3AucHJldmVudFxuICB2LW9uOmRyb3Auc3RvcC5wcmV2ZW50PVwib25Ecm9wKCRldmVudClcIj5cbiAgPGltZyBjbGFzcz1cImZpbGUtcHJldmlld19fY29udGVudFwiXG4gICAgdi1iaW5kOnNyYz1cInByZXZpZXdTcmNcIlxuICAgIHYtaWY9XCJwcmV2aWV3VHlwZSA9PT0gJ2ltYWdlJyAmJiBwcmV2aWV3U3JjXCIgLz5cbiAgPHZpZGVvIGNsYXNzPVwiZmlsZS1wcmV2aWV3X19jb250ZW50XCIgYXV0b3BsYXkgbG9vcCBtdXRlZFxuICAgIHYtYmluZDpzcmM9XCJwcmV2aWV3U3JjXCJcbiAgICB2LWVsc2UtaWY9XCJwcmV2aWV3VHlwZSA9PT0gJ3ZpZGVvJyAmJiBwcmV2aWV3U3JjXCI+PC92aWRlbz5cbiAgPHNwYW4gY2xhc3M9XCJmaWxlLXByZXZpZXdfX2xhYmVsXCJcbiAgICB2LWVsc2U+VXBsb2FkIGZpbGU8L3NwYW4+XG5cbiAgPHNsb3Q+PC9zbG90PlxuPC9kaXY+YCxcbiAgICBwcm9wczogWydmaWxlJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZXZpZXdTcmM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBwcmV2aWV3VHlwZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5maWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5maWxlLnR5cGU7XG4gICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ3ZpZGVvLycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAndmlkZW8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ2F1ZGlvLycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYXVkaW8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdpbWFnZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZmlsZS5uYW1lO1xuICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aCgnLndlYm0nKSB8fCBuYW1lLmVuZHNXaXRoKCcubXA0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd2aWRlbyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy5tcDMnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1ZGlvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaW1hZ2UnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnaW1hZ2UnO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgZmlsZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1NyYyA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3U3JjID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ecm9wKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Ryb3AnLCBlKTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjYXB0Y2hhXzEgPSByZXF1aXJlKFwiLi9jYXB0Y2hhXCIpO1xuZXhwb3J0cy5DYXB0Y2hhID0gY2FwdGNoYV8xLkNhcHRjaGE7XG52YXIgY29ycmVjdF90aW1lXzEgPSByZXF1aXJlKFwiLi9jb3JyZWN0LXRpbWVcIik7XG5leHBvcnRzLkNvcnJlY3RUaW1lID0gY29ycmVjdF90aW1lXzEuQ29ycmVjdFRpbWU7XG52YXIgZGVsZXRlX2Zvcm1fMSA9IHJlcXVpcmUoXCIuL2RlbGV0ZS1mb3JtXCIpO1xuZXhwb3J0cy5EZWxldGVGb3JtID0gZGVsZXRlX2Zvcm1fMS5EZWxldGVGb3JtO1xudmFyIGRyYWdnYWJsZV8xID0gcmVxdWlyZShcIi4vZHJhZ2dhYmxlXCIpO1xuZXhwb3J0cy5kcmFnZ2FibGUgPSBkcmFnZ2FibGVfMS5kcmFnZ2FibGU7XG52YXIgZmlsZV9wcmV2aWV3XzEgPSByZXF1aXJlKFwiLi9maWxlLXByZXZpZXdcIik7XG5leHBvcnRzLkZpbGVQcmV2aWV3ID0gZmlsZV9wcmV2aWV3XzEuRmlsZVByZXZpZXc7XG52YXIgbmV3X3Bvc3RzX2RldGVjdG9yXzEgPSByZXF1aXJlKFwiLi9uZXctcG9zdHMtZGV0ZWN0b3JcIik7XG5leHBvcnRzLk5ld1Bvc3RzRGV0ZWN0b3IgPSBuZXdfcG9zdHNfZGV0ZWN0b3JfMS5OZXdQb3N0c0RldGVjdG9yO1xudmFyIHBvc3RpbmdfZm9ybV8xID0gcmVxdWlyZShcIi4vcG9zdGluZy1mb3JtXCIpO1xuZXhwb3J0cy5Qb3N0aW5nRm9ybSA9IHBvc3RpbmdfZm9ybV8xLlBvc3RpbmdGb3JtO1xudmFyIHBvc3RfcmVmZXJlbmNlX21hcF8xID0gcmVxdWlyZShcIi4vcG9zdC1yZWZlcmVuY2UtbWFwXCIpO1xuZXhwb3J0cy5Qb3N0UmVmZXJlbmNlTWFwID0gcG9zdF9yZWZlcmVuY2VfbWFwXzEuUG9zdFJlZmVyZW5jZU1hcDtcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzID0gc2V0dGluZ3NfMS5TZXR0aW5ncztcbnZhciBzdHlsZV9zd2l0Y2hfMSA9IHJlcXVpcmUoXCIuL3N0eWxlLXN3aXRjaFwiKTtcbmV4cG9ydHMuU3R5bGVTd2l0Y2ggPSBzdHlsZV9zd2l0Y2hfMS5TdHlsZVN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIE5ld1Bvc3RzRGV0ZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKiogQHRvZG86IHJlbW92ZSBNdXRhdGlvbk9ic2VydmVyIEFTQVAsIHdpdGggaW50ZWdyYXRlZCB0aHJlYWQgdXBkYXRpbmcuICovXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gbXV0YXRpb25zXG4gICAgICAgICAgICAgICAgLy8gR2V0IGFkZGVkIHBvc3RzLCBpZiBhbnkuXG4gICAgICAgICAgICAgICAgLm1hcChtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUxpc3QgPSBtdXRhdGlvbi5hZGRlZE5vZGVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50IGlzIHBvc3QgaXRzZWxmLCByZXR1cm4gaXQsXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgcXVlcnkgZm9yIGVsZW1lbnQgY2hpbGRyZW4uXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncG9zdCcpXG4gICAgICAgICAgICAgICAgICAgID8gW2VsZW1lbnRdXG4gICAgICAgICAgICAgICAgICAgIDogdXRpbHNfMS5ET00ucXNhKCcucG9zdCcsIGVsZW1lbnQpKVxuICAgICAgICAgICAgICAgICAgICAvLyBGbGF0dGVuIHBvc3RzIGFycmF5LlxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwuY29uY2F0KGN1cnJlbnQpLCBbXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIEZsYXR0ZW4gcG9zdHMgYXJyYXkuXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsLmNvbmNhdChjdXJyZW50KSwgW10pO1xuICAgICAgICAgICAgaWYgKHBvc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCBwb3N0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNldHVwIE11dGF0aW9uT2JzZXJ2ZXIuXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0Jyk7XG4gICAgICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5OZXdQb3N0c0RldGVjdG9yID0gTmV3UG9zdHNEZXRlY3RvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RSZWZlcmVuY2VNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvc3RzID0ge307XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSArcG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICAvLyBTdG9yZSBwb3N0LlxuICAgICAgICB0aGlzLnBvc3RzW3Bvc3RJZF0gPSBwb3N0O1xuICAgICAgICAvLyBHZXQgcmVmZXJlbmNlcy5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlRWxlbWVudHMgPSB1dGlsc18xLkRPTS5xc2EoJ2FbZGF0YS10YXJnZXQtcG9zdC1pZF0nLCBwb3N0KTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZUVsZW1lbnRzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBpZDogK2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldC1wb3N0LWlkJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBhdXRob3IgbmFtZSBvZiB0aGUgcmVmZXJlbmNlZCBwb3N0IHRvIHRoZSByZWZlcmVuY2UgbGluayB0ZXh0LlxuICAgICAgICByZWZlcmVuY2VzLmZvckVhY2gocmVmZXJlbmNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0aGlzLnBvc3RzW3JlZmVyZW5jZS5pZF07XG4gICAgICAgICAgICBpZiAoIXBvc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuY2xhc3NMaXN0LmFkZCgncG9zdF9fcmVmZXJlbmNlLWxpbmstYXV0aG9yJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuaW5uZXJIVE1MID0gdGhpcy5nZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSByZWZlcmVuY2UuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSByZWZlcmVuY2UuZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocmVmZXJlbmNlQXV0aG9yLCBuZXh0U2libGluZyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCkge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX19uYW1lJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX190cmlwY29kZScsIHBvc3QpO1xuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVsID8gbmFtZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBjb25zdCB0cmlwY29kZSA9IHRyaXBjb2RlRWwgPyB0cmlwY29kZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBpZiAobmFtZS5sZW5ndGggfHwgdHJpcGNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYCg8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLW5hbWVcIj4ke25hbWV9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICArIGA8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLXRyaXBjb2RlXCI+JHt0cmlwY29kZX08L3NwYW4+KWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYGA7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBQb3N0UmVmZXJlbmNlTWFwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0aW5nRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNJblRocmVhZCA9IGZhbHNlO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtJyk7XG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoID0gd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goL1xcL3Jlc1xcLyhcXGQrKS9pKTtcbiAgICAgICAgY29uc3QgaXNJblRocmVhZCA9ICEhbWF0Y2g7XG4gICAgICAgIGNvbnN0IHRocmVhZElkID0gaXNJblRocmVhZCA/ICttYXRjaFsxXSA6IDA7XG4gICAgICAgIHRoaXMuaXNJblRocmVhZCA9IGlzSW5UaHJlYWQ7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3IHZ1ZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgZWw6IGZvcm0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGZvcm0gY2xhc3M9XCJjb250ZW50X19wb3N0aW5nLWZvcm0gcG9zdGluZy1mb3JtXCIgaWQ9XCJwb3N0aW5nLWZvcm1cIlxuICB2LWJpbmQ6Y2xhc3M9XCJ7ICdwb3N0aW5nLWZvcm0tLWZsb2F0aW5nJzogcG9zaXRpb24gPT0gJ2Zsb2F0JyB9XCJcbiAgdi1vbjpzdWJtaXQucHJldmVudD1cIm9uU3VibWl0KClcIiB2LXNob3c9XCJwb3NpdGlvbiAhPT0gJ2hpZGRlbidcIlxuICByZWY9XCJmb3JtXCI+XG4gIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2hlYWRlclwiIHJlZj1cImhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX190aXRsZVwiPnt7XG4gICAgICB0aHJlYWRJZCA/ICdSZXBseSB0byB0aHJlYWQgIycgKyB0aHJlYWRJZCA6ICdDcmVhdGUgdGhyZWFkJ1xuICAgIH19PC9zcGFuPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2hlYWRlci1idXR0b25zXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcmVzZXRcIlxuICAgICAgICB2LW9uOmNsaWNrPVwicmVzZXRGaWVsZHMoKVwiIHRpdGxlPVwiQ2xlYXIgZm9ybVwiPjwvc3Bhbj5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2Zsb2F0XCJcbiAgICAgICAgdi1pZj1cInBvc2l0aW9uICE9PSAnZmxvYXQnICYmIG1vZGUgIT09ICdtb2JpbGUnXCJcbiAgICAgICAgdi1vbjpjbGljaz1cIm1ha2VGbG9hdGluZygpXCIgdGl0bGU9XCJGbG9hdGluZyBmb3JtXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fY2xvc2VcIlxuICAgICAgICB2LW9uOmNsaWNrPVwib25DbG9zZUNsaWNrKClcIiB0aXRsZT1cIkNsb3NlIGZvcm1cIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19jb250ZW50XCI+XG4gICAgPHgtZmlsZS1wcmV2aWV3IGNsYXNzPVwicG9zdGluZy1mb3JtX19wcmV2aWV3XCJcbiAgICAgIHYtYmluZDpjbGFzcz1cIntcbiAgICAgICAgJ3Bvc3RpbmctZm9ybV9fcHJldmlldy0tbW9iaWxlJzogbW9kZSA9PSAnbW9iaWxlJyxcbiAgICAgICAgJ3Bvc3RpbmctZm9ybV9fcHJldmlldy0tcmlnaHQnOiBzZXR0aW5ncy5wcmV2aWV3QWxpZ24gPT0gJ3JpZ2h0JyxcbiAgICAgIH1cIlxuICAgICAgdi1iaW5kOmZpbGU9XCJmaWxlXCJcbiAgICAgIHYtb246Y2xpY2s9XCJzaG93RmlsZURpYWxvZygpXCJcbiAgICAgIHYtb246ZHJvcD1cIm9uRmlsZURyb3AoJGV2ZW50KVwiXG4gICAgICB2LXNob3c9XCJtb2RlID09ICdkZWZhdWx0JyB8fCBmaWxlXCI+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX3ByZXZpZXctcmVtb3ZlXCJcbiAgICAgICAgdi1pZj1cImZpbGVcIiB2LW9uOmNsaWNrLnN0b3A9XCJmaWxlID0gbnVsbFwiPuKorzwvYnV0dG9uPlxuICAgIDwveC1maWxlLXByZXZpZXc+XG5cbiAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19tYWluXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19yb3dcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBwb3N0aW5nLWZvcm1fX3N1YmplY3RcIlxuICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMuc3ViamVjdFwiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgLz5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fbmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5uYW1lXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIiB2LW9uOmNoYW5nZT1cIm9uTmFtZUNoYW5nZSgpXCIgLz5cblxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2F0dGFjaG1lbnRcIiB2LXNob3c9XCJtb2RlID09ICdtb2JpbGUnXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2F0dGFjaG1lbnQtaW5wdXRcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5maWxlXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgdi1vbjpjaGFuZ2U9XCJvbkZpbGVDaGFuZ2UoJGV2ZW50LnRhcmdldC5maWxlcylcIlxuICAgICAgICAgICAgcmVmPVwiZmlsZVwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19zdWJtaXRcIlxuICAgICAgICAgIHYtaWY9XCJtb2RlID09ICdkZWZhdWx0J1wiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCI+UmVwbHk8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19tYXJrdXAtcm93IG1hcmt1cFwiXG4gICAgICAgIHYtc2hvdz1cIihtb2RlID09PSAnbW9iaWxlJykgJiYgc2V0dGluZ3Muc2hvd01hcmt1cE1vYmlsZVxuICAgICAgICAgIHx8IChtb2RlICE9PSAnbW9iaWxlJykgJiYgc2V0dGluZ3Muc2hvd01hcmt1cFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnYicpXCI+XG4gICAgICAgICAgPHN0cm9uZz5iPC9zdHJvbmc+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdpJylcIj5cbiAgICAgICAgICA8ZW0+aTwvZW0+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCd1JylcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fdW5kZXJsaW5lXCI+dTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3MnKVwiPlxuICAgICAgICAgIDxkZWw+czwvZGVsPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnc3ViJylcIj5cbiAgICAgICAgICA8c3ViPnM8L3N1Yj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3N1cCcpXCI+XG4gICAgICAgICAgPHN1cD5zPC9zdXA+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdjb2RlJylcIj5cbiAgICAgICAgICA8Y29kZT5jPC9jb2RlPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnc3BvaWxlcicpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3Nwb2lsZXIgbWFya3VwX19zcG9pbGVyLS12aXNpYmxlXCI+c3A8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdycCcpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3JwIG1hcmt1cF9fcnAtLXZpc2libGVcIj5ycDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRRdW90ZSgpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3F1b3RlXCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcm93XCI+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fbWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5tZXNzYWdlXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIHYtb246a2V5ZG93bj1cIm9uTWVzc2FnZUtleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgdi1vbjpwYXN0ZT1cIm9uTWVzc2FnZVBhc3RlKCRldmVudClcIlxuICAgICAgICAgIHJlZj1cIm1lc3NhZ2VcIj48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgdi1pZj1cInN0YXR1c1wiIGNsYXNzPVwicG9zdGluZy1mb3JtX19zdGF0dXNcIj57eyBzdGF0dXMgfX08L2Rpdj5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3N1Ym1pdCAgcG9zdGluZy1mb3JtX19zdWJtaXQtLW1vYmlsZVwiXG4gICAgICAgIHYtaWY9XCJtb2RlID09ICdtb2JpbGUnXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIj5SZXBseTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZm9ybT5gLFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJycsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ21vYmlsZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgICAgIHRocmVhZElkKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyZWFkSWQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXR0aW5ncygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzLmZvcm07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgICAgIC8vIExvYWQgc2F2ZWQgbmFtZS5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbG9jYWxTdG9yYWdlWydwb3N0aW5nLWZvcm0ubmFtZSddO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemUgPSB0aGlzLnVwZGF0ZU1vZGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICd4LWZpbGUtcHJldmlldyc6IF8xLkZpbGVQcmV2aWV3LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1peGluczogW1xuICAgICAgICAgICAgICAgIF8xLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgZ2V0RHJhZ0hhbmRsZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuaGVhZGVyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0RHJhZ2dhYmxlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiAhPT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZm9ybTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc2V0RmllbGRzKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5zdWJqZWN0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZmlsZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFrZUZsb2F0aW5nKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ2Zsb2F0JztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuJHJlZnMuZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3JtLnN0eWxlLnRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjdCA9IGZvcm0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4ID0gd2luZG93LmlubmVyV2lkdGggLSByZWN0LndpZHRoIC0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHJlY3QuaGVpZ2h0IC0gMTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG93RmlsZURpYWxvZygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMuZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZU1vZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwID8gJ21vYmlsZScgOiAnZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdtb2JpbGUnICYmIHRoaXMucG9zaXRpb24gPT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25OYW1lQ2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLm5hbWUnXSA9IHRoaXMuZmllbGRzLm5hbWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkZpbGVEcm9wKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQgJiYgdGV4dC5tYXRjaCgvaHR0cHM/OlxcL1xcL1stYS16QS1aMC05QDolLl9cXCt+Iz1dezIsfVxcLlthLXpdezIsfVxcYlstYS16QS1aMC05QDolX1xcKy5+Iz8mXFwvPV0qLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB0ZXh0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBFcnJvcjogJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRmlsZUNoYW5nZShmaWxlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBmaWxlcy5sZW5ndGggPyBmaWxlc1swXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbk1lc3NhZ2VLZXlEb3duKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VibWl0IGZvcm0gb24gQ3RybCtFbnRlciBpbiB0aGUgbWVzc2FnZSBmaWVsZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChlLmtleUNvZGUgPT0gMTAgfHwgZS5rZXlDb2RlID09IDEzKSAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlUGFzdGUoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXN0ZSBmaWxlLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZS5jbGlwYm9hcmREYXRhIHx8IGUub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRhdGEuaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGl0ZW0udHlwZS5zdGFydHNXaXRoKCdhdWRpby8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGl0ZW0udHlwZS5zdGFydHNXaXRoKCd2aWRlby8nKTtcbiAgICAgICAgICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRNYXJrdXAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHRoaXMuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5pbmdUYWcgPSBgWyR7dGFnfV1gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zaW5nVGFnID0gYFsvJHt0YWd9XWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0ZXh0IGlzIHNlbGVjdGVkLCB3cmFwIGl0IGluIGEgdGFnIHBhaXIuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uYmVnaW4sIHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgb3BlbmluZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5lbmQgKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubGFzdEluZGV4T2Yob3BlbmluZ1RhZywgc2VsZWN0aW9uLmJlZ2luKSA+IG1lc3NhZ2UubGFzdEluZGV4T2YoY2xvc2luZ1RhZywgc2VsZWN0aW9uLmJlZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgY2xvc2luZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb24uZW5kICsgY2xvc2luZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRRdW90ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmxlbmd0aCAmJiAhbWVzc2FnZS5lbmRzV2l0aCgnXFxuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgKz0gJ1xcbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgKz0gYD4gJHtzZWxlY3Rpb259XFxuYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgKz0gJz4gJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Ym1pdCByZXF1ZXN0IHRvIGNyZWF0ZSBwb3N0LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt3aW5kb3cuYmFzZVVybH0vYWpheC9wb3N0L2NyZWF0ZWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3BhcmVudCcsIHRocmVhZElkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnc3ViamVjdCcsIHRoaXMuZmllbGRzLnN1YmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMuZmllbGRzLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbWVzc2FnZScsIHRoaXMuZmllbGRzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIHRoaXMuZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NQZXJjZW50ID0gTWF0aC5jZWlsKGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBVcGxvYWRpbmcuLi4gJHtwcm9ncmVzc1BlcmNlbnR9JWA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGZvcm0uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBmb3JtIHRvIHRoZSBpbml0aWFsIGxvY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0luVGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgREUgdGhyZWFkIHVwZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlciA9IHV0aWxzXzEuRE9NLnFzKCcuZGUtdGhyLXVwZGF0ZXItbGluaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlci5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byB0aHJlYWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEVycm9yOiAke2RhdGEuZXJyb3J9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEVycm9yOiAke3hoci5zdGF0dXN9ICR7eGhyLnN0YXR1c1RleHR9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHV0aWxzXzEuRE9NLnFzKCcubGF5b3V0X19jb250ZW50Jyk7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmxpbmsnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSW5UaHJlYWQgJiYgdm0ucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBmb3JtIHRvIHRoZSBwb3N0LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5wb3N0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvUG9zdChwb3N0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHJlcGx5IG1hcmt1cC5cbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdm0uZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoICYmICFtZXNzYWdlLmVuZHNXaXRoKCdcXG4nKSkge1xuICAgICAgICAgICAgICAgICAgICB2bS5maWVsZHMubWVzc2FnZSArPSAnXFxuJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmxpbmsnKTtcbiAgICAgICAgICAgICAgICB2bS5maWVsZHMubWVzc2FnZSArPSBgPj4ke2lkfVxcbmA7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB2bS5maWVsZHMubWVzc2FnZSArPSBgPiAke3NlbGVjdGlvbn1cXG5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRWwgPSB2bS4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy52aWV3TW9kZWwucG9zaXRpb24gPSAnaGlkZGVuJztcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b24pIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW92ZVRvUG9zdChwb3N0KSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoZm9ybSkge1xuICAgICAgICAgICAgcG9zdC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShmb3JtLCBwb3N0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICB2bS5wb3NpdGlvbiA9ICdwb3N0JztcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b24pIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdm0uJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtb3ZlVG9Cb3R0b20oKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0td3JhcHBlcicpO1xuICAgICAgICBpZiAoZm9ybSAmJiB3cmFwcGVyKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmluc2VydEJlZm9yZShmb3JtLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICB2bS5wb3NpdGlvbiA9ICdib3R0b20nO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0aW5nRm9ybSA9IFBvc3RpbmdGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsdXhvbl8xID0gcmVxdWlyZShcImx1eG9uXCIpO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NGb3JtID0gdXRpbHNfMS5ET00ucWlkKCdzZXR0aW5nc19mb3JtJyk7XG4gICAgICAgIGlmICghc2V0dGluZ3NGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXcgdnVlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBlbDogJyNzZXR0aW5nc19mb3JtJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiY29udGVudF9fc2V0dGluZ3MtZm9ybSBzZXR0aW5ncy1mb3JtXCIgaWQ9XCJzZXR0aW5nc19mb3JtXCI+XG4gIDx1bCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYnNcIj5cbiAgICA8bGkgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX190YWJcIlxuICAgICAgdi1iaW5kOmNsYXNzPVwieyAnc2V0dGluZ3MtZm9ybV9fdGFiLS1hY3RpdmUnOiB0YWIgPT09ICdmb3JtJyB9XCJcbiAgICAgIHYtb246Y2xpY2s9XCJ0YWIgPSAnZm9ybSdcIj5Gb3JtPC9saT5cblxuICAgIDxsaSBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYlwiXG4gICAgICB2LWJpbmQ6Y2xhc3M9XCJ7ICdzZXR0aW5ncy1mb3JtX190YWItLWFjdGl2ZSc6IHRhYiA9PT0gJ3RpbWUnIH1cIlxuICAgICAgdi1vbjpjbGljaz1cInRhYiA9ICd0aW1lJ1wiPlRpbWU8L2xpPlxuICA8L3VsPlxuXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX190YWItY29udGVudFwiXG4gICAgdi1zaG93PVwidGFiID09PSAnZm9ybSdcIj5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5QcmV2aWV3IEFsaWdubWVudDwvaDM+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgbmFtZT1cImZvcm1fcHJldmlld19hbGlnblwiIHZhbHVlPVwibGVmdFwiXG4gICAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLmZvcm0ucHJldmlld0FsaWduXCIgLz5cbiAgICAgICAgT24gdGhlIGxlZnRcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgbmFtZT1cImZvcm1fcHJldmlld19hbGlnblwiIHZhbHVlPVwicmlnaHRcIlxuICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5mb3JtLnByZXZpZXdBbGlnblwiIC8+XG4gICAgICAgIE9uIHRoZSByaWdodFxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPk1hcmt1cCBidXR0b25zPC9oMz5cblxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xhYmVsXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5zaG93TWFya3VwXCIgLz5cbiAgICAgICAgU2hvdyBtYXJrdXBcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uc2hvd01hcmt1cE1vYmlsZVwiIC8+XG4gICAgICAgIFNob3cgbWFya3VwIChtb2JpbGUpXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fdGFiLWNvbnRlbnRcIlxuICAgIHYtc2hvdz1cInRhYiA9PT0gJ3RpbWUnXCI+XG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+TGFuZ3VhZ2U8L2gzPlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJ0aW1lX2xvY2FsZVwiIHZhbHVlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnRpbWUubG9jYWxlXCIgLz5cbiAgICAgICAgQnJvd3NlciBkZWZhdWx0XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJ0aW1lX2xvY2FsZVwiIHZhbHVlPVwiY3VzdG9tXCJcbiAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5sb2NhbGVcIiAvPlxuICAgICAgICBDdXN0b21cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiIHBsYWNlaG9sZGVyPVwiZW5cIlxuICAgICAgICB2LW9uOmNsaWNrPVwic2V0dGluZ3MudGltZS5sb2NhbGUgPSAnY3VzdG9tJ1wiXG4gICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLmxvY2FsZUN1c3RvbVwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5Gb3JtYXQ8L2gzPlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJ0aW1lX2Zvcm1hdFwiIHZhbHVlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnRpbWUuZm9ybWF0XCIgLz5cbiAgICAgICAgQnJvd3NlciBkZWZhdWx0XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJ0aW1lX2Zvcm1hdFwiIHZhbHVlPVwiY3VzdG9tXCJcbiAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5mb3JtYXRcIiAvPlxuICAgICAgICBDdXN0b21cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRUVFLCBkZCBNTU0geXl5eSBISDptbTpzc1wiXG4gICAgICAgIHYtb246Y2xpY2s9XCJzZXR0aW5ncy50aW1lLmZvcm1hdCA9ICdjdXN0b20nXCJcbiAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnRpbWUuZm9ybWF0Q3VzdG9tXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxwPlNlZSB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbHV4b24vYmxvYi9tYXN0ZXIvZG9jcy9mb3JtYXR0aW5nLm1kI3RhYmxlLW9mLXRva2Vuc1wiPmx1eG9uIGRvY3VtZW50YXRpb248L2E+IGZvciB0aGUgY3VzdG9tIHRva2VucyByZWZlcmVuY2UuPC9wPlxuXG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+VGltZSB6b25lPC9oMz5cblxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xhYmVsXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICBuYW1lPVwidGltZV96b25lXCIgdmFsdWU9XCJkZWZhdWx0XCJcbiAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZS56b25lXCIgLz5cbiAgICAgICAgQnJvd3NlciBkZWZhdWx0XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJ0aW1lX3pvbmVcIiB2YWx1ZT1cImZpeGVkXCJcbiAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZS56b25lXCIgLz5cbiAgICAgICAgRml4ZWQgVVRDIG9mZnNldFxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIlxuICAgICAgICBtaW49XCItOTlcIiBtYXg9XCI5OVwiXG4gICAgICAgIHYtb246Y2xpY2s9XCJzZXR0aW5ncy50aW1lLnpvbmUgPSAnZml4ZWQnXCJcbiAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnRpbWUuem9uZUZpeGVkXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPkN1cnJlbnQgZm9ybWF0PC9oMz5cblxuICAgIDxwPnt7IHRpbWUgfX08L3A+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19mb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fYnV0dG9uc1wiPlxuICAgICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zdGF0dXNcIiA+e3sgc3RhdHVzIH19PC9wPlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBzZXR0aW5ncy1mb3JtX19zYXZlXCJcbiAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwic2F2ZVNldHRpbmdzKClcIj5TYXZlPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHRhYjogJ2Zvcm0nLFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9hZCBzZXR0aW5ncyBmcm9tIGEgY29va2llXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IF9fMS5TZXR0aW5nc01hbmFnZXIubG9hZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZSA9IGx1eG9uXzEuRGF0ZVRpbWUuZnJvbUpTRGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZSA9IHV0aWxzXzEuVGltZS5mb3JtYXQodGltZSwgdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSAnSW52YWxpZCBmb3JtYXQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzYXZlU2V0dGluZ3MoKSB7XG4gICAgICAgICAgICAgICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5kaWNhdGUgdGhhdCBzZXR0aW5ncyBhcmUgc2F2ZWQuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnU2V0dGluZ3Mgc2F2ZWQuJztcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCAvIDMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlNldHRpbmdzID0gU2V0dGluZ3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBTdHlsZVN3aXRjaCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3R5bGVzID0ge307XG4gICAgICAgIC8vIFBhcnNlIHNlbGVjdGFibGUgc3R5bGVzIGZyb20gPGhlYWQ+XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHV0aWxzXzEuRE9NLnFzYSgnbGlua1t0aXRsZV0nKTtcbiAgICAgICAgc3R5bGVzLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBzdHlsZS50aXRsZTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHN0eWxlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZXNbdGl0bGVdID0gdXJsO1xuICAgICAgICAgICAgc3R5bGUucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBHZXQgc2VsZWN0ZWQgc3R5bGVcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRfc3R5bGUgPSB1dGlsc18xLkNvb2tpZS5nZXQoJ3RpbnlpYl9zdHlsZScsICdTeW50aHdhdmUnKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZShzZWxlY3RlZF9zdHlsZSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBzdHlsZV9zd2l0Y2hlciA9IHV0aWxzXzEuRE9NLnFpZCgnc3R5bGUtc3dpdGNoZXInKTtcbiAgICAgICAgaWYgKHN0eWxlX3N3aXRjaGVyKSB7XG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSBzdHlsZSBzd2l0Y2hlciB3aWRnZXRcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBzdHlsZXNbaV07XG4gICAgICAgICAgICAgICAgc3R5bGVfc3dpdGNoZXIuaW5uZXJIVE1MICs9IGA8b3B0aW9uIGNsYXNzPVwic3R5bGUtc3dpdGNoZXJfX29wdGlvblwiIHZhbHVlPVwiJHt0aXRsZX1cIj4ke3RpdGxlfTwvb3B0aW9uPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgc3R5bGUgY2hhbmdlIGNhbGxiYWNrXG4gICAgICAgICAgICBzdHlsZV9zd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdHlsZShzdHlsZV9zd2l0Y2hlci52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3N0eWxlJywgJ1N5bnRod2F2ZScpO1xuICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goeyAndGhlbWUnOiBzZWxlY3RlZF9zdHlsZSB9KTtcbiAgICB9XG4gICAgc2V0U3R5bGUoc3R5bGUpIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHV0aWxzXzEuRE9NLnFzKCdoZWFkJyk7XG4gICAgICAgIC8vIElmIG5vIDxoZWFkPiBlbGVtZW50LCBkbyBub3RoaW5nXG4gICAgICAgIGlmICghaGVhZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX3N0eWxlID0gdXRpbHNfMS5ET00ucXMoJ2xpbmtbZGF0YS1zZWxlY3RlZF0nKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkX3N0eWxlKSB7XG4gICAgICAgICAgICAvLyBJZiBzdHlsZSBhbHJlYWR5IHNlbGVjdGVkLCBkbyBub3RoaW5nXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRfc3R5bGUudGl0bGUgPT09IHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzbHkgc2VsZWN0ZWQgc3R5bGUgZnJvbSA8aGVhZD5cbiAgICAgICAgICAgIHNlbGVjdGVkX3N0eWxlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBjdXJyZW50bHkgc2VsZWN0ZWQgc3R5bGUgdG8gPGhlYWQ+XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuc3R5bGVzW3N0eWxlXTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgbGluay5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgbGluay50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgLy8gU2F2ZSBzZWxlY3RlZCBzdHlsZVxuICAgICAgICBjb25zdCBleHBpcmF0aW9uX2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBleHBpcmF0aW9uX2RhdGUuc2V0VGltZShleHBpcmF0aW9uX2RhdGUuZ2V0VGltZSgpICsgMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHV0aWxzXzEuQ29va2llLnNldCgndGlueWliX3N0eWxlJywgc3R5bGUsIGV4cGlyYXRpb25fZGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHlsZVN3aXRjaCA9IFN0eWxlU3dpdGNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGV2ZW50QnVzID0gbmV3IHZ1ZV8xLmRlZmF1bHQoKTtcbmV4cG9ydHMuZXZlbnRCdXMgPSBldmVudEJ1cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEV2ZW50cztcbihmdW5jdGlvbiAoRXZlbnRzKSB7XG4gICAgRXZlbnRzW1wiUmVhZHlcIl0gPSBcInJlYWR5XCI7XG4gICAgRXZlbnRzW1wiUG9zdHNJbnNlcnRlZFwiXSA9IFwicG9zdHNfaW5zZXJ0ZWRcIjtcbiAgICBFdmVudHNbXCJQb3N0Q3JlYXRlZFwiXSA9IFwicG9zdF9jcmVhdGVkXCI7XG4gICAgRXZlbnRzW1wiSW5zZXJ0TWFya3VwXCJdID0gXCJpbnNlcnRfbWFya3VwXCI7XG59KShFdmVudHMgPSBleHBvcnRzLkV2ZW50cyB8fCAoZXhwb3J0cy5FdmVudHMgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZXZlbnRfYnVzXzEgPSByZXF1aXJlKFwiLi9ldmVudC1idXNcIik7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRfYnVzXzEuZXZlbnRCdXM7XG52YXIgZXZlbnRzXzEgPSByZXF1aXJlKFwiLi9ldmVudHNcIik7XG5leHBvcnRzLkV2ZW50cyA9IGV2ZW50c18xLkV2ZW50cztcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzTWFuYWdlciA9IHNldHRpbmdzXzEuU2V0dGluZ3NNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzZXR0aW5nc0tleSA9ICdzZXR0aW5ncyc7XG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgZm9ybToge1xuICAgICAgICBwcmV2aWV3QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgc2hvd01hcmt1cDogdHJ1ZSxcbiAgICAgICAgc2hvd01hcmt1cE1vYmlsZTogZmFsc2UsXG4gICAgfSxcbiAgICB0aW1lOiB7XG4gICAgICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxuICAgICAgICBsb2NhbGVDdXN0b206ICcnLFxuICAgICAgICB6b25lOiAnZGVmYXVsdCcsXG4gICAgICAgIHpvbmVGaXhlZDogMCxcbiAgICAgICAgZm9ybWF0OiAnZGVmYXVsdCcsXG4gICAgICAgIGZvcm1hdEN1c3RvbTogJycsXG4gICAgfSxcbn07XG5mdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGNvbnN0IG91dHB1dCA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmNsYXNzIFNldHRpbmdzTWFuYWdlciB7XG4gICAgc3RhdGljIGxvYWQoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5nc0tleSkpO1xuICAgICAgICByZXR1cm4gbWVyZ2UoZGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XG4gICAgfVxuICAgIHN0YXRpYyBzYXZlKHNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNldHRpbmdzS2V5LCBkYXRhKTtcbiAgICB9XG59XG5leHBvcnRzLlNldHRpbmdzTWFuYWdlciA9IFNldHRpbmdzTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29va2llIHtcbiAgICBzdGF0aWMgZ2V0KG5hbWUsIF9kZWZhdWx0ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb29raWVfc3RyID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcbiAgICAgICAgY29uc3QgY29va2llX3BhcnRzID0gY29va2llX3N0ci5zcGxpdChgOyAke25hbWV9PWApO1xuICAgICAgICBpZiAoY29va2llX3BhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gY29va2llX3BhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWVfZW5jKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQobmFtZSwgdmFsdWUsIGV4cGlyYXRpb24pIHtcbiAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9zdHIgPSBleHBpcmF0aW9uLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWVfZW5jfTsgcGF0aD0vOyBleHBpcmVzPSR7ZXhwaXJhdGlvbl9zdHJ9YDtcbiAgICB9XG59XG5leHBvcnRzLkNvb2tpZSA9IENvb2tpZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRE9NIHtcbiAgICBzdGF0aWMgcWlkKGlkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICAgIHN0YXRpYyBxcyhzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuICAgIHN0YXRpYyBxc2Eoc2VsZWN0b3IsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRMaXN0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRMaXN0KTtcbiAgICB9XG59XG5leHBvcnRzLkRPTSA9IERPTTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvb2tpZV8xID0gcmVxdWlyZShcIi4vY29va2llXCIpO1xuZXhwb3J0cy5Db29raWUgPSBjb29raWVfMS5Db29raWU7XG52YXIgZG9tXzEgPSByZXF1aXJlKFwiLi9kb21cIik7XG5leHBvcnRzLkRPTSA9IGRvbV8xLkRPTTtcbnZhciB0aW1lXzEgPSByZXF1aXJlKFwiLi90aW1lXCIpO1xuZXhwb3J0cy5UaW1lID0gdGltZV8xLlRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFRpbWUge1xuICAgIHN0YXRpYyBmb3JtYXQodGltZSwgc2V0dGluZ3MpIHtcbiAgICAgICAgaWYgKHNldHRpbmdzLnRpbWUubG9jYWxlID09PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgdGltZSA9IHRpbWUuc2V0TG9jYWxlKHNldHRpbmdzLnRpbWUubG9jYWxlQ3VzdG9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS56b25lID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBzZXR0aW5ncy50aW1lLnpvbmVGaXhlZDtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFN0ciA9ICdVVEMnICsgKG9mZnNldCA+PSAwID8gJysnIDogJycpICsgb2Zmc2V0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5zZXRab25lKG9mZnNldFN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzLnRpbWUuZm9ybWF0ID09PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWUudG9Gb3JtYXQoc2V0dGluZ3MudGltZS5mb3JtYXRDdXN0b20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWUudG9Gb3JtYXQoJ2QuTEwueXl5eSBISDptbTpzcycpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UaW1lID0gVGltZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gbHV4b247IiwibW9kdWxlLmV4cG9ydHMgPSBWdWU7Il0sInNvdXJjZVJvb3QiOiIifQ==