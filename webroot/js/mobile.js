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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBpLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3Bvc3QtY29ycmVjdC10aW1lLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3Bvc3QtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL21vYmlsZS9wb3N0LWltYWdlLXBvcHVwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3Bvc3QtcXVvdGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9tb2JpbGUvcG9zdC1yZWZlcmVuY2UtbWFwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3RocmVhZC11cGRhdGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V2ZW50LWJ1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbW9iaWxlLnRzIiwid2VicGFjazovLy8uL3RzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9kb20udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvdGltZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsdXhvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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Q0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLLEdBQUcsV0FBVyxRQUFRLFdBQVcsZUFBZTtBQUNsRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGVBQWUsbUJBQU8sQ0FBQyxzQ0FBVTtBQUNqQztBQUNBLFlBQVksbUJBQU8sQ0FBQyxnQ0FBTztBQUMzQjtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxrQ0FBUTtBQUM3Qjs7Ozs7Ozs7Ozs7OztBQ1BhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BCQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSxxQiIsImZpbGUiOiIuL21vYmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvbW9iaWxlLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEFwaSB7XG4gICAgc3RhdGljIGNyZWF0ZVBvc3QocmVxdWVzdCwgb25Qcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt3aW5kb3cuYmFzZVVybH0vYWpheC9wb3N0L2NyZWF0ZWA7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdwYXJlbnQnLCByZXF1ZXN0LnBhcmVudC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnc3ViamVjdCcsIHJlcXVlc3Quc3ViamVjdCk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ25hbWUnLCByZXF1ZXN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdtZXNzYWdlJywgcmVxdWVzdC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIHJlcXVlc3QuZmlsZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChvblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBvblByb2dyZXNzLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoYCR7eGhyLnN0YXR1c30gJHt4aHIuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuQXBpID0gQXBpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcG9zdF9jb3JyZWN0X3RpbWVfMSA9IHJlcXVpcmUoXCIuL3Bvc3QtY29ycmVjdC10aW1lXCIpO1xuZXhwb3J0cy5Qb3N0Q29ycmVjdFRpbWUgPSBwb3N0X2NvcnJlY3RfdGltZV8xLlBvc3RDb3JyZWN0VGltZTtcbnZhciBwb3N0X2Zvcm1fMSA9IHJlcXVpcmUoXCIuL3Bvc3QtZm9ybVwiKTtcbmV4cG9ydHMuUG9zdEZvcm0gPSBwb3N0X2Zvcm1fMS5Qb3N0Rm9ybTtcbnZhciBwb3N0X2ltYWdlX3BvcHVwXzEgPSByZXF1aXJlKFwiLi9wb3N0LWltYWdlLXBvcHVwXCIpO1xuZXhwb3J0cy5Qb3N0SW1hZ2VQb3B1cCA9IHBvc3RfaW1hZ2VfcG9wdXBfMS5Qb3N0SW1hZ2VQb3B1cDtcbnZhciBwb3N0X3F1b3RlXzEgPSByZXF1aXJlKFwiLi9wb3N0LXF1b3RlXCIpO1xuZXhwb3J0cy5Qb3N0UXVvdGUgPSBwb3N0X3F1b3RlXzEuUG9zdFF1b3RlO1xudmFyIHBvc3RfcmVmZXJlbmNlX21hcF8xID0gcmVxdWlyZShcIi4vcG9zdC1yZWZlcmVuY2UtbWFwXCIpO1xuZXhwb3J0cy5Qb3N0UmVmZXJlbmNlTWFwID0gcG9zdF9yZWZlcmVuY2VfbWFwXzEuUG9zdFJlZmVyZW5jZU1hcDtcbnZhciB0aHJlYWRfdXBkYXRlcl8xID0gcmVxdWlyZShcIi4vdGhyZWFkLXVwZGF0ZXJcIik7XG5leHBvcnRzLlRocmVhZFVwZGF0ZXIgPSB0aHJlYWRfdXBkYXRlcl8xLlRocmVhZFVwZGF0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGx1eG9uXzEgPSByZXF1aXJlKFwibHV4b25cIik7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi4vLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuY2xhc3MgUG9zdENvcnJlY3RUaW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIChwb3N0cykgPT4gcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydChwb3N0KSB7XG4gICAgICAgIGNvbnN0IHRpbWVFbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdF9fZGF0ZScsIHBvc3QpO1xuICAgICAgICBpZiAodGltZUVsKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lSXNvID0gdGltZUVsLmdldEF0dHJpYnV0ZSgnZGF0ZXRpbWUnKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBsdXhvbl8xLkRhdGVUaW1lLmZyb21JU08odGltZUlzbyk7XG4gICAgICAgICAgICB0aW1lRWwudGV4dENvbnRlbnQgPSB0aW1lLnRvTG9jYWxlU3RyaW5nKGx1eG9uXzEuRGF0ZVRpbWUuREFURVRJTUVfTUVEX1dJVEhfU0VDT05EUyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvc3RDb3JyZWN0VGltZSA9IFBvc3RDb3JyZWN0VGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi4vLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuY2xhc3MgUG9zdEZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLkluc2VydE1hcmt1cCwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3Rmb3JtJyk7XG4gICAgICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJyNwb3N0Zm9ybSBpcyBub3QgZm91bmQuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHV0aWxzXzEuRE9NLnFzKCcjbWVzc2FnZScsIGZvcm0pO1xuICAgICAgICAgICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCcjbWVzc2FnZSBpcyBub3QgZm91bmQuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS51bnNoaWZ0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRNYXJrdXAuYXBwbHkodGhpcywgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBmb3JtID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0Zm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignI3Bvc3Rmb3JtIGlzIG5vdCBmb3VuZC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdWJqZWN0ID0gdXRpbHNfMS5ET00ucXMoJyNzdWJqZWN0JywgZm9ybSk7XG4gICAgICAgIGlmIChzdWJqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3N0Zm9ybS5zdWJqZWN0Jyk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzdWJqZWN0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJqZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3N0Zm9ybS5zdWJqZWN0Jywgc3ViamVjdC52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gdXRpbHNfMS5ET00ucXMoJyNuYW1lJywgZm9ybSk7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3N0Zm9ybS5uYW1lJyk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuYW1lLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3N0Zm9ybS5uYW1lJywgbmFtZS52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbWFpbCA9IHV0aWxzXzEuRE9NLnFzKCcjZW1haWwnLCBmb3JtKTtcbiAgICAgICAgaWYgKGVtYWlsKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3N0Zm9ybS5lbWFpbCcpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZW1haWwudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3N0Zm9ybS5lbWFpbCcsIGVtYWlsLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB1dGlsc18xLkRPTS5xcygnI21lc3NhZ2UnLCBmb3JtKTtcbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmt1cF9idXR0b25zID0ge1xuICAgICAgICAgICAgICAgICdwb3N0Zm9ybS1tYXJrdXAtYm9sZCc6IGUgPT4gdGhpcy5pbnNlcnRCQkNvZGUobWVzc2FnZSwgJ2InKSxcbiAgICAgICAgICAgICAgICAncG9zdGZvcm0tbWFya3VwLWl0YWxpYyc6IGUgPT4gdGhpcy5pbnNlcnRCQkNvZGUobWVzc2FnZSwgJ2knKSxcbiAgICAgICAgICAgICAgICAncG9zdGZvcm0tbWFya3VwLXVuZGVybGluZSc6IGUgPT4gdGhpcy5pbnNlcnRCQkNvZGUobWVzc2FnZSwgJ3UnKSxcbiAgICAgICAgICAgICAgICAncG9zdGZvcm0tbWFya3VwLXN0cmlrZSc6IGUgPT4gdGhpcy5pbnNlcnRCQkNvZGUobWVzc2FnZSwgJ3MnKSxcbiAgICAgICAgICAgICAgICAncG9zdGZvcm0tbWFya3VwLXN1cCc6IGUgPT4gdGhpcy5pbnNlcnRCQkNvZGUobWVzc2FnZSwgJ3N1cCcpLFxuICAgICAgICAgICAgICAgICdwb3N0Zm9ybS1tYXJrdXAtc3ViJzogZSA9PiB0aGlzLmluc2VydEJCQ29kZShtZXNzYWdlLCAnc3ViJyksXG4gICAgICAgICAgICAgICAgJ3Bvc3Rmb3JtLW1hcmt1cC1zcG9pbGVyJzogZSA9PiB0aGlzLmluc2VydEJCQ29kZShtZXNzYWdlLCAnc3BvaWxlcicpLFxuICAgICAgICAgICAgICAgICdwb3N0Zm9ybS1tYXJrdXAtcnAnOiBlID0+IHRoaXMuaW5zZXJ0QkJDb2RlKG1lc3NhZ2UsICdycCcpLFxuICAgICAgICAgICAgICAgICdwb3N0Zm9ybS1tYXJrdXAtY29kZSc6IGUgPT4gdGhpcy5pbnNlcnRCQkNvZGUobWVzc2FnZSwgJ2NvZGUnKSxcbiAgICAgICAgICAgICAgICAncG9zdGZvcm0tbWFya3VwLXF1b3RlJzogZSA9PiB0aGlzLmluc2VydE1hcmt1cChtZXNzYWdlLCAnPicsICcnLCB0cnVlKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBtYXJrdXBfYnV0dG9uc19pZHMgPSBPYmplY3Qua2V5cyhtYXJrdXBfYnV0dG9ucyk7XG4gICAgICAgICAgICBtYXJrdXBfYnV0dG9uc19pZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gdXRpbHNfMS5ET00ucXMoYCMke2lkfWAsIGZvcm0pO1xuICAgICAgICAgICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFya3VwX2J1dHRvbnNbaWRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxlX2lucHV0cyA9IHV0aWxzXzEuRE9NLnFzYSgnI2ZpbGUnLCBmb3JtKTtcbiAgICAgICAgZmlsZV9pbnB1dHMuZm9yRWFjaChmaWxlX2lucHV0ID0+IHtcbiAgICAgICAgICAgIGZpbGVfaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGVfaW5wdXQuZmlsZXMgJiYgZmlsZV9pbnB1dC5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVfd3JhcHBlciA9IGZpbGVfaW5wdXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWxlX3ByZXZpZXcgPSB1dGlsc18xLkRPTS5xcygnLmZvcm1fX2ZpbGUtcHJldmlldycsIGZpbGVfd3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbGVfcHJldmlldykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfcHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfcHJldmlldy5jbGFzc0xpc3QuYWRkKCdmb3JtX19maWxlLXByZXZpZXcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlX3dyYXBwZXIuYXBwZW5kQ2hpbGQoZmlsZV9wcmV2aWV3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVfcHJldmlldy5zcmMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlX2lucHV0LmZpbGVzWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHt3aW5kb3cuYmFzZVVybH0vYWpheC9tb2JpbGUvcG9zdC9jcmVhdGVgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGlzT25Cb2FyZFBhZ2UgPSB1dGlsc18xLkRPTS5xc2EoJy50aHJlYWQnKS5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICBpZiAoaXNPbkJvYXJkUGFnZSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5oZWFkZXJzLmhhcygnTG9jYXRpb24nKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdMb2NhdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICAgICAgICAvLyBDbGVhciBmb3JtIG1lc3NhZ2UgYW5kIGZpbGUuXG4gICAgICAgICAgICAgICAgbWVzc2FnZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGZpbGVfaW5wdXRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgICAgICBlbC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBlbC50eXBlID0gJ2ZpbGUnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIENsZWFyIGZvcm0gZmlsZSBwcmV2aWV3LlxuICAgICAgICAgICAgICAgIHV0aWxzXzEuRE9NLnFzYSgnLmZvcm1fX2ZpbGUtcHJldmlldycsIGZvcm0pLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlci5uYW1lJywgZGF0YS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyLm5hbWUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHJpcGNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXIudHJpcGNvZGUnLCBkYXRhLnRyaXBjb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyLnRyaXBjb2RlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RDcmVhdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHNob3cgZXJyb3IgaW4gdGhlIGZvcm0uXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgaW5zZXJ0QkJDb2RlKG1lc3NhZ2UsIGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0TWFya3VwKG1lc3NhZ2UsIGBbJHtjb2RlfV1gLCBgWy8ke2NvZGV9XWApO1xuICAgIH1cbiAgICBpbnNlcnRNYXJrdXAobWVzc2FnZSwgYmVmb3JlLCBhZnRlciwgaW5zZXJ0TmV3TGluZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHN0ciA9IG1lc3NhZ2UudmFsdWU7XG4gICAgICAgIGNvbnN0IGJlZ2luID0gbWVzc2FnZS5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgY29uc3QgZW5kID0gbWVzc2FnZS5zZWxlY3Rpb25FbmQ7XG4gICAgICAgIGNvbnN0IHN0clN0YXJ0ID0gc3RyLnN1YnN0cmluZygwLCBiZWdpbik7XG4gICAgICAgIGNvbnN0IHN0clNlbGVjdGlvbiA9IHN0ci5zdWJzdHJpbmcoYmVnaW4sIGVuZCk7XG4gICAgICAgIGNvbnN0IHN0ckVuZCA9IHN0ci5zdWJzdHJpbmcoZW5kKTtcbiAgICAgICAgaWYgKGluc2VydE5ld0xpbmUgJiYgc3RyU3RhcnQubGVuZ3RoICYmICFzdHJTdGFydC5lbmRzV2l0aCgnXFxuJykpIHtcbiAgICAgICAgICAgIGJlZm9yZSA9IGBcXG4ke2JlZm9yZX1gO1xuICAgICAgICB9XG4gICAgICAgIG1lc3NhZ2UudmFsdWUgPSBbXG4gICAgICAgICAgICBzdHJTdGFydCxcbiAgICAgICAgICAgIGJlZm9yZSxcbiAgICAgICAgICAgIHN0clNlbGVjdGlvbixcbiAgICAgICAgICAgIGFmdGVyLFxuICAgICAgICAgICAgc3RyRW5kLFxuICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICBtZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgIG1lc3NhZ2Uuc2VsZWN0aW9uU3RhcnQgPSBiZWdpbiArIGJlZm9yZS5sZW5ndGg7XG4gICAgICAgIG1lc3NhZ2Uuc2VsZWN0aW9uRW5kID0gYmVnaW4gKyBiZWZvcmUubGVuZ3RoICsgKGVuZCAtIGJlZ2luKTtcbiAgICB9XG59XG5leHBvcnRzLlBvc3RGb3JtID0gUG9zdEZvcm07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLi8uLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0SW1hZ2VQb3B1cCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2NhbGUgPSAxLjA7XG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IDA7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IDA7XG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0WCA9IDA7XG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0WSA9IDA7XG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0TW91c2VYID0gMDtcbiAgICAgICAgdGhpcy5kcmFnU3RhcnRNb3VzZVkgPSAwO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgKHBvc3RzKSA9PiBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0LmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsTGluayA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdF9fdGh1bWJuYWlsLWxpbmsnLCBwb3N0KTtcbiAgICAgICAgaWYgKHRodW1ibmFpbExpbmspIHtcbiAgICAgICAgICAgIHRodW1ibmFpbExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwodGh1bWJuYWlsTGluayk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb3Blbk1vZGFsKHRodW1ibmFpbExpbmspIHtcbiAgICAgICAgbGV0IGZpbGU7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aHVtYm5haWxMaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1maWxlLXR5cGUnKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aHVtYm5haWxMaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1maWxlLXdpZHRoJyk7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB0aHVtYm5haWxMaW5rLmdldEF0dHJpYnV0ZSgnZGF0YS1maWxlLWhlaWdodCcpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fdmlkZW8nKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250cm9scycsICdjb250cm9scycpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ByZWxvYWQnLCAnbWV0YWRhdGEnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSB0aHVtYm5haWxMaW5rLmhyZWY7XG4gICAgICAgICAgICBmaWxlID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxfX2F1ZGlvJyk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAnY29udHJvbHMnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdwcmVsb2FkJywgJ21ldGFkYXRhJyk7XG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IHRodW1ibmFpbExpbmsuaHJlZjtcbiAgICAgICAgICAgIGZpbGUgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9faW1hZ2UnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gdGh1bWJuYWlsTGluay5ocmVmO1xuICAgICAgICAgICAgZmlsZSA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGRyYWcgYmVoYXZpb3VyIG9uIHRoZSBpbWFnZS5cbiAgICAgICAgZmlsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFByZXZlbnQgaW1hZ2UgY2xpY2sgZXZlbnQgYnViYmxpbmcgdG8gdGhlIG1vZGFsLlxuICAgICAgICBmaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gTW92ZSBpbWFnZSBvbiBtb3VzZSBkcmFnLlxuICAgICAgICBmaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gU2F2ZSBpbml0aWFsIGltYWdlIHBvc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXRYID0gdGhpcy5vZmZzZXRYO1xuICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRPZmZzZXRZID0gdGhpcy5vZmZzZXRZO1xuICAgICAgICAgICAgLy8gU2F2ZSBpbml0aWFsIG1vdXNlIHBvc2l0aW9uLlxuICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRNb3VzZVggPSBlLnBhZ2VYO1xuICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnRNb3VzZVkgPSBlLnBhZ2VZO1xuICAgICAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAvLyBHZXQgbW91c2Ugb2Zmc2V0IGRlbHRhLlxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IGUucGFnZVggLSB0aGlzLmRyYWdTdGFydE1vdXNlWDtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVkgPSBlLnBhZ2VZIC0gdGhpcy5kcmFnU3RhcnRNb3VzZVk7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBpbWFnZS5cbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldFggPSB0aGlzLmRyYWdTdGFydE9mZnNldFggKyBkZWx0YVg7XG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRZID0gdGhpcy5kcmFnU3RhcnRPZmZzZXRZICsgZGVsdGFZO1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvbk1vdXNlVXAgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgZHJhZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgZmlsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBpbWFnZSBpcyBub3QgZHJhZ2dlZCwgY2xvc2UgdGhlIG1vZGFsLlxuICAgICAgICAgICAgICAgIGNvbnN0IGVwcyA9IDEwZS0zO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLm9mZnNldFggLSB0aGlzLmRyYWdTdGFydE9mZnNldFgpIDwgZXBzXG4gICAgICAgICAgICAgICAgICAgIHx8IE1hdGguYWJzKHRoaXMub2Zmc2V0WSAtIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0WSkgPCBlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIFNldHVwIGRyYWcgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgICAgICBmaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbGF5b3V0X19tb2RhbCcsICdtb2RhbCcpO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChmaWxlKTtcbiAgICAgICAgLy8gQ2xvc2UgbW9kYWwgb24gbW91c2UgY2xpY2suXG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwobW9kYWwpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gU2NhbGUgbW9kYWwgb24gbW91c2Ugd2hlZWwuXG4gICAgICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IDAuMTtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgPSAoMS4wIC0gTWF0aC5zaWduKGUuZGVsdGFZKSAqIGRlbHRhKSAqIHRoaXMuc2NhbGU7XG4gICAgICAgICAgICB0aGlzLnRyYW5zZm9ybU1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IHRodW1ibmFpbExpbmsucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGh1bWJuYWlsLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICAgICAgLy8gRmFkZS1pbiB0aGUgbW9kYWwuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ZhZGFibGUnLCAnZmFkZScpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG4gICAgdHJhbnNmb3JtTW9kYWwobW9kYWwpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB1dGlsc18xLkRPTS5xcygnLm1vZGFsX19pbWFnZScsIG1vZGFsKTtcbiAgICAgICAgaW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3RoaXMub2Zmc2V0WH1weCwgJHt0aGlzLm9mZnNldFl9cHgpIHNjYWxlKCR7dGhpcy5zY2FsZX0pYDtcbiAgICB9XG4gICAgY2xvc2VNb2RhbChtb2RhbCkge1xuICAgICAgICB0aGlzLnNjYWxlID0gMS4wO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICAvLyBGYWRlLW91dCB0aGUgbW9kYWwuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgfSwgMzMzKTtcbiAgICB9XG59XG5leHBvcnRzLlBvc3RJbWFnZVBvcHVwID0gUG9zdEltYWdlUG9wdXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLi8uLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0UXVvdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgKHBvc3RzKSA9PiBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0LmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgcXVvdGVMaW5rID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0X19pZC1saW5rJywgcG9zdCk7XG4gICAgICAgIGlmIChxdW90ZUxpbmspIHtcbiAgICAgICAgICAgIHF1b3RlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHF1b3RlTGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLkluc2VydE1hcmt1cCwgW2A+PiR7aWR9XFxuYCwgJycsIHRydWVdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUG9zdFF1b3RlID0gUG9zdFF1b3RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi4vLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuY2xhc3MgUG9zdFJlZmVyZW5jZU1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHt9O1xuICAgICAgICB0aGlzLnBvc3RzID0ge307XG4gICAgICAgIHRoaXMudXNlci5uYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXIubmFtZScpO1xuICAgICAgICB0aGlzLnVzZXIudHJpcGNvZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlci50cmlwY29kZScpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgKHBvc3RzKSA9PiBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0LmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgcG9zdElkID0gK3Bvc3QuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgLy8gU3RvcmUgcG9zdC5cbiAgICAgICAgdGhpcy5wb3N0c1twb3N0SWRdID0gcG9zdDtcbiAgICAgICAgLy8gR2V0IHJlZmVyZW5jZXMuXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZUVsZW1lbnRzID0gdXRpbHNfMS5ET00ucXNhKCdhW2RhdGEtdGFyZ2V0LXBvc3QtaWRdJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSByZWZlcmVuY2VFbGVtZW50cy5tYXAoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgaWQ6ICtlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQtcG9zdC1pZCcpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEdldCByZWZlcmVuY2VkIHBvc3RzLlxuICAgICAgICBjb25zdCByZWZlcmVuY2VkUG9zdHMgPSByZWZlcmVuY2VzXG4gICAgICAgICAgICAuZmlsdGVyKChyZWZlcmVuY2UsIGluZGV4KSA9PiByZWZlcmVuY2VzLmluZGV4T2YocmVmZXJlbmNlKSA9PT0gaW5kZXgpXG4gICAgICAgICAgICAubWFwKHJlZmVyZW5jZSA9PiB0aGlzLnBvc3RzW3JlZmVyZW5jZS5pZF0pXG4gICAgICAgICAgICAuZmlsdGVyKHBvc3QgPT4gcG9zdCk7XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgYXV0aG9yIG5hbWUgb2YgdGhlIHJlZmVyZW5jZWQgcG9zdCB0byB0aGUgcmVmZXJlbmNlIGxpbmsgdGV4dC5cbiAgICAgICAgcmVmZXJlbmNlcy5mb3JFYWNoKHJlZmVyZW5jZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gdGhpcy5wb3N0c1tyZWZlcmVuY2UuaWRdO1xuICAgICAgICAgICAgaWYgKCFwb3N0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmZXJlbmNlLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5nZXRQb3N0UmVmTGlua0h0bWwocG9zdCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyB1c2VyIG93biBwb3N0LlxuICAgICAgICBjb25zdCBhdXRob3IgPSB0aGlzLmdldFBvc3RBdXRob3IocG9zdCk7XG4gICAgICAgIGlmICh0aGlzLnVzZXIudHJpcGNvZGUgJiYgdGhpcy51c2VyLnRyaXBjb2RlLmxlbmd0aCAmJiB0aGlzLnVzZXIudHJpcGNvZGUgPT09IGF1dGhvci50cmlwY29kZVxuICAgICAgICAgICAgfHwgdGhpcy51c2VyLm5hbWUgJiYgdGhpcy51c2VyLm5hbWUubGVuZ3RoICYmIHRoaXMudXNlci5uYW1lID09PSBhdXRob3IubmFtZSkge1xuICAgICAgICAgICAgcG9zdC5jbGFzc0xpc3QuYWRkKCdwb3N0X293bicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGVuZCB0byBwb3N0cyBhIHJlZmVyZW5jZSB0byB0aGlzIHBvc3QuXG4gICAgICAgIHJlZmVyZW5jZWRQb3N0cy5mb3JFYWNoKHJlZmVyZW5jZWRQb3N0ID0+IHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBwb3N0IGZvb3RlciBpZiBpdCBpcyBub3QgZXhpc3RzLlxuICAgICAgICAgICAgbGV0IGZvb3RlciA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdF9fZm9vdGVyJywgcmVmZXJlbmNlZFBvc3QpO1xuICAgICAgICAgICAgaWYgKCFmb290ZXIpIHtcbiAgICAgICAgICAgICAgICBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgncG9zdF9fZm9vdGVyJyk7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlZFBvc3QuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEFwcGVuZCByZWZlcmVuY2UgdG8gdGhlIGZvb3Rlci5cbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ3Bvc3RfX3JlZmVyZW5jZS1saW5rJyk7XG4gICAgICAgICAgICBsaW5rLmhyZWYgPSBgI3Bvc3RfJHtwb3N0SWR9YDtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIHJlcGx5IHRvIHVzZXIgb3duIHBvc3QuXG4gICAgICAgICAgICBjb25zdCByZWZQb3N0QXV0aG9yID0gdGhpcy5nZXRQb3N0QXV0aG9yKHJlZmVyZW5jZWRQb3N0KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnVzZXIudHJpcGNvZGUgJiYgdGhpcy51c2VyLnRyaXBjb2RlLmxlbmd0aCAmJiB0aGlzLnVzZXIudHJpcGNvZGUgPT09IHJlZlBvc3RBdXRob3IudHJpcGNvZGVcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnVzZXIubmFtZSAmJiB0aGlzLnVzZXIubmFtZS5sZW5ndGggJiYgdGhpcy51c2VyLm5hbWUgPT09IHJlZlBvc3RBdXRob3IubmFtZSkge1xuICAgICAgICAgICAgICAgIHBvc3QuY2xhc3NMaXN0LmFkZCgncG9zdF9vd24tcmVwbHknKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbmsuaW5uZXJIVE1MID0gdGhpcy5nZXRQb3N0UmVmTGlua0h0bWwocG9zdCk7XG4gICAgICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRQb3N0QXV0aG9yKHBvc3QpIHtcbiAgICAgICAgY29uc3QgbmFtZUVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0X19uYW1lJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX3RyaXBjb2RlJywgcG9zdCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lRWwgPyBuYW1lRWwudGV4dENvbnRlbnQgOiAnJyxcbiAgICAgICAgICAgIHRyaXBjb2RlOiB0cmlwY29kZUVsID8gdHJpcGNvZGVFbC50ZXh0Q29udGVudCA6ICcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRQb3N0UmVmTGlua0h0bWwocG9zdCkge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSArcG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICBjb25zdCBuYW1lRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX25hbWUnLCBwb3N0KTtcbiAgICAgICAgY29uc3QgdHJpcGNvZGVFbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdF9fdHJpcGNvZGUnLCBwb3N0KTtcbiAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbCA/IG5hbWVFbC5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgY29uc3QgdHJpcGNvZGUgPSB0cmlwY29kZUVsID8gdHJpcGNvZGVFbC5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoIHx8IHRyaXBjb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLWlkXCI+Jmd0OyZndDske3Bvc3RJZH08L3NwYW4+YFxuICAgICAgICAgICAgICAgICsgYCA8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLWF1dGhvclwiPmBcbiAgICAgICAgICAgICAgICArIGAoPHNwYW4gY2xhc3M9XCJwb3N0X19yZWZlcmVuY2UtbGluay1uYW1lXCI+JHtuYW1lfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgKyBgPHNwYW4gY2xhc3M9XCJwb3N0X19yZWZlcmVuY2UtbGluay10cmlwY29kZVwiPiR7dHJpcGNvZGV9PC9zcGFuPilgXG4gICAgICAgICAgICAgICAgKyBgPC9zcGFuPmA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwicG9zdF9fcmVmZXJlbmNlLWxpbmstaWRcIj4mZ3Q7Jmd0OyR7cG9zdElkfTwvc3Bhbj5gO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0UmVmZXJlbmNlTWFwID0gUG9zdFJlZmVyZW5jZU1hcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLi8uLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG47XG5jbGFzcyBUaHJlYWRVcGRhdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBudWxsO1xuICAgICAgICB0aGlzLmludGVydmFsID0gMTA7XG4gICAgICAgIHRoaXMubGF0ZXN0UG9zdElkID0gMDtcbiAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgKHBvc3RzKSA9PiBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0LmJpbmQodGhpcykpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RDcmVhdGVkLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0F1dG8gPSB0aGlzLnZpZXdNb2RlbC5pc0F1dG87XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5pc0F1dG8gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudmlld01vZGVsLmNvdW50ZXIgPSB0aGlzLmludGVydmFsO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaHJlYWQoKTtcbiAgICAgICAgICAgIHRoaXMudmlld01vZGVsLmlzQXV0byA9IGlzQXV0bztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHRocmVhZCA9IHV0aWxzXzEuRE9NLnFzKCcudGhyZWFkJyk7XG4gICAgICAgIGlmICghdGhyZWFkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGhyZWFkUGFnZSA9ICt0aHJlYWQuZ2V0QXR0cmlidXRlKCdkYXRhLXRocmVhZC1wYWdlJyk7XG4gICAgICAgIGlmICh0aHJlYWRQYWdlICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhyZWFkIG9ubHkgb24gdGhlIGZpcnN0IHBhZ2UgKHdpdGggbGF0ZXN0IHBvc3RzKS5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3N0cyA9IHV0aWxzXzEuRE9NLnFzYSgnLnBvc3QnKTtcbiAgICAgICAgaWYgKHBvc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyB2dWVfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGVsOiAnI3RocmVhZC11cGRhdGVyJyxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwidGhyZWFkLXVwZGF0ZXIgdGhyZWFkX191cGRhdGVyXCI+XG4gIDxidXR0b24gY2xhc3M9XCJ0aHJlYWQtdXBkYXRlcl9fdXBkYXRlXCIgdi1vbjpjbGljaz1cInVwZGF0ZVRocmVhZFwiPlVwZGF0ZTwvYnV0dG9uPlxuXG4gIDxsYWJlbCBjbGFzcz1cInRocmVhZC11cGRhdGVyX19hdXRvXCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidGhyZWFkLXVwZGF0ZXJfX2F1dG8tY2hlY2tib3hcIiB2LW9uOmNoYW5nZT1cImNvdW50ZXIgPSBtb2R1bGUuaW50ZXJ2YWxcIiB2LW1vZGVsPVwiaXNBdXRvXCIgLz5cbiAgICBBdXRvXG4gICAgPHNwYW4gY2xhc3M9XCJ0aHJlYWQtdXBkYXRlcl9fYXV0by1jb3VudGVyXCIgdi1pZj1cImlzQXV0b1wiPlxuICAgICAge3sgY291bnRlciB9fVxuICAgIDwvc3Bhbj5cbiAgPC9sYWJlbD5cblxuICA8c3BhbiBjbGFzcz1cInRocmVhZC11cGRhdGVyX191cGRhdGluZ1wiIHYtaWY9XCJtb2R1bGUuaXNVcGRhdGluZ1wiPlVwZGF0aW5nLi4uPC9zcGFuPlxuPC9kaXY+YCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtb2R1bGU6IHRoaXMsXG4gICAgICAgICAgICAgICAgaXNBdXRvOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvdW50ZXI6IHRoaXMuaW50ZXJ2YWwsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxJZDogTmFOLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBvblRpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQXV0bykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXItLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGhyZWFkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZVRocmVhZCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5tb2R1bGUuaW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kdWxlLnVwZGF0ZVRocmVhZCgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLm9uVGljaywgMTAwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcnZhbElkICE9PSBOYU4pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCBpZCA9ICtwb3N0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0LWlkJyk7XG4gICAgICAgIHRoaXMubGF0ZXN0UG9zdElkID0gTWF0aC5tYXgodGhpcy5sYXRlc3RQb3N0SWQsIGlkKTtcbiAgICB9XG4gICAgdXBkYXRlVGhyZWFkKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNVcGRhdGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRocmVhZCA9IHV0aWxzXzEuRE9NLnFzKCcudGhyZWFkJyk7XG4gICAgICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBwb3N0c1dyYXBwZXIgPSB1dGlsc18xLkRPTS5xcygnLnRocmVhZF9fcG9zdHMnLCB0aHJlYWQpO1xuICAgICAgICAgICAgaWYgKHBvc3RzV3JhcHBlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRocmVhZElkID0gK3RocmVhZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhyZWFkLWlkJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF0ZXN0UG9zdElkID0gdGhpcy5sYXRlc3RQb3N0SWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHt3aW5kb3cuYmFzZVVybH0vYWpheC9tb2JpbGUvdGhyZWFkLyR7dGhyZWFkSWR9P2FmdGVyPSR7bGF0ZXN0UG9zdElkfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBwb3N0c1dyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zdHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0JywgcG9zdHNXcmFwcGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihwb3N0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gK3Bvc3QuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpZCA+IGxhdGVzdFBvc3RJZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEZhZGUtaW4gbmV3IHBvc3RzLlxuICAgICAgICAgICAgICAgICAgICBuZXdQb3N0cy5mb3JFYWNoKHBvc3QgPT4gcG9zdC5jbGFzc0xpc3QuYWRkKCdmYWRhYmxlJywgJ2ZhZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zdHMuZm9yRWFjaChwb3N0ID0+IHBvc3QuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgX18xLmV2ZW50QnVzLiRlbWl0KF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgbmV3UG9zdHMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgb2xkIHBvc3RzLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0cyA9IHV0aWxzXzEuRE9NLnFzYSgnLnRocmVhZF9fcG9zdCcsIHBvc3RzV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zdHMubGVuZ3RoIC0gNTA7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdHNbaV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5UaHJlYWRVcGRhdGVyID0gVGhyZWFkVXBkYXRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBldmVudEJ1cyA9IG5ldyB2dWVfMS5kZWZhdWx0KCk7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRCdXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFdmVudHM7XG4oZnVuY3Rpb24gKEV2ZW50cykge1xuICAgIEV2ZW50c1tcIlJlYWR5XCJdID0gXCJyZWFkeVwiO1xuICAgIEV2ZW50c1tcIlBvc3RzSW5zZXJ0ZWRcIl0gPSBcInBvc3RzX2luc2VydGVkXCI7XG4gICAgRXZlbnRzW1wiUG9zdENyZWF0ZWRcIl0gPSBcInBvc3RfY3JlYXRlZFwiO1xuICAgIEV2ZW50c1tcIkluc2VydE1hcmt1cFwiXSA9IFwiaW5zZXJ0X21hcmt1cFwiO1xufSkoRXZlbnRzID0gZXhwb3J0cy5FdmVudHMgfHwgKGV4cG9ydHMuRXZlbnRzID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFwaV8xID0gcmVxdWlyZShcIi4vYXBpXCIpO1xuZXhwb3J0cy5BcGkgPSBhcGlfMS5BcGk7XG52YXIgZXZlbnRfYnVzXzEgPSByZXF1aXJlKFwiLi9ldmVudC1idXNcIik7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRfYnVzXzEuZXZlbnRCdXM7XG52YXIgZXZlbnRzXzEgPSByZXF1aXJlKFwiLi9ldmVudHNcIik7XG5leHBvcnRzLkV2ZW50cyA9IGV2ZW50c18xLkV2ZW50cztcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzTWFuYWdlciA9IHNldHRpbmdzXzEuU2V0dGluZ3NNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgbW9iaWxlXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL21vYmlsZVwiKTtcbm5ldyBtb2JpbGVfMS5Qb3N0Q29ycmVjdFRpbWUoKTtcbm5ldyBtb2JpbGVfMS5Qb3N0Rm9ybSgpO1xubmV3IG1vYmlsZV8xLlBvc3RJbWFnZVBvcHVwKCk7XG5uZXcgbW9iaWxlXzEuUG9zdFF1b3RlKCk7XG5uZXcgbW9iaWxlXzEuUG9zdFJlZmVyZW5jZU1hcCgpO1xubmV3IG1vYmlsZV8xLlRocmVhZFVwZGF0ZXIoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBlID0+IHtcbiAgICBfMS5ldmVudEJ1cy4kZW1pdChfMS5FdmVudHMuUmVhZHkpO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHNldHRpbmdzS2V5ID0gJ3NldHRpbmdzJztcbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgbGF5b3V0OiAnbGVmdCcsXG4gICAgICAgIHNob3dQb3N0SGVhZGVyUmVmbGlua0ljb246IHRydWUsXG4gICAgICAgIHNob3dQb3N0UmVmbGlua0ljb246IGZhbHNlLFxuICAgICAgICBzY3JvbGxUb05ld1Bvc3RzOiB0cnVlLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHByZXZpZXdBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgc2Nyb2xsQm90dG9tOiB0cnVlLFxuICAgICAgICBzaG93TWFya3VwOiB0cnVlLFxuICAgICAgICBzaG93TWFya3VwTW9iaWxlOiBmYWxzZSxcbiAgICAgICAgaW5zZXJ0VGFnc0luUGFpcnM6IHRydWUsXG4gICAgICAgIGZsb2F0OiBmYWxzZSxcbiAgICAgICAgZmxvYXRQb3NpdGlvbjogeyB4OiAxMDAsIHk6IDEwMCB9LFxuICAgIH0sXG4gICAgdGltZToge1xuICAgICAgICBsb2NhbGU6ICdkZWZhdWx0JyxcbiAgICAgICAgbG9jYWxlQ3VzdG9tOiAnJyxcbiAgICAgICAgem9uZTogJ2RlZmF1bHQnLFxuICAgICAgICB6b25lRml4ZWQ6IDAsXG4gICAgICAgIGZvcm1hdDogJ2RlZmF1bHQnLFxuICAgICAgICBmb3JtYXRDdXN0b206ICcnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBPYmplY3QuYXNzaWduKHt9LCB0YXJnZXQpO1xuICAgIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5jbGFzcyBTZXR0aW5nc01hbmFnZXIge1xuICAgIHN0YXRpYyBsb2FkKCkge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc2V0dGluZ3NLZXkpKTtcbiAgICAgICAgcmV0dXJuIG1lcmdlKGRlZmF1bHRTZXR0aW5ncywgc2V0dGluZ3MpO1xuICAgIH1cbiAgICBzdGF0aWMgc2F2ZShzZXR0aW5ncykge1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzZXR0aW5nc0tleSwgZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0cy5TZXR0aW5nc01hbmFnZXIgPSBTZXR0aW5nc01hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIENvb2tpZSB7XG4gICAgc3RhdGljIGdldChuYW1lLCBfZGVmYXVsdCA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29va2llX3N0ciA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XG4gICAgICAgIGNvbnN0IGNvb2tpZV9wYXJ0cyA9IGNvb2tpZV9zdHIuc3BsaXQoYDsgJHtuYW1lfT1gKTtcbiAgICAgICAgaWYgKGNvb2tpZV9wYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlX2VuYyA9IGNvb2tpZV9wYXJ0cy5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlX2VuYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0O1xuICAgIH1cbiAgICBzdGF0aWMgc2V0KG5hbWUsIHZhbHVlLCBleHBpcmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlX2VuYyA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25fc3RyID0gZXhwaXJhdGlvbi50b1VUQ1N0cmluZygpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlX2VuY307IHBhdGg9LzsgZXhwaXJlcz0ke2V4cGlyYXRpb25fc3RyfWA7XG4gICAgfVxufVxuZXhwb3J0cy5Db29raWUgPSBDb29raWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIERPTSB7XG4gICAgc3RhdGljIHFpZChpZCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIH1cbiAgICBzdGF0aWMgcXMoc2VsZWN0b3IsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cbiAgICBzdGF0aWMgcXNhKHNlbGVjdG9yLCBjb250ZXh0ID0gbnVsbCkge1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGVtZW50TGlzdCA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50TGlzdCk7XG4gICAgfVxufVxuZXhwb3J0cy5ET00gPSBET007XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb29raWVfMSA9IHJlcXVpcmUoXCIuL2Nvb2tpZVwiKTtcbmV4cG9ydHMuQ29va2llID0gY29va2llXzEuQ29va2llO1xudmFyIGRvbV8xID0gcmVxdWlyZShcIi4vZG9tXCIpO1xuZXhwb3J0cy5ET00gPSBkb21fMS5ET007XG52YXIgdGltZV8xID0gcmVxdWlyZShcIi4vdGltZVwiKTtcbmV4cG9ydHMuVGltZSA9IHRpbWVfMS5UaW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBUaW1lIHtcbiAgICBzdGF0aWMgZm9ybWF0KHRpbWUsIHNldHRpbmdzKSB7XG4gICAgICAgIGlmIChzZXR0aW5ncy50aW1lLmxvY2FsZSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICAgIHRpbWUgPSB0aW1lLnNldExvY2FsZShzZXR0aW5ncy50aW1lLmxvY2FsZUN1c3RvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzLnRpbWUuem9uZSA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc2V0dGluZ3MudGltZS56b25lRml4ZWQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRTdHIgPSAnVVRDJyArIChvZmZzZXQgPj0gMCA/ICcrJyA6ICcnKSArIG9mZnNldC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGltZSA9IHRpbWUuc2V0Wm9uZShvZmZzZXRTdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy50aW1lLmZvcm1hdCA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lLnRvRm9ybWF0KHNldHRpbmdzLnRpbWUuZm9ybWF0Q3VzdG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lLnRvRm9ybWF0KCdkLkxMLnl5eXkgSEg6bW06c3MnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGltZSA9IFRpbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGx1eG9uOyIsIm1vZHVsZS5leHBvcnRzID0gVnVlOyJdLCJzb3VyY2VSb290IjoiIn0=