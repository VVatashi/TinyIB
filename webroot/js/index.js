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

/***/ "./components/checkbox.ts?vue&type=script&lang=ts&":
/*!*********************************************************!*\
  !*** ./components/checkbox.ts?vue&type=script&lang=ts& ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_checkbox_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/ts-loader!./checkbox.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js!./components/checkbox.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_checkbox_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_checkbox_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_checkbox_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_checkbox_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_checkbox_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/checkbox.vue":
/*!*********************************!*\
  !*** ./components/checkbox.vue ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_vue_vue_type_template_id_3d8a767e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.vue?vue&type=template&id=3d8a767e& */ "./components/checkbox.vue?vue&type=template&id=3d8a767e&");
/* harmony import */ var _checkbox_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.ts?vue&type=script&lang=ts& */ "./components/checkbox.ts?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _checkbox_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _checkbox_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _checkbox_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkbox_vue_vue_type_template_id_3d8a767e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checkbox_vue_vue_type_template_id_3d8a767e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/checkbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/checkbox.vue?vue&type=template&id=3d8a767e&":
/*!****************************************************************!*\
  !*** ./components/checkbox.vue?vue&type=template&id=3d8a767e& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_template_id_3d8a767e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./checkbox.vue?vue&type=template&id=3d8a767e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/checkbox.vue?vue&type=template&id=3d8a767e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_template_id_3d8a767e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_template_id_3d8a767e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/radio-button.ts?vue&type=script&lang=ts&":
/*!*************************************************************!*\
  !*** ./components/radio-button.ts?vue&type=script&lang=ts& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_radio_button_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/ts-loader!./radio-button.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js!./components/radio-button.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_radio_button_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_radio_button_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_radio_button_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_radio_button_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_radio_button_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/radio-button.vue":
/*!*************************************!*\
  !*** ./components/radio-button.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_button_vue_vue_type_template_id_fdd97402___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-button.vue?vue&type=template&id=fdd97402& */ "./components/radio-button.vue?vue&type=template&id=fdd97402&");
/* harmony import */ var _radio_button_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-button.ts?vue&type=script&lang=ts& */ "./components/radio-button.ts?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _radio_button_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _radio_button_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _radio_button_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _radio_button_vue_vue_type_template_id_fdd97402___WEBPACK_IMPORTED_MODULE_0__["render"],
  _radio_button_vue_vue_type_template_id_fdd97402___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/radio-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/radio-button.vue?vue&type=template&id=fdd97402&":
/*!********************************************************************!*\
  !*** ./components/radio-button.vue?vue&type=template&id=fdd97402& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_button_vue_vue_type_template_id_fdd97402___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./radio-button.vue?vue&type=template&id=fdd97402& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/radio-button.vue?vue&type=template&id=fdd97402&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_button_vue_vue_type_template_id_fdd97402___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_radio_button_vue_vue_type_template_id_fdd97402___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/settings-form.ts?vue&type=script&lang=ts&":
/*!**************************************************************!*\
  !*** ./components/settings-form.ts?vue&type=script&lang=ts& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_settings_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/ts-loader!./settings-form.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js!./components/settings-form.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_settings_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_settings_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_settings_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_settings_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_settings_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/settings-form.vue":
/*!**************************************!*\
  !*** ./components/settings-form.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_form_vue_vue_type_template_id_6451c803___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-form.vue?vue&type=template&id=6451c803& */ "./components/settings-form.vue?vue&type=template&id=6451c803&");
/* harmony import */ var _settings_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-form.ts?vue&type=script&lang=ts& */ "./components/settings-form.ts?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _settings_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _settings_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _settings_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _settings_form_vue_vue_type_template_id_6451c803___WEBPACK_IMPORTED_MODULE_0__["render"],
  _settings_form_vue_vue_type_template_id_6451c803___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/settings-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/settings-form.vue?vue&type=template&id=6451c803&":
/*!*********************************************************************!*\
  !*** ./components/settings-form.vue?vue&type=template&id=6451c803& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_form_vue_vue_type_template_id_6451c803___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./settings-form.vue?vue&type=template&id=6451c803& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/settings-form.vue?vue&type=template&id=6451c803&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_form_vue_vue_type_template_id_6451c803___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_form_vue_vue_type_template_id_6451c803___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/settings-form/common.ts?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./components/settings-form/common.ts?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_common_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader!./common.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js!./components/settings-form/common.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_common_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_common_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_common_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_common_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_common_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/settings-form/common.vue":
/*!*********************************************!*\
  !*** ./components/settings-form/common.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_vue_vue_type_template_id_189266b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.vue?vue&type=template&id=189266b2& */ "./components/settings-form/common.vue?vue&type=template&id=189266b2&");
/* harmony import */ var _common_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.ts?vue&type=script&lang=ts& */ "./components/settings-form/common.ts?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _common_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _common_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _common_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _common_vue_vue_type_template_id_189266b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _common_vue_vue_type_template_id_189266b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/settings-form/common.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/settings-form/common.vue?vue&type=template&id=189266b2&":
/*!****************************************************************************!*\
  !*** ./components/settings-form/common.vue?vue&type=template&id=189266b2& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_common_vue_vue_type_template_id_189266b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./common.vue?vue&type=template&id=189266b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/settings-form/common.vue?vue&type=template&id=189266b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_common_vue_vue_type_template_id_189266b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_common_vue_vue_type_template_id_189266b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/settings-form/form.ts?vue&type=script&lang=ts&":
/*!*******************************************************************!*\
  !*** ./components/settings-form/form.ts?vue&type=script&lang=ts& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader!./form.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js!./components/settings-form/form.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/settings-form/form.vue":
/*!*******************************************!*\
  !*** ./components/settings-form/form.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_2c889800___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=2c889800& */ "./components/settings-form/form.vue?vue&type=template&id=2c889800&");
/* harmony import */ var _form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.ts?vue&type=script&lang=ts& */ "./components/settings-form/form.ts?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _form_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_2c889800___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_2c889800___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/settings-form/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/settings-form/form.vue?vue&type=template&id=2c889800&":
/*!**************************************************************************!*\
  !*** ./components/settings-form/form.vue?vue&type=template&id=2c889800& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_2c889800___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./form.vue?vue&type=template&id=2c889800& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/settings-form/form.vue?vue&type=template&id=2c889800&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_2c889800___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_template_id_2c889800___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/settings-form/time.ts?vue&type=script&lang=ts&":
/*!*******************************************************************!*\
  !*** ./components/settings-form/time.ts?vue&type=script&lang=ts& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_time_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader!./time.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js!./components/settings-form/time.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_time_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_time_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_time_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_time_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_time_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/settings-form/time.vue":
/*!*******************************************!*\
  !*** ./components/settings-form/time.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time_vue_vue_type_template_id_51adcd89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.vue?vue&type=template&id=51adcd89& */ "./components/settings-form/time.vue?vue&type=template&id=51adcd89&");
/* harmony import */ var _time_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time.ts?vue&type=script&lang=ts& */ "./components/settings-form/time.ts?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _time_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _time_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _time_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _time_vue_vue_type_template_id_51adcd89___WEBPACK_IMPORTED_MODULE_0__["render"],
  _time_vue_vue_type_template_id_51adcd89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/settings-form/time.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/settings-form/time.vue?vue&type=template&id=51adcd89&":
/*!**************************************************************************!*\
  !*** ./components/settings-form/time.vue?vue&type=template&id=51adcd89& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_time_vue_vue_type_template_id_51adcd89___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./time.vue?vue&type=template&id=51adcd89& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/settings-form/time.vue?vue&type=template&id=51adcd89&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_time_vue_vue_type_template_id_51adcd89___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_time_vue_vue_type_template_id_51adcd89___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/ts-loader/index.js!./components/checkbox.ts?vue&type=script&lang=ts&":
/*!**********************************************************************************!*\
  !*** ./node_modules/ts-loader!./components/checkbox.ts?vue&type=script&lang=ts& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
exports.default = vue_1.default.extend({
    model: {
        prop: 'checked',
        event: 'change',
    },
    props: {
        labelClass: {
            type: String,
            default: '',
        },
        inputClass: {
            type: String,
            default: '',
        },
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


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./components/radio-button.ts?vue&type=script&lang=ts&":
/*!**************************************************************************************!*\
  !*** ./node_modules/ts-loader!./components/radio-button.ts?vue&type=script&lang=ts& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
exports.default = vue_1.default.extend({
    model: {
        prop: 'selectedValue',
        event: 'change',
    },
    props: {
        labelClass: {
            type: String,
            default: '',
        },
        inputClass: {
            type: String,
            default: '',
        },
        value: String,
        selectedValue: String,
    },
    methods: {
        onInput(e) {
            this.$emit('change', this.value);
        },
    },
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./components/settings-form.ts?vue&type=script&lang=ts&":
/*!***************************************************************************************!*\
  !*** ./node_modules/ts-loader!./components/settings-form.ts?vue&type=script&lang=ts& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
const common_vue_1 = __importDefault(__webpack_require__(/*! ./settings-form/common.vue */ "./components/settings-form/common.vue"));
const form_vue_1 = __importDefault(__webpack_require__(/*! ./settings-form/form.vue */ "./components/settings-form/form.vue"));
const time_vue_1 = __importDefault(__webpack_require__(/*! ./settings-form/time.vue */ "./components/settings-form/time.vue"));
const ts_1 = __webpack_require__(/*! ../ts */ "./ts/index.ts");
exports.default = vue_1.default.extend({
    data() {
        return {
            settings: null,
            tab: 'common',
            status: '',
        };
    },
    created() {
        this.settings = ts_1.SettingsManager.load();
    },
    methods: {
        saveSettings() {
            ts_1.SettingsManager.save(this.settings);
            // Indicate that settings are saved.
            this.status = '';
            setTimeout(() => {
                this.status = 'Settings saved.';
            }, 1000 / 3);
        },
    },
    components: {
        'x-common': common_vue_1.default,
        'x-form': form_vue_1.default,
        'x-time': time_vue_1.default,
    },
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./components/settings-form/common.ts?vue&type=script&lang=ts&":
/*!**********************************************************************************************!*\
  !*** ./node_modules/ts-loader!./components/settings-form/common.ts?vue&type=script&lang=ts& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
const checkbox_vue_1 = __importDefault(__webpack_require__(/*! ../checkbox.vue */ "./components/checkbox.vue"));
const radio_button_vue_1 = __importDefault(__webpack_require__(/*! ../radio-button.vue */ "./components/radio-button.vue"));
exports.default = vue_1.default.extend({
    props: ['settings'],
    components: {
        'x-checkbox': checkbox_vue_1.default,
        'x-radio-button': radio_button_vue_1.default,
    },
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./components/settings-form/form.ts?vue&type=script&lang=ts&":
/*!********************************************************************************************!*\
  !*** ./node_modules/ts-loader!./components/settings-form/form.ts?vue&type=script&lang=ts& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
const checkbox_vue_1 = __importDefault(__webpack_require__(/*! ../checkbox.vue */ "./components/checkbox.vue"));
const radio_button_vue_1 = __importDefault(__webpack_require__(/*! ../radio-button.vue */ "./components/radio-button.vue"));
exports.default = vue_1.default.extend({
    props: ['settings'],
    data() {
        return {
            newReplace: {
                pattern: '',
                replace: '',
            },
        };
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
    },
    components: {
        'x-checkbox': checkbox_vue_1.default,
        'x-radio-button': radio_button_vue_1.default,
    },
});


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./components/settings-form/time.ts?vue&type=script&lang=ts&":
/*!********************************************************************************************!*\
  !*** ./node_modules/ts-loader!./components/settings-form/time.ts?vue&type=script&lang=ts& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
const checkbox_vue_1 = __importDefault(__webpack_require__(/*! ../checkbox.vue */ "./components/checkbox.vue"));
const radio_button_vue_1 = __importDefault(__webpack_require__(/*! ../radio-button.vue */ "./components/radio-button.vue"));
const utils_1 = __webpack_require__(/*! ../../ts/utils */ "./ts/utils/index.ts");
exports.default = vue_1.default.extend({
    props: ['settings'],
    data() {
        return {
            time: '',
        };
    },
    created() {
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
    },
    components: {
        'x-checkbox': checkbox_vue_1.default,
        'x-radio-button': radio_button_vue_1.default,
    },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/checkbox.vue?vue&type=template&id=3d8a767e&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/checkbox.vue?vue&type=template&id=3d8a767e& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    { class: _vm.labelClass },
    [
      _c("input", {
        class: _vm.inputClass,
        attrs: { type: "checkbox" },
        domProps: { value: _vm.value, checked: _vm.checked },
        on: { change: _vm.onInput }
      }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/radio-button.vue?vue&type=template&id=fdd97402&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/radio-button.vue?vue&type=template&id=fdd97402& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    { class: _vm.labelClass },
    [
      _c("input", {
        class: _vm.inputClass,
        attrs: { type: "radio" },
        domProps: { value: _vm.value, checked: _vm.value == _vm.selectedValue },
        on: { change: _vm.onInput }
      }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/settings-form.vue?vue&type=template&id=6451c803&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/settings-form.vue?vue&type=template&id=6451c803& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "content__settings-form settings-form",
      attrs: { id: "settings_form" }
    },
    [
      _c("ul", { staticClass: "settings-form__tabs" }, [
        _c(
          "li",
          {
            staticClass: "settings-form__tab",
            class: { "settings-form__tab--active": _vm.tab === "common" },
            on: {
              click: function($event) {
                _vm.tab = "common"
              }
            }
          },
          [_vm._v("Common")]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "settings-form__tab",
            class: { "settings-form__tab--active": _vm.tab === "form" },
            on: {
              click: function($event) {
                _vm.tab = "form"
              }
            }
          },
          [_vm._v("Form")]
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "settings-form__tab",
            class: { "settings-form__tab--active": _vm.tab === "time" },
            on: {
              click: function($event) {
                _vm.tab = "time"
              }
            }
          },
          [_vm._v("Time")]
        )
      ]),
      _vm._v(" "),
      _c("x-common", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.tab === "common",
            expression: "tab === 'common'"
          }
        ],
        staticClass: "settings-form__tab-content",
        attrs: { settings: _vm.settings }
      }),
      _vm._v(" "),
      _c("x-form", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.tab === "form",
            expression: "tab === 'form'"
          }
        ],
        staticClass: "settings-form__tab-content",
        attrs: { settings: _vm.settings }
      }),
      _vm._v(" "),
      _c("x-time", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.tab === "time",
            expression: "tab === 'time'"
          }
        ],
        staticClass: "settings-form__tab-content",
        attrs: { settings: _vm.settings }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "settings-form__footer" }, [
        _c("div", { staticClass: "settings-form__buttons" }, [
          _c("p", { staticClass: "settings-form__status" }, [
            _vm._v(_vm._s(_vm.status))
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button settings-form__save",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.saveSettings()
                }
              }
            },
            [_vm._v("Save")]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/settings-form/common.vue?vue&type=template&id=189266b2&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/settings-form/common.vue?vue&type=template&id=189266b2& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h3", { staticClass: "settings-form__option-title" }, [
      _vm._v("Thread Alignment")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "left",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.common.layout,
              callback: function($$v) {
                _vm.$set(_vm.settings.common, "layout", $$v)
              },
              expression: "settings.common.layout"
            }
          },
          [_vm._v("\n      On the left\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "center",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.common.layout,
              callback: function($$v) {
                _vm.$set(_vm.settings.common, "layout", $$v)
              },
              expression: "settings.common.layout"
            }
          },
          [_vm._v("\n      In the center\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "settings-form__option-title" }, [_vm._v("Posts")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.common.showPostHeaderReflinkIcon,
              callback: function($$v) {
                _vm.$set(_vm.settings.common, "showPostHeaderReflinkIcon", $$v)
              },
              expression: "settings.common.showPostHeaderReflinkIcon"
            }
          },
          [_vm._v("\n      Show reply icon in the post header\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.common.movePostHeaderReflinkIconToDE,
              callback: function($$v) {
                _vm.$set(
                  _vm.settings.common,
                  "movePostHeaderReflinkIconToDE",
                  $$v
                )
              },
              expression: "settings.common.movePostHeaderReflinkIconToDE"
            }
          },
          [_vm._v("\n      Move DE hide button before reply icon\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.common.showPostReflinkIcon,
              callback: function($$v) {
                _vm.$set(_vm.settings.common, "showPostReflinkIcon", $$v)
              },
              expression: "settings.common.showPostReflinkIcon"
            }
          },
          [
            _vm._v(
              "\n      Show reply icon in the bottom right corner of post message\n    "
            )
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.common.scrollToNewPosts,
              callback: function($$v) {
                _vm.$set(_vm.settings.common, "scrollToNewPosts", $$v)
              },
              expression: "settings.common.scrollToNewPosts"
            }
          },
          [_vm._v("\n      Scroll to new posts\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.common.smoothScroll,
              callback: function($$v) {
                _vm.$set(_vm.settings.common, "smoothScroll", $$v)
              },
              expression: "settings.common.smoothScroll"
            }
          },
          [_vm._v("\n      Smooth scrolling\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.common.showVideoOverlay,
              callback: function($$v) {
                _vm.$set(_vm.settings.common, "showVideoOverlay", $$v)
              },
              expression: "settings.common.showVideoOverlay"
            }
          },
          [_vm._v("\n      Show video overlay\n    ")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/settings-form/form.vue?vue&type=template&id=2c889800&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/settings-form/form.vue?vue&type=template&id=2c889800& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h3", { staticClass: "settings-form__option-title" }, [
      _vm._v("Form Behaviour")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.form.scrollBottom,
              callback: function($$v) {
                _vm.$set(_vm.settings.form, "scrollBottom", $$v)
              },
              expression: "settings.form.scrollBottom"
            }
          },
          [_vm._v("\n      Scroll to the bottom after posting\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.form.saveSubject,
              callback: function($$v) {
                _vm.$set(_vm.settings.form, "saveSubject", $$v)
              },
              expression: "settings.form.saveSubject"
            }
          },
          [_vm._v("\n      Save subject after posting\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.form.saveName,
              callback: function($$v) {
                _vm.$set(_vm.settings.form, "saveName", $$v)
              },
              expression: "settings.form.saveName"
            }
          },
          [_vm._v("\n      Save name after posting\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.form.saveFormState,
              callback: function($$v) {
                _vm.$set(_vm.settings.form, "saveFormState", $$v)
              },
              expression: "settings.form.saveFormState"
            }
          },
          [_vm._v("\n      Save form floating state on page reload\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "settings-form__option-title" }, [
      _vm._v("Form Alignment")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "left",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.form.align,
              callback: function($$v) {
                _vm.$set(_vm.settings.form, "align", $$v)
              },
              expression: "settings.form.align"
            }
          },
          [_vm._v("\n      On the left\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "center",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.form.align,
              callback: function($$v) {
                _vm.$set(_vm.settings.form, "align", $$v)
              },
              expression: "settings.form.align"
            }
          },
          [_vm._v("\n      In the center\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "settings-form__option-title" }, [
      _vm._v("Preview Alignment")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "left",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.form.previewAlign,
              callback: function($$v) {
                _vm.$set(_vm.settings.form, "previewAlign", $$v)
              },
              expression: "settings.form.previewAlign"
            }
          },
          [_vm._v("\n      On the left\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "right",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.form.previewAlign,
              callback: function($$v) {
                _vm.$set(_vm.settings.form, "previewAlign", $$v)
              },
              expression: "settings.form.previewAlign"
            }
          },
          [_vm._v("\n      On the right\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "settings-form__option-title" }, [
      _vm._v("Markup")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.form.showMarkup,
              callback: function($$v) {
                _vm.$set(_vm.settings.form, "showMarkup", $$v)
              },
              expression: "settings.form.showMarkup"
            }
          },
          [_vm._v("\n      Show markup buttons\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.form.showMarkupMobile,
              callback: function($$v) {
                _vm.$set(_vm.settings.form, "showMarkupMobile", $$v)
              },
              expression: "settings.form.showMarkupMobile"
            }
          },
          [_vm._v("\n      Show markup buttons (mobile)\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-checkbox",
          {
            attrs: {
              "label-class": "settings-form__label",
              "input-class": "settings-form__checkbox"
            },
            model: {
              value: _vm.settings.form.insertTagsInPairs,
              callback: function($$v) {
                _vm.$set(_vm.settings.form, "insertTagsInPairs", $$v)
              },
              expression: "settings.form.insertTagsInPairs"
            }
          },
          [_vm._v("\n      Insert tags in pairs\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "settings-form__option-title" }, [
      _vm._v("Replaces")
    ]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "settings-form__list" },
      [
        _vm._l(_vm.settings.form.replaces, function(item, index) {
          return _c(
            "li",
            { key: index, staticClass: "settings-form__list-item" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: item.pattern,
                    expression: "item.pattern"
                  }
                ],
                staticClass: "input settings-form__text",
                attrs: { type: "text", placeholder: "Pattern" },
                domProps: { value: item.pattern },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(item, "pattern", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: item.replace,
                    expression: "item.replace"
                  }
                ],
                staticClass: "input settings-form__text",
                attrs: { type: "text", placeholder: "Replace" },
                domProps: { value: item.replace },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(item, "replace", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "button",
                  on: {
                    click: function($event) {
                      _vm.removeReplaceAt(index)
                    }
                  }
                },
                [_vm._v("Remove")]
              )
            ]
          )
        }),
        _vm._v(" "),
        _c("li", { staticClass: "settings-form__list-item" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newReplace.pattern,
                expression: "newReplace.pattern"
              }
            ],
            staticClass: "input settings-form__text",
            attrs: { type: "text", placeholder: "Pattern" },
            domProps: { value: _vm.newReplace.pattern },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.newReplace, "pattern", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newReplace.replace,
                expression: "newReplace.replace"
              }
            ],
            staticClass: "input settings-form__text",
            attrs: { type: "text", placeholder: "Replace" },
            domProps: { value: _vm.newReplace.replace },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.newReplace, "replace", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button",
              on: {
                click: function($event) {
                  _vm.addReplace(_vm.newReplace)
                }
              }
            },
            [_vm._v("Add")]
          )
        ])
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/settings-form/time.vue?vue&type=template&id=51adcd89&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/settings-form/time.vue?vue&type=template&id=51adcd89& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h3", { staticClass: "settings-form__option-title" }, [
      _vm._v("Language")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "default",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.time.locale,
              callback: function($$v) {
                _vm.$set(_vm.settings.time, "locale", $$v)
              },
              expression: "settings.time.locale"
            }
          },
          [_vm._v("\n      Browser default\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "custom",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.time.locale,
              callback: function($$v) {
                _vm.$set(_vm.settings.time, "locale", $$v)
              },
              expression: "settings.time.locale"
            }
          },
          [
            _vm._v("\n      Custom\n      "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.settings.time.localeCustom,
                  expression: "settings.time.localeCustom"
                }
              ],
              staticClass: "input settings-form__text",
              attrs: { type: "text", placeholder: "en" },
              domProps: { value: _vm.settings.time.localeCustom },
              on: {
                click: function($event) {
                  _vm.settings.time.locale = "custom"
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.settings.time,
                    "localeCustom",
                    $event.target.value
                  )
                }
              }
            })
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "settings-form__option-title" }, [
      _vm._v("Format")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "default",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.time.format,
              callback: function($$v) {
                _vm.$set(_vm.settings.time, "format", $$v)
              },
              expression: "settings.time.format"
            }
          },
          [_vm._v("\n      Browser default\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "custom",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.time.format,
              callback: function($$v) {
                _vm.$set(_vm.settings.time, "format", $$v)
              },
              expression: "settings.time.format"
            }
          },
          [
            _vm._v("\n      Custom\n      "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.settings.time.formatCustom,
                  expression: "settings.time.formatCustom"
                }
              ],
              staticClass: "input settings-form__text",
              attrs: { type: "text", placeholder: "EEE, dd MMM yyyy HH:mm:ss" },
              domProps: { value: _vm.settings.time.formatCustom },
              on: {
                click: function($event) {
                  _vm.settings.time.format = "custom"
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(
                    _vm.settings.time,
                    "formatCustom",
                    $event.target.value
                  )
                }
              }
            })
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("h3", { staticClass: "settings-form__option-title" }, [
      _vm._v("Time zone")
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "default",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.time.zone,
              callback: function($$v) {
                _vm.$set(_vm.settings.time, "zone", $$v)
              },
              expression: "settings.time.zone"
            }
          },
          [_vm._v("\n      Browser default\n    ")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "settings-form__row" },
      [
        _c(
          "x-radio-button",
          {
            attrs: {
              value: "fixed",
              "label-class": "settings-form__label",
              "input-class": "settings-form__radio"
            },
            model: {
              value: _vm.settings.time.zone,
              callback: function($$v) {
                _vm.$set(_vm.settings.time, "zone", $$v)
              },
              expression: "settings.time.zone"
            }
          },
          [
            _vm._v("\n      Fixed UTC offset\n      "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.settings.time.zoneFixed,
                  expression: "settings.time.zoneFixed"
                }
              ],
              staticClass: "input settings-form__text",
              attrs: { type: "number", min: "-99", max: "99" },
              domProps: { value: _vm.settings.time.zoneFixed },
              on: {
                click: function($event) {
                  _vm.settings.time.zone = "fixed"
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.settings.time, "zoneFixed", $event.target.value)
                }
              }
            })
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "settings-form__option-title" }, [
      _vm._v("Current format")
    ]),
    _vm._v(" "),
    _c("p", [_vm._v(_vm._s(_vm.time))])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("\n    See the\n    "),
      _c(
        "a",
        {
          attrs: {
            href:
              "https://github.com/moment/luxon/blob/master/docs/formatting.md#table-of-tokens"
          }
        },
        [_vm._v("\n      luxon documentation\n    ")]
      ),
      _vm._v("\n    for the custom tokens reference.\n  ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

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
  :title="info"
  @click="onClick($event)"
  @dragenter.stop.prevent
  @dragleave.stop.prevent
  @dragover.stop.prevent
  @drop.stop.prevent="onDrop($event)">
  <span class="file-preview__info"
    v-if="type">{{ info }}</span>

  <img class="file-preview__content"
    v-if="type === 'image' && src"
    :src="src" />
  <video class="file-preview__content" autoplay loop muted
    v-else-if="type === 'video' && src"
    :src="src"
    :title="info"></video>
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
                this.popupViewModel.content = json.html.replace('muted=true', 'muted=false');
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
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
const settings_form_vue_1 = __importDefault(__webpack_require__(/*! ../../components/settings-form.vue */ "./components/settings-form.vue"));
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
            render: h => h(settings_form_vue_1.default),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGVja2JveC50cz85NGIzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gudnVlPzM0MjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yYWRpby1idXR0b24udHM/MmQxYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yYWRpby1idXR0b24udnVlPzNlNGMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtLnRzP2MzYzMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0udnVlP2Y5YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2NvbW1vbi50cz9kMmY2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9jb21tb24udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9jb21tb24udnVlPzAwOWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2Zvcm0udHM/NDE3MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vZm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2Zvcm0udnVlPzFmODAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL3RpbWUudHM/ZjliMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vdGltZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL3RpbWUudnVlPzFjNzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vdGltZS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrYm94LnZ1ZT81NmUwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnZ1ZT9kYTFiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS52dWU/M2IxMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vY29tbW9uLnZ1ZT84MWM2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9mb3JtLnZ1ZT8zMTQzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS90aW1lLnZ1ZT8wZjQ3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBpLnRzIiwid2VicGFjazovLy8uL3RzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2NhcHRjaGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9jb3JyZWN0LXRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9kZWxldGUtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2RyYWdnYWJsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2ZpbGUtcHJldmlldy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbmV3LXBvc3RzLWRldGVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdC1yZWZlcmVuY2UtbWFwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3Bvc3RpbmctZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvc3R5bGUtc3dpdGNoLnRzIiwid2VicGFjazovLy8uL3RzL2V2ZW50LWJ1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvY29va2llLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2RvbS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy90aW1lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImx1eG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiVnVlXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0NBQW9DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9OQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2Q0FBNkM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0NBQW9DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0NBQW9DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0NBQW9DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0NBQW9DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFB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QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQXdELFVBQVU7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FB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QTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWMsSUFBSSxVQUFVLEVBQUUsYUFBYTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjLElBQUksR0FBRyxNQUFNLFVBQVUsRUFBRSxhQUFhO0FBQ2pGLDZCQUE2QixjQUFjLElBQUksR0FBRyxFQUFFLGFBQWE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsc0NBQVU7QUFDakM7QUFDQSxZQUFZLG1CQUFPLENBQUMsZ0NBQU87QUFDM0I7QUFDQSxhQUFhLG1CQUFPLENBQUMsa0NBQVE7QUFDN0I7Ozs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkEsdUI7Ozs7Ozs7Ozs7O0FDQUEscUIiLCJmaWxlIjoiLi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvYXBwLnRzXCIpO1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vY2hlY2tib3gudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL2NoZWNrYm94LnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jaGVja2JveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Q4YTc2N2UmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2hlY2tib3gudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NoZWNrYm94LnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92dmF0YXNoaS/QlNC+0LrRg9C80LXQvdGC0YsvUEhQL3RpbnlpYi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2Q4YTc2N2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2Q4YTc2N2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NoZWNrYm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZDhhNzY3ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZDhhNzY3ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jaGVja2JveC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tib3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkOGE3NjdlJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vcmFkaW8tYnV0dG9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9yYWRpby1idXR0b24udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3JhZGlvLWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmRkOTc0MDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmFkaW8tYnV0dG9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yYWRpby1idXR0b24udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3Z2YXRhc2hpL9CU0L7QutGD0LzQtdC90YLRiy9QSFAvdGlueWliL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmZGQ5NzQwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmZGQ5NzQwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmFkaW8tYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZGQ5NzQwMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmZGQ5NzQwMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9yYWRpby1idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JhZGlvLWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmRkOTc0MDImXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9zZXR0aW5ncy1mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9zZXR0aW5ncy1mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zZXR0aW5ncy1mb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDUxYzgwMyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZXR0aW5ncy1mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXR0aW5ncy1mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92dmF0YXNoaS/QlNC+0LrRg9C80LXQvdGC0YsvUEhQL3RpbnlpYi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjQ1MWM4MDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjQ1MWM4MDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NldHRpbmdzLWZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0NTFjODAzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY0NTFjODAzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3NldHRpbmdzLWZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NldHRpbmdzLWZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0NTFjODAzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vY29tbW9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9jb21tb24udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NvbW1vbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg5MjY2YjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29tbW9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb21tb24udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3Z2YXRhc2hpL9CU0L7QutGD0LzQtdC90YLRiy9QSFAvdGlueWliL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxODkyNjZiMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxODkyNjZiMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29tbW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODkyNjZiMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxODkyNjZiMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2NvbW1vbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tbW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODkyNjZiMiZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm0udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm0udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjODg5ODAwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Zvcm0udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zvcm0udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3Z2YXRhc2hpL9CU0L7QutGD0LzQtdC90YLRiy9QSFAvdGlueWliL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYzg4OTgwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYzg4OTgwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmM4ODk4MDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmM4ODk4MDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9mb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYzg4OTgwMCZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL3RpbWUudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL3RpbWUudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RpbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxYWRjZDg5JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RpbWUudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RpbWUudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3Z2YXRhc2hpL9CU0L7QutGD0LzQtdC90YLRiy9QSFAvdGlueWliL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MWFkY2Q4OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MWFkY2Q4OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGltZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTFhZGNkODkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTFhZGNkODknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS90aW1lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90aW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MWFkY2Q4OSZcIiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgbW9kZWw6IHtcbiAgICAgICAgcHJvcDogJ2NoZWNrZWQnLFxuICAgICAgICBldmVudDogJ2NoYW5nZScsXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBsYWJlbENsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbklucHV0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsICF0aGlzLmNoZWNrZWQpO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgbW9kZWw6IHtcbiAgICAgICAgcHJvcDogJ3NlbGVjdGVkVmFsdWUnLFxuICAgICAgICBldmVudDogJ2NoYW5nZScsXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBsYWJlbENsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBTdHJpbmcsXG4gICAgICAgIHNlbGVjdGVkVmFsdWU6IFN0cmluZyxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JbnB1dChlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgY29tbW9uX3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NldHRpbmdzLWZvcm0vY29tbW9uLnZ1ZVwiKSk7XG5jb25zdCBmb3JtX3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NldHRpbmdzLWZvcm0vZm9ybS52dWVcIikpO1xuY29uc3QgdGltZV92dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zZXR0aW5ncy1mb3JtL3RpbWUudnVlXCIpKTtcbmNvbnN0IHRzXzEgPSByZXF1aXJlKFwiLi4vdHNcIik7XG5leHBvcnRzLmRlZmF1bHQgPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNldHRpbmdzOiBudWxsLFxuICAgICAgICAgICAgdGFiOiAnY29tbW9uJyxcbiAgICAgICAgICAgIHN0YXR1czogJycsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdHNfMS5TZXR0aW5nc01hbmFnZXIubG9hZCgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzYXZlU2V0dGluZ3MoKSB7XG4gICAgICAgICAgICB0c18xLlNldHRpbmdzTWFuYWdlci5zYXZlKHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICAgICAgLy8gSW5kaWNhdGUgdGhhdCBzZXR0aW5ncyBhcmUgc2F2ZWQuXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnU2V0dGluZ3Mgc2F2ZWQuJztcbiAgICAgICAgICAgIH0sIDEwMDAgLyAzKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ3gtY29tbW9uJzogY29tbW9uX3Z1ZV8xLmRlZmF1bHQsXG4gICAgICAgICd4LWZvcm0nOiBmb3JtX3Z1ZV8xLmRlZmF1bHQsXG4gICAgICAgICd4LXRpbWUnOiB0aW1lX3Z1ZV8xLmRlZmF1bHQsXG4gICAgfSxcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGNoZWNrYm94X3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jaGVja2JveC52dWVcIikpO1xuY29uc3QgcmFkaW9fYnV0dG9uX3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9yYWRpby1idXR0b24udnVlXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZ1ZV8xLmRlZmF1bHQuZXh0ZW5kKHtcbiAgICBwcm9wczogWydzZXR0aW5ncyddLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ3gtY2hlY2tib3gnOiBjaGVja2JveF92dWVfMS5kZWZhdWx0LFxuICAgICAgICAneC1yYWRpby1idXR0b24nOiByYWRpb19idXR0b25fdnVlXzEuZGVmYXVsdCxcbiAgICB9LFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgY2hlY2tib3hfdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NoZWNrYm94LnZ1ZVwiKSk7XG5jb25zdCByYWRpb19idXR0b25fdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3JhZGlvLWJ1dHRvbi52dWVcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdnVlXzEuZGVmYXVsdC5leHRlbmQoe1xuICAgIHByb3BzOiBbJ3NldHRpbmdzJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ld1JlcGxhY2U6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAnJyxcbiAgICAgICAgICAgICAgICByZXBsYWNlOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlbW92ZVJlcGxhY2VBdChpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5mb3JtLnJlcGxhY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFJlcGxhY2UoaXRlbSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKGl0ZW0ucGF0dGVybiwgJ2dtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEludmFsaWQgcmVndWxhciBleHByZXNzaW9uOiAke2UubWVzc2FnZX1gO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybS5yZXBsYWNlcy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pKTtcbiAgICAgICAgICAgIHRoaXMubmV3UmVwbGFjZSA9IHsgcGF0dGVybjogJycsIHJlcGxhY2U6ICcnIH07XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICd4LWNoZWNrYm94JzogY2hlY2tib3hfdnVlXzEuZGVmYXVsdCxcbiAgICAgICAgJ3gtcmFkaW8tYnV0dG9uJzogcmFkaW9fYnV0dG9uX3Z1ZV8xLmRlZmF1bHQsXG4gICAgfSxcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsdXhvbl8xID0gcmVxdWlyZShcImx1eG9uXCIpO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBjaGVja2JveF92dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY2hlY2tib3gudnVlXCIpKTtcbmNvbnN0IHJhZGlvX2J1dHRvbl92dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vcmFkaW8tYnV0dG9uLnZ1ZVwiKSk7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3RzL3V0aWxzXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdnVlXzEuZGVmYXVsdC5leHRlbmQoe1xuICAgIHByb3BzOiBbJ3NldHRpbmdzJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpbWU6ICcnLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5fdGltZXIgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVRpbWUuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgfSxcbiAgICBkZXN0cm95ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlVGltZSgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGltZSA9IGx1eG9uXzEuRGF0ZVRpbWUuZnJvbUpTRGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSB1dGlsc18xLlRpbWUuZm9ybWF0KHRpbWUsIHRoaXMuc2V0dGluZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lID0gJ0ludmFsaWQgZm9ybWF0JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ3gtY2hlY2tib3gnOiBjaGVja2JveF92dWVfMS5kZWZhdWx0LFxuICAgICAgICAneC1yYWRpby1idXR0b24nOiByYWRpb19idXR0b25fdnVlXzEuZGVmYXVsdCxcbiAgICB9LFxufSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibGFiZWxcIixcbiAgICB7IGNsYXNzOiBfdm0ubGFiZWxDbGFzcyB9LFxuICAgIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBjbGFzczogX3ZtLmlucHV0Q2xhc3MsXG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlLCBjaGVja2VkOiBfdm0uY2hlY2tlZCB9LFxuICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbklucHV0IH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcImRlZmF1bHRcIilcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJsYWJlbFwiLFxuICAgIHsgY2xhc3M6IF92bS5sYWJlbENsYXNzIH0sXG4gICAgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGNsYXNzOiBfdm0uaW5wdXRDbGFzcyxcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJyYWRpb1wiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udmFsdWUsIGNoZWNrZWQ6IF92bS52YWx1ZSA9PSBfdm0uc2VsZWN0ZWRWYWx1ZSB9LFxuICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbklucHV0IH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcImRlZmF1bHRcIilcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjb250ZW50X19zZXR0aW5ncy1mb3JtIHNldHRpbmdzLWZvcm1cIixcbiAgICAgIGF0dHJzOiB7IGlkOiBcInNldHRpbmdzX2Zvcm1cIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fdGFic1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3RhYlwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJzZXR0aW5ncy1mb3JtX190YWItLWFjdGl2ZVwiOiBfdm0udGFiID09PSBcImNvbW1vblwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnRhYiA9IFwiY29tbW9uXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIkNvbW1vblwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3RhYlwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJzZXR0aW5ncy1mb3JtX190YWItLWFjdGl2ZVwiOiBfdm0udGFiID09PSBcImZvcm1cIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS50YWIgPSBcImZvcm1cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiRm9ybVwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3RhYlwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJzZXR0aW5ncy1mb3JtX190YWItLWFjdGl2ZVwiOiBfdm0udGFiID09PSBcInRpbWVcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS50YWIgPSBcInRpbWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiVGltZVwiKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ4LWNvbW1vblwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYiA9PT0gXCJjb21tb25cIixcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFiID09PSAnY29tbW9uJ1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX190YWItY29udGVudFwiLFxuICAgICAgICBhdHRyczogeyBzZXR0aW5nczogX3ZtLnNldHRpbmdzIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwieC1mb3JtXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udGFiID09PSBcImZvcm1cIixcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFiID09PSAnZm9ybSdcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fdGFiLWNvbnRlbnRcIixcbiAgICAgICAgYXR0cnM6IHsgc2V0dGluZ3M6IF92bS5zZXR0aW5ncyB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIngtdGltZVwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYiA9PT0gXCJ0aW1lXCIsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYiA9PT0gJ3RpbWUnXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3RhYi1jb250ZW50XCIsXG4gICAgICAgIGF0dHJzOiB7IHNldHRpbmdzOiBfdm0uc2V0dGluZ3MgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19mb290ZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fYnV0dG9uc1wiIH0sIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19zdGF0dXNcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zdGF0dXMpKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gc2V0dGluZ3MtZm9ybV9fc2F2ZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIF92bS5zYXZlU2V0dGluZ3MoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiVGhyZWFkIEFsaWdubWVudFwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmNvbW1vbi5sYXlvdXQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuY29tbW9uLCBcImxheW91dFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuY29tbW9uLmxheW91dFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgT24gdGhlIGxlZnRcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5jb21tb24ubGF5b3V0LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmNvbW1vbiwgXCJsYXlvdXRcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmNvbW1vbi5sYXlvdXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIEluIHRoZSBjZW50ZXJcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCIgfSwgW192bS5fdihcIlBvc3RzXCIpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuY29tbW9uLnNob3dQb3N0SGVhZGVyUmVmbGlua0ljb24sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuY29tbW9uLCBcInNob3dQb3N0SGVhZGVyUmVmbGlua0ljb25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmNvbW1vbi5zaG93UG9zdEhlYWRlclJlZmxpbmtJY29uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTaG93IHJlcGx5IGljb24gaW4gdGhlIHBvc3QgaGVhZGVyXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmNvbW1vbi5tb3ZlUG9zdEhlYWRlclJlZmxpbmtJY29uVG9ERSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLmNvbW1vbixcbiAgICAgICAgICAgICAgICAgIFwibW92ZVBvc3RIZWFkZXJSZWZsaW5rSWNvblRvREVcIixcbiAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5jb21tb24ubW92ZVBvc3RIZWFkZXJSZWZsaW5rSWNvblRvREVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIE1vdmUgREUgaGlkZSBidXR0b24gYmVmb3JlIHJlcGx5IGljb25cXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuY29tbW9uLnNob3dQb3N0UmVmbGlua0ljb24sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuY29tbW9uLCBcInNob3dQb3N0UmVmbGlua0ljb25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmNvbW1vbi5zaG93UG9zdFJlZmxpbmtJY29uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICBTaG93IHJlcGx5IGljb24gaW4gdGhlIGJvdHRvbSByaWdodCBjb3JuZXIgb2YgcG9zdCBtZXNzYWdlXFxuICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuY29tbW9uLnNjcm9sbFRvTmV3UG9zdHMsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuY29tbW9uLCBcInNjcm9sbFRvTmV3UG9zdHNcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmNvbW1vbi5zY3JvbGxUb05ld1Bvc3RzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTY3JvbGwgdG8gbmV3IHBvc3RzXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmNvbW1vbi5zbW9vdGhTY3JvbGwsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuY29tbW9uLCBcInNtb290aFNjcm9sbFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuY29tbW9uLnNtb290aFNjcm9sbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgU21vb3RoIHNjcm9sbGluZ1xcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5jb21tb24uc2hvd1ZpZGVvT3ZlcmxheSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5jb21tb24sIFwic2hvd1ZpZGVvT3ZlcmxheVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuY29tbW9uLnNob3dWaWRlb092ZXJsYXlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFNob3cgdmlkZW8gb3ZlcmxheVxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJGb3JtIEJlaGF2aW91clwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZvcm0uc2Nyb2xsQm90dG9tLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmZvcm0sIFwic2Nyb2xsQm90dG9tXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5mb3JtLnNjcm9sbEJvdHRvbVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgU2Nyb2xsIHRvIHRoZSBib3R0b20gYWZ0ZXIgcG9zdGluZ1xcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5mb3JtLnNhdmVTdWJqZWN0LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmZvcm0sIFwic2F2ZVN1YmplY3RcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZvcm0uc2F2ZVN1YmplY3RcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFNhdmUgc3ViamVjdCBhZnRlciBwb3N0aW5nXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZvcm0uc2F2ZU5hbWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuZm9ybSwgXCJzYXZlTmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZm9ybS5zYXZlTmFtZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgU2F2ZSBuYW1lIGFmdGVyIHBvc3RpbmdcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZm9ybS5zYXZlRm9ybVN0YXRlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmZvcm0sIFwic2F2ZUZvcm1TdGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZm9ybS5zYXZlRm9ybVN0YXRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTYXZlIGZvcm0gZmxvYXRpbmcgc3RhdGUgb24gcGFnZSByZWxvYWRcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiRm9ybSBBbGlnbm1lbnRcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5mb3JtLmFsaWduLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmZvcm0sIFwiYWxpZ25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZvcm0uYWxpZ25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIE9uIHRoZSBsZWZ0XFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZm9ybS5hbGlnbixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5mb3JtLCBcImFsaWduXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5mb3JtLmFsaWduXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBJbiB0aGUgY2VudGVyXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF92bS5fdihcIlByZXZpZXcgQWxpZ25tZW50XCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZm9ybS5wcmV2aWV3QWxpZ24sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuZm9ybSwgXCJwcmV2aWV3QWxpZ25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZvcm0ucHJldmlld0FsaWduXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBPbiB0aGUgbGVmdFxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcInJpZ2h0XCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZm9ybS5wcmV2aWV3QWxpZ24sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuZm9ybSwgXCJwcmV2aWV3QWxpZ25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZvcm0ucHJldmlld0FsaWduXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBPbiB0aGUgcmlnaHRcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiTWFya3VwXCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZm9ybS5zaG93TWFya3VwLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmZvcm0sIFwic2hvd01hcmt1cFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZm9ybS5zaG93TWFya3VwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTaG93IG1hcmt1cCBidXR0b25zXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZvcm0uc2hvd01hcmt1cE1vYmlsZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5mb3JtLCBcInNob3dNYXJrdXBNb2JpbGVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZvcm0uc2hvd01hcmt1cE1vYmlsZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgU2hvdyBtYXJrdXAgYnV0dG9ucyAobW9iaWxlKVxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5mb3JtLmluc2VydFRhZ3NJblBhaXJzLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmZvcm0sIFwiaW5zZXJ0VGFnc0luUGFpcnNcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZvcm0uaW5zZXJ0VGFnc0luUGFpcnNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIEluc2VydCB0YWdzIGluIHBhaXJzXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF92bS5fdihcIlJlcGxhY2VzXCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwidWxcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fbGlzdFwiIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5fbChfdm0uc2V0dGluZ3MuZm9ybS5yZXBsYWNlcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX2xpc3QtaXRlbVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ucGF0dGVybixcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnBhdHRlcm5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJQYXR0ZXJuXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogaXRlbS5wYXR0ZXJuIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJwYXR0ZXJuXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5yZXBsYWNlLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucmVwbGFjZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlJlcGxhY2VcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBpdGVtLnJlcGxhY2UgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcInJlcGxhY2VcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5yZW1vdmVSZXBsYWNlQXQoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZW1vdmVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fbGlzdC1pdGVtXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmV3UmVwbGFjZS5wYXR0ZXJuLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3UmVwbGFjZS5wYXR0ZXJuXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJQYXR0ZXJuXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3UmVwbGFjZS5wYXR0ZXJuIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm5ld1JlcGxhY2UsIFwicGF0dGVyblwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld1JlcGxhY2UucmVwbGFjZSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld1JlcGxhY2UucmVwbGFjZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiUmVwbGFjZVwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5ld1JlcGxhY2UucmVwbGFjZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5uZXdSZXBsYWNlLCBcInJlcGxhY2VcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYWRkUmVwbGFjZShfdm0ubmV3UmVwbGFjZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiQWRkXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJMYW5ndWFnZVwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUubG9jYWxlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLnRpbWUsIFwibG9jYWxlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy50aW1lLmxvY2FsZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgQnJvd3NlciBkZWZhdWx0XFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwiY3VzdG9tXCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS5sb2NhbGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MudGltZSwgXCJsb2NhbGVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnRpbWUubG9jYWxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIEN1c3RvbVxcbiAgICAgIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUubG9jYWxlQ3VzdG9tLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy50aW1lLmxvY2FsZUN1c3RvbVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJlblwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS5sb2NhbGVDdXN0b20gfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MudGltZS5sb2NhbGUgPSBcImN1c3RvbVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnRpbWUsXG4gICAgICAgICAgICAgICAgICAgIFwibG9jYWxlQ3VzdG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiRm9ybWF0XCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS5mb3JtYXQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MudGltZSwgXCJmb3JtYXRcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnRpbWUuZm9ybWF0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBCcm93c2VyIGRlZmF1bHRcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJjdXN0b21cIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLmZvcm1hdCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy50aW1lLCBcImZvcm1hdFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MudGltZS5mb3JtYXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgQ3VzdG9tXFxuICAgICAgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS5mb3JtYXRDdXN0b20sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnRpbWUuZm9ybWF0Q3VzdG9tXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkVFRSwgZGQgTU1NIHl5eXkgSEg6bW06c3NcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUuZm9ybWF0Q3VzdG9tIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnRpbWUuZm9ybWF0ID0gXCJjdXN0b21cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy50aW1lLFxuICAgICAgICAgICAgICAgICAgICBcImZvcm1hdEN1c3RvbVwiLFxuICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF92bS5fdihcIlRpbWUgem9uZVwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUuem9uZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy50aW1lLCBcInpvbmVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnRpbWUuem9uZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgQnJvd3NlciBkZWZhdWx0XFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLnpvbmUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MudGltZSwgXCJ6b25lXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy50aW1lLnpvbmVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgRml4ZWQgVVRDIG9mZnNldFxcbiAgICAgIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUuem9uZUZpeGVkLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy50aW1lLnpvbmVGaXhlZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIsIG1pbjogXCItOTlcIiwgbWF4OiBcIjk5XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLnpvbmVGaXhlZCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy50aW1lLnpvbmUgPSBcImZpeGVkXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy50aW1lLCBcInpvbmVGaXhlZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJDdXJyZW50IGZvcm1hdFwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50aW1lKSldKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICBTZWUgdGhlXFxuICAgIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbHV4b24vYmxvYi9tYXN0ZXIvZG9jcy9mb3JtYXR0aW5nLm1kI3RhYmxlLW9mLXRva2Vuc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgbHV4b24gZG9jdW1lbnRhdGlvblxcbiAgICBcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiXFxuICAgIGZvciB0aGUgY3VzdG9tIHRva2VucyByZWZlcmVuY2UuXFxuICBcIilcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQXBpIHtcbiAgICBzdGF0aWMgY3JlYXRlUG9zdChyZXF1ZXN0LCBvblByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3dpbmRvdy5iYXNlVXJsfS9hamF4L3Bvc3QvY3JlYXRlYDtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3BhcmVudCcsIHJlcXVlc3QucGFyZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdzdWJqZWN0JywgcmVxdWVzdC5zdWJqZWN0KTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbmFtZScsIHJlcXVlc3QubmFtZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ21lc3NhZ2UnLCByZXF1ZXN0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgcmVxdWVzdC5maWxlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIG9uUHJvZ3Jlc3MuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChgJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5BcGkgPSBBcGk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF8xID0gcmVxdWlyZShcIi5cIik7XG5jb25zdCBjb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzXCIpO1xuY29uc3Qgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xubmV3IGNvbXBvbmVudHNfMS5DYXB0Y2hhKCk7XG5uZXcgY29tcG9uZW50c18xLkNvcnJlY3RUaW1lKCk7XG5uZXcgY29tcG9uZW50c18xLkRlbGV0ZUZvcm0oKTtcbm5ldyBjb21wb25lbnRzXzEuTmV3UG9zdHNEZXRlY3RvcigpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0KCk7XG5uZXcgY29tcG9uZW50c18xLlBvc3RpbmdGb3JtKCk7XG5uZXcgY29tcG9uZW50c18xLlBvc3RSZWZlcmVuY2VNYXAoKTtcbm5ldyBjb21wb25lbnRzXzEuU2V0dGluZ3MoKTtcbm5ldyBjb21wb25lbnRzXzEuU3R5bGVTd2l0Y2goKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBlID0+IHtcbiAgICBfMS5ldmVudEJ1cy4kZW1pdChfMS5FdmVudHMuUmVhZHkpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gc2V0dGluZ3NfMS5TZXR0aW5nc01hbmFnZXIubG9hZCgpO1xuICAgIGlmIChzZXR0aW5ncy5jb21tb24uc21vb3RoU2Nyb2xsKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc21vb3RoLXNjcm9sbCcpO1xuICAgIH1cbiAgICBjb25zdCBsYXlvdXQgPSB1dGlsc18xLkRPTS5xcygnLmxheW91dCcpO1xuICAgIGlmIChsYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dC0tJyArIHNldHRpbmdzLmNvbW1vbi5sYXlvdXQpO1xuICAgICAgICBpZiAoIXNldHRpbmdzLmNvbW1vbi5zaG93UG9zdEhlYWRlclJlZmxpbmtJY29uKSB7XG4gICAgICAgICAgICBsYXlvdXQuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LS1oaWRlLXBvc3QtaGVhZGVyLXJlZmxpbmstaWNvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2V0dGluZ3MuY29tbW9uLnNob3dQb3N0UmVmbGlua0ljb24pIHtcbiAgICAgICAgICAgIGxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQtLWhpZGUtcG9zdC1yZWZsaW5rLWljb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MuY29tbW9uLnNob3dWaWRlb092ZXJsYXkpIHtcbiAgICAgICAgICAgIGxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQtLXNob3ctdGh1bWItb3ZlcmxheScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGZvcm1XcmFwcGVyID0gdXRpbHNfMS5ET00ucXMoJy5jb250ZW50X19wb3N0aW5nLWZvcm0td3JhcHBlcicpO1xuICAgIGlmIChmb3JtV3JhcHBlcikge1xuICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdjb250ZW50X19wb3N0aW5nLWZvcm0td3JhcHBlci0tJyArIHNldHRpbmdzLmZvcm0uYWxpZ24pO1xuICAgIH1cbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ2FwdGNoYSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luYWxTcmMgPSAnJztcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdXRpbHNfMS5ET00ucWlkKCdjYXB0Y2hhaW1hZ2UnKTtcbiAgICAgICAgaWYgKGltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsU3JjID0gaW1hZ2Uuc3JjO1xuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbG9hZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGNhcHRjaGEgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGEnKTtcbiAgICAgICAgY2FwdGNoYS52YWx1ZSA9ICcnO1xuICAgICAgICBjYXB0Y2hhLmZvY3VzKCk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gdXRpbHNfMS5ET00ucWlkKCdjYXB0Y2hhaW1hZ2UnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYCR7dGhpcy5vcmlnaW5hbFNyY30jJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX1gO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0cy5DYXB0Y2hhID0gQ2FwdGNoYTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbHV4b25fMSA9IHJlcXVpcmUoXCJsdXhvblwiKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDb3JyZWN0VGltZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBfXzEuU2V0dGluZ3NNYW5hZ2VyLmxvYWQoKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHRoaXMub25Qb3N0c0luc2VydGVkLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblBvc3RzSW5zZXJ0ZWQocG9zdHMpIHtcbiAgICAgICAgcG9zdHMuZm9yRWFjaCh0aGlzLm9uUG9zdEluc2VydGVkLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnRlZChwb3N0KSB7XG4gICAgICAgIGNvbnN0IHRpbWVFbGVtZW50cyA9IHV0aWxzXzEuRE9NLnFzYSgnLnBvc3QgdGltZScsIHBvc3QpO1xuICAgICAgICB0aW1lRWxlbWVudHMuZm9yRWFjaCh0aGlzLmNvcnJlY3RUaW1lLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBjb3JyZWN0VGltZShlbCkge1xuICAgICAgICBjb25zdCB0aW1lX3N0ciA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0ZXRpbWUnKTtcbiAgICAgICAgaWYgKCF0aW1lX3N0cikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWUgPSBsdXhvbl8xLkRhdGVUaW1lLmZyb21JU08odGltZV9zdHIpO1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHV0aWxzXzEuVGltZS5mb3JtYXQodGltZSwgdGhpcy5zZXR0aW5ncyk7XG4gICAgfVxufVxuZXhwb3J0cy5Db3JyZWN0VGltZSA9IENvcnJlY3RUaW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgRGVsZXRlRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBmb3JtID0gdXRpbHNfMS5ET00ucWlkKCdkZWxmb3JtJyk7XG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlbGV0ZV9wb3N0X3Bhc3N3b3JkID0gdXRpbHNfMS5ET00ucWlkKCdkZWxldGVwb3N0cGFzc3dvcmQnKTtcbiAgICAgICAgaWYgKGRlbGV0ZV9wb3N0X3Bhc3N3b3JkKSB7XG4gICAgICAgICAgICAvLyBMb2FkIGRlbGV0ZSBwb3N0IHBhc3N3b3JkLlxuICAgICAgICAgICAgZGVsZXRlX3Bvc3RfcGFzc3dvcmQudmFsdWUgPSB1dGlsc18xLkNvb2tpZS5nZXQoJ3RpbnlpYl9wYXNzd29yZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5EZWxldGVGb3JtID0gRGVsZXRlRm9ybTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcG9pbnRlckV2ZW50cyA9ICdQb2ludGVyRXZlbnQnIGluIHdpbmRvdztcbmNvbnN0IHRvdWNoRXZlbnRzID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xuZXhwb3J0cy5kcmFnZ2FibGUgPSB7XG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlID0gdGhpcy5nZXREcmFnSGFuZGxlKCk7XG4gICAgICAgIGlmICghaGFuZGxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmFnZ2FibGVSZXNpemUgPSB0aGlzLm9uRHJhZ2dhYmxlUmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duID0gdGhpcy5vbkRyYWdnYWJsZU1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kcmFnZ2FibGVSZXNpemUpO1xuICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICB9XG4gICAgICAgIC8vdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHRoaXMuZ2V0UG9zaXRpb24oKSkpO1xuICAgIH0sXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlUmVzaXplKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5kcmFnZ2FibGVSZXNpemUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuZ2V0RHJhZ0hhbmRsZSgpO1xuICAgICAgICBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgIGhhbmRsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGFuZGxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXREcmFnSGFuZGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERyYWdnYWJsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQb3NpdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogZHJhZ2dhYmxlLm9mZnNldExlZnQsXG4gICAgICAgICAgICAgICAgeTogZHJhZ2dhYmxlLm9mZnNldFRvcCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHNldFBvc2l0aW9uKGNvb3Jkcykge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJhZ2dhYmxlLnN0eWxlLmxlZnQgPSBgJHtjb29yZHMueH1weGA7XG4gICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUudG9wID0gYCR7Y29vcmRzLnl9cHhgO1xuICAgICAgICB9LFxuICAgICAgICBjaGVja0JvdW5kcyh7IHgsIHkgfSkge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGRyYWdnYWJsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IG1pblggPSAwO1xuICAgICAgICAgICAgY29uc3QgbWluWSA9IDA7XG4gICAgICAgICAgICBjb25zdCBtYXhYID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIHJlY3Qud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IE1hdGgubWluKE1hdGgubWF4KG1pblgsIHgpLCBtYXhYKSxcbiAgICAgICAgICAgICAgICB5OiBNYXRoLm1heChNYXRoLm1pbihtYXhZLCB5KSwgbWluWSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBvbkRyYWdnYWJsZVJlc2l6ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5jaGVja0JvdW5kcyh0aGlzLmdldFBvc2l0aW9uKCkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EcmFnZ2FibGVNb3VzZURvd24oZSkge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnYWJsZVBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb3VzZUV2ZW50XG4gICAgICAgICAgICAgICAgfHwgcG9pbnRlckV2ZW50cyAmJiBlIGluc3RhbmNlb2YgUG9pbnRlckV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGUuY2xpZW50WSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG91Y2hFdmVudHMgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnU3RhcnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRvdWNoLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRvdWNoLmNsaWVudFksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSA9IHRoaXMub25EcmFnZ2FibGVNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ2dhYmxlTW91c2VVcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCA9IHRoaXMub25EcmFnZ2FibGVNb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25EcmFnZ2FibGVNb3VzZU1vdmUoZSkge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBkZWx0YVggPSAwO1xuICAgICAgICAgICAgbGV0IGRlbHRhWSA9IDA7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vdXNlRXZlbnRcbiAgICAgICAgICAgICAgICB8fCBwb2ludGVyRXZlbnRzICYmIGUgaW5zdGFuY2VvZiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkZWx0YVggPSBlLmNsaWVudFggLSB0aGlzLl9kcmFnU3RhcnQueDtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSBlLmNsaWVudFkgLSB0aGlzLl9kcmFnU3RhcnQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvdWNoRXZlbnRzICYmIGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsdGFYID0gdG91Y2guY2xpZW50WCAtIHRoaXMuX2RyYWdTdGFydC54O1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IHRvdWNoLmNsaWVudFkgLSB0aGlzLl9kcmFnU3RhcnQueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5jaGVja0JvdW5kcyh7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5fZHJhZ2dhYmxlUG9zaXRpb24ueCArIGRlbHRhWCxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLl9kcmFnZ2FibGVQb3NpdGlvbi55ICsgZGVsdGFZLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRyYWdnYWJsZU1vdXNlVXAoZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ2dhYmxlTW91c2VVcCkge1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRyYWdnYWJsZU1vdXNlVXAgPSBudWxsO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmV4cG9ydHMuRmlsZVByZXZpZXcgPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJmaWxlLXByZXZpZXdcIlxuICA6dGl0bGU9XCJpbmZvXCJcbiAgQGNsaWNrPVwib25DbGljaygkZXZlbnQpXCJcbiAgQGRyYWdlbnRlci5zdG9wLnByZXZlbnRcbiAgQGRyYWdsZWF2ZS5zdG9wLnByZXZlbnRcbiAgQGRyYWdvdmVyLnN0b3AucHJldmVudFxuICBAZHJvcC5zdG9wLnByZXZlbnQ9XCJvbkRyb3AoJGV2ZW50KVwiPlxuICA8c3BhbiBjbGFzcz1cImZpbGUtcHJldmlld19faW5mb1wiXG4gICAgdi1pZj1cInR5cGVcIj57eyBpbmZvIH19PC9zcGFuPlxuXG4gIDxpbWcgY2xhc3M9XCJmaWxlLXByZXZpZXdfX2NvbnRlbnRcIlxuICAgIHYtaWY9XCJ0eXBlID09PSAnaW1hZ2UnICYmIHNyY1wiXG4gICAgOnNyYz1cInNyY1wiIC8+XG4gIDx2aWRlbyBjbGFzcz1cImZpbGUtcHJldmlld19fY29udGVudFwiIGF1dG9wbGF5IGxvb3AgbXV0ZWRcbiAgICB2LWVsc2UtaWY9XCJ0eXBlID09PSAndmlkZW8nICYmIHNyY1wiXG4gICAgOnNyYz1cInNyY1wiXG4gICAgOnRpdGxlPVwiaW5mb1wiPjwvdmlkZW8+XG4gIDxzcGFuIGNsYXNzPVwiZmlsZS1wcmV2aWV3X19sYWJlbFwiXG4gICAgdi1lbHNlPlVwbG9hZCBmaWxlPC9zcGFuPlxuXG4gIDxzbG90Pjwvc2xvdD5cbjwvZGl2PmAsXG4gICAgcHJvcHM6IFsnZmlsZSddLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBuYW1lKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZS5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzaXplKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGUuc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZUZvcm1hdHRlZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXRzID0gWydCJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJ107XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuc2l6ZTtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgdW5pdHMubGVuZ3RoICYmIHNpemUgPj0gMTAwMDsgKytpKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSAvPSAxMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGAke3NpemUudG9GaXhlZCgyKX0gJHt1bml0c1tpXX1gO1xuICAgICAgICB9LFxuICAgICAgICBpbmZvKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZVxuICAgICAgICAgICAgICAgID8gYCR7dGhpcy5uYW1lfSwgJHt0aGlzLnNpemVGb3JtYXR0ZWR9YFxuICAgICAgICAgICAgICAgIDogdGhpcy5zaXplRm9ybWF0dGVkO1xuICAgICAgICB9LFxuICAgICAgICB0eXBlKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbGUudHlwZTtcbiAgICAgICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUuc3RhcnRzV2l0aCgndmlkZW8vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd2aWRlbyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUuc3RhcnRzV2l0aCgnYXVkaW8vJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdWRpbyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2ltYWdlJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoJy53ZWJtJykgfHwgbmFtZS5lbmRzV2l0aCgnLm1wNCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd2aWRlbyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChuYW1lLmVuZHNXaXRoKCcubXAzJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2F1ZGlvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnaW1hZ2UnO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgZmlsZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwodmFsdWUpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJvcChlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkcm9wJywgZSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY2FwdGNoYV8xID0gcmVxdWlyZShcIi4vY2FwdGNoYVwiKTtcbmV4cG9ydHMuQ2FwdGNoYSA9IGNhcHRjaGFfMS5DYXB0Y2hhO1xudmFyIGNvcnJlY3RfdGltZV8xID0gcmVxdWlyZShcIi4vY29ycmVjdC10aW1lXCIpO1xuZXhwb3J0cy5Db3JyZWN0VGltZSA9IGNvcnJlY3RfdGltZV8xLkNvcnJlY3RUaW1lO1xudmFyIGRlbGV0ZV9mb3JtXzEgPSByZXF1aXJlKFwiLi9kZWxldGUtZm9ybVwiKTtcbmV4cG9ydHMuRGVsZXRlRm9ybSA9IGRlbGV0ZV9mb3JtXzEuRGVsZXRlRm9ybTtcbnZhciBkcmFnZ2FibGVfMSA9IHJlcXVpcmUoXCIuL2RyYWdnYWJsZVwiKTtcbmV4cG9ydHMuZHJhZ2dhYmxlID0gZHJhZ2dhYmxlXzEuZHJhZ2dhYmxlO1xudmFyIGZpbGVfcHJldmlld18xID0gcmVxdWlyZShcIi4vZmlsZS1wcmV2aWV3XCIpO1xuZXhwb3J0cy5GaWxlUHJldmlldyA9IGZpbGVfcHJldmlld18xLkZpbGVQcmV2aWV3O1xudmFyIG5ld19wb3N0c19kZXRlY3Rvcl8xID0gcmVxdWlyZShcIi4vbmV3LXBvc3RzLWRldGVjdG9yXCIpO1xuZXhwb3J0cy5OZXdQb3N0c0RldGVjdG9yID0gbmV3X3Bvc3RzX2RldGVjdG9yXzEuTmV3UG9zdHNEZXRlY3RvcjtcbnZhciBwb3N0XzEgPSByZXF1aXJlKFwiLi9wb3N0XCIpO1xuZXhwb3J0cy5Qb3N0ID0gcG9zdF8xLlBvc3Q7XG52YXIgcG9zdGluZ19mb3JtXzEgPSByZXF1aXJlKFwiLi9wb3N0aW5nLWZvcm1cIik7XG5leHBvcnRzLlBvc3RpbmdGb3JtID0gcG9zdGluZ19mb3JtXzEuUG9zdGluZ0Zvcm07XG52YXIgcG9zdF9yZWZlcmVuY2VfbWFwXzEgPSByZXF1aXJlKFwiLi9wb3N0LXJlZmVyZW5jZS1tYXBcIik7XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBwb3N0X3JlZmVyZW5jZV9tYXBfMS5Qb3N0UmVmZXJlbmNlTWFwO1xudmFyIHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBzZXR0aW5nc18xLlNldHRpbmdzO1xudmFyIHN0eWxlX3N3aXRjaF8xID0gcmVxdWlyZShcIi4vc3R5bGUtc3dpdGNoXCIpO1xuZXhwb3J0cy5TdHlsZVN3aXRjaCA9IHN0eWxlX3N3aXRjaF8xLlN0eWxlU3dpdGNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgTmV3UG9zdHNEZXRlY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKiBAdG9kbzogcmVtb3ZlIE11dGF0aW9uT2JzZXJ2ZXIgQVNBUCwgd2l0aCBpbnRlZ3JhdGVkIHRocmVhZCB1cGRhdGluZy4gKi9cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSBtdXRhdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBHZXQgYWRkZWQgcG9zdHMsIGlmIGFueS5cbiAgICAgICAgICAgICAgICAubWFwKG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlTGlzdCA9IG11dGF0aW9uLmFkZGVkTm9kZXM7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGVsZW1lbnQgaXMgcG9zdCBpdHNlbGYsIHJldHVybiBpdCxcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSBxdWVyeSBmb3IgZWxlbWVudCBjaGlsZHJlbi5cbiAgICAgICAgICAgICAgICAgICAgLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3N0JylcbiAgICAgICAgICAgICAgICAgICAgPyBbZWxlbWVudF1cbiAgICAgICAgICAgICAgICAgICAgOiB1dGlsc18xLkRPTS5xc2EoJy5wb3N0JywgZWxlbWVudCkpXG4gICAgICAgICAgICAgICAgICAgIC8vIEZsYXR0ZW4gcG9zdHMgYXJyYXkuXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiB0b3RhbC5jb25jYXQoY3VycmVudCksIFtdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gRmxhdHRlbiBwb3N0cyBhcnJheS5cbiAgICAgICAgICAgICAgICAucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwuY29uY2F0KGN1cnJlbnQpLCBbXSk7XG4gICAgICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNldHVwIE11dGF0aW9uT2JzZXJ2ZXIuXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0Jyk7XG4gICAgICAgICAgICBpZiAocG9zdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF9fMS5ldmVudEJ1cy4kZW1pdChfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHBvc3RzLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5OZXdQb3N0c0RldGVjdG9yID0gTmV3UG9zdHNEZXRlY3RvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFBvc3RSZWZlcmVuY2VNYXAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvc3RzID0ge307XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCAocG9zdHMpID0+IHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnQuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBvblBvc3RJbnNlcnQocG9zdCkge1xuICAgICAgICBjb25zdCBwb3N0SWQgPSArcG9zdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICAvLyBTdG9yZSBwb3N0LlxuICAgICAgICB0aGlzLnBvc3RzW3Bvc3RJZF0gPSBwb3N0O1xuICAgICAgICAvLyBHZXQgcmVmZXJlbmNlcy5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlRWxlbWVudHMgPSB1dGlsc18xLkRPTS5xc2EoJ2FbZGF0YS10YXJnZXQtcG9zdC1pZF0nLCBwb3N0KTtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZUVsZW1lbnRzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICBpZDogK2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldC1wb3N0LWlkJyksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQXBwZW5kIHRoZSBhdXRob3IgbmFtZSBvZiB0aGUgcmVmZXJlbmNlZCBwb3N0IHRvIHRoZSByZWZlcmVuY2UgbGluayB0ZXh0LlxuICAgICAgICByZWZlcmVuY2VzLmZvckVhY2gocmVmZXJlbmNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0aGlzLnBvc3RzW3JlZmVyZW5jZS5pZF07XG4gICAgICAgICAgICBpZiAoIXBvc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuY2xhc3NMaXN0LmFkZCgncG9zdF9fcmVmZXJlbmNlLWxpbmstYXV0aG9yJyk7XG4gICAgICAgICAgICByZWZlcmVuY2VBdXRob3IuaW5uZXJIVE1MID0gdGhpcy5nZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSByZWZlcmVuY2UuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgbmV4dFNpYmxpbmcgPSByZWZlcmVuY2UuZWxlbWVudC5uZXh0U2libGluZztcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUocmVmZXJlbmNlQXV0aG9yLCBuZXh0U2libGluZyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRQb3N0UmVmTGlua0F1dGhvckh0bWwocG9zdCkge1xuICAgICAgICBjb25zdCBuYW1lRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX19uYW1lJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHRyaXBjb2RlRWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3QtaGVhZGVyX190cmlwY29kZScsIHBvc3QpO1xuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUVsID8gbmFtZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBjb25zdCB0cmlwY29kZSA9IHRyaXBjb2RlRWwgPyB0cmlwY29kZUVsLmlubmVySFRNTCA6ICcnO1xuICAgICAgICBpZiAobmFtZS5sZW5ndGggfHwgdHJpcGNvZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gYCg8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLW5hbWVcIj4ke25hbWV9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICArIGA8c3BhbiBjbGFzcz1cInBvc3RfX3JlZmVyZW5jZS1saW5rLXRyaXBjb2RlXCI+JHt0cmlwY29kZX08L3NwYW4+KWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYGA7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvc3RSZWZlcmVuY2VNYXAgPSBQb3N0UmVmZXJlbmNlTWFwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGRyYWdnYWJsZV8xID0gcmVxdWlyZShcIi4vZHJhZ2dhYmxlXCIpO1xuO1xuY2xhc3MgUG9zdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgdGhpcy5vblBvc3RzSW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcHVwLmlkID0gJ3BvcHVwJztcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAnLCAnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHBvcHVwLCBudWxsKTtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucG9wdXBWaWV3TW9kZWwgPSBuZXcgdnVlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cInBvcHVwXCIgaWQ9XCJwb3B1cFwiIHYtc2hvdz1cIiFoaWRkZW5cIiByZWY9XCJwb3B1cFwiPlxuICA8ZGl2IGNsYXNzPVwicG9wdXBfX2hlYWRlclwiIHJlZj1cImhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzPVwicG9wdXBfX3RpdGxlXCI+e3sgdGl0bGUgfX08L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInBvcHVwX19oZWFkZXItYnV0dG9uc1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3B1cF9fY2xvc2VcIlxuICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJvbkNsb3NlQ2xpY2soKVwiXG4gICAgICAgIHRpdGxlPVwiQ2xvc2UgcG9wdXBcIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicG9wdXBfX2JvZHlcIiB2LWh0bWw9XCJjb250ZW50XCI+XG4gIDwvZGl2PlxuPC9kaXY+YCxcbiAgICAgICAgICAgIG1peGluczogW2RyYWdnYWJsZV8xLmRyYWdnYWJsZV0sXG4gICAgICAgICAgICBlbDogJyNwb3B1cCcsXG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NvdWInLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBnZXREcmFnSGFuZGxlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5oZWFkZXI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXREcmFnZ2FibGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnBvcHVwO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbG9zZUNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsb3NlUG9wdXAoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uUG9zdHNJbnNlcnRlZChwb3N0cykge1xuICAgICAgICBwb3N0cy5mb3JFYWNoKHRoaXMucHJvY2Vzc09FbWJlZExpbmtzLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwcm9jZXNzT0VtYmVkTGlua3MocG9zdCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgcG9zdENvbnRlbnQgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX2NvbnRlbnQnLCBwb3N0KTtcbiAgICAgICAgICAgIGlmICghcG9zdENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwb3N0TWVzc2FnZSA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdF9fbWVzc2FnZScsIHBvc3QpO1xuICAgICAgICAgICAgY29uc3QgbGlua3MgPSB1dGlsc18xLkRPTS5xc2EoJ2FbaHJlZl0nLCBwb3N0KTtcbiAgICAgICAgICAgIGxpbmtzLmZpbHRlcihsaW5rID0+ICFsaW5rLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcm9jZXNzZWQnKSlcbiAgICAgICAgICAgICAgICAubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXByb2Nlc3NlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5tYXAodXJsID0+IHVybC5tYXRjaCgnXmh0dHBzPzpcXC9cXC8oPzp3d3dcXC4pP2NvdWJcXC5jb21cXC92aWV3XFwvKFswLTlhLXpdKykkJykpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihtYXRjaGVzID0+IG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgobWF0Y2hlcykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvdWJVcmwgPSBgaHR0cHM6Ly9jb3ViLmNvbS9hcGkvdjIvY291YnMvJHttYXRjaGVzWzFdfWA7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FwaS9lbWJlZD91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoY291YlVybCl9YDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2FuXFwndCBsb2FkIGNvdWIgJyR7bWF0Y2hlc1swXX0nOmAsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291YiA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGh1bWJuYWlsVXJsID0gY291Yi5pbWFnZV92ZXJzaW9ucy50ZW1wbGF0ZS5yZXBsYWNlKCcle3ZlcnNpb259JywgJ3NtYWxsJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuY2xhc3NMaXN0LmFkZCgncG9zdF9fZmlsZScsICdmaWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5pbm5lckhUTUwgPSBgXG48ZGl2IGNsYXNzPVwicG9zdF9fZmlsZS1pbmZvIGZpbGUtaW5mbyBmaWxlc2l6ZVwiPlxuICA8YSBjbGFzcz1cImZpbGUtaW5mb19fbGlua1wiIGhyZWY9XCJodHRwczovL2NvdWIuY29tL3ZpZXcvJHtjb3ViLnBlcm1hbGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIj5Db3ViPC9hPlxuICA8c3BhbiBjbGFzcz1cImZpbGUtaW5mb19fc2l6ZVwiPjwvc3Bhbj5cbjwvZGl2PlxuXG48YSBjbGFzcz1cImZpbGVfX3RodW1ibmFpbCB0aHVtYm5haWwgdGh1bWJuYWlsLS12aWRlb1wiIGhyZWY9XCJodHRwczovL2NvdWIuY29tL3ZpZXcvJHtjb3ViLnBlcm1hbGlua31cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgPGltZyBjbGFzcz1cInRodW1ibmFpbF9fY29udGVudCB0aHVtYm5haWxfX2NvbnRlbnRfaW1hZ2VcIiBzcmM9XCIke3RodW1ibmFpbFVybH1cIiAvPlxuPC9hPmA7XG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbC5zdHlsZS5tYXhIZWlnaHQgPSAnMjUwcHgnO1xuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuc3R5bGUubWF4V2lkdGggPSAnMjUwcHgnO1xuICAgICAgICAgICAgICAgICAgICBwb3N0Q29udGVudC5pbnNlcnRCZWZvcmUodGh1bWJuYWlsLCBwb3N0TWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB1dGlsc18xLkRPTS5xcygnLnRodW1ibmFpbCcsIHRodW1ibmFpbCk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkNvdWJJblBvcHVwKGNvdWIpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW5cXCd0IGxvYWQgY291YiAnJHttYXRjaGVzWzBdfSc6YCwgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3BlbkNvdWJJblBvcHVwKGNvdWIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdWJVcmwgPSBgaHR0cHM6Ly9jb3ViLmNvbS92aWV3LyR7Y291Yi5wZXJtYWxpbmt9YDtcbiAgICAgICAgICAgIGNvbnN0IG9FbWJlZFVybCA9IGBodHRwczovL2NvdWIuY29tL2FwaS9vZW1iZWQuanNvbj91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoY291YlVybCl9JmF1dG9wbGF5PXRydWVgO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYCR7d2luZG93LmJhc2VVcmx9L2FwaS9lbWJlZD91cmw9JHtlbmNvZGVVUklDb21wb25lbnQob0VtYmVkVXJsKX1gO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBDYW5cXCd0IGxvYWQgY291YiAnaHR0cHM6Ly9jb3ViLmNvbS92aWV3LyR7Y291Yi5wZXJtYWxpbmt9JzpgLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFZpZXdNb2RlbC50aXRsZSA9ICdDb3ViIOKAlCAnICsgY291Yi50aXRsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLmNvbnRlbnQgPSBqc29uLmh0bWwucmVwbGFjZSgnbXV0ZWQ9dHJ1ZScsICdtdXRlZD1mYWxzZScpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBWaWV3TW9kZWwuc2V0UG9zaXRpb24oe1xuICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLm1heCgwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSBqc29uLndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgICAgIHk6IE1hdGgubWF4KDAsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSBqc29uLmhlaWdodCAvIDIpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBWaWV3TW9kZWwuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2FuXFwndCBsb2FkIGNvdWIgJ2h0dHBzOi8vY291Yi5jb20vdmlldy8ke2NvdWIucGVybWFsaW5rfSc6YCwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbG9zZVBvcHVwKCkge1xuICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucG9wdXBWaWV3TW9kZWwuY29udGVudCA9IG51bGw7XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0ID0gUG9zdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IF8xID0gcmVxdWlyZShcIi5cIik7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCBhcGlfMSA9IHJlcXVpcmUoXCIuLi9hcGlcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgUG9zdGluZ0Zvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlzSW5UaHJlYWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IF9fMS5TZXR0aW5nc01hbmFnZXIubG9hZCgpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHRoaXMub25Qb3N0c0luc2VydGVkLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBmb3JtID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0nKTtcbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2ggPSB3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaCgvXFwvcmVzXFwvKFxcZCspL2kpO1xuICAgICAgICBjb25zdCBpc0luVGhyZWFkID0gISFtYXRjaDtcbiAgICAgICAgY29uc3QgdGhyZWFkSWQgPSBpc0luVGhyZWFkID8gK21hdGNoWzFdIDogMDtcbiAgICAgICAgdGhpcy5pc0luVGhyZWFkID0gaXNJblRocmVhZDtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgdGhpcy52aWV3TW9kZWwgPSBuZXcgdnVlXzEuZGVmYXVsdCh7XG4gICAgICAgICAgICBlbDogZm9ybSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBgXG48Zm9ybSBjbGFzcz1cImNvbnRlbnRfX3Bvc3RpbmctZm9ybSBwb3N0aW5nLWZvcm1cIiBpZD1cInBvc3RpbmctZm9ybVwiXG4gIHYtYmluZDpjbGFzcz1cInsgJ3Bvc3RpbmctZm9ybS0tZmxvYXRpbmcnOiBwb3NpdGlvbiA9PSAnZmxvYXQnIH1cIlxuICB2LW9uOnN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXQoKVwiIHYtc2hvdz1cIiFoaWRkZW5cIlxuICByZWY9XCJmb3JtXCI+XG4gIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2hlYWRlclwiIHJlZj1cImhlYWRlclwiPlxuICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX190aXRsZVwiPnt7XG4gICAgICB0aHJlYWRJZCA/ICdSZXBseSB0byB0aHJlYWQgIycgKyB0aHJlYWRJZCA6ICdDcmVhdGUgdGhyZWFkJ1xuICAgIH19PC9zcGFuPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2hlYWRlci1idXR0b25zXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcmVzZXRcIlxuICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJyZXNldEZpZWxkcygpXCIgdGl0bGU9XCJDbGVhciBmb3JtXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fZmxvYXRcIlxuICAgICAgICB2LWlmPVwicG9zaXRpb24gIT09ICdmbG9hdCcgJiYgbW9kZSAhPT0gJ21vYmlsZSdcIlxuICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJtYWtlRmxvYXRpbmcoKVwiIHRpdGxlPVwiRmxvYXRpbmcgZm9ybVwiPjwvc3Bhbj5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3Jlc3RvcmVcIlxuICAgICAgICB2LWlmPVwicG9zaXRpb24gPT09ICdmbG9hdCcgJiYgbW9kZSAhPT0gJ21vYmlsZSdcIlxuICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJtb3ZlVG9Cb3R0b20oKVwiIHRpdGxlPVwiTW92ZSBmb3JtIHRvIGJvdHRvbVwiPjwvc3Bhbj5cblxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2Nsb3NlXCJcbiAgICAgICAgdi1vbjpjbGljay5zdG9wPVwib25DbG9zZUNsaWNrKClcIiB0aXRsZT1cIkNsb3NlIGZvcm1cIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19jb250ZW50XCI+XG4gICAgPHgtZmlsZS1wcmV2aWV3IGNsYXNzPVwicG9zdGluZy1mb3JtX19wcmV2aWV3XCJcbiAgICAgIHYtYmluZDpjbGFzcz1cIntcbiAgICAgICAgJ3Bvc3RpbmctZm9ybV9fcHJldmlldy0tcmlnaHQnOiBtb2RlID09ICdkZWZhdWx0J1xuICAgICAgICAgICYmIHNldHRpbmdzLnByZXZpZXdBbGlnbiA9PSAncmlnaHQnLFxuICAgICAgfVwiXG4gICAgICB2LWJpbmQ6ZmlsZT1cImZpbGVcIlxuICAgICAgdi1vbjpjbGljaz1cInNob3dGaWxlRGlhbG9nKClcIlxuICAgICAgdi1vbjpkcm9wPVwib25GaWxlRHJvcCgkZXZlbnQpXCJcbiAgICAgIHYtc2hvdz1cIm1vZGUgPT0gJ2RlZmF1bHQnIHx8IGZpbGVcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19wcmV2aWV3LXJlbW92ZVwiXG4gICAgICAgIHYtaWY9XCJmaWxlXCIgdi1vbjpjbGljay5zdG9wPVwiZmlsZSA9IG51bGxcIj48L3NwYW4+XG4gICAgPC94LWZpbGUtcHJldmlldz5cblxuICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX21haW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3Jvd1wiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fc3ViamVjdFwiIHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5zdWJqZWN0XCJcbiAgICAgICAgICB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjpjaGFuZ2U9XCJvblN1YmplY3RDaGFuZ2UoKVwiIC8+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dCBwb3N0aW5nLWZvcm1fX25hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMubmFtZVwiXG4gICAgICAgICAgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIHYtb246Y2hhbmdlPVwib25OYW1lQ2hhbmdlKClcIiAvPlxuXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInBvc3RpbmctZm9ybV9fYXR0YWNobWVudFwiIHYtc2hvdz1cIm1vZGUgPT0gJ21vYmlsZSdcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fYXR0YWNobWVudC1pbnB1dFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLmZpbGVcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICB2LW9uOmNoYW5nZT1cIm9uRmlsZUNoYW5nZSgkZXZlbnQudGFyZ2V0LmZpbGVzKVwiXG4gICAgICAgICAgICByZWY9XCJmaWxlXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX3N1Ym1pdFwiXG4gICAgICAgICAgdi1pZj1cIm1vZGUgPT0gJ2RlZmF1bHQnXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIj5SZXBseTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX21hcmt1cC1yb3cgbWFya3VwXCJcbiAgICAgICAgdi1zaG93PVwiKG1vZGUgPT09ICdtb2JpbGUnKSAmJiBzZXR0aW5ncy5zaG93TWFya3VwTW9iaWxlXG4gICAgICAgICAgfHwgKG1vZGUgIT09ICdtb2JpbGUnKSAmJiBzZXR0aW5ncy5zaG93TWFya3VwXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdiJylcIj5cbiAgICAgICAgICA8c3Ryb25nPmI8L3N0cm9uZz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2knKVwiPlxuICAgICAgICAgIDxlbT5pPC9lbT5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3UnKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFya3VwX191bmRlcmxpbmVcIj51PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgncycpXCI+XG4gICAgICAgICAgPGRlbD5zPC9kZWw+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzdWInKVwiPlxuICAgICAgICAgIDxzdWI+c3ViPC9zdWI+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzdXAnKVwiPlxuICAgICAgICAgIDxzdXA+c3VwPC9zdXA+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdjb2RlJylcIj5cbiAgICAgICAgICA8Y29kZT5jb2RlPC9jb2RlPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnc3BvaWxlcicpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3Nwb2lsZXIgbWFya3VwX19zcG9pbGVyLS12aXNpYmxlXCI+c3A8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdycCcpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3JwIG1hcmt1cF9fcnAtLXZpc2libGVcIj5ycDwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRRdW90ZSgpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3F1b3RlXCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcm93XCI+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fbWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5tZXNzYWdlXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIHYtb246a2V5ZG93bj1cIm9uTWVzc2FnZUtleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgdi1vbjpwYXN0ZT1cIm9uTWVzc2FnZVBhc3RlKCRldmVudClcIlxuICAgICAgICAgIHJlZj1cIm1lc3NhZ2VcIj48L3RleHRhcmVhPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgdi1pZj1cInN0YXR1c1wiIGNsYXNzPVwicG9zdGluZy1mb3JtX19zdGF0dXNcIj57eyBzdGF0dXMgfX08L2Rpdj5cblxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3N1Ym1pdCAgcG9zdGluZy1mb3JtX19zdWJtaXQtLW1vYmlsZVwiXG4gICAgICAgIHYtaWY9XCJtb2RlID09ICdtb2JpbGUnXCIgdi1iaW5kOmRpc2FibGVkPVwiZGlzYWJsZWRcIj5SZXBseTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZm9ybT5gLFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmaWxlOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJycsXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNhdmVGb3JtU3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLmZsb2F0XG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdmbG9hdCcgOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgbW9kZTogJ21vYmlsZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgICAgIHRocmVhZElkKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyZWFkSWQ7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXR0aW5ncygpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZVN1YmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9hZCBzYXZlZCBzdWJqZWN0LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJqZWN0ID0gbG9jYWxTdG9yYWdlWydwb3N0aW5nLWZvcm0uc3ViamVjdCddO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNhdmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgc2F2ZWQgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLm5hbWUnXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9kZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZSA9IHRoaXMudXBkYXRlTW9kZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5mbG9hdFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHMocG9zaXRpb24pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveWVkKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9yZXNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX3Jlc2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAneC1maWxlLXByZXZpZXcnOiBfMS5GaWxlUHJldmlldyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaXhpbnM6IFtcbiAgICAgICAgICAgICAgICBfMS5kcmFnZ2FibGUsXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgICAgIGdldERyYWdIYW5kbGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmhlYWRlcjtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdldERyYWdnYWJsZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gIT09ICdmbG9hdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLmZvcm07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUubGVmdCA9IGAke2Nvb3Jkcy54fXB4YDtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlLnN0eWxlLnRvcCA9IGAke2Nvb3Jkcy55fXB4YDtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnNldHRpbmdzLmZvcm0uZmxvYXRQb3NpdGlvbiA9IGNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgX18xLlNldHRpbmdzTWFuYWdlci5zYXZlKGNvbXBvbmVudC5zZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkRyYWdnYWJsZVJlc2l6ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHRoaXMuZ2V0UG9zaXRpb24oKSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVzZXRGaWVsZHMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZVN1YmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLnN1YmplY3QgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNhdmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5uYW1lID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5maWxlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYWtlRmxvYXRpbmcoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5tYWtlRmxvYXRpbmcoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vdmVUb0JvdHRvbSgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvd0ZpbGVEaWFsb2coKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRyZWZzLmZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmlsZS5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVNb2RlKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGUgPSB3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCA/ICdtb2JpbGUnIDogJ2RlZmF1bHQnO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnbW9iaWxlJyAmJiB0aGlzLnBvc2l0aW9uID09PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xvc2VDbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnVwZGF0ZVJlcGx5QnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1YmplY3RDaGFuZ2UoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgc3ViamVjdC5cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlWydwb3N0aW5nLWZvcm0uc3ViamVjdCddID0gdGhpcy5maWVsZHMuc3ViamVjdDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTmFtZUNoYW5nZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBuYW1lLlxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2VbJ3Bvc3RpbmctZm9ybS5uYW1lJ10gPSB0aGlzLmZpZWxkcy5uYW1lO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25GaWxlRHJvcChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0ICYmIHRleHQubWF0Y2goL2h0dHBzPzpcXC9cXC9bLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLH1cXC5bYS16XXsyLH1cXGJbLWEtekEtWjAtOUA6JV9cXCsufiM/JlxcLz1dKi8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub3BlbignR0VUJywgdGV4dCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0geGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgRXJyb3I6ICR7eGhyLnN0YXR1c30gJHt4aHIuc3RhdHVzVGV4dH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkZpbGVDaGFuZ2UoZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gZmlsZXMubGVuZ3RoID8gZmlsZXNbMF0gOiBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlS2V5RG93bihlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1Ym1pdCBmb3JtIG9uIEN0cmwrRW50ZXIgaW4gdGhlIG1lc3NhZ2UgZmllbGQuXG4gICAgICAgICAgICAgICAgICAgIGlmICgoZS5rZXlDb2RlID09IDEwIHx8IGUua2V5Q29kZSA9PSAxMykgJiYgZS5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTWVzc2FnZVBhc3RlKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzdGUgZmlsZS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGUuY2xpcGJvYXJkRGF0YSB8fCBlLm9yaWdpbmFsRXZlbnQuY2xpcGJvYXJkRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkYXRhLml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUuc3RhcnRzV2l0aCgnYXVkaW8vJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUuc3RhcnRzV2l0aCgndmlkZW8vJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5zZXJ0TWFya3VwKHRhZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRWwgPSB0aGlzLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgLSBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmZpZWxkcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVuaW5nVGFnID0gYFske3RhZ31dYDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2luZ1RhZyA9IGBbLyR7dGFnfV1gO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCB8fCBjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5pbnNlcnRUYWdzSW5QYWlycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGV4dCBpcyBzZWxlY3RlZCwgd3JhcCBpdCBpbiBhIHRhZyBwYWlyLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmJlZ2luLCBzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb24uZW5kICsgb3BlbmluZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmxhc3RJbmRleE9mKG9wZW5pbmdUYWcsIHNlbGVjdGlvbi5iZWdpbikgPiBtZXNzYWdlLmxhc3RJbmRleE9mKGNsb3NpbmdUYWcsIHNlbGVjdGlvbi5iZWdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHNlbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5lbmQgKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5zZXJ0UXVvdGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHRoaXMuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZSA9IG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyID0gbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpbmVCZWZvcmUgPSBiZWZvcmUubGVuZ3RoICYmICFiZWZvcmUuZW5kc1dpdGgoJ1xcbicpID8gJ1xcbicgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUFmdGVyID0gIWFmdGVyLmxlbmd0aCB8fCAhYWZ0ZXIuc3RhcnRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZVRleHQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGUgPSBgJHtuZXdMaW5lQmVmb3JlfT4gJHtxdW90ZVRleHR9JHtuZXdMaW5lQWZ0ZXJ9YDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5iZWdpbiArIHF1b3RlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgcmVwbGFjZXMgdG8gdGhlIG1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlcyA9IGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnJlcGxhY2VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlcGxhY2VzLnJlZHVjZSgobWVzc2FnZSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoaXRlbS5wYXR0ZXJuLCAnZ20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKHJlZ2V4cCwgaXRlbS5yZXBsYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuZmllbGRzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHlpZWxkIGFwaV8xLkFwaS5jcmVhdGVQb3N0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogdGhpcy5maWVsZHMuc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5maWVsZHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogdGhpcy5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzc1BlcmNlbnQgPSBNYXRoLmNlaWwoZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgVXBsb2FkaW5nLi4uICR7cHJvZ3Jlc3NQZXJjZW50fSVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgZm9ybSB0byB0aGUgaW5pdGlhbCBsb2NhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJblRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIERFIHRocmVhZCB1cGRhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZXIgPSB1dGlsc18xLkRPTS5xcygnLmRlLXRoci11cGRhdGVyLWxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gdGhyZWFkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEVycm9yOiAke2V9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5zY3JvbGxCb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTY3JvbGwgdG8gdGhlIGxhc3QgcG9zdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3Q6bnRoLWxhc3Qtb2YtdHlwZSgxKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHV0aWxzXzEuRE9NLnFzKCcubGF5b3V0X19jb250ZW50Jyk7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmxpbmsnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS5maWVsZHMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBiZWZvcmUgPSBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyID0gbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUJlZm9yZSA9IGJlZm9yZS5sZW5ndGggJiYgIWJlZm9yZS5lbmRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpbmVBZnRlciA9ICFhZnRlci5sZW5ndGggfHwgIWFmdGVyLnN0YXJ0c1dpdGgoJ1xcbicpID8gJ1xcbicgOiAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmbGluaycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RRdW90ZUluZGV4ID0gbWVzc2FnZS5sYXN0SW5kZXhPZignPj4nLCBzZWxlY3Rpb24uYmVnaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlU2FtZVBvc3QgPSBsYXN0UXVvdGVJbmRleCAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgbWVzc2FnZS5sYXN0SW5kZXhPZihgPj4ke2lkfWAsIHNlbGVjdGlvbi5iZWdpbikgPj0gbGFzdFF1b3RlSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gSWYgcXVvdGluZyB0aGUgc2FtZSBwb3N0IGFnYWluLCBub3QgaW5zZXJ0IGlkLlxuICAgICAgICAgICAgICAgIGxldCBxdW90ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChxdW90ZVNhbWVQb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gcXVvdGVUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke25ld0xpbmVCZWZvcmV9PiAke3F1b3RlVGV4dH0ke25ld0xpbmVBZnRlcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBxdW90ZVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7bmV3TGluZUJlZm9yZX0+PiR7aWR9XFxuPiAke3F1b3RlVGV4dH0ke25ld0xpbmVBZnRlcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAke25ld0xpbmVCZWZvcmV9Pj4ke2lkfSR7bmV3TGluZUFmdGVyfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEluc2VydCByZXBseSBtYXJrdXAuXG4gICAgICAgICAgICAgICAgdm0uZmllbGRzLm1lc3NhZ2UgPSBbXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZSxcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyLFxuICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJblRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocXVvdGVTYW1lUG9zdCAmJiAhcXVvdGVUZXh0ICYmICF2bS5oaWRkZW4gJiYgdm0ucG9zaXRpb24gIT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5wb3NpdGlvbiAhPT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgZm9ybSB0byB0aGUgcG9zdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5wb3N0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Qb3N0KHBvc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Qb3N0c0luc2VydGVkKHBvc3RzLCBpbml0aWFsKSB7XG4gICAgICAgIGlmICghaW5pdGlhbCAmJiB0aGlzLnNldHRpbmdzLmNvbW1vbi5zY3JvbGxUb05ld1Bvc3RzKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxpbmdFbCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzSGVpZ2h0ID0gcG9zdHMucmVkdWNlKCh0b3RhbCwgcG9zdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShwb3N0LCAnJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFyZ2luID0gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpKVxuICAgICAgICAgICAgICAgICAgICArIHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgcG9zdC5vZmZzZXRIZWlnaHQgKyBtYXJnaW47XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIC8vIElmIGluIHRoZSBib3R0b20gYXJlYS5cbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbU9mZnNldCA9IHNjcm9sbGluZ0VsLnNjcm9sbEhlaWdodCAtIHNjcm9sbGluZ0VsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbUFyZWEgPSBwb3N0c0hlaWdodCArIDEuMjUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICBpZiAoYm90dG9tT2Zmc2V0IDwgYm90dG9tQXJlYSkge1xuICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0aGUgbGFzdCBwb3N0LlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdDpudGgtbGFzdC1vZi10eXBlKDEpJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNvbW1vbi5tb3ZlUG9zdEhlYWRlclJlZmxpbmtJY29uVG9ERSkge1xuICAgICAgICAgICAgcG9zdHMuZm9yRWFjaChwb3N0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIHJlcGx5IGljb24gYWZ0ZXIgREUgaGlkZSBpY29uLlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGx5SWNvbiA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX3JlZmxpbmstd3JhcHBlciA+IC5wb3N0LWhlYWRlcl9fcmVmbGluay1pY29uJywgcG9zdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVIaWRlID0gdXRpbHNfMS5ET00ucXMoJy5kZS1idG4taGlkZScsIHBvc3QpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBseUljb24gJiYgZGVIaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGx5SWNvbi5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShkZUhpZGUsIHJlcGx5SWNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlUmVwbHlCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybS1zaG93Jyk7XG4gICAgICAgIGlmICghc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZpZXdNb2RlbC5oaWRkZW4gfHwgdGhpcy52aWV3TW9kZWwucG9zaXRpb24gIT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnZpZXdNb2RlbC5oaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLnZpZXdNb2RlbC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgbWFrZUZsb2F0aW5nKCkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgdm0ucG9zaXRpb24gPSAnZmxvYXQnO1xuICAgICAgICB0aGlzLnNldHRpbmdzLmZvcm0uZmxvYXQgPSB0cnVlO1xuICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5zZXR0aW5ncy5mb3JtLmZsb2F0UG9zaXRpb247XG4gICAgICAgIHZtLnNldFBvc2l0aW9uKHZtLmNoZWNrQm91bmRzKHBvc2l0aW9uKSk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVwbHlCdXR0b24oKTtcbiAgICB9XG4gICAgbW92ZVRvUG9zdChwb3N0LCBmb2N1cyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoZm9ybSkge1xuICAgICAgICAgICAgcG9zdC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShmb3JtLCBwb3N0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgdm0ucG9zaXRpb24gPSAncG9zdCc7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybS5mbG9hdCA9IGZhbHNlO1xuICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybS1zaG93Jyk7XG4gICAgICAgIGlmIChzaG93QnV0dG9uKSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUmVwbHlCdXR0b24oKTtcbiAgICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlVG9Cb3R0b20oZm9jdXMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBmb3JtID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0nKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXdyYXBwZXInKTtcbiAgICAgICAgaWYgKGZvcm0gJiYgd3JhcHBlcikge1xuICAgICAgICAgICAgd3JhcHBlci5pbnNlcnRCZWZvcmUoZm9ybSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIGNvbnN0IHZtID0gdGhpcy52aWV3TW9kZWw7XG4gICAgICAgIHZtLnBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybS5mbG9hdCA9IGZhbHNlO1xuICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVwbHlCdXR0b24oKTtcbiAgICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUG9zdGluZ0Zvcm0gPSBQb3N0aW5nRm9ybTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBzZXR0aW5nc19mb3JtX3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0udnVlXCIpKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBzZXR0aW5nc0Zvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3NldHRpbmdzX2Zvcm0nKTtcbiAgICAgICAgaWYgKCFzZXR0aW5nc0Zvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyB2dWVfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGVsOiAnI3NldHRpbmdzX2Zvcm0nLFxuICAgICAgICAgICAgcmVuZGVyOiBoID0+IGgoc2V0dGluZ3NfZm9ybV92dWVfMS5kZWZhdWx0KSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5TZXR0aW5ncyA9IFNldHRpbmdzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgU3R5bGVTd2l0Y2gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IHt9O1xuICAgICAgICAvLyBQYXJzZSBzZWxlY3RhYmxlIHN0eWxlcyBmcm9tIDxoZWFkPlxuICAgICAgICBjb25zdCBzdHlsZXMgPSB1dGlsc18xLkRPTS5xc2EoJ2xpbmtbdGl0bGVdJyk7XG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gc3R5bGUudGl0bGU7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBzdHlsZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzW3RpdGxlXSA9IHVybDtcbiAgICAgICAgICAgIGlmICghc3R5bGUuaGFzQXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEdldCBzZWxlY3RlZCBzdHlsZVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3N0eWxlJywgJ1N5bnRod2F2ZScpO1xuICAgICAgICB0aGlzLnNldFN0eWxlKHNlbGVjdGVkX3N0eWxlKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlX3N3aXRjaGVyID0gdXRpbHNfMS5ET00ucWlkKCdzdHlsZS1zd2l0Y2hlcicpO1xuICAgICAgICBpZiAoc3R5bGVfc3dpdGNoZXIpIHtcbiAgICAgICAgICAgIC8vIFBvcHVsYXRlIHN0eWxlIHN3aXRjaGVyIHdpZGdldFxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gT2JqZWN0LmtleXModGhpcy5zdHlsZXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHN0eWxlc1tpXTtcbiAgICAgICAgICAgICAgICBzdHlsZV9zd2l0Y2hlci5pbm5lckhUTUwgKz0gYDxvcHRpb24gY2xhc3M9XCJzdHlsZS1zd2l0Y2hlcl9fb3B0aW9uXCIgdmFsdWU9XCIke3RpdGxlfVwiPiR7dGl0bGV9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBzdHlsZSBjaGFuZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgIHN0eWxlX3N3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0eWxlKHN0eWxlX3N3aXRjaGVyLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFN0eWxlKHN0eWxlKSB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSB1dGlsc18xLkRPTS5xcygnaGVhZCcpO1xuICAgICAgICAvLyBJZiBubyA8aGVhZD4gZWxlbWVudCwgZG8gbm90aGluZ1xuICAgICAgICBpZiAoIWhlYWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuRE9NLnFzKCdsaW5rW2RhdGEtc2VsZWN0ZWRdJyk7XG4gICAgICAgIGlmIChzZWxlY3RlZF9zdHlsZSkge1xuICAgICAgICAgICAgLy8gSWYgc3R5bGUgYWxyZWFkeSBzZWxlY3RlZCwgZG8gbm90aGluZ1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkX3N0eWxlLnRpdGxlID09PSBzdHlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmV2aW91c2x5IHNlbGVjdGVkIHN0eWxlIGZyb20gPGhlYWQ+XG4gICAgICAgICAgICBzZWxlY3RlZF9zdHlsZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgY3VycmVudGx5IHNlbGVjdGVkIHN0eWxlIHRvIDxoZWFkPlxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnN0eWxlc1tzdHlsZV07XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gICAgICAgIGxpbmsudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIC8vIFNhdmUgc2VsZWN0ZWQgc3R5bGVcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9kYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZXhwaXJhdGlvbl9kYXRlLnNldFRpbWUoZXhwaXJhdGlvbl9kYXRlLmdldFRpbWUoKSArIDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICB1dGlsc18xLkNvb2tpZS5zZXQoJ3RpbnlpYl9zdHlsZScsIHN0eWxlLCBleHBpcmF0aW9uX2RhdGUpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3R5bGVTd2l0Y2ggPSBTdHlsZVN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBldmVudEJ1cyA9IG5ldyB2dWVfMS5kZWZhdWx0KCk7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRCdXM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFdmVudHM7XG4oZnVuY3Rpb24gKEV2ZW50cykge1xuICAgIEV2ZW50c1tcIlJlYWR5XCJdID0gXCJyZWFkeVwiO1xuICAgIEV2ZW50c1tcIlBvc3RzSW5zZXJ0ZWRcIl0gPSBcInBvc3RzX2luc2VydGVkXCI7XG4gICAgRXZlbnRzW1wiUG9zdENyZWF0ZWRcIl0gPSBcInBvc3RfY3JlYXRlZFwiO1xuICAgIEV2ZW50c1tcIkluc2VydE1hcmt1cFwiXSA9IFwiaW5zZXJ0X21hcmt1cFwiO1xufSkoRXZlbnRzID0gZXhwb3J0cy5FdmVudHMgfHwgKGV4cG9ydHMuRXZlbnRzID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFwaV8xID0gcmVxdWlyZShcIi4vYXBpXCIpO1xuZXhwb3J0cy5BcGkgPSBhcGlfMS5BcGk7XG52YXIgZXZlbnRfYnVzXzEgPSByZXF1aXJlKFwiLi9ldmVudC1idXNcIik7XG5leHBvcnRzLmV2ZW50QnVzID0gZXZlbnRfYnVzXzEuZXZlbnRCdXM7XG52YXIgZXZlbnRzXzEgPSByZXF1aXJlKFwiLi9ldmVudHNcIik7XG5leHBvcnRzLkV2ZW50cyA9IGV2ZW50c18xLkV2ZW50cztcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzTWFuYWdlciA9IHNldHRpbmdzXzEuU2V0dGluZ3NNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBzZXR0aW5nc0tleSA9ICdzZXR0aW5ncyc7XG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIGxheW91dDogJ2xlZnQnLFxuICAgICAgICBzaG93UG9zdEhlYWRlclJlZmxpbmtJY29uOiB0cnVlLFxuICAgICAgICBtb3ZlUG9zdEhlYWRlclJlZmxpbmtJY29uVG9ERTogZmFsc2UsXG4gICAgICAgIHNob3dQb3N0UmVmbGlua0ljb246IGZhbHNlLFxuICAgICAgICBzY3JvbGxUb05ld1Bvc3RzOiB0cnVlLFxuICAgICAgICBzbW9vdGhTY3JvbGw6IHRydWUsXG4gICAgICAgIHNob3dWaWRlb092ZXJsYXk6IGZhbHNlLFxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHByZXZpZXdBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgc2Nyb2xsQm90dG9tOiB0cnVlLFxuICAgICAgICBzaG93TWFya3VwOiB0cnVlLFxuICAgICAgICBzaG93TWFya3VwTW9iaWxlOiBmYWxzZSxcbiAgICAgICAgaW5zZXJ0VGFnc0luUGFpcnM6IHRydWUsXG4gICAgICAgIHNhdmVGb3JtU3RhdGU6IGZhbHNlLFxuICAgICAgICBzYXZlU3ViamVjdDogZmFsc2UsXG4gICAgICAgIHNhdmVOYW1lOiB0cnVlLFxuICAgICAgICBmbG9hdDogZmFsc2UsXG4gICAgICAgIGZsb2F0UG9zaXRpb246IHsgeDogMTAwLCB5OiAxMDAgfSxcbiAgICAgICAgcmVwbGFjZXM6IFtdLFxuICAgIH0sXG4gICAgdGltZToge1xuICAgICAgICBsb2NhbGU6ICdkZWZhdWx0JyxcbiAgICAgICAgbG9jYWxlQ3VzdG9tOiAnJyxcbiAgICAgICAgem9uZTogJ2RlZmF1bHQnLFxuICAgICAgICB6b25lRml4ZWQ6IDAsXG4gICAgICAgIGZvcm1hdDogJ2RlZmF1bHQnLFxuICAgICAgICBmb3JtYXRDdXN0b206ICcnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpO1xufVxuZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBPYmplY3QuYXNzaWduKHt9LCB0YXJnZXQpO1xuICAgIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W2tleV0gPSBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5jbGFzcyBTZXR0aW5nc01hbmFnZXIge1xuICAgIHN0YXRpYyBsb2FkKCkge1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc2V0dGluZ3NLZXkpKTtcbiAgICAgICAgcmV0dXJuIG1lcmdlKGRlZmF1bHRTZXR0aW5ncywgc2V0dGluZ3MpO1xuICAgIH1cbiAgICBzdGF0aWMgc2F2ZShzZXR0aW5ncykge1xuICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzZXR0aW5nc0tleSwgZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0cy5TZXR0aW5nc01hbmFnZXIgPSBTZXR0aW5nc01hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIENvb2tpZSB7XG4gICAgc3RhdGljIGdldChuYW1lLCBfZGVmYXVsdCA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29va2llX3N0ciA9IGA7ICR7ZG9jdW1lbnQuY29va2llfWA7XG4gICAgICAgIGNvbnN0IGNvb2tpZV9wYXJ0cyA9IGNvb2tpZV9zdHIuc3BsaXQoYDsgJHtuYW1lfT1gKTtcbiAgICAgICAgaWYgKGNvb2tpZV9wYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlX2VuYyA9IGNvb2tpZV9wYXJ0cy5wb3AoKS5zcGxpdCgnOycpLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlX2VuYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0O1xuICAgIH1cbiAgICBzdGF0aWMgc2V0KG5hbWUsIHZhbHVlLCBleHBpcmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlX2VuYyA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25fc3RyID0gZXhwaXJhdGlvbi50b1VUQ1N0cmluZygpO1xuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlX2VuY307IHBhdGg9LzsgZXhwaXJlcz0ke2V4cGlyYXRpb25fc3RyfWA7XG4gICAgfVxufVxuZXhwb3J0cy5Db29raWUgPSBDb29raWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIERPTSB7XG4gICAgc3RhdGljIHFpZChpZCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIH1cbiAgICBzdGF0aWMgcXMoc2VsZWN0b3IsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH1cbiAgICBzdGF0aWMgcXNhKHNlbGVjdG9yLCBjb250ZXh0ID0gbnVsbCkge1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbGVtZW50TGlzdCA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50TGlzdCk7XG4gICAgfVxufVxuZXhwb3J0cy5ET00gPSBET007XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb29raWVfMSA9IHJlcXVpcmUoXCIuL2Nvb2tpZVwiKTtcbmV4cG9ydHMuQ29va2llID0gY29va2llXzEuQ29va2llO1xudmFyIGRvbV8xID0gcmVxdWlyZShcIi4vZG9tXCIpO1xuZXhwb3J0cy5ET00gPSBkb21fMS5ET007XG52YXIgdGltZV8xID0gcmVxdWlyZShcIi4vdGltZVwiKTtcbmV4cG9ydHMuVGltZSA9IHRpbWVfMS5UaW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBUaW1lIHtcbiAgICBzdGF0aWMgZm9ybWF0KHRpbWUsIHNldHRpbmdzKSB7XG4gICAgICAgIGlmIChzZXR0aW5ncy50aW1lLmxvY2FsZSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICAgIHRpbWUgPSB0aW1lLnNldExvY2FsZShzZXR0aW5ncy50aW1lLmxvY2FsZUN1c3RvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzLnRpbWUuem9uZSA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc2V0dGluZ3MudGltZS56b25lRml4ZWQ7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXRTdHIgPSAnVVRDJyArIChvZmZzZXQgPj0gMCA/ICcrJyA6ICcnKSArIG9mZnNldC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGltZSA9IHRpbWUuc2V0Wm9uZShvZmZzZXRTdHIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy50aW1lLmZvcm1hdCA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lLnRvRm9ybWF0KHNldHRpbmdzLnRpbWUuZm9ybWF0Q3VzdG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aW1lLnRvRm9ybWF0KCdkLkxMLnl5eXkgSEg6bW06c3MnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuVGltZSA9IFRpbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGx1eG9uOyIsIm1vZHVsZS5leHBvcnRzID0gVnVlOyJdLCJzb3VyY2VSb290IjoiIn0=