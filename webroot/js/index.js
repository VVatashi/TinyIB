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

/***/ "./components/thread-updater.ts?vue&type=script&lang=ts&":
/*!***************************************************************!*\
  !*** ./components/thread-updater.ts?vue&type=script&lang=ts& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_thread_updater_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/ts-loader!./thread-updater.ts?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js!./components/thread-updater.ts?vue&type=script&lang=ts&");
/* harmony import */ var _node_modules_ts_loader_index_js_thread_updater_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ts_loader_index_js_thread_updater_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_ts_loader_index_js_thread_updater_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_ts_loader_index_js_thread_updater_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_thread_updater_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/thread-updater.vue":
/*!***************************************!*\
  !*** ./components/thread-updater.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thread_updater_vue_vue_type_template_id_5917a301___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thread-updater.vue?vue&type=template&id=5917a301& */ "./components/thread-updater.vue?vue&type=template&id=5917a301&");
/* harmony import */ var _thread_updater_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thread-updater.ts?vue&type=script&lang=ts& */ "./components/thread-updater.ts?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _thread_updater_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _thread_updater_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _thread_updater_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _thread_updater_vue_vue_type_template_id_5917a301___WEBPACK_IMPORTED_MODULE_0__["render"],
  _thread_updater_vue_vue_type_template_id_5917a301___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/thread-updater.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/thread-updater.vue?vue&type=template&id=5917a301&":
/*!**********************************************************************!*\
  !*** ./components/thread-updater.vue?vue&type=template&id=5917a301& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thread_updater_vue_vue_type_template_id_5917a301___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./thread-updater.vue?vue&type=template&id=5917a301& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/thread-updater.vue?vue&type=template&id=5917a301&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thread_updater_vue_vue_type_template_id_5917a301___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_thread_updater_vue_vue_type_template_id_5917a301___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@vvatashi/color-picker/dist/color-picker.js":
/*!******************************************************************!*\
  !*** ./node_modules/@vvatashi/color-picker/dist/color-picker.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! vue */ "vue")):undefined}(window,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,u){var s,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=s):i&&(s=u?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(l.functional){l._injectStyles=s;var c=l.render;l.render=function(t,e){return s.call(e),c(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:l}}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16);e.HSV=r.HSV;var i=n(17);e.RGB=i.RGB;var o=n(18);e.HSVColorPicker=o.HSVColorPicker,e.HSVHuePicker=o.HSVHuePicker,e.SVPicker=o.SVPicker},function(t,e,n){"use strict";n.r(e);var r=n(3),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=i.a},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(9)),o=r(n(10)),a=r(n(14)),u=r(n(15));e.default=i.default.extend({mixins:[o.default],components:{"sv-picker":a.default,"hsv-hue-picker":u.default},props:{width:{type:Number,default:256},height:{type:Number,default:256},font:{type:String,default:"bold 16px sans-serif"},showLabels:{type:Boolean,default:!0}},data:function(){return{hue$:this.hue,saturation$:this.saturation,value$:this.value}},computed:{hsv:function(){return{hue:this.hue$||this.hue,saturation:this.saturation$||this.saturation,value:this.value$||this.value}}},methods:{onSVChange:function(t){var e=t.saturation,n=t.value;this.saturation$=e,this.value$=n},onHueChange:function(t){var e=t.hue;this.hue$=e}}})},function(t,e,n){"use strict";n.r(e);var r=n(5),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=i.a},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(9)),o=n(1),a=r(n(10));e.default=i.default.extend({mixins:[a.default],props:{width:{type:Number,default:256},height:{type:Number,default:256},font:{type:String,default:"bold 16px sans-serif"},showLabels:{type:Boolean,default:!0}},data:function(){return{saturation$:this.saturation,value$:this.value}},computed:{hsv:function(){return{hue:this.hue,saturation:this.saturation$||this.saturation,value:this.value$||this.value}}},watch:{hue:function(){this.updateCanvas()}},mounted:function(){this.updateCanvas()},methods:{updateCanvas:function(){var t=this.$refs.canvas.getContext("2d");if(t){t.globalCompositeOperation="source-over",t.lineWidth=2;for(var e=0;e<this.height;++e){var n=o.RGB.toHex(o.HSV.toRGB({hue:this.hue,saturation:0,value:1-e/this.height})),r=o.RGB.toHex(o.HSV.toRGB({hue:this.hue,saturation:1,value:1-e/this.height})),i=t.createLinearGradient(0,0,this.width,0);i.addColorStop(0,n),i.addColorStop(1,r),t.strokeStyle=i,t.beginPath(),t.moveTo(0,e),t.lineTo(this.width,e),t.stroke()}if(t.globalCompositeOperation="difference",this.showLabels){t.fillStyle="#7f7f7f",t.textAlign="center",t.textBaseline="top",t.font=this.font,t.fillText("Saturation",this.width/2,4),t.save(),t.rotate(Math.PI/2),t.fillText("Value",this.height/2,4-this.width),t.restore()}var a=this.saturation$||this.saturation,u=this.value$||this.value,s=a*this.width,l=(1-u)*this.height;t.strokeStyle="#7f7f7f",t.lineWidth=1,t.strokeRect(s-2.5,l-2.5,5,5)}},onPick:function(t){if(1===t.buttons){var e=this.$refs.canvas.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.saturation$=n/e.width,this.value$=1-r/e.height,this.$emit("change",{hue:this.hue,saturation:this.saturation$,value:this.value$}),this.updateCanvas()}}}})},function(t,e,n){"use strict";n.r(e);var r=n(7),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=i.a},function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(9)),a=n(1),u=i(n(10));e.default=o.default.extend({mixins:[u.default],props:{width:{type:Number,default:32},height:{type:Number,default:256},font:{type:String,default:"bold 16px sans-serif"},showLabel:{type:Boolean,default:!0}},data:function(){return{hue$:this.hue}},computed:{hsv:function(){return{hue:this.hue$||this.hue,saturation:this.saturation,value:this.value}}},watch:{saturation:function(){this.updateCanvas()},value:function(){this.updateCanvas()}},mounted:function(){this.updateCanvas()},methods:{updateCanvas:function(){var t=this.$refs.canvas.getContext("2d");if(t){t.globalCompositeOperation="copy";for(var e=t.createLinearGradient(0,0,0,this.height),n=0;n<=6;++n)e.addColorStop(n/6,a.RGB.toHex(a.HSV.toRGB(r({},this.hsv,{hue:60*n}))));t.fillStyle=e,t.fillRect(0,0,this.width,this.height),t.globalCompositeOperation="difference",this.showLabel&&(t.fillStyle="#7f7f7f",t.textAlign="center",t.textBaseline="middle",t.font=this.font,t.save(),t.rotate(Math.PI/2),t.fillText("Hue",this.height/2,-this.width/2),t.restore());var i=(this.hue$||this.hue)*this.height/360;t.strokeStyle="#7f7f7f",t.lineWidth=1,t.strokeRect(0,i-2.5,this.width,5)}},onPick:function(t){if(1===t.buttons){var e=this.$refs.canvas.getBoundingClientRect(),n=t.clientY-e.top;this.hue$=360*n/e.height,this.$emit("change",this.hsv),this.updateCanvas()}}}})},function(t,e,n){var r=n(21);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(23).default)("d84eb604",r,!1,{})},function(e,n){e.exports=t},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1);e.default={props:{hue:{type:Number,default:0},saturation:{type:Number,default:1},value:{type:Number,default:1}},computed:{hsv:function(){return{hue:this.hue,saturation:this.saturation,value:this.value}},rgb:function(){return r.HSV.toRGB(this.hsv)},hex:function(){return r.RGB.toHex(this.rgb)}}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"color-picker"},[n("sv-picker",t._b({staticClass:"color-picker__sv",attrs:{width:t.width,height:t.height,font:t.font,"show-labels":t.showLabels},on:{change:t.onSVChange}},"sv-picker",t.hsv,!1)),n("hsv-hue-picker",t._b({staticClass:"color-picker__hue",attrs:{width:t.width/8,height:t.height,font:t.font,"show-label":t.showLabels},on:{change:t.onHueChange}},"hsv-hue-picker",t.hsv,!1))],1)},i=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"canvas",staticClass:"sv-picker",attrs:{width:this.width,height:this.height},on:{mousedown:this.onPick,mousemove:this.onPick}})},i=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("canvas",{ref:"canvas",staticClass:"hue-picker",attrs:{width:this.width,height:this.height},on:{mousedown:this.onPick,mousemove:this.onPick}})},i=[];r._withStripped=!0,n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},function(t,e,n){"use strict";n.r(e);var r=n(12),i=n(4);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var a=n(0),u=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);u.options.__file="src/components/sv-picker.vue",e.default=u.exports},function(t,e,n){"use strict";n.r(e);var r=n(13),i=n(6);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var a=n(0),u=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);u.options.__file="src/components/hsv-hue-picker.vue",e.default=u.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.toRGB=function(t){var e=t.hue,n=t.saturation,r=t.value,i=r*(1-n),o=e%60*(r-i)/60,a=i+o,u=r-o;switch(Math.floor(e/60)%6){default:case 0:return{red:r,green:a,blue:i};case 1:return{red:u,green:r,blue:i};case 2:return{red:i,green:r,blue:a};case 3:return{red:i,green:u,blue:r};case 4:return{red:a,green:i,blue:r};case 5:return{red:r,green:i,blue:u}}},t}();e.HSV=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.toHSV=function(t){var e=t.red,n=t.green,r=t.blue,i=Math.max(e,n,r),o=Math.min(e,n,r),a=0,u=i-o;return 0!==u&&(i===e?a=60*(n-r)/u+n<r?360:0:i===n?a=60*(r-e)/u+120:i===r&&(a=60*(e-n)/u+240)),{hue:a,saturation:i?1-o/i:0,value:i}},t.toHex=function(t){var e=t.red,n=t.green,r=t.blue,i=Math.floor(255*e).toString(16);i=i.length<2?"0"+i:i;var o=Math.floor(255*n).toString(16);o=o.length<2?"0"+o:o;var a=Math.floor(255*r).toString(16);return"#"+i+o+(a=a.length<2?"0"+a:a)},t}();e.RGB=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(19);e.HSVColorPicker=r.default;var i=n(15);e.HSVHuePicker=i.default;var o=n(14);e.SVPicker=o.default},function(t,e,n){"use strict";n.r(e);var r=n(11),i=n(2);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n(20);var a=n(0),u=Object(a.a)(i.default,r.a,r.b,!1,null,null,null);u.options.__file="src/components/hsv-color-picker.vue",e.default=u.exports},function(t,e,n){"use strict";var r=n(8);n.n(r).a},function(t,e,n){(t.exports=n(22)(!1)).push([t.i,".color-picker {\n  pointer-events: none;\n  user-select: none;\n}\n.color-picker__sv {\n    display: inline-block;\n    vertical-align: top;\n    pointer-events: auto;\n    margin-right: 8px;\n}\n.color-picker__hue {\n    display: inline-block;\n    vertical-align: top;\n    pointer-events: auto;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],u={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}n.r(e),n.d(e,"default",function(){return p});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),u=null,s=0,l=!1,c=function(){},f=null,h="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,i){l=n,f=i||{};var a=r(t,e);return v(a),function(e){for(var n=[],i=0;i<a.length;i++){var u=a[i];(s=o[u.id]).refs--,n.push(s)}e?v(a=r(t,e)):a=[];for(i=0;i<n.length;i++){var s;if(0===(s=n[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(b(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(b(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function b(t){var e,n,r=document.querySelector("style["+h+'~="'+t.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(d){var i=s++;r=u||(u=g()),e=y.bind(null,r,i,!1),n=y.bind(null,r,i,!0)}else r=g(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;r&&t.setAttribute("media",r);f.ssrId&&t.setAttribute(h,e.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var m,_=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function y(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}}])});

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

/***/ "./node_modules/ts-loader/index.js!./components/thread-updater.ts?vue&type=script&lang=ts&":
/*!****************************************************************************************!*\
  !*** ./node_modules/ts-loader!./components/thread-updater.ts?vue&type=script&lang=ts& ***!
  \****************************************************************************************/
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
const ts_1 = __webpack_require__(/*! ../ts */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../ts/utils */ "./ts/utils/index.ts");
const checkbox_vue_1 = __importDefault(__webpack_require__(/*! ./checkbox.vue */ "./components/checkbox.vue"));
const autoupdate = true;
const updateInterval = 10;
let threadId = 0;
let latestPostId = 0;
exports.default = vue_1.default.extend({
    data() {
        return {
            autoupdate: autoupdate,
            counter: updateInterval,
            loading: false,
        };
    },
    methods: {
        getNewPosts() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.loading) {
                    return;
                }
                const postsWrapper = utils_1.DOM.qs('.post').parentElement;
                if (!postsWrapper) {
                    console.warn('Posts wrapper element not found');
                    return;
                }
                this.loading = true;
                const response = yield fetch(`${window.baseUrl}/ajax/thread/${threadId}?after=${latestPostId}`, {
                    credentials: 'same-origin',
                });
                const html = yield response.text();
                postsWrapper.insertAdjacentHTML('beforeend', html);
                const newPosts = utils_1.DOM.qsa('.post', postsWrapper)
                    .filter(post => {
                    const id = +post.getAttribute('data-post-id');
                    return id > latestPostId;
                });
                if (newPosts.length) {
                    latestPostId = +newPosts[newPosts.length - 1].getAttribute('data-post-id');
                    ts_1.eventBus.$emit(ts_1.Events.PostsInserted, newPosts, false);
                }
                this.loading = false;
            });
        },
        onGetNewPostsClick() {
            this.counter = updateInterval;
            this.getNewPosts();
        },
        updateCounter() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.autoupdate) {
                    this.counter--;
                    if (this.counter === 0) {
                        yield this.getNewPosts();
                        this.counter = updateInterval;
                    }
                }
                else {
                    this.counter = updateInterval;
                }
            });
        },
    },
    created() {
        const match = window.location.href.match(/\/res\/(\d+)/);
        if (match.length > 0) {
            threadId = +match[1];
        }
        latestPostId = +utils_1.DOM.qs('.post:last-of-type').getAttribute('data-post-id');
        this._interval = setInterval(this.updateCounter.bind(this), 1000);
        ts_1.eventBus.$on(ts_1.Events.PostCreated, () => {
            this.counter = updateInterval;
            this.getNewPosts();
        });
    },
    beforeDestroy() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    },
    components: {
        'x-checkbox': checkbox_vue_1.default,
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/thread-updater.vue?vue&type=template&id=5917a301&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/thread-updater.vue?vue&type=template&id=5917a301& ***!
  \****************************************************************************************************************************************************************************************************/
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
      staticClass: "thread-updater content__thread-updater",
      attrs: { id: "thread-updater" }
    },
    [
      _c(
        "button",
        {
          staticClass: "button thread-updater__update",
          attrs: { type: "button", disabled: _vm.loading },
          on: { click: _vm.onGetNewPostsClick }
        },
        [_vm._v("\n    Get new posts\n  ")]
      ),
      _vm._v(" "),
      _c(
        "x-checkbox",
        {
          attrs: {
            "label-class": "thread-updater__auto-label",
            "input-class": "thread-updater__auto-checkbox"
          },
          model: {
            value: _vm.autoupdate,
            callback: function($$v) {
              _vm.autoupdate = $$v
            },
            expression: "autoupdate"
          }
        },
        [
          _vm._v("\n    Autoupdate\n    "),
          _vm.autoupdate
            ? _c("span", [_vm._v("in " + _vm._s(_vm.counter))])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _vm.loading
        ? _c("span", { staticClass: "thread-updater__loader" })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
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
new components_1.Post();
new components_1.PostingForm();
new components_1.PostReferenceMap();
new components_1.Settings();
new components_1.StyleSwitch();
new components_1.ThreadUpdater();
document.addEventListener('DOMContentLoaded', e => {
    _1.eventBus.$emit(_1.Events.Ready);
    const posts = utils_1.DOM.qsa('.post');
    _1.eventBus.$emit(_1.Events.PostsInserted, posts, true);
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
var thread_updater_1 = __webpack_require__(/*! ./thread-updater */ "./ts/components/thread-updater.ts");
exports.ThreadUpdater = thread_updater_1.ThreadUpdater;


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
const color_picker_1 = __webpack_require__(/*! @vvatashi/color-picker */ "./node_modules/@vvatashi/color-picker/dist/color-picker.js");
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
          @click.prevent="toggleColorPopup">
          color
        </button>

        <div class="color-picker-popup" v-if="colorPopupVisible">
          <x-color-picker ref="color-picker" class="color-picker-popup__picker"
            :width="128" :height="128" :showLabels="false">
          </x-color-picker>

          <div class="color-picker-popup__buttons">
            <button type="button" class="button"
              @click.prevent="onColorPopupOk">Ok</button>

            <button type="button" class="button"
              @click.prevent="onColorPopupCancel">Cancel</button>
          </div>
        </div>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('code')">
          <code>code</code>
        </button>

        <button type="button" class="button posting-form__markup-button"
          v-on:click.prevent="insertMarkup('spoiler')">
          <span class="markup__spoiler markup__spoiler--visible">sp</span>
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
                    colorPopupVisible: false,
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
                'x-color-picker': color_picker_1.HSVColorPicker,
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
                    const settings = __1.SettingsManager.load();
                    settings.form.floatPosition = coords;
                    component.settings = settings;
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
                toggleColorPopup() {
                    this.colorPopupVisible = !this.colorPopupVisible;
                },
                onColorPopupOk() {
                    this.colorPopupVisible = false;
                    this.insertMarkup('color', this.$refs['color-picker'].hex);
                },
                onColorPopupCancel() {
                    this.colorPopupVisible = false;
                },
                insertMarkup(tag, attribute = null) {
                    const messageEl = this.$refs.message;
                    const selection = {
                        begin: messageEl.selectionStart,
                        end: messageEl.selectionEnd,
                        length: messageEl.selectionEnd - messageEl.selectionStart,
                    };
                    const message = this.fields.message;
                    const openingTag = `[${tag}${attribute ? '=' + attribute : ''}]`;
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
                                __1.eventBus.$emit(__1.Events.PostCreated);
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
        const settings = __1.SettingsManager.load();
        settings.form.float = true;
        this.settings = settings;
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
        const settings = __1.SettingsManager.load();
        settings.form.float = false;
        this.settings = settings;
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
        const settings = __1.SettingsManager.load();
        settings.form.float = false;
        this.settings = settings;
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

/***/ "./ts/components/thread-updater.ts":
/*!*****************************************!*\
  !*** ./ts/components/thread-updater.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = __importDefault(__webpack_require__(/*! vue */ "vue"));
const thread_updater_vue_1 = __importDefault(__webpack_require__(/*! ../../components/thread-updater.vue */ "./components/thread-updater.vue"));
const __1 = __webpack_require__(/*! .. */ "./ts/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./ts/utils/index.ts");
class ThreadUpdater {
    constructor() {
        __1.eventBus.$on(__1.Events.Ready, this.onReady.bind(this));
    }
    onReady() {
        const threadUpdater = utils_1.DOM.qid('thread-updater');
        if (!threadUpdater) {
            return;
        }
        this.viewModel = new vue_1.default({
            el: '#thread-updater',
            render: h => h(thread_updater_vue_1.default),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGVja2JveC50cz85NGIzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gudnVlPzM0MjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yYWRpby1idXR0b24udHM/MmQxYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yYWRpby1idXR0b24udnVlPzNlNGMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtLnRzP2MzYzMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0udnVlP2Y5YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2NvbW1vbi50cz9kMmY2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9jb21tb24udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9jb21tb24udnVlPzAwOWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2Zvcm0udHM/NDE3MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vZm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2Zvcm0udnVlPzFmODAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL3RpbWUudHM/ZjliMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vdGltZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL3RpbWUudnVlPzFjNzQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aHJlYWQtdXBkYXRlci50cz80MTRmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGhyZWFkLXVwZGF0ZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGhyZWFkLXVwZGF0ZXIudnVlPzFlZTgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2dmF0YXNoaS9jb2xvci1waWNrZXIvZGlzdC9jb2xvci1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vdGltZS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RocmVhZC11cGRhdGVyLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gudnVlPzU2ZTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yYWRpby1idXR0b24udnVlP2RhMWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtLnZ1ZT8zYjEzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9jb21tb24udnVlPzgxYzYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2Zvcm0udnVlPzMxNDMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL3RpbWUudnVlPzBmNDciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aHJlYWQtdXBkYXRlci52dWU/MjBjNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3RzL2FwaS50cyIsIndlYnBhY2s6Ly8vLi90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9jYXB0Y2hhLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvY29ycmVjdC10aW1lLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvZGVsZXRlLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9kcmFnZ2FibGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9maWxlLXByZXZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3Bvc3QtcmVmZXJlbmNlLW1hcC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3Bvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9wb3N0aW5nLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3N0eWxlLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3RocmVhZC11cGRhdGVyLnRzIiwid2VicGFjazovLy8uL3RzL2V2ZW50LWJ1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvY29va2llLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2RvbS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy90aW1lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImx1eG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiVnVlXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUE4RixDQUFnQiwyS0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVGO0FBQzVCO0FBQ0w7OztBQUd0RDtBQUN1RjtBQUN2RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0csQ0FBZ0IsK0tBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRjtBQUM1QjtBQUNMOzs7QUFHMUQ7QUFDdUY7QUFDdkYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLHVGQUFNO0FBQ1IsRUFBRSxnR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQW1HLENBQWdCLGdMQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDNUI7QUFDTDs7O0FBRzNEO0FBQ3VGO0FBQ3ZGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUErRixDQUFnQix5S0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFGO0FBQzVCO0FBQ0w7OztBQUdwRDtBQUMwRjtBQUMxRixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkYsQ0FBZ0IsdUtBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBakg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUM1QjtBQUNMOzs7QUFHbEQ7QUFDMEY7QUFDMUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQTZGLENBQWdCLHVLQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDNUI7QUFDTDs7O0FBR2xEO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHlFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRyxDQUFnQixpTEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F4SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZGO0FBQzVCO0FBQ0w7OztBQUc1RDtBQUN1RjtBQUN2RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUseUZBQU07QUFDUixFQUFFLGtHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSxlQUFlLEtBQWlELGtCQUFrQixtQkFBTyxDQUFDLGdCQUFLLEdBQUcsU0FBNkksQ0FBQyxvQkFBb0IsbUJBQW1CLFNBQVMsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELHVDQUF1QyxxQ0FBcUMsb0JBQW9CLEVBQUUsaUJBQWlCLDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEVBQUUsbUJBQW1CLDhCQUE4QixxREFBcUQsMEJBQTBCLDZDQUE2QyxzQkFBc0IsNkRBQTZELFlBQVksZUFBZSxTQUFTLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxpQkFBaUIsa0JBQWtCLGFBQWEsNEJBQTRCLHlDQUF5Qyx3SEFBd0gsMFBBQTBQLHNDQUFzQyw0Q0FBNEMsdUJBQXVCLGtCQUFrQixlQUFlLHVCQUF1Qix5QkFBeUIsS0FBSyxxQkFBcUIsb0NBQW9DLE9BQU8scUJBQXFCLHFCQUFxQixTQUFTLEVBQUUsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksc0ZBQXNGLGlCQUFpQixhQUFhLE9BQU8sb0JBQW9CLDBDQUEwQyxtQkFBbUIsWUFBWSxFQUFFLElBQUksY0FBYyxpQkFBaUIsYUFBYSw4Q0FBOEMsMEJBQTBCLFlBQVksc0NBQXNDLFNBQVMsRUFBRSwrQ0FBK0MsNEJBQTRCLCtCQUErQixpREFBaUQsUUFBUSxPQUFPLHdCQUF3QixTQUFTLHdCQUF3QixPQUFPLDJDQUEyQyxhQUFhLHlCQUF5QixpQkFBaUIsT0FBTyw2REFBNkQsV0FBVyxlQUFlLE9BQU8scUdBQXFHLFVBQVUsdUJBQXVCLDZCQUE2QixpQ0FBaUMseUJBQXlCLFlBQVksY0FBYyxFQUFFLGlCQUFpQixhQUFhLE9BQU8sb0JBQW9CLDBDQUEwQyxtQkFBbUIsWUFBWSxFQUFFLElBQUksY0FBYyxpQkFBaUIsYUFBYSw4Q0FBOEMsMEJBQTBCLFlBQVksc0NBQXNDLFNBQVMsRUFBRSxnQ0FBZ0MsNEJBQTRCLDBCQUEwQixPQUFPLHdCQUF3QixTQUFTLHdCQUF3QixPQUFPLDJDQUEyQyxhQUFhLHlCQUF5QixpQkFBaUIsT0FBTywrQ0FBK0MsV0FBVyxlQUFlLE9BQU8sMEZBQTBGLFFBQVEsZUFBZSxxQkFBcUIsb0JBQW9CLG9CQUFvQixVQUFVLHdCQUF3Qix5Q0FBeUMsTUFBTSx1REFBdUQsWUFBWSxjQUFjLEtBQUssK0JBQStCLGdEQUFnRCw4QkFBOEIsZ0RBQWdELDhDQUE4QyxzSEFBc0gsNERBQTRELGlOQUFpTixxR0FBcUcscUVBQXFFLG9CQUFvQixrQkFBa0IscUZBQXFGLHlFQUF5RSwyREFBMkQseUJBQXlCLEVBQUUsaUJBQWlCLGFBQWEsT0FBTyxvQkFBb0IsMENBQTBDLG1CQUFtQixZQUFZLEVBQUUsSUFBSSxjQUFjLGlCQUFpQixhQUFhLHNDQUFzQyxvQ0FBb0MsaUNBQWlDLElBQUksdUZBQXVGLFNBQVMsd0JBQXdCLDJDQUEyQywwQkFBMEIsWUFBWSxzQ0FBc0MsU0FBUyxFQUFFLGdDQUFnQyw0QkFBNEIsMEJBQTBCLE9BQU8sdUJBQXVCLFNBQVMsd0JBQXdCLE9BQU8sMkNBQTJDLFlBQVkseUJBQXlCLGlCQUFpQixPQUFPLGVBQWUsV0FBVyxlQUFlLE9BQU8sc0VBQXNFLFFBQVEsc0JBQXNCLG9CQUFvQixrQkFBa0IscUJBQXFCLG9CQUFvQixvQkFBb0IsVUFBVSx3QkFBd0IseUNBQXlDLE1BQU0sa0NBQWtDLHdEQUF3RCxLQUFLLG1EQUFtRCxXQUFXLFNBQVMsS0FBSywwUkFBMFIsNENBQTRDLDBFQUEwRSxvQkFBb0Isa0JBQWtCLGtFQUFrRSw4RUFBOEUsRUFBRSxpQkFBaUIsWUFBWSxvRUFBb0Usb0NBQW9DLEVBQUUsZUFBZSxZQUFZLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsV0FBVyxXQUFXLE9BQU8sS0FBSyxzQkFBc0IsYUFBYSxzQkFBc0IsUUFBUSx1QkFBdUIsV0FBVyxlQUFlLE9BQU8sMERBQTBELGdCQUFnQiw2QkFBNkIsZ0JBQWdCLGdDQUFnQyxpQkFBaUIsYUFBYSxpQkFBaUIsOENBQThDLGdCQUFnQiwyQkFBMkIsc0JBQXNCLHNDQUFzQyxxRUFBcUUsS0FBSyxxQkFBcUIsaURBQWlELHVDQUF1QyxzRUFBc0UsS0FBSyxzQkFBc0IsaUNBQWlDLE1BQU0sd0NBQXdDLFNBQVMsdUJBQXVCLFNBQVMsRUFBRSxpQkFBaUIsYUFBYSxpQkFBaUIsMEJBQTBCLG1DQUFtQyw0Q0FBNEMsb0NBQW9DLEtBQUssNkNBQTZDLEVBQUUsTUFBTSx3Q0FBd0MsU0FBUyx1QkFBdUIsU0FBUyxFQUFFLGlCQUFpQixhQUFhLGlCQUFpQiwwQkFBMEIsbUNBQW1DLDZDQUE2QyxvQ0FBb0MsS0FBSyw2Q0FBNkMsRUFBRSxNQUFNLHdDQUF3QyxTQUFTLHVCQUF1QixTQUFTLEVBQUUsaUJBQWlCLGFBQWEsT0FBTyxtQkFBbUIsMENBQTBDLG1CQUFtQixZQUFZLEVBQUUsSUFBSSw4REFBOEQsb0VBQW9FLGlCQUFpQixhQUFhLE9BQU8sbUJBQW1CLDBDQUEwQyxtQkFBbUIsWUFBWSxFQUFFLElBQUksOERBQThELHlFQUF5RSxpQkFBaUIsYUFBYSxzQ0FBc0MsU0FBUyxFQUFFLGlCQUFpQixjQUFjLDJCQUEyQiwyRUFBMkUsMkJBQTJCLHNCQUFzQixzQkFBc0IsY0FBYyxzQkFBc0IsY0FBYyxzQkFBc0IsY0FBYyxzQkFBc0IsY0FBYyxzQkFBc0IsY0FBYyx1QkFBdUIsR0FBRyxHQUFHLFFBQVEsaUJBQWlCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxpQkFBaUIsY0FBYywyQkFBMkIsNkVBQTZFLCtGQUErRixvQ0FBb0MscUJBQXFCLGdFQUFnRSxxQkFBcUIscUNBQXFDLHFCQUFxQixxQ0FBcUMscUNBQXFDLEdBQUcsR0FBRyxRQUFRLGlCQUFpQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsWUFBWSwyQkFBMkIsWUFBWSx5QkFBeUIsWUFBWSxxQkFBcUIsaUJBQWlCLGFBQWEsT0FBTyxtQkFBbUIsMENBQTBDLG1CQUFtQixZQUFZLEVBQUUsSUFBSSxNQUFNLDhEQUE4RCwyRUFBMkUsaUJBQWlCLGFBQWEsV0FBVyxTQUFTLGlCQUFpQixnREFBZ0QseUJBQXlCLHNCQUFzQixHQUFHLHFCQUFxQiw0QkFBNEIsMEJBQTBCLDJCQUEyQix3QkFBd0IsR0FBRyxzQkFBc0IsNEJBQTRCLDBCQUEwQiwyQkFBMkIsR0FBRyxTQUFTLGlCQUFpQixhQUFhLHNCQUFzQixTQUFTLDZCQUE2Qiw0QkFBNEIsb0JBQW9CLHNCQUFzQixlQUFlLCtCQUErQix1REFBdUQsY0FBYyxrR0FBa0csNENBQTRDLEVBQUUsMkNBQTJDLE1BQU0scUJBQXFCLE1BQU0sNkJBQTZCLE1BQU0sSUFBSSxXQUFXLG1CQUFtQixzQ0FBc0MsWUFBWSxLQUFLLGNBQWMsS0FBSyxpQkFBaUIsbUJBQW1CLFFBQVEsV0FBVyxLQUFLLFdBQVcscUZBQXFGLElBQUksaUJBQWlCLGFBQWEsZ0JBQWdCLGlCQUFpQixLQUFLLFdBQVcsS0FBSyxxQkFBcUIsK0NBQStDLHFDQUFxQyxlQUFlLEVBQUUsU0FBUyxrQ0FBa0MsU0FBUyxFQUFFLG1DQUFtQyw0SEFBNEgsaUJBQWlCLHNFQUFzRSxRQUFRLDhGQUE4RixvSEFBb0gsb0JBQW9CLFlBQVksYUFBYSx3QkFBd0IsaUJBQWlCLFdBQVcsS0FBSyxXQUFXLDZCQUE2QixtQkFBbUIsUUFBUSxXQUFXLEtBQUssTUFBTSxzQkFBc0IsWUFBWSxpQkFBaUIsaUJBQWlCLGtCQUFrQixjQUFjLFlBQVksV0FBVyxLQUFLLHFCQUFxQixNQUFNLFNBQVMsWUFBWSxpQkFBaUIsMkJBQTJCLEtBQUssaUJBQWlCLGdDQUFnQywrREFBK0QsS0FBSyxTQUFTLFFBQVEsaUJBQWlCLDBCQUEwQixTQUFTLDBCQUEwQixhQUFhLHNDQUFzQyw0Q0FBNEMsY0FBYyw2REFBNkQsTUFBTSxjQUFjLDRCQUE0QixNQUFNLFVBQVUseURBQXlELDJCQUEyQixvQ0FBb0MsNkJBQTZCLGdDQUFnQyw4RkFBOEYsc0VBQXNFLHVDQUF1QyxLQUFLLEtBQUssYUFBYSw2QkFBNkIsMkNBQTJDLDJCQUEyQiw2QkFBNkIsd0JBQXdCLE1BQU0sc0VBQXNFLE9BQU8sVUFBVSw0QkFBNEIsMkNBQTJDLEVBQUUsb0JBQW9CLGlCQUFpQiw0Q0FBNEMsS0FBSyxnREFBZ0QsNkVBQTZFLEdBQUcsRTs7Ozs7Ozs7Ozs7O0FDQTkyYztBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsZ0JBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xDWTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsOEJBQThCLG1CQUFPLENBQUMsZ0JBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDNUJZO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyxnQkFBSztBQUMzQyxxQ0FBcUMsbUJBQU8sQ0FBQyx5RUFBNEI7QUFDekUsbUNBQW1DLG1CQUFPLENBQUMscUVBQTBCO0FBQ3JFLG1DQUFtQyxtQkFBTyxDQUFDLHFFQUEwQjtBQUNyRSxhQUFhLG1CQUFPLENBQUMsNEJBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQ1k7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLGdCQUFLO0FBQzNDLHVDQUF1QyxtQkFBTyxDQUFDLGtEQUFpQjtBQUNoRSwyQ0FBMkMsbUJBQU8sQ0FBQywwREFBcUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDZFk7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDhCQUE4QixtQkFBTyxDQUFDLGdCQUFLO0FBQzNDLHVDQUF1QyxtQkFBTyxDQUFDLGtEQUFpQjtBQUNoRSwyQ0FBMkMsbUJBQU8sQ0FBQywwREFBcUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsVUFBVTtBQUN2RTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdELCtCQUErQjtBQUMvQixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDdENZO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyxvQkFBTztBQUMvQiw4QkFBOEIsbUJBQU8sQ0FBQyxnQkFBSztBQUMzQyx1Q0FBdUMsbUJBQU8sQ0FBQyxrREFBaUI7QUFDaEUsMkNBQTJDLG1CQUFPLENBQUMsMERBQXFCO0FBQ3hFLGdCQUFnQixtQkFBTyxDQUFDLDJDQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeENZO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCw4QkFBOEIsbUJBQU8sQ0FBQyxnQkFBSztBQUMzQyxhQUFhLG1CQUFPLENBQUMsNEJBQU87QUFDNUIsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQWE7QUFDckMsdUNBQXVDLG1CQUFPLENBQUMsaURBQWdCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGVBQWUsZUFBZSxTQUFTLFNBQVMsYUFBYTtBQUM3RztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2xHRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHdCQUF3QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DLG1CQUFtQix5Q0FBeUM7QUFDNUQsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHdCQUF3QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDLG1CQUFtQiw0REFBNEQ7QUFDL0UsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBLGdCQUFnQixxQ0FBcUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQXFEO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQW1EO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQW1EO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQSxpQkFBaUIsdUNBQXVDO0FBQ3hELG1CQUFtQix3Q0FBd0M7QUFDM0QsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2Q0FBNkM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0NBQW9DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvQ0FBb0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQTZDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0NBQW9DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0NBQW9DO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvQ0FBb0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvTkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQTZDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQTZDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9DQUFvQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RUFBRSxhQUFhO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWMsSUFBSSxHQUFHLE1BQU0sVUFBVSxFQUFFLGFBQWE7QUFDakYsNkJBQTZCLGNBQWMsSUFBSSxHQUFHLEVBQUUsYUFBYTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FB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O0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLDZCQUE2QixHQUFHLGdCQUFnQjtBQUNoRCxnREFBZ0QsR0FBRyxLQUFLO0FBQ3hEO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLEtBQUssR0FBRyxXQUFXLFFBQVEsV0FBVyxlQUFlO0FBQ2xGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLHNDQUFVO0FBQ2pDO0FBQ0EsWUFBWSxtQkFBTyxDQUFDLGdDQUFPO0FBQzNCO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLGtDQUFRO0FBQzdCOzs7Ozs7Ozs7Ozs7O0FDUGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLHVCOzs7Ozs7Ozs7OztBQ0FBLHFCIiwiZmlsZSI6Ii4vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3RzL2FwcC50c1wiKTtcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL2NoZWNrYm94LnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9jaGVja2JveC50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2hlY2tib3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkOGE3NjdlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NoZWNrYm94LnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaGVja2JveC50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdnZhdGFzaGkv0JTQvtC60YPQvNC10L3RgtGLL1BIUC90aW55aWIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNkOGE3NjdlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNkOGE3NjdlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jaGVja2JveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Q4YTc2N2UmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2Q4YTc2N2UnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY2hlY2tib3gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NoZWNrYm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZDhhNzY3ZSZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL3JhZGlvLWJ1dHRvbi50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vcmFkaW8tYnV0dG9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yYWRpby1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZkZDk3NDAyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JhZGlvLWJ1dHRvbi50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmFkaW8tYnV0dG9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92dmF0YXNoaS/QlNC+0LrRg9C80LXQvdGC0YsvUEhQL3RpbnlpYi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZmRkOTc0MDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZmRkOTc0MDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3JhZGlvLWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmRkOTc0MDImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZmRkOTc0MDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yYWRpby1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZkZDk3NDAyJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vc2V0dGluZ3MtZm9ybS50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vc2V0dGluZ3MtZm9ybS50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2V0dGluZ3MtZm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjQ1MWM4MDMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2V0dGluZ3MtZm9ybS50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2V0dGluZ3MtZm9ybS50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvdnZhdGFzaGkv0JTQvtC60YPQvNC10L3RgtGLL1BIUC90aW55aWIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY0NTFjODAzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY0NTFjODAzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zZXR0aW5ncy1mb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDUxYzgwMyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NDUxYzgwMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZXR0aW5ncy1mb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDUxYzgwMyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL2NvbW1vbi50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vY29tbW9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb21tb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE4OTI2NmIyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbW1vbi50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29tbW9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92dmF0YXNoaS/QlNC+0LrRg9C80LXQvdGC0YsvUEhQL3RpbnlpYi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTg5MjY2YjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTg5MjY2YjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbW1vbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg5MjY2YjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTg5MjY2YjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9jb21tb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbW1vbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg5MjY2YjImXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYzg4OTgwMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92dmF0YXNoaS/QlNC+0LrRg9C80LXQvdGC0YsvUEhQL3RpbnlpYi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmM4ODk4MDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmM4ODk4MDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjODg5ODAwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJjODg5ODAwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3NldHRpbmdzLWZvcm0vZm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmM4ODk4MDAmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi90aW1lLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi90aW1lLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90aW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MWFkY2Q4OSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90aW1lLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90aW1lLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92dmF0YXNoaS/QlNC+0LrRg9C80LXQvdGC0YsvUEhQL3RpbnlpYi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTFhZGNkODknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTFhZGNkODknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RpbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxYWRjZDg5JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUxYWRjZDg5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3NldHRpbmdzLWZvcm0vdGltZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGltZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTFhZGNkODkmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi90aHJlYWQtdXBkYXRlci50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vdGhyZWFkLXVwZGF0ZXIudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RocmVhZC11cGRhdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OTE3YTMwMSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90aHJlYWQtdXBkYXRlci50cz92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGhyZWFkLXVwZGF0ZXIudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3Z2YXRhc2hpL9CU0L7QutGD0LzQtdC90YLRiy9QSFAvdGlueWliL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1OTE3YTMwMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1OTE3YTMwMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGhyZWFkLXVwZGF0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5MTdhMzAxJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU5MTdhMzAxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3RocmVhZC11cGRhdGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90aHJlYWQtdXBkYXRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTkxN2EzMDEmXCIiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJ2dWVcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1widnVlXCJdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuY29sb3JQaWNrZXI9ZShyZXF1aXJlKFwidnVlXCIpKTp0LmNvbG9yUGlja2VyPWUodC5WdWUpfSh3aW5kb3csZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBpPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLG4pLGkubD0hMCxpLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUscil7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIGkgaW4gdCluLmQocixpLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsaSkpO3JldHVybiByfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9MSl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0LGUsbixyLGksbyxhLHUpe3ZhciBzLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Lm9wdGlvbnM6dDtpZihlJiYobC5yZW5kZXI9ZSxsLnN0YXRpY1JlbmRlckZucz1uLGwuX2NvbXBpbGVkPSEwKSxyJiYobC5mdW5jdGlvbmFsPSEwKSxvJiYobC5fc2NvcGVJZD1cImRhdGEtdi1cIitvKSxhPyhzPWZ1bmN0aW9uKHQpeyh0PXR8fHRoaXMuJHZub2RlJiZ0aGlzLiR2bm9kZS5zc3JDb250ZXh0fHx0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQuJHZub2RlJiZ0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCl8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9ffHwodD1fX1ZVRV9TU1JfQ09OVEVYVF9fKSxpJiZpLmNhbGwodGhpcyx0KSx0JiZ0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cyYmdC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKGEpfSxsLl9zc3JSZWdpc3Rlcj1zKTppJiYocz11P2Z1bmN0aW9uKCl7aS5jYWxsKHRoaXMsdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KX06aSkscylpZihsLmZ1bmN0aW9uYWwpe2wuX2luamVjdFN0eWxlcz1zO3ZhciBjPWwucmVuZGVyO2wucmVuZGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHMuY2FsbChlKSxjKHQsZSl9fWVsc2V7dmFyIGY9bC5iZWZvcmVDcmVhdGU7bC5iZWZvcmVDcmVhdGU9Zj9bXS5jb25jYXQoZixzKTpbc119cmV0dXJue2V4cG9ydHM6dCxvcHRpb25zOmx9fW4uZChlLFwiYVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oMTYpO2UuSFNWPXIuSFNWO3ZhciBpPW4oMTcpO2UuUkdCPWkuUkdCO3ZhciBvPW4oMTgpO2UuSFNWQ29sb3JQaWNrZXI9by5IU1ZDb2xvclBpY2tlcixlLkhTVkh1ZVBpY2tlcj1vLkhTVkh1ZVBpY2tlcixlLlNWUGlja2VyPW8uU1ZQaWNrZXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSk7dmFyIHI9bigzKSxpPW4ubihyKTtmb3IodmFyIG8gaW4gcilcImRlZmF1bHRcIiE9PW8mJmZ1bmN0aW9uKHQpe24uZChlLHQsZnVuY3Rpb24oKXtyZXR1cm4gclt0XX0pfShvKTtlLmRlZmF1bHQ9aS5hfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9cihuKDkpKSxvPXIobigxMCkpLGE9cihuKDE0KSksdT1yKG4oMTUpKTtlLmRlZmF1bHQ9aS5kZWZhdWx0LmV4dGVuZCh7bWl4aW5zOltvLmRlZmF1bHRdLGNvbXBvbmVudHM6e1wic3YtcGlja2VyXCI6YS5kZWZhdWx0LFwiaHN2LWh1ZS1waWNrZXJcIjp1LmRlZmF1bHR9LHByb3BzOnt3aWR0aDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoyNTZ9LGhlaWdodDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoyNTZ9LGZvbnQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJib2xkIDE2cHggc2Fucy1zZXJpZlwifSxzaG93TGFiZWxzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57aHVlJDp0aGlzLmh1ZSxzYXR1cmF0aW9uJDp0aGlzLnNhdHVyYXRpb24sdmFsdWUkOnRoaXMudmFsdWV9fSxjb21wdXRlZDp7aHN2OmZ1bmN0aW9uKCl7cmV0dXJue2h1ZTp0aGlzLmh1ZSR8fHRoaXMuaHVlLHNhdHVyYXRpb246dGhpcy5zYXR1cmF0aW9uJHx8dGhpcy5zYXR1cmF0aW9uLHZhbHVlOnRoaXMudmFsdWUkfHx0aGlzLnZhbHVlfX19LG1ldGhvZHM6e29uU1ZDaGFuZ2U6ZnVuY3Rpb24odCl7dmFyIGU9dC5zYXR1cmF0aW9uLG49dC52YWx1ZTt0aGlzLnNhdHVyYXRpb24kPWUsdGhpcy52YWx1ZSQ9bn0sb25IdWVDaGFuZ2U6ZnVuY3Rpb24odCl7dmFyIGU9dC5odWU7dGhpcy5odWUkPWV9fX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpO3ZhciByPW4oNSksaT1uLm4ocik7Zm9yKHZhciBvIGluIHIpXCJkZWZhdWx0XCIhPT1vJiZmdW5jdGlvbih0KXtuLmQoZSx0LGZ1bmN0aW9uKCl7cmV0dXJuIHJbdF19KX0obyk7ZS5kZWZhdWx0PWkuYX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPXIobig5KSksbz1uKDEpLGE9cihuKDEwKSk7ZS5kZWZhdWx0PWkuZGVmYXVsdC5leHRlbmQoe21peGluczpbYS5kZWZhdWx0XSxwcm9wczp7d2lkdGg6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MjU2fSxoZWlnaHQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MjU2fSxmb250Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiYm9sZCAxNnB4IHNhbnMtc2VyaWZcIn0sc2hvd0xhYmVsczp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9fSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3NhdHVyYXRpb24kOnRoaXMuc2F0dXJhdGlvbix2YWx1ZSQ6dGhpcy52YWx1ZX19LGNvbXB1dGVkOntoc3Y6ZnVuY3Rpb24oKXtyZXR1cm57aHVlOnRoaXMuaHVlLHNhdHVyYXRpb246dGhpcy5zYXR1cmF0aW9uJHx8dGhpcy5zYXR1cmF0aW9uLHZhbHVlOnRoaXMudmFsdWUkfHx0aGlzLnZhbHVlfX19LHdhdGNoOntodWU6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUNhbnZhcygpfX0sbW91bnRlZDpmdW5jdGlvbigpe3RoaXMudXBkYXRlQ2FudmFzKCl9LG1ldGhvZHM6e3VwZGF0ZUNhbnZhczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuJHJlZnMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtpZih0KXt0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj1cInNvdXJjZS1vdmVyXCIsdC5saW5lV2lkdGg9Mjtmb3IodmFyIGU9MDtlPHRoaXMuaGVpZ2h0OysrZSl7dmFyIG49by5SR0IudG9IZXgoby5IU1YudG9SR0Ioe2h1ZTp0aGlzLmh1ZSxzYXR1cmF0aW9uOjAsdmFsdWU6MS1lL3RoaXMuaGVpZ2h0fSkpLHI9by5SR0IudG9IZXgoby5IU1YudG9SR0Ioe2h1ZTp0aGlzLmh1ZSxzYXR1cmF0aW9uOjEsdmFsdWU6MS1lL3RoaXMuaGVpZ2h0fSkpLGk9dC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLDAsdGhpcy53aWR0aCwwKTtpLmFkZENvbG9yU3RvcCgwLG4pLGkuYWRkQ29sb3JTdG9wKDEsciksdC5zdHJva2VTdHlsZT1pLHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oMCxlKSx0LmxpbmVUbyh0aGlzLndpZHRoLGUpLHQuc3Ryb2tlKCl9aWYodC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249XCJkaWZmZXJlbmNlXCIsdGhpcy5zaG93TGFiZWxzKXt0LmZpbGxTdHlsZT1cIiM3ZjdmN2ZcIix0LnRleHRBbGlnbj1cImNlbnRlclwiLHQudGV4dEJhc2VsaW5lPVwidG9wXCIsdC5mb250PXRoaXMuZm9udCx0LmZpbGxUZXh0KFwiU2F0dXJhdGlvblwiLHRoaXMud2lkdGgvMiw0KSx0LnNhdmUoKSx0LnJvdGF0ZShNYXRoLlBJLzIpLHQuZmlsbFRleHQoXCJWYWx1ZVwiLHRoaXMuaGVpZ2h0LzIsNC10aGlzLndpZHRoKSx0LnJlc3RvcmUoKX12YXIgYT10aGlzLnNhdHVyYXRpb24kfHx0aGlzLnNhdHVyYXRpb24sdT10aGlzLnZhbHVlJHx8dGhpcy52YWx1ZSxzPWEqdGhpcy53aWR0aCxsPSgxLXUpKnRoaXMuaGVpZ2h0O3Quc3Ryb2tlU3R5bGU9XCIjN2Y3ZjdmXCIsdC5saW5lV2lkdGg9MSx0LnN0cm9rZVJlY3Qocy0yLjUsbC0yLjUsNSw1KX19LG9uUGljazpmdW5jdGlvbih0KXtpZigxPT09dC5idXR0b25zKXt2YXIgZT10aGlzLiRyZWZzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPXQuY2xpZW50WC1lLmxlZnQscj10LmNsaWVudFktZS50b3A7dGhpcy5zYXR1cmF0aW9uJD1uL2Uud2lkdGgsdGhpcy52YWx1ZSQ9MS1yL2UuaGVpZ2h0LHRoaXMuJGVtaXQoXCJjaGFuZ2VcIix7aHVlOnRoaXMuaHVlLHNhdHVyYXRpb246dGhpcy5zYXR1cmF0aW9uJCx2YWx1ZTp0aGlzLnZhbHVlJH0pLHRoaXMudXBkYXRlQ2FudmFzKCl9fX19KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24ucihlKTt2YXIgcj1uKDcpLGk9bi5uKHIpO2Zvcih2YXIgbyBpbiByKVwiZGVmYXVsdFwiIT09byYmZnVuY3Rpb24odCl7bi5kKGUsdCxmdW5jdGlvbigpe3JldHVybiByW3RdfSl9KG8pO2UuZGVmYXVsdD1pLmF9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihyPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKyspZm9yKHZhciBpIGluIGU9YXJndW1lbnRzW25dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLGkpJiYodFtpXT1lW2ldKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0saT10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1pKG4oOSkpLGE9bigxKSx1PWkobigxMCkpO2UuZGVmYXVsdD1vLmRlZmF1bHQuZXh0ZW5kKHttaXhpbnM6W3UuZGVmYXVsdF0scHJvcHM6e3dpZHRoOnt0eXBlOk51bWJlcixkZWZhdWx0OjMyfSxoZWlnaHQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MjU2fSxmb250Ont0eXBlOlN0cmluZyxkZWZhdWx0OlwiYm9sZCAxNnB4IHNhbnMtc2VyaWZcIn0sc2hvd0xhYmVsOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57aHVlJDp0aGlzLmh1ZX19LGNvbXB1dGVkOntoc3Y6ZnVuY3Rpb24oKXtyZXR1cm57aHVlOnRoaXMuaHVlJHx8dGhpcy5odWUsc2F0dXJhdGlvbjp0aGlzLnNhdHVyYXRpb24sdmFsdWU6dGhpcy52YWx1ZX19fSx3YXRjaDp7c2F0dXJhdGlvbjpmdW5jdGlvbigpe3RoaXMudXBkYXRlQ2FudmFzKCl9LHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVDYW52YXMoKX19LG1vdW50ZWQ6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUNhbnZhcygpfSxtZXRob2RzOnt1cGRhdGVDYW52YXM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRyZWZzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7aWYodCl7dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249XCJjb3B5XCI7Zm9yKHZhciBlPXQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwwLDAsdGhpcy5oZWlnaHQpLG49MDtuPD02OysrbillLmFkZENvbG9yU3RvcChuLzYsYS5SR0IudG9IZXgoYS5IU1YudG9SR0Iocih7fSx0aGlzLmhzdix7aHVlOjYwKm59KSkpKTt0LmZpbGxTdHlsZT1lLHQuZmlsbFJlY3QoMCwwLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpLHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPVwiZGlmZmVyZW5jZVwiLHRoaXMuc2hvd0xhYmVsJiYodC5maWxsU3R5bGU9XCIjN2Y3ZjdmXCIsdC50ZXh0QWxpZ249XCJjZW50ZXJcIix0LnRleHRCYXNlbGluZT1cIm1pZGRsZVwiLHQuZm9udD10aGlzLmZvbnQsdC5zYXZlKCksdC5yb3RhdGUoTWF0aC5QSS8yKSx0LmZpbGxUZXh0KFwiSHVlXCIsdGhpcy5oZWlnaHQvMiwtdGhpcy53aWR0aC8yKSx0LnJlc3RvcmUoKSk7dmFyIGk9KHRoaXMuaHVlJHx8dGhpcy5odWUpKnRoaXMuaGVpZ2h0LzM2MDt0LnN0cm9rZVN0eWxlPVwiIzdmN2Y3ZlwiLHQubGluZVdpZHRoPTEsdC5zdHJva2VSZWN0KDAsaS0yLjUsdGhpcy53aWR0aCw1KX19LG9uUGljazpmdW5jdGlvbih0KXtpZigxPT09dC5idXR0b25zKXt2YXIgZT10aGlzLiRyZWZzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPXQuY2xpZW50WS1lLnRvcDt0aGlzLmh1ZSQ9MzYwKm4vZS5oZWlnaHQsdGhpcy4kZW1pdChcImNoYW5nZVwiLHRoaXMuaHN2KSx0aGlzLnVwZGF0ZUNhbnZhcygpfX19fSl9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uKDIxKTtcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9W1t0LmkscixcIlwiXV0pLHIubG9jYWxzJiYodC5leHBvcnRzPXIubG9jYWxzKTsoMCxuKDIzKS5kZWZhdWx0KShcImQ4NGViNjA0XCIsciwhMSx7fSl9LGZ1bmN0aW9uKGUsbil7ZS5leHBvcnRzPXR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDEpO2UuZGVmYXVsdD17cHJvcHM6e2h1ZTp7dHlwZTpOdW1iZXIsZGVmYXVsdDowfSxzYXR1cmF0aW9uOnt0eXBlOk51bWJlcixkZWZhdWx0OjF9LHZhbHVlOnt0eXBlOk51bWJlcixkZWZhdWx0OjF9fSxjb21wdXRlZDp7aHN2OmZ1bmN0aW9uKCl7cmV0dXJue2h1ZTp0aGlzLmh1ZSxzYXR1cmF0aW9uOnRoaXMuc2F0dXJhdGlvbix2YWx1ZTp0aGlzLnZhbHVlfX0scmdiOmZ1bmN0aW9uKCl7cmV0dXJuIHIuSFNWLnRvUkdCKHRoaXMuaHN2KX0saGV4OmZ1bmN0aW9uKCl7cmV0dXJuIHIuUkdCLnRvSGV4KHRoaXMucmdiKX19fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuJGNyZWF0ZUVsZW1lbnQsbj10Ll9zZWxmLl9jfHxlO3JldHVybiBuKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwiY29sb3ItcGlja2VyXCJ9LFtuKFwic3YtcGlja2VyXCIsdC5fYih7c3RhdGljQ2xhc3M6XCJjb2xvci1waWNrZXJfX3N2XCIsYXR0cnM6e3dpZHRoOnQud2lkdGgsaGVpZ2h0OnQuaGVpZ2h0LGZvbnQ6dC5mb250LFwic2hvdy1sYWJlbHNcIjp0LnNob3dMYWJlbHN9LG9uOntjaGFuZ2U6dC5vblNWQ2hhbmdlfX0sXCJzdi1waWNrZXJcIix0LmhzdiwhMSkpLG4oXCJoc3YtaHVlLXBpY2tlclwiLHQuX2Ioe3N0YXRpY0NsYXNzOlwiY29sb3ItcGlja2VyX19odWVcIixhdHRyczp7d2lkdGg6dC53aWR0aC84LGhlaWdodDp0LmhlaWdodCxmb250OnQuZm9udCxcInNob3ctbGFiZWxcIjp0LnNob3dMYWJlbHN9LG9uOntjaGFuZ2U6dC5vbkh1ZUNoYW5nZX19LFwiaHN2LWh1ZS1waWNrZXJcIix0LmhzdiwhMSkpXSwxKX0saT1bXTtyLl93aXRoU3RyaXBwZWQ9ITAsbi5kKGUsXCJhXCIsZnVuY3Rpb24oKXtyZXR1cm4gcn0pLG4uZChlLFwiYlwiLGZ1bmN0aW9uKCl7cmV0dXJuIGl9KX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kY3JlYXRlRWxlbWVudDtyZXR1cm4odGhpcy5fc2VsZi5fY3x8dCkoXCJjYW52YXNcIix7cmVmOlwiY2FudmFzXCIsc3RhdGljQ2xhc3M6XCJzdi1waWNrZXJcIixhdHRyczp7d2lkdGg6dGhpcy53aWR0aCxoZWlnaHQ6dGhpcy5oZWlnaHR9LG9uOnttb3VzZWRvd246dGhpcy5vblBpY2ssbW91c2Vtb3ZlOnRoaXMub25QaWNrfX0pfSxpPVtdO3IuX3dpdGhTdHJpcHBlZD0hMCxuLmQoZSxcImFcIixmdW5jdGlvbigpe3JldHVybiByfSksbi5kKGUsXCJiXCIsZnVuY3Rpb24oKXtyZXR1cm4gaX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRjcmVhdGVFbGVtZW50O3JldHVybih0aGlzLl9zZWxmLl9jfHx0KShcImNhbnZhc1wiLHtyZWY6XCJjYW52YXNcIixzdGF0aWNDbGFzczpcImh1ZS1waWNrZXJcIixhdHRyczp7d2lkdGg6dGhpcy53aWR0aCxoZWlnaHQ6dGhpcy5oZWlnaHR9LG9uOnttb3VzZWRvd246dGhpcy5vblBpY2ssbW91c2Vtb3ZlOnRoaXMub25QaWNrfX0pfSxpPVtdO3IuX3dpdGhTdHJpcHBlZD0hMCxuLmQoZSxcImFcIixmdW5jdGlvbigpe3JldHVybiByfSksbi5kKGUsXCJiXCIsZnVuY3Rpb24oKXtyZXR1cm4gaX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpO3ZhciByPW4oMTIpLGk9big0KTtmb3IodmFyIG8gaW4gaSlcImRlZmF1bHRcIiE9PW8mJmZ1bmN0aW9uKHQpe24uZChlLHQsZnVuY3Rpb24oKXtyZXR1cm4gaVt0XX0pfShvKTt2YXIgYT1uKDApLHU9T2JqZWN0KGEuYSkoaS5kZWZhdWx0LHIuYSxyLmIsITEsbnVsbCxudWxsLG51bGwpO3Uub3B0aW9ucy5fX2ZpbGU9XCJzcmMvY29tcG9uZW50cy9zdi1waWNrZXIudnVlXCIsZS5kZWZhdWx0PXUuZXhwb3J0c30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24ucihlKTt2YXIgcj1uKDEzKSxpPW4oNik7Zm9yKHZhciBvIGluIGkpXCJkZWZhdWx0XCIhPT1vJiZmdW5jdGlvbih0KXtuLmQoZSx0LGZ1bmN0aW9uKCl7cmV0dXJuIGlbdF19KX0obyk7dmFyIGE9bigwKSx1PU9iamVjdChhLmEpKGkuZGVmYXVsdCxyLmEsci5iLCExLG51bGwsbnVsbCxudWxsKTt1Lm9wdGlvbnMuX19maWxlPVwic3JjL2NvbXBvbmVudHMvaHN2LWh1ZS1waWNrZXIudnVlXCIsZS5kZWZhdWx0PXUuZXhwb3J0c30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4gdC50b1JHQj1mdW5jdGlvbih0KXt2YXIgZT10Lmh1ZSxuPXQuc2F0dXJhdGlvbixyPXQudmFsdWUsaT1yKigxLW4pLG89ZSU2MCooci1pKS82MCxhPWkrbyx1PXItbztzd2l0Y2goTWF0aC5mbG9vcihlLzYwKSU2KXtkZWZhdWx0OmNhc2UgMDpyZXR1cm57cmVkOnIsZ3JlZW46YSxibHVlOml9O2Nhc2UgMTpyZXR1cm57cmVkOnUsZ3JlZW46cixibHVlOml9O2Nhc2UgMjpyZXR1cm57cmVkOmksZ3JlZW46cixibHVlOmF9O2Nhc2UgMzpyZXR1cm57cmVkOmksZ3JlZW46dSxibHVlOnJ9O2Nhc2UgNDpyZXR1cm57cmVkOmEsZ3JlZW46aSxibHVlOnJ9O2Nhc2UgNTpyZXR1cm57cmVkOnIsZ3JlZW46aSxibHVlOnV9fX0sdH0oKTtlLkhTVj1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiB0LnRvSFNWPWZ1bmN0aW9uKHQpe3ZhciBlPXQucmVkLG49dC5ncmVlbixyPXQuYmx1ZSxpPU1hdGgubWF4KGUsbixyKSxvPU1hdGgubWluKGUsbixyKSxhPTAsdT1pLW87cmV0dXJuIDAhPT11JiYoaT09PWU/YT02MCoobi1yKS91K248cj8zNjA6MDppPT09bj9hPTYwKihyLWUpL3UrMTIwOmk9PT1yJiYoYT02MCooZS1uKS91KzI0MCkpLHtodWU6YSxzYXR1cmF0aW9uOmk/MS1vL2k6MCx2YWx1ZTppfX0sdC50b0hleD1mdW5jdGlvbih0KXt2YXIgZT10LnJlZCxuPXQuZ3JlZW4scj10LmJsdWUsaT1NYXRoLmZsb29yKDI1NSplKS50b1N0cmluZygxNik7aT1pLmxlbmd0aDwyP1wiMFwiK2k6aTt2YXIgbz1NYXRoLmZsb29yKDI1NSpuKS50b1N0cmluZygxNik7bz1vLmxlbmd0aDwyP1wiMFwiK286bzt2YXIgYT1NYXRoLmZsb29yKDI1NSpyKS50b1N0cmluZygxNik7cmV0dXJuXCIjXCIraStvKyhhPWEubGVuZ3RoPDI/XCIwXCIrYTphKX0sdH0oKTtlLlJHQj1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigxOSk7ZS5IU1ZDb2xvclBpY2tlcj1yLmRlZmF1bHQ7dmFyIGk9bigxNSk7ZS5IU1ZIdWVQaWNrZXI9aS5kZWZhdWx0O3ZhciBvPW4oMTQpO2UuU1ZQaWNrZXI9by5kZWZhdWx0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpO3ZhciByPW4oMTEpLGk9bigyKTtmb3IodmFyIG8gaW4gaSlcImRlZmF1bHRcIiE9PW8mJmZ1bmN0aW9uKHQpe24uZChlLHQsZnVuY3Rpb24oKXtyZXR1cm4gaVt0XX0pfShvKTtuKDIwKTt2YXIgYT1uKDApLHU9T2JqZWN0KGEuYSkoaS5kZWZhdWx0LHIuYSxyLmIsITEsbnVsbCxudWxsLG51bGwpO3Uub3B0aW9ucy5fX2ZpbGU9XCJzcmMvY29tcG9uZW50cy9oc3YtY29sb3ItcGlja2VyLnZ1ZVwiLGUuZGVmYXVsdD11LmV4cG9ydHN9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1uKDgpO24ubihyKS5hfSxmdW5jdGlvbih0LGUsbil7KHQuZXhwb3J0cz1uKDIyKSghMSkpLnB1c2goW3QuaSxcIi5jb2xvci1waWNrZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmNvbG9yLXBpY2tlcl9fc3Yge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuLmNvbG9yLXBpY2tlcl9faHVlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXCIsXCJcIl0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKGUpe3ZhciBuPWZ1bmN0aW9uKHQsZSl7dmFyIG49dFsxXXx8XCJcIixyPXRbM107aWYoIXIpcmV0dXJuIG47aWYoZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYnRvYSl7dmFyIGk9KGE9cixcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShhKSkpKStcIiAqL1wiKSxvPXIuc291cmNlcy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiK3Iuc291cmNlUm9vdCt0K1wiICovXCJ9KTtyZXR1cm5bbl0uY29uY2F0KG8pLmNvbmNhdChbaV0pLmpvaW4oXCJcXG5cIil9dmFyIGE7cmV0dXJuW25dLmpvaW4oXCJcXG5cIil9KGUsdCk7cmV0dXJuIGVbMl0/XCJAbWVkaWEgXCIrZVsyXStcIntcIituK1wifVwiOm59KS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24odCxuKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W1tudWxsLHQsXCJcIl1dKTtmb3IodmFyIHI9e30saT0wO2k8dGhpcy5sZW5ndGg7aSsrKXt2YXIgbz10aGlzW2ldWzBdO251bGwhPW8mJihyW29dPSEwKX1mb3IoaT0wO2k8dC5sZW5ndGg7aSsrKXt2YXIgYT10W2ldO251bGwhPWFbMF0mJnJbYVswXV18fChuJiYhYVsyXT9hWzJdPW46biYmKGFbMl09XCIoXCIrYVsyXStcIikgYW5kIChcIituK1wiKVwiKSxlLnB1c2goYSkpfX0sZX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSl7Zm9yKHZhciBuPVtdLHI9e30saT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgbz1lW2ldLGE9b1swXSx1PXtpZDp0K1wiOlwiK2ksY3NzOm9bMV0sbWVkaWE6b1syXSxzb3VyY2VNYXA6b1szXX07clthXT9yW2FdLnBhcnRzLnB1c2godSk6bi5wdXNoKHJbYV09e2lkOmEscGFydHM6W3VdfSl9cmV0dXJuIG59bi5yKGUpLG4uZChlLFwiZGVmYXVsdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIHB9KTt2YXIgaT1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQ7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIERFQlVHJiZERUJVRyYmIWkpdGhyb3cgbmV3IEVycm9yKFwidnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiBVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiKTt2YXIgbz17fSxhPWkmJihkb2N1bWVudC5oZWFkfHxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0pLHU9bnVsbCxzPTAsbD0hMSxjPWZ1bmN0aW9uKCl7fSxmPW51bGwsaD1cImRhdGEtdnVlLXNzci1pZFwiLGQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG5hdmlnYXRvciYmL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtmdW5jdGlvbiBwKHQsZSxuLGkpe2w9bixmPWl8fHt9O3ZhciBhPXIodCxlKTtyZXR1cm4gdihhKSxmdW5jdGlvbihlKXtmb3IodmFyIG49W10saT0wO2k8YS5sZW5ndGg7aSsrKXt2YXIgdT1hW2ldOyhzPW9bdS5pZF0pLnJlZnMtLSxuLnB1c2gocyl9ZT92KGE9cih0LGUpKTphPVtdO2ZvcihpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciBzO2lmKDA9PT0ocz1uW2ldKS5yZWZzKXtmb3IodmFyIGw9MDtsPHMucGFydHMubGVuZ3RoO2wrKylzLnBhcnRzW2xdKCk7ZGVsZXRlIG9bcy5pZF19fX19ZnVuY3Rpb24gdih0KXtmb3IodmFyIGU9MDtlPHQubGVuZ3RoO2UrKyl7dmFyIG49dFtlXSxyPW9bbi5pZF07aWYocil7ci5yZWZzKys7Zm9yKHZhciBpPTA7aTxyLnBhcnRzLmxlbmd0aDtpKyspci5wYXJ0c1tpXShuLnBhcnRzW2ldKTtmb3IoO2k8bi5wYXJ0cy5sZW5ndGg7aSsrKXIucGFydHMucHVzaChiKG4ucGFydHNbaV0pKTtyLnBhcnRzLmxlbmd0aD5uLnBhcnRzLmxlbmd0aCYmKHIucGFydHMubGVuZ3RoPW4ucGFydHMubGVuZ3RoKX1lbHNle3ZhciBhPVtdO2ZvcihpPTA7aTxuLnBhcnRzLmxlbmd0aDtpKyspYS5wdXNoKGIobi5wYXJ0c1tpXSkpO29bbi5pZF09e2lkOm4uaWQscmVmczoxLHBhcnRzOmF9fX19ZnVuY3Rpb24gZygpe3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtyZXR1cm4gdC50eXBlPVwidGV4dC9jc3NcIixhLmFwcGVuZENoaWxkKHQpLHR9ZnVuY3Rpb24gYih0KXt2YXIgZSxuLHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlW1wiK2grJ349XCInK3QuaWQrJ1wiXScpO2lmKHIpe2lmKGwpcmV0dXJuIGM7ci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpfWlmKGQpe3ZhciBpPXMrKztyPXV8fCh1PWcoKSksZT15LmJpbmQobnVsbCxyLGksITEpLG49eS5iaW5kKG51bGwscixpLCEwKX1lbHNlIHI9ZygpLGU9ZnVuY3Rpb24odCxlKXt2YXIgbj1lLmNzcyxyPWUubWVkaWEsaT1lLnNvdXJjZU1hcDtyJiZ0LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIscik7Zi5zc3JJZCYmdC5zZXRBdHRyaWJ1dGUoaCxlLmlkKTtpJiYobis9XCJcXG4vKiMgc291cmNlVVJMPVwiK2kuc291cmNlc1swXStcIiAqL1wiLG4rPVwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIitidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShpKSkpKStcIiAqL1wiKTtpZih0LnN0eWxlU2hlZXQpdC5zdHlsZVNoZWV0LmNzc1RleHQ9bjtlbHNle2Zvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSl9fS5iaW5kKG51bGwsciksbj1mdW5jdGlvbigpe3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKX07cmV0dXJuIGUodCksZnVuY3Rpb24ocil7aWYocil7aWYoci5jc3M9PT10LmNzcyYmci5tZWRpYT09PXQubWVkaWEmJnIuc291cmNlTWFwPT09dC5zb3VyY2VNYXApcmV0dXJuO2UodD1yKX1lbHNlIG4oKX19dmFyIG0sXz0obT1bXSxmdW5jdGlvbih0LGUpe3JldHVybiBtW3RdPWUsbS5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKX0pO2Z1bmN0aW9uIHkodCxlLG4scil7dmFyIGk9bj9cIlwiOnIuY3NzO2lmKHQuc3R5bGVTaGVldCl0LnN0eWxlU2hlZXQuY3NzVGV4dD1fKGUsaSk7ZWxzZXt2YXIgbz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpKSxhPXQuY2hpbGROb2RlczthW2VdJiZ0LnJlbW92ZUNoaWxkKGFbZV0pLGEubGVuZ3RoP3QuaW5zZXJ0QmVmb3JlKG8sYVtlXSk6dC5hcHBlbmRDaGlsZChvKX19fV0pfSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZ1ZV8xLmRlZmF1bHQuZXh0ZW5kKHtcbiAgICBtb2RlbDoge1xuICAgICAgICBwcm9wOiAnY2hlY2tlZCcsXG4gICAgICAgIGV2ZW50OiAnY2hhbmdlJyxcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGxhYmVsQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dENsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjaGVja2VkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uSW5wdXQoZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgIXRoaXMuY2hlY2tlZCk7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZ1ZV8xLmRlZmF1bHQuZXh0ZW5kKHtcbiAgICBtb2RlbDoge1xuICAgICAgICBwcm9wOiAnc2VsZWN0ZWRWYWx1ZScsXG4gICAgICAgIGV2ZW50OiAnY2hhbmdlJyxcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGxhYmVsQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dENsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IFN0cmluZyxcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZTogU3RyaW5nLFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbklucHV0KGUpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMudmFsdWUpO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBjb21tb25fdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2V0dGluZ3MtZm9ybS9jb21tb24udnVlXCIpKTtcbmNvbnN0IGZvcm1fdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2V0dGluZ3MtZm9ybS9mb3JtLnZ1ZVwiKSk7XG5jb25zdCB0aW1lX3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NldHRpbmdzLWZvcm0vdGltZS52dWVcIikpO1xuY29uc3QgdHNfMSA9IHJlcXVpcmUoXCIuLi90c1wiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZ1ZV8xLmRlZmF1bHQuZXh0ZW5kKHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2V0dGluZ3M6IG51bGwsXG4gICAgICAgICAgICB0YWI6ICdjb21tb24nLFxuICAgICAgICAgICAgc3RhdHVzOiAnJyxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0c18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgICAgIHRzXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgICAgICAvLyBJbmRpY2F0ZSB0aGF0IHNldHRpbmdzIGFyZSBzYXZlZC5cbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJyc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdTZXR0aW5ncyBzYXZlZC4nO1xuICAgICAgICAgICAgfSwgMTAwMCAvIDMpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAneC1jb21tb24nOiBjb21tb25fdnVlXzEuZGVmYXVsdCxcbiAgICAgICAgJ3gtZm9ybSc6IGZvcm1fdnVlXzEuZGVmYXVsdCxcbiAgICAgICAgJ3gtdGltZSc6IHRpbWVfdnVlXzEuZGVmYXVsdCxcbiAgICB9LFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgY2hlY2tib3hfdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NoZWNrYm94LnZ1ZVwiKSk7XG5jb25zdCByYWRpb19idXR0b25fdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3JhZGlvLWJ1dHRvbi52dWVcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdnVlXzEuZGVmYXVsdC5leHRlbmQoe1xuICAgIHByb3BzOiBbJ3NldHRpbmdzJ10sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAneC1jaGVja2JveCc6IGNoZWNrYm94X3Z1ZV8xLmRlZmF1bHQsXG4gICAgICAgICd4LXJhZGlvLWJ1dHRvbic6IHJhZGlvX2J1dHRvbl92dWVfMS5kZWZhdWx0LFxuICAgIH0sXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBjaGVja2JveF92dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY2hlY2tib3gudnVlXCIpKTtcbmNvbnN0IHJhZGlvX2J1dHRvbl92dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vcmFkaW8tYnV0dG9uLnZ1ZVwiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgcHJvcHM6IFsnc2V0dGluZ3MnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV3UmVwbGFjZToge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46ICcnLFxuICAgICAgICAgICAgICAgIHJlcGxhY2U6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcmVtb3ZlUmVwbGFjZUF0KGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmZvcm0ucmVwbGFjZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkUmVwbGFjZShpdGVtKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoaXRlbS5wYXR0ZXJuLCAnZ20nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgSW52YWxpZCByZWd1bGFyIGV4cHJlc3Npb246ICR7ZS5tZXNzYWdlfWA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5mb3JtLnJlcGxhY2VzLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgaXRlbSkpO1xuICAgICAgICAgICAgdGhpcy5uZXdSZXBsYWNlID0geyBwYXR0ZXJuOiAnJywgcmVwbGFjZTogJycgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ3gtY2hlY2tib3gnOiBjaGVja2JveF92dWVfMS5kZWZhdWx0LFxuICAgICAgICAneC1yYWRpby1idXR0b24nOiByYWRpb19idXR0b25fdnVlXzEuZGVmYXVsdCxcbiAgICB9LFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGx1eG9uXzEgPSByZXF1aXJlKFwibHV4b25cIik7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGNoZWNrYm94X3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jaGVja2JveC52dWVcIikpO1xuY29uc3QgcmFkaW9fYnV0dG9uX3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9yYWRpby1idXR0b24udnVlXCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdHMvdXRpbHNcIik7XG5leHBvcnRzLmRlZmF1bHQgPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgcHJvcHM6IFsnc2V0dGluZ3MnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGltZTogJycsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLl90aW1lciA9IHNldEludGVydmFsKHRoaXMudXBkYXRlVGltZS5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICB9LFxuICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVUaW1lKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lID0gbHV4b25fMS5EYXRlVGltZS5mcm9tSlNEYXRlKG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZSA9IHV0aWxzXzEuVGltZS5mb3JtYXQodGltZSwgdGhpcy5zZXR0aW5ncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSAnSW52YWxpZCBmb3JtYXQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAneC1jaGVja2JveCc6IGNoZWNrYm94X3Z1ZV8xLmRlZmF1bHQsXG4gICAgICAgICd4LXJhZGlvLWJ1dHRvbic6IHJhZGlvX2J1dHRvbl92dWVfMS5kZWZhdWx0LFxuICAgIH0sXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IHRzXzEgPSByZXF1aXJlKFwiLi4vdHNcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3RzL3V0aWxzXCIpO1xuY29uc3QgY2hlY2tib3hfdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY2hlY2tib3gudnVlXCIpKTtcbmNvbnN0IGF1dG91cGRhdGUgPSB0cnVlO1xuY29uc3QgdXBkYXRlSW50ZXJ2YWwgPSAxMDtcbmxldCB0aHJlYWRJZCA9IDA7XG5sZXQgbGF0ZXN0UG9zdElkID0gMDtcbmV4cG9ydHMuZGVmYXVsdCA9IHZ1ZV8xLmRlZmF1bHQuZXh0ZW5kKHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYXV0b3VwZGF0ZTogYXV0b3VwZGF0ZSxcbiAgICAgICAgICAgIGNvdW50ZXI6IHVwZGF0ZUludGVydmFsLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldE5ld1Bvc3RzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdHNXcmFwcGVyID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0JykucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoIXBvc3RzV3JhcHBlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Bvc3RzIHdyYXBwZXIgZWxlbWVudCBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7d2luZG93LmJhc2VVcmx9L2FqYXgvdGhyZWFkLyR7dGhyZWFkSWR9P2FmdGVyPSR7bGF0ZXN0UG9zdElkfWAsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbCA9IHlpZWxkIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICBwb3N0c1dyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3N0cyA9IHV0aWxzXzEuRE9NLnFzYSgnLnBvc3QnLCBwb3N0c1dyYXBwZXIpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocG9zdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gK3Bvc3QuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlkID4gbGF0ZXN0UG9zdElkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChuZXdQb3N0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXN0UG9zdElkID0gK25ld1Bvc3RzW25ld1Bvc3RzLmxlbmd0aCAtIDFdLmdldEF0dHJpYnV0ZSgnZGF0YS1wb3N0LWlkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRzXzEuZXZlbnRCdXMuJGVtaXQodHNfMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgbmV3UG9zdHMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25HZXROZXdQb3N0c0NsaWNrKCkge1xuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gdXBkYXRlSW50ZXJ2YWw7XG4gICAgICAgICAgICB0aGlzLmdldE5ld1Bvc3RzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUNvdW50ZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG91cGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50ZXIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuZ2V0TmV3UG9zdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlciA9IHVwZGF0ZUludGVydmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSB1cGRhdGVJbnRlcnZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goL1xcL3Jlc1xcLyhcXGQrKS8pO1xuICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyZWFkSWQgPSArbWF0Y2hbMV07XG4gICAgICAgIH1cbiAgICAgICAgbGF0ZXN0UG9zdElkID0gK3V0aWxzXzEuRE9NLnFzKCcucG9zdDpsYXN0LW9mLXR5cGUnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zdC1pZCcpO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlQ291bnRlci5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgdHNfMS5ldmVudEJ1cy4kb24odHNfMS5FdmVudHMuUG9zdENyZWF0ZWQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY291bnRlciA9IHVwZGF0ZUludGVydmFsO1xuICAgICAgICAgICAgdGhpcy5nZXROZXdQb3N0cygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ3gtY2hlY2tib3gnOiBjaGVja2JveF92dWVfMS5kZWZhdWx0LFxuICAgIH0sXG59KTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJsYWJlbFwiLFxuICAgIHsgY2xhc3M6IF92bS5sYWJlbENsYXNzIH0sXG4gICAgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGNsYXNzOiBfdm0uaW5wdXRDbGFzcyxcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udmFsdWUsIGNoZWNrZWQ6IF92bS5jaGVja2VkIH0sXG4gICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9uSW5wdXQgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImxhYmVsXCIsXG4gICAgeyBjbGFzczogX3ZtLmxhYmVsQ2xhc3MgfSxcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgY2xhc3M6IF92bS5pbnB1dENsYXNzLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcInJhZGlvXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSwgY2hlY2tlZDogX3ZtLnZhbHVlID09IF92bS5zZWxlY3RlZFZhbHVlIH0sXG4gICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9uSW5wdXQgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfX3NldHRpbmdzLWZvcm0gc2V0dGluZ3MtZm9ybVwiLFxuICAgICAgYXR0cnM6IHsgaWQ6IFwic2V0dGluZ3NfZm9ybVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX190YWJzXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fdGFiXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcInNldHRpbmdzLWZvcm1fX3RhYi0tYWN0aXZlXCI6IF92bS50YWIgPT09IFwiY29tbW9uXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0udGFiID0gXCJjb21tb25cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiQ29tbW9uXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fdGFiXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcInNldHRpbmdzLWZvcm1fX3RhYi0tYWN0aXZlXCI6IF92bS50YWIgPT09IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnRhYiA9IFwiZm9ybVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJGb3JtXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fdGFiXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcInNldHRpbmdzLWZvcm1fX3RhYi0tYWN0aXZlXCI6IF92bS50YWIgPT09IFwidGltZVwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnRhYiA9IFwidGltZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJUaW1lXCIpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIngtY29tbW9uXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udGFiID09PSBcImNvbW1vblwiLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWIgPT09ICdjb21tb24nXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3RhYi1jb250ZW50XCIsXG4gICAgICAgIGF0dHJzOiB7IHNldHRpbmdzOiBfdm0uc2V0dGluZ3MgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ4LWZvcm1cIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS50YWIgPT09IFwiZm9ybVwiLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWIgPT09ICdmb3JtJ1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX190YWItY29udGVudFwiLFxuICAgICAgICBhdHRyczogeyBzZXR0aW5nczogX3ZtLnNldHRpbmdzIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwieC10aW1lXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udGFiID09PSBcInRpbWVcIixcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFiID09PSAndGltZSdcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fdGFiLWNvbnRlbnRcIixcbiAgICAgICAgYXR0cnM6IHsgc2V0dGluZ3M6IF92bS5zZXR0aW5ncyB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX2Zvb3RlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19idXR0b25zXCIgfSwgW1xuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3N0YXR1c1wiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN0YXR1cykpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBzZXR0aW5ncy1mb3JtX19zYXZlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgX3ZtLnNhdmVTZXR0aW5ncygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJUaHJlYWQgQWxpZ25tZW50XCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuY29tbW9uLmxheW91dCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5jb21tb24sIFwibGF5b3V0XCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5jb21tb24ubGF5b3V0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBPbiB0aGUgbGVmdFxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmNvbW1vbi5sYXlvdXQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuY29tbW9uLCBcImxheW91dFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuY29tbW9uLmxheW91dFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgSW4gdGhlIGNlbnRlclxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIiB9LCBbX3ZtLl92KFwiUG9zdHNcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5jb21tb24uc2hvd1Bvc3RIZWFkZXJSZWZsaW5rSWNvbixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5jb21tb24sIFwic2hvd1Bvc3RIZWFkZXJSZWZsaW5rSWNvblwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuY29tbW9uLnNob3dQb3N0SGVhZGVyUmVmbGlua0ljb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFNob3cgcmVwbHkgaWNvbiBpbiB0aGUgcG9zdCBoZWFkZXJcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuY29tbW9uLm1vdmVQb3N0SGVhZGVyUmVmbGlua0ljb25Ub0RFLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MuY29tbW9uLFxuICAgICAgICAgICAgICAgICAgXCJtb3ZlUG9zdEhlYWRlclJlZmxpbmtJY29uVG9ERVwiLFxuICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmNvbW1vbi5tb3ZlUG9zdEhlYWRlclJlZmxpbmtJY29uVG9ERVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgTW92ZSBERSBoaWRlIGJ1dHRvbiBiZWZvcmUgcmVwbHkgaWNvblxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5jb21tb24uc2hvd1Bvc3RSZWZsaW5rSWNvbixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5jb21tb24sIFwic2hvd1Bvc3RSZWZsaW5rSWNvblwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuY29tbW9uLnNob3dQb3N0UmVmbGlua0ljb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgIFNob3cgcmVwbHkgaWNvbiBpbiB0aGUgYm90dG9tIHJpZ2h0IGNvcm5lciBvZiBwb3N0IG1lc3NhZ2VcXG4gICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5jb21tb24uc2Nyb2xsVG9OZXdQb3N0cyxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5jb21tb24sIFwic2Nyb2xsVG9OZXdQb3N0c1wiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuY29tbW9uLnNjcm9sbFRvTmV3UG9zdHNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFNjcm9sbCB0byBuZXcgcG9zdHNcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuY29tbW9uLnNtb290aFNjcm9sbCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5jb21tb24sIFwic21vb3RoU2Nyb2xsXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5jb21tb24uc21vb3RoU2Nyb2xsXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTbW9vdGggc2Nyb2xsaW5nXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmNvbW1vbi5zaG93VmlkZW9PdmVybGF5LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmNvbW1vbiwgXCJzaG93VmlkZW9PdmVybGF5XCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5jb21tb24uc2hvd1ZpZGVvT3ZlcmxheVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgU2hvdyB2aWRlbyBvdmVybGF5XFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF92bS5fdihcIkZvcm0gQmVoYXZpb3VyXCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZm9ybS5zY3JvbGxCb3R0b20sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuZm9ybSwgXCJzY3JvbGxCb3R0b21cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZvcm0uc2Nyb2xsQm90dG9tXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTY3JvbGwgdG8gdGhlIGJvdHRvbSBhZnRlciBwb3N0aW5nXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZvcm0uc2F2ZVN1YmplY3QsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuZm9ybSwgXCJzYXZlU3ViamVjdFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZm9ybS5zYXZlU3ViamVjdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgU2F2ZSBzdWJqZWN0IGFmdGVyIHBvc3RpbmdcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZm9ybS5zYXZlTmFtZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5mb3JtLCBcInNhdmVOYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5mb3JtLnNhdmVOYW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTYXZlIG5hbWUgYWZ0ZXIgcG9zdGluZ1xcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5mb3JtLnNhdmVGb3JtU3RhdGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuZm9ybSwgXCJzYXZlRm9ybVN0YXRlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5mb3JtLnNhdmVGb3JtU3RhdGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFNhdmUgZm9ybSBmbG9hdGluZyBzdGF0ZSBvbiBwYWdlIHJlbG9hZFxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJGb3JtIEFsaWdubWVudFwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZvcm0uYWxpZ24sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuZm9ybSwgXCJhbGlnblwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZm9ybS5hbGlnblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgT24gdGhlIGxlZnRcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5mb3JtLmFsaWduLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmZvcm0sIFwiYWxpZ25cIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZvcm0uYWxpZ25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIEluIHRoZSBjZW50ZXJcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiUHJldmlldyBBbGlnbm1lbnRcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5mb3JtLnByZXZpZXdBbGlnbixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5mb3JtLCBcInByZXZpZXdBbGlnblwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZm9ybS5wcmV2aWV3QWxpZ25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIE9uIHRoZSBsZWZ0XFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5mb3JtLnByZXZpZXdBbGlnbixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5mb3JtLCBcInByZXZpZXdBbGlnblwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZm9ybS5wcmV2aWV3QWxpZ25cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIE9uIHRoZSByaWdodFxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJNYXJrdXBcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5mb3JtLnNob3dNYXJrdXAsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuZm9ybSwgXCJzaG93TWFya3VwXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5mb3JtLnNob3dNYXJrdXBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFNob3cgbWFya3VwIGJ1dHRvbnNcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZm9ybS5zaG93TWFya3VwTW9iaWxlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmZvcm0sIFwic2hvd01hcmt1cE1vYmlsZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZm9ybS5zaG93TWFya3VwTW9iaWxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTaG93IG1hcmt1cCBidXR0b25zIChtb2JpbGUpXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZvcm0uaW5zZXJ0VGFnc0luUGFpcnMsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuZm9ybSwgXCJpbnNlcnRUYWdzSW5QYWlyc1wiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZm9ybS5pbnNlcnRUYWdzSW5QYWlyc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgSW5zZXJ0IHRhZ3MgaW4gcGFpcnNcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiUmVwbGFjZXNcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJ1bFwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19saXN0XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9sKF92bS5zZXR0aW5ncy5mb3JtLnJlcGxhY2VzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fbGlzdC1pdGVtXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5wYXR0ZXJuLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0ucGF0dGVyblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlBhdHRlcm5cIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBpdGVtLnBhdHRlcm4gfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcInBhdHRlcm5cIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnJlcGxhY2UsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5yZXBsYWNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiUmVwbGFjZVwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGl0ZW0ucmVwbGFjZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwicmVwbGFjZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbW92ZVJlcGxhY2VBdChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlJlbW92ZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19saXN0LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdSZXBsYWNlLnBhdHRlcm4sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdSZXBsYWNlLnBhdHRlcm5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlBhdHRlcm5cIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uZXdSZXBsYWNlLnBhdHRlcm4gfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubmV3UmVwbGFjZSwgXCJwYXR0ZXJuXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmV3UmVwbGFjZS5yZXBsYWNlLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3UmVwbGFjZS5yZXBsYWNlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJSZXBsYWNlXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3UmVwbGFjZS5yZXBsYWNlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm5ld1JlcGxhY2UsIFwicmVwbGFjZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5hZGRSZXBsYWNlKF92bS5uZXdSZXBsYWNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJBZGRcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF92bS5fdihcIkxhbmd1YWdlXCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS5sb2NhbGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MudGltZSwgXCJsb2NhbGVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnRpbWUubG9jYWxlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBCcm93c2VyIGRlZmF1bHRcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJjdXN0b21cIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLmxvY2FsZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy50aW1lLCBcImxvY2FsZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MudGltZS5sb2NhbGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgQ3VzdG9tXFxuICAgICAgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS5sb2NhbGVDdXN0b20sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnRpbWUubG9jYWxlQ3VzdG9tXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcImVuXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLmxvY2FsZUN1c3RvbSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy50aW1lLmxvY2FsZSA9IFwiY3VzdG9tXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MudGltZSxcbiAgICAgICAgICAgICAgICAgICAgXCJsb2NhbGVDdXN0b21cIixcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJGb3JtYXRcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLmZvcm1hdCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy50aW1lLCBcImZvcm1hdFwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MudGltZS5mb3JtYXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIEJyb3dzZXIgZGVmYXVsdFxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImN1c3RvbVwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUuZm9ybWF0LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLnRpbWUsIFwiZm9ybWF0XCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy50aW1lLmZvcm1hdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBDdXN0b21cXG4gICAgICBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLmZvcm1hdEN1c3RvbSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MudGltZS5mb3JtYXRDdXN0b21cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRUVFLCBkZCBNTU0geXl5eSBISDptbTpzc1wiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS5mb3JtYXRDdXN0b20gfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MudGltZS5mb3JtYXQgPSBcImN1c3RvbVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnRpbWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9ybWF0Q3VzdG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiVGltZSB6b25lXCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS56b25lLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLnRpbWUsIFwiem9uZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MudGltZS56b25lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBCcm93c2VyIGRlZmF1bHRcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUuem9uZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy50aW1lLCBcInpvbmVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnRpbWUuem9uZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBGaXhlZCBVVEMgb2Zmc2V0XFxuICAgICAgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS56b25lRml4ZWQsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnRpbWUuem9uZUZpeGVkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiwgbWluOiBcIi05OVwiLCBtYXg6IFwiOTlcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUuem9uZUZpeGVkIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnRpbWUuem9uZSA9IFwiZml4ZWRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLnRpbWUsIFwiem9uZUZpeGVkXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF92bS5fdihcIkN1cnJlbnQgZm9ybWF0XCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLnRpbWUpKV0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX3ZtLl92KFwiXFxuICAgIFNlZSB0aGVcXG4gICAgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9sdXhvbi9ibG9iL21hc3Rlci9kb2NzL2Zvcm1hdHRpbmcubWQjdGFibGUtb2YtdG9rZW5zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBsdXhvbiBkb2N1bWVudGF0aW9uXFxuICAgIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCJcXG4gICAgZm9yIHRoZSBjdXN0b20gdG9rZW5zIHJlZmVyZW5jZS5cXG4gIFwiKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRocmVhZC11cGRhdGVyIGNvbnRlbnRfX3RocmVhZC11cGRhdGVyXCIsXG4gICAgICBhdHRyczogeyBpZDogXCJ0aHJlYWQtdXBkYXRlclwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIHRocmVhZC11cGRhdGVyX191cGRhdGVcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBkaXNhYmxlZDogX3ZtLmxvYWRpbmcgfSxcbiAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uR2V0TmV3UG9zdHNDbGljayB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgR2V0IG5ldyBwb3N0c1xcbiAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInRocmVhZC11cGRhdGVyX19hdXRvLWxhYmVsXCIsXG4gICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwidGhyZWFkLXVwZGF0ZXJfX2F1dG8tY2hlY2tib3hcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uYXV0b3VwZGF0ZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmF1dG91cGRhdGUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImF1dG91cGRhdGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICBBdXRvdXBkYXRlXFxuICAgIFwiKSxcbiAgICAgICAgICBfdm0uYXV0b3VwZGF0ZVxuICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcImluIFwiICsgX3ZtLl9zKF92bS5jb3VudGVyKSldKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWFkLXVwZGF0ZXJfX2xvYWRlclwiIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQXBpIHtcbiAgICBzdGF0aWMgY3JlYXRlUG9zdChyZXF1ZXN0LCBvblByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3dpbmRvdy5iYXNlVXJsfS9hamF4L3Bvc3QvY3JlYXRlYDtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ3BhcmVudCcsIHJlcXVlc3QucGFyZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdzdWJqZWN0JywgcmVxdWVzdC5zdWJqZWN0KTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnbmFtZScsIHJlcXVlc3QubmFtZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ21lc3NhZ2UnLCByZXF1ZXN0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgcmVxdWVzdC5maWxlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG9uUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgeGhyLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIG9uUHJvZ3Jlc3MuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gWE1MSHR0cFJlcXVlc3QuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdMb2NhdGlvbicpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChgJHt4aHIuc3RhdHVzfSAke3hoci5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5BcGkgPSBBcGk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF8xID0gcmVxdWlyZShcIi5cIik7XG5jb25zdCBjb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzXCIpO1xuY29uc3Qgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xubmV3IGNvbXBvbmVudHNfMS5DYXB0Y2hhKCk7XG5uZXcgY29tcG9uZW50c18xLkNvcnJlY3RUaW1lKCk7XG5uZXcgY29tcG9uZW50c18xLkRlbGV0ZUZvcm0oKTtcbm5ldyBjb21wb25lbnRzXzEuUG9zdCgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0aW5nRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0UmVmZXJlbmNlTWFwKCk7XG5uZXcgY29tcG9uZW50c18xLlNldHRpbmdzKCk7XG5uZXcgY29tcG9uZW50c18xLlN0eWxlU3dpdGNoKCk7XG5uZXcgY29tcG9uZW50c18xLlRocmVhZFVwZGF0ZXIoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBlID0+IHtcbiAgICBfMS5ldmVudEJ1cy4kZW1pdChfMS5FdmVudHMuUmVhZHkpO1xuICAgIGNvbnN0IHBvc3RzID0gdXRpbHNfMS5ET00ucXNhKCcucG9zdCcpO1xuICAgIF8xLmV2ZW50QnVzLiRlbWl0KF8xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCBwb3N0cywgdHJ1ZSk7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBzZXR0aW5nc18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgaWYgKHNldHRpbmdzLmNvbW1vbi5zbW9vdGhTY3JvbGwpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzbW9vdGgtc2Nyb2xsJyk7XG4gICAgfVxuICAgIGNvbnN0IGxheW91dCA9IHV0aWxzXzEuRE9NLnFzKCcubGF5b3V0Jyk7XG4gICAgaWYgKGxheW91dCkge1xuICAgICAgICBsYXlvdXQuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LS0nICsgc2V0dGluZ3MuY29tbW9uLmxheW91dCk7XG4gICAgICAgIGlmICghc2V0dGluZ3MuY29tbW9uLnNob3dQb3N0SGVhZGVyUmVmbGlua0ljb24pIHtcbiAgICAgICAgICAgIGxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQtLWhpZGUtcG9zdC1oZWFkZXItcmVmbGluay1pY29uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5jb21tb24uc2hvd1Bvc3RSZWZsaW5rSWNvbikge1xuICAgICAgICAgICAgbGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dC0taGlkZS1wb3N0LXJlZmxpbmstaWNvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy5jb21tb24uc2hvd1ZpZGVvT3ZlcmxheSkge1xuICAgICAgICAgICAgbGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dC0tc2hvdy10aHVtYi1vdmVybGF5Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSB1dGlsc18xLkRPTS5xcygnLmNvbnRlbnRfX3Bvc3RpbmctZm9ybS13cmFwcGVyJyk7XG4gICAgaWYgKGZvcm1XcmFwcGVyKSB7XG4gICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRfX3Bvc3RpbmctZm9ybS13cmFwcGVyLS0nICsgc2V0dGluZ3MuZm9ybS5hbGlnbik7XG4gICAgfVxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBDYXB0Y2hhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFNyYyA9ICcnO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGFpbWFnZScpO1xuICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTcmMgPSBpbWFnZS5zcmM7XG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVsb2FkLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgY29uc3QgY2FwdGNoYSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYScpO1xuICAgICAgICBjYXB0Y2hhLnZhbHVlID0gJyc7XG4gICAgICAgIGNhcHRjaGEuZm9jdXMoKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB1dGlsc18xLkRPTS5xaWQoJ2NhcHRjaGFpbWFnZScpO1xuICAgICAgICBpbWFnZS5zcmMgPSBgJHt0aGlzLm9yaWdpbmFsU3JjfSMke25ldyBEYXRlKCkuZ2V0VGltZSgpfWA7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnRzLkNhcHRjaGEgPSBDYXB0Y2hhO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBsdXhvbl8xID0gcmVxdWlyZShcImx1eG9uXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIENvcnJlY3RUaW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IF9fMS5TZXR0aW5nc01hbmFnZXIubG9hZCgpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgdGhpcy5vblBvc3RzSW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUG9zdHNJbnNlcnRlZChwb3N0cykge1xuICAgICAgICBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUG9zdEluc2VydGVkKHBvc3QpIHtcbiAgICAgICAgY29uc3QgdGltZUVsZW1lbnRzID0gdXRpbHNfMS5ET00ucXNhKCcucG9zdCB0aW1lJywgcG9zdCk7XG4gICAgICAgIHRpbWVFbGVtZW50cy5mb3JFYWNoKHRoaXMuY29ycmVjdFRpbWUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGNvcnJlY3RUaW1lKGVsKSB7XG4gICAgICAgIGNvbnN0IHRpbWVfc3RyID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRldGltZScpO1xuICAgICAgICBpZiAoIXRpbWVfc3RyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZSA9IGx1eG9uXzEuRGF0ZVRpbWUuZnJvbUlTTyh0aW1lX3N0cik7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdXRpbHNfMS5UaW1lLmZvcm1hdCh0aW1lLCB0aGlzLnNldHRpbmdzKTtcbiAgICB9XG59XG5leHBvcnRzLkNvcnJlY3RUaW1lID0gQ29ycmVjdFRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBEZWxldGVGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ2RlbGZvcm0nKTtcbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVsZXRlX3Bvc3RfcGFzc3dvcmQgPSB1dGlsc18xLkRPTS5xaWQoJ2RlbGV0ZXBvc3RwYXNzd29yZCcpO1xuICAgICAgICBpZiAoZGVsZXRlX3Bvc3RfcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIC8vIExvYWQgZGVsZXRlIHBvc3QgcGFzc3dvcmQuXG4gICAgICAgICAgICBkZWxldGVfcG9zdF9wYXNzd29yZC52YWx1ZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3Bhc3N3b3JkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkRlbGV0ZUZvcm0gPSBEZWxldGVGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwb2ludGVyRXZlbnRzID0gJ1BvaW50ZXJFdmVudCcgaW4gd2luZG93O1xuY29uc3QgdG91Y2hFdmVudHMgPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XG5leHBvcnRzLmRyYWdnYWJsZSA9IHtcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBjb25zdCBoYW5kbGUgPSB0aGlzLmdldERyYWdIYW5kbGUoKTtcbiAgICAgICAgaWYgKCFoYW5kbGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYWdnYWJsZVJlc2l6ZSA9IHRoaXMub25EcmFnZ2FibGVSZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24gPSB0aGlzLm9uRHJhZ2dhYmxlTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRyYWdnYWJsZVJlc2l6ZSk7XG4gICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgIH1cbiAgICAgICAgLy90aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHModGhpcy5nZXRQb3NpdGlvbigpKSk7XG4gICAgfSxcbiAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGVSZXNpemUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmRyYWdnYWJsZVJlc2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlID0gdGhpcy5nZXREcmFnSGFuZGxlKCk7XG4gICAgICAgIGlmIChoYW5kbGUpIHtcbiAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldERyYWdIYW5kbGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RHJhZ2dhYmxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFBvc2l0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgZHJhZ2dhYmxlID0gdGhpcy5nZXREcmFnZ2FibGUoKTtcbiAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBkcmFnZ2FibGUub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgICAgICB5OiBkcmFnZ2FibGUub2Zmc2V0VG9wLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UG9zaXRpb24oY29vcmRzKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcmFnZ2FibGUuc3R5bGUubGVmdCA9IGAke2Nvb3Jkcy54fXB4YDtcbiAgICAgICAgICAgIGRyYWdnYWJsZS5zdHlsZS50b3AgPSBgJHtjb29yZHMueX1weGA7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrQm91bmRzKHsgeCwgeSB9KSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZHJhZ2dhYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgbWluWCA9IDA7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIC0gcmVjdC53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSByZWN0LmhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogTWF0aC5taW4oTWF0aC5tYXgobWluWCwgeCksIG1heFgpLFxuICAgICAgICAgICAgICAgIHk6IE1hdGgubWF4KE1hdGgubWluKG1heFksIHkpLCBtaW5ZKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ2dhYmxlUmVzaXplKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHRoaXMuZ2V0UG9zaXRpb24oKSkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRyYWdnYWJsZU1vdXNlRG93bihlKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5fZHJhZ2dhYmxlUG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1vdXNlRXZlbnRcbiAgICAgICAgICAgICAgICB8fCBwb2ludGVyRXZlbnRzICYmIGUgaW5zdGFuY2VvZiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmFnU3RhcnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgeTogZS5jbGllbnRZLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b3VjaEV2ZW50cyAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdG91Y2guY2xpZW50WCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG91Y2guY2xpZW50WSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlID0gdGhpcy5vbkRyYWdnYWJsZU1vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5kcmFnZ2FibGVNb3VzZVVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZVVwID0gdGhpcy5vbkRyYWdnYWJsZU1vdXNlVXAuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkRyYWdnYWJsZU1vdXNlTW92ZShlKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IGRlbHRhWCA9IDA7XG4gICAgICAgICAgICBsZXQgZGVsdGFZID0gMDtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW91c2VFdmVudFxuICAgICAgICAgICAgICAgIHx8IHBvaW50ZXJFdmVudHMgJiYgZSBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IGUuY2xpZW50WCAtIHRoaXMuX2RyYWdTdGFydC54O1xuICAgICAgICAgICAgICAgIGRlbHRhWSA9IGUuY2xpZW50WSAtIHRoaXMuX2RyYWdTdGFydC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG91Y2hFdmVudHMgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3VjaCA9IGUudG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBkZWx0YVggPSB0b3VjaC5jbGllbnRYIC0gdGhpcy5fZHJhZ1N0YXJ0Lng7XG4gICAgICAgICAgICAgICAgZGVsdGFZID0gdG91Y2guY2xpZW50WSAtIHRoaXMuX2RyYWdTdGFydC55O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLl9kcmFnZ2FibGVQb3NpdGlvbi54ICsgZGVsdGFYLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuX2RyYWdnYWJsZVBvc2l0aW9uLnkgKyBkZWx0YVksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ2dhYmxlTW91c2VVcChlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kcmFnZ2FibGVNb3VzZVVwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuZXhwb3J0cy5GaWxlUHJldmlldyA9IHZ1ZV8xLmRlZmF1bHQuZXh0ZW5kKHtcbiAgICB0ZW1wbGF0ZTogYFxuPGRpdiBjbGFzcz1cImZpbGUtcHJldmlld1wiXG4gIDp0aXRsZT1cImluZm9cIlxuICBAY2xpY2s9XCJvbkNsaWNrKCRldmVudClcIlxuICBAZHJhZ2VudGVyLnN0b3AucHJldmVudFxuICBAZHJhZ2xlYXZlLnN0b3AucHJldmVudFxuICBAZHJhZ292ZXIuc3RvcC5wcmV2ZW50XG4gIEBkcm9wLnN0b3AucHJldmVudD1cIm9uRHJvcCgkZXZlbnQpXCI+XG4gIDxzcGFuIGNsYXNzPVwiZmlsZS1wcmV2aWV3X19pbmZvXCJcbiAgICB2LWlmPVwidHlwZVwiPnt7IGluZm8gfX08L3NwYW4+XG5cbiAgPGltZyBjbGFzcz1cImZpbGUtcHJldmlld19fY29udGVudFwiXG4gICAgdi1pZj1cInR5cGUgPT09ICdpbWFnZScgJiYgc3JjXCJcbiAgICA6c3JjPVwic3JjXCIgLz5cbiAgPHZpZGVvIGNsYXNzPVwiZmlsZS1wcmV2aWV3X19jb250ZW50XCIgYXV0b3BsYXkgbG9vcCBtdXRlZFxuICAgIHYtZWxzZS1pZj1cInR5cGUgPT09ICd2aWRlbycgJiYgc3JjXCJcbiAgICA6c3JjPVwic3JjXCJcbiAgICA6dGl0bGU9XCJpbmZvXCI+PC92aWRlbz5cbiAgPHNwYW4gY2xhc3M9XCJmaWxlLXByZXZpZXdfX2xhYmVsXCJcbiAgICB2LWVsc2U+VXBsb2FkIGZpbGU8L3NwYW4+XG5cbiAgPHNsb3Q+PC9zbG90PlxuPC9kaXY+YCxcbiAgICBwcm9wczogWydmaWxlJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYzogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG5hbWUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlLm5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNpemUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZS5zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzaXplRm9ybWF0dGVkKCkge1xuICAgICAgICAgICAgY29uc3QgdW5pdHMgPSBbJ0InLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInXTtcbiAgICAgICAgICAgIGxldCBzaXplID0gdGhpcy5zaXplO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgZm9yICg7IGkgPCB1bml0cy5sZW5ndGggJiYgc2l6ZSA+PSAxMDAwOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzaXplIC89IDEwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYCR7c2l6ZS50b0ZpeGVkKDIpfSAke3VuaXRzW2ldfWA7XG4gICAgICAgIH0sXG4gICAgICAgIGluZm8oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lXG4gICAgICAgICAgICAgICAgPyBgJHt0aGlzLm5hbWV9LCAke3RoaXMuc2l6ZUZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiB0aGlzLnNpemVGb3JtYXR0ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHR5cGUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZmlsZS50eXBlO1xuICAgICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZS5zdGFydHNXaXRoKCd2aWRlby8nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3ZpZGVvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZS5zdGFydHNXaXRoKCdhdWRpby8nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2F1ZGlvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaW1hZ2UnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgICAgICBpZiAobmFtZS5lbmRzV2l0aCgnLndlYm0nKSB8fCBuYW1lLmVuZHNXaXRoKCcubXA0JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3ZpZGVvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy5tcDMnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYXVkaW8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdpbWFnZSc7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBmaWxlKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTCh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ecm9wKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Ryb3AnLCBlKTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjYXB0Y2hhXzEgPSByZXF1aXJlKFwiLi9jYXB0Y2hhXCIpO1xuZXhwb3J0cy5DYXB0Y2hhID0gY2FwdGNoYV8xLkNhcHRjaGE7XG52YXIgY29ycmVjdF90aW1lXzEgPSByZXF1aXJlKFwiLi9jb3JyZWN0LXRpbWVcIik7XG5leHBvcnRzLkNvcnJlY3RUaW1lID0gY29ycmVjdF90aW1lXzEuQ29ycmVjdFRpbWU7XG52YXIgZGVsZXRlX2Zvcm1fMSA9IHJlcXVpcmUoXCIuL2RlbGV0ZS1mb3JtXCIpO1xuZXhwb3J0cy5EZWxldGVGb3JtID0gZGVsZXRlX2Zvcm1fMS5EZWxldGVGb3JtO1xudmFyIGRyYWdnYWJsZV8xID0gcmVxdWlyZShcIi4vZHJhZ2dhYmxlXCIpO1xuZXhwb3J0cy5kcmFnZ2FibGUgPSBkcmFnZ2FibGVfMS5kcmFnZ2FibGU7XG52YXIgZmlsZV9wcmV2aWV3XzEgPSByZXF1aXJlKFwiLi9maWxlLXByZXZpZXdcIik7XG5leHBvcnRzLkZpbGVQcmV2aWV3ID0gZmlsZV9wcmV2aWV3XzEuRmlsZVByZXZpZXc7XG52YXIgcG9zdF8xID0gcmVxdWlyZShcIi4vcG9zdFwiKTtcbmV4cG9ydHMuUG9zdCA9IHBvc3RfMS5Qb3N0O1xudmFyIHBvc3RpbmdfZm9ybV8xID0gcmVxdWlyZShcIi4vcG9zdGluZy1mb3JtXCIpO1xuZXhwb3J0cy5Qb3N0aW5nRm9ybSA9IHBvc3RpbmdfZm9ybV8xLlBvc3RpbmdGb3JtO1xudmFyIHBvc3RfcmVmZXJlbmNlX21hcF8xID0gcmVxdWlyZShcIi4vcG9zdC1yZWZlcmVuY2UtbWFwXCIpO1xuZXhwb3J0cy5Qb3N0UmVmZXJlbmNlTWFwID0gcG9zdF9yZWZlcmVuY2VfbWFwXzEuUG9zdFJlZmVyZW5jZU1hcDtcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzID0gc2V0dGluZ3NfMS5TZXR0aW5ncztcbnZhciBzdHlsZV9zd2l0Y2hfMSA9IHJlcXVpcmUoXCIuL3N0eWxlLXN3aXRjaFwiKTtcbmV4cG9ydHMuU3R5bGVTd2l0Y2ggPSBzdHlsZV9zd2l0Y2hfMS5TdHlsZVN3aXRjaDtcbnZhciB0aHJlYWRfdXBkYXRlcl8xID0gcmVxdWlyZShcIi4vdGhyZWFkLXVwZGF0ZXJcIik7XG5leHBvcnRzLlRocmVhZFVwZGF0ZXIgPSB0aHJlYWRfdXBkYXRlcl8xLlRocmVhZFVwZGF0ZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0UmVmZXJlbmNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3N0cyA9IHt9O1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgKHBvc3RzKSA9PiBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0LmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgcG9zdElkID0gK3Bvc3QuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgLy8gU3RvcmUgcG9zdC5cbiAgICAgICAgdGhpcy5wb3N0c1twb3N0SWRdID0gcG9zdDtcbiAgICAgICAgLy8gR2V0IHJlZmVyZW5jZXMuXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZUVsZW1lbnRzID0gdXRpbHNfMS5ET00ucXNhKCdhW2RhdGEtdGFyZ2V0LXBvc3QtaWRdJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSByZWZlcmVuY2VFbGVtZW50cy5tYXAoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgaWQ6ICtlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQtcG9zdC1pZCcpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgYXV0aG9yIG5hbWUgb2YgdGhlIHJlZmVyZW5jZWQgcG9zdCB0byB0aGUgcmVmZXJlbmNlIGxpbmsgdGV4dC5cbiAgICAgICAgcmVmZXJlbmNlcy5mb3JFYWNoKHJlZmVyZW5jZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gdGhpcy5wb3N0c1tyZWZlcmVuY2UuaWRdO1xuICAgICAgICAgICAgaWYgKCFwb3N0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlQXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmVmZXJlbmNlQXV0aG9yLmNsYXNzTGlzdC5hZGQoJ3Bvc3RfX3JlZmVyZW5jZS1saW5rLWF1dGhvcicpO1xuICAgICAgICAgICAgcmVmZXJlbmNlQXV0aG9yLmlubmVySFRNTCA9IHRoaXMuZ2V0UG9zdFJlZkxpbmtBdXRob3JIdG1sKHBvc3QpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gcmVmZXJlbmNlLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gcmVmZXJlbmNlLmVsZW1lbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHJlZmVyZW5jZUF1dGhvciwgbmV4dFNpYmxpbmcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UG9zdFJlZkxpbmtBdXRob3JIdG1sKHBvc3QpIHtcbiAgICAgICAgY29uc3QgbmFtZUVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0LWhlYWRlcl9fbmFtZScsIHBvc3QpO1xuICAgICAgICBjb25zdCB0cmlwY29kZUVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0LWhlYWRlcl9fdHJpcGNvZGUnLCBwb3N0KTtcbiAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbCA/IG5hbWVFbC5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgY29uc3QgdHJpcGNvZGUgPSB0cmlwY29kZUVsID8gdHJpcGNvZGVFbC5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoIHx8IHRyaXBjb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGAoPHNwYW4gY2xhc3M9XCJwb3N0X19yZWZlcmVuY2UtbGluay1uYW1lXCI+JHtuYW1lfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgKyBgPHNwYW4gY2xhc3M9XCJwb3N0X19yZWZlcmVuY2UtbGluay10cmlwY29kZVwiPiR7dHJpcGNvZGV9PC9zcGFuPilgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGBgO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0UmVmZXJlbmNlTWFwID0gUG9zdFJlZmVyZW5jZU1hcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBkcmFnZ2FibGVfMSA9IHJlcXVpcmUoXCIuL2RyYWdnYWJsZVwiKTtcbjtcbmNsYXNzIFBvc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHRoaXMub25Qb3N0c0luc2VydGVkLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3B1cC5pZCA9ICdwb3B1cCc7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJywgJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShwb3B1cCwgbnVsbCk7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsID0gbmV3IHZ1ZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJwb3B1cFwiIGlkPVwicG9wdXBcIiB2LXNob3c9XCIhaGlkZGVuXCIgcmVmPVwicG9wdXBcIj5cbiAgPGRpdiBjbGFzcz1cInBvcHVwX19oZWFkZXJcIiByZWY9XCJoZWFkZXJcIj5cbiAgICA8c3BhbiBjbGFzcz1cInBvcHVwX190aXRsZVwiPnt7IHRpdGxlIH19PC9zcGFuPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJwb3B1cF9faGVhZGVyLWJ1dHRvbnNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9wdXBfX2Nsb3NlXCJcbiAgICAgICAgdi1vbjpjbGljay5zdG9wPVwib25DbG9zZUNsaWNrKClcIlxuICAgICAgICB0aXRsZT1cIkNsb3NlIHBvcHVwXCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInBvcHVwX19ib2R5XCIgdi1odG1sPVwiY29udGVudFwiPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gICAgICAgICAgICBtaXhpbnM6IFtkcmFnZ2FibGVfMS5kcmFnZ2FibGVdLFxuICAgICAgICAgICAgZWw6ICcjcG9wdXAnLFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjb3ViJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgZ2V0RHJhZ0hhbmRsZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuaGVhZGVyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0RHJhZ2dhYmxlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5wb3B1cDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xvc2VDbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblBvc3RzSW5zZXJ0ZWQocG9zdHMpIHtcbiAgICAgICAgcG9zdHMuZm9yRWFjaCh0aGlzLnByb2Nlc3NPRW1iZWRMaW5rcy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHJvY2Vzc09FbWJlZExpbmtzKHBvc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RDb250ZW50ID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0X19jb250ZW50JywgcG9zdCk7XG4gICAgICAgICAgICBpZiAoIXBvc3RDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcG9zdE1lc3NhZ2UgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX21lc3NhZ2UnLCBwb3N0KTtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtzID0gdXRpbHNfMS5ET00ucXNhKCdhW2hyZWZdJywgcG9zdCk7XG4gICAgICAgICAgICBsaW5rcy5maWx0ZXIobGluayA9PiAhbGluay5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJvY2Vzc2VkJykpXG4gICAgICAgICAgICAgICAgLm1hcChsaW5rID0+IHtcbiAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9jZXNzZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKHVybCA9PiB1cmwubWF0Y2goJ15odHRwcz86XFwvXFwvKD86d3d3XFwuKT9jb3ViXFwuY29tXFwvdmlld1xcLyhbMC05YS16XSspJCcpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIobWF0Y2hlcyA9PiBtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID49IDEpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKG1hdGNoZXMpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3ViVXJsID0gYGh0dHBzOi8vY291Yi5jb20vYXBpL3YyL2NvdWJzLyR7bWF0Y2hlc1sxXX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3dpbmRvdy5iYXNlVXJsfS9hcGkvZW1iZWQ/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNvdWJVcmwpfWA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENhblxcJ3QgbG9hZCBjb3ViICcke21hdGNoZXNbMF19JzpgLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdWIgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbFVybCA9IGNvdWIuaW1hZ2VfdmVyc2lvbnMudGVtcGxhdGUucmVwbGFjZSgnJXt2ZXJzaW9ufScsICdzbWFsbCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RfX2ZpbGUnLCAnZmlsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuaW5uZXJIVE1MID0gYFxuPGRpdiBjbGFzcz1cInBvc3RfX2ZpbGUtaW5mbyBmaWxlLWluZm8gZmlsZXNpemVcIj5cbiAgPGEgY2xhc3M9XCJmaWxlLWluZm9fX2xpbmtcIiBocmVmPVwiaHR0cHM6Ly9jb3ViLmNvbS92aWV3LyR7Y291Yi5wZXJtYWxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q291YjwvYT5cbiAgPHNwYW4gY2xhc3M9XCJmaWxlLWluZm9fX3NpemVcIj48L3NwYW4+XG48L2Rpdj5cblxuPGEgY2xhc3M9XCJmaWxlX190aHVtYm5haWwgdGh1bWJuYWlsIHRodW1ibmFpbC0tdmlkZW9cIiBocmVmPVwiaHR0cHM6Ly9jb3ViLmNvbS92aWV3LyR7Y291Yi5wZXJtYWxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gIDxpbWcgY2xhc3M9XCJ0aHVtYm5haWxfX2NvbnRlbnQgdGh1bWJuYWlsX19jb250ZW50X2ltYWdlXCIgc3JjPVwiJHt0aHVtYm5haWxVcmx9XCIgLz5cbjwvYT5gO1xuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuc3R5bGUubWF4SGVpZ2h0ID0gJzI1MHB4JztcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsLnN0eWxlLm1heFdpZHRoID0gJzI1MHB4JztcbiAgICAgICAgICAgICAgICAgICAgcG9zdENvbnRlbnQuaW5zZXJ0QmVmb3JlKHRodW1ibmFpbCwgcG9zdE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdXRpbHNfMS5ET00ucXMoJy50aHVtYm5haWwnLCB0aHVtYm5haWwpO1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Db3ViSW5Qb3B1cChjb3ViKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2FuXFwndCBsb2FkIGNvdWIgJyR7bWF0Y2hlc1swXX0nOmAsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9wZW5Db3ViSW5Qb3B1cChjb3ViKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3ViVXJsID0gYGh0dHBzOi8vY291Yi5jb20vdmlldy8ke2NvdWIucGVybWFsaW5rfWA7XG4gICAgICAgICAgICBjb25zdCBvRW1iZWRVcmwgPSBgaHR0cHM6Ly9jb3ViLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNvdWJVcmwpfSZhdXRvcGxheT10cnVlYDtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3dpbmRvdy5iYXNlVXJsfS9hcGkvZW1iZWQ/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9FbWJlZFVybCl9YDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2FuXFwndCBsb2FkIGNvdWIgJ2h0dHBzOi8vY291Yi5jb20vdmlldy8ke2NvdWIucGVybWFsaW5rfSc6YCwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBWaWV3TW9kZWwudGl0bGUgPSAnQ291YiDigJQgJyArIGNvdWIudGl0bGU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFZpZXdNb2RlbC5jb250ZW50ID0ganNvbi5odG1sLnJlcGxhY2UoJ211dGVkPXRydWUnLCAnbXV0ZWQ9ZmFsc2UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLnNldFBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgeDogTWF0aC5tYXgoMCwgd2luZG93LmlubmVyV2lkdGggLyAyIC0ganNvbi53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLm1heCgwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0ganNvbi5oZWlnaHQgLyAyKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENhblxcJ3QgbG9hZCBjb3ViICdodHRwczovL2NvdWIuY29tL3ZpZXcvJHtjb3ViLnBlcm1hbGlua30nOmAsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xvc2VQb3B1cCgpIHtcbiAgICAgICAgdGhpcy5wb3B1cFZpZXdNb2RlbC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLmNvbnRlbnQgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9zdCA9IFBvc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgYXBpXzEgPSByZXF1aXJlKFwiLi4vYXBpXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGNvbG9yX3BpY2tlcl8xID0gcmVxdWlyZShcIkB2dmF0YXNoaS9jb2xvci1waWNrZXJcIik7XG5jbGFzcyBQb3N0aW5nRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNJblRocmVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgdGhpcy5vblBvc3RzSW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKC9cXC9yZXNcXC8oXFxkKykvaSk7XG4gICAgICAgIGNvbnN0IGlzSW5UaHJlYWQgPSAhIW1hdGNoO1xuICAgICAgICBjb25zdCB0aHJlYWRJZCA9IGlzSW5UaHJlYWQgPyArbWF0Y2hbMV0gOiAwO1xuICAgICAgICB0aGlzLmlzSW5UaHJlYWQgPSBpc0luVGhyZWFkO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyB2dWVfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGVsOiBmb3JtLFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxmb3JtIGNsYXNzPVwiY29udGVudF9fcG9zdGluZy1mb3JtIHBvc3RpbmctZm9ybVwiIGlkPVwicG9zdGluZy1mb3JtXCJcbiAgdi1iaW5kOmNsYXNzPVwieyAncG9zdGluZy1mb3JtLS1mbG9hdGluZyc6IHBvc2l0aW9uID09ICdmbG9hdCcgfVwiXG4gIHYtb246c3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdCgpXCIgdi1zaG93PVwiIWhpZGRlblwiXG4gIHJlZj1cImZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyXCIgcmVmPVwiaGVhZGVyXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3RpdGxlXCI+e3tcbiAgICAgIHRocmVhZElkID8gJ1JlcGx5IHRvIHRocmVhZCAjJyArIHRocmVhZElkIDogJ0NyZWF0ZSB0aHJlYWQnXG4gICAgfX08L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyLWJ1dHRvbnNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19yZXNldFwiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cInJlc2V0RmllbGRzKClcIiB0aXRsZT1cIkNsZWFyIGZvcm1cIj48L3NwYW4+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19mbG9hdFwiXG4gICAgICAgIHYtaWY9XCJwb3NpdGlvbiAhPT0gJ2Zsb2F0JyAmJiBtb2RlICE9PSAnbW9iaWxlJ1wiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cIm1ha2VGbG9hdGluZygpXCIgdGl0bGU9XCJGbG9hdGluZyBmb3JtXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcmVzdG9yZVwiXG4gICAgICAgIHYtaWY9XCJwb3NpdGlvbiA9PT0gJ2Zsb2F0JyAmJiBtb2RlICE9PSAnbW9iaWxlJ1wiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cIm1vdmVUb0JvdHRvbSgpXCIgdGl0bGU9XCJNb3ZlIGZvcm0gdG8gYm90dG9tXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fY2xvc2VcIlxuICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJvbkNsb3NlQ2xpY2soKVwiIHRpdGxlPVwiQ2xvc2UgZm9ybVwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2NvbnRlbnRcIj5cbiAgICA8eC1maWxlLXByZXZpZXcgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXdcIlxuICAgICAgdi1iaW5kOmNsYXNzPVwie1xuICAgICAgICAncG9zdGluZy1mb3JtX19wcmV2aWV3LS1yaWdodCc6IG1vZGUgPT0gJ2RlZmF1bHQnXG4gICAgICAgICAgJiYgc2V0dGluZ3MucHJldmlld0FsaWduID09ICdyaWdodCcsXG4gICAgICB9XCJcbiAgICAgIHYtYmluZDpmaWxlPVwiZmlsZVwiXG4gICAgICB2LW9uOmNsaWNrPVwic2hvd0ZpbGVEaWFsb2coKVwiXG4gICAgICB2LW9uOmRyb3A9XCJvbkZpbGVEcm9wKCRldmVudClcIlxuICAgICAgdi1zaG93PVwibW9kZSA9PSAnZGVmYXVsdCcgfHwgZmlsZVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXctcmVtb3ZlXCJcbiAgICAgICAgdi1pZj1cImZpbGVcIiB2LW9uOmNsaWNrLnN0b3A9XCJmaWxlID0gbnVsbFwiPjwvc3Bhbj5cbiAgICA8L3gtZmlsZS1wcmV2aWV3PlxuXG4gICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fbWFpblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19zdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLnN1YmplY3RcIlxuICAgICAgICAgIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICB2LW9uOmNoYW5nZT1cIm9uU3ViamVjdENoYW5nZSgpXCIgLz5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fbmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5uYW1lXCJcbiAgICAgICAgICB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjpjaGFuZ2U9XCJvbk5hbWVDaGFuZ2UoKVwiIC8+XG5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9zdGluZy1mb3JtX19hdHRhY2htZW50XCIgdi1zaG93PVwibW9kZSA9PSAnbW9iaWxlJ1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwicG9zdGluZy1mb3JtX19hdHRhY2htZW50LWlucHV0XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMuZmlsZVwiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIHYtb246Y2hhbmdlPVwib25GaWxlQ2hhbmdlKCRldmVudC50YXJnZXQuZmlsZXMpXCJcbiAgICAgICAgICAgIHJlZj1cImZpbGVcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fc3VibWl0XCJcbiAgICAgICAgICB2LWlmPVwibW9kZSA9PSAnZGVmYXVsdCdcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlJlcGx5PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fbWFya3VwLXJvdyBtYXJrdXBcIlxuICAgICAgICB2LXNob3c9XCIobW9kZSA9PT0gJ21vYmlsZScpICYmIHNldHRpbmdzLnNob3dNYXJrdXBNb2JpbGVcbiAgICAgICAgICB8fCAobW9kZSAhPT0gJ21vYmlsZScpICYmIHNldHRpbmdzLnNob3dNYXJrdXBcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2InKVwiPlxuICAgICAgICAgIDxzdHJvbmc+Yjwvc3Ryb25nPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnaScpXCI+XG4gICAgICAgICAgPGVtPmk8L2VtPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgndScpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3VuZGVybGluZVwiPnU8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzJylcIj5cbiAgICAgICAgICA8ZGVsPnM8L2RlbD5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3N1YicpXCI+XG4gICAgICAgICAgPHN1Yj5zdWI8L3N1Yj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3N1cCcpXCI+XG4gICAgICAgICAgPHN1cD5zdXA8L3N1cD5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICBAY2xpY2sucHJldmVudD1cInRvZ2dsZUNvbG9yUG9wdXBcIj5cbiAgICAgICAgICBjb2xvclxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItcGlja2VyLXBvcHVwXCIgdi1pZj1cImNvbG9yUG9wdXBWaXNpYmxlXCI+XG4gICAgICAgICAgPHgtY29sb3ItcGlja2VyIHJlZj1cImNvbG9yLXBpY2tlclwiIGNsYXNzPVwiY29sb3ItcGlja2VyLXBvcHVwX19waWNrZXJcIlxuICAgICAgICAgICAgOndpZHRoPVwiMTI4XCIgOmhlaWdodD1cIjEyOFwiIDpzaG93TGFiZWxzPVwiZmFsc2VcIj5cbiAgICAgICAgICA8L3gtY29sb3ItcGlja2VyPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLXBpY2tlci1wb3B1cF9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cIm9uQ29sb3JQb3B1cE9rXCI+T2s8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cIm9uQ29sb3JQb3B1cENhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnY29kZScpXCI+XG4gICAgICAgICAgPGNvZGU+Y29kZTwvY29kZT5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3Nwb2lsZXInKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFya3VwX19zcG9pbGVyIG1hcmt1cF9fc3BvaWxlci0tdmlzaWJsZVwiPnNwPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydFF1b3RlKClcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fcXVvdGVcIj4mZ3Q7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19yb3dcIj5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLm1lc3NhZ2VcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjprZXlkb3duPVwib25NZXNzYWdlS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICB2LW9uOnBhc3RlPVwib25NZXNzYWdlUGFzdGUoJGV2ZW50KVwiXG4gICAgICAgICAgcmVmPVwibWVzc2FnZVwiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwic3RhdHVzXCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3N0YXR1c1wiPnt7IHN0YXR1cyB9fTwvZGl2PlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fc3VibWl0ICBwb3N0aW5nLWZvcm1fX3N1Ym1pdC0tbW9iaWxlXCJcbiAgICAgICAgdi1pZj1cIm1vZGUgPT0gJ21vYmlsZSdcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlJlcGx5PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb3JtPmAsXG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZUZvcm1TdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgY29tcG9uZW50LnNldHRpbmdzLmZvcm0uZmxvYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2Zsb2F0JyA6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbW9iaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JQb3B1cFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgICAgICB0aHJlYWRJZCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocmVhZElkO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuc2V0dGluZ3MuZm9ybTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNhdmVTdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgc2F2ZWQgc3ViamVjdC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViamVjdCA9IGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLnN1YmplY3QnXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLnN1YmplY3QgPSBzdWJqZWN0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5zYXZlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIHNhdmVkIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsb2NhbFN0b3JhZ2VbJ3Bvc3RpbmctZm9ybS5uYW1lJ107XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemUgPSB0aGlzLnVwZGF0ZU1vZGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY29tcG9uZW50LnNldHRpbmdzLmZvcm0uZmxvYXRQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHBvc2l0aW9uKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ3gtZmlsZS1wcmV2aWV3JzogXzEuRmlsZVByZXZpZXcsXG4gICAgICAgICAgICAgICAgJ3gtY29sb3ItcGlja2VyJzogY29sb3JfcGlja2VyXzEuSFNWQ29sb3JQaWNrZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWl4aW5zOiBbXG4gICAgICAgICAgICAgICAgXzEuZHJhZ2dhYmxlLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBnZXREcmFnSGFuZGxlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5oZWFkZXI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXREcmFnZ2FibGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5mb3JtO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlLnN0eWxlLmxlZnQgPSBgJHtjb29yZHMueH1weGA7XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZS5zdHlsZS50b3AgPSBgJHtjb29yZHMueX1weGA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmZvcm0uZmxvYXRQb3NpdGlvbiA9IGNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZShjb21wb25lbnQuc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25EcmFnZ2FibGVSZXNpemUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5jaGVja0JvdW5kcyh0aGlzLmdldFBvc2l0aW9uKCkpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc2V0RmllbGRzKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNhdmVTdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5zdWJqZWN0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5zYXZlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZmlsZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFrZUZsb2F0aW5nKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubWFrZUZsb2F0aW5nKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb3ZlVG9Cb3R0b20oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNob3dGaWxlRGlhbG9nKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4kcmVmcy5maWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGUuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlTW9kZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlID0gd2luZG93LmlubmVyV2lkdGggPCA2MDAgPyAnbW9iaWxlJyA6ICdkZWZhdWx0JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ21vYmlsZScgJiYgdGhpcy5wb3NpdGlvbiA9PT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNsb3NlQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWJqZWN0Q2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHN1YmplY3QuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLnN1YmplY3QnXSA9IHRoaXMuZmllbGRzLnN1YmplY3Q7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbk5hbWVDaGFuZ2UoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlWydwb3N0aW5nLWZvcm0ubmFtZSddID0gdGhpcy5maWVsZHMubmFtZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRmlsZURyb3AoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dCAmJiB0ZXh0Lm1hdGNoKC9odHRwcz86XFwvXFwvWy1hLXpBLVowLTlAOiUuX1xcK34jPV17Mix9XFwuW2Etel17Mix9XFxiWy1hLXpBLVowLTlAOiVfXFwrLn4jPyZcXC89XSovKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHRleHQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IHhoci5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEVycm9yOiAke3hoci5zdGF0dXN9ICR7eGhyLnN0YXR1c1RleHR9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25GaWxlQ2hhbmdlKGZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGZpbGVzLmxlbmd0aCA/IGZpbGVzWzBdIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTWVzc2FnZUtleURvd24oZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdWJtaXQgZm9ybSBvbiBDdHJsK0VudGVyIGluIHRoZSBtZXNzYWdlIGZpZWxkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoKGUua2V5Q29kZSA9PSAxMCB8fCBlLmtleUNvZGUgPT0gMTMpICYmIGUuY3RybEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbk1lc3NhZ2VQYXN0ZShlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3RlIGZpbGUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBlLmNsaXBib2FyZERhdGEgfHwgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZGF0YS5pdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXRlbS50eXBlLnN0YXJ0c1dpdGgoJ2F1ZGlvLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXRlbS50eXBlLnN0YXJ0c1dpdGgoJ3ZpZGVvLycpO1xuICAgICAgICAgICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvZ2dsZUNvbG9yUG9wdXAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQb3B1cFZpc2libGUgPSAhdGhpcy5jb2xvclBvcHVwVmlzaWJsZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29sb3JQb3B1cE9rKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yUG9wdXBWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0TWFya3VwKCdjb2xvcicsIHRoaXMuJHJlZnNbJ2NvbG9yLXBpY2tlciddLmhleCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbG9yUG9wdXBDYW5jZWwoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQb3B1cFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGluc2VydE1hcmt1cCh0YWcsIGF0dHJpYnV0ZSA9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUVsID0gdGhpcy4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kIC0gbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5maWVsZHMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlbmluZ1RhZyA9IGBbJHt0YWd9JHthdHRyaWJ1dGUgPyAnPScgKyBhdHRyaWJ1dGUgOiAnJ31dYDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2luZ1RhZyA9IGBbLyR7dGFnfV1gO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCB8fCBjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5pbnNlcnRUYWdzSW5QYWlycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGV4dCBpcyBzZWxlY3RlZCwgd3JhcCBpdCBpbiBhIHRhZyBwYWlyLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmJlZ2luLCBzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb24uZW5kICsgb3BlbmluZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmxhc3RJbmRleE9mKG9wZW5pbmdUYWcsIHNlbGVjdGlvbi5iZWdpbikgPiBtZXNzYWdlLmxhc3RJbmRleE9mKGNsb3NpbmdUYWcsIHNlbGVjdGlvbi5iZWdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHNlbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5lbmQgKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5zZXJ0UXVvdGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHRoaXMuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZSA9IG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyID0gbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpbmVCZWZvcmUgPSBiZWZvcmUubGVuZ3RoICYmICFiZWZvcmUuZW5kc1dpdGgoJ1xcbicpID8gJ1xcbicgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUFmdGVyID0gIWFmdGVyLmxlbmd0aCB8fCAhYWZ0ZXIuc3RhcnRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZVRleHQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGUgPSBgJHtuZXdMaW5lQmVmb3JlfT4gJHtxdW90ZVRleHR9JHtuZXdMaW5lQWZ0ZXJ9YDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5iZWdpbiArIHF1b3RlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgcmVwbGFjZXMgdG8gdGhlIG1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlcyA9IGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnJlcGxhY2VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlcGxhY2VzLnJlZHVjZSgobWVzc2FnZSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoaXRlbS5wYXR0ZXJuLCAnZ20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKHJlZ2V4cCwgaXRlbS5yZXBsYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuZmllbGRzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHlpZWxkIGFwaV8xLkFwaS5jcmVhdGVQb3N0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogdGhpcy5maWVsZHMuc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5maWVsZHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogdGhpcy5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzc1BlcmNlbnQgPSBNYXRoLmNlaWwoZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgVXBsb2FkaW5nLi4uICR7cHJvZ3Jlc3NQZXJjZW50fSVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgZm9ybSB0byB0aGUgaW5pdGlhbCBsb2NhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJblRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5Qb3N0Q3JlYXRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byB0aHJlYWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgRXJyb3I6ICR7ZX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNjcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0aGUgbGFzdCBwb3N0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdDpudGgtbGFzdC1vZi10eXBlKDEpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybS1zaG93Jyk7XG4gICAgICAgIGlmIChzaG93QnV0dG9uKSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvQm90dG9tKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50ID0gdXRpbHNfMS5ET00ucXMoJy5sYXlvdXRfX2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmbGluaycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZtID0gdGhpcy52aWV3TW9kZWw7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUVsID0gdm0uJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kIC0gbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHZtLmZpZWxkcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZSA9IG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbik7XG4gICAgICAgICAgICAgICAgY29uc3QgYWZ0ZXIgPSBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdMaW5lQmVmb3JlID0gYmVmb3JlLmxlbmd0aCAmJiAhYmVmb3JlLmVuZHNXaXRoKCdcXG4nKSA/ICdcXG4nIDogJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUFmdGVyID0gIWFmdGVyLmxlbmd0aCB8fCAhYWZ0ZXIuc3RhcnRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1yZWZsaW5rJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVvdGVUZXh0ID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFF1b3RlSW5kZXggPSBtZXNzYWdlLmxhc3RJbmRleE9mKCc+PicsIHNlbGVjdGlvbi5iZWdpbik7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVvdGVTYW1lUG9zdCA9IGxhc3RRdW90ZUluZGV4ICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAmJiBtZXNzYWdlLmxhc3RJbmRleE9mKGA+PiR7aWR9YCwgc2VsZWN0aW9uLmJlZ2luKSA+PSBsYXN0UXVvdGVJbmRleDtcbiAgICAgICAgICAgICAgICAvLyBJZiBxdW90aW5nIHRoZSBzYW1lIHBvc3QgYWdhaW4sIG5vdCBpbnNlcnQgaWQuXG4gICAgICAgICAgICAgICAgbGV0IHF1b3RlID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHF1b3RlU2FtZVBvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBxdW90ZVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7bmV3TGluZUJlZm9yZX0+ICR7cXVvdGVUZXh0fSR7bmV3TGluZUFmdGVyfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdW90ZSA9IHF1b3RlVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtuZXdMaW5lQmVmb3JlfT4+JHtpZH1cXG4+ICR7cXVvdGVUZXh0fSR7bmV3TGluZUFmdGVyfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7bmV3TGluZUJlZm9yZX0+PiR7aWR9JHtuZXdMaW5lQWZ0ZXJ9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSW5zZXJ0IHJlcGx5IG1hcmt1cC5cbiAgICAgICAgICAgICAgICB2bS5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICBxdW90ZSxcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXIsXG4gICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0luVGhyZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChxdW90ZVNhbWVQb3N0ICYmICFxdW90ZVRleHQgJiYgIXZtLmhpZGRlbiAmJiB2bS5wb3NpdGlvbiAhPT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLnBvc2l0aW9uICE9PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBmb3JtIHRvIHRoZSBwb3N0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0YXJnZXQuY2xvc2VzdCgnLnBvc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1Bvc3QocG9zdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZtLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBxdW90ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb24uYmVnaW4gKyBxdW90ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblBvc3RzSW5zZXJ0ZWQocG9zdHMsIGluaXRpYWwpIHtcbiAgICAgICAgaWYgKCFpbml0aWFsICYmIHRoaXMuc2V0dGluZ3MuY29tbW9uLnNjcm9sbFRvTmV3UG9zdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGluZ0VsID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgICAgICAgY29uc3QgcG9zdHNIZWlnaHQgPSBwb3N0cy5yZWR1Y2UoKHRvdGFsLCBwb3N0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHBvc3QsICcnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJnaW4gPSBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykpXG4gICAgICAgICAgICAgICAgICAgICsgcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWwgKyBwb3N0Lm9mZnNldEhlaWdodCArIG1hcmdpbjtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgLy8gSWYgaW4gdGhlIGJvdHRvbSBhcmVhLlxuICAgICAgICAgICAgY29uc3QgYm90dG9tT2Zmc2V0ID0gc2Nyb2xsaW5nRWwuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsaW5nRWwuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgY29uc3QgYm90dG9tQXJlYSA9IHBvc3RzSGVpZ2h0ICsgMS4yNSAqIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgIGlmIChib3R0b21PZmZzZXQgPCBib3R0b21BcmVhKSB7XG4gICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBsYXN0IHBvc3QuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0Om50aC1sYXN0LW9mLXR5cGUoMSknKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY29tbW9uLm1vdmVQb3N0SGVhZGVyUmVmbGlua0ljb25Ub0RFKSB7XG4gICAgICAgICAgICBwb3N0cy5mb3JFYWNoKHBvc3QgPT4ge1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgcmVwbHkgaWNvbiBhZnRlciBERSBoaWRlIGljb24uXG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbHlJY29uID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0LWhlYWRlcl9fcmVmbGluay13cmFwcGVyID4gLnBvc3QtaGVhZGVyX19yZWZsaW5rLWljb24nLCBwb3N0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZUhpZGUgPSB1dGlsc18xLkRPTS5xcygnLmRlLWJ0bi1oaWRlJywgcG9zdCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcGx5SWNvbiAmJiBkZUhpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlJY29uLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRlSGlkZSwgcmVwbHlJY29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVSZXBseUJ1dHRvbigpIHtcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKCFzaG93QnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmlld01vZGVsLmhpZGRlbiB8fCB0aGlzLnZpZXdNb2RlbC5wb3NpdGlvbiAhPT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMudmlld01vZGVsLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICAgIHNob3coKSB7XG4gICAgICAgIHRoaXMudmlld01vZGVsLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgICBtYWtlRmxvYXRpbmcoKSB7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICB2bS5wb3NpdGlvbiA9ICdmbG9hdCc7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgIHNldHRpbmdzLmZvcm0uZmxvYXQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLnNldHRpbmdzLmZvcm0uZmxvYXRQb3NpdGlvbjtcbiAgICAgICAgdm0uc2V0UG9zaXRpb24odm0uY2hlY2tCb3VuZHMocG9zaXRpb24pKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgIH1cbiAgICBtb3ZlVG9Qb3N0KHBvc3QsIGZvY3VzID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtJyk7XG4gICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICBwb3N0LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGZvcm0sIHBvc3QubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICB2bS5wb3NpdGlvbiA9ICdwb3N0JztcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBfXzEuU2V0dGluZ3NNYW5hZ2VyLmxvYWQoKTtcbiAgICAgICAgc2V0dGluZ3MuZm9ybS5mbG9hdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgY29uc3Qgc2hvd0J1dHRvbiA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXNob3cnKTtcbiAgICAgICAgaWYgKHNob3dCdXR0b24pIHtcbiAgICAgICAgICAgIHNob3dCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgICAgICBpZiAoZm9jdXMpIHtcbiAgICAgICAgICAgIHZtLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1vdmVUb0JvdHRvbShmb2N1cyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0td3JhcHBlcicpO1xuICAgICAgICBpZiAoZm9ybSAmJiB3cmFwcGVyKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmluc2VydEJlZm9yZShmb3JtLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgdm0ucG9zaXRpb24gPSAnYm90dG9tJztcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBfXzEuU2V0dGluZ3NNYW5hZ2VyLmxvYWQoKTtcbiAgICAgICAgc2V0dGluZ3MuZm9ybS5mbG9hdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgdGhpcy51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgICAgICBpZiAoZm9jdXMpIHtcbiAgICAgICAgICAgIHZtLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0aW5nRm9ybSA9IFBvc3RpbmdGb3JtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IHNldHRpbmdzX2Zvcm1fdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS52dWVcIikpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzRm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgnc2V0dGluZ3NfZm9ybScpO1xuICAgICAgICBpZiAoIXNldHRpbmdzRm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmlld01vZGVsID0gbmV3IHZ1ZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgZWw6ICcjc2V0dGluZ3NfZm9ybScsXG4gICAgICAgICAgICByZW5kZXI6IGggPT4gaChzZXR0aW5nc19mb3JtX3Z1ZV8xLmRlZmF1bHQpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlNldHRpbmdzID0gU2V0dGluZ3M7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBTdHlsZVN3aXRjaCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3R5bGVzID0ge307XG4gICAgICAgIC8vIFBhcnNlIHNlbGVjdGFibGUgc3R5bGVzIGZyb20gPGhlYWQ+XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHV0aWxzXzEuRE9NLnFzYSgnbGlua1t0aXRsZV0nKTtcbiAgICAgICAgc3R5bGVzLmZvckVhY2goc3R5bGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBzdHlsZS50aXRsZTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHN0eWxlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgdGhpcy5zdHlsZXNbdGl0bGVdID0gdXJsO1xuICAgICAgICAgICAgaWYgKCFzdHlsZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIHN0eWxlLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gR2V0IHNlbGVjdGVkIHN0eWxlXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX3N0eWxlID0gdXRpbHNfMS5Db29raWUuZ2V0KCd0aW55aWJfc3R5bGUnLCAnU3ludGh3YXZlJyk7XG4gICAgICAgIHRoaXMuc2V0U3R5bGUoc2VsZWN0ZWRfc3R5bGUpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVfc3dpdGNoZXIgPSB1dGlsc18xLkRPTS5xaWQoJ3N0eWxlLXN3aXRjaGVyJyk7XG4gICAgICAgIGlmIChzdHlsZV9zd2l0Y2hlcikge1xuICAgICAgICAgICAgLy8gUG9wdWxhdGUgc3R5bGUgc3dpdGNoZXIgd2lkZ2V0XG4gICAgICAgICAgICBjb25zdCBzdHlsZXMgPSBPYmplY3Qua2V5cyh0aGlzLnN0eWxlcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gc3R5bGVzW2ldO1xuICAgICAgICAgICAgICAgIHN0eWxlX3N3aXRjaGVyLmlubmVySFRNTCArPSBgPG9wdGlvbiBjbGFzcz1cInN0eWxlLXN3aXRjaGVyX19vcHRpb25cIiB2YWx1ZT1cIiR7dGl0bGV9XCI+JHt0aXRsZX08L29wdGlvbj5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IHN0eWxlIGNoYW5nZSBjYWxsYmFja1xuICAgICAgICAgICAgc3R5bGVfc3dpdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3R5bGUoc3R5bGVfc3dpdGNoZXIudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0U3R5bGUoc3R5bGUpIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IHV0aWxzXzEuRE9NLnFzKCdoZWFkJyk7XG4gICAgICAgIC8vIElmIG5vIDxoZWFkPiBlbGVtZW50LCBkbyBub3RoaW5nXG4gICAgICAgIGlmICghaGVhZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX3N0eWxlID0gdXRpbHNfMS5ET00ucXMoJ2xpbmtbZGF0YS1zZWxlY3RlZF0nKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkX3N0eWxlKSB7XG4gICAgICAgICAgICAvLyBJZiBzdHlsZSBhbHJlYWR5IHNlbGVjdGVkLCBkbyBub3RoaW5nXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRfc3R5bGUudGl0bGUgPT09IHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIHByZXZpb3VzbHkgc2VsZWN0ZWQgc3R5bGUgZnJvbSA8aGVhZD5cbiAgICAgICAgICAgIHNlbGVjdGVkX3N0eWxlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBjdXJyZW50bHkgc2VsZWN0ZWQgc3R5bGUgdG8gPGhlYWQ+XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuc3R5bGVzW3N0eWxlXTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgbGluay5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgbGluay50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgLy8gU2F2ZSBzZWxlY3RlZCBzdHlsZVxuICAgICAgICBjb25zdCBleHBpcmF0aW9uX2RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBleHBpcmF0aW9uX2RhdGUuc2V0VGltZShleHBpcmF0aW9uX2RhdGUuZ2V0VGltZSgpICsgMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHV0aWxzXzEuQ29va2llLnNldCgndGlueWliX3N0eWxlJywgc3R5bGUsIGV4cGlyYXRpb25fZGF0ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5TdHlsZVN3aXRjaCA9IFN0eWxlU3dpdGNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IHRocmVhZF91cGRhdGVyX3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3RocmVhZC11cGRhdGVyLnZ1ZVwiKSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgVGhyZWFkVXBkYXRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCB0aHJlYWRVcGRhdGVyID0gdXRpbHNfMS5ET00ucWlkKCd0aHJlYWQtdXBkYXRlcicpO1xuICAgICAgICBpZiAoIXRocmVhZFVwZGF0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyB2dWVfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGVsOiAnI3RocmVhZC11cGRhdGVyJyxcbiAgICAgICAgICAgIHJlbmRlcjogaCA9PiBoKHRocmVhZF91cGRhdGVyX3Z1ZV8xLmRlZmF1bHQpLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLlRocmVhZFVwZGF0ZXIgPSBUaHJlYWRVcGRhdGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGV2ZW50QnVzID0gbmV3IHZ1ZV8xLmRlZmF1bHQoKTtcbmV4cG9ydHMuZXZlbnRCdXMgPSBldmVudEJ1cztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEV2ZW50cztcbihmdW5jdGlvbiAoRXZlbnRzKSB7XG4gICAgRXZlbnRzW1wiUmVhZHlcIl0gPSBcInJlYWR5XCI7XG4gICAgRXZlbnRzW1wiUG9zdHNJbnNlcnRlZFwiXSA9IFwicG9zdHNfaW5zZXJ0ZWRcIjtcbiAgICBFdmVudHNbXCJQb3N0Q3JlYXRlZFwiXSA9IFwicG9zdF9jcmVhdGVkXCI7XG4gICAgRXZlbnRzW1wiSW5zZXJ0TWFya3VwXCJdID0gXCJpbnNlcnRfbWFya3VwXCI7XG59KShFdmVudHMgPSBleHBvcnRzLkV2ZW50cyB8fCAoZXhwb3J0cy5FdmVudHMgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYXBpXzEgPSByZXF1aXJlKFwiLi9hcGlcIik7XG5leHBvcnRzLkFwaSA9IGFwaV8xLkFwaTtcbnZhciBldmVudF9idXNfMSA9IHJlcXVpcmUoXCIuL2V2ZW50LWJ1c1wiKTtcbmV4cG9ydHMuZXZlbnRCdXMgPSBldmVudF9idXNfMS5ldmVudEJ1cztcbnZhciBldmVudHNfMSA9IHJlcXVpcmUoXCIuL2V2ZW50c1wiKTtcbmV4cG9ydHMuRXZlbnRzID0gZXZlbnRzXzEuRXZlbnRzO1xudmFyIHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcbmV4cG9ydHMuU2V0dGluZ3NNYW5hZ2VyID0gc2V0dGluZ3NfMS5TZXR0aW5nc01hbmFnZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHNldHRpbmdzS2V5ID0gJ3NldHRpbmdzJztcbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgbGF5b3V0OiAnbGVmdCcsXG4gICAgICAgIHNob3dQb3N0SGVhZGVyUmVmbGlua0ljb246IHRydWUsXG4gICAgICAgIG1vdmVQb3N0SGVhZGVyUmVmbGlua0ljb25Ub0RFOiBmYWxzZSxcbiAgICAgICAgc2hvd1Bvc3RSZWZsaW5rSWNvbjogZmFsc2UsXG4gICAgICAgIHNjcm9sbFRvTmV3UG9zdHM6IHRydWUsXG4gICAgICAgIHNtb290aFNjcm9sbDogdHJ1ZSxcbiAgICAgICAgc2hvd1ZpZGVvT3ZlcmxheTogZmFsc2UsXG4gICAgfSxcbiAgICBmb3JtOiB7XG4gICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgcHJldmlld0FsaWduOiAncmlnaHQnLFxuICAgICAgICBzY3JvbGxCb3R0b206IHRydWUsXG4gICAgICAgIHNob3dNYXJrdXA6IHRydWUsXG4gICAgICAgIHNob3dNYXJrdXBNb2JpbGU6IGZhbHNlLFxuICAgICAgICBpbnNlcnRUYWdzSW5QYWlyczogdHJ1ZSxcbiAgICAgICAgc2F2ZUZvcm1TdGF0ZTogZmFsc2UsXG4gICAgICAgIHNhdmVTdWJqZWN0OiBmYWxzZSxcbiAgICAgICAgc2F2ZU5hbWU6IHRydWUsXG4gICAgICAgIGZsb2F0OiBmYWxzZSxcbiAgICAgICAgZmxvYXRQb3NpdGlvbjogeyB4OiAxMDAsIHk6IDEwMCB9LFxuICAgICAgICByZXBsYWNlczogW10sXG4gICAgfSxcbiAgICB0aW1lOiB7XG4gICAgICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxuICAgICAgICBsb2NhbGVDdXN0b206ICcnLFxuICAgICAgICB6b25lOiAnZGVmYXVsdCcsXG4gICAgICAgIHpvbmVGaXhlZDogMCxcbiAgICAgICAgZm9ybWF0OiAnZGVmYXVsdCcsXG4gICAgICAgIGZvcm1hdEN1c3RvbTogJycsXG4gICAgfSxcbn07XG5mdW5jdGlvbiBpc09iamVjdChpdGVtKSB7XG4gICAgcmV0dXJuIChpdGVtICYmIHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSk7XG59XG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGNvbnN0IG91dHB1dCA9IE9iamVjdC5hc3NpZ24oe30sIHRhcmdldCk7XG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRba2V5XSA9IG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihvdXRwdXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbmNsYXNzIFNldHRpbmdzTWFuYWdlciB7XG4gICAgc3RhdGljIGxvYWQoKSB7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5nc0tleSkpO1xuICAgICAgICByZXR1cm4gbWVyZ2UoZGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XG4gICAgfVxuICAgIHN0YXRpYyBzYXZlKHNldHRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShzZXR0aW5ncyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNldHRpbmdzS2V5LCBkYXRhKTtcbiAgICB9XG59XG5leHBvcnRzLlNldHRpbmdzTWFuYWdlciA9IFNldHRpbmdzTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgQ29va2llIHtcbiAgICBzdGF0aWMgZ2V0KG5hbWUsIF9kZWZhdWx0ID0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb29raWVfc3RyID0gYDsgJHtkb2N1bWVudC5jb29raWV9YDtcbiAgICAgICAgY29uc3QgY29va2llX3BhcnRzID0gY29va2llX3N0ci5zcGxpdChgOyAke25hbWV9PWApO1xuICAgICAgICBpZiAoY29va2llX3BhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gY29va2llX3BhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWVfZW5jKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2RlZmF1bHQ7XG4gICAgfVxuICAgIHN0YXRpYyBzZXQobmFtZSwgdmFsdWUsIGV4cGlyYXRpb24pIHtcbiAgICAgICAgY29uc3QgdmFsdWVfZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvbl9zdHIgPSBleHBpcmF0aW9uLnRvVVRDU3RyaW5nKCk7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWVfZW5jfTsgcGF0aD0vOyBleHBpcmVzPSR7ZXhwaXJhdGlvbl9zdHJ9YDtcbiAgICB9XG59XG5leHBvcnRzLkNvb2tpZSA9IENvb2tpZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgRE9NIHtcbiAgICBzdGF0aWMgcWlkKGlkKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgfVxuICAgIHN0YXRpYyBxcyhzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfVxuICAgIHN0YXRpYyBxc2Eoc2VsZWN0b3IsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGRvY3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnRMaXN0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsZW1lbnRMaXN0KTtcbiAgICB9XG59XG5leHBvcnRzLkRPTSA9IERPTTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvb2tpZV8xID0gcmVxdWlyZShcIi4vY29va2llXCIpO1xuZXhwb3J0cy5Db29raWUgPSBjb29raWVfMS5Db29raWU7XG52YXIgZG9tXzEgPSByZXF1aXJlKFwiLi9kb21cIik7XG5leHBvcnRzLkRPTSA9IGRvbV8xLkRPTTtcbnZhciB0aW1lXzEgPSByZXF1aXJlKFwiLi90aW1lXCIpO1xuZXhwb3J0cy5UaW1lID0gdGltZV8xLlRpbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIFRpbWUge1xuICAgIHN0YXRpYyBmb3JtYXQodGltZSwgc2V0dGluZ3MpIHtcbiAgICAgICAgaWYgKHNldHRpbmdzLnRpbWUubG9jYWxlID09PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgdGltZSA9IHRpbWUuc2V0TG9jYWxlKHNldHRpbmdzLnRpbWUubG9jYWxlQ3VzdG9tKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS56b25lID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSBzZXR0aW5ncy50aW1lLnpvbmVGaXhlZDtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFN0ciA9ICdVVEMnICsgKG9mZnNldCA+PSAwID8gJysnIDogJycpICsgb2Zmc2V0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5zZXRab25lKG9mZnNldFN0cik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzLnRpbWUuZm9ybWF0ID09PSAnY3VzdG9tJykge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWUudG9Gb3JtYXQoc2V0dGluZ3MudGltZS5mb3JtYXRDdXN0b20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRpbWUudG9Gb3JtYXQoJ2QuTEwueXl5eSBISDptbTpzcycpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5UaW1lID0gVGltZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gbHV4b247IiwibW9kdWxlLmV4cG9ydHMgPSBWdWU7Il0sInNvdXJjZVJvb3QiOiIifQ==