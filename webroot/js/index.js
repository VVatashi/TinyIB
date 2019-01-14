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
            const rect = draggable.getBoundingClientRect();
            const maxX = window.innerWidth - rect.width;
            const maxY = window.innerHeight - rect.height;
            const x = Math.min(Math.max(0, this._draggablePosition.x + deltaX), maxX);
            const y = Math.min(Math.max(0, this._draggablePosition.y + deltaY), maxY);
            draggable.style.left = `${x}px`;
            draggable.style.top = `${y}px`;
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
      <button type="button" class="button posting-form__reset"
        v-on:click="resetFields()" title="Clear form">⎚</button>

      <button type="button" class="button posting-form__float"
        v-if="position !== 'float' && mode !== 'mobile'"
        v-on:click="makeFloating()" title="Floating form">↑</button>

      <button type="button" class="button posting-form__close"
        v-on:click="onCloseClick()" title="Close form">⨯</button>
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
            destroyed() {
                if (this._resize) {
                    window.removeEventListener('resize', this._resize);
                    this._resize = null;
                }
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
                    this.updatePreview();
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
                    const vm = this.viewModel;
                    if (this.isInThread && vm.position !== 'float') {
                        // Move form to the post.
                        this.moveToPost(post);
                    }
                    // Insert reply markup.
                    const message = vm.fields.message;
                    if (message.length && !message.endsWith('\n')) {
                        vm.fields.message += '\n';
                    }
                    vm.fields.message += `>>${id}\n`;
                    const selection = window.getSelection().toString();
                    if (selection) {
                        vm.fields.message += `> ${selection}\n`;
                    }
                    setTimeout(() => {
                        const messageEl = vm.$refs.message;
                        if (messageEl) {
                            messageEl.focus();
                        }
                    });
                });
                link.setAttribute('title', 'Quick reply');
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
        const vm = this.viewModel;
        vm.position = 'post';
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.classList.remove('hidden');
        }
        setTimeout(() => {
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
        setTimeout(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvY2FwdGNoYS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2NvcnJlY3QtdGltZS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2RlbGV0ZS1mb3JtLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvZHJhZ2dhYmxlLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9uZXctcG9zdHMtZGV0ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3N0LXJlZmVyZW5jZS1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3N0aW5nLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3N0eWxlLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudC1idXMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXZlbnRzLnRzIiwid2VicGFjazovLy8uL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9kb20udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvdGltZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsdXhvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pCQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSxxQiIsImZpbGUiOiIuL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90cy9hcHAudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF8xID0gcmVxdWlyZShcIi5cIik7XG5jb25zdCBjb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzXCIpO1xubmV3IGNvbXBvbmVudHNfMS5DYXB0Y2hhKCk7XG5uZXcgY29tcG9uZW50c18xLkNvcnJlY3RUaW1lKCk7XG5uZXcgY29tcG9uZW50c18xLkRlbGV0ZUZvcm0oKTtcbm5ldyBjb21wb25lbnRzXzEuUG9zdGluZ0Zvcm0oKTtcbm5ldyBjb21wb25lbnRzXzEuUG9zdFJlZmVyZW5jZU1hcCgpO1xubmV3IGNvbXBvbmVudHNfMS5TZXR0aW5ncygpO1xubmV3IGNvbXBvbmVudHNfMS5TdHlsZVN3aXRjaCgpO1xubmV3IGNvbXBvbmVudHNfMS5OZXdQb3N0c0RldGVjdG9yKCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZSA9PiB7XG4gICAgXzEuZXZlbnRCdXMuJGVtaXQoXzEuRXZlbnRzLlJlYWR5KTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ2FwdGNoYSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxTcmMgPSAnJztcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdXRpbHNfMS5ET00ucWlkKCdjYXB0Y2hhaW1hZ2UnKTtcbiAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsU3JjID0gaW1hZ2Uuc3JjO1xuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbG9hZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGNhcHRjaGEgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGEnKTtcbiAgICAgICAgY2FwdGNoYS52YWx1ZSA9ICcnO1xuICAgICAgICBjYXB0Y2hhLmZvY3VzKCk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdXRpbHNfMS5ET00ucWlkKCdjYXB0Y2hhaW1hZ2UnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYCR7dGhpcy5vcmlnaW5hbFNyY30jJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0cy5DYXB0Y2hhID0gQ2FwdGNoYTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbHV4b25fMSA9IHJlcXVpcmUoXCJsdXhvblwiKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDb3JyZWN0VGltZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIExvYWQgc2V0dGluZ3MgZnJvbSBhIGNvb2tpZVxuICAgICAgICB0aGlzLnNldHRpbmdzID0gSlNPTi5wYXJzZSh1dGlsc18xLkNvb2tpZS5nZXQoJ3NldHRpbmdzJywgJ3t9JykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIChwb3N0cykgPT4gcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdXRpbHNfMS5ET00ucXNhKCcucG9zdC1oZWFkZXJfX2RhdGV0aW1lJyk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB0aGlzLmNvcnJlY3RUaW1lKGVsZW1lbnQpKTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgdGltZV9lbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX2RhdGV0aW1lJywgcG9zdCk7XG4gICAgICAgIGlmICghdGltZV9lbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ycmVjdFRpbWUodGltZV9lbCk7XG4gICAgfVxuICAgIGNvcnJlY3RUaW1lKGVsKSB7XG4gICAgICAgIGNvbnN0IHRpbWVfc3RyID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRldGltZScpO1xuICAgICAgICBpZiAoIXRpbWVfc3RyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZSA9IGx1eG9uXzEuRGF0ZVRpbWUuZnJvbUlTTyh0aW1lX3N0cik7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdXRpbHNfMS5UaW1lLmZvcm1hdCh0aW1lLCB0aGlzLnNldHRpbmdzKTtcbiAgICB9XG59XG5leHBvcnRzLkNvcnJlY3RUaW1lID0gQ29ycmVjdFRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBEZWxldGVGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ2RlbGZvcm0nKTtcbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVsZXRlX3Bvc3RfcGFzc3dvcmQgPSB1dGlsc18xLkRPTS5xaWQoJ2RlbGV0ZXBvc3RwYXNzd29yZCcpO1xuICAgICAgICBpZiAoZGVsZXRlX3Bvc3RfcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIC8vIExvYWQgZGVsZXRlIHBvc3QgcGFzc3dvcmQuXG4gICAgICAgICAgICBkZWxldGVfcG9zdF9wYXNzd29yZC52YWx1ZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3Bhc3N3b3JkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRlbGV0ZUZvcm0gPSBEZWxldGVGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwb2ludGVyRXZlbnRzID0gJ1BvaW50ZXJFdmVudCcgaW4gd2luZG93O1xuY29uc3QgdG91Y2hFdmVudHMgPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XG5leHBvcnRzLmRyYWdnYWJsZSA9IHtcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZ2V0RHJhZ0hhbmRsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuZ2V0RHJhZ0hhbmRsZSgpO1xuICAgICAgICBpZiAoIWhhbmRsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21vdXNlRG93biA9IHRoaXMuX29uTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLl9tb3VzZURvd24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9tb3VzZURvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX21vdXNlRG93bik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgX29uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5nZXREcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5fZHJhZ2dhYmxlUG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeDogZHJhZ2dhYmxlLm9mZnNldExlZnQsXG4gICAgICAgICAgICAgICAgeTogZHJhZ2dhYmxlLm9mZnNldFRvcCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgfHwgZSBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBlLmNsaWVudFksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdG91Y2guY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG91Y2guY2xpZW50WSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9tb3VzZU1vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZU1vdmUgPSB0aGlzLl9vbk1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuX21vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9tb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9tb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5fbW91c2VVcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21vdXNlVXAgPSB0aGlzLl9vbk1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5fbW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5fbW91c2VVcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX21vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5fbW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9tb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9vbk1vdXNlTW92ZShlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2V0RHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBkZWx0YVggPSAwO1xuICAgICAgICAgICAgbGV0IGRlbHRhWSA9IDA7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgfHwgZSBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGUuY2xpZW50WCAtIHRoaXMuX2RyYWdTdGFydC54O1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUuY2xpZW50WSAtIHRoaXMuX2RyYWdTdGFydC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsdGFYID0gdG91Y2guY2xpZW50WCAtIHRoaXMuX2RyYWdTdGFydC54O1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IHRvdWNoLmNsaWVudFkgLSB0aGlzLl9kcmFnU3RhcnQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBkcmFnZ2FibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBtYXhYID0gd2luZG93LmlubmVyV2lkdGggLSByZWN0LndpZHRoO1xuICAgICAgICAgICAgY29uc3QgbWF4WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgeCA9IE1hdGgubWluKE1hdGgubWF4KDAsIHRoaXMuX2RyYWdnYWJsZVBvc2l0aW9uLnggKyBkZWx0YVgpLCBtYXhYKTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLm1pbihNYXRoLm1heCgwLCB0aGlzLl9kcmFnZ2FibGVQb3NpdGlvbi55ICsgZGVsdGFZKSwgbWF4WSk7XG4gICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICAgICAgICAgICAgZHJhZ2dhYmxlLnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuICAgICAgICB9LFxuICAgICAgICBfb25Nb3VzZVVwKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb3VzZU1vdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLl9tb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fbW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fbW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fbW91c2VVcCkge1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLl9tb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLl9tb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5fbW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLl9tb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX21vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX21vdXNlTW92ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9tb3VzZVVwID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNhcHRjaGFfMSA9IHJlcXVpcmUoXCIuL2NhcHRjaGFcIik7XG5leHBvcnRzLkNhcHRjaGEgPSBjYXB0Y2hhXzEuQ2FwdGNoYTtcbnZhciBjb3JyZWN0X3RpbWVfMSA9IHJlcXVpcmUoXCIuL2NvcnJlY3QtdGltZVwiKTtcbmV4cG9ydHMuQ29ycmVjdFRpbWUgPSBjb3JyZWN0X3RpbWVfMS5Db3JyZWN0VGltZTtcbnZhciBkZWxldGVfZm9ybV8xID0gcmVxdWlyZShcIi4vZGVsZXRlLWZvcm1cIik7XG5leHBvcnRzLkRlbGV0ZUZvcm0gPSBkZWxldGVfZm9ybV8xLkRlbGV0ZUZvcm07XG52YXIgZHJhZ2dhYmxlXzEgPSByZXF1aXJlKFwiLi9kcmFnZ2FibGVcIik7XG5leHBvcnRzLmRyYWdnYWJsZSA9IGRyYWdnYWJsZV8xLmRyYWdnYWJsZTtcbnZhciBuZXdfcG9zdHNfZGV0ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL25ldy1wb3N0cy1kZXRlY3RvclwiKTtcbmV4cG9ydHMuTmV3UG9zdHNEZXRlY3RvciA9IG5ld19wb3N0c19kZXRlY3Rvcl8xLk5ld1Bvc3RzRGV0ZWN0b3I7XG52YXIgcG9zdGluZ19mb3JtXzEgPSByZXF1aXJlKFwiLi9wb3N0aW5nLWZvcm1cIik7XG5leHBvcnRzLlBvc3RpbmdGb3JtID0gcG9zdGluZ19mb3JtXzEuUG9zdGluZ0Zvcm07XG52YXIgcG9zdF9yZWZlcmVuY2VfbWFwXzEgPSByZXF1aXJlKFwiLi9wb3N0LXJlZmVyZW5jZS1tYXBcIik7XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBwb3N0X3JlZmVyZW5jZV9tYXBfMS5Qb3N0UmVmZXJlbmNlTWFwO1xudmFyIHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBzZXR0aW5nc18xLlNldHRpbmdzO1xudmFyIHN0eWxlX3N3aXRjaF8xID0gcmVxdWlyZShcIi4vc3R5bGUtc3dpdGNoXCIpO1xuZXhwb3J0cy5TdHlsZVN3aXRjaCA9IHN0eWxlX3N3aXRjaF8xLlN0eWxlU3dpdGNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgTmV3UG9zdHNEZXRlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKiBAdG9kbzogcmVtb3ZlIE11dGF0aW9uT2JzZXJ2ZXIgQVNBUCwgd2l0aCBpbnRlZ3JhdGVkIHRocmVhZCB1cGRhdGluZy4gKi9cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSBtdXRhdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBHZXQgYWRkZWQgcG9zdHMsIGlmIGFueS5cbiAgICAgICAgICAgICAgICAubWFwKG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTGlzdCA9IG11dGF0aW9uLmFkZGVkTm9kZXM7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGVsZW1lbnQgaXMgcG9zdCBpdHNlbGYsIHJldHVybiBpdCxcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSBxdWVyeSBmb3IgZWxlbWVudCBjaGlsZHJlbi5cbiAgICAgICAgICAgICAgICAgICAgLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3N0JylcbiAgICAgICAgICAgICAgICAgICAgPyBbZWxlbWVudF1cbiAgICAgICAgICAgICAgICAgICAgOiB1dGlsc18xLkRPTS5xc2EoJy5wb3N0JywgZWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgIC8vIEZsYXR0ZW4gcG9zdHMgYXJyYXkuXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB0b3RhbC5jb25jYXQoY3VycmVudCksIFtdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gRmxhdHRlbiBwb3N0cyBhcnJheS5cbiAgICAgICAgICAgICAgICAucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwuY29uY2F0KGN1cnJlbnQpLCBbXSk7XG4gICAgICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0dXAgTXV0YXRpb25PYnNlcnZlci5cbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IHV0aWxzXzEuRE9NLnFzYSgnLnBvc3QnKTtcbiAgICAgICAgICAgIGlmIChwb3N0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgX18xLmV2ZW50QnVzLiRlbWl0KF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgcG9zdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLk5ld1Bvc3RzRGV0ZWN0b3IgPSBOZXdQb3N0c0RldGVjdG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgUG9zdFJlZmVyZW5jZU1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9zdHMgPSB7fTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIChwb3N0cykgPT4gcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydChwb3N0KSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9ICtwb3N0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0LWlkJyk7XG4gICAgICAgIC8vIFN0b3JlIHBvc3QuXG4gICAgICAgIHRoaXMucG9zdHNbcG9zdElkXSA9IHBvc3Q7XG4gICAgICAgIC8vIEdldCByZWZlcmVuY2VzLlxuICAgICAgICBjb25zdCByZWZlcmVuY2VFbGVtZW50cyA9IHV0aWxzXzEuRE9NLnFzYSgnYVtkYXRhLXRhcmdldC1wb3N0LWlkXScsIHBvc3QpO1xuICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gcmVmZXJlbmNlRWxlbWVudHMubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGlkOiArZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LXBvc3QtaWQnKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBcHBlbmQgdGhlIGF1dGhvciBuYW1lIG9mIHRoZSByZWZlcmVuY2VkIHBvc3QgdG8gdGhlIHJlZmVyZW5jZSBsaW5rIHRleHQuXG4gICAgICAgIHJlZmVyZW5jZXMuZm9yRWFjaChyZWZlcmVuY2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHRoaXMucG9zdHNbcmVmZXJlbmNlLmlkXTtcbiAgICAgICAgICAgIGlmICghcG9zdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZUF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJlZmVyZW5jZUF1dGhvci5jbGFzc0xpc3QuYWRkKCdwb3N0X19yZWZlcmVuY2UtbGluay1hdXRob3InKTtcbiAgICAgICAgICAgIHJlZmVyZW5jZUF1dGhvci5pbm5lckhUTUwgPSB0aGlzLmdldFBvc3RSZWZMaW5rQXV0aG9ySHRtbChwb3N0KTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHJlZmVyZW5jZS5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IHJlZmVyZW5jZS5lbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShyZWZlcmVuY2VBdXRob3IsIG5leHRTaWJsaW5nKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFBvc3RSZWZMaW5rQXV0aG9ySHRtbChwb3N0KSB7XG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX25hbWUnLCBwb3N0KTtcbiAgICAgICAgY29uc3QgdHJpcGNvZGVFbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX3RyaXBjb2RlJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRWwgPyBuYW1lRWwuaW5uZXJIVE1MIDogJyc7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlID0gdHJpcGNvZGVFbCA/IHRyaXBjb2RlRWwuaW5uZXJIVE1MIDogJyc7XG4gICAgICAgIGlmIChuYW1lLmxlbmd0aCB8fCB0cmlwY29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBgKDxzcGFuIGNsYXNzPVwicG9zdF9fcmVmZXJlbmNlLWxpbmstbmFtZVwiPiR7bmFtZX08L3NwYW4+YFxuICAgICAgICAgICAgICAgICsgYDxzcGFuIGNsYXNzPVwicG9zdF9fcmVmZXJlbmNlLWxpbmstdHJpcGNvZGVcIj4ke3RyaXBjb2RlfTwvc3Bhbj4pYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgYDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUG9zdFJlZmVyZW5jZU1hcCA9IFBvc3RSZWZlcmVuY2VNYXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RpbmdGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0luVGhyZWFkID0gZmFsc2U7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgdGhpcy5vblBvc3RzSW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKC9cXC9yZXNcXC8oXFxkKykvaSk7XG4gICAgICAgIGNvbnN0IGlzSW5UaHJlYWQgPSAhIW1hdGNoO1xuICAgICAgICBjb25zdCB0aHJlYWRJZCA9IGlzSW5UaHJlYWQgPyArbWF0Y2hbMV0gOiAwO1xuICAgICAgICB0aGlzLmlzSW5UaHJlYWQgPSBpc0luVGhyZWFkO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UodXRpbHNfMS5Db29raWUuZ2V0KCdzZXR0aW5ncycsICd7fScpKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXcgdnVlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBlbDogZm9ybSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgXG48Zm9ybSBjbGFzcz1cImNvbnRlbnRfX3Bvc3RpbmctZm9ybSBwb3N0aW5nLWZvcm1cIiBpZD1cInBvc3RpbmctZm9ybVwiXG4gIHYtYmluZDpjbGFzcz1cInsgJ3Bvc3RpbmctZm9ybS0tZmxvYXRpbmcnOiBwb3NpdGlvbiA9PSAnZmxvYXQnIH1cIlxuICB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXQoKVwiIHYtc2hvdz1cInBvc2l0aW9uICE9PSAnaGlkZGVuJ1wiXG4gIHJlZj1cImZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyXCIgcmVmPVwiaGVhZGVyXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3RpdGxlXCI+e3tcbiAgICAgIHRocmVhZElkID8gJ1JlcGx5IHRvIHRocmVhZCAjJyArIHRocmVhZElkIDogJ0NyZWF0ZSB0aHJlYWQnXG4gICAgfX08L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyLWJ1dHRvbnNcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fcmVzZXRcIlxuICAgICAgICB2LW9uOmNsaWNrPVwicmVzZXRGaWVsZHMoKVwiIHRpdGxlPVwiQ2xlYXIgZm9ybVwiPuKOmjwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX2Zsb2F0XCJcbiAgICAgICAgdi1pZj1cInBvc2l0aW9uICE9PSAnZmxvYXQnICYmIG1vZGUgIT09ICdtb2JpbGUnXCJcbiAgICAgICAgdi1vbjpjbGljaz1cIm1ha2VGbG9hdGluZygpXCIgdGl0bGU9XCJGbG9hdGluZyBmb3JtXCI+4oaRPC9idXR0b24+XG5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fY2xvc2VcIlxuICAgICAgICB2LW9uOmNsaWNrPVwib25DbG9zZUNsaWNrKClcIiB0aXRsZT1cIkNsb3NlIGZvcm1cIj7iqK88L2J1dHRvbj5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2NvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19wcmV2aWV3XCIgdi1vbjpjbGljaz1cInNob3dGaWxlRGlhbG9nKClcIlxuICAgICAgdi1iaW5kOmNsYXNzPVwieyAncG9zdGluZy1mb3JtX19wcmV2aWV3LS1tb2JpbGUnOiBtb2RlID09ICdtb2JpbGUnLFxuICAgICAgICAncG9zdGluZy1mb3JtX19wcmV2aWV3LS1yaWdodCc6IHByZXZpZXdBbGlnbiA9PSAncmlnaHQnIH1cIlxuICAgICAgdi1zaG93PVwibW9kZSA9PSAnZGVmYXVsdCcgfHwgZmlsZVwiXG4gICAgICB2LW9uOmRyYWdlbnRlci5zdG9wLnByZXZlbnRcbiAgICAgIHYtb246ZHJhZ2xlYXZlLnN0b3AucHJldmVudFxuICAgICAgdi1vbjpkcmFnb3Zlci5zdG9wLnByZXZlbnRcbiAgICAgIHYtb246ZHJvcC5zdG9wLnByZXZlbnQ9XCJvbkZpbGVEcm9wKCRldmVudClcIj5cbiAgICAgIDxpbWcgdi1pZj1cInByZXZpZXdUeXBlID09ICdpbWFnZSdcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcHJldmlldy1pbWFnZVwiXG4gICAgICAgIHYtYmluZDpzcmM9XCJwcmV2aWV3U3JjXCIgLz5cbiAgICAgIDx2aWRlbyB2LWVsc2UtaWY9XCJwcmV2aWV3VHlwZSA9PSAndmlkZW8nXCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXctaW1hZ2VcIlxuICAgICAgICB2LWJpbmQ6c3JjPVwicHJldmlld1NyY1wiIGF1dG9wbGF5IGxvb3AgbXV0ZWQ+PC92aWRlbz5cbiAgICAgIDxwIHYtZWxzZS1pZj1cInByZXZpZXdUeXBlID09ICcnXCI+VXBsb2FkIGZpbGU8L3A+XG5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fcHJldmlldy1yZW1vdmVcIlxuICAgICAgICB2LWlmPVwiZmlsZVwiIHYtb246Y2xpY2suc3RvcD1cImZpbGUgPSBudWxsLCB1cGRhdGVQcmV2aWV3KClcIj7iqK88L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX21haW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3Jvd1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fc3ViamVjdFwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5zdWJqZWN0XCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiAvPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19uYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLm5hbWVcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIHYtb246Y2hhbmdlPVwib25OYW1lQ2hhbmdlKClcIiAvPlxuXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvc3RpbmctZm9ybV9fYXR0YWNobWVudFwiIHYtc2hvdz1cIm1vZGUgPT0gJ21vYmlsZSdcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fYXR0YWNobWVudC1pbnB1dFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLmZpbGVcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICB2LW9uOmNoYW5nZT1cIm9uRmlsZUNoYW5nZSgkZXZlbnQudGFyZ2V0LmZpbGVzKVwiXG4gICAgICAgICAgICByZWY9XCJmaWxlXCIgLz5cblxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19hdHRhY2htZW50LWljb25cIj48L3NwYW4+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19zdWJtaXRcIlxuICAgICAgICAgIHYtaWY9XCJtb2RlID09ICdkZWZhdWx0J1wiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCI+UmVwbHk8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19tYXJrdXAtcm93IG1hcmt1cFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnYicpXCI+XG4gICAgICAgICAgPHN0cm9uZz5iPC9zdHJvbmc+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdpJylcIj5cbiAgICAgICAgICA8ZW0+aTwvZW0+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCd1JylcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fdW5kZXJsaW5lXCI+dTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3MnKVwiPlxuICAgICAgICAgIDxkZWw+czwvZGVsPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnc3ViJylcIj5cbiAgICAgICAgICA8c3ViPnM8L3N1Yj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3N1cCcpXCI+XG4gICAgICAgICAgPHN1cD5zPC9zdXA+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdjb2RlJylcIj5cbiAgICAgICAgICA8Y29kZT5jPC9jb2RlPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnc3BvaWxlcicpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3Nwb2lsZXIgbWFya3VwX19zcG9pbGVyLS12aXNpYmxlXCI+c3A8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdycCcpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3JwIG1hcmt1cF9fcnAtLXZpc2libGVcIj5ycDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRRdW90ZSgpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3F1b3RlXCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcm93XCI+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fbWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5tZXNzYWdlXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIHYtb246a2V5ZG93bj1cIm9uTWVzc2FnZUtleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgdi1vbjpwYXN0ZT1cIm9uTWVzc2FnZVBhc3RlKCRldmVudClcIlxuICAgICAgICAgIHJlZj1cIm1lc3NhZ2VcIj48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgdi1pZj1cInN0YXR1c1wiIGNsYXNzPVwicG9zdGluZy1mb3JtX19zdGF0dXNcIj57eyBzdGF0dXMgfX08L2Rpdj5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3N1Ym1pdCAgcG9zdGluZy1mb3JtX19zdWJtaXQtLW1vYmlsZVwiXG4gICAgICAgIHYtaWY9XCJtb2RlID09ICdtb2JpbGUnXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIj5SZXBseTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZm9ybT5gLFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3U3JjOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld1R5cGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJycsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ21vYmlsZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgICAgIHRocmVhZElkKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyZWFkSWQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcmV2aWV3QWxpZ24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncy5mb3JtUHJldmlld0FsaWduO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgICAgICAvLyBMb2FkIHNhdmVkIG5hbWUuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLm5hbWUnXTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplID0gdGhpcy51cGRhdGVNb2RlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveWVkKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1peGluczogW1xuICAgICAgICAgICAgICAgIF8xLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgZ2V0RHJhZ0hhbmRsZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuaGVhZGVyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0RHJhZ2dhYmxlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiAhPT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZm9ybTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc2V0RmllbGRzKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5zdWJqZWN0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZmlsZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1ha2VGbG9hdGluZygpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdmbG9hdCc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLiRyZWZzLmZvcm07XG4gICAgICAgICAgICAgICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghZm9ybS5zdHlsZS50b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBmb3JtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gcmVjdC53aWR0aCAtIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmhlaWdodCAtIDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5zdHlsZS50b3AgPSBgJHt5fXB4YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvd0ZpbGVEaWFsb2coKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZS5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVNb2RlKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCA/ICdtb2JpbGUnIDogJ2RlZmF1bHQnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnbW9iaWxlJyAmJiB0aGlzLnBvc2l0aW9uID09PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZVByZXZpZXcoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5maWxlLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ3ZpZGVvLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUeXBlID0gJ3ZpZGVvJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ2F1ZGlvLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUeXBlID0gJ2F1ZGlvJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1R5cGUgPSAnaW1hZ2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZmlsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmZpbGUubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoJy53ZWJtJykgfHwgbmFtZS5lbmRzV2l0aCgnLm1wNCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUeXBlID0gJ3ZpZGVvJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lLmVuZHNXaXRoKCcubXAzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1R5cGUgPSAnYXVkaW8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHlwZSA9ICdpbWFnZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1R5cGUgPSAnaW1hZ2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdTcmMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUeXBlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdTcmMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25OYW1lQ2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLm5hbWUnXSA9IHRoaXMuZmllbGRzLm5hbWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkZpbGVEcm9wKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQgJiYgdGV4dC5tYXRjaCgvaHR0cHM/OlxcL1xcL1stYS16QS1aMC05QDolLl9cXCt+Iz1dezIsfVxcLlthLXpdezIsfVxcYlstYS16QS1aMC05QDolX1xcKy5+Iz8mXFwvPV0qLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB0ZXh0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQcmV2aWV3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBFcnJvcjogJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRmlsZUNoYW5nZShmaWxlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBmaWxlcy5sZW5ndGggPyBmaWxlc1swXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJldmlldygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlS2V5RG93bihlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Ym1pdCBmb3JtIG9uIEN0cmwrRW50ZXIgaW4gdGhlIG1lc3NhZ2UgZmllbGQuXG4gICAgICAgICAgICAgICAgICAgIGlmICgoZS5rZXlDb2RlID09IDEwIHx8IGUua2V5Q29kZSA9PSAxMykgJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTWVzc2FnZVBhc3RlKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzdGUgZmlsZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGUuY2xpcGJvYXJkRGF0YSB8fCBlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXRhLml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUuc3RhcnRzV2l0aCgnYXVkaW8vJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUuc3RhcnRzV2l0aCgndmlkZW8vJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJldmlldygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRNYXJrdXAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHRoaXMuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5pbmdUYWcgPSBgWyR7dGFnfV1gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zaW5nVGFnID0gYFsvJHt0YWd9XWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0ZXh0IGlzIHNlbGVjdGVkLCB3cmFwIGl0IGluIGEgdGFnIHBhaXIuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uYmVnaW4sIHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5sYXN0SW5kZXhPZihvcGVuaW5nVGFnLCBzZWxlY3Rpb24uYmVnaW4pID4gbWVzc2FnZS5sYXN0SW5kZXhPZihjbG9zaW5nVGFnLCBzZWxlY3Rpb24uYmVnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2luZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHNlbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHNlbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRRdW90ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmxlbmd0aCAmJiAhbWVzc2FnZS5lbmRzV2l0aCgnXFxuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgKz0gJ1xcbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgKz0gYD4gJHtzZWxlY3Rpb259XFxuYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgKz0gJz4gJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Ym1pdCByZXF1ZXN0IHRvIGNyZWF0ZSBwb3N0LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt3aW5kb3cuYmFzZVVybH0vYWpheC9wb3N0L2NyZWF0ZWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3BhcmVudCcsIHRocmVhZElkLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnc3ViamVjdCcsIHRoaXMuZmllbGRzLnN1YmplY3QpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMuZmllbGRzLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbWVzc2FnZScsIHRoaXMuZmllbGRzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIHRoaXMuZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NQZXJjZW50ID0gTWF0aC5jZWlsKGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBVcGxvYWRpbmcuLi4gJHtwcm9ncmVzc1BlcmNlbnR9JWA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIGZvcm0uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBmb3JtIHRvIHRoZSBpbml0aWFsIGxvY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0luVGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgREUgdGhyZWFkIHVwZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlciA9IHV0aWxzXzEuRE9NLnFzKCcuZGUtdGhyLXVwZGF0ZXItbGluaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlci5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byB0aHJlYWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEVycm9yOiAke2RhdGEuZXJyb3J9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEVycm9yOiAke3hoci5zdGF0dXN9ICR7eGhyLnN0YXR1c1RleHR9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Qb3N0c0luc2VydGVkKHBvc3RzKSB7XG4gICAgICAgIHBvc3RzLmZvckVhY2gocG9zdCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VMaW5rcyA9IHV0aWxzXzEuRE9NLnFzYSgnYVtkYXRhLXJlZmxpbmtdJywgcG9zdCk7XG4gICAgICAgICAgICByZWZlcmVuY2VMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gK2xpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmxpbmsnKTtcbiAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJblRocmVhZCAmJiB2bS5wb3NpdGlvbiAhPT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBmb3JtIHRvIHRoZSBwb3N0LlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Qb3N0KHBvc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEluc2VydCByZXBseSBtYXJrdXAuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS5maWVsZHMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubGVuZ3RoICYmICFtZXNzYWdlLmVuZHNXaXRoKCdcXG4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRzLm1lc3NhZ2UgKz0gJ1xcbic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRzLm1lc3NhZ2UgKz0gYD4+JHtpZH1cXG5gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRzLm1lc3NhZ2UgKz0gYD4gJHtzZWxlY3Rpb259XFxuYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZUVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCd0aXRsZScsICdRdWljayByZXBseScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnZpZXdNb2RlbC5wb3NpdGlvbiA9ICdoaWRkZW4nO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlVG9Qb3N0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtJyk7XG4gICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICBwb3N0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGZvcm0sIHBvc3QubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZtID0gdGhpcy52aWV3TW9kZWw7XG4gICAgICAgIHZtLnBvc2l0aW9uID0gJ3Bvc3QnO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtb3ZlVG9Cb3R0b20oKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0td3JhcHBlcicpO1xuICAgICAgICBpZiAoZm9ybSAmJiB3cmFwcGVyKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmluc2VydEJlZm9yZShmb3JtLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICB2bS5wb3NpdGlvbiA9ICdib3R0b20nO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9zdGluZ0Zvcm0gPSBQb3N0aW5nRm9ybTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbHV4b25fMSA9IHJlcXVpcmUoXCJsdXhvblwiKTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzRm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgnc2V0dGluZ3NfZm9ybScpO1xuICAgICAgICBpZiAoIXNldHRpbmdzRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3IHZ1ZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgZWw6ICcjc2V0dGluZ3NfZm9ybScsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImNvbnRlbnRfX3NldHRpbmdzLWZvcm0gc2V0dGluZ3MtZm9ybVwiIGlkPVwic2V0dGluZ3NfZm9ybVwiPlxuICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zZWN0aW9uLXRpdGxlXCI+Rm9ybSBzZXR0aW5nczwvaDM+XG4gIDxmaWVsZHNldCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb25cIj5cbiAgICA8bGVnZW5kIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPkZpbGUgcHJldmlldzwvbGVnZW5kPlxuXG4gICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJmb3JtX3ByZXZpZXdfYWxpZ25fcmlnaHRcIiBuYW1lPVwiZm9ybV9wcmV2aWV3X2FsaWduXCJcbiAgICAgICAgdmFsdWU9XCJyaWdodFwiIHYtbW9kZWw9XCJzZXR0aW5ncy5mb3JtUHJldmlld0FsaWduXCIgLz5cblxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIiBmb3I9XCJmb3JtX3ByZXZpZXdfYWxpZ25fcmlnaHRcIj5PbiB0aGUgcmlnaHQ8L2xhYmVsPlxuICAgIDwvcD5cblxuICAgIDxwIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIGlkPVwiZm9ybV9wcmV2aWV3X2FsaWduX2xlZnRcIiBuYW1lPVwiZm9ybV9wcmV2aWV3X2FsaWduXCJcbiAgICAgICAgdmFsdWU9XCJsZWZ0XCIgdi1tb2RlbD1cInNldHRpbmdzLmZvcm1QcmV2aWV3QWxpZ25cIiAvPlxuXG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiIGZvcj1cImZvcm1fcHJldmlld19hbGlnbl9sZWZ0XCI+T24gdGhlIGxlZnQ8L2xhYmVsPlxuICAgIDwvcD5cbiAgPC9maWVsZHNldD5cblxuICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zZWN0aW9uLXRpdGxlXCI+VGltZSBzZXR0aW5nczwvaDM+XG4gIDxmaWVsZHNldCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb25cIj5cbiAgICA8bGVnZW5kIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPkxhbmd1YWdlPC9sZWdlbmQ+XG5cbiAgICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIiB0eXBlPVwicmFkaW9cIiBpZD1cInRpbWVfbG9jYWxlX2RlZmF1bHRcIiBuYW1lPVwidGltZV9sb2NhbGVcIlxuICAgICAgICB2YWx1ZT1cImRlZmF1bHRcIiB2LW1vZGVsPVwic2V0dGluZ3MudGltZUxvY2FsZVwiIC8+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiIGZvcj1cInRpbWVfbG9jYWxlX2RlZmF1bHRcIj5Ccm93c2VyIGRlZmF1bHQ8L2xhYmVsPlxuICAgIDwvcD5cblxuICAgIDxwIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIGlkPVwidGltZV9sb2NhbGVfY3VzdG9tXCIgbmFtZT1cInRpbWVfbG9jYWxlXCJcbiAgICAgICAgdmFsdWU9XCJjdXN0b21cIiB2LW1vZGVsPVwic2V0dGluZ3MudGltZUxvY2FsZVwiIC8+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiIGZvcj1cInRpbWVfbG9jYWxlX2N1c3RvbVwiPkN1c3RvbTwvbGFiZWw+XG5cbiAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIiB0eXBlPVwidGV4dFwiIHYtb246Y2xpY2s9XCJzZXR0aW5ncy50aW1lTG9jYWxlID0gJ2N1c3RvbSdcIlxuICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZUxvY2FsZUN1c3RvbVZhbHVlXCIgcGxhY2Vob2xkZXI9XCJlblwiIC8+XG4gICAgPC9wPlxuICA8L2ZpZWxkc2V0PlxuXG4gIDxmaWVsZHNldCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb25cIj5cbiAgICA8bGVnZW5kIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPkZvcm1hdDwvbGVnZW5kPlxuXG4gICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aW1lX2Zvcm1hdF9kZWZhdWx0XCIgbmFtZT1cInRpbWVfZm9ybWF0XCJcbiAgICAgICAgdmFsdWU9XCJkZWZhdWx0XCIgdi1tb2RlbD1cInNldHRpbmdzLnRpbWVGb3JtYXRcIiAvPlxuXG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiIGZvcj1cInRpbWVfZm9ybWF0X2RlZmF1bHRcIj5Ccm93c2VyIGRlZmF1bHQ8L2xhYmVsPlxuICAgIDwvcD5cblxuICAgIDxwIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiIHR5cGU9XCJyYWRpb1wiIGlkPVwidGltZV9mb3JtYXRfY3VzdG9tXCIgbmFtZT1cInRpbWVfZm9ybWF0XCJcbiAgICAgICAgdmFsdWU9XCJjdXN0b21cIiB2LW1vZGVsPVwic2V0dGluZ3MudGltZUZvcm1hdFwiIC8+XG5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xhYmVsXCIgZm9yPVwidGltZV9mb3JtYXRfY3VzdG9tXCI+Q3VzdG9tPC9sYWJlbD5cblxuICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiIHR5cGU9XCJ0ZXh0XCIgdi1vbjpjbGljaz1cInNldHRpbmdzLnRpbWVGb3JtYXQgPSAnY3VzdG9tJ1wiXG4gICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lRm9ybWF0Q3VzdG9tVmFsdWVcIiBwbGFjZWhvbGRlcj1cIkVFRSwgZGQgTU1NIHl5eXkgSEg6bW06c3NcIiAvPlxuICAgIDwvcD5cblxuICAgIDxwPlNlZSB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbHV4b24vYmxvYi9tYXN0ZXIvZG9jcy9mb3JtYXR0aW5nLm1kI3RhYmxlLW9mLXRva2Vuc1wiPmx1eG9uIGRvY3VtZW50YXRpb248L2E+IGZvciB0aGUgY3VzdG9tIHRva2VucyByZWZlcmVuY2UuPC9wPlxuICA8L2ZpZWxkc2V0PlxuXG4gIDxmaWVsZHNldCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb25cIj5cbiAgICA8bGVnZW5kIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPlRpbWUgem9uZTwvbGVnZW5kPlxuXG4gICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aW1lX3pvbmVfZGVmYXVsdFwiIG5hbWU9XCJ0aW1lX3pvbmVcIlxuICAgICAgICB2YWx1ZT1cImRlZmF1bHRcIiB2LW1vZGVsPVwic2V0dGluZ3MudGltZVpvbmVcIiAvPlxuXG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiIGZvcj1cInRpbWVfem9uZV9kZWZhdWx0XCI+QnJvd3NlciBkZWZhdWx0PC9sYWJlbD5cbiAgICA8L3A+XG5cbiAgICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIiB0eXBlPVwicmFkaW9cIiBpZD1cInRpbWVfem9uZV9maXhlZFwiIG5hbWU9XCJ0aW1lX3pvbmVcIlxuICAgICAgICB2YWx1ZT1cImZpeGVkXCIgdi1tb2RlbD1cInNldHRpbmdzLnRpbWVab25lXCIgLz5cblxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIiBmb3I9XCJ0aW1lX3pvbmVfZml4ZWRcIj5GaXhlZCBVVEMgb2Zmc2V0PC9sYWJlbD5cblxuICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiIHR5cGU9XCJudW1iZXJcIiB2LW9uOmNsaWNrPVwic2V0dGluZ3MudGltZVpvbmUgPSAnZml4ZWQnXCJcbiAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnRpbWVab25lRml4ZWRPZmZzZXRcIiBtaW49XCItOTlcIiBtYXg9XCI5OVwiIC8+XG4gICAgPC9wPlxuICA8L2ZpZWxkc2V0PlxuXG4gIDxmaWVsZHNldCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3NlY3Rpb25cIj5cbiAgICA8bGVnZW5kIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fc2VjdGlvbi10aXRsZVwiPkN1cnJlbnQgZm9ybWF0PC9sZWdlbmQ+XG5cbiAgICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPnt7IHRpbWUgfX08L3A+XG4gIDwvZmllbGRzZXQ+XG5cbiAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zdGF0dXNcIiBpZD1cInN0YXR1c1wiPnt7IHN0YXR1cyB9fTwvcD5cblxuICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2J1dHRvbnNcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIHNldHRpbmdzLWZvcm1fX3NhdmVcIiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIHYtb246Y2xpY2sucHJldmVudD1cInNhdmVTZXR0aW5ncygpXCI+U2F2ZTwvYnV0dG9uPlxuICA8L3A+XG48L2Rpdj5gLFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybVByZXZpZXdBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVMb2NhbGU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVMb2NhbGVDdXN0b21WYWx1ZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRm9ybWF0OiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lRm9ybWF0Q3VzdG9tVmFsdWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVpvbmU6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVab25lRml4ZWRPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICcnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgICAgICAvLyBMb2FkIHNldHRpbmdzIGZyb20gYSBjb29raWVcbiAgICAgICAgICAgICAgICBjb25zdCBzZXR0aW5nc1N0ciA9IHV0aWxzXzEuQ29va2llLmdldCgnc2V0dGluZ3MnLCAne30nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2Uoc2V0dGluZ3NTdHIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzLCBzZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveWVkKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gbHV4b25fMS5EYXRlVGltZS5mcm9tSlNEYXRlKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gdXRpbHNfMS5UaW1lLmZvcm1hdCh0aW1lLCB0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZSA9ICdJbnZhbGlkIGZvcm1hdCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25lIHllYXIuXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyZS5zZXRUaW1lKGV4cGlyZS5nZXRUaW1lKCkgKyAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHNfMS5Db29raWUuc2V0KCdzZXR0aW5ncycsIEpTT04uc3RyaW5naWZ5KHRoaXMuc2V0dGluZ3MpLCBleHBpcmUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbmRpY2F0ZSB0aGF0IHNldHRpbmdzIGFyZSBzYXZlZC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdTZXR0aW5ncyBzYXZlZC4nO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwIC8gMyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuU2V0dGluZ3MgPSBTZXR0aW5ncztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFN0eWxlU3dpdGNoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSB7fTtcbiAgICAgICAgLy8gUGFyc2Ugc2VsZWN0YWJsZSBzdHlsZXMgZnJvbSA8aGVhZD5cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gdXRpbHNfMS5ET00ucXNhKCdsaW5rW3RpdGxlXScpO1xuICAgICAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHN0eWxlLnRpdGxlO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gc3R5bGUuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlc1t0aXRsZV0gPSB1cmw7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEdldCBzZWxlY3RlZCBzdHlsZVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3N0eWxlJywgJ1N5bnRod2F2ZScpO1xuICAgICAgICB0aGlzLnNldFN0eWxlKHNlbGVjdGVkX3N0eWxlKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlX3N3aXRjaGVyID0gdXRpbHNfMS5ET00ucWlkKCdzdHlsZS1zd2l0Y2hlcicpO1xuICAgICAgICBpZiAoc3R5bGVfc3dpdGNoZXIpIHtcbiAgICAgICAgICAgIC8vIFBvcHVsYXRlIHN0eWxlIHN3aXRjaGVyIHdpZGdldFxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gT2JqZWN0LmtleXModGhpcy5zdHlsZXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHN0eWxlc1tpXTtcbiAgICAgICAgICAgICAgICBzdHlsZV9zd2l0Y2hlci5pbm5lckhUTUwgKz0gYDxvcHRpb24gY2xhc3M9XCJzdHlsZS1zd2l0Y2hlcl9fb3B0aW9uXCIgdmFsdWU9XCIke3RpdGxlfVwiPiR7dGl0bGV9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBzdHlsZSBjaGFuZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgIHN0eWxlX3N3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0eWxlKHN0eWxlX3N3aXRjaGVyLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFN0eWxlKHN0eWxlKSB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSB1dGlsc18xLkRPTS5xcygnaGVhZCcpO1xuICAgICAgICAvLyBJZiBubyA8aGVhZD4gZWxlbWVudCwgZG8gbm90aGluZ1xuICAgICAgICBpZiAoIWhlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuRE9NLnFzKCdsaW5rW2RhdGEtc2VsZWN0ZWRdJyk7XG4gICAgICAgIGlmIChzZWxlY3RlZF9zdHlsZSkge1xuICAgICAgICAgICAgLy8gSWYgc3R5bGUgYWxyZWFkeSBzZWxlY3RlZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkX3N0eWxlLnRpdGxlID09PSBzdHlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmV2aW91c2x5IHNlbGVjdGVkIHN0eWxlIGZyb20gPGhlYWQ+XG4gICAgICAgICAgICBzZWxlY3RlZF9zdHlsZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgY3VycmVudGx5IHNlbGVjdGVkIHN0eWxlIHRvIDxoZWFkPlxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnN0eWxlc1tzdHlsZV07XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgICAgIGxpbmsudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIC8vIFNhdmUgc2VsZWN0ZWQgc3R5bGVcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9kYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZXhwaXJhdGlvbl9kYXRlLnNldFRpbWUoZXhwaXJhdGlvbl9kYXRlLmdldFRpbWUoKSArIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICB1dGlsc18xLkNvb2tpZS5zZXQoJ3RpbnlpYl9zdHlsZScsIHN0eWxlLCBleHBpcmF0aW9uX2RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3R5bGVTd2l0Y2ggPSBTdHlsZVN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBldmVudEJ1cyA9IG5ldyB2dWVfMS5kZWZhdWx0KCk7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRCdXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFdmVudHM7XG4oZnVuY3Rpb24gKEV2ZW50cykge1xuICAgIEV2ZW50c1tcIlJlYWR5XCJdID0gXCJyZWFkeVwiO1xuICAgIEV2ZW50c1tcIlBvc3RzSW5zZXJ0ZWRcIl0gPSBcInBvc3RzX2luc2VydGVkXCI7XG4gICAgRXZlbnRzW1wiUG9zdENyZWF0ZWRcIl0gPSBcInBvc3RfY3JlYXRlZFwiO1xuICAgIEV2ZW50c1tcIkluc2VydE1hcmt1cFwiXSA9IFwiaW5zZXJ0X21hcmt1cFwiO1xufSkoRXZlbnRzID0gZXhwb3J0cy5FdmVudHMgfHwgKGV4cG9ydHMuRXZlbnRzID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGV2ZW50X2J1c18xID0gcmVxdWlyZShcIi4vZXZlbnQtYnVzXCIpO1xuZXhwb3J0cy5ldmVudEJ1cyA9IGV2ZW50X2J1c18xLmV2ZW50QnVzO1xudmFyIGV2ZW50c18xID0gcmVxdWlyZShcIi4vZXZlbnRzXCIpO1xuZXhwb3J0cy5FdmVudHMgPSBldmVudHNfMS5FdmVudHM7XG52YXIgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuZXhwb3J0cy5TZXR0aW5ncyA9IHNldHRpbmdzXzEuU2V0dGluZ3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtUHJldmlld0FsaWduLCB0aW1lTG9jYWxlLCB0aW1lTG9jYWxlQ3VzdG9tVmFsdWUsIHRpbWVab25lLCB0aW1lWm9uZUZpeGVkT2Zmc2V0LCB0aW1lRm9ybWF0LCB0aW1lRm9ybWF0Q3VzdG9tVmFsdWUpIHtcbiAgICAgICAgdGhpcy5mb3JtUHJldmlld0FsaWduID0gZm9ybVByZXZpZXdBbGlnbjtcbiAgICAgICAgdGhpcy50aW1lTG9jYWxlID0gdGltZUxvY2FsZTtcbiAgICAgICAgdGhpcy50aW1lTG9jYWxlQ3VzdG9tVmFsdWUgPSB0aW1lTG9jYWxlQ3VzdG9tVmFsdWU7XG4gICAgICAgIHRoaXMudGltZVpvbmUgPSB0aW1lWm9uZTtcbiAgICAgICAgdGhpcy50aW1lWm9uZUZpeGVkT2Zmc2V0ID0gdGltZVpvbmVGaXhlZE9mZnNldDtcbiAgICAgICAgdGhpcy50aW1lRm9ybWF0ID0gdGltZUZvcm1hdDtcbiAgICAgICAgdGhpcy50aW1lRm9ybWF0Q3VzdG9tVmFsdWUgPSB0aW1lRm9ybWF0Q3VzdG9tVmFsdWU7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGUoc2V0dGluZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXR0aW5ncyhzZXR0aW5ncy5mb3JtUHJldmlld0FsaWduLCBzZXR0aW5ncy50aW1lTG9jYWxlLCBzZXR0aW5ncy50aW1lTG9jYWxlQ3VzdG9tVmFsdWUsIHNldHRpbmdzLnRpbWVab25lLCBzZXR0aW5ncy50aW1lWm9uZUZpeGVkT2Zmc2V0LCBzZXR0aW5ncy50aW1lRm9ybWF0LCBzZXR0aW5ncy50aW1lRm9ybWF0Q3VzdG9tVmFsdWUpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2V0dGluZ3MgPSBTZXR0aW5ncztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29va2llIHtcbiAgICBzdGF0aWMgZ2V0KG5hbWUsIF9kZWZhdWx0ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb29raWVfc3RyID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcbiAgICAgICAgY29uc3QgY29va2llX3BhcnRzID0gY29va2llX3N0ci5zcGxpdChgOyAke25hbWV9PWApO1xuICAgICAgICBpZiAoY29va2llX3BhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gY29va2llX3BhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWVfZW5jKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQobmFtZSwgdmFsdWUsIGV4cGlyYXRpb24pIHtcbiAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9zdHIgPSBleHBpcmF0aW9uLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWVfZW5jfTsgcGF0aD0vOyBleHBpcmVzPSR7ZXhwaXJhdGlvbl9zdHJ9YDtcbiAgICB9XG59XG5leHBvcnRzLkNvb2tpZSA9IENvb2tpZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRE9NIHtcbiAgICBzdGF0aWMgcWlkKGlkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICAgIHN0YXRpYyBxcyhzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuICAgIHN0YXRpYyBxc2Eoc2VsZWN0b3IsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRMaXN0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRMaXN0KTtcbiAgICB9XG59XG5leHBvcnRzLkRPTSA9IERPTTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvb2tpZV8xID0gcmVxdWlyZShcIi4vY29va2llXCIpO1xuZXhwb3J0cy5Db29raWUgPSBjb29raWVfMS5Db29raWU7XG52YXIgZG9tXzEgPSByZXF1aXJlKFwiLi9kb21cIik7XG5leHBvcnRzLkRPTSA9IGRvbV8xLkRPTTtcbnZhciB0aW1lXzEgPSByZXF1aXJlKFwiLi90aW1lXCIpO1xuZXhwb3J0cy5UaW1lID0gdGltZV8xLlRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFRpbWUge1xuICAgIHN0YXRpYyBmb3JtYXQodGltZSwgc2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gc2V0dGluZ3MudGltZUxvY2FsZTtcbiAgICAgICAgY29uc3QgbG9jYWxlVmFsdWUgPSBzZXR0aW5ncy50aW1lTG9jYWxlQ3VzdG9tVmFsdWU7XG4gICAgICAgIGNvbnN0IHpvbmUgPSBzZXR0aW5ncy50aW1lWm9uZTtcbiAgICAgICAgY29uc3Qgem9uZUZpeGVkT2Zmc2V0ID0gc2V0dGluZ3MudGltZVpvbmVGaXhlZE9mZnNldDtcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gc2V0dGluZ3MudGltZUZvcm1hdDtcbiAgICAgICAgY29uc3QgZm9ybWF0VmFsdWUgPSBzZXR0aW5ncy50aW1lRm9ybWF0Q3VzdG9tVmFsdWU7XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5zZXRMb2NhbGUobG9jYWxlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh6b25lID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRTdHIgPSAnVVRDJyArICh6b25lRml4ZWRPZmZzZXQgPj0gMCA/ICcrJyA6ICcnKSArIHpvbmVGaXhlZE9mZnNldC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGltZSA9IHRpbWUuc2V0Wm9uZShvZmZzZXRTdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdChmb3JtYXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdCgnZC5MTC55eXl5IEhIOm1tOnNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRpbWUgPSBUaW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBsdXhvbjsiLCJtb2R1bGUuZXhwb3J0cyA9IFZ1ZTsiXSwic291cmNlUm9vdCI6IiJ9