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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/mobile.ts");
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

/***/ "./ts/components/mobile/index.ts":
/*!***************************************!*\
  !*** ./ts/components/mobile/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var post_correct_time_1 = __webpack_require__(/*! ./post-correct-time */ "./ts/components/mobile/post-correct-time.ts");
exports.PostCorrectTime = post_correct_time_1.PostCorrectTime;
var post_form_1 = __webpack_require__(/*! ./post-form */ "./ts/components/mobile/post-form.ts");
exports.PostForm = post_form_1.PostForm;
var post_image_popup_1 = __webpack_require__(/*! ./post-image-popup */ "./ts/components/mobile/post-image-popup.ts");
exports.PostImagePopup = post_image_popup_1.PostImagePopup;
var post_quote_1 = __webpack_require__(/*! ./post-quote */ "./ts/components/mobile/post-quote.ts");
exports.PostQuote = post_quote_1.PostQuote;
var post_reference_map_1 = __webpack_require__(/*! ./post-reference-map */ "./ts/components/mobile/post-reference-map.ts");
exports.PostReferenceMap = post_reference_map_1.PostReferenceMap;
var thread_updater_1 = __webpack_require__(/*! ./thread-updater */ "./ts/components/mobile/thread-updater.ts");
exports.ThreadUpdater = thread_updater_1.ThreadUpdater;


/***/ }),

/***/ "./ts/components/mobile/post-correct-time.ts":
/*!***************************************************!*\
  !*** ./ts/components/mobile/post-correct-time.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const __1 = __webpack_require__(/*! ../.. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./ts/utils/index.ts");
class PostCorrectTime {
    constructor() {
        __1.eventBus.$on(__1.Events.PostsInserted, (posts) => posts.forEach(this.onPostInsert.bind(this)));
    }
    onPostInsert(post) {
        const timeEl = utils_1.DOM.qs('.post__date', post);
        if (timeEl) {
            const timeIso = timeEl.getAttribute('datetime');
            const time = luxon_1.DateTime.fromISO(timeIso);
            timeEl.textContent = time.toLocaleString(luxon_1.DateTime.DATETIME_MED_WITH_SECONDS);
        }
    }
}
exports.PostCorrectTime = PostCorrectTime;


/***/ }),

/***/ "./ts/components/mobile/post-form.ts":
/*!*******************************************!*\
  !*** ./ts/components/mobile/post-form.ts ***!
  \*******************************************/
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
const __1 = __webpack_require__(/*! ../.. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./ts/utils/index.ts");
class PostForm {
    constructor() {
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
        __1.eventBus.$on(__1.Events.InsertMarkup, (data) => {
            const form = utils_1.DOM.qid('postform');
            if (!form) {
                console.warn('#postform is not found.');
                return;
            }
            const message = utils_1.DOM.qs('#message', form);
            if (!message) {
                console.warn('#message is not found.');
                return;
            }
            data.unshift(message);
            this.insertMarkup.apply(this, data);
        });
    }
    onReady() {
        const form = utils_1.DOM.qid('postform');
        if (!form) {
            console.warn('#postform is not found.');
            return;
        }
        const subject = utils_1.DOM.qs('#subject', form);
        if (subject) {
            const value = localStorage.getItem('postform.subject');
            if (value) {
                subject.value = value;
            }
            subject.addEventListener('change', e => {
                localStorage.setItem('postform.subject', subject.value);
            });
        }
        const name = utils_1.DOM.qs('#name', form);
        if (name) {
            const value = localStorage.getItem('postform.name');
            if (value) {
                name.value = value;
            }
            name.addEventListener('change', e => {
                localStorage.setItem('postform.name', name.value);
            });
        }
        const email = utils_1.DOM.qs('#email', form);
        if (email) {
            const value = localStorage.getItem('postform.email');
            if (value) {
                email.value = value;
            }
            email.addEventListener('change', e => {
                localStorage.setItem('postform.email', email.value);
            });
        }
        const message = utils_1.DOM.qs('#message', form);
        if (message) {
            const markup_buttons = {
                'postform-markup-bold': e => this.insertBBCode(message, 'b'),
                'postform-markup-italic': e => this.insertBBCode(message, 'i'),
                'postform-markup-underline': e => this.insertBBCode(message, 'u'),
                'postform-markup-strike': e => this.insertBBCode(message, 's'),
                'postform-markup-sup': e => this.insertBBCode(message, 'sup'),
                'postform-markup-sub': e => this.insertBBCode(message, 'sub'),
                'postform-markup-spoiler': e => this.insertBBCode(message, 'spoiler'),
                'postform-markup-rp': e => this.insertBBCode(message, 'rp'),
                'postform-markup-code': e => this.insertBBCode(message, 'code'),
                'postform-markup-quote': e => this.insertMarkup(message, '>', '', true),
            };
            const markup_buttons_ids = Object.keys(markup_buttons);
            markup_buttons_ids.forEach(id => {
                const button = utils_1.DOM.qs(`#${id}`, form);
                if (button) {
                    button.addEventListener('click', markup_buttons[id]);
                }
            });
        }
        const file_inputs = utils_1.DOM.qsa('#file', form);
        file_inputs.forEach(file_input => {
            file_input.addEventListener('change', e => {
                if (file_input.files && file_input.files.length) {
                    const reader = new FileReader();
                    reader.addEventListener('load', e => {
                        const file_wrapper = file_input.parentElement;
                        let file_preview = utils_1.DOM.qs('.form__file-preview', file_wrapper);
                        if (!file_preview) {
                            file_preview = document.createElement('img');
                            file_preview.classList.add('form__file-preview');
                            file_wrapper.appendChild(file_preview);
                        }
                        file_preview.src = e.target.result;
                    });
                    reader.readAsDataURL(file_input.files[0]);
                }
            });
        });
        form.addEventListener('submit', (e) => __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const formData = new FormData(form);
            const response = yield fetch(`${window.baseUrl}/ajax/mobile/post/create`, {
                method: 'POST',
                body: formData,
                credentials: 'same-origin',
            });
            const isOnBoardPage = utils_1.DOM.qsa('.thread').length === 0;
            if (isOnBoardPage) {
                if (response.headers.has('Location')) {
                    window.location.href = response.headers.get('Location');
                }
            }
            if (response.status < 400) {
                // Clear form message and file.
                message.value = '';
                file_inputs.forEach(el => {
                    el.type = 'text';
                    el.value = '';
                    el.type = 'file';
                });
                // Clear form file preview.
                utils_1.DOM.qsa('.form__file-preview', form).forEach(el => el.remove());
                const data = yield response.json();
                if (data.name) {
                    localStorage.setItem('user.name', data.name);
                }
                else {
                    localStorage.removeItem('user.name');
                }
                if (data.tripcode) {
                    localStorage.setItem('user.tripcode', data.tripcode);
                }
                else {
                    localStorage.removeItem('user.tripcode');
                }
                __1.eventBus.$emit(__1.Events.PostCreated);
            }
            else {
                // TODO: show error in the form.
                console.error(response);
            }
        }));
    }
    insertBBCode(message, code) {
        return this.insertMarkup(message, `[${code}]`, `[/${code}]`);
    }
    insertMarkup(message, before, after, insertNewLine = false) {
        const str = message.value;
        const begin = message.selectionStart;
        const end = message.selectionEnd;
        const strStart = str.substring(0, begin);
        const strSelection = str.substring(begin, end);
        const strEnd = str.substring(end);
        if (insertNewLine && strStart.length && !strStart.endsWith('\n')) {
            before = `\n${before}`;
        }
        message.value = [
            strStart,
            before,
            strSelection,
            after,
            strEnd,
        ].join('');
        message.focus();
        message.selectionStart = begin + before.length;
        message.selectionEnd = begin + before.length + (end - begin);
    }
}
exports.PostForm = PostForm;


/***/ }),

/***/ "./ts/components/mobile/post-image-popup.ts":
/*!**************************************************!*\
  !*** ./ts/components/mobile/post-image-popup.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __webpack_require__(/*! ../.. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./ts/utils/index.ts");
class PostImagePopup {
    constructor() {
        this.scale = 1.0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.dragStartOffsetX = 0;
        this.dragStartOffsetY = 0;
        this.dragStartMouseX = 0;
        this.dragStartMouseY = 0;
        __1.eventBus.$on(__1.Events.PostsInserted, (posts) => posts.forEach(this.onPostInsert.bind(this)));
    }
    onPostInsert(post) {
        const thumbnailLink = utils_1.DOM.qs('.post__thumbnail-link', post);
        if (thumbnailLink) {
            thumbnailLink.addEventListener('click', e => {
                e.preventDefault();
                this.openModal(thumbnailLink);
                return false;
            });
        }
    }
    openModal(thumbnailLink) {
        let file;
        const type = thumbnailLink.getAttribute('data-file-type');
        if (type === 'video') {
            const element = document.createElement('video');
            const width = thumbnailLink.getAttribute('data-file-width');
            const height = thumbnailLink.getAttribute('data-file-height');
            element.classList.add('modal__video');
            element.setAttribute('controls', 'controls');
            element.setAttribute('preload', 'metadata');
            element.setAttribute('width', width);
            element.setAttribute('height', height);
            element.src = thumbnailLink.href;
            file = element;
        }
        else if (type === 'audio') {
            const element = document.createElement('audio');
            element.classList.add('modal__audio');
            element.setAttribute('controls', 'controls');
            element.setAttribute('preload', 'metadata');
            element.src = thumbnailLink.href;
            file = element;
        }
        else {
            const element = document.createElement('img');
            element.classList.add('modal__image');
            element.src = thumbnailLink.href;
            file = element;
        }
        // Prevent default drag behaviour on the image.
        file.addEventListener('dragstart', e => {
            e.preventDefault();
            return false;
        });
        // Prevent image click event bubbling to the modal.
        file.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        // Move image on mouse drag.
        file.addEventListener('mousedown', e => {
            e.preventDefault();
            // Save initial image position.
            this.dragStartOffsetX = this.offsetX;
            this.dragStartOffsetY = this.offsetY;
            // Save initial mouse position.
            this.dragStartMouseX = e.pageX;
            this.dragStartMouseY = e.pageY;
            const onMouseMove = (e) => {
                e.preventDefault();
                // Get mouse offset delta.
                const deltaX = e.pageX - this.dragStartMouseX;
                const deltaY = e.pageY - this.dragStartMouseY;
                // Move image.
                this.offsetX = this.dragStartOffsetX + deltaX;
                this.offsetY = this.dragStartOffsetY + deltaY;
                this.transformModal(modal);
                return false;
            };
            const onMouseUp = (e) => {
                e.preventDefault();
                // Remove drag event handlers.
                document.removeEventListener('mousemove', onMouseMove);
                file.removeEventListener('mouseup', onMouseUp);
                // If image is not dragged, close the modal.
                const eps = 10e-3;
                if (Math.abs(this.offsetX - this.dragStartOffsetX) < eps
                    || Math.abs(this.offsetY - this.dragStartOffsetY) < eps) {
                    this.closeModal(modal);
                }
                return false;
            };
            // Setup drag event handlers.
            document.addEventListener('mousemove', onMouseMove);
            file.addEventListener('mouseup', onMouseUp);
            return false;
        });
        const modal = document.createElement('div');
        modal.classList.add('layout__modal', 'modal');
        modal.appendChild(file);
        // Close modal on mouse click.
        modal.addEventListener('click', e => {
            e.preventDefault();
            this.closeModal(modal);
            return false;
        });
        // Scale modal on mouse wheel.
        modal.addEventListener('wheel', e => {
            e.preventDefault();
            const delta = 0.1;
            this.scale = (1.0 - Math.sign(e.deltaY) * delta) * this.scale;
            this.transformModal(modal);
            return false;
        });
        const thumbnail = thumbnailLink.parentElement;
        thumbnail.appendChild(modal);
        // Fade-in the modal.
        modal.classList.add('fadable', 'fade');
        setTimeout(() => {
            modal.classList.remove('fade');
        }, 100);
    }
    transformModal(modal) {
        const image = utils_1.DOM.qs('.modal__image', modal);
        image.style.transform = `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`;
    }
    closeModal(modal) {
        this.scale = 1.0;
        this.offsetX = 0;
        this.offsetY = 0;
        // Fade-out the modal.
        modal.classList.add('fade');
        setTimeout(() => {
            modal.remove();
        }, 333);
    }
}
exports.PostImagePopup = PostImagePopup;


/***/ }),

/***/ "./ts/components/mobile/post-quote.ts":
/*!********************************************!*\
  !*** ./ts/components/mobile/post-quote.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __webpack_require__(/*! ../.. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./ts/utils/index.ts");
class PostQuote {
    constructor() {
        __1.eventBus.$on(__1.Events.PostsInserted, (posts) => posts.forEach(this.onPostInsert.bind(this)));
    }
    onPostInsert(post) {
        const quoteLink = utils_1.DOM.qs('.post__id-link', post);
        if (quoteLink) {
            quoteLink.addEventListener('click', e => {
                e.preventDefault();
                const id = quoteLink.getAttribute('data-post-id');
                __1.eventBus.$emit(__1.Events.InsertMarkup, [`>>${id}\n`, '', true]);
                return false;
            });
        }
    }
}
exports.PostQuote = PostQuote;


/***/ }),

/***/ "./ts/components/mobile/post-reference-map.ts":
/*!****************************************************!*\
  !*** ./ts/components/mobile/post-reference-map.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __webpack_require__(/*! ../.. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./ts/utils/index.ts");
class PostReferenceMap {
    constructor() {
        this.user = {};
        this.posts = {};
        this.user.name = localStorage.getItem('user.name');
        this.user.tripcode = localStorage.getItem('user.tripcode');
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
        // Get referenced posts.
        const referencedPosts = references
            .filter((reference, index) => references.indexOf(reference) === index)
            .map(reference => this.posts[reference.id])
            .filter(post => post);
        // Append the author name of the referenced post to the reference link text.
        references.forEach(reference => {
            const post = this.posts[reference.id];
            if (!post) {
                return;
            }
            reference.element.innerHTML = this.getPostRefLinkHtml(post);
        });
        // Check if it is user own post.
        const author = this.getPostAuthor(post);
        if (this.user.tripcode && this.user.tripcode.length && this.user.tripcode === author.tripcode
            || this.user.name && this.user.name.length && this.user.name === author.name) {
            post.classList.add('post_own');
        }
        // Append to posts a reference to this post.
        referencedPosts.forEach(referencedPost => {
            // Create post footer if it is not exists.
            let footer = utils_1.DOM.qs('.post__footer', referencedPost);
            if (!footer) {
                footer = document.createElement('div');
                footer.classList.add('post__footer');
                referencedPost.appendChild(footer);
            }
            // Append reference to the footer.
            const link = document.createElement('a');
            link.classList.add('post__reference-link');
            link.href = `#post_${postId}`;
            // Check if it is reply to user own post.
            const refPostAuthor = this.getPostAuthor(referencedPost);
            if (this.user.tripcode && this.user.tripcode.length && this.user.tripcode === refPostAuthor.tripcode
                || this.user.name && this.user.name.length && this.user.name === refPostAuthor.name) {
                post.classList.add('post_own-reply');
            }
            link.innerHTML = this.getPostRefLinkHtml(post);
            footer.appendChild(link);
        });
    }
    getPostAuthor(post) {
        const nameEl = utils_1.DOM.qs('.post__name', post);
        const tripcodeEl = utils_1.DOM.qs('.post__tripcode', post);
        return {
            name: nameEl ? nameEl.textContent : '',
            tripcode: tripcodeEl ? tripcodeEl.textContent : '',
        };
    }
    getPostRefLinkHtml(post) {
        const postId = +post.getAttribute('data-post-id');
        const nameEl = utils_1.DOM.qs('.post__name', post);
        const tripcodeEl = utils_1.DOM.qs('.post__tripcode', post);
        const name = nameEl ? nameEl.innerHTML : '';
        const tripcode = tripcodeEl ? tripcodeEl.innerHTML : '';
        if (name.length || tripcode.length) {
            return `<span class="post__reference-link-id">&gt;&gt;${postId}</span>`
                + ` <span class="post__reference-link-author">`
                + `(<span class="post__reference-link-name">${name}</span>`
                + `<span class="post__reference-link-tripcode">${tripcode}</span>)`
                + `</span>`;
        }
        else {
            return `<span class="post__reference-link-id">&gt;&gt;${postId}</span>`;
        }
    }
}
exports.PostReferenceMap = PostReferenceMap;


/***/ }),

/***/ "./ts/components/mobile/thread-updater.ts":
/*!************************************************!*\
  !*** ./ts/components/mobile/thread-updater.ts ***!
  \************************************************/
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
const __1 = __webpack_require__(/*! ../.. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../../utils */ "./ts/utils/index.ts");
;
class ThreadUpdater {
    constructor() {
        this.viewModel = null;
        this.interval = 10;
        this.latestPostId = 0;
        this.isUpdating = false;
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
        __1.eventBus.$on(__1.Events.PostsInserted, (posts) => posts.forEach(this.onPostInsert.bind(this)));
        __1.eventBus.$on(__1.Events.PostCreated, () => {
            const isAuto = this.viewModel.isAuto;
            this.viewModel.isAuto = false;
            this.viewModel.counter = this.interval;
            this.updateThread();
            this.viewModel.isAuto = isAuto;
        });
    }
    onReady() {
        const thread = utils_1.DOM.qs('.thread');
        if (!thread) {
            return;
        }
        const threadPage = +thread.getAttribute('data-thread-page');
        if (threadPage !== 0) {
            // Update thread only on the first page (with latest posts).
            return;
        }
        const posts = utils_1.DOM.qsa('.post');
        if (posts.length > 0) {
            __1.eventBus.$emit(__1.Events.PostsInserted, posts);
        }
        this.viewModel = new vue_1.default({
            el: '#thread-updater',
            template: `
<div class="thread-updater thread__updater">
  <button class="thread-updater__update" v-on:click="updateThread">Update</button>

  <label class="thread-updater__auto">
    <input type="checkbox" class="thread-updater__auto-checkbox" v-on:change="counter = module.interval" v-model="isAuto" />
    Auto
    <span class="thread-updater__auto-counter" v-if="isAuto">
      {{ counter }}
    </span>
  </label>

  <span class="thread-updater__updating" v-if="module.isUpdating">Updating...</span>
</div>`,
            data: {
                module: this,
                isAuto: true,
                isUpdating: false,
                counter: this.interval,
                intervalId: NaN,
            },
            methods: {
                onTick() {
                    if (this.isAuto) {
                        if (this.counter > 0) {
                            this.counter--;
                        }
                        else {
                            this.updateThread();
                        }
                    }
                },
                updateThread() {
                    this.counter = this.module.interval;
                    this.module.updateThread();
                },
            },
            mounted() {
                this.intervalId = setInterval(this.onTick, 1000);
            },
            beforeDestroy() {
                if (this.intervalId !== NaN) {
                    clearInterval(this.intervalId);
                }
            },
        });
    }
    onPostInsert(post) {
        const id = +post.getAttribute('data-post-id');
        this.latestPostId = Math.max(this.latestPostId, id);
    }
    updateThread() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isUpdating) {
                return;
            }
            const thread = utils_1.DOM.qs('.thread');
            if (!thread) {
                return;
            }
            this.isUpdating = true;
            const postsWrapper = utils_1.DOM.qs('.thread__posts', thread);
            if (postsWrapper) {
                const threadId = +thread.getAttribute('data-thread-id');
                const latestPostId = this.latestPostId;
                const response = yield fetch(`${window.baseUrl}/ajax/mobile/thread/${threadId}?after=${latestPostId}`, {
                    credentials: 'same-origin',
                });
                if (response.status < 400) {
                    const data = yield response.text();
                    postsWrapper.insertAdjacentHTML('beforeend', data);
                    const newPosts = utils_1.DOM.qsa('.post', postsWrapper)
                        .filter(post => {
                        const id = +post.getAttribute('data-post-id');
                        return id > latestPostId;
                    });
                    // Fade-in new posts.
                    newPosts.forEach(post => post.classList.add('fadable', 'fade'));
                    setTimeout(() => {
                        newPosts.forEach(post => post.classList.remove('fade'));
                    }, 100);
                    __1.eventBus.$emit(__1.Events.PostsInserted, newPosts);
                    // Remove old posts.
                    const posts = utils_1.DOM.qsa('.thread__post', postsWrapper);
                    for (let i = 0; i < posts.length - 50; ++i) {
                        posts[i].remove();
                    }
                }
            }
            this.isUpdating = false;
        });
    }
}
exports.ThreadUpdater = ThreadUpdater;


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

/***/ "./ts/mobile.ts":
/*!**********************!*\
  !*** ./ts/mobile.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __webpack_require__(/*! . */ "./ts/index.ts");
const mobile_1 = __webpack_require__(/*! ./components/mobile */ "./ts/components/mobile/index.ts");
new mobile_1.PostCorrectTime();
new mobile_1.PostForm();
new mobile_1.PostImagePopup();
new mobile_1.PostQuote();
new mobile_1.PostReferenceMap();
new mobile_1.ThreadUpdater();
document.addEventListener('DOMContentLoaded', e => {
    _1.eventBus.$emit(_1.Events.Ready);
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBpLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3Bvc3QtY29ycmVjdC10aW1lLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3Bvc3QtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL21vYmlsZS9wb3N0LWltYWdlLXBvcHVwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3Bvc3QtcXVvdGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9tb2JpbGUvcG9zdC1yZWZlcmVuY2UtbWFwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3RocmVhZC11cGRhdGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V2ZW50LWJ1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbW9iaWxlLnRzIiwid2VicGFjazovLy8uL3RzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9kb20udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvdGltZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsdXhvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVyxHQUFHLGVBQWU7QUFDbkU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbERhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsMEJBQTBCLG1CQUFPLENBQUMsd0VBQXFCO0FBQ3ZEO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsd0RBQWE7QUFDdkM7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyxzRUFBb0I7QUFDckQ7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQywwREFBYztBQUN6QztBQUNBLDJCQUEyQixtQkFBTyxDQUFDLDBFQUFzQjtBQUN6RDtBQUNBLHVCQUF1QixtQkFBTyxDQUFDLGtFQUFrQjtBQUNqRDs7Ozs7Ozs7Ozs7OztBQ2JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsb0JBQU87QUFDL0IsWUFBWSxtQkFBTyxDQUFDLDRCQUFPO0FBQzNCLGdCQUFnQixtQkFBTyxDQUFDLHdDQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQmE7QUFDYjtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxZQUFZLG1CQUFPLENBQUMsNEJBQU87QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxHQUFHO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGVBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsOENBQThDLEtBQUssU0FBUyxLQUFLO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqTGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxZQUFZLG1CQUFPLENBQUMsNEJBQU87QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsYUFBYSxNQUFNLGFBQWEsWUFBWSxXQUFXO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvSWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxZQUFZLG1CQUFPLENBQUMsNEJBQU87QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsR0FBRztBQUNyRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELFlBQVksbUJBQU8sQ0FBQyw0QkFBTztBQUMzQixnQkFBZ0IsbUJBQU8sQ0FBQyx3Q0FBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxJQUFJLEVBQUUsT0FBTztBQUMzRTtBQUNBLDhEQUE4RCxLQUFLO0FBQ25FLGlFQUFpRSxTQUFTO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxJQUFJLEVBQUUsT0FBTztBQUMzRTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVGYTtBQUNiO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsZ0JBQUs7QUFDM0MsWUFBWSxtQkFBTyxDQUFDLDRCQUFPO0FBQzNCLGdCQUFnQixtQkFBTyxDQUFDLHdDQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGVBQWUsc0JBQXNCLFNBQVMsU0FBUyxhQUFhO0FBQ3BIO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1QkFBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5SWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLGdCQUFLO0FBQzNDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsaURBQWlEOzs7Ozs7Ozs7Ozs7O0FDUnJDO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLDBCQUFPO0FBQzNCO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsc0NBQWE7QUFDdkM7QUFDQSxlQUFlLG1CQUFPLENBQUMsZ0NBQVU7QUFDakM7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNyQzs7Ozs7Ozs7Ozs7OztBQ1RhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsV0FBVyxtQkFBTyxDQUFDLHdCQUFHO0FBQ3RCLGlCQUFpQixtQkFBTyxDQUFDLDREQUFxQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1pZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxxQkFBcUI7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQjtBQUM1RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOURhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLDZCQUE2QixHQUFHLGdCQUFnQjtBQUNoRCxnREFBZ0QsR0FBRyxLQUFLO0FBQ3hEO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUssR0FBRyxXQUFXLFFBQVEsV0FBVyxlQUFlO0FBQ2xGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLHNDQUFVO0FBQ2pDO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLGdDQUFPO0FBQzNCO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLGtDQUFRO0FBQzdCOzs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLHVCOzs7Ozs7Ozs7OztBQ0FBLHFCIiwiZmlsZSI6Ii4vbW9iaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90cy9tb2JpbGUudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQXBpIHtcbiAgICBzdGF0aWMgY3JlYXRlUG9zdChyZXF1ZXN0LCBvblByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3dpbmRvdy5iYXNlVXJsfS9hamF4L3Bvc3QvY3JlYXRlYDtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3BhcmVudCcsIHJlcXVlc3QucGFyZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdzdWJqZWN0JywgcmVxdWVzdC5zdWJqZWN0KTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbmFtZScsIHJlcXVlc3QubmFtZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ21lc3NhZ2UnLCByZXF1ZXN0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgcmVxdWVzdC5maWxlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIG9uUHJvZ3Jlc3MuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChgJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5BcGkgPSBBcGk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBwb3N0X2NvcnJlY3RfdGltZV8xID0gcmVxdWlyZShcIi4vcG9zdC1jb3JyZWN0LXRpbWVcIik7XG5leHBvcnRzLlBvc3RDb3JyZWN0VGltZSA9IHBvc3RfY29ycmVjdF90aW1lXzEuUG9zdENvcnJlY3RUaW1lO1xudmFyIHBvc3RfZm9ybV8xID0gcmVxdWlyZShcIi4vcG9zdC1mb3JtXCIpO1xuZXhwb3J0cy5Qb3N0Rm9ybSA9IHBvc3RfZm9ybV8xLlBvc3RGb3JtO1xudmFyIHBvc3RfaW1hZ2VfcG9wdXBfMSA9IHJlcXVpcmUoXCIuL3Bvc3QtaW1hZ2UtcG9wdXBcIik7XG5leHBvcnRzLlBvc3RJbWFnZVBvcHVwID0gcG9zdF9pbWFnZV9wb3B1cF8xLlBvc3RJbWFnZVBvcHVwO1xudmFyIHBvc3RfcXVvdGVfMSA9IHJlcXVpcmUoXCIuL3Bvc3QtcXVvdGVcIik7XG5leHBvcnRzLlBvc3RRdW90ZSA9IHBvc3RfcXVvdGVfMS5Qb3N0UXVvdGU7XG52YXIgcG9zdF9yZWZlcmVuY2VfbWFwXzEgPSByZXF1aXJlKFwiLi9wb3N0LXJlZmVyZW5jZS1tYXBcIik7XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBwb3N0X3JlZmVyZW5jZV9tYXBfMS5Qb3N0UmVmZXJlbmNlTWFwO1xudmFyIHRocmVhZF91cGRhdGVyXzEgPSByZXF1aXJlKFwiLi90aHJlYWQtdXBkYXRlclwiKTtcbmV4cG9ydHMuVGhyZWFkVXBkYXRlciA9IHRocmVhZF91cGRhdGVyXzEuVGhyZWFkVXBkYXRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbHV4b25fMSA9IHJlcXVpcmUoXCJsdXhvblwiKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLi8uLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0Q29ycmVjdFRpbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgKHBvc3RzKSA9PiBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0LmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgdGltZUVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0X19kYXRlJywgcG9zdCk7XG4gICAgICAgIGlmICh0aW1lRWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVJc28gPSB0aW1lRWwuZ2V0QXR0cmlidXRlKCdkYXRldGltZScpO1xuICAgICAgICAgICAgY29uc3QgdGltZSA9IGx1eG9uXzEuRGF0ZVRpbWUuZnJvbUlTTyh0aW1lSXNvKTtcbiAgICAgICAgICAgIHRpbWVFbC50ZXh0Q29udGVudCA9IHRpbWUudG9Mb2NhbGVTdHJpbmcobHV4b25fMS5EYXRlVGltZS5EQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUG9zdENvcnJlY3RUaW1lID0gUG9zdENvcnJlY3RUaW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLi8uLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0Rm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuSW5zZXJ0TWFya3VwLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGZvcm0nKTtcbiAgICAgICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignI3Bvc3Rmb3JtIGlzIG5vdCBmb3VuZC4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdXRpbHNfMS5ET00ucXMoJyNtZXNzYWdlJywgZm9ybSk7XG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJyNtZXNzYWdlIGlzIG5vdCBmb3VuZC4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnVuc2hpZnQobWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLmluc2VydE1hcmt1cC5hcHBseSh0aGlzLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3Rmb3JtJyk7XG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCcjcG9zdGZvcm0gaXMgbm90IGZvdW5kLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1YmplY3QgPSB1dGlsc18xLkRPTS5xcygnI3N1YmplY3QnLCBmb3JtKTtcbiAgICAgICAgaWYgKHN1YmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc3Rmb3JtLnN1YmplY3QnKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHN1YmplY3QudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1YmplY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc3Rmb3JtLnN1YmplY3QnLCBzdWJqZWN0LnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWUgPSB1dGlsc18xLkRPTS5xcygnI25hbWUnLCBmb3JtKTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc3Rmb3JtLm5hbWUnKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG5hbWUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc3Rmb3JtLm5hbWUnLCBuYW1lLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtYWlsID0gdXRpbHNfMS5ET00ucXMoJyNlbWFpbCcsIGZvcm0pO1xuICAgICAgICBpZiAoZW1haWwpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc3Rmb3JtLmVtYWlsJyk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBlbWFpbC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW1haWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc3Rmb3JtLmVtYWlsJywgZW1haWwudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHV0aWxzXzEuRE9NLnFzKCcjbWVzc2FnZScsIGZvcm0pO1xuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgY29uc3QgbWFya3VwX2J1dHRvbnMgPSB7XG4gICAgICAgICAgICAgICAgJ3Bvc3Rmb3JtLW1hcmt1cC1ib2xkJzogZSA9PiB0aGlzLmluc2VydEJCQ29kZShtZXNzYWdlLCAnYicpLFxuICAgICAgICAgICAgICAgICdwb3N0Zm9ybS1tYXJrdXAtaXRhbGljJzogZSA9PiB0aGlzLmluc2VydEJCQ29kZShtZXNzYWdlLCAnaScpLFxuICAgICAgICAgICAgICAgICdwb3N0Zm9ybS1tYXJrdXAtdW5kZXJsaW5lJzogZSA9PiB0aGlzLmluc2VydEJCQ29kZShtZXNzYWdlLCAndScpLFxuICAgICAgICAgICAgICAgICdwb3N0Zm9ybS1tYXJrdXAtc3RyaWtlJzogZSA9PiB0aGlzLmluc2VydEJCQ29kZShtZXNzYWdlLCAncycpLFxuICAgICAgICAgICAgICAgICdwb3N0Zm9ybS1tYXJrdXAtc3VwJzogZSA9PiB0aGlzLmluc2VydEJCQ29kZShtZXNzYWdlLCAnc3VwJyksXG4gICAgICAgICAgICAgICAgJ3Bvc3Rmb3JtLW1hcmt1cC1zdWInOiBlID0+IHRoaXMuaW5zZXJ0QkJDb2RlKG1lc3NhZ2UsICdzdWInKSxcbiAgICAgICAgICAgICAgICAncG9zdGZvcm0tbWFya3VwLXNwb2lsZXInOiBlID0+IHRoaXMuaW5zZXJ0QkJDb2RlKG1lc3NhZ2UsICdzcG9pbGVyJyksXG4gICAgICAgICAgICAgICAgJ3Bvc3Rmb3JtLW1hcmt1cC1ycCc6IGUgPT4gdGhpcy5pbnNlcnRCQkNvZGUobWVzc2FnZSwgJ3JwJyksXG4gICAgICAgICAgICAgICAgJ3Bvc3Rmb3JtLW1hcmt1cC1jb2RlJzogZSA9PiB0aGlzLmluc2VydEJCQ29kZShtZXNzYWdlLCAnY29kZScpLFxuICAgICAgICAgICAgICAgICdwb3N0Zm9ybS1tYXJrdXAtcXVvdGUnOiBlID0+IHRoaXMuaW5zZXJ0TWFya3VwKG1lc3NhZ2UsICc+JywgJycsIHRydWUpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG1hcmt1cF9idXR0b25zX2lkcyA9IE9iamVjdC5rZXlzKG1hcmt1cF9idXR0b25zKTtcbiAgICAgICAgICAgIG1hcmt1cF9idXR0b25zX2lkcy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSB1dGlsc18xLkRPTS5xcyhgIyR7aWR9YCwgZm9ybSk7XG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYXJrdXBfYnV0dG9uc1tpZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGVfaW5wdXRzID0gdXRpbHNfMS5ET00ucXNhKCcjZmlsZScsIGZvcm0pO1xuICAgICAgICBmaWxlX2lucHV0cy5mb3JFYWNoKGZpbGVfaW5wdXQgPT4ge1xuICAgICAgICAgICAgZmlsZV9pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZV9pbnB1dC5maWxlcyAmJiBmaWxlX2lucHV0LmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZV93cmFwcGVyID0gZmlsZV9pbnB1dC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVfcHJldmlldyA9IHV0aWxzXzEuRE9NLnFzKCcuZm9ybV9fZmlsZS1wcmV2aWV3JywgZmlsZV93cmFwcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmlsZV9wcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZV9wcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZV9wcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2Zvcm1fX2ZpbGUtcHJldmlldycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfd3JhcHBlci5hcHBlbmRDaGlsZChmaWxlX3ByZXZpZXcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZV9wcmV2aWV3LnNyYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVfaW5wdXQuZmlsZXNbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke3dpbmRvdy5iYXNlVXJsfS9hamF4L21vYmlsZS9wb3N0L2NyZWF0ZWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgaXNPbkJvYXJkUGFnZSA9IHV0aWxzXzEuRE9NLnFzYSgnLnRocmVhZCcpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgIGlmIChpc09uQm9hcmRQYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuaGFzKCdMb2NhdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0xvY2F0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgIC8vIENsZWFyIGZvcm0gbWVzc2FnZSBhbmQgZmlsZS5cbiAgICAgICAgICAgICAgICBtZXNzYWdlLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgZmlsZV9pbnB1dHMuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgICAgIGVsLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGVsLnR5cGUgPSAnZmlsZSc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgZm9ybSBmaWxlIHByZXZpZXcuXG4gICAgICAgICAgICAgICAgdXRpbHNfMS5ET00ucXNhKCcuZm9ybV9fZmlsZS1wcmV2aWV3JywgZm9ybSkuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyLm5hbWUnLCBkYXRhLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXIubmFtZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50cmlwY29kZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlci50cmlwY29kZScsIGRhdGEudHJpcGNvZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXIudHJpcGNvZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX18xLmV2ZW50QnVzLiRlbWl0KF9fMS5FdmVudHMuUG9zdENyZWF0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogc2hvdyBlcnJvciBpbiB0aGUgZm9ybS5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBpbnNlcnRCQkNvZGUobWVzc2FnZSwgY29kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRNYXJrdXAobWVzc2FnZSwgYFske2NvZGV9XWAsIGBbLyR7Y29kZX1dYCk7XG4gICAgfVxuICAgIGluc2VydE1hcmt1cChtZXNzYWdlLCBiZWZvcmUsIGFmdGVyLCBpbnNlcnROZXdMaW5lID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc3RyID0gbWVzc2FnZS52YWx1ZTtcbiAgICAgICAgY29uc3QgYmVnaW4gPSBtZXNzYWdlLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICBjb25zdCBlbmQgPSBtZXNzYWdlLnNlbGVjdGlvbkVuZDtcbiAgICAgICAgY29uc3Qgc3RyU3RhcnQgPSBzdHIuc3Vic3RyaW5nKDAsIGJlZ2luKTtcbiAgICAgICAgY29uc3Qgc3RyU2VsZWN0aW9uID0gc3RyLnN1YnN0cmluZyhiZWdpbiwgZW5kKTtcbiAgICAgICAgY29uc3Qgc3RyRW5kID0gc3RyLnN1YnN0cmluZyhlbmQpO1xuICAgICAgICBpZiAoaW5zZXJ0TmV3TGluZSAmJiBzdHJTdGFydC5sZW5ndGggJiYgIXN0clN0YXJ0LmVuZHNXaXRoKCdcXG4nKSkge1xuICAgICAgICAgICAgYmVmb3JlID0gYFxcbiR7YmVmb3JlfWA7XG4gICAgICAgIH1cbiAgICAgICAgbWVzc2FnZS52YWx1ZSA9IFtcbiAgICAgICAgICAgIHN0clN0YXJ0LFxuICAgICAgICAgICAgYmVmb3JlLFxuICAgICAgICAgICAgc3RyU2VsZWN0aW9uLFxuICAgICAgICAgICAgYWZ0ZXIsXG4gICAgICAgICAgICBzdHJFbmQsXG4gICAgICAgIF0uam9pbignJyk7XG4gICAgICAgIG1lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgbWVzc2FnZS5zZWxlY3Rpb25TdGFydCA9IGJlZ2luICsgYmVmb3JlLmxlbmd0aDtcbiAgICAgICAgbWVzc2FnZS5zZWxlY3Rpb25FbmQgPSBiZWdpbiArIGJlZm9yZS5sZW5ndGggKyAoZW5kIC0gYmVnaW4pO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9zdEZvcm0gPSBQb3N0Rm9ybTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uLy4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RJbWFnZVBvcHVwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IDEuMDtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXRYID0gMDtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXRZID0gMDtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRNb3VzZVggPSAwO1xuICAgICAgICB0aGlzLmRyYWdTdGFydE1vdXNlWSA9IDA7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCB0aHVtYm5haWxMaW5rID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0X190aHVtYm5haWwtbGluaycsIHBvc3QpO1xuICAgICAgICBpZiAodGh1bWJuYWlsTGluaykge1xuICAgICAgICAgICAgdGh1bWJuYWlsTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbCh0aHVtYm5haWxMaW5rKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvcGVuTW9kYWwodGh1bWJuYWlsTGluaykge1xuICAgICAgICBsZXQgZmlsZTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRodW1ibmFpbExpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbGUtdHlwZScpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRodW1ibmFpbExpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbGUtd2lkdGgnKTtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHRodW1ibmFpbExpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLWZpbGUtaGVpZ2h0Jyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsX192aWRlbycpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJyk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncHJlbG9hZCcsICdtZXRhZGF0YScpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7XG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IHRodW1ibmFpbExpbmsuaHJlZjtcbiAgICAgICAgICAgIGZpbGUgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fYXVkaW8nKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250cm9scycsICdjb250cm9scycpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ByZWxvYWQnLCAnbWV0YWRhdGEnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gdGh1bWJuYWlsTGluay5ocmVmO1xuICAgICAgICAgICAgZmlsZSA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsX19pbWFnZScpO1xuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSB0aHVtYm5haWxMaW5rLmhyZWY7XG4gICAgICAgICAgICBmaWxlID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgZHJhZyBiZWhhdmlvdXIgb24gdGhlIGltYWdlLlxuICAgICAgICBmaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gUHJldmVudCBpbWFnZSBjbGljayBldmVudCBidWJibGluZyB0byB0aGUgbW9kYWwuXG4gICAgICAgIGZpbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBNb3ZlIGltYWdlIG9uIG1vdXNlIGRyYWcuXG4gICAgICAgIGZpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBTYXZlIGluaXRpYWwgaW1hZ2UgcG9zaXRpb24uXG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldFggPSB0aGlzLm9mZnNldFg7XG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldFkgPSB0aGlzLm9mZnNldFk7XG4gICAgICAgICAgICAvLyBTYXZlIGluaXRpYWwgbW91c2UgcG9zaXRpb24uXG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydE1vdXNlWCA9IGUucGFnZVg7XG4gICAgICAgICAgICB0aGlzLmRyYWdTdGFydE1vdXNlWSA9IGUucGFnZVk7XG4gICAgICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIC8vIEdldCBtb3VzZSBvZmZzZXQgZGVsdGEuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGFYID0gZS5wYWdlWCAtIHRoaXMuZHJhZ1N0YXJ0TW91c2VYO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IGUucGFnZVkgLSB0aGlzLmRyYWdTdGFydE1vdXNlWTtcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGltYWdlLlxuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0WCA9IHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0WCArIGRlbHRhWDtcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldFkgPSB0aGlzLmRyYWdTdGFydE9mZnNldFkgKyBkZWx0YVk7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1Nb2RhbChtb2RhbCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG9uTW91c2VVcCA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkcmFnIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICBmaWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgICAgICAgICAgIC8vIElmIGltYWdlIGlzIG5vdCBkcmFnZ2VkLCBjbG9zZSB0aGUgbW9kYWwuXG4gICAgICAgICAgICAgICAgY29uc3QgZXBzID0gMTBlLTM7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMub2Zmc2V0WCAtIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0WCkgPCBlcHNcbiAgICAgICAgICAgICAgICAgICAgfHwgTWF0aC5hYnModGhpcy5vZmZzZXRZIC0gdGhpcy5kcmFnU3RhcnRPZmZzZXRZKSA8IGVwcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gU2V0dXAgZHJhZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIGZpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdsYXlvdXRfX21vZGFsJywgJ21vZGFsJyk7XG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGZpbGUpO1xuICAgICAgICAvLyBDbG9zZSBtb2RhbCBvbiBtb3VzZSBjbGljay5cbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBTY2FsZSBtb2RhbCBvbiBtb3VzZSB3aGVlbC5cbiAgICAgICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gMC4xO1xuICAgICAgICAgICAgdGhpcy5zY2FsZSA9ICgxLjAgLSBNYXRoLnNpZ24oZS5kZWx0YVkpICogZGVsdGEpICogdGhpcy5zY2FsZTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gdGh1bWJuYWlsTGluay5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aHVtYm5haWwuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgICAgICAvLyBGYWRlLWluIHRoZSBtb2RhbC5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZmFkYWJsZScsICdmYWRlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH1cbiAgICB0cmFuc2Zvcm1Nb2RhbChtb2RhbCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IHV0aWxzXzEuRE9NLnFzKCcubW9kYWxfX2ltYWdlJywgbW9kYWwpO1xuICAgICAgICBpbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7dGhpcy5vZmZzZXRYfXB4LCAke3RoaXMub2Zmc2V0WX1weCkgc2NhbGUoJHt0aGlzLnNjYWxlfSlgO1xuICAgIH1cbiAgICBjbG9zZU1vZGFsKG1vZGFsKSB7XG4gICAgICAgIHRoaXMuc2NhbGUgPSAxLjA7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IDA7XG4gICAgICAgIC8vIEZhZGUtb3V0IHRoZSBtb2RhbC5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICB9LCAzMzMpO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9zdEltYWdlUG9wdXAgPSBQb3N0SW1hZ2VQb3B1cDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uLy4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RRdW90ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCBxdW90ZUxpbmsgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX2lkLWxpbmsnLCBwb3N0KTtcbiAgICAgICAgaWYgKHF1b3RlTGluaykge1xuICAgICAgICAgICAgcXVvdGVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gcXVvdGVMaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0LWlkJyk7XG4gICAgICAgICAgICAgICAgX18xLmV2ZW50QnVzLiRlbWl0KF9fMS5FdmVudHMuSW5zZXJ0TWFya3VwLCBbYD4+JHtpZH1cXG5gLCAnJywgdHJ1ZV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0UXVvdGUgPSBQb3N0UXVvdGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLi8uLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0UmVmZXJlbmNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51c2VyID0ge307XG4gICAgICAgIHRoaXMucG9zdHMgPSB7fTtcbiAgICAgICAgdGhpcy51c2VyLm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlci5uYW1lJyk7XG4gICAgICAgIHRoaXMudXNlci50cmlwY29kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLnRyaXBjb2RlJyk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSArcG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICAvLyBTdG9yZSBwb3N0LlxuICAgICAgICB0aGlzLnBvc3RzW3Bvc3RJZF0gPSBwb3N0O1xuICAgICAgICAvLyBHZXQgcmVmZXJlbmNlcy5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlRWxlbWVudHMgPSB1dGlsc18xLkRPTS5xc2EoJ2FbZGF0YS10YXJnZXQtcG9zdC1pZF0nLCBwb3N0KTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZUVsZW1lbnRzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBpZDogK2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldC1wb3N0LWlkJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gR2V0IHJlZmVyZW5jZWQgcG9zdHMuXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZWRQb3N0cyA9IHJlZmVyZW5jZXNcbiAgICAgICAgICAgIC5maWx0ZXIoKHJlZmVyZW5jZSwgaW5kZXgpID0+IHJlZmVyZW5jZXMuaW5kZXhPZihyZWZlcmVuY2UpID09PSBpbmRleClcbiAgICAgICAgICAgIC5tYXAocmVmZXJlbmNlID0+IHRoaXMucG9zdHNbcmVmZXJlbmNlLmlkXSlcbiAgICAgICAgICAgIC5maWx0ZXIocG9zdCA9PiBwb3N0KTtcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBhdXRob3IgbmFtZSBvZiB0aGUgcmVmZXJlbmNlZCBwb3N0IHRvIHRoZSByZWZlcmVuY2UgbGluayB0ZXh0LlxuICAgICAgICByZWZlcmVuY2VzLmZvckVhY2gocmVmZXJlbmNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0aGlzLnBvc3RzW3JlZmVyZW5jZS5pZF07XG4gICAgICAgICAgICBpZiAoIXBvc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWZlcmVuY2UuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLmdldFBvc3RSZWZMaW5rSHRtbChwb3N0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIHVzZXIgb3duIHBvc3QuXG4gICAgICAgIGNvbnN0IGF1dGhvciA9IHRoaXMuZ2V0UG9zdEF1dGhvcihwb3N0KTtcbiAgICAgICAgaWYgKHRoaXMudXNlci50cmlwY29kZSAmJiB0aGlzLnVzZXIudHJpcGNvZGUubGVuZ3RoICYmIHRoaXMudXNlci50cmlwY29kZSA9PT0gYXV0aG9yLnRyaXBjb2RlXG4gICAgICAgICAgICB8fCB0aGlzLnVzZXIubmFtZSAmJiB0aGlzLnVzZXIubmFtZS5sZW5ndGggJiYgdGhpcy51c2VyLm5hbWUgPT09IGF1dGhvci5uYW1lKSB7XG4gICAgICAgICAgICBwb3N0LmNsYXNzTGlzdC5hZGQoJ3Bvc3Rfb3duJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwZW5kIHRvIHBvc3RzIGEgcmVmZXJlbmNlIHRvIHRoaXMgcG9zdC5cbiAgICAgICAgcmVmZXJlbmNlZFBvc3RzLmZvckVhY2gocmVmZXJlbmNlZFBvc3QgPT4ge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHBvc3QgZm9vdGVyIGlmIGl0IGlzIG5vdCBleGlzdHMuXG4gICAgICAgICAgICBsZXQgZm9vdGVyID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0X19mb290ZXInLCByZWZlcmVuY2VkUG9zdCk7XG4gICAgICAgICAgICBpZiAoIWZvb3Rlcikge1xuICAgICAgICAgICAgICAgIGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdwb3N0X19mb290ZXInKTtcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VkUG9zdC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXBwZW5kIHJlZmVyZW5jZSB0byB0aGUgZm9vdGVyLlxuICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgncG9zdF9fcmVmZXJlbmNlLWxpbmsnKTtcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGAjcG9zdF8ke3Bvc3RJZH1gO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgcmVwbHkgdG8gdXNlciBvd24gcG9zdC5cbiAgICAgICAgICAgIGNvbnN0IHJlZlBvc3RBdXRob3IgPSB0aGlzLmdldFBvc3RBdXRob3IocmVmZXJlbmNlZFBvc3QpO1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlci50cmlwY29kZSAmJiB0aGlzLnVzZXIudHJpcGNvZGUubGVuZ3RoICYmIHRoaXMudXNlci50cmlwY29kZSA9PT0gcmVmUG9zdEF1dGhvci50cmlwY29kZVxuICAgICAgICAgICAgICAgIHx8IHRoaXMudXNlci5uYW1lICYmIHRoaXMudXNlci5uYW1lLmxlbmd0aCAmJiB0aGlzLnVzZXIubmFtZSA9PT0gcmVmUG9zdEF1dGhvci5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcG9zdC5jbGFzc0xpc3QuYWRkKCdwb3N0X293bi1yZXBseScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGluay5pbm5lckhUTUwgPSB0aGlzLmdldFBvc3RSZWZMaW5rSHRtbChwb3N0KTtcbiAgICAgICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFBvc3RBdXRob3IocG9zdCkge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX25hbWUnLCBwb3N0KTtcbiAgICAgICAgY29uc3QgdHJpcGNvZGVFbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdF9fdHJpcGNvZGUnLCBwb3N0KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWVFbCA/IG5hbWVFbC50ZXh0Q29udGVudCA6ICcnLFxuICAgICAgICAgICAgdHJpcGNvZGU6IHRyaXBjb2RlRWwgPyB0cmlwY29kZUVsLnRleHRDb250ZW50IDogJycsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFBvc3RSZWZMaW5rSHRtbChwb3N0KSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9ICtwb3N0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0LWlkJyk7XG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdF9fbmFtZScsIHBvc3QpO1xuICAgICAgICBjb25zdCB0cmlwY29kZUVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0X190cmlwY29kZScsIHBvc3QpO1xuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVsID8gbmFtZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBjb25zdCB0cmlwY29kZSA9IHRyaXBjb2RlRWwgPyB0cmlwY29kZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBpZiAobmFtZS5sZW5ndGggfHwgdHJpcGNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwicG9zdF9fcmVmZXJlbmNlLWxpbmstaWRcIj4mZ3Q7Jmd0OyR7cG9zdElkfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgKyBgIDxzcGFuIGNsYXNzPVwicG9zdF9fcmVmZXJlbmNlLWxpbmstYXV0aG9yXCI+YFxuICAgICAgICAgICAgICAgICsgYCg8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLW5hbWVcIj4ke25hbWV9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICArIGA8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLXRyaXBjb2RlXCI+JHt0cmlwY29kZX08L3NwYW4+KWBcbiAgICAgICAgICAgICAgICArIGA8L3NwYW4+YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJwb3N0X19yZWZlcmVuY2UtbGluay1pZFwiPiZndDsmZ3Q7JHtwb3N0SWR9PC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBQb3N0UmVmZXJlbmNlTWFwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uLy4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbjtcbmNsYXNzIFRocmVhZFVwZGF0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG51bGw7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSAxMDtcbiAgICAgICAgdGhpcy5sYXRlc3RQb3N0SWQgPSAwO1xuICAgICAgICB0aGlzLmlzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdENyZWF0ZWQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQXV0byA9IHRoaXMudmlld01vZGVsLmlzQXV0bztcbiAgICAgICAgICAgIHRoaXMudmlld01vZGVsLmlzQXV0byA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuY291bnRlciA9IHRoaXMuaW50ZXJ2YWw7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRocmVhZCgpO1xuICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuaXNBdXRvID0gaXNBdXRvO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgdGhyZWFkID0gdXRpbHNfMS5ET00ucXMoJy50aHJlYWQnKTtcbiAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aHJlYWRQYWdlID0gK3RocmVhZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhyZWFkLXBhZ2UnKTtcbiAgICAgICAgaWYgKHRocmVhZFBhZ2UgIT09IDApIHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aHJlYWQgb25seSBvbiB0aGUgZmlyc3QgcGFnZSAod2l0aCBsYXRlc3QgcG9zdHMpLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvc3RzID0gdXRpbHNfMS5ET00ucXNhKCcucG9zdCcpO1xuICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX18xLmV2ZW50QnVzLiRlbWl0KF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgcG9zdHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3IHZ1ZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgZWw6ICcjdGhyZWFkLXVwZGF0ZXInLFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJ0aHJlYWQtdXBkYXRlciB0aHJlYWRfX3VwZGF0ZXJcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cInRocmVhZC11cGRhdGVyX191cGRhdGVcIiB2LW9uOmNsaWNrPVwidXBkYXRlVGhyZWFkXCI+VXBkYXRlPC9idXR0b24+XG5cbiAgPGxhYmVsIGNsYXNzPVwidGhyZWFkLXVwZGF0ZXJfX2F1dG9cIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0aHJlYWQtdXBkYXRlcl9fYXV0by1jaGVja2JveFwiIHYtb246Y2hhbmdlPVwiY291bnRlciA9IG1vZHVsZS5pbnRlcnZhbFwiIHYtbW9kZWw9XCJpc0F1dG9cIiAvPlxuICAgIEF1dG9cbiAgICA8c3BhbiBjbGFzcz1cInRocmVhZC11cGRhdGVyX19hdXRvLWNvdW50ZXJcIiB2LWlmPVwiaXNBdXRvXCI+XG4gICAgICB7eyBjb3VudGVyIH19XG4gICAgPC9zcGFuPlxuICA8L2xhYmVsPlxuXG4gIDxzcGFuIGNsYXNzPVwidGhyZWFkLXVwZGF0ZXJfX3VwZGF0aW5nXCIgdi1pZj1cIm1vZHVsZS5pc1VwZGF0aW5nXCI+VXBkYXRpbmcuLi48L3NwYW4+XG48L2Rpdj5gLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBpc0F1dG86IHRydWUsXG4gICAgICAgICAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY291bnRlcjogdGhpcy5pbnRlcnZhbCxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbElkOiBOYU4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIG9uVGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdXRvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3VudGVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlci0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaHJlYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlVGhyZWFkKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLm1vZHVsZS5pbnRlcnZhbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2R1bGUudXBkYXRlVGhyZWFkKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHRoaXMub25UaWNrLCAxMDAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVydmFsSWQgIT09IE5hTikge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydChwb3N0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gK3Bvc3QuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgdGhpcy5sYXRlc3RQb3N0SWQgPSBNYXRoLm1heCh0aGlzLmxhdGVzdFBvc3RJZCwgaWQpO1xuICAgIH1cbiAgICB1cGRhdGVUaHJlYWQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1VwZGF0aW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGhyZWFkID0gdXRpbHNfMS5ET00ucXMoJy50aHJlYWQnKTtcbiAgICAgICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzV3JhcHBlciA9IHV0aWxzXzEuRE9NLnFzKCcudGhyZWFkX19wb3N0cycsIHRocmVhZCk7XG4gICAgICAgICAgICBpZiAocG9zdHNXcmFwcGVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGhyZWFkSWQgPSArdGhyZWFkLmdldEF0dHJpYnV0ZSgnZGF0YS10aHJlYWQtaWQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXRlc3RQb3N0SWQgPSB0aGlzLmxhdGVzdFBvc3RJZDtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke3dpbmRvdy5iYXNlVXJsfS9hamF4L21vYmlsZS90aHJlYWQvJHt0aHJlYWRJZH0/YWZ0ZXI9JHtsYXRlc3RQb3N0SWR9YCwge1xuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RzV3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3N0cyA9IHV0aWxzXzEuRE9NLnFzYSgnLnBvc3QnLCBwb3N0c1dyYXBwZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHBvc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSArcG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkID4gbGF0ZXN0UG9zdElkO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRmFkZS1pbiBuZXcgcG9zdHMuXG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvc3RzLmZvckVhY2gocG9zdCA9PiBwb3N0LmNsYXNzTGlzdC5hZGQoJ2ZhZGFibGUnLCAnZmFkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3N0cy5mb3JFYWNoKHBvc3QgPT4gcG9zdC5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJykpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCBuZXdQb3N0cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBvbGQgcG9zdHMuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gdXRpbHNfMS5ET00ucXNhKCcudGhyZWFkX19wb3N0JywgcG9zdHNXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3N0cy5sZW5ndGggLSA1MDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0c1tpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlRocmVhZFVwZGF0ZXIgPSBUaHJlYWRVcGRhdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGV2ZW50QnVzID0gbmV3IHZ1ZV8xLmRlZmF1bHQoKTtcbmV4cG9ydHMuZXZlbnRCdXMgPSBldmVudEJ1cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEV2ZW50cztcbihmdW5jdGlvbiAoRXZlbnRzKSB7XG4gICAgRXZlbnRzW1wiUmVhZHlcIl0gPSBcInJlYWR5XCI7XG4gICAgRXZlbnRzW1wiUG9zdHNJbnNlcnRlZFwiXSA9IFwicG9zdHNfaW5zZXJ0ZWRcIjtcbiAgICBFdmVudHNbXCJQb3N0Q3JlYXRlZFwiXSA9IFwicG9zdF9jcmVhdGVkXCI7XG4gICAgRXZlbnRzW1wiSW5zZXJ0TWFya3VwXCJdID0gXCJpbnNlcnRfbWFya3VwXCI7XG59KShFdmVudHMgPSBleHBvcnRzLkV2ZW50cyB8fCAoZXhwb3J0cy5FdmVudHMgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYXBpXzEgPSByZXF1aXJlKFwiLi9hcGlcIik7XG5leHBvcnRzLkFwaSA9IGFwaV8xLkFwaTtcbnZhciBldmVudF9idXNfMSA9IHJlcXVpcmUoXCIuL2V2ZW50LWJ1c1wiKTtcbmV4cG9ydHMuZXZlbnRCdXMgPSBldmVudF9idXNfMS5ldmVudEJ1cztcbnZhciBldmVudHNfMSA9IHJlcXVpcmUoXCIuL2V2ZW50c1wiKTtcbmV4cG9ydHMuRXZlbnRzID0gZXZlbnRzXzEuRXZlbnRzO1xudmFyIHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcbmV4cG9ydHMuU2V0dGluZ3NNYW5hZ2VyID0gc2V0dGluZ3NfMS5TZXR0aW5nc01hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF8xID0gcmVxdWlyZShcIi5cIik7XG5jb25zdCBtb2JpbGVfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbW9iaWxlXCIpO1xubmV3IG1vYmlsZV8xLlBvc3RDb3JyZWN0VGltZSgpO1xubmV3IG1vYmlsZV8xLlBvc3RGb3JtKCk7XG5uZXcgbW9iaWxlXzEuUG9zdEltYWdlUG9wdXAoKTtcbm5ldyBtb2JpbGVfMS5Qb3N0UXVvdGUoKTtcbm5ldyBtb2JpbGVfMS5Qb3N0UmVmZXJlbmNlTWFwKCk7XG5uZXcgbW9iaWxlXzEuVGhyZWFkVXBkYXRlcigpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGUgPT4ge1xuICAgIF8xLmV2ZW50QnVzLiRlbWl0KF8xLkV2ZW50cy5SZWFkeSk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc2V0dGluZ3NLZXkgPSAnc2V0dGluZ3MnO1xuY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICBsYXlvdXQ6ICdsZWZ0JyxcbiAgICAgICAgc2hvd1Bvc3RIZWFkZXJSZWZsaW5rSWNvbjogdHJ1ZSxcbiAgICAgICAgc2hvd1Bvc3RSZWZsaW5rSWNvbjogZmFsc2UsXG4gICAgICAgIHNjcm9sbFRvTmV3UG9zdHM6IHRydWUsXG4gICAgICAgIHNtb290aFNjcm9sbDogdHJ1ZSxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICBwcmV2aWV3QWxpZ246ICdyaWdodCcsXG4gICAgICAgIHNjcm9sbEJvdHRvbTogdHJ1ZSxcbiAgICAgICAgc2hvd01hcmt1cDogdHJ1ZSxcbiAgICAgICAgc2hvd01hcmt1cE1vYmlsZTogZmFsc2UsXG4gICAgICAgIGluc2VydFRhZ3NJblBhaXJzOiB0cnVlLFxuICAgICAgICBmbG9hdDogZmFsc2UsXG4gICAgICAgIGZsb2F0UG9zaXRpb246IHsgeDogMTAwLCB5OiAxMDAgfSxcbiAgICB9LFxuICAgIHRpbWU6IHtcbiAgICAgICAgbG9jYWxlOiAnZGVmYXVsdCcsXG4gICAgICAgIGxvY2FsZUN1c3RvbTogJycsXG4gICAgICAgIHpvbmU6ICdkZWZhdWx0JyxcbiAgICAgICAgem9uZUZpeGVkOiAwLFxuICAgICAgICBmb3JtYXQ6ICdkZWZhdWx0JyxcbiAgICAgICAgZm9ybWF0Q3VzdG9tOiAnJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cbmZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0KTtcbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuY2xhc3MgU2V0dGluZ3NNYW5hZ2VyIHtcbiAgICBzdGF0aWMgbG9hZCgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNldHRpbmdzS2V5KSk7XG4gICAgICAgIHJldHVybiBtZXJnZShkZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgICB9XG4gICAgc3RhdGljIHNhdmUoc2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2V0dGluZ3NLZXksIGRhdGEpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2V0dGluZ3NNYW5hZ2VyID0gU2V0dGluZ3NNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBDb29raWUge1xuICAgIHN0YXRpYyBnZXQobmFtZSwgX2RlZmF1bHQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZV9zdHIgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xuICAgICAgICBjb25zdCBjb29raWVfcGFydHMgPSBjb29raWVfc3RyLnNwbGl0KGA7ICR7bmFtZX09YCk7XG4gICAgICAgIGlmIChjb29raWVfcGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZV9lbmMgPSBjb29raWVfcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZV9lbmMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfZGVmYXVsdDtcbiAgICB9XG4gICAgc3RhdGljIHNldChuYW1lLCB2YWx1ZSwgZXhwaXJhdGlvbikge1xuICAgICAgICBjb25zdCB2YWx1ZV9lbmMgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICBjb25zdCBleHBpcmF0aW9uX3N0ciA9IGV4cGlyYXRpb24udG9VVENTdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZV9lbmN9OyBwYXRoPS87IGV4cGlyZXM9JHtleHBpcmF0aW9uX3N0cn1gO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29va2llID0gQ29va2llO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBET00ge1xuICAgIHN0YXRpYyBxaWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB9XG4gICAgc3RhdGljIHFzKHNlbGVjdG9yLCBjb250ZXh0ID0gbnVsbCkge1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG4gICAgc3RhdGljIHFzYShzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudExpc3QgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudExpc3QpO1xuICAgIH1cbn1cbmV4cG9ydHMuRE9NID0gRE9NO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29va2llXzEgPSByZXF1aXJlKFwiLi9jb29raWVcIik7XG5leHBvcnRzLkNvb2tpZSA9IGNvb2tpZV8xLkNvb2tpZTtcbnZhciBkb21fMSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcbmV4cG9ydHMuRE9NID0gZG9tXzEuRE9NO1xudmFyIHRpbWVfMSA9IHJlcXVpcmUoXCIuL3RpbWVcIik7XG5leHBvcnRzLlRpbWUgPSB0aW1lXzEuVGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgVGltZSB7XG4gICAgc3RhdGljIGZvcm1hdCh0aW1lLCBzZXR0aW5ncykge1xuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS5sb2NhbGUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5zZXRMb2NhbGUoc2V0dGluZ3MudGltZS5sb2NhbGVDdXN0b20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy50aW1lLnpvbmUgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHNldHRpbmdzLnRpbWUuem9uZUZpeGVkO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0U3RyID0gJ1VUQycgKyAob2Zmc2V0ID49IDAgPyAnKycgOiAnJykgKyBvZmZzZXQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRpbWUgPSB0aW1lLnNldFpvbmUob2Zmc2V0U3RyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS5mb3JtYXQgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdChzZXR0aW5ncy50aW1lLmZvcm1hdEN1c3RvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdCgnZC5MTC55eXl5IEhIOm1tOnNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRpbWUgPSBUaW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBsdXhvbjsiLCJtb2R1bGUuZXhwb3J0cyA9IFZ1ZTsiXSwic291cmNlUm9vdCI6IiJ9