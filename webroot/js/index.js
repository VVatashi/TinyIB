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
                const response = yield fetch(url, {
                    credentials: 'same-origin',
                });
                const coub = yield response.json();
                const thumbnailUrl = coub.image_versions.template.replace('%{version}', 'small');
                const thumbnail = document.createElement('div');
                thumbnail.classList.add('post__file', 'file');
                thumbnail.innerHTML = `
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
            }));
        });
    }
    openCoubInPopup(coub) {
        return __awaiter(this, void 0, void 0, function* () {
            const coubUrl = `https://coub.com/view/${coub.permalink}`;
            const oEmbedUrl = `https://coub.com/api/oembed.json?url=${encodeURIComponent(coubUrl)}&autoplay=true`;
            const url = `${window.baseUrl}/api/embed?url=${encodeURIComponent(oEmbedUrl)}`;
            const response = yield fetch(url);
            const json = yield response.json();
            this.popupViewModel.title = 'Coub — ' + coub.title;
            this.popupViewModel.content = json.html;
            this.popupViewModel.setPosition({
                x: window.innerWidth / 2 - json.width / 2,
                y: window.innerHeight / 2 - json.height / 2,
            });
            this.popupViewModel.hidden = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBpLnRzIiwid2VicGFjazovLy8uL3RzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2NhcHRjaGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9jb3JyZWN0LXRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9kZWxldGUtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2RyYWdnYWJsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2ZpbGUtcHJldmlldy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbmV3LXBvc3RzLWRldGVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdC1yZWZlcmVuY2UtbWFwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3Bvc3RpbmctZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvc3R5bGUtc3dpdGNoLnRzIiwid2VicGFjazovLy8uL3RzL2V2ZW50LWJ1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvY29va2llLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2RvbS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy90aW1lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImx1eG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiVnVlXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxXQUFXLEdBQUcsZUFBZTtBQUNuRTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxXQUFXLG1CQUFPLENBQUMsd0JBQUc7QUFDdEIscUJBQXFCLG1CQUFPLENBQUMsOENBQWM7QUFDM0MsbUJBQW1CLG1CQUFPLENBQUMsb0NBQVk7QUFDdkMsZ0JBQWdCLG1CQUFPLENBQUMsb0NBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQ1k7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxZQUFZLG1CQUFPLENBQUMseUJBQUk7QUFDeEIsZ0JBQWdCLG1CQUFPLENBQUMscUNBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUIsR0FBRyxxQkFBcUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxvQkFBTztBQUMvQixZQUFZLG1CQUFPLENBQUMseUJBQUk7QUFDeEIsZ0JBQWdCLG1CQUFPLENBQUMscUNBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLHlCQUFJO0FBQ3hCLGdCQUFnQixtQkFBTyxDQUFDLHFDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxTQUFTO0FBQy9DLHFDQUFxQyxTQUFTO0FBQzlDLFNBQVM7QUFDVCxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDMUxhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyxnQkFBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0NBQWtDO0FBQ3BEO0FBQ0E7QUFDQSxzQkFBc0IsZ0JBQWdCLEdBQUcsU0FBUztBQUNsRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCQUFxQixVQUFVLElBQUksbUJBQW1CO0FBQ3REO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlHWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGdCQUFnQixtQkFBTyxDQUFDLDZDQUFXO0FBQ25DO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsdURBQWdCO0FBQzdDO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMscURBQWU7QUFDM0M7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxpREFBYTtBQUN2QztBQUNBLHFCQUFxQixtQkFBTyxDQUFDLHVEQUFnQjtBQUM3QztBQUNBLDJCQUEyQixtQkFBTyxDQUFDLG1FQUFzQjtBQUN6RDtBQUNBLGFBQWEsbUJBQU8sQ0FBQyx1Q0FBUTtBQUM3QjtBQUNBLHFCQUFxQixtQkFBTyxDQUFDLHVEQUFnQjtBQUM3QztBQUNBLDJCQUEyQixtQkFBTyxDQUFDLG1FQUFzQjtBQUN6RDtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFZO0FBQ3JDO0FBQ0EscUJBQXFCLG1CQUFPLENBQUMsdURBQWdCO0FBQzdDOzs7Ozs7Ozs7Ozs7O0FDdkJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLHlCQUFJO0FBQ3hCLGdCQUFnQixtQkFBTyxDQUFDLHFDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLHlCQUFJO0FBQ3hCLGdCQUFnQixtQkFBTyxDQUFDLHFDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxLQUFLO0FBQ3BFLGlFQUFpRSxTQUFTO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakRhO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxZQUFZLG1CQUFPLENBQUMseUJBQUk7QUFDeEIsZ0JBQWdCLG1CQUFPLENBQUMscUNBQVU7QUFDbEMsOEJBQThCLG1CQUFPLENBQUMsZ0JBQUs7QUFDM0Msb0JBQW9CLG1CQUFPLENBQUMsaURBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLFdBQVc7QUFDNUUsK0JBQStCLGVBQWUsaUJBQWlCLDRCQUE0QjtBQUMzRjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsNkVBQTZFLFFBQVE7QUFDckY7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLGVBQWU7QUFDbkcsa0VBQWtFLGFBQWE7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxlQUFlO0FBQ3BFLHNFQUFzRSw0QkFBNEI7QUFDbEcsMkJBQTJCLGVBQWUsaUJBQWlCLDhCQUE4QjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BJYTtBQUNiO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsZ0JBQUs7QUFDM0MsV0FBVyxtQkFBTyxDQUFDLG1DQUFHO0FBQ3RCLFlBQVksbUJBQU8sQ0FBQyx5QkFBSTtBQUN4QixjQUFjLG1CQUFPLENBQUMsMkJBQVE7QUFDOUIsZ0JBQWdCLG1CQUFPLENBQUMscUNBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdEQUFnRDtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0QsVUFBVTs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RCw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixHQUFHLFFBQVEsR0FBRztBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsV0FBVyxHQUFHLGVBQWU7QUFDN0Y7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLElBQUk7QUFDL0MsNENBQTRDLElBQUk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxjQUFjLElBQUksVUFBVSxFQUFFLGFBQWE7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsOERBQThELGdCQUFnQjtBQUM5RSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEdBQUc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYyxJQUFJLFVBQVUsRUFBRSxhQUFhO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWMsSUFBSSxHQUFHLE1BQU0sVUFBVSxFQUFFLGFBQWE7QUFDakYsNkJBQTZCLGNBQWMsSUFBSSxHQUFHLEVBQUUsYUFBYTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdnBCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsb0JBQU87QUFDL0IsOEJBQThCLG1CQUFPLENBQUMsZ0JBQUs7QUFDM0MsWUFBWSxtQkFBTyxDQUFDLHlCQUFJO0FBQ3hCLGdCQUFnQixtQkFBTyxDQUFDLHFDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFpRDtBQUNoRTs7QUFFQTtBQUNBLGVBQWUsK0NBQStDO0FBQzlEOztBQUVBO0FBQ0EsZUFBZSwrQ0FBK0M7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLFFBQVE7QUFDakI7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxVQUFVOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7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VyxlQUFlO0FBQ2xGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLHNDQUFVO0FBQ2pDO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLGdDQUFPO0FBQzNCO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLGtDQUFRO0FBQzdCOzs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLHVCOzs7Ozs7Ozs7OztBQ0FBLHFCIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2FwcC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBBcGkge1xuICAgIHN0YXRpYyBjcmVhdGVQb3N0KHJlcXVlc3QsIG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FqYXgvcG9zdC9jcmVhdGVgO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgncGFyZW50JywgcmVxdWVzdC5wYXJlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3N1YmplY3QnLCByZXF1ZXN0LnN1YmplY3QpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCduYW1lJywgcmVxdWVzdC5uYW1lKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbWVzc2FnZScsIHJlcXVlc3QubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCByZXF1ZXN0LmZpbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgb25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGAke3hoci5zdGF0dXN9ICR7eGhyLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkFwaSA9IEFwaTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHNcIik7XG5jb25zdCBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5uZXcgY29tcG9uZW50c18xLkNhcHRjaGEoKTtcbm5ldyBjb21wb25lbnRzXzEuQ29ycmVjdFRpbWUoKTtcbm5ldyBjb21wb25lbnRzXzEuRGVsZXRlRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5OZXdQb3N0c0RldGVjdG9yKCk7XG5uZXcgY29tcG9uZW50c18xLlBvc3QoKTtcbm5ldyBjb21wb25lbnRzXzEuUG9zdGluZ0Zvcm0oKTtcbm5ldyBjb21wb25lbnRzXzEuUG9zdFJlZmVyZW5jZU1hcCgpO1xubmV3IGNvbXBvbmVudHNfMS5TZXR0aW5ncygpO1xubmV3IGNvbXBvbmVudHNfMS5TdHlsZVN3aXRjaCgpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGUgPT4ge1xuICAgIF8xLmV2ZW50QnVzLiRlbWl0KF8xLkV2ZW50cy5SZWFkeSk7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBzZXR0aW5nc18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgaWYgKHNldHRpbmdzLmNvbW1vbi5zbW9vdGhTY3JvbGwpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzbW9vdGgtc2Nyb2xsJyk7XG4gICAgfVxuICAgIGNvbnN0IGxheW91dCA9IHV0aWxzXzEuRE9NLnFzKCcubGF5b3V0Jyk7XG4gICAgaWYgKGxheW91dCkge1xuICAgICAgICBsYXlvdXQuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LS0nICsgc2V0dGluZ3MuY29tbW9uLmxheW91dCk7XG4gICAgICAgIGlmICghc2V0dGluZ3MuY29tbW9uLnNob3dQb3N0SGVhZGVyUmVmbGlua0ljb24pIHtcbiAgICAgICAgICAgIGxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQtLWhpZGUtcG9zdC1oZWFkZXItcmVmbGluay1pY29uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5jb21tb24uc2hvd1Bvc3RSZWZsaW5rSWNvbikge1xuICAgICAgICAgICAgbGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dC0taGlkZS1wb3N0LXJlZmxpbmstaWNvbicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGZvcm1XcmFwcGVyID0gdXRpbHNfMS5ET00ucXMoJy5jb250ZW50X19wb3N0aW5nLWZvcm0td3JhcHBlcicpO1xuICAgIGlmIChmb3JtV3JhcHBlcikge1xuICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50X19wb3N0aW5nLWZvcm0td3JhcHBlci0tJyArIHNldHRpbmdzLmZvcm0uYWxpZ24pO1xuICAgIH1cbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ2FwdGNoYSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxTcmMgPSAnJztcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdXRpbHNfMS5ET00ucWlkKCdjYXB0Y2hhaW1hZ2UnKTtcbiAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsU3JjID0gaW1hZ2Uuc3JjO1xuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbG9hZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGNhcHRjaGEgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGEnKTtcbiAgICAgICAgY2FwdGNoYS52YWx1ZSA9ICcnO1xuICAgICAgICBjYXB0Y2hhLmZvY3VzKCk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdXRpbHNfMS5ET00ucWlkKCdjYXB0Y2hhaW1hZ2UnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYCR7dGhpcy5vcmlnaW5hbFNyY30jJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0cy5DYXB0Y2hhID0gQ2FwdGNoYTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbHV4b25fMSA9IHJlcXVpcmUoXCJsdXhvblwiKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDb3JyZWN0VGltZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBfXzEuU2V0dGluZ3NNYW5hZ2VyLmxvYWQoKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHV0aWxzXzEuRE9NLnFzYSgnLnBvc3QtaGVhZGVyX19kYXRldGltZScpO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gdGhpcy5jb3JyZWN0VGltZShlbGVtZW50KSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydChwb3N0KSB7XG4gICAgICAgIGNvbnN0IHRpbWVfZWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX19kYXRldGltZScsIHBvc3QpO1xuICAgICAgICBpZiAoIXRpbWVfZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvcnJlY3RUaW1lKHRpbWVfZWwpO1xuICAgIH1cbiAgICBjb3JyZWN0VGltZShlbCkge1xuICAgICAgICBjb25zdCB0aW1lX3N0ciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0ZXRpbWUnKTtcbiAgICAgICAgaWYgKCF0aW1lX3N0cikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWUgPSBsdXhvbl8xLkRhdGVUaW1lLmZyb21JU08odGltZV9zdHIpO1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHV0aWxzXzEuVGltZS5mb3JtYXQodGltZSwgdGhpcy5zZXR0aW5ncyk7XG4gICAgfVxufVxuZXhwb3J0cy5Db3JyZWN0VGltZSA9IENvcnJlY3RUaW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgRGVsZXRlRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBmb3JtID0gdXRpbHNfMS5ET00ucWlkKCdkZWxmb3JtJyk7XG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlbGV0ZV9wb3N0X3Bhc3N3b3JkID0gdXRpbHNfMS5ET00ucWlkKCdkZWxldGVwb3N0cGFzc3dvcmQnKTtcbiAgICAgICAgaWYgKGRlbGV0ZV9wb3N0X3Bhc3N3b3JkKSB7XG4gICAgICAgICAgICAvLyBMb2FkIGRlbGV0ZSBwb3N0IHBhc3N3b3JkLlxuICAgICAgICAgICAgZGVsZXRlX3Bvc3RfcGFzc3dvcmQudmFsdWUgPSB1dGlsc18xLkNvb2tpZS5nZXQoJ3RpbnlpYl9wYXNzd29yZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5EZWxldGVGb3JtID0gRGVsZXRlRm9ybTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcG9pbnRlckV2ZW50cyA9ICdQb2ludGVyRXZlbnQnIGluIHdpbmRvdztcbmNvbnN0IHRvdWNoRXZlbnRzID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xuZXhwb3J0cy5kcmFnZ2FibGUgPSB7XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlID0gdGhpcy5nZXREcmFnSGFuZGxlKCk7XG4gICAgICAgIGlmICghaGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmFnZ2FibGVSZXNpemUgPSB0aGlzLm9uRHJhZ2dhYmxlUmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duID0gdGhpcy5vbkRyYWdnYWJsZU1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kcmFnZ2FibGVSZXNpemUpO1xuICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHRoaXMuZ2V0UG9zaXRpb24oKSkpO1xuICAgIH0sXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlUmVzaXplKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kcmFnZ2FibGVSZXNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuZ2V0RHJhZ0hhbmRsZSgpO1xuICAgICAgICBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgIGhhbmRsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGFuZGxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXREcmFnSGFuZGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERyYWdnYWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogZHJhZ2dhYmxlLm9mZnNldExlZnQsXG4gICAgICAgICAgICAgICAgeTogZHJhZ2dhYmxlLm9mZnNldFRvcCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHNldFBvc2l0aW9uKGNvb3Jkcykge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJhZ2dhYmxlLnN0eWxlLmxlZnQgPSBgJHtjb29yZHMueH1weGA7XG4gICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUudG9wID0gYCR7Y29vcmRzLnl9cHhgO1xuICAgICAgICB9LFxuICAgICAgICBjaGVja0JvdW5kcyh7IHgsIHkgfSkge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGRyYWdnYWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IG1pblggPSAwO1xuICAgICAgICAgICAgY29uc3QgbWluWSA9IDA7XG4gICAgICAgICAgICBjb25zdCBtYXhYID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIHJlY3Qud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IE1hdGgubWluKE1hdGgubWF4KG1pblgsIHgpLCBtYXhYKSxcbiAgICAgICAgICAgICAgICB5OiBNYXRoLm1pbihNYXRoLm1heChtaW5ZLCB5KSwgbWF4WSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBvbkRyYWdnYWJsZVJlc2l6ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5jaGVja0JvdW5kcyh0aGlzLmdldFBvc2l0aW9uKCkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EcmFnZ2FibGVNb3VzZURvd24oZSkge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnYWJsZVBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb3VzZUV2ZW50XG4gICAgICAgICAgICAgICAgfHwgcG9pbnRlckV2ZW50cyAmJiBlIGluc3RhbmNlb2YgUG9pbnRlckV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGUuY2xpZW50WSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG91Y2hFdmVudHMgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnU3RhcnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRvdWNoLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRvdWNoLmNsaWVudFksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSA9IHRoaXMub25EcmFnZ2FibGVNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ2dhYmxlTW91c2VVcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCA9IHRoaXMub25EcmFnZ2FibGVNb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25EcmFnZ2FibGVNb3VzZU1vdmUoZSkge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBkZWx0YVggPSAwO1xuICAgICAgICAgICAgbGV0IGRlbHRhWSA9IDA7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vdXNlRXZlbnRcbiAgICAgICAgICAgICAgICB8fCBwb2ludGVyRXZlbnRzICYmIGUgaW5zdGFuY2VvZiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkZWx0YVggPSBlLmNsaWVudFggLSB0aGlzLl9kcmFnU3RhcnQueDtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBlLmNsaWVudFkgLSB0aGlzLl9kcmFnU3RhcnQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvdWNoRXZlbnRzICYmIGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsdGFYID0gdG91Y2guY2xpZW50WCAtIHRoaXMuX2RyYWdTdGFydC54O1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IHRvdWNoLmNsaWVudFkgLSB0aGlzLl9kcmFnU3RhcnQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5jaGVja0JvdW5kcyh7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5fZHJhZ2dhYmxlUG9zaXRpb24ueCArIGRlbHRhWCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9kcmFnZ2FibGVQb3NpdGlvbi55ICsgZGVsdGFZLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRyYWdnYWJsZU1vdXNlVXAoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlTW91c2VVcCkge1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRyYWdnYWJsZU1vdXNlVXAgPSBudWxsO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmV4cG9ydHMuRmlsZVByZXZpZXcgPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJmaWxlLXByZXZpZXdcIlxuICB2LW9uOmNsaWNrPVwib25DbGljaygkZXZlbnQpXCJcbiAgdi1vbjpkcmFnZW50ZXIuc3RvcC5wcmV2ZW50XG4gIHYtb246ZHJhZ2xlYXZlLnN0b3AucHJldmVudFxuICB2LW9uOmRyYWdvdmVyLnN0b3AucHJldmVudFxuICB2LW9uOmRyb3Auc3RvcC5wcmV2ZW50PVwib25Ecm9wKCRldmVudClcIj5cbiAgPHNwYW4gY2xhc3M9XCJmaWxlLXByZXZpZXdfX2luZm9cIlxuICAgIHYtaWY9XCJ0eXBlXCI+e3sgaW5mbyB9fTwvc3Bhbj5cblxuICA8aW1nIGNsYXNzPVwiZmlsZS1wcmV2aWV3X19jb250ZW50XCJcbiAgICB2LWJpbmQ6c3JjPVwic3JjXCJcbiAgICB2LWJpbmQ6dGl0bGU9XCJpbmZvXCJcbiAgICB2LWlmPVwidHlwZSA9PT0gJ2ltYWdlJyAmJiBzcmNcIiAvPlxuICA8dmlkZW8gY2xhc3M9XCJmaWxlLXByZXZpZXdfX2NvbnRlbnRcIiBhdXRvcGxheSBsb29wIG11dGVkXG4gICAgdi1iaW5kOnNyYz1cInNyY1wiXG4gICAgdi1iaW5kOnRpdGxlPVwiaW5mb1wiXG4gICAgdi1lbHNlLWlmPVwidHlwZSA9PT0gJ3ZpZGVvJyAmJiBzcmNcIj48L3ZpZGVvPlxuICA8c3BhbiBjbGFzcz1cImZpbGUtcHJldmlld19fbGFiZWxcIlxuICAgIHYtZWxzZT5VcGxvYWQgZmlsZTwvc3Bhbj5cblxuICA8c2xvdD48L3Nsb3Q+XG48L2Rpdj5gLFxuICAgIHByb3BzOiBbJ2ZpbGUnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjOiBudWxsLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbmFtZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUubmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGUubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5maWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlLnNpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNpemVGb3JtYXR0ZWQoKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0cyA9IFsnQicsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQiddO1xuICAgICAgICAgICAgbGV0IHNpemUgPSB0aGlzLnNpemU7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IHVuaXRzLmxlbmd0aCAmJiBzaXplID49IDEwMDA7ICsraSkge1xuICAgICAgICAgICAgICAgIHNpemUgLz0gMTAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgJHtzaXplLnRvRml4ZWQoMil9ICR7dW5pdHNbaV19YDtcbiAgICAgICAgfSxcbiAgICAgICAgaW5mbygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICAgICAgICAgICAgICA/IGAke3RoaXMubmFtZX0sICR7dGhpcy5zaXplRm9ybWF0dGVkfWBcbiAgICAgICAgICAgICAgICA6IHRoaXMuc2l6ZUZvcm1hdHRlZDtcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5maWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5maWxlLnR5cGU7XG4gICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ3ZpZGVvLycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAndmlkZW8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ2F1ZGlvLycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYXVkaW8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdpbWFnZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgICAgIGlmIChuYW1lLmVuZHNXaXRoKCcud2VibScpIHx8IG5hbWUuZW5kc1dpdGgoJy5tcDQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAndmlkZW8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmFtZS5lbmRzV2l0aCgnLm1wMycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhdWRpbyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ2ltYWdlJztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGZpbGUodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljayhlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRyb3AoZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZHJvcCcsIGUpO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNhcHRjaGFfMSA9IHJlcXVpcmUoXCIuL2NhcHRjaGFcIik7XG5leHBvcnRzLkNhcHRjaGEgPSBjYXB0Y2hhXzEuQ2FwdGNoYTtcbnZhciBjb3JyZWN0X3RpbWVfMSA9IHJlcXVpcmUoXCIuL2NvcnJlY3QtdGltZVwiKTtcbmV4cG9ydHMuQ29ycmVjdFRpbWUgPSBjb3JyZWN0X3RpbWVfMS5Db3JyZWN0VGltZTtcbnZhciBkZWxldGVfZm9ybV8xID0gcmVxdWlyZShcIi4vZGVsZXRlLWZvcm1cIik7XG5leHBvcnRzLkRlbGV0ZUZvcm0gPSBkZWxldGVfZm9ybV8xLkRlbGV0ZUZvcm07XG52YXIgZHJhZ2dhYmxlXzEgPSByZXF1aXJlKFwiLi9kcmFnZ2FibGVcIik7XG5leHBvcnRzLmRyYWdnYWJsZSA9IGRyYWdnYWJsZV8xLmRyYWdnYWJsZTtcbnZhciBmaWxlX3ByZXZpZXdfMSA9IHJlcXVpcmUoXCIuL2ZpbGUtcHJldmlld1wiKTtcbmV4cG9ydHMuRmlsZVByZXZpZXcgPSBmaWxlX3ByZXZpZXdfMS5GaWxlUHJldmlldztcbnZhciBuZXdfcG9zdHNfZGV0ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL25ldy1wb3N0cy1kZXRlY3RvclwiKTtcbmV4cG9ydHMuTmV3UG9zdHNEZXRlY3RvciA9IG5ld19wb3N0c19kZXRlY3Rvcl8xLk5ld1Bvc3RzRGV0ZWN0b3I7XG52YXIgcG9zdF8xID0gcmVxdWlyZShcIi4vcG9zdFwiKTtcbmV4cG9ydHMuUG9zdCA9IHBvc3RfMS5Qb3N0O1xudmFyIHBvc3RpbmdfZm9ybV8xID0gcmVxdWlyZShcIi4vcG9zdGluZy1mb3JtXCIpO1xuZXhwb3J0cy5Qb3N0aW5nRm9ybSA9IHBvc3RpbmdfZm9ybV8xLlBvc3RpbmdGb3JtO1xudmFyIHBvc3RfcmVmZXJlbmNlX21hcF8xID0gcmVxdWlyZShcIi4vcG9zdC1yZWZlcmVuY2UtbWFwXCIpO1xuZXhwb3J0cy5Qb3N0UmVmZXJlbmNlTWFwID0gcG9zdF9yZWZlcmVuY2VfbWFwXzEuUG9zdFJlZmVyZW5jZU1hcDtcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzID0gc2V0dGluZ3NfMS5TZXR0aW5ncztcbnZhciBzdHlsZV9zd2l0Y2hfMSA9IHJlcXVpcmUoXCIuL3N0eWxlLXN3aXRjaFwiKTtcbmV4cG9ydHMuU3R5bGVTd2l0Y2ggPSBzdHlsZV9zd2l0Y2hfMS5TdHlsZVN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIE5ld1Bvc3RzRGV0ZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKiogQHRvZG86IHJlbW92ZSBNdXRhdGlvbk9ic2VydmVyIEFTQVAsIHdpdGggaW50ZWdyYXRlZCB0aHJlYWQgdXBkYXRpbmcuICovXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gbXV0YXRpb25zXG4gICAgICAgICAgICAgICAgLy8gR2V0IGFkZGVkIHBvc3RzLCBpZiBhbnkuXG4gICAgICAgICAgICAgICAgLm1hcChtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUxpc3QgPSBtdXRhdGlvbi5hZGRlZE5vZGVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50IGlzIHBvc3QgaXRzZWxmLCByZXR1cm4gaXQsXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgcXVlcnkgZm9yIGVsZW1lbnQgY2hpbGRyZW4uXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncG9zdCcpXG4gICAgICAgICAgICAgICAgICAgID8gW2VsZW1lbnRdXG4gICAgICAgICAgICAgICAgICAgIDogdXRpbHNfMS5ET00ucXNhKCcucG9zdCcsIGVsZW1lbnQpKVxuICAgICAgICAgICAgICAgICAgICAvLyBGbGF0dGVuIHBvc3RzIGFycmF5LlxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwuY29uY2F0KGN1cnJlbnQpLCBbXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIEZsYXR0ZW4gcG9zdHMgYXJyYXkuXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsLmNvbmNhdChjdXJyZW50KSwgW10pO1xuICAgICAgICAgICAgaWYgKHBvc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCBwb3N0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNldHVwIE11dGF0aW9uT2JzZXJ2ZXIuXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0Jyk7XG4gICAgICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5OZXdQb3N0c0RldGVjdG9yID0gTmV3UG9zdHNEZXRlY3RvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RSZWZlcmVuY2VNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvc3RzID0ge307XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSArcG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICAvLyBTdG9yZSBwb3N0LlxuICAgICAgICB0aGlzLnBvc3RzW3Bvc3RJZF0gPSBwb3N0O1xuICAgICAgICAvLyBHZXQgcmVmZXJlbmNlcy5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlRWxlbWVudHMgPSB1dGlsc18xLkRPTS5xc2EoJ2FbZGF0YS10YXJnZXQtcG9zdC1pZF0nLCBwb3N0KTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZUVsZW1lbnRzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBpZDogK2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldC1wb3N0LWlkJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBhdXRob3IgbmFtZSBvZiB0aGUgcmVmZXJlbmNlZCBwb3N0IHRvIHRoZSByZWZlcmVuY2UgbGluayB0ZXh0LlxuICAgICAgICByZWZlcmVuY2VzLmZvckVhY2gocmVmZXJlbmNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0aGlzLnBvc3RzW3JlZmVyZW5jZS5pZF07XG4gICAgICAgICAgICBpZiAoIXBvc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuY2xhc3NMaXN0LmFkZCgncG9zdF9fcmVmZXJlbmNlLWxpbmstYXV0aG9yJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuaW5uZXJIVE1MID0gdGhpcy5nZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSByZWZlcmVuY2UuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSByZWZlcmVuY2UuZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocmVmZXJlbmNlQXV0aG9yLCBuZXh0U2libGluZyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCkge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX19uYW1lJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX190cmlwY29kZScsIHBvc3QpO1xuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVsID8gbmFtZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBjb25zdCB0cmlwY29kZSA9IHRyaXBjb2RlRWwgPyB0cmlwY29kZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBpZiAobmFtZS5sZW5ndGggfHwgdHJpcGNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYCg8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLW5hbWVcIj4ke25hbWV9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICArIGA8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLXRyaXBjb2RlXCI+JHt0cmlwY29kZX08L3NwYW4+KWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYGA7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBQb3N0UmVmZXJlbmNlTWFwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGRyYWdnYWJsZV8xID0gcmVxdWlyZShcIi4vZHJhZ2dhYmxlXCIpO1xuO1xuY2xhc3MgUG9zdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgdGhpcy5vblBvc3RzSW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcHVwLmlkID0gJ3BvcHVwJztcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnLCAnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHBvcHVwLCBudWxsKTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucG9wdXBWaWV3TW9kZWwgPSBuZXcgdnVlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInBvcHVwXCIgaWQ9XCJwb3B1cFwiIHYtc2hvdz1cIiFoaWRkZW5cIiByZWY9XCJwb3B1cFwiPlxuICA8ZGl2IGNsYXNzPVwicG9wdXBfX2hlYWRlclwiIHJlZj1cImhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzPVwicG9wdXBfX3RpdGxlXCI+e3sgdGl0bGUgfX08L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInBvcHVwX19oZWFkZXItYnV0dG9uc1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1cF9fY2xvc2VcIlxuICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJvbkNsb3NlQ2xpY2soKVwiXG4gICAgICAgIHRpdGxlPVwiQ2xvc2UgcG9wdXBcIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicG9wdXBfX2JvZHlcIiB2LWh0bWw9XCJjb250ZW50XCI+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgICAgICAgICAgIG1peGluczogW2RyYWdnYWJsZV8xLmRyYWdnYWJsZV0sXG4gICAgICAgICAgICBlbDogJyNwb3B1cCcsXG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NvdWInLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBnZXREcmFnSGFuZGxlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5oZWFkZXI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXREcmFnZ2FibGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnBvcHVwO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uUG9zdHNJbnNlcnRlZChwb3N0cykge1xuICAgICAgICBwb3N0cy5mb3JFYWNoKHRoaXMucHJvY2Vzc09FbWJlZExpbmtzLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwcm9jZXNzT0VtYmVkTGlua3MocG9zdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcG9zdENvbnRlbnQgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX2NvbnRlbnQnLCBwb3N0KTtcbiAgICAgICAgICAgIGlmICghcG9zdENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwb3N0TWVzc2FnZSA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdF9fbWVzc2FnZScsIHBvc3QpO1xuICAgICAgICAgICAgY29uc3QgbGlua3MgPSB1dGlsc18xLkRPTS5xc2EoJ2FbaHJlZl0nLCBwb3N0KTtcbiAgICAgICAgICAgIGxpbmtzLmZpbHRlcihsaW5rID0+ICFsaW5rLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcm9jZXNzZWQnKSlcbiAgICAgICAgICAgICAgICAubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAodXJsID0+IHVybC5tYXRjaCgnXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP2NvdWJcXC5jb21cXC92aWV3XFwvKFswLTlhLXpdKykkJykpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihtYXRjaGVzID0+IG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgobWF0Y2hlcykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdWJVcmwgPSBgaHR0cHM6Ly9jb3ViLmNvbS9hcGkvdjIvY291YnMvJHttYXRjaGVzWzFdfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FwaS9lbWJlZD91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoY291YlVybCl9YDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3ViID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbFVybCA9IGNvdWIuaW1hZ2VfdmVyc2lvbnMudGVtcGxhdGUucmVwbGFjZSgnJXt2ZXJzaW9ufScsICdzbWFsbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbC5jbGFzc0xpc3QuYWRkKCdwb3N0X19maWxlJywgJ2ZpbGUnKTtcbiAgICAgICAgICAgICAgICB0aHVtYm5haWwuaW5uZXJIVE1MID0gYFxuPGEgY2xhc3M9XCJmaWxlX190aHVtYm5haWwgdGh1bWJuYWlsIHRodW1ibmFpbC0tdmlkZW9cIiBocmVmPVwiaHR0cHM6Ly9jb3ViLmNvbS92aWV3LyR7Y291Yi5wZXJtYWxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gIDxpbWcgY2xhc3M9XCJ0aHVtYm5haWxfX2NvbnRlbnQgdGh1bWJuYWlsX19jb250ZW50X2ltYWdlXCIgc3JjPVwiJHt0aHVtYm5haWxVcmx9XCIgLz5cbjwvYT5gO1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbC5zdHlsZS5tYXhIZWlnaHQgPSAnMjUwcHgnO1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbC5zdHlsZS5tYXhXaWR0aCA9ICcyNTBweCc7XG4gICAgICAgICAgICAgICAgcG9zdENvbnRlbnQuaW5zZXJ0QmVmb3JlKHRodW1ibmFpbCwgcG9zdE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB1dGlsc18xLkRPTS5xcygnLnRodW1ibmFpbCcsIHRodW1ibmFpbCk7XG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNvdWJJblBvcHVwKGNvdWIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3BlbkNvdWJJblBvcHVwKGNvdWIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdWJVcmwgPSBgaHR0cHM6Ly9jb3ViLmNvbS92aWV3LyR7Y291Yi5wZXJtYWxpbmt9YDtcbiAgICAgICAgICAgIGNvbnN0IG9FbWJlZFVybCA9IGBodHRwczovL2NvdWIuY29tL2FwaS9vZW1iZWQuanNvbj91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoY291YlVybCl9JmF1dG9wbGF5PXRydWVgO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FwaS9lbWJlZD91cmw9JHtlbmNvZGVVUklDb21wb25lbnQob0VtYmVkVXJsKX1gO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwpO1xuICAgICAgICAgICAgY29uc3QganNvbiA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBWaWV3TW9kZWwudGl0bGUgPSAnQ291YiDigJQgJyArIGNvdWIudGl0bGU7XG4gICAgICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLmNvbnRlbnQgPSBqc29uLmh0bWw7XG4gICAgICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLnNldFBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICB4OiB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSBqc29uLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0ganNvbi5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xvc2VQb3B1cCgpIHtcbiAgICAgICAgdGhpcy5wb3B1cFZpZXdNb2RlbC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLmNvbnRlbnQgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9zdCA9IFBvc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgYXBpXzEgPSByZXF1aXJlKFwiLi4vYXBpXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RpbmdGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0luVGhyZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBfXzEuU2V0dGluZ3NNYW5hZ2VyLmxvYWQoKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCB0aGlzLm9uUG9zdHNJbnNlcnRlZC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtJyk7XG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdGNoID0gd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goL1xcL3Jlc1xcLyhcXGQrKS9pKTtcbiAgICAgICAgY29uc3QgaXNJblRocmVhZCA9ICEhbWF0Y2g7XG4gICAgICAgIGNvbnN0IHRocmVhZElkID0gaXNJblRocmVhZCA/ICttYXRjaFsxXSA6IDA7XG4gICAgICAgIHRoaXMuaXNJblRocmVhZCA9IGlzSW5UaHJlYWQ7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3IHZ1ZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgZWw6IGZvcm0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGZvcm0gY2xhc3M9XCJjb250ZW50X19wb3N0aW5nLWZvcm0gcG9zdGluZy1mb3JtXCIgaWQ9XCJwb3N0aW5nLWZvcm1cIlxuICB2LWJpbmQ6Y2xhc3M9XCJ7ICdwb3N0aW5nLWZvcm0tLWZsb2F0aW5nJzogcG9zaXRpb24gPT0gJ2Zsb2F0JyB9XCJcbiAgdi1vbjpzdWJtaXQucHJldmVudD1cIm9uU3VibWl0KClcIiB2LXNob3c9XCIhaGlkZGVuXCJcbiAgcmVmPVwiZm9ybVwiPlxuICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19oZWFkZXJcIiByZWY9XCJoZWFkZXJcIj5cbiAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fdGl0bGVcIj57e1xuICAgICAgdGhyZWFkSWQgPyAnUmVwbHkgdG8gdGhyZWFkICMnICsgdGhyZWFkSWQgOiAnQ3JlYXRlIHRocmVhZCdcbiAgICB9fTwvc3Bhbj5cblxuICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19oZWFkZXItYnV0dG9uc1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3Jlc2V0XCJcbiAgICAgICAgdi1vbjpjbGljay5zdG9wPVwicmVzZXRGaWVsZHMoKVwiIHRpdGxlPVwiQ2xlYXIgZm9ybVwiPjwvc3Bhbj5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2Zsb2F0XCJcbiAgICAgICAgdi1pZj1cInBvc2l0aW9uICE9PSAnZmxvYXQnICYmIG1vZGUgIT09ICdtb2JpbGUnXCJcbiAgICAgICAgdi1vbjpjbGljay5zdG9wPVwibWFrZUZsb2F0aW5nKClcIiB0aXRsZT1cIkZsb2F0aW5nIGZvcm1cIj48L3NwYW4+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19yZXN0b3JlXCJcbiAgICAgICAgdi1pZj1cInBvc2l0aW9uID09PSAnZmxvYXQnICYmIG1vZGUgIT09ICdtb2JpbGUnXCJcbiAgICAgICAgdi1vbjpjbGljay5zdG9wPVwibW92ZVRvQm90dG9tKClcIiB0aXRsZT1cIk1vdmUgZm9ybSB0byBib3R0b21cIj48L3NwYW4+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19jbG9zZVwiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cIm9uQ2xvc2VDbGljaygpXCIgdGl0bGU9XCJDbG9zZSBmb3JtXCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fY29udGVudFwiPlxuICAgIDx4LWZpbGUtcHJldmlldyBjbGFzcz1cInBvc3RpbmctZm9ybV9fcHJldmlld1wiXG4gICAgICB2LWJpbmQ6Y2xhc3M9XCJ7XG4gICAgICAgICdwb3N0aW5nLWZvcm1fX3ByZXZpZXctLW1vYmlsZSc6IG1vZGUgPT0gJ21vYmlsZScsXG4gICAgICAgICdwb3N0aW5nLWZvcm1fX3ByZXZpZXctLXJpZ2h0Jzogc2V0dGluZ3MucHJldmlld0FsaWduID09ICdyaWdodCcsXG4gICAgICB9XCJcbiAgICAgIHYtYmluZDpmaWxlPVwiZmlsZVwiXG4gICAgICB2LW9uOmNsaWNrPVwic2hvd0ZpbGVEaWFsb2coKVwiXG4gICAgICB2LW9uOmRyb3A9XCJvbkZpbGVEcm9wKCRldmVudClcIlxuICAgICAgdi1zaG93PVwibW9kZSA9PSAnZGVmYXVsdCcgfHwgZmlsZVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXctcmVtb3ZlXCJcbiAgICAgICAgdi1pZj1cImZpbGVcIiB2LW9uOmNsaWNrLnN0b3A9XCJmaWxlID0gbnVsbFwiPjwvc3Bhbj5cbiAgICA8L3gtZmlsZS1wcmV2aWV3PlxuXG4gICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fbWFpblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19zdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLnN1YmplY3RcIlxuICAgICAgICAgIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICB2LW9uOmNoYW5nZT1cIm9uU3ViamVjdENoYW5nZSgpXCIgLz5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fbmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5uYW1lXCJcbiAgICAgICAgICB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjpjaGFuZ2U9XCJvbk5hbWVDaGFuZ2UoKVwiIC8+XG5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9zdGluZy1mb3JtX19hdHRhY2htZW50XCIgdi1zaG93PVwibW9kZSA9PSAnbW9iaWxlJ1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwicG9zdGluZy1mb3JtX19hdHRhY2htZW50LWlucHV0XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMuZmlsZVwiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIHYtb246Y2hhbmdlPVwib25GaWxlQ2hhbmdlKCRldmVudC50YXJnZXQuZmlsZXMpXCJcbiAgICAgICAgICAgIHJlZj1cImZpbGVcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fc3VibWl0XCJcbiAgICAgICAgICB2LWlmPVwibW9kZSA9PSAnZGVmYXVsdCdcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlJlcGx5PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fbWFya3VwLXJvdyBtYXJrdXBcIlxuICAgICAgICB2LXNob3c9XCIobW9kZSA9PT0gJ21vYmlsZScpICYmIHNldHRpbmdzLnNob3dNYXJrdXBNb2JpbGVcbiAgICAgICAgICB8fCAobW9kZSAhPT0gJ21vYmlsZScpICYmIHNldHRpbmdzLnNob3dNYXJrdXBcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2InKVwiPlxuICAgICAgICAgIDxzdHJvbmc+Yjwvc3Ryb25nPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnaScpXCI+XG4gICAgICAgICAgPGVtPmk8L2VtPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgndScpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3VuZGVybGluZVwiPnU8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzJylcIj5cbiAgICAgICAgICA8ZGVsPnM8L2RlbD5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3N1YicpXCI+XG4gICAgICAgICAgPHN1Yj5zdWI8L3N1Yj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3N1cCcpXCI+XG4gICAgICAgICAgPHN1cD5zdXA8L3N1cD5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2NvZGUnKVwiPlxuICAgICAgICAgIDxjb2RlPmNvZGU8L2NvZGU+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzcG9pbGVyJylcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fc3BvaWxlciBtYXJrdXBfX3Nwb2lsZXItLXZpc2libGVcIj5zcDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3JwJylcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fcnAgbWFya3VwX19ycC0tdmlzaWJsZVwiPnJwPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydFF1b3RlKClcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fcXVvdGVcIj4mZ3Q7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19yb3dcIj5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLm1lc3NhZ2VcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjprZXlkb3duPVwib25NZXNzYWdlS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICB2LW9uOnBhc3RlPVwib25NZXNzYWdlUGFzdGUoJGV2ZW50KVwiXG4gICAgICAgICAgcmVmPVwibWVzc2FnZVwiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwic3RhdHVzXCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3N0YXR1c1wiPnt7IHN0YXR1cyB9fTwvZGl2PlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fc3VibWl0ICBwb3N0aW5nLWZvcm1fX3N1Ym1pdC0tbW9iaWxlXCJcbiAgICAgICAgdi1pZj1cIm1vZGUgPT0gJ21vYmlsZSdcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlJlcGx5PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb3JtPmAsXG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZUZvcm1TdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgY29tcG9uZW50LnNldHRpbmdzLmZvcm0uZmxvYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2Zsb2F0JyA6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbW9iaWxlJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAgICAgdGhyZWFkSWQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aHJlYWRJZDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50LnNldHRpbmdzLmZvcm07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5zYXZlU3ViamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIHNhdmVkIHN1YmplY3QuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1YmplY3QgPSBsb2NhbFN0b3JhZ2VbJ3Bvc3RpbmctZm9ybS5zdWJqZWN0J107XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBzYXZlZCBuYW1lLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbG9jYWxTdG9yYWdlWydwb3N0aW5nLWZvcm0ubmFtZSddO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb2RlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplID0gdGhpcy51cGRhdGVNb2RlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA9PT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLmZsb2F0UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5jaGVja0JvdW5kcyhwb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVzaXplID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICd4LWZpbGUtcHJldmlldyc6IF8xLkZpbGVQcmV2aWV3LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1peGluczogW1xuICAgICAgICAgICAgICAgIF8xLmRyYWdnYWJsZSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgZ2V0RHJhZ0hhbmRsZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuaGVhZGVyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0RHJhZ2dhYmxlKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiAhPT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuZm9ybTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKGNvb3Jkcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZS5zdHlsZS5sZWZ0ID0gYCR7Y29vcmRzLnh9cHhgO1xuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUudG9wID0gYCR7Y29vcmRzLnl9cHhgO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5mbG9hdFBvc2l0aW9uID0gY29vcmRzO1xuICAgICAgICAgICAgICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUoY29tcG9uZW50LnNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRHJhZ2dhYmxlUmVzaXplKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHModGhpcy5nZXRQb3NpdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNldEZpZWxkcygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5zYXZlU3ViamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuc3ViamVjdCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLmZpbGUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1ha2VGbG9hdGluZygpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1ha2VGbG9hdGluZygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW92ZVRvQm90dG9tKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG93RmlsZURpYWxvZygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMuZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZU1vZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwID8gJ21vYmlsZScgOiAnZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdtb2JpbGUnICYmIHRoaXMucG9zaXRpb24gPT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQudXBkYXRlUmVwbHlCdXR0b24oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3ViamVjdENoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBzdWJqZWN0LlxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VbJ3Bvc3RpbmctZm9ybS5zdWJqZWN0J10gPSB0aGlzLmZpZWxkcy5zdWJqZWN0O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25OYW1lQ2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLm5hbWUnXSA9IHRoaXMuZmllbGRzLm5hbWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkZpbGVEcm9wKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQgJiYgdGV4dC5tYXRjaCgvaHR0cHM/OlxcL1xcL1stYS16QS1aMC05QDolLl9cXCt+Iz1dezIsfVxcLlthLXpdezIsfVxcYlstYS16QS1aMC05QDolX1xcKy5+Iz8mXFwvPV0qLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB0ZXh0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBFcnJvcjogJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRmlsZUNoYW5nZShmaWxlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBmaWxlcy5sZW5ndGggPyBmaWxlc1swXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbk1lc3NhZ2VLZXlEb3duKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VibWl0IGZvcm0gb24gQ3RybCtFbnRlciBpbiB0aGUgbWVzc2FnZSBmaWVsZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChlLmtleUNvZGUgPT0gMTAgfHwgZS5rZXlDb2RlID09IDEzKSAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlUGFzdGUoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXN0ZSBmaWxlLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZS5jbGlwYm9hcmREYXRhIHx8IGUub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRhdGEuaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGl0ZW0udHlwZS5zdGFydHNXaXRoKCdhdWRpby8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGl0ZW0udHlwZS5zdGFydHNXaXRoKCd2aWRlby8nKTtcbiAgICAgICAgICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRNYXJrdXAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHRoaXMuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5pbmdUYWcgPSBgWyR7dGFnfV1gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zaW5nVGFnID0gYFsvJHt0YWd9XWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoIHx8IGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLmluc2VydFRhZ3NJblBhaXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0ZXh0IGlzIHNlbGVjdGVkLCB3cmFwIGl0IGluIGEgdGFnIHBhaXIuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uYmVnaW4sIHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgb3BlbmluZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5lbmQgKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubGFzdEluZGV4T2Yob3BlbmluZ1RhZywgc2VsZWN0aW9uLmJlZ2luKSA+IG1lc3NhZ2UubGFzdEluZGV4T2YoY2xvc2luZ1RhZywgc2VsZWN0aW9uLmJlZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgY2xvc2luZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb24uZW5kICsgY2xvc2luZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRRdW90ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUVsID0gdGhpcy4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kIC0gbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5maWVsZHMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmVmb3JlID0gbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWZ0ZXIgPSBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUJlZm9yZSA9IGJlZm9yZS5sZW5ndGggJiYgIWJlZm9yZS5lbmRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdMaW5lQWZ0ZXIgPSAhYWZ0ZXIubGVuZ3RoIHx8ICFhZnRlci5zdGFydHNXaXRoKCdcXG4nKSA/ICdcXG4nIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZSA9IGAke25ld0xpbmVCZWZvcmV9PiAke3F1b3RlVGV4dH0ke25ld0xpbmVBZnRlcn1gO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlcixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBxdW90ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VibWl0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSByZXBsYWNlcyB0byB0aGUgbWVzc2FnZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VzID0gY29tcG9uZW50LnNldHRpbmdzLmZvcm0ucmVwbGFjZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVwbGFjZXMucmVkdWNlKChtZXNzYWdlLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cChpdGVtLnBhdHRlcm4sICdnbScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLnJlcGxhY2UocmVnZXhwLCBpdGVtLnJlcGxhY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5maWVsZHMubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0geWllbGQgYXBpXzEuQXBpLmNyZWF0ZVBvc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiB0aGlzLmZpZWxkcy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmZpZWxkcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiB0aGlzLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudCA9IE1hdGguY2VpbChlLmxvYWRlZCAvIGUudG90YWwgKiAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBVcGxvYWRpbmcuLi4gJHtwcm9ncmVzc1BlcmNlbnR9JWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBmb3JtIHRvIHRoZSBpbml0aWFsIGxvY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0luVGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgREUgdGhyZWFkIHVwZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlciA9IHV0aWxzXzEuRE9NLnFzKCcuZGUtdGhyLXVwZGF0ZXItbGluaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlci5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byB0aHJlYWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgRXJyb3I6ICR7ZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNjcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0aGUgYm90dG9tLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbGluZ0VsID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmdFbC5zY3JvbGxUb3AgPSBzY3JvbGxpbmdFbC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICAgICAgICAgIGlmICh2bS5wb3NpdGlvbiA9PT0gJ3Bvc3QnXG4gICAgICAgICAgICAgICAgICAgIHx8ICF2bS5oaWRkZW4gJiYgdm0ucG9zaXRpb24gPT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlcGx5QnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHV0aWxzXzEuRE9NLnFzKCcubGF5b3V0X19jb250ZW50Jyk7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmxpbmsnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS5maWVsZHMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBiZWZvcmUgPSBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyID0gbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUJlZm9yZSA9IGJlZm9yZS5sZW5ndGggJiYgIWJlZm9yZS5lbmRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpbmVBZnRlciA9ICFhZnRlci5sZW5ndGggfHwgIWFmdGVyLnN0YXJ0c1dpdGgoJ1xcbicpID8gJ1xcbicgOiAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmbGluaycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RRdW90ZUluZGV4ID0gbWVzc2FnZS5sYXN0SW5kZXhPZignPj4nLCBzZWxlY3Rpb24uYmVnaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlU2FtZVBvc3QgPSBsYXN0UXVvdGVJbmRleCAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgbWVzc2FnZS5sYXN0SW5kZXhPZihgPj4ke2lkfWAsIHNlbGVjdGlvbi5iZWdpbikgPj0gbGFzdFF1b3RlSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gSWYgcXVvdGluZyB0aGUgc2FtZSBwb3N0IGFnYWluLCBub3QgaW5zZXJ0IGlkLlxuICAgICAgICAgICAgICAgIGxldCBxdW90ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChxdW90ZVNhbWVQb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gcXVvdGVUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke25ld0xpbmVCZWZvcmV9PiAke3F1b3RlVGV4dH0ke25ld0xpbmVBZnRlcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBxdW90ZVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7bmV3TGluZUJlZm9yZX0+PiR7aWR9XFxuPiAke3F1b3RlVGV4dH0ke25ld0xpbmVBZnRlcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAke25ld0xpbmVCZWZvcmV9Pj4ke2lkfSR7bmV3TGluZUFmdGVyfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEluc2VydCByZXBseSBtYXJrdXAuXG4gICAgICAgICAgICAgICAgdm0uZmllbGRzLm1lc3NhZ2UgPSBbXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZSxcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyLFxuICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJblRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocXVvdGVTYW1lUG9zdCAmJiAhcXVvdGVUZXh0ICYmICF2bS5oaWRkZW4gJiYgdm0ucG9zaXRpb24gIT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5wb3NpdGlvbiAhPT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgZm9ybSB0byB0aGUgcG9zdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5wb3N0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Qb3N0KHBvc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Qb3N0c0luc2VydGVkKHBvc3RzKSB7XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNvbW1vbi5zY3JvbGxUb05ld1Bvc3RzKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxpbmdFbCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIC8vIElmIGluIHRoZSBib3R0b20gYXJlYS5cbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbU9mZnNldCA9IHNjcm9sbGluZ0VsLnNjcm9sbEhlaWdodCAtIHNjcm9sbGluZ0VsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbUFyZWEgPSAxLjUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICBpZiAoYm90dG9tT2Zmc2V0IDwgYm90dG9tQXJlYSkge1xuICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0aGUgYm90dG9tLlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmdFbC5zY3JvbGxUb3AgPSBzY3JvbGxpbmdFbC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwb3N0cy5mb3JFYWNoKHBvc3QgPT4ge1xuICAgICAgICAgICAgLy8gTW92ZSByZXBseSBpY29uIGFmdGVyIERFIGhpZGUgaWNvbi5cbiAgICAgICAgICAgIGNvbnN0IHJlcGx5SWNvbiA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX3JlZmxpbmstd3JhcHBlciA+IC5wb3N0LWhlYWRlcl9fcmVmbGluay1pY29uJywgcG9zdCk7XG4gICAgICAgICAgICBjb25zdCBkZUhpZGUgPSB1dGlsc18xLkRPTS5xcygnLmRlLWJ0bi1oaWRlJywgcG9zdCk7XG4gICAgICAgICAgICBpZiAocmVwbHlJY29uICYmIGRlSGlkZSkge1xuICAgICAgICAgICAgICAgIGRlSGlkZS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShyZXBseUljb24sIGRlSGlkZS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVSZXBseUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKCFzaG93QnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmlld01vZGVsLmhpZGRlbiB8fCB0aGlzLnZpZXdNb2RlbC5wb3NpdGlvbiAhPT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMudmlld01vZGVsLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMudmlld01vZGVsLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgICBtYWtlRmxvYXRpbmcoKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICB2bS5wb3NpdGlvbiA9ICdmbG9hdCc7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybS5mbG9hdCA9IHRydWU7XG4gICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnNldHRpbmdzLmZvcm0uZmxvYXRQb3NpdGlvbjtcbiAgICAgICAgdm0uc2V0UG9zaXRpb24odm0uY2hlY2tCb3VuZHMocG9zaXRpb24pKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgIH1cbiAgICBtb3ZlVG9Qb3N0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtJyk7XG4gICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICBwb3N0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGZvcm0sIHBvc3QubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICB2bS5wb3NpdGlvbiA9ICdwb3N0JztcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5mb3JtLmZsb2F0ID0gZmFsc2U7XG4gICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b24pIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1vdmVUb0JvdHRvbSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybS13cmFwcGVyJyk7XG4gICAgICAgIGlmIChmb3JtICYmIHdyYXBwZXIpIHtcbiAgICAgICAgICAgIHdyYXBwZXIuaW5zZXJ0QmVmb3JlKGZvcm0sIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICB2bS5wb3NpdGlvbiA9ICdib3R0b20nO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmZvcm0uZmxvYXQgPSBmYWxzZTtcbiAgICAgICAgX18xLlNldHRpbmdzTWFuYWdlci5zYXZlKHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJlcGx5QnV0dG9uKCk7XG4gICAgICAgIHZtLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdm0uJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlBvc3RpbmdGb3JtID0gUG9zdGluZ0Zvcm07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGx1eG9uXzEgPSByZXF1aXJlKFwibHV4b25cIik7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBzZXR0aW5nc0Zvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3NldHRpbmdzX2Zvcm0nKTtcbiAgICAgICAgaWYgKCFzZXR0aW5nc0Zvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBDaGVja2JveCA9IHZ1ZV8xLmRlZmF1bHQuZXh0ZW5kKHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gIDxsYWJlbCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xhYmVsXCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgOmNoZWNrZWQ9XCJjaGVja2VkXCJcbiAgICAgIEBjaGFuZ2U9XCJvbklucHV0XCIgLz5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvbGFiZWw+XG48L2Rpdj5gLFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICBwcm9wOiAnY2hlY2tlZCcsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdjaGFuZ2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgb25JbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsICF0aGlzLmNoZWNrZWQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgUmFkaW9CdXR0b24gPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgIDpjaGVja2VkPVwidmFsdWUgPT0gc2VsZWN0ZWRWYWx1ZVwiXG4gICAgICBAY2hhbmdlPVwib25JbnB1dFwiIC8+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L2xhYmVsPlxuPC9kaXY+YCxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgcHJvcDogJ3NlbGVjdGVkVmFsdWUnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2hhbmdlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogU3RyaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBvbklucHV0KGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyB2dWVfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGVsOiAnI3NldHRpbmdzX2Zvcm0nLFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJjb250ZW50X19zZXR0aW5ncy1mb3JtIHNldHRpbmdzLWZvcm1cIiBpZD1cInNldHRpbmdzX2Zvcm1cIj5cbiAgPHVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fdGFic1wiPlxuICAgIDxsaSBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYlwiXG4gICAgICA6Y2xhc3M9XCJ7ICdzZXR0aW5ncy1mb3JtX190YWItLWFjdGl2ZSc6IHRhYiA9PT0gJ2NvbW1vbicgfVwiXG4gICAgICBAY2xpY2s9XCJ0YWIgPSAnY29tbW9uJ1wiPkNvbW1vbjwvbGk+XG5cbiAgICA8bGkgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX190YWJcIlxuICAgICAgOmNsYXNzPVwieyAnc2V0dGluZ3MtZm9ybV9fdGFiLS1hY3RpdmUnOiB0YWIgPT09ICdmb3JtJyB9XCJcbiAgICAgIEBjbGljaz1cInRhYiA9ICdmb3JtJ1wiPkZvcm08L2xpPlxuXG4gICAgPGxpIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fdGFiXCJcbiAgICAgIDpjbGFzcz1cInsgJ3NldHRpbmdzLWZvcm1fX3RhYi0tYWN0aXZlJzogdGFiID09PSAndGltZScgfVwiXG4gICAgICBAY2xpY2s9XCJ0YWIgPSAndGltZSdcIj5UaW1lPC9saT5cbiAgPC91bD5cblxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fdGFiLWNvbnRlbnRcIlxuICAgIHYtc2hvdz1cInRhYiA9PT0gJ2NvbW1vbidcIj5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5UaHJlYWQgQWxpZ25tZW50PC9oMz5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MuY29tbW9uLmxheW91dFwiIDp2YWx1ZT1cIidsZWZ0J1wiPlxuICAgICAgT24gdGhlIGxlZnRcbiAgICA8L3gtcmFkaW8tYnV0dG9uPlxuXG4gICAgPHgtcmFkaW8tYnV0dG9uIHYtbW9kZWw9XCJzZXR0aW5ncy5jb21tb24ubGF5b3V0XCIgOnZhbHVlPVwiJ2NlbnRlcidcIj5cbiAgICAgIEluIHRoZSBjZW50ZXJcbiAgICA8L3gtcmFkaW8tYnV0dG9uPlxuXG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+UG9zdHM8L2gzPlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmNvbW1vbi5zaG93UG9zdEhlYWRlclJlZmxpbmtJY29uXCI+XG4gICAgICBTaG93IHJlcGx5IGljb24gaW4gdGhlIHBvc3QgaGVhZGVyXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmNvbW1vbi5zaG93UG9zdFJlZmxpbmtJY29uXCI+XG4gICAgICBTaG93IHJlcGx5IGljb24gaW4gdGhlIGJvdHRvbSByaWdodCBjb3JuZXIgb2YgcG9zdCBtZXNzYWdlXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmNvbW1vbi5zY3JvbGxUb05ld1Bvc3RzXCI+XG4gICAgICBTY3JvbGwgdG8gbmV3IHBvc3RzXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmNvbW1vbi5zbW9vdGhTY3JvbGxcIj5cbiAgICAgIFNtb290aCBzY3JvbGxpbmdcbiAgICA8L3gtY2hlY2tib3g+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX190YWItY29udGVudFwiXG4gICAgdi1zaG93PVwidGFiID09PSAnZm9ybSdcIj5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5Gb3JtIEJlaGF2aW91cjwvaDM+XG5cbiAgICA8eC1jaGVja2JveCB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5zY3JvbGxCb3R0b21cIj5cbiAgICAgIFNjcm9sbCB0byB0aGUgYm90dG9tIGFmdGVyIHBvc3RpbmdcbiAgICA8L3gtY2hlY2tib3g+XG5cbiAgICA8eC1jaGVja2JveCB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5zYXZlU3ViamVjdFwiPlxuICAgICAgU2F2ZSBzdWJqZWN0IGFmdGVyIHBvc3RpbmdcbiAgICA8L3gtY2hlY2tib3g+XG5cbiAgICA8eC1jaGVja2JveCB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5zYXZlTmFtZVwiPlxuICAgICAgU2F2ZSBuYW1lIGFmdGVyIHBvc3RpbmdcbiAgICA8L3gtY2hlY2tib3g+XG5cbiAgICA8eC1jaGVja2JveCB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5zYXZlRm9ybVN0YXRlXCI+XG4gICAgICBTYXZlIGZvcm0gZmxvYXRpbmcgc3RhdGUgb24gcGFnZSByZWxvYWRcbiAgICA8L3gtY2hlY2tib3g+XG5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5Gb3JtIEFsaWdubWVudDwvaDM+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uYWxpZ25cIiA6dmFsdWU9XCInbGVmdCdcIj5cbiAgICAgIE9uIHRoZSBsZWZ0XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5hbGlnblwiIDp2YWx1ZT1cIidjZW50ZXInXCI+XG4gICAgICBJbiB0aGUgY2VudGVyXG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPlByZXZpZXcgQWxpZ25tZW50PC9oMz5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5wcmV2aWV3QWxpZ25cIiA6dmFsdWU9XCInbGVmdCdcIj5cbiAgICAgIE9uIHRoZSBsZWZ0XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5wcmV2aWV3QWxpZ25cIiA6dmFsdWU9XCIncmlnaHQnXCI+XG4gICAgICBPbiB0aGUgcmlnaHRcbiAgICA8L3gtcmFkaW8tYnV0dG9uPlxuXG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+TWFya3VwPC9oMz5cblxuICAgIDx4LWNoZWNrYm94IHYtbW9kZWw9XCJzZXR0aW5ncy5mb3JtLnNob3dNYXJrdXBcIj5cbiAgICAgIFNob3cgbWFya3VwIGJ1dHRvbnNcbiAgICA8L3gtY2hlY2tib3g+XG5cbiAgICA8eC1jaGVja2JveCB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5zaG93TWFya3VwTW9iaWxlXCI+XG4gICAgICBTaG93IG1hcmt1cCBidXR0b25zIChtb2JpbGUpXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPHgtY2hlY2tib3ggdi1tb2RlbD1cInNldHRpbmdzLmZvcm0uaW5zZXJ0VGFnc0luUGFpcnNcIj5cbiAgICAgIEluc2VydCB0YWdzIGluIHBhaXJzXG4gICAgPC94LWNoZWNrYm94PlxuXG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+UmVwbGFjZXM8L2gzPlxuXG4gICAgPHVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGlzdFwiPlxuICAgICAgPGxpIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGlzdC1pdGVtXCJcbiAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHNldHRpbmdzLmZvcm0ucmVwbGFjZXNcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCJcbiAgICAgICAgICB2LW1vZGVsPVwiaXRlbS5wYXR0ZXJuXCIgcGxhY2Vob2xkZXI9XCJQYXR0ZXJuXCIgLz5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIlxuICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLnJlcGxhY2VcIiBwbGFjZWhvbGRlcj1cIlJlcGxhY2VcIiAvPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgIEBjbGljaz1cInJlbW92ZVJlcGxhY2VBdChpbmRleClcIj5SZW1vdmU8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG5cbiAgICAgIDxsaSBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xpc3QtaXRlbVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIlxuICAgICAgICAgIHYtbW9kZWw9XCJuZXdSZXBsYWNlLnBhdHRlcm5cIiBwbGFjZWhvbGRlcj1cIlBhdHRlcm5cIiAvPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiXG4gICAgICAgICAgdi1tb2RlbD1cIm5ld1JlcGxhY2UucmVwbGFjZVwiIHBsYWNlaG9sZGVyPVwiUmVwbGFjZVwiIC8+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgQGNsaWNrPVwiYWRkUmVwbGFjZShuZXdSZXBsYWNlKVwiPkFkZDwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fdGFiLWNvbnRlbnRcIlxuICAgIHYtc2hvdz1cInRhYiA9PT0gJ3RpbWUnXCI+XG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+TGFuZ3VhZ2U8L2gzPlxuXG4gICAgPHgtcmFkaW8tYnV0dG9uIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLmxvY2FsZVwiIDp2YWx1ZT1cIidkZWZhdWx0J1wiPlxuICAgICAgQnJvd3NlciBkZWZhdWx0XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDx4LXJhZGlvLWJ1dHRvbiB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5sb2NhbGVcIiA6dmFsdWU9XCInY3VzdG9tJ1wiPlxuICAgICAgQ3VzdG9tXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIiBwbGFjZWhvbGRlcj1cImVuXCJcbiAgICAgICAgQGNsaWNrPVwic2V0dGluZ3MudGltZS5sb2NhbGUgPSAnY3VzdG9tJ1wiXG4gICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLmxvY2FsZUN1c3RvbVwiIC8+XG4gICAgPC94LXJhZGlvLWJ1dHRvbj5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPkZvcm1hdDwvaDM+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLnRpbWUuZm9ybWF0XCIgOnZhbHVlPVwiJ2RlZmF1bHQnXCI+XG4gICAgICBCcm93c2VyIGRlZmF1bHRcbiAgICA8L3gtcmFkaW8tYnV0dG9uPlxuXG4gICAgPHgtcmFkaW8tYnV0dG9uIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLmZvcm1hdFwiIDp2YWx1ZT1cIidjdXN0b20nXCI+XG4gICAgICBDdXN0b21cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRUVFLCBkZCBNTU0geXl5eSBISDptbTpzc1wiXG4gICAgICAgIEBjbGljaz1cInNldHRpbmdzLnRpbWUuZm9ybWF0ID0gJ2N1c3RvbSdcIlxuICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5mb3JtYXRDdXN0b21cIiAvPlxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8cD5cbiAgICAgIFNlZSB0aGVcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L2x1eG9uL2Jsb2IvbWFzdGVyL2RvY3MvZm9ybWF0dGluZy5tZCN0YWJsZS1vZi10b2tlbnNcIj5cbiAgICAgICAgbHV4b24gZG9jdW1lbnRhdGlvblxuICAgICAgPC9hPlxuICAgICAgZm9yIHRoZSBjdXN0b20gdG9rZW5zIHJlZmVyZW5jZS5cbiAgICA8L3A+XG5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5UaW1lIHpvbmU8L2gzPlxuXG4gICAgPHgtcmFkaW8tYnV0dG9uIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLnpvbmVcIiA6dmFsdWU9XCInZGVmYXVsdCdcIj5cbiAgICAgIEJyb3dzZXIgZGVmYXVsdFxuICAgIDwveC1yYWRpby1idXR0b24+XG5cbiAgICA8eC1yYWRpby1idXR0b24gdi1tb2RlbD1cInNldHRpbmdzLnRpbWUuem9uZVwiIDp2YWx1ZT1cIidmaXhlZCdcIj5cbiAgICAgIEZpeGVkIFVUQyBvZmZzZXRcbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCJcbiAgICAgICAgbWluPVwiLTk5XCIgbWF4PVwiOTlcIlxuICAgICAgICBAY2xpY2s9XCJzZXR0aW5ncy50aW1lLnpvbmUgPSAnZml4ZWQnXCJcbiAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnRpbWUuem9uZUZpeGVkXCIgLz5cbiAgICA8L3gtcmFkaW8tYnV0dG9uPlxuXG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+Q3VycmVudCBmb3JtYXQ8L2gzPlxuXG4gICAgPHA+e3sgdGltZSB9fTwvcD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2Zvb3RlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19idXR0b25zXCI+XG4gICAgICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3N0YXR1c1wiID57eyBzdGF0dXMgfX08L3A+XG5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHNldHRpbmdzLWZvcm1fX3NhdmVcIlxuICAgICAgICBAY2xpY2sucHJldmVudD1cInNhdmVTZXR0aW5ncygpXCI+U2F2ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0YWI6ICdjb21tb24nLFxuICAgICAgICAgICAgICAgICAgICBuZXdSZXBsYWNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9hZCBzZXR0aW5ncyBmcm9tIGEgY29va2llXG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IF9fMS5TZXR0aW5nc01hbmFnZXIubG9hZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICByZW1vdmVSZXBsYWNlQXQoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5mb3JtLnJlcGxhY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhZGRSZXBsYWNlKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoaXRlbS5wYXR0ZXJuLCAnZ20nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgSW52YWxpZCByZWd1bGFyIGV4cHJlc3Npb246ICR7ZS5tZXNzYWdlfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5mb3JtLnJlcGxhY2VzLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgaXRlbSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld1JlcGxhY2UgPSB7IHBhdHRlcm46ICcnLCByZXBsYWNlOiAnJyB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBsdXhvbl8xLkRhdGVUaW1lLmZyb21KU0RhdGUobmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSB1dGlsc18xLlRpbWUuZm9ybWF0KHRpbWUsIHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gJ0ludmFsaWQgZm9ybWF0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2F2ZVNldHRpbmdzKCkge1xuICAgICAgICAgICAgICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluZGljYXRlIHRoYXQgc2V0dGluZ3MgYXJlIHNhdmVkLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ1NldHRpbmdzIHNhdmVkLic7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDAgLyAzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAneC1jaGVja2JveCc6IENoZWNrYm94LFxuICAgICAgICAgICAgICAgICd4LXJhZGlvLWJ1dHRvbic6IFJhZGlvQnV0dG9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5TZXR0aW5ncyA9IFNldHRpbmdzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgU3R5bGVTd2l0Y2gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IHt9O1xuICAgICAgICAvLyBQYXJzZSBzZWxlY3RhYmxlIHN0eWxlcyBmcm9tIDxoZWFkPlxuICAgICAgICBjb25zdCBzdHlsZXMgPSB1dGlsc18xLkRPTS5xc2EoJ2xpbmtbdGl0bGVdJyk7XG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gc3R5bGUudGl0bGU7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBzdHlsZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzW3RpdGxlXSA9IHVybDtcbiAgICAgICAgICAgIGlmICghc3R5bGUuaGFzQXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEdldCBzZWxlY3RlZCBzdHlsZVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3N0eWxlJywgJ1N5bnRod2F2ZScpO1xuICAgICAgICB0aGlzLnNldFN0eWxlKHNlbGVjdGVkX3N0eWxlKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlX3N3aXRjaGVyID0gdXRpbHNfMS5ET00ucWlkKCdzdHlsZS1zd2l0Y2hlcicpO1xuICAgICAgICBpZiAoc3R5bGVfc3dpdGNoZXIpIHtcbiAgICAgICAgICAgIC8vIFBvcHVsYXRlIHN0eWxlIHN3aXRjaGVyIHdpZGdldFxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gT2JqZWN0LmtleXModGhpcy5zdHlsZXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHN0eWxlc1tpXTtcbiAgICAgICAgICAgICAgICBzdHlsZV9zd2l0Y2hlci5pbm5lckhUTUwgKz0gYDxvcHRpb24gY2xhc3M9XCJzdHlsZS1zd2l0Y2hlcl9fb3B0aW9uXCIgdmFsdWU9XCIke3RpdGxlfVwiPiR7dGl0bGV9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBzdHlsZSBjaGFuZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgIHN0eWxlX3N3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0eWxlKHN0eWxlX3N3aXRjaGVyLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFN0eWxlKHN0eWxlKSB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSB1dGlsc18xLkRPTS5xcygnaGVhZCcpO1xuICAgICAgICAvLyBJZiBubyA8aGVhZD4gZWxlbWVudCwgZG8gbm90aGluZ1xuICAgICAgICBpZiAoIWhlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuRE9NLnFzKCdsaW5rW2RhdGEtc2VsZWN0ZWRdJyk7XG4gICAgICAgIGlmIChzZWxlY3RlZF9zdHlsZSkge1xuICAgICAgICAgICAgLy8gSWYgc3R5bGUgYWxyZWFkeSBzZWxlY3RlZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkX3N0eWxlLnRpdGxlID09PSBzdHlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmV2aW91c2x5IHNlbGVjdGVkIHN0eWxlIGZyb20gPGhlYWQ+XG4gICAgICAgICAgICBzZWxlY3RlZF9zdHlsZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgY3VycmVudGx5IHNlbGVjdGVkIHN0eWxlIHRvIDxoZWFkPlxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnN0eWxlc1tzdHlsZV07XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgICAgIGxpbmsudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIC8vIFNhdmUgc2VsZWN0ZWQgc3R5bGVcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9kYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZXhwaXJhdGlvbl9kYXRlLnNldFRpbWUoZXhwaXJhdGlvbl9kYXRlLmdldFRpbWUoKSArIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICB1dGlsc18xLkNvb2tpZS5zZXQoJ3RpbnlpYl9zdHlsZScsIHN0eWxlLCBleHBpcmF0aW9uX2RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3R5bGVTd2l0Y2ggPSBTdHlsZVN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBldmVudEJ1cyA9IG5ldyB2dWVfMS5kZWZhdWx0KCk7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRCdXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFdmVudHM7XG4oZnVuY3Rpb24gKEV2ZW50cykge1xuICAgIEV2ZW50c1tcIlJlYWR5XCJdID0gXCJyZWFkeVwiO1xuICAgIEV2ZW50c1tcIlBvc3RzSW5zZXJ0ZWRcIl0gPSBcInBvc3RzX2luc2VydGVkXCI7XG4gICAgRXZlbnRzW1wiUG9zdENyZWF0ZWRcIl0gPSBcInBvc3RfY3JlYXRlZFwiO1xuICAgIEV2ZW50c1tcIkluc2VydE1hcmt1cFwiXSA9IFwiaW5zZXJ0X21hcmt1cFwiO1xufSkoRXZlbnRzID0gZXhwb3J0cy5FdmVudHMgfHwgKGV4cG9ydHMuRXZlbnRzID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFwaV8xID0gcmVxdWlyZShcIi4vYXBpXCIpO1xuZXhwb3J0cy5BcGkgPSBhcGlfMS5BcGk7XG52YXIgZXZlbnRfYnVzXzEgPSByZXF1aXJlKFwiLi9ldmVudC1idXNcIik7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRfYnVzXzEuZXZlbnRCdXM7XG52YXIgZXZlbnRzXzEgPSByZXF1aXJlKFwiLi9ldmVudHNcIik7XG5leHBvcnRzLkV2ZW50cyA9IGV2ZW50c18xLkV2ZW50cztcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzTWFuYWdlciA9IHNldHRpbmdzXzEuU2V0dGluZ3NNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzZXR0aW5nc0tleSA9ICdzZXR0aW5ncyc7XG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIGxheW91dDogJ2xlZnQnLFxuICAgICAgICBzaG93UG9zdEhlYWRlclJlZmxpbmtJY29uOiB0cnVlLFxuICAgICAgICBzaG93UG9zdFJlZmxpbmtJY29uOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsVG9OZXdQb3N0czogdHJ1ZSxcbiAgICAgICAgc21vb3RoU2Nyb2xsOiB0cnVlLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHByZXZpZXdBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgc2Nyb2xsQm90dG9tOiB0cnVlLFxuICAgICAgICBzaG93TWFya3VwOiB0cnVlLFxuICAgICAgICBzaG93TWFya3VwTW9iaWxlOiBmYWxzZSxcbiAgICAgICAgaW5zZXJ0VGFnc0luUGFpcnM6IHRydWUsXG4gICAgICAgIHNhdmVGb3JtU3RhdGU6IGZhbHNlLFxuICAgICAgICBzYXZlU3ViamVjdDogZmFsc2UsXG4gICAgICAgIHNhdmVOYW1lOiB0cnVlLFxuICAgICAgICBmbG9hdDogZmFsc2UsXG4gICAgICAgIGZsb2F0UG9zaXRpb246IHsgeDogMTAwLCB5OiAxMDAgfSxcbiAgICAgICAgcmVwbGFjZXM6IFtdLFxuICAgIH0sXG4gICAgdGltZToge1xuICAgICAgICBsb2NhbGU6ICdkZWZhdWx0JyxcbiAgICAgICAgbG9jYWxlQ3VzdG9tOiAnJyxcbiAgICAgICAgem9uZTogJ2RlZmF1bHQnLFxuICAgICAgICB6b25lRml4ZWQ6IDAsXG4gICAgICAgIGZvcm1hdDogJ2RlZmF1bHQnLFxuICAgICAgICBmb3JtYXRDdXN0b206ICcnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBPYmplY3QuYXNzaWduKHt9LCB0YXJnZXQpO1xuICAgIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5jbGFzcyBTZXR0aW5nc01hbmFnZXIge1xuICAgIHN0YXRpYyBsb2FkKCkge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc2V0dGluZ3NLZXkpKTtcbiAgICAgICAgcmV0dXJuIG1lcmdlKGRlZmF1bHRTZXR0aW5ncywgc2V0dGluZ3MpO1xuICAgIH1cbiAgICBzdGF0aWMgc2F2ZShzZXR0aW5ncykge1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzZXR0aW5nc0tleSwgZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0cy5TZXR0aW5nc01hbmFnZXIgPSBTZXR0aW5nc01hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIENvb2tpZSB7XG4gICAgc3RhdGljIGdldChuYW1lLCBfZGVmYXVsdCA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29va2llX3N0ciA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XG4gICAgICAgIGNvbnN0IGNvb2tpZV9wYXJ0cyA9IGNvb2tpZV9zdHIuc3BsaXQoYDsgJHtuYW1lfT1gKTtcbiAgICAgICAgaWYgKGNvb2tpZV9wYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlX2VuYyA9IGNvb2tpZV9wYXJ0cy5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlX2VuYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0O1xuICAgIH1cbiAgICBzdGF0aWMgc2V0KG5hbWUsIHZhbHVlLCBleHBpcmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlX2VuYyA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25fc3RyID0gZXhwaXJhdGlvbi50b1VUQ1N0cmluZygpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlX2VuY307IHBhdGg9LzsgZXhwaXJlcz0ke2V4cGlyYXRpb25fc3RyfWA7XG4gICAgfVxufVxuZXhwb3J0cy5Db29raWUgPSBDb29raWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIERPTSB7XG4gICAgc3RhdGljIHFpZChpZCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIH1cbiAgICBzdGF0aWMgcXMoc2VsZWN0b3IsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cbiAgICBzdGF0aWMgcXNhKHNlbGVjdG9yLCBjb250ZXh0ID0gbnVsbCkge1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGVtZW50TGlzdCA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50TGlzdCk7XG4gICAgfVxufVxuZXhwb3J0cy5ET00gPSBET007XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb29raWVfMSA9IHJlcXVpcmUoXCIuL2Nvb2tpZVwiKTtcbmV4cG9ydHMuQ29va2llID0gY29va2llXzEuQ29va2llO1xudmFyIGRvbV8xID0gcmVxdWlyZShcIi4vZG9tXCIpO1xuZXhwb3J0cy5ET00gPSBkb21fMS5ET007XG52YXIgdGltZV8xID0gcmVxdWlyZShcIi4vdGltZVwiKTtcbmV4cG9ydHMuVGltZSA9IHRpbWVfMS5UaW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBUaW1lIHtcbiAgICBzdGF0aWMgZm9ybWF0KHRpbWUsIHNldHRpbmdzKSB7XG4gICAgICAgIGlmIChzZXR0aW5ncy50aW1lLmxvY2FsZSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICAgIHRpbWUgPSB0aW1lLnNldExvY2FsZShzZXR0aW5ncy50aW1lLmxvY2FsZUN1c3RvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzLnRpbWUuem9uZSA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc2V0dGluZ3MudGltZS56b25lRml4ZWQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRTdHIgPSAnVVRDJyArIChvZmZzZXQgPj0gMCA/ICcrJyA6ICcnKSArIG9mZnNldC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGltZSA9IHRpbWUuc2V0Wm9uZShvZmZzZXRTdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy50aW1lLmZvcm1hdCA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lLnRvRm9ybWF0KHNldHRpbmdzLnRpbWUuZm9ybWF0Q3VzdG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lLnRvRm9ybWF0KCdkLkxMLnl5eXkgSEg6bW06c3MnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGltZSA9IFRpbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGx1eG9uOyIsIm1vZHVsZS5leHBvcnRzID0gVnVlOyJdLCJzb3VyY2VSb290IjoiIn0=