/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonts_slkscr_slkscre_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/slkscr/slkscre.ttf */ "./src/fonts/slkscr/slkscre.ttf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_slkscr_slkscre_ttf__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 0;\n  margin: 0;\n}\n\n#root {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: \"slkscr\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACG,UAAA;EACA,SAAA;AACH;;AAEA;EACG,WAAA;EACA,aAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AAAH;;AAGA;EACG,qBAAA;EACA,4CAAA;AAAH","sourcesContent":["body{\r\n   padding:0;\r\n   margin:0;\r\n}\r\n\r\n#root {\r\n   width: 100%;\r\n   height: 100vh;\r\n\r\n   display:flex;\r\n   justify-content:center;\r\n   align-items:center;\r\n}\r\n\r\n@font-face {\r\n   font-family: 'slkscr';\r\n   src: url('fonts/slkscr/slkscre.ttf');\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/images/bridge.png":
/*!*******************************!*\
  !*** ./src/images/bridge.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/a355110ae7ecdcc3c495ab1888462184-bridge.png");

/***/ }),

/***/ "./src/images/enemies/ballon.png":
/*!***************************************!*\
  !*** ./src/images/enemies/ballon.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/7156877ae5d3275eab1d1a03b3036dbf-ballon.png");

/***/ }),

/***/ "./src/images/enemies/fighterHelicopter1.png":
/*!***************************************************!*\
  !*** ./src/images/enemies/fighterHelicopter1.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/efba3f8cf0895e39519f11757a7224d3-fighterHelicopter1.png");

/***/ }),

/***/ "./src/images/enemies/fighterHelicopter2.png":
/*!***************************************************!*\
  !*** ./src/images/enemies/fighterHelicopter2.png ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/95aa30d90754015514f5726170838acd-fighterHelicopter2.png");

/***/ }),

/***/ "./src/images/enemies/fighterPlane.png":
/*!*********************************************!*\
  !*** ./src/images/enemies/fighterPlane.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/864482f64d7425d9fef858dba4803673-fighterPlane.png");

/***/ }),

/***/ "./src/images/enemies/helicopter1.png":
/*!********************************************!*\
  !*** ./src/images/enemies/helicopter1.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/106c2f115aa73d0cdc06477fd10cf443-helicopter1.png");

/***/ }),

/***/ "./src/images/enemies/helicopter2.png":
/*!********************************************!*\
  !*** ./src/images/enemies/helicopter2.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/2f1881073dac1707625e9baa6c2963f1-helicopter2.png");

/***/ }),

/***/ "./src/images/enemies/ship.png":
/*!*************************************!*\
  !*** ./src/images/enemies/ship.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/77c18a9f107f3025303a64dfb5e8e8b6-ship.png");

/***/ }),

/***/ "./src/images/enemies/tank1.png":
/*!**************************************!*\
  !*** ./src/images/enemies/tank1.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/52b6c3a65320aabb6349328d74de3fc6-tank1.png");

/***/ }),

/***/ "./src/images/enemies/tank2.png":
/*!**************************************!*\
  !*** ./src/images/enemies/tank2.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/1e6c9c15480d7eb67c689e64ba5f8f4d-tank2.png");

/***/ }),

/***/ "./src/images/enemies/tankBullet/tankBullet0.png":
/*!*******************************************************!*\
  !*** ./src/images/enemies/tankBullet/tankBullet0.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/6686d9d1feb8b7678da5c23b775cdc72-tankBullet0.png");

/***/ }),

/***/ "./src/images/enemies/tankBullet/tankBullet1.png":
/*!*******************************************************!*\
  !*** ./src/images/enemies/tankBullet/tankBullet1.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/63eeea7e6d18efc6c335e3ec584088d4-tankBullet1.png");

/***/ }),

/***/ "./src/images/enemies/tankBullet/tankBullet2.png":
/*!*******************************************************!*\
  !*** ./src/images/enemies/tankBullet/tankBullet2.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/f0a8e349e179b0a9a41562f7750a0866-tankBullet2.png");

/***/ }),

/***/ "./src/images/enemies/tankBullet/tankBullet3.png":
/*!*******************************************************!*\
  !*** ./src/images/enemies/tankBullet/tankBullet3.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/e4ab5704b4b3ea3acf3cd273fef4aaf2-tankBullet3.png");

/***/ }),

/***/ "./src/images/enemies/tankBullet/tankBullet4.png":
/*!*******************************************************!*\
  !*** ./src/images/enemies/tankBullet/tankBullet4.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/77c83312205cd200f233b13fc5ae6cc8-tankBullet4.png");

/***/ }),

/***/ "./src/images/enemies/tankBullet/tankBullet5.png":
/*!*******************************************************!*\
  !*** ./src/images/enemies/tankBullet/tankBullet5.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/9cdd47b60f6e4f0937b23ef6ed757178-tankBullet5.png");

/***/ }),

/***/ "./src/images/enemies/tankBullet/tankBullet6.png":
/*!*******************************************************!*\
  !*** ./src/images/enemies/tankBullet/tankBullet6.png ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/976cfef2516357c1091ea7ad2c323f3c-tankBullet6.png");

/***/ }),

/***/ "./src/images/fuel.png":
/*!*****************************!*\
  !*** ./src/images/fuel.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/4e0563b5894188453fb9ff5ab2a69e2f-fuel.png");

/***/ }),

/***/ "./src/images/gasStatusBar.png":
/*!*************************************!*\
  !*** ./src/images/gasStatusBar.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/c7a4b1ab5b02b39d8c65f8e52a026ed1-gasStatusBar.png");

/***/ }),

/***/ "./src/images/levels/level1.png":
/*!**************************************!*\
  !*** ./src/images/levels/level1.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/c6c71535ef238c47af70a1314e5e16fc-level1.png");

/***/ }),

/***/ "./src/images/levels/level2.png":
/*!**************************************!*\
  !*** ./src/images/levels/level2.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/a56e63a727ed435b7b0d09f940065942-level2.png");

/***/ }),

/***/ "./src/images/plane/plane-crash.png":
/*!******************************************!*\
  !*** ./src/images/plane/plane-crash.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/8d7c90423d6887ef94945962d2994c36-plane-crash.png");

/***/ }),

/***/ "./src/images/plane/plane-left.png":
/*!*****************************************!*\
  !*** ./src/images/plane/plane-left.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/15ebc884ca638449c6f7bceea7769230-plane-left.png");

/***/ }),

/***/ "./src/images/plane/plane-level-pos.png":
/*!**********************************************!*\
  !*** ./src/images/plane/plane-level-pos.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/ee311af1445da2476f8cb5b6a7548e37-plane-level-pos.png");

/***/ }),

/***/ "./src/images/plane/plane-right.png":
/*!******************************************!*\
  !*** ./src/images/plane/plane-right.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/d1e0b371532e3e9f38d831bc4bbef02b-plane-right.png");

/***/ }),

/***/ "./src/images/plane/plane-straight.png":
/*!*********************************************!*\
  !*** ./src/images/plane/plane-straight.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/9870d92f394ec74bb9665b19a8b05f62-plane-straight.png");

/***/ }),

/***/ "./src/images/wtc.png":
/*!****************************!*\
  !*** ./src/images/wtc.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/212c200ff294906a8cd26d90e5d21427-wtc.png");

/***/ }),

/***/ "./src/audio/Health.wav":
/*!******************************!*\
  !*** ./src/audio/Health.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/3a69d06ab883c1c3eaf309451e707b01-Health.wav");

/***/ }),

/***/ "./src/audio/NoFuel.wav":
/*!******************************!*\
  !*** ./src/audio/NoFuel.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/e07af0e57ad7570d2512157553d1fe7c-NoFuel.wav");

/***/ }),

/***/ "./src/audio/crush.wav":
/*!*****************************!*\
  !*** ./src/audio/crush.wav ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/a494c5faac8ac608b2dd744a0fc6d275-crush.wav");

/***/ }),

/***/ "./src/audio/enemyCrush.wav":
/*!**********************************!*\
  !*** ./src/audio/enemyCrush.wav ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/a46641155fbf37be3ae62cad6a6e1928-enemyCrush.wav");

/***/ }),

/***/ "./src/audio/flyNoise.wav":
/*!********************************!*\
  !*** ./src/audio/flyNoise.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/ef3914272428a8269eeb848ee423bd77-flyNoise.wav");

/***/ }),

/***/ "./src/audio/flyStart.wav":
/*!********************************!*\
  !*** ./src/audio/flyStart.wav ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/02795b1c02b48cfcfa02986ca0cbda01-flyStart.wav");

/***/ }),

/***/ "./src/audio/helicopterStrike.wav":
/*!****************************************!*\
  !*** ./src/audio/helicopterStrike.wav ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/52feab03f0709c93df588194dfef3abf-helicopterStrike.wav");

/***/ }),

/***/ "./src/audio/strike.wav":
/*!******************************!*\
  !*** ./src/audio/strike.wav ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/a9dd9d4f92599f30773fab2d52db6ba9-strike.wav");

/***/ }),

/***/ "./src/audio/tankStrike.wav":
/*!**********************************!*\
  !*** ./src/audio/tankStrike.wav ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "audio/1d052b84cce8c117346cfa604c5b91fb-tankStrike.wav");

/***/ }),

/***/ "./src/fonts/slkscr/slkscre.ttf":
/*!**************************************!*\
  !*** ./src/fonts/slkscr/slkscre.ttf ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fonts/07ff5c3a24dfbd43d4b23ef445bf2c40-slkscre.ttf");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/Main.ts":
/*!********************************!*\
  !*** ./src/components/Main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainInstance": () => (/* binding */ mainInstance),
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _modules_constants_Levels_level1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/constants/Levels/level1 */ "./src/components/modules/constants/Levels/level1.ts");
/* harmony import */ var _modules_mapElements_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mapElements/Player */ "./src/components/modules/mapElements/Player.ts");
/* harmony import */ var _utils_TwoJS_Camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/TwoJS/Camera */ "./src/components/utils/TwoJS/Camera.ts");
/* harmony import */ var _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/TwoJS/Renderer */ "./src/components/utils/TwoJS/Renderer.ts");
/* harmony import */ var _utils_TwoJS_Scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/TwoJS/Scene */ "./src/components/utils/TwoJS/Scene.ts");
/* harmony import */ var _modules_constants_mapInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");
/* harmony import */ var _modules_loadAllImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/loadAllImages */ "./src/components/modules/loadAllImages.ts");
/* harmony import */ var _modules_mapElements_enemies_Helicopter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mapElements/enemies/Helicopter */ "./src/components/modules/mapElements/enemies/Helicopter.ts");
/* harmony import */ var _modules_mapElements_enemies_Ship__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/mapElements/enemies/Ship */ "./src/components/modules/mapElements/enemies/Ship.ts");
/* harmony import */ var _modules_mapElements_enemies_FighterPlane__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/mapElements/enemies/FighterPlane */ "./src/components/modules/mapElements/enemies/FighterPlane.ts");
/* harmony import */ var _modules_mapElements_Bridge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/mapElements/Bridge */ "./src/components/modules/mapElements/Bridge.ts");
/* harmony import */ var _modules_mapElements_ScoreBoard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/mapElements/ScoreBoard */ "./src/components/modules/mapElements/ScoreBoard.ts");
/* harmony import */ var _modules_mapElements_Block__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/mapElements/Block */ "./src/components/modules/mapElements/Block.ts");
/* harmony import */ var _modules_mapElements_Fuel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/mapElements/Fuel */ "./src/components/modules/mapElements/Fuel.ts");
/* harmony import */ var _modules_mapElements_enemies_Ballon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/mapElements/enemies/Ballon */ "./src/components/modules/mapElements/enemies/Ballon.ts");
/* harmony import */ var _modules_constants_Levels_level2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/constants/Levels/level2 */ "./src/components/modules/constants/Levels/level2.ts");
/* harmony import */ var _modules_mapElements_enemies_tank_Tank__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/mapElements/enemies/tank/Tank */ "./src/components/modules/mapElements/enemies/tank/Tank.ts");
/* harmony import */ var _modules_LoadAllAudio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/LoadAllAudio */ "./src/components/modules/LoadAllAudio.ts");
/* harmony import */ var _modules_GameConfig__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/GameConfig */ "./src/components/modules/GameConfig.ts");
/* harmony import */ var _modules_mapElements_BlackFloor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/mapElements/BlackFloor */ "./src/components/modules/mapElements/BlackFloor.ts");
/* harmony import */ var _modules_mapElements_enemies_WTC__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/mapElements/enemies/WTC */ "./src/components/modules/mapElements/enemies/WTC.ts");





















let mainInstance;
class Main {
    constructor() {
        this.scene = new _utils_TwoJS_Scene__WEBPACK_IMPORTED_MODULE_4__.default();
        this.camera = new _utils_TwoJS_Camera__WEBPACK_IMPORTED_MODULE_2__.default();
        this.renderer = new _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.Renderer(_modules_constants_mapInfo__WEBPACK_IMPORTED_MODULE_5__.default.width, _modules_constants_mapInfo__WEBPACK_IMPORTED_MODULE_5__.default.height, this.scene, this.camera);
        this.enemies = [];
        this.blocks = [];
        this.bridges = [];
        this.fuels = [];
        this.startBool = false;
        // levelArr = [level1, level2, level1, level2, level1, level2,]
        this.levelArr = [_modules_constants_Levels_level1__WEBPACK_IMPORTED_MODULE_0__.default, _modules_constants_Levels_level2__WEBPACK_IMPORTED_MODULE_15__.default,];
        mainInstance = this;
        document.getElementById("root")?.appendChild(this.renderer.html_dom);
        this.init();
    }
    async init() {
        await (0,_modules_loadAllImages__WEBPACK_IMPORTED_MODULE_6__.loadAllImages)();
        await _modules_LoadAllAudio__WEBPACK_IMPORTED_MODULE_17__.default.getAudios();
        _modules_GameConfig__WEBPACK_IMPORTED_MODULE_18__.default.moveBool = false;
        this.scoreBoard = new _modules_mapElements_ScoreBoard__WEBPACK_IMPORTED_MODULE_11__.ScoreBoard();
        this.scene.add(this.scoreBoard);
        console.log("lul");
        // console.log(renderer_functions);
        await this.paintMap();
        this.startGame();
    }
    async paintMap() {
        this.scene.mesh_array = [];
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.removeIf(el => true);
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions_after.removeIf(el => true);
        // renderer_functions.push(() => {
        //    console.log("kurwa");
        //    let levelNumber = this.scoreBoard.levelPos + 10
        //    if (levelNumber > this.levelArr.length) {
        //       this.levelArr.push(levelNumber % 2 == 0 ? level2 : level1);
        //    }
        // })
        this.enemies = [];
        this.blocks = [];
        this.bridges = [];
        this.fuels = [];
        this.scene.add(this.scoreBoard);
        this.scoreBoard.addToRender();
        // ------------------
        // player
        // ------------------
        this.player = new _modules_mapElements_Player__WEBPACK_IMPORTED_MODULE_1__.default();
        this.scene.add(this.player);
        // ------------------
        // blocks
        // ------------------
        const startPos = { x: 0, y: 0.6 * _modules_constants_mapInfo__WEBPACK_IMPORTED_MODULE_5__.default.height };
        let boostHeight = 0;
        (this.levelArr).forEach((level, ind, arr) => {
            let levelBefore = arr[Math.max(0, ind - 1)];
            let imageBefore = _modules_loadAllImages__WEBPACK_IMPORTED_MODULE_6__.allImages.levels[levelBefore.blocks.name];
            if (ind != 0) {
                boostHeight += (_modules_constants_mapInfo__WEBPACK_IMPORTED_MODULE_5__.default.width / (imageBefore.width / imageBefore.height));
            }
            let boostY = startPos.y - boostHeight;
            const { name, position, startPos: startPosPlayer } = level.blocks;
            let image = new _modules_mapElements_Block__WEBPACK_IMPORTED_MODULE_12__.default(name, position.x + startPos.x, position.y + boostY);
            this.blocks.push(image);
            if (ind < this.scoreBoard.levelPos - 1) {
                return;
            }
            this.scene.add(image);
            if (ind == this.scoreBoard.levelPos - 1) {
                this.camera.y = startPosPlayer.y + boostY - _modules_constants_mapInfo__WEBPACK_IMPORTED_MODULE_5__.default.height * 0.6;
                this.player.map_info.y = startPosPlayer.y + boostY;
                this.player.map_info.x = startPosPlayer.x;
                this.scene.add(new _modules_mapElements_BlackFloor__WEBPACK_IMPORTED_MODULE_19__.default(boostY));
            }
            for (const other of level.other) {
                // ----------------
                // enemies
                // ----------------
                if (other.type == "helicopter") {
                    let batCopter = new _modules_mapElements_enemies_Helicopter__WEBPACK_IMPORTED_MODULE_7__.default(other.reversed, other.moveable, other.helType, { x: other.position.x, y: other.position.y + boostY });
                    this.scene.add(batCopter);
                    // console.log(this.scene);
                    this.enemies.push(batCopter);
                }
                else if (other.type == "tank") {
                    let startPos = {
                        x: other.startPos.x,
                        y: other.startPos.y + boostY
                    };
                    let endPos = {
                        x: other.endPos.x,
                        y: other.endPos.y + boostY
                    };
                    let shotPos = {
                        x: other.shotPos.x,
                        y: other.shotPos.y + boostY
                    };
                    let batTank = new _modules_mapElements_enemies_tank_Tank__WEBPACK_IMPORTED_MODULE_16__.default(other.tankType, other.reversed, startPos, endPos, shotPos);
                    this.scene.add(batTank);
                    this.enemies.push(batTank);
                }
                else if (other.type == "ship") {
                    let batShip = new _modules_mapElements_enemies_Ship__WEBPACK_IMPORTED_MODULE_8__.default(other.reversed, other.moveable, { x: other.position.x, y: other.position.y + boostY });
                    this.scene.add(batShip);
                    // console.log(this.scene);
                    this.enemies.push(batShip);
                }
                else if (other.type == "fighterPlane") {
                    let batPlane = new _modules_mapElements_enemies_FighterPlane__WEBPACK_IMPORTED_MODULE_9__.default(other.reversed, { x: other.position.x, y: other.position.y + boostY });
                    this.scene.add(batPlane);
                    // console.log(this.scene);
                    this.enemies.push(batPlane);
                }
                else if (other.type == "ballon") {
                    let batBallon = new _modules_mapElements_enemies_Ballon__WEBPACK_IMPORTED_MODULE_14__.default(other.position.x, other.position.y + boostY, other.moveable, other.reversed);
                    this.scene.add(batBallon);
                    // console.log(this.scene);
                    this.enemies.push(batBallon);
                }
                else if (other.type == "wtc") {
                    let batWTC = new _modules_mapElements_enemies_WTC__WEBPACK_IMPORTED_MODULE_20__.default(other.position.x, other.position.y + boostY, other.moveable, other.reversed);
                    this.scene.add(batWTC);
                    this.enemies.push(batWTC);
                }
                // ----------------
                // Other
                // ----------------
                else if (other.type == "bridge" && ind != this.scoreBoard.levelPos - 1) {
                    const { x, y } = other.position;
                    let batBridge = new _modules_mapElements_Bridge__WEBPACK_IMPORTED_MODULE_10__.default(x, y + boostY, other.width, other.height, other.tank);
                    this.scene.add(batBridge);
                    // this.bridges.push(batBridge)
                    this.enemies.push(batBridge);
                }
                else if (other.type == "fuel") {
                    const { x, y } = other.position;
                    let batFuel = new _modules_mapElements_Fuel__WEBPACK_IMPORTED_MODULE_13__.default(x, y + boostY);
                    this.fuels.push(batFuel);
                    this.scene.add(batFuel);
                }
            }
        });
        if (this.startBool) {
            await this.cameraRoll();
            let keyHandler = () => {
                this.player.init();
                _modules_GameConfig__WEBPACK_IMPORTED_MODULE_18__.default.moveBool = true;
                window.removeEventListener("keydown", keyHandler);
            };
            window.addEventListener("keydown", keyHandler);
        }
    }
    async cameraRoll() {
        this.camera.y = this.player.map_info.y + 80;
        await new Promise(async (res) => {
            let func = () => {
                this.camera.y -= 5;
                if (this.camera.y <= this.player.map_info.y - _modules_constants_mapInfo__WEBPACK_IMPORTED_MODULE_5__.default.height * 0.6) {
                    this.camera.y = this.player.map_info.y - _modules_constants_mapInfo__WEBPACK_IMPORTED_MODULE_5__.default.height * 0.6;
                    _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.removeIf(el => el == func);
                    res(true);
                }
            };
            _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.push(func);
        });
    }
    startGame() {
        this.scene.remove(this.player);
        let func = () => {
            this.camera.y -= 3;
        };
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.push(func);
        const keyHandler = () => {
            _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.removeIf(el => el == func);
            window.removeEventListener("keydown", keyHandler);
            this.startBool = true;
            // GameConfig.moveBool = true;
            this.scene.add(this.player);
            this.paintMap();
        };
        window.addEventListener("keydown", keyHandler);
    }
}
// ------------------------------------------------------------------------------------------------


/***/ }),

/***/ "./src/components/modules/GameConfig.ts":
/*!**********************************************!*\
  !*** ./src/components/modules/GameConfig.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    moveBool: true,
});


/***/ }),

/***/ "./src/components/modules/KeyboardManager.ts":
/*!***************************************************!*\
  !*** ./src/components/modules/KeyboardManager.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Keyboard_manager": () => (/* binding */ Keyboard_manager),
/* harmony export */   "Keys": () => (/* binding */ Keys)
/* harmony export */ });
class Keyboard_manager {
    constructor() {
        window.addEventListener("keydown", this.onkeydown_e);
        window.addEventListener("keyup", this.onkeyup_e);
    }
    onkeydown_e(e) {
        if (e.code in Keys)
            e.preventDefault();
        Keys[e.code] = true;
    }
    onkeyup_e(e) {
        if (e.code in Keys)
            e.preventDefault();
        Keys[e.code] = false;
    }
}
new Keyboard_manager();
const Keys = {
    KeyA: false,
    KeyD: false,
    KeyW: false,
    KeyS: false,
    KeyQ: false,
    KeyE: false,
    KeyZ: false,
    KeyY: false,
    KeyL: false,
    Numpad8: false,
    Numpad5: false,
    Numpad4: false,
    Numpad6: false,
    Numpad7: false,
    Numpad9: false,
    ControlLeft: false,
    Space: false,
};


/***/ }),

/***/ "./src/components/modules/LoadAllAudio.ts":
/*!************************************************!*\
  !*** ./src/components/modules/LoadAllAudio.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadAllAudio)
/* harmony export */ });
/* harmony import */ var _utils_audioLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/audioLoader */ "./src/components/utils/audioLoader.ts");
/* harmony import */ var _audio_crush_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../audio/crush.wav */ "./src/audio/crush.wav");
/* harmony import */ var _audio_enemyCrush_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../audio/enemyCrush.wav */ "./src/audio/enemyCrush.wav");
/* harmony import */ var _audio_NoFuel_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../audio/NoFuel.wav */ "./src/audio/NoFuel.wav");
/* harmony import */ var _audio_flyNoise_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../audio/flyNoise.wav */ "./src/audio/flyNoise.wav");
/* harmony import */ var _audio_flyStart_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../audio/flyStart.wav */ "./src/audio/flyStart.wav");
/* harmony import */ var _audio_Health_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../audio/Health.wav */ "./src/audio/Health.wav");
/* harmony import */ var _audio_strike_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../audio/strike.wav */ "./src/audio/strike.wav");
/* harmony import */ var _audio_tankStrike_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../audio/tankStrike.wav */ "./src/audio/tankStrike.wav");
/* harmony import */ var _audio_helicopterStrike_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../audio/helicopterStrike.wav */ "./src/audio/helicopterStrike.wav");










class LoadAllAudio {
    static async getAudios() {
        LoadAllAudio.audios = {
            crush: await (0,_utils_audioLoader__WEBPACK_IMPORTED_MODULE_0__.default)(_audio_crush_wav__WEBPACK_IMPORTED_MODULE_1__.default),
            enemyCrush: await (0,_utils_audioLoader__WEBPACK_IMPORTED_MODULE_0__.default)(_audio_enemyCrush_wav__WEBPACK_IMPORTED_MODULE_2__.default),
            noFuel: await (0,_utils_audioLoader__WEBPACK_IMPORTED_MODULE_0__.default)(_audio_NoFuel_wav__WEBPACK_IMPORTED_MODULE_3__.default),
            flyNoise: await (0,_utils_audioLoader__WEBPACK_IMPORTED_MODULE_0__.default)(_audio_flyNoise_wav__WEBPACK_IMPORTED_MODULE_4__.default),
            flyStart: await (0,_utils_audioLoader__WEBPACK_IMPORTED_MODULE_0__.default)(_audio_flyStart_wav__WEBPACK_IMPORTED_MODULE_5__.default),
            Health: await (0,_utils_audioLoader__WEBPACK_IMPORTED_MODULE_0__.default)(_audio_Health_wav__WEBPACK_IMPORTED_MODULE_6__.default),
            strike: await (0,_utils_audioLoader__WEBPACK_IMPORTED_MODULE_0__.default)(_audio_strike_wav__WEBPACK_IMPORTED_MODULE_7__.default),
            tankStrike: await (0,_utils_audioLoader__WEBPACK_IMPORTED_MODULE_0__.default)(_audio_tankStrike_wav__WEBPACK_IMPORTED_MODULE_8__.default),
            helicopterStrike: await (0,_utils_audioLoader__WEBPACK_IMPORTED_MODULE_0__.default)(_audio_helicopterStrike_wav__WEBPACK_IMPORTED_MODULE_9__.default),
        };
    }
}


/***/ }),

/***/ "./src/components/modules/constants/Levels/level1.ts":
/*!***********************************************************!*\
  !*** ./src/components/modules/constants/Levels/level1.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mapInfo */ "./src/components/modules/constants/mapInfo.ts");
// :(block|enemy)[]

function getPos(x, y) {
    return { x: x * _mapInfo__WEBPACK_IMPORTED_MODULE_0__.default.width, y: y * _mapInfo__WEBPACK_IMPORTED_MODULE_0__.default.height };
}
let level1 = {
    blocks: {
        name: "level1",
        // position: getPos(0,0.6)
        position: getPos(0, 0),
        startPos: getPos(0.485, -0.05)
    },
    other: [
        {
            type: "bridge",
            position: getPos(0.4, -0.09),
            width: 0.2 * _mapInfo__WEBPACK_IMPORTED_MODULE_0__.default.width,
            height: 0.085 * _mapInfo__WEBPACK_IMPORTED_MODULE_0__.default.height,
            tank: {
                startPos: getPos(0.8, -0.09).x,
                endPos: getPos(0.2, -0.09).x,
                reversed: true,
            }
        },
        // -------------------
        // helicopters
        // -------------------
        //non-shooting
        {
            type: "helicopter",
            reversed: false,
            position: getPos(0.5, -0.6),
            moveable: false,
            helType: "non-shooting"
        },
        {
            type: "helicopter",
            reversed: true,
            position: getPos(0.4, -3.7),
            moveable: true,
            helType: "non-shooting"
        },
        // shooting
        {
            type: "helicopter",
            reversed: true,
            position: getPos(0.64, -1),
            moveable: true,
            helType: "shooting"
        },
        {
            type: "helicopter",
            reversed: false,
            position: getPos(0.64, -3.9),
            moveable: true,
            helType: "shooting"
        },
        // ---------------
        // ship
        // ---------------
        {
            type: "ship",
            reversed: false,
            position: getPos(0.28, -0.8),
            moveable: true
        },
        {
            type: "ship",
            reversed: true,
            position: getPos(0.4, -2.8),
            moveable: true
        },
        //---------------
        // fighter plane
        //---------------
        {
            type: "fighterPlane",
            reversed: false,
            position: getPos(0, -0.3),
        },
        {
            type: "fighterPlane",
            reversed: false,
            position: getPos(0, -1.8),
        },
        {
            type: "fighterPlane",
            reversed: true,
            position: getPos(0.9, -4.3),
        },
        //---------------
        // ballon
        //---------------
        {
            type: "ballon",
            position: getPos(0.4, -2.5),
            moveable: true,
            reversed: false,
        },
        {
            type: "ballon",
            position: getPos(0.4, -2),
            moveable: false,
            reversed: false,
        },
        // {
        //    type:"ballon",
        //    position:getPos(0.4, -3.3),
        //    moveable:true,
        //    reversed:true,
        // },
        //---------------
        // fuels
        //---------------
        {
            type: "fuel",
            position: getPos(0.6, -2.3)
        },
        {
            type: "fuel",
            position: getPos(0.4, -1.8)
        },
        {
            type: "fuel",
            position: getPos(0.55, -3)
        },
        {
            type: "fuel",
            position: getPos(0.6, -4.7)
        },
        //---------------
        // tank
        //---------------
        {
            type: "tank",
            reversed: false,
            tankType: "normal",
            startPos: getPos(0.1, -1.43),
            endPos: getPos(0.225, -1.43),
            shotPos: getPos(0.5, -1.38),
        },
        {
            type: "tank",
            reversed: false,
            tankType: "normal",
            startPos: getPos(0.1, -2.6),
            endPos: getPos(0.225, -2.6),
            shotPos: getPos(0.7, -2.55),
        },
        {
            type: "tank",
            reversed: true,
            tankType: "normal",
            startPos: getPos(0.9, -3.5),
            endPos: getPos(0.74, -3.5),
            shotPos: getPos(0.65, -3.45),
        },
        {
            type: "wtc",
            position: getPos(0.4, -3.3),
            moveable: true,
            reversed: true,
        },
        {
            type: "wtc",
            position: getPos(0.45, -3.3),
            moveable: true,
            reversed: true,
        },
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (level1);


/***/ }),

/***/ "./src/components/modules/constants/Levels/level2.ts":
/*!***********************************************************!*\
  !*** ./src/components/modules/constants/Levels/level2.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mapInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mapInfo */ "./src/components/modules/constants/mapInfo.ts");
// :(block|enemy)[]

function getPos(x, y) {
    return { x: x * _mapInfo__WEBPACK_IMPORTED_MODULE_0__.default.width, y: y * _mapInfo__WEBPACK_IMPORTED_MODULE_0__.default.height };
}
let level2 = {
    blocks: {
        name: "level2",
        position: getPos(0, 0),
        // startPos: getPos(0.5, 0),
        startPos: getPos(0.485, -0.05)
    },
    other: [
        {
            type: "bridge",
            position: getPos(0.4, -0.09),
            width: 0.2 * _mapInfo__WEBPACK_IMPORTED_MODULE_0__.default.width,
            height: 0.085 * _mapInfo__WEBPACK_IMPORTED_MODULE_0__.default.height,
            tank: {
                startPos: getPos(0.8, -0.09).x,
                endPos: getPos(0.2, -0.09).x,
                reversed: true,
            }
        },
        // -------------------
        // helicopters
        // -------------------
        //non-shooting
        {
            type: "helicopter",
            reversed: false,
            position: getPos(0.5, -0.4),
            moveable: true,
            helType: "non-shooting"
        },
        // shooting
        {
            type: "helicopter",
            reversed: true,
            position: getPos(0.64, -0.7),
            moveable: true,
            helType: "shooting"
        },
        // ---------------
        // ship
        // ---------------
        {
            type: "ship",
            reversed: true,
            position: getPos(0.26, -1),
            moveable: true
        },
        {
            type: "ship",
            reversed: true,
            position: getPos(0.2, -4.3),
            moveable: true
        },
        {
            type: "ship",
            reversed: true,
            position: getPos(0.75, -4.3),
            moveable: true
        },
        {
            type: "ship",
            reversed: true,
            position: getPos(0.75, -5.03),
            moveable: true
        },
        //---------------
        // fighter plane
        //---------------
        {
            type: "fighterPlane",
            reversed: false,
            position: getPos(0, -1.5),
        },
        {
            type: "fighterPlane",
            reversed: false,
            position: getPos(0, -2.8),
        },
        //---------------
        // ballon
        //---------------
        {
            type: "ballon",
            position: getPos(0.6, -1.1),
            moveable: true,
            reversed: false,
        },
        {
            type: "ballon",
            position: getPos(0.5, -2.4),
            moveable: true,
            reversed: false,
        },
        {
            type: "ballon",
            position: getPos(0.7, -3.8),
            moveable: true,
            reversed: false,
        },
        //---------------
        // fuels
        //---------------
        {
            type: "fuel",
            position: getPos(0.7, -1.7)
        },
        {
            type: "fuel",
            position: getPos(0.3, -1.7)
        },
        {
            type: "fuel",
            position: getPos(0.6, -2.1)
        },
        {
            type: "fuel",
            position: getPos(0.3, -3.4),
        },
        //---------------
        // tank
        //---------------
        {
            type: "tank",
            reversed: false,
            tankType: "normal",
            startPos: getPos(0.1, -2.1),
            endPos: getPos(0.2, -2.1),
            shotPos: getPos(0.4, -2.05),
        },
        {
            type: "tank",
            reversed: true,
            tankType: "normal",
            startPos: getPos(0.9, -3.1),
            endPos: getPos(0.72, -3.1),
            shotPos: getPos(0.4, -3.03),
        },
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (level2);


/***/ }),

/***/ "./src/components/modules/constants/mapInfo.ts":
/*!*****************************************************!*\
  !*** ./src/components/modules/constants/mapInfo.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    width: 1000,
    height: 700
});


/***/ }),

/***/ "./src/components/modules/loadAllImages.ts":
/*!*************************************************!*\
  !*** ./src/components/modules/loadAllImages.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allImages": () => (/* binding */ allImages),
/* harmony export */   "loadAllImages": () => (/* binding */ loadAllImages)
/* harmony export */ });
/* harmony import */ var _utils_img_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/img_loader */ "./src/components/utils/img_loader.ts");
/* harmony import */ var _utils_imgReverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/imgReverse */ "./src/components/utils/imgReverse.ts");
/* harmony import */ var _images_plane_plane_straight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/plane/plane-straight.png */ "./src/images/plane/plane-straight.png");
/* harmony import */ var _images_plane_plane_right_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/plane/plane-right.png */ "./src/images/plane/plane-right.png");
/* harmony import */ var _images_plane_plane_left_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/plane/plane-left.png */ "./src/images/plane/plane-left.png");
/* harmony import */ var _images_plane_plane_crash_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/plane/plane-crash.png */ "./src/images/plane/plane-crash.png");
/* harmony import */ var _images_plane_plane_level_pos_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../images/plane/plane-level-pos.png */ "./src/images/plane/plane-level-pos.png");
/* harmony import */ var _images_enemies_helicopter1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/enemies/helicopter1.png */ "./src/images/enemies/helicopter1.png");
/* harmony import */ var _images_enemies_helicopter2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/enemies/helicopter2.png */ "./src/images/enemies/helicopter2.png");
/* harmony import */ var _images_enemies_fighterHelicopter1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../images/enemies/fighterHelicopter1.png */ "./src/images/enemies/fighterHelicopter1.png");
/* harmony import */ var _images_enemies_fighterHelicopter2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../images/enemies/fighterHelicopter2.png */ "./src/images/enemies/fighterHelicopter2.png");
/* harmony import */ var _images_enemies_tank1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../images/enemies/tank1.png */ "./src/images/enemies/tank1.png");
/* harmony import */ var _images_enemies_tank2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../images/enemies/tank2.png */ "./src/images/enemies/tank2.png");
/* harmony import */ var _images_enemies_tankBullet_tankBullet0_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../images/enemies/tankBullet/tankBullet0.png */ "./src/images/enemies/tankBullet/tankBullet0.png");
/* harmony import */ var _images_enemies_tankBullet_tankBullet1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../images/enemies/tankBullet/tankBullet1.png */ "./src/images/enemies/tankBullet/tankBullet1.png");
/* harmony import */ var _images_enemies_tankBullet_tankBullet2_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../images/enemies/tankBullet/tankBullet2.png */ "./src/images/enemies/tankBullet/tankBullet2.png");
/* harmony import */ var _images_enemies_tankBullet_tankBullet3_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../images/enemies/tankBullet/tankBullet3.png */ "./src/images/enemies/tankBullet/tankBullet3.png");
/* harmony import */ var _images_enemies_tankBullet_tankBullet4_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../images/enemies/tankBullet/tankBullet4.png */ "./src/images/enemies/tankBullet/tankBullet4.png");
/* harmony import */ var _images_enemies_tankBullet_tankBullet5_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../images/enemies/tankBullet/tankBullet5.png */ "./src/images/enemies/tankBullet/tankBullet5.png");
/* harmony import */ var _images_enemies_tankBullet_tankBullet6_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../images/enemies/tankBullet/tankBullet6.png */ "./src/images/enemies/tankBullet/tankBullet6.png");
/* harmony import */ var _images_enemies_ship_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../images/enemies/ship.png */ "./src/images/enemies/ship.png");
/* harmony import */ var _images_enemies_fighterPlane_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../images/enemies/fighterPlane.png */ "./src/images/enemies/fighterPlane.png");
/* harmony import */ var _images_enemies_ballon_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../images/enemies/ballon.png */ "./src/images/enemies/ballon.png");
/* harmony import */ var _images_fuel_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../images/fuel.png */ "./src/images/fuel.png");
/* harmony import */ var _images_bridge_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../images/bridge.png */ "./src/images/bridge.png");
/* harmony import */ var _images_gasStatusBar_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../images/gasStatusBar.png */ "./src/images/gasStatusBar.png");
/* harmony import */ var _images_wtc_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../images/wtc.png */ "./src/images/wtc.png");
/* harmony import */ var _images_levels_level1_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../images/levels/level1.png */ "./src/images/levels/level1.png");
/* harmony import */ var _images_levels_level2_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../images/levels/level2.png */ "./src/images/levels/level2.png");


// -------------
// plane
// -------------





// -------------
// helicopter
// -------------




// -------------
// tank
// -------------









// -------------
// enemies
// -------------







// -------------
// levels
// -------------


let allImages;
async function loadAllImages() {
    allImages = {
        plane: {
            straight: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_plane_plane_straight_png__WEBPACK_IMPORTED_MODULE_2__.default),
            left: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_plane_plane_left_png__WEBPACK_IMPORTED_MODULE_4__.default),
            right: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_plane_plane_right_png__WEBPACK_IMPORTED_MODULE_3__.default),
            crash: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_plane_plane_crash_png__WEBPACK_IMPORTED_MODULE_5__.default),
            levelPos: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_plane_plane_level_pos_png__WEBPACK_IMPORTED_MODULE_6__.default)
        },
        enemies: {
            helicopter: {
                normal: [
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_helicopter1_png__WEBPACK_IMPORTED_MODULE_7__.default),
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_helicopter2_png__WEBPACK_IMPORTED_MODULE_8__.default),
                ],
                reversed: [
                    (0,_utils_imgReverse__WEBPACK_IMPORTED_MODULE_1__.default)(await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_helicopter1_png__WEBPACK_IMPORTED_MODULE_7__.default)),
                    (0,_utils_imgReverse__WEBPACK_IMPORTED_MODULE_1__.default)(await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_helicopter2_png__WEBPACK_IMPORTED_MODULE_8__.default))
                ],
            },
            fighterHelicopter: {
                normal: [
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_fighterHelicopter1_png__WEBPACK_IMPORTED_MODULE_9__.default),
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_fighterHelicopter2_png__WEBPACK_IMPORTED_MODULE_10__.default),
                ],
                reversed: [
                    (0,_utils_imgReverse__WEBPACK_IMPORTED_MODULE_1__.default)(await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_fighterHelicopter1_png__WEBPACK_IMPORTED_MODULE_9__.default)),
                    (0,_utils_imgReverse__WEBPACK_IMPORTED_MODULE_1__.default)(await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_fighterHelicopter2_png__WEBPACK_IMPORTED_MODULE_10__.default))
                ],
            },
            ship: {
                normal: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_ship_png__WEBPACK_IMPORTED_MODULE_20__.default),
                reversed: (0,_utils_imgReverse__WEBPACK_IMPORTED_MODULE_1__.default)(await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_ship_png__WEBPACK_IMPORTED_MODULE_20__.default))
            },
            tank: {
                bullets: [
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_tankBullet_tankBullet0_png__WEBPACK_IMPORTED_MODULE_13__.default),
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_tankBullet_tankBullet1_png__WEBPACK_IMPORTED_MODULE_14__.default),
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_tankBullet_tankBullet2_png__WEBPACK_IMPORTED_MODULE_15__.default),
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_tankBullet_tankBullet3_png__WEBPACK_IMPORTED_MODULE_16__.default),
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_tankBullet_tankBullet4_png__WEBPACK_IMPORTED_MODULE_17__.default),
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_tankBullet_tankBullet5_png__WEBPACK_IMPORTED_MODULE_18__.default),
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_tankBullet_tankBullet6_png__WEBPACK_IMPORTED_MODULE_19__.default)
                ],
                normal: [
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_tank1_png__WEBPACK_IMPORTED_MODULE_11__.default),
                    await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_tank2_png__WEBPACK_IMPORTED_MODULE_12__.default),
                ],
                reversed: [
                    (0,_utils_imgReverse__WEBPACK_IMPORTED_MODULE_1__.default)(await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_tank1_png__WEBPACK_IMPORTED_MODULE_11__.default)),
                    (0,_utils_imgReverse__WEBPACK_IMPORTED_MODULE_1__.default)(await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_tank2_png__WEBPACK_IMPORTED_MODULE_12__.default))
                ],
            },
            fighterPlane: {
                normal: (0,_utils_imgReverse__WEBPACK_IMPORTED_MODULE_1__.default)(await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_fighterPlane_png__WEBPACK_IMPORTED_MODULE_21__.default)),
                reversed: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_fighterPlane_png__WEBPACK_IMPORTED_MODULE_21__.default),
            },
            ballon: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_enemies_ballon_png__WEBPACK_IMPORTED_MODULE_22__.default),
            wtc: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_wtc_png__WEBPACK_IMPORTED_MODULE_26__.default),
        },
        levels: {
            level1: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_levels_level1_png__WEBPACK_IMPORTED_MODULE_27__.default),
            level2: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_levels_level2_png__WEBPACK_IMPORTED_MODULE_28__.default)
        },
        fuel: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_fuel_png__WEBPACK_IMPORTED_MODULE_23__.default),
        bridge: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_bridge_png__WEBPACK_IMPORTED_MODULE_24__.default),
        gasStatusBar: await (0,_utils_img_loader__WEBPACK_IMPORTED_MODULE_0__.default)(_images_gasStatusBar_png__WEBPACK_IMPORTED_MODULE_25__.default),
    };
}


/***/ }),

/***/ "./src/components/modules/mapElements/BlackFloor.ts":
/*!**********************************************************!*\
  !*** ./src/components/modules/mapElements/BlackFloor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlackFloor)
/* harmony export */ });
/* harmony import */ var _constants_mapInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");

class BlackFloor {
    constructor(y) {
        this.map_info = {
            x: 0,
            y: y,
            z: 0,
            width: _constants_mapInfo__WEBPACK_IMPORTED_MODULE_0__.default.width,
            height: _constants_mapInfo__WEBPACK_IMPORTED_MODULE_0__.default.height + 30,
        };
    }
    action(ctx, camera) {
        const { x, y, width, height } = this.map_info;
        ctx.fillStyle = "black";
        ctx.rect(x - camera.x, y - camera.y, width, height);
        ctx.fill();
    }
}


/***/ }),

/***/ "./src/components/modules/mapElements/Block.ts":
/*!*****************************************************!*\
  !*** ./src/components/modules/mapElements/Block.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Block)
/* harmony export */ });
/* harmony import */ var _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/TwoJS/Image_Mesh */ "./src/components/utils/TwoJS/Image_Mesh.ts");
/* harmony import */ var _constants_mapInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loadAllImages */ "./src/components/modules/loadAllImages.ts");



class Block extends _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(name, x, y) {
        let image = _loadAllImages__WEBPACK_IMPORTED_MODULE_2__.allImages.levels[name];
        let height = _constants_mapInfo__WEBPACK_IMPORTED_MODULE_1__.default.width / (image.width / image.height);
        super(image, {
            dx: x,
            dy: y - height,
            dz: 0,
            dw: _constants_mapInfo__WEBPACK_IMPORTED_MODULE_1__.default.width,
            dh: height
        }, {});
    }
}


/***/ }),

/***/ "./src/components/modules/mapElements/Bridge.ts":
/*!******************************************************!*\
  !*** ./src/components/modules/mapElements/Bridge.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bridge)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TwoJS/Image_Mesh */ "./src/components/utils/TwoJS/Image_Mesh.ts");
/* harmony import */ var _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TwoJS/raycaster/colorRaycaster */ "./src/components/utils/TwoJS/raycaster/colorRaycaster.ts");
/* harmony import */ var _utils_useSleep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/useSleep */ "./src/components/utils/useSleep.ts");
/* harmony import */ var _constants_mapInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loadAllImages */ "./src/components/modules/loadAllImages.ts");
/* harmony import */ var _destroyAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./destroyAnimation */ "./src/components/modules/mapElements/destroyAnimation.ts");
/* harmony import */ var _enemies_tank_Tank__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enemies/tank/Tank */ "./src/components/modules/mapElements/enemies/tank/Tank.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








class Bridge extends _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(x, y, width, height, tankInfo) {
        const { bridge } = _loadAllImages__WEBPACK_IMPORTED_MODULE_5__.allImages;
        super(bridge, { dx: x, dy: y, dw: width, dh: height }, {});
        let startPos = { x: tankInfo.startPos, y: y + height / 2 - 25 };
        let endPos = { x: tankInfo.endPos, y: y + height / 2 - 25 };
        this.tank = new _enemies_tank_Tank__WEBPACK_IMPORTED_MODULE_7__.default("onBridge", tankInfo.reversed, startPos, endPos);
        this.tank.speed = 300;
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.add(this.tank);
        this.colorRaycaster = new _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_2__.default([this], [this.tank], _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_4__.default.width, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_4__.default.height);
        // document.getElementById("aa")?.appendChild(this.colorRaycaster.html_dom);
    }
    async destroy() {
        if (this.colorRaycaster.getCollision()) {
            this.tank.destroy();
        }
        else {
            this.tank.move = this.tank.moveAnimation;
        }
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.enemies.removeIf(el => el == this);
        for (let x = 0; x < 4; x++) {
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.renderer.backgroundColor = x % 2 == 0 ? "purple" : "blue";
            await (0,_utils_useSleep__WEBPACK_IMPORTED_MODULE_3__.default)(200);
        }
    }
}
__decorate([
    (0,_destroyAnimation__WEBPACK_IMPORTED_MODULE_6__.default)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Bridge.prototype, "destroy", null);


/***/ }),

/***/ "./src/components/modules/mapElements/Bullet.ts":
/*!******************************************************!*\
  !*** ./src/components/modules/mapElements/Bullet.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bullet)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TwoJS/raycaster/colorRaycaster */ "./src/components/utils/TwoJS/raycaster/colorRaycaster.ts");
/* harmony import */ var _utils_TwoJS_raycaster_squareSquareReycaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TwoJS/raycaster/squareSquareReycaster */ "./src/components/utils/TwoJS/raycaster/squareSquareReycaster.ts");
/* harmony import */ var _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/TwoJS/Renderer */ "./src/components/utils/TwoJS/Renderer.ts");
/* harmony import */ var _constants_mapInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");





class Bullet {
    constructor(x, y) {
        this.map_info = {
            width: 5,
            height: 10,
            x: x,
            y: y,
            z: 3,
        };
        this.move = this.move.bind(this);
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.push(this.move);
        this.colider = new _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_1__.default(_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.blocks, [this], _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_4__.default.width, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_4__.default.height);
    }
    action(ctx, camera) {
        const { width, height, x, y } = this.map_info;
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.rect(x - camera.x, y - camera.y, width, height);
        ctx.fill();
    }
    move() {
        this.map_info.x = _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.player.map_info.x + _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.player.map_info.width / 2 - this.map_info.width / 2;
        this.map_info.y -= 20;
        if (this.map_info.y - _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera.y < 0) {
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.remove(this);
            _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.removeIf(el => el == this.move);
        }
        else {
            this.checkCollision();
        }
    }
    checkCollision() {
        for (const enemy of [..._Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.enemies, ..._Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.fuels]) {
            if ((0,_utils_TwoJS_raycaster_squareSquareReycaster__WEBPACK_IMPORTED_MODULE_2__.default)(enemy.map_info, this.map_info)) {
                enemy.destroy();
                _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.remove(this);
                _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.removeIf(el => el == this.move);
                return;
            }
        }
        if (this.colider.getCollision()) {
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.remove(this);
            _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.removeIf(el => el == this.move);
        }
    }
}


/***/ }),

/***/ "./src/components/modules/mapElements/Enemy.ts":
/*!*****************************************************!*\
  !*** ./src/components/modules/mapElements/Enemy.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Enemy)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TwoJS/Image_Mesh */ "./src/components/utils/TwoJS/Image_Mesh.ts");
/* harmony import */ var _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TwoJS/Renderer */ "./src/components/utils/TwoJS/Renderer.ts");
/* harmony import */ var _destroyAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./destroyAnimation */ "./src/components/modules/mapElements/destroyAnimation.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GameConfig */ "./src/components/modules/GameConfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





class Enemy extends _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(image, mapData) {
        super(image, mapData, {});
        this.distanceToPlayer = 500;
        this.activate = this.activate.bind(this);
        this.move = this.move.bind(this);
        // this.after = this.after.bind(this)
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__.renderer_functions.push(this.activate);
    }
    fly() { }
    activate() {
        if (Math.abs(_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.player.map_info.y - this.map_info.y) < this.distanceToPlayer
            && this.movable
            && this.map_info.y - _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera.y < _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.renderer.html_dom.height - this.map_info.height
            && this.map_info.y - _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera.y > 0
            && _GameConfig__WEBPACK_IMPORTED_MODULE_4__.default.moveBool) {
            this.move();
        }
        if (!this.movable)
            _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__.renderer_functions.removeIf(el => el == this.activate);
    }
    destroy() {
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__.renderer_functions.removeIf(el => el == this.activate);
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__.renderer_functions.removeIf(el => el == this.fly);
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.score += 200;
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.enemies.removeIf(el => el == this);
    }
}
__decorate([
    (0,_destroyAnimation__WEBPACK_IMPORTED_MODULE_3__.default)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Enemy.prototype, "destroy", null);


/***/ }),

/***/ "./src/components/modules/mapElements/Fuel.ts":
/*!****************************************************!*\
  !*** ./src/components/modules/mapElements/Fuel.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Fuel)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TwoJS/Image_Mesh */ "./src/components/utils/TwoJS/Image_Mesh.ts");
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loadAllImages */ "./src/components/modules/loadAllImages.ts");
/* harmony import */ var _destroyAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./destroyAnimation */ "./src/components/modules/mapElements/destroyAnimation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




class Fuel extends _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(x, y) {
        let width = 40;
        let height = width / (_loadAllImages__WEBPACK_IMPORTED_MODULE_2__.allImages.fuel.width / _loadAllImages__WEBPACK_IMPORTED_MODULE_2__.allImages.fuel.height);
        super(_loadAllImages__WEBPACK_IMPORTED_MODULE_2__.allImages.fuel, { dx: x, dy: y, dw: width, dh: height }, {});
    }
    destroy() {
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.fuels.removeIf(el => el == this);
    }
}
__decorate([
    (0,_destroyAnimation__WEBPACK_IMPORTED_MODULE_3__.default)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Fuel.prototype, "destroy", null);


/***/ }),

/***/ "./src/components/modules/mapElements/Player.ts":
/*!******************************************************!*\
  !*** ./src/components/modules/mapElements/Player.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_inRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/inRange */ "./src/components/utils/inRange.ts");
/* harmony import */ var _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/TwoJS/Image_Mesh */ "./src/components/utils/TwoJS/Image_Mesh.ts");
/* harmony import */ var _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/TwoJS/raycaster/colorRaycaster */ "./src/components/utils/TwoJS/raycaster/colorRaycaster.ts");
/* harmony import */ var _utils_TwoJS_raycaster_squareSquareReycaster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/TwoJS/raycaster/squareSquareReycaster */ "./src/components/utils/TwoJS/raycaster/squareSquareReycaster.ts");
/* harmony import */ var _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/TwoJS/Renderer */ "./src/components/utils/TwoJS/Renderer.ts");
/* harmony import */ var _utils_useSleep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/useSleep */ "./src/components/utils/useSleep.ts");
/* harmony import */ var _constants_mapInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../GameConfig */ "./src/components/modules/GameConfig.ts");
/* harmony import */ var _KeyboardManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../KeyboardManager */ "./src/components/modules/KeyboardManager.ts");
/* harmony import */ var _LoadAllAudio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../LoadAllAudio */ "./src/components/modules/LoadAllAudio.ts");
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loadAllImages */ "./src/components/modules/loadAllImages.ts");
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Bullet */ "./src/components/modules/mapElements/Bullet.ts");
/* harmony import */ var _destroyAnimation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./destroyAnimation */ "./src/components/modules/mapElements/destroyAnimation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














class Player extends _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_2__.default {
    constructor() {
        const { plane } = _loadAllImages__WEBPACK_IMPORTED_MODULE_11__.allImages;
        let ratio = plane.straight.width / plane.straight.height;
        super(plane.straight, {
            dx: 0.47 * _constants_mapInfo__WEBPACK_IMPORTED_MODULE_7__.default.width,
            dy: 0.65 * _constants_mapInfo__WEBPACK_IMPORTED_MODULE_7__.default.height,
            dz: 2,
            dw: 30,
            dh: 30
        }, {});
        this.startPosition = { x: this.map_info.x, y: this.map_info.y, };
        this.plane = plane;
        this.speed = 3;
        this.acceleration = 0.1;
        this.voice = 0.5;
        this.voiceAcceleration = 0.01;
        this.deltaShot = 200;
        this.lastShot = Date.now();
        this.enemyColider = new _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_3__.default([_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.enemies, _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.blocks], [this], _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_7__.default.width, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_7__.default.height);
        // document.getElementById("aa")?.appendChild(this.enemyColider.html_dom);
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_5__.renderer_functions.push(this.playerMove.bind(this));
    }
    async init() {
        _LoadAllAudio__WEBPACK_IMPORTED_MODULE_10__.default.audios.flyStart.play();
        _LoadAllAudio__WEBPACK_IMPORTED_MODULE_10__.default.audios.flyStart.onended = () => {
            if (!_GameConfig__WEBPACK_IMPORTED_MODULE_8__.default.moveBool) {
                return;
            }
            _LoadAllAudio__WEBPACK_IMPORTED_MODULE_10__.default.audios.flyNoise.loop = true;
            _LoadAllAudio__WEBPACK_IMPORTED_MODULE_10__.default.audios.flyNoise.play();
        };
    }
    async playerMove() {
        if (!_GameConfig__WEBPACK_IMPORTED_MODULE_8__.default.moveBool) {
            return;
        }
        let find = _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.blocks.findIndex(el => ((0,_utils_inRange__WEBPACK_IMPORTED_MODULE_1__.default)(this.map_info.y, el.map_info.y, el.map_info.y + el.map_info.height)));
        if (find >= 0) {
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.levelPos = find + 1;
        }
        // --------------------
        // up down movement
        // --------------------
        if (_KeyboardManager__WEBPACK_IMPORTED_MODULE_9__.Keys.KeyW) {
            if (this.speed < 5) {
                this.speed += this.acceleration;
                this.voice += this.voiceAcceleration;
            }
            else {
                this.speed = 5;
            }
        }
        else if (_KeyboardManager__WEBPACK_IMPORTED_MODULE_9__.Keys.KeyS) {
            if (this.speed > 1) {
                this.speed -= this.acceleration;
                this.voice -= this.voiceAcceleration;
            }
            else {
                this.speed = 1;
            }
        }
        else {
            if (this.speed > 3) {
                this.speed -= this.acceleration;
                this.voice -= this.voiceAcceleration;
            }
            else if (this.speed < 3) {
                this.speed += this.acceleration;
                this.voice += this.voiceAcceleration;
            }
            else {
                this.speed = 3;
            }
        }
        this.map_info.y -= this.speed;
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera.y -= this.speed;
        _LoadAllAudio__WEBPACK_IMPORTED_MODULE_10__.default.audios.flyNoise.volume = this.voice;
        // --------------------
        // left right movement
        // --------------------
        if (_KeyboardManager__WEBPACK_IMPORTED_MODULE_9__.Keys.KeyA) {
            this.map_info.x -= 5;
            this.image_info.source = this.plane.left;
        }
        else if (_KeyboardManager__WEBPACK_IMPORTED_MODULE_9__.Keys.KeyD) {
            this.map_info.x += 5;
            this.image_info.source = this.plane.right;
        }
        else {
            this.image_info.source = this.plane.straight;
        }
        // --------------------
        // strike enemy
        // --------------------
        if (_KeyboardManager__WEBPACK_IMPORTED_MODULE_9__.Keys.Space && Date.now() - this.lastShot > this.deltaShot) {
            let audio = _LoadAllAudio__WEBPACK_IMPORTED_MODULE_10__.default.audios.strike.cloneNode(true);
            audio.play();
            const { x, y, width } = this.map_info;
            let x1 = x + (width) / 2;
            let bullet = new _Bullet__WEBPACK_IMPORTED_MODULE_12__.default(x1, y);
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.add(bullet);
            this.lastShot = Date.now();
        }
        // --------------------
        // collision with enemy
        // --------------------
        let colideEnemy = _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.enemies.find(el => {
            // this.enemyColider.aPaint = [el]
            // return this.enemyColider.getCollision()
            return (0,_utils_TwoJS_raycaster_squareSquareReycaster__WEBPACK_IMPORTED_MODULE_4__.default)(el.map_info, this.map_info);
        });
        if (colideEnemy != undefined) {
            colideEnemy.destroy();
            this.checkLives();
        }
        else {
            this.enemyColider.aPaint = _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.blocks;
            if (this.enemyColider.getCollision()) {
                this.checkLives();
            }
        }
        // --------------------
        // collision with fuel
        // --------------------
        if (_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.fuels.some(el => (0,_utils_TwoJS_raycaster_squareSquareReycaster__WEBPACK_IMPORTED_MODULE_4__.default)(el.map_info, this.map_info))) {
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.addFuel();
        }
    }
    checkLives() {
        _LoadAllAudio__WEBPACK_IMPORTED_MODULE_10__.default.audios.flyStart.pause();
        _LoadAllAudio__WEBPACK_IMPORTED_MODULE_10__.default.audios.flyNoise.pause();
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.pauseFuelMusic();
        _LoadAllAudio__WEBPACK_IMPORTED_MODULE_10__.default.audios.crush.play();
        _GameConfig__WEBPACK_IMPORTED_MODULE_8__.default.moveBool = false;
    }
    async restartGame() {
        await (0,_utils_useSleep__WEBPACK_IMPORTED_MODULE_6__.default)(1000);
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.lives--;
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.fuelStatus = 1;
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.paintMap();
    }
}
__decorate([
    (0,_destroyAnimation__WEBPACK_IMPORTED_MODULE_13__.default)(function () {
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.remove(this);
        if (_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.lives <= 0) {
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.lives = 0;
            if (_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.HighScore < _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.score) {
                _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.HighScore = _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scoreBoard.score;
            }
        }
        else {
            this.restartGame();
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Player.prototype, "checkLives", null);


/***/ }),

/***/ "./src/components/modules/mapElements/ScoreBoard.ts":
/*!**********************************************************!*\
  !*** ./src/components/modules/mapElements/ScoreBoard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreBoard": () => (/* binding */ ScoreBoard)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/TwoJS/Renderer */ "./src/components/utils/TwoJS/Renderer.ts");
/* harmony import */ var _constants_mapInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");
/* harmony import */ var _GameConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GameConfig */ "./src/components/modules/GameConfig.ts");
/* harmony import */ var _KeyboardManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../KeyboardManager */ "./src/components/modules/KeyboardManager.ts");
/* harmony import */ var _LoadAllAudio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoadAllAudio */ "./src/components/modules/LoadAllAudio.ts");
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loadAllImages */ "./src/components/modules/loadAllImages.ts");







class ScoreBoard {
    constructor() {
        let height = 140;
        this.map_info = {
            x: 0,
            y: _constants_mapInfo__WEBPACK_IMPORTED_MODULE_2__.default.height - height,
            z: 5,
            width: _constants_mapInfo__WEBPACK_IMPORTED_MODULE_2__.default.width,
            height,
        };
        this.loseFuelDateNow = Date.now();
        this.loseFuelTimeStamp = 100;
        this.fuelDateNow = Date.now();
        this.fuelTimeStamp = 200;
        this.fuelStatus = 1;
        this.score = 0;
        this.lives = 4;
        this.levelPos = 1;
        this.isPlaying = false;
        _LoadAllAudio__WEBPACK_IMPORTED_MODULE_5__.default.audios.noFuel.loop = true;
        this.fuelUsage = this.fuelUsage.bind(this);
        this.addToRender();
    }
    addToRender() {
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_1__.renderer_functions.push(this.fuelUsage);
    }
    get HighScore() {
        return parseInt(sessionStorage.getItem('HighScore') || "0");
    }
    set HighScore(val) {
        sessionStorage.setItem('HighScore', val.toString());
    }
    fuelUsage() {
        if (!_GameConfig__WEBPACK_IMPORTED_MODULE_3__.default.moveBool) {
            return;
        }
        // if (Date.now() - this.loseFuelDateNow <= this.loseFuelTimeStamp) return
        // this.loseFuelDateNow = Date.now();
        if (_KeyboardManager__WEBPACK_IMPORTED_MODULE_4__.Keys.KeyW) {
            this.fuelStatus -= 0.01 / 10;
            // this.fuelStatus -= 0.01 
        }
        else if (_KeyboardManager__WEBPACK_IMPORTED_MODULE_4__.Keys.KeyS) {
            this.fuelStatus -= 0.002 / 10;
            // this.fuelStatus -= 0.002
        }
        else {
            this.fuelStatus -= (0.005 / 10);
            // this.fuelStatus -= 0.005
        }
        if (this.fuelStatus < 0.3 && this.fuelStatus > 0)
            this.playFuelMusic();
        else
            this.pauseFuelMusic();
        if (this.fuelStatus <= 0) {
            this.pauseFuelMusic();
            this.fuelStatus = 0;
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.player.checkLives();
        }
    }
    playFuelMusic() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            _LoadAllAudio__WEBPACK_IMPORTED_MODULE_5__.default.audios.noFuel.play();
        }
    }
    pauseFuelMusic() {
        if (this.isPlaying) {
            this.isPlaying = false;
            _LoadAllAudio__WEBPACK_IMPORTED_MODULE_5__.default.audios.noFuel.pause();
        }
    }
    addFuel() {
        if (Date.now() - this.fuelDateNow > this.fuelTimeStamp) {
            let audio = _LoadAllAudio__WEBPACK_IMPORTED_MODULE_5__.default.audios.Health.cloneNode(true);
            audio.play();
            this.fuelStatus += 0.2;
            this.fuelDateNow = Date.now();
            if (this.fuelStatus >= 1)
                this.fuelStatus = 1;
        }
    }
    action(ctx, camera) {
        // ------------------
        // some math
        // ------------------
        const { x, y, width, height } = this.map_info;
        const { gasStatusBar } = _loadAllImages__WEBPACK_IMPORTED_MODULE_6__.allImages;
        const { levelPos } = _loadAllImages__WEBPACK_IMPORTED_MODULE_6__.allImages.plane;
        let ratio = gasStatusBar.width / gasStatusBar.height;
        /**fuel width */
        let width1 = 300;
        /**fuel position */
        let x1 = (_constants_mapInfo__WEBPACK_IMPORTED_MODULE_2__.default.width / 2) - (width1 / 2);
        /**margin of fuel bar */
        let marginTop = 50;
        let fuelArmDelta = width1 - 60;
        let xArm = (_constants_mapInfo__WEBPACK_IMPORTED_MODULE_2__.default.width / 2) - (fuelArmDelta / 2) + (this.fuelStatus * fuelArmDelta) - 7;
        let yArm = y + marginTop;
        // -------------
        // background
        // -------------
        ctx.beginPath();
        ctx.fillStyle = "grey";
        ctx.rect(x, y, width, height);
        ctx.fill();
        // -------------
        //  score
        // -------------
        ctx.fillStyle = "yellow";
        ctx.font = "50px slkscr";
        ctx.textAlign = "end";
        ctx.fillText(this.score.toString(), x1 + (width1 / 2), y + 40);
        // -------------
        // draw fuel
        // -------------
        // arm
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.rect(xArm, yArm, 14, 60);
        ctx.fill();
        // image
        ctx.drawImage(gasStatusBar, x1, y + marginTop, width1, width1 / ratio);
        // ------------
        // lives
        // ------------
        for (let x = 0; x < this.lives; x++) {
            ctx.drawImage(levelPos, width - 300 + x * 60, y + 90);
        }
        // ------------
        // HighScore
        // ------------
        ctx.fillStyle = "black";
        ctx.font = "35px slkscr";
        ctx.textAlign = "left";
        ctx.fillText("HI", width - 300, y + 40);
        ctx.textAlign = "right";
        ctx.fillText(this.HighScore.toString(), width - 20, y + 40);
        // ------------
        // Level
        // ------------
        ctx.fillStyle = "yellow";
        ctx.font = "35px slkscr";
        ctx.textAlign = "left";
        ctx.fillText("BRIDGE", width - 300, y + 70);
        ctx.textAlign = "right";
        ctx.fillText(this.levelPos.toString(), width - 20, y + 70);
        // ------------------------------------
        // SinglePlayer / MultiPlayer
        // ------------------------------------
        ctx.fillStyle = "black";
        ctx.font = "40px slkscr";
        ctx.textAlign = "center";
        ctx.fillText("GAME", 250, y + 80);
        ctx.fillText("1", 250, y + 110);
        ctx.fillStyle = "yellow";
        ctx.font = "40px slkscr";
        ctx.textAlign = "left";
        ctx.fillText("P1", 190, y + 40);
    }
}


/***/ }),

/***/ "./src/components/modules/mapElements/destroyAnimation.ts":
/*!****************************************************************!*\
  !*** ./src/components/modules/mapElements/destroyAnimation.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ destroyAnimation)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_useSleep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/useSleep */ "./src/components/utils/useSleep.ts");
/* harmony import */ var _LoadAllAudio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadAllAudio */ "./src/components/modules/LoadAllAudio.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Player */ "./src/components/modules/mapElements/Player.ts");




function destroyAnimation(callable = function () {
    _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.remove(this);
}) {
    return function (target, name, descriptor) {
        let func = descriptor.value;
        descriptor.value = async function (...args) {
            if (!(this instanceof _Player__WEBPACK_IMPORTED_MODULE_3__.default)) {
                let audio = _LoadAllAudio__WEBPACK_IMPORTED_MODULE_2__.default.audios.enemyCrush.cloneNode(true);
                audio.play();
            }
            func.bind(this)();
            let canvas = document.createElement("canvas");
            canvas.width = this.image_info.source.width;
            canvas.height = this.image_info.source.height;
            let ctx = canvas.getContext("2d");
            for (let x = 1; x < 5; x++) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(this.image_info.source, 0, 0);
                const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const imgData1 = ctx.getImageData(0, 0, canvas.width, canvas.height);
                for (let y = 0; y < imgData.data.length; y += 4 * Math.ceil(x * Math.random())) {
                    imgData1.data[y] = imgData.data[y];
                    imgData1.data[y + 1] = imgData.data[y + 1];
                    imgData1.data[y + 2] = imgData.data[y + 2];
                    imgData1.data[y + 3] = imgData.data[y + 3];
                }
                ctx.putImageData(imgData1, 0, 0);
                let img = document.createElement("img");
                img.src = canvas.toDataURL("image/png");
                this.image_info.source = img;
                await (0,_utils_useSleep__WEBPACK_IMPORTED_MODULE_1__.default)(100);
            }
            callable.bind(this)();
        };
    };
}


/***/ }),

/***/ "./src/components/modules/mapElements/enemies/Ballon.ts":
/*!**************************************************************!*\
  !*** ./src/components/modules/mapElements/enemies/Ballon.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ballon)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/TwoJS/raycaster/colorRaycaster */ "./src/components/utils/TwoJS/raycaster/colorRaycaster.ts");
/* harmony import */ var _constants_mapInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../loadAllImages */ "./src/components/modules/loadAllImages.ts");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Enemy */ "./src/components/modules/mapElements/Enemy.ts");





class Ballon extends _Enemy__WEBPACK_IMPORTED_MODULE_4__.default {
    constructor(x, y, moveable, reverse) {
        const { ballon } = _loadAllImages__WEBPACK_IMPORTED_MODULE_3__.allImages.enemies;
        let ratio = ballon.width / ballon.height;
        super(ballon, { dx: x, dy: y, dw: 40, dh: 40 / ratio });
        this.movable = moveable;
        this.reverse = reverse;
        this.colider = new _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_1__.default(_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.blocks, [this], _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_2__.default.width, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_2__.default.height);
    }
    move() {
        let { x, y, width, height } = this.map_info;
        x += this.reverse ? -2 : 2;
        if (this.colider.getCollision()) {
            this.reverse = !this.reverse;
        }
        this.map_info.x += this.reverse ? -2 : 2;
    }
}


/***/ }),

/***/ "./src/components/modules/mapElements/enemies/FighterPlane.ts":
/*!********************************************************************!*\
  !*** ./src/components/modules/mapElements/enemies/FighterPlane.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FighterPlane)
/* harmony export */ });
/* harmony import */ var _constants_mapInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../loadAllImages */ "./src/components/modules/loadAllImages.ts");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Enemy */ "./src/components/modules/mapElements/Enemy.ts");



// Image_Mesh
class FighterPlane extends _Enemy__WEBPACK_IMPORTED_MODULE_2__.default {
    constructor(reverse, { x, y }) {
        const { fighterPlane } = _loadAllImages__WEBPACK_IMPORTED_MODULE_1__.allImages.enemies;
        let startPos = reverse ? fighterPlane.reversed : fighterPlane.normal;
        let ratio = startPos.width / startPos.height;
        let width = 50;
        super(startPos, { dx: x, dy: y, dz: 2, dw: width, dh: width / ratio });
        // -----------------------------
        // push to this
        // -----------------------------
        this.movable = true;
        this.reverse = reverse;
    }
    move() {
        this.map_info.x += this.reverse ? -10 : 10;
        if (this.map_info.x > _constants_mapInfo__WEBPACK_IMPORTED_MODULE_0__.default.width) {
            this.map_info.x = 0;
        }
    }
}


/***/ }),

/***/ "./src/components/modules/mapElements/enemies/Helicopter.ts":
/*!******************************************************************!*\
  !*** ./src/components/modules/mapElements/enemies/Helicopter.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helicopter)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/TwoJS/raycaster/colorRaycaster */ "./src/components/utils/TwoJS/raycaster/colorRaycaster.ts");
/* harmony import */ var _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/TwoJS/Renderer */ "./src/components/utils/TwoJS/Renderer.ts");
/* harmony import */ var _constants_mapInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../loadAllImages */ "./src/components/modules/loadAllImages.ts");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Enemy */ "./src/components/modules/mapElements/Enemy.ts");
/* harmony import */ var _fighterHelicopterBullet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fighterHelicopterBullet */ "./src/components/modules/mapElements/enemies/fighterHelicopterBullet.ts");







// Image_Mesh
class Helicopter extends _Enemy__WEBPACK_IMPORTED_MODULE_5__.default {
    constructor(reverse, movable, helType, { x, y }) {
        const helicopter = _loadAllImages__WEBPACK_IMPORTED_MODULE_4__.allImages.enemies[helType == "non-shooting" ? "helicopter" : "fighterHelicopter"];
        let startPos = reverse ? helicopter.reversed : helicopter.normal;
        let ratio = startPos[0].width / startPos[0].height;
        let width = 40;
        super(startPos[0], { dx: x, dy: y, dz: 2, dw: width, dh: width / ratio });
        // -----------------------------
        // push to this
        // -----------------------------
        this.movable = movable;
        this.reverse = reverse;
        this.helType = helType;
        this.dateNow = Date.now();
        this.timeStamp = 100;
        this.colider = new _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_1__.default(_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.blocks, [this], _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_3__.default.width, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_3__.default.height);
        if (this.helType == "shooting") {
            this.bulletColider = new _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_1__.default(_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.blocks, [this], _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_3__.default.width, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_3__.default.height);
        }
        // ---------------------
        // strike Enemy
        // ---------------------
        this.deltaShot = 200;
        this.lastShot = Date.now();
        this.fly = this.fly.bind(this);
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__.renderer_functions.push(this.fly);
    }
    fly() {
        const helicopter = _loadAllImages__WEBPACK_IMPORTED_MODULE_4__.allImages.enemies[this.helType == "non-shooting" ? "helicopter" : "fighterHelicopter"];
        let stateString = this.reverse ? "reversed" : "normal";
        if (Date.now() - this.dateNow > this.timeStamp) {
            if (this.image_info.source == helicopter[stateString][0]) {
                this.image_info.source = helicopter[stateString][1];
            }
            else {
                this.image_info.source = helicopter[stateString][0];
            }
            this.dateNow = Date.now();
        }
    }
    move() {
        let { x, y, width, height } = this.map_info;
        x += this.reverse ? -5 : 5;
        if (this.colider.getCollision()) {
            this.reverse = !this.reverse;
        }
        this.map_info.x += this.reverse ? -5 : 5;
        if (this.helType == "shooting")
            this.strike();
    }
    strike() {
        if (Date.now() - this.lastShot > this.deltaShot) {
            const { x, y, width, height } = this.map_info;
            let x1 = this.reverse ? this.map_info.x : x + width;
            let bullet = new _fighterHelicopterBullet__WEBPACK_IMPORTED_MODULE_6__.default(x1, y + height / 2, this.reverse, this.bulletColider);
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.add(bullet);
            this.lastShot = Date.now();
        }
    }
}


/***/ }),

/***/ "./src/components/modules/mapElements/enemies/Ship.ts":
/*!************************************************************!*\
  !*** ./src/components/modules/mapElements/enemies/Ship.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/TwoJS/raycaster/colorRaycaster */ "./src/components/utils/TwoJS/raycaster/colorRaycaster.ts");
/* harmony import */ var _constants_mapInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../loadAllImages */ "./src/components/modules/loadAllImages.ts");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Enemy */ "./src/components/modules/mapElements/Enemy.ts");





class Ship extends _Enemy__WEBPACK_IMPORTED_MODULE_4__.default {
    constructor(reverse, movable, { x, y }) {
        const { ship } = _loadAllImages__WEBPACK_IMPORTED_MODULE_3__.allImages.enemies;
        let startPos = reverse ? ship.reversed : ship.normal;
        let ratio = startPos.width / startPos.height;
        let width = 100;
        super(startPos, { dx: x, dy: y, dz: 2, dw: width, dh: width / ratio });
        // -----------------------------
        // push to this
        // -----------------------------
        this.movable = movable;
        this.reverse = reverse;
        this.colider = new _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_1__.default(_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.blocks, [this], _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_2__.default.width, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_2__.default.height);
    }
    move() {
        const { ship } = _loadAllImages__WEBPACK_IMPORTED_MODULE_3__.allImages.enemies;
        let { x, y, width, height } = this.map_info;
        x += this.reverse ? -5 : 5;
        if (this.getCollision()) {
            this.reverse = !this.reverse;
            this.image_info.source = this.reverse ? ship.reversed : ship.normal;
        }
        this.map_info.x += this.reverse ? -5 : 5;
    }
    getCollision() {
        const { ship } = _loadAllImages__WEBPACK_IMPORTED_MODULE_3__.allImages.enemies;
        let col1 = this.colider.getCollision();
        this.image_info.source = this.image_info.source == ship.normal ? ship.reversed : ship.normal;
        let col2 = this.colider.getCollision();
        this.image_info.source = this.image_info.source == ship.normal ? ship.reversed : ship.normal;
        return col1 || col2;
    }
}


/***/ }),

/***/ "./src/components/modules/mapElements/enemies/WTC.ts":
/*!***********************************************************!*\
  !*** ./src/components/modules/mapElements/enemies/WTC.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WTC)
/* harmony export */ });
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../loadAllImages */ "./src/components/modules/loadAllImages.ts");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Enemy */ "./src/components/modules/mapElements/Enemy.ts");


class WTC extends _Enemy__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(x, y, moveable, reverse) {
        const { wtc } = _loadAllImages__WEBPACK_IMPORTED_MODULE_0__.allImages.enemies;
        let ratio = wtc.width / wtc.height;
        super(wtc, { dx: x, dy: y, dw: 40, dh: 40 / ratio });
        this.movable = moveable;
        this.reverse = reverse;
    }
    move() {
    }
}


/***/ }),

/***/ "./src/components/modules/mapElements/enemies/fighterHelicopterBullet.ts":
/*!*******************************************************************************!*\
  !*** ./src/components/modules/mapElements/enemies/fighterHelicopterBullet.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fighterHelicopterBullet)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_TwoJS_raycaster_squareSquareReycaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/TwoJS/raycaster/squareSquareReycaster */ "./src/components/utils/TwoJS/raycaster/squareSquareReycaster.ts");
/* harmony import */ var _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/TwoJS/Renderer */ "./src/components/utils/TwoJS/Renderer.ts");
/* harmony import */ var _LoadAllAudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../LoadAllAudio */ "./src/components/modules/LoadAllAudio.ts");




class fighterHelicopterBullet {
    constructor(x, y, reversed, colider) {
        this.map_info = {
            width: 10,
            height: 5,
            x: reversed ? x - 10 : x,
            y: y,
            z: 3,
        };
        this.reversed = reversed;
        this.move = this.move.bind(this);
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__.renderer_functions.push(this.move);
        // this.colider = new colorRaycaster(mainInstance.blocks, [this], mainInstance.camera, mapInfo.width, mapInfo.height);
        this.colider = colider;
        let audio = _LoadAllAudio__WEBPACK_IMPORTED_MODULE_3__.default.audios.helicopterStrike.cloneNode(true);
        audio.play();
    }
    action(ctx, camera) {
        const { width, height, x, y } = this.map_info;
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.rect(x - camera.x, y - camera.y, width, height);
        ctx.fill();
    }
    move() {
        this.map_info.x += this.reversed ? -20 : 20;
        if (this.map_info.y - _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera.y < 0) {
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.remove(this);
            _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__.renderer_functions.removeIf(el => el == this.move);
        }
        else {
            this.checkCollision();
        }
    }
    checkCollision() {
        if ((0,_utils_TwoJS_raycaster_squareSquareReycaster__WEBPACK_IMPORTED_MODULE_1__.default)(_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.player.map_info, this.map_info)) {
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.player.checkLives();
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.remove(this);
            _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__.renderer_functions.removeIf(el => el == this.move);
            return;
        }
        this.colider.aPaint = _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.blocks;
        this.colider.bPaint = [this];
        if (this.colider.getCollision()) {
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.remove(this);
            _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_2__.renderer_functions.removeIf(el => el == this.move);
        }
    }
}


/***/ }),

/***/ "./src/components/modules/mapElements/enemies/tank/Tank.ts":
/*!*****************************************************************!*\
  !*** ./src/components/modules/mapElements/enemies/tank/Tank.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tank)
/* harmony export */ });
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../loadAllImages */ "./src/components/modules/loadAllImages.ts");
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Enemy */ "./src/components/modules/mapElements/Enemy.ts");
/* harmony import */ var _TankBullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TankBullet */ "./src/components/modules/mapElements/enemies/tank/TankBullet.ts");



class Tank extends _Enemy__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(type, reverse, startPos, endPos, shotPos = null) {
        const { tank } = _loadAllImages__WEBPACK_IMPORTED_MODULE_0__.allImages.enemies;
        let startImg = reverse ? tank.reversed[0] : tank.normal[0];
        let ratio = startImg.width / startImg.height;
        let width = 50;
        let height = width / ratio;
        super(startImg, {
            // dx: startPos.x - width / 2, dy: startPos.y - height / 2, dz: 2, dw: width, dh: height,
            dx: startPos.x, dy: startPos.y, dz: 2, dw: width, dh: height,
        });
        // ---------------------------
        // walk positions
        // ---------------------------
        this.startPos = startPos;
        this.endPos = endPos;
        this.startTime = Date.now();
        this.speed = 50;
        this.movable = true;
        this.reverse = reverse;
        this.type = type;
        // ---------------------------
        // move time
        // ---------------------------      
        this.moveDateNow = Date.now();
        this.moveTimeStamp = 50;
        // ---------------------------
        // shoot time
        // ---------------------------      
        this.shotPos = shotPos;
        this.shootDateNow = Date.now();
        this.shootTimeStamp = 1000;
        this.distanceToPlayer = 200000;
        this.moveAnimation = this.moveAnimation.bind(this);
        let destroy = this.destroy;
    }
    moveAnimation() {
        // ---------------------------
        // move animation
        // ---------------------------      
        const { tank } = _loadAllImages__WEBPACK_IMPORTED_MODULE_0__.allImages.enemies;
        let stateString = this.reverse ? "reversed" : "normal";
        if (Date.now() - this.moveDateNow > this.moveTimeStamp) {
            if (this.image_info.source == tank[stateString][0]) {
                this.image_info.source = tank[stateString][1];
            }
            else {
                this.image_info.source = tank[stateString][0];
            }
            this.moveDateNow = Date.now();
        }
    }
    move() {
        this.startTime = Date.now();
        this.move = this.move1;
    }
    move1() {
        this.moveAnimation();
        // ---------------------------
        // change position
        // ---------------------------            
        this.map_info.x += (this.endPos.x - this.startPos.x) / this.speed;
        this.map_info.y += (this.endPos.y - this.startPos.y) / this.speed;
        if (this.reverse ? this.map_info.x < this.endPos.x : this.map_info.x > this.endPos.x) {
            this.map_info.x = this.endPos.x;
            this.map_info.y = this.endPos.y;
            if (this.type == "normal") {
                this.move = this.shoot;
            }
            else {
                this.move = this.moveAnimation;
            }
        }
    }
    /**
     * shoot
     */
    shoot() {
        this.moveAnimation();
        if (Date.now() - this.shootDateNow > this.shootTimeStamp) {
            let endPos = JSON.parse(JSON.stringify(this.endPos));
            if (!this.reverse)
                endPos.x += this.image_info.width;
            endPos.y += 7;
            new _TankBullet__WEBPACK_IMPORTED_MODULE_2__.default(endPos, this.shotPos);
            this.shootDateNow = Date.now();
        }
    }
}


/***/ }),

/***/ "./src/components/modules/mapElements/enemies/tank/TankBullet.ts":
/*!***********************************************************************!*\
  !*** ./src/components/modules/mapElements/enemies/tank/TankBullet.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TankBullet)
/* harmony export */ });
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Main */ "./src/components/Main.ts");
/* harmony import */ var _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/TwoJS/Image_Mesh */ "./src/components/utils/TwoJS/Image_Mesh.ts");
/* harmony import */ var _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/TwoJS/raycaster/colorRaycaster */ "./src/components/utils/TwoJS/raycaster/colorRaycaster.ts");
/* harmony import */ var _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/TwoJS/Renderer */ "./src/components/utils/TwoJS/Renderer.ts");
/* harmony import */ var _constants_mapInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../constants/mapInfo */ "./src/components/modules/constants/mapInfo.ts");
/* harmony import */ var _LoadAllAudio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../LoadAllAudio */ "./src/components/modules/LoadAllAudio.ts");
/* harmony import */ var _loadAllImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../loadAllImages */ "./src/components/modules/loadAllImages.ts");







class TankBullet extends _utils_TwoJS_Image_Mesh__WEBPACK_IMPORTED_MODULE_1__.default {
    constructor(startPos, endPos) {
        let whMultiplier = 1;
        const { bullets } = _loadAllImages__WEBPACK_IMPORTED_MODULE_6__.allImages.enemies.tank;
        super(bullets[0], {
            dx: 20,
            dy: 20,
            dz: 2,
            dw: bullets[0].width * whMultiplier,
            dh: bullets[0].height * whMultiplier
        }, {});
        // -------------------------------
        // endPos startPos
        // -------------------------------
        this.whMultiplier = whMultiplier;
        this.startPos = startPos;
        this.endPos = endPos;
        _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.add(this);
        // -------------------------------
        // fly dateTime
        // -------------------------------
        this.startTime = Date.now();
        this.timeStamp = 400;
        // -------------------------------
        // kill player
        // -------------------------------
        this.colorRaycaster = new _utils_TwoJS_raycaster_colorRaycaster__WEBPACK_IMPORTED_MODULE_2__.default([_Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.player], [this], _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.camera, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_4__.default.width, _constants_mapInfo__WEBPACK_IMPORTED_MODULE_4__.default.height);
        this.killTime = Date.now();
        this.killTimeStamp = 100;
        this.killIterator = 0;
        this.boom = this.boom.bind(this);
        this.fly = this.fly.bind(this);
        _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.push(this.fly);
        let audio = _LoadAllAudio__WEBPACK_IMPORTED_MODULE_5__.default.audios.tankStrike.cloneNode(true);
        audio.play();
    }
    fly() {
        const { x: xEnd, y: yEnd } = this.endPos;
        let parsedX = xEnd - this.startPos.x;
        let parsedY = yEnd - this.startPos.y;
        let deltaTime = (Date.now() - this.startTime) / this.timeStamp;
        if (deltaTime < 1) {
            //60
            let xMath = parsedX * deltaTime;
            let yMath = ((Math.sin(xMath * (Math.PI / parsedX)) / (Math.PI / 2)) * (-(25 / 1))) + ((parsedY / parsedX) * xMath);
            this.map_info.x = this.startPos.x + xMath - (this.map_info.width / 2);
            this.map_info.y = this.startPos.y + yMath - (this.map_info.height / 2);
        }
        else {
            this.map_info.x = this.endPos.x - (this.map_info.width / 2);
            this.map_info.y = this.endPos.y - (this.map_info.height / 2);
            this.killTime = Date.now();
            _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.removeIf(el => el == this.fly);
            _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.push(this.boom);
        }
    }
    boom() {
        if (this.colorRaycaster.getCollision()) {
            _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.player.checkLives();
        }
        const { bullets } = _loadAllImages__WEBPACK_IMPORTED_MODULE_6__.allImages.enemies.tank;
        if (Date.now() - this.killTime > this.killTimeStamp) {
            if (this.killIterator < 6) {
                this.killIterator++;
                this.image_info.source = bullets[this.killIterator];
                this.map_info.width = this.image_info.source.width * this.whMultiplier;
                this.map_info.height = this.image_info.source.height * this.whMultiplier;
                this.map_info.x = this.endPos.x - (this.map_info.width / 2);
                this.map_info.y = this.endPos.y - (this.map_info.height / 2);
            }
            else {
                // this.colorRaycaster.html_dom.remove()
                _Main__WEBPACK_IMPORTED_MODULE_0__.mainInstance.scene.remove(this);
                _utils_TwoJS_Renderer__WEBPACK_IMPORTED_MODULE_3__.renderer_functions.removeIf(el => el == this.boom);
            }
            this.killTime = Date.now();
        }
    }
}


/***/ }),

/***/ "./src/components/utils/TwoJS/Camera.ts":
/*!**********************************************!*\
  !*** ./src/components/utils/TwoJS/Camera.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Camera)
/* harmony export */ });
class Camera {
    // constructor (public x:number=0, public y:number=-6900){
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}


/***/ }),

/***/ "./src/components/utils/TwoJS/Image_Mesh.ts":
/*!**************************************************!*\
  !*** ./src/components/utils/TwoJS/Image_Mesh.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Image_Mesh)
/* harmony export */ });
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2 */ "./src/components/utils/TwoJS/Vector2.ts");

class Image_Mesh {
    constructor(image, { dx = 0, dy = 0, dz = 0, dw = 10, dh = 10 }, { sx = 0, sy = 0, sw = image.width, sh = image.height }) {
        this.image_info = {
            source: image,
            width: sw,
            height: sh,
            x: sx,
            y: sy,
        };
        this.map_info = {
            width: dw,
            height: dh,
            x: dx,
            y: dy,
            z: dz,
        };
        this.imageRenderBool = sw == image.width && sh == image.height;
    }
    get pos_vect() {
        return new _Vector2__WEBPACK_IMPORTED_MODULE_0__.default(this.map_info.x, this.map_info.y);
    }
    set pos_vect(val) {
        this.map_info.x = val.x,
            this.map_info.y = val.y;
    }
    action(ctx, camera) {
        let { width, height, x, y } = this.map_info;
        let { source, width: s_width, height: s_height, x: s_x, y: s_y } = this.image_info;
        ctx.beginPath();
        if (!this.imageRenderBool) {
            ctx.drawImage(source, s_x, s_y, s_width, s_height, x - camera.x, y - camera.y, width, height);
        }
        else {
            ctx.drawImage(source, x - camera.x, y - camera.y, width, height);
        }
        ctx.closePath();
    }
}


/***/ }),

/***/ "./src/components/utils/TwoJS/Renderer.ts":
/*!************************************************!*\
  !*** ./src/components/utils/TwoJS/Renderer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderer_functions": () => (/* binding */ renderer_functions),
/* harmony export */   "renderer_functions_after": () => (/* binding */ renderer_functions_after),
/* harmony export */   "TIME": () => (/* binding */ TIME),
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
let renderer_functions = [];
let renderer_functions_after = [];
const TIME = {
    last_time: Date.now(),
    /** in milliseconds */
    time_stamp: 0,
};
class Renderer {
    constructor(width, height, scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.html_dom = document.createElement("canvas");
        this.html_dom.width = width;
        this.html_dom.height = height;
        this.ctx = this.html_dom.getContext("2d");
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;
        // this.ctx.transform(1, .2, .8, .5, 0, 0);
        this.backgroundColor = "blue";
        this.stopBool = false;
        // this.stopBool = true;
        this.render();
    }
    async render(scene = this.scene) {
        // console.clear()
        // console.time()
        let { width, height } = this.html_dom;
        this.ctx.clearRect(0, 0, width, height);
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, width, height);
        for (const iterator of renderer_functions) {
            iterator();
        }
        if (scene.mesh_array.length != 0) {
            scene.mesh_array.sort((el, el1) => {
                let { x, y, z } = el.map_info;
                let { x: x1, y: y1, z: z1 } = el1.map_info;
                if (z - z1 >= 1 ||
                    (z - z1 == 0 && y - y1 >= 1) ||
                    (z - z1 == 0 && y - y1 == 0 && x - x1 >= 1)) {
                    return 1;
                }
                return -1;
            });
        }
        scene.mesh_array.forEach(el => {
            el.action(this.ctx, this.camera);
        });
        for (const iterator of renderer_functions_after) {
            iterator();
        }
        TIME.time_stamp = Date.now() - TIME.last_time;
        TIME.last_time = Date.now();
        // console.timeEnd()
        if (!this.stopBool) {
            requestAnimationFrame(() => {
                this.render();
            });
        }
    }
}


/***/ }),

/***/ "./src/components/utils/TwoJS/Scene.ts":
/*!*********************************************!*\
  !*** ./src/components/utils/TwoJS/Scene.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scene)
/* harmony export */ });
// type Mesh = Image_Mesh
class Scene {
    constructor() {
        this.mesh_array = [];
    }
    add(...meshes) {
        this.mesh_array.push(...meshes);
    }
    remove(mesh) {
        this.mesh_array = this.mesh_array.filter(el => el != mesh);
    }
}


/***/ }),

/***/ "./src/components/utils/TwoJS/Vector2.ts":
/*!***********************************************!*\
  !*** ./src/components/utils/TwoJS/Vector2.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector2)
/* harmony export */ });
class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    normalize() {
        let length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        this.x = (1 / length) * this.x;
        this.y = (1 / length) * this.y;
        return this;
    }
    getLength() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    distanceTo(vect2) {
        let x = Math.abs(this.x - vect2.x);
        let y = Math.abs(this.y - vect2.y);
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
    dot(vect2) {
        return this.x * vect2.x + this.y * vect2.y;
    }
    angleTo(vect2) {
        return Math.acos(this.dot(vect2) / (this.getLength() * vect2.getLength()));
    }
    getRotateAngle() {
        return Math.atan2(this.y, this.x);
    }
    setRotateAngle(degree) {
        this.x = Math.cos(degree) * this.getLength();
        this.y = Math.sin(degree) * this.getLength();
    }
    add(vect2) {
        this.x += vect2.x;
        this.y += vect2.y;
        // return new Vector2(this.x, this.y,);
        return this;
    }
    sub(vect2) {
        this.x -= vect2.x;
        this.y -= vect2.y;
        // return new Vector2(this.x, this.y,);
        return this;
    }
    multiplyScalar(factor) {
        this.x *= factor;
        this.y *= factor;
        // return new Vector2(this.x, this.y);
        return this;
    }
}


/***/ }),

/***/ "./src/components/utils/TwoJS/raycaster/colorRaycaster.ts":
/*!****************************************************************!*\
  !*** ./src/components/utils/TwoJS/raycaster/colorRaycaster.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ colorRaycaster)
/* harmony export */ });
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Camera */ "./src/components/utils/TwoJS/Camera.ts");

class colorRaycaster {
    // bPaint: Mesh[];
    constructor(aPaint, bPaint, camera, width, height) {
        this.aPaint = aPaint;
        this.bPaint = bPaint;
        this.camera = camera;
        this.scale = 1;
        this.html_dom = document.createElement("canvas");
        this.html_dom.width = width;
        this.html_dom.height = height;
        this.ctx = this.html_dom.getContext("2d");
        const el = this.bPaint[0];
        const { width: width1, height: height1, x, y } = el.map_info;
        this.html_dom.width = width1 * this.scale;
        this.html_dom.height = height1 * this.scale;
        // this.ctx.save();
        // console.log(this.ctx.globalCompositeOperation);
        // this.ctx.globalCompositeOperation = "source-over";
        this.empty_canvas = this.html_dom.toDataURL();
    }
    getCollision(specificColor = null) {
        console.time();
        this.ctx.clearRect(0, 0, this.html_dom.width, this.html_dom.height);
        const el = this.bPaint[0];
        let { width, height, x, y } = el.map_info;
        this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_0__.default(x * this.scale, y * this.scale);
        this.html_dom.width = width * this.scale;
        this.html_dom.height = height * this.scale;
        for (const el of this.aPaint.flat()) {
            el.map_info.x *= this.scale;
            el.map_info.y *= this.scale;
            el.map_info.width *= this.scale;
            el.map_info.height *= this.scale;
            el.action(this.ctx, this.camera);
            el.map_info.x /= this.scale;
            el.map_info.y /= this.scale;
            el.map_info.width /= this.scale;
            el.map_info.height /= this.scale;
        }
        const imgData = this.ctx.getImageData(0, 0, width * this.scale, height * this.scale);
        // console.log(imgData.data.length);
        el.map_info.x *= this.scale;
        el.map_info.y *= this.scale;
        el.map_info.width *= this.scale;
        el.map_info.height *= this.scale;
        el.action(this.ctx, this.camera);
        el.map_info.x /= this.scale;
        el.map_info.y /= this.scale;
        el.map_info.width /= this.scale;
        el.map_info.height /= this.scale;
        const imgDataAfter = this.ctx.getImageData(0, 0, width * this.scale, height * this.scale);
        // console.log( imgData.data.length);
        for (let i = 0; i < imgData.data.length; i += 4) {
            let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
            let count1 = imgDataAfter.data[i] + imgDataAfter.data[i + 1] + imgDataAfter.data[i + 2];
            // && count != 255 * 3
            if (count != 0 && count != count1) {
                console.timeEnd();
                return true;
            }
        }
        console.timeEnd();
        return false;
    }
}
function colorRaycaster1(aPaint, bPaint, camera, width, height) {
    let html_dom = document.createElement("canvas");
    html_dom.width = width;
    html_dom.height = height;
    let ctx = html_dom.getContext("2d");
    for (const el of aPaint) {
        el.action(ctx, camera);
    }
    niceFor: for (const el of bPaint) {
        let { width, height, x, y } = el.map_info;
        const imgData = ctx.getImageData(x - camera.x, y - camera.y, width, height);
        el.action(ctx, camera);
        const imgDataAfter = ctx.getImageData(x - camera.x, y - camera.y, width, height);
        for (let i = 0; i < imgData.data.length; i += 4) {
            let count = imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2];
            let count1 = imgDataAfter.data[i] + imgDataAfter.data[i + 1] + imgDataAfter.data[i + 2];
            if (count != 0 && count != count1) {
                return true;
            }
        }
    }
    return false;
}


/***/ }),

/***/ "./src/components/utils/TwoJS/raycaster/squareSquareReycaster.ts":
/*!***********************************************************************!*\
  !*** ./src/components/utils/TwoJS/raycaster/squareSquareReycaster.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SquareSquareReycaster)
/* harmony export */ });
function SquareSquareReycaster(square1, square2) {
    if (square1.x < square2.x + square2.width
        && square1.x + square1.width > square2.x
        && square1.y < square2.y + square2.height
        && square1.y + square1.height > square2.y) {
        return true;
    }
    return false;
}


/***/ }),

/***/ "./src/components/utils/audioLoader.ts":
/*!*********************************************!*\
  !*** ./src/components/utils/audioLoader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ audioLoader)
/* harmony export */ });
function audioLoader(link) {
    return new Promise(resolve => {
        let audio = new Audio(link);
        audio.oncanplaythrough = () => {
            audio.volume = 0.5;
            resolve(audio);
        };
    });
}


/***/ }),

/***/ "./src/components/utils/extending.ts":
/*!*******************************************!*\
  !*** ./src/components/utils/extending.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ extending)
/* harmony export */ });
/**@description extends Array */
function extending() {
    Array.prototype.myRandom = function () {
        return this[Math.floor(Math.random() * this.length)];
    };
    Array.prototype.removeIf = function (func) {
        var i = 0;
        while (i < this.length) {
            if (func(this[i], i, this)) {
                this.splice(i, 1);
            }
            else {
                ++i;
            }
        }
    };
}


/***/ }),

/***/ "./src/components/utils/imgReverse.ts":
/*!********************************************!*\
  !*** ./src/components/utils/imgReverse.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ imgReverse)
/* harmony export */ });
function imgReverse(image) {
    let canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    let canvasContext = canvas.getContext('2d');
    canvasContext.translate(image.width, 0);
    canvasContext.scale(-1, 1);
    canvasContext.drawImage(image, 0, 0);
    let img = document.createElement('img');
    img.src = canvas.toDataURL("image/png");
    return img;
    // return image
}


/***/ }),

/***/ "./src/components/utils/img_loader.ts":
/*!********************************************!*\
  !*** ./src/components/utils/img_loader.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ img_loader)
/* harmony export */ });
function img_loader(link) {
    return new Promise(resolve => {
        let img = document.createElement("img");
        img.src = link;
        img.onload = () => {
            resolve(img);
        };
    });
}


/***/ }),

/***/ "./src/components/utils/inRange.ts":
/*!*****************************************!*\
  !*** ./src/components/utils/inRange.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inRange)
/* harmony export */ });
/**
 * @description used to show if target number is in range
 * @param number target number
 * @param begin begin of range
 * @param end end of range
 */
function inRange(number, begin, end) {
    if (number >= begin && number <= end)
        return true;
    else
        return false;
}


/***/ }),

/***/ "./src/components/utils/useSleep.ts":
/*!******************************************!*\
  !*** ./src/components/utils/useSleep.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useSleep)
/* harmony export */ });
/**
 * @description stop the async code for chosen time
 * @param time time of sleep
 */
function useSleep(time) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(true);
        }, time);
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main.ts");
/* harmony import */ var _components_utils_extending__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/utils/extending */ "./src/components/utils/extending.ts");



function init() {
    // const container:HTMLDivElement = document.getElementById('root');
    // console.log("elo");   
    (0,_components_utils_extending__WEBPACK_IMPORTED_MODULE_2__.default)();
    new _components_Main__WEBPACK_IMPORTED_MODULE_1__.Main();
}
init();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map