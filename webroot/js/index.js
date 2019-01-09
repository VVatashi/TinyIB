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
        this.settings = JSON.parse(utils_1.Cookie.get('tinyib_settings', '{}'));
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

Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class PostingForm {
    constructor() {
        this.isInThread = false;
        // Overrides file in the form.
        this.file = null;
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
        __1.eventBus.$on(__1.Events.PostsInserted, this.onPostsInserted.bind(this));
    }
    onReady() {
        this.wrapper = utils_1.DOM.qs('#posting-form-wrapper');
        if (!this.wrapper) {
            return;
        }
        this.form = utils_1.DOM.qs('#posting-form', this.wrapper);
        const parent = utils_1.DOM.qs('[name="parent"]', this.form);
        this.isInThread = +parent.value !== 0;
        this.subject = utils_1.DOM.qs('[name="subject"]', this.form);
        this.name = utils_1.DOM.qs('[name="name"]', this.form);
        this.fileInput = utils_1.DOM.qs('[name="file"]', this.form);
        this.message = utils_1.DOM.qs('[name="message"]', this.form);
        this.status = utils_1.DOM.qs('#posting-form-status', this.form);
        this.preview = utils_1.DOM.qs('#posting-form-preview', this.form);
        this.submit = utils_1.DOM.qs('[type="submit"]', this.form);
        this.close = utils_1.DOM.qs('#posting-form-close', this.form);
        this.previewRemove = utils_1.DOM.qs('#posting-form-preview-remove', this.form);
        // Load saved name.
        const name = localStorage['posting-form.name'];
        if (name) {
            this.name.value = name;
        }
        // Save name on change.
        this.name.addEventListener('change', e => {
            localStorage['posting-form.name'] = this.name.value;
        });
        this.fileInput.addEventListener('change', e => {
            // Reset file override on file field change.
            this.file = null;
            if (this.fileInput.files && this.fileInput.files.length) {
                this.showPreview(this.fileInput.files[0]);
            }
            else {
                this.hidePreview();
            }
        });
        // Submit form on the Ctrl+Enter in the message field.
        this.message.addEventListener('keydown', e => {
            if ((e.keyCode == 10 || e.keyCode == 13) && e.ctrlKey) {
                this.submitForm();
            }
        });
        // Paste file.
        this.message.addEventListener('paste', e => {
            const data = e.clipboardData || e.originalEvent.clipboardData;
            const items = Array.prototype.slice.call(data.items);
            const item = items.filter(item => {
                return item.type.startsWith('image/')
                    || item.type.startsWith('audio/')
                    || item.type.startsWith('video/');
            })[0];
            if (item) {
                this.file = item.getAsFile();
                // Show preview.
                this.showPreview(this.file);
            }
        });
        // Handle form submit.
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.submitForm();
        });
        // Handle form close.
        this.close.addEventListener('click', e => {
            e.preventDefault();
            this.restoreForm();
        });
        // Handle preview remove.
        this.previewRemove.addEventListener('click', e => {
            e.preventDefault();
            this.resetFileField();
        });
    }
    onPostsInserted(posts) {
        posts.forEach(post => {
            const referenceLinks = utils_1.DOM.qsa('a[data-reflink]', post);
            referenceLinks.forEach(link => {
                const id = +link.getAttribute('data-reflink');
                link.addEventListener('click', e => {
                    e.preventDefault();
                    if (this.isInThread) {
                        // Move form to the post.
                        this.moveFormToPost(post);
                    }
                    // Insert markup.
                    this.insert(`>>${id}\n`, { newLine: true });
                });
            });
        });
    }
    submitForm() {
        // Submit create post request.
        const url = `${window.baseUrl}/ajax/post/create`;
        const data = new FormData(this.form);
        // Override file from the form.
        if (this.file) {
            data.append('file', this.file);
        }
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.withCredentials = true;
        xhr.upload.addEventListener('progress', e => {
            const progressPercent = Math.ceil(e.loaded / e.total * 100);
            this.status.textContent = `Uploading... ${progressPercent}%`;
        });
        xhr.addEventListener('readystatechange', e => {
            if (xhr.readyState !== XMLHttpRequest.DONE) {
                return;
            }
            // Enable form.
            this.setFormState({ enabled: true });
            if (xhr.status === 201) {
                this.resetForm();
                this.status.textContent = '';
                // Move form to the initial location.
                this.restoreForm();
                if (this.isInThread) {
                    // Trigger DE thread update.
                    const update = utils_1.DOM.qs('.de-thr-updater-link');
                    if (update) {
                        update.click();
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
                    this.status.textContent = `Error: ${data.error}`;
                }
                else {
                    this.status.textContent = `Error: ${xhr.status} ${xhr.statusText}`;
                }
            }
        });
        xhr.send(data);
        // Disable form.
        this.setFormState({ enabled: false });
    }
    setFormState({ enabled }) {
        const controls = [
            this.subject,
            this.name,
            this.fileInput,
            this.message,
            this.submit,
        ];
        controls.filter(control => control)
            .forEach(control => {
            control.disabled = !enabled;
        });
    }
    resetForm() {
        // Reset not required for the name field.
        const controls = [
            this.subject,
            this.message,
        ];
        controls.filter(control => control)
            .forEach(control => {
            control.value = '';
        });
        // File field needs special handling.
        this.resetFileField();
    }
    resetFileField() {
        if (this.fileInput) {
            this.fileInput.type = 'text';
            this.fileInput.value = '';
            this.fileInput.type = 'file';
        }
        this.file = null;
        this.hidePreview();
    }
    moveFormToPost(post) {
        this.form.style.marginLeft = '0';
        this.close.classList.remove('hidden');
        post.parentElement.insertBefore(this.form, post.nextSibling);
    }
    restoreForm() {
        this.form.style.marginLeft = 'auto';
        this.close.classList.add('hidden');
        this.wrapper.insertBefore(this.form, null);
        this.wrapper.scrollIntoView();
    }
    showPreview(file) {
        const reader = new FileReader();
        reader.addEventListener('load', e => {
            let image = utils_1.DOM.qs('#posting-form-preview-image', this.preview);
            if (!image) {
                image = document.createElement('img');
                image.id = 'posting-form-preview-image';
                image.classList.add('posting-form__preview-image');
                this.preview.appendChild(image);
            }
            image.src = e.target.result;
            this.preview.classList.remove('hidden');
        });
        reader.readAsDataURL(file);
    }
    hidePreview() {
        this.preview.classList.add('hidden');
    }
    insert(str, { newLine } = { newLine: false }) {
        if (this.message) {
            const content = this.message.value;
            const begin = this.message.selectionStart;
            const end = this.message.selectionEnd;
            const before = content.substring(0, begin);
            const after = content.substring(end);
            const insertNewLine = newLine
                && before.length > 0
                && !before.endsWith('\n')
                && !str.startsWith('\n');
            this.message.value = [
                before,
                insertNewLine ? '\n' : '',
                str,
                after,
            ].join('');
            this.message.focus();
            const position = begin + str.length + (insertNewLine ? 1 : 0);
            this.message.selectionStart = position;
            this.message.selectionEnd = position;
        }
        return false;
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

Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class Settings {
    constructor() {
        // Load settings from a cookie
        this.settings = JSON.parse(utils_1.Cookie.get('tinyib_settings', '{}'));
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
    }
    onReady() {
        const settings_form = utils_1.DOM.qid('settings_form');
        if (!settings_form) {
            return;
        }
        const status = utils_1.DOM.qid('status');
        const time_locale_custom = utils_1.DOM.qid('time_locale_custom');
        const time_locale_custom_value = utils_1.DOM.qid('time_locale_custom_value');
        const time_format_custom = utils_1.DOM.qid('time_format_custom');
        const time_format_custom_value = utils_1.DOM.qid('time_format_custom_value');
        const time_zone_fixed = utils_1.DOM.qid('time_zone_fixed');
        const time_zone_fixed_offset = utils_1.DOM.qid('time_zone_fixed_offset');
        const time_current_format = utils_1.DOM.qid('time_current_format');
        // Set the initial settings form state
        if (this.settings.form_preview_align) {
            const element = utils_1.DOM.qs(`input[name="form_preview_align"][value="${this.settings.form_preview_align}"]`);
            if (element) {
                element.checked = true;
            }
        }
        if (this.settings.time_locale) {
            const element = utils_1.DOM.qs(`input[name="time_locale"][value="${this.settings.time_locale}"]`);
            if (element) {
                element.checked = true;
            }
        }
        if (this.settings.time_format) {
            const element = utils_1.DOM.qs(`input[name="time_format"][value="${this.settings.time_format}"]`);
            if (element) {
                element.checked = true;
            }
        }
        if (this.settings.time_zone) {
            const element = utils_1.DOM.qs(`input[name="time_zone"][value="${this.settings.time_zone}"]`);
            if (element) {
                element.checked = true;
            }
        }
        time_locale_custom_value.value = this.settings.time_locale_custom_value || '';
        time_format_custom_value.value = this.settings.time_format_custom_value || '';
        time_zone_fixed_offset.value = (this.settings.time_zone_fixed_offset || 0).toString();
        // Check a radio button on a corresponding text field click
        if (time_locale_custom && time_locale_custom_value) {
            time_locale_custom_value.addEventListener('click', (e) => {
                time_locale_custom.checked = true;
            });
        }
        if (time_format_custom && time_format_custom_value) {
            time_format_custom_value.addEventListener('click', (e) => {
                time_format_custom.checked = true;
            });
        }
        if (time_zone_fixed && time_zone_fixed_offset) {
            time_zone_fixed_offset.addEventListener('click', (e) => {
                time_zone_fixed.checked = true;
            });
        }
        // Save the settings form state in a cookie
        settings_form.addEventListener('submit', (e) => {
            e.preventDefault();
            const expiration_date = new Date();
            expiration_date.setTime(expiration_date.getTime() + 365 * 24 * 60 * 60 * 1000);
            const settings = this.getFormValues();
            utils_1.Cookie.set('tinyib_settings', JSON.stringify(settings), expiration_date);
            // Indicate that settings are saved
            if (status) {
                status.innerHTML = '';
                setTimeout(() => {
                    status.innerHTML = 'Settings saved.';
                }, 1000 / 3);
            }
            return false;
        });
        // Show the current time format
        const showTime = () => {
            if (time_current_format) {
                try {
                    const time = luxon_1.DateTime.fromJSDate(new Date());
                    const settings = this.getFormValues();
                    time_current_format.innerHTML = utils_1.Time.format(time, settings);
                }
                catch (_a) {
                    time_current_format.innerHTML = 'Invalid format';
                }
            }
        };
        showTime();
        setInterval(showTime, 1000);
    }
    getFormValues() {
        const form_preview_align = utils_1.DOM.qs('input[name="form_preview_align"]:checked');
        const time_locale = utils_1.DOM.qs('input[name="time_locale"]:checked');
        const time_locale_custom_value = utils_1.DOM.qid('time_locale_custom_value');
        const time_format = utils_1.DOM.qs('input[name="time_format"]:checked');
        const time_format_custom_value = utils_1.DOM.qid('time_format_custom_value');
        const time_zone = utils_1.DOM.qs('input[name="time_zone"]:checked');
        const time_zone_fixed_offset = utils_1.DOM.qid('time_zone_fixed_offset');
        return {
            form_preview_align: form_preview_align.value,
            time_locale: time_locale.value,
            time_locale_custom_value: time_locale_custom_value.value,
            time_zone: time_zone.value,
            time_zone_fixed_offset: Number(time_zone_fixed_offset.value),
            time_format: time_format.value,
            time_format_custom_value: time_format_custom_value.value,
        };
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
        const locale = settings.time_locale;
        const locale_value = settings.time_locale_custom_value;
        const zone = settings.time_zone;
        const zone_fixed_offset = settings.time_zone_fixed_offset;
        const format = settings.time_format;
        const format_value = settings.time_format_custom_value;
        if (locale === 'custom') {
            time = time.setLocale(locale_value);
        }
        if (zone === 'fixed') {
            const offset_str = 'UTC' + (zone_fixed_offset >= 0 ? '+' : '') + zone_fixed_offset.toString();
            time = time.setZone(offset_str);
        }
        if (format === 'custom') {
            return time.toFormat(format_value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvY2FwdGNoYS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2NvcnJlY3QtdGltZS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2RlbGV0ZS1mb3JtLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9uZXctcG9zdHMtZGV0ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3N0LXJlZmVyZW5jZS1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3N0aW5nLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3N0eWxlLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudC1idXMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvZXZlbnRzLnRzIiwid2VicGFjazovLy8uL3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2Nvb2tpZS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9kb20udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvdGltZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsdXhvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIlZ1ZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7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QTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSyxHQUFHLFdBQVcsUUFBUSxXQUFXLGVBQWU7QUFDbEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsc0NBQVU7QUFDakM7QUFDQSxZQUFZLG1CQUFPLENBQUMsZ0NBQU87QUFDM0I7QUFDQSxhQUFhLG1CQUFPLENBQUMsa0NBQVE7QUFDN0I7Ozs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekJBLHVCOzs7Ozs7Ozs7OztBQ0FBLHFCIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2FwcC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgXzEgPSByZXF1aXJlKFwiLlwiKTtcbmNvbnN0IGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHNcIik7XG5uZXcgY29tcG9uZW50c18xLkNhcHRjaGEoKTtcbm5ldyBjb21wb25lbnRzXzEuQ29ycmVjdFRpbWUoKTtcbm5ldyBjb21wb25lbnRzXzEuRGVsZXRlRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0aW5nRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0UmVmZXJlbmNlTWFwKCk7XG5uZXcgY29tcG9uZW50c18xLlNldHRpbmdzKCk7XG5uZXcgY29tcG9uZW50c18xLlN0eWxlU3dpdGNoKCk7XG5uZXcgY29tcG9uZW50c18xLk5ld1Bvc3RzRGV0ZWN0b3IoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBlID0+IHtcbiAgICBfMS5ldmVudEJ1cy4kZW1pdChfMS5FdmVudHMuUmVhZHkpO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDYXB0Y2hhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFNyYyA9ICcnO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGFpbWFnZScpO1xuICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTcmMgPSBpbWFnZS5zcmM7XG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVsb2FkLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgY29uc3QgY2FwdGNoYSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYScpO1xuICAgICAgICBjYXB0Y2hhLnZhbHVlID0gJyc7XG4gICAgICAgIGNhcHRjaGEuZm9jdXMoKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGFpbWFnZScpO1xuICAgICAgICBpbWFnZS5zcmMgPSBgJHt0aGlzLm9yaWdpbmFsU3JjfSMke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnRzLkNhcHRjaGEgPSBDYXB0Y2hhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsdXhvbl8xID0gcmVxdWlyZShcImx1eG9uXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIENvcnJlY3RUaW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gTG9hZCBzZXR0aW5ncyBmcm9tIGEgY29va2llXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBKU09OLnBhcnNlKHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3NldHRpbmdzJywgJ3t9JykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIChwb3N0cykgPT4gcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdXRpbHNfMS5ET00ucXNhKCcucG9zdC1oZWFkZXJfX2RhdGV0aW1lJyk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB0aGlzLmNvcnJlY3RUaW1lKGVsZW1lbnQpKTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgdGltZV9lbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX2RhdGV0aW1lJywgcG9zdCk7XG4gICAgICAgIGlmICghdGltZV9lbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29ycmVjdFRpbWUodGltZV9lbCk7XG4gICAgfVxuICAgIGNvcnJlY3RUaW1lKGVsKSB7XG4gICAgICAgIGNvbnN0IHRpbWVfc3RyID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRldGltZScpO1xuICAgICAgICBpZiAoIXRpbWVfc3RyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZSA9IGx1eG9uXzEuRGF0ZVRpbWUuZnJvbUlTTyh0aW1lX3N0cik7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdXRpbHNfMS5UaW1lLmZvcm1hdCh0aW1lLCB0aGlzLnNldHRpbmdzKTtcbiAgICB9XG59XG5leHBvcnRzLkNvcnJlY3RUaW1lID0gQ29ycmVjdFRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBEZWxldGVGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ2RlbGZvcm0nKTtcbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVsZXRlX3Bvc3RfcGFzc3dvcmQgPSB1dGlsc18xLkRPTS5xaWQoJ2RlbGV0ZXBvc3RwYXNzd29yZCcpO1xuICAgICAgICBpZiAoZGVsZXRlX3Bvc3RfcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIC8vIExvYWQgZGVsZXRlIHBvc3QgcGFzc3dvcmQuXG4gICAgICAgICAgICBkZWxldGVfcG9zdF9wYXNzd29yZC52YWx1ZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3Bhc3N3b3JkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRlbGV0ZUZvcm0gPSBEZWxldGVGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2FwdGNoYV8xID0gcmVxdWlyZShcIi4vY2FwdGNoYVwiKTtcbmV4cG9ydHMuQ2FwdGNoYSA9IGNhcHRjaGFfMS5DYXB0Y2hhO1xudmFyIGNvcnJlY3RfdGltZV8xID0gcmVxdWlyZShcIi4vY29ycmVjdC10aW1lXCIpO1xuZXhwb3J0cy5Db3JyZWN0VGltZSA9IGNvcnJlY3RfdGltZV8xLkNvcnJlY3RUaW1lO1xudmFyIGRlbGV0ZV9mb3JtXzEgPSByZXF1aXJlKFwiLi9kZWxldGUtZm9ybVwiKTtcbmV4cG9ydHMuRGVsZXRlRm9ybSA9IGRlbGV0ZV9mb3JtXzEuRGVsZXRlRm9ybTtcbnZhciBuZXdfcG9zdHNfZGV0ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL25ldy1wb3N0cy1kZXRlY3RvclwiKTtcbmV4cG9ydHMuTmV3UG9zdHNEZXRlY3RvciA9IG5ld19wb3N0c19kZXRlY3Rvcl8xLk5ld1Bvc3RzRGV0ZWN0b3I7XG52YXIgcG9zdGluZ19mb3JtXzEgPSByZXF1aXJlKFwiLi9wb3N0aW5nLWZvcm1cIik7XG5leHBvcnRzLlBvc3RpbmdGb3JtID0gcG9zdGluZ19mb3JtXzEuUG9zdGluZ0Zvcm07XG52YXIgcG9zdF9yZWZlcmVuY2VfbWFwXzEgPSByZXF1aXJlKFwiLi9wb3N0LXJlZmVyZW5jZS1tYXBcIik7XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBwb3N0X3JlZmVyZW5jZV9tYXBfMS5Qb3N0UmVmZXJlbmNlTWFwO1xudmFyIHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBzZXR0aW5nc18xLlNldHRpbmdzO1xudmFyIHN0eWxlX3N3aXRjaF8xID0gcmVxdWlyZShcIi4vc3R5bGUtc3dpdGNoXCIpO1xuZXhwb3J0cy5TdHlsZVN3aXRjaCA9IHN0eWxlX3N3aXRjaF8xLlN0eWxlU3dpdGNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgTmV3UG9zdHNEZXRlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKiBAdG9kbzogcmVtb3ZlIE11dGF0aW9uT2JzZXJ2ZXIgQVNBUCwgd2l0aCBpbnRlZ3JhdGVkIHRocmVhZCB1cGRhdGluZy4gKi9cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSBtdXRhdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBHZXQgYWRkZWQgcG9zdHMsIGlmIGFueS5cbiAgICAgICAgICAgICAgICAubWFwKG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTGlzdCA9IG11dGF0aW9uLmFkZGVkTm9kZXM7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGVsZW1lbnQgaXMgcG9zdCBpdHNlbGYsIHJldHVybiBpdCxcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSBxdWVyeSBmb3IgZWxlbWVudCBjaGlsZHJlbi5cbiAgICAgICAgICAgICAgICAgICAgLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3N0JylcbiAgICAgICAgICAgICAgICAgICAgPyBbZWxlbWVudF1cbiAgICAgICAgICAgICAgICAgICAgOiB1dGlsc18xLkRPTS5xc2EoJy5wb3N0JywgZWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgIC8vIEZsYXR0ZW4gcG9zdHMgYXJyYXkuXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB0b3RhbC5jb25jYXQoY3VycmVudCksIFtdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gRmxhdHRlbiBwb3N0cyBhcnJheS5cbiAgICAgICAgICAgICAgICAucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwuY29uY2F0KGN1cnJlbnQpLCBbXSk7XG4gICAgICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gU2V0dXAgTXV0YXRpb25PYnNlcnZlci5cbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IHV0aWxzXzEuRE9NLnFzYSgnLnBvc3QnKTtcbiAgICAgICAgICAgIGlmIChwb3N0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgX18xLmV2ZW50QnVzLiRlbWl0KF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgcG9zdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLk5ld1Bvc3RzRGV0ZWN0b3IgPSBOZXdQb3N0c0RldGVjdG9yO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgUG9zdFJlZmVyZW5jZU1hcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9zdHMgPSB7fTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIChwb3N0cykgPT4gcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydChwb3N0KSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZCA9ICtwb3N0LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0LWlkJyk7XG4gICAgICAgIC8vIFN0b3JlIHBvc3QuXG4gICAgICAgIHRoaXMucG9zdHNbcG9zdElkXSA9IHBvc3Q7XG4gICAgICAgIC8vIEdldCByZWZlcmVuY2VzLlxuICAgICAgICBjb25zdCByZWZlcmVuY2VFbGVtZW50cyA9IHV0aWxzXzEuRE9NLnFzYSgnYVtkYXRhLXRhcmdldC1wb3N0LWlkXScsIHBvc3QpO1xuICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gcmVmZXJlbmNlRWxlbWVudHMubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgIGlkOiArZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LXBvc3QtaWQnKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBcHBlbmQgdGhlIGF1dGhvciBuYW1lIG9mIHRoZSByZWZlcmVuY2VkIHBvc3QgdG8gdGhlIHJlZmVyZW5jZSBsaW5rIHRleHQuXG4gICAgICAgIHJlZmVyZW5jZXMuZm9yRWFjaChyZWZlcmVuY2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHRoaXMucG9zdHNbcmVmZXJlbmNlLmlkXTtcbiAgICAgICAgICAgIGlmICghcG9zdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZUF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJlZmVyZW5jZUF1dGhvci5jbGFzc0xpc3QuYWRkKCdwb3N0X19yZWZlcmVuY2UtbGluay1hdXRob3InKTtcbiAgICAgICAgICAgIHJlZmVyZW5jZUF1dGhvci5pbm5lckhUTUwgPSB0aGlzLmdldFBvc3RSZWZMaW5rQXV0aG9ySHRtbChwb3N0KTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHJlZmVyZW5jZS5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IHJlZmVyZW5jZS5lbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShyZWZlcmVuY2VBdXRob3IsIG5leHRTaWJsaW5nKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFBvc3RSZWZMaW5rQXV0aG9ySHRtbChwb3N0KSB7XG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX25hbWUnLCBwb3N0KTtcbiAgICAgICAgY29uc3QgdHJpcGNvZGVFbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX3RyaXBjb2RlJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRWwgPyBuYW1lRWwuaW5uZXJIVE1MIDogJyc7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlID0gdHJpcGNvZGVFbCA/IHRyaXBjb2RlRWwuaW5uZXJIVE1MIDogJyc7XG4gICAgICAgIGlmIChuYW1lLmxlbmd0aCB8fCB0cmlwY29kZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBgKDxzcGFuIGNsYXNzPVwicG9zdF9fcmVmZXJlbmNlLWxpbmstbmFtZVwiPiR7bmFtZX08L3NwYW4+YFxuICAgICAgICAgICAgICAgICsgYDxzcGFuIGNsYXNzPVwicG9zdF9fcmVmZXJlbmNlLWxpbmstdHJpcGNvZGVcIj4ke3RyaXBjb2RlfTwvc3Bhbj4pYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgYDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUG9zdFJlZmVyZW5jZU1hcCA9IFBvc3RSZWZlcmVuY2VNYXA7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0aW5nRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNJblRocmVhZCA9IGZhbHNlO1xuICAgICAgICAvLyBPdmVycmlkZXMgZmlsZSBpbiB0aGUgZm9ybS5cbiAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCB0aGlzLm9uUG9zdHNJbnNlcnRlZC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyID0gdXRpbHNfMS5ET00ucXMoJyNwb3N0aW5nLWZvcm0td3JhcHBlcicpO1xuICAgICAgICBpZiAoIXRoaXMud3JhcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9ybSA9IHV0aWxzXzEuRE9NLnFzKCcjcG9zdGluZy1mb3JtJywgdGhpcy53cmFwcGVyKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdXRpbHNfMS5ET00ucXMoJ1tuYW1lPVwicGFyZW50XCJdJywgdGhpcy5mb3JtKTtcbiAgICAgICAgdGhpcy5pc0luVGhyZWFkID0gK3BhcmVudC52YWx1ZSAhPT0gMDtcbiAgICAgICAgdGhpcy5zdWJqZWN0ID0gdXRpbHNfMS5ET00ucXMoJ1tuYW1lPVwic3ViamVjdFwiXScsIHRoaXMuZm9ybSk7XG4gICAgICAgIHRoaXMubmFtZSA9IHV0aWxzXzEuRE9NLnFzKCdbbmFtZT1cIm5hbWVcIl0nLCB0aGlzLmZvcm0pO1xuICAgICAgICB0aGlzLmZpbGVJbnB1dCA9IHV0aWxzXzEuRE9NLnFzKCdbbmFtZT1cImZpbGVcIl0nLCB0aGlzLmZvcm0pO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB1dGlsc18xLkRPTS5xcygnW25hbWU9XCJtZXNzYWdlXCJdJywgdGhpcy5mb3JtKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB1dGlsc18xLkRPTS5xcygnI3Bvc3RpbmctZm9ybS1zdGF0dXMnLCB0aGlzLmZvcm0pO1xuICAgICAgICB0aGlzLnByZXZpZXcgPSB1dGlsc18xLkRPTS5xcygnI3Bvc3RpbmctZm9ybS1wcmV2aWV3JywgdGhpcy5mb3JtKTtcbiAgICAgICAgdGhpcy5zdWJtaXQgPSB1dGlsc18xLkRPTS5xcygnW3R5cGU9XCJzdWJtaXRcIl0nLCB0aGlzLmZvcm0pO1xuICAgICAgICB0aGlzLmNsb3NlID0gdXRpbHNfMS5ET00ucXMoJyNwb3N0aW5nLWZvcm0tY2xvc2UnLCB0aGlzLmZvcm0pO1xuICAgICAgICB0aGlzLnByZXZpZXdSZW1vdmUgPSB1dGlsc18xLkRPTS5xcygnI3Bvc3RpbmctZm9ybS1wcmV2aWV3LXJlbW92ZScsIHRoaXMuZm9ybSk7XG4gICAgICAgIC8vIExvYWQgc2F2ZWQgbmFtZS5cbiAgICAgICAgY29uc3QgbmFtZSA9IGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLm5hbWUnXTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZS52YWx1ZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2F2ZSBuYW1lIG9uIGNoYW5nZS5cbiAgICAgICAgdGhpcy5uYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlWydwb3N0aW5nLWZvcm0ubmFtZSddID0gdGhpcy5uYW1lLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNldCBmaWxlIG92ZXJyaWRlIG9uIGZpbGUgZmllbGQgY2hhbmdlLlxuICAgICAgICAgICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVJbnB1dC5maWxlcyAmJiB0aGlzLmZpbGVJbnB1dC5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcmV2aWV3KHRoaXMuZmlsZUlucHV0LmZpbGVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZVByZXZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFN1Ym1pdCBmb3JtIG9uIHRoZSBDdHJsK0VudGVyIGluIHRoZSBtZXNzYWdlIGZpZWxkLlxuICAgICAgICB0aGlzLm1lc3NhZ2UuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKChlLmtleUNvZGUgPT0gMTAgfHwgZS5rZXlDb2RlID09IDEzKSAmJiBlLmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFBhc3RlIGZpbGUuXG4gICAgICAgIHRoaXMubWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGUuY2xpcGJvYXJkRGF0YSB8fCBlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZGF0YS5pdGVtcyk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJylcbiAgICAgICAgICAgICAgICAgICAgfHwgaXRlbS50eXBlLnN0YXJ0c1dpdGgoJ2F1ZGlvLycpXG4gICAgICAgICAgICAgICAgICAgIHx8IGl0ZW0udHlwZS5zdGFydHNXaXRoKCd2aWRlby8nKTtcbiAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgIC8vIFNob3cgcHJldmlldy5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcmV2aWV3KHRoaXMuZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXQuXG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gSGFuZGxlIGZvcm0gY2xvc2UuXG4gICAgICAgIHRoaXMuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucmVzdG9yZUZvcm0oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEhhbmRsZSBwcmV2aWV3IHJlbW92ZS5cbiAgICAgICAgdGhpcy5wcmV2aWV3UmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RmlsZUZpZWxkKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblBvc3RzSW5zZXJ0ZWQocG9zdHMpIHtcbiAgICAgICAgcG9zdHMuZm9yRWFjaChwb3N0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZUxpbmtzID0gdXRpbHNfMS5ET00ucXNhKCdhW2RhdGEtcmVmbGlua10nLCBwb3N0KTtcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSArbGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmbGluaycpO1xuICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0luVGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIGZvcm0gdG8gdGhlIHBvc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVGb3JtVG9Qb3N0KHBvc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEluc2VydCBtYXJrdXAuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0KGA+PiR7aWR9XFxuYCwgeyBuZXdMaW5lOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdWJtaXRGb3JtKCkge1xuICAgICAgICAvLyBTdWJtaXQgY3JlYXRlIHBvc3QgcmVxdWVzdC5cbiAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FqYXgvcG9zdC9jcmVhdGVgO1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIC8vIE92ZXJyaWRlIGZpbGUgZnJvbSB0aGUgZm9ybS5cbiAgICAgICAgaWYgKHRoaXMuZmlsZSkge1xuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCB0aGlzLmZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NQZXJjZW50ID0gTWF0aC5jZWlsKGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMCk7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cy50ZXh0Q29udGVudCA9IGBVcGxvYWRpbmcuLi4gJHtwcm9ncmVzc1BlcmNlbnR9JWA7XG4gICAgICAgIH0pO1xuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRW5hYmxlIGZvcm0uXG4gICAgICAgICAgICB0aGlzLnNldEZvcm1TdGF0ZSh7IGVuYWJsZWQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cy50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgZm9ybSB0byB0aGUgaW5pdGlhbCBsb2NhdGlvbi5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVGb3JtKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJblRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIERFIHRocmVhZCB1cGRhdGUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IHV0aWxzXzEuRE9NLnFzKCcuZGUtdGhyLXVwZGF0ZXItbGluaycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gdGhyZWFkLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cy50ZXh0Q29udGVudCA9IGBFcnJvcjogJHtkYXRhLmVycm9yfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cy50ZXh0Q29udGVudCA9IGBFcnJvcjogJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgICAgIC8vIERpc2FibGUgZm9ybS5cbiAgICAgICAgdGhpcy5zZXRGb3JtU3RhdGUoeyBlbmFibGVkOiBmYWxzZSB9KTtcbiAgICB9XG4gICAgc2V0Rm9ybVN0YXRlKHsgZW5hYmxlZCB9KSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gW1xuICAgICAgICAgICAgdGhpcy5zdWJqZWN0LFxuICAgICAgICAgICAgdGhpcy5uYW1lLFxuICAgICAgICAgICAgdGhpcy5maWxlSW5wdXQsXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UsXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdCxcbiAgICAgICAgXTtcbiAgICAgICAgY29udHJvbHMuZmlsdGVyKGNvbnRyb2wgPT4gY29udHJvbClcbiAgICAgICAgICAgIC5mb3JFYWNoKGNvbnRyb2wgPT4ge1xuICAgICAgICAgICAgY29udHJvbC5kaXNhYmxlZCA9ICFlbmFibGVkO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVzZXRGb3JtKCkge1xuICAgICAgICAvLyBSZXNldCBub3QgcmVxdWlyZWQgZm9yIHRoZSBuYW1lIGZpZWxkLlxuICAgICAgICBjb25zdCBjb250cm9scyA9IFtcbiAgICAgICAgICAgIHRoaXMuc3ViamVjdCxcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSxcbiAgICAgICAgXTtcbiAgICAgICAgY29udHJvbHMuZmlsdGVyKGNvbnRyb2wgPT4gY29udHJvbClcbiAgICAgICAgICAgIC5mb3JFYWNoKGNvbnRyb2wgPT4ge1xuICAgICAgICAgICAgY29udHJvbC52YWx1ZSA9ICcnO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRmlsZSBmaWVsZCBuZWVkcyBzcGVjaWFsIGhhbmRsaW5nLlxuICAgICAgICB0aGlzLnJlc2V0RmlsZUZpZWxkKCk7XG4gICAgfVxuICAgIHJlc2V0RmlsZUZpZWxkKCkge1xuICAgICAgICBpZiAodGhpcy5maWxlSW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICB0aGlzLmZpbGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgdGhpcy5maWxlSW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgICAgICB0aGlzLmhpZGVQcmV2aWV3KCk7XG4gICAgfVxuICAgIG1vdmVGb3JtVG9Qb3N0KHBvc3QpIHtcbiAgICAgICAgdGhpcy5mb3JtLnN0eWxlLm1hcmdpbkxlZnQgPSAnMCc7XG4gICAgICAgIHRoaXMuY2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHBvc3QucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5mb3JtLCBwb3N0Lm5leHRTaWJsaW5nKTtcbiAgICB9XG4gICAgcmVzdG9yZUZvcm0oKSB7XG4gICAgICAgIHRoaXMuZm9ybS5zdHlsZS5tYXJnaW5MZWZ0ID0gJ2F1dG8nO1xuICAgICAgICB0aGlzLmNsb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLndyYXBwZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZm9ybSwgbnVsbCk7XG4gICAgICAgIHRoaXMud3JhcHBlci5zY3JvbGxJbnRvVmlldygpO1xuICAgIH1cbiAgICBzaG93UHJldmlldyhmaWxlKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSB1dGlsc18xLkRPTS5xcygnI3Bvc3RpbmctZm9ybS1wcmV2aWV3LWltYWdlJywgdGhpcy5wcmV2aWV3KTtcbiAgICAgICAgICAgIGlmICghaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltYWdlLmlkID0gJ3Bvc3RpbmctZm9ybS1wcmV2aWV3LWltYWdlJztcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdwb3N0aW5nLWZvcm1fX3ByZXZpZXctaW1hZ2UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXcuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfVxuICAgIGhpZGVQcmV2aWV3KCkge1xuICAgICAgICB0aGlzLnByZXZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICAgIGluc2VydChzdHIsIHsgbmV3TGluZSB9ID0geyBuZXdMaW5lOiBmYWxzZSB9KSB7XG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLm1lc3NhZ2UudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBiZWdpbiA9IHRoaXMubWVzc2FnZS5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IHRoaXMubWVzc2FnZS5zZWxlY3Rpb25FbmQ7XG4gICAgICAgICAgICBjb25zdCBiZWZvcmUgPSBjb250ZW50LnN1YnN0cmluZygwLCBiZWdpbik7XG4gICAgICAgICAgICBjb25zdCBhZnRlciA9IGNvbnRlbnQuc3Vic3RyaW5nKGVuZCk7XG4gICAgICAgICAgICBjb25zdCBpbnNlcnROZXdMaW5lID0gbmV3TGluZVxuICAgICAgICAgICAgICAgICYmIGJlZm9yZS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgJiYgIWJlZm9yZS5lbmRzV2l0aCgnXFxuJylcbiAgICAgICAgICAgICAgICAmJiAhc3RyLnN0YXJ0c1dpdGgoJ1xcbicpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnZhbHVlID0gW1xuICAgICAgICAgICAgICAgIGJlZm9yZSxcbiAgICAgICAgICAgICAgICBpbnNlcnROZXdMaW5lID8gJ1xcbicgOiAnJyxcbiAgICAgICAgICAgICAgICBzdHIsXG4gICAgICAgICAgICAgICAgYWZ0ZXIsXG4gICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGJlZ2luICsgc3RyLmxlbmd0aCArIChpbnNlcnROZXdMaW5lID8gMSA6IDApO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnNlbGVjdGlvblN0YXJ0ID0gcG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2Uuc2VsZWN0aW9uRW5kID0gcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9zdGluZ0Zvcm0gPSBQb3N0aW5nRm9ybTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbHV4b25fMSA9IHJlcXVpcmUoXCJsdXhvblwiKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIExvYWQgc2V0dGluZ3MgZnJvbSBhIGNvb2tpZVxuICAgICAgICB0aGlzLnNldHRpbmdzID0gSlNPTi5wYXJzZSh1dGlsc18xLkNvb2tpZS5nZXQoJ3RpbnlpYl9zZXR0aW5ncycsICd7fScpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzX2Zvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3NldHRpbmdzX2Zvcm0nKTtcbiAgICAgICAgaWYgKCFzZXR0aW5nc19mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhdHVzID0gdXRpbHNfMS5ET00ucWlkKCdzdGF0dXMnKTtcbiAgICAgICAgY29uc3QgdGltZV9sb2NhbGVfY3VzdG9tID0gdXRpbHNfMS5ET00ucWlkKCd0aW1lX2xvY2FsZV9jdXN0b20nKTtcbiAgICAgICAgY29uc3QgdGltZV9sb2NhbGVfY3VzdG9tX3ZhbHVlID0gdXRpbHNfMS5ET00ucWlkKCd0aW1lX2xvY2FsZV9jdXN0b21fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgdGltZV9mb3JtYXRfY3VzdG9tID0gdXRpbHNfMS5ET00ucWlkKCd0aW1lX2Zvcm1hdF9jdXN0b20nKTtcbiAgICAgICAgY29uc3QgdGltZV9mb3JtYXRfY3VzdG9tX3ZhbHVlID0gdXRpbHNfMS5ET00ucWlkKCd0aW1lX2Zvcm1hdF9jdXN0b21fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgdGltZV96b25lX2ZpeGVkID0gdXRpbHNfMS5ET00ucWlkKCd0aW1lX3pvbmVfZml4ZWQnKTtcbiAgICAgICAgY29uc3QgdGltZV96b25lX2ZpeGVkX29mZnNldCA9IHV0aWxzXzEuRE9NLnFpZCgndGltZV96b25lX2ZpeGVkX29mZnNldCcpO1xuICAgICAgICBjb25zdCB0aW1lX2N1cnJlbnRfZm9ybWF0ID0gdXRpbHNfMS5ET00ucWlkKCd0aW1lX2N1cnJlbnRfZm9ybWF0Jyk7XG4gICAgICAgIC8vIFNldCB0aGUgaW5pdGlhbCBzZXR0aW5ncyBmb3JtIHN0YXRlXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmZvcm1fcHJldmlld19hbGlnbikge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHV0aWxzXzEuRE9NLnFzKGBpbnB1dFtuYW1lPVwiZm9ybV9wcmV2aWV3X2FsaWduXCJdW3ZhbHVlPVwiJHt0aGlzLnNldHRpbmdzLmZvcm1fcHJldmlld19hbGlnbn1cIl1gKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy50aW1lX2xvY2FsZSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHV0aWxzXzEuRE9NLnFzKGBpbnB1dFtuYW1lPVwidGltZV9sb2NhbGVcIl1bdmFsdWU9XCIke3RoaXMuc2V0dGluZ3MudGltZV9sb2NhbGV9XCJdYCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudGltZV9mb3JtYXQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB1dGlsc18xLkRPTS5xcyhgaW5wdXRbbmFtZT1cInRpbWVfZm9ybWF0XCJdW3ZhbHVlPVwiJHt0aGlzLnNldHRpbmdzLnRpbWVfZm9ybWF0fVwiXWApO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLnRpbWVfem9uZSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHV0aWxzXzEuRE9NLnFzKGBpbnB1dFtuYW1lPVwidGltZV96b25lXCJdW3ZhbHVlPVwiJHt0aGlzLnNldHRpbmdzLnRpbWVfem9uZX1cIl1gKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aW1lX2xvY2FsZV9jdXN0b21fdmFsdWUudmFsdWUgPSB0aGlzLnNldHRpbmdzLnRpbWVfbG9jYWxlX2N1c3RvbV92YWx1ZSB8fCAnJztcbiAgICAgICAgdGltZV9mb3JtYXRfY3VzdG9tX3ZhbHVlLnZhbHVlID0gdGhpcy5zZXR0aW5ncy50aW1lX2Zvcm1hdF9jdXN0b21fdmFsdWUgfHwgJyc7XG4gICAgICAgIHRpbWVfem9uZV9maXhlZF9vZmZzZXQudmFsdWUgPSAodGhpcy5zZXR0aW5ncy50aW1lX3pvbmVfZml4ZWRfb2Zmc2V0IHx8IDApLnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIENoZWNrIGEgcmFkaW8gYnV0dG9uIG9uIGEgY29ycmVzcG9uZGluZyB0ZXh0IGZpZWxkIGNsaWNrXG4gICAgICAgIGlmICh0aW1lX2xvY2FsZV9jdXN0b20gJiYgdGltZV9sb2NhbGVfY3VzdG9tX3ZhbHVlKSB7XG4gICAgICAgICAgICB0aW1lX2xvY2FsZV9jdXN0b21fdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRpbWVfbG9jYWxlX2N1c3RvbS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lX2Zvcm1hdF9jdXN0b20gJiYgdGltZV9mb3JtYXRfY3VzdG9tX3ZhbHVlKSB7XG4gICAgICAgICAgICB0aW1lX2Zvcm1hdF9jdXN0b21fdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRpbWVfZm9ybWF0X2N1c3RvbS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lX3pvbmVfZml4ZWQgJiYgdGltZV96b25lX2ZpeGVkX29mZnNldCkge1xuICAgICAgICAgICAgdGltZV96b25lX2ZpeGVkX29mZnNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGltZV96b25lX2ZpeGVkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2F2ZSB0aGUgc2V0dGluZ3MgZm9ybSBzdGF0ZSBpbiBhIGNvb2tpZVxuICAgICAgICBzZXR0aW5nc19mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBleHBpcmF0aW9uX2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgZXhwaXJhdGlvbl9kYXRlLnNldFRpbWUoZXhwaXJhdGlvbl9kYXRlLmdldFRpbWUoKSArIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmdldEZvcm1WYWx1ZXMoKTtcbiAgICAgICAgICAgIHV0aWxzXzEuQ29va2llLnNldCgndGlueWliX3NldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpLCBleHBpcmF0aW9uX2RhdGUpO1xuICAgICAgICAgICAgLy8gSW5kaWNhdGUgdGhhdCBzZXR0aW5ncyBhcmUgc2F2ZWRcbiAgICAgICAgICAgIGlmIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cy5pbm5lckhUTUwgPSAnU2V0dGluZ3Mgc2F2ZWQuJztcbiAgICAgICAgICAgICAgICB9LCAxMDAwIC8gMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBTaG93IHRoZSBjdXJyZW50IHRpbWUgZm9ybWF0XG4gICAgICAgIGNvbnN0IHNob3dUaW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRpbWVfY3VycmVudF9mb3JtYXQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gbHV4b25fMS5EYXRlVGltZS5mcm9tSlNEYXRlKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuZ2V0Rm9ybVZhbHVlcygpO1xuICAgICAgICAgICAgICAgICAgICB0aW1lX2N1cnJlbnRfZm9ybWF0LmlubmVySFRNTCA9IHV0aWxzXzEuVGltZS5mb3JtYXQodGltZSwgc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZV9jdXJyZW50X2Zvcm1hdC5pbm5lckhUTUwgPSAnSW52YWxpZCBmb3JtYXQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc2hvd1RpbWUoKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoc2hvd1RpbWUsIDEwMDApO1xuICAgIH1cbiAgICBnZXRGb3JtVmFsdWVzKCkge1xuICAgICAgICBjb25zdCBmb3JtX3ByZXZpZXdfYWxpZ24gPSB1dGlsc18xLkRPTS5xcygnaW5wdXRbbmFtZT1cImZvcm1fcHJldmlld19hbGlnblwiXTpjaGVja2VkJyk7XG4gICAgICAgIGNvbnN0IHRpbWVfbG9jYWxlID0gdXRpbHNfMS5ET00ucXMoJ2lucHV0W25hbWU9XCJ0aW1lX2xvY2FsZVwiXTpjaGVja2VkJyk7XG4gICAgICAgIGNvbnN0IHRpbWVfbG9jYWxlX2N1c3RvbV92YWx1ZSA9IHV0aWxzXzEuRE9NLnFpZCgndGltZV9sb2NhbGVfY3VzdG9tX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHRpbWVfZm9ybWF0ID0gdXRpbHNfMS5ET00ucXMoJ2lucHV0W25hbWU9XCJ0aW1lX2Zvcm1hdFwiXTpjaGVja2VkJyk7XG4gICAgICAgIGNvbnN0IHRpbWVfZm9ybWF0X2N1c3RvbV92YWx1ZSA9IHV0aWxzXzEuRE9NLnFpZCgndGltZV9mb3JtYXRfY3VzdG9tX3ZhbHVlJyk7XG4gICAgICAgIGNvbnN0IHRpbWVfem9uZSA9IHV0aWxzXzEuRE9NLnFzKCdpbnB1dFtuYW1lPVwidGltZV96b25lXCJdOmNoZWNrZWQnKTtcbiAgICAgICAgY29uc3QgdGltZV96b25lX2ZpeGVkX29mZnNldCA9IHV0aWxzXzEuRE9NLnFpZCgndGltZV96b25lX2ZpeGVkX29mZnNldCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybV9wcmV2aWV3X2FsaWduOiBmb3JtX3ByZXZpZXdfYWxpZ24udmFsdWUsXG4gICAgICAgICAgICB0aW1lX2xvY2FsZTogdGltZV9sb2NhbGUudmFsdWUsXG4gICAgICAgICAgICB0aW1lX2xvY2FsZV9jdXN0b21fdmFsdWU6IHRpbWVfbG9jYWxlX2N1c3RvbV92YWx1ZS52YWx1ZSxcbiAgICAgICAgICAgIHRpbWVfem9uZTogdGltZV96b25lLnZhbHVlLFxuICAgICAgICAgICAgdGltZV96b25lX2ZpeGVkX29mZnNldDogTnVtYmVyKHRpbWVfem9uZV9maXhlZF9vZmZzZXQudmFsdWUpLFxuICAgICAgICAgICAgdGltZV9mb3JtYXQ6IHRpbWVfZm9ybWF0LnZhbHVlLFxuICAgICAgICAgICAgdGltZV9mb3JtYXRfY3VzdG9tX3ZhbHVlOiB0aW1lX2Zvcm1hdF9jdXN0b21fdmFsdWUudmFsdWUsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5TZXR0aW5ncyA9IFNldHRpbmdzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgU3R5bGVTd2l0Y2gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IHt9O1xuICAgICAgICAvLyBQYXJzZSBzZWxlY3RhYmxlIHN0eWxlcyBmcm9tIDxoZWFkPlxuICAgICAgICBjb25zdCBzdHlsZXMgPSB1dGlsc18xLkRPTS5xc2EoJ2xpbmtbdGl0bGVdJyk7XG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gc3R5bGUudGl0bGU7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBzdHlsZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzW3RpdGxlXSA9IHVybDtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gR2V0IHNlbGVjdGVkIHN0eWxlXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX3N0eWxlID0gdXRpbHNfMS5Db29raWUuZ2V0KCd0aW55aWJfc3R5bGUnLCAnU3ludGh3YXZlJyk7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoc2VsZWN0ZWRfc3R5bGUpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVfc3dpdGNoZXIgPSB1dGlsc18xLkRPTS5xaWQoJ3N0eWxlLXN3aXRjaGVyJyk7XG4gICAgICAgIGlmIChzdHlsZV9zd2l0Y2hlcikge1xuICAgICAgICAgICAgLy8gUG9wdWxhdGUgc3R5bGUgc3dpdGNoZXIgd2lkZ2V0XG4gICAgICAgICAgICBjb25zdCBzdHlsZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxlcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gc3R5bGVzW2ldO1xuICAgICAgICAgICAgICAgIHN0eWxlX3N3aXRjaGVyLmlubmVySFRNTCArPSBgPG9wdGlvbiBjbGFzcz1cInN0eWxlLXN3aXRjaGVyX19vcHRpb25cIiB2YWx1ZT1cIiR7dGl0bGV9XCI+JHt0aXRsZX08L29wdGlvbj5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IHN0eWxlIGNoYW5nZSBjYWxsYmFja1xuICAgICAgICAgICAgc3R5bGVfc3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3R5bGUoc3R5bGVfc3dpdGNoZXIudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0U3R5bGUoc3R5bGUpIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHV0aWxzXzEuRE9NLnFzKCdoZWFkJyk7XG4gICAgICAgIC8vIElmIG5vIDxoZWFkPiBlbGVtZW50LCBkbyBub3RoaW5nXG4gICAgICAgIGlmICghaGVhZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX3N0eWxlID0gdXRpbHNfMS5ET00ucXMoJ2xpbmtbZGF0YS1zZWxlY3RlZF0nKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkX3N0eWxlKSB7XG4gICAgICAgICAgICAvLyBJZiBzdHlsZSBhbHJlYWR5IHNlbGVjdGVkLCBkbyBub3RoaW5nXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRfc3R5bGUudGl0bGUgPT09IHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzbHkgc2VsZWN0ZWQgc3R5bGUgZnJvbSA8aGVhZD5cbiAgICAgICAgICAgIHNlbGVjdGVkX3N0eWxlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBjdXJyZW50bHkgc2VsZWN0ZWQgc3R5bGUgdG8gPGhlYWQ+XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuc3R5bGVzW3N0eWxlXTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgbGluay5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgbGluay50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgLy8gU2F2ZSBzZWxlY3RlZCBzdHlsZVxuICAgICAgICBjb25zdCBleHBpcmF0aW9uX2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBleHBpcmF0aW9uX2RhdGUuc2V0VGltZShleHBpcmF0aW9uX2RhdGUuZ2V0VGltZSgpICsgMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHV0aWxzXzEuQ29va2llLnNldCgndGlueWliX3N0eWxlJywgc3R5bGUsIGV4cGlyYXRpb25fZGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHlsZVN3aXRjaCA9IFN0eWxlU3dpdGNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGV2ZW50QnVzID0gbmV3IHZ1ZV8xLmRlZmF1bHQoKTtcbmV4cG9ydHMuZXZlbnRCdXMgPSBldmVudEJ1cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEV2ZW50cztcbihmdW5jdGlvbiAoRXZlbnRzKSB7XG4gICAgRXZlbnRzW1wiUmVhZHlcIl0gPSBcInJlYWR5XCI7XG4gICAgRXZlbnRzW1wiUG9zdHNJbnNlcnRlZFwiXSA9IFwicG9zdHNfaW5zZXJ0ZWRcIjtcbiAgICBFdmVudHNbXCJQb3N0Q3JlYXRlZFwiXSA9IFwicG9zdF9jcmVhdGVkXCI7XG4gICAgRXZlbnRzW1wiSW5zZXJ0TWFya3VwXCJdID0gXCJpbnNlcnRfbWFya3VwXCI7XG59KShFdmVudHMgPSBleHBvcnRzLkV2ZW50cyB8fCAoZXhwb3J0cy5FdmVudHMgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZXZlbnRfYnVzXzEgPSByZXF1aXJlKFwiLi9ldmVudC1idXNcIik7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRfYnVzXzEuZXZlbnRCdXM7XG52YXIgZXZlbnRzXzEgPSByZXF1aXJlKFwiLi9ldmVudHNcIik7XG5leHBvcnRzLkV2ZW50cyA9IGV2ZW50c18xLkV2ZW50cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29va2llIHtcbiAgICBzdGF0aWMgZ2V0KG5hbWUsIF9kZWZhdWx0ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb29raWVfc3RyID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcbiAgICAgICAgY29uc3QgY29va2llX3BhcnRzID0gY29va2llX3N0ci5zcGxpdChgOyAke25hbWV9PWApO1xuICAgICAgICBpZiAoY29va2llX3BhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gY29va2llX3BhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWVfZW5jKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQobmFtZSwgdmFsdWUsIGV4cGlyYXRpb24pIHtcbiAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9zdHIgPSBleHBpcmF0aW9uLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWVfZW5jfTsgcGF0aD0vOyBleHBpcmVzPSR7ZXhwaXJhdGlvbl9zdHJ9YDtcbiAgICB9XG59XG5leHBvcnRzLkNvb2tpZSA9IENvb2tpZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRE9NIHtcbiAgICBzdGF0aWMgcWlkKGlkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICAgIHN0YXRpYyBxcyhzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuICAgIHN0YXRpYyBxc2Eoc2VsZWN0b3IsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRMaXN0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRMaXN0KTtcbiAgICB9XG59XG5leHBvcnRzLkRPTSA9IERPTTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvb2tpZV8xID0gcmVxdWlyZShcIi4vY29va2llXCIpO1xuZXhwb3J0cy5Db29raWUgPSBjb29raWVfMS5Db29raWU7XG52YXIgZG9tXzEgPSByZXF1aXJlKFwiLi9kb21cIik7XG5leHBvcnRzLkRPTSA9IGRvbV8xLkRPTTtcbnZhciB0aW1lXzEgPSByZXF1aXJlKFwiLi90aW1lXCIpO1xuZXhwb3J0cy5UaW1lID0gdGltZV8xLlRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFRpbWUge1xuICAgIHN0YXRpYyBmb3JtYXQodGltZSwgc2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gc2V0dGluZ3MudGltZV9sb2NhbGU7XG4gICAgICAgIGNvbnN0IGxvY2FsZV92YWx1ZSA9IHNldHRpbmdzLnRpbWVfbG9jYWxlX2N1c3RvbV92YWx1ZTtcbiAgICAgICAgY29uc3Qgem9uZSA9IHNldHRpbmdzLnRpbWVfem9uZTtcbiAgICAgICAgY29uc3Qgem9uZV9maXhlZF9vZmZzZXQgPSBzZXR0aW5ncy50aW1lX3pvbmVfZml4ZWRfb2Zmc2V0O1xuICAgICAgICBjb25zdCBmb3JtYXQgPSBzZXR0aW5ncy50aW1lX2Zvcm1hdDtcbiAgICAgICAgY29uc3QgZm9ybWF0X3ZhbHVlID0gc2V0dGluZ3MudGltZV9mb3JtYXRfY3VzdG9tX3ZhbHVlO1xuICAgICAgICBpZiAobG9jYWxlID09PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgdGltZSA9IHRpbWUuc2V0TG9jYWxlKGxvY2FsZV92YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHpvbmUgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldF9zdHIgPSAnVVRDJyArICh6b25lX2ZpeGVkX29mZnNldCA+PSAwID8gJysnIDogJycpICsgem9uZV9maXhlZF9vZmZzZXQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRpbWUgPSB0aW1lLnNldFpvbmUob2Zmc2V0X3N0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lLnRvRm9ybWF0KGZvcm1hdF92YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdCgnZC5MTC55eXl5IEhIOm1tOnNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRpbWUgPSBUaW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBsdXhvbjsiLCJtb2R1bGUuZXhwb3J0cyA9IFZ1ZTsiXSwic291cmNlUm9vdCI6IiJ9