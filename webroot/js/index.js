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
    const layout = utils_1.DOM.qs('.layout');
    if (layout) {
        layout.classList.add('layout--' + settings.common.layout);
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
const api_1 = __webpack_require__(/*! ../api */ "./ts/api.ts");
class PostingForm {
    constructor() {
        this.isInThread = false;
        this.settings = __1.SettingsManager.load();
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
                    hidden: true,
                    position: component.settings.form.float ? 'float' : 'bottom',
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
                    this.fields.subject = '';
                    this.fields.message = '';
                    this.fields.file = '';
                    this.file = null;
                },
                makeFloating() {
                    component.show();
                    this.position = 'float';
                    component.settings.form.float = true;
                    __1.SettingsManager.save(component.settings);
                    const position = component.settings.form.floatPosition;
                    this.setPosition(this.checkBounds(position));
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
                        try {
                            const location = yield api_1.Api.createPost({
                                parent: threadId,
                                subject: this.fields.subject,
                                name: this.fields.name,
                                message: this.fields.message,
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
                        // Scroll to the bottom.
                        const scrollingEl = document.scrollingElement || document.body;
                        scrollingEl.scrollTop = scrollingEl.scrollHeight;
                    });
                },
            },
        });
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.addEventListener('click', () => {
                if (this.viewModel.position === 'post') {
                    this.moveToBottom();
                }
                else {
                    this.show();
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
                if (this.isInThread) {
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
                // Insert reply markup.
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
                const quote = quoteText
                    ? `${newLineBefore}>>${id}\n> ${quoteText}${newLineAfter}`
                    : `${newLineBefore}>>${id}${newLineAfter}`;
                vm.fields.message = [
                    before,
                    quote,
                    after,
                ].join('');
                vm.$nextTick(() => {
                    messageEl.focus();
                    messageEl.selectionStart = selection.begin + quote.length;
                    messageEl.selectionEnd = selection.begin + quote.length;
                });
            });
        }
    }
    hide() {
        this.viewModel.hidden = true;
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.classList.remove('hidden');
        }
    }
    show() {
        this.viewModel.hidden = false;
        const showButton = utils_1.DOM.qid('posting-form-show');
        if (showButton) {
            showButton.classList.add('hidden');
        }
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
      v-bind:class="{ 'settings-form__tab--active': tab === 'common' }"
      v-on:click="tab = 'common'">Common</li>

    <li class="settings-form__tab"
      v-bind:class="{ 'settings-form__tab--active': tab === 'form' }"
      v-on:click="tab = 'form'">Form</li>

    <li class="settings-form__tab"
      v-bind:class="{ 'settings-form__tab--active': tab === 'time' }"
      v-on:click="tab = 'time'">Time</li>
  </ul>

  <div class="settings-form__tab-content"
    v-show="tab === 'common'">
    <h3 class="settings-form__option-title">Thread Alignment</h3>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="radio" class="settings-form__radio"
          name="common_layout_center" value="center"
          v-model="settings.common.layout" />
        Center
      </label>
    </div>

    <div class="settings-form__row">
      <label class="settings-form__label">
        <input type="radio" class="settings-form__radio"
          name="common_layout_left" value="left"
          v-model="settings.common.layout" />
        Left
      </label>
    </div>
  </div>

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
                    tab: 'common',
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
        layout: 'center',
    },
    form: {
        previewAlign: 'left',
        showMarkup: true,
        showMarkupMobile: false,
        float: false,
        floatPosition: { x: 100, y: 100 },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBpLnRzIiwid2VicGFjazovLy8uL3RzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2NhcHRjaGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9jb3JyZWN0LXRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9kZWxldGUtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2RyYWdnYWJsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2ZpbGUtcHJldmlldy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbmV3LXBvc3RzLWRldGVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdC1yZWZlcmVuY2UtbWFwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdGluZy1mb3JtLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9zdHlsZS1zd2l0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXZlbnQtYnVzLnRzIiwid2VicGFjazovLy8uL3RzL2V2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90cy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9jb29raWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvZG9tLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL3RpbWUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibHV4b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJWdWVcIiJd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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQyxxQ0FBcUMsU0FBUztBQUM5QyxTQUFTO0FBQ1QscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUssR0FBRyxXQUFXLFFBQVEsV0FBVyxlQUFlO0FBQ2xGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLHNDQUFVO0FBQ2pDO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLGdDQUFPO0FBQzNCO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLGtDQUFRO0FBQzdCOzs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLHVCOzs7Ozs7Ozs7OztBQ0FBLHFCIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2FwcC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBBcGkge1xuICAgIHN0YXRpYyBjcmVhdGVQb3N0KHJlcXVlc3QsIG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FqYXgvcG9zdC9jcmVhdGVgO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgncGFyZW50JywgcmVxdWVzdC5wYXJlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3N1YmplY3QnLCByZXF1ZXN0LnN1YmplY3QpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCduYW1lJywgcmVxdWVzdC5uYW1lKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbWVzc2FnZScsIHJlcXVlc3QubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCByZXF1ZXN0LmZpbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgb25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGAke3hoci5zdGF0dXN9ICR7eGhyLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkFwaSA9IEFwaTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHNcIik7XG5jb25zdCBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5uZXcgY29tcG9uZW50c18xLkNhcHRjaGEoKTtcbm5ldyBjb21wb25lbnRzXzEuQ29ycmVjdFRpbWUoKTtcbm5ldyBjb21wb25lbnRzXzEuRGVsZXRlRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0aW5nRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0UmVmZXJlbmNlTWFwKCk7XG5uZXcgY29tcG9uZW50c18xLlNldHRpbmdzKCk7XG5uZXcgY29tcG9uZW50c18xLlN0eWxlU3dpdGNoKCk7XG5uZXcgY29tcG9uZW50c18xLk5ld1Bvc3RzRGV0ZWN0b3IoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBlID0+IHtcbiAgICBfMS5ldmVudEJ1cy4kZW1pdChfMS5FdmVudHMuUmVhZHkpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gc2V0dGluZ3NfMS5TZXR0aW5nc01hbmFnZXIubG9hZCgpO1xuICAgIGNvbnN0IGxheW91dCA9IHV0aWxzXzEuRE9NLnFzKCcubGF5b3V0Jyk7XG4gICAgaWYgKGxheW91dCkge1xuICAgICAgICBsYXlvdXQuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LS0nICsgc2V0dGluZ3MuY29tbW9uLmxheW91dCk7XG4gICAgfVxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDYXB0Y2hhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFNyYyA9ICcnO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGFpbWFnZScpO1xuICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTcmMgPSBpbWFnZS5zcmM7XG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVsb2FkLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgY29uc3QgY2FwdGNoYSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYScpO1xuICAgICAgICBjYXB0Y2hhLnZhbHVlID0gJyc7XG4gICAgICAgIGNhcHRjaGEuZm9jdXMoKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGFpbWFnZScpO1xuICAgICAgICBpbWFnZS5zcmMgPSBgJHt0aGlzLm9yaWdpbmFsU3JjfSMke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnRzLkNhcHRjaGEgPSBDYXB0Y2hhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsdXhvbl8xID0gcmVxdWlyZShcImx1eG9uXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIENvcnJlY3RUaW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IF9fMS5TZXR0aW5nc01hbmFnZXIubG9hZCgpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIChwb3N0cykgPT4gcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdXRpbHNfMS5ET00ucXNhKCcucG9zdC1oZWFkZXJfX2RhdGV0aW1lJyk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB0aGlzLmNvcnJlY3RUaW1lKGVsZW1lbnQpKTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgdGltZV9lbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX2RhdGV0aW1lJywgcG9zdCk7XG4gICAgICAgIGlmICghdGltZV9lbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ycmVjdFRpbWUodGltZV9lbCk7XG4gICAgfVxuICAgIGNvcnJlY3RUaW1lKGVsKSB7XG4gICAgICAgIGNvbnN0IHRpbWVfc3RyID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRldGltZScpO1xuICAgICAgICBpZiAoIXRpbWVfc3RyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZSA9IGx1eG9uXzEuRGF0ZVRpbWUuZnJvbUlTTyh0aW1lX3N0cik7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdXRpbHNfMS5UaW1lLmZvcm1hdCh0aW1lLCB0aGlzLnNldHRpbmdzKTtcbiAgICB9XG59XG5leHBvcnRzLkNvcnJlY3RUaW1lID0gQ29ycmVjdFRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBEZWxldGVGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ2RlbGZvcm0nKTtcbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVsZXRlX3Bvc3RfcGFzc3dvcmQgPSB1dGlsc18xLkRPTS5xaWQoJ2RlbGV0ZXBvc3RwYXNzd29yZCcpO1xuICAgICAgICBpZiAoZGVsZXRlX3Bvc3RfcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIC8vIExvYWQgZGVsZXRlIHBvc3QgcGFzc3dvcmQuXG4gICAgICAgICAgICBkZWxldGVfcG9zdF9wYXNzd29yZC52YWx1ZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3Bhc3N3b3JkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRlbGV0ZUZvcm0gPSBEZWxldGVGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwb2ludGVyRXZlbnRzID0gJ1BvaW50ZXJFdmVudCcgaW4gd2luZG93O1xuY29uc3QgdG91Y2hFdmVudHMgPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XG5leHBvcnRzLmRyYWdnYWJsZSA9IHtcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBjb25zdCBoYW5kbGUgPSB0aGlzLmdldERyYWdIYW5kbGUoKTtcbiAgICAgICAgaWYgKCFoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYWdnYWJsZVJlc2l6ZSA9IHRoaXMub25EcmFnZ2FibGVSZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24gPSB0aGlzLm9uRHJhZ2dhYmxlTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRyYWdnYWJsZVJlc2l6ZSk7XG4gICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHModGhpcy5nZXRQb3NpdGlvbigpKSk7XG4gICAgfSxcbiAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGVSZXNpemUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRyYWdnYWJsZVJlc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlID0gdGhpcy5nZXREcmFnSGFuZGxlKCk7XG4gICAgICAgIGlmIChoYW5kbGUpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldERyYWdIYW5kbGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RHJhZ2dhYmxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBkcmFnZ2FibGUub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgICAgICB5OiBkcmFnZ2FibGUub2Zmc2V0VG9wLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UG9zaXRpb24oY29vcmRzKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUubGVmdCA9IGAke2Nvb3Jkcy54fXB4YDtcbiAgICAgICAgICAgIGRyYWdnYWJsZS5zdHlsZS50b3AgPSBgJHtjb29yZHMueX1weGA7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrQm91bmRzKHsgeCwgeSB9KSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZHJhZ2dhYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgbWluWCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC0gcmVjdC53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogTWF0aC5taW4oTWF0aC5tYXgobWluWCwgeCksIG1heFgpLFxuICAgICAgICAgICAgICAgIHk6IE1hdGgubWluKE1hdGgubWF4KG1pblksIHkpLCBtYXhZKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ2dhYmxlUmVzaXplKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHRoaXMuZ2V0UG9zaXRpb24oKSkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRyYWdnYWJsZU1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5fZHJhZ2dhYmxlUG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vdXNlRXZlbnRcbiAgICAgICAgICAgICAgICB8fCBwb2ludGVyRXZlbnRzICYmIGUgaW5zdGFuY2VvZiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnU3RhcnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZS5jbGllbnRZLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b3VjaEV2ZW50cyAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdG91Y2guY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG91Y2guY2xpZW50WSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlID0gdGhpcy5vbkRyYWdnYWJsZU1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnZ2FibGVNb3VzZVVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZVVwID0gdGhpcy5vbkRyYWdnYWJsZU1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkRyYWdnYWJsZU1vdXNlTW92ZShlKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IGRlbHRhWCA9IDA7XG4gICAgICAgICAgICBsZXQgZGVsdGFZID0gMDtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW91c2VFdmVudFxuICAgICAgICAgICAgICAgIHx8IHBvaW50ZXJFdmVudHMgJiYgZSBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGUuY2xpZW50WCAtIHRoaXMuX2RyYWdTdGFydC54O1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUuY2xpZW50WSAtIHRoaXMuX2RyYWdTdGFydC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG91Y2hFdmVudHMgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBkZWx0YVggPSB0b3VjaC5jbGllbnRYIC0gdGhpcy5fZHJhZ1N0YXJ0Lng7XG4gICAgICAgICAgICAgICAgZGVsdGFZID0gdG91Y2guY2xpZW50WSAtIHRoaXMuX2RyYWdTdGFydC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9kcmFnZ2FibGVQb3NpdGlvbi54ICsgZGVsdGFYLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2RyYWdnYWJsZVBvc2l0aW9uLnkgKyBkZWx0YVksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ2dhYmxlTW91c2VVcChlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGVNb3VzZVVwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuZXhwb3J0cy5GaWxlUHJldmlldyA9IHZ1ZV8xLmRlZmF1bHQuZXh0ZW5kKHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImZpbGUtcHJldmlld1wiXG4gIHYtb246Y2xpY2s9XCJvbkNsaWNrKCRldmVudClcIlxuICB2LW9uOmRyYWdlbnRlci5zdG9wLnByZXZlbnRcbiAgdi1vbjpkcmFnbGVhdmUuc3RvcC5wcmV2ZW50XG4gIHYtb246ZHJhZ292ZXIuc3RvcC5wcmV2ZW50XG4gIHYtb246ZHJvcC5zdG9wLnByZXZlbnQ9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICA8aW1nIGNsYXNzPVwiZmlsZS1wcmV2aWV3X19jb250ZW50XCJcbiAgICB2LWJpbmQ6c3JjPVwicHJldmlld1NyY1wiXG4gICAgdi1pZj1cInByZXZpZXdUeXBlID09PSAnaW1hZ2UnICYmIHByZXZpZXdTcmNcIiAvPlxuICA8dmlkZW8gY2xhc3M9XCJmaWxlLXByZXZpZXdfX2NvbnRlbnRcIiBhdXRvcGxheSBsb29wIG11dGVkXG4gICAgdi1iaW5kOnNyYz1cInByZXZpZXdTcmNcIlxuICAgIHYtZWxzZS1pZj1cInByZXZpZXdUeXBlID09PSAndmlkZW8nICYmIHByZXZpZXdTcmNcIj48L3ZpZGVvPlxuICA8c3BhbiBjbGFzcz1cImZpbGUtcHJldmlld19fbGFiZWxcIlxuICAgIHYtZWxzZT5VcGxvYWQgZmlsZTwvc3Bhbj5cblxuICA8c2xvdD48L3Nsb3Q+XG48L2Rpdj5gLFxuICAgIHByb3BzOiBbJ2ZpbGUnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJldmlld1NyYzogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHByZXZpZXdUeXBlKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbGUudHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUuc3RhcnRzV2l0aCgndmlkZW8vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd2aWRlbyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUuc3RhcnRzV2l0aCgnYXVkaW8vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdWRpbyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2ltYWdlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5maWxlLm5hbWU7XG4gICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChuYW1lLmVuZHNXaXRoKCcud2VibScpIHx8IG5hbWUuZW5kc1dpdGgoJy5tcDQnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3ZpZGVvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZS5lbmRzV2l0aCgnLm1wMycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYXVkaW8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdpbWFnZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdpbWFnZSc7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBmaWxlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3U3JjID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdTcmMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljayhlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRyb3AoZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZHJvcCcsIGUpO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNhcHRjaGFfMSA9IHJlcXVpcmUoXCIuL2NhcHRjaGFcIik7XG5leHBvcnRzLkNhcHRjaGEgPSBjYXB0Y2hhXzEuQ2FwdGNoYTtcbnZhciBjb3JyZWN0X3RpbWVfMSA9IHJlcXVpcmUoXCIuL2NvcnJlY3QtdGltZVwiKTtcbmV4cG9ydHMuQ29ycmVjdFRpbWUgPSBjb3JyZWN0X3RpbWVfMS5Db3JyZWN0VGltZTtcbnZhciBkZWxldGVfZm9ybV8xID0gcmVxdWlyZShcIi4vZGVsZXRlLWZvcm1cIik7XG5leHBvcnRzLkRlbGV0ZUZvcm0gPSBkZWxldGVfZm9ybV8xLkRlbGV0ZUZvcm07XG52YXIgZHJhZ2dhYmxlXzEgPSByZXF1aXJlKFwiLi9kcmFnZ2FibGVcIik7XG5leHBvcnRzLmRyYWdnYWJsZSA9IGRyYWdnYWJsZV8xLmRyYWdnYWJsZTtcbnZhciBmaWxlX3ByZXZpZXdfMSA9IHJlcXVpcmUoXCIuL2ZpbGUtcHJldmlld1wiKTtcbmV4cG9ydHMuRmlsZVByZXZpZXcgPSBmaWxlX3ByZXZpZXdfMS5GaWxlUHJldmlldztcbnZhciBuZXdfcG9zdHNfZGV0ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL25ldy1wb3N0cy1kZXRlY3RvclwiKTtcbmV4cG9ydHMuTmV3UG9zdHNEZXRlY3RvciA9IG5ld19wb3N0c19kZXRlY3Rvcl8xLk5ld1Bvc3RzRGV0ZWN0b3I7XG52YXIgcG9zdGluZ19mb3JtXzEgPSByZXF1aXJlKFwiLi9wb3N0aW5nLWZvcm1cIik7XG5leHBvcnRzLlBvc3RpbmdGb3JtID0gcG9zdGluZ19mb3JtXzEuUG9zdGluZ0Zvcm07XG52YXIgcG9zdF9yZWZlcmVuY2VfbWFwXzEgPSByZXF1aXJlKFwiLi9wb3N0LXJlZmVyZW5jZS1tYXBcIik7XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBwb3N0X3JlZmVyZW5jZV9tYXBfMS5Qb3N0UmVmZXJlbmNlTWFwO1xudmFyIHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBzZXR0aW5nc18xLlNldHRpbmdzO1xudmFyIHN0eWxlX3N3aXRjaF8xID0gcmVxdWlyZShcIi4vc3R5bGUtc3dpdGNoXCIpO1xuZXhwb3J0cy5TdHlsZVN3aXRjaCA9IHN0eWxlX3N3aXRjaF8xLlN0eWxlU3dpdGNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgTmV3UG9zdHNEZXRlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKiBAdG9kbzogcmVtb3ZlIE11dGF0aW9uT2JzZXJ2ZXIgQVNBUCwgd2l0aCBpbnRlZ3JhdGVkIHRocmVhZCB1cGRhdGluZy4gKi9cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSBtdXRhdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBHZXQgYWRkZWQgcG9zdHMsIGlmIGFueS5cbiAgICAgICAgICAgICAgICAubWFwKG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTGlzdCA9IG11dGF0aW9uLmFkZGVkTm9kZXM7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGVsZW1lbnQgaXMgcG9zdCBpdHNlbGYsIHJldHVybiBpdCxcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSBxdWVyeSBmb3IgZWxlbWVudCBjaGlsZHJlbi5cbiAgICAgICAgICAgICAgICAgICAgLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3N0JylcbiAgICAgICAgICAgICAgICAgICAgPyBbZWxlbWVudF1cbiAgICAgICAgICAgICAgICAgICAgOiB1dGlsc18xLkRPTS5xc2EoJy5wb3N0JywgZWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgIC8vIEZsYXR0ZW4gcG9zdHMgYXJyYXkuXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB0b3RhbC5jb25jYXQoY3VycmVudCksIFtdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gRmxhdHRlbiBwb3N0cyBhcnJheS5cbiAgICAgICAgICAgICAgICAucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwuY29uY2F0KGN1cnJlbnQpLCBbXSk7XG4gICAgICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0dXAgTXV0YXRpb25PYnNlcnZlci5cbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IHV0aWxzXzEuRE9NLnFzYSgnLnBvc3QnKTtcbiAgICAgICAgICAgIGlmIChwb3N0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgX18xLmV2ZW50QnVzLiRlbWl0KF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgcG9zdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLk5ld1Bvc3RzRGV0ZWN0b3IgPSBOZXdQb3N0c0RldGVjdG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgUG9zdFJlZmVyZW5jZU1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9zdHMgPSB7fTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIChwb3N0cykgPT4gcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydChwb3N0KSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9ICtwb3N0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0LWlkJyk7XG4gICAgICAgIC8vIFN0b3JlIHBvc3QuXG4gICAgICAgIHRoaXMucG9zdHNbcG9zdElkXSA9IHBvc3Q7XG4gICAgICAgIC8vIEdldCByZWZlcmVuY2VzLlxuICAgICAgICBjb25zdCByZWZlcmVuY2VFbGVtZW50cyA9IHV0aWxzXzEuRE9NLnFzYSgnYVtkYXRhLXRhcmdldC1wb3N0LWlkXScsIHBvc3QpO1xuICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gcmVmZXJlbmNlRWxlbWVudHMubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGlkOiArZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LXBvc3QtaWQnKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBcHBlbmQgdGhlIGF1dGhvciBuYW1lIG9mIHRoZSByZWZlcmVuY2VkIHBvc3QgdG8gdGhlIHJlZmVyZW5jZSBsaW5rIHRleHQuXG4gICAgICAgIHJlZmVyZW5jZXMuZm9yRWFjaChyZWZlcmVuY2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHRoaXMucG9zdHNbcmVmZXJlbmNlLmlkXTtcbiAgICAgICAgICAgIGlmICghcG9zdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZUF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJlZmVyZW5jZUF1dGhvci5jbGFzc0xpc3QuYWRkKCdwb3N0X19yZWZlcmVuY2UtbGluay1hdXRob3InKTtcbiAgICAgICAgICAgIHJlZmVyZW5jZUF1dGhvci5pbm5lckhUTUwgPSB0aGlzLmdldFBvc3RSZWZMaW5rQXV0aG9ySHRtbChwb3N0KTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHJlZmVyZW5jZS5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IHJlZmVyZW5jZS5lbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShyZWZlcmVuY2VBdXRob3IsIG5leHRTaWJsaW5nKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFBvc3RSZWZMaW5rQXV0aG9ySHRtbChwb3N0KSB7XG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX25hbWUnLCBwb3N0KTtcbiAgICAgICAgY29uc3QgdHJpcGNvZGVFbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX3RyaXBjb2RlJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRWwgPyBuYW1lRWwuaW5uZXJIVE1MIDogJyc7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlID0gdHJpcGNvZGVFbCA/IHRyaXBjb2RlRWwuaW5uZXJIVE1MIDogJyc7XG4gICAgICAgIGlmIChuYW1lLmxlbmd0aCB8fCB0cmlwY29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBgKDxzcGFuIGNsYXNzPVwicG9zdF9fcmVmZXJlbmNlLWxpbmstbmFtZVwiPiR7bmFtZX08L3NwYW4+YFxuICAgICAgICAgICAgICAgICsgYDxzcGFuIGNsYXNzPVwicG9zdF9fcmVmZXJlbmNlLWxpbmstdHJpcGNvZGVcIj4ke3RyaXBjb2RlfTwvc3Bhbj4pYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgYDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUG9zdFJlZmVyZW5jZU1hcCA9IFBvc3RSZWZlcmVuY2VNYXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGFwaV8xID0gcmVxdWlyZShcIi4uL2FwaVwiKTtcbmNsYXNzIFBvc3RpbmdGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pc0luVGhyZWFkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBfXzEuU2V0dGluZ3NNYW5hZ2VyLmxvYWQoKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKC9cXC9yZXNcXC8oXFxkKykvaSk7XG4gICAgICAgIGNvbnN0IGlzSW5UaHJlYWQgPSAhIW1hdGNoO1xuICAgICAgICBjb25zdCB0aHJlYWRJZCA9IGlzSW5UaHJlYWQgPyArbWF0Y2hbMV0gOiAwO1xuICAgICAgICB0aGlzLmlzSW5UaHJlYWQgPSBpc0luVGhyZWFkO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyB2dWVfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGVsOiBmb3JtLFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxmb3JtIGNsYXNzPVwiY29udGVudF9fcG9zdGluZy1mb3JtIHBvc3RpbmctZm9ybVwiIGlkPVwicG9zdGluZy1mb3JtXCJcbiAgdi1iaW5kOmNsYXNzPVwieyAncG9zdGluZy1mb3JtLS1mbG9hdGluZyc6IHBvc2l0aW9uID09ICdmbG9hdCcgfVwiXG4gIHYtb246c3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdCgpXCIgdi1zaG93PVwiIWhpZGRlblwiXG4gIHJlZj1cImZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyXCIgcmVmPVwiaGVhZGVyXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3RpdGxlXCI+e3tcbiAgICAgIHRocmVhZElkID8gJ1JlcGx5IHRvIHRocmVhZCAjJyArIHRocmVhZElkIDogJ0NyZWF0ZSB0aHJlYWQnXG4gICAgfX08L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyLWJ1dHRvbnNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19yZXNldFwiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cInJlc2V0RmllbGRzKClcIiB0aXRsZT1cIkNsZWFyIGZvcm1cIj48L3NwYW4+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19mbG9hdFwiXG4gICAgICAgIHYtaWY9XCJwb3NpdGlvbiAhPT0gJ2Zsb2F0JyAmJiBtb2RlICE9PSAnbW9iaWxlJ1wiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cIm1ha2VGbG9hdGluZygpXCIgdGl0bGU9XCJGbG9hdGluZyBmb3JtXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcmVzdG9yZVwiXG4gICAgICAgIHYtaWY9XCJwb3NpdGlvbiA9PT0gJ2Zsb2F0JyAmJiBtb2RlICE9PSAnbW9iaWxlJ1wiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cIm1vdmVUb0JvdHRvbSgpXCIgdGl0bGU9XCJNb3ZlIGZvcm0gdG8gYm90dG9tXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fY2xvc2VcIlxuICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJvbkNsb3NlQ2xpY2soKVwiIHRpdGxlPVwiQ2xvc2UgZm9ybVwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2NvbnRlbnRcIj5cbiAgICA8eC1maWxlLXByZXZpZXcgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXdcIlxuICAgICAgdi1iaW5kOmNsYXNzPVwie1xuICAgICAgICAncG9zdGluZy1mb3JtX19wcmV2aWV3LS1tb2JpbGUnOiBtb2RlID09ICdtb2JpbGUnLFxuICAgICAgICAncG9zdGluZy1mb3JtX19wcmV2aWV3LS1yaWdodCc6IHNldHRpbmdzLnByZXZpZXdBbGlnbiA9PSAncmlnaHQnLFxuICAgICAgfVwiXG4gICAgICB2LWJpbmQ6ZmlsZT1cImZpbGVcIlxuICAgICAgdi1vbjpjbGljaz1cInNob3dGaWxlRGlhbG9nKClcIlxuICAgICAgdi1vbjpkcm9wPVwib25GaWxlRHJvcCgkZXZlbnQpXCJcbiAgICAgIHYtc2hvdz1cIm1vZGUgPT0gJ2RlZmF1bHQnIHx8IGZpbGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19wcmV2aWV3LXJlbW92ZVwiXG4gICAgICAgIHYtaWY9XCJmaWxlXCIgdi1vbjpjbGljay5zdG9wPVwiZmlsZSA9IG51bGxcIj48L3NwYW4+XG4gICAgPC94LWZpbGUtcHJldmlldz5cblxuICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX21haW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3Jvd1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fc3ViamVjdFwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5zdWJqZWN0XCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIiBwbGFjZWhvbGRlcj1cIlN1YmplY3RcIiAvPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19uYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLm5hbWVcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIHYtb246Y2hhbmdlPVwib25OYW1lQ2hhbmdlKClcIiAvPlxuXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvc3RpbmctZm9ybV9fYXR0YWNobWVudFwiIHYtc2hvdz1cIm1vZGUgPT0gJ21vYmlsZSdcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fYXR0YWNobWVudC1pbnB1dFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLmZpbGVcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICB2LW9uOmNoYW5nZT1cIm9uRmlsZUNoYW5nZSgkZXZlbnQudGFyZ2V0LmZpbGVzKVwiXG4gICAgICAgICAgICByZWY9XCJmaWxlXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX3N1Ym1pdFwiXG4gICAgICAgICAgdi1pZj1cIm1vZGUgPT0gJ2RlZmF1bHQnXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIj5SZXBseTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX21hcmt1cC1yb3cgbWFya3VwXCJcbiAgICAgICAgdi1zaG93PVwiKG1vZGUgPT09ICdtb2JpbGUnKSAmJiBzZXR0aW5ncy5zaG93TWFya3VwTW9iaWxlXG4gICAgICAgICAgfHwgKG1vZGUgIT09ICdtb2JpbGUnKSAmJiBzZXR0aW5ncy5zaG93TWFya3VwXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdiJylcIj5cbiAgICAgICAgICA8c3Ryb25nPmI8L3N0cm9uZz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2knKVwiPlxuICAgICAgICAgIDxlbT5pPC9lbT5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3UnKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFya3VwX191bmRlcmxpbmVcIj51PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgncycpXCI+XG4gICAgICAgICAgPGRlbD5zPC9kZWw+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzdWInKVwiPlxuICAgICAgICAgIDxzdWI+czwvc3ViPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnc3VwJylcIj5cbiAgICAgICAgICA8c3VwPnM8L3N1cD5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2NvZGUnKVwiPlxuICAgICAgICAgIDxjb2RlPmM8L2NvZGU+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzcG9pbGVyJylcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fc3BvaWxlciBtYXJrdXBfX3Nwb2lsZXItLXZpc2libGVcIj5zcDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3JwJylcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fcnAgbWFya3VwX19ycC0tdmlzaWJsZVwiPnJwPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydFF1b3RlKClcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fcXVvdGVcIj4mZ3Q7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19yb3dcIj5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLm1lc3NhZ2VcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjprZXlkb3duPVwib25NZXNzYWdlS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICB2LW9uOnBhc3RlPVwib25NZXNzYWdlUGFzdGUoJGV2ZW50KVwiXG4gICAgICAgICAgcmVmPVwibWVzc2FnZVwiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwic3RhdHVzXCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3N0YXR1c1wiPnt7IHN0YXR1cyB9fTwvZGl2PlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fc3VibWl0ICBwb3N0aW5nLWZvcm1fX3N1Ym1pdC0tbW9iaWxlXCJcbiAgICAgICAgdi1pZj1cIm1vZGUgPT0gJ21vYmlsZSdcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlJlcGx5PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb3JtPmAsXG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY29tcG9uZW50LnNldHRpbmdzLmZvcm0uZmxvYXQgPyAnZmxvYXQnIDogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgIG1vZGU6ICdtb2JpbGUnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgICAgICB0aHJlYWRJZCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocmVhZElkO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuc2V0dGluZ3MuZm9ybTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICAgICAgLy8gTG9hZCBzYXZlZCBuYW1lLlxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsb2NhbFN0b3JhZ2VbJ3Bvc3RpbmctZm9ybS5uYW1lJ107XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZSA9IHRoaXMudXBkYXRlTW9kZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5mbG9hdFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHMocG9zaXRpb24pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveWVkKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAneC1maWxlLXByZXZpZXcnOiBfMS5GaWxlUHJldmlldyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaXhpbnM6IFtcbiAgICAgICAgICAgICAgICBfMS5kcmFnZ2FibGUsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIGdldERyYWdIYW5kbGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmhlYWRlcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdldERyYWdnYWJsZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmZvcm07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUubGVmdCA9IGAke2Nvb3Jkcy54fXB4YDtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlLnN0eWxlLnRvcCA9IGAke2Nvb3Jkcy55fXB4YDtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnNldHRpbmdzLmZvcm0uZmxvYXRQb3NpdGlvbiA9IGNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgX18xLlNldHRpbmdzTWFuYWdlci5zYXZlKGNvbXBvbmVudC5zZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkRyYWdnYWJsZVJlc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHRoaXMuZ2V0UG9zaXRpb24oKSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzZXRGaWVsZHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLnN1YmplY3QgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5maWxlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYWtlRmxvYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAnZmxvYXQnO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5mbG9hdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZShjb21wb25lbnQuc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLmZsb2F0UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5jaGVja0JvdW5kcyhwb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW92ZVRvQm90dG9tKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG93RmlsZURpYWxvZygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuJHJlZnMuZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5maWxlLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZU1vZGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZSA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNjAwID8gJ21vYmlsZScgOiAnZGVmYXVsdCc7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdtb2JpbGUnICYmIHRoaXMucG9zaXRpb24gPT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25OYW1lQ2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLm5hbWUnXSA9IHRoaXMuZmllbGRzLm5hbWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkZpbGVEcm9wKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlLmRhdGFUcmFuc2Zlci5maWxlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQgJiYgdGV4dC5tYXRjaCgvaHR0cHM/OlxcL1xcL1stYS16QS1aMC05QDolLl9cXCt+Iz1dezIsfVxcLlthLXpdezIsfVxcYlstYS16QS1aMC05QDolX1xcKy5+Iz8mXFwvPV0qLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB0ZXh0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBFcnJvcjogJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRmlsZUNoYW5nZShmaWxlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBmaWxlcy5sZW5ndGggPyBmaWxlc1swXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbk1lc3NhZ2VLZXlEb3duKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VibWl0IGZvcm0gb24gQ3RybCtFbnRlciBpbiB0aGUgbWVzc2FnZSBmaWVsZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChlLmtleUNvZGUgPT0gMTAgfHwgZS5rZXlDb2RlID09IDEzKSAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlUGFzdGUoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXN0ZSBmaWxlLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gZS5jbGlwYm9hcmREYXRhIHx8IGUub3JpZ2luYWxFdmVudC5jbGlwYm9hcmREYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRhdGEuaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZS5zdGFydHNXaXRoKCdpbWFnZS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGl0ZW0udHlwZS5zdGFydHNXaXRoKCdhdWRpby8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGl0ZW0udHlwZS5zdGFydHNXaXRoKCd2aWRlby8nKTtcbiAgICAgICAgICAgICAgICAgICAgfSlbMF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRNYXJrdXAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHRoaXMuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5pbmdUYWcgPSBgWyR7dGFnfV1gO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbG9zaW5nVGFnID0gYFsvJHt0YWd9XWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0ZXh0IGlzIHNlbGVjdGVkLCB3cmFwIGl0IGluIGEgdGFnIHBhaXIuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uYmVnaW4sIHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgb3BlbmluZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5lbmQgKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UubGFzdEluZGV4T2Yob3BlbmluZ1RhZywgc2VsZWN0aW9uLmJlZ2luKSA+IG1lc3NhZ2UubGFzdEluZGV4T2YoY2xvc2luZ1RhZywgc2VsZWN0aW9uLmJlZ2luKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NpbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgY2xvc2luZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb24uZW5kICsgY2xvc2luZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnNlcnRRdW90ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUVsID0gdGhpcy4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kIC0gbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5maWVsZHMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmVmb3JlID0gbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWZ0ZXIgPSBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUJlZm9yZSA9IGJlZm9yZS5sZW5ndGggJiYgIWJlZm9yZS5lbmRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdMaW5lQWZ0ZXIgPSAhYWZ0ZXIubGVuZ3RoIHx8ICFhZnRlci5zdGFydHNXaXRoKCdcXG4nKSA/ICdcXG4nIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZSA9IGAke25ld0xpbmVCZWZvcmV9PiAke3F1b3RlVGV4dH0ke25ld0xpbmVBZnRlcn1gO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZnRlcixcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBxdW90ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uU3VibWl0KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0geWllbGQgYXBpXzEuQXBpLmNyZWF0ZVBvc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRocmVhZElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiB0aGlzLmZpZWxkcy5zdWJqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmZpZWxkcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLmZpZWxkcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiB0aGlzLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudCA9IE1hdGguY2VpbChlLmxvYWRlZCAvIGUudG90YWwgKiAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBVcGxvYWRpbmcuLi4gJHtwcm9ncmVzc1BlcmNlbnR9JWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBmb3JtIHRvIHRoZSBpbml0aWFsIGxvY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0luVGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgREUgdGhyZWFkIHVwZGF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlciA9IHV0aWxzXzEuRE9NLnFzKCcuZGUtdGhyLXVwZGF0ZXItbGluaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlci5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byB0aHJlYWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgRXJyb3I6ICR7ZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBib3R0b20uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxpbmdFbCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZ0VsLnNjcm9sbFRvcCA9IHNjcm9sbGluZ0VsLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3TW9kZWwucG9zaXRpb24gPT09ICdwb3N0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHV0aWxzXzEuRE9NLnFzKCcubGF5b3V0X19jb250ZW50Jyk7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmxpbmsnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSW5UaHJlYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLnBvc2l0aW9uICE9PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIGZvcm0gdG8gdGhlIHBvc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5wb3N0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvUG9zdChwb3N0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJbnNlcnQgcmVwbHkgbWFya3VwLlxuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS5maWVsZHMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBiZWZvcmUgPSBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyID0gbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUJlZm9yZSA9IGJlZm9yZS5sZW5ndGggJiYgIWJlZm9yZS5lbmRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpbmVBZnRlciA9ICFhZnRlci5sZW5ndGggfHwgIWFmdGVyLnN0YXJ0c1dpdGgoJ1xcbicpID8gJ1xcbicgOiAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmbGluaycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlID0gcXVvdGVUZXh0XG4gICAgICAgICAgICAgICAgICAgID8gYCR7bmV3TGluZUJlZm9yZX0+PiR7aWR9XFxuPiAke3F1b3RlVGV4dH0ke25ld0xpbmVBZnRlcn1gXG4gICAgICAgICAgICAgICAgICAgIDogYCR7bmV3TGluZUJlZm9yZX0+PiR7aWR9JHtuZXdMaW5lQWZ0ZXJ9YDtcbiAgICAgICAgICAgICAgICB2bS5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXIsXG4gICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy52aWV3TW9kZWwuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b24pIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy52aWV3TW9kZWwuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybS1zaG93Jyk7XG4gICAgICAgIGlmIChzaG93QnV0dG9uKSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmVUb1Bvc3QocG9zdCkge1xuICAgICAgICBjb25zdCBmb3JtID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0nKTtcbiAgICAgICAgaWYgKGZvcm0pIHtcbiAgICAgICAgICAgIHBvc3QucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoZm9ybSwgcG9zdC5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIGNvbnN0IHZtID0gdGhpcy52aWV3TW9kZWw7XG4gICAgICAgIHZtLnBvc2l0aW9uID0gJ3Bvc3QnO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmZvcm0uZmxvYXQgPSBmYWxzZTtcbiAgICAgICAgX18xLlNldHRpbmdzTWFuYWdlci5zYXZlKHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG1vdmVUb0JvdHRvbSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybS13cmFwcGVyJyk7XG4gICAgICAgIGlmIChmb3JtICYmIHdyYXBwZXIpIHtcbiAgICAgICAgICAgIHdyYXBwZXIuaW5zZXJ0QmVmb3JlKGZvcm0sIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICB2bS5wb3NpdGlvbiA9ICdib3R0b20nO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmZvcm0uZmxvYXQgPSBmYWxzZTtcbiAgICAgICAgX18xLlNldHRpbmdzTWFuYWdlci5zYXZlKHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0aW5nRm9ybSA9IFBvc3RpbmdGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsdXhvbl8xID0gcmVxdWlyZShcImx1eG9uXCIpO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgU2V0dGluZ3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3NGb3JtID0gdXRpbHNfMS5ET00ucWlkKCdzZXR0aW5nc19mb3JtJyk7XG4gICAgICAgIGlmICghc2V0dGluZ3NGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXcgdnVlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBlbDogJyNzZXR0aW5nc19mb3JtJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiY29udGVudF9fc2V0dGluZ3MtZm9ybSBzZXR0aW5ncy1mb3JtXCIgaWQ9XCJzZXR0aW5nc19mb3JtXCI+XG4gIDx1bCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYnNcIj5cbiAgICA8bGkgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX190YWJcIlxuICAgICAgdi1iaW5kOmNsYXNzPVwieyAnc2V0dGluZ3MtZm9ybV9fdGFiLS1hY3RpdmUnOiB0YWIgPT09ICdjb21tb24nIH1cIlxuICAgICAgdi1vbjpjbGljaz1cInRhYiA9ICdjb21tb24nXCI+Q29tbW9uPC9saT5cblxuICAgIDxsaSBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYlwiXG4gICAgICB2LWJpbmQ6Y2xhc3M9XCJ7ICdzZXR0aW5ncy1mb3JtX190YWItLWFjdGl2ZSc6IHRhYiA9PT0gJ2Zvcm0nIH1cIlxuICAgICAgdi1vbjpjbGljaz1cInRhYiA9ICdmb3JtJ1wiPkZvcm08L2xpPlxuXG4gICAgPGxpIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fdGFiXCJcbiAgICAgIHYtYmluZDpjbGFzcz1cInsgJ3NldHRpbmdzLWZvcm1fX3RhYi0tYWN0aXZlJzogdGFiID09PSAndGltZScgfVwiXG4gICAgICB2LW9uOmNsaWNrPVwidGFiID0gJ3RpbWUnXCI+VGltZTwvbGk+XG4gIDwvdWw+XG5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYi1jb250ZW50XCJcbiAgICB2LXNob3c9XCJ0YWIgPT09ICdjb21tb24nXCI+XG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+VGhyZWFkIEFsaWdubWVudDwvaDM+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgbmFtZT1cImNvbW1vbl9sYXlvdXRfY2VudGVyXCIgdmFsdWU9XCJjZW50ZXJcIlxuICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5jb21tb24ubGF5b3V0XCIgLz5cbiAgICAgICAgQ2VudGVyXG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJjb21tb25fbGF5b3V0X2xlZnRcIiB2YWx1ZT1cImxlZnRcIlxuICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5jb21tb24ubGF5b3V0XCIgLz5cbiAgICAgICAgTGVmdFxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3RhYi1jb250ZW50XCJcbiAgICB2LXNob3c9XCJ0YWIgPT09ICdmb3JtJ1wiPlxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPlByZXZpZXcgQWxpZ25tZW50PC9oMz5cblxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xhYmVsXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICBuYW1lPVwiZm9ybV9wcmV2aWV3X2FsaWduXCIgdmFsdWU9XCJsZWZ0XCJcbiAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5wcmV2aWV3QWxpZ25cIiAvPlxuICAgICAgICBPbiB0aGUgbGVmdFxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xhYmVsXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICBuYW1lPVwiZm9ybV9wcmV2aWV3X2FsaWduXCIgdmFsdWU9XCJyaWdodFwiXG4gICAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLmZvcm0ucHJldmlld0FsaWduXCIgLz5cbiAgICAgICAgT24gdGhlIHJpZ2h0XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuXG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+TWFya3VwIGJ1dHRvbnM8L2gzPlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy5mb3JtLnNob3dNYXJrdXBcIiAvPlxuICAgICAgICBTaG93IG1hcmt1cFxuICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yb3dcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2xhYmVsXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MuZm9ybS5zaG93TWFya3VwTW9iaWxlXCIgLz5cbiAgICAgICAgU2hvdyBtYXJrdXAgKG1vYmlsZSlcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX190YWItY29udGVudFwiXG4gICAgdi1zaG93PVwidGFiID09PSAndGltZSdcIj5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5MYW5ndWFnZTwvaDM+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgbmFtZT1cInRpbWVfbG9jYWxlXCIgdmFsdWU9XCJkZWZhdWx0XCJcbiAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5sb2NhbGVcIiAvPlxuICAgICAgICBCcm93c2VyIGRlZmF1bHRcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgbmFtZT1cInRpbWVfbG9jYWxlXCIgdmFsdWU9XCJjdXN0b21cIlxuICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLmxvY2FsZVwiIC8+XG4gICAgICAgIEN1c3RvbVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCIgcGxhY2Vob2xkZXI9XCJlblwiXG4gICAgICAgIHYtb246Y2xpY2s9XCJzZXR0aW5ncy50aW1lLmxvY2FsZSA9ICdjdXN0b20nXCJcbiAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLnRpbWUubG9jYWxlQ3VzdG9tXCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxoMyBjbGFzcz1cInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiPkZvcm1hdDwvaDM+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgbmFtZT1cInRpbWVfZm9ybWF0XCIgdmFsdWU9XCJkZWZhdWx0XCJcbiAgICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5mb3JtYXRcIiAvPlxuICAgICAgICBCcm93c2VyIGRlZmF1bHRcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgbmFtZT1cInRpbWVfZm9ybWF0XCIgdmFsdWU9XCJjdXN0b21cIlxuICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLmZvcm1hdFwiIC8+XG4gICAgICAgIEN1c3RvbVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFRUUsIGRkIE1NTSB5eXl5IEhIOm1tOnNzXCJcbiAgICAgICAgdi1vbjpjbGljaz1cInNldHRpbmdzLnRpbWUuZm9ybWF0ID0gJ2N1c3RvbSdcIlxuICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZS5mb3JtYXRDdXN0b21cIiAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHA+U2VlIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9sdXhvbi9ibG9iL21hc3Rlci9kb2NzL2Zvcm1hdHRpbmcubWQjdGFibGUtb2YtdG9rZW5zXCI+bHV4b24gZG9jdW1lbnRhdGlvbjwvYT4gZm9yIHRoZSBjdXN0b20gdG9rZW5zIHJlZmVyZW5jZS48L3A+XG5cbiAgICA8aDMgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIj5UaW1lIHpvbmU8L2gzPlxuXG4gICAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3Jvd1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgIG5hbWU9XCJ0aW1lX3pvbmVcIiB2YWx1ZT1cImRlZmF1bHRcIlxuICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLnpvbmVcIiAvPlxuICAgICAgICBCcm93c2VyIGRlZmF1bHRcbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fcm93XCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgbmFtZT1cInRpbWVfem9uZVwiIHZhbHVlPVwiZml4ZWRcIlxuICAgICAgICAgIHYtbW9kZWw9XCJzZXR0aW5ncy50aW1lLnpvbmVcIiAvPlxuICAgICAgICBGaXhlZCBVVEMgb2Zmc2V0XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiXG4gICAgICAgIG1pbj1cIi05OVwiIG1heD1cIjk5XCJcbiAgICAgICAgdi1vbjpjbGljaz1cInNldHRpbmdzLnRpbWUuem9uZSA9ICdmaXhlZCdcIlxuICAgICAgICB2LW1vZGVsPVwic2V0dGluZ3MudGltZS56b25lRml4ZWRcIiAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGgzIGNsYXNzPVwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCI+Q3VycmVudCBmb3JtYXQ8L2gzPlxuXG4gICAgPHA+e3sgdGltZSB9fTwvcD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInNldHRpbmdzLWZvcm1fX2Zvb3RlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1mb3JtX19idXR0b25zXCI+XG4gICAgICA8cCBjbGFzcz1cInNldHRpbmdzLWZvcm1fX3N0YXR1c1wiID57eyBzdGF0dXMgfX08L3A+XG5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHNldHRpbmdzLWZvcm1fX3NhdmVcIlxuICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJzYXZlU2V0dGluZ3MoKVwiPlNhdmU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gLFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdGFiOiAnY29tbW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJycsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgICAgIC8vIExvYWQgc2V0dGluZ3MgZnJvbSBhIGNvb2tpZVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSBfXzEuU2V0dGluZ3NNYW5hZ2VyLmxvYWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lciA9IHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZS5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBsdXhvbl8xLkRhdGVUaW1lLmZyb21KU0RhdGUobmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSB1dGlsc18xLlRpbWUuZm9ybWF0KHRpbWUsIHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gJ0ludmFsaWQgZm9ybWF0JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2F2ZVNldHRpbmdzKCkge1xuICAgICAgICAgICAgICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluZGljYXRlIHRoYXQgc2V0dGluZ3MgYXJlIHNhdmVkLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ1NldHRpbmdzIHNhdmVkLic7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDAgLyAzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5TZXR0aW5ncyA9IFNldHRpbmdzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgU3R5bGVTd2l0Y2gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IHt9O1xuICAgICAgICAvLyBQYXJzZSBzZWxlY3RhYmxlIHN0eWxlcyBmcm9tIDxoZWFkPlxuICAgICAgICBjb25zdCBzdHlsZXMgPSB1dGlsc18xLkRPTS5xc2EoJ2xpbmtbdGl0bGVdJyk7XG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gc3R5bGUudGl0bGU7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBzdHlsZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzW3RpdGxlXSA9IHVybDtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gR2V0IHNlbGVjdGVkIHN0eWxlXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX3N0eWxlID0gdXRpbHNfMS5Db29raWUuZ2V0KCd0aW55aWJfc3R5bGUnLCAnU3ludGh3YXZlJyk7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoc2VsZWN0ZWRfc3R5bGUpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVfc3dpdGNoZXIgPSB1dGlsc18xLkRPTS5xaWQoJ3N0eWxlLXN3aXRjaGVyJyk7XG4gICAgICAgIGlmIChzdHlsZV9zd2l0Y2hlcikge1xuICAgICAgICAgICAgLy8gUG9wdWxhdGUgc3R5bGUgc3dpdGNoZXIgd2lkZ2V0XG4gICAgICAgICAgICBjb25zdCBzdHlsZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxlcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gc3R5bGVzW2ldO1xuICAgICAgICAgICAgICAgIHN0eWxlX3N3aXRjaGVyLmlubmVySFRNTCArPSBgPG9wdGlvbiBjbGFzcz1cInN0eWxlLXN3aXRjaGVyX19vcHRpb25cIiB2YWx1ZT1cIiR7dGl0bGV9XCI+JHt0aXRsZX08L29wdGlvbj5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IHN0eWxlIGNoYW5nZSBjYWxsYmFja1xuICAgICAgICAgICAgc3R5bGVfc3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3R5bGUoc3R5bGVfc3dpdGNoZXIudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRfc3R5bGUgPSB1dGlsc18xLkNvb2tpZS5nZXQoJ3RpbnlpYl9zdHlsZScsICdTeW50aHdhdmUnKTtcbiAgICAgICAgd2luZG93LmRhdGFMYXllci5wdXNoKHsgJ3RoZW1lJzogc2VsZWN0ZWRfc3R5bGUgfSk7XG4gICAgfVxuICAgIHNldFN0eWxlKHN0eWxlKSB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSB1dGlsc18xLkRPTS5xcygnaGVhZCcpO1xuICAgICAgICAvLyBJZiBubyA8aGVhZD4gZWxlbWVudCwgZG8gbm90aGluZ1xuICAgICAgICBpZiAoIWhlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuRE9NLnFzKCdsaW5rW2RhdGEtc2VsZWN0ZWRdJyk7XG4gICAgICAgIGlmIChzZWxlY3RlZF9zdHlsZSkge1xuICAgICAgICAgICAgLy8gSWYgc3R5bGUgYWxyZWFkeSBzZWxlY3RlZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkX3N0eWxlLnRpdGxlID09PSBzdHlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmV2aW91c2x5IHNlbGVjdGVkIHN0eWxlIGZyb20gPGhlYWQ+XG4gICAgICAgICAgICBzZWxlY3RlZF9zdHlsZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgY3VycmVudGx5IHNlbGVjdGVkIHN0eWxlIHRvIDxoZWFkPlxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnN0eWxlc1tzdHlsZV07XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgICAgIGxpbmsudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIC8vIFNhdmUgc2VsZWN0ZWQgc3R5bGVcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9kYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZXhwaXJhdGlvbl9kYXRlLnNldFRpbWUoZXhwaXJhdGlvbl9kYXRlLmdldFRpbWUoKSArIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICB1dGlsc18xLkNvb2tpZS5zZXQoJ3RpbnlpYl9zdHlsZScsIHN0eWxlLCBleHBpcmF0aW9uX2RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3R5bGVTd2l0Y2ggPSBTdHlsZVN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBldmVudEJ1cyA9IG5ldyB2dWVfMS5kZWZhdWx0KCk7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRCdXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFdmVudHM7XG4oZnVuY3Rpb24gKEV2ZW50cykge1xuICAgIEV2ZW50c1tcIlJlYWR5XCJdID0gXCJyZWFkeVwiO1xuICAgIEV2ZW50c1tcIlBvc3RzSW5zZXJ0ZWRcIl0gPSBcInBvc3RzX2luc2VydGVkXCI7XG4gICAgRXZlbnRzW1wiUG9zdENyZWF0ZWRcIl0gPSBcInBvc3RfY3JlYXRlZFwiO1xuICAgIEV2ZW50c1tcIkluc2VydE1hcmt1cFwiXSA9IFwiaW5zZXJ0X21hcmt1cFwiO1xufSkoRXZlbnRzID0gZXhwb3J0cy5FdmVudHMgfHwgKGV4cG9ydHMuRXZlbnRzID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFwaV8xID0gcmVxdWlyZShcIi4vYXBpXCIpO1xuZXhwb3J0cy5BcGkgPSBhcGlfMS5BcGk7XG52YXIgZXZlbnRfYnVzXzEgPSByZXF1aXJlKFwiLi9ldmVudC1idXNcIik7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRfYnVzXzEuZXZlbnRCdXM7XG52YXIgZXZlbnRzXzEgPSByZXF1aXJlKFwiLi9ldmVudHNcIik7XG5leHBvcnRzLkV2ZW50cyA9IGV2ZW50c18xLkV2ZW50cztcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzTWFuYWdlciA9IHNldHRpbmdzXzEuU2V0dGluZ3NNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzZXR0aW5nc0tleSA9ICdzZXR0aW5ncyc7XG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIGxheW91dDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBmb3JtOiB7XG4gICAgICAgIHByZXZpZXdBbGlnbjogJ2xlZnQnLFxuICAgICAgICBzaG93TWFya3VwOiB0cnVlLFxuICAgICAgICBzaG93TWFya3VwTW9iaWxlOiBmYWxzZSxcbiAgICAgICAgZmxvYXQ6IGZhbHNlLFxuICAgICAgICBmbG9hdFBvc2l0aW9uOiB7IHg6IDEwMCwgeTogMTAwIH0sXG4gICAgfSxcbiAgICB0aW1lOiB7XG4gICAgICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxuICAgICAgICBsb2NhbGVDdXN0b206ICcnLFxuICAgICAgICB6b25lOiAnZGVmYXVsdCcsXG4gICAgICAgIHpvbmVGaXhlZDogMCxcbiAgICAgICAgZm9ybWF0OiAnZGVmYXVsdCcsXG4gICAgICAgIGZvcm1hdEN1c3RvbTogJycsXG4gICAgfSxcbn07XG5mdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGNvbnN0IG91dHB1dCA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmNsYXNzIFNldHRpbmdzTWFuYWdlciB7XG4gICAgc3RhdGljIGxvYWQoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5nc0tleSkpO1xuICAgICAgICByZXR1cm4gbWVyZ2UoZGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XG4gICAgfVxuICAgIHN0YXRpYyBzYXZlKHNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNldHRpbmdzS2V5LCBkYXRhKTtcbiAgICB9XG59XG5leHBvcnRzLlNldHRpbmdzTWFuYWdlciA9IFNldHRpbmdzTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29va2llIHtcbiAgICBzdGF0aWMgZ2V0KG5hbWUsIF9kZWZhdWx0ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb29raWVfc3RyID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcbiAgICAgICAgY29uc3QgY29va2llX3BhcnRzID0gY29va2llX3N0ci5zcGxpdChgOyAke25hbWV9PWApO1xuICAgICAgICBpZiAoY29va2llX3BhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gY29va2llX3BhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWVfZW5jKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQobmFtZSwgdmFsdWUsIGV4cGlyYXRpb24pIHtcbiAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9zdHIgPSBleHBpcmF0aW9uLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWVfZW5jfTsgcGF0aD0vOyBleHBpcmVzPSR7ZXhwaXJhdGlvbl9zdHJ9YDtcbiAgICB9XG59XG5leHBvcnRzLkNvb2tpZSA9IENvb2tpZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRE9NIHtcbiAgICBzdGF0aWMgcWlkKGlkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICAgIHN0YXRpYyBxcyhzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuICAgIHN0YXRpYyBxc2Eoc2VsZWN0b3IsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRMaXN0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRMaXN0KTtcbiAgICB9XG59XG5leHBvcnRzLkRPTSA9IERPTTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvb2tpZV8xID0gcmVxdWlyZShcIi4vY29va2llXCIpO1xuZXhwb3J0cy5Db29raWUgPSBjb29raWVfMS5Db29raWU7XG52YXIgZG9tXzEgPSByZXF1aXJlKFwiLi9kb21cIik7XG5leHBvcnRzLkRPTSA9IGRvbV8xLkRPTTtcbnZhciB0aW1lXzEgPSByZXF1aXJlKFwiLi90aW1lXCIpO1xuZXhwb3J0cy5UaW1lID0gdGltZV8xLlRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFRpbWUge1xuICAgIHN0YXRpYyBmb3JtYXQodGltZSwgc2V0dGluZ3MpIHtcbiAgICAgICAgaWYgKHNldHRpbmdzLnRpbWUubG9jYWxlID09PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgdGltZSA9IHRpbWUuc2V0TG9jYWxlKHNldHRpbmdzLnRpbWUubG9jYWxlQ3VzdG9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS56b25lID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBzZXR0aW5ncy50aW1lLnpvbmVGaXhlZDtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFN0ciA9ICdVVEMnICsgKG9mZnNldCA+PSAwID8gJysnIDogJycpICsgb2Zmc2V0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5zZXRab25lKG9mZnNldFN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzLnRpbWUuZm9ybWF0ID09PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWUudG9Gb3JtYXQoc2V0dGluZ3MudGltZS5mb3JtYXRDdXN0b20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWUudG9Gb3JtYXQoJ2QuTEwueXl5eSBISDptbTpzcycpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UaW1lID0gVGltZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gbHV4b247IiwibW9kdWxlLmV4cG9ydHMgPSBWdWU7Il0sInNvdXJjZVJvb3QiOiIifQ==