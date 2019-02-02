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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGVja2JveC50cz85NGIzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gudnVlPzM0MjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yYWRpby1idXR0b24udHM/MmQxYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yYWRpby1idXR0b24udnVlPzNlNGMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtLnRzP2MzYzMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0udnVlP2Y5YmEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2NvbW1vbi50cz9kMmY2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9jb21tb24udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9jb21tb24udnVlPzAwOWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2Zvcm0udHM/NDE3MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vZm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2Zvcm0udnVlPzFmODAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL3RpbWUudHM/ZjliMCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vdGltZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL3RpbWUudnVlPzFjNzQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2dmF0YXNoaS9jb2xvci1waWNrZXIvZGlzdC9jb2xvci1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jaGVja2JveC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vdGltZS50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrYm94LnZ1ZT81NmUwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnZ1ZT9kYTFiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS52dWU/M2IxMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0vY29tbW9uLnZ1ZT84MWM2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9mb3JtLnZ1ZT8zMTQzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS90aW1lLnZ1ZT8wZjQ3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdHMvYXBpLnRzIiwid2VicGFjazovLy8uL3RzL2FwcC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2NhcHRjaGEudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9jb3JyZWN0LXRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvY29tcG9uZW50cy9kZWxldGUtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2RyYWdnYWJsZS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2ZpbGUtcHJldmlldy50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvbmV3LXBvc3RzLWRldGVjdG9yLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdC1yZWZlcmVuY2UtbWFwLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvcG9zdC50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3Bvc3RpbmctZm9ybS50cyIsIndlYnBhY2s6Ly8vLi90cy9jb21wb25lbnRzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3RzL2NvbXBvbmVudHMvc3R5bGUtc3dpdGNoLnRzIiwid2VicGFjazovLy8uL3RzL2V2ZW50LWJ1cy50cyIsIndlYnBhY2s6Ly8vLi90cy9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvdXRpbHMvY29va2llLnRzIiwid2VicGFjazovLy8uL3RzL3V0aWxzL2RvbS50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90cy91dGlscy90aW1lLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImx1eG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiVnVlXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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O0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvQ0FBb0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvQ0FBb0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL05BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUE2QztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvQ0FBb0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvQ0FBb0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvQ0FBb0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FB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Q0E7QUFDQSx1Q0FBdUMscUJBQXFCO0FBQzVEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsNkJBQTZCLEdBQUcsZ0JBQWdCO0FBQ2hELGdEQUFnRCxHQUFHLEtBQUs7QUFDeEQ7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsS0FBSyxHQUFHLFdBQVcsUUFBUSxXQUFXLGVBQWU7QUFDbEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsc0NBQVU7QUFDakM7QUFDQSxZQUFZLG1CQUFPLENBQUMsZ0NBQU87QUFDM0I7QUFDQSxhQUFhLG1CQUFPLENBQUMsa0NBQVE7QUFDN0I7Ozs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkEsdUI7Ozs7Ozs7Ozs7O0FDQUEscUIiLCJmaWxlIjoiLi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdHMvYXBwLnRzXCIpO1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vY2hlY2tib3gudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL2NoZWNrYm94LnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jaGVja2JveC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Q4YTc2N2UmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2hlY2tib3gudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NoZWNrYm94LnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92dmF0YXNoaS/QlNC+0LrRg9C80LXQvdGC0YsvUEhQL3RpbnlpYi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2Q4YTc2N2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2Q4YTc2N2UnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NoZWNrYm94LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZDhhNzY3ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZDhhNzY3ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jaGVja2JveC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2hlY2tib3gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNkOGE3NjdlJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vcmFkaW8tYnV0dG9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9yYWRpby1idXR0b24udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3JhZGlvLWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmRkOTc0MDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmFkaW8tYnV0dG9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yYWRpby1idXR0b24udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3Z2YXRhc2hpL9CU0L7QutGD0LzQtdC90YLRiy9QSFAvdGlueWliL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmZGQ5NzQwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmZGQ5NzQwMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmFkaW8tYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZGQ5NzQwMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmZGQ5NzQwMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9yYWRpby1idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JhZGlvLWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmRkOTc0MDImXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9zZXR0aW5ncy1mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9zZXR0aW5ncy1mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zZXR0aW5ncy1mb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NDUxYzgwMyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZXR0aW5ncy1mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXR0aW5ncy1mb3JtLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS92dmF0YXNoaS/QlNC+0LrRg9C80LXQvdGC0YsvUEhQL3RpbnlpYi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjQ1MWM4MDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjQ1MWM4MDMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NldHRpbmdzLWZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0NTFjODAzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY0NTFjODAzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3NldHRpbmdzLWZvcm0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NldHRpbmdzLWZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0NTFjODAzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4vY29tbW9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi9jb21tb24udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NvbW1vbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg5MjY2YjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29tbW9uLnRzP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb21tb24udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3Z2YXRhc2hpL9CU0L7QutGD0LzQtdC90YLRiy9QSFAvdGlueWliL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxODkyNjZiMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxODkyNjZiMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29tbW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODkyNjZiMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxODkyNjZiMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9zZXR0aW5ncy1mb3JtL2NvbW1vbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tbW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODkyNjZiMiZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm0udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL2Zvcm0udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjODg5ODAwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Zvcm0udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zvcm0udHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3Z2YXRhc2hpL9CU0L7QutGD0LzQtdC90YLRiy9QSFAvdGlueWliL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYzg4OTgwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYzg4OTgwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmM4ODk4MDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmM4ODk4MDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS9mb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYzg4OTgwMCZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL3RpbWUudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuL3RpbWUudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RpbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxYWRjZDg5JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RpbWUudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RpbWUudHM/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3Z2YXRhc2hpL9CU0L7QutGD0LzQtdC90YLRiy9QSFAvdGlueWliL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MWFkY2Q4OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MWFkY2Q4OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGltZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTFhZGNkODkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTFhZGNkODknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvc2V0dGluZ3MtZm9ybS90aW1lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90aW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MWFkY2Q4OSZcIiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcInZ1ZVwiKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJ2dWVcIl0sZSk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5jb2xvclBpY2tlcj1lKHJlcXVpcmUoXCJ2dWVcIikpOnQuY29sb3JQaWNrZXI9ZSh0LlZ1ZSl9KHdpbmRvdyxmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIGk9ZVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsbiksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxyKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgaSBpbiB0KW4uZChyLGksZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxpKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQsZSxuLHIsaSxvLGEsdSl7dmFyIHMsbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qub3B0aW9uczp0O2lmKGUmJihsLnJlbmRlcj1lLGwuc3RhdGljUmVuZGVyRm5zPW4sbC5fY29tcGlsZWQ9ITApLHImJihsLmZ1bmN0aW9uYWw9ITApLG8mJihsLl9zY29wZUlkPVwiZGF0YS12LVwiK28pLGE/KHM9ZnVuY3Rpb24odCl7KHQ9dHx8dGhpcy4kdm5vZGUmJnRoaXMuJHZub2RlLnNzckNvbnRleHR8fHRoaXMucGFyZW50JiZ0aGlzLnBhcmVudC4kdm5vZGUmJnRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX198fCh0PV9fVlVFX1NTUl9DT05URVhUX18pLGkmJmkuY2FsbCh0aGlzLHQpLHQmJnQuX3JlZ2lzdGVyZWRDb21wb25lbnRzJiZ0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQoYSl9LGwuX3NzclJlZ2lzdGVyPXMpOmkmJihzPXU/ZnVuY3Rpb24oKXtpLmNhbGwodGhpcyx0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpfTppKSxzKWlmKGwuZnVuY3Rpb25hbCl7bC5faW5qZWN0U3R5bGVzPXM7dmFyIGM9bC5yZW5kZXI7bC5yZW5kZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gcy5jYWxsKGUpLGModCxlKX19ZWxzZXt2YXIgZj1sLmJlZm9yZUNyZWF0ZTtsLmJlZm9yZUNyZWF0ZT1mP1tdLmNvbmNhdChmLHMpOltzXX1yZXR1cm57ZXhwb3J0czp0LG9wdGlvbnM6bH19bi5kKGUsXCJhXCIsZnVuY3Rpb24oKXtyZXR1cm4gcn0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigxNik7ZS5IU1Y9ci5IU1Y7dmFyIGk9bigxNyk7ZS5SR0I9aS5SR0I7dmFyIG89bigxOCk7ZS5IU1ZDb2xvclBpY2tlcj1vLkhTVkNvbG9yUGlja2VyLGUuSFNWSHVlUGlja2VyPW8uSFNWSHVlUGlja2VyLGUuU1ZQaWNrZXI9by5TVlBpY2tlcn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24ucihlKTt2YXIgcj1uKDMpLGk9bi5uKHIpO2Zvcih2YXIgbyBpbiByKVwiZGVmYXVsdFwiIT09byYmZnVuY3Rpb24odCl7bi5kKGUsdCxmdW5jdGlvbigpe3JldHVybiByW3RdfSl9KG8pO2UuZGVmYXVsdD1pLmF9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1yKG4oOSkpLG89cihuKDEwKSksYT1yKG4oMTQpKSx1PXIobigxNSkpO2UuZGVmYXVsdD1pLmRlZmF1bHQuZXh0ZW5kKHttaXhpbnM6W28uZGVmYXVsdF0sY29tcG9uZW50czp7XCJzdi1waWNrZXJcIjphLmRlZmF1bHQsXCJoc3YtaHVlLXBpY2tlclwiOnUuZGVmYXVsdH0scHJvcHM6e3dpZHRoOnt0eXBlOk51bWJlcixkZWZhdWx0OjI1Nn0saGVpZ2h0Ont0eXBlOk51bWJlcixkZWZhdWx0OjI1Nn0sZm9udDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcImJvbGQgMTZweCBzYW5zLXNlcmlmXCJ9LHNob3dMYWJlbHM6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntodWUkOnRoaXMuaHVlLHNhdHVyYXRpb24kOnRoaXMuc2F0dXJhdGlvbix2YWx1ZSQ6dGhpcy52YWx1ZX19LGNvbXB1dGVkOntoc3Y6ZnVuY3Rpb24oKXtyZXR1cm57aHVlOnRoaXMuaHVlJHx8dGhpcy5odWUsc2F0dXJhdGlvbjp0aGlzLnNhdHVyYXRpb24kfHx0aGlzLnNhdHVyYXRpb24sdmFsdWU6dGhpcy52YWx1ZSR8fHRoaXMudmFsdWV9fX0sbWV0aG9kczp7b25TVkNoYW5nZTpmdW5jdGlvbih0KXt2YXIgZT10LnNhdHVyYXRpb24sbj10LnZhbHVlO3RoaXMuc2F0dXJhdGlvbiQ9ZSx0aGlzLnZhbHVlJD1ufSxvbkh1ZUNoYW5nZTpmdW5jdGlvbih0KXt2YXIgZT10Lmh1ZTt0aGlzLmh1ZSQ9ZX19fSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSk7dmFyIHI9big1KSxpPW4ubihyKTtmb3IodmFyIG8gaW4gcilcImRlZmF1bHRcIiE9PW8mJmZ1bmN0aW9uKHQpe24uZChlLHQsZnVuY3Rpb24oKXtyZXR1cm4gclt0XX0pfShvKTtlLmRlZmF1bHQ9aS5hfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9cihuKDkpKSxvPW4oMSksYT1yKG4oMTApKTtlLmRlZmF1bHQ9aS5kZWZhdWx0LmV4dGVuZCh7bWl4aW5zOlthLmRlZmF1bHRdLHByb3BzOnt3aWR0aDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoyNTZ9LGhlaWdodDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoyNTZ9LGZvbnQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJib2xkIDE2cHggc2Fucy1zZXJpZlwifSxzaG93TGFiZWxzOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH19LGRhdGE6ZnVuY3Rpb24oKXtyZXR1cm57c2F0dXJhdGlvbiQ6dGhpcy5zYXR1cmF0aW9uLHZhbHVlJDp0aGlzLnZhbHVlfX0sY29tcHV0ZWQ6e2hzdjpmdW5jdGlvbigpe3JldHVybntodWU6dGhpcy5odWUsc2F0dXJhdGlvbjp0aGlzLnNhdHVyYXRpb24kfHx0aGlzLnNhdHVyYXRpb24sdmFsdWU6dGhpcy52YWx1ZSR8fHRoaXMudmFsdWV9fX0sd2F0Y2g6e2h1ZTpmdW5jdGlvbigpe3RoaXMudXBkYXRlQ2FudmFzKCl9fSxtb3VudGVkOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVDYW52YXMoKX0sbWV0aG9kczp7dXBkYXRlQ2FudmFzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kcmVmcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO2lmKHQpe3QuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPVwic291cmNlLW92ZXJcIix0LmxpbmVXaWR0aD0yO2Zvcih2YXIgZT0wO2U8dGhpcy5oZWlnaHQ7KytlKXt2YXIgbj1vLlJHQi50b0hleChvLkhTVi50b1JHQih7aHVlOnRoaXMuaHVlLHNhdHVyYXRpb246MCx2YWx1ZToxLWUvdGhpcy5oZWlnaHR9KSkscj1vLlJHQi50b0hleChvLkhTVi50b1JHQih7aHVlOnRoaXMuaHVlLHNhdHVyYXRpb246MSx2YWx1ZToxLWUvdGhpcy5oZWlnaHR9KSksaT10LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsMCx0aGlzLndpZHRoLDApO2kuYWRkQ29sb3JTdG9wKDAsbiksaS5hZGRDb2xvclN0b3AoMSxyKSx0LnN0cm9rZVN0eWxlPWksdC5iZWdpblBhdGgoKSx0Lm1vdmVUbygwLGUpLHQubGluZVRvKHRoaXMud2lkdGgsZSksdC5zdHJva2UoKX1pZih0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj1cImRpZmZlcmVuY2VcIix0aGlzLnNob3dMYWJlbHMpe3QuZmlsbFN0eWxlPVwiIzdmN2Y3ZlwiLHQudGV4dEFsaWduPVwiY2VudGVyXCIsdC50ZXh0QmFzZWxpbmU9XCJ0b3BcIix0LmZvbnQ9dGhpcy5mb250LHQuZmlsbFRleHQoXCJTYXR1cmF0aW9uXCIsdGhpcy53aWR0aC8yLDQpLHQuc2F2ZSgpLHQucm90YXRlKE1hdGguUEkvMiksdC5maWxsVGV4dChcIlZhbHVlXCIsdGhpcy5oZWlnaHQvMiw0LXRoaXMud2lkdGgpLHQucmVzdG9yZSgpfXZhciBhPXRoaXMuc2F0dXJhdGlvbiR8fHRoaXMuc2F0dXJhdGlvbix1PXRoaXMudmFsdWUkfHx0aGlzLnZhbHVlLHM9YSp0aGlzLndpZHRoLGw9KDEtdSkqdGhpcy5oZWlnaHQ7dC5zdHJva2VTdHlsZT1cIiM3ZjdmN2ZcIix0LmxpbmVXaWR0aD0xLHQuc3Ryb2tlUmVjdChzLTIuNSxsLTIuNSw1LDUpfX0sb25QaWNrOmZ1bmN0aW9uKHQpe2lmKDE9PT10LmJ1dHRvbnMpe3ZhciBlPXRoaXMuJHJlZnMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49dC5jbGllbnRYLWUubGVmdCxyPXQuY2xpZW50WS1lLnRvcDt0aGlzLnNhdHVyYXRpb24kPW4vZS53aWR0aCx0aGlzLnZhbHVlJD0xLXIvZS5oZWlnaHQsdGhpcy4kZW1pdChcImNoYW5nZVwiLHtodWU6dGhpcy5odWUsc2F0dXJhdGlvbjp0aGlzLnNhdHVyYXRpb24kLHZhbHVlOnRoaXMudmFsdWUkfSksdGhpcy51cGRhdGVDYW52YXMoKX19fX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpO3ZhciByPW4oNyksaT1uLm4ocik7Zm9yKHZhciBvIGluIHIpXCJkZWZhdWx0XCIhPT1vJiZmdW5jdGlvbih0KXtuLmQoZSx0LGZ1bmN0aW9uKCl7cmV0dXJuIHJbdF19KX0obyk7ZS5kZWZhdWx0PWkuYX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKHI9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rKylmb3IodmFyIGkgaW4gZT1hcmd1bWVudHNbbl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJih0W2ldPWVbaV0pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxpPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBvPWkobig5KSksYT1uKDEpLHU9aShuKDEwKSk7ZS5kZWZhdWx0PW8uZGVmYXVsdC5leHRlbmQoe21peGluczpbdS5kZWZhdWx0XSxwcm9wczp7d2lkdGg6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MzJ9LGhlaWdodDp7dHlwZTpOdW1iZXIsZGVmYXVsdDoyNTZ9LGZvbnQ6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJib2xkIDE2cHggc2Fucy1zZXJpZlwifSxzaG93TGFiZWw6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfX0sZGF0YTpmdW5jdGlvbigpe3JldHVybntodWUkOnRoaXMuaHVlfX0sY29tcHV0ZWQ6e2hzdjpmdW5jdGlvbigpe3JldHVybntodWU6dGhpcy5odWUkfHx0aGlzLmh1ZSxzYXR1cmF0aW9uOnRoaXMuc2F0dXJhdGlvbix2YWx1ZTp0aGlzLnZhbHVlfX19LHdhdGNoOntzYXR1cmF0aW9uOmZ1bmN0aW9uKCl7dGhpcy51cGRhdGVDYW52YXMoKX0sdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZUNhbnZhcygpfX0sbW91bnRlZDpmdW5jdGlvbigpe3RoaXMudXBkYXRlQ2FudmFzKCl9LG1ldGhvZHM6e3VwZGF0ZUNhbnZhczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuJHJlZnMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtpZih0KXt0Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj1cImNvcHlcIjtmb3IodmFyIGU9dC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLDAsMCx0aGlzLmhlaWdodCksbj0wO248PTY7KytuKWUuYWRkQ29sb3JTdG9wKG4vNixhLlJHQi50b0hleChhLkhTVi50b1JHQihyKHt9LHRoaXMuaHN2LHtodWU6NjAqbn0pKSkpO3QuZmlsbFN0eWxlPWUsdC5maWxsUmVjdCgwLDAsdGhpcy53aWR0aCx0aGlzLmhlaWdodCksdC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249XCJkaWZmZXJlbmNlXCIsdGhpcy5zaG93TGFiZWwmJih0LmZpbGxTdHlsZT1cIiM3ZjdmN2ZcIix0LnRleHRBbGlnbj1cImNlbnRlclwiLHQudGV4dEJhc2VsaW5lPVwibWlkZGxlXCIsdC5mb250PXRoaXMuZm9udCx0LnNhdmUoKSx0LnJvdGF0ZShNYXRoLlBJLzIpLHQuZmlsbFRleHQoXCJIdWVcIix0aGlzLmhlaWdodC8yLC10aGlzLndpZHRoLzIpLHQucmVzdG9yZSgpKTt2YXIgaT0odGhpcy5odWUkfHx0aGlzLmh1ZSkqdGhpcy5oZWlnaHQvMzYwO3Quc3Ryb2tlU3R5bGU9XCIjN2Y3ZjdmXCIsdC5saW5lV2lkdGg9MSx0LnN0cm9rZVJlY3QoMCxpLTIuNSx0aGlzLndpZHRoLDUpfX0sb25QaWNrOmZ1bmN0aW9uKHQpe2lmKDE9PT10LmJ1dHRvbnMpe3ZhciBlPXRoaXMuJHJlZnMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG49dC5jbGllbnRZLWUudG9wO3RoaXMuaHVlJD0zNjAqbi9lLmhlaWdodCx0aGlzLiRlbWl0KFwiY2hhbmdlXCIsdGhpcy5oc3YpLHRoaXMudXBkYXRlQ2FudmFzKCl9fX19KX0sZnVuY3Rpb24odCxlLG4pe3ZhciByPW4oMjEpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW3QuaSxyLFwiXCJdXSksci5sb2NhbHMmJih0LmV4cG9ydHM9ci5sb2NhbHMpOygwLG4oMjMpLmRlZmF1bHQpKFwiZDg0ZWI2MDRcIixyLCExLHt9KX0sZnVuY3Rpb24oZSxuKXtlLmV4cG9ydHM9dH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oMSk7ZS5kZWZhdWx0PXtwcm9wczp7aHVlOnt0eXBlOk51bWJlcixkZWZhdWx0OjB9LHNhdHVyYXRpb246e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MX0sdmFsdWU6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MX19LGNvbXB1dGVkOntoc3Y6ZnVuY3Rpb24oKXtyZXR1cm57aHVlOnRoaXMuaHVlLHNhdHVyYXRpb246dGhpcy5zYXR1cmF0aW9uLHZhbHVlOnRoaXMudmFsdWV9fSxyZ2I6ZnVuY3Rpb24oKXtyZXR1cm4gci5IU1YudG9SR0IodGhpcy5oc3YpfSxoZXg6ZnVuY3Rpb24oKXtyZXR1cm4gci5SR0IudG9IZXgodGhpcy5yZ2IpfX19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC4kY3JlYXRlRWxlbWVudCxuPXQuX3NlbGYuX2N8fGU7cmV0dXJuIG4oXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJjb2xvci1waWNrZXJcIn0sW24oXCJzdi1waWNrZXJcIix0Ll9iKHtzdGF0aWNDbGFzczpcImNvbG9yLXBpY2tlcl9fc3ZcIixhdHRyczp7d2lkdGg6dC53aWR0aCxoZWlnaHQ6dC5oZWlnaHQsZm9udDp0LmZvbnQsXCJzaG93LWxhYmVsc1wiOnQuc2hvd0xhYmVsc30sb246e2NoYW5nZTp0Lm9uU1ZDaGFuZ2V9fSxcInN2LXBpY2tlclwiLHQuaHN2LCExKSksbihcImhzdi1odWUtcGlja2VyXCIsdC5fYih7c3RhdGljQ2xhc3M6XCJjb2xvci1waWNrZXJfX2h1ZVwiLGF0dHJzOnt3aWR0aDp0LndpZHRoLzgsaGVpZ2h0OnQuaGVpZ2h0LGZvbnQ6dC5mb250LFwic2hvdy1sYWJlbFwiOnQuc2hvd0xhYmVsc30sb246e2NoYW5nZTp0Lm9uSHVlQ2hhbmdlfX0sXCJoc3YtaHVlLXBpY2tlclwiLHQuaHN2LCExKSldLDEpfSxpPVtdO3IuX3dpdGhTdHJpcHBlZD0hMCxuLmQoZSxcImFcIixmdW5jdGlvbigpe3JldHVybiByfSksbi5kKGUsXCJiXCIsZnVuY3Rpb24oKXtyZXR1cm4gaX0pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRjcmVhdGVFbGVtZW50O3JldHVybih0aGlzLl9zZWxmLl9jfHx0KShcImNhbnZhc1wiLHtyZWY6XCJjYW52YXNcIixzdGF0aWNDbGFzczpcInN2LXBpY2tlclwiLGF0dHJzOnt3aWR0aDp0aGlzLndpZHRoLGhlaWdodDp0aGlzLmhlaWdodH0sb246e21vdXNlZG93bjp0aGlzLm9uUGljayxtb3VzZW1vdmU6dGhpcy5vblBpY2t9fSl9LGk9W107ci5fd2l0aFN0cmlwcGVkPSEwLG4uZChlLFwiYVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSxuLmQoZSxcImJcIixmdW5jdGlvbigpe3JldHVybiBpfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGNyZWF0ZUVsZW1lbnQ7cmV0dXJuKHRoaXMuX3NlbGYuX2N8fHQpKFwiY2FudmFzXCIse3JlZjpcImNhbnZhc1wiLHN0YXRpY0NsYXNzOlwiaHVlLXBpY2tlclwiLGF0dHJzOnt3aWR0aDp0aGlzLndpZHRoLGhlaWdodDp0aGlzLmhlaWdodH0sb246e21vdXNlZG93bjp0aGlzLm9uUGljayxtb3VzZW1vdmU6dGhpcy5vblBpY2t9fSl9LGk9W107ci5fd2l0aFN0cmlwcGVkPSEwLG4uZChlLFwiYVwiLGZ1bmN0aW9uKCl7cmV0dXJuIHJ9KSxuLmQoZSxcImJcIixmdW5jdGlvbigpe3JldHVybiBpfSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSk7dmFyIHI9bigxMiksaT1uKDQpO2Zvcih2YXIgbyBpbiBpKVwiZGVmYXVsdFwiIT09byYmZnVuY3Rpb24odCl7bi5kKGUsdCxmdW5jdGlvbigpe3JldHVybiBpW3RdfSl9KG8pO3ZhciBhPW4oMCksdT1PYmplY3QoYS5hKShpLmRlZmF1bHQsci5hLHIuYiwhMSxudWxsLG51bGwsbnVsbCk7dS5vcHRpb25zLl9fZmlsZT1cInNyYy9jb21wb25lbnRzL3N2LXBpY2tlci52dWVcIixlLmRlZmF1bHQ9dS5leHBvcnRzfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpO3ZhciByPW4oMTMpLGk9big2KTtmb3IodmFyIG8gaW4gaSlcImRlZmF1bHRcIiE9PW8mJmZ1bmN0aW9uKHQpe24uZChlLHQsZnVuY3Rpb24oKXtyZXR1cm4gaVt0XX0pfShvKTt2YXIgYT1uKDApLHU9T2JqZWN0KGEuYSkoaS5kZWZhdWx0LHIuYSxyLmIsITEsbnVsbCxudWxsLG51bGwpO3Uub3B0aW9ucy5fX2ZpbGU9XCJzcmMvY29tcG9uZW50cy9oc3YtaHVlLXBpY2tlci52dWVcIixlLmRlZmF1bHQ9dS5leHBvcnRzfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiB0LnRvUkdCPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaHVlLG49dC5zYXR1cmF0aW9uLHI9dC52YWx1ZSxpPXIqKDEtbiksbz1lJTYwKihyLWkpLzYwLGE9aStvLHU9ci1vO3N3aXRjaChNYXRoLmZsb29yKGUvNjApJTYpe2RlZmF1bHQ6Y2FzZSAwOnJldHVybntyZWQ6cixncmVlbjphLGJsdWU6aX07Y2FzZSAxOnJldHVybntyZWQ6dSxncmVlbjpyLGJsdWU6aX07Y2FzZSAyOnJldHVybntyZWQ6aSxncmVlbjpyLGJsdWU6YX07Y2FzZSAzOnJldHVybntyZWQ6aSxncmVlbjp1LGJsdWU6cn07Y2FzZSA0OnJldHVybntyZWQ6YSxncmVlbjppLGJsdWU6cn07Y2FzZSA1OnJldHVybntyZWQ6cixncmVlbjppLGJsdWU6dX19fSx0fSgpO2UuSFNWPXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIHQudG9IU1Y9ZnVuY3Rpb24odCl7dmFyIGU9dC5yZWQsbj10LmdyZWVuLHI9dC5ibHVlLGk9TWF0aC5tYXgoZSxuLHIpLG89TWF0aC5taW4oZSxuLHIpLGE9MCx1PWktbztyZXR1cm4gMCE9PXUmJihpPT09ZT9hPTYwKihuLXIpL3UrbjxyPzM2MDowOmk9PT1uP2E9NjAqKHItZSkvdSsxMjA6aT09PXImJihhPTYwKihlLW4pL3UrMjQwKSkse2h1ZTphLHNhdHVyYXRpb246aT8xLW8vaTowLHZhbHVlOml9fSx0LnRvSGV4PWZ1bmN0aW9uKHQpe3ZhciBlPXQucmVkLG49dC5ncmVlbixyPXQuYmx1ZSxpPU1hdGguZmxvb3IoMjU1KmUpLnRvU3RyaW5nKDE2KTtpPWkubGVuZ3RoPDI/XCIwXCIraTppO3ZhciBvPU1hdGguZmxvb3IoMjU1Km4pLnRvU3RyaW5nKDE2KTtvPW8ubGVuZ3RoPDI/XCIwXCIrbzpvO3ZhciBhPU1hdGguZmxvb3IoMjU1KnIpLnRvU3RyaW5nKDE2KTtyZXR1cm5cIiNcIitpK28rKGE9YS5sZW5ndGg8Mj9cIjBcIithOmEpfSx0fSgpO2UuUkdCPXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDE5KTtlLkhTVkNvbG9yUGlja2VyPXIuZGVmYXVsdDt2YXIgaT1uKDE1KTtlLkhTVkh1ZVBpY2tlcj1pLmRlZmF1bHQ7dmFyIG89bigxNCk7ZS5TVlBpY2tlcj1vLmRlZmF1bHR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSk7dmFyIHI9bigxMSksaT1uKDIpO2Zvcih2YXIgbyBpbiBpKVwiZGVmYXVsdFwiIT09byYmZnVuY3Rpb24odCl7bi5kKGUsdCxmdW5jdGlvbigpe3JldHVybiBpW3RdfSl9KG8pO24oMjApO3ZhciBhPW4oMCksdT1PYmplY3QoYS5hKShpLmRlZmF1bHQsci5hLHIuYiwhMSxudWxsLG51bGwsbnVsbCk7dS5vcHRpb25zLl9fZmlsZT1cInNyYy9jb21wb25lbnRzL2hzdi1jb2xvci1waWNrZXIudnVlXCIsZS5kZWZhdWx0PXUuZXhwb3J0c30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPW4oOCk7bi5uKHIpLmF9LGZ1bmN0aW9uKHQsZSxuKXsodC5leHBvcnRzPW4oMjIpKCExKSkucHVzaChbdC5pLFwiLmNvbG9yLXBpY2tlciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uY29sb3ItcGlja2VyX19zdiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG4uY29sb3ItcGlja2VyX19odWUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cIixcIlwiXSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9W107cmV0dXJuIGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oZSl7dmFyIG49ZnVuY3Rpb24odCxlKXt2YXIgbj10WzFdfHxcIlwiLHI9dFszXTtpZighcilyZXR1cm4gbjtpZihlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXt2YXIgaT0oYT1yLFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGEpKSkpK1wiICovXCIpLG89ci5zb3VyY2VzLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIrci5zb3VyY2VSb290K3QrXCIgKi9cIn0pO3JldHVybltuXS5jb25jYXQobykuY29uY2F0KFtpXSkuam9pbihcIlxcblwiKX12YXIgYTtyZXR1cm5bbl0uam9pbihcIlxcblwiKX0oZSx0KTtyZXR1cm4gZVsyXT9cIkBtZWRpYSBcIitlWzJdK1wie1wiK24rXCJ9XCI6bn0pLmpvaW4oXCJcIil9LGUuaT1mdW5jdGlvbih0LG4pe1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1bW251bGwsdCxcIlwiXV0pO2Zvcih2YXIgcj17fSxpPTA7aTx0aGlzLmxlbmd0aDtpKyspe3ZhciBvPXRoaXNbaV1bMF07bnVsbCE9byYmKHJbb109ITApfWZvcihpPTA7aTx0Lmxlbmd0aDtpKyspe3ZhciBhPXRbaV07bnVsbCE9YVswXSYmclthWzBdXXx8KG4mJiFhWzJdP2FbMl09bjpuJiYoYVsyXT1cIihcIithWzJdK1wiKSBhbmQgKFwiK24rXCIpXCIpLGUucHVzaChhKSl9fSxlfX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCxlKXtmb3IodmFyIG49W10scj17fSxpPTA7aTxlLmxlbmd0aDtpKyspe3ZhciBvPWVbaV0sYT1vWzBdLHU9e2lkOnQrXCI6XCIraSxjc3M6b1sxXSxtZWRpYTpvWzJdLHNvdXJjZU1hcDpvWzNdfTtyW2FdP3JbYV0ucGFydHMucHVzaCh1KTpuLnB1c2goclthXT17aWQ6YSxwYXJ0czpbdV19KX1yZXR1cm4gbn1uLnIoZSksbi5kKGUsXCJkZWZhdWx0XCIsZnVuY3Rpb24oKXtyZXR1cm4gcH0pO3ZhciBpPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudDtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgREVCVUcmJkRFQlVHJiYhaSl0aHJvdyBuZXcgRXJyb3IoXCJ2dWUtc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQuIFVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCIpO3ZhciBvPXt9LGE9aSYmKGRvY3VtZW50LmhlYWR8fGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXSksdT1udWxsLHM9MCxsPSExLGM9ZnVuY3Rpb24oKXt9LGY9bnVsbCxoPVwiZGF0YS12dWUtc3NyLWlkXCIsZD1cInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYvbXNpZSBbNi05XVxcYi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO2Z1bmN0aW9uIHAodCxlLG4saSl7bD1uLGY9aXx8e307dmFyIGE9cih0LGUpO3JldHVybiB2KGEpLGZ1bmN0aW9uKGUpe2Zvcih2YXIgbj1bXSxpPTA7aTxhLmxlbmd0aDtpKyspe3ZhciB1PWFbaV07KHM9b1t1LmlkXSkucmVmcy0tLG4ucHVzaChzKX1lP3YoYT1yKHQsZSkpOmE9W107Zm9yKGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHM7aWYoMD09PShzPW5baV0pLnJlZnMpe2Zvcih2YXIgbD0wO2w8cy5wYXJ0cy5sZW5ndGg7bCsrKXMucGFydHNbbF0oKTtkZWxldGUgb1tzLmlkXX19fX1mdW5jdGlvbiB2KHQpe2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKXt2YXIgbj10W2VdLHI9b1tuLmlkXTtpZihyKXtyLnJlZnMrKztmb3IodmFyIGk9MDtpPHIucGFydHMubGVuZ3RoO2krKylyLnBhcnRzW2ldKG4ucGFydHNbaV0pO2Zvcig7aTxuLnBhcnRzLmxlbmd0aDtpKyspci5wYXJ0cy5wdXNoKGIobi5wYXJ0c1tpXSkpO3IucGFydHMubGVuZ3RoPm4ucGFydHMubGVuZ3RoJiYoci5wYXJ0cy5sZW5ndGg9bi5wYXJ0cy5sZW5ndGgpfWVsc2V7dmFyIGE9W107Zm9yKGk9MDtpPG4ucGFydHMubGVuZ3RoO2krKylhLnB1c2goYihuLnBhcnRzW2ldKSk7b1tuLmlkXT17aWQ6bi5pZCxyZWZzOjEscGFydHM6YX19fX1mdW5jdGlvbiBnKCl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiB0LnR5cGU9XCJ0ZXh0L2Nzc1wiLGEuYXBwZW5kQ2hpbGQodCksdH1mdW5jdGlvbiBiKHQpe3ZhciBlLG4scj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVbXCIraCsnfj1cIicrdC5pZCsnXCJdJyk7aWYocil7aWYobClyZXR1cm4gYztyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocil9aWYoZCl7dmFyIGk9cysrO3I9dXx8KHU9ZygpKSxlPXkuYmluZChudWxsLHIsaSwhMSksbj15LmJpbmQobnVsbCxyLGksITApfWVsc2Ugcj1nKCksZT1mdW5jdGlvbih0LGUpe3ZhciBuPWUuY3NzLHI9ZS5tZWRpYSxpPWUuc291cmNlTWFwO3ImJnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIixyKTtmLnNzcklkJiZ0LnNldEF0dHJpYnV0ZShoLGUuaWQpO2kmJihuKz1cIlxcbi8qIyBzb3VyY2VVUkw9XCIraS5zb3VyY2VzWzBdK1wiICovXCIsbis9XCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGkpKSkpK1wiICovXCIpO2lmKHQuc3R5bGVTaGVldCl0LnN0eWxlU2hlZXQuY3NzVGV4dD1uO2Vsc2V7Zm9yKDt0LmZpcnN0Q2hpbGQ7KXQucmVtb3ZlQ2hpbGQodC5maXJzdENoaWxkKTt0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4pKX19LmJpbmQobnVsbCxyKSxuPWZ1bmN0aW9uKCl7ci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpfTtyZXR1cm4gZSh0KSxmdW5jdGlvbihyKXtpZihyKXtpZihyLmNzcz09PXQuY3NzJiZyLm1lZGlhPT09dC5tZWRpYSYmci5zb3VyY2VNYXA9PT10LnNvdXJjZU1hcClyZXR1cm47ZSh0PXIpfWVsc2UgbigpfX12YXIgbSxfPShtPVtdLGZ1bmN0aW9uKHQsZSl7cmV0dXJuIG1bdF09ZSxtLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfSk7ZnVuY3Rpb24geSh0LGUsbixyKXt2YXIgaT1uP1wiXCI6ci5jc3M7aWYodC5zdHlsZVNoZWV0KXQuc3R5bGVTaGVldC5jc3NUZXh0PV8oZSxpKTtlbHNle3ZhciBvPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGkpLGE9dC5jaGlsZE5vZGVzO2FbZV0mJnQucmVtb3ZlQ2hpbGQoYVtlXSksYS5sZW5ndGg/dC5pbnNlcnRCZWZvcmUobyxhW2VdKTp0LmFwcGVuZENoaWxkKG8pfX19XSl9KTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdnVlXzEuZGVmYXVsdC5leHRlbmQoe1xuICAgIG1vZGVsOiB7XG4gICAgICAgIHByb3A6ICdjaGVja2VkJyxcbiAgICAgICAgZXZlbnQ6ICdjaGFuZ2UnLFxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbGFiZWxDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0Q2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JbnB1dChlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCAhdGhpcy5jaGVja2VkKTtcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdnVlXzEuZGVmYXVsdC5leHRlbmQoe1xuICAgIG1vZGVsOiB7XG4gICAgICAgIHByb3A6ICdzZWxlY3RlZFZhbHVlJyxcbiAgICAgICAgZXZlbnQ6ICdjaGFuZ2UnLFxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbGFiZWxDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0Q2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZTogU3RyaW5nLFxuICAgICAgICBzZWxlY3RlZFZhbHVlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uSW5wdXQoZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGNvbW1vbl92dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zZXR0aW5ncy1mb3JtL2NvbW1vbi52dWVcIikpO1xuY29uc3QgZm9ybV92dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9zZXR0aW5ncy1mb3JtL2Zvcm0udnVlXCIpKTtcbmNvbnN0IHRpbWVfdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2V0dGluZ3MtZm9ybS90aW1lLnZ1ZVwiKSk7XG5jb25zdCB0c18xID0gcmVxdWlyZShcIi4uL3RzXCIpO1xuZXhwb3J0cy5kZWZhdWx0ID0gdnVlXzEuZGVmYXVsdC5leHRlbmQoe1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXR0aW5nczogbnVsbCxcbiAgICAgICAgICAgIHRhYjogJ2NvbW1vbicsXG4gICAgICAgICAgICBzdGF0dXM6ICcnLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHRzXzEuU2V0dGluZ3NNYW5hZ2VyLmxvYWQoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2F2ZVNldHRpbmdzKCkge1xuICAgICAgICAgICAgdHNfMS5TZXR0aW5nc01hbmFnZXIuc2F2ZSh0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgICAgIC8vIEluZGljYXRlIHRoYXQgc2V0dGluZ3MgYXJlIHNhdmVkLlxuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnJztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ1NldHRpbmdzIHNhdmVkLic7XG4gICAgICAgICAgICB9LCAxMDAwIC8gMyk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICd4LWNvbW1vbic6IGNvbW1vbl92dWVfMS5kZWZhdWx0LFxuICAgICAgICAneC1mb3JtJzogZm9ybV92dWVfMS5kZWZhdWx0LFxuICAgICAgICAneC10aW1lJzogdGltZV92dWVfMS5kZWZhdWx0LFxuICAgIH0sXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBjaGVja2JveF92dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY2hlY2tib3gudnVlXCIpKTtcbmNvbnN0IHJhZGlvX2J1dHRvbl92dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vcmFkaW8tYnV0dG9uLnZ1ZVwiKSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2dWVfMS5kZWZhdWx0LmV4dGVuZCh7XG4gICAgcHJvcHM6IFsnc2V0dGluZ3MnXSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICd4LWNoZWNrYm94JzogY2hlY2tib3hfdnVlXzEuZGVmYXVsdCxcbiAgICAgICAgJ3gtcmFkaW8tYnV0dG9uJzogcmFkaW9fYnV0dG9uX3Z1ZV8xLmRlZmF1bHQsXG4gICAgfSxcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB2dWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwidnVlXCIpKTtcbmNvbnN0IGNoZWNrYm94X3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9jaGVja2JveC52dWVcIikpO1xuY29uc3QgcmFkaW9fYnV0dG9uX3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9yYWRpby1idXR0b24udnVlXCIpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZ1ZV8xLmRlZmF1bHQuZXh0ZW5kKHtcbiAgICBwcm9wczogWydzZXR0aW5ncyddLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXdSZXBsYWNlOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogJycsXG4gICAgICAgICAgICAgICAgcmVwbGFjZTogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICByZW1vdmVSZXBsYWNlQXQoaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MuZm9ybS5yZXBsYWNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuICAgICAgICBhZGRSZXBsYWNlKGl0ZW0pIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbmV3IFJlZ0V4cChpdGVtLnBhdHRlcm4sICdnbScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IGBJbnZhbGlkIHJlZ3VsYXIgZXhwcmVzc2lvbjogJHtlLm1lc3NhZ2V9YDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLmZvcm0ucmVwbGFjZXMucHVzaChPYmplY3QuYXNzaWduKHt9LCBpdGVtKSk7XG4gICAgICAgICAgICB0aGlzLm5ld1JlcGxhY2UgPSB7IHBhdHRlcm46ICcnLCByZXBsYWNlOiAnJyB9O1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAneC1jaGVja2JveCc6IGNoZWNrYm94X3Z1ZV8xLmRlZmF1bHQsXG4gICAgICAgICd4LXJhZGlvLWJ1dHRvbic6IHJhZGlvX2J1dHRvbl92dWVfMS5kZWZhdWx0LFxuICAgIH0sXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbHV4b25fMSA9IHJlcXVpcmUoXCJsdXhvblwiKTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgY2hlY2tib3hfdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NoZWNrYm94LnZ1ZVwiKSk7XG5jb25zdCByYWRpb19idXR0b25fdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3JhZGlvLWJ1dHRvbi52dWVcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi8uLi90cy91dGlsc1wiKTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZ1ZV8xLmRlZmF1bHQuZXh0ZW5kKHtcbiAgICBwcm9wczogWydzZXR0aW5ncyddLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aW1lOiAnJyxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuX3RpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVUaW1lLmJpbmQodGhpcyksIDEwMDApO1xuICAgIH0sXG4gICAgZGVzdHJveWVkKCkge1xuICAgICAgICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZVRpbWUoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBsdXhvbl8xLkRhdGVUaW1lLmZyb21KU0RhdGUobmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lID0gdXRpbHNfMS5UaW1lLmZvcm1hdCh0aW1lLCB0aGlzLnNldHRpbmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZSA9ICdJbnZhbGlkIGZvcm1hdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICd4LWNoZWNrYm94JzogY2hlY2tib3hfdnVlXzEuZGVmYXVsdCxcbiAgICAgICAgJ3gtcmFkaW8tYnV0dG9uJzogcmFkaW9fYnV0dG9uX3Z1ZV8xLmRlZmF1bHQsXG4gICAgfSxcbn0pO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImxhYmVsXCIsXG4gICAgeyBjbGFzczogX3ZtLmxhYmVsQ2xhc3MgfSxcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgY2xhc3M6IF92bS5pbnB1dENsYXNzLFxuICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSwgY2hlY2tlZDogX3ZtLmNoZWNrZWQgfSxcbiAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ub25JbnB1dCB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibGFiZWxcIixcbiAgICB7IGNsYXNzOiBfdm0ubGFiZWxDbGFzcyB9LFxuICAgIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBjbGFzczogX3ZtLmlucHV0Q2xhc3MsXG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicmFkaW9cIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlLCBjaGVja2VkOiBfdm0udmFsdWUgPT0gX3ZtLnNlbGVjdGVkVmFsdWUgfSxcbiAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ub25JbnB1dCB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGVudF9fc2V0dGluZ3MtZm9ybSBzZXR0aW5ncy1mb3JtXCIsXG4gICAgICBhdHRyczogeyBpZDogXCJzZXR0aW5nc19mb3JtXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3RhYnNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX190YWJcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwic2V0dGluZ3MtZm9ybV9fdGFiLS1hY3RpdmVcIjogX3ZtLnRhYiA9PT0gXCJjb21tb25cIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS50YWIgPSBcImNvbW1vblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJDb21tb25cIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX190YWJcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwic2V0dGluZ3MtZm9ybV9fdGFiLS1hY3RpdmVcIjogX3ZtLnRhYiA9PT0gXCJmb3JtXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0udGFiID0gXCJmb3JtXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIkZvcm1cIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX190YWJcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwic2V0dGluZ3MtZm9ybV9fdGFiLS1hY3RpdmVcIjogX3ZtLnRhYiA9PT0gXCJ0aW1lXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0udGFiID0gXCJ0aW1lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlRpbWVcIildXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwieC1jb21tb25cIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS50YWIgPT09IFwiY29tbW9uXCIsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYiA9PT0gJ2NvbW1vbidcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fdGFiLWNvbnRlbnRcIixcbiAgICAgICAgYXR0cnM6IHsgc2V0dGluZ3M6IF92bS5zZXR0aW5ncyB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIngtZm9ybVwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYiA9PT0gXCJmb3JtXCIsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYiA9PT0gJ2Zvcm0nXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3RhYi1jb250ZW50XCIsXG4gICAgICAgIGF0dHJzOiB7IHNldHRpbmdzOiBfdm0uc2V0dGluZ3MgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ4LXRpbWVcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS50YWIgPT09IFwidGltZVwiLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWIgPT09ICd0aW1lJ1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX190YWItY29udGVudFwiLFxuICAgICAgICBhdHRyczogeyBzZXR0aW5nczogX3ZtLnNldHRpbmdzIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fZm9vdGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX2J1dHRvbnNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fc3RhdHVzXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc3RhdHVzKSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIHNldHRpbmdzLWZvcm1fX3NhdmVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICBfdm0uc2F2ZVNldHRpbmdzKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF92bS5fdihcIlRocmVhZCBBbGlnbm1lbnRcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5jb21tb24ubGF5b3V0LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmNvbW1vbiwgXCJsYXlvdXRcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmNvbW1vbi5sYXlvdXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIE9uIHRoZSBsZWZ0XFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuY29tbW9uLmxheW91dCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5jb21tb24sIFwibGF5b3V0XCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5jb21tb24ubGF5b3V0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBJbiB0aGUgY2VudGVyXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiIH0sIFtfdm0uX3YoXCJQb3N0c1wiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmNvbW1vbi5zaG93UG9zdEhlYWRlclJlZmxpbmtJY29uLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmNvbW1vbiwgXCJzaG93UG9zdEhlYWRlclJlZmxpbmtJY29uXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5jb21tb24uc2hvd1Bvc3RIZWFkZXJSZWZsaW5rSWNvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgU2hvdyByZXBseSBpY29uIGluIHRoZSBwb3N0IGhlYWRlclxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5jb21tb24ubW92ZVBvc3RIZWFkZXJSZWZsaW5rSWNvblRvREUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy5jb21tb24sXG4gICAgICAgICAgICAgICAgICBcIm1vdmVQb3N0SGVhZGVyUmVmbGlua0ljb25Ub0RFXCIsXG4gICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuY29tbW9uLm1vdmVQb3N0SGVhZGVyUmVmbGlua0ljb25Ub0RFXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBNb3ZlIERFIGhpZGUgYnV0dG9uIGJlZm9yZSByZXBseSBpY29uXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmNvbW1vbi5zaG93UG9zdFJlZmxpbmtJY29uLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmNvbW1vbiwgXCJzaG93UG9zdFJlZmxpbmtJY29uXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5jb21tb24uc2hvd1Bvc3RSZWZsaW5rSWNvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgU2hvdyByZXBseSBpY29uIGluIHRoZSBib3R0b20gcmlnaHQgY29ybmVyIG9mIHBvc3QgbWVzc2FnZVxcbiAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmNvbW1vbi5zY3JvbGxUb05ld1Bvc3RzLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmNvbW1vbiwgXCJzY3JvbGxUb05ld1Bvc3RzXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5jb21tb24uc2Nyb2xsVG9OZXdQb3N0c1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgU2Nyb2xsIHRvIG5ldyBwb3N0c1xcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5jb21tb24uc21vb3RoU2Nyb2xsLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmNvbW1vbiwgXCJzbW9vdGhTY3JvbGxcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmNvbW1vbi5zbW9vdGhTY3JvbGxcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFNtb290aCBzY3JvbGxpbmdcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuY29tbW9uLnNob3dWaWRlb092ZXJsYXksXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuY29tbW9uLCBcInNob3dWaWRlb092ZXJsYXlcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmNvbW1vbi5zaG93VmlkZW9PdmVybGF5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTaG93IHZpZGVvIG92ZXJsYXlcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiRm9ybSBCZWhhdmlvdXJcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5mb3JtLnNjcm9sbEJvdHRvbSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5mb3JtLCBcInNjcm9sbEJvdHRvbVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZm9ybS5zY3JvbGxCb3R0b21cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFNjcm9sbCB0byB0aGUgYm90dG9tIGFmdGVyIHBvc3RpbmdcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZm9ybS5zYXZlU3ViamVjdCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5mb3JtLCBcInNhdmVTdWJqZWN0XCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5mb3JtLnNhdmVTdWJqZWN0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBTYXZlIHN1YmplY3QgYWZ0ZXIgcG9zdGluZ1xcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5mb3JtLnNhdmVOYW1lLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmZvcm0sIFwic2F2ZU5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZvcm0uc2F2ZU5hbWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFNhdmUgbmFtZSBhZnRlciBwb3N0aW5nXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZvcm0uc2F2ZUZvcm1TdGF0ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5mb3JtLCBcInNhdmVGb3JtU3RhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZvcm0uc2F2ZUZvcm1TdGF0ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgU2F2ZSBmb3JtIGZsb2F0aW5nIHN0YXRlIG9uIHBhZ2UgcmVsb2FkXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF92bS5fdihcIkZvcm0gQWxpZ25tZW50XCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZm9ybS5hbGlnbixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5mb3JtLCBcImFsaWduXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5mb3JtLmFsaWduXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBPbiB0aGUgbGVmdFxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZvcm0uYWxpZ24sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuZm9ybSwgXCJhbGlnblwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZm9ybS5hbGlnblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgSW4gdGhlIGNlbnRlclxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJQcmV2aWV3IEFsaWdubWVudFwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwibGVmdFwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZvcm0ucHJldmlld0FsaWduLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmZvcm0sIFwicHJldmlld0FsaWduXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5mb3JtLnByZXZpZXdBbGlnblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgT24gdGhlIGxlZnRcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1yYWRpby1idXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZvcm0ucHJldmlld0FsaWduLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLmZvcm0sIFwicHJldmlld0FsaWduXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5mb3JtLnByZXZpZXdBbGlnblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgT24gdGhlIHJpZ2h0XFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF92bS5fdihcIk1hcmt1cFwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtY2hlY2tib3hcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2NoZWNrYm94XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZvcm0uc2hvd01hcmt1cCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5mb3JtLCBcInNob3dNYXJrdXBcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmZvcm0uc2hvd01hcmt1cFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgU2hvdyBtYXJrdXAgYnV0dG9uc1xcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LWNoZWNrYm94XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19jaGVja2JveFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5mb3JtLnNob3dNYXJrdXBNb2JpbGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MuZm9ybSwgXCJzaG93TWFya3VwTW9iaWxlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5mb3JtLnNob3dNYXJrdXBNb2JpbGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIFNob3cgbWFya3VwIGJ1dHRvbnMgKG1vYmlsZSlcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX3Jvd1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwieC1jaGVja2JveFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fY2hlY2tib3hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MuZm9ybS5pbnNlcnRUYWdzSW5QYWlycyxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy5mb3JtLCBcImluc2VydFRhZ3NJblBhaXJzXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5mb3JtLmluc2VydFRhZ3NJblBhaXJzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICBJbnNlcnQgdGFncyBpbiBwYWlyc1xcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJSZXBsYWNlc1wiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInVsXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX2xpc3RcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uX2woX3ZtLnNldHRpbmdzLmZvcm0ucmVwbGFjZXMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19saXN0LWl0ZW1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnBhdHRlcm4sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaXRlbS5wYXR0ZXJuXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IHNldHRpbmdzLWZvcm1fX3RleHRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiUGF0dGVyblwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGl0ZW0ucGF0dGVybiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwicGF0dGVyblwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ucmVwbGFjZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnJlcGxhY2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJSZXBsYWNlXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogaXRlbS5yZXBsYWNlIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJyZXBsYWNlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVtb3ZlUmVwbGFjZUF0KGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVtb3ZlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX2xpc3QtaXRlbVwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld1JlcGxhY2UucGF0dGVybixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld1JlcGxhY2UucGF0dGVyblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiUGF0dGVyblwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5ld1JlcGxhY2UucGF0dGVybiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5uZXdSZXBsYWNlLCBcInBhdHRlcm5cIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdSZXBsYWNlLnJlcGxhY2UsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdSZXBsYWNlLnJlcGxhY2VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlJlcGxhY2VcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uZXdSZXBsYWNlLnJlcGxhY2UgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubmV3UmVwbGFjZSwgXCJyZXBsYWNlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmFkZFJlcGxhY2UoX3ZtLm5ld1JlcGxhY2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkFkZFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiTGFuZ3VhZ2VcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLmxvY2FsZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncy50aW1lLCBcImxvY2FsZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MudGltZS5sb2NhbGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIEJyb3dzZXIgZGVmYXVsdFxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImN1c3RvbVwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUubG9jYWxlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLnRpbWUsIFwibG9jYWxlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy50aW1lLmxvY2FsZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBDdXN0b21cXG4gICAgICBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLmxvY2FsZUN1c3RvbSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MudGltZS5sb2NhbGVDdXN0b21cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiZW5cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUubG9jYWxlQ3VzdG9tIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNldHRpbmdzLnRpbWUubG9jYWxlID0gXCJjdXN0b21cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy50aW1lLFxuICAgICAgICAgICAgICAgICAgICBcImxvY2FsZUN1c3RvbVwiLFxuICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInNldHRpbmdzLWZvcm1fX29wdGlvbi10aXRsZVwiIH0sIFtcbiAgICAgIF92bS5fdihcIkZvcm1hdFwiKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICBcImxhYmVsLWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgXCJpbnB1dC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX3JhZGlvXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUuZm9ybWF0LFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLnRpbWUsIFwiZm9ybWF0XCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy50aW1lLmZvcm1hdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgQnJvd3NlciBkZWZhdWx0XFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19yb3dcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcIngtcmFkaW8tYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwiY3VzdG9tXCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS5mb3JtYXQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MudGltZSwgXCJmb3JtYXRcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLnRpbWUuZm9ybWF0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIEN1c3RvbVxcbiAgICAgIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnRpbWUuZm9ybWF0Q3VzdG9tLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy50aW1lLmZvcm1hdEN1c3RvbVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBzZXR0aW5ncy1mb3JtX190ZXh0XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJFRUUsIGRkIE1NTSB5eXl5IEhIOm1tOnNzXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLmZvcm1hdEN1c3RvbSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zZXR0aW5ncy50aW1lLmZvcm1hdCA9IFwiY3VzdG9tXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MudGltZSxcbiAgICAgICAgICAgICAgICAgICAgXCJmb3JtYXRDdXN0b21cIixcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJzZXR0aW5ncy1mb3JtX19vcHRpb24tdGl0bGVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJUaW1lIHpvbmVcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgXCJsYWJlbC1jbGFzc1wiOiBcInNldHRpbmdzLWZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19yYWRpb1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLnpvbmUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MudGltZSwgXCJ6b25lXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy50aW1lLnpvbmVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIEJyb3dzZXIgZGVmYXVsdFxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fcm93XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ4LXJhZGlvLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgIFwibGFiZWwtY2xhc3NcIjogXCJzZXR0aW5ncy1mb3JtX19sYWJlbFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWNsYXNzXCI6IFwic2V0dGluZ3MtZm9ybV9fcmFkaW9cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS56b25lLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLnRpbWUsIFwiem9uZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MudGltZS56b25lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIEZpeGVkIFVUQyBvZmZzZXRcXG4gICAgICBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy50aW1lLnpvbmVGaXhlZCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MudGltZS56b25lRml4ZWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgc2V0dGluZ3MtZm9ybV9fdGV4dFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcIm51bWJlclwiLCBtaW46IFwiLTk5XCIsIG1heDogXCI5OVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2V0dGluZ3MudGltZS56b25lRml4ZWQgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2V0dGluZ3MudGltZS56b25lID0gXCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MudGltZSwgXCJ6b25lRml4ZWRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwic2V0dGluZ3MtZm9ybV9fb3B0aW9uLXRpdGxlXCIgfSwgW1xuICAgICAgX3ZtLl92KFwiQ3VycmVudCBmb3JtYXRcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGltZSkpXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgU2VlIHRoZVxcbiAgICBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L2x1eG9uL2Jsb2IvbWFzdGVyL2RvY3MvZm9ybWF0dGluZy5tZCN0YWJsZS1vZi10b2tlbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgIGx1eG9uIGRvY3VtZW50YXRpb25cXG4gICAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIlxcbiAgICBmb3IgdGhlIGN1c3RvbSB0b2tlbnMgcmVmZXJlbmNlLlxcbiAgXCIpXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNsYXNzIEFwaSB7XG4gICAgc3RhdGljIGNyZWF0ZVBvc3QocmVxdWVzdCwgb25Qcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBgJHt3aW5kb3cuYmFzZVVybH0vYWpheC9wb3N0L2NyZWF0ZWA7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdwYXJlbnQnLCByZXF1ZXN0LnBhcmVudC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnc3ViamVjdCcsIHJlcXVlc3Quc3ViamVjdCk7XG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ25hbWUnLCByZXF1ZXN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdtZXNzYWdlJywgcmVxdWVzdC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIHJlcXVlc3QuZmlsZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgeGhyLm9wZW4oJ1BPU1QnLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChvblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBvblByb2dyZXNzLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5nZXRSZXNwb25zZUhlYWRlcignTG9jYXRpb24nKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoYCR7eGhyLnN0YXR1c30gJHt4aHIuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuQXBpID0gQXBpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgY29tcG9uZW50c18xID0gcmVxdWlyZShcIi4vY29tcG9uZW50c1wiKTtcbmNvbnN0IHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbm5ldyBjb21wb25lbnRzXzEuQ2FwdGNoYSgpO1xubmV3IGNvbXBvbmVudHNfMS5Db3JyZWN0VGltZSgpO1xubmV3IGNvbXBvbmVudHNfMS5EZWxldGVGb3JtKCk7XG5uZXcgY29tcG9uZW50c18xLk5ld1Bvc3RzRGV0ZWN0b3IoKTtcbm5ldyBjb21wb25lbnRzXzEuUG9zdCgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0aW5nRm9ybSgpO1xubmV3IGNvbXBvbmVudHNfMS5Qb3N0UmVmZXJlbmNlTWFwKCk7XG5uZXcgY29tcG9uZW50c18xLlNldHRpbmdzKCk7XG5uZXcgY29tcG9uZW50c18xLlN0eWxlU3dpdGNoKCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZSA9PiB7XG4gICAgXzEuZXZlbnRCdXMuJGVtaXQoXzEuRXZlbnRzLlJlYWR5KTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHNldHRpbmdzXzEuU2V0dGluZ3NNYW5hZ2VyLmxvYWQoKTtcbiAgICBpZiAoc2V0dGluZ3MuY29tbW9uLnNtb290aFNjcm9sbCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3Ntb290aC1zY3JvbGwnKTtcbiAgICB9XG4gICAgY29uc3QgbGF5b3V0ID0gdXRpbHNfMS5ET00ucXMoJy5sYXlvdXQnKTtcbiAgICBpZiAobGF5b3V0KSB7XG4gICAgICAgIGxheW91dC5jbGFzc0xpc3QuYWRkKCdsYXlvdXQtLScgKyBzZXR0aW5ncy5jb21tb24ubGF5b3V0KTtcbiAgICAgICAgaWYgKCFzZXR0aW5ncy5jb21tb24uc2hvd1Bvc3RIZWFkZXJSZWZsaW5rSWNvbikge1xuICAgICAgICAgICAgbGF5b3V0LmNsYXNzTGlzdC5hZGQoJ2xheW91dC0taGlkZS1wb3N0LWhlYWRlci1yZWZsaW5rLWljb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNldHRpbmdzLmNvbW1vbi5zaG93UG9zdFJlZmxpbmtJY29uKSB7XG4gICAgICAgICAgICBsYXlvdXQuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LS1oaWRlLXBvc3QtcmVmbGluay1pY29uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNldHRpbmdzLmNvbW1vbi5zaG93VmlkZW9PdmVybGF5KSB7XG4gICAgICAgICAgICBsYXlvdXQuY2xhc3NMaXN0LmFkZCgnbGF5b3V0LS1zaG93LXRodW1iLW92ZXJsYXknKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBmb3JtV3JhcHBlciA9IHV0aWxzXzEuRE9NLnFzKCcuY29udGVudF9fcG9zdGluZy1mb3JtLXdyYXBwZXInKTtcbiAgICBpZiAoZm9ybVdyYXBwZXIpIHtcbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fcG9zdGluZy1mb3JtLXdyYXBwZXItLScgKyBzZXR0aW5ncy5mb3JtLmFsaWduKTtcbiAgICB9XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIENhcHRjaGEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm9yaWdpbmFsU3JjID0gJyc7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBpbWFnZSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYWltYWdlJyk7XG4gICAgICAgIGlmIChpbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFNyYyA9IGltYWdlLnNyYztcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxvYWQuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICBjb25zdCBjYXB0Y2hhID0gdXRpbHNfMS5ET00ucWlkKCdjYXB0Y2hhJyk7XG4gICAgICAgIGNhcHRjaGEudmFsdWUgPSAnJztcbiAgICAgICAgY2FwdGNoYS5mb2N1cygpO1xuICAgICAgICBjb25zdCBpbWFnZSA9IHV0aWxzXzEuRE9NLnFpZCgnY2FwdGNoYWltYWdlJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IGAke3RoaXMub3JpZ2luYWxTcmN9IyR7bmV3IERhdGUoKS5nZXRUaW1lKCl9YDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2FwdGNoYSA9IENhcHRjaGE7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGx1eG9uXzEgPSByZXF1aXJlKFwibHV4b25cIik7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ29ycmVjdFRpbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCB0aGlzLm9uUG9zdHNJbnNlcnRlZC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25Qb3N0c0luc2VydGVkKHBvc3RzKSB7XG4gICAgICAgIHBvc3RzLmZvckVhY2godGhpcy5vblBvc3RJbnNlcnRlZC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0ZWQocG9zdCkge1xuICAgICAgICBjb25zdCB0aW1lRWxlbWVudHMgPSB1dGlsc18xLkRPTS5xc2EoJy5wb3N0IHRpbWUnLCBwb3N0KTtcbiAgICAgICAgdGltZUVsZW1lbnRzLmZvckVhY2godGhpcy5jb3JyZWN0VGltZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgY29ycmVjdFRpbWUoZWwpIHtcbiAgICAgICAgY29uc3QgdGltZV9zdHIgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGV0aW1lJyk7XG4gICAgICAgIGlmICghdGltZV9zdHIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lID0gbHV4b25fMS5EYXRlVGltZS5mcm9tSVNPKHRpbWVfc3RyKTtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB1dGlsc18xLlRpbWUuZm9ybWF0KHRpbWUsIHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29ycmVjdFRpbWUgPSBDb3JyZWN0VGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIERlbGV0ZUZvcm0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHV0aWxzXzEuRE9NLnFpZCgnZGVsZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWxldGVfcG9zdF9wYXNzd29yZCA9IHV0aWxzXzEuRE9NLnFpZCgnZGVsZXRlcG9zdHBhc3N3b3JkJyk7XG4gICAgICAgIGlmIChkZWxldGVfcG9zdF9wYXNzd29yZCkge1xuICAgICAgICAgICAgLy8gTG9hZCBkZWxldGUgcG9zdCBwYXNzd29yZC5cbiAgICAgICAgICAgIGRlbGV0ZV9wb3N0X3Bhc3N3b3JkLnZhbHVlID0gdXRpbHNfMS5Db29raWUuZ2V0KCd0aW55aWJfcGFzc3dvcmQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRGVsZXRlRm9ybSA9IERlbGV0ZUZvcm07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBvaW50ZXJFdmVudHMgPSAnUG9pbnRlckV2ZW50JyBpbiB3aW5kb3c7XG5jb25zdCB0b3VjaEV2ZW50cyA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdztcbmV4cG9ydHMuZHJhZ2dhYmxlID0ge1xuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuZ2V0RHJhZ0hhbmRsZSgpO1xuICAgICAgICBpZiAoIWhhbmRsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlUmVzaXplID0gdGhpcy5vbkRyYWdnYWJsZVJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYWdnYWJsZU1vdXNlRG93biA9IHRoaXMub25EcmFnZ2FibGVNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZHJhZ2dhYmxlUmVzaXplKTtcbiAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgIGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5kcmFnZ2FibGVNb3VzZURvd24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuZHJhZ2dhYmxlTW91c2VEb3duKTtcbiAgICAgICAgfVxuICAgICAgICAvL3RoaXMuc2V0UG9zaXRpb24odGhpcy5jaGVja0JvdW5kcyh0aGlzLmdldFBvc2l0aW9uKCkpKTtcbiAgICB9LFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdnYWJsZVJlc2l6ZSkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuZHJhZ2dhYmxlUmVzaXplKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGUgPSB0aGlzLmdldERyYWdIYW5kbGUoKTtcbiAgICAgICAgaWYgKGhhbmRsZSkge1xuICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhhbmRsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmRyYWdnYWJsZU1vdXNlRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0RHJhZ0hhbmRsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBnZXREcmFnZ2FibGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBkcmFnZ2FibGUgPSB0aGlzLmdldERyYWdnYWJsZSgpO1xuICAgICAgICAgICAgaWYgKCFkcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IGRyYWdnYWJsZS5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgICAgIHk6IGRyYWdnYWJsZS5vZmZzZXRUb3AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBzZXRQb3NpdGlvbihjb29yZHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyYWdnYWJsZS5zdHlsZS5sZWZ0ID0gYCR7Y29vcmRzLnh9cHhgO1xuICAgICAgICAgICAgZHJhZ2dhYmxlLnN0eWxlLnRvcCA9IGAke2Nvb3Jkcy55fXB4YDtcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tCb3VuZHMoeyB4LCB5IH0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHgsIHkgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBkcmFnZ2FibGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBtaW5YID0gMDtcbiAgICAgICAgICAgIGNvbnN0IG1pblkgPSAwO1xuICAgICAgICAgICAgY29uc3QgbWF4WCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggLSByZWN0LndpZHRoO1xuICAgICAgICAgICAgY29uc3QgbWF4WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBNYXRoLm1pbihNYXRoLm1heChtaW5YLCB4KSwgbWF4WCksXG4gICAgICAgICAgICAgICAgeTogTWF0aC5tYXgoTWF0aC5taW4obWF4WSwgeSksIG1pblkpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EcmFnZ2FibGVSZXNpemUoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHModGhpcy5nZXRQb3NpdGlvbigpKSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ2dhYmxlTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9kcmFnZ2FibGVQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgTW91c2VFdmVudFxuICAgICAgICAgICAgICAgIHx8IHBvaW50ZXJFdmVudHMgJiYgZSBpbnN0YW5jZW9mIFBvaW50ZXJFdmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdTdGFydCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICB5OiBlLmNsaWVudFksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvdWNoRXZlbnRzICYmIGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhZ1N0YXJ0ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiB0b3VjaC5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICB5OiB0b3VjaC5jbGllbnRZLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUgPSB0aGlzLm9uRHJhZ2dhYmxlTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHBvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdnYWJsZU1vdXNlVXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdnYWJsZU1vdXNlVXAgPSB0aGlzLm9uRHJhZ2dhYmxlTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ2dhYmxlTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICBpZiAoIWRyYWdnYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgZGVsdGFYID0gMDtcbiAgICAgICAgICAgIGxldCBkZWx0YVkgPSAwO1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBNb3VzZUV2ZW50XG4gICAgICAgICAgICAgICAgfHwgcG9pbnRlckV2ZW50cyAmJiBlIGluc3RhbmNlb2YgUG9pbnRlckV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZGVsdGFYID0gZS5jbGllbnRYIC0gdGhpcy5fZHJhZ1N0YXJ0Lng7XG4gICAgICAgICAgICAgICAgZGVsdGFZID0gZS5jbGllbnRZIC0gdGhpcy5fZHJhZ1N0YXJ0Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b3VjaEV2ZW50cyAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdWNoID0gZS50b3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhWCA9IHRvdWNoLmNsaWVudFggLSB0aGlzLl9kcmFnU3RhcnQueDtcbiAgICAgICAgICAgICAgICBkZWx0YVkgPSB0b3VjaC5jbGllbnRZIC0gdGhpcy5fZHJhZ1N0YXJ0Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuY2hlY2tCb3VuZHMoe1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuX2RyYWdnYWJsZVBvc2l0aW9uLnggKyBkZWx0YVgsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5fZHJhZ2dhYmxlUG9zaXRpb24ueSArIGRlbHRhWSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EcmFnZ2FibGVNb3VzZVVwKGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdnYWJsZU1vdXNlTW92ZSkge1xuICAgICAgICAgICAgICAgIGlmIChwb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3VjaEV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZ2dhYmxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRyYWdnYWJsZU1vdXNlVXApIHtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnRlckV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdnYWJsZU1vdXNlVXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5kcmFnZ2FibGVNb3VzZVVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ2dhYmxlTW91c2VVcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZU1vdmUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVNb3VzZVVwID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5leHBvcnRzLkZpbGVQcmV2aWV3ID0gdnVlXzEuZGVmYXVsdC5leHRlbmQoe1xuICAgIHRlbXBsYXRlOiBgXG48ZGl2IGNsYXNzPVwiZmlsZS1wcmV2aWV3XCJcbiAgOnRpdGxlPVwiaW5mb1wiXG4gIEBjbGljaz1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gIEBkcmFnZW50ZXIuc3RvcC5wcmV2ZW50XG4gIEBkcmFnbGVhdmUuc3RvcC5wcmV2ZW50XG4gIEBkcmFnb3Zlci5zdG9wLnByZXZlbnRcbiAgQGRyb3Auc3RvcC5wcmV2ZW50PVwib25Ecm9wKCRldmVudClcIj5cbiAgPHNwYW4gY2xhc3M9XCJmaWxlLXByZXZpZXdfX2luZm9cIlxuICAgIHYtaWY9XCJ0eXBlXCI+e3sgaW5mbyB9fTwvc3Bhbj5cblxuICA8aW1nIGNsYXNzPVwiZmlsZS1wcmV2aWV3X19jb250ZW50XCJcbiAgICB2LWlmPVwidHlwZSA9PT0gJ2ltYWdlJyAmJiBzcmNcIlxuICAgIDpzcmM9XCJzcmNcIiAvPlxuICA8dmlkZW8gY2xhc3M9XCJmaWxlLXByZXZpZXdfX2NvbnRlbnRcIiBhdXRvcGxheSBsb29wIG11dGVkXG4gICAgdi1lbHNlLWlmPVwidHlwZSA9PT0gJ3ZpZGVvJyAmJiBzcmNcIlxuICAgIDpzcmM9XCJzcmNcIlxuICAgIDp0aXRsZT1cImluZm9cIj48L3ZpZGVvPlxuICA8c3BhbiBjbGFzcz1cImZpbGUtcHJldmlld19fbGFiZWxcIlxuICAgIHYtZWxzZT5VcGxvYWQgZmlsZTwvc3Bhbj5cblxuICA8c2xvdD48L3Nsb3Q+XG48L2Rpdj5gLFxuICAgIHByb3BzOiBbJ2ZpbGUnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjOiBudWxsLFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgbmFtZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUubmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGUubmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5maWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlLnNpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNpemVGb3JtYXR0ZWQoKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0cyA9IFsnQicsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQiddO1xuICAgICAgICAgICAgbGV0IHNpemUgPSB0aGlzLnNpemU7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IHVuaXRzLmxlbmd0aCAmJiBzaXplID49IDEwMDA7ICsraSkge1xuICAgICAgICAgICAgICAgIHNpemUgLz0gMTAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBgJHtzaXplLnRvRml4ZWQoMil9ICR7dW5pdHNbaV19YDtcbiAgICAgICAgfSxcbiAgICAgICAgaW5mbygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hbWVcbiAgICAgICAgICAgICAgICA/IGAke3RoaXMubmFtZX0sICR7dGhpcy5zaXplRm9ybWF0dGVkfWBcbiAgICAgICAgICAgICAgICA6IHRoaXMuc2l6ZUZvcm1hdHRlZDtcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5maWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5maWxlLnR5cGU7XG4gICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ3ZpZGVvLycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAndmlkZW8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlLnN0YXJ0c1dpdGgoJ2F1ZGlvLycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYXVkaW8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdpbWFnZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgICAgIGlmIChuYW1lLmVuZHNXaXRoKCcud2VibScpIHx8IG5hbWUuZW5kc1dpdGgoJy5tcDQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAndmlkZW8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobmFtZS5lbmRzV2l0aCgnLm1wMycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhdWRpbyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ2ltYWdlJztcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGZpbGUodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNyYyA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcmMgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljayhlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkRyb3AoZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZHJvcCcsIGUpO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNhcHRjaGFfMSA9IHJlcXVpcmUoXCIuL2NhcHRjaGFcIik7XG5leHBvcnRzLkNhcHRjaGEgPSBjYXB0Y2hhXzEuQ2FwdGNoYTtcbnZhciBjb3JyZWN0X3RpbWVfMSA9IHJlcXVpcmUoXCIuL2NvcnJlY3QtdGltZVwiKTtcbmV4cG9ydHMuQ29ycmVjdFRpbWUgPSBjb3JyZWN0X3RpbWVfMS5Db3JyZWN0VGltZTtcbnZhciBkZWxldGVfZm9ybV8xID0gcmVxdWlyZShcIi4vZGVsZXRlLWZvcm1cIik7XG5leHBvcnRzLkRlbGV0ZUZvcm0gPSBkZWxldGVfZm9ybV8xLkRlbGV0ZUZvcm07XG52YXIgZHJhZ2dhYmxlXzEgPSByZXF1aXJlKFwiLi9kcmFnZ2FibGVcIik7XG5leHBvcnRzLmRyYWdnYWJsZSA9IGRyYWdnYWJsZV8xLmRyYWdnYWJsZTtcbnZhciBmaWxlX3ByZXZpZXdfMSA9IHJlcXVpcmUoXCIuL2ZpbGUtcHJldmlld1wiKTtcbmV4cG9ydHMuRmlsZVByZXZpZXcgPSBmaWxlX3ByZXZpZXdfMS5GaWxlUHJldmlldztcbnZhciBuZXdfcG9zdHNfZGV0ZWN0b3JfMSA9IHJlcXVpcmUoXCIuL25ldy1wb3N0cy1kZXRlY3RvclwiKTtcbmV4cG9ydHMuTmV3UG9zdHNEZXRlY3RvciA9IG5ld19wb3N0c19kZXRlY3Rvcl8xLk5ld1Bvc3RzRGV0ZWN0b3I7XG52YXIgcG9zdF8xID0gcmVxdWlyZShcIi4vcG9zdFwiKTtcbmV4cG9ydHMuUG9zdCA9IHBvc3RfMS5Qb3N0O1xudmFyIHBvc3RpbmdfZm9ybV8xID0gcmVxdWlyZShcIi4vcG9zdGluZy1mb3JtXCIpO1xuZXhwb3J0cy5Qb3N0aW5nRm9ybSA9IHBvc3RpbmdfZm9ybV8xLlBvc3RpbmdGb3JtO1xudmFyIHBvc3RfcmVmZXJlbmNlX21hcF8xID0gcmVxdWlyZShcIi4vcG9zdC1yZWZlcmVuY2UtbWFwXCIpO1xuZXhwb3J0cy5Qb3N0UmVmZXJlbmNlTWFwID0gcG9zdF9yZWZlcmVuY2VfbWFwXzEuUG9zdFJlZmVyZW5jZU1hcDtcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XG5leHBvcnRzLlNldHRpbmdzID0gc2V0dGluZ3NfMS5TZXR0aW5ncztcbnZhciBzdHlsZV9zd2l0Y2hfMSA9IHJlcXVpcmUoXCIuL3N0eWxlLXN3aXRjaFwiKTtcbmV4cG9ydHMuU3R5bGVTd2l0Y2ggPSBzdHlsZV9zd2l0Y2hfMS5TdHlsZVN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIE5ld1Bvc3RzRGV0ZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKiogQHRvZG86IHJlbW92ZSBNdXRhdGlvbk9ic2VydmVyIEFTQVAsIHdpdGggaW50ZWdyYXRlZCB0aHJlYWQgdXBkYXRpbmcuICovXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gbXV0YXRpb25zXG4gICAgICAgICAgICAgICAgLy8gR2V0IGFkZGVkIHBvc3RzLCBpZiBhbnkuXG4gICAgICAgICAgICAgICAgLm1hcChtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZUxpc3QgPSBtdXRhdGlvbi5hZGRlZE5vZGVzO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gbm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50IGlzIHBvc3QgaXRzZWxmLCByZXR1cm4gaXQsXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgcXVlcnkgZm9yIGVsZW1lbnQgY2hpbGRyZW4uXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncG9zdCcpXG4gICAgICAgICAgICAgICAgICAgID8gW2VsZW1lbnRdXG4gICAgICAgICAgICAgICAgICAgIDogdXRpbHNfMS5ET00ucXNhKCcucG9zdCcsIGVsZW1lbnQpKVxuICAgICAgICAgICAgICAgICAgICAvLyBGbGF0dGVuIHBvc3RzIGFycmF5LlxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gdG90YWwuY29uY2F0KGN1cnJlbnQpLCBbXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIEZsYXR0ZW4gcG9zdHMgYXJyYXkuXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgodG90YWwsIGN1cnJlbnQpID0+IHRvdGFsLmNvbmNhdChjdXJyZW50KSwgW10pO1xuICAgICAgICAgICAgaWYgKHBvc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCBwb3N0cywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBTZXR1cCBNdXRhdGlvbk9ic2VydmVyLlxuICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gdXRpbHNfMS5ET00ucXNhKCcucG9zdCcpO1xuICAgICAgICAgICAgaWYgKHBvc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBfXzEuZXZlbnRCdXMuJGVtaXQoX18xLkV2ZW50cy5Qb3N0c0luc2VydGVkLCBwb3N0cywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuTmV3UG9zdHNEZXRlY3RvciA9IE5ld1Bvc3RzRGV0ZWN0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBQb3N0UmVmZXJlbmNlTWFwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3N0cyA9IHt9O1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgKHBvc3RzKSA9PiBwb3N0cy5mb3JFYWNoKHRoaXMub25Qb3N0SW5zZXJ0LmJpbmQodGhpcykpKTtcbiAgICB9XG4gICAgb25Qb3N0SW5zZXJ0KHBvc3QpIHtcbiAgICAgICAgY29uc3QgcG9zdElkID0gK3Bvc3QuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc3QtaWQnKTtcbiAgICAgICAgLy8gU3RvcmUgcG9zdC5cbiAgICAgICAgdGhpcy5wb3N0c1twb3N0SWRdID0gcG9zdDtcbiAgICAgICAgLy8gR2V0IHJlZmVyZW5jZXMuXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZUVsZW1lbnRzID0gdXRpbHNfMS5ET00ucXNhKCdhW2RhdGEtdGFyZ2V0LXBvc3QtaWRdJywgcG9zdCk7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSByZWZlcmVuY2VFbGVtZW50cy5tYXAoZWxlbWVudCA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgaWQ6ICtlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQtcG9zdC1pZCcpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFwcGVuZCB0aGUgYXV0aG9yIG5hbWUgb2YgdGhlIHJlZmVyZW5jZWQgcG9zdCB0byB0aGUgcmVmZXJlbmNlIGxpbmsgdGV4dC5cbiAgICAgICAgcmVmZXJlbmNlcy5mb3JFYWNoKHJlZmVyZW5jZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gdGhpcy5wb3N0c1tyZWZlcmVuY2UuaWRdO1xuICAgICAgICAgICAgaWYgKCFwb3N0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlQXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmVmZXJlbmNlQXV0aG9yLmNsYXNzTGlzdC5hZGQoJ3Bvc3RfX3JlZmVyZW5jZS1saW5rLWF1dGhvcicpO1xuICAgICAgICAgICAgcmVmZXJlbmNlQXV0aG9yLmlubmVySFRNTCA9IHRoaXMuZ2V0UG9zdFJlZkxpbmtBdXRob3JIdG1sKHBvc3QpO1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gcmVmZXJlbmNlLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gcmVmZXJlbmNlLmVsZW1lbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHJlZmVyZW5jZUF1dGhvciwgbmV4dFNpYmxpbmcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UG9zdFJlZkxpbmtBdXRob3JIdG1sKHBvc3QpIHtcbiAgICAgICAgY29uc3QgbmFtZUVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0LWhlYWRlcl9fbmFtZScsIHBvc3QpO1xuICAgICAgICBjb25zdCB0cmlwY29kZUVsID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0LWhlYWRlcl9fdHJpcGNvZGUnLCBwb3N0KTtcbiAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVFbCA/IG5hbWVFbC5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgY29uc3QgdHJpcGNvZGUgPSB0cmlwY29kZUVsID8gdHJpcGNvZGVFbC5pbm5lckhUTUwgOiAnJztcbiAgICAgICAgaWYgKG5hbWUubGVuZ3RoIHx8IHRyaXBjb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGAoPHNwYW4gY2xhc3M9XCJwb3N0X19yZWZlcmVuY2UtbGluay1uYW1lXCI+JHtuYW1lfTwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgKyBgPHNwYW4gY2xhc3M9XCJwb3N0X19yZWZlcmVuY2UtbGluay10cmlwY29kZVwiPiR7dHJpcGNvZGV9PC9zcGFuPilgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGBgO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Qb3N0UmVmZXJlbmNlTWFwID0gUG9zdFJlZmVyZW5jZU1hcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBkcmFnZ2FibGVfMSA9IHJlcXVpcmUoXCIuL2RyYWdnYWJsZVwiKTtcbjtcbmNsYXNzIFBvc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUmVhZHksIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlBvc3RzSW5zZXJ0ZWQsIHRoaXMub25Qb3N0c0luc2VydGVkLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3B1cC5pZCA9ICdwb3B1cCc7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwJywgJ2hpZGRlbicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShwb3B1cCwgbnVsbCk7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsID0gbmV3IHZ1ZV8xLmRlZmF1bHQoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJwb3B1cFwiIGlkPVwicG9wdXBcIiB2LXNob3c9XCIhaGlkZGVuXCIgcmVmPVwicG9wdXBcIj5cbiAgPGRpdiBjbGFzcz1cInBvcHVwX19oZWFkZXJcIiByZWY9XCJoZWFkZXJcIj5cbiAgICA8c3BhbiBjbGFzcz1cInBvcHVwX190aXRsZVwiPnt7IHRpdGxlIH19PC9zcGFuPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJwb3B1cF9faGVhZGVyLWJ1dHRvbnNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9wdXBfX2Nsb3NlXCJcbiAgICAgICAgdi1vbjpjbGljay5zdG9wPVwib25DbG9zZUNsaWNrKClcIlxuICAgICAgICB0aXRsZT1cIkNsb3NlIHBvcHVwXCI+PC9zcGFuPlxuICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInBvcHVwX19ib2R5XCIgdi1odG1sPVwiY29udGVudFwiPlxuICA8L2Rpdj5cbjwvZGl2PmAsXG4gICAgICAgICAgICBtaXhpbnM6IFtkcmFnZ2FibGVfMS5kcmFnZ2FibGVdLFxuICAgICAgICAgICAgZWw6ICcjcG9wdXAnLFxuICAgICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjb3ViJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgZ2V0RHJhZ0hhbmRsZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnMuaGVhZGVyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0RHJhZ2dhYmxlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5wb3B1cDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xvc2VDbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbG9zZVBvcHVwKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblBvc3RzSW5zZXJ0ZWQocG9zdHMpIHtcbiAgICAgICAgcG9zdHMuZm9yRWFjaCh0aGlzLnByb2Nlc3NPRW1iZWRMaW5rcy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHJvY2Vzc09FbWJlZExpbmtzKHBvc3QpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RDb250ZW50ID0gdXRpbHNfMS5ET00ucXMoJy5wb3N0X19jb250ZW50JywgcG9zdCk7XG4gICAgICAgICAgICBpZiAoIXBvc3RDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcG9zdE1lc3NhZ2UgPSB1dGlsc18xLkRPTS5xcygnLnBvc3RfX21lc3NhZ2UnLCBwb3N0KTtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtzID0gdXRpbHNfMS5ET00ucXNhKCdhW2hyZWZdJywgcG9zdCk7XG4gICAgICAgICAgICBsaW5rcy5maWx0ZXIobGluayA9PiAhbGluay5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJvY2Vzc2VkJykpXG4gICAgICAgICAgICAgICAgLm1hcChsaW5rID0+IHtcbiAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9jZXNzZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKHVybCA9PiB1cmwubWF0Y2goJ15odHRwcz86XFwvXFwvKD86d3d3XFwuKT9jb3ViXFwuY29tXFwvdmlld1xcLyhbMC05YS16XSspJCcpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIobWF0Y2hlcyA9PiBtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID49IDEpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKG1hdGNoZXMpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3ViVXJsID0gYGh0dHBzOi8vY291Yi5jb20vYXBpL3YyL2NvdWJzLyR7bWF0Y2hlc1sxXX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3dpbmRvdy5iYXNlVXJsfS9hcGkvZW1iZWQ/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNvdWJVcmwpfWA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENhblxcJ3QgbG9hZCBjb3ViICcke21hdGNoZXNbMF19JzpgLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdWIgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbFVybCA9IGNvdWIuaW1hZ2VfdmVyc2lvbnMudGVtcGxhdGUucmVwbGFjZSgnJXt2ZXJzaW9ufScsICdzbWFsbCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsLmNsYXNzTGlzdC5hZGQoJ3Bvc3RfX2ZpbGUnLCAnZmlsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuaW5uZXJIVE1MID0gYFxuPGRpdiBjbGFzcz1cInBvc3RfX2ZpbGUtaW5mbyBmaWxlLWluZm8gZmlsZXNpemVcIj5cbiAgPGEgY2xhc3M9XCJmaWxlLWluZm9fX2xpbmtcIiBocmVmPVwiaHR0cHM6Ly9jb3ViLmNvbS92aWV3LyR7Y291Yi5wZXJtYWxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q291YjwvYT5cbiAgPHNwYW4gY2xhc3M9XCJmaWxlLWluZm9fX3NpemVcIj48L3NwYW4+XG48L2Rpdj5cblxuPGEgY2xhc3M9XCJmaWxlX190aHVtYm5haWwgdGh1bWJuYWlsIHRodW1ibmFpbC0tdmlkZW9cIiBocmVmPVwiaHR0cHM6Ly9jb3ViLmNvbS92aWV3LyR7Y291Yi5wZXJtYWxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gIDxpbWcgY2xhc3M9XCJ0aHVtYm5haWxfX2NvbnRlbnQgdGh1bWJuYWlsX19jb250ZW50X2ltYWdlXCIgc3JjPVwiJHt0aHVtYm5haWxVcmx9XCIgLz5cbjwvYT5gO1xuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWwuc3R5bGUubWF4SGVpZ2h0ID0gJzI1MHB4JztcbiAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsLnN0eWxlLm1heFdpZHRoID0gJzI1MHB4JztcbiAgICAgICAgICAgICAgICAgICAgcG9zdENvbnRlbnQuaW5zZXJ0QmVmb3JlKHRodW1ibmFpbCwgcG9zdE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gdXRpbHNfMS5ET00ucXMoJy50aHVtYm5haWwnLCB0aHVtYm5haWwpO1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Db3ViSW5Qb3B1cChjb3ViKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2FuXFwndCBsb2FkIGNvdWIgJyR7bWF0Y2hlc1swXX0nOmAsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9wZW5Db3ViSW5Qb3B1cChjb3ViKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3ViVXJsID0gYGh0dHBzOi8vY291Yi5jb20vdmlldy8ke2NvdWIucGVybWFsaW5rfWA7XG4gICAgICAgICAgICBjb25zdCBvRW1iZWRVcmwgPSBgaHR0cHM6Ly9jb3ViLmNvbS9hcGkvb2VtYmVkLmpzb24/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNvdWJVcmwpfSZhdXRvcGxheT10cnVlYDtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke3dpbmRvdy5iYXNlVXJsfS9hcGkvZW1iZWQ/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG9FbWJlZFVybCl9YDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgQ2FuXFwndCBsb2FkIGNvdWIgJ2h0dHBzOi8vY291Yi5jb20vdmlldy8ke2NvdWIucGVybWFsaW5rfSc6YCwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBWaWV3TW9kZWwudGl0bGUgPSAnQ291YiDigJQgJyArIGNvdWIudGl0bGU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFZpZXdNb2RlbC5jb250ZW50ID0ganNvbi5odG1sLnJlcGxhY2UoJ211dGVkPXRydWUnLCAnbXV0ZWQ9ZmFsc2UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLnNldFBvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgeDogTWF0aC5tYXgoMCwgd2luZG93LmlubmVyV2lkdGggLyAyIC0ganNvbi53aWR0aCAvIDIpLFxuICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLm1heCgwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0ganNvbi5oZWlnaHQgLyAyKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENhblxcJ3QgbG9hZCBjb3ViICdodHRwczovL2NvdWIuY29tL3ZpZXcvJHtjb3ViLnBlcm1hbGlua30nOmAsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xvc2VQb3B1cCgpIHtcbiAgICAgICAgdGhpcy5wb3B1cFZpZXdNb2RlbC5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBvcHVwVmlld01vZGVsLmNvbnRlbnQgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9zdCA9IFBvc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBfMSA9IHJlcXVpcmUoXCIuXCIpO1xuY29uc3QgX18xID0gcmVxdWlyZShcIi4uXCIpO1xuY29uc3QgYXBpXzEgPSByZXF1aXJlKFwiLi4vYXBpXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGNvbG9yX3BpY2tlcl8xID0gcmVxdWlyZShcIkB2dmF0YXNoaS9jb2xvci1waWNrZXJcIik7XG5jbGFzcyBQb3N0aW5nRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNJblRocmVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICAgICBfXzEuZXZlbnRCdXMuJG9uKF9fMS5FdmVudHMuUG9zdHNJbnNlcnRlZCwgdGhpcy5vblBvc3RzSW5zZXJ0ZWQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKC9cXC9yZXNcXC8oXFxkKykvaSk7XG4gICAgICAgIGNvbnN0IGlzSW5UaHJlYWQgPSAhIW1hdGNoO1xuICAgICAgICBjb25zdCB0aHJlYWRJZCA9IGlzSW5UaHJlYWQgPyArbWF0Y2hbMV0gOiAwO1xuICAgICAgICB0aGlzLmlzSW5UaHJlYWQgPSBpc0luVGhyZWFkO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzO1xuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyB2dWVfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGVsOiBmb3JtLFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBcbjxmb3JtIGNsYXNzPVwiY29udGVudF9fcG9zdGluZy1mb3JtIHBvc3RpbmctZm9ybVwiIGlkPVwicG9zdGluZy1mb3JtXCJcbiAgdi1iaW5kOmNsYXNzPVwieyAncG9zdGluZy1mb3JtLS1mbG9hdGluZyc6IHBvc2l0aW9uID09ICdmbG9hdCcgfVwiXG4gIHYtb246c3VibWl0LnByZXZlbnQ9XCJvblN1Ym1pdCgpXCIgdi1zaG93PVwiIWhpZGRlblwiXG4gIHJlZj1cImZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyXCIgcmVmPVwiaGVhZGVyXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3RpdGxlXCI+e3tcbiAgICAgIHRocmVhZElkID8gJ1JlcGx5IHRvIHRocmVhZCAjJyArIHRocmVhZElkIDogJ0NyZWF0ZSB0aHJlYWQnXG4gICAgfX08L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9faGVhZGVyLWJ1dHRvbnNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19yZXNldFwiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cInJlc2V0RmllbGRzKClcIiB0aXRsZT1cIkNsZWFyIGZvcm1cIj48L3NwYW4+XG5cbiAgICAgIDxzcGFuIGNsYXNzPVwicG9zdGluZy1mb3JtX19mbG9hdFwiXG4gICAgICAgIHYtaWY9XCJwb3NpdGlvbiAhPT0gJ2Zsb2F0JyAmJiBtb2RlICE9PSAnbW9iaWxlJ1wiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cIm1ha2VGbG9hdGluZygpXCIgdGl0bGU9XCJGbG9hdGluZyBmb3JtXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcmVzdG9yZVwiXG4gICAgICAgIHYtaWY9XCJwb3NpdGlvbiA9PT0gJ2Zsb2F0JyAmJiBtb2RlICE9PSAnbW9iaWxlJ1wiXG4gICAgICAgIHYtb246Y2xpY2suc3RvcD1cIm1vdmVUb0JvdHRvbSgpXCIgdGl0bGU9XCJNb3ZlIGZvcm0gdG8gYm90dG9tXCI+PC9zcGFuPlxuXG4gICAgICA8c3BhbiBjbGFzcz1cInBvc3RpbmctZm9ybV9fY2xvc2VcIlxuICAgICAgICB2LW9uOmNsaWNrLnN0b3A9XCJvbkNsb3NlQ2xpY2soKVwiIHRpdGxlPVwiQ2xvc2UgZm9ybVwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX2NvbnRlbnRcIj5cbiAgICA8eC1maWxlLXByZXZpZXcgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXdcIlxuICAgICAgdi1iaW5kOmNsYXNzPVwie1xuICAgICAgICAncG9zdGluZy1mb3JtX19wcmV2aWV3LS1yaWdodCc6IG1vZGUgPT0gJ2RlZmF1bHQnXG4gICAgICAgICAgJiYgc2V0dGluZ3MucHJldmlld0FsaWduID09ICdyaWdodCcsXG4gICAgICB9XCJcbiAgICAgIHYtYmluZDpmaWxlPVwiZmlsZVwiXG4gICAgICB2LW9uOmNsaWNrPVwic2hvd0ZpbGVEaWFsb2coKVwiXG4gICAgICB2LW9uOmRyb3A9XCJvbkZpbGVEcm9wKCRldmVudClcIlxuICAgICAgdi1zaG93PVwibW9kZSA9PSAnZGVmYXVsdCcgfHwgZmlsZVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3ByZXZpZXctcmVtb3ZlXCJcbiAgICAgICAgdi1pZj1cImZpbGVcIiB2LW9uOmNsaWNrLnN0b3A9XCJmaWxlID0gbnVsbFwiPjwvc3Bhbj5cbiAgICA8L3gtZmlsZS1wcmV2aWV3PlxuXG4gICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fbWFpblwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fcm93XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19zdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLnN1YmplY3RcIlxuICAgICAgICAgIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICB2LW9uOmNoYW5nZT1cIm9uU3ViamVjdENoYW5nZSgpXCIgLz5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImlucHV0IHBvc3RpbmctZm9ybV9fbmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgdi1tb2RlbD1cImZpZWxkcy5uYW1lXCJcbiAgICAgICAgICB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjpjaGFuZ2U9XCJvbk5hbWVDaGFuZ2UoKVwiIC8+XG5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicG9zdGluZy1mb3JtX19hdHRhY2htZW50XCIgdi1zaG93PVwibW9kZSA9PSAnbW9iaWxlJ1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwicG9zdGluZy1mb3JtX19hdHRhY2htZW50LWlucHV0XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZHMuZmlsZVwiIHYtYmluZDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIHYtb246Y2hhbmdlPVwib25GaWxlQ2hhbmdlKCRldmVudC50YXJnZXQuZmlsZXMpXCJcbiAgICAgICAgICAgIHJlZj1cImZpbGVcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fc3VibWl0XCJcbiAgICAgICAgICB2LWlmPVwibW9kZSA9PSAnZGVmYXVsdCdcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlJlcGx5PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInBvc3RpbmctZm9ybV9fbWFya3VwLXJvdyBtYXJrdXBcIlxuICAgICAgICB2LXNob3c9XCIobW9kZSA9PT0gJ21vYmlsZScpICYmIHNldHRpbmdzLnNob3dNYXJrdXBNb2JpbGVcbiAgICAgICAgICB8fCAobW9kZSAhPT0gJ21vYmlsZScpICYmIHNldHRpbmdzLnNob3dNYXJrdXBcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ2InKVwiPlxuICAgICAgICAgIDxzdHJvbmc+Yjwvc3Ryb25nPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnaScpXCI+XG4gICAgICAgICAgPGVtPmk8L2VtPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgndScpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJrdXBfX3VuZGVybGluZVwiPnU8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHBvc3RpbmctZm9ybV9fbWFya3VwLWJ1dHRvblwiXG4gICAgICAgICAgdi1vbjpjbGljay5wcmV2ZW50PVwiaW5zZXJ0TWFya3VwKCdzJylcIj5cbiAgICAgICAgICA8ZGVsPnM8L2RlbD5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3N1YicpXCI+XG4gICAgICAgICAgPHN1Yj5zdWI8L3N1Yj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3N1cCcpXCI+XG4gICAgICAgICAgPHN1cD5zdXA8L3N1cD5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICBAY2xpY2sucHJldmVudD1cInRvZ2dsZUNvbG9yUG9wdXBcIj5cbiAgICAgICAgICBjb2xvclxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItcGlja2VyLXBvcHVwXCIgdi1pZj1cImNvbG9yUG9wdXBWaXNpYmxlXCI+XG4gICAgICAgICAgPHgtY29sb3ItcGlja2VyIHJlZj1cImNvbG9yLXBpY2tlclwiIGNsYXNzPVwiY29sb3ItcGlja2VyLXBvcHVwX19waWNrZXJcIlxuICAgICAgICAgICAgOndpZHRoPVwiMTI4XCIgOmhlaWdodD1cIjEyOFwiIDpzaG93TGFiZWxzPVwiZmFsc2VcIj5cbiAgICAgICAgICA8L3gtY29sb3ItcGlja2VyPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLXBpY2tlci1wb3B1cF9fYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cIm9uQ29sb3JQb3B1cE9rXCI+T2s8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cIm9uQ29sb3JQb3B1cENhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydE1hcmt1cCgnY29kZScpXCI+XG4gICAgICAgICAgPGNvZGU+Y29kZTwvY29kZT5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gcG9zdGluZy1mb3JtX19tYXJrdXAtYnV0dG9uXCJcbiAgICAgICAgICB2LW9uOmNsaWNrLnByZXZlbnQ9XCJpbnNlcnRNYXJrdXAoJ3Nwb2lsZXInKVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFya3VwX19zcG9pbGVyIG1hcmt1cF9fc3BvaWxlci0tdmlzaWJsZVwiPnNwPC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBwb3N0aW5nLWZvcm1fX21hcmt1cC1idXR0b25cIlxuICAgICAgICAgIHYtb246Y2xpY2sucHJldmVudD1cImluc2VydFF1b3RlKClcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcmt1cF9fcXVvdGVcIj4mZ3Q7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicG9zdGluZy1mb3JtX19yb3dcIj5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiaW5wdXQgcG9zdGluZy1mb3JtX19tZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiZmllbGRzLm1lc3NhZ2VcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgdi1vbjprZXlkb3duPVwib25NZXNzYWdlS2V5RG93bigkZXZlbnQpXCJcbiAgICAgICAgICB2LW9uOnBhc3RlPVwib25NZXNzYWdlUGFzdGUoJGV2ZW50KVwiXG4gICAgICAgICAgcmVmPVwibWVzc2FnZVwiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWlmPVwic3RhdHVzXCIgY2xhc3M9XCJwb3N0aW5nLWZvcm1fX3N0YXR1c1wiPnt7IHN0YXR1cyB9fTwvZGl2PlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInBvc3RpbmctZm9ybV9fc3VibWl0ICBwb3N0aW5nLWZvcm1fX3N1Ym1pdC0tbW9iaWxlXCJcbiAgICAgICAgdi1pZj1cIm1vZGUgPT0gJ21vYmlsZSdcIiB2LWJpbmQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlJlcGx5PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9mb3JtPmAsXG4gICAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogY29tcG9uZW50LnNldHRpbmdzLmZvcm0uc2F2ZUZvcm1TdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgY29tcG9uZW50LnNldHRpbmdzLmZvcm0uZmxvYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2Zsb2F0JyA6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBtb2RlOiAnbW9iaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3JQb3B1cFZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgICAgICB0aHJlYWRJZCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRocmVhZElkO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQuc2V0dGluZ3MuZm9ybTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNhdmVTdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIExvYWQgc2F2ZWQgc3ViamVjdC5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ViamVjdCA9IGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLnN1YmplY3QnXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLnN1YmplY3QgPSBzdWJqZWN0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5zYXZlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBMb2FkIHNhdmVkIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBsb2NhbFN0b3JhZ2VbJ3Bvc3RpbmctZm9ybS5uYW1lJ107XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemUgPSB0aGlzLnVwZGF0ZU1vZGUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fcmVzaXplKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY29tcG9uZW50LnNldHRpbmdzLmZvcm0uZmxvYXRQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmNoZWNrQm91bmRzKHBvc2l0aW9uKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3llZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVzaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9yZXNpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgJ3gtZmlsZS1wcmV2aWV3JzogXzEuRmlsZVByZXZpZXcsXG4gICAgICAgICAgICAgICAgJ3gtY29sb3ItcGlja2VyJzogY29sb3JfcGlja2VyXzEuSFNWQ29sb3JQaWNrZXIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWl4aW5zOiBbXG4gICAgICAgICAgICAgICAgXzEuZHJhZ2dhYmxlLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgICAgICBnZXREcmFnSGFuZGxlKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5oZWFkZXI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBnZXREcmFnZ2FibGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5mb3JtO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0UG9zaXRpb24oY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnYWJsZSA9IHRoaXMuZ2V0RHJhZ2dhYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlLnN0eWxlLmxlZnQgPSBgJHtjb29yZHMueH1weGA7XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZS5zdHlsZS50b3AgPSBgJHtjb29yZHMueX1weGA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmZvcm0uZmxvYXRQb3NpdGlvbiA9IGNvb3JkcztcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIF9fMS5TZXR0aW5nc01hbmFnZXIuc2F2ZShjb21wb25lbnQuc2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25EcmFnZ2FibGVSZXNpemUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5jaGVja0JvdW5kcyh0aGlzLmdldFBvc2l0aW9uKCkpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc2V0RmllbGRzKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnNhdmVTdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5zdWJqZWN0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5zYXZlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubmFtZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMuZmlsZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFrZUZsb2F0aW5nKCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQubWFrZUZsb2F0aW5nKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb3ZlVG9Cb3R0b20oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNob3dGaWxlRGlhbG9nKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4kcmVmcy5maWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZpbGUuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlTW9kZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlID0gd2luZG93LmlubmVyV2lkdGggPCA2MDAgPyAnbW9iaWxlJyA6ICdkZWZhdWx0JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ21vYmlsZScgJiYgdGhpcy5wb3NpdGlvbiA9PT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNsb3NlQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC51cGRhdGVSZXBseUJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25TdWJqZWN0Q2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHN1YmplY3QuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVsncG9zdGluZy1mb3JtLnN1YmplY3QnXSA9IHRoaXMuZmllbGRzLnN1YmplY3Q7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbk5hbWVDaGFuZ2UoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlWydwb3N0aW5nLWZvcm0ubmFtZSddID0gdGhpcy5maWVsZHMubmFtZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uRmlsZURyb3AoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dCAmJiB0ZXh0Lm1hdGNoKC9odHRwcz86XFwvXFwvWy1hLXpBLVowLTlAOiUuX1xcK34jPV17Mix9XFwuW2Etel17Mix9XFxiWy1hLXpBLVowLTlAOiVfXFwrLn4jPyZcXC89XSovKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHRleHQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlICE9PSBYTUxIdHRwUmVxdWVzdC5ET05FKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPCA0MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IHhoci5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEVycm9yOiAke3hoci5zdGF0dXN9ICR7eGhyLnN0YXR1c1RleHR9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25GaWxlQ2hhbmdlKGZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGZpbGVzLmxlbmd0aCA/IGZpbGVzWzBdIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uTWVzc2FnZUtleURvd24oZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdWJtaXQgZm9ybSBvbiBDdHJsK0VudGVyIGluIHRoZSBtZXNzYWdlIGZpZWxkLlxuICAgICAgICAgICAgICAgICAgICBpZiAoKGUua2V5Q29kZSA9PSAxMCB8fCBlLmtleUNvZGUgPT0gMTMpICYmIGUuY3RybEtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbk1lc3NhZ2VQYXN0ZShlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3RlIGZpbGUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBlLmNsaXBib2FyZERhdGEgfHwgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZGF0YS5pdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXRlbS50eXBlLnN0YXJ0c1dpdGgoJ2F1ZGlvLycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXRlbS50eXBlLnN0YXJ0c1dpdGgoJ3ZpZGVvLycpO1xuICAgICAgICAgICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSA9IGl0ZW0uZ2V0QXNGaWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRvZ2dsZUNvbG9yUG9wdXAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQb3B1cFZpc2libGUgPSAhdGhpcy5jb2xvclBvcHVwVmlzaWJsZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29sb3JQb3B1cE9rKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yUG9wdXBWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0TWFya3VwKCdjb2xvcicsIHRoaXMuJHJlZnNbJ2NvbG9yLXBpY2tlciddLmhleCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbG9yUG9wdXBDYW5jZWwoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JQb3B1cFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGluc2VydE1hcmt1cCh0YWcsIGF0dHJpYnV0ZSA9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUVsID0gdGhpcy4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kIC0gbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5maWVsZHMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlbmluZ1RhZyA9IGBbJHt0YWd9JHthdHRyaWJ1dGUgPyAnPScgKyBhdHRyaWJ1dGUgOiAnJ31dYDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2luZ1RhZyA9IGBbLyR7dGFnfV1gO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCB8fCBjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5pbnNlcnRUYWdzSW5QYWlycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGV4dCBpcyBzZWxlY3RlZCwgd3JhcCBpdCBpbiBhIHRhZyBwYWlyLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmdUYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmJlZ2luLCBzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3Vic3RyaW5nKHNlbGVjdGlvbi5lbmQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIG9wZW5pbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb24uZW5kICsgb3BlbmluZ1RhZy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmxhc3RJbmRleE9mKG9wZW5pbmdUYWcsIHNlbGVjdGlvbi5iZWdpbikgPiBtZXNzYWdlLmxhc3RJbmRleE9mKGNsb3NpbmdUYWcsIHNlbGVjdGlvbi5iZWdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcy5tZXNzYWdlID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zaW5nVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnN1YnN0cmluZyhzZWxlY3Rpb24uZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VsZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvbi5iZWdpbiArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmVuZCArIGNsb3NpbmdUYWcubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmJlZ2luKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ1RhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHNlbGVjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb24uYmVnaW4gKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5lbmQgKyBvcGVuaW5nVGFnLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5zZXJ0UXVvdGUoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHRoaXMuJHJlZnMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuZmllbGRzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJlZm9yZSA9IG1lc3NhZ2Uuc3Vic3RyaW5nKDAsIHNlbGVjdGlvbi5iZWdpbik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyID0gbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpbmVCZWZvcmUgPSBiZWZvcmUubGVuZ3RoICYmICFiZWZvcmUuZW5kc1dpdGgoJ1xcbicpID8gJ1xcbicgOiAnJztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUFmdGVyID0gIWFmdGVyLmxlbmd0aCB8fCAhYWZ0ZXIuc3RhcnRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZVRleHQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGUgPSBgJHtuZXdMaW5lQmVmb3JlfT4gJHtxdW90ZVRleHR9JHtuZXdMaW5lQWZ0ZXJ9YDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMubWVzc2FnZSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZm9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1b3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbi5iZWdpbiArIHF1b3RlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgcmVwbGFjZXMgdG8gdGhlIG1lc3NhZ2UuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBsYWNlcyA9IGNvbXBvbmVudC5zZXR0aW5ncy5mb3JtLnJlcGxhY2VzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlcGxhY2VzLnJlZHVjZSgobWVzc2FnZSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoaXRlbS5wYXR0ZXJuLCAnZ20nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKHJlZ2V4cCwgaXRlbS5yZXBsYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuZmllbGRzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhdGlvbiA9IHlpZWxkIGFwaV8xLkFwaS5jcmVhdGVQb3N0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiB0aHJlYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogdGhpcy5maWVsZHMuc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5maWVsZHMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogdGhpcy5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzc1BlcmNlbnQgPSBNYXRoLmNlaWwoZS5sb2FkZWQgLyBlLnRvdGFsICogMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBgVXBsb2FkaW5nLi4uICR7cHJvZ3Jlc3NQZXJjZW50fSVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICE9PSAnZmxvYXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgZm9ybSB0byB0aGUgaW5pdGlhbCBsb2NhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJblRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIERFIHRocmVhZCB1cGRhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZXIgPSB1dGlsc18xLkRPTS5xcygnLmRlLXRoci11cGRhdGVyLWxpbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIuY2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gdGhyZWFkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gYEVycm9yOiAke2V9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuc2V0dGluZ3MuZm9ybS5zY3JvbGxCb3R0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTY3JvbGwgdG8gdGhlIGxhc3QgcG9zdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSB1dGlsc18xLkRPTS5xcygnLnBvc3Q6bnRoLWxhc3Qtb2YtdHlwZSgxKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzaG93QnV0dG9uID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0tc2hvdycpO1xuICAgICAgICBpZiAoc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb0JvdHRvbSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHV0aWxzXzEuRE9NLnFzKCcubGF5b3V0X19jb250ZW50Jyk7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlZmxpbmsnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2bSA9IHRoaXMudmlld01vZGVsO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbCA9IHZtLiRyZWZzLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBiZWdpbjogbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IG1lc3NhZ2VFbC5zZWxlY3Rpb25FbmQsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbWVzc2FnZUVsLnNlbGVjdGlvbkVuZCAtIG1lc3NhZ2VFbC5zZWxlY3Rpb25TdGFydCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS5maWVsZHMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBiZWZvcmUgPSBtZXNzYWdlLnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYmVnaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFmdGVyID0gbWVzc2FnZS5zdWJzdHJpbmcoc2VsZWN0aW9uLmVuZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TGluZUJlZm9yZSA9IGJlZm9yZS5sZW5ndGggJiYgIWJlZm9yZS5lbmRzV2l0aCgnXFxuJykgPyAnXFxuJyA6ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xpbmVBZnRlciA9ICFhZnRlci5sZW5ndGggfHwgIWFmdGVyLnN0YXJ0c1dpdGgoJ1xcbicpID8gJ1xcbicgOiAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVmbGluaycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RRdW90ZUluZGV4ID0gbWVzc2FnZS5sYXN0SW5kZXhPZignPj4nLCBzZWxlY3Rpb24uYmVnaW4pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlU2FtZVBvc3QgPSBsYXN0UXVvdGVJbmRleCAhPT0gLTFcbiAgICAgICAgICAgICAgICAgICAgJiYgbWVzc2FnZS5sYXN0SW5kZXhPZihgPj4ke2lkfWAsIHNlbGVjdGlvbi5iZWdpbikgPj0gbGFzdFF1b3RlSW5kZXg7XG4gICAgICAgICAgICAgICAgLy8gSWYgcXVvdGluZyB0aGUgc2FtZSBwb3N0IGFnYWluLCBub3QgaW5zZXJ0IGlkLlxuICAgICAgICAgICAgICAgIGxldCBxdW90ZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChxdW90ZVNhbWVQb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIHF1b3RlID0gcXVvdGVUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IGAke25ld0xpbmVCZWZvcmV9PiAke3F1b3RlVGV4dH0ke25ld0xpbmVBZnRlcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUgPSBxdW90ZVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7bmV3TGluZUJlZm9yZX0+PiR7aWR9XFxuPiAke3F1b3RlVGV4dH0ke25ld0xpbmVBZnRlcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGAke25ld0xpbmVCZWZvcmV9Pj4ke2lkfSR7bmV3TGluZUFmdGVyfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEluc2VydCByZXBseSBtYXJrdXAuXG4gICAgICAgICAgICAgICAgdm0uZmllbGRzLm1lc3NhZ2UgPSBbXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZSxcbiAgICAgICAgICAgICAgICAgICAgcXVvdGUsXG4gICAgICAgICAgICAgICAgICAgIGFmdGVyLFxuICAgICAgICAgICAgICAgIF0uam9pbignJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNJblRocmVhZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocXVvdGVTYW1lUG9zdCAmJiAhcXVvdGVUZXh0ICYmICF2bS5oaWRkZW4gJiYgdm0ucG9zaXRpb24gIT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5wb3NpdGlvbiAhPT0gJ2Zsb2F0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgZm9ybSB0byB0aGUgcG9zdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5wb3N0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Qb3N0KHBvc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWwuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uLmJlZ2luICsgcXVvdGUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Qb3N0c0luc2VydGVkKHBvc3RzLCBpbml0aWFsKSB7XG4gICAgICAgIGlmICghaW5pdGlhbCAmJiB0aGlzLnNldHRpbmdzLmNvbW1vbi5zY3JvbGxUb05ld1Bvc3RzKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxpbmdFbCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzSGVpZ2h0ID0gcG9zdHMucmVkdWNlKCh0b3RhbCwgcG9zdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShwb3N0LCAnJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFyZ2luID0gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXRvcCcpKVxuICAgICAgICAgICAgICAgICAgICArIHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgcG9zdC5vZmZzZXRIZWlnaHQgKyBtYXJnaW47XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIC8vIElmIGluIHRoZSBib3R0b20gYXJlYS5cbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbU9mZnNldCA9IHNjcm9sbGluZ0VsLnNjcm9sbEhlaWdodCAtIHNjcm9sbGluZ0VsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbUFyZWEgPSBwb3N0c0hlaWdodCArIDEuMjUgKiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICBpZiAoYm90dG9tT2Zmc2V0IDwgYm90dG9tQXJlYSkge1xuICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0aGUgbGFzdCBwb3N0LlxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdDpudGgtbGFzdC1vZi10eXBlKDEpJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmNvbW1vbi5tb3ZlUG9zdEhlYWRlclJlZmxpbmtJY29uVG9ERSkge1xuICAgICAgICAgICAgcG9zdHMuZm9yRWFjaChwb3N0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIHJlcGx5IGljb24gYWZ0ZXIgREUgaGlkZSBpY29uLlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGx5SWNvbiA9IHV0aWxzXzEuRE9NLnFzKCcucG9zdC1oZWFkZXJfX3JlZmxpbmstd3JhcHBlciA+IC5wb3N0LWhlYWRlcl9fcmVmbGluay1pY29uJywgcG9zdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVIaWRlID0gdXRpbHNfMS5ET00ucXMoJy5kZS1idG4taGlkZScsIHBvc3QpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBseUljb24gJiYgZGVIaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGx5SWNvbi5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShkZUhpZGUsIHJlcGx5SWNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlUmVwbHlCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybS1zaG93Jyk7XG4gICAgICAgIGlmICghc2hvd0J1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZpZXdNb2RlbC5oaWRkZW4gfHwgdGhpcy52aWV3TW9kZWwucG9zaXRpb24gIT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2hvd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnZpZXdNb2RlbC5oaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLnZpZXdNb2RlbC5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgbWFrZUZsb2F0aW5nKCkge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgdm0ucG9zaXRpb24gPSAnZmxvYXQnO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IF9fMS5TZXR0aW5nc01hbmFnZXIubG9hZCgpO1xuICAgICAgICBzZXR0aW5ncy5mb3JtLmZsb2F0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5zZXR0aW5ncy5mb3JtLmZsb2F0UG9zaXRpb247XG4gICAgICAgIHZtLnNldFBvc2l0aW9uKHZtLmNoZWNrQm91bmRzKHBvc2l0aW9uKSk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVwbHlCdXR0b24oKTtcbiAgICB9XG4gICAgbW92ZVRvUG9zdChwb3N0LCBmb2N1cyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybScpO1xuICAgICAgICBpZiAoZm9ybSkge1xuICAgICAgICAgICAgcG9zdC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShmb3JtLCBwb3N0Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgY29uc3Qgdm0gPSB0aGlzLnZpZXdNb2RlbDtcbiAgICAgICAgdm0ucG9zaXRpb24gPSAncG9zdCc7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgIHNldHRpbmdzLmZvcm0uZmxvYXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIGNvbnN0IHNob3dCdXR0b24gPSB1dGlsc18xLkRPTS5xaWQoJ3Bvc3RpbmctZm9ybS1zaG93Jyk7XG4gICAgICAgIGlmIChzaG93QnV0dG9uKSB7XG4gICAgICAgICAgICBzaG93QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlUmVwbHlCdXR0b24oKTtcbiAgICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlVG9Cb3R0b20oZm9jdXMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBmb3JtID0gdXRpbHNfMS5ET00ucWlkKCdwb3N0aW5nLWZvcm0nKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IHV0aWxzXzEuRE9NLnFpZCgncG9zdGluZy1mb3JtLXdyYXBwZXInKTtcbiAgICAgICAgaWYgKGZvcm0gJiYgd3JhcHBlcikge1xuICAgICAgICAgICAgd3JhcHBlci5pbnNlcnRCZWZvcmUoZm9ybSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIGNvbnN0IHZtID0gdGhpcy52aWV3TW9kZWw7XG4gICAgICAgIHZtLnBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gX18xLlNldHRpbmdzTWFuYWdlci5sb2FkKCk7XG4gICAgICAgIHNldHRpbmdzLmZvcm0uZmxvYXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICBfXzEuU2V0dGluZ3NNYW5hZ2VyLnNhdmUodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVwbHlCdXR0b24oKTtcbiAgICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB2bS4kcmVmcy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUG9zdGluZ0Zvcm0gPSBQb3N0aW5nRm9ybTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdnVlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInZ1ZVwiKSk7XG5jb25zdCBzZXR0aW5nc19mb3JtX3Z1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9jb21wb25lbnRzL3NldHRpbmdzLWZvcm0udnVlXCIpKTtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIF9fMS5ldmVudEJ1cy4kb24oX18xLkV2ZW50cy5SZWFkeSwgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCBzZXR0aW5nc0Zvcm0gPSB1dGlsc18xLkRPTS5xaWQoJ3NldHRpbmdzX2Zvcm0nKTtcbiAgICAgICAgaWYgKCFzZXR0aW5nc0Zvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpZXdNb2RlbCA9IG5ldyB2dWVfMS5kZWZhdWx0KHtcbiAgICAgICAgICAgIGVsOiAnI3NldHRpbmdzX2Zvcm0nLFxuICAgICAgICAgICAgcmVuZGVyOiBoID0+IGgoc2V0dGluZ3NfZm9ybV92dWVfMS5kZWZhdWx0KSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5TZXR0aW5ncyA9IFNldHRpbmdzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBfXzEgPSByZXF1aXJlKFwiLi5cIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgU3R5bGVTd2l0Y2gge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnN0eWxlcyA9IHt9O1xuICAgICAgICAvLyBQYXJzZSBzZWxlY3RhYmxlIHN0eWxlcyBmcm9tIDxoZWFkPlxuICAgICAgICBjb25zdCBzdHlsZXMgPSB1dGlsc18xLkRPTS5xc2EoJ2xpbmtbdGl0bGVdJyk7XG4gICAgICAgIHN0eWxlcy5mb3JFYWNoKHN0eWxlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gc3R5bGUudGl0bGU7XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBzdHlsZS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVzW3RpdGxlXSA9IHVybDtcbiAgICAgICAgICAgIGlmICghc3R5bGUuaGFzQXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEdldCBzZWxlY3RlZCBzdHlsZVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9zdHlsZSA9IHV0aWxzXzEuQ29va2llLmdldCgndGlueWliX3N0eWxlJywgJ1N5bnRod2F2ZScpO1xuICAgICAgICB0aGlzLnNldFN0eWxlKHNlbGVjdGVkX3N0eWxlKTtcbiAgICAgICAgX18xLmV2ZW50QnVzLiRvbihfXzEuRXZlbnRzLlJlYWR5LCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlX3N3aXRjaGVyID0gdXRpbHNfMS5ET00ucWlkKCdzdHlsZS1zd2l0Y2hlcicpO1xuICAgICAgICBpZiAoc3R5bGVfc3dpdGNoZXIpIHtcbiAgICAgICAgICAgIC8vIFBvcHVsYXRlIHN0eWxlIHN3aXRjaGVyIHdpZGdldFxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gT2JqZWN0LmtleXModGhpcy5zdHlsZXMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHN0eWxlc1tpXTtcbiAgICAgICAgICAgICAgICBzdHlsZV9zd2l0Y2hlci5pbm5lckhUTUwgKz0gYDxvcHRpb24gY2xhc3M9XCJzdHlsZS1zd2l0Y2hlcl9fb3B0aW9uXCIgdmFsdWU9XCIke3RpdGxlfVwiPiR7dGl0bGV9PC9vcHRpb24+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCBzdHlsZSBjaGFuZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgIHN0eWxlX3N3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0eWxlKHN0eWxlX3N3aXRjaGVyLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX3N0eWxlID0gdXRpbHNfMS5Db29raWUuZ2V0KCd0aW55aWJfc3R5bGUnLCAnU3ludGh3YXZlJyk7XG4gICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIucHVzaCh7ICd0aGVtZSc6IHNlbGVjdGVkX3N0eWxlIH0pO1xuICAgIH1cbiAgICBzZXRTdHlsZShzdHlsZSkge1xuICAgICAgICBjb25zdCBoZWFkID0gdXRpbHNfMS5ET00ucXMoJ2hlYWQnKTtcbiAgICAgICAgLy8gSWYgbm8gPGhlYWQ+IGVsZW1lbnQsIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKCFoZWFkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRfc3R5bGUgPSB1dGlsc18xLkRPTS5xcygnbGlua1tkYXRhLXNlbGVjdGVkXScpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRfc3R5bGUpIHtcbiAgICAgICAgICAgIC8vIElmIHN0eWxlIGFscmVhZHkgc2VsZWN0ZWQsIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZF9zdHlsZS50aXRsZSA9PT0gc3R5bGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZW1vdmUgcHJldmlvdXNseSBzZWxlY3RlZCBzdHlsZSBmcm9tIDxoZWFkPlxuICAgICAgICAgICAgc2VsZWN0ZWRfc3R5bGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIGN1cnJlbnRseSBzZWxlY3RlZCBzdHlsZSB0byA8aGVhZD5cbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5zdHlsZXNbc3R5bGVdO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBsaW5rLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuICAgICAgICBsaW5rLnR5cGUgPSBcInRleHQvY3NzXCI7XG4gICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAvLyBTYXZlIHNlbGVjdGVkIHN0eWxlXG4gICAgICAgIGNvbnN0IGV4cGlyYXRpb25fZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGV4cGlyYXRpb25fZGF0ZS5zZXRUaW1lKGV4cGlyYXRpb25fZGF0ZS5nZXRUaW1lKCkgKyAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgdXRpbHNfMS5Db29raWUuc2V0KCd0aW55aWJfc3R5bGUnLCBzdHlsZSwgZXhwaXJhdGlvbl9kYXRlKTtcbiAgICB9XG59XG5leHBvcnRzLlN0eWxlU3dpdGNoID0gU3R5bGVTd2l0Y2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHZ1ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJ2dWVcIikpO1xuY29uc3QgZXZlbnRCdXMgPSBuZXcgdnVlXzEuZGVmYXVsdCgpO1xuZXhwb3J0cy5ldmVudEJ1cyA9IGV2ZW50QnVzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRXZlbnRzO1xuKGZ1bmN0aW9uIChFdmVudHMpIHtcbiAgICBFdmVudHNbXCJSZWFkeVwiXSA9IFwicmVhZHlcIjtcbiAgICBFdmVudHNbXCJQb3N0c0luc2VydGVkXCJdID0gXCJwb3N0c19pbnNlcnRlZFwiO1xuICAgIEV2ZW50c1tcIlBvc3RDcmVhdGVkXCJdID0gXCJwb3N0X2NyZWF0ZWRcIjtcbiAgICBFdmVudHNbXCJJbnNlcnRNYXJrdXBcIl0gPSBcImluc2VydF9tYXJrdXBcIjtcbn0pKEV2ZW50cyA9IGV4cG9ydHMuRXZlbnRzIHx8IChleHBvcnRzLkV2ZW50cyA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBhcGlfMSA9IHJlcXVpcmUoXCIuL2FwaVwiKTtcbmV4cG9ydHMuQXBpID0gYXBpXzEuQXBpO1xudmFyIGV2ZW50X2J1c18xID0gcmVxdWlyZShcIi4vZXZlbnQtYnVzXCIpO1xuZXhwb3J0cy5ldmVudEJ1cyA9IGV2ZW50X2J1c18xLmV2ZW50QnVzO1xudmFyIGV2ZW50c18xID0gcmVxdWlyZShcIi4vZXZlbnRzXCIpO1xuZXhwb3J0cy5FdmVudHMgPSBldmVudHNfMS5FdmVudHM7XG52YXIgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuZXhwb3J0cy5TZXR0aW5nc01hbmFnZXIgPSBzZXR0aW5nc18xLlNldHRpbmdzTWFuYWdlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc2V0dGluZ3NLZXkgPSAnc2V0dGluZ3MnO1xuY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICBsYXlvdXQ6ICdsZWZ0JyxcbiAgICAgICAgc2hvd1Bvc3RIZWFkZXJSZWZsaW5rSWNvbjogdHJ1ZSxcbiAgICAgICAgbW92ZVBvc3RIZWFkZXJSZWZsaW5rSWNvblRvREU6IGZhbHNlLFxuICAgICAgICBzaG93UG9zdFJlZmxpbmtJY29uOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsVG9OZXdQb3N0czogdHJ1ZSxcbiAgICAgICAgc21vb3RoU2Nyb2xsOiB0cnVlLFxuICAgICAgICBzaG93VmlkZW9PdmVybGF5OiBmYWxzZSxcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICBwcmV2aWV3QWxpZ246ICdyaWdodCcsXG4gICAgICAgIHNjcm9sbEJvdHRvbTogdHJ1ZSxcbiAgICAgICAgc2hvd01hcmt1cDogdHJ1ZSxcbiAgICAgICAgc2hvd01hcmt1cE1vYmlsZTogZmFsc2UsXG4gICAgICAgIGluc2VydFRhZ3NJblBhaXJzOiB0cnVlLFxuICAgICAgICBzYXZlRm9ybVN0YXRlOiBmYWxzZSxcbiAgICAgICAgc2F2ZVN1YmplY3Q6IGZhbHNlLFxuICAgICAgICBzYXZlTmFtZTogdHJ1ZSxcbiAgICAgICAgZmxvYXQ6IGZhbHNlLFxuICAgICAgICBmbG9hdFBvc2l0aW9uOiB7IHg6IDEwMCwgeTogMTAwIH0sXG4gICAgICAgIHJlcGxhY2VzOiBbXSxcbiAgICB9LFxuICAgIHRpbWU6IHtcbiAgICAgICAgbG9jYWxlOiAnZGVmYXVsdCcsXG4gICAgICAgIGxvY2FsZUN1c3RvbTogJycsXG4gICAgICAgIHpvbmU6ICdkZWZhdWx0JyxcbiAgICAgICAgem9uZUZpeGVkOiAwLFxuICAgICAgICBmb3JtYXQ6ICdkZWZhdWx0JyxcbiAgICAgICAgZm9ybWF0Q3VzdG9tOiAnJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gKGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGl0ZW0pKTtcbn1cbmZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGFyZ2V0KTtcbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSAmJiBpc09iamVjdChzb3VyY2UpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob3V0cHV0LCB7IFtrZXldOiBzb3VyY2Vba2V5XSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG91dHB1dCwgeyBba2V5XTogc291cmNlW2tleV0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuY2xhc3MgU2V0dGluZ3NNYW5hZ2VyIHtcbiAgICBzdGF0aWMgbG9hZCgpIHtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNldHRpbmdzS2V5KSk7XG4gICAgICAgIHJldHVybiBtZXJnZShkZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgICB9XG4gICAgc3RhdGljIHNhdmUoc2V0dGluZ3MpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2V0dGluZ3NLZXksIGRhdGEpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2V0dGluZ3NNYW5hZ2VyID0gU2V0dGluZ3NNYW5hZ2VyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBDb29raWUge1xuICAgIHN0YXRpYyBnZXQobmFtZSwgX2RlZmF1bHQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZV9zdHIgPSBgOyAke2RvY3VtZW50LmNvb2tpZX1gO1xuICAgICAgICBjb25zdCBjb29raWVfcGFydHMgPSBjb29raWVfc3RyLnNwbGl0KGA7ICR7bmFtZX09YCk7XG4gICAgICAgIGlmIChjb29raWVfcGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZV9lbmMgPSBjb29raWVfcGFydHMucG9wKCkuc3BsaXQoJzsnKS5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZV9lbmMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfZGVmYXVsdDtcbiAgICB9XG4gICAgc3RhdGljIHNldChuYW1lLCB2YWx1ZSwgZXhwaXJhdGlvbikge1xuICAgICAgICBjb25zdCB2YWx1ZV9lbmMgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICBjb25zdCBleHBpcmF0aW9uX3N0ciA9IGV4cGlyYXRpb24udG9VVENTdHJpbmcoKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZV9lbmN9OyBwYXRoPS87IGV4cGlyZXM9JHtleHBpcmF0aW9uX3N0cn1gO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29va2llID0gQ29va2llO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jbGFzcyBET00ge1xuICAgIHN0YXRpYyBxaWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICB9XG4gICAgc3RhdGljIHFzKHNlbGVjdG9yLCBjb250ZXh0ID0gbnVsbCkge1xuICAgICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBkb2N1bWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGV4dC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9XG4gICAgc3RhdGljIHFzYShzZWxlY3RvciwgY29udGV4dCA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZG9jdW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudExpc3QgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudExpc3QpO1xuICAgIH1cbn1cbmV4cG9ydHMuRE9NID0gRE9NO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29va2llXzEgPSByZXF1aXJlKFwiLi9jb29raWVcIik7XG5leHBvcnRzLkNvb2tpZSA9IGNvb2tpZV8xLkNvb2tpZTtcbnZhciBkb21fMSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcbmV4cG9ydHMuRE9NID0gZG9tXzEuRE9NO1xudmFyIHRpbWVfMSA9IHJlcXVpcmUoXCIuL3RpbWVcIik7XG5leHBvcnRzLlRpbWUgPSB0aW1lXzEuVGltZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgVGltZSB7XG4gICAgc3RhdGljIGZvcm1hdCh0aW1lLCBzZXR0aW5ncykge1xuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS5sb2NhbGUgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICB0aW1lID0gdGltZS5zZXRMb2NhbGUoc2V0dGluZ3MudGltZS5sb2NhbGVDdXN0b20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXR0aW5ncy50aW1lLnpvbmUgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHNldHRpbmdzLnRpbWUuem9uZUZpeGVkO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0U3RyID0gJ1VUQycgKyAob2Zmc2V0ID49IDAgPyAnKycgOiAnJykgKyBvZmZzZXQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRpbWUgPSB0aW1lLnNldFpvbmUob2Zmc2V0U3RyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3MudGltZS5mb3JtYXQgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdChzZXR0aW5ncy50aW1lLmZvcm1hdEN1c3RvbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGltZS50b0Zvcm1hdCgnZC5MTC55eXl5IEhIOm1tOnNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlRpbWUgPSBUaW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBsdXhvbjsiLCJtb2R1bGUuZXhwb3J0cyA9IFZ1ZTsiXSwic291cmNlUm9vdCI6IiJ9