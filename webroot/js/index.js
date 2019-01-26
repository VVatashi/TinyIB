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

/***/ "./ts/api.ts":
/*!*******************!*\
  !*** ./ts/api.ts ***!
  \*******************/
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
Object.defineProperty(exports, "__esModule", { value: true });
class Api {
    static createPost(request, onProgress) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const url = `${window.baseUrl}/ajax/post/create`;
                const data = new FormData();
                data.append('parent', request.parent.toString());
                data.append('subject', request.subject);
                data.append('name', request.name);
                data.append('message', request.message);
                data.append('file', request.file);
                const xhr = new XMLHttpRequest();
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.withCredentials = true;
                if (onProgress) {
                    xhr.upload.addEventListener('progress', onProgress.bind(this));
                }
                xhr.addEventListener('readystatechange', e => {
                    if (xhr.readyState !== XMLHttpRequest.DONE) {
                        return;
                    }
                    if (xhr.status === 201) {
                        resolve(xhr.getResponseHeader('Location'));
                    }
                    else {
                        const data = JSON.parse(xhr.responseText);
                        if (data && data.error) {
                            reject(data.error);
                        }
                        else {
                            reject(`${xhr.status} ${xhr.statusText}`);
                        }
                    }
                });
                xhr.send(data);
            });
        });
    }
}
exports.Api = Api;


/***/ }),

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
const settings_1 = __webpack_require__(/*! ./settings */ "./ts/settings.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./ts/utils/index.ts");
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
    const settings = settings_1.SettingsManager.load();
    if (settings.common.smoothScroll) {
        document.body.classList.add('smooth-scroll');
    }
    const layout = utils_1.DOM.qs('.layout');
    if (layout) {
        layout.classList.add('layout--' + settings.common.layout);
        if (!settings.common.showPostHeaderReflinkIcon) {
            layout.classList.add('layout--hide-post-header-reflink-icon');
        }
        if (!settings.common.showPostReflinkIcon) {
            layout.classList.add('layout--hide-post-reflink-icon');
        }
    }
    const formWrapper = utils_1.DOM.qs('.content__posting-form-wrapper');
    if (formWrapper) {
        formWrapper.classList.add('content__posting-form-wrapper--' + settings.form.align);
    }
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
        const handle = this.getDragHandle();
        if (!handle) {
            return;
        }
        this.draggableResize = this.onDraggableResize.bind(this);
        this.draggableMouseDown = this.onDraggableMouseDown.bind(this);
        window.addEventListener('resize', this.draggableResize);
        if (pointerEvents) {
            handle.addEventListener('pointerdown', this.draggableMouseDown);
        }
        else {
            if (touchEvents) {
                handle.addEventListener('touchstart', this.draggableMouseDown);
            }
            handle.addEventListener('mousedown', this.draggableMouseDown);
        }
        //this.setPosition(this.checkBounds(this.getPosition()));
    },
    beforeDestroy() {
        if (this.draggableResize) {
            window.removeEventListener('resize', this.draggableResize);
        }
        const handle = this.getDragHandle();
        if (handle) {
            if (pointerEvents) {
                handle.removeEventListener('pointerdown', this.draggableMouseDown);
            }
            else {
                if (touchEvents) {
                    handle.removeEventListener('touchstart', this.draggableMouseDown);
                }
                handle.removeEventListener('mousedown', this.draggableMouseDown);
            }
        }
    },
    methods: {
        getDragHandle() {
            return null;
        },
        getDraggable() {
            return null;
        },
        getPosition() {
            const draggable = this.getDraggable();
            if (!draggable) {
                return { x: 0, y: 0 };
            }
            return {
                x: draggable.offsetLeft,
                y: draggable.offsetTop,
            };
        },
        setPosition(coords) {
            const draggable = this.getDraggable();
            if (!draggable) {
                return;
            }
            draggable.style.left = `${coords.x}px`;
            draggable.style.top = `${coords.y}px`;
        },
        checkBounds({ x, y }) {
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
        onDraggableResize() {
            this.setPosition(this.checkBounds(this.getPosition()));
        },
        onDraggableMouseDown(e) {
            const draggable = this.getDraggable();
            if (!draggable) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            this._draggablePosition = this.getPosition();
            if (e instanceof MouseEvent
                || pointerEvents && e instanceof PointerEvent) {
                this._dragStart = {
                    x: e.clientX,
                    y: e.clientY,
                };
            }
            else if (touchEvents && e instanceof TouchEvent) {
                const touch = e.touches[0];
                this._dragStart = {
                    x: touch.clientX,
                    y: touch.clientY,
                };
            }
            if (!this.draggableMouseMove) {
                this.draggableMouseMove = this.onDraggableMouseMove.bind(this);
                if (pointerEvents) {
                    window.addEventListener('pointermove', this.draggableMouseMove);
                }
                else {
                    if (touchEvents) {
                        window.addEventListener('touchmove', this.draggableMouseMove);
                    }
                    window.addEventListener('mousemove', this.draggableMouseMove);
                }
            }
            if (!this.draggableMouseUp) {
                this.draggableMouseUp = this.onDraggableMouseUp.bind(this);
                if (pointerEvents) {
                    window.addEventListener('pointerup', this.draggableMouseUp);
                    window.addEventListener('pointercancel', this.draggableMouseUp);
                }
                else {
                    if (touchEvents) {
                        window.addEventListener('touchend', this.draggableMouseUp);
                        window.addEventListener('touchcancel', this.draggableMouseUp);
                    }
                    window.addEventListener('mouseup', this.draggableMouseUp);
                }
            }
        },
        onDraggableMouseMove(e) {
            const draggable = this.getDraggable();
            if (!draggable) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            let deltaX = 0;
            let deltaY = 0;
            if (e instanceof MouseEvent
                || pointerEvents && e instanceof PointerEvent) {
                deltaX = e.clientX - this._dragStart.x;
                deltaY = e.clientY - this._dragStart.y;
            }
            else if (touchEvents && e instanceof TouchEvent) {
                const touch = e.touches[0];
                deltaX = touch.clientX - this._dragStart.x;
                deltaY = touch.clientY - this._dragStart.y;
            }
            this.setPosition(this.checkBounds({
                x: this._draggablePosition.x + deltaX,
                y: this._draggablePosition.y + deltaY,
            }));
        },
        onDraggableMouseUp(e) {
            if (this.draggableMouseMove) {
                if (pointerEvents) {
                    window.removeEventListener('pointermove', this.draggableMouseMove);
                }
                else {
                    if (touchEvents) {
                        window.removeEventListener('touchmove', this.draggableMouseMove);
                    }
                    window.removeEventListener('mousemove', this.draggableMouseMove);
                }
            }
            if (this.draggableMouseUp) {
                if (pointerEvents) {
                    window.removeEventListener('pointerup', this.draggableMouseUp);
                    window.removeEventListener('pointercancel', this.draggableMouseUp);
                }
                else {
                    if (touchEvents) {
                        window.removeEventListener('touchend', this.draggableMouseUp);
                        window.removeEventListener('touchcancel', this.draggableMouseUp);
                    }
                    window.removeEventListener('mouseup', this.draggableMouseUp);
                }
            }
            this.draggableMouseMove = null;
            this.draggableMouseUp = null;
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
  <span class="file-preview__info"
    v-if="type">{{ info }}</span>

  <img class="file-preview__content"
    v-bind:src="src"
    v-bind:title="info"
    v-if="type === 'image' && src" />
  <video class="file-preview__content" autoplay loop muted
    v-bind:src="src"
    v-bind:title="info"
    v-else-if="type === 'video' && src"></video>
  <span class="file-preview__label"
    v-else>Upload file</span>

  <slot></slot>
</div>`,
    props: ['file'],
    data() {
        return {
            src: null,
        };
    },
    computed: {
        name() {
            if (!this.file || !this.file.name) {
                return '';
            }
            return this.file.name;
        },
        size() {
            if (!this.file) {
                return 0;
            }
            return this.file.size;
        },
        sizeFormatted() {
            const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
            let size = this.size;
            let i = 0;
            for (; i < units.length && size >= 1000; ++i) {
                size /= 1000;
            }
            return `${size.toFixed(2)} ${units[i]}`;
        },
        info() {
            return this.name
                ? `${this.name}, ${this.sizeFormatted}`
                : this.sizeFormatted;
        },
        type() {
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
            const name = this.name;
            if (name.endsWith('.webm') || name.endsWith('.mp4')) {
                return 'video';
            }
            else if (name.endsWith('.mp3')) {
                return 'audio';
            }
            return 'image';
        },
    },
    watch: {
        file(value) {
            if (!value) {
                this.src = null;
                return;
            }
            const reader = new FileReader();
            reader.addEventListener('load', e => {
                this.src = e.target.result;
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
const api_1 = __webpack_require__(/*! ../api */ "./ts/api.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class PostingForm {
    constructor() {
        this.isInThread = false;
        this.settings = __1.SettingsManager.load();
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
        const component = this;
        this.viewModel = new vue_1.default({
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
      <span class="posting-form__reset"
        v-on:click.stop="resetFields()" title="Clear form"></span>

      <span class="posting-form__float"
        v-if="position !== 'float' && mode !== 'mobile'"
        v-on:click.stop="makeFloating()" title="Floating form"></span>

      <span class="posting-form__restore"
        v-if="position === 'float' && mode !== 'mobile'"
        v-on:click.stop="moveToBottom()" title="Move form to bottom"></span>

      <span class="posting-form__close"
        v-on:click.stop="onCloseClick()" title="Close form"></span>
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
      <span class="posting-form__preview-remove"
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
          <sub>sub</sub>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('sup')">
          <sup>sup</sup>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('code')">
          <code>code</code>
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
                    hidden: true,
                    position: component.settings.form.saveFormState
                        && component.settings.form.float
                        ? 'float' : 'bottom',
                    mode: 'mobile',
                };
            },
            computed: {
                threadId() {
                    return threadId;
                },
                settings() {
                    return component.settings.form;
                },
            },
            created() {
                if (component.settings.form.saveSubject) {
                    // Load saved subject.
                    const subject = localStorage['posting-form.subject'];
                    if (subject) {
                        this.fields.subject = subject;
                    }
                }
                if (component.settings.form.saveName) {
                    // Load saved name.
                    const name = localStorage['posting-form.name'];
                    if (name) {
                        this.fields.name = name;
                    }
                }
                this.updateMode();
                this._resize = this.updateMode.bind(this);
                window.addEventListener('resize', this._resize);
            },
            mounted() {
                if (this.position === 'float') {
                    const position = component.settings.form.floatPosition;
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
                setPosition(coords) {
                    const draggable = this.getDraggable();
                    if (!draggable) {
                        return;
                    }
                    draggable.style.left = `${coords.x}px`;
                    draggable.style.top = `${coords.y}px`;
                    component.settings.form.floatPosition = coords;
                    __1.SettingsManager.save(component.settings);
                },
                onDraggableResize() {
                    if (this.hidden) {
                        return;
                    }
                    this.setPosition(this.checkBounds(this.getPosition()));
                },
                resetFields() {
                    if (!component.settings.form.saveSubject) {
                        this.fields.subject = '';
                    }
                    if (!component.settings.form.saveName) {
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
                updateMode() {
                    this.mode = window.innerWidth < 600 ? 'mobile' : 'default';
                    if (this.mode === 'mobile' && this.position === 'float') {
                        component.moveToBottom();
                    }
                },
                onCloseClick() {
                    component.hide();
                    component.updateReplyButton();
                },
                onSubjectChange() {
                    // Save subject.
                    localStorage['posting-form.subject'] = this.fields.subject;
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
                    if (selection.length || component.settings.form.insertTagsInPairs) {
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
                    const messageEl = this.$refs.message;
                    const selection = {
                        begin: messageEl.selectionStart,
                        end: messageEl.selectionEnd,
                        length: messageEl.selectionEnd - messageEl.selectionStart,
                    };
                    const message = this.fields.message;
                    const before = message.substring(0, selection.begin);
                    const after = message.substring(selection.end);
                    const newLineBefore = before.length && !before.endsWith('\n') ? '\n' : '';
                    const newLineAfter = !after.length || !after.startsWith('\n') ? '\n' : '';
                    const quoteText = window.getSelection().toString();
                    const quote = `${newLineBefore}> ${quoteText}${newLineAfter}`;
                    this.fields.message = [
                        before,
                        quote,
                        after,
                    ].join('');
                    this.$nextTick(() => {
                        messageEl.focus();
                        messageEl.selectionStart = selection.begin + quote.length;
                        messageEl.selectionEnd = selection.begin + quote.length;
                    });
                },
                onSubmit() {
                    return __awaiter(this, void 0, void 0, function* () {
                        this.disabled = true;
                        // Apply replaces to the message.
                        const replaces = component.settings.form.replaces;
                        const message = replaces.reduce((message, item) => {
                            const regexp = new RegExp(item.pattern, 'gm');
                            return message.replace(regexp, item.replace);
                        }, this.fields.message);
                        try {
                            const location = yield api_1.Api.createPost({
                                parent: threadId,
                                subject: this.fields.subject,
                                name: this.fields.name,
                                message: message,
                                file: this.file,
                            }, e => {
                                const progressPercent = Math.ceil(e.loaded / e.total * 100);
                                this.status = `Uploading... ${progressPercent}%`;
                            });
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
                                if (location) {
                                    window.location.href = location;
                                }
                            }
                        }
                        catch (e) {
                            this.status = `Error: ${e}`;
                        }
                        this.disabled = false;
                        if (component.settings.form.scrollBottom) {
                            // Scroll to the bottom.
                            const scrollingEl = document.scrollingElement || document.body;
                            setTimeout(() => {
                                scrollingEl.scrollTop = scrollingEl.scrollHeight;
                            }, 300);
                        }
                    });
                },
            },
        });
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.addEventListener('click', () => {
                const vm = this.viewModel;
                if (vm.position === 'post'
                    || !vm.hidden && vm.position === 'float') {
                    this.moveToBottom();
                }
                else {
                    this.show();
                    this.updateReplyButton();
                }
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
                const messageEl = vm.$refs.message;
                const selection = {
                    begin: messageEl.selectionStart,
                    end: messageEl.selectionEnd,
                    length: messageEl.selectionEnd - messageEl.selectionStart,
                };
                const message = vm.fields.message;
                const before = message.substring(0, selection.begin);
                const after = message.substring(selection.end);
                const newLineBefore = before.length && !before.endsWith('\n') ? '\n' : '';
                const newLineAfter = !after.length || !after.startsWith('\n') ? '\n' : '';
                const id = target.getAttribute('data-reflink');
                const quoteText = window.getSelection().toString();
                const lastQuoteIndex = message.lastIndexOf('>>', selection.begin);
                const quoteSamePost = lastQuoteIndex !== -1
                    && message.lastIndexOf(`>>${id}`, selection.begin) >= lastQuoteIndex;
                // If quoting the same post again, not insert id.
                let quote = '';
                if (quoteSamePost) {
                    quote = quoteText
                        ? `${newLineBefore}> ${quoteText}${newLineAfter}`
                        : '';
                }
                else {
                    quote = quoteText
                        ? `${newLineBefore}>>${id}\n> ${quoteText}${newLineAfter}`
                        : `${newLineBefore}>>${id}${newLineAfter}`;
                }
                // Insert reply markup.
                vm.fields.message = [
                    before,
                    quote,
                    after,
                ].join('');
                if (this.isInThread) {
                    if (quoteSamePost && !quoteText && !vm.hidden && vm.position !== 'bottom') {
                        this.hide();
                    }
                    else {
                        if (vm.position !== 'float') {
                            // Move form to the post.
                            const post = target.closest('.post');
                            if (post) {
                                this.moveToPost(post);
                            }
                            else {
                                this.moveToBottom();
                            }
                        }
                        else {
                            this.show();
                        }
                    }
                }
                vm.$nextTick(() => {
                    messageEl.focus();
                    messageEl.selectionStart = selection.begin + quote.length;
                    messageEl.selectionEnd = selection.begin + quote.length;
                });
            });
        }
    }
    onPostsInserted(posts) {
        if (this.settings.common.scrollToNewPosts) {
            const scrollingEl = document.scrollingElement || document.body;
            // If in the bottom area.
            const bottomOffset = scrollingEl.scrollHeight - scrollingEl.scrollTop;
            const bottomArea = 1.5 * window.innerHeight;
            if (bottomOffset < bottomArea) {
                // Scroll to the bottom.
                setTimeout(() => {
                    scrollingEl.scrollTop = scrollingEl.scrollHeight;
                }, 300);
            }
        }
        posts.forEach(post => {
            // Move reply icon after DE hide icon.
            const replyIcon = utils_1.DOM.qs('.post-header__reflink-wrapper > .post-header__reflink-icon', post);
            const deHide = utils_1.DOM.qs('.de-btn-hide', post);
            if (replyIcon && deHide) {
                deHide.parentElement.insertBefore(replyIcon, deHide.nextSibling);
            }
        });
    }
    updateReplyButton() {
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (!showButton) {
            return;
        }
        if (this.viewModel.hidden || this.viewModel.position !== 'bottom') {
            showButton.classList.remove('hidden');
        }
        else {
            showButton.classList.add('hidden');
        }
    }
    hide() {
        this.viewModel.hidden = true;
    }
    show() {
        this.viewModel.hidden = false;
    }
    makeFloating() {
        this.show();
        const vm = this.viewModel;
        vm.position = 'float';
        this.settings.form.float = true;
        __1.SettingsManager.save(this.settings);
        const position = this.settings.form.floatPosition;
        vm.setPosition(vm.checkBounds(position));
        this.updateReplyButton();
    }
    moveToPost(post) {
        const form = utils_1.DOM.qid('posting-form');
        if (form) {
            post.parentElement.insertBefore(form, post.nextSibling);
        }
        this.show();
        const vm = this.viewModel;
        vm.position = 'post';
        this.settings.form.float = false;
        __1.SettingsManager.save(this.settings);
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.classList.remove('hidden');
        }
        this.updateReplyButton();
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
        this.show();
        const vm = this.viewModel;
        vm.position = 'bottom';
        this.settings.form.float = false;
        __1.SettingsManager.save(this.settings);
        this.updateReplyButton();
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
        const Checkbox = vue_1.default.extend({
            template: `
<div class="settings-form__row">
  <label class="settings-form__label">
    <input type="checkbox" class="settings-form__checkbox"
      :value="value"
      :checked="checked"
      @change="onInput" />
    <slot></slot>
  </label>
</div>`,
            model: {
                prop: 'checked',
                event: 'change',
            },
            props: {
                value: {
                    type: Boolean,
                    default: true,
                },
                checked: {
                    type: Boolean,
                    default: false,
                },
            },
            methods: {
                onInput(e) {
                    this.$emit('change', !this.checked);
                },
            },
        });
        const RadioButton = vue_1.default.extend({
            template: `
<div class="settings-form__row">
  <label class="settings-form__label">
    <input type="radio" class="settings-form__radio"
      :value="value"
      :checked="value == selectedValue"
      @change="onInput" />
    <slot></slot>
  </label>
</div>`,
            model: {
                prop: 'selectedValue',
                event: 'change',
            },
            props: {
                value: String,
                selectedValue: String,
            },
            methods: {
                onInput(e) {
                    this.$emit('change', this.value);
                },
            },
        });
        this.viewModel = new vue_1.default({
            el: '#settings_form',
            template: `
<div class="content__settings-form settings-form" id="settings_form">
  <ul class="settings-form__tabs">
    <li class="settings-form__tab"
      :class="{ 'settings-form__tab--active': tab === 'common' }"
      @click="tab = 'common'">Common</li>

    <li class="settings-form__tab"
      :class="{ 'settings-form__tab--active': tab === 'form' }"
      @click="tab = 'form'">Form</li>

    <li class="settings-form__tab"
      :class="{ 'settings-form__tab--active': tab === 'time' }"
      @click="tab = 'time'">Time</li>
  </ul>

  <div class="settings-form__tab-content"
    v-show="tab === 'common'">
    <h3 class="settings-form__option-title">Thread Alignment</h3>

    <x-radio-button v-model="settings.common.layout" :value="'left'">
      On the left
    </x-radio-button>

    <x-radio-button v-model="settings.common.layout" :value="'center'">
      In the center
    </x-radio-button>

    <h3 class="settings-form__option-title">Posts</h3>

    <x-checkbox v-model="settings.common.showPostHeaderReflinkIcon">
      Show reply icon in the post header
    </x-checkbox>

    <x-checkbox v-model="settings.common.showPostReflinkIcon">
      Show reply icon in the bottom right corner of post message
    </x-checkbox>

    <x-checkbox v-model="settings.common.scrollToNewPosts">
      Scroll to new posts
    </x-checkbox>

    <x-checkbox v-model="settings.common.smoothScroll">
      Smooth scrolling
    </x-checkbox>
  </div>

  <div class="settings-form__tab-content"
    v-show="tab === 'form'">
    <h3 class="settings-form__option-title">Form Behaviour</h3>

    <x-checkbox v-model="settings.form.scrollBottom">
      Scroll to the bottom after posting
    </x-checkbox>

    <x-checkbox v-model="settings.form.saveSubject">
      Save subject after posting
    </x-checkbox>

    <x-checkbox v-model="settings.form.saveName">
      Save name after posting
    </x-checkbox>

    <x-checkbox v-model="settings.form.saveFormState">
      Save form floating state on page reload
    </x-checkbox>

    <h3 class="settings-form__option-title">Form Alignment</h3>

    <x-radio-button v-model="settings.form.align" :value="'left'">
      On the left
    </x-radio-button>

    <x-radio-button v-model="settings.form.align" :value="'center'">
      In the center
    </x-radio-button>

    <h3 class="settings-form__option-title">Preview Alignment</h3>

    <x-radio-button v-model="settings.form.previewAlign" :value="'left'">
      On the left
    </x-radio-button>

    <x-radio-button v-model="settings.form.previewAlign" :value="'right'">
      On the right
    </x-radio-button>

    <h3 class="settings-form__option-title">Markup</h3>

    <x-checkbox v-model="settings.form.showMarkup">
      Show markup buttons
    </x-checkbox>

    <x-checkbox v-model="settings.form.showMarkupMobile">
      Show markup buttons (mobile)
    </x-checkbox>

    <x-checkbox v-model="settings.form.insertTagsInPairs">
      Insert tags in pairs
    </x-checkbox>

    <h3 class="settings-form__option-title">Replaces</h3>

    <ul class="settings-form__list">
      <li class="settings-form__list-item"
        v-for="(item, index) in settings.form.replaces">
        <input type="text" class="input settings-form__text"
          v-model="item.pattern" placeholder="Pattern" />

        <input type="text" class="input settings-form__text"
          v-model="item.replace" placeholder="Replace" />

        <button class="button"
          @click="removeReplaceAt(index)">Remove</button>
      </li>

      <li class="settings-form__list-item">
        <input type="text" class="input settings-form__text"
          v-model="newReplace.pattern" placeholder="Pattern" />

        <input type="text" class="input settings-form__text"
          v-model="newReplace.replace" placeholder="Replace" />

        <button class="button"
          @click="addReplace(newReplace)">Add</button>
      </li>
    </ul>
  </div>

  <div class="settings-form__tab-content"
    v-show="tab === 'time'">
    <h3 class="settings-form__option-title">Language</h3>

    <x-radio-button v-model="settings.time.locale" :value="'default'">
      Browser default
    </x-radio-button>

    <x-radio-button v-model="settings.time.locale" :value="'custom'">
      Custom
      <input type="text" class="input settings-form__text" placeholder="en"
        @click="settings.time.locale = 'custom'"
        v-model="settings.time.localeCustom" />
    </x-radio-button>

    <h3 class="settings-form__option-title">Format</h3>

    <x-radio-button v-model="settings.time.format" :value="'default'">
      Browser default
    </x-radio-button>

    <x-radio-button v-model="settings.time.format" :value="'custom'">
      Custom
      <input type="text" class="input settings-form__text"
        placeholder="EEE, dd MMM yyyy HH:mm:ss"
        @click="settings.time.format = 'custom'"
        v-model="settings.time.formatCustom" />
    </x-radio-button>

    <p>
      See the
      <a href="https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens">
        luxon documentation
      </a>
      for the custom tokens reference.
    </p>

    <h3 class="settings-form__option-title">Time zone</h3>

    <x-radio-button v-model="settings.time.zone" :value="'default'">
      Browser default
    </x-radio-button>

    <x-radio-button v-model="settings.time.zone" :value="'fixed'">
      Fixed UTC offset
      <input type="number" class="input settings-form__text"
        min="-99" max="99"
        @click="settings.time.zone = 'fixed'"
        v-model="settings.time.zoneFixed" />
    </x-radio-button>

    <h3 class="settings-form__option-title">Current format</h3>

    <p>{{ time }}</p>
  </div>

  <div class="settings-form__footer">
    <div class="settings-form__buttons">
      <p class="settings-form__status" >{{ status }}</p>

      <button type="button" class="button settings-form__save"
        @click.prevent="saveSettings()">Save</button>
    </div>
  </div>
</div>`,
            data() {
                return {
                    settings: null,
                    tab: 'common',
                    newReplace: {
                        pattern: '',
                        replace: '',
                    },
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
                removeReplaceAt(index) {
                    this.settings.form.replaces.splice(index, 1);
                },
                addReplace(item) {
                    try {
                        new RegExp(item.pattern, 'gm');
                    }
                    catch (e) {
                        this.status = `Invalid regular expression: ${e.message}`;
                        return;
                    }
                    this.settings.form.replaces.push(Object.assign({}, item));
                    this.newReplace = { pattern: '', replace: '' };
                },
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
            components: {
                'x-checkbox': Checkbox,
                'x-radio-button': RadioButton,
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
            if (!style.hasAttribute('data-selected')) {
                style.remove();
            }
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
        console.log(head);
        // If no <head> element, do nothing
        if (!head) {
            return;
        }
        const selected_style = utils_1.DOM.qs('link[data-selected]');
        console.log(selected_style);
        if (selected_style) {
            // If style already selected, do nothing
            if (selected_style.title === style) {
                return;
            }
            // Remove previously selected style from <head>
            selected_style.remove();
        }
        console.log(style);
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
var api_1 = __webpack_require__(/*! ./api */ "./ts/api.ts");
exports.Api = api_1.Api;
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
    common: {
        layout: 'left',
        showPostHeaderReflinkIcon: true,
        showPostReflinkIcon: false,
        scrollToNewPosts: true,
        smoothScroll: true,
    },
    form: {
        align: 'center',
        previewAlign: 'right',
        scrollBottom: true,
        showMarkup: true,
        showMarkupMobile: false,
        insertTagsInPairs: true,
        saveFormState: false,
        saveSubject: false,
        saveName: true,
        float: false,
        floatPosition: { x: 100, y: 100 },
        replaces: [],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBpLnRzIiwid2VicGFjazovLy8uL3RzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2NhcHRjaGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9jb3JyZWN0LXRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9kZWxldGUtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2RyYWdnYWJsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2ZpbGUtcHJldmlldy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbmV3LXBvc3RzLWRldGVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdC1yZWZlcmVuY2UtbWFwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdGluZy1mb3JtLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9zdHlsZS1zd2l0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXZlbnQtYnVzLnRzIiwid2VicGFjazovLy8uL3RzL2V2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90cy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9jb29raWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL3RpbWUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibHV4b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJWdWVcIiJd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TyxDQUFDLGtDQUFRO0FBQzdCOzs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLHVCOzs7Ozs7Ozs7OztBQ0FBLHFCIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2FwcC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBBcGkge1xuICAgIHN0YXRpYyBjcmVhdGVQb3N0KHJlcXVlc3QsIG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FqYXgvcG9zdC9jcmVhdGVgO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgncGFyZW50JywgcmVxdWVzdC5wYXJlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3N1YmplY3QnLCByZXF1ZXN0LnN1YmplY3QpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCduYW1lJywgcmVxdWVzdC5uYW1lKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbWVzc2FnZScsIHJlcXVlc3QubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCByZXF1ZXN0LmZpbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgb25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGAke3hoci5zdGF0dXN9ICR7eGhyLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkFwaSA9IEFwaTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHNcIik7XG5jb25zdCBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5uZXcgY29tcG9uZW50c18xLkNhcHRjaGEoKTtcbm5ldyBjb21wb25lbnRzXzEuQ29ycmVjdFRpbWUoKTtcbm5ldyBjb21wb25lbnRzXzEuRGVsZXRlRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0aW5nRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0UmVmZXJlbmNlTWFwKCk7XG5uZXcgY29tcG9uZW50c18xLlNldHRpbmdzKCk7XG5uZXcgY29tcG9uZW50c18xLlN0eWxlU3dpdGNoKCk7XG5uZXcgY29tcG9uZW50c18xLk5ld1Bvc3RzRGV0ZWN0b3IoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBlID0+IHtcbiAgICBfMS5ldmVudEJ1cy4kZW1pdChfMS5FdmVudHMuUmVhZHkpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gc2V0dGluZ3NfMS5TZXR0aW5nc01hbmFnZXIubG9hZCgpO1xuICAgIGlmIChzZXR0aW5ncy5jb21tb24uc21vb3RoU2Nyb2xsKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc21vb3RoLXNjcm9sbCcpO1xuICAgIH1cbiAgICBjb25zdCBsYXlvdXQgPSB1dGlsc18xLkRPTS5xcygnLmxheW91dCcpO1xuICAgIGlmIChsYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dC0tJyArIHNldHRpbmdzLmNvbW1vbi5sYXlvdXQpO1xuICAgICAgICBpZiAoIXNldHRpbmdzLmNvbW1vbi5zaG93UG9zdEhlYWRlclJlZmxpbmtJY29uKSB7XG4gICAgICAgICAgICBsYXlvdXQuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LS1oaWRlLXBvc3QtaGVhZGVyLXJlZmxpbmstaWNvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2V0dGluZ3MuY29tbW9uLnNob3dQb3N0UmVmbGlua0ljb24pIHtcbiAgICAgICAgICAgIGxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQtLWhpZGUtcG9zdC1yZWZsaW5rLWljb24nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBmb3JtV3JhcHBlciA9IHV0aWxzXzEuRE9NLnFzKCcuY29udGVudF9fcG9zdGluZy1mb3JtLXdyYXBwZXInKTtcbiAgICBpZiAoZm9ybVdyYXBwZXIpIHtcbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fcG9zdGluZy1mb3JtLXdyYXBwZXItLScgKyBzZXR0aW5ncy5mb3JtLmFsaWduKTtcbiAgICB9XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIENhcHRjaGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9yaWdpbmFsU3JjID0gJyc7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYWltYWdlJyk7XG4gICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFNyYyA9IGltYWdlLnNyYztcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxvYWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICBjb25zdCBjYXB0Y2hhID0gdXRpbHNfMS5ET00ucWlkKCdjYXB0Y2hhJyk7XG4gICAgICAgIGNhcHRjaGEudmFsdWUgPSAnJztcbiAgICAgICAgY2FwdGNoYS5mb2N1cygpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYWltYWdlJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGAke3RoaXMub3JpZ2luYWxTcmN9IyR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2FwdGNoYSA9IENhcHRjaGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGx1eG9uXzEgPSByZXF1aXJlKFwibHV4b25cIik7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ29ycmVjdFRpbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgKHBvc3RzKSA9PiBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0LmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0LWhlYWRlcl9fZGF0ZXRpbWUnKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHRoaXMuY29ycmVjdFRpbWUoZWxlbWVudCkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCB0aW1lX2VsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0LWhlYWRlcl9fZGF0ZXRpbWUnLCBwb3N0KTtcbiAgICAgICAgaWYgKCF0aW1lX2VsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb3JyZWN0VGltZSh0aW1lX2VsKTtcbiAgICB9XG4gICAgY29ycmVjdFRpbWUoZWwpIHtcbiAgICAgICAgY29uc3QgdGltZV9zdHIgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGV0aW1lJyk7XG4gICAgICAgIGlmICghdGltZV9zdHIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lID0gbHV4b25fMS5EYXRlVGltZS5mcm9tSVNPKHRpbWVfc3RyKTtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB1dGlsc18xLlRpbWUuZm9ybWF0KHRpbWUsIHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29ycmVjdFRpbWUgPSBDb3JyZWN0VGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIERlbGV0ZUZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgnZGVsZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWxldGVfcG9zdF9wYXNzd29yZCA9IHV0aWxzXzEuRE9NLnFpZCgnZGVsZXRlcG9zdHBhc3N3b3JkJyk7XG4gICAgICAgIGlmIChkZWxldGVfcG9zdF9wYXNzd29yZCkge1xuICAgICAgICAgICAgLy8gTG9hZCBkZWxldGUgcG9zdCBwYXNzd29yZC5cbiAgICAgICAgICAgIGRlbGV0ZV9wb3N0X3Bhc3N3b3JkLnZhbHVlID0gdXRpbHNfMS5Db29raWUuZ2V0KCd0aW55aWJfcGFzc3dvcmQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRGVsZXRlRm9ybSA9IERlbGV0ZUZvcm07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBvaW50ZXJFdmVudHMgPSAnUG9pbnRlckV2ZW50JyBpbiB3aW5kb3c7XG5jb25zdCB0b3VjaEV2ZW50cyA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdztcbmV4cG9ydHMuZHJhZ2dhYmxlID0ge1xuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuZ2V0RHJhZ0hhbmRsZSgpO1xuICAgICAgICBpZiAoIWhhbmRsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlUmVzaXplID0gdGhpcy5vbkRyYWdnYWJsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdnYWJsZU1vdXNlRG93biA9IHRoaXMub25EcmFnZ2FibGVNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZHJhZ2dhYmxlUmVzaXplKTtcbiAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuc2V0UG9zaXRpb24odGhpcy5jaGVja0JvdW5kcyh0aGlzLmdldFBvc2l0aW9uKCkpKTtcbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdnYWJsZVJlc2l6ZSkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZHJhZ2dhYmxlUmVzaXplKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGUgPSB0aGlzLmdldERyYWdIYW5kbGUoKTtcbiAgICAgICAgaWYgKGhhbmRsZSkge1xuICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0RHJhZ0hhbmRsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBnZXREcmFnZ2FibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IGRyYWdnYWJsZS5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgICAgIHk6IGRyYWdnYWJsZS5vZmZzZXRUb3AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBzZXRQb3NpdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyYWdnYWJsZS5zdHlsZS5sZWZ0ID0gYCR7Y29vcmRzLnh9cHhgO1xuICAgICAgICAgICAgZHJhZ2dhYmxlLnN0eWxlLnRvcCA9IGAke2Nvb3Jkcy55fXB4YDtcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tCb3VuZHMoeyB4LCB5IH0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHgsIHkgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBkcmFnZ2FibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBtaW5YID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1pblkgPSAwO1xuICAgICAgICAgICAgY29uc3QgbWF4WCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLSByZWN0LndpZHRoO1xuICAgICAgICAgICAgY29uc3QgbWF4WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBNYXRoLm1pbihNYXRoLm1heChtaW5YLCB4KSwgbWF4WCksXG4gICAgICAgICAgICAgICAgeTogTWF0aC5taW4oTWF0aC5tYXgobWluWSwgeSksIG1heFkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EcmFnZ2FibGVSZXNpemUoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHModGhpcy5nZXRQb3NpdGlvbigpKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ2dhYmxlTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2FibGVQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW91c2VFdmVudFxuICAgICAgICAgICAgICAgIHx8IHBvaW50ZXJFdmVudHMgJiYgZSBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBlLmNsaWVudFksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvdWNoRXZlbnRzICYmIGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiB0b3VjaC5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICB5OiB0b3VjaC5jbGllbnRZLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUgPSB0aGlzLm9uRHJhZ2dhYmxlTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdnYWJsZU1vdXNlVXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdnYWJsZU1vdXNlVXAgPSB0aGlzLm9uRHJhZ2dhYmxlTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ2dhYmxlTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgZGVsdGFYID0gMDtcbiAgICAgICAgICAgIGxldCBkZWx0YVkgPSAwO1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb3VzZUV2ZW50XG4gICAgICAgICAgICAgICAgfHwgcG9pbnRlckV2ZW50cyAmJiBlIGluc3RhbmNlb2YgUG9pbnRlckV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZGVsdGFYID0gZS5jbGllbnRYIC0gdGhpcy5fZHJhZ1N0YXJ0Lng7XG4gICAgICAgICAgICAgICAgZGVsdGFZID0gZS5jbGllbnRZIC0gdGhpcy5fZHJhZ1N0YXJ0Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b3VjaEV2ZW50cyAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IHRvdWNoLmNsaWVudFggLSB0aGlzLl9kcmFnU3RhcnQueDtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSB0b3VjaC5jbGllbnRZIC0gdGhpcy5fZHJhZ1N0YXJ0Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHMoe1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2RyYWdnYWJsZVBvc2l0aW9uLnggKyBkZWx0YVgsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5fZHJhZ2dhYmxlUG9zaXRpb24ueSArIGRlbHRhWSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EcmFnZ2FibGVNb3VzZVVwKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSkge1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdnYWJsZU1vdXNlVXApIHtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZVVwID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5leHBvcnRzLkZpbGVQcmV2aWV3ID0gdnVlXzEuZGVmYXVsdC5leHRlbmQoe1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiZmlsZS1wcmV2aWV3XCJcbiAgdi1vbjpjbGljaz1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gIHYtb246ZHJhZ2VudGVyLnN0b3AucHJldmVudFxuICB2LW9uOmRyYWdsZWF2ZS5zdG9wLnByZXZlbnRcbiAgdi1vbjpkcmFnb3Zlci5zdG9wLnByZXZlbnRcbiAgdi1vbjpkcm9wLnN0b3AucHJldmVudD1cIm9uRHJvcCgkZXZlbnQpXCI+XG4gIDxzcGFuIGNsYXNzPVwiZmlsZS1wcmV2aWV3X19pbmZvXCJcbiAgICB2LWlmPVwidHlwZVwiPnt7IGluZm8gfX08L3NwYW4+XG5cbiAgPGltZyBjbGFzcz1cImZpbGUtcHJldmlld19fY29udGVudFwiXG4gICAgdi1iaW5kOnNyYz1cInNyY1wiXG4gICAgdi1iaW5kOnRpdGxlPVwiaW5mb1wiXG4gICAgdi1pZj1cInR5cGUgPT09ICdpbWFnZScgJiYgc3JjXCIgLz5cbiAgPHZpZGVvIGNsYXNzPVwiZmlsZS1wcmV2aWV3X19jb250ZW50XCIgYXV0b3BsYXkgbG9vcCBtdXRlZFxuICAgIHYtYmluZDpzcmM9XCJzcmNcIlxuICAgIHYtYmluZDp0aXRsZT1cImluZm9cIlxuICAgIHYtZWxzZS1pZj1cInR5cGUgPT09ICd2aWRlbycgJiYgc3JjXCI+PC92aWRlbz5cbiAgPHNwYW4gY2xhc3M9XCJmaWxlLXByZXZpZXdfX2xhYmVsXCJcbiAgICB2LWVsc2U+VXBsb2FkIGZpbGU8L3NwYW4+XG5cbiAgPHNsb3Q+PC9zbG90PlxuPC9kaXY+YCxcbiAgICBwcm9wczogWydmaWxlJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYzogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG5hbWUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNpemUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZS5zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzaXplRm9ybWF0dGVkKCkge1xuICAgICAgICAgICAgY29uc3QgdW5pdHMgPSBbJ0InLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInXTtcbiAgICAgICAgICAgIGxldCBzaXplID0gdGhpcy5zaXplO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgZm9yICg7IGkgPCB1bml0cy5sZW5ndGggJiYgc2l6ZSA+PSAxMDAwOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzaXplIC89IDEwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYCR7c2l6ZS50b0ZpeGVkKDIpfSAke3VuaXRzW2ldfWA7XG4gICAgICAgIH0sXG4gICAgICAgIGluZm8oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgICAgICAgICAgICAgPyBgJHt0aGlzLm5hbWV9LCAke3RoaXMuc2l6ZUZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNpemVGb3JtYXR0ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHR5cGUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZmlsZS50eXBlO1xuICAgICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZS5zdGFydHNXaXRoKCd2aWRlby8nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3ZpZGVvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZS5zdGFydHNXaXRoKCdhdWRpby8nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1ZGlvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaW1hZ2UnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aCgnLndlYm0nKSB8fCBuYW1lLmVuZHNXaXRoKCcubXA0JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3ZpZGVvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy5tcDMnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYXVkaW8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdpbWFnZSc7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBmaWxlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ecm9wKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Ryb3AnLCBlKTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjYXB0Y2hhXzEgPSByZXF1aXJlKFwiLi9jYXB0Y2hhXCIpO1xuZXhwb3J0cy5DYXB0Y2hhID0gY2FwdGNoYV8xLkNhcHRjaGE7XG52YXIgY29ycmVjdF90aW1lXzEgPSByZXF1aXJlKFwiLi9jb3JyZWN0LXRpbWVcIik7XG5leHBvcnRzLkNvcnJlY3RUaW1lID0gY29ycmVjdF90aW1lXzEuQ29ycmVjdFRpbWU7XG52YXIgZGVsZXRlX2Zvcm1fMSA9IHJlcXVpcmUoXCIuL2RlbGV0ZS1mb3JtXCIpO1xuZXhwb3J0cy5EZWxldGVGb3JtID0gZGVsZXRlX2Zvcm1fMS5EZWxldGVGb3JtO1xudmFyIGRyYWdnYWJsZV8xID0gcmVxdWlyZShcIi4vZHJhZ2dhYmxlXCIpO1xuZXhwb3J0cy5kcmFnZ2FibGUgPSBkcmFnZ2FibGVfMS5kcmFnZ2FibGU7XG52YXIgZmlsZV9wcmV2aWV3XzEgPSByZXF1aXJlKFwiLi9maWxlLXByZXZpZXdcIik7XG5leHBvcnRzLkZpbGVQcmV2aWV3ID0gZmlsZV9wcmV2aWV3XzEuRmlsZVByZXZpZXc7XG52YXIgbmV3X3Bvc3RzX2RldGVjdG9yXzEgPSByZXF1aXJlKFwiLi9uZXctcG9zdHMtZGV0ZWN0b3JcIik7XG5leHBvcnRzLk5ld1Bvc3RzRGV0ZWN0b3IgPSBuZXdfcG9zdHNfZGV0ZWN0b3JfMS5OZXdQb3N0c0RldGVjdG9yO1xudmFyIHBvc3RpbmdfZm9ybV8xID0gcmVxdWlyZShcIi4vcG9zdGluZy1mb3JtXCIpO1xuZXhwb3J0cy5Qb3N0aW5nRm9ybSA9IHBvc3RpbmdfZm9ybV8xLlBvc3RpbmdGb3JtO1xudmFyIHBvc3RfcmVmZXJlbmNlX21hcF8xID0gcmVxdWlyZShcIi4vcG9zdC1yZWZlcmVuY2UtbWFwXCIpO1xuZXhwb3J0cy5Qb3N0UmVmZXJlbmNlTWFwID0gcG9zdF9yZWZlcmVuY2VfbWFwXzEuUG9zdFJlZmVyZW5jZU1hcDtcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzID0gc2V0dGluZ3NfMS5TZXR0aW5ncztcbnZhciBzdHlsZV9zd2l0Y2hfMSA9IHJlcXVpcmUoXCIuL3N0eWxlLXN3aXRjaFwiKTtcbmV4cG9ydHMuU3R5bGVTd2l0Y2ggPSBzdHlsZV9zd2l0Y2hfMS5TdHlsZVN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIE5ld1Bvc3RzRGV0ZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKiogQHRvZG86IHJlbW92ZSBNdXRhdGlvbk9ic2VydmVyIEFTQVAsIHdpdGggaW50ZWdyYXRlZCB0aHJlYWQgdXBkYXRpbmcuICovXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gbXV0YXRpb25zXG4gICAgICAgICAgICAgICAgLy8gR2V0IGFkZGVkIHBvc3RzLCBpZiBhbnkuXG4gICAgICAgICAgICAgICAgLm1hcChtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUxpc3QgPSBtdXRhdGlvbi5hZGRlZE5vZGVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50IGlzIHBvc3QgaXRzZWxmLCByZXR1cm4gaXQsXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgcXVlcnkgZm9yIGVsZW1lbnQgY2hpbGRyZW4uXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncG9zdCcpXG4gICAgICAgICAgICAgICAgICAgID8gW2VsZW1lbnRdXG4gICAgICAgICAgICAgICAgICAgIDogdXRpbHNfMS5ET00ucXNhKCcucG9zdCcsIGVsZW1lbnQpKVxuICAgICAgICAgICAgICAgICAgICAvLyBGbGF0dGVuIHBvc3RzIGFycmF5LlxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwuY29uY2F0KGN1cnJlbnQpLCBbXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIEZsYXR0ZW4gcG9zdHMgYXJyYXkuXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsLmNvbmNhdChjdXJyZW50KSwgW10pO1xuICAgICAgICAgICAgaWYgKHBvc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCBwb3N0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNldHVwIE11dGF0aW9uT2JzZXJ2ZXIuXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0Jyk7XG4gICAgICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5OZXdQb3N0c0RldGVjdG9yID0gTmV3UG9zdHNEZXRlY3RvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RSZWZlcmVuY2VNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvc3RzID0ge307XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSArcG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICAvLyBTdG9yZSBwb3N0LlxuICAgICAgICB0aGlzLnBvc3RzW3Bvc3RJZF0gPSBwb3N0O1xuICAgICAgICAvLyBHZXQgcmVmZXJlbmNlcy5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlRWxlbWVudHMgPSB1dGlsc18xLkRPTS5xc2EoJ2FbZGF0YS10YXJnZXQtcG9zdC1pZF0nLCBwb3N0KTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZUVsZW1lbnRzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBpZDogK2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldC1wb3N0LWlkJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBhdXRob3IgbmFtZSBvZiB0aGUgcmVmZXJlbmNlZCBwb3N0IHRvIHRoZSByZWZlcmVuY2UgbGluayB0ZXh0LlxuICAgICAgICByZWZlcmVuY2VzLmZvckVhY2gocmVmZXJlbmNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0aGlzLnBvc3RzW3JlZmVyZW5jZS5pZF07XG4gICAgICAgICAgICBpZiAoIXBvc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuY2xhc3NMaXN0LmFkZCgncG9zdF9fcmVmZXJlbmNlLWxpbmstYXV0aG9yJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuaW5uZXJIVE1MID0gdGhpcy5nZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSByZWZlcmVuY2UuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSByZWZlcmVuY2UuZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocmVmZXJlbmNlQXV0aG9yLCBuZXh0U2libGluZyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCkge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX19uYW1lJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX190cmlwY29kZScsIHBvc3QpO1xuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVsID8gbmFtZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBjb25zdCB0cmlwY29kZSA9IHRyaXBjb2RlRWwgPyB0cmlwY29kZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBpZiAobmFtZS5sZW5ndGggfHwgdHJpcGNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYCg8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLW5hbWVcIj4ke25hbWV9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICArIGA8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLXRyaXBjb2RlXCI+JHt0cmlwY29kZX08L3NwYW4+KWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYGA7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBQb3N0UmVmZXJlbmNlTWFwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IGFwaV8xID0gcmVxdWlyZShcIi4uL2FwaVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0aW5nRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNJblRocmVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgdGhpcy5vblBvc3RzSW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKC9cXC9yZXNcXC8oXFxkKykvaSk7XG4gICAgICAgIGNvbnN0IGlzSW5UaHJlYWQgPSAhIW1hdGNoO1xuICAgICAgICBjb25zdCB0aHJlYWRJZCA9IGlzSW5UaHJlYWQgPyArbWF0Y2hbMV0gOiAwO1xuICAgICAgICB0aGlzLmlzSW5UaHJlYWQgPSBpc0luVGhyZWFkO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyB2dWVfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGVsOiBmb3JtLFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxmb3JtIGNsYXNzPVwiY29udGVudF9fcG9zdGluZy1mb3JtIHBvc3RpbmctZm9ybVwiIGlkPVwicG9zdGluZy1mb3JtXCJcbiAgdi1iaW5kOmNsYXNzPVwieyAncG9zdGluZy1mb3JtLS1mbG9hdGluZyc6IHBvc2l0aW9uID09ICdmbG9hdCcgfVwiXG4gIHYtb246c3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdCgpXCIgdi1zaG93PVwiIWhpZGRlblwiXG4gIHJlZj1cImZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyXCIgcmVmPVwiaGVhZGVyXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3RpdGxlXCI+e3tcbiAgICAgIHRocmVhZElkID8gJ1JlcGx5IHRvIHRocmVhZCAjJyArIHRocmVhZElkIDogJ0NyZWF0ZSB0aHJlYWQnXG4gICAgfX08L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyLWJ1dHRvbnNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19yZXNldFwiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cInJlc2V0RmllbGRzKClcIiB0aXRsZT1cIkNsZWFyIGZvcm1cIj48L3NwYW4+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19mbG9hdFwiXG4gICAgICAgIHYtaWY9XCJwb3NpdGlvbiAhPT0gJ2Zsb2F0JyAmJiBtb2RlICE9PSAnbW9iaWxlJ1wiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cIm1ha2VGbG9hdGluZygpXCIgdGl0bGU9XCJGbG9hdGluZyBmb3JtXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcmVzdG9yZVwiXG4gICAgICAgIHYtaWY9XCJwb3NpdGlvbiA9PT0gJ2Zsb2F0JyAmJiBtb2RlICE9PSAnbW9iaWxlJ1wiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cIm1vdmVUb0JvdHRvbSgpXCIgdGl0bGU9XCJNb3ZlIGZvcm0gdG8gYm90dG9tXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fY2xvc2VcIlxuICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJvbkNsb3NlQ2xpY2soKVwiIHRpdGxlPVwiQ2xvc2UgZm9ybVwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2NvbnRlbnRcIj5cbiAgICA8eC1maWxlLXByZXZpZXcgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXdcIlxuICAgICAgdi1iaW5kOmNsYXNzPVwie1xuICAgICAgICAncG9zdGluZy1mb3JtX19wcmV2aWV3LS1tb2JpbGUnOiBtb2RlID09ICdtb2JpbGUnLFxuICAgICAgICAncG9zdGluZy1mb3JtX19wcmV2aWV3LS1yaWdodCc6IHNldHRpbmdzLnByZXZpZXdBbGlnbiA9PSAncmlnaHQnLFxuICAgICAgfVwiXG4gICAgICB2LWJpbmQ6ZmlsZT1cImZpbGVcIlxuICAgICAgdi1vbjpjbGljaz1cInNob3dGaWxlRGlhbG9nKClcIlxuICAgICAgdi1vbjpkcm9wPVwib25GaWxlRHJvcCgkZXZlbnQpXCJcbiAgICAgIHYtc2hvdz1cIm1vZGUgPT0gJ2RlZmF1bHQnIHx8IGZpbGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19wcmV2aWV3LXJlbW92ZVwiXG4gICAgICAgIHYtaWY9XCJmaWxlXCIgdi1vbjpjbGljay5zdG9wPVwiZmlsZSA9IG51bGxcIj48L3NwYW4+XG4gICAgPC94LWZpbGUtcHJldmlldz5cblxuICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX21haW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3Jvd1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fc3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5zdWJqZWN0XCJcbiAgICAgICAgICB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjpjaGFuZ2U9XCJvblN1YmplY3RDaGFuZ2UoKVwiIC8+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBwb3N0aW5nLWZvcm1fX25hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMubmFtZVwiXG4gICAgICAgICAgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIHYtb246Y2hhbmdlPVwib25OYW1lQ2hhbmdlKClcIiAvPlxuXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvc3RpbmctZm9ybV9fYXR0YWNobWVudFwiIHYtc2hvdz1cIm1vZGUgPT0gJ21vYmlsZSdcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fYXR0YWNobWVudC1pbnB1dFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLmZpbGVcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICB2LW9uOmNoYW5nZT1cIm9uRmlsZUNoYW5nZSgkZXZlbnQudGFyZ2V0LmZpbGVzKVwiXG4gICAgICAgICAgICByZWY9XCJmaWxlXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX3N1Ym1pdFwiXG4gICAgICAgICAgdi1pZj1cIm1vZGUgPT0gJ2RlZmF1bHQnXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIj5SZXBseTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX21hcmt1cC1yb3cgbWFya3VwXCJcbiAgICAgICAgdi1zaG93PVwiKG1vZGUgPT09ICdtb2JpbGUnKSAmJiBzZXR0aW5ncy5zaG93TWFya3VwTW9iaWxlXG4gICAgICAgICAgfHwgKG1vZGUgIT09ICdtb2JpbGUnKSAmJiBzZXR0aW5ncy5zaG93TWFya3VwXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdiJylcIj5cbiAgICAgICAgICA8c3Ryb25nPmI8L3N0cm9uZz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2knKVwiPlxuICAgICAgICAgIDxlbT5pPC9lbT5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3UnKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFya3VwX191bmRlcmxpbmVcIj51PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgncycpXCI+XG4gICAgICAgICAgPGRlbD5zPC9kZWw+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzdWInKVwiPlxuICAgICAgICAgIDxzdWI+c3ViPC9zdWI+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzdXAnKVwiPlxuICAgICAgICAgIDxzdXA+c3VwPC9zdXA+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdjb2RlJylcIj5cbiAgICAgICAgICA8Y29kZT5jb2RlPC9jb2RlPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnc3BvaWxlcicpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3Nwb2lsZXIgbWFya3VwX19zcG9pbGVyLS12aXNpYmxlXCI+c3A8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdycCcpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3JwIG1hcmt1cF9fcnAtLXZpc2libGVcIj5ycDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRRdW90ZSgpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3F1b3RlXCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcm93XCI+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fbWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5tZXNzYWdlXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIHYtb246a2V5ZG93bj1cIm9uTWVzc2FnZUtleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgdi1vbjpwYXN0ZT1cIm9uTWVzc2FnZVBhc3RlKCRldmVudClcIlxuICAgICAgICAgIHJlZj1cIm1lc3NhZ2VcIj48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgdi1pZj1cInN0YXR1c1wiIGNsYXNzPVwicG9zdGluZy1mb3JtX19zdGF0dXNcIj57eyBzdGF0dXMgfX08L2Rpdj5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3N1Ym1pdCAgcG9zdGluZy1mb3JtX19zdWJtaXQtLW1vYmlsZVwiXG4gICAgICAgIHYtaWY9XCJtb2RlID09ICdtb2JpbGUnXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIj5SZXBseTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZm9ybT5gLFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJycsXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNhdmVGb3JtU3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLmZsb2F0XG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdmbG9hdCcgOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ21vYmlsZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgICAgIHRocmVhZElkKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyZWFkSWQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXR0aW5ncygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZVN1YmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBzYXZlZCBzdWJqZWN0LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJqZWN0ID0gbG9jYWxTdG9yYWdlWydwb3N0aW5nLWZvcm0uc3ViamVjdCddO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNhdmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgc2F2ZWQgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLm5hbWUnXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZSA9IHRoaXMudXBkYXRlTW9kZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5mbG9hdFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHMocG9zaXRpb24pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveWVkKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAneC1maWxlLXByZXZpZXcnOiBfMS5GaWxlUHJldmlldyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaXhpbnM6IFtcbiAgICAgICAgICAgICAgICBfMS5kcmFnZ2FibGUsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIGdldERyYWdIYW5kbGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmhlYWRlcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdldERyYWdnYWJsZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmZvcm07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUubGVmdCA9IGAke2Nvb3Jkcy54fXB4YDtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlLnN0eWxlLnRvcCA9IGAke2Nvb3Jkcy55fXB4YDtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnNldHRpbmdzLmZvcm0uZmxvYXRQb3NpdGlvbiA9IGNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgX18xLlNldHRpbmdzTWFuYWdlci5zYXZlKGNvbXBvbmVudC5zZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkRyYWdnYWJsZVJlc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHRoaXMuZ2V0UG9zaXRpb24oKSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzZXRGaWVsZHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZVN1YmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLnN1YmplY3QgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNhdmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5uYW1lID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5maWxlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYWtlRmxvYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5tYWtlRmxvYXRpbmcoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vdmVUb0JvdHRvbSgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvd0ZpbGVEaWFsb2coKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZS5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVNb2RlKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCA/ICdtb2JpbGUnIDogJ2RlZmF1bHQnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnbW9iaWxlJyAmJiB0aGlzLnBvc2l0aW9uID09PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xvc2VDbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnVwZGF0ZVJlcGx5QnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1YmplY3RDaGFuZ2UoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgc3ViamVjdC5cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlWydwb3N0aW5nLWZvcm0uc3ViamVjdCddID0gdGhpcy5maWVsZHMuc3ViamVjdDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTmFtZUNoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBuYW1lLlxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VbJ3Bvc3RpbmctZm9ybS5uYW1lJ10gPSB0aGlzLmZpZWxkcy5uYW1lO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25GaWxlRHJvcChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0ICYmIHRleHQubWF0Y2goL2h0dHBzPzpcXC9cXC9bLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLH1cXC5bYS16XXsyLH1cXGJbLWEtekEtWjAtOUA6JV9cXCsufiM/JlxcLz1dKi8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgdGV4dCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgRXJyb3I6ICR7eGhyLnN0YXR1c30gJHt4aHIuc3RhdHVzVGV4dH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkZpbGVDaGFuZ2UoZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZXMubGVuZ3RoID8gZmlsZXNbMF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlS2V5RG93bihlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Ym1pdCBmb3JtIG9uIEN0cmwrRW50ZXIgaW4gdGhlIG1lc3NhZ2UgZmllbGQuXG4gICAgICAgICAgICAgICAgICAgIGlmICgoZS5rZXlDb2RlID09IDEwIHx8IGUua2V5Q29kZSA9PSAxMykgJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTWVzc2FnZVBhc3RlKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzdGUgZmlsZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGUuY2xpcGJvYXJkRGF0YSB8fCBlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXRhLml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUuc3RhcnRzV2l0aCgnYXVkaW8vJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUuc3RhcnRzV2l0aCgndmlkZW8vJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5zZXJ0TWFya3VwKHRhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRWwgPSB0aGlzLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgLSBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmZpZWxkcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVuaW5nVGFnID0gYFske3RhZ31dYDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2luZ1RhZyA9IGBbLyR7dGFnfV1gO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCB8fCBjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5pbnNlcnRUYWdzSW5QYWlycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGV4dCBpcyBzZWxlY3RlZCwgd3JhcCBpdCBpbiBhIHRhZyBwYWlyLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmJlZ2luLCBzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb24uZW5kICsgb3BlbmluZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmxhc3RJbmRleE9mKG9wZW5pbmdUYWcsIHNlbGVjdGlvbi5iZWdpbikgPiBtZXNzYWdlLmxhc3RJbmRleE9mKGNsb3NpbmdUYWcsIHNlbGVjdGlvbi5iZWdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHNlbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5lbmQgKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5zZXJ0UXVvdGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHRoaXMuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZSA9IG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyID0gbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpbmVCZWZvcmUgPSBiZWZvcmUubGVuZ3RoICYmICFiZWZvcmUuZW5kc1dpdGgoJ1xcbicpID8gJ1xcbicgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUFmdGVyID0gIWFmdGVyLmxlbmd0aCB8fCAhYWZ0ZXIuc3RhcnRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZVRleHQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGUgPSBgJHtuZXdMaW5lQmVmb3JlfT4gJHtxdW90ZVRleHR9JHtuZXdMaW5lQWZ0ZXJ9YDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5iZWdpbiArIHF1b3RlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgcmVwbGFjZXMgdG8gdGhlIG1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlcyA9IGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnJlcGxhY2VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlcGxhY2VzLnJlZHVjZSgobWVzc2FnZSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoaXRlbS5wYXR0ZXJuLCAnZ20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKHJlZ2V4cCwgaXRlbS5yZXBsYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuZmllbGRzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHlpZWxkIGFwaV8xLkFwaS5jcmVhdGVQb3N0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogdGhpcy5maWVsZHMuc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5maWVsZHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogdGhpcy5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzc1BlcmNlbnQgPSBNYXRoLmNlaWwoZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgVXBsb2FkaW5nLi4uICR7cHJvZ3Jlc3NQZXJjZW50fSVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgZm9ybSB0byB0aGUgaW5pdGlhbCBsb2NhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJblRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIERFIHRocmVhZCB1cGRhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZXIgPSB1dGlsc18xLkRPTS5xcygnLmRlLXRoci11cGRhdGVyLWxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gdGhyZWFkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEVycm9yOiAke2V9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5zY3JvbGxCb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTY3JvbGwgdG8gdGhlIGJvdHRvbS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxpbmdFbCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nRWwuc2Nyb2xsVG9wID0gc2Nyb2xsaW5nRWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b24pIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgICAgICAgICBpZiAodm0ucG9zaXRpb24gPT09ICdwb3N0J1xuICAgICAgICAgICAgICAgICAgICB8fCAhdm0uaGlkZGVuICYmIHZtLnBvc2l0aW9uID09PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB1dGlsc18xLkRPTS5xcygnLmxheW91dF9fY29udGVudCcpO1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWZsaW5rJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRWwgPSB2bS4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgLSBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdm0uZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgY29uc3QgYmVmb3JlID0gbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKTtcbiAgICAgICAgICAgICAgICBjb25zdCBhZnRlciA9IG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpbmVCZWZvcmUgPSBiZWZvcmUubGVuZ3RoICYmICFiZWZvcmUuZW5kc1dpdGgoJ1xcbicpID8gJ1xcbicgOiAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdMaW5lQWZ0ZXIgPSAhYWZ0ZXIubGVuZ3RoIHx8ICFhZnRlci5zdGFydHNXaXRoKCdcXG4nKSA/ICdcXG4nIDogJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmxpbmsnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBxdW90ZVRleHQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0UXVvdGVJbmRleCA9IG1lc3NhZ2UubGFzdEluZGV4T2YoJz4+Jywgc2VsZWN0aW9uLmJlZ2luKTtcbiAgICAgICAgICAgICAgICBjb25zdCBxdW90ZVNhbWVQb3N0ID0gbGFzdFF1b3RlSW5kZXggIT09IC0xXG4gICAgICAgICAgICAgICAgICAgICYmIG1lc3NhZ2UubGFzdEluZGV4T2YoYD4+JHtpZH1gLCBzZWxlY3Rpb24uYmVnaW4pID49IGxhc3RRdW90ZUluZGV4O1xuICAgICAgICAgICAgICAgIC8vIElmIHF1b3RpbmcgdGhlIHNhbWUgcG9zdCBhZ2Fpbiwgbm90IGluc2VydCBpZC5cbiAgICAgICAgICAgICAgICBsZXQgcXVvdGUgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAocXVvdGVTYW1lUG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IHF1b3RlVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtuZXdMaW5lQmVmb3JlfT4gJHtxdW90ZVRleHR9JHtuZXdMaW5lQWZ0ZXJ9YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gcXVvdGVUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke25ld0xpbmVCZWZvcmV9Pj4ke2lkfVxcbj4gJHtxdW90ZVRleHR9JHtuZXdMaW5lQWZ0ZXJ9YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtuZXdMaW5lQmVmb3JlfT4+JHtpZH0ke25ld0xpbmVBZnRlcn1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgcmVwbHkgbWFya3VwLlxuICAgICAgICAgICAgICAgIHZtLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmUsXG4gICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICBhZnRlcixcbiAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSW5UaHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1b3RlU2FtZVBvc3QgJiYgIXF1b3RlVGV4dCAmJiAhdm0uaGlkZGVuICYmIHZtLnBvc2l0aW9uICE9PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0ucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIGZvcm0gdG8gdGhlIHBvc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IHRhcmdldC5jbG9zZXN0KCcucG9zdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvUG9zdChwb3N0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdm0uJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIHF1b3RlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5iZWdpbiArIHF1b3RlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uUG9zdHNJbnNlcnRlZChwb3N0cykge1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5jb21tb24uc2Nyb2xsVG9OZXdQb3N0cykge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsaW5nRWwgPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAvLyBJZiBpbiB0aGUgYm90dG9tIGFyZWEuXG4gICAgICAgICAgICBjb25zdCBib3R0b21PZmZzZXQgPSBzY3JvbGxpbmdFbC5zY3JvbGxIZWlnaHQgLSBzY3JvbGxpbmdFbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICBjb25zdCBib3R0b21BcmVhID0gMS41ICogd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgaWYgKGJvdHRvbU9mZnNldCA8IGJvdHRvbUFyZWEpIHtcbiAgICAgICAgICAgICAgICAvLyBTY3JvbGwgdG8gdGhlIGJvdHRvbS5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nRWwuc2Nyb2xsVG9wID0gc2Nyb2xsaW5nRWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcG9zdHMuZm9yRWFjaChwb3N0ID0+IHtcbiAgICAgICAgICAgIC8vIE1vdmUgcmVwbHkgaWNvbiBhZnRlciBERSBoaWRlIGljb24uXG4gICAgICAgICAgICBjb25zdCByZXBseUljb24gPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX19yZWZsaW5rLXdyYXBwZXIgPiAucG9zdC1oZWFkZXJfX3JlZmxpbmstaWNvbicsIHBvc3QpO1xuICAgICAgICAgICAgY29uc3QgZGVIaWRlID0gdXRpbHNfMS5ET00ucXMoJy5kZS1idG4taGlkZScsIHBvc3QpO1xuICAgICAgICAgICAgaWYgKHJlcGx5SWNvbiAmJiBkZUhpZGUpIHtcbiAgICAgICAgICAgICAgICBkZUhpZGUucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUocmVwbHlJY29uLCBkZUhpZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlUmVwbHlCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybS1zaG93Jyk7XG4gICAgICAgIGlmICghc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZpZXdNb2RlbC5oaWRkZW4gfHwgdGhpcy52aWV3TW9kZWwucG9zaXRpb24gIT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnZpZXdNb2RlbC5oaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLnZpZXdNb2RlbC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgbWFrZUZsb2F0aW5nKCkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgdm0ucG9zaXRpb24gPSAnZmxvYXQnO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmZvcm0uZmxvYXQgPSB0cnVlO1xuICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5zZXR0aW5ncy5mb3JtLmZsb2F0UG9zaXRpb247XG4gICAgICAgIHZtLnNldFBvc2l0aW9uKHZtLmNoZWNrQm91bmRzKHBvc2l0aW9uKSk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVwbHlCdXR0b24oKTtcbiAgICB9XG4gICAgbW92ZVRvUG9zdChwb3N0KSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoZm9ybSkge1xuICAgICAgICAgICAgcG9zdC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShmb3JtLCBwb3N0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgdm0ucG9zaXRpb24gPSAncG9zdCc7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybS5mbG9hdCA9IGZhbHNlO1xuICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybS1zaG93Jyk7XG4gICAgICAgIGlmIChzaG93QnV0dG9uKSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUmVwbHlCdXR0b24oKTtcbiAgICAgICAgdm0uJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtb3ZlVG9Cb3R0b20oKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0td3JhcHBlcicpO1xuICAgICAgICBpZiAoZm9ybSAmJiB3cmFwcGVyKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmluc2VydEJlZm9yZShmb3JtLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgdm0ucG9zaXRpb24gPSAnYm90dG9tJztcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5mb3JtLmZsb2F0ID0gZmFsc2U7XG4gICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0aW5nRm9ybSA9IFBvc3RpbmdGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsdXhvbl8xID0gcmVxdWlyZShcImx1eG9uXCIpO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NGb3JtID0gdXRpbHNfMS5ET00ucWlkKCdzZXR0aW5nc19mb3JtJyk7XG4gICAgICAgIGlmICghc2V0dGluZ3NGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgQ2hlY2tib3ggPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgIDpjaGVja2VkPVwiY2hlY2tlZFwiXG4gICAgICBAY2hhbmdlPVwib25JbnB1dFwiIC8+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L2xhYmVsPlxuPC9kaXY+YCxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgcHJvcDogJ2NoZWNrZWQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2hhbmdlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIG9uSW5wdXQoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCAhdGhpcy5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IFJhZGlvQnV0dG9uID0gdnVlXzEuZGVmYXVsdC5leHRlbmQoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIj5cbiAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICA6Y2hlY2tlZD1cInZhbHVlID09IHNlbGVjdGVkVmFsdWVcIlxuICAgICAgQGNoYW5nZT1cIm9uSW5wdXRcIiAvPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9sYWJlbD5cbjwvZGl2PmAsXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHByb3A6ICdzZWxlY3RlZFZhbHVlJyxcbiAgICAgICAgICAgICAgICBldmVudDogJ2NoYW5nZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU6IFN0cmluZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgb25JbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXcgdnVlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBlbDogJyNzZXR0aW5nc19mb3JtJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiY29udGVudF9fc2V0dGluZ3MtZm9ybSBzZXR0aW5ncy1mb3JtXCIgaWQ9XCJzZXR0aW5nc19mb3JtXCI+XG4gIDx1bCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYnNcIj5cbiAgICA8bGkgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX190YWJcIlxuICAgICAgOmNsYXNzPVwieyAnc2V0dGluZ3MtZm9ybV9fdGFiLS1hY3RpdmUnOiB0YWIgPT09ICdjb21tb24nIH1cIlxuICAgICAgQGNsaWNrPVwidGFiID0gJ2NvbW1vbidcIj5Db21tb248L2xpPlxuXG4gICAgPGxpIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fdGFiXCJcbiAgICAgIDpjbGFzcz1cInsgJ3NldHRpbmdzLWZvcm1fX3RhYi0tYWN0aXZlJzogdGFiID09PSAnZm9ybScgfVwiXG4gICAgICBAY2xpY2s9XCJ0YWIgPSAnZm9ybSdcIj5Gb3JtPC9saT5cblxuICAgIDxsaSBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYlwiXG4gICAgICA6Y2xhc3M9XCJ7ICdzZXR0aW5ncy1mb3JtX190YWItLWFjdGl2ZSc6IHRhYiA9PT0gJ3RpbWUnIH1cIlxuICAgICAgQGNsaWNrPVwidGFiID0gJ3RpbWUnXCI+VGltZTwvbGk+XG4gIDwvdWw+XG5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYi1jb250ZW50XCJcbiAgICB2LXNob3c9XCJ0YWIgPT09ICdjb21tb24nXCI+XG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+VGhyZWFkIEFsaWdubWVudDwvaDM+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLmNvbW1vbi5sYXlvdXRcIiA6dmFsdWU9XCInbGVmdCdcIj5cbiAgICAgIE9uIHRoZSBsZWZ0XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MuY29tbW9uLmxheW91dFwiIDp2YWx1ZT1cIidjZW50ZXInXCI+XG4gICAgICBJbiB0aGUgY2VudGVyXG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPlBvc3RzPC9oMz5cblxuICAgIDx4LWNoZWNrYm94IHYtbW9kZWw9XCJzZXR0aW5ncy5jb21tb24uc2hvd1Bvc3RIZWFkZXJSZWZsaW5rSWNvblwiPlxuICAgICAgU2hvdyByZXBseSBpY29uIGluIHRoZSBwb3N0IGhlYWRlclxuICAgIDwveC1jaGVja2JveD5cblxuICAgIDx4LWNoZWNrYm94IHYtbW9kZWw9XCJzZXR0aW5ncy5jb21tb24uc2hvd1Bvc3RSZWZsaW5rSWNvblwiPlxuICAgICAgU2hvdyByZXBseSBpY29uIGluIHRoZSBib3R0b20gcmlnaHQgY29ybmVyIG9mIHBvc3QgbWVzc2FnZVxuICAgIDwveC1jaGVja2JveD5cblxuICAgIDx4LWNoZWNrYm94IHYtbW9kZWw9XCJzZXR0aW5ncy5jb21tb24uc2Nyb2xsVG9OZXdQb3N0c1wiPlxuICAgICAgU2Nyb2xsIHRvIG5ldyBwb3N0c1xuICAgIDwveC1jaGVja2JveD5cblxuICAgIDx4LWNoZWNrYm94IHYtbW9kZWw9XCJzZXR0aW5ncy5jb21tb24uc21vb3RoU2Nyb2xsXCI+XG4gICAgICBTbW9vdGggc2Nyb2xsaW5nXG4gICAgPC94LWNoZWNrYm94PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fdGFiLWNvbnRlbnRcIlxuICAgIHYtc2hvdz1cInRhYiA9PT0gJ2Zvcm0nXCI+XG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+Rm9ybSBCZWhhdmlvdXI8L2gzPlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uc2Nyb2xsQm90dG9tXCI+XG4gICAgICBTY3JvbGwgdG8gdGhlIGJvdHRvbSBhZnRlciBwb3N0aW5nXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uc2F2ZVN1YmplY3RcIj5cbiAgICAgIFNhdmUgc3ViamVjdCBhZnRlciBwb3N0aW5nXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uc2F2ZU5hbWVcIj5cbiAgICAgIFNhdmUgbmFtZSBhZnRlciBwb3N0aW5nXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uc2F2ZUZvcm1TdGF0ZVwiPlxuICAgICAgU2F2ZSBmb3JtIGZsb2F0aW5nIHN0YXRlIG9uIHBhZ2UgcmVsb2FkXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+Rm9ybSBBbGlnbm1lbnQ8L2gzPlxuXG4gICAgPHgtcmFkaW8tYnV0dG9uIHYtbW9kZWw9XCJzZXR0aW5ncy5mb3JtLmFsaWduXCIgOnZhbHVlPVwiJ2xlZnQnXCI+XG4gICAgICBPbiB0aGUgbGVmdFxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uYWxpZ25cIiA6dmFsdWU9XCInY2VudGVyJ1wiPlxuICAgICAgSW4gdGhlIGNlbnRlclxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5QcmV2aWV3IEFsaWdubWVudDwvaDM+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLmZvcm0ucHJldmlld0FsaWduXCIgOnZhbHVlPVwiJ2xlZnQnXCI+XG4gICAgICBPbiB0aGUgbGVmdFxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLmZvcm0ucHJldmlld0FsaWduXCIgOnZhbHVlPVwiJ3JpZ2h0J1wiPlxuICAgICAgT24gdGhlIHJpZ2h0XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPk1hcmt1cDwvaDM+XG5cbiAgICA8eC1jaGVja2JveCB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5zaG93TWFya3VwXCI+XG4gICAgICBTaG93IG1hcmt1cCBidXR0b25zXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uc2hvd01hcmt1cE1vYmlsZVwiPlxuICAgICAgU2hvdyBtYXJrdXAgYnV0dG9ucyAobW9iaWxlKVxuICAgIDwveC1jaGVja2JveD5cblxuICAgIDx4LWNoZWNrYm94IHYtbW9kZWw9XCJzZXR0aW5ncy5mb3JtLmluc2VydFRhZ3NJblBhaXJzXCI+XG4gICAgICBJbnNlcnQgdGFncyBpbiBwYWlyc1xuICAgIDwveC1jaGVja2JveD5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPlJlcGxhY2VzPC9oMz5cblxuICAgIDx1bCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xpc3RcIj5cbiAgICAgIDxsaSBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xpc3QtaXRlbVwiXG4gICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBzZXR0aW5ncy5mb3JtLnJlcGxhY2VzXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiXG4gICAgICAgICAgdi1tb2RlbD1cIml0ZW0ucGF0dGVyblwiIHBsYWNlaG9sZGVyPVwiUGF0dGVyblwiIC8+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCJcbiAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5yZXBsYWNlXCIgcGxhY2Vob2xkZXI9XCJSZXBsYWNlXCIgLz5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVSZXBsYWNlQXQoaW5kZXgpXCI+UmVtb3ZlPC9idXR0b24+XG4gICAgICA8L2xpPlxuXG4gICAgICA8bGkgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19saXN0LWl0ZW1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCJcbiAgICAgICAgICB2LW1vZGVsPVwibmV3UmVwbGFjZS5wYXR0ZXJuXCIgcGxhY2Vob2xkZXI9XCJQYXR0ZXJuXCIgLz5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIlxuICAgICAgICAgIHYtbW9kZWw9XCJuZXdSZXBsYWNlLnJlcGxhY2VcIiBwbGFjZWhvbGRlcj1cIlJlcGxhY2VcIiAvPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgIEBjbGljaz1cImFkZFJlcGxhY2UobmV3UmVwbGFjZSlcIj5BZGQ8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYi1jb250ZW50XCJcbiAgICB2LXNob3c9XCJ0YWIgPT09ICd0aW1lJ1wiPlxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPkxhbmd1YWdlPC9oMz5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5sb2NhbGVcIiA6dmFsdWU9XCInZGVmYXVsdCdcIj5cbiAgICAgIEJyb3dzZXIgZGVmYXVsdFxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLnRpbWUubG9jYWxlXCIgOnZhbHVlPVwiJ2N1c3RvbSdcIj5cbiAgICAgIEN1c3RvbVxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCIgcGxhY2Vob2xkZXI9XCJlblwiXG4gICAgICAgIEBjbGljaz1cInNldHRpbmdzLnRpbWUubG9jYWxlID0gJ2N1c3RvbSdcIlxuICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5sb2NhbGVDdXN0b21cIiAvPlxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5Gb3JtYXQ8L2gzPlxuXG4gICAgPHgtcmFkaW8tYnV0dG9uIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLmZvcm1hdFwiIDp2YWx1ZT1cIidkZWZhdWx0J1wiPlxuICAgICAgQnJvd3NlciBkZWZhdWx0XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5mb3JtYXRcIiA6dmFsdWU9XCInY3VzdG9tJ1wiPlxuICAgICAgQ3VzdG9tXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVFRSwgZGQgTU1NIHl5eXkgSEg6bW06c3NcIlxuICAgICAgICBAY2xpY2s9XCJzZXR0aW5ncy50aW1lLmZvcm1hdCA9ICdjdXN0b20nXCJcbiAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnRpbWUuZm9ybWF0Q3VzdG9tXCIgLz5cbiAgICA8L3gtcmFkaW8tYnV0dG9uPlxuXG4gICAgPHA+XG4gICAgICBTZWUgdGhlXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9sdXhvbi9ibG9iL21hc3Rlci9kb2NzL2Zvcm1hdHRpbmcubWQjdGFibGUtb2YtdG9rZW5zXCI+XG4gICAgICAgIGx1eG9uIGRvY3VtZW50YXRpb25cbiAgICAgIDwvYT5cbiAgICAgIGZvciB0aGUgY3VzdG9tIHRva2VucyByZWZlcmVuY2UuXG4gICAgPC9wPlxuXG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+VGltZSB6b25lPC9oMz5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MudGltZS56b25lXCIgOnZhbHVlPVwiJ2RlZmF1bHQnXCI+XG4gICAgICBCcm93c2VyIGRlZmF1bHRcbiAgICA8L3gtcmFkaW8tYnV0dG9uPlxuXG4gICAgPHgtcmFkaW8tYnV0dG9uIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLnpvbmVcIiA6dmFsdWU9XCInZml4ZWQnXCI+XG4gICAgICBGaXhlZCBVVEMgb2Zmc2V0XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiXG4gICAgICAgIG1pbj1cIi05OVwiIG1heD1cIjk5XCJcbiAgICAgICAgQGNsaWNrPVwic2V0dGluZ3MudGltZS56b25lID0gJ2ZpeGVkJ1wiXG4gICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLnpvbmVGaXhlZFwiIC8+XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPkN1cnJlbnQgZm9ybWF0PC9oMz5cblxuICAgIDxwPnt7IHRpbWUgfX08L3A+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19mb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fYnV0dG9uc1wiPlxuICAgICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zdGF0dXNcIiA+e3sgc3RhdHVzIH19PC9wPlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBzZXR0aW5ncy1mb3JtX19zYXZlXCJcbiAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJzYXZlU2V0dGluZ3MoKVwiPlNhdmU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdGFiOiAnY29tbW9uJyxcbiAgICAgICAgICAgICAgICAgICAgbmV3UmVwbGFjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJycsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgICAgIC8vIExvYWQgc2V0dGluZ3MgZnJvbSBhIGNvb2tpZVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBfXzEuU2V0dGluZ3NNYW5hZ2VyLmxvYWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lciA9IHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZS5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUmVwbGFjZUF0KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybS5yZXBsYWNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWRkUmVwbGFjZShpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKGl0ZW0ucGF0dGVybiwgJ2dtJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEludmFsaWQgcmVndWxhciBleHByZXNzaW9uOiAke2UubWVzc2FnZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybS5yZXBsYWNlcy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdSZXBsYWNlID0geyBwYXR0ZXJuOiAnJywgcmVwbGFjZTogJycgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gbHV4b25fMS5EYXRlVGltZS5mcm9tSlNEYXRlKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gdXRpbHNfMS5UaW1lLmZvcm1hdCh0aW1lLCB0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZSA9ICdJbnZhbGlkIGZvcm1hdCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgICAgICAgICAgICAgX18xLlNldHRpbmdzTWFuYWdlci5zYXZlKHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbmRpY2F0ZSB0aGF0IHNldHRpbmdzIGFyZSBzYXZlZC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdTZXR0aW5ncyBzYXZlZC4nO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwIC8gMyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ3gtY2hlY2tib3gnOiBDaGVja2JveCxcbiAgICAgICAgICAgICAgICAneC1yYWRpby1idXR0b24nOiBSYWRpb0J1dHRvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuU2V0dGluZ3MgPSBTZXR0aW5ncztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFN0eWxlU3dpdGNoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSB7fTtcbiAgICAgICAgLy8gUGFyc2Ugc2VsZWN0YWJsZSBzdHlsZXMgZnJvbSA8aGVhZD5cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gdXRpbHNfMS5ET00ucXNhKCdsaW5rW3RpdGxlXScpO1xuICAgICAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHN0eWxlLnRpdGxlO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gc3R5bGUuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlc1t0aXRsZV0gPSB1cmw7XG4gICAgICAgICAgICBpZiAoIXN0eWxlLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBHZXQgc2VsZWN0ZWQgc3R5bGVcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRfc3R5bGUgPSB1dGlsc18xLkNvb2tpZS5nZXQoJ3RpbnlpYl9zdHlsZScsICdTeW50aHdhdmUnKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZShzZWxlY3RlZF9zdHlsZSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBzdHlsZV9zd2l0Y2hlciA9IHV0aWxzXzEuRE9NLnFpZCgnc3R5bGUtc3dpdGNoZXInKTtcbiAgICAgICAgaWYgKHN0eWxlX3N3aXRjaGVyKSB7XG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSBzdHlsZSBzd2l0Y2hlciB3aWRnZXRcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBzdHlsZXNbaV07XG4gICAgICAgICAgICAgICAgc3R5bGVfc3dpdGNoZXIuaW5uZXJIVE1MICs9IGA8b3B0aW9uIGNsYXNzPVwic3R5bGUtc3dpdGNoZXJfX29wdGlvblwiIHZhbHVlPVwiJHt0aXRsZX1cIj4ke3RpdGxlfTwvb3B0aW9uPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgc3R5bGUgY2hhbmdlIGNhbGxiYWNrXG4gICAgICAgICAgICBzdHlsZV9zd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdHlsZShzdHlsZV9zd2l0Y2hlci52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3N0eWxlJywgJ1N5bnRod2F2ZScpO1xuICAgICAgICB3aW5kb3cuZGF0YUxheWVyLnB1c2goeyAndGhlbWUnOiBzZWxlY3RlZF9zdHlsZSB9KTtcbiAgICB9XG4gICAgc2V0U3R5bGUoc3R5bGUpIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHV0aWxzXzEuRE9NLnFzKCdoZWFkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGhlYWQpO1xuICAgICAgICAvLyBJZiBubyA8aGVhZD4gZWxlbWVudCwgZG8gbm90aGluZ1xuICAgICAgICBpZiAoIWhlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuRE9NLnFzKCdsaW5rW2RhdGEtc2VsZWN0ZWRdJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkX3N0eWxlKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkX3N0eWxlKSB7XG4gICAgICAgICAgICAvLyBJZiBzdHlsZSBhbHJlYWR5IHNlbGVjdGVkLCBkbyBub3RoaW5nXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRfc3R5bGUudGl0bGUgPT09IHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzbHkgc2VsZWN0ZWQgc3R5bGUgZnJvbSA8aGVhZD5cbiAgICAgICAgICAgIHNlbGVjdGVkX3N0eWxlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlKTtcbiAgICAgICAgLy8gQWRkIGN1cnJlbnRseSBzZWxlY3RlZCBzdHlsZSB0byA8aGVhZD5cbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5zdHlsZXNbc3R5bGVdO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBsaW5rLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgICAgICBsaW5rLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAvLyBTYXZlIHNlbGVjdGVkIHN0eWxlXG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25fZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGV4cGlyYXRpb25fZGF0ZS5zZXRUaW1lKGV4cGlyYXRpb25fZGF0ZS5nZXRUaW1lKCkgKyAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgdXRpbHNfMS5Db29raWUuc2V0KCd0aW55aWJfc3R5bGUnLCBzdHlsZSwgZXhwaXJhdGlvbl9kYXRlKTtcbiAgICB9XG59XG5leHBvcnRzLlN0eWxlU3dpdGNoID0gU3R5bGVTd2l0Y2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgZXZlbnRCdXMgPSBuZXcgdnVlXzEuZGVmYXVsdCgpO1xuZXhwb3J0cy5ldmVudEJ1cyA9IGV2ZW50QnVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRXZlbnRzO1xuKGZ1bmN0aW9uIChFdmVudHMpIHtcbiAgICBFdmVudHNbXCJSZWFkeVwiXSA9IFwicmVhZHlcIjtcbiAgICBFdmVudHNbXCJQb3N0c0luc2VydGVkXCJdID0gXCJwb3N0c19pbnNlcnRlZFwiO1xuICAgIEV2ZW50c1tcIlBvc3RDcmVhdGVkXCJdID0gXCJwb3N0X2NyZWF0ZWRcIjtcbiAgICBFdmVudHNbXCJJbnNlcnRNYXJrdXBcIl0gPSBcImluc2VydF9tYXJrdXBcIjtcbn0pKEV2ZW50cyA9IGV4cG9ydHMuRXZlbnRzIHx8IChleHBvcnRzLkV2ZW50cyA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcGlfMSA9IHJlcXVpcmUoXCIuL2FwaVwiKTtcbmV4cG9ydHMuQXBpID0gYXBpXzEuQXBpO1xudmFyIGV2ZW50X2J1c18xID0gcmVxdWlyZShcIi4vZXZlbnQtYnVzXCIpO1xuZXhwb3J0cy5ldmVudEJ1cyA9IGV2ZW50X2J1c18xLmV2ZW50QnVzO1xudmFyIGV2ZW50c18xID0gcmVxdWlyZShcIi4vZXZlbnRzXCIpO1xuZXhwb3J0cy5FdmVudHMgPSBldmVudHNfMS5FdmVudHM7XG52YXIgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuZXhwb3J0cy5TZXR0aW5nc01hbmFnZXIgPSBzZXR0aW5nc18xLlNldHRpbmdzTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc2V0dGluZ3NLZXkgPSAnc2V0dGluZ3MnO1xuY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICBsYXlvdXQ6ICdsZWZ0JyxcbiAgICAgICAgc2hvd1Bvc3RIZWFkZXJSZWZsaW5rSWNvbjogdHJ1ZSxcbiAgICAgICAgc2hvd1Bvc3RSZWZsaW5rSWNvbjogZmFsc2UsXG4gICAgICAgIHNjcm9sbFRvTmV3UG9zdHM6IHRydWUsXG4gICAgICAgIHNtb290aFNjcm9sbDogdHJ1ZSxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICBwcmV2aWV3QWxpZ246ICdyaWdodCcsXG4gICAgICAgIHNjcm9sbEJvdHRvbTogdHJ1ZSxcbiAgICAgICAgc2hvd01hcmt1cDogdHJ1ZSxcbiAgICAgICAgc2hvd01hcmt1cE1vYmlsZTogZmFsc2UsXG4gICAgICAgIGluc2VydFRhZ3NJblBhaXJzOiB0cnVlLFxuICAgICAgICBzYXZlRm9ybVN0YXRlOiBmYWxzZSxcbiAgICAgICAgc2F2ZVN1YmplY3Q6IGZhbHNlLFxuICAgICAgICBzYXZlTmFtZTogdHJ1ZSxcbiAgICAgICAgZmxvYXQ6IGZhbHNlLFxuICAgICAgICBmbG9hdFBvc2l0aW9uOiB7IHg6IDEwMCwgeTogMTAwIH0sXG4gICAgICAgIHJlcGxhY2VzOiBbXSxcbiAgICB9LFxuICAgIHRpbWU6IHtcbiAgICAgICAgbG9jYWxlOiAnZGVmYXVsdCcsXG4gICAgICAgIGxvY2FsZUN1c3RvbTogJycsXG4gICAgICAgIHpvbmU6ICdkZWZhdWx0JyxcbiAgICAgICAgem9uZUZpeGVkOiAwLFxuICAgICAgICBmb3JtYXQ6ICdkZWZhdWx0JyxcbiAgICAgICAgZm9ybWF0Q3VzdG9tOiAnJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cbmZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0KTtcbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuY2xhc3MgU2V0dGluZ3NNYW5hZ2VyIHtcbiAgICBzdGF0aWMgbG9hZCgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNldHRpbmdzS2V5KSk7XG4gICAgICAgIHJldHVybiBtZXJnZShkZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgICB9XG4gICAgc3RhdGljIHNhdmUoc2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2V0dGluZ3NLZXksIGRhdGEpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2V0dGluZ3NNYW5hZ2VyID0gU2V0dGluZ3NNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBDb29raWUge1xuICAgIHN0YXRpYyBnZXQobmFtZSwgX2RlZmF1bHQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZV9zdHIgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xuICAgICAgICBjb25zdCBjb29raWVfcGFydHMgPSBjb29raWVfc3RyLnNwbGl0KGA7ICR7bmFtZX09YCk7XG4gICAgICAgIGlmIChjb29raWVfcGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZV9lbmMgPSBjb29raWVfcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZV9lbmMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfZGVmYXVsdDtcbiAgICB9XG4gICAgc3RhdGljIHNldChuYW1lLCB2YWx1ZSwgZXhwaXJhdGlvbikge1xuICAgICAgICBjb25zdCB2YWx1ZV9lbmMgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICBjb25zdCBleHBpcmF0aW9uX3N0ciA9IGV4cGlyYXRpb24udG9VVENTdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZV9lbmN9OyBwYXRoPS87IGV4cGlyZXM9JHtleHBpcmF0aW9uX3N0cn1gO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29va2llID0gQ29va2llO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBET00ge1xuICAgIHN0YXRpYyBxaWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB9XG4gICAgc3RhdGljIHFzKHNlbGVjdG9yLCBjb250ZXh0ID0gbnVsbCkge1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG4gICAgc3RhdGljIHFzYShzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudExpc3QgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudExpc3QpO1xuICAgIH1cbn1cbmV4cG9ydHMuRE9NID0gRE9NO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29va2llXzEgPSByZXF1aXJlKFwiLi9jb29raWVcIik7XG5leHBvcnRzLkNvb2tpZSA9IGNvb2tpZV8xLkNvb2tpZTtcbnZhciBkb21fMSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcbmV4cG9ydHMuRE9NID0gZG9tXzEuRE9NO1xudmFyIHRpbWVfMSA9IHJlcXVpcmUoXCIuL3RpbWVcIik7XG5leHBvcnRzLlRpbWUgPSB0aW1lXzEuVGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgVGltZSB7XG4gICAgc3RhdGljIGZvcm1hdCh0aW1lLCBzZXR0aW5ncykge1xuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS5sb2NhbGUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5zZXRMb2NhbGUoc2V0dGluZ3MudGltZS5sb2NhbGVDdXN0b20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy50aW1lLnpvbmUgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHNldHRpbmdzLnRpbWUuem9uZUZpeGVkO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0U3RyID0gJ1VUQycgKyAob2Zmc2V0ID49IDAgPyAnKycgOiAnJykgKyBvZmZzZXQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRpbWUgPSB0aW1lLnNldFpvbmUob2Zmc2V0U3RyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS5mb3JtYXQgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdChzZXR0aW5ncy50aW1lLmZvcm1hdEN1c3RvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdCgnZC5MTC55eXl5IEhIOm1tOnNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRpbWUgPSBUaW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBsdXhvbjsiLCJtb2R1bGUuZXhwb3J0cyA9IFZ1ZTsiXSwic291cmNlUm9vdCI6IiJ9