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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBpLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3Bvc3QtY29ycmVjdC10aW1lLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3Bvc3QtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL21vYmlsZS9wb3N0LWltYWdlLXBvcHVwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3Bvc3QtcXVvdGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9tb2JpbGUvcG9zdC1yZWZlcmVuY2UtbWFwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbW9iaWxlL3RocmVhZC11cGRhdGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V2ZW50LWJ1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvbW9iaWxlLnRzIiwid2VicGFjazovLy8uL3RzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9kb20udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvdGltZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsdXhvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVyxHQUFHLGVBQWU7QUFDbkU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbERhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsMEJBQTBCLG1CQUFPLENBQUMsd0VBQXFCO0FBQ3ZEO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsd0RBQWE7QUFDdkM7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyxzRUFBb0I7QUFDckQ7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQywwREFBYztBQUN6QztBQUNBLDJCQUEyQixtQkFBTyxDQUFDLDBFQUFzQjtBQUN6RDtBQUNBLHVCQUF1QixtQkFBTyxDQUFDLGtFQUFrQjtBQUNqRDs7Ozs7Ozs7Ozs7OztBQ2JhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZ0JBQWdCLG1CQUFPLENBQUMsb0JBQU87QUFDL0IsWUFBWSxtQkFBTyxDQUFDLDRCQUFPO0FBQzNCLGdCQUFnQixtQkFBTyxDQUFDLHdDQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQmE7QUFDYjtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxZQUFZLG1CQUFPLENBQUMsNEJBQU87QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxHQUFHO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGVBQWU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsOENBQThDLEtBQUssU0FBUyxLQUFLO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqTGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxZQUFZLG1CQUFPLENBQUMsNEJBQU87QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsYUFBYSxNQUFNLGFBQWEsWUFBWSxXQUFXO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvSWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxZQUFZLG1CQUFPLENBQUMsNEJBQU87QUFDM0IsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsR0FBRztBQUNyRTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELFlBQVksbUJBQU8sQ0FBQyw0QkFBTztBQUMzQixnQkFBZ0IsbUJBQU8sQ0FBQyx3Q0FBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxJQUFJLEVBQUUsT0FBTztBQUMzRTtBQUNBLDhEQUE4RCxLQUFLO0FBQ25FLGlFQUFpRSxTQUFTO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxJQUFJLEVBQUUsT0FBTztBQUMzRTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVGYTtBQUNiO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsZ0JBQUs7QUFDM0MsWUFBWSxtQkFBTyxDQUFDLDRCQUFPO0FBQzNCLGdCQUFnQixtQkFBTyxDQUFDLHdDQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGVBQWUsc0JBQXNCLFNBQVMsU0FBUyxhQUFhO0FBQ3BIO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1QkFBdUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5SWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLGdCQUFLO0FBQzNDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsaURBQWlEOzs7Ozs7Ozs7Ozs7O0FDUnJDO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsWUFBWSxtQkFBTyxDQUFDLDBCQUFPO0FBQzNCO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsc0NBQWE7QUFDdkM7QUFDQSxlQUFlLG1CQUFPLENBQUMsZ0NBQVU7QUFDakM7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNyQzs7Ozs7Ozs7Ozs7OztBQ1RhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsV0FBVyxtQkFBTyxDQUFDLHdCQUFHO0FBQ3RCLGlCQUFpQixtQkFBTyxDQUFDLDREQUFxQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1pZO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHFCQUFxQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscUJBQXFCO0FBQzVEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsNkJBQTZCLEdBQUcsZ0JBQWdCO0FBQ2hELGdEQUFnRCxHQUFHLEtBQUs7QUFDeEQ7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSyxHQUFHLFdBQVcsUUFBUSxXQUFXLGVBQWU7QUFDbEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsc0NBQVU7QUFDakM7QUFDQSxZQUFZLG1CQUFPLENBQUMsZ0NBQU87QUFDM0I7QUFDQSxhQUFhLG1CQUFPLENBQUMsa0NBQVE7QUFDN0I7Ozs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkEsdUI7Ozs7Ozs7Ozs7O0FDQUEscUIiLCJmaWxlIjoiLi9tb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL21vYmlsZS50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBBcGkge1xuICAgIHN0YXRpYyBjcmVhdGVQb3N0KHJlcXVlc3QsIG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FqYXgvcG9zdC9jcmVhdGVgO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgncGFyZW50JywgcmVxdWVzdC5wYXJlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3N1YmplY3QnLCByZXF1ZXN0LnN1YmplY3QpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCduYW1lJywgcmVxdWVzdC5uYW1lKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbWVzc2FnZScsIHJlcXVlc3QubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCByZXF1ZXN0LmZpbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgb25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xvY2F0aW9uJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGAke3hoci5zdGF0dXN9ICR7eGhyLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkFwaSA9IEFwaTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHBvc3RfY29ycmVjdF90aW1lXzEgPSByZXF1aXJlKFwiLi9wb3N0LWNvcnJlY3QtdGltZVwiKTtcbmV4cG9ydHMuUG9zdENvcnJlY3RUaW1lID0gcG9zdF9jb3JyZWN0X3RpbWVfMS5Qb3N0Q29ycmVjdFRpbWU7XG52YXIgcG9zdF9mb3JtXzEgPSByZXF1aXJlKFwiLi9wb3N0LWZvcm1cIik7XG5leHBvcnRzLlBvc3RGb3JtID0gcG9zdF9mb3JtXzEuUG9zdEZvcm07XG52YXIgcG9zdF9pbWFnZV9wb3B1cF8xID0gcmVxdWlyZShcIi4vcG9zdC1pbWFnZS1wb3B1cFwiKTtcbmV4cG9ydHMuUG9zdEltYWdlUG9wdXAgPSBwb3N0X2ltYWdlX3BvcHVwXzEuUG9zdEltYWdlUG9wdXA7XG52YXIgcG9zdF9xdW90ZV8xID0gcmVxdWlyZShcIi4vcG9zdC1xdW90ZVwiKTtcbmV4cG9ydHMuUG9zdFF1b3RlID0gcG9zdF9xdW90ZV8xLlBvc3RRdW90ZTtcbnZhciBwb3N0X3JlZmVyZW5jZV9tYXBfMSA9IHJlcXVpcmUoXCIuL3Bvc3QtcmVmZXJlbmNlLW1hcFwiKTtcbmV4cG9ydHMuUG9zdFJlZmVyZW5jZU1hcCA9IHBvc3RfcmVmZXJlbmNlX21hcF8xLlBvc3RSZWZlcmVuY2VNYXA7XG52YXIgdGhyZWFkX3VwZGF0ZXJfMSA9IHJlcXVpcmUoXCIuL3RocmVhZC11cGRhdGVyXCIpO1xuZXhwb3J0cy5UaHJlYWRVcGRhdGVyID0gdGhyZWFkX3VwZGF0ZXJfMS5UaHJlYWRVcGRhdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsdXhvbl8xID0gcmVxdWlyZShcImx1eG9uXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uLy4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RDb3JyZWN0VGltZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCB0aW1lRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX2RhdGUnLCBwb3N0KTtcbiAgICAgICAgaWYgKHRpbWVFbCkge1xuICAgICAgICAgICAgY29uc3QgdGltZUlzbyA9IHRpbWVFbC5nZXRBdHRyaWJ1dGUoJ2RhdGV0aW1lJyk7XG4gICAgICAgICAgICBjb25zdCB0aW1lID0gbHV4b25fMS5EYXRlVGltZS5mcm9tSVNPKHRpbWVJc28pO1xuICAgICAgICAgICAgdGltZUVsLnRleHRDb250ZW50ID0gdGltZS50b0xvY2FsZVN0cmluZyhsdXhvbl8xLkRhdGVUaW1lLkRBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0Q29ycmVjdFRpbWUgPSBQb3N0Q29ycmVjdFRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uLy4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5JbnNlcnRNYXJrdXAsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0Zm9ybScpO1xuICAgICAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCcjcG9zdGZvcm0gaXMgbm90IGZvdW5kLicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB1dGlsc18xLkRPTS5xcygnI21lc3NhZ2UnLCBmb3JtKTtcbiAgICAgICAgICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignI21lc3NhZ2UgaXMgbm90IGZvdW5kLicpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEudW5zaGlmdChtZXNzYWdlKTtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0TWFya3VwLmFwcGx5KHRoaXMsIGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGZvcm0nKTtcbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJyNwb3N0Zm9ybSBpcyBub3QgZm91bmQuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3ViamVjdCA9IHV0aWxzXzEuRE9NLnFzKCcjc3ViamVjdCcsIGZvcm0pO1xuICAgICAgICBpZiAoc3ViamVjdCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zdGZvcm0uc3ViamVjdCcpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc3ViamVjdC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3ViamVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zdGZvcm0uc3ViamVjdCcsIHN1YmplY3QudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IHV0aWxzXzEuRE9NLnFzKCcjbmFtZScsIGZvcm0pO1xuICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zdGZvcm0ubmFtZScpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmFtZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zdGZvcm0ubmFtZScsIG5hbWUudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW1haWwgPSB1dGlsc18xLkRPTS5xcygnI2VtYWlsJywgZm9ybSk7XG4gICAgICAgIGlmIChlbWFpbCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zdGZvcm0uZW1haWwnKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGVtYWlsLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbWFpbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zdGZvcm0uZW1haWwnLCBlbWFpbC52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gdXRpbHNfMS5ET00ucXMoJyNtZXNzYWdlJywgZm9ybSk7XG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICBjb25zdCBtYXJrdXBfYnV0dG9ucyA9IHtcbiAgICAgICAgICAgICAgICAncG9zdGZvcm0tbWFya3VwLWJvbGQnOiBlID0+IHRoaXMuaW5zZXJ0QkJDb2RlKG1lc3NhZ2UsICdiJyksXG4gICAgICAgICAgICAgICAgJ3Bvc3Rmb3JtLW1hcmt1cC1pdGFsaWMnOiBlID0+IHRoaXMuaW5zZXJ0QkJDb2RlKG1lc3NhZ2UsICdpJyksXG4gICAgICAgICAgICAgICAgJ3Bvc3Rmb3JtLW1hcmt1cC11bmRlcmxpbmUnOiBlID0+IHRoaXMuaW5zZXJ0QkJDb2RlKG1lc3NhZ2UsICd1JyksXG4gICAgICAgICAgICAgICAgJ3Bvc3Rmb3JtLW1hcmt1cC1zdHJpa2UnOiBlID0+IHRoaXMuaW5zZXJ0QkJDb2RlKG1lc3NhZ2UsICdzJyksXG4gICAgICAgICAgICAgICAgJ3Bvc3Rmb3JtLW1hcmt1cC1zdXAnOiBlID0+IHRoaXMuaW5zZXJ0QkJDb2RlKG1lc3NhZ2UsICdzdXAnKSxcbiAgICAgICAgICAgICAgICAncG9zdGZvcm0tbWFya3VwLXN1Yic6IGUgPT4gdGhpcy5pbnNlcnRCQkNvZGUobWVzc2FnZSwgJ3N1YicpLFxuICAgICAgICAgICAgICAgICdwb3N0Zm9ybS1tYXJrdXAtc3BvaWxlcic6IGUgPT4gdGhpcy5pbnNlcnRCQkNvZGUobWVzc2FnZSwgJ3Nwb2lsZXInKSxcbiAgICAgICAgICAgICAgICAncG9zdGZvcm0tbWFya3VwLXJwJzogZSA9PiB0aGlzLmluc2VydEJCQ29kZShtZXNzYWdlLCAncnAnKSxcbiAgICAgICAgICAgICAgICAncG9zdGZvcm0tbWFya3VwLWNvZGUnOiBlID0+IHRoaXMuaW5zZXJ0QkJDb2RlKG1lc3NhZ2UsICdjb2RlJyksXG4gICAgICAgICAgICAgICAgJ3Bvc3Rmb3JtLW1hcmt1cC1xdW90ZSc6IGUgPT4gdGhpcy5pbnNlcnRNYXJrdXAobWVzc2FnZSwgJz4nLCAnJywgdHJ1ZSksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbWFya3VwX2J1dHRvbnNfaWRzID0gT2JqZWN0LmtleXMobWFya3VwX2J1dHRvbnMpO1xuICAgICAgICAgICAgbWFya3VwX2J1dHRvbnNfaWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHV0aWxzXzEuRE9NLnFzKGAjJHtpZH1gLCBmb3JtKTtcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1hcmt1cF9idXR0b25zW2lkXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsZV9pbnB1dHMgPSB1dGlsc18xLkRPTS5xc2EoJyNmaWxlJywgZm9ybSk7XG4gICAgICAgIGZpbGVfaW5wdXRzLmZvckVhY2goZmlsZV9pbnB1dCA9PiB7XG4gICAgICAgICAgICBmaWxlX2lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlX2lucHV0LmZpbGVzICYmIGZpbGVfaW5wdXQuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlX3dyYXBwZXIgPSBmaWxlX2lucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZV9wcmV2aWV3ID0gdXRpbHNfMS5ET00ucXMoJy5mb3JtX19maWxlLXByZXZpZXcnLCBmaWxlX3dyYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWxlX3ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlX3ByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlX3ByZXZpZXcuY2xhc3NMaXN0LmFkZCgnZm9ybV9fZmlsZS1wcmV2aWV3Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZV93cmFwcGVyLmFwcGVuZENoaWxkKGZpbGVfcHJldmlldyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlX3ByZXZpZXcuc3JjID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZV9pbnB1dC5maWxlc1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7d2luZG93LmJhc2VVcmx9L2FqYXgvbW9iaWxlL3Bvc3QvY3JlYXRlYCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBpc09uQm9hcmRQYWdlID0gdXRpbHNfMS5ET00ucXNhKCcudGhyZWFkJykubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgaWYgKGlzT25Cb2FyZFBhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaGVhZGVycy5oYXMoJ0xvY2F0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnTG9jYXRpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgZm9ybSBtZXNzYWdlIGFuZCBmaWxlLlxuICAgICAgICAgICAgICAgIG1lc3NhZ2UudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICBmaWxlX2lucHV0cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICAgICAgZWwudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZWwudHlwZSA9ICdmaWxlJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBDbGVhciBmb3JtIGZpbGUgcHJldmlldy5cbiAgICAgICAgICAgICAgICB1dGlsc18xLkRPTS5xc2EoJy5mb3JtX19maWxlLXByZXZpZXcnLCBmb3JtKS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXIubmFtZScsIGRhdGEubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlci5uYW1lJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnRyaXBjb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyLnRyaXBjb2RlJywgZGF0YS50cmlwY29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlci50cmlwY29kZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5Qb3N0Q3JlYXRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBzaG93IGVycm9yIGluIHRoZSBmb3JtLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGluc2VydEJCQ29kZShtZXNzYWdlLCBjb2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydE1hcmt1cChtZXNzYWdlLCBgWyR7Y29kZX1dYCwgYFsvJHtjb2RlfV1gKTtcbiAgICB9XG4gICAgaW5zZXJ0TWFya3VwKG1lc3NhZ2UsIGJlZm9yZSwgYWZ0ZXIsIGluc2VydE5ld0xpbmUgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBzdHIgPSBtZXNzYWdlLnZhbHVlO1xuICAgICAgICBjb25zdCBiZWdpbiA9IG1lc3NhZ2Uuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIGNvbnN0IGVuZCA9IG1lc3NhZ2Uuc2VsZWN0aW9uRW5kO1xuICAgICAgICBjb25zdCBzdHJTdGFydCA9IHN0ci5zdWJzdHJpbmcoMCwgYmVnaW4pO1xuICAgICAgICBjb25zdCBzdHJTZWxlY3Rpb24gPSBzdHIuc3Vic3RyaW5nKGJlZ2luLCBlbmQpO1xuICAgICAgICBjb25zdCBzdHJFbmQgPSBzdHIuc3Vic3RyaW5nKGVuZCk7XG4gICAgICAgIGlmIChpbnNlcnROZXdMaW5lICYmIHN0clN0YXJ0Lmxlbmd0aCAmJiAhc3RyU3RhcnQuZW5kc1dpdGgoJ1xcbicpKSB7XG4gICAgICAgICAgICBiZWZvcmUgPSBgXFxuJHtiZWZvcmV9YDtcbiAgICAgICAgfVxuICAgICAgICBtZXNzYWdlLnZhbHVlID0gW1xuICAgICAgICAgICAgc3RyU3RhcnQsXG4gICAgICAgICAgICBiZWZvcmUsXG4gICAgICAgICAgICBzdHJTZWxlY3Rpb24sXG4gICAgICAgICAgICBhZnRlcixcbiAgICAgICAgICAgIHN0ckVuZCxcbiAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgbWVzc2FnZS5mb2N1cygpO1xuICAgICAgICBtZXNzYWdlLnNlbGVjdGlvblN0YXJ0ID0gYmVnaW4gKyBiZWZvcmUubGVuZ3RoO1xuICAgICAgICBtZXNzYWdlLnNlbGVjdGlvbkVuZCA9IGJlZ2luICsgYmVmb3JlLmxlbmd0aCArIChlbmQgLSBiZWdpbik7XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0Rm9ybSA9IFBvc3RGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi4vLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuY2xhc3MgUG9zdEltYWdlUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjYWxlID0gMS4wO1xuICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldFggPSAwO1xuICAgICAgICB0aGlzLmRyYWdTdGFydE9mZnNldFkgPSAwO1xuICAgICAgICB0aGlzLmRyYWdTdGFydE1vdXNlWCA9IDA7XG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0TW91c2VZID0gMDtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIChwb3N0cykgPT4gcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydChwb3N0KSB7XG4gICAgICAgIGNvbnN0IHRodW1ibmFpbExpbmsgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX3RodW1ibmFpbC1saW5rJywgcG9zdCk7XG4gICAgICAgIGlmICh0aHVtYm5haWxMaW5rKSB7XG4gICAgICAgICAgICB0aHVtYm5haWxMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKHRodW1ibmFpbExpbmspO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9wZW5Nb2RhbCh0aHVtYm5haWxMaW5rKSB7XG4gICAgICAgIGxldCBmaWxlO1xuICAgICAgICBjb25zdCB0eXBlID0gdGh1bWJuYWlsTGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsZS10eXBlJyk7XG4gICAgICAgIGlmICh0eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGh1bWJuYWlsTGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsZS13aWR0aCcpO1xuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGh1bWJuYWlsTGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsZS1oZWlnaHQnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxfX3ZpZGVvJyk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAnY29udHJvbHMnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdwcmVsb2FkJywgJ21ldGFkYXRhJyk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gdGh1bWJuYWlsTGluay5ocmVmO1xuICAgICAgICAgICAgZmlsZSA9IGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsX19hdWRpbycpO1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJyk7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgncHJlbG9hZCcsICdtZXRhZGF0YScpO1xuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSB0aHVtYm5haWxMaW5rLmhyZWY7XG4gICAgICAgICAgICBmaWxlID0gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxfX2ltYWdlJyk7XG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IHRodW1ibmFpbExpbmsuaHJlZjtcbiAgICAgICAgICAgIGZpbGUgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBkcmFnIGJlaGF2aW91ciBvbiB0aGUgaW1hZ2UuXG4gICAgICAgIGZpbGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBQcmV2ZW50IGltYWdlIGNsaWNrIGV2ZW50IGJ1YmJsaW5nIHRvIHRoZSBtb2RhbC5cbiAgICAgICAgZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE1vdmUgaW1hZ2Ugb24gbW91c2UgZHJhZy5cbiAgICAgICAgZmlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIFNhdmUgaW5pdGlhbCBpbWFnZSBwb3NpdGlvbi5cbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0WCA9IHRoaXMub2Zmc2V0WDtcbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0WSA9IHRoaXMub2Zmc2V0WTtcbiAgICAgICAgICAgIC8vIFNhdmUgaW5pdGlhbCBtb3VzZSBwb3NpdGlvbi5cbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0TW91c2VYID0gZS5wYWdlWDtcbiAgICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0TW91c2VZID0gZS5wYWdlWTtcbiAgICAgICAgICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgLy8gR2V0IG1vdXNlIG9mZnNldCBkZWx0YS5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVggPSBlLnBhZ2VYIC0gdGhpcy5kcmFnU3RhcnRNb3VzZVg7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGFZID0gZS5wYWdlWSAtIHRoaXMuZHJhZ1N0YXJ0TW91c2VZO1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgaW1hZ2UuXG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXRYID0gdGhpcy5kcmFnU3RhcnRPZmZzZXRYICsgZGVsdGFYO1xuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0WSA9IHRoaXMuZHJhZ1N0YXJ0T2Zmc2V0WSArIGRlbHRhWTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybU1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb25Nb3VzZVVwID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGRyYWcgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIGZpbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgLy8gSWYgaW1hZ2UgaXMgbm90IGRyYWdnZWQsIGNsb3NlIHRoZSBtb2RhbC5cbiAgICAgICAgICAgICAgICBjb25zdCBlcHMgPSAxMGUtMztcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5vZmZzZXRYIC0gdGhpcy5kcmFnU3RhcnRPZmZzZXRYKSA8IGVwc1xuICAgICAgICAgICAgICAgICAgICB8fCBNYXRoLmFicyh0aGlzLm9mZnNldFkgLSB0aGlzLmRyYWdTdGFydE9mZnNldFkpIDwgZXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBTZXR1cCBkcmFnIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgICAgICAgZmlsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2xheW91dF9fbW9kYWwnLCAnbW9kYWwnKTtcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZmlsZSk7XG4gICAgICAgIC8vIENsb3NlIG1vZGFsIG9uIG1vdXNlIGNsaWNrLlxuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFNjYWxlIG1vZGFsIG9uIG1vdXNlIHdoZWVsLlxuICAgICAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSAwLjE7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gKDEuMCAtIE1hdGguc2lnbihlLmRlbHRhWSkgKiBkZWx0YSkgKiB0aGlzLnNjYWxlO1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1Nb2RhbChtb2RhbCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0aHVtYm5haWwgPSB0aHVtYm5haWxMaW5rLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRodW1ibmFpbC5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgICAgIC8vIEZhZGUtaW4gdGhlIG1vZGFsLlxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdmYWRhYmxlJywgJ2ZhZGUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuICAgIHRyYW5zZm9ybU1vZGFsKG1vZGFsKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdXRpbHNfMS5ET00ucXMoJy5tb2RhbF9faW1hZ2UnLCBtb2RhbCk7XG4gICAgICAgIGltYWdlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHt0aGlzLm9mZnNldFh9cHgsICR7dGhpcy5vZmZzZXRZfXB4KSBzY2FsZSgke3RoaXMuc2NhbGV9KWA7XG4gICAgfVxuICAgIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IDEuMDtcbiAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgLy8gRmFkZS1vdXQgdGhlIG1vZGFsLlxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIH0sIDMzMyk7XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0SW1hZ2VQb3B1cCA9IFBvc3RJbWFnZVBvcHVwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi4vLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuY2xhc3MgUG9zdFF1b3RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIChwb3N0cykgPT4gcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydChwb3N0KSB7XG4gICAgICAgIGNvbnN0IHF1b3RlTGluayA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdF9faWQtbGluaycsIHBvc3QpO1xuICAgICAgICBpZiAocXVvdGVMaW5rKSB7XG4gICAgICAgICAgICBxdW90ZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBxdW90ZUxpbmsuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5JbnNlcnRNYXJrdXAsIFtgPj4ke2lkfVxcbmAsICcnLCB0cnVlXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvc3RRdW90ZSA9IFBvc3RRdW90ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uLy4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RSZWZlcmVuY2VNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVzZXIgPSB7fTtcbiAgICAgICAgdGhpcy5wb3N0cyA9IHt9O1xuICAgICAgICB0aGlzLnVzZXIubmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLm5hbWUnKTtcbiAgICAgICAgdGhpcy51c2VyLnRyaXBjb2RlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXIudHJpcGNvZGUnKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIChwb3N0cykgPT4gcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydChwb3N0KSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9ICtwb3N0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0LWlkJyk7XG4gICAgICAgIC8vIFN0b3JlIHBvc3QuXG4gICAgICAgIHRoaXMucG9zdHNbcG9zdElkXSA9IHBvc3Q7XG4gICAgICAgIC8vIEdldCByZWZlcmVuY2VzLlxuICAgICAgICBjb25zdCByZWZlcmVuY2VFbGVtZW50cyA9IHV0aWxzXzEuRE9NLnFzYSgnYVtkYXRhLXRhcmdldC1wb3N0LWlkXScsIHBvc3QpO1xuICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gcmVmZXJlbmNlRWxlbWVudHMubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGlkOiArZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LXBvc3QtaWQnKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBHZXQgcmVmZXJlbmNlZCBwb3N0cy5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlZFBvc3RzID0gcmVmZXJlbmNlc1xuICAgICAgICAgICAgLmZpbHRlcigocmVmZXJlbmNlLCBpbmRleCkgPT4gcmVmZXJlbmNlcy5pbmRleE9mKHJlZmVyZW5jZSkgPT09IGluZGV4KVxuICAgICAgICAgICAgLm1hcChyZWZlcmVuY2UgPT4gdGhpcy5wb3N0c1tyZWZlcmVuY2UuaWRdKVxuICAgICAgICAgICAgLmZpbHRlcihwb3N0ID0+IHBvc3QpO1xuICAgICAgICAvLyBBcHBlbmQgdGhlIGF1dGhvciBuYW1lIG9mIHRoZSByZWZlcmVuY2VkIHBvc3QgdG8gdGhlIHJlZmVyZW5jZSBsaW5rIHRleHQuXG4gICAgICAgIHJlZmVyZW5jZXMuZm9yRWFjaChyZWZlcmVuY2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHRoaXMucG9zdHNbcmVmZXJlbmNlLmlkXTtcbiAgICAgICAgICAgIGlmICghcG9zdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZmVyZW5jZS5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMuZ2V0UG9zdFJlZkxpbmtIdG1sKHBvc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgdXNlciBvd24gcG9zdC5cbiAgICAgICAgY29uc3QgYXV0aG9yID0gdGhpcy5nZXRQb3N0QXV0aG9yKHBvc3QpO1xuICAgICAgICBpZiAodGhpcy51c2VyLnRyaXBjb2RlICYmIHRoaXMudXNlci50cmlwY29kZS5sZW5ndGggJiYgdGhpcy51c2VyLnRyaXBjb2RlID09PSBhdXRob3IudHJpcGNvZGVcbiAgICAgICAgICAgIHx8IHRoaXMudXNlci5uYW1lICYmIHRoaXMudXNlci5uYW1lLmxlbmd0aCAmJiB0aGlzLnVzZXIubmFtZSA9PT0gYXV0aG9yLm5hbWUpIHtcbiAgICAgICAgICAgIHBvc3QuY2xhc3NMaXN0LmFkZCgncG9zdF9vd24nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBcHBlbmQgdG8gcG9zdHMgYSByZWZlcmVuY2UgdG8gdGhpcyBwb3N0LlxuICAgICAgICByZWZlcmVuY2VkUG9zdHMuZm9yRWFjaChyZWZlcmVuY2VkUG9zdCA9PiB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgcG9zdCBmb290ZXIgaWYgaXQgaXMgbm90IGV4aXN0cy5cbiAgICAgICAgICAgIGxldCBmb290ZXIgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX2Zvb3RlcicsIHJlZmVyZW5jZWRQb3N0KTtcbiAgICAgICAgICAgIGlmICghZm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3Bvc3RfX2Zvb3RlcicpO1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZWRQb3N0LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBcHBlbmQgcmVmZXJlbmNlIHRvIHRoZSBmb290ZXIuXG4gICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdwb3N0X19yZWZlcmVuY2UtbGluaycpO1xuICAgICAgICAgICAgbGluay5ocmVmID0gYCNwb3N0XyR7cG9zdElkfWA7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyByZXBseSB0byB1c2VyIG93biBwb3N0LlxuICAgICAgICAgICAgY29uc3QgcmVmUG9zdEF1dGhvciA9IHRoaXMuZ2V0UG9zdEF1dGhvcihyZWZlcmVuY2VkUG9zdCk7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyLnRyaXBjb2RlICYmIHRoaXMudXNlci50cmlwY29kZS5sZW5ndGggJiYgdGhpcy51c2VyLnRyaXBjb2RlID09PSByZWZQb3N0QXV0aG9yLnRyaXBjb2RlXG4gICAgICAgICAgICAgICAgfHwgdGhpcy51c2VyLm5hbWUgJiYgdGhpcy51c2VyLm5hbWUubGVuZ3RoICYmIHRoaXMudXNlci5uYW1lID09PSByZWZQb3N0QXV0aG9yLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBwb3N0LmNsYXNzTGlzdC5hZGQoJ3Bvc3Rfb3duLXJlcGx5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5rLmlubmVySFRNTCA9IHRoaXMuZ2V0UG9zdFJlZkxpbmtIdG1sKHBvc3QpO1xuICAgICAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UG9zdEF1dGhvcihwb3N0KSB7XG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdF9fbmFtZScsIHBvc3QpO1xuICAgICAgICBjb25zdCB0cmlwY29kZUVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0X190cmlwY29kZScsIHBvc3QpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogbmFtZUVsID8gbmFtZUVsLnRleHRDb250ZW50IDogJycsXG4gICAgICAgICAgICB0cmlwY29kZTogdHJpcGNvZGVFbCA/IHRyaXBjb2RlRWwudGV4dENvbnRlbnQgOiAnJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UG9zdFJlZkxpbmtIdG1sKHBvc3QpIHtcbiAgICAgICAgY29uc3QgcG9zdElkID0gK3Bvc3QuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgY29uc3QgbmFtZUVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0X19uYW1lJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX3RyaXBjb2RlJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRWwgPyBuYW1lRWwuaW5uZXJIVE1MIDogJyc7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlID0gdHJpcGNvZGVFbCA/IHRyaXBjb2RlRWwuaW5uZXJIVE1MIDogJyc7XG4gICAgICAgIGlmIChuYW1lLmxlbmd0aCB8fCB0cmlwY29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJwb3N0X19yZWZlcmVuY2UtbGluay1pZFwiPiZndDsmZ3Q7JHtwb3N0SWR9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICArIGAgPHNwYW4gY2xhc3M9XCJwb3N0X19yZWZlcmVuY2UtbGluay1hdXRob3JcIj5gXG4gICAgICAgICAgICAgICAgKyBgKDxzcGFuIGNsYXNzPVwicG9zdF9fcmVmZXJlbmNlLWxpbmstbmFtZVwiPiR7bmFtZX08L3NwYW4+YFxuICAgICAgICAgICAgICAgICsgYDxzcGFuIGNsYXNzPVwicG9zdF9fcmVmZXJlbmNlLWxpbmstdHJpcGNvZGVcIj4ke3RyaXBjb2RlfTwvc3Bhbj4pYFxuICAgICAgICAgICAgICAgICsgYDwvc3Bhbj5gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLWlkXCI+Jmd0OyZndDske3Bvc3RJZH08L3NwYW4+YDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUG9zdFJlZmVyZW5jZU1hcCA9IFBvc3RSZWZlcmVuY2VNYXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi4vLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuO1xuY2xhc3MgVGhyZWFkVXBkYXRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IDEwO1xuICAgICAgICB0aGlzLmxhdGVzdFBvc3RJZCA9IDA7XG4gICAgICAgIHRoaXMuaXNVcGRhdGluZyA9IGZhbHNlO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIChwb3N0cykgPT4gcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydC5iaW5kKHRoaXMpKSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0Q3JlYXRlZCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNBdXRvID0gdGhpcy52aWV3TW9kZWwuaXNBdXRvO1xuICAgICAgICAgICAgdGhpcy52aWV3TW9kZWwuaXNBdXRvID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5jb3VudGVyID0gdGhpcy5pbnRlcnZhbDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGhyZWFkKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXdNb2RlbC5pc0F1dG8gPSBpc0F1dG87XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCB0aHJlYWQgPSB1dGlsc18xLkRPTS5xcygnLnRocmVhZCcpO1xuICAgICAgICBpZiAoIXRocmVhZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRocmVhZFBhZ2UgPSArdGhyZWFkLmdldEF0dHJpYnV0ZSgnZGF0YS10aHJlYWQtcGFnZScpO1xuICAgICAgICBpZiAodGhyZWFkUGFnZSAhPT0gMCkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRocmVhZCBvbmx5IG9uIHRoZSBmaXJzdCBwYWdlICh3aXRoIGxhdGVzdCBwb3N0cykuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9zdHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0Jyk7XG4gICAgICAgIGlmIChwb3N0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCBwb3N0cyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXcgdnVlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBlbDogJyN0aHJlYWQtdXBkYXRlcicsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInRocmVhZC11cGRhdGVyIHRocmVhZF9fdXBkYXRlclwiPlxuICA8YnV0dG9uIGNsYXNzPVwidGhyZWFkLXVwZGF0ZXJfX3VwZGF0ZVwiIHYtb246Y2xpY2s9XCJ1cGRhdGVUaHJlYWRcIj5VcGRhdGU8L2J1dHRvbj5cblxuICA8bGFiZWwgY2xhc3M9XCJ0aHJlYWQtdXBkYXRlcl9fYXV0b1wiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRocmVhZC11cGRhdGVyX19hdXRvLWNoZWNrYm94XCIgdi1vbjpjaGFuZ2U9XCJjb3VudGVyID0gbW9kdWxlLmludGVydmFsXCIgdi1tb2RlbD1cImlzQXV0b1wiIC8+XG4gICAgQXV0b1xuICAgIDxzcGFuIGNsYXNzPVwidGhyZWFkLXVwZGF0ZXJfX2F1dG8tY291bnRlclwiIHYtaWY9XCJpc0F1dG9cIj5cbiAgICAgIHt7IGNvdW50ZXIgfX1cbiAgICA8L3NwYW4+XG4gIDwvbGFiZWw+XG5cbiAgPHNwYW4gY2xhc3M9XCJ0aHJlYWQtdXBkYXRlcl9fdXBkYXRpbmdcIiB2LWlmPVwibW9kdWxlLmlzVXBkYXRpbmdcIj5VcGRhdGluZy4uLjwvc3Bhbj5cbjwvZGl2PmAsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiB0aGlzLFxuICAgICAgICAgICAgICAgIGlzQXV0bzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb3VudGVyOiB0aGlzLmludGVydmFsLFxuICAgICAgICAgICAgICAgIGludGVydmFsSWQ6IE5hTixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgb25UaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRocmVhZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVUaHJlYWQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMubW9kdWxlLmludGVydmFsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZHVsZS51cGRhdGVUaHJlYWQoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodGhpcy5vblRpY2ssIDEwMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCAhPT0gTmFOKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSArcG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICB0aGlzLmxhdGVzdFBvc3RJZCA9IE1hdGgubWF4KHRoaXMubGF0ZXN0UG9zdElkLCBpZCk7XG4gICAgfVxuICAgIHVwZGF0ZVRocmVhZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVXBkYXRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0aHJlYWQgPSB1dGlsc18xLkRPTS5xcygnLnRocmVhZCcpO1xuICAgICAgICAgICAgaWYgKCF0aHJlYWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzVXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgcG9zdHNXcmFwcGVyID0gdXRpbHNfMS5ET00ucXMoJy50aHJlYWRfX3Bvc3RzJywgdGhyZWFkKTtcbiAgICAgICAgICAgIGlmIChwb3N0c1dyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aHJlYWRJZCA9ICt0aHJlYWQuZ2V0QXR0cmlidXRlKCdkYXRhLXRocmVhZC1pZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVzdFBvc3RJZCA9IHRoaXMubGF0ZXN0UG9zdElkO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7d2luZG93LmJhc2VVcmx9L2FqYXgvbW9iaWxlL3RocmVhZC8ke3RocmVhZElkfT9hZnRlcj0ke2xhdGVzdFBvc3RJZH1gLCB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zdHNXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Bvc3RzID0gdXRpbHNfMS5ET00ucXNhKCcucG9zdCcsIHBvc3RzV3JhcHBlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocG9zdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9ICtwb3N0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0LWlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWQgPiBsYXRlc3RQb3N0SWQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBGYWRlLWluIG5ldyBwb3N0cy5cbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zdHMuZm9yRWFjaChwb3N0ID0+IHBvc3QuY2xhc3NMaXN0LmFkZCgnZmFkYWJsZScsICdmYWRlJykpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc3RzLmZvckVhY2gocG9zdCA9PiBwb3N0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIG5ld1Bvc3RzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIG9sZCBwb3N0cy5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdHMgPSB1dGlsc18xLkRPTS5xc2EoJy50aHJlYWRfX3Bvc3QnLCBwb3N0c1dyYXBwZXIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3RzLmxlbmd0aCAtIDUwOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RzW2ldLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuVGhyZWFkVXBkYXRlciA9IFRocmVhZFVwZGF0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgZXZlbnRCdXMgPSBuZXcgdnVlXzEuZGVmYXVsdCgpO1xuZXhwb3J0cy5ldmVudEJ1cyA9IGV2ZW50QnVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRXZlbnRzO1xuKGZ1bmN0aW9uIChFdmVudHMpIHtcbiAgICBFdmVudHNbXCJSZWFkeVwiXSA9IFwicmVhZHlcIjtcbiAgICBFdmVudHNbXCJQb3N0c0luc2VydGVkXCJdID0gXCJwb3N0c19pbnNlcnRlZFwiO1xuICAgIEV2ZW50c1tcIlBvc3RDcmVhdGVkXCJdID0gXCJwb3N0X2NyZWF0ZWRcIjtcbiAgICBFdmVudHNbXCJJbnNlcnRNYXJrdXBcIl0gPSBcImluc2VydF9tYXJrdXBcIjtcbn0pKEV2ZW50cyA9IGV4cG9ydHMuRXZlbnRzIHx8IChleHBvcnRzLkV2ZW50cyA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcGlfMSA9IHJlcXVpcmUoXCIuL2FwaVwiKTtcbmV4cG9ydHMuQXBpID0gYXBpXzEuQXBpO1xudmFyIGV2ZW50X2J1c18xID0gcmVxdWlyZShcIi4vZXZlbnQtYnVzXCIpO1xuZXhwb3J0cy5ldmVudEJ1cyA9IGV2ZW50X2J1c18xLmV2ZW50QnVzO1xudmFyIGV2ZW50c18xID0gcmVxdWlyZShcIi4vZXZlbnRzXCIpO1xuZXhwb3J0cy5FdmVudHMgPSBldmVudHNfMS5FdmVudHM7XG52YXIgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuZXhwb3J0cy5TZXR0aW5nc01hbmFnZXIgPSBzZXR0aW5nc18xLlNldHRpbmdzTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IG1vYmlsZV8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9tb2JpbGVcIik7XG5uZXcgbW9iaWxlXzEuUG9zdENvcnJlY3RUaW1lKCk7XG5uZXcgbW9iaWxlXzEuUG9zdEZvcm0oKTtcbm5ldyBtb2JpbGVfMS5Qb3N0SW1hZ2VQb3B1cCgpO1xubmV3IG1vYmlsZV8xLlBvc3RRdW90ZSgpO1xubmV3IG1vYmlsZV8xLlBvc3RSZWZlcmVuY2VNYXAoKTtcbm5ldyBtb2JpbGVfMS5UaHJlYWRVcGRhdGVyKCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZSA9PiB7XG4gICAgXzEuZXZlbnRCdXMuJGVtaXQoXzEuRXZlbnRzLlJlYWR5KTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzZXR0aW5nc0tleSA9ICdzZXR0aW5ncyc7XG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIGxheW91dDogJ2xlZnQnLFxuICAgICAgICBzaG93UG9zdEhlYWRlclJlZmxpbmtJY29uOiB0cnVlLFxuICAgICAgICBzaG93UG9zdFJlZmxpbmtJY29uOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsVG9OZXdQb3N0czogdHJ1ZSxcbiAgICAgICAgc21vb3RoU2Nyb2xsOiB0cnVlLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHByZXZpZXdBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgc2Nyb2xsQm90dG9tOiB0cnVlLFxuICAgICAgICBzaG93TWFya3VwOiB0cnVlLFxuICAgICAgICBzaG93TWFya3VwTW9iaWxlOiBmYWxzZSxcbiAgICAgICAgaW5zZXJ0VGFnc0luUGFpcnM6IHRydWUsXG4gICAgICAgIGZsb2F0OiBmYWxzZSxcbiAgICAgICAgZmxvYXRQb3NpdGlvbjogeyB4OiAxMDAsIHk6IDEwMCB9LFxuICAgICAgICByZXBsYWNlczogW10sXG4gICAgfSxcbiAgICB0aW1lOiB7XG4gICAgICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxuICAgICAgICBsb2NhbGVDdXN0b206ICcnLFxuICAgICAgICB6b25lOiAnZGVmYXVsdCcsXG4gICAgICAgIHpvbmVGaXhlZDogMCxcbiAgICAgICAgZm9ybWF0OiAnZGVmYXVsdCcsXG4gICAgICAgIGZvcm1hdEN1c3RvbTogJycsXG4gICAgfSxcbn07XG5mdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGNvbnN0IG91dHB1dCA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmNsYXNzIFNldHRpbmdzTWFuYWdlciB7XG4gICAgc3RhdGljIGxvYWQoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5nc0tleSkpO1xuICAgICAgICByZXR1cm4gbWVyZ2UoZGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XG4gICAgfVxuICAgIHN0YXRpYyBzYXZlKHNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNldHRpbmdzS2V5LCBkYXRhKTtcbiAgICB9XG59XG5leHBvcnRzLlNldHRpbmdzTWFuYWdlciA9IFNldHRpbmdzTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29va2llIHtcbiAgICBzdGF0aWMgZ2V0KG5hbWUsIF9kZWZhdWx0ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb29raWVfc3RyID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcbiAgICAgICAgY29uc3QgY29va2llX3BhcnRzID0gY29va2llX3N0ci5zcGxpdChgOyAke25hbWV9PWApO1xuICAgICAgICBpZiAoY29va2llX3BhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gY29va2llX3BhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWVfZW5jKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQobmFtZSwgdmFsdWUsIGV4cGlyYXRpb24pIHtcbiAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9zdHIgPSBleHBpcmF0aW9uLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWVfZW5jfTsgcGF0aD0vOyBleHBpcmVzPSR7ZXhwaXJhdGlvbl9zdHJ9YDtcbiAgICB9XG59XG5leHBvcnRzLkNvb2tpZSA9IENvb2tpZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRE9NIHtcbiAgICBzdGF0aWMgcWlkKGlkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICAgIHN0YXRpYyBxcyhzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuICAgIHN0YXRpYyBxc2Eoc2VsZWN0b3IsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRMaXN0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRMaXN0KTtcbiAgICB9XG59XG5leHBvcnRzLkRPTSA9IERPTTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvb2tpZV8xID0gcmVxdWlyZShcIi4vY29va2llXCIpO1xuZXhwb3J0cy5Db29raWUgPSBjb29raWVfMS5Db29raWU7XG52YXIgZG9tXzEgPSByZXF1aXJlKFwiLi9kb21cIik7XG5leHBvcnRzLkRPTSA9IGRvbV8xLkRPTTtcbnZhciB0aW1lXzEgPSByZXF1aXJlKFwiLi90aW1lXCIpO1xuZXhwb3J0cy5UaW1lID0gdGltZV8xLlRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFRpbWUge1xuICAgIHN0YXRpYyBmb3JtYXQodGltZSwgc2V0dGluZ3MpIHtcbiAgICAgICAgaWYgKHNldHRpbmdzLnRpbWUubG9jYWxlID09PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgdGltZSA9IHRpbWUuc2V0TG9jYWxlKHNldHRpbmdzLnRpbWUubG9jYWxlQ3VzdG9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS56b25lID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBzZXR0aW5ncy50aW1lLnpvbmVGaXhlZDtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFN0ciA9ICdVVEMnICsgKG9mZnNldCA+PSAwID8gJysnIDogJycpICsgb2Zmc2V0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5zZXRab25lKG9mZnNldFN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzLnRpbWUuZm9ybWF0ID09PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWUudG9Gb3JtYXQoc2V0dGluZ3MudGltZS5mb3JtYXRDdXN0b20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWUudG9Gb3JtYXQoJ2QuTEwueXl5eSBISDptbTpzcycpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UaW1lID0gVGltZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gbHV4b247IiwibW9kdWxlLmV4cG9ydHMgPSBWdWU7Il0sInNvdXJjZVJvb3QiOiIifQ==