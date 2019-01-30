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
new components_1.NewPostsDetector();
new components_1.Post();
new components_1.PostingForm();
new components_1.PostReferenceMap();
new components_1.Settings();
new components_1.StyleSwitch();
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
        if (settings.common.showVideoOverlay) {
            layout.classList.add('layout--show-thumb-overlay');
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
        __1.eventBus.$on(__1.Events.PostsInserted, this.onPostsInserted.bind(this));
    }
    onPostsInserted(posts) {
        posts.forEach(this.onPostInserted.bind(this));
    }
    onPostInserted(post) {
        const timeElements = utils_1.DOM.qsa('.post time', post);
        timeElements.forEach(this.correctTime.bind(this));
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
                y: Math.max(Math.min(maxY, y), minY),
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
var post_1 = __webpack_require__(/*! ./post */ "./ts/components/post.ts");
exports.Post = post_1.Post;
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
                __1.eventBus.$emit(__1.Events.PostsInserted, posts, false);
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
                __1.eventBus.$emit(__1.Events.PostsInserted, posts, true);
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

/***/ "./ts/components/post.ts":
/*!*******************************!*\
  !*** ./ts/components/post.ts ***!
  \*******************************/
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
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
const draggable_1 = __webpack_require__(/*! ./draggable */ "./ts/components/draggable.ts");
;
class Post {
    constructor() {
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
        __1.eventBus.$on(__1.Events.PostsInserted, this.onPostsInserted.bind(this));
    }
    onReady() {
        const popup = document.createElement('div');
        popup.id = 'popup';
        popup.classList.add('popup', 'hidden');
        document.body.insertBefore(popup, null);
        const self = this;
        this.popupViewModel = new vue_1.default({
            template: `
<div class="popup" id="popup" v-show="!hidden" ref="popup">
  <div class="popup__header" ref="header">
    <span class="popup__title">{{ title }}</span>

    <span class="popup__header-buttons">
      <span class="popup__close"
        v-on:click.stop="onCloseClick()"
        title="Close popup"></span>
    </span>
  </div>

  <div class="popup__body" v-html="content">
  </div>
</div>`,
            mixins: [draggable_1.draggable],
            el: '#popup',
            data() {
                return {
                    hidden: true,
                    type: 'coub',
                    title: null,
                    content: null,
                };
            },
            methods: {
                getDragHandle() {
                    return this.$refs.header;
                },
                getDraggable() {
                    return this.$refs.popup;
                },
                onCloseClick() {
                    self.closePopup();
                },
            },
        });
    }
    onPostsInserted(posts) {
        posts.forEach(this.processOEmbedLinks.bind(this));
    }
    processOEmbedLinks(post) {
        return __awaiter(this, void 0, void 0, function* () {
            const postContent = utils_1.DOM.qs('.post__content', post);
            if (!postContent) {
                return;
            }
            const postMessage = utils_1.DOM.qs('.post__message', post);
            const links = utils_1.DOM.qsa('a[href]', post);
            links.filter(link => !link.hasAttribute('data-processed'))
                .map(link => {
                link.setAttribute('data-processed', 'true');
                return link.getAttribute('href');
            })
                .map(url => url.match('^https?:\/\/(?:www\.)?coub\.com\/view\/([0-9a-z]+)$'))
                .filter(matches => matches && matches.length >= 1)
                .forEach((matches) => __awaiter(this, void 0, void 0, function* () {
                const coubUrl = `https://coub.com/api/v2/coubs/${matches[1]}`;
                const url = `${window.baseUrl}/api/embed?url=${encodeURIComponent(coubUrl)}`;
                try {
                    const response = yield fetch(url, {
                        credentials: 'same-origin',
                    });
                    if (response.status !== 200) {
                        console.warn(`Can\'t load coub '${matches[0]}':`, response.status, response.statusText);
                        return;
                    }
                    const coub = yield response.json();
                    const thumbnailUrl = coub.image_versions.template.replace('%{version}', 'small');
                    const thumbnail = document.createElement('div');
                    thumbnail.classList.add('post__file', 'file');
                    thumbnail.innerHTML = `
<div class="post__file-info file-info filesize">
  <a class="file-info__link" href="https://coub.com/view/${coub.permalink}" target="_blank">Coub</a>
  <span class="file-info__size"></span>
</div>

<a class="file__thumbnail thumbnail thumbnail--video" href="https://coub.com/view/${coub.permalink}" target="_blank">
  <img class="thumbnail__content thumbnail__content_image" src="${thumbnailUrl}" />
</a>`;
                    thumbnail.style.maxHeight = '250px';
                    thumbnail.style.maxWidth = '250px';
                    postContent.insertBefore(thumbnail, postMessage);
                    const link = utils_1.DOM.qs('.thumbnail', thumbnail);
                    link.addEventListener('click', e => {
                        e.preventDefault();
                        this.openCoubInPopup(coub);
                    });
                }
                catch (e) {
                    console.warn(`Can\'t load coub '${matches[0]}':`, e);
                }
            }));
        });
    }
    openCoubInPopup(coub) {
        return __awaiter(this, void 0, void 0, function* () {
            const coubUrl = `https://coub.com/view/${coub.permalink}`;
            const oEmbedUrl = `https://coub.com/api/oembed.json?url=${encodeURIComponent(coubUrl)}&autoplay=true`;
            const url = `${window.baseUrl}/api/embed?url=${encodeURIComponent(oEmbedUrl)}`;
            try {
                const response = yield fetch(url, {
                    credentials: 'same-origin',
                });
                if (response.status !== 200) {
                    console.warn(`Can\'t load coub 'https://coub.com/view/${coub.permalink}':`, response.status, response.statusText);
                    return;
                }
                const json = yield response.json();
                this.popupViewModel.title = 'Coub — ' + coub.title;
                this.popupViewModel.content = json.html;
                this.popupViewModel.setPosition({
                    x: Math.max(0, window.innerWidth / 2 - json.width / 2),
                    y: Math.max(0, window.innerHeight / 2 - json.height / 2),
                });
                this.popupViewModel.hidden = false;
            }
            catch (e) {
                console.warn(`Can\'t load coub 'https://coub.com/view/${coub.permalink}':`, e);
            }
        });
    }
    closePopup() {
        this.popupViewModel.hidden = true;
        this.popupViewModel.content = null;
    }
}
exports.Post = Post;


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
        'posting-form__preview--right': mode == 'default'
          && settings.previewAlign == 'right',
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
                            // Scroll to the last post.
                            setTimeout(() => {
                                const el = utils_1.DOM.qs('.post:nth-last-of-type(1)');
                                if (el) {
                                    el.scrollIntoView(true);
                                }
                            }, 300);
                        }
                    });
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
    onPostsInserted(posts, initial) {
        if (!initial && this.settings.common.scrollToNewPosts) {
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
                    const el = utils_1.DOM.qs('.post:nth-last-of-type(1)');
                    if (el) {
                        el.scrollIntoView(true);
                    }
                }, 300);
            }
        }
        if (this.settings.common.movePostHeaderReflinkIconToDE) {
            posts.forEach(post => {
                // Move reply icon after DE hide icon.
                const replyIcon = utils_1.DOM.qs('.post-header__reflink-wrapper > .post-header__reflink-icon', post);
                const deHide = utils_1.DOM.qs('.de-btn-hide', post);
                if (replyIcon && deHide) {
                    replyIcon.parentElement.insertBefore(deHide, replyIcon);
                }
            });
        }
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
    moveToPost(post, focus = false) {
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
        if (focus) {
            vm.$nextTick(() => {
                const message = vm.$refs.message;
                if (message) {
                    message.focus();
                }
            });
        }
    }
    moveToBottom(focus = false) {
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
        if (focus) {
            vm.$nextTick(() => {
                const message = vm.$refs.message;
                if (message) {
                    message.focus();
                }
            });
        }
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

    <x-checkbox v-model="settings.common.movePostHeaderReflinkIconToDE">
      Move DE hide button before reply icon
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

    <x-checkbox v-model="settings.common.showVideoOverlay">
      Show video overlay
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
        movePostHeaderReflinkIconToDE: false,
        showPostReflinkIcon: false,
        scrollToNewPosts: true,
        smoothScroll: true,
        showVideoOverlay: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBpLnRzIiwid2VicGFjazovLy8uL3RzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2NhcHRjaGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9jb3JyZWN0LXRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9kZWxldGUtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2RyYWdnYWJsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2ZpbGUtcHJldmlldy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbmV3LXBvc3RzLWRldGVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdC1yZWZlcmVuY2UtbWFwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3Bvc3RpbmctZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvc3R5bGUtc3dpdGNoLnRzIiwid2VicGFjazovLy8uL3RzL2V2ZW50LWJ1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvY29va2llLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2RvbS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy90aW1lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImx1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QTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFpRDtBQUNoRTs7QUFFQTtBQUNBLGVBQWUsK0NBQStDO0FBQzlEOztBQUVBO0FBQ0EsZUFBZSwrQ0FBK0M7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtB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QXVDLHFCQUFxQjtBQUM1RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLDZCQUE2QixHQUFHLGdCQUFnQjtBQUNoRCxnREFBZ0QsR0FBRyxLQUFLO0FBQ3hEO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUssR0FBRyxXQUFXLFFBQVEsV0FBVyxlQUFlO0FBQ2xGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLHNDQUFVO0FBQ2pDO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLGdDQUFPO0FBQzNCO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLGtDQUFRO0FBQzdCOzs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLHVCOzs7Ozs7Ozs7OztBQ0FBLHFCIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2FwcC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBBcGkge1xuICAgIHN0YXRpYyBjcmVhdGVQb3N0KHJlcXVlc3QsIG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FqYXgvcG9zdC9jcmVhdGVgO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgncGFyZW50JywgcmVxdWVzdC5wYXJlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3N1YmplY3QnLCByZXF1ZXN0LnN1YmplY3QpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCduYW1lJywgcmVxdWVzdC5uYW1lKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbWVzc2FnZScsIHJlcXVlc3QubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCByZXF1ZXN0LmZpbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgb25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGAke3hoci5zdGF0dXN9ICR7eGhyLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkFwaSA9IEFwaTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHNcIik7XG5jb25zdCBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5uZXcgY29tcG9uZW50c18xLkNhcHRjaGEoKTtcbm5ldyBjb21wb25lbnRzXzEuQ29ycmVjdFRpbWUoKTtcbm5ldyBjb21wb25lbnRzXzEuRGVsZXRlRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5OZXdQb3N0c0RldGVjdG9yKCk7XG5uZXcgY29tcG9uZW50c18xLlBvc3QoKTtcbm5ldyBjb21wb25lbnRzXzEuUG9zdGluZ0Zvcm0oKTtcbm5ldyBjb21wb25lbnRzXzEuUG9zdFJlZmVyZW5jZU1hcCgpO1xubmV3IGNvbXBvbmVudHNfMS5TZXR0aW5ncygpO1xubmV3IGNvbXBvbmVudHNfMS5TdHlsZVN3aXRjaCgpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGUgPT4ge1xuICAgIF8xLmV2ZW50QnVzLiRlbWl0KF8xLkV2ZW50cy5SZWFkeSk7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBzZXR0aW5nc18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgaWYgKHNldHRpbmdzLmNvbW1vbi5zbW9vdGhTY3JvbGwpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzbW9vdGgtc2Nyb2xsJyk7XG4gICAgfVxuICAgIGNvbnN0IGxheW91dCA9IHV0aWxzXzEuRE9NLnFzKCcubGF5b3V0Jyk7XG4gICAgaWYgKGxheW91dCkge1xuICAgICAgICBsYXlvdXQuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LS0nICsgc2V0dGluZ3MuY29tbW9uLmxheW91dCk7XG4gICAgICAgIGlmICghc2V0dGluZ3MuY29tbW9uLnNob3dQb3N0SGVhZGVyUmVmbGlua0ljb24pIHtcbiAgICAgICAgICAgIGxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQtLWhpZGUtcG9zdC1oZWFkZXItcmVmbGluay1pY29uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5jb21tb24uc2hvd1Bvc3RSZWZsaW5rSWNvbikge1xuICAgICAgICAgICAgbGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dC0taGlkZS1wb3N0LXJlZmxpbmstaWNvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy5jb21tb24uc2hvd1ZpZGVvT3ZlcmxheSkge1xuICAgICAgICAgICAgbGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dC0tc2hvdy10aHVtYi1vdmVybGF5Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSB1dGlsc18xLkRPTS5xcygnLmNvbnRlbnRfX3Bvc3RpbmctZm9ybS13cmFwcGVyJyk7XG4gICAgaWYgKGZvcm1XcmFwcGVyKSB7XG4gICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfX3Bvc3RpbmctZm9ybS13cmFwcGVyLS0nICsgc2V0dGluZ3MuZm9ybS5hbGlnbik7XG4gICAgfVxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDYXB0Y2hhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFNyYyA9ICcnO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGFpbWFnZScpO1xuICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTcmMgPSBpbWFnZS5zcmM7XG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVsb2FkLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgY29uc3QgY2FwdGNoYSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYScpO1xuICAgICAgICBjYXB0Y2hhLnZhbHVlID0gJyc7XG4gICAgICAgIGNhcHRjaGEuZm9jdXMoKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGFpbWFnZScpO1xuICAgICAgICBpbWFnZS5zcmMgPSBgJHt0aGlzLm9yaWdpbmFsU3JjfSMke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnRzLkNhcHRjaGEgPSBDYXB0Y2hhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsdXhvbl8xID0gcmVxdWlyZShcImx1eG9uXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIENvcnJlY3RUaW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IF9fMS5TZXR0aW5nc01hbmFnZXIubG9hZCgpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgdGhpcy5vblBvc3RzSW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUG9zdHNJbnNlcnRlZChwb3N0cykge1xuICAgICAgICBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydGVkKHBvc3QpIHtcbiAgICAgICAgY29uc3QgdGltZUVsZW1lbnRzID0gdXRpbHNfMS5ET00ucXNhKCcucG9zdCB0aW1lJywgcG9zdCk7XG4gICAgICAgIHRpbWVFbGVtZW50cy5mb3JFYWNoKHRoaXMuY29ycmVjdFRpbWUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGNvcnJlY3RUaW1lKGVsKSB7XG4gICAgICAgIGNvbnN0IHRpbWVfc3RyID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRldGltZScpO1xuICAgICAgICBpZiAoIXRpbWVfc3RyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZSA9IGx1eG9uXzEuRGF0ZVRpbWUuZnJvbUlTTyh0aW1lX3N0cik7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdXRpbHNfMS5UaW1lLmZvcm1hdCh0aW1lLCB0aGlzLnNldHRpbmdzKTtcbiAgICB9XG59XG5leHBvcnRzLkNvcnJlY3RUaW1lID0gQ29ycmVjdFRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBEZWxldGVGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ2RlbGZvcm0nKTtcbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVsZXRlX3Bvc3RfcGFzc3dvcmQgPSB1dGlsc18xLkRPTS5xaWQoJ2RlbGV0ZXBvc3RwYXNzd29yZCcpO1xuICAgICAgICBpZiAoZGVsZXRlX3Bvc3RfcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIC8vIExvYWQgZGVsZXRlIHBvc3QgcGFzc3dvcmQuXG4gICAgICAgICAgICBkZWxldGVfcG9zdF9wYXNzd29yZC52YWx1ZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3Bhc3N3b3JkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRlbGV0ZUZvcm0gPSBEZWxldGVGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwb2ludGVyRXZlbnRzID0gJ1BvaW50ZXJFdmVudCcgaW4gd2luZG93O1xuY29uc3QgdG91Y2hFdmVudHMgPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XG5leHBvcnRzLmRyYWdnYWJsZSA9IHtcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBjb25zdCBoYW5kbGUgPSB0aGlzLmdldERyYWdIYW5kbGUoKTtcbiAgICAgICAgaWYgKCFoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYWdnYWJsZVJlc2l6ZSA9IHRoaXMub25EcmFnZ2FibGVSZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24gPSB0aGlzLm9uRHJhZ2dhYmxlTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRyYWdnYWJsZVJlc2l6ZSk7XG4gICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHModGhpcy5nZXRQb3NpdGlvbigpKSk7XG4gICAgfSxcbiAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGVSZXNpemUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRyYWdnYWJsZVJlc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlID0gdGhpcy5nZXREcmFnSGFuZGxlKCk7XG4gICAgICAgIGlmIChoYW5kbGUpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldERyYWdIYW5kbGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RHJhZ2dhYmxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBkcmFnZ2FibGUub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgICAgICB5OiBkcmFnZ2FibGUub2Zmc2V0VG9wLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UG9zaXRpb24oY29vcmRzKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUubGVmdCA9IGAke2Nvb3Jkcy54fXB4YDtcbiAgICAgICAgICAgIGRyYWdnYWJsZS5zdHlsZS50b3AgPSBgJHtjb29yZHMueX1weGA7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrQm91bmRzKHsgeCwgeSB9KSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZHJhZ2dhYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgbWluWCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC0gcmVjdC53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogTWF0aC5taW4oTWF0aC5tYXgobWluWCwgeCksIG1heFgpLFxuICAgICAgICAgICAgICAgIHk6IE1hdGgubWF4KE1hdGgubWluKG1heFksIHkpLCBtaW5ZKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ2dhYmxlUmVzaXplKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHRoaXMuZ2V0UG9zaXRpb24oKSkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRyYWdnYWJsZU1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5fZHJhZ2dhYmxlUG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vdXNlRXZlbnRcbiAgICAgICAgICAgICAgICB8fCBwb2ludGVyRXZlbnRzICYmIGUgaW5zdGFuY2VvZiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnU3RhcnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZS5jbGllbnRZLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b3VjaEV2ZW50cyAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdG91Y2guY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG91Y2guY2xpZW50WSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlID0gdGhpcy5vbkRyYWdnYWJsZU1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnZ2FibGVNb3VzZVVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZVVwID0gdGhpcy5vbkRyYWdnYWJsZU1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkRyYWdnYWJsZU1vdXNlTW92ZShlKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IGRlbHRhWCA9IDA7XG4gICAgICAgICAgICBsZXQgZGVsdGFZID0gMDtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW91c2VFdmVudFxuICAgICAgICAgICAgICAgIHx8IHBvaW50ZXJFdmVudHMgJiYgZSBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGUuY2xpZW50WCAtIHRoaXMuX2RyYWdTdGFydC54O1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUuY2xpZW50WSAtIHRoaXMuX2RyYWdTdGFydC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG91Y2hFdmVudHMgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBkZWx0YVggPSB0b3VjaC5jbGllbnRYIC0gdGhpcy5fZHJhZ1N0YXJ0Lng7XG4gICAgICAgICAgICAgICAgZGVsdGFZID0gdG91Y2guY2xpZW50WSAtIHRoaXMuX2RyYWdTdGFydC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9kcmFnZ2FibGVQb3NpdGlvbi54ICsgZGVsdGFYLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2RyYWdnYWJsZVBvc2l0aW9uLnkgKyBkZWx0YVksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ2dhYmxlTW91c2VVcChlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGVNb3VzZVVwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuZXhwb3J0cy5GaWxlUHJldmlldyA9IHZ1ZV8xLmRlZmF1bHQuZXh0ZW5kKHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImZpbGUtcHJldmlld1wiXG4gIHYtb246Y2xpY2s9XCJvbkNsaWNrKCRldmVudClcIlxuICB2LW9uOmRyYWdlbnRlci5zdG9wLnByZXZlbnRcbiAgdi1vbjpkcmFnbGVhdmUuc3RvcC5wcmV2ZW50XG4gIHYtb246ZHJhZ292ZXIuc3RvcC5wcmV2ZW50XG4gIHYtb246ZHJvcC5zdG9wLnByZXZlbnQ9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICA8c3BhbiBjbGFzcz1cImZpbGUtcHJldmlld19faW5mb1wiXG4gICAgdi1pZj1cInR5cGVcIj57eyBpbmZvIH19PC9zcGFuPlxuXG4gIDxpbWcgY2xhc3M9XCJmaWxlLXByZXZpZXdfX2NvbnRlbnRcIlxuICAgIHYtYmluZDpzcmM9XCJzcmNcIlxuICAgIHYtYmluZDp0aXRsZT1cImluZm9cIlxuICAgIHYtaWY9XCJ0eXBlID09PSAnaW1hZ2UnICYmIHNyY1wiIC8+XG4gIDx2aWRlbyBjbGFzcz1cImZpbGUtcHJldmlld19fY29udGVudFwiIGF1dG9wbGF5IGxvb3AgbXV0ZWRcbiAgICB2LWJpbmQ6c3JjPVwic3JjXCJcbiAgICB2LWJpbmQ6dGl0bGU9XCJpbmZvXCJcbiAgICB2LWVsc2UtaWY9XCJ0eXBlID09PSAndmlkZW8nICYmIHNyY1wiPjwvdmlkZW8+XG4gIDxzcGFuIGNsYXNzPVwiZmlsZS1wcmV2aWV3X19sYWJlbFwiXG4gICAgdi1lbHNlPlVwbG9hZCBmaWxlPC9zcGFuPlxuXG4gIDxzbG90Pjwvc2xvdD5cbjwvZGl2PmAsXG4gICAgcHJvcHM6IFsnZmlsZSddLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBuYW1lKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZS5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzaXplKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGUuc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZUZvcm1hdHRlZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXRzID0gWydCJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJ107XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdW5pdHMubGVuZ3RoICYmIHNpemUgPj0gMTAwMDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSAvPSAxMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGAke3NpemUudG9GaXhlZCgyKX0gJHt1bml0c1tpXX1gO1xuICAgICAgICB9LFxuICAgICAgICBpbmZvKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgICAgICAgICAgICAgID8gYCR7dGhpcy5uYW1lfSwgJHt0aGlzLnNpemVGb3JtYXR0ZWR9YFxuICAgICAgICAgICAgICAgIDogdGhpcy5zaXplRm9ybWF0dGVkO1xuICAgICAgICB9LFxuICAgICAgICB0eXBlKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbGUudHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUuc3RhcnRzV2l0aCgndmlkZW8vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd2aWRlbyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUuc3RhcnRzV2l0aCgnYXVkaW8vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdWRpbyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2ltYWdlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoJy53ZWJtJykgfHwgbmFtZS5lbmRzV2l0aCgnLm1wNCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd2aWRlbyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuYW1lLmVuZHNXaXRoKCcubXAzJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2F1ZGlvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnaW1hZ2UnO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgZmlsZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodmFsdWUpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJvcChlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkcm9wJywgZSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2FwdGNoYV8xID0gcmVxdWlyZShcIi4vY2FwdGNoYVwiKTtcbmV4cG9ydHMuQ2FwdGNoYSA9IGNhcHRjaGFfMS5DYXB0Y2hhO1xudmFyIGNvcnJlY3RfdGltZV8xID0gcmVxdWlyZShcIi4vY29ycmVjdC10aW1lXCIpO1xuZXhwb3J0cy5Db3JyZWN0VGltZSA9IGNvcnJlY3RfdGltZV8xLkNvcnJlY3RUaW1lO1xudmFyIGRlbGV0ZV9mb3JtXzEgPSByZXF1aXJlKFwiLi9kZWxldGUtZm9ybVwiKTtcbmV4cG9ydHMuRGVsZXRlRm9ybSA9IGRlbGV0ZV9mb3JtXzEuRGVsZXRlRm9ybTtcbnZhciBkcmFnZ2FibGVfMSA9IHJlcXVpcmUoXCIuL2RyYWdnYWJsZVwiKTtcbmV4cG9ydHMuZHJhZ2dhYmxlID0gZHJhZ2dhYmxlXzEuZHJhZ2dhYmxlO1xudmFyIGZpbGVfcHJldmlld18xID0gcmVxdWlyZShcIi4vZmlsZS1wcmV2aWV3XCIpO1xuZXhwb3J0cy5GaWxlUHJldmlldyA9IGZpbGVfcHJldmlld18xLkZpbGVQcmV2aWV3O1xudmFyIG5ld19wb3N0c19kZXRlY3Rvcl8xID0gcmVxdWlyZShcIi4vbmV3LXBvc3RzLWRldGVjdG9yXCIpO1xuZXhwb3J0cy5OZXdQb3N0c0RldGVjdG9yID0gbmV3X3Bvc3RzX2RldGVjdG9yXzEuTmV3UG9zdHNEZXRlY3RvcjtcbnZhciBwb3N0XzEgPSByZXF1aXJlKFwiLi9wb3N0XCIpO1xuZXhwb3J0cy5Qb3N0ID0gcG9zdF8xLlBvc3Q7XG52YXIgcG9zdGluZ19mb3JtXzEgPSByZXF1aXJlKFwiLi9wb3N0aW5nLWZvcm1cIik7XG5leHBvcnRzLlBvc3RpbmdGb3JtID0gcG9zdGluZ19mb3JtXzEuUG9zdGluZ0Zvcm07XG52YXIgcG9zdF9yZWZlcmVuY2VfbWFwXzEgPSByZXF1aXJlKFwiLi9wb3N0LXJlZmVyZW5jZS1tYXBcIik7XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBwb3N0X3JlZmVyZW5jZV9tYXBfMS5Qb3N0UmVmZXJlbmNlTWFwO1xudmFyIHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBzZXR0aW5nc18xLlNldHRpbmdzO1xudmFyIHN0eWxlX3N3aXRjaF8xID0gcmVxdWlyZShcIi4vc3R5bGUtc3dpdGNoXCIpO1xuZXhwb3J0cy5TdHlsZVN3aXRjaCA9IHN0eWxlX3N3aXRjaF8xLlN0eWxlU3dpdGNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgTmV3UG9zdHNEZXRlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKiBAdG9kbzogcmVtb3ZlIE11dGF0aW9uT2JzZXJ2ZXIgQVNBUCwgd2l0aCBpbnRlZ3JhdGVkIHRocmVhZCB1cGRhdGluZy4gKi9cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSBtdXRhdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBHZXQgYWRkZWQgcG9zdHMsIGlmIGFueS5cbiAgICAgICAgICAgICAgICAubWFwKG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTGlzdCA9IG11dGF0aW9uLmFkZGVkTm9kZXM7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGVsZW1lbnQgaXMgcG9zdCBpdHNlbGYsIHJldHVybiBpdCxcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSBxdWVyeSBmb3IgZWxlbWVudCBjaGlsZHJlbi5cbiAgICAgICAgICAgICAgICAgICAgLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3N0JylcbiAgICAgICAgICAgICAgICAgICAgPyBbZWxlbWVudF1cbiAgICAgICAgICAgICAgICAgICAgOiB1dGlsc18xLkRPTS5xc2EoJy5wb3N0JywgZWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgIC8vIEZsYXR0ZW4gcG9zdHMgYXJyYXkuXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB0b3RhbC5jb25jYXQoY3VycmVudCksIFtdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gRmxhdHRlbiBwb3N0cyBhcnJheS5cbiAgICAgICAgICAgICAgICAucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwuY29uY2F0KGN1cnJlbnQpLCBbXSk7XG4gICAgICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNldHVwIE11dGF0aW9uT2JzZXJ2ZXIuXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0Jyk7XG4gICAgICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5OZXdQb3N0c0RldGVjdG9yID0gTmV3UG9zdHNEZXRlY3RvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RSZWZlcmVuY2VNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvc3RzID0ge307XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSArcG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICAvLyBTdG9yZSBwb3N0LlxuICAgICAgICB0aGlzLnBvc3RzW3Bvc3RJZF0gPSBwb3N0O1xuICAgICAgICAvLyBHZXQgcmVmZXJlbmNlcy5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlRWxlbWVudHMgPSB1dGlsc18xLkRPTS5xc2EoJ2FbZGF0YS10YXJnZXQtcG9zdC1pZF0nLCBwb3N0KTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZUVsZW1lbnRzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBpZDogK2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldC1wb3N0LWlkJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBhdXRob3IgbmFtZSBvZiB0aGUgcmVmZXJlbmNlZCBwb3N0IHRvIHRoZSByZWZlcmVuY2UgbGluayB0ZXh0LlxuICAgICAgICByZWZlcmVuY2VzLmZvckVhY2gocmVmZXJlbmNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0aGlzLnBvc3RzW3JlZmVyZW5jZS5pZF07XG4gICAgICAgICAgICBpZiAoIXBvc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuY2xhc3NMaXN0LmFkZCgncG9zdF9fcmVmZXJlbmNlLWxpbmstYXV0aG9yJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuaW5uZXJIVE1MID0gdGhpcy5nZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSByZWZlcmVuY2UuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSByZWZlcmVuY2UuZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocmVmZXJlbmNlQXV0aG9yLCBuZXh0U2libGluZyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCkge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX19uYW1lJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX190cmlwY29kZScsIHBvc3QpO1xuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVsID8gbmFtZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBjb25zdCB0cmlwY29kZSA9IHRyaXBjb2RlRWwgPyB0cmlwY29kZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBpZiAobmFtZS5sZW5ndGggfHwgdHJpcGNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYCg8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLW5hbWVcIj4ke25hbWV9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICArIGA8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLXRyaXBjb2RlXCI+JHt0cmlwY29kZX08L3NwYW4+KWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYGA7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBQb3N0UmVmZXJlbmNlTWFwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGRyYWdnYWJsZV8xID0gcmVxdWlyZShcIi4vZHJhZ2dhYmxlXCIpO1xuO1xuY2xhc3MgUG9zdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgdGhpcy5vblBvc3RzSW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcHVwLmlkID0gJ3BvcHVwJztcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnLCAnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHBvcHVwLCBudWxsKTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucG9wdXBWaWV3TW9kZWwgPSBuZXcgdnVlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInBvcHVwXCIgaWQ9XCJwb3B1cFwiIHYtc2hvdz1cIiFoaWRkZW5cIiByZWY9XCJwb3B1cFwiPlxuICA8ZGl2IGNsYXNzPVwicG9wdXBfX2hlYWRlclwiIHJlZj1cImhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzPVwicG9wdXBfX3RpdGxlXCI+e3sgdGl0bGUgfX08L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInBvcHVwX19oZWFkZXItYnV0dG9uc1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1cF9fY2xvc2VcIlxuICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJvbkNsb3NlQ2xpY2soKVwiXG4gICAgICAgIHRpdGxlPVwiQ2xvc2UgcG9wdXBcIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicG9wdXBfX2JvZHlcIiB2LWh0bWw9XCJjb250ZW50XCI+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgICAgICAgICAgIG1peGluczogW2RyYWdnYWJsZV8xLmRyYWdnYWJsZV0sXG4gICAgICAgICAgICBlbDogJyNwb3B1cCcsXG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NvdWInLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBnZXREcmFnSGFuZGxlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5oZWFkZXI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXREcmFnZ2FibGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnBvcHVwO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uUG9zdHNJbnNlcnRlZChwb3N0cykge1xuICAgICAgICBwb3N0cy5mb3JFYWNoKHRoaXMucHJvY2Vzc09FbWJlZExpbmtzLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwcm9jZXNzT0VtYmVkTGlua3MocG9zdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcG9zdENvbnRlbnQgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX2NvbnRlbnQnLCBwb3N0KTtcbiAgICAgICAgICAgIGlmICghcG9zdENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwb3N0TWVzc2FnZSA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdF9fbWVzc2FnZScsIHBvc3QpO1xuICAgICAgICAgICAgY29uc3QgbGlua3MgPSB1dGlsc18xLkRPTS5xc2EoJ2FbaHJlZl0nLCBwb3N0KTtcbiAgICAgICAgICAgIGxpbmtzLmZpbHRlcihsaW5rID0+ICFsaW5rLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcm9jZXNzZWQnKSlcbiAgICAgICAgICAgICAgICAubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAodXJsID0+IHVybC5tYXRjaCgnXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP2NvdWJcXC5jb21cXC92aWV3XFwvKFswLTlhLXpdKykkJykpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihtYXRjaGVzID0+IG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgobWF0Y2hlcykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdWJVcmwgPSBgaHR0cHM6Ly9jb3ViLmNvbS9hcGkvdjIvY291YnMvJHttYXRjaGVzWzFdfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FwaS9lbWJlZD91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoY291YlVybCl9YDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2FuXFwndCBsb2FkIGNvdWIgJyR7bWF0Y2hlc1swXX0nOmAsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291YiA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGh1bWJuYWlsVXJsID0gY291Yi5pbWFnZV92ZXJzaW9ucy50ZW1wbGF0ZS5yZXBsYWNlKCcle3ZlcnNpb259JywgJ3NtYWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LmFkZCgncG9zdF9fZmlsZScsICdmaWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5pbm5lckhUTUwgPSBgXG48ZGl2IGNsYXNzPVwicG9zdF9fZmlsZS1pbmZvIGZpbGUtaW5mbyBmaWxlc2l6ZVwiPlxuICA8YSBjbGFzcz1cImZpbGUtaW5mb19fbGlua1wiIGhyZWY9XCJodHRwczovL2NvdWIuY29tL3ZpZXcvJHtjb3ViLnBlcm1hbGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Db3ViPC9hPlxuICA8c3BhbiBjbGFzcz1cImZpbGUtaW5mb19fc2l6ZVwiPjwvc3Bhbj5cbjwvZGl2PlxuXG48YSBjbGFzcz1cImZpbGVfX3RodW1ibmFpbCB0aHVtYm5haWwgdGh1bWJuYWlsLS12aWRlb1wiIGhyZWY9XCJodHRwczovL2NvdWIuY29tL3ZpZXcvJHtjb3ViLnBlcm1hbGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgPGltZyBjbGFzcz1cInRodW1ibmFpbF9fY29udGVudCB0aHVtYm5haWxfX2NvbnRlbnRfaW1hZ2VcIiBzcmM9XCIke3RodW1ibmFpbFVybH1cIiAvPlxuPC9hPmA7XG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5zdHlsZS5tYXhIZWlnaHQgPSAnMjUwcHgnO1xuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuc3R5bGUubWF4V2lkdGggPSAnMjUwcHgnO1xuICAgICAgICAgICAgICAgICAgICBwb3N0Q29udGVudC5pbnNlcnRCZWZvcmUodGh1bWJuYWlsLCBwb3N0TWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB1dGlsc18xLkRPTS5xcygnLnRodW1ibmFpbCcsIHRodW1ibmFpbCk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNvdWJJblBvcHVwKGNvdWIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW5cXCd0IGxvYWQgY291YiAnJHttYXRjaGVzWzBdfSc6YCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3BlbkNvdWJJblBvcHVwKGNvdWIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdWJVcmwgPSBgaHR0cHM6Ly9jb3ViLmNvbS92aWV3LyR7Y291Yi5wZXJtYWxpbmt9YDtcbiAgICAgICAgICAgIGNvbnN0IG9FbWJlZFVybCA9IGBodHRwczovL2NvdWIuY29tL2FwaS9vZW1iZWQuanNvbj91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoY291YlVybCl9JmF1dG9wbGF5PXRydWVgO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FwaS9lbWJlZD91cmw9JHtlbmNvZGVVUklDb21wb25lbnQob0VtYmVkVXJsKX1gO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW5cXCd0IGxvYWQgY291YiAnaHR0cHM6Ly9jb3ViLmNvbS92aWV3LyR7Y291Yi5wZXJtYWxpbmt9JzpgLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFZpZXdNb2RlbC50aXRsZSA9ICdDb3ViIOKAlCAnICsgY291Yi50aXRsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLmNvbnRlbnQgPSBqc29uLmh0bWw7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFZpZXdNb2RlbC5zZXRQb3NpdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHg6IE1hdGgubWF4KDAsIHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIGpzb24ud2lkdGggLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5tYXgoMCwgd2luZG93LmlubmVySGVpZ2h0IC8gMiAtIGpzb24uaGVpZ2h0IC8gMiksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFZpZXdNb2RlbC5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW5cXCd0IGxvYWQgY291YiAnaHR0cHM6Ly9jb3ViLmNvbS92aWV3LyR7Y291Yi5wZXJtYWxpbmt9JzpgLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNsb3NlUG9wdXAoKSB7XG4gICAgICAgIHRoaXMucG9wdXBWaWV3TW9kZWwuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb3B1cFZpZXdNb2RlbC5jb250ZW50ID0gbnVsbDtcbiAgICB9XG59XG5leHBvcnRzLlBvc3QgPSBQb3N0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IGFwaV8xID0gcmVxdWlyZShcIi4uL2FwaVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0aW5nRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNJblRocmVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgdGhpcy5vblBvc3RzSW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKC9cXC9yZXNcXC8oXFxkKykvaSk7XG4gICAgICAgIGNvbnN0IGlzSW5UaHJlYWQgPSAhIW1hdGNoO1xuICAgICAgICBjb25zdCB0aHJlYWRJZCA9IGlzSW5UaHJlYWQgPyArbWF0Y2hbMV0gOiAwO1xuICAgICAgICB0aGlzLmlzSW5UaHJlYWQgPSBpc0luVGhyZWFkO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyB2dWVfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGVsOiBmb3JtLFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxmb3JtIGNsYXNzPVwiY29udGVudF9fcG9zdGluZy1mb3JtIHBvc3RpbmctZm9ybVwiIGlkPVwicG9zdGluZy1mb3JtXCJcbiAgdi1iaW5kOmNsYXNzPVwieyAncG9zdGluZy1mb3JtLS1mbG9hdGluZyc6IHBvc2l0aW9uID09ICdmbG9hdCcgfVwiXG4gIHYtb246c3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdCgpXCIgdi1zaG93PVwiIWhpZGRlblwiXG4gIHJlZj1cImZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyXCIgcmVmPVwiaGVhZGVyXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3RpdGxlXCI+e3tcbiAgICAgIHRocmVhZElkID8gJ1JlcGx5IHRvIHRocmVhZCAjJyArIHRocmVhZElkIDogJ0NyZWF0ZSB0aHJlYWQnXG4gICAgfX08L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyLWJ1dHRvbnNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19yZXNldFwiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cInJlc2V0RmllbGRzKClcIiB0aXRsZT1cIkNsZWFyIGZvcm1cIj48L3NwYW4+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19mbG9hdFwiXG4gICAgICAgIHYtaWY9XCJwb3NpdGlvbiAhPT0gJ2Zsb2F0JyAmJiBtb2RlICE9PSAnbW9iaWxlJ1wiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cIm1ha2VGbG9hdGluZygpXCIgdGl0bGU9XCJGbG9hdGluZyBmb3JtXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcmVzdG9yZVwiXG4gICAgICAgIHYtaWY9XCJwb3NpdGlvbiA9PT0gJ2Zsb2F0JyAmJiBtb2RlICE9PSAnbW9iaWxlJ1wiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cIm1vdmVUb0JvdHRvbSgpXCIgdGl0bGU9XCJNb3ZlIGZvcm0gdG8gYm90dG9tXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fY2xvc2VcIlxuICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJvbkNsb3NlQ2xpY2soKVwiIHRpdGxlPVwiQ2xvc2UgZm9ybVwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2NvbnRlbnRcIj5cbiAgICA8eC1maWxlLXByZXZpZXcgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXdcIlxuICAgICAgdi1iaW5kOmNsYXNzPVwie1xuICAgICAgICAncG9zdGluZy1mb3JtX19wcmV2aWV3LS1yaWdodCc6IG1vZGUgPT0gJ2RlZmF1bHQnXG4gICAgICAgICAgJiYgc2V0dGluZ3MucHJldmlld0FsaWduID09ICdyaWdodCcsXG4gICAgICB9XCJcbiAgICAgIHYtYmluZDpmaWxlPVwiZmlsZVwiXG4gICAgICB2LW9uOmNsaWNrPVwic2hvd0ZpbGVEaWFsb2coKVwiXG4gICAgICB2LW9uOmRyb3A9XCJvbkZpbGVEcm9wKCRldmVudClcIlxuICAgICAgdi1zaG93PVwibW9kZSA9PSAnZGVmYXVsdCcgfHwgZmlsZVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXctcmVtb3ZlXCJcbiAgICAgICAgdi1pZj1cImZpbGVcIiB2LW9uOmNsaWNrLnN0b3A9XCJmaWxlID0gbnVsbFwiPjwvc3Bhbj5cbiAgICA8L3gtZmlsZS1wcmV2aWV3PlxuXG4gICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fbWFpblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19zdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLnN1YmplY3RcIlxuICAgICAgICAgIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICB2LW9uOmNoYW5nZT1cIm9uU3ViamVjdENoYW5nZSgpXCIgLz5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fbmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5uYW1lXCJcbiAgICAgICAgICB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjpjaGFuZ2U9XCJvbk5hbWVDaGFuZ2UoKVwiIC8+XG5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9zdGluZy1mb3JtX19hdHRhY2htZW50XCIgdi1zaG93PVwibW9kZSA9PSAnbW9iaWxlJ1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwicG9zdGluZy1mb3JtX19hdHRhY2htZW50LWlucHV0XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMuZmlsZVwiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIHYtb246Y2hhbmdlPVwib25GaWxlQ2hhbmdlKCRldmVudC50YXJnZXQuZmlsZXMpXCJcbiAgICAgICAgICAgIHJlZj1cImZpbGVcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fc3VibWl0XCJcbiAgICAgICAgICB2LWlmPVwibW9kZSA9PSAnZGVmYXVsdCdcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlJlcGx5PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fbWFya3VwLXJvdyBtYXJrdXBcIlxuICAgICAgICB2LXNob3c9XCIobW9kZSA9PT0gJ21vYmlsZScpICYmIHNldHRpbmdzLnNob3dNYXJrdXBNb2JpbGVcbiAgICAgICAgICB8fCAobW9kZSAhPT0gJ21vYmlsZScpICYmIHNldHRpbmdzLnNob3dNYXJrdXBcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2InKVwiPlxuICAgICAgICAgIDxzdHJvbmc+Yjwvc3Ryb25nPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnaScpXCI+XG4gICAgICAgICAgPGVtPmk8L2VtPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgndScpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3VuZGVybGluZVwiPnU8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzJylcIj5cbiAgICAgICAgICA8ZGVsPnM8L2RlbD5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3N1YicpXCI+XG4gICAgICAgICAgPHN1Yj5zdWI8L3N1Yj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3N1cCcpXCI+XG4gICAgICAgICAgPHN1cD5zdXA8L3N1cD5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2NvZGUnKVwiPlxuICAgICAgICAgIDxjb2RlPmNvZGU8L2NvZGU+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzcG9pbGVyJylcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fc3BvaWxlciBtYXJrdXBfX3Nwb2lsZXItLXZpc2libGVcIj5zcDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3JwJylcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fcnAgbWFya3VwX19ycC0tdmlzaWJsZVwiPnJwPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydFF1b3RlKClcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fcXVvdGVcIj4mZ3Q7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19yb3dcIj5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLm1lc3NhZ2VcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjprZXlkb3duPVwib25NZXNzYWdlS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICB2LW9uOnBhc3RlPVwib25NZXNzYWdlUGFzdGUoJGV2ZW50KVwiXG4gICAgICAgICAgcmVmPVwibWVzc2FnZVwiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwic3RhdHVzXCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3N0YXR1c1wiPnt7IHN0YXR1cyB9fTwvZGl2PlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fc3VibWl0ICBwb3N0aW5nLWZvcm1fX3N1Ym1pdC0tbW9iaWxlXCJcbiAgICAgICAgdi1pZj1cIm1vZGUgPT0gJ21vYmlsZSdcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlJlcGx5PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb3JtPmAsXG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZUZvcm1TdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgY29tcG9uZW50LnNldHRpbmdzLmZvcm0uZmxvYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2Zsb2F0JyA6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbW9iaWxlJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAgICAgdGhyZWFkSWQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJlYWRJZDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LnNldHRpbmdzLmZvcm07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5zYXZlU3ViamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIHNhdmVkIHN1YmplY3QuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YmplY3QgPSBsb2NhbFN0b3JhZ2VbJ3Bvc3RpbmctZm9ybS5zdWJqZWN0J107XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBzYXZlZCBuYW1lLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbG9jYWxTdG9yYWdlWydwb3N0aW5nLWZvcm0ubmFtZSddO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplID0gdGhpcy51cGRhdGVNb2RlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLmZsb2F0UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5jaGVja0JvdW5kcyhwb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICd4LWZpbGUtcHJldmlldyc6IF8xLkZpbGVQcmV2aWV3LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1peGluczogW1xuICAgICAgICAgICAgICAgIF8xLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgZ2V0RHJhZ0hhbmRsZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuaGVhZGVyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0RHJhZ2dhYmxlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiAhPT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZm9ybTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZS5zdHlsZS5sZWZ0ID0gYCR7Y29vcmRzLnh9cHhgO1xuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUudG9wID0gYCR7Y29vcmRzLnl9cHhgO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5mbG9hdFBvc2l0aW9uID0gY29vcmRzO1xuICAgICAgICAgICAgICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUoY29tcG9uZW50LnNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRHJhZ2dhYmxlUmVzaXplKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHModGhpcy5nZXRQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNldEZpZWxkcygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5zYXZlU3ViamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuc3ViamVjdCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLmZpbGUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1ha2VGbG9hdGluZygpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1ha2VGbG9hdGluZygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW92ZVRvQm90dG9tKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG93RmlsZURpYWxvZygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMuZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZU1vZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwID8gJ21vYmlsZScgOiAnZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdtb2JpbGUnICYmIHRoaXMucG9zaXRpb24gPT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQudXBkYXRlUmVwbHlCdXR0b24oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3ViamVjdENoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBzdWJqZWN0LlxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VbJ3Bvc3RpbmctZm9ybS5zdWJqZWN0J10gPSB0aGlzLmZpZWxkcy5zdWJqZWN0O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25OYW1lQ2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLm5hbWUnXSA9IHRoaXMuZmllbGRzLm5hbWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkZpbGVEcm9wKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQgJiYgdGV4dC5tYXRjaCgvaHR0cHM/OlxcL1xcL1stYS16QS1aMC05QDolLl9cXCt+Iz1dezIsfVxcLlthLXpdezIsfVxcYlstYS16QS1aMC05QDolX1xcKy5+Iz8mXFwvPV0qLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB0ZXh0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBFcnJvcjogJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRmlsZUNoYW5nZShmaWxlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBmaWxlcy5sZW5ndGggPyBmaWxlc1swXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbk1lc3NhZ2VLZXlEb3duKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VibWl0IGZvcm0gb24gQ3RybCtFbnRlciBpbiB0aGUgbWVzc2FnZSBmaWVsZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChlLmtleUNvZGUgPT0gMTAgfHwgZS5rZXlDb2RlID09IDEzKSAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlUGFzdGUoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXN0ZSBmaWxlLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZS5jbGlwYm9hcmREYXRhIHx8IGUub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRhdGEuaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGl0ZW0udHlwZS5zdGFydHNXaXRoKCdhdWRpby8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGl0ZW0udHlwZS5zdGFydHNXaXRoKCd2aWRlby8nKTtcbiAgICAgICAgICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRNYXJrdXAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHRoaXMuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5pbmdUYWcgPSBgWyR7dGFnfV1gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zaW5nVGFnID0gYFsvJHt0YWd9XWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoIHx8IGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLmluc2VydFRhZ3NJblBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0ZXh0IGlzIHNlbGVjdGVkLCB3cmFwIGl0IGluIGEgdGFnIHBhaXIuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uYmVnaW4sIHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgb3BlbmluZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5lbmQgKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubGFzdEluZGV4T2Yob3BlbmluZ1RhZywgc2VsZWN0aW9uLmJlZ2luKSA+IG1lc3NhZ2UubGFzdEluZGV4T2YoY2xvc2luZ1RhZywgc2VsZWN0aW9uLmJlZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgY2xvc2luZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb24uZW5kICsgY2xvc2luZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRRdW90ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUVsID0gdGhpcy4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kIC0gbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5maWVsZHMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmVmb3JlID0gbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWZ0ZXIgPSBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUJlZm9yZSA9IGJlZm9yZS5sZW5ndGggJiYgIWJlZm9yZS5lbmRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdMaW5lQWZ0ZXIgPSAhYWZ0ZXIubGVuZ3RoIHx8ICFhZnRlci5zdGFydHNXaXRoKCdcXG4nKSA/ICdcXG4nIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZSA9IGAke25ld0xpbmVCZWZvcmV9PiAke3F1b3RlVGV4dH0ke25ld0xpbmVBZnRlcn1gO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlcixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBxdW90ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VibWl0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSByZXBsYWNlcyB0byB0aGUgbWVzc2FnZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VzID0gY29tcG9uZW50LnNldHRpbmdzLmZvcm0ucmVwbGFjZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVwbGFjZXMucmVkdWNlKChtZXNzYWdlLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChpdGVtLnBhdHRlcm4sICdnbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UocmVnZXhwLCBpdGVtLnJlcGxhY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5maWVsZHMubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0geWllbGQgYXBpXzEuQXBpLmNyZWF0ZVBvc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiB0aGlzLmZpZWxkcy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmZpZWxkcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiB0aGlzLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudCA9IE1hdGguY2VpbChlLmxvYWRlZCAvIGUudG90YWwgKiAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBVcGxvYWRpbmcuLi4gJHtwcm9ncmVzc1BlcmNlbnR9JWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBmb3JtIHRvIHRoZSBpbml0aWFsIGxvY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0luVGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgREUgdGhyZWFkIHVwZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlciA9IHV0aWxzXzEuRE9NLnFzKCcuZGUtdGhyLXVwZGF0ZXItbGluaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlci5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byB0aHJlYWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgRXJyb3I6ICR7ZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNjcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0aGUgbGFzdCBwb3N0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdDpudGgtbGFzdC1vZi10eXBlKDEpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybS1zaG93Jyk7XG4gICAgICAgIGlmIChzaG93QnV0dG9uKSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50ID0gdXRpbHNfMS5ET00ucXMoJy5sYXlvdXRfX2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmbGluaycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZtID0gdGhpcy52aWV3TW9kZWw7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUVsID0gdm0uJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kIC0gbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHZtLmZpZWxkcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZSA9IG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbik7XG4gICAgICAgICAgICAgICAgY29uc3QgYWZ0ZXIgPSBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdMaW5lQmVmb3JlID0gYmVmb3JlLmxlbmd0aCAmJiAhYmVmb3JlLmVuZHNXaXRoKCdcXG4nKSA/ICdcXG4nIDogJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUFmdGVyID0gIWFmdGVyLmxlbmd0aCB8fCAhYWZ0ZXIuc3RhcnRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWZsaW5rJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVvdGVUZXh0ID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFF1b3RlSW5kZXggPSBtZXNzYWdlLmxhc3RJbmRleE9mKCc+PicsIHNlbGVjdGlvbi5iZWdpbik7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVvdGVTYW1lUG9zdCA9IGxhc3RRdW90ZUluZGV4ICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiBtZXNzYWdlLmxhc3RJbmRleE9mKGA+PiR7aWR9YCwgc2VsZWN0aW9uLmJlZ2luKSA+PSBsYXN0UXVvdGVJbmRleDtcbiAgICAgICAgICAgICAgICAvLyBJZiBxdW90aW5nIHRoZSBzYW1lIHBvc3QgYWdhaW4sIG5vdCBpbnNlcnQgaWQuXG4gICAgICAgICAgICAgICAgbGV0IHF1b3RlID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHF1b3RlU2FtZVBvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBxdW90ZVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7bmV3TGluZUJlZm9yZX0+ICR7cXVvdGVUZXh0fSR7bmV3TGluZUFmdGVyfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IHF1b3RlVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtuZXdMaW5lQmVmb3JlfT4+JHtpZH1cXG4+ICR7cXVvdGVUZXh0fSR7bmV3TGluZUFmdGVyfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7bmV3TGluZUJlZm9yZX0+PiR7aWR9JHtuZXdMaW5lQWZ0ZXJ9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHJlcGx5IG1hcmt1cC5cbiAgICAgICAgICAgICAgICB2bS5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXIsXG4gICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0luVGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChxdW90ZVNhbWVQb3N0ICYmICFxdW90ZVRleHQgJiYgIXZtLmhpZGRlbiAmJiB2bS5wb3NpdGlvbiAhPT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLnBvc2l0aW9uICE9PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBmb3JtIHRvIHRoZSBwb3N0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0YXJnZXQuY2xvc2VzdCgnLnBvc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1Bvc3QocG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZtLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBxdW90ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb24uYmVnaW4gKyBxdW90ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblBvc3RzSW5zZXJ0ZWQocG9zdHMsIGluaXRpYWwpIHtcbiAgICAgICAgaWYgKCFpbml0aWFsICYmIHRoaXMuc2V0dGluZ3MuY29tbW9uLnNjcm9sbFRvTmV3UG9zdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGluZ0VsID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgY29uc3QgcG9zdHNIZWlnaHQgPSBwb3N0cy5yZWR1Y2UoKHRvdGFsLCBwb3N0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHBvc3QsICcnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJnaW4gPSBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykpXG4gICAgICAgICAgICAgICAgICAgICsgcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWwgKyBwb3N0Lm9mZnNldEhlaWdodCArIG1hcmdpbjtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgLy8gSWYgaW4gdGhlIGJvdHRvbSBhcmVhLlxuICAgICAgICAgICAgY29uc3QgYm90dG9tT2Zmc2V0ID0gc2Nyb2xsaW5nRWwuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsaW5nRWwuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tQXJlYSA9IHBvc3RzSGVpZ2h0ICsgMS4yNSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGlmIChib3R0b21PZmZzZXQgPCBib3R0b21BcmVhKSB7XG4gICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBsYXN0IHBvc3QuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0Om50aC1sYXN0LW9mLXR5cGUoMSknKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY29tbW9uLm1vdmVQb3N0SGVhZGVyUmVmbGlua0ljb25Ub0RFKSB7XG4gICAgICAgICAgICBwb3N0cy5mb3JFYWNoKHBvc3QgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgcmVwbHkgaWNvbiBhZnRlciBERSBoaWRlIGljb24uXG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbHlJY29uID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0LWhlYWRlcl9fcmVmbGluay13cmFwcGVyID4gLnBvc3QtaGVhZGVyX19yZWZsaW5rLWljb24nLCBwb3N0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZUhpZGUgPSB1dGlsc18xLkRPTS5xcygnLmRlLWJ0bi1oaWRlJywgcG9zdCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcGx5SWNvbiAmJiBkZUhpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlJY29uLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRlSGlkZSwgcmVwbHlJY29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVSZXBseUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKCFzaG93QnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmlld01vZGVsLmhpZGRlbiB8fCB0aGlzLnZpZXdNb2RlbC5wb3NpdGlvbiAhPT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMudmlld01vZGVsLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMudmlld01vZGVsLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgICBtYWtlRmxvYXRpbmcoKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICB2bS5wb3NpdGlvbiA9ICdmbG9hdCc7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybS5mbG9hdCA9IHRydWU7XG4gICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnNldHRpbmdzLmZvcm0uZmxvYXRQb3NpdGlvbjtcbiAgICAgICAgdm0uc2V0UG9zaXRpb24odm0uY2hlY2tCb3VuZHMocG9zaXRpb24pKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgIH1cbiAgICBtb3ZlVG9Qb3N0KHBvc3QsIGZvY3VzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtJyk7XG4gICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICBwb3N0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGZvcm0sIHBvc3QubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICB2bS5wb3NpdGlvbiA9ICdwb3N0JztcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5mb3JtLmZsb2F0ID0gZmFsc2U7XG4gICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b24pIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgICAgICBpZiAoZm9jdXMpIHtcbiAgICAgICAgICAgIHZtLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmVUb0JvdHRvbShmb2N1cyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0td3JhcHBlcicpO1xuICAgICAgICBpZiAoZm9ybSAmJiB3cmFwcGVyKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmluc2VydEJlZm9yZShmb3JtLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgdm0ucG9zaXRpb24gPSAnYm90dG9tJztcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5mb3JtLmZsb2F0ID0gZmFsc2U7XG4gICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgICAgICBpZiAoZm9jdXMpIHtcbiAgICAgICAgICAgIHZtLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0aW5nRm9ybSA9IFBvc3RpbmdGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsdXhvbl8xID0gcmVxdWlyZShcImx1eG9uXCIpO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NGb3JtID0gdXRpbHNfMS5ET00ucWlkKCdzZXR0aW5nc19mb3JtJyk7XG4gICAgICAgIGlmICghc2V0dGluZ3NGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgQ2hlY2tib3ggPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgIDpjaGVja2VkPVwiY2hlY2tlZFwiXG4gICAgICBAY2hhbmdlPVwib25JbnB1dFwiIC8+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L2xhYmVsPlxuPC9kaXY+YCxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgcHJvcDogJ2NoZWNrZWQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2hhbmdlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIG9uSW5wdXQoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCAhdGhpcy5jaGVja2VkKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IFJhZGlvQnV0dG9uID0gdnVlXzEuZGVmYXVsdC5leHRlbmQoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIj5cbiAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICA6Y2hlY2tlZD1cInZhbHVlID09IHNlbGVjdGVkVmFsdWVcIlxuICAgICAgQGNoYW5nZT1cIm9uSW5wdXRcIiAvPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9sYWJlbD5cbjwvZGl2PmAsXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHByb3A6ICdzZWxlY3RlZFZhbHVlJyxcbiAgICAgICAgICAgICAgICBldmVudDogJ2NoYW5nZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU6IFN0cmluZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgb25JbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXcgdnVlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBlbDogJyNzZXR0aW5nc19mb3JtJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiY29udGVudF9fc2V0dGluZ3MtZm9ybSBzZXR0aW5ncy1mb3JtXCIgaWQ9XCJzZXR0aW5nc19mb3JtXCI+XG4gIDx1bCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYnNcIj5cbiAgICA8bGkgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX190YWJcIlxuICAgICAgOmNsYXNzPVwieyAnc2V0dGluZ3MtZm9ybV9fdGFiLS1hY3RpdmUnOiB0YWIgPT09ICdjb21tb24nIH1cIlxuICAgICAgQGNsaWNrPVwidGFiID0gJ2NvbW1vbidcIj5Db21tb248L2xpPlxuXG4gICAgPGxpIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fdGFiXCJcbiAgICAgIDpjbGFzcz1cInsgJ3NldHRpbmdzLWZvcm1fX3RhYi0tYWN0aXZlJzogdGFiID09PSAnZm9ybScgfVwiXG4gICAgICBAY2xpY2s9XCJ0YWIgPSAnZm9ybSdcIj5Gb3JtPC9saT5cblxuICAgIDxsaSBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYlwiXG4gICAgICA6Y2xhc3M9XCJ7ICdzZXR0aW5ncy1mb3JtX190YWItLWFjdGl2ZSc6IHRhYiA9PT0gJ3RpbWUnIH1cIlxuICAgICAgQGNsaWNrPVwidGFiID0gJ3RpbWUnXCI+VGltZTwvbGk+XG4gIDwvdWw+XG5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYi1jb250ZW50XCJcbiAgICB2LXNob3c9XCJ0YWIgPT09ICdjb21tb24nXCI+XG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+VGhyZWFkIEFsaWdubWVudDwvaDM+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLmNvbW1vbi5sYXlvdXRcIiA6dmFsdWU9XCInbGVmdCdcIj5cbiAgICAgIE9uIHRoZSBsZWZ0XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MuY29tbW9uLmxheW91dFwiIDp2YWx1ZT1cIidjZW50ZXInXCI+XG4gICAgICBJbiB0aGUgY2VudGVyXG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPlBvc3RzPC9oMz5cblxuICAgIDx4LWNoZWNrYm94IHYtbW9kZWw9XCJzZXR0aW5ncy5jb21tb24uc2hvd1Bvc3RIZWFkZXJSZWZsaW5rSWNvblwiPlxuICAgICAgU2hvdyByZXBseSBpY29uIGluIHRoZSBwb3N0IGhlYWRlclxuICAgIDwveC1jaGVja2JveD5cblxuICAgIDx4LWNoZWNrYm94IHYtbW9kZWw9XCJzZXR0aW5ncy5jb21tb24ubW92ZVBvc3RIZWFkZXJSZWZsaW5rSWNvblRvREVcIj5cbiAgICAgIE1vdmUgREUgaGlkZSBidXR0b24gYmVmb3JlIHJlcGx5IGljb25cbiAgICA8L3gtY2hlY2tib3g+XG5cbiAgICA8eC1jaGVja2JveCB2LW1vZGVsPVwic2V0dGluZ3MuY29tbW9uLnNob3dQb3N0UmVmbGlua0ljb25cIj5cbiAgICAgIFNob3cgcmVwbHkgaWNvbiBpbiB0aGUgYm90dG9tIHJpZ2h0IGNvcm5lciBvZiBwb3N0IG1lc3NhZ2VcbiAgICA8L3gtY2hlY2tib3g+XG5cbiAgICA8eC1jaGVja2JveCB2LW1vZGVsPVwic2V0dGluZ3MuY29tbW9uLnNjcm9sbFRvTmV3UG9zdHNcIj5cbiAgICAgIFNjcm9sbCB0byBuZXcgcG9zdHNcbiAgICA8L3gtY2hlY2tib3g+XG5cbiAgICA8eC1jaGVja2JveCB2LW1vZGVsPVwic2V0dGluZ3MuY29tbW9uLnNtb290aFNjcm9sbFwiPlxuICAgICAgU21vb3RoIHNjcm9sbGluZ1xuICAgIDwveC1jaGVja2JveD5cblxuICAgIDx4LWNoZWNrYm94IHYtbW9kZWw9XCJzZXR0aW5ncy5jb21tb24uc2hvd1ZpZGVvT3ZlcmxheVwiPlxuICAgICAgU2hvdyB2aWRlbyBvdmVybGF5XG4gICAgPC94LWNoZWNrYm94PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fdGFiLWNvbnRlbnRcIlxuICAgIHYtc2hvdz1cInRhYiA9PT0gJ2Zvcm0nXCI+XG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+Rm9ybSBCZWhhdmlvdXI8L2gzPlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uc2Nyb2xsQm90dG9tXCI+XG4gICAgICBTY3JvbGwgdG8gdGhlIGJvdHRvbSBhZnRlciBwb3N0aW5nXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uc2F2ZVN1YmplY3RcIj5cbiAgICAgIFNhdmUgc3ViamVjdCBhZnRlciBwb3N0aW5nXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uc2F2ZU5hbWVcIj5cbiAgICAgIFNhdmUgbmFtZSBhZnRlciBwb3N0aW5nXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uc2F2ZUZvcm1TdGF0ZVwiPlxuICAgICAgU2F2ZSBmb3JtIGZsb2F0aW5nIHN0YXRlIG9uIHBhZ2UgcmVsb2FkXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+Rm9ybSBBbGlnbm1lbnQ8L2gzPlxuXG4gICAgPHgtcmFkaW8tYnV0dG9uIHYtbW9kZWw9XCJzZXR0aW5ncy5mb3JtLmFsaWduXCIgOnZhbHVlPVwiJ2xlZnQnXCI+XG4gICAgICBPbiB0aGUgbGVmdFxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uYWxpZ25cIiA6dmFsdWU9XCInY2VudGVyJ1wiPlxuICAgICAgSW4gdGhlIGNlbnRlclxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5QcmV2aWV3IEFsaWdubWVudDwvaDM+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLmZvcm0ucHJldmlld0FsaWduXCIgOnZhbHVlPVwiJ2xlZnQnXCI+XG4gICAgICBPbiB0aGUgbGVmdFxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLmZvcm0ucHJldmlld0FsaWduXCIgOnZhbHVlPVwiJ3JpZ2h0J1wiPlxuICAgICAgT24gdGhlIHJpZ2h0XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPk1hcmt1cDwvaDM+XG5cbiAgICA8eC1jaGVja2JveCB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5zaG93TWFya3VwXCI+XG4gICAgICBTaG93IG1hcmt1cCBidXR0b25zXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uc2hvd01hcmt1cE1vYmlsZVwiPlxuICAgICAgU2hvdyBtYXJrdXAgYnV0dG9ucyAobW9iaWxlKVxuICAgIDwveC1jaGVja2JveD5cblxuICAgIDx4LWNoZWNrYm94IHYtbW9kZWw9XCJzZXR0aW5ncy5mb3JtLmluc2VydFRhZ3NJblBhaXJzXCI+XG4gICAgICBJbnNlcnQgdGFncyBpbiBwYWlyc1xuICAgIDwveC1jaGVja2JveD5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPlJlcGxhY2VzPC9oMz5cblxuICAgIDx1bCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xpc3RcIj5cbiAgICAgIDxsaSBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xpc3QtaXRlbVwiXG4gICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBzZXR0aW5ncy5mb3JtLnJlcGxhY2VzXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiXG4gICAgICAgICAgdi1tb2RlbD1cIml0ZW0ucGF0dGVyblwiIHBsYWNlaG9sZGVyPVwiUGF0dGVyblwiIC8+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCJcbiAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5yZXBsYWNlXCIgcGxhY2Vob2xkZXI9XCJSZXBsYWNlXCIgLz5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVSZXBsYWNlQXQoaW5kZXgpXCI+UmVtb3ZlPC9idXR0b24+XG4gICAgICA8L2xpPlxuXG4gICAgICA8bGkgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19saXN0LWl0ZW1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCJcbiAgICAgICAgICB2LW1vZGVsPVwibmV3UmVwbGFjZS5wYXR0ZXJuXCIgcGxhY2Vob2xkZXI9XCJQYXR0ZXJuXCIgLz5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIlxuICAgICAgICAgIHYtbW9kZWw9XCJuZXdSZXBsYWNlLnJlcGxhY2VcIiBwbGFjZWhvbGRlcj1cIlJlcGxhY2VcIiAvPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgIEBjbGljaz1cImFkZFJlcGxhY2UobmV3UmVwbGFjZSlcIj5BZGQ8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYi1jb250ZW50XCJcbiAgICB2LXNob3c9XCJ0YWIgPT09ICd0aW1lJ1wiPlxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPkxhbmd1YWdlPC9oMz5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5sb2NhbGVcIiA6dmFsdWU9XCInZGVmYXVsdCdcIj5cbiAgICAgIEJyb3dzZXIgZGVmYXVsdFxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLnRpbWUubG9jYWxlXCIgOnZhbHVlPVwiJ2N1c3RvbSdcIj5cbiAgICAgIEN1c3RvbVxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCIgcGxhY2Vob2xkZXI9XCJlblwiXG4gICAgICAgIEBjbGljaz1cInNldHRpbmdzLnRpbWUubG9jYWxlID0gJ2N1c3RvbSdcIlxuICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5sb2NhbGVDdXN0b21cIiAvPlxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5Gb3JtYXQ8L2gzPlxuXG4gICAgPHgtcmFkaW8tYnV0dG9uIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLmZvcm1hdFwiIDp2YWx1ZT1cIidkZWZhdWx0J1wiPlxuICAgICAgQnJvd3NlciBkZWZhdWx0XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5mb3JtYXRcIiA6dmFsdWU9XCInY3VzdG9tJ1wiPlxuICAgICAgQ3VzdG9tXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVFRSwgZGQgTU1NIHl5eXkgSEg6bW06c3NcIlxuICAgICAgICBAY2xpY2s9XCJzZXR0aW5ncy50aW1lLmZvcm1hdCA9ICdjdXN0b20nXCJcbiAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnRpbWUuZm9ybWF0Q3VzdG9tXCIgLz5cbiAgICA8L3gtcmFkaW8tYnV0dG9uPlxuXG4gICAgPHA+XG4gICAgICBTZWUgdGhlXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9sdXhvbi9ibG9iL21hc3Rlci9kb2NzL2Zvcm1hdHRpbmcubWQjdGFibGUtb2YtdG9rZW5zXCI+XG4gICAgICAgIGx1eG9uIGRvY3VtZW50YXRpb25cbiAgICAgIDwvYT5cbiAgICAgIGZvciB0aGUgY3VzdG9tIHRva2VucyByZWZlcmVuY2UuXG4gICAgPC9wPlxuXG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+VGltZSB6b25lPC9oMz5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MudGltZS56b25lXCIgOnZhbHVlPVwiJ2RlZmF1bHQnXCI+XG4gICAgICBCcm93c2VyIGRlZmF1bHRcbiAgICA8L3gtcmFkaW8tYnV0dG9uPlxuXG4gICAgPHgtcmFkaW8tYnV0dG9uIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLnpvbmVcIiA6dmFsdWU9XCInZml4ZWQnXCI+XG4gICAgICBGaXhlZCBVVEMgb2Zmc2V0XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiXG4gICAgICAgIG1pbj1cIi05OVwiIG1heD1cIjk5XCJcbiAgICAgICAgQGNsaWNrPVwic2V0dGluZ3MudGltZS56b25lID0gJ2ZpeGVkJ1wiXG4gICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLnpvbmVGaXhlZFwiIC8+XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPkN1cnJlbnQgZm9ybWF0PC9oMz5cblxuICAgIDxwPnt7IHRpbWUgfX08L3A+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19mb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fYnV0dG9uc1wiPlxuICAgICAgPHAgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19zdGF0dXNcIiA+e3sgc3RhdHVzIH19PC9wPlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBzZXR0aW5ncy1mb3JtX19zYXZlXCJcbiAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJzYXZlU2V0dGluZ3MoKVwiPlNhdmU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdGFiOiAnY29tbW9uJyxcbiAgICAgICAgICAgICAgICAgICAgbmV3UmVwbGFjZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJycsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgICAgIC8vIExvYWQgc2V0dGluZ3MgZnJvbSBhIGNvb2tpZVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBfXzEuU2V0dGluZ3NNYW5hZ2VyLmxvYWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lciA9IHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZS5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlUmVwbGFjZUF0KGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybS5yZXBsYWNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWRkUmVwbGFjZShpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKGl0ZW0ucGF0dGVybiwgJ2dtJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEludmFsaWQgcmVndWxhciBleHByZXNzaW9uOiAke2UubWVzc2FnZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybS5yZXBsYWNlcy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdSZXBsYWNlID0geyBwYXR0ZXJuOiAnJywgcmVwbGFjZTogJycgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gbHV4b25fMS5EYXRlVGltZS5mcm9tSlNEYXRlKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gdXRpbHNfMS5UaW1lLmZvcm1hdCh0aW1lLCB0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZSA9ICdJbnZhbGlkIGZvcm1hdCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgICAgICAgICAgICAgX18xLlNldHRpbmdzTWFuYWdlci5zYXZlKHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJbmRpY2F0ZSB0aGF0IHNldHRpbmdzIGFyZSBzYXZlZC5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdTZXR0aW5ncyBzYXZlZC4nO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwIC8gMyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ3gtY2hlY2tib3gnOiBDaGVja2JveCxcbiAgICAgICAgICAgICAgICAneC1yYWRpby1idXR0b24nOiBSYWRpb0J1dHRvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuU2V0dGluZ3MgPSBTZXR0aW5ncztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFN0eWxlU3dpdGNoIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSB7fTtcbiAgICAgICAgLy8gUGFyc2Ugc2VsZWN0YWJsZSBzdHlsZXMgZnJvbSA8aGVhZD5cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gdXRpbHNfMS5ET00ucXNhKCdsaW5rW3RpdGxlXScpO1xuICAgICAgICBzdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHN0eWxlLnRpdGxlO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gc3R5bGUuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICB0aGlzLnN0eWxlc1t0aXRsZV0gPSB1cmw7XG4gICAgICAgICAgICBpZiAoIXN0eWxlLmhhc0F0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBHZXQgc2VsZWN0ZWQgc3R5bGVcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRfc3R5bGUgPSB1dGlsc18xLkNvb2tpZS5nZXQoJ3RpbnlpYl9zdHlsZScsICdTeW50aHdhdmUnKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZShzZWxlY3RlZF9zdHlsZSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBzdHlsZV9zd2l0Y2hlciA9IHV0aWxzXzEuRE9NLnFpZCgnc3R5bGUtc3dpdGNoZXInKTtcbiAgICAgICAgaWYgKHN0eWxlX3N3aXRjaGVyKSB7XG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSBzdHlsZSBzd2l0Y2hlciB3aWRnZXRcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBzdHlsZXNbaV07XG4gICAgICAgICAgICAgICAgc3R5bGVfc3dpdGNoZXIuaW5uZXJIVE1MICs9IGA8b3B0aW9uIGNsYXNzPVwic3R5bGUtc3dpdGNoZXJfX29wdGlvblwiIHZhbHVlPVwiJHt0aXRsZX1cIj4ke3RpdGxlfTwvb3B0aW9uPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZXQgc3R5bGUgY2hhbmdlIGNhbGxiYWNrXG4gICAgICAgICAgICBzdHlsZV9zd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdHlsZShzdHlsZV9zd2l0Y2hlci52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRTdHlsZShzdHlsZSkge1xuICAgICAgICBjb25zdCBoZWFkID0gdXRpbHNfMS5ET00ucXMoJ2hlYWQnKTtcbiAgICAgICAgLy8gSWYgbm8gPGhlYWQ+IGVsZW1lbnQsIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKCFoZWFkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRfc3R5bGUgPSB1dGlsc18xLkRPTS5xcygnbGlua1tkYXRhLXNlbGVjdGVkXScpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRfc3R5bGUpIHtcbiAgICAgICAgICAgIC8vIElmIHN0eWxlIGFscmVhZHkgc2VsZWN0ZWQsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZF9zdHlsZS50aXRsZSA9PT0gc3R5bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXNseSBzZWxlY3RlZCBzdHlsZSBmcm9tIDxoZWFkPlxuICAgICAgICAgICAgc2VsZWN0ZWRfc3R5bGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGN1cnJlbnRseSBzZWxlY3RlZCBzdHlsZSB0byA8aGVhZD5cbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5zdHlsZXNbc3R5bGVdO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBsaW5rLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgICAgICBsaW5rLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAvLyBTYXZlIHNlbGVjdGVkIHN0eWxlXG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25fZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGV4cGlyYXRpb25fZGF0ZS5zZXRUaW1lKGV4cGlyYXRpb25fZGF0ZS5nZXRUaW1lKCkgKyAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgdXRpbHNfMS5Db29raWUuc2V0KCd0aW55aWJfc3R5bGUnLCBzdHlsZSwgZXhwaXJhdGlvbl9kYXRlKTtcbiAgICB9XG59XG5leHBvcnRzLlN0eWxlU3dpdGNoID0gU3R5bGVTd2l0Y2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgZXZlbnRCdXMgPSBuZXcgdnVlXzEuZGVmYXVsdCgpO1xuZXhwb3J0cy5ldmVudEJ1cyA9IGV2ZW50QnVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRXZlbnRzO1xuKGZ1bmN0aW9uIChFdmVudHMpIHtcbiAgICBFdmVudHNbXCJSZWFkeVwiXSA9IFwicmVhZHlcIjtcbiAgICBFdmVudHNbXCJQb3N0c0luc2VydGVkXCJdID0gXCJwb3N0c19pbnNlcnRlZFwiO1xuICAgIEV2ZW50c1tcIlBvc3RDcmVhdGVkXCJdID0gXCJwb3N0X2NyZWF0ZWRcIjtcbiAgICBFdmVudHNbXCJJbnNlcnRNYXJrdXBcIl0gPSBcImluc2VydF9tYXJrdXBcIjtcbn0pKEV2ZW50cyA9IGV4cG9ydHMuRXZlbnRzIHx8IChleHBvcnRzLkV2ZW50cyA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcGlfMSA9IHJlcXVpcmUoXCIuL2FwaVwiKTtcbmV4cG9ydHMuQXBpID0gYXBpXzEuQXBpO1xudmFyIGV2ZW50X2J1c18xID0gcmVxdWlyZShcIi4vZXZlbnQtYnVzXCIpO1xuZXhwb3J0cy5ldmVudEJ1cyA9IGV2ZW50X2J1c18xLmV2ZW50QnVzO1xudmFyIGV2ZW50c18xID0gcmVxdWlyZShcIi4vZXZlbnRzXCIpO1xuZXhwb3J0cy5FdmVudHMgPSBldmVudHNfMS5FdmVudHM7XG52YXIgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuZXhwb3J0cy5TZXR0aW5nc01hbmFnZXIgPSBzZXR0aW5nc18xLlNldHRpbmdzTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc2V0dGluZ3NLZXkgPSAnc2V0dGluZ3MnO1xuY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICBsYXlvdXQ6ICdsZWZ0JyxcbiAgICAgICAgc2hvd1Bvc3RIZWFkZXJSZWZsaW5rSWNvbjogdHJ1ZSxcbiAgICAgICAgbW92ZVBvc3RIZWFkZXJSZWZsaW5rSWNvblRvREU6IGZhbHNlLFxuICAgICAgICBzaG93UG9zdFJlZmxpbmtJY29uOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsVG9OZXdQb3N0czogdHJ1ZSxcbiAgICAgICAgc21vb3RoU2Nyb2xsOiB0cnVlLFxuICAgICAgICBzaG93VmlkZW9PdmVybGF5OiBmYWxzZSxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICBwcmV2aWV3QWxpZ246ICdyaWdodCcsXG4gICAgICAgIHNjcm9sbEJvdHRvbTogdHJ1ZSxcbiAgICAgICAgc2hvd01hcmt1cDogdHJ1ZSxcbiAgICAgICAgc2hvd01hcmt1cE1vYmlsZTogZmFsc2UsXG4gICAgICAgIGluc2VydFRhZ3NJblBhaXJzOiB0cnVlLFxuICAgICAgICBzYXZlRm9ybVN0YXRlOiBmYWxzZSxcbiAgICAgICAgc2F2ZVN1YmplY3Q6IGZhbHNlLFxuICAgICAgICBzYXZlTmFtZTogdHJ1ZSxcbiAgICAgICAgZmxvYXQ6IGZhbHNlLFxuICAgICAgICBmbG9hdFBvc2l0aW9uOiB7IHg6IDEwMCwgeTogMTAwIH0sXG4gICAgICAgIHJlcGxhY2VzOiBbXSxcbiAgICB9LFxuICAgIHRpbWU6IHtcbiAgICAgICAgbG9jYWxlOiAnZGVmYXVsdCcsXG4gICAgICAgIGxvY2FsZUN1c3RvbTogJycsXG4gICAgICAgIHpvbmU6ICdkZWZhdWx0JyxcbiAgICAgICAgem9uZUZpeGVkOiAwLFxuICAgICAgICBmb3JtYXQ6ICdkZWZhdWx0JyxcbiAgICAgICAgZm9ybWF0Q3VzdG9tOiAnJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cbmZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0KTtcbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuY2xhc3MgU2V0dGluZ3NNYW5hZ2VyIHtcbiAgICBzdGF0aWMgbG9hZCgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNldHRpbmdzS2V5KSk7XG4gICAgICAgIHJldHVybiBtZXJnZShkZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgICB9XG4gICAgc3RhdGljIHNhdmUoc2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2V0dGluZ3NLZXksIGRhdGEpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2V0dGluZ3NNYW5hZ2VyID0gU2V0dGluZ3NNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBDb29raWUge1xuICAgIHN0YXRpYyBnZXQobmFtZSwgX2RlZmF1bHQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZV9zdHIgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xuICAgICAgICBjb25zdCBjb29raWVfcGFydHMgPSBjb29raWVfc3RyLnNwbGl0KGA7ICR7bmFtZX09YCk7XG4gICAgICAgIGlmIChjb29raWVfcGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZV9lbmMgPSBjb29raWVfcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZV9lbmMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfZGVmYXVsdDtcbiAgICB9XG4gICAgc3RhdGljIHNldChuYW1lLCB2YWx1ZSwgZXhwaXJhdGlvbikge1xuICAgICAgICBjb25zdCB2YWx1ZV9lbmMgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICBjb25zdCBleHBpcmF0aW9uX3N0ciA9IGV4cGlyYXRpb24udG9VVENTdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZV9lbmN9OyBwYXRoPS87IGV4cGlyZXM9JHtleHBpcmF0aW9uX3N0cn1gO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29va2llID0gQ29va2llO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBET00ge1xuICAgIHN0YXRpYyBxaWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB9XG4gICAgc3RhdGljIHFzKHNlbGVjdG9yLCBjb250ZXh0ID0gbnVsbCkge1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG4gICAgc3RhdGljIHFzYShzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudExpc3QgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudExpc3QpO1xuICAgIH1cbn1cbmV4cG9ydHMuRE9NID0gRE9NO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29va2llXzEgPSByZXF1aXJlKFwiLi9jb29raWVcIik7XG5leHBvcnRzLkNvb2tpZSA9IGNvb2tpZV8xLkNvb2tpZTtcbnZhciBkb21fMSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcbmV4cG9ydHMuRE9NID0gZG9tXzEuRE9NO1xudmFyIHRpbWVfMSA9IHJlcXVpcmUoXCIuL3RpbWVcIik7XG5leHBvcnRzLlRpbWUgPSB0aW1lXzEuVGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgVGltZSB7XG4gICAgc3RhdGljIGZvcm1hdCh0aW1lLCBzZXR0aW5ncykge1xuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS5sb2NhbGUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5zZXRMb2NhbGUoc2V0dGluZ3MudGltZS5sb2NhbGVDdXN0b20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy50aW1lLnpvbmUgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHNldHRpbmdzLnRpbWUuem9uZUZpeGVkO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0U3RyID0gJ1VUQycgKyAob2Zmc2V0ID49IDAgPyAnKycgOiAnJykgKyBvZmZzZXQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRpbWUgPSB0aW1lLnNldFpvbmUob2Zmc2V0U3RyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS5mb3JtYXQgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdChzZXR0aW5ncy50aW1lLmZvcm1hdEN1c3RvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdCgnZC5MTC55eXl5IEhIOm1tOnNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRpbWUgPSBUaW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBsdXhvbjsiLCJtb2R1bGUuZXhwb3J0cyA9IFZ1ZTsiXSwic291cmNlUm9vdCI6IiJ9