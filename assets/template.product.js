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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/template/product.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/includes */ "./node_modules/core-js-pure/stable/instance/includes.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/slice */ "./node_modules/core-js-pure/stable/instance/slice.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/json/stringify */ "./node_modules/core-js-pure/stable/json/stringify.js");

/***/ }),

/***/ "./node_modules/@shopify/theme-currency/dist/currency.cjs.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@shopify/theme-currency/dist/currency.cjs.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMoney = formatMoney;
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

var moneyFormat = '${{amount}}';

/**
 * Format money values based on your shop currency settings
 * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
 * or 3.00 dollars
 * @param  {String} format - shop money_format setting
 * @return {String} value - formatted value
 */
function formatMoney(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || moneyFormat;

  function formatWithDelimiters(number) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var thousands = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
    var decimal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);

    var parts = number.split('.');
    var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
    var centsAmount = parts[1] ? decimal + parts[1] : '';

    return dollarsAmount + centsAmount;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
}


/***/ }),

/***/ "./node_modules/@shopify/theme-images/dist/images.cjs.js":
/*!***************************************************************!*\
  !*** ./node_modules/@shopify/theme-images/dist/images.cjs.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preload = preload;
exports.loadImage = loadImage;
exports.imageSize = imageSize;
exports.getSizedImageUrl = getSizedImageUrl;
exports.removeProtocol = removeProtocol;
/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * https://github.com/Shopify/slate.git.
 *
 */

/**
 * Preloads an image in memory and uses the browsers cache to store it until needed.
 *
 * @param {Array} images - A list of image urls
 * @param {String} size - A shopify image size attribute
 */

function preload(images, size) {
  if (typeof images === 'string') {
    images = [images];
  }

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    loadImage(getSizedImageUrl(image, size));
  }
}

/**
 * Loads and caches an image in the browsers cache.
 * @param {string} path - An image url
 */
function loadImage(path) {
  new Image().src = path;
}

/**
 * Find the Shopify image attribute size
 *
 * @param {string} src
 * @returns {null}
 */
function imageSize(src) {
  var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

  if (match) {
    return match[1];
  } else {
    return null;
  }
}

/**
 * Adds a Shopify size attribute to a URL
 *
 * @param src
 * @param size
 * @returns {*}
 */
function getSizedImageUrl(src, size) {
  if (size === null) {
    return src;
  }

  if (size === 'master') {
    return removeProtocol(src);
  }

  var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match) {
    var prefix = src.split(match[0]);
    var suffix = match[0];

    return removeProtocol(prefix[0] + '_' + size + suffix);
  } else {
    return null;
  }
}

function removeProtocol(path) {
  return path.replace(/http(s)?:/, '');
}


/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/includes.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/includes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.includes */ "./node_modules/core-js-pure/modules/es.array.includes.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').includes;


/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/slice.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/slice.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.slice */ "./node_modules/core-js-pure/modules/es.array.slice.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').slice;


/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayIncludes = __webpack_require__(/*! ../array/virtual/includes */ "./node_modules/core-js-pure/es/array/virtual/includes.js");
var stringIncludes = __webpack_require__(/*! ../string/virtual/includes */ "./node_modules/core-js-pure/es/string/virtual/includes.js");

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.includes)) return arrayIncludes;
  if (typeof it === 'string' || it === StringPrototype || (it instanceof String && own === StringPrototype.includes)) {
    return stringIncludes;
  } return own;
};


/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(/*! ../array/virtual/slice */ "./node_modules/core-js-pure/es/array/virtual/slice.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.slice) ? slice : own;
};


/***/ }),

/***/ "./node_modules/core-js-pure/es/json/stringify.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/json/stringify.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.json.stringify */ "./node_modules/core-js-pure/modules/es.json.stringify.js");
var core = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js-pure/internals/path.js");

// eslint-disable-next-line es/no-json -- safe
if (!core.JSON) core.JSON = { stringify: JSON.stringify };

// eslint-disable-next-line no-unused-vars -- required for `.length`
module.exports = function stringify(it, replacer, space) {
  return core.JSON.stringify.apply(null, arguments);
};


/***/ }),

/***/ "./node_modules/core-js-pure/es/string/virtual/includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/string/virtual/includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.string.includes */ "./node_modules/core-js-pure/modules/es.string.includes.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('String').includes;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-function.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-function.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js-pure/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-has-species-support.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js-pure/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-is-regexp-logic.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-is-regexp-logic.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js-pure/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js-pure/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js-pure/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/entry-virtual.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/entry-virtual.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f;
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js-pure/internals/is-forced.js");
var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js-pure/internals/function-bind-context.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js-pure/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");

var hasOwnProperty = {}.hasOwnProperty;

module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js-pure/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js-pure/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js-pure/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/not-a-regexp.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/not-a-regexp.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js-pure/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js-pure/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js-pure/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js-pure/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js-pure/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js-pure/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js-pure/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js-pure/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js-pure/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js-pure/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.15.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-absolute-index.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js-pure/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js-pure/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-integer.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-length.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js-pure/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js-pure/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js-pure/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js-pure/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js-pure/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js-pure/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js-pure/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.includes.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.includes.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js-pure/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js-pure/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.slice.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.slice.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js-pure/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js-pure/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js-pure/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js-pure/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js-pure/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js-pure/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.json.stringify.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.json.stringify.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js-pure/internals/get-built-in.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");

var $stringify = getBuiltIn('JSON', 'stringify');
var re = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = string.charAt(offset - 1);
  var next = string.charAt(offset + 1);
  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
    return '\\u' + match.charCodeAt(0).toString(16);
  } return match;
};

var FORCED = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  // https://github.com/tc39/proposal-well-formed-stringify
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var result = $stringify.apply(null, arguments);
      return typeof result == 'string' ? result.replace(re, fix) : result;
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js-pure/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js-pure/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/includes */ "./node_modules/core-js-pure/es/instance/includes.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/slice.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/slice.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/slice */ "./node_modules/core-js-pure/es/instance/slice.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/stable/json/stringify.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/json/stringify.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/json/stringify */ "./node_modules/core-js-pure/es/json/stringify.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/scripts/components/productZoom.js":
/*!***********************************************!*\
  !*** ./src/scripts/components/productZoom.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productZoom_setZoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productZoom/setZoom */ "./src/scripts/components/productZoom/setZoom.js");
/* harmony import */ var _productZoom_setUpPans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productZoom/setUpPans */ "./src/scripts/components/productZoom/setUpPans.js");
/* harmony import */ var _productZoom_setTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productZoom/setTranslate */ "./src/scripts/components/productZoom/setTranslate.js");
/* harmony import */ var _productZoom_returnInitialZoomState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productZoom/returnInitialZoomState */ "./src/scripts/components/productZoom/returnInitialZoomState.js");
/* harmony import */ var _productZoom_evtCoords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productZoom/evtCoords */ "./src/scripts/components/productZoom/evtCoords.js");
/* harmony import */ var _productZoom_toggleZoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productZoom/toggleZoom */ "./src/scripts/components/productZoom/toggleZoom.js");
/* harmony import */ var _productZoom_endPan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productZoom/endPan */ "./src/scripts/components/productZoom/endPan.js");
/* harmony import */ var _productZoom_startPan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./productZoom/startPan */ "./src/scripts/components/productZoom/startPan.js");
/* harmony import */ var _productZoom_movePan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productZoom/movePan */ "./src/scripts/components/productZoom/movePan.js");
/* harmony import */ var _productZoom_updateUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productZoom/updateUrl */ "./src/scripts/components/productZoom/updateUrl.js");











var initialiseZoom = function initialiseZoom(wrapperSelector, level) {
  //check we have container:
  var container = document.querySelector(wrapperSelector);

  if (!container) {
    return false;
  }

  container.style.overflow = 'hidden'; //initalise the state:

  var zoomImageState = Object(_productZoom_returnInitialZoomState__WEBPACK_IMPORTED_MODULE_3__["default"])(container, level); //if you click off of the zoom, we reset it.

  document.body.addEventListener('click', function (evt) {
    var el = evt.target;
    var clickedOff = true;

    while (el.parentNode) {
      if (el === container) {
        clickedOff = false;
        break;
      }

      el = el.parentNode;
    }

    if (clickedOff && zoomImageState.zoomFlag) {
      zoomImageState = Object(_productZoom_setZoom__WEBPACK_IMPORTED_MODULE_0__["default"])(zoomImageState.containerCentre, 1, zoomImageState);
    }
  }); //stop automatically picking up and dragging the image when mousedown

  zoomImageState.el.addEventListener('mousedown', function (e) {
    if (zoomImageState.zoomFlag) {
      e.preventDefault();
    }
  }); //click to zoom event, toggle to coords of click

  zoomImageState.el.addEventListener('click', function (e) {
    zoomImageState = Object(_productZoom_toggleZoom__WEBPACK_IMPORTED_MODULE_5__["default"])({
      x: e.offsetX,
      y: e.offsetY
    }, zoomImageState);
  }); //pinch to zoom event, set the zoom to the scale of the event (how much pinched)

  zoomImageState.el.addEventListener('gesturechange', function (e) {
    e.preventDefault();
    zoomImageState = Object(_productZoom_setZoom__WEBPACK_IMPORTED_MODULE_0__["default"])(zoomImageState.containerCentre, e.scale, zoomImageState);
  }); //enf of pinch event, zoom to amount pinched or 1 (if zooming out), upate url

  zoomImageState.el.addEventListener('gestureend', function (e) {
    e.preventDefault();
    zoomImageState = Object(_productZoom_setZoom__WEBPACK_IMPORTED_MODULE_0__["default"])(zoomImageState.containerCentre, Math.max(e.scale, 1), zoomImageState);
    zoomImageState = e.scale > 1 ? Object(_productZoom_setUpPans__WEBPACK_IMPORTED_MODULE_1__["default"])(zoomImageState.containerCentre, zoomImageState) : zoomImageState;
    zoomImageState = Object(_productZoom_updateUrl__WEBPACK_IMPORTED_MODULE_9__["default"])(zoomImageState);
  }); //start of drag, start the panning (in zoomed in!)

  ['touchstart', 'mousedown'].forEach(function (evt) {
    container.addEventListener(evt, function (e) {
      if (!zoomImageState.zoomFlag) {
        return false;
      }

      zoomImageState = Object(_productZoom_startPan__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_productZoom_evtCoords__WEBPACK_IMPORTED_MODULE_4__["default"])(e), e.target === zoomImageState.el, zoomImageState);
    });
  }); //move during the pan, if we are currently panning

  ['touchmove', 'mousemove'].forEach(function (evt) {
    container.addEventListener(evt, function (e) {
      if (!zoomImageState.dragActive || !zoomImageState.zoomFlag) {
        return false;
      }

      e.preventDefault();
      e.stopPropagation();
      zoomImageState = Object(_productZoom_movePan__WEBPACK_IMPORTED_MODULE_8__["default"])({
        x: Object(_productZoom_evtCoords__WEBPACK_IMPORTED_MODULE_4__["default"])(e).x - zoomImageState.initial.x,
        y: Object(_productZoom_evtCoords__WEBPACK_IMPORTED_MODULE_4__["default"])(e).y - zoomImageState.initial.y
      }, zoomImageState);
      zoomImageState = Object(_productZoom_setTranslate__WEBPACK_IMPORTED_MODULE_2__["default"])(zoomImageState);
    }, false, {
      passive: true
    });
  }); //end of drag, stop the panning

  ['touchend', 'mouseup'].forEach(function (evt) {
    container.addEventListener(evt, function () {
      zoomImageState = Object(_productZoom_endPan__WEBPACK_IMPORTED_MODULE_6__["default"])(zoomImageState);
    }, false, {
      passive: true
    });
  }); //create the toggle:

  var zoomToggle = document.createElement('DIV');
  zoomToggle.classList.add('zoom-toggle'); //zoom toggle, toggle between max level and 1

  zoomToggle.addEventListener('click', function () {
    zoomImageState = Object(_productZoom_setZoom__WEBPACK_IMPORTED_MODULE_0__["default"])(zoomImageState.containerCentre, zoomImageState.zoomFlag ? 1 : zoomImageState.maxZoom, zoomImageState);
    zoomImageState = Object(_productZoom_updateUrl__WEBPACK_IMPORTED_MODULE_9__["default"])(zoomImageState);
  }); //append the toggle

  container.appendChild(zoomToggle); //reset after resize...

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      zoomImageState = Object(_productZoom_returnInitialZoomState__WEBPACK_IMPORTED_MODULE_3__["default"])(container, level);
    }, 300);
  }); //add ready class

  container.classList.add('zoomy-initialised');
};

/* harmony default export */ __webpack_exports__["default"] = (initialiseZoom);

/***/ }),

/***/ "./src/scripts/components/productZoom/endPan.js":
/*!******************************************************!*\
  !*** ./src/scripts/components/productZoom/endPan.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var endPan = function endPan(state) {
  clearTimeout(state.dragTimer);
  state.initial.x = state.current.x;
  state.initial.y = state.current.y;
  state.dragActive = false;
  state.container.dataset.dragging = false;
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (endPan);

/***/ }),

/***/ "./src/scripts/components/productZoom/evtCoords.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/productZoom/evtCoords.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var evtCoords = function evtCoords(e) {
  var coords = {};

  if (e.touches) {
    coords.x = e.touches[0].clientX;
    coords.y = e.touches[0].clientY;
  } else {
    coords.x = e.clientX;
    coords.y = e.clientY;
  }

  return coords;
};

/* harmony default export */ __webpack_exports__["default"] = (evtCoords);

/***/ }),

/***/ "./src/scripts/components/productZoom/movePan.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/productZoom/movePan.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var movePan = function movePan(coords, state) {
  state.dragBounds = {
    xMax: state.transformOrigin.x * (state.zoomLevel - 1),
    xMin: (state.container.offsetWidth - state.transformOrigin.x) * (1 - state.zoomLevel),
    yMax: state.transformOrigin.y * (state.zoomLevel - 1),
    yMin: (state.container.offsetHeight - state.transformOrigin.y) * (1 - state.zoomLevel)
  };
  state.current.x = Math.max(state.dragBounds.xMin, Math.min(coords.x, state.dragBounds.xMax));
  state.current.y = Math.max(state.dragBounds.yMin, Math.min(coords.y, state.dragBounds.yMax));
  state.offset.x = state.current.x;
  state.offset.y = state.current.y;
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (movePan);

/***/ }),

/***/ "./src/scripts/components/productZoom/returnInitialZoomState.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/components/productZoom/returnInitialZoomState.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setZoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setZoom */ "./src/scripts/components/productZoom/setZoom.js");


var returnInitialZoomState = function returnInitialZoomState(container, maxZoom) {
  var el = container.querySelector('[data-main-product-image]');
  var containerCentre = {
    x: container.offsetWidth / 2,
    y: container.offsetHeight / 2
  };
  var state = {
    container: container,
    el: el,
    containerCentre: containerCentre,
    zoomFlag: false,
    zoomLevel: 1,
    maxZoom: maxZoom,
    dragActive: false,
    transformOrigin: {
      x: containerCentre.x,
      y: containerCentre.y
    },
    current: {
      x: containerCentre.x,
      y: containerCentre.y
    },
    initial: {
      x: containerCentre.x,
      y: containerCentre.y
    },
    offset: {
      x: 0,
      y: 0
    },
    dragTimer: null,
    dragBounds: {
      xMax: 0,
      xMin: 0,
      yMax: 0,
      yMin: 0
    }
  };
  return Object(_setZoom__WEBPACK_IMPORTED_MODULE_0__["default"])(containerCentre, 1, state);
};

/* harmony default export */ __webpack_exports__["default"] = (returnInitialZoomState);

/***/ }),

/***/ "./src/scripts/components/productZoom/setTranslate.js":
/*!************************************************************!*\
  !*** ./src/scripts/components/productZoom/setTranslate.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var setTranslate = function setTranslate(state) {
  state.el.style.transform = 'translate3d(' + state.current.x + 'px, ' + state.current.y + 'px, 0) scale(' + state.zoomLevel + ')';
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (setTranslate);

/***/ }),

/***/ "./src/scripts/components/productZoom/setUpPans.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/productZoom/setUpPans.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var setUpPans = function setUpPans(coords, state) {
  state.transformOrigin.x = coords.x;
  state.transformOrigin.y = coords.y;
  state.dragActive = false;
  state.current.x = state.containerCentre.x;
  state.current.y = state.containerCentre.y;
  state.initial.x = state.containerCentre.x;
  state.initial.y = state.containerCentre.y;
  state.offset.x = 0;
  state.offset.y = 0;
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (setUpPans);

/***/ }),

/***/ "./src/scripts/components/productZoom/setZoom.js":
/*!*******************************************************!*\
  !*** ./src/scripts/components/productZoom/setZoom.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var setZoom = function setZoom(coords, level, state) {
  if (level !== state.zoomLevel) {
    state.el.addEventListener('transitionend', function () {
      state.el.dataset.zooming = 'false';
    });
    state.el.dataset.zooming = state.zoomFlag ? 'out' : 'in';
  }

  state.zoomLevel = Math.min(Math.max(level, 1), state.maxZoom);
  state.zoomFlag = state.zoomLevel > 1;
  state.el.style.transform = 'scale(' + state.zoomLevel + ')';
  state.el.style.transformOrigin = '' + coords.x + 'px ' + coords.y + 'px';
  state.el.dataset.zoomed = state.zoomFlag ? 'true' : 'false';
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (setZoom);

/***/ }),

/***/ "./src/scripts/components/productZoom/startPan.js":
/*!********************************************************!*\
  !*** ./src/scripts/components/productZoom/startPan.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var startPan = function startPan(coords, onImage, state) {
  clearTimeout(state.dragTimer);
  state.initial.x = coords.x - state.offset.x;
  state.initial.y = coords.y - state.offset.y;

  if (onImage) {
    state.dragActive = true;
    state.dragTimer = setTimeout(function () {
      state.container.dataset.dragging = true;
    }, 120);
  }

  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (startPan);

/***/ }),

/***/ "./src/scripts/components/productZoom/toggleZoom.js":
/*!**********************************************************!*\
  !*** ./src/scripts/components/productZoom/toggleZoom.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setZoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setZoom */ "./src/scripts/components/productZoom/setZoom.js");
/* harmony import */ var _setUpPans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setUpPans */ "./src/scripts/components/productZoom/setUpPans.js");
/* harmony import */ var _updateUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateUrl */ "./src/scripts/components/productZoom/updateUrl.js");




var toggleZoom = function toggleZoom(coords, state) {
  if (!state.zoomFlag) {
    state = Object(_setZoom__WEBPACK_IMPORTED_MODULE_0__["default"])(coords, state.maxZoom, state);
    state = Object(_setUpPans__WEBPACK_IMPORTED_MODULE_1__["default"])(coords, state);
  } else {
    state = Object(_setZoom__WEBPACK_IMPORTED_MODULE_0__["default"])(coords, 1, state);
  }

  state = Object(_updateUrl__WEBPACK_IMPORTED_MODULE_2__["default"])(state);
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (toggleZoom);

/***/ }),

/***/ "./src/scripts/components/productZoom/updateUrl.js":
/*!*********************************************************!*\
  !*** ./src/scripts/components/productZoom/updateUrl.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopify_theme_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopify/theme-images */ "./node_modules/@shopify/theme-images/dist/images.cjs.js");
/* harmony import */ var _shopify_theme_images__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shopify_theme_images__WEBPACK_IMPORTED_MODULE_0__);


var updateUrl = function updateUrl(state) {
  state.el.src = state.zoomFlag ? _shopify_theme_images__WEBPACK_IMPORTED_MODULE_0__["getSizedImageUrl"](state.el.dataset.rawSrc, '2000x2000') : _shopify_theme_images__WEBPACK_IMPORTED_MODULE_0__["getSizedImageUrl"](state.el.dataset.rawSrc, '1000x1000');
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (updateUrl);

/***/ }),

/***/ "./src/scripts/global/instantiate.js":
/*!*******************************************!*\
  !*** ./src/scripts/global/instantiate.js ***!
  \*******************************************/
/*! exports provided: ready, onShopifySectionLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShopifySectionLoad", function() { return onShopifySectionLoad; });
var ready = function ready(instantiate) {
  //
  // Turbo links instantiation
  // --------------------------
  if (window['theme']['turbolinksEnabled']) {
    // FE DOM (FREEDOM!)
    document.addEventListener('turbolinks:load', function () {
      if (window.blubolt.turboLinksActive) {
        var loadEvent;
        var onLoadEvent;

        if (typeof Event === 'function') {
          loadEvent = new Event('load', {
            bubbles: true,
            cancelable: true
          });
          onLoadEvent = new Event('onLoad', {
            bubbles: true,
            cancelable: true
          });
        } else {
          loadEvent = document.createEvent('Event');
          loadEvent.initEvent('load', true, true);
          onLoadEvent = document.createEvent('Event');
          onLoadEvent.initEvent('onLoad', true, true);
        }

        dispatchEvent(loadEvent);
        dispatchEvent(onLoadEvent);
      }

      window.blubolt.glides = [];
      window.blubolt.turboLinksActive = true;
      instantiate(true);
    }); // 404 handle

    window.addEventListener('blubolt:load', function () {
      return instantiate(false);
    }); //
    // Fall back for turbo links failures
    // -----------------------------------

    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(function () {
        if (!window.blubolt.turboLinksActive) {
          console.error('TurboLinks may have failed, loading fall back');
          instantiate(false);
        }
      }, 3500);
    });
  } //
  // No Turbolinks? No problem
  // ---------------------------
  else {
      document.addEventListener('DOMContentLoaded', function () {
        instantiate(false);
      });
    }
};

var onShopifySectionLoad = function onShopifySectionLoad(run) {
  //
  // Shopify Event instantiation
  // ----------------------------
  var shopifyEvents = ['shopify:section:load'];
  shopifyEvents.forEach(function (event) {
    document.addEventListener(event, function () {
      return run(event);
    });
  });
};



/***/ }),

/***/ "./src/scripts/sections/product/CONSTANTS.ts":
/*!***************************************************!*\
  !*** ./src/scripts/sections/product/CONSTANTS.ts ***!
  \***************************************************/
/*! exports provided: DEFAULTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULTS", function() { return DEFAULTS; });
var DEFAULTS = {
  PRODUCT_FORM_SELECTOR: '[data-product-form]',
  PRODUCT_OPTION_FIELD_SELECTOR: '[data-option-select]',
  PRODUCT_MAIN_IMAGE_SELECTOR: '[data-main-product-image]',
  PRODUCT_VARIANT_ID_FORM_FIELD: '[data-product-form] [name="id"]',
  PRODUCT_IMAGE_THUMBS_SELECTOR: '[data-product-thumbnail-index]',
  PRODUCT_IMAGE_THUMBS_ATTR: 'data-product-thumbnail-index',
  PRODUCT_THUMBNAIL_ACTIVE_CLASS: 'active',
  PRODUCT_STOCK_WRAPPER_ATTR: 'data-product-in-stock',
  PRODUCT_OOS_TEXT_ATTR: 'data-oos-text',
  PRODUCT_LOW_STOCK_SELECTOR: '[data-low-stock]',
  PRODUCT_IN_STOCK_TEXT_ATTR: 'data-in-stock-text',
  PRODUCT_UNAVAILABLE_TEXT_ATTR: 'data-unavailable-text',
  PRODUCT_FORM_SUBMIT_BUTTON_SELECTOR: '[data-product-form-submit]',
  PRODUCT_PRICE_SELECTOR: '[data-product-price]',
  PRODUCT_QUANTITY_SELECTOR: '[data-quantity-input]',
  PRODUCT_COMPARE_AT_PRICE_SELECTOR: '[data-product-compare-at-price]',
  PRODUCT_STOCK_MAP: 'data-product-stock-map',
  SWITCH_OPTIONS_ON_THUMBNAIL_SELECTION: true,
  IMAGE_SIZE: '1000x1000'
};

/***/ }),

/***/ "./src/scripts/sections/product/recentlyViewed.js":
/*!********************************************************!*\
  !*** ./src/scripts/sections/product/recentlyViewed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_safeJSONParse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/safeJSONParse */ "./src/scripts/utils/safeJSONParse.js");



var recentlyViewed = function recentlyViewed() {
  var dataElem = document.querySelector('[data-recently-viewed]');
  var currentRecentlyViewed = localStorage.getItem('recentlyViewedPS');
  var newRecentlyViewed = {};

  if (dataElem) {
    var newRecentlyViewedArray = [];
    var pageItem = Object(_utils_safeJSONParse__WEBPACK_IMPORTED_MODULE_1__["default"])(dataElem.dataset.recentlyViewed);

    if (!pageItem) {
      return;
    }

    if (!currentRecentlyViewed) {
      newRecentlyViewedArray.push(pageItem);
      newRecentlyViewed = {
        'data': newRecentlyViewedArray
      };
      localStorage.setItem('recentlyViewedPS', _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(newRecentlyViewed));
    } else {
      // const parsedCurrentRecentlyViewed = safeJSONParse(currentRecentlyViewed) 
      var parsedCurrentRecentlyViewed = JSON.parse(currentRecentlyViewed);

      if (!parsedCurrentRecentlyViewed) {
        return;
      }

      var currentRecentlyViewedArray = parsedCurrentRecentlyViewed.data;
      var isNewItem = true;

      for (var i = 0; i < currentRecentlyViewedArray.length; i++) {
        var newItem = currentRecentlyViewedArray[i];

        if (newItem.handle === pageItem.handle) {
          isNewItem = false;
          break;
        } else {
          newRecentlyViewedArray.push(currentRecentlyViewedArray[i]);
        }
      }

      if (isNewItem) {
        newRecentlyViewedArray.push(pageItem);

        if (newRecentlyViewedArray.length > 10) {
          newRecentlyViewedArray.shift();
        }

        newRecentlyViewed = {
          'data': newRecentlyViewedArray
        };
        localStorage.setItem('recentlyViewedPS', _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(newRecentlyViewed));
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (recentlyViewed);

/***/ }),

/***/ "./src/scripts/sections/product/updatePriceByQuantity.ts":
/*!***************************************************************!*\
  !*** ./src/scripts/sections/product/updatePriceByQuantity.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopify_theme_currency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shopify/theme-currency */ "./node_modules/@shopify/theme-currency/dist/currency.cjs.js");
/* harmony import */ var _shopify_theme_currency__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shopify_theme_currency__WEBPACK_IMPORTED_MODULE_0__);


var updatePriceByQuantity = function updatePriceByQuantity(qtyElm, priceEls, format) {
  var totalPrice = Number(qtyElm.dataset.variantPrice ? qtyElm.dataset.variantPrice : qtyElm.dataset.productPrice) * Number(qtyElm.value);
  priceEls.forEach(function (priceEl) {
    return priceEl.innerHTML = Object(_shopify_theme_currency__WEBPACK_IMPORTED_MODULE_0__["formatMoney"])(totalPrice, format);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (updatePriceByQuantity);

/***/ }),

/***/ "./src/scripts/sections/product/updateUnitQuantities.ts":
/*!**************************************************************!*\
  !*** ./src/scripts/sections/product/updateUnitQuantities.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var updateUnitQuantities = function updateUnitQuantities(qtyElm, unitEls, areaEls, updatedQty, updatedAreaCovered) {
  qtyElm.innerHTML = updatedQty;
  unitEls.forEach(function (unit) {
    return unit.innerHTML = updatedQty;
  }); //always (and max) 2 decimal points 

  areaEls.forEach(function (unit) {
    return unit.innerHTML = '' + (Math.round(parseFloat(updatedAreaCovered) * 100) / 100).toFixed(2);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (updateUnitQuantities);

/***/ }),

/***/ "./src/scripts/sections/productAreaQuantityCalc.ts":
/*!*********************************************************!*\
  !*** ./src/scripts/sections/productAreaQuantityCalc.ts ***!
  \*********************************************************/
/*! exports provided: initProductAreaQuantityCalc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initProductAreaQuantityCalc", function() { return initProductAreaQuantityCalc; });
/* harmony import */ var _product_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product/CONSTANTS */ "./src/scripts/sections/product/CONSTANTS.ts");
/* harmony import */ var _product_updatePriceByQuantity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/updatePriceByQuantity */ "./src/scripts/sections/product/updatePriceByQuantity.ts");
/* harmony import */ var _product_updateUnitQuantities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/updateUnitQuantities */ "./src/scripts/sections/product/updateUnitQuantities.ts");
/**
 * This allows the user to calculate the required number of boxes based on the area they need to fill
 */



var initProductAreaQuantityCalc = function initProductAreaQuantityCalc() {
  var calcInput = document.querySelector('[data-product-area-quantity-calc]');
  var quantityInput = document.querySelector(_product_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["DEFAULTS"].PRODUCT_QUANTITY_SELECTOR);
  var unitQuantities = document.querySelectorAll('[data-unit-qty]');
  var unitsCovered = document.querySelectorAll('[data-unit-size]');
  var priceEls = document.querySelectorAll(_product_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["DEFAULTS"].PRODUCT_PRICE_SELECTOR);

  if (!calcInput || !quantityInput) {
    return;
  }

  calcInput.addEventListener('input', function (e) {
    var boxArea = Number(calcInput.dataset.productAreaQuantityCalc);

    if (boxArea <= 0) {
      return;
    }

    var addToCartQuantity = document.querySelector('[data-atc-quantity]');
    var areaToFill = Number(e.target.value);
    var requiredBoxQuantity = Math.ceil(areaToFill / boxArea);

    if (requiredBoxQuantity === 0) {
      requiredBoxQuantity = 1;
    }

    var areaCovered = requiredBoxQuantity * boxArea;
    quantityInput.value = requiredBoxQuantity.toString();
    Object(_product_updatePriceByQuantity__WEBPACK_IMPORTED_MODULE_1__["default"])(quantityInput, priceEls, window['theme'].moneyFormat);
    Object(_product_updateUnitQuantities__WEBPACK_IMPORTED_MODULE_2__["default"])(addToCartQuantity, unitQuantities, unitsCovered, requiredBoxQuantity.toString(), areaCovered.toString());
  });
};

/***/ }),

/***/ "./src/scripts/sections/productOrderByArea.js":
/*!****************************************************!*\
  !*** ./src/scripts/sections/productOrderByArea.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1__);



var initProductOrderByArea = function initProductOrderByArea() {
  var input = document.querySelector('[data-order-by-area-input]');
  var suffix = document.querySelector('[data-input-suffix]');

  if (!input || !suffix) {
    return;
  }

  input.addEventListener('input', function (e) {
    var _context;

    //one decimal places max
    if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_0___default()(_context = input.value).call(_context, '.')) {
      var _context2;

      input.value = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = input.value).call(_context2, 0, input.value.indexOf('.') + 2);
    } //max 10 characters


    if (input.value.length > 10) {
      var _context3;

      input.value = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = input.value).call(_context3, 0, 10);
    } //suffix positioning - 🏌


    var length = "".concat(e.target.value).length + 1;

    if (length <= 3) {
      suffix.style.webkitTransform = 'translate3d(0px, -50%, 0px)';
    } else {
      suffix.style.webkitTransform = "translate3d(".concat((length - 2) * 8, "px, -50%, 0px)");
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (initProductOrderByArea);

/***/ }),

/***/ "./src/scripts/sections/productQuantityUpdate.ts":
/*!*******************************************************!*\
  !*** ./src/scripts/sections/productQuantityUpdate.ts ***!
  \*******************************************************/
/*! exports provided: initProductQuantityUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initProductQuantityUpdate", function() { return initProductQuantityUpdate; });
/* harmony import */ var _product_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product/CONSTANTS */ "./src/scripts/sections/product/CONSTANTS.ts");
/* harmony import */ var _product_updatePriceByQuantity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/updatePriceByQuantity */ "./src/scripts/sections/product/updatePriceByQuantity.ts");
/* harmony import */ var _product_updateUnitQuantities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/updateUnitQuantities */ "./src/scripts/sections/product/updateUnitQuantities.ts");
/**
 * This updates the Add to Cart CTA with the quantity requested
 */



var initProductQuantityUpdate = function initProductQuantityUpdate() {
  var quantityInput = document.querySelector(_product_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["DEFAULTS"].PRODUCT_QUANTITY_SELECTOR);
  var quantityInputInc = document.querySelector('[data-quantity-inc]');
  var quantityInputDec = document.querySelector('[data-quantity-dec]');
  var unitQuantities = document.querySelectorAll('[data-unit-qty]');
  var unitsCovered = document.querySelectorAll('[data-unit-size]');
  var calcInput = document.querySelector('[data-product-area-quantity-calc]');
  var priceEls = document.querySelectorAll(_product_CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["DEFAULTS"].PRODUCT_PRICE_SELECTOR);

  var updateCTAQuantity = function updateCTAQuantity() {
    var addToCartQuantity = document.querySelector('[data-atc-quantity]');

    if (!addToCartQuantity) {
      return;
    }

    var updatedQty = quantityInput.value === '' ? '1' : quantityInput.value;

    if (calcInput) {
      calcInput.value = '';
      var boxArea = Number(calcInput.dataset.productAreaQuantityCalc);
      var areaCovered = Number(updatedQty) * boxArea;
      Object(_product_updateUnitQuantities__WEBPACK_IMPORTED_MODULE_2__["default"])(addToCartQuantity, unitQuantities, unitsCovered, updatedQty, areaCovered.toString());
    }

    addToCartQuantity.innerHTML = updatedQty;
    Object(_product_updatePriceByQuantity__WEBPACK_IMPORTED_MODULE_1__["default"])(quantityInput, priceEls, window['theme'].moneyFormat);
  };

  if (!quantityInput) {
    return;
  }

  quantityInput.addEventListener('input', updateCTAQuantity);
  quantityInputInc.addEventListener('click', updateCTAQuantity);
  quantityInputDec.addEventListener('click', updateCTAQuantity);
};

/***/ }),

/***/ "./src/scripts/template/product.js":
/*!*****************************************!*\
  !*** ./src/scripts/template/product.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_instantiate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/instantiate */ "./src/scripts/global/instantiate.js");
/* harmony import */ var _sections_product_recentlyViewed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/product/recentlyViewed */ "./src/scripts/sections/product/recentlyViewed.js");
/* harmony import */ var _sections_productAreaQuantityCalc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/productAreaQuantityCalc */ "./src/scripts/sections/productAreaQuantityCalc.ts");
/* harmony import */ var _sections_productQuantityUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/productQuantityUpdate */ "./src/scripts/sections/productQuantityUpdate.ts");
/* harmony import */ var _sections_productOrderByArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/productOrderByArea */ "./src/scripts/sections/productOrderByArea.js");
/* harmony import */ var _components_productZoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/productZoom */ "./src/scripts/components/productZoom.js");





 //create xxxx.js for each shopify template
//import my scripts in here and run them
//if its global put it in global.js e.g. cookie banner

Object(_global_instantiate__WEBPACK_IMPORTED_MODULE_0__["ready"])(function () {
  //call your stuff here()
  Object(_sections_product_recentlyViewed__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_sections_productAreaQuantityCalc__WEBPACK_IMPORTED_MODULE_2__["initProductAreaQuantityCalc"])();
  Object(_sections_productQuantityUpdate__WEBPACK_IMPORTED_MODULE_3__["initProductQuantityUpdate"])();
  Object(_sections_productOrderByArea__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_components_productZoom__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-main-product-image-wrapper]', 2);
});

/***/ }),

/***/ "./src/scripts/utils/safeJSONParse.js":
/*!********************************************!*\
  !*** ./src/scripts/utils/safeJSONParse.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var safeJSONParse = function safeJSONParse(str) {
  if (typeof str !== 'string') {
    return false;
  }

  try {
    var jsonReturn = JSON.parse(str);
    return jsonReturn;
  } catch (error) {
    return false;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (safeJSONParse);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2UvaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvaW5zdGFuY2Uvc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczMvY29yZS1qcy1zdGFibGUvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BzaG9waWZ5L3RoZW1lLWN1cnJlbmN5L2Rpc3QvY3VycmVuY3kuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac2hvcGlmeS90aGVtZS1pbWFnZXMvZGlzdC9pbWFnZXMuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvYXJyYXkvdmlydHVhbC9pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2FycmF5L3ZpcnR1YWwvc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9pbnN0YW5jZS9pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2VzL2luc3RhbmNlL3NsaWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvZXMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9lcy9zdHJpbmcvdmlydHVhbC9pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY29ycmVjdC1pcy1yZWdleHAtbG9naWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9lbnRyeS12aXJ0dWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL2lzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9uYXRpdmUtc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL25vdC1hLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvc2hhcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL2ludGVybmFscy90by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9pbnRlcm5hbHMvdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5hcnJheS5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy1wdXJlL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9tb2R1bGVzL2VzLmpzb24uc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzLXB1cmUvbW9kdWxlcy9lcy5zdHJpbmcuaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2UvaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvaW5zdGFuY2Uvc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMtcHVyZS9zdGFibGUvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3Rab29tLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdFpvb20vZW5kUGFuLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdFpvb20vZXZ0Q29vcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdFpvb20vbW92ZVBhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3Byb2R1Y3Rab29tL3JldHVybkluaXRpYWxab29tU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0Wm9vbS9zZXRUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0Wm9vbS9zZXRVcFBhbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0Wm9vbS9zZXRab29tLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdFpvb20vc3RhcnRQYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9wcm9kdWN0Wm9vbS90b2dnbGVab29tLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcHJvZHVjdFpvb20vdXBkYXRlVXJsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dsb2JhbC9pbnN0YW50aWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zZWN0aW9ucy9wcm9kdWN0L0NPTlNUQU5UUy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zZWN0aW9ucy9wcm9kdWN0L3JlY2VudGx5Vmlld2VkLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlY3Rpb25zL3Byb2R1Y3QvdXBkYXRlUHJpY2VCeVF1YW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlY3Rpb25zL3Byb2R1Y3QvdXBkYXRlVW5pdFF1YW50aXRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMvcHJvZHVjdEFyZWFRdWFudGl0eUNhbGMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VjdGlvbnMvcHJvZHVjdE9yZGVyQnlBcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlY3Rpb25zL3Byb2R1Y3RRdWFudGl0eVVwZGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90ZW1wbGF0ZS9wcm9kdWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWxzL3NhZmVKU09OUGFyc2UuanMiXSwibmFtZXMiOlsiaW5pdGlhbGlzZVpvb20iLCJ3cmFwcGVyU2VsZWN0b3IiLCJsZXZlbCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3ZlcmZsb3ciLCJ6b29tSW1hZ2VTdGF0ZSIsInJldHVybkluaXRpYWxab29tU3RhdGUiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsImVsIiwidGFyZ2V0IiwiY2xpY2tlZE9mZiIsInBhcmVudE5vZGUiLCJ6b29tRmxhZyIsInNldFpvb20iLCJjb250YWluZXJDZW50cmUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVab29tIiwieCIsIm9mZnNldFgiLCJ5Iiwib2Zmc2V0WSIsInNjYWxlIiwiTWF0aCIsIm1heCIsInNldFVwUGFucyIsInVwZGF0ZVVybCIsImZvckVhY2giLCJzdGFydFBhbiIsImV2dENvb3JkcyIsImRyYWdBY3RpdmUiLCJzdG9wUHJvcGFnYXRpb24iLCJtb3ZlUGFuIiwiaW5pdGlhbCIsInNldFRyYW5zbGF0ZSIsInBhc3NpdmUiLCJlbmRQYW4iLCJ6b29tVG9nZ2xlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1heFpvb20iLCJhcHBlbmRDaGlsZCIsInJlc2l6ZVRpbWVyIiwid2luZG93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInN0YXRlIiwiZHJhZ1RpbWVyIiwiY3VycmVudCIsImRhdGFzZXQiLCJkcmFnZ2luZyIsImNvb3JkcyIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsImRyYWdCb3VuZHMiLCJ4TWF4IiwidHJhbnNmb3JtT3JpZ2luIiwiem9vbUxldmVsIiwieE1pbiIsIm9mZnNldFdpZHRoIiwieU1heCIsInlNaW4iLCJvZmZzZXRIZWlnaHQiLCJtaW4iLCJvZmZzZXQiLCJ0cmFuc2Zvcm0iLCJ6b29taW5nIiwiem9vbWVkIiwib25JbWFnZSIsInNyYyIsInNob3BpZnlUaGVtZUltYWdlcyIsInJhd1NyYyIsInJlYWR5IiwiaW5zdGFudGlhdGUiLCJibHVib2x0IiwidHVyYm9MaW5rc0FjdGl2ZSIsImxvYWRFdmVudCIsIm9uTG9hZEV2ZW50IiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImdsaWRlcyIsImNvbnNvbGUiLCJlcnJvciIsIm9uU2hvcGlmeVNlY3Rpb25Mb2FkIiwicnVuIiwic2hvcGlmeUV2ZW50cyIsImV2ZW50IiwiREVGQVVMVFMiLCJQUk9EVUNUX0ZPUk1fU0VMRUNUT1IiLCJQUk9EVUNUX09QVElPTl9GSUVMRF9TRUxFQ1RPUiIsIlBST0RVQ1RfTUFJTl9JTUFHRV9TRUxFQ1RPUiIsIlBST0RVQ1RfVkFSSUFOVF9JRF9GT1JNX0ZJRUxEIiwiUFJPRFVDVF9JTUFHRV9USFVNQlNfU0VMRUNUT1IiLCJQUk9EVUNUX0lNQUdFX1RIVU1CU19BVFRSIiwiUFJPRFVDVF9USFVNQk5BSUxfQUNUSVZFX0NMQVNTIiwiUFJPRFVDVF9TVE9DS19XUkFQUEVSX0FUVFIiLCJQUk9EVUNUX09PU19URVhUX0FUVFIiLCJQUk9EVUNUX0xPV19TVE9DS19TRUxFQ1RPUiIsIlBST0RVQ1RfSU5fU1RPQ0tfVEVYVF9BVFRSIiwiUFJPRFVDVF9VTkFWQUlMQUJMRV9URVhUX0FUVFIiLCJQUk9EVUNUX0ZPUk1fU1VCTUlUX0JVVFRPTl9TRUxFQ1RPUiIsIlBST0RVQ1RfUFJJQ0VfU0VMRUNUT1IiLCJQUk9EVUNUX1FVQU5USVRZX1NFTEVDVE9SIiwiUFJPRFVDVF9DT01QQVJFX0FUX1BSSUNFX1NFTEVDVE9SIiwiUFJPRFVDVF9TVE9DS19NQVAiLCJTV0lUQ0hfT1BUSU9OU19PTl9USFVNQk5BSUxfU0VMRUNUSU9OIiwiSU1BR0VfU0laRSIsInJlY2VudGx5Vmlld2VkIiwiZGF0YUVsZW0iLCJjdXJyZW50UmVjZW50bHlWaWV3ZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibmV3UmVjZW50bHlWaWV3ZWQiLCJuZXdSZWNlbnRseVZpZXdlZEFycmF5IiwicGFnZUl0ZW0iLCJzYWZlSlNPTlBhcnNlIiwicHVzaCIsInNldEl0ZW0iLCJwYXJzZWRDdXJyZW50UmVjZW50bHlWaWV3ZWQiLCJKU09OIiwicGFyc2UiLCJjdXJyZW50UmVjZW50bHlWaWV3ZWRBcnJheSIsImRhdGEiLCJpc05ld0l0ZW0iLCJpIiwibGVuZ3RoIiwibmV3SXRlbSIsImhhbmRsZSIsInNoaWZ0IiwidXBkYXRlUHJpY2VCeVF1YW50aXR5IiwicXR5RWxtIiwicHJpY2VFbHMiLCJmb3JtYXQiLCJ0b3RhbFByaWNlIiwiTnVtYmVyIiwidmFyaWFudFByaWNlIiwicHJvZHVjdFByaWNlIiwidmFsdWUiLCJwcmljZUVsIiwiaW5uZXJIVE1MIiwiZm9ybWF0TW9uZXkiLCJ1cGRhdGVVbml0UXVhbnRpdGllcyIsInVuaXRFbHMiLCJhcmVhRWxzIiwidXBkYXRlZFF0eSIsInVwZGF0ZWRBcmVhQ292ZXJlZCIsInVuaXQiLCJyb3VuZCIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwiaW5pdFByb2R1Y3RBcmVhUXVhbnRpdHlDYWxjIiwiY2FsY0lucHV0IiwicXVhbnRpdHlJbnB1dCIsInVuaXRRdWFudGl0aWVzIiwicXVlcnlTZWxlY3RvckFsbCIsInVuaXRzQ292ZXJlZCIsImJveEFyZWEiLCJwcm9kdWN0QXJlYVF1YW50aXR5Q2FsYyIsImFkZFRvQ2FydFF1YW50aXR5IiwiYXJlYVRvRmlsbCIsInJlcXVpcmVkQm94UXVhbnRpdHkiLCJjZWlsIiwiYXJlYUNvdmVyZWQiLCJ0b1N0cmluZyIsIm1vbmV5Rm9ybWF0IiwiaW5pdFByb2R1Y3RPcmRlckJ5QXJlYSIsImlucHV0Iiwic3VmZml4IiwiaW5kZXhPZiIsIndlYmtpdFRyYW5zZm9ybSIsImluaXRQcm9kdWN0UXVhbnRpdHlVcGRhdGUiLCJxdWFudGl0eUlucHV0SW5jIiwicXVhbnRpdHlJbnB1dERlYyIsInVwZGF0ZUNUQVF1YW50aXR5Iiwic3RyIiwianNvblJldHVybiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGlCQUFpQixtQkFBTyxDQUFDLHNHQUF1QyxFOzs7Ozs7Ozs7OztBQ0FoRSxpQkFBaUIsbUJBQU8sQ0FBQyxnR0FBb0MsRTs7Ozs7Ozs7Ozs7QUNBN0QsaUJBQWlCLG1CQUFPLENBQUMsZ0dBQW9DLEU7Ozs7Ozs7Ozs7OztBQ0FoRDs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixRQUFROztBQUU5QjtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsRUFBRSxhQUFhLEVBQUU7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25FYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0Esc0ZBQXNGLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSTs7QUFFM0c7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekZBLG1CQUFPLENBQUMsb0dBQW9DO0FBQzVDLG1CQUFtQixtQkFBTyxDQUFDLGdHQUFrQzs7QUFFN0Q7Ozs7Ozs7Ozs7OztBQ0hBLG1CQUFPLENBQUMsOEZBQWlDO0FBQ3pDLG1CQUFtQixtQkFBTyxDQUFDLGdHQUFrQzs7QUFFN0Q7Ozs7Ozs7Ozs7OztBQ0hBLG9CQUFvQixtQkFBTyxDQUFDLDJGQUEyQjtBQUN2RCxxQkFBcUIsbUJBQU8sQ0FBQyw2RkFBNEI7O0FBRXpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDWkEsWUFBWSxtQkFBTyxDQUFDLHFGQUF3Qjs7QUFFNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBLG1CQUFPLENBQUMsaUdBQWlDO0FBQ3pDLFdBQVcsbUJBQU8sQ0FBQywyRUFBc0I7O0FBRXpDO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEEsbUJBQU8sQ0FBQyxzR0FBcUM7QUFDN0MsbUJBQW1CLG1CQUFPLENBQUMsZ0dBQWtDOztBQUU3RDs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNKQSw4QkFBOEI7Ozs7Ozs7Ozs7OztBQ0E5QixlQUFlLG1CQUFPLENBQUMsa0ZBQXdCOztBQUUvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ05BLHNCQUFzQixtQkFBTyxDQUFDLGtHQUFnQztBQUM5RCxlQUFlLG1CQUFPLENBQUMsa0ZBQXdCO0FBQy9DLHNCQUFzQixtQkFBTyxDQUFDLGtHQUFnQzs7QUFFOUQscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWSxlQUFlO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0JBLFlBQVksbUJBQU8sQ0FBQywwRUFBb0I7QUFDeEMsc0JBQXNCLG1CQUFPLENBQUMsa0dBQWdDO0FBQzlELGlCQUFpQixtQkFBTyxDQUFDLGtHQUFnQzs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNsQkEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLHNCQUFzQixtQkFBTyxDQUFDLGtHQUFnQzs7QUFFOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSyxpQkFBaUI7QUFDdEIsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNkQSxrQkFBa0IsbUJBQU8sQ0FBQyxzRkFBMEI7QUFDcEQsMkJBQTJCLG1CQUFPLENBQUMsNEdBQXFDO0FBQ3hFLCtCQUErQixtQkFBTyxDQUFDLG9IQUF5Qzs7QUFFaEY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQYTtBQUNiLGtCQUFrQixtQkFBTyxDQUFDLHdGQUEyQjtBQUNyRCwyQkFBMkIsbUJBQU8sQ0FBQyw0R0FBcUM7QUFDeEUsK0JBQStCLG1CQUFPLENBQUMsb0hBQXlDOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQSxZQUFZLG1CQUFPLENBQUMsMEVBQW9COztBQUV4QztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTSxtQkFBbUIsVUFBVSxFQUFFLEVBQUU7QUFDeEUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDTkQsYUFBYSxtQkFBTyxDQUFDLDRFQUFxQjtBQUMxQyxlQUFlLG1CQUFPLENBQUMsa0ZBQXdCOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNUQSxpQkFBaUIsbUJBQU8sQ0FBQyx3RkFBMkI7O0FBRXBEOzs7Ozs7Ozs7Ozs7QUNGQSxhQUFhLG1CQUFPLENBQUMsNEVBQXFCO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLGtHQUFnQzs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbkJBLFdBQVcsbUJBQU8sQ0FBQyx3RUFBbUI7O0FBRXRDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0phO0FBQ2IsYUFBYSxtQkFBTyxDQUFDLDRFQUFxQjtBQUMxQywrQkFBK0IsbUJBQU8sQ0FBQyxvSUFBaUQ7QUFDeEYsZUFBZSxtQkFBTyxDQUFDLGtGQUF3QjtBQUMvQyxXQUFXLG1CQUFPLENBQUMsd0VBQW1CO0FBQ3RDLFdBQVcsbUJBQU8sQ0FBQywwR0FBb0M7QUFDdkQsa0NBQWtDLG1CQUFPLENBQUMsNEhBQTZDO0FBQ3ZGLFVBQVUsbUJBQU8sQ0FBQyxzRUFBa0I7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0Y7O0FBRXRGLGlFQUFpRTtBQUNqRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BLGdCQUFnQixtQkFBTyxDQUFDLG9GQUF5Qjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQSxXQUFXLG1CQUFPLENBQUMsd0VBQW1CO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQyw0RUFBcUI7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixhQUFhLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUNiL0IsZUFBZSxtQkFBTyxDQUFDLGtGQUF3Qjs7QUFFL0MsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BLGtCQUFrQixtQkFBTyxDQUFDLHNGQUEwQjtBQUNwRCxZQUFZLG1CQUFPLENBQUMsMEVBQW9CO0FBQ3hDLG9CQUFvQixtQkFBTyxDQUFDLDhHQUFzQzs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQyxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7O0FDVkQsWUFBWSxtQkFBTyxDQUFDLDBFQUFvQjtBQUN4QyxjQUFjLG1CQUFPLENBQUMsc0ZBQTBCOztBQUVoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWkQsY0FBYyxtQkFBTyxDQUFDLHNGQUEwQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSxZQUFZLG1CQUFPLENBQUMsMEVBQW9COztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7O0FDQUEsZUFBZSxtQkFBTyxDQUFDLGtGQUF3QjtBQUMvQyxjQUFjLG1CQUFPLENBQUMsc0ZBQTBCO0FBQ2hELHNCQUFzQixtQkFBTyxDQUFDLGtHQUFnQzs7QUFFOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGtHQUFnQztBQUN6RCxZQUFZLG1CQUFPLENBQUMsMEVBQW9COztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWkQsZUFBZSxtQkFBTyxDQUFDLGtGQUF3Qjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNOQSxrQkFBa0IsbUJBQU8sQ0FBQyxzRkFBMEI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsNEZBQTZCO0FBQzFELGVBQWUsbUJBQU8sQ0FBQyxrRkFBd0I7QUFDL0Msa0JBQWtCLG1CQUFPLENBQUMsd0ZBQTJCOztBQUVyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGdCQUFnQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLGtCQUFrQixtQkFBTyxDQUFDLHNGQUEwQjtBQUNwRCxpQ0FBaUMsbUJBQU8sQ0FBQywwSEFBNEM7QUFDckYsK0JBQStCLG1CQUFPLENBQUMsb0hBQXlDO0FBQ2hGLHNCQUFzQixtQkFBTyxDQUFDLGtHQUFnQztBQUM5RCxrQkFBa0IsbUJBQU8sQ0FBQyx3RkFBMkI7QUFDckQsVUFBVSxtQkFBTyxDQUFDLHNFQUFrQjtBQUNwQyxxQkFBcUIsbUJBQU8sQ0FBQyw0RkFBNkI7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGdCQUFnQjtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkUsT0FBTzs7QUFFbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2JEOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBLGFBQWEsbUJBQU8sQ0FBQyw0RUFBcUI7QUFDMUMsa0NBQWtDLG1CQUFPLENBQUMsNEhBQTZDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1RBLGFBQWEsbUJBQU8sQ0FBQyw0RUFBcUI7QUFDMUMsZ0JBQWdCLG1CQUFPLENBQUMsb0ZBQXlCOztBQUVqRDtBQUNBLGtEQUFrRDs7QUFFbEQ7Ozs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyw4RUFBc0I7QUFDNUMsWUFBWSxtQkFBTyxDQUFDLHdGQUEyQjs7QUFFL0M7QUFDQSxxRUFBcUU7QUFDckUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1RELGdCQUFnQixtQkFBTyxDQUFDLG9GQUF5Qjs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDRGQUE2QjtBQUN6RCw2QkFBNkIsbUJBQU8sQ0FBQyxnSEFBdUM7O0FBRTVFO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSxnQkFBZ0IsbUJBQU8sQ0FBQyxvRkFBeUI7O0FBRWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTs7Ozs7Ozs7Ozs7O0FDUkEsNkJBQTZCLG1CQUFPLENBQUMsZ0hBQXVDOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQSxlQUFlLG1CQUFPLENBQUMsa0ZBQXdCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBLG9CQUFvQixtQkFBTyxDQUFDLDBGQUE0Qjs7QUFFeEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSxhQUFhLG1CQUFPLENBQUMsNEVBQXFCO0FBQzFDLGFBQWEsbUJBQU8sQ0FBQyw0RUFBcUI7QUFDMUMsVUFBVSxtQkFBTyxDQUFDLHNFQUFrQjtBQUNwQyxVQUFVLG1CQUFPLENBQUMsc0VBQWtCO0FBQ3BDLG9CQUFvQixtQkFBTyxDQUFDLDBGQUE0QjtBQUN4RCx3QkFBd0IsbUJBQU8sQ0FBQyxrR0FBZ0M7O0FBRWhFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDbkJhO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLDRFQUFxQjtBQUNyQyxnQkFBZ0IsbUJBQU8sQ0FBQyw0RkFBNkI7QUFDckQsdUJBQXVCLG1CQUFPLENBQUMsb0dBQWlDOztBQUVoRTtBQUNBO0FBQ0EsR0FBRywrQkFBK0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZGE7QUFDYixRQUFRLG1CQUFPLENBQUMsNEVBQXFCO0FBQ3JDLGVBQWUsbUJBQU8sQ0FBQyxrRkFBd0I7QUFDL0MsY0FBYyxtQkFBTyxDQUFDLGdGQUF1QjtBQUM3QyxzQkFBc0IsbUJBQU8sQ0FBQyxrR0FBZ0M7QUFDOUQsZUFBZSxtQkFBTyxDQUFDLGtGQUF3QjtBQUMvQyxzQkFBc0IsbUJBQU8sQ0FBQyxrR0FBZ0M7QUFDOUQscUJBQXFCLG1CQUFPLENBQUMsOEZBQThCO0FBQzNELHNCQUFzQixtQkFBTyxDQUFDLGtHQUFnQztBQUM5RCxtQ0FBbUMsbUJBQU8sQ0FBQyxnSUFBK0M7O0FBRTFGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDZEQUE2RDtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUM5Q0QsUUFBUSxtQkFBTyxDQUFDLDRFQUFxQjtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyx3RkFBMkI7QUFDcEQsWUFBWSxtQkFBTyxDQUFDLDBFQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw2Q0FBNkM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ2pDYTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyw0RUFBcUI7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsd0ZBQTJCO0FBQ3BELDZCQUE2QixtQkFBTyxDQUFDLGdIQUF1QztBQUM1RSwyQkFBMkIsbUJBQU8sQ0FBQyw4R0FBc0M7O0FBRXpFO0FBQ0E7QUFDQSxHQUFHLDJFQUEyRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2JELGFBQWEsbUJBQU8sQ0FBQyx1RkFBNEI7O0FBRWpEOzs7Ozs7Ozs7Ozs7QUNGQSxhQUFhLG1CQUFPLENBQUMsaUZBQXlCOztBQUU5Qzs7Ozs7Ozs7Ozs7O0FDRkEsYUFBYSxtQkFBTyxDQUFDLGlGQUF5Qjs7QUFFOUM7Ozs7Ozs7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxlQUFELEVBQWtCQyxLQUFsQixFQUE0QjtBQUVqRDtBQUNBLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCSixlQUF2QixDQUFsQjs7QUFDQSxNQUFJLENBQUNFLFNBQUwsRUFBZ0I7QUFDZCxXQUFPLEtBQVA7QUFDRDs7QUFJREEsV0FBUyxDQUFDRyxLQUFWLENBQWdCQyxRQUFoQixHQUEyQixRQUEzQixDQVZpRCxDQVlqRDs7QUFDQSxNQUFJQyxjQUFjLEdBQUdDLG1GQUFzQixDQUFDTixTQUFELEVBQVlELEtBQVosQ0FBM0MsQ0FiaUQsQ0FnQmpEOztBQUVBRSxVQUFRLENBQUNNLElBQVQsQ0FBY0MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBQ0MsR0FBRCxFQUFTO0FBQy9DLFFBQUlDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxNQUFiO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLElBQWpCOztBQUNBLFdBQU9GLEVBQUUsQ0FBQ0csVUFBVixFQUFzQjtBQUNwQixVQUFJSCxFQUFFLEtBQUtWLFNBQVgsRUFBc0I7QUFDcEJZLGtCQUFVLEdBQUcsS0FBYjtBQUNBO0FBQ0Q7O0FBQ0RGLFFBQUUsR0FBR0EsRUFBRSxDQUFDRyxVQUFSO0FBQ0Q7O0FBQ0QsUUFBSUQsVUFBVSxJQUFJUCxjQUFjLENBQUNTLFFBQWpDLEVBQTJDO0FBQ3pDVCxvQkFBYyxHQUFHVSxvRUFBTyxDQUFDVixjQUFjLENBQUNXLGVBQWhCLEVBQWlDLENBQWpDLEVBQW9DWCxjQUFwQyxDQUF4QjtBQUNEO0FBQ0YsR0FiRCxFQWxCaUQsQ0FpQ2pEOztBQUNBQSxnQkFBYyxDQUFDSyxFQUFmLENBQWtCRixnQkFBbEIsQ0FBbUMsV0FBbkMsRUFBZ0QsVUFBQ1MsQ0FBRCxFQUFPO0FBQ3JELFFBQUlaLGNBQWMsQ0FBQ1MsUUFBbkIsRUFBNkI7QUFDM0JHLE9BQUMsQ0FBQ0MsY0FBRjtBQUNEO0FBQ0YsR0FKRCxFQWxDaUQsQ0F3Q2pEOztBQUNBYixnQkFBYyxDQUFDSyxFQUFmLENBQWtCRixnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEMsVUFBQ1MsQ0FBRCxFQUFPO0FBQ2pEWixrQkFBYyxHQUFHYyx1RUFBVSxDQUFDO0FBQzFCQyxPQUFDLEVBQUVILENBQUMsQ0FBQ0ksT0FEcUI7QUFFMUJDLE9BQUMsRUFBRUwsQ0FBQyxDQUFDTTtBQUZxQixLQUFELEVBR3hCbEIsY0FId0IsQ0FBM0I7QUFJRCxHQUxELEVBekNpRCxDQWlEakQ7O0FBQ0FBLGdCQUFjLENBQUNLLEVBQWYsQ0FBa0JGLGdCQUFsQixDQUFtQyxlQUFuQyxFQUFvRCxVQUFDUyxDQUFELEVBQU87QUFDekRBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBYixrQkFBYyxHQUFHVSxvRUFBTyxDQUFDVixjQUFjLENBQUNXLGVBQWhCLEVBQWlDQyxDQUFDLENBQUNPLEtBQW5DLEVBQTBDbkIsY0FBMUMsQ0FBeEI7QUFDRCxHQUhELEVBbERpRCxDQXVEakQ7O0FBQ0FBLGdCQUFjLENBQUNLLEVBQWYsQ0FBa0JGLGdCQUFsQixDQUFtQyxZQUFuQyxFQUFpRCxVQUFDUyxDQUFELEVBQU87QUFDdERBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBYixrQkFBYyxHQUFHVSxvRUFBTyxDQUFDVixjQUFjLENBQUNXLGVBQWhCLEVBQWlDUyxJQUFJLENBQUNDLEdBQUwsQ0FBU1QsQ0FBQyxDQUFDTyxLQUFYLEVBQWtCLENBQWxCLENBQWpDLEVBQXVEbkIsY0FBdkQsQ0FBeEI7QUFDQUEsa0JBQWMsR0FBR1ksQ0FBQyxDQUFDTyxLQUFGLEdBQVUsQ0FBVixHQUFjRyxzRUFBUyxDQUFDdEIsY0FBYyxDQUFDVyxlQUFoQixFQUFpQ1gsY0FBakMsQ0FBdkIsR0FBMEVBLGNBQTNGO0FBQ0FBLGtCQUFjLEdBQUd1QixzRUFBUyxDQUFDdkIsY0FBRCxDQUExQjtBQUNELEdBTEQsRUF4RGlELENBaUVqRDs7QUFDQSxHQUFDLFlBQUQsRUFBZSxXQUFmLEVBQTRCd0IsT0FBNUIsQ0FBb0MsVUFBQ3BCLEdBQUQsRUFBUztBQUUzQ1QsYUFBUyxDQUFDUSxnQkFBVixDQUEyQkMsR0FBM0IsRUFBZ0MsVUFBQVEsQ0FBQyxFQUFJO0FBQ25DLFVBQUksQ0FBQ1osY0FBYyxDQUFDUyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQVA7QUFDRDs7QUFDRFQsb0JBQWMsR0FBR3lCLHFFQUFRLENBQUNDLHNFQUFTLENBQUNkLENBQUQsQ0FBVixFQUFnQkEsQ0FBQyxDQUFDTixNQUFGLEtBQWFOLGNBQWMsQ0FBQ0ssRUFBNUMsRUFBaURMLGNBQWpELENBQXpCO0FBQ0QsS0FMRDtBQU1ELEdBUkQsRUFsRWlELENBNEVqRDs7QUFDQSxHQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCd0IsT0FBM0IsQ0FBbUMsVUFBQ3BCLEdBQUQsRUFBUztBQUMxQ1QsYUFBUyxDQUFDUSxnQkFBVixDQUEyQkMsR0FBM0IsRUFBZ0MsVUFBQVEsQ0FBQyxFQUFJO0FBQ25DLFVBQUksQ0FBQ1osY0FBYyxDQUFDMkIsVUFBaEIsSUFBOEIsQ0FBQzNCLGNBQWMsQ0FBQ1MsUUFBbEQsRUFBNEQ7QUFDMUQsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0RHLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBRCxPQUFDLENBQUNnQixlQUFGO0FBRUE1QixvQkFBYyxHQUFHNkIsb0VBQU8sQ0FBQztBQUN2QmQsU0FBQyxFQUFFVyxzRUFBUyxDQUFDZCxDQUFELENBQVQsQ0FBYUcsQ0FBYixHQUFpQmYsY0FBYyxDQUFDOEIsT0FBZixDQUF1QmYsQ0FEcEI7QUFFdkJFLFNBQUMsRUFBRVMsc0VBQVMsQ0FBQ2QsQ0FBRCxDQUFULENBQWFLLENBQWIsR0FBaUJqQixjQUFjLENBQUM4QixPQUFmLENBQXVCYjtBQUZwQixPQUFELEVBR3JCakIsY0FIcUIsQ0FBeEI7QUFJQUEsb0JBQWMsR0FBRytCLHlFQUFZLENBQUMvQixjQUFELENBQTdCO0FBQ0QsS0FaRCxFQVlHLEtBWkgsRUFZVTtBQUFFZ0MsYUFBTyxFQUFFO0FBQVgsS0FaVjtBQWFELEdBZEQsRUE3RWlELENBOEZqRDs7QUFDQSxHQUFDLFVBQUQsRUFBYSxTQUFiLEVBQXdCUixPQUF4QixDQUFnQyxVQUFDcEIsR0FBRCxFQUFTO0FBQ3ZDVCxhQUFTLENBQUNRLGdCQUFWLENBQTJCQyxHQUEzQixFQUFnQyxZQUFNO0FBQ3BDSixvQkFBYyxHQUFHaUMsbUVBQU0sQ0FBQ2pDLGNBQUQsQ0FBdkI7QUFDRCxLQUZELEVBRUcsS0FGSCxFQUVVO0FBQUVnQyxhQUFPLEVBQUU7QUFBWCxLQUZWO0FBR0QsR0FKRCxFQS9GaUQsQ0FxR2pEOztBQUNBLE1BQU1FLFVBQVUsR0FBR3RDLFFBQVEsQ0FBQ3VDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFDQUQsWUFBVSxDQUFDRSxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixhQUF6QixFQXZHaUQsQ0F5R2pEOztBQUNBSCxZQUFVLENBQUMvQixnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0FBQ3pDSCxrQkFBYyxHQUFHVSxvRUFBTyxDQUFDVixjQUFjLENBQUNXLGVBQWhCLEVBQWlDWCxjQUFjLENBQUNTLFFBQWYsR0FBMEIsQ0FBMUIsR0FBOEJULGNBQWMsQ0FBQ3NDLE9BQTlFLEVBQXVGdEMsY0FBdkYsQ0FBeEI7QUFDQUEsa0JBQWMsR0FBR3VCLHNFQUFTLENBQUN2QixjQUFELENBQTFCO0FBQ0QsR0FIRCxFQTFHaUQsQ0ErR2pEOztBQUNBTCxXQUFTLENBQUM0QyxXQUFWLENBQXNCTCxVQUF0QixFQWhIaUQsQ0FrSGpEOztBQUNBLE1BQUlNLFdBQUo7QUFDQUMsUUFBTSxDQUFDdEMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUN0Q3VDLGdCQUFZLENBQUNGLFdBQUQsQ0FBWjtBQUNBQSxlQUFXLEdBQUdHLFVBQVUsQ0FBQyxZQUFZO0FBQ25DM0Msb0JBQWMsR0FBR0MsbUZBQXNCLENBQUNOLFNBQUQsRUFBWUQsS0FBWixDQUF2QztBQUNELEtBRnVCLEVBRXJCLEdBRnFCLENBQXhCO0FBR0QsR0FMRCxFQXBIaUQsQ0EySGpEOztBQUNBQyxXQUFTLENBQUN5QyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixtQkFBeEI7QUFHRCxDQS9IRDs7QUFpSWU3Qyw2RUFBZixFOzs7Ozs7Ozs7Ozs7QUM3SUE7QUFBQSxJQUFNeUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ1csS0FBRCxFQUFXO0FBQ3hCRixjQUFZLENBQUNFLEtBQUssQ0FBQ0MsU0FBUCxDQUFaO0FBQ0FELE9BQUssQ0FBQ2QsT0FBTixDQUFjZixDQUFkLEdBQWtCNkIsS0FBSyxDQUFDRSxPQUFOLENBQWMvQixDQUFoQztBQUNBNkIsT0FBSyxDQUFDZCxPQUFOLENBQWNiLENBQWQsR0FBa0IyQixLQUFLLENBQUNFLE9BQU4sQ0FBYzdCLENBQWhDO0FBQ0EyQixPQUFLLENBQUNqQixVQUFOLEdBQW1CLEtBQW5CO0FBQ0FpQixPQUFLLENBQUNqRCxTQUFOLENBQWdCb0QsT0FBaEIsQ0FBd0JDLFFBQXhCLEdBQW1DLEtBQW5DO0FBQ0EsU0FBT0osS0FBUDtBQUNELENBUEQ7O0FBU2VYLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUEsSUFBTVAsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ2QsQ0FBRCxFQUFPO0FBQ3ZCLE1BQU1xQyxNQUFNLEdBQUcsRUFBZjs7QUFDQSxNQUFJckMsQ0FBQyxDQUFDc0MsT0FBTixFQUFlO0FBQ2JELFVBQU0sQ0FBQ2xDLENBQVAsR0FBV0gsQ0FBQyxDQUFDc0MsT0FBRixDQUFVLENBQVYsRUFBYUMsT0FBeEI7QUFDQUYsVUFBTSxDQUFDaEMsQ0FBUCxHQUFXTCxDQUFDLENBQUNzQyxPQUFGLENBQVUsQ0FBVixFQUFhRSxPQUF4QjtBQUNELEdBSEQsTUFHTztBQUNMSCxVQUFNLENBQUNsQyxDQUFQLEdBQVdILENBQUMsQ0FBQ3VDLE9BQWI7QUFDQUYsVUFBTSxDQUFDaEMsQ0FBUCxHQUFXTCxDQUFDLENBQUN3QyxPQUFiO0FBQ0Q7O0FBQ0QsU0FBT0gsTUFBUDtBQUNELENBVkQ7O0FBWWV2Qix3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNvQixNQUFELEVBQVNMLEtBQVQsRUFBbUI7QUFDakNBLE9BQUssQ0FBQ1MsVUFBTixHQUFtQjtBQUNqQkMsUUFBSSxFQUFFVixLQUFLLENBQUNXLGVBQU4sQ0FBc0J4QyxDQUF0QixJQUEyQjZCLEtBQUssQ0FBQ1ksU0FBTixHQUFrQixDQUE3QyxDQURXO0FBRWpCQyxRQUFJLEVBQUUsQ0FBQ2IsS0FBSyxDQUFDakQsU0FBTixDQUFnQitELFdBQWhCLEdBQThCZCxLQUFLLENBQUNXLGVBQU4sQ0FBc0J4QyxDQUFyRCxLQUEyRCxJQUFJNkIsS0FBSyxDQUFDWSxTQUFyRSxDQUZXO0FBR2pCRyxRQUFJLEVBQUVmLEtBQUssQ0FBQ1csZUFBTixDQUFzQnRDLENBQXRCLElBQTJCMkIsS0FBSyxDQUFDWSxTQUFOLEdBQWtCLENBQTdDLENBSFc7QUFJakJJLFFBQUksRUFBRSxDQUFDaEIsS0FBSyxDQUFDakQsU0FBTixDQUFnQmtFLFlBQWhCLEdBQStCakIsS0FBSyxDQUFDVyxlQUFOLENBQXNCdEMsQ0FBdEQsS0FBNEQsSUFBSTJCLEtBQUssQ0FBQ1ksU0FBdEU7QUFKVyxHQUFuQjtBQU1BWixPQUFLLENBQUNFLE9BQU4sQ0FBYy9CLENBQWQsR0FBa0JLLElBQUksQ0FBQ0MsR0FBTCxDQUFTdUIsS0FBSyxDQUFDUyxVQUFOLENBQWlCSSxJQUExQixFQUFnQ3JDLElBQUksQ0FBQzBDLEdBQUwsQ0FBU2IsTUFBTSxDQUFDbEMsQ0FBaEIsRUFBbUI2QixLQUFLLENBQUNTLFVBQU4sQ0FBaUJDLElBQXBDLENBQWhDLENBQWxCO0FBQ0FWLE9BQUssQ0FBQ0UsT0FBTixDQUFjN0IsQ0FBZCxHQUFrQkcsSUFBSSxDQUFDQyxHQUFMLENBQVN1QixLQUFLLENBQUNTLFVBQU4sQ0FBaUJPLElBQTFCLEVBQWdDeEMsSUFBSSxDQUFDMEMsR0FBTCxDQUFTYixNQUFNLENBQUNoQyxDQUFoQixFQUFtQjJCLEtBQUssQ0FBQ1MsVUFBTixDQUFpQk0sSUFBcEMsQ0FBaEMsQ0FBbEI7QUFDQWYsT0FBSyxDQUFDbUIsTUFBTixDQUFhaEQsQ0FBYixHQUFpQjZCLEtBQUssQ0FBQ0UsT0FBTixDQUFjL0IsQ0FBL0I7QUFDQTZCLE9BQUssQ0FBQ21CLE1BQU4sQ0FBYTlDLENBQWIsR0FBaUIyQixLQUFLLENBQUNFLE9BQU4sQ0FBYzdCLENBQS9CO0FBQ0EsU0FBTzJCLEtBQVA7QUFDRCxDQVpEOztBQWNlZixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7O0FBQ0EsSUFBTTVCLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ04sU0FBRCxFQUFZMkMsT0FBWixFQUF3QjtBQUNyRCxNQUFNakMsRUFBRSxHQUFHVixTQUFTLENBQUNFLGFBQVYsQ0FBd0IsMkJBQXhCLENBQVg7QUFDQSxNQUFNYyxlQUFlLEdBQUc7QUFDdEJJLEtBQUMsRUFBRXBCLFNBQVMsQ0FBQytELFdBQVYsR0FBd0IsQ0FETDtBQUV0QnpDLEtBQUMsRUFBRXRCLFNBQVMsQ0FBQ2tFLFlBQVYsR0FBeUI7QUFGTixHQUF4QjtBQUlBLE1BQU1qQixLQUFLLEdBQUc7QUFDWmpELGFBQVMsRUFBRUEsU0FEQztBQUVaVSxNQUFFLEVBQUZBLEVBRlk7QUFHWk0sbUJBQWUsRUFBZkEsZUFIWTtBQUlaRixZQUFRLEVBQUUsS0FKRTtBQUtaK0MsYUFBUyxFQUFFLENBTEM7QUFNWmxCLFdBQU8sRUFBUEEsT0FOWTtBQU9aWCxjQUFVLEVBQUUsS0FQQTtBQVFaNEIsbUJBQWUsRUFBRTtBQUNmeEMsT0FBQyxFQUFFSixlQUFlLENBQUNJLENBREo7QUFFZkUsT0FBQyxFQUFFTixlQUFlLENBQUNNO0FBRkosS0FSTDtBQVlaNkIsV0FBTyxFQUFFO0FBQ1AvQixPQUFDLEVBQUVKLGVBQWUsQ0FBQ0ksQ0FEWjtBQUVQRSxPQUFDLEVBQUVOLGVBQWUsQ0FBQ007QUFGWixLQVpHO0FBZ0JaYSxXQUFPLEVBQUU7QUFDUGYsT0FBQyxFQUFFSixlQUFlLENBQUNJLENBRFo7QUFFUEUsT0FBQyxFQUFFTixlQUFlLENBQUNNO0FBRlosS0FoQkc7QUFvQlo4QyxVQUFNLEVBQUU7QUFDTmhELE9BQUMsRUFBRSxDQURHO0FBRU5FLE9BQUMsRUFBRTtBQUZHLEtBcEJJO0FBd0JaNEIsYUFBUyxFQUFFLElBeEJDO0FBeUJaUSxjQUFVLEVBQUU7QUFDVkMsVUFBSSxFQUFFLENBREk7QUFFVkcsVUFBSSxFQUFFLENBRkk7QUFHVkUsVUFBSSxFQUFFLENBSEk7QUFJVkMsVUFBSSxFQUFFO0FBSkk7QUF6QkEsR0FBZDtBQWdDQSxTQUFPbEQsd0RBQU8sQ0FBQ0MsZUFBRCxFQUFrQixDQUFsQixFQUFxQmlDLEtBQXJCLENBQWQ7QUFHRCxDQXpDRDs7QUEyQ2UzQyxxRkFBZixFOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQSxJQUFNOEIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2EsS0FBRCxFQUFXO0FBQzlCQSxPQUFLLENBQUN2QyxFQUFOLENBQVNQLEtBQVQsQ0FBZWtFLFNBQWYsR0FBMkIsaUJBQWlCcEIsS0FBSyxDQUFDRSxPQUFOLENBQWMvQixDQUEvQixHQUFtQyxNQUFuQyxHQUE0QzZCLEtBQUssQ0FBQ0UsT0FBTixDQUFjN0IsQ0FBMUQsR0FBOEQsZUFBOUQsR0FBZ0YyQixLQUFLLENBQUNZLFNBQXRGLEdBQWtHLEdBQTdIO0FBQ0EsU0FBT1osS0FBUDtBQUNELENBSEQ7O0FBSWViLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUEsSUFBTVQsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQzJCLE1BQUQsRUFBU0wsS0FBVCxFQUFtQjtBQUNuQ0EsT0FBSyxDQUFDVyxlQUFOLENBQXNCeEMsQ0FBdEIsR0FBMEJrQyxNQUFNLENBQUNsQyxDQUFqQztBQUNBNkIsT0FBSyxDQUFDVyxlQUFOLENBQXNCdEMsQ0FBdEIsR0FBMEJnQyxNQUFNLENBQUNoQyxDQUFqQztBQUNBMkIsT0FBSyxDQUFDakIsVUFBTixHQUFtQixLQUFuQjtBQUNBaUIsT0FBSyxDQUFDRSxPQUFOLENBQWMvQixDQUFkLEdBQWtCNkIsS0FBSyxDQUFDakMsZUFBTixDQUFzQkksQ0FBeEM7QUFDQTZCLE9BQUssQ0FBQ0UsT0FBTixDQUFjN0IsQ0FBZCxHQUFrQjJCLEtBQUssQ0FBQ2pDLGVBQU4sQ0FBc0JNLENBQXhDO0FBQ0EyQixPQUFLLENBQUNkLE9BQU4sQ0FBY2YsQ0FBZCxHQUFrQjZCLEtBQUssQ0FBQ2pDLGVBQU4sQ0FBc0JJLENBQXhDO0FBQ0E2QixPQUFLLENBQUNkLE9BQU4sQ0FBY2IsQ0FBZCxHQUFrQjJCLEtBQUssQ0FBQ2pDLGVBQU4sQ0FBc0JNLENBQXhDO0FBQ0EyQixPQUFLLENBQUNtQixNQUFOLENBQWFoRCxDQUFiLEdBQWlCLENBQWpCO0FBQ0E2QixPQUFLLENBQUNtQixNQUFOLENBQWE5QyxDQUFiLEdBQWlCLENBQWpCO0FBQ0EsU0FBTzJCLEtBQVA7QUFDRCxDQVhEOztBQVlldEIsd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQSxJQUFNWixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDdUMsTUFBRCxFQUFTdkQsS0FBVCxFQUFnQmtELEtBQWhCLEVBQTBCO0FBQ3hDLE1BQUlsRCxLQUFLLEtBQUtrRCxLQUFLLENBQUNZLFNBQXBCLEVBQStCO0FBQzdCWixTQUFLLENBQUN2QyxFQUFOLENBQVNGLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDLFlBQVk7QUFDckR5QyxXQUFLLENBQUN2QyxFQUFOLENBQVMwQyxPQUFULENBQWlCa0IsT0FBakIsR0FBMkIsT0FBM0I7QUFDRCxLQUZEO0FBR0FyQixTQUFLLENBQUN2QyxFQUFOLENBQVMwQyxPQUFULENBQWlCa0IsT0FBakIsR0FBMkJyQixLQUFLLENBQUNuQyxRQUFOLEdBQWlCLEtBQWpCLEdBQXlCLElBQXBEO0FBQ0Q7O0FBQ0RtQyxPQUFLLENBQUNZLFNBQU4sR0FBa0JwQyxJQUFJLENBQUMwQyxHQUFMLENBQVMxQyxJQUFJLENBQUNDLEdBQUwsQ0FBUzNCLEtBQVQsRUFBZ0IsQ0FBaEIsQ0FBVCxFQUE2QmtELEtBQUssQ0FBQ04sT0FBbkMsQ0FBbEI7QUFDQU0sT0FBSyxDQUFDbkMsUUFBTixHQUFpQm1DLEtBQUssQ0FBQ1ksU0FBTixHQUFrQixDQUFuQztBQUNBWixPQUFLLENBQUN2QyxFQUFOLENBQVNQLEtBQVQsQ0FBZWtFLFNBQWYsR0FBMkIsV0FBV3BCLEtBQUssQ0FBQ1ksU0FBakIsR0FBNkIsR0FBeEQ7QUFDQVosT0FBSyxDQUFDdkMsRUFBTixDQUFTUCxLQUFULENBQWV5RCxlQUFmLEdBQWlDLEtBQUtOLE1BQU0sQ0FBQ2xDLENBQVosR0FBZ0IsS0FBaEIsR0FBd0JrQyxNQUFNLENBQUNoQyxDQUEvQixHQUFtQyxJQUFwRTtBQUNBMkIsT0FBSyxDQUFDdkMsRUFBTixDQUFTMEMsT0FBVCxDQUFpQm1CLE1BQWpCLEdBQTBCdEIsS0FBSyxDQUFDbkMsUUFBTixHQUFpQixNQUFqQixHQUEwQixPQUFwRDtBQUNBLFNBQU9tQyxLQUFQO0FBQ0QsQ0FiRDs7QUFlZWxDLHNFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUEsSUFBTWUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3dCLE1BQUQsRUFBU2tCLE9BQVQsRUFBa0J2QixLQUFsQixFQUE0QjtBQUMzQ0YsY0FBWSxDQUFDRSxLQUFLLENBQUNDLFNBQVAsQ0FBWjtBQUNBRCxPQUFLLENBQUNkLE9BQU4sQ0FBY2YsQ0FBZCxHQUFrQmtDLE1BQU0sQ0FBQ2xDLENBQVAsR0FBVzZCLEtBQUssQ0FBQ21CLE1BQU4sQ0FBYWhELENBQTFDO0FBQ0E2QixPQUFLLENBQUNkLE9BQU4sQ0FBY2IsQ0FBZCxHQUFrQmdDLE1BQU0sQ0FBQ2hDLENBQVAsR0FBVzJCLEtBQUssQ0FBQ21CLE1BQU4sQ0FBYTlDLENBQTFDOztBQUNBLE1BQUlrRCxPQUFKLEVBQWE7QUFDWHZCLFNBQUssQ0FBQ2pCLFVBQU4sR0FBbUIsSUFBbkI7QUFDQWlCLFNBQUssQ0FBQ0MsU0FBTixHQUFrQkYsVUFBVSxDQUFDLFlBQVk7QUFDdkNDLFdBQUssQ0FBQ2pELFNBQU4sQ0FBZ0JvRCxPQUFoQixDQUF3QkMsUUFBeEIsR0FBbUMsSUFBbkM7QUFDRCxLQUYyQixFQUV6QixHQUZ5QixDQUE1QjtBQUdEOztBQUNELFNBQU9KLEtBQVA7QUFDRCxDQVhEOztBQVllbkIsdUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTVgsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ21DLE1BQUQsRUFBU0wsS0FBVCxFQUFtQjtBQUNwQyxNQUFJLENBQUNBLEtBQUssQ0FBQ25DLFFBQVgsRUFBcUI7QUFDbkJtQyxTQUFLLEdBQUdsQyx3REFBTyxDQUFDdUMsTUFBRCxFQUFTTCxLQUFLLENBQUNOLE9BQWYsRUFBd0JNLEtBQXhCLENBQWY7QUFDQUEsU0FBSyxHQUFHdEIsMERBQVMsQ0FBQzJCLE1BQUQsRUFBU0wsS0FBVCxDQUFqQjtBQUNELEdBSEQsTUFHTztBQUNMQSxTQUFLLEdBQUdsQyx3REFBTyxDQUFDdUMsTUFBRCxFQUFTLENBQVQsRUFBWUwsS0FBWixDQUFmO0FBQ0Q7O0FBQ0RBLE9BQUssR0FBR3JCLDBEQUFTLENBQUNxQixLQUFELENBQWpCO0FBQ0EsU0FBT0EsS0FBUDtBQUNELENBVEQ7O0FBV2U5Qix5RUFBZixFOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsSUFBTVMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ3FCLEtBQUQsRUFBVztBQUMzQkEsT0FBSyxDQUFDdkMsRUFBTixDQUFTK0QsR0FBVCxHQUFleEIsS0FBSyxDQUFDbkMsUUFBTixHQUFpQjRELHNFQUFBLENBQW9DekIsS0FBSyxDQUFDdkMsRUFBTixDQUFTMEMsT0FBVCxDQUFpQnVCLE1BQXJELEVBQTZELFdBQTdELENBQWpCLEdBQTZGRCxzRUFBQSxDQUFvQ3pCLEtBQUssQ0FBQ3ZDLEVBQU4sQ0FBUzBDLE9BQVQsQ0FBaUJ1QixNQUFyRCxFQUE2RCxXQUE3RCxDQUE1RztBQUNBLFNBQU8xQixLQUFQO0FBQ0QsQ0FIRDs7QUFJZXJCLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBLElBQU1nRCxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxXQUFELEVBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLE1BQUkvQixNQUFNLENBQUMsT0FBRCxDQUFOLENBQWdCLG1CQUFoQixDQUFKLEVBQTBDO0FBQ3hDO0FBQ0E3QyxZQUFRLENBQUNPLGdCQUFULENBQTBCLGlCQUExQixFQUE2QyxZQUFNO0FBQ2pELFVBQUlzQyxNQUFNLENBQUNnQyxPQUFQLENBQWVDLGdCQUFuQixFQUFxQztBQUNuQyxZQUFJQyxTQUFKO0FBQ0EsWUFBSUMsV0FBSjs7QUFDQSxZQUFJLE9BQVFDLEtBQVIsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakNGLG1CQUFTLEdBQUcsSUFBSUUsS0FBSixDQUFVLE1BQVYsRUFBa0I7QUFDNUJDLG1CQUFPLEVBQUUsSUFEbUI7QUFFNUJDLHNCQUFVLEVBQUU7QUFGZ0IsV0FBbEIsQ0FBWjtBQUlBSCxxQkFBVyxHQUFHLElBQUlDLEtBQUosQ0FBVSxRQUFWLEVBQW9CO0FBQ2hDQyxtQkFBTyxFQUFFLElBRHVCO0FBRWhDQyxzQkFBVSxFQUFFO0FBRm9CLFdBQXBCLENBQWQ7QUFJRCxTQVRELE1BU087QUFDTEosbUJBQVMsR0FBRy9FLFFBQVEsQ0FBQ29GLFdBQVQsQ0FBcUIsT0FBckIsQ0FBWjtBQUNBTCxtQkFBUyxDQUFDTSxTQUFWLENBQW9CLE1BQXBCLEVBQTRCLElBQTVCLEVBQWtDLElBQWxDO0FBQ0FMLHFCQUFXLEdBQUdoRixRQUFRLENBQUNvRixXQUFULENBQXFCLE9BQXJCLENBQWQ7QUFDQUoscUJBQVcsQ0FBQ0ssU0FBWixDQUFzQixRQUF0QixFQUFnQyxJQUFoQyxFQUFzQyxJQUF0QztBQUNEOztBQUNEQyxxQkFBYSxDQUFDUCxTQUFELENBQWI7QUFDQU8scUJBQWEsQ0FBQ04sV0FBRCxDQUFiO0FBQ0Q7O0FBQ0RuQyxZQUFNLENBQUNnQyxPQUFQLENBQWVVLE1BQWYsR0FBd0IsRUFBeEI7QUFDQTFDLFlBQU0sQ0FBQ2dDLE9BQVAsQ0FBZUMsZ0JBQWYsR0FBa0MsSUFBbEM7QUFDQUYsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxLQXpCRCxFQUZ3QyxDQTRCeEM7O0FBQ0EvQixVQUFNLENBQUN0QyxnQkFBUCxDQUF3QixjQUF4QixFQUF3QztBQUFBLGFBQU1xRSxXQUFXLENBQUMsS0FBRCxDQUFqQjtBQUFBLEtBQXhDLEVBN0J3QyxDQThCeEM7QUFDQTtBQUNBOztBQUNBNUUsWUFBUSxDQUFDTyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRHdDLGdCQUFVLENBQUMsWUFBTTtBQUNmLFlBQUksQ0FBQ0YsTUFBTSxDQUFDZ0MsT0FBUCxDQUFlQyxnQkFBcEIsRUFBc0M7QUFDcENVLGlCQUFPLENBQUNDLEtBQVIsQ0FBYywrQ0FBZDtBQUNBYixxQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNEO0FBQ0YsT0FMUyxFQUtQLElBTE8sQ0FBVjtBQU1ELEtBUEQ7QUFRRCxHQXpDRCxDQTBDQTtBQUNBO0FBQ0E7QUE1Q0EsT0E2Q0s7QUFDSDVFLGNBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbERxRSxtQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNELE9BRkQ7QUFHRDtBQUNGLENBdEREOztBQXVEQSxJQUFNYyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEdBQUQsRUFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQSxNQUFNQyxhQUFhLEdBQUcsQ0FDcEIsc0JBRG9CLENBQXRCO0FBR0FBLGVBQWEsQ0FBQ2hFLE9BQWQsQ0FBc0IsVUFBQ2lFLEtBQUQsRUFBVztBQUMvQjdGLFlBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEJzRixLQUExQixFQUFpQztBQUFBLGFBQU1GLEdBQUcsQ0FBQ0UsS0FBRCxDQUFUO0FBQUEsS0FBakM7QUFDRCxHQUZEO0FBR0QsQ0FWRDs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFBQTtBQUFPLElBQU1DLFFBQVEsR0FBRztBQUN0QkMsdUJBQXFCLEVBQUUscUJBREQ7QUFFdEJDLCtCQUE2QixFQUFFLHNCQUZUO0FBR3RCQyw2QkFBMkIsRUFBRSwyQkFIUDtBQUl0QkMsK0JBQTZCLEVBQUUsaUNBSlQ7QUFLdEJDLCtCQUE2QixFQUFFLGdDQUxUO0FBTXRCQywyQkFBeUIsRUFBRSw4QkFOTDtBQU90QkMsZ0NBQThCLEVBQUUsUUFQVjtBQVF0QkMsNEJBQTBCLEVBQUUsdUJBUk47QUFTdEJDLHVCQUFxQixFQUFFLGVBVEQ7QUFVdEJDLDRCQUEwQixFQUFFLGtCQVZOO0FBV3RCQyw0QkFBMEIsRUFBRSxvQkFYTjtBQVl0QkMsK0JBQTZCLEVBQUUsdUJBWlQ7QUFhdEJDLHFDQUFtQyxFQUFFLDRCQWJmO0FBY3RCQyx3QkFBc0IsRUFBRSxzQkFkRjtBQWV0QkMsMkJBQXlCLEVBQUUsdUJBZkw7QUFnQnRCQyxtQ0FBaUMsRUFBRSxpQ0FoQmI7QUFpQnRCQyxtQkFBaUIsRUFBRSx3QkFqQkc7QUFrQnRCQyx1Q0FBcUMsRUFBRSxJQWxCakI7QUFtQnRCQyxZQUFVLEVBQUU7QUFuQlUsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDs7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsTUFBTUMsUUFBUSxHQUFHbkgsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUFqQjtBQUNBLE1BQU1tSCxxQkFBcUIsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLGtCQUFyQixDQUE5QjtBQUNBLE1BQUlDLGlCQUFpQixHQUFHLEVBQXhCOztBQUVBLE1BQUlKLFFBQUosRUFBYztBQUNaLFFBQU1LLHNCQUFzQixHQUFHLEVBQS9CO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQyxvRUFBYSxDQUFDUCxRQUFRLENBQUNoRSxPQUFULENBQWlCK0QsY0FBbEIsQ0FBOUI7O0FBQ0EsUUFBSSxDQUFDTyxRQUFMLEVBQWU7QUFBQztBQUFPOztBQUV2QixRQUFHLENBQUNMLHFCQUFKLEVBQTJCO0FBQ3pCSSw0QkFBc0IsQ0FBQ0csSUFBdkIsQ0FBNEJGLFFBQTVCO0FBRUFGLHVCQUFpQixHQUFHO0FBQ2xCLGdCQUFRQztBQURVLE9BQXBCO0FBSUFILGtCQUFZLENBQUNPLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDLDRGQUFlTCxpQkFBZixDQUF6QztBQUNELEtBUkQsTUFRTztBQUNMO0FBQ0EsVUFBTU0sMkJBQTJCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxxQkFBWCxDQUFwQzs7QUFDQSxVQUFJLENBQUNTLDJCQUFMLEVBQWtDO0FBQUM7QUFBTzs7QUFDMUMsVUFBTUcsMEJBQTBCLEdBQUdILDJCQUEyQixDQUFDSSxJQUEvRDtBQUNBLFVBQUlDLFNBQVMsR0FBRyxJQUFoQjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILDBCQUEwQixDQUFDSSxNQUEvQyxFQUF1REQsQ0FBQyxFQUF4RCxFQUE0RDtBQUMxRCxZQUFNRSxPQUFPLEdBQUdMLDBCQUEwQixDQUFDRyxDQUFELENBQTFDOztBQUNBLFlBQUdFLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQmIsUUFBUSxDQUFDYSxNQUEvQixFQUF1QztBQUNyQ0osbUJBQVMsR0FBRyxLQUFaO0FBQ0E7QUFDRCxTQUhELE1BR087QUFDTFYsZ0NBQXNCLENBQUNHLElBQXZCLENBQTRCSywwQkFBMEIsQ0FBQ0csQ0FBRCxDQUF0RDtBQUNEO0FBQ0Y7O0FBRUQsVUFBR0QsU0FBSCxFQUFjO0FBQ1pWLDhCQUFzQixDQUFDRyxJQUF2QixDQUE0QkYsUUFBNUI7O0FBQ0EsWUFBR0Qsc0JBQXNCLENBQUNZLE1BQXZCLEdBQWdDLEVBQW5DLEVBQXVDO0FBQ3JDWixnQ0FBc0IsQ0FBQ2UsS0FBdkI7QUFDRDs7QUFDRGhCLHlCQUFpQixHQUFHO0FBQ2xCLGtCQUFRQztBQURVLFNBQXBCO0FBSUFILG9CQUFZLENBQUNPLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDLDRGQUFlTCxpQkFBZixDQUF6QztBQUNEO0FBQ0Y7QUFDRjtBQUNGLENBL0NEOztBQWlEZUwsNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU1zQixxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLE1BQUQsRUFBMkJDLFFBQTNCLEVBQTBEQyxNQUExRCxFQUFnRztBQUM1SCxNQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0osTUFBTSxDQUFDdEYsT0FBUCxDQUFlMkYsWUFBZixHQUE4QkwsTUFBTSxDQUFDdEYsT0FBUCxDQUFlMkYsWUFBN0MsR0FBNERMLE1BQU0sQ0FBQ3RGLE9BQVAsQ0FBZTRGLFlBQTVFLENBQU4sR0FBa0dGLE1BQU0sQ0FBQ0osTUFBTSxDQUFDTyxLQUFSLENBQTNIO0FBQ0FOLFVBQVEsQ0FBQzlHLE9BQVQsQ0FBaUIsVUFBQXFILE9BQU87QUFBQSxXQUFJQSxPQUFPLENBQUNDLFNBQVIsR0FBb0JDLDJFQUFXLENBQUNQLFVBQUQsRUFBYUQsTUFBYixDQUFuQztBQUFBLEdBQXhCO0FBQ0QsQ0FIRDs7QUFLZUgsb0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQSxJQUFNWSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNYLE1BQUQsRUFBa0JZLE9BQWxCLEVBQWdEQyxPQUFoRCxFQUE4RUMsVUFBOUUsRUFBa0dDLGtCQUFsRyxFQUF1STtBQUNsS2YsUUFBTSxDQUFDUyxTQUFQLEdBQW1CSyxVQUFuQjtBQUNBRixTQUFPLENBQUN6SCxPQUFSLENBQWdCLFVBQUE2SCxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDUCxTQUFMLEdBQWlCSyxVQUFyQjtBQUFBLEdBQXBCLEVBRmtLLENBR2xLOztBQUNBRCxTQUFPLENBQUMxSCxPQUFSLENBQWdCLFVBQUE2SCxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDUCxTQUFMLEdBQWlCLEtBQU0sQ0FBQzFILElBQUksQ0FBQ2tJLEtBQUwsQ0FBV0MsVUFBVSxDQUFDSCxrQkFBRCxDQUFWLEdBQWlDLEdBQTVDLElBQW1ELEdBQXBELEVBQXlESSxPQUF6RCxDQUFpRSxDQUFqRSxDQUEzQjtBQUFBLEdBQXBCO0FBQ0QsQ0FMRDs7QUFPZVIsbUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1TLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsR0FBWTtBQUNyRCxNQUFNQyxTQUFTLEdBQWdCOUosUUFBUSxDQUFDQyxhQUFULENBQXVCLG1DQUF2QixDQUEvQjtBQUNBLE1BQU04SixhQUFhLEdBQXFCL0osUUFBUSxDQUFDQyxhQUFULENBQXVCNkYsMkRBQVEsQ0FBQ2UseUJBQWhDLENBQXhDO0FBQ0EsTUFBTW1ELGNBQWMsR0FBR2hLLFFBQVEsQ0FBQ2lLLGdCQUFULENBQTBCLGlCQUExQixDQUF2QjtBQUNBLE1BQU1DLFlBQVksR0FBR2xLLFFBQVEsQ0FBQ2lLLGdCQUFULENBQTBCLGtCQUExQixDQUFyQjtBQUNBLE1BQU12QixRQUFRLEdBQUcxSSxRQUFRLENBQUNpSyxnQkFBVCxDQUEwQm5FLDJEQUFRLENBQUNjLHNCQUFuQyxDQUFqQjs7QUFFQSxNQUFJLENBQUNrRCxTQUFELElBQWMsQ0FBQ0MsYUFBbkIsRUFBa0M7QUFDaEM7QUFDRDs7QUFFREQsV0FBUyxDQUFDdkosZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBU1MsQ0FBVCxFQUFZO0FBQzlDLFFBQU1tSixPQUFPLEdBQUd0QixNQUFNLENBQUNpQixTQUFTLENBQUMzRyxPQUFWLENBQWtCaUgsdUJBQW5CLENBQXRCOztBQUVBLFFBQUlELE9BQU8sSUFBSSxDQUFmLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBRUQsUUFBTUUsaUJBQWlCLEdBQWdCckssUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUF2QztBQUNBLFFBQU1xSyxVQUFVLEdBQUd6QixNQUFNLENBQXVCN0gsQ0FBQyxDQUFDTixNQUF4QixDQUFnQ3NJLEtBQWpDLENBQXpCO0FBQ0EsUUFBSXVCLG1CQUFtQixHQUFHL0ksSUFBSSxDQUFDZ0osSUFBTCxDQUFVRixVQUFVLEdBQUdILE9BQXZCLENBQTFCOztBQUVBLFFBQUlJLG1CQUFtQixLQUFLLENBQTVCLEVBQStCO0FBQzdCQSx5QkFBbUIsR0FBRyxDQUF0QjtBQUNEOztBQUVELFFBQU1FLFdBQVcsR0FBSUYsbUJBQW1CLEdBQUdKLE9BQTNDO0FBRUFKLGlCQUFhLENBQUNmLEtBQWQsR0FBc0J1QixtQkFBbUIsQ0FBQ0csUUFBcEIsRUFBdEI7QUFFQWxDLGtGQUFxQixDQUFDdUIsYUFBRCxFQUFnQnJCLFFBQWhCLEVBQTBCN0YsTUFBTSxDQUFDLE9BQUQsQ0FBTixDQUFnQjhILFdBQTFDLENBQXJCO0FBQ0F2QixpRkFBb0IsQ0FBQ2lCLGlCQUFELEVBQW9CTCxjQUFwQixFQUFvQ0UsWUFBcEMsRUFBa0RLLG1CQUFtQixDQUFDRyxRQUFwQixFQUFsRCxFQUFrRkQsV0FBVyxDQUFDQyxRQUFaLEVBQWxGLENBQXBCO0FBQ0QsR0FyQkQ7QUFzQkQsQ0FqQ00sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSUCxJQUFNRSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07QUFDbkMsTUFBTUMsS0FBSyxHQUFHN0ssUUFBUSxDQUFDQyxhQUFULENBQXVCLDRCQUF2QixDQUFkO0FBQ0EsTUFBTTZLLE1BQU0sR0FBRzlLLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBZjs7QUFDQSxNQUFJLENBQUM0SyxLQUFELElBQVUsQ0FBQ0MsTUFBZixFQUF1QjtBQUFDO0FBQU87O0FBRS9CRCxPQUFLLENBQUN0SyxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxVQUFDUyxDQUFELEVBQU87QUFBQTs7QUFDckM7QUFDQSxRQUFJLDBHQUFBNkosS0FBSyxDQUFDN0IsS0FBTixpQkFBcUIsR0FBckIsQ0FBSixFQUErQjtBQUFBOztBQUM3QjZCLFdBQUssQ0FBQzdCLEtBQU4sR0FBYyx3R0FBQTZCLEtBQUssQ0FBQzdCLEtBQU4sa0JBQWtCLENBQWxCLEVBQXFCNkIsS0FBSyxDQUFDN0IsS0FBTixDQUFZK0IsT0FBWixDQUFvQixHQUFwQixJQUEyQixDQUFoRCxDQUFkO0FBQ0QsS0FKb0MsQ0FNckM7OztBQUNBLFFBQUlGLEtBQUssQ0FBQzdCLEtBQU4sQ0FBWVosTUFBWixHQUFxQixFQUF6QixFQUE2QjtBQUFBOztBQUMzQnlDLFdBQUssQ0FBQzdCLEtBQU4sR0FBYyx3R0FBQTZCLEtBQUssQ0FBQzdCLEtBQU4sa0JBQWtCLENBQWxCLEVBQXFCLEVBQXJCLENBQWQ7QUFDRCxLQVRvQyxDQVdyQzs7O0FBQ0EsUUFBTVosTUFBTSxHQUFHLFVBQUdwSCxDQUFDLENBQUNOLE1BQUYsQ0FBU3NJLEtBQVosRUFBb0JaLE1BQXBCLEdBQTZCLENBQTVDOztBQUNBLFFBQUlBLE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ2YwQyxZQUFNLENBQUM1SyxLQUFQLENBQWE4SyxlQUFiLEdBQStCLDZCQUEvQjtBQUNELEtBRkQsTUFFTztBQUNMRixZQUFNLENBQUM1SyxLQUFQLENBQWE4SyxlQUFiLHlCQUE4QyxDQUFDNUMsTUFBTSxHQUFHLENBQVYsSUFBZSxDQUE3RDtBQUNEO0FBQ0YsR0FsQkQ7QUFtQkQsQ0F4QkQ7O0FBMEJld0MscUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFTyxJQUFNSyx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLEdBQVk7QUFFbkQsTUFBTWxCLGFBQWEsR0FBcUIvSixRQUFRLENBQUNDLGFBQVQsQ0FBdUI2RiwyREFBUSxDQUFDZSx5QkFBaEMsQ0FBeEM7QUFDQSxNQUFNcUUsZ0JBQWdCLEdBQWdCbEwsUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUF0QztBQUNBLE1BQU1rTCxnQkFBZ0IsR0FBZ0JuTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQXRDO0FBQ0EsTUFBTStKLGNBQWMsR0FBR2hLLFFBQVEsQ0FBQ2lLLGdCQUFULENBQTBCLGlCQUExQixDQUF2QjtBQUNBLE1BQU1DLFlBQVksR0FBR2xLLFFBQVEsQ0FBQ2lLLGdCQUFULENBQTBCLGtCQUExQixDQUFyQjtBQUNBLE1BQU1ILFNBQVMsR0FBcUI5SixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUNBQXZCLENBQXBDO0FBQ0EsTUFBTXlJLFFBQVEsR0FBRzFJLFFBQVEsQ0FBQ2lLLGdCQUFULENBQTBCbkUsMkRBQVEsQ0FBQ2Msc0JBQW5DLENBQWpCOztBQUVBLE1BQU13RSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsUUFBTWYsaUJBQWlCLEdBQWdCckssUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUF2Qzs7QUFDQSxRQUFJLENBQUNvSyxpQkFBTCxFQUF3QjtBQUFDO0FBQU87O0FBQ2hDLFFBQU1kLFVBQVUsR0FBR1EsYUFBYSxDQUFDZixLQUFkLEtBQXdCLEVBQXhCLEdBQTZCLEdBQTdCLEdBQW1DZSxhQUFhLENBQUNmLEtBQXBFOztBQUVBLFFBQUljLFNBQUosRUFBZTtBQUNiQSxlQUFTLENBQUNkLEtBQVYsR0FBa0IsRUFBbEI7QUFDQSxVQUFNbUIsT0FBTyxHQUFHdEIsTUFBTSxDQUFDaUIsU0FBUyxDQUFDM0csT0FBVixDQUFrQmlILHVCQUFuQixDQUF0QjtBQUNBLFVBQU1LLFdBQVcsR0FBSTVCLE1BQU0sQ0FBQ1UsVUFBRCxDQUFOLEdBQXFCWSxPQUExQztBQUNBZixtRkFBb0IsQ0FBQ2lCLGlCQUFELEVBQW9CTCxjQUFwQixFQUFvQ0UsWUFBcEMsRUFBa0RYLFVBQWxELEVBQThEa0IsV0FBVyxDQUFDQyxRQUFaLEVBQTlELENBQXBCO0FBQ0Q7O0FBQ0RMLHFCQUFpQixDQUFDbkIsU0FBbEIsR0FBOEJLLFVBQTlCO0FBQ0FmLGtGQUFxQixDQUFDdUIsYUFBRCxFQUFnQnJCLFFBQWhCLEVBQTBCN0YsTUFBTSxDQUFDLE9BQUQsQ0FBTixDQUFnQjhILFdBQTFDLENBQXJCO0FBQ0QsR0FiRDs7QUFlQSxNQUFJLENBQUNaLGFBQUwsRUFBb0I7QUFDbEI7QUFDRDs7QUFFREEsZUFBYSxDQUFDeEosZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0M2SyxpQkFBeEM7QUFDQUYsa0JBQWdCLENBQUMzSyxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkM2SyxpQkFBM0M7QUFDQUQsa0JBQWdCLENBQUM1SyxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkM2SyxpQkFBM0M7QUFDRCxDQWhDTSxDOzs7Ozs7Ozs7Ozs7QUNSUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7O0FBRUF6RyxpRUFBSyxDQUFDLFlBQUs7QUFDVDtBQUNBdUMsa0ZBQWM7QUFDZDJDLHVHQUEyQjtBQUMzQm9CLG1HQUF5QjtBQUN6QkwsOEVBQXNCO0FBQ3RCaEwseUVBQWMsQ0FBQyxtQ0FBRCxFQUFzQyxDQUF0QyxDQUFkO0FBQ0QsQ0FQSSxDQUFMLEM7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUEsSUFBTThILGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQzJELEdBQUQsRUFBUztBQUM3QixNQUFHLE9BQU9BLEdBQVAsS0FBZSxRQUFsQixFQUE2QjtBQUMzQixXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFJO0FBQ0YsUUFBTUMsVUFBVSxHQUFHeEQsSUFBSSxDQUFDQyxLQUFMLENBQVdzRCxHQUFYLENBQW5CO0FBQ0EsV0FBT0MsVUFBUDtBQUNELEdBSEQsQ0FHRSxPQUFPN0YsS0FBUCxFQUFjO0FBQ2QsV0FBTyxLQUFQO0FBQ0Q7QUFDRixDQVZEOztBQVdlaUMsNEVBQWYsRSIsImZpbGUiOiJ0ZW1wbGF0ZS5wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy90ZW1wbGF0ZS9wcm9kdWN0LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy1wdXJlL3N0YWJsZS9pbnN0YW5jZS9pbmNsdWRlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzLXB1cmUvc3RhYmxlL2luc3RhbmNlL3NsaWNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMtcHVyZS9zdGFibGUvanNvbi9zdHJpbmdpZnlcIik7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5mb3JtYXRNb25leSA9IGZvcm1hdE1vbmV5O1xuLyoqXG4gKiBDdXJyZW5jeSBIZWxwZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQSBjb2xsZWN0aW9uIG9mIHVzZWZ1bCBmdW5jdGlvbnMgdGhhdCBoZWxwIHdpdGggY3VycmVuY3kgZm9ybWF0dGluZ1xuICpcbiAqIEN1cnJlbnQgY29udGVudHNcbiAqIC0gZm9ybWF0TW9uZXkgLSBUYWtlcyBhbiBhbW91bnQgaW4gY2VudHMgYW5kIHJldHVybnMgaXQgYXMgYSBmb3JtYXR0ZWQgZG9sbGFyIHZhbHVlLlxuICpcbiAqL1xuXG52YXIgbW9uZXlGb3JtYXQgPSAnJHt7YW1vdW50fX0nO1xuXG4vKipcbiAqIEZvcm1hdCBtb25leSB2YWx1ZXMgYmFzZWQgb24geW91ciBzaG9wIGN1cnJlbmN5IHNldHRpbmdzXG4gKiBAcGFyYW0gIHtOdW1iZXJ8c3RyaW5nfSBjZW50cyAtIHZhbHVlIGluIGNlbnRzIG9yIGRvbGxhciBhbW91bnQgZS5nLiAzMDAgY2VudHNcbiAqIG9yIDMuMDAgZG9sbGFyc1xuICogQHBhcmFtICB7U3RyaW5nfSBmb3JtYXQgLSBzaG9wIG1vbmV5X2Zvcm1hdCBzZXR0aW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHZhbHVlIC0gZm9ybWF0dGVkIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdE1vbmV5KGNlbnRzLCBmb3JtYXQpIHtcbiAgaWYgKHR5cGVvZiBjZW50cyA9PT0gJ3N0cmluZycpIHtcbiAgICBjZW50cyA9IGNlbnRzLnJlcGxhY2UoJy4nLCAnJyk7XG4gIH1cbiAgdmFyIHZhbHVlID0gJyc7XG4gIHZhciBwbGFjZWhvbGRlclJlZ2V4ID0gL1xce1xce1xccyooXFx3KylcXHMqXFx9XFx9LztcbiAgdmFyIGZvcm1hdFN0cmluZyA9IGZvcm1hdCB8fCBtb25leUZvcm1hdDtcblxuICBmdW5jdGlvbiBmb3JtYXRXaXRoRGVsaW1pdGVycyhudW1iZXIpIHtcbiAgICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAyO1xuICAgIHZhciB0aG91c2FuZHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcsJztcbiAgICB2YXIgZGVjaW1hbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogJy4nO1xuXG4gICAgaWYgKGlzTmFOKG51bWJlcikgfHwgbnVtYmVyID09IG51bGwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIG51bWJlciA9IChudW1iZXIgLyAxMDAuMCkudG9GaXhlZChwcmVjaXNpb24pO1xuXG4gICAgdmFyIHBhcnRzID0gbnVtYmVyLnNwbGl0KCcuJyk7XG4gICAgdmFyIGRvbGxhcnNBbW91bnQgPSBwYXJ0c1swXS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csICckMScgKyB0aG91c2FuZHMpO1xuICAgIHZhciBjZW50c0Ftb3VudCA9IHBhcnRzWzFdID8gZGVjaW1hbCArIHBhcnRzWzFdIDogJyc7XG5cbiAgICByZXR1cm4gZG9sbGFyc0Ftb3VudCArIGNlbnRzQW1vdW50O1xuICB9XG5cbiAgc3dpdGNoIChmb3JtYXRTdHJpbmcubWF0Y2gocGxhY2Vob2xkZXJSZWdleClbMV0pIHtcbiAgICBjYXNlICdhbW91bnQnOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMik7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdhbW91bnRfbm9fZGVjaW1hbHMnOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdhbW91bnRfd2l0aF9jb21tYV9zZXBhcmF0b3InOlxuICAgICAgdmFsdWUgPSBmb3JtYXRXaXRoRGVsaW1pdGVycyhjZW50cywgMiwgJy4nLCAnLCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnYW1vdW50X25vX2RlY2ltYWxzX3dpdGhfY29tbWFfc2VwYXJhdG9yJzpcbiAgICAgIHZhbHVlID0gZm9ybWF0V2l0aERlbGltaXRlcnMoY2VudHMsIDAsICcuJywgJywnKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFN0cmluZy5yZXBsYWNlKHBsYWNlaG9sZGVyUmVnZXgsIHZhbHVlKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJlbG9hZCA9IHByZWxvYWQ7XG5leHBvcnRzLmxvYWRJbWFnZSA9IGxvYWRJbWFnZTtcbmV4cG9ydHMuaW1hZ2VTaXplID0gaW1hZ2VTaXplO1xuZXhwb3J0cy5nZXRTaXplZEltYWdlVXJsID0gZ2V0U2l6ZWRJbWFnZVVybDtcbmV4cG9ydHMucmVtb3ZlUHJvdG9jb2wgPSByZW1vdmVQcm90b2NvbDtcbi8qKlxuICogSW1hZ2UgSGVscGVyIEZ1bmN0aW9uc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9TaG9waWZ5L3NsYXRlLmdpdC5cbiAqXG4gKi9cblxuLyoqXG4gKiBQcmVsb2FkcyBhbiBpbWFnZSBpbiBtZW1vcnkgYW5kIHVzZXMgdGhlIGJyb3dzZXJzIGNhY2hlIHRvIHN0b3JlIGl0IHVudGlsIG5lZWRlZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBpbWFnZXMgLSBBIGxpc3Qgb2YgaW1hZ2UgdXJsc1xuICogQHBhcmFtIHtTdHJpbmd9IHNpemUgLSBBIHNob3BpZnkgaW1hZ2Ugc2l6ZSBhdHRyaWJ1dGVcbiAqL1xuXG5mdW5jdGlvbiBwcmVsb2FkKGltYWdlcywgc2l6ZSkge1xuICBpZiAodHlwZW9mIGltYWdlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBpbWFnZXMgPSBbaW1hZ2VzXTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGltYWdlID0gaW1hZ2VzW2ldO1xuICAgIGxvYWRJbWFnZShnZXRTaXplZEltYWdlVXJsKGltYWdlLCBzaXplKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhbmQgY2FjaGVzIGFuIGltYWdlIGluIHRoZSBicm93c2VycyBjYWNoZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gQW4gaW1hZ2UgdXJsXG4gKi9cbmZ1bmN0aW9uIGxvYWRJbWFnZShwYXRoKSB7XG4gIG5ldyBJbWFnZSgpLnNyYyA9IHBhdGg7XG59XG5cbi8qKlxuICogRmluZCB0aGUgU2hvcGlmeSBpbWFnZSBhdHRyaWJ1dGUgc2l6ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzcmNcbiAqIEByZXR1cm5zIHtudWxsfVxuICovXG5mdW5jdGlvbiBpbWFnZVNpemUoc3JjKSB7XG4gIHZhciBtYXRjaCA9IHNyYy5tYXRjaCgvLitfKCg/OnBpY298aWNvbnx0aHVtYnxzbWFsbHxjb21wYWN0fG1lZGl1bXxsYXJnZXxncmFuZGUpfFxcZHsxLDR9eFxcZHswLDR9fHhcXGR7MSw0fSlbX1xcLkBdLyk7XG5cbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuIG1hdGNoWzFdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQWRkcyBhIFNob3BpZnkgc2l6ZSBhdHRyaWJ1dGUgdG8gYSBVUkxcbiAqXG4gKiBAcGFyYW0gc3JjXG4gKiBAcGFyYW0gc2l6ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGdldFNpemVkSW1hZ2VVcmwoc3JjLCBzaXplKSB7XG4gIGlmIChzaXplID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHNyYztcbiAgfVxuXG4gIGlmIChzaXplID09PSAnbWFzdGVyJykge1xuICAgIHJldHVybiByZW1vdmVQcm90b2NvbChzcmMpO1xuICB9XG5cbiAgdmFyIG1hdGNoID0gc3JjLm1hdGNoKC9cXC4oanBnfGpwZWd8Z2lmfHBuZ3xibXB8Yml0bWFwfHRpZmZ8dGlmKShcXD92PVxcZCspPyQvaSk7XG5cbiAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIHByZWZpeCA9IHNyYy5zcGxpdChtYXRjaFswXSk7XG4gICAgdmFyIHN1ZmZpeCA9IG1hdGNoWzBdO1xuXG4gICAgcmV0dXJuIHJlbW92ZVByb3RvY29sKHByZWZpeFswXSArICdfJyArIHNpemUgKyBzdWZmaXgpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb3RvY29sKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvaHR0cChzKT86LywgJycpO1xufVxuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5pbmNsdWRlcycpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLmluY2x1ZGVzO1xuIiwicmVxdWlyZSgnLi4vLi4vLi4vbW9kdWxlcy9lcy5hcnJheS5zbGljZScpO1xudmFyIGVudHJ5VmlydHVhbCA9IHJlcXVpcmUoJy4uLy4uLy4uL2ludGVybmFscy9lbnRyeS12aXJ0dWFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cnlWaXJ0dWFsKCdBcnJheScpLnNsaWNlO1xuIiwidmFyIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuLi9hcnJheS92aXJ0dWFsL2luY2x1ZGVzJyk7XG52YXIgc3RyaW5nSW5jbHVkZXMgPSByZXF1aXJlKCcuLi9zdHJpbmcvdmlydHVhbC9pbmNsdWRlcycpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG52YXIgU3RyaW5nUHJvdG90eXBlID0gU3RyaW5nLnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIG93biA9IGl0LmluY2x1ZGVzO1xuICBpZiAoaXQgPT09IEFycmF5UHJvdG90eXBlIHx8IChpdCBpbnN0YW5jZW9mIEFycmF5ICYmIG93biA9PT0gQXJyYXlQcm90b3R5cGUuaW5jbHVkZXMpKSByZXR1cm4gYXJyYXlJbmNsdWRlcztcbiAgaWYgKHR5cGVvZiBpdCA9PT0gJ3N0cmluZycgfHwgaXQgPT09IFN0cmluZ1Byb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBTdHJpbmcgJiYgb3duID09PSBTdHJpbmdQcm90b3R5cGUuaW5jbHVkZXMpKSB7XG4gICAgcmV0dXJuIHN0cmluZ0luY2x1ZGVzO1xuICB9IHJldHVybiBvd247XG59O1xuIiwidmFyIHNsaWNlID0gcmVxdWlyZSgnLi4vYXJyYXkvdmlydHVhbC9zbGljZScpO1xuXG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBvd24gPSBpdC5zbGljZTtcbiAgcmV0dXJuIGl0ID09PSBBcnJheVByb3RvdHlwZSB8fCAoaXQgaW5zdGFuY2VvZiBBcnJheSAmJiBvd24gPT09IEFycmF5UHJvdG90eXBlLnNsaWNlKSA/IHNsaWNlIDogb3duO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXMuanNvbi5zdHJpbmdpZnknKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi4vLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWpzb24gLS0gc2FmZVxuaWYgKCFjb3JlLkpTT04pIGNvcmUuSlNPTiA9IHsgc3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeSB9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQsIHJlcGxhY2VyLCBzcGFjZSkge1xuICByZXR1cm4gY29yZS5KU09OLnN0cmluZ2lmeS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uLy4uL21vZHVsZXMvZXMuc3RyaW5nLmluY2x1ZGVzJyk7XG52YXIgZW50cnlWaXJ0dWFsID0gcmVxdWlyZSgnLi4vLi4vLi4vaW50ZXJuYWxzL2VudHJ5LXZpcnR1YWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyeVZpcnR1YWwoJ1N0cmluZycpLmluY2x1ZGVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICB0cnkge1xuICAgICAgcmVnZXhwW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICAgIH0gY2F0Y2ggKGVycm9yMikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9IDc7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPCA0ID8gMSA6IG1hdGNoWzBdICsgbWF0Y2hbMV07XG59IGVsc2UgaWYgKHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9IG1hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbiAmJiArdmVyc2lvbjtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1IpIHtcbiAgcmV0dXJuIHBhdGhbQ09OU1RSVUNUT1IgKyAnUHJvdG90eXBlJ107XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xuXG52YXIgd3JhcENvbnN0cnVjdG9yID0gZnVuY3Rpb24gKE5hdGl2ZUNvbnN0cnVjdG9yKSB7XG4gIHZhciBXcmFwcGVyID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIE5hdGl2ZUNvbnN0cnVjdG9yKSB7XG4gICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCk7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihhKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGEsIGIpO1xuICAgICAgfSByZXR1cm4gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGEsIGIsIGMpO1xuICAgIH0gcmV0dXJuIE5hdGl2ZUNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG4gIFdyYXBwZXIucHJvdG90eXBlID0gTmF0aXZlQ29uc3RydWN0b3IucHJvdG90eXBlO1xuICByZXR1cm4gV3JhcHBlcjtcbn07XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgUFJPVE8gPSBvcHRpb25zLnByb3RvO1xuXG4gIHZhciBuYXRpdmVTb3VyY2UgPSBHTE9CQUwgPyBnbG9iYWwgOiBTVEFUSUMgPyBnbG9iYWxbVEFSR0VUXSA6IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuXG4gIHZhciB0YXJnZXQgPSBHTE9CQUwgPyBwYXRoIDogcGF0aFtUQVJHRVRdIHx8IChwYXRoW1RBUkdFVF0gPSB7fSk7XG4gIHZhciB0YXJnZXRQcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuXG4gIHZhciBGT1JDRUQsIFVTRV9OQVRJVkUsIFZJUlRVQUxfUFJPVE9UWVBFO1xuICB2YXIga2V5LCBzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHksIG5hdGl2ZVByb3BlcnR5LCByZXN1bHRQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcblxuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIFVTRV9OQVRJVkUgPSAhRk9SQ0VEICYmIG5hdGl2ZVNvdXJjZSAmJiBoYXMobmF0aXZlU291cmNlLCBrZXkpO1xuXG4gICAgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcblxuICAgIGlmIChVU0VfTkFUSVZFKSBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihuYXRpdmVTb3VyY2UsIGtleSk7XG4gICAgICBuYXRpdmVQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgbmF0aXZlUHJvcGVydHkgPSBuYXRpdmVTb3VyY2Vba2V5XTtcblxuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgaW1wbGVtZW50YXRpb25cbiAgICBzb3VyY2VQcm9wZXJ0eSA9IChVU0VfTkFUSVZFICYmIG5hdGl2ZVByb3BlcnR5KSA/IG5hdGl2ZVByb3BlcnR5IDogc291cmNlW2tleV07XG5cbiAgICBpZiAoVVNFX05BVElWRSAmJiB0eXBlb2YgdGFyZ2V0UHJvcGVydHkgPT09IHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSkgY29udGludWU7XG5cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGlmIChvcHRpb25zLmJpbmQgJiYgVVNFX05BVElWRSkgcmVzdWx0UHJvcGVydHkgPSBiaW5kKHNvdXJjZVByb3BlcnR5LCBnbG9iYWwpO1xuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ3MgaW4gdGhpcyB2ZXJzaW9uXG4gICAgZWxzZSBpZiAob3B0aW9ucy53cmFwICYmIFVTRV9OQVRJVkUpIHJlc3VsdFByb3BlcnR5ID0gd3JhcENvbnN0cnVjdG9yKHNvdXJjZVByb3BlcnR5KTtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICBlbHNlIGlmIChQUk9UTyAmJiB0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gJ2Z1bmN0aW9uJykgcmVzdWx0UHJvcGVydHkgPSBiaW5kKEZ1bmN0aW9uLmNhbGwsIHNvdXJjZVByb3BlcnR5KTtcbiAgICAvLyBkZWZhdWx0IGNhc2VcbiAgICBlbHNlIHJlc3VsdFByb3BlcnR5ID0gc291cmNlUHJvcGVydHk7XG5cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAoc291cmNlUHJvcGVydHkgJiYgc291cmNlUHJvcGVydHkuc2hhbSkgfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkocmVzdWx0UHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdGFyZ2V0W2tleV0gPSByZXN1bHRQcm9wZXJ0eTtcblxuICAgIGlmIChQUk9UTykge1xuICAgICAgVklSVFVBTF9QUk9UT1RZUEUgPSBUQVJHRVQgKyAnUHJvdG90eXBlJztcbiAgICAgIGlmICghaGFzKHBhdGgsIFZJUlRVQUxfUFJPVE9UWVBFKSkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkocGF0aCwgVklSVFVBTF9QUk9UT1RZUEUsIHt9KTtcbiAgICAgIH1cbiAgICAgIC8vIGV4cG9ydCB2aXJ0dWFsIHByb3RvdHlwZSBtZXRob2RzXG4gICAgICBwYXRoW1ZJUlRVQUxfUFJPVE9UWVBFXVtrZXldID0gc291cmNlUHJvcGVydHk7XG4gICAgICAvLyBleHBvcnQgcmVhbCBwcm90b3R5cGUgbWV0aG9kc1xuICAgICAgaWYgKG9wdGlvbnMucmVhbCAmJiB0YXJnZXRQcm90b3R5cGUgJiYgIXRhcmdldFByb3RvdHlwZVtrZXldKSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh0YXJnZXRQcm90b3R5cGUsIGtleSwgc291cmNlUHJvcGVydHkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJ2YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0KTtcbiAgICB9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aWVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PSAnU3RyaW5nJyA/IHNwbGl0LmNhbGwoaXQsICcnKSA6IE9iamVjdChpdCk7XG59IDogT2JqZWN0O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbi8vIGBJc1JlZ0V4cGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzcmVnZXhwXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjbGFzc29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgcmV0dXJuICFTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCJ2YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc1JlZ0V4cChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJUaGUgbWV0aG9kIGRvZXNuJ3QgYWNjZXB0IHJlZ3VsYXIgZXhwcmVzc2lvbnNcIik7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCIvLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjE1LjInLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjEgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwidmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXIoYXJndW1lbnQpLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIFBSRUZFUlJFRF9TVFJJTkcpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGlucHV0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXMoV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSB8fCAhKE5BVElWRV9TWU1CT0wgfHwgdHlwZW9mIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9PSAnc3RyaW5nJykpIHtcbiAgICBpZiAoTkFUSVZFX1NZTUJPTCAmJiBoYXMoU3ltYm9sLCBuYW1lKSkge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gU3ltYm9sW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gICAgfVxuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5jbHVkZXM7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUgfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygnaW5jbHVkZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc2xpY2UnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBuYXRpdmVTbGljZSA9IFtdLnNsaWNlO1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcbiAgICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kLCBsZW5ndGgpO1xuICAgIC8vIGlubGluZSBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBmb3IgdXNhZ2UgbmF0aXZlIGBBcnJheSNzbGljZWAgd2hlcmUgaXQncyBwb3NzaWJsZVxuICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xuICAgIGlmIChpc0FycmF5KE8pKSB7XG4gICAgICBDb25zdHJ1Y3RvciA9IE8uY29uc3RydWN0b3I7XG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiBDb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVNsaWNlLmNhbGwoTywgaywgZmluKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ID0gbmV3IChDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyICRzdHJpbmdpZnkgPSBnZXRCdWlsdEluKCdKU09OJywgJ3N0cmluZ2lmeScpO1xudmFyIHJlID0gL1tcXHVEODAwLVxcdURGRkZdL2c7XG52YXIgbG93ID0gL15bXFx1RDgwMC1cXHVEQkZGXSQvO1xudmFyIGhpID0gL15bXFx1REMwMC1cXHVERkZGXSQvO1xuXG52YXIgZml4ID0gZnVuY3Rpb24gKG1hdGNoLCBvZmZzZXQsIHN0cmluZykge1xuICB2YXIgcHJldiA9IHN0cmluZy5jaGFyQXQob2Zmc2V0IC0gMSk7XG4gIHZhciBuZXh0ID0gc3RyaW5nLmNoYXJBdChvZmZzZXQgKyAxKTtcbiAgaWYgKChsb3cudGVzdChtYXRjaCkgJiYgIWhpLnRlc3QobmV4dCkpIHx8IChoaS50ZXN0KG1hdGNoKSAmJiAhbG93LnRlc3QocHJldikpKSB7XG4gICAgcmV0dXJuICdcXFxcdScgKyBtYXRjaC5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KTtcbiAgfSByZXR1cm4gbWF0Y2g7XG59O1xuXG52YXIgRk9SQ0VEID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJHN0cmluZ2lmeSgnXFx1REYwNlxcdUQ4MzQnKSAhPT0gJ1wiXFxcXHVkZjA2XFxcXHVkODM0XCInXG4gICAgfHwgJHN0cmluZ2lmeSgnXFx1REVBRCcpICE9PSAnXCJcXFxcdWRlYWRcIic7XG59KTtcblxuaWYgKCRzdHJpbmdpZnkpIHtcbiAgLy8gYEpTT04uc3RyaW5naWZ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1qc29uLnN0cmluZ2lmeVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC13ZWxsLWZvcm1lZC1zdHJpbmdpZnlcbiAgJCh7IHRhcmdldDogJ0pTT04nLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCwgcmVwbGFjZXIsIHNwYWNlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gJHN0cmluZ2lmeS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgcmV0dXJuIHR5cGVvZiByZXN1bHQgPT0gJ3N0cmluZycgPyByZXN1bHQucmVwbGFjZShyZSwgZml4KSA6IHJlc3VsdDtcbiAgICB9XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgbm90QVJlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ub3QtYS1yZWdleHAnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGNvcnJlY3RJc1JlZ0V4cExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtaXMtcmVnZXhwLWxvZ2ljJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlc1xuJCh7IHRhcmdldDogJ1N0cmluZycsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFjb3JyZWN0SXNSZWdFeHBMb2dpYygnaW5jbHVkZXMnKSB9LCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+U3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpXG4gICAgICAuaW5kZXhPZihub3RBUmVnRXhwKHNlYXJjaFN0cmluZyksIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2UvaW5jbHVkZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvaW5zdGFuY2Uvc2xpY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgcGFyZW50ID0gcmVxdWlyZSgnLi4vLi4vZXMvanNvbi9zdHJpbmdpZnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJlbnQ7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgc2V0Wm9vbSBmcm9tICcuL3Byb2R1Y3Rab29tL3NldFpvb20nO1xuaW1wb3J0IHNldFVwUGFucyBmcm9tICcuL3Byb2R1Y3Rab29tL3NldFVwUGFucyc7XG5pbXBvcnQgc2V0VHJhbnNsYXRlIGZyb20gJy4vcHJvZHVjdFpvb20vc2V0VHJhbnNsYXRlJztcbmltcG9ydCByZXR1cm5Jbml0aWFsWm9vbVN0YXRlIGZyb20gJy4vcHJvZHVjdFpvb20vcmV0dXJuSW5pdGlhbFpvb21TdGF0ZSc7XG5pbXBvcnQgZXZ0Q29vcmRzIGZyb20gJy4vcHJvZHVjdFpvb20vZXZ0Q29vcmRzJztcbmltcG9ydCB0b2dnbGVab29tIGZyb20gJy4vcHJvZHVjdFpvb20vdG9nZ2xlWm9vbSc7XG5pbXBvcnQgZW5kUGFuIGZyb20gJy4vcHJvZHVjdFpvb20vZW5kUGFuJztcbmltcG9ydCBzdGFydFBhbiBmcm9tICcuL3Byb2R1Y3Rab29tL3N0YXJ0UGFuJztcbmltcG9ydCBtb3ZlUGFuIGZyb20gJy4vcHJvZHVjdFpvb20vbW92ZVBhbic7XG5pbXBvcnQgdXBkYXRlVXJsIGZyb20gJy4vcHJvZHVjdFpvb20vdXBkYXRlVXJsJztcblxuXG5jb25zdCBpbml0aWFsaXNlWm9vbSA9ICh3cmFwcGVyU2VsZWN0b3IsIGxldmVsKSA9PiB7XG5cbiAgLy9jaGVjayB3ZSBoYXZlIGNvbnRhaW5lcjpcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3cmFwcGVyU2VsZWN0b3IpO1xuICBpZiAoIWNvbnRhaW5lcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cblxuICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAvL2luaXRhbGlzZSB0aGUgc3RhdGU6XG4gIGxldCB6b29tSW1hZ2VTdGF0ZSA9IHJldHVybkluaXRpYWxab29tU3RhdGUoY29udGFpbmVyLCBsZXZlbCk7XG5cblxuICAvL2lmIHlvdSBjbGljayBvZmYgb2YgdGhlIHpvb20sIHdlIHJlc2V0IGl0LlxuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgbGV0IGVsID0gZXZ0LnRhcmdldDtcbiAgICBsZXQgY2xpY2tlZE9mZiA9IHRydWU7XG4gICAgd2hpbGUgKGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChlbCA9PT0gY29udGFpbmVyKSB7XG4gICAgICAgIGNsaWNrZWRPZmYgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGlmIChjbGlja2VkT2ZmICYmIHpvb21JbWFnZVN0YXRlLnpvb21GbGFnKSB7XG4gICAgICB6b29tSW1hZ2VTdGF0ZSA9IHNldFpvb20oem9vbUltYWdlU3RhdGUuY29udGFpbmVyQ2VudHJlLCAxLCB6b29tSW1hZ2VTdGF0ZSk7XG4gICAgfVxuICB9KVxuXG4gIC8vc3RvcCBhdXRvbWF0aWNhbGx5IHBpY2tpbmcgdXAgYW5kIGRyYWdnaW5nIHRoZSBpbWFnZSB3aGVuIG1vdXNlZG93blxuICB6b29tSW1hZ2VTdGF0ZS5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgIGlmICh6b29tSW1hZ2VTdGF0ZS56b29tRmxhZykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuICB9KTtcblxuICAvL2NsaWNrIHRvIHpvb20gZXZlbnQsIHRvZ2dsZSB0byBjb29yZHMgb2YgY2xpY2tcbiAgem9vbUltYWdlU3RhdGUuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHpvb21JbWFnZVN0YXRlID0gdG9nZ2xlWm9vbSh7XG4gICAgICB4OiBlLm9mZnNldFgsXG4gICAgICB5OiBlLm9mZnNldFlcbiAgICB9LCB6b29tSW1hZ2VTdGF0ZSlcbiAgfSk7XG5cblxuICAvL3BpbmNoIHRvIHpvb20gZXZlbnQsIHNldCB0aGUgem9vbSB0byB0aGUgc2NhbGUgb2YgdGhlIGV2ZW50IChob3cgbXVjaCBwaW5jaGVkKVxuICB6b29tSW1hZ2VTdGF0ZS5lbC5hZGRFdmVudExpc3RlbmVyKCdnZXN0dXJlY2hhbmdlJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgem9vbUltYWdlU3RhdGUgPSBzZXRab29tKHpvb21JbWFnZVN0YXRlLmNvbnRhaW5lckNlbnRyZSwgZS5zY2FsZSwgem9vbUltYWdlU3RhdGUpO1xuICB9KTtcblxuICAvL2VuZiBvZiBwaW5jaCBldmVudCwgem9vbSB0byBhbW91bnQgcGluY2hlZCBvciAxIChpZiB6b29taW5nIG91dCksIHVwYXRlIHVybFxuICB6b29tSW1hZ2VTdGF0ZS5lbC5hZGRFdmVudExpc3RlbmVyKCdnZXN0dXJlZW5kJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgem9vbUltYWdlU3RhdGUgPSBzZXRab29tKHpvb21JbWFnZVN0YXRlLmNvbnRhaW5lckNlbnRyZSwgTWF0aC5tYXgoZS5zY2FsZSwgMSksIHpvb21JbWFnZVN0YXRlKTtcbiAgICB6b29tSW1hZ2VTdGF0ZSA9IGUuc2NhbGUgPiAxID8gc2V0VXBQYW5zKHpvb21JbWFnZVN0YXRlLmNvbnRhaW5lckNlbnRyZSwgem9vbUltYWdlU3RhdGUpIDogem9vbUltYWdlU3RhdGU7XG4gICAgem9vbUltYWdlU3RhdGUgPSB1cGRhdGVVcmwoem9vbUltYWdlU3RhdGUpO1xuICB9KTtcblxuXG5cbiAgLy9zdGFydCBvZiBkcmFnLCBzdGFydCB0aGUgcGFubmluZyAoaW4gem9vbWVkIGluISlcbiAgWyd0b3VjaHN0YXJ0JywgJ21vdXNlZG93biddLmZvckVhY2goKGV2dCkgPT4ge1xuXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBlID0+IHtcbiAgICAgIGlmICghem9vbUltYWdlU3RhdGUuem9vbUZsYWcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgem9vbUltYWdlU3RhdGUgPSBzdGFydFBhbihldnRDb29yZHMoZSksIChlLnRhcmdldCA9PT0gem9vbUltYWdlU3RhdGUuZWwpLCB6b29tSW1hZ2VTdGF0ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vbW92ZSBkdXJpbmcgdGhlIHBhbiwgaWYgd2UgYXJlIGN1cnJlbnRseSBwYW5uaW5nXG4gIFsndG91Y2htb3ZlJywgJ21vdXNlbW92ZSddLmZvckVhY2goKGV2dCkgPT4ge1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2dCwgZSA9PiB7XG4gICAgICBpZiAoIXpvb21JbWFnZVN0YXRlLmRyYWdBY3RpdmUgfHwgIXpvb21JbWFnZVN0YXRlLnpvb21GbGFnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgem9vbUltYWdlU3RhdGUgPSBtb3ZlUGFuKHtcbiAgICAgICAgeDogZXZ0Q29vcmRzKGUpLnggLSB6b29tSW1hZ2VTdGF0ZS5pbml0aWFsLngsXG4gICAgICAgIHk6IGV2dENvb3JkcyhlKS55IC0gem9vbUltYWdlU3RhdGUuaW5pdGlhbC55XG4gICAgICB9LCB6b29tSW1hZ2VTdGF0ZSk7XG4gICAgICB6b29tSW1hZ2VTdGF0ZSA9IHNldFRyYW5zbGF0ZSh6b29tSW1hZ2VTdGF0ZSk7XG4gICAgfSwgZmFsc2UsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgfSk7XG5cblxuICAvL2VuZCBvZiBkcmFnLCBzdG9wIHRoZSBwYW5uaW5nXG4gIFsndG91Y2hlbmQnLCAnbW91c2V1cCddLmZvckVhY2goKGV2dCkgPT4ge1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2dCwgKCkgPT4ge1xuICAgICAgem9vbUltYWdlU3RhdGUgPSBlbmRQYW4oem9vbUltYWdlU3RhdGUpO1xuICAgIH0sIGZhbHNlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gIH0pO1xuXG4gIC8vY3JlYXRlIHRoZSB0b2dnbGU6XG4gIGNvbnN0IHpvb21Ub2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgem9vbVRvZ2dsZS5jbGFzc0xpc3QuYWRkKCd6b29tLXRvZ2dsZScpO1xuXG4gIC8vem9vbSB0b2dnbGUsIHRvZ2dsZSBiZXR3ZWVuIG1heCBsZXZlbCBhbmQgMVxuICB6b29tVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHpvb21JbWFnZVN0YXRlID0gc2V0Wm9vbSh6b29tSW1hZ2VTdGF0ZS5jb250YWluZXJDZW50cmUsIHpvb21JbWFnZVN0YXRlLnpvb21GbGFnID8gMSA6IHpvb21JbWFnZVN0YXRlLm1heFpvb20sIHpvb21JbWFnZVN0YXRlKTtcbiAgICB6b29tSW1hZ2VTdGF0ZSA9IHVwZGF0ZVVybCh6b29tSW1hZ2VTdGF0ZSk7XG4gIH0pO1xuXG4gIC8vYXBwZW5kIHRoZSB0b2dnbGVcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHpvb21Ub2dnbGUpO1xuXG4gIC8vcmVzZXQgYWZ0ZXIgcmVzaXplLi4uXG4gIGxldCByZXNpemVUaW1lcjtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZXIpO1xuICAgIHJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB6b29tSW1hZ2VTdGF0ZSA9IHJldHVybkluaXRpYWxab29tU3RhdGUoY29udGFpbmVyLCBsZXZlbCk7XG4gICAgfSwgMzAwKTtcbiAgfSk7XG5cbiAgLy9hZGQgcmVhZHkgY2xhc3NcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3pvb215LWluaXRpYWxpc2VkJyk7XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXNlWm9vbTsiLCJjb25zdCBlbmRQYW4gPSAoc3RhdGUpID0+IHtcbiAgY2xlYXJUaW1lb3V0KHN0YXRlLmRyYWdUaW1lcik7XG4gIHN0YXRlLmluaXRpYWwueCA9IHN0YXRlLmN1cnJlbnQueDtcbiAgc3RhdGUuaW5pdGlhbC55ID0gc3RhdGUuY3VycmVudC55O1xuICBzdGF0ZS5kcmFnQWN0aXZlID0gZmFsc2U7XG4gIHN0YXRlLmNvbnRhaW5lci5kYXRhc2V0LmRyYWdnaW5nID0gZmFsc2U7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZW5kUGFuOyIsIlxuY29uc3QgZXZ0Q29vcmRzID0gKGUpID0+IHtcbiAgY29uc3QgY29vcmRzID0ge307XG4gIGlmIChlLnRvdWNoZXMpIHtcbiAgICBjb29yZHMueCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIGNvb3Jkcy55ID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gIH0gZWxzZSB7XG4gICAgY29vcmRzLnggPSBlLmNsaWVudFg7XG4gICAgY29vcmRzLnkgPSBlLmNsaWVudFk7XG4gIH1cbiAgcmV0dXJuIGNvb3Jkcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZXZ0Q29vcmRzOyIsIlxuY29uc3QgbW92ZVBhbiA9IChjb29yZHMsIHN0YXRlKSA9PiB7XG4gIHN0YXRlLmRyYWdCb3VuZHMgPSB7XG4gICAgeE1heDogc3RhdGUudHJhbnNmb3JtT3JpZ2luLnggKiAoc3RhdGUuem9vbUxldmVsIC0gMSksXG4gICAgeE1pbjogKHN0YXRlLmNvbnRhaW5lci5vZmZzZXRXaWR0aCAtIHN0YXRlLnRyYW5zZm9ybU9yaWdpbi54KSAqICgxIC0gc3RhdGUuem9vbUxldmVsKSxcbiAgICB5TWF4OiBzdGF0ZS50cmFuc2Zvcm1PcmlnaW4ueSAqIChzdGF0ZS56b29tTGV2ZWwgLSAxKSxcbiAgICB5TWluOiAoc3RhdGUuY29udGFpbmVyLm9mZnNldEhlaWdodCAtIHN0YXRlLnRyYW5zZm9ybU9yaWdpbi55KSAqICgxIC0gc3RhdGUuem9vbUxldmVsKVxuICB9XG4gIHN0YXRlLmN1cnJlbnQueCA9IE1hdGgubWF4KHN0YXRlLmRyYWdCb3VuZHMueE1pbiwgTWF0aC5taW4oY29vcmRzLngsIHN0YXRlLmRyYWdCb3VuZHMueE1heCkpO1xuICBzdGF0ZS5jdXJyZW50LnkgPSBNYXRoLm1heChzdGF0ZS5kcmFnQm91bmRzLnlNaW4sIE1hdGgubWluKGNvb3Jkcy55LCBzdGF0ZS5kcmFnQm91bmRzLnlNYXgpKTtcbiAgc3RhdGUub2Zmc2V0LnggPSBzdGF0ZS5jdXJyZW50Lng7XG4gIHN0YXRlLm9mZnNldC55ID0gc3RhdGUuY3VycmVudC55O1xuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vdmVQYW47IiwiXG5pbXBvcnQgc2V0Wm9vbSBmcm9tICcuL3NldFpvb20nO1xuY29uc3QgcmV0dXJuSW5pdGlhbFpvb21TdGF0ZSA9IChjb250YWluZXIsIG1heFpvb20pID0+IHtcbiAgY29uc3QgZWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtbWFpbi1wcm9kdWN0LWltYWdlXScpO1xuICBjb25zdCBjb250YWluZXJDZW50cmUgPSB7XG4gICAgeDogY29udGFpbmVyLm9mZnNldFdpZHRoIC8gMixcbiAgICB5OiBjb250YWluZXIub2Zmc2V0SGVpZ2h0IC8gMixcbiAgfVxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICBlbCxcbiAgICBjb250YWluZXJDZW50cmUsXG4gICAgem9vbUZsYWc6IGZhbHNlLFxuICAgIHpvb21MZXZlbDogMSxcbiAgICBtYXhab29tLFxuICAgIGRyYWdBY3RpdmU6IGZhbHNlLFxuICAgIHRyYW5zZm9ybU9yaWdpbjoge1xuICAgICAgeDogY29udGFpbmVyQ2VudHJlLngsXG4gICAgICB5OiBjb250YWluZXJDZW50cmUueVxuICAgIH0sXG4gICAgY3VycmVudDoge1xuICAgICAgeDogY29udGFpbmVyQ2VudHJlLngsXG4gICAgICB5OiBjb250YWluZXJDZW50cmUueVxuICAgIH0sXG4gICAgaW5pdGlhbDoge1xuICAgICAgeDogY29udGFpbmVyQ2VudHJlLngsXG4gICAgICB5OiBjb250YWluZXJDZW50cmUueVxuICAgIH0sXG4gICAgb2Zmc2V0OiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH0sXG4gICAgZHJhZ1RpbWVyOiBudWxsLFxuICAgIGRyYWdCb3VuZHM6IHtcbiAgICAgIHhNYXg6IDAsXG4gICAgICB4TWluOiAwLFxuICAgICAgeU1heDogMCxcbiAgICAgIHlNaW46IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNldFpvb20oY29udGFpbmVyQ2VudHJlLCAxLCBzdGF0ZSk7XG4gXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmV0dXJuSW5pdGlhbFpvb21TdGF0ZTsiLCJjb25zdCBzZXRUcmFuc2xhdGUgPSAoc3RhdGUpID0+IHtcbiAgc3RhdGUuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyBzdGF0ZS5jdXJyZW50LnggKyAncHgsICcgKyBzdGF0ZS5jdXJyZW50LnkgKyAncHgsIDApIHNjYWxlKCcgKyBzdGF0ZS56b29tTGV2ZWwgKyAnKSc7XG4gIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydCBkZWZhdWx0IHNldFRyYW5zbGF0ZTsiLCJjb25zdCBzZXRVcFBhbnMgPSAoY29vcmRzLCBzdGF0ZSkgPT4ge1xuICBzdGF0ZS50cmFuc2Zvcm1PcmlnaW4ueCA9IGNvb3Jkcy54O1xuICBzdGF0ZS50cmFuc2Zvcm1PcmlnaW4ueSA9IGNvb3Jkcy55O1xuICBzdGF0ZS5kcmFnQWN0aXZlID0gZmFsc2U7XG4gIHN0YXRlLmN1cnJlbnQueCA9IHN0YXRlLmNvbnRhaW5lckNlbnRyZS54O1xuICBzdGF0ZS5jdXJyZW50LnkgPSBzdGF0ZS5jb250YWluZXJDZW50cmUueTtcbiAgc3RhdGUuaW5pdGlhbC54ID0gc3RhdGUuY29udGFpbmVyQ2VudHJlLng7XG4gIHN0YXRlLmluaXRpYWwueSA9IHN0YXRlLmNvbnRhaW5lckNlbnRyZS55O1xuICBzdGF0ZS5vZmZzZXQueCA9IDA7XG4gIHN0YXRlLm9mZnNldC55ID0gMDtcbiAgcmV0dXJuIHN0YXRlO1xufVxuZXhwb3J0IGRlZmF1bHQgc2V0VXBQYW5zOyIsImNvbnN0IHNldFpvb20gPSAoY29vcmRzLCBsZXZlbCwgc3RhdGUpID0+IHtcbiAgaWYgKGxldmVsICE9PSBzdGF0ZS56b29tTGV2ZWwpIHtcbiAgICBzdGF0ZS5lbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgc3RhdGUuZWwuZGF0YXNldC56b29taW5nID0gJ2ZhbHNlJztcbiAgICB9KTtcbiAgICBzdGF0ZS5lbC5kYXRhc2V0Lnpvb21pbmcgPSBzdGF0ZS56b29tRmxhZyA/ICdvdXQnIDogJ2luJztcbiAgfVxuICBzdGF0ZS56b29tTGV2ZWwgPSBNYXRoLm1pbihNYXRoLm1heChsZXZlbCwgMSksIHN0YXRlLm1heFpvb20pO1xuICBzdGF0ZS56b29tRmxhZyA9IHN0YXRlLnpvb21MZXZlbCA+IDE7XG4gIHN0YXRlLmVsLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgnICsgc3RhdGUuem9vbUxldmVsICsgJyknO1xuICBzdGF0ZS5lbC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAnJyArIGNvb3Jkcy54ICsgJ3B4ICcgKyBjb29yZHMueSArICdweCc7XG4gIHN0YXRlLmVsLmRhdGFzZXQuem9vbWVkID0gc3RhdGUuem9vbUZsYWcgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldFpvb207IiwiY29uc3Qgc3RhcnRQYW4gPSAoY29vcmRzLCBvbkltYWdlLCBzdGF0ZSkgPT4ge1xuICBjbGVhclRpbWVvdXQoc3RhdGUuZHJhZ1RpbWVyKTtcbiAgc3RhdGUuaW5pdGlhbC54ID0gY29vcmRzLnggLSBzdGF0ZS5vZmZzZXQueDtcbiAgc3RhdGUuaW5pdGlhbC55ID0gY29vcmRzLnkgLSBzdGF0ZS5vZmZzZXQueTtcbiAgaWYgKG9uSW1hZ2UpIHtcbiAgICBzdGF0ZS5kcmFnQWN0aXZlID0gdHJ1ZTtcbiAgICBzdGF0ZS5kcmFnVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0YXRlLmNvbnRhaW5lci5kYXRhc2V0LmRyYWdnaW5nID0gdHJ1ZTtcbiAgICB9LCAxMjApO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0YXJ0UGFuOyIsIlxuaW1wb3J0IHNldFpvb20gZnJvbSAnLi9zZXRab29tJztcbmltcG9ydCBzZXRVcFBhbnMgZnJvbSAnLi9zZXRVcFBhbnMnO1xuaW1wb3J0IHVwZGF0ZVVybCBmcm9tICcuL3VwZGF0ZVVybCc7XG5cbmNvbnN0IHRvZ2dsZVpvb20gPSAoY29vcmRzLCBzdGF0ZSkgPT4ge1xuICBpZiAoIXN0YXRlLnpvb21GbGFnKSB7XG4gICAgc3RhdGUgPSBzZXRab29tKGNvb3Jkcywgc3RhdGUubWF4Wm9vbSwgc3RhdGUpO1xuICAgIHN0YXRlID0gc2V0VXBQYW5zKGNvb3Jkcywgc3RhdGUpO1xuICB9IGVsc2Uge1xuICAgIHN0YXRlID0gc2V0Wm9vbShjb29yZHMsIDEsIHN0YXRlKTtcbiAgfVxuICBzdGF0ZSA9IHVwZGF0ZVVybChzdGF0ZSk7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9nZ2xlWm9vbTsiLCJpbXBvcnQgKiBhcyBzaG9waWZ5VGhlbWVJbWFnZXMgZnJvbSAnQHNob3BpZnkvdGhlbWUtaW1hZ2VzJztcbmNvbnN0IHVwZGF0ZVVybCA9IChzdGF0ZSkgPT4ge1xuICBzdGF0ZS5lbC5zcmMgPSBzdGF0ZS56b29tRmxhZyA/IHNob3BpZnlUaGVtZUltYWdlcy5nZXRTaXplZEltYWdlVXJsKHN0YXRlLmVsLmRhdGFzZXQucmF3U3JjLCAnMjAwMHgyMDAwJykgOiBzaG9waWZ5VGhlbWVJbWFnZXMuZ2V0U2l6ZWRJbWFnZVVybChzdGF0ZS5lbC5kYXRhc2V0LnJhd1NyYywgJzEwMDB4MTAwMCcpO1xuICByZXR1cm4gc3RhdGU7XG59XG5leHBvcnQgZGVmYXVsdCB1cGRhdGVVcmw7IiwiY29uc3QgcmVhZHkgPSAoaW5zdGFudGlhdGUpID0+IHtcbiAgLy9cbiAgLy8gVHVyYm8gbGlua3MgaW5zdGFudGlhdGlvblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiAod2luZG93Wyd0aGVtZSddWyd0dXJib2xpbmtzRW5hYmxlZCddKSB7XG4gICAgLy8gRkUgRE9NIChGUkVFRE9NISlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0dXJib2xpbmtzOmxvYWQnLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmJsdWJvbHQudHVyYm9MaW5rc0FjdGl2ZSkge1xuICAgICAgICBsZXQgbG9hZEV2ZW50O1xuICAgICAgICBsZXQgb25Mb2FkRXZlbnQ7XG4gICAgICAgIGlmICh0eXBlb2YgKEV2ZW50KSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGxvYWRFdmVudCA9IG5ldyBFdmVudCgnbG9hZCcsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgICBvbkxvYWRFdmVudCA9IG5ldyBFdmVudCgnb25Mb2FkJywge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxvYWRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgIGxvYWRFdmVudC5pbml0RXZlbnQoJ2xvYWQnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBvbkxvYWRFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgIG9uTG9hZEV2ZW50LmluaXRFdmVudCgnb25Mb2FkJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2hFdmVudChsb2FkRXZlbnQpO1xuICAgICAgICBkaXNwYXRjaEV2ZW50KG9uTG9hZEV2ZW50KTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5ibHVib2x0LmdsaWRlcyA9IFtdO1xuICAgICAgd2luZG93LmJsdWJvbHQudHVyYm9MaW5rc0FjdGl2ZSA9IHRydWVcbiAgICAgIGluc3RhbnRpYXRlKHRydWUpXG4gICAgfSlcbiAgICAvLyA0MDQgaGFuZGxlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdWJvbHQ6bG9hZCcsICgpID0+IGluc3RhbnRpYXRlKGZhbHNlKSk7XG4gICAgLy9cbiAgICAvLyBGYWxsIGJhY2sgZm9yIHR1cmJvIGxpbmtzIGZhaWx1cmVzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghd2luZG93LmJsdWJvbHQudHVyYm9MaW5rc0FjdGl2ZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1R1cmJvTGlua3MgbWF5IGhhdmUgZmFpbGVkLCBsb2FkaW5nIGZhbGwgYmFjaycpXG4gICAgICAgICAgaW5zdGFudGlhdGUoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH0sIDM1MDApXG4gICAgfSk7XG4gIH1cbiAgLy9cbiAgLy8gTm8gVHVyYm9saW5rcz8gTm8gcHJvYmxlbVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxufVxuY29uc3Qgb25TaG9waWZ5U2VjdGlvbkxvYWQgPSAocnVuKSA9PiB7XG4gIC8vXG4gIC8vIFNob3BpZnkgRXZlbnQgaW5zdGFudGlhdGlvblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0IHNob3BpZnlFdmVudHMgPSBbXG4gICAgJ3Nob3BpZnk6c2VjdGlvbjpsb2FkJ1xuICBdO1xuICBzaG9waWZ5RXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4gcnVuKGV2ZW50KSk7XG4gIH0pO1xufVxuZXhwb3J0IHtcbiAgcmVhZHksXG4gIG9uU2hvcGlmeVNlY3Rpb25Mb2FkXG59OyIsImV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgUFJPRFVDVF9GT1JNX1NFTEVDVE9SOiAnW2RhdGEtcHJvZHVjdC1mb3JtXScsXG4gIFBST0RVQ1RfT1BUSU9OX0ZJRUxEX1NFTEVDVE9SOiAnW2RhdGEtb3B0aW9uLXNlbGVjdF0nLFxuICBQUk9EVUNUX01BSU5fSU1BR0VfU0VMRUNUT1I6ICdbZGF0YS1tYWluLXByb2R1Y3QtaW1hZ2VdJyxcbiAgUFJPRFVDVF9WQVJJQU5UX0lEX0ZPUk1fRklFTEQ6ICdbZGF0YS1wcm9kdWN0LWZvcm1dIFtuYW1lPVwiaWRcIl0nLFxuICBQUk9EVUNUX0lNQUdFX1RIVU1CU19TRUxFQ1RPUjogJ1tkYXRhLXByb2R1Y3QtdGh1bWJuYWlsLWluZGV4XScsXG4gIFBST0RVQ1RfSU1BR0VfVEhVTUJTX0FUVFI6ICdkYXRhLXByb2R1Y3QtdGh1bWJuYWlsLWluZGV4JyxcbiAgUFJPRFVDVF9USFVNQk5BSUxfQUNUSVZFX0NMQVNTOiAnYWN0aXZlJyxcbiAgUFJPRFVDVF9TVE9DS19XUkFQUEVSX0FUVFI6ICdkYXRhLXByb2R1Y3QtaW4tc3RvY2snLFxuICBQUk9EVUNUX09PU19URVhUX0FUVFI6ICdkYXRhLW9vcy10ZXh0JyxcbiAgUFJPRFVDVF9MT1dfU1RPQ0tfU0VMRUNUT1I6ICdbZGF0YS1sb3ctc3RvY2tdJyxcbiAgUFJPRFVDVF9JTl9TVE9DS19URVhUX0FUVFI6ICdkYXRhLWluLXN0b2NrLXRleHQnLFxuICBQUk9EVUNUX1VOQVZBSUxBQkxFX1RFWFRfQVRUUjogJ2RhdGEtdW5hdmFpbGFibGUtdGV4dCcsXG4gIFBST0RVQ1RfRk9STV9TVUJNSVRfQlVUVE9OX1NFTEVDVE9SOiAnW2RhdGEtcHJvZHVjdC1mb3JtLXN1Ym1pdF0nLFxuICBQUk9EVUNUX1BSSUNFX1NFTEVDVE9SOiAnW2RhdGEtcHJvZHVjdC1wcmljZV0nLFxuICBQUk9EVUNUX1FVQU5USVRZX1NFTEVDVE9SOiAnW2RhdGEtcXVhbnRpdHktaW5wdXRdJyxcbiAgUFJPRFVDVF9DT01QQVJFX0FUX1BSSUNFX1NFTEVDVE9SOiAnW2RhdGEtcHJvZHVjdC1jb21wYXJlLWF0LXByaWNlXScsXG4gIFBST0RVQ1RfU1RPQ0tfTUFQOiAnZGF0YS1wcm9kdWN0LXN0b2NrLW1hcCcsXG4gIFNXSVRDSF9PUFRJT05TX09OX1RIVU1CTkFJTF9TRUxFQ1RJT046IHRydWUsXG4gIElNQUdFX1NJWkU6ICcxMDAweDEwMDAnXG59XG5cbiIsImltcG9ydCBzYWZlSlNPTlBhcnNlIGZyb20gJy4uLy4uL3V0aWxzL3NhZmVKU09OUGFyc2UnO1xuXG5jb25zdCByZWNlbnRseVZpZXdlZCA9ICgpID0+IHtcbiAgY29uc3QgZGF0YUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yZWNlbnRseS12aWV3ZWRdJylcbiAgY29uc3QgY3VycmVudFJlY2VudGx5Vmlld2VkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlY2VudGx5Vmlld2VkUFMnKVxuICBsZXQgbmV3UmVjZW50bHlWaWV3ZWQgPSB7fVxuXG4gIGlmIChkYXRhRWxlbSkge1xuICAgIGNvbnN0IG5ld1JlY2VudGx5Vmlld2VkQXJyYXkgPSBbXVxuICAgIGNvbnN0IHBhZ2VJdGVtID0gc2FmZUpTT05QYXJzZShkYXRhRWxlbS5kYXRhc2V0LnJlY2VudGx5Vmlld2VkKVxuICAgIGlmICghcGFnZUl0ZW0pIHtyZXR1cm59XG5cbiAgICBpZighY3VycmVudFJlY2VudGx5Vmlld2VkKSB7XG4gICAgICBuZXdSZWNlbnRseVZpZXdlZEFycmF5LnB1c2gocGFnZUl0ZW0pXG5cbiAgICAgIG5ld1JlY2VudGx5Vmlld2VkID0ge1xuICAgICAgICAnZGF0YSc6IG5ld1JlY2VudGx5Vmlld2VkQXJyYXlcbiAgICAgIH1cblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlY2VudGx5Vmlld2VkUFMnLCBKU09OLnN0cmluZ2lmeShuZXdSZWNlbnRseVZpZXdlZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zdCBwYXJzZWRDdXJyZW50UmVjZW50bHlWaWV3ZWQgPSBzYWZlSlNPTlBhcnNlKGN1cnJlbnRSZWNlbnRseVZpZXdlZCkgXG4gICAgICBjb25zdCBwYXJzZWRDdXJyZW50UmVjZW50bHlWaWV3ZWQgPSBKU09OLnBhcnNlKGN1cnJlbnRSZWNlbnRseVZpZXdlZCkgXG4gICAgICBpZiAoIXBhcnNlZEN1cnJlbnRSZWNlbnRseVZpZXdlZCkge3JldHVybn1cbiAgICAgIGNvbnN0IGN1cnJlbnRSZWNlbnRseVZpZXdlZEFycmF5ID0gcGFyc2VkQ3VycmVudFJlY2VudGx5Vmlld2VkLmRhdGFcbiAgICAgIGxldCBpc05ld0l0ZW0gPSB0cnVlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRSZWNlbnRseVZpZXdlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBjdXJyZW50UmVjZW50bHlWaWV3ZWRBcnJheVtpXVxuICAgICAgICBpZihuZXdJdGVtLmhhbmRsZSA9PT0gcGFnZUl0ZW0uaGFuZGxlKSB7XG4gICAgICAgICAgaXNOZXdJdGVtID0gZmFsc2VcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdSZWNlbnRseVZpZXdlZEFycmF5LnB1c2goY3VycmVudFJlY2VudGx5Vmlld2VkQXJyYXlbaV0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoaXNOZXdJdGVtKSB7XG4gICAgICAgIG5ld1JlY2VudGx5Vmlld2VkQXJyYXkucHVzaChwYWdlSXRlbSlcbiAgICAgICAgaWYobmV3UmVjZW50bHlWaWV3ZWRBcnJheS5sZW5ndGggPiAxMCkge1xuICAgICAgICAgIG5ld1JlY2VudGx5Vmlld2VkQXJyYXkuc2hpZnQoKVxuICAgICAgICB9XG4gICAgICAgIG5ld1JlY2VudGx5Vmlld2VkID0ge1xuICAgICAgICAgICdkYXRhJzogbmV3UmVjZW50bHlWaWV3ZWRBcnJheVxuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlY2VudGx5Vmlld2VkUFMnLCBKU09OLnN0cmluZ2lmeShuZXdSZWNlbnRseVZpZXdlZCkpXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWNlbnRseVZpZXdlZDtcbiIsIlxuaW1wb3J0IHtmb3JtYXRNb25leX0gZnJvbSAnQHNob3BpZnkvdGhlbWUtY3VycmVuY3knO1xuXG5jb25zdCB1cGRhdGVQcmljZUJ5UXVhbnRpdHkgPSAocXR5RWxtOiBIVE1MSW5wdXRFbGVtZW50LCBwcmljZUVsczogTm9kZUxpc3RPZjxFbGVtZW50PiwgZm9ybWF0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogdm9pZCA9PiB7XG4gIGNvbnN0IHRvdGFsUHJpY2UgPSBOdW1iZXIocXR5RWxtLmRhdGFzZXQudmFyaWFudFByaWNlID8gcXR5RWxtLmRhdGFzZXQudmFyaWFudFByaWNlIDogcXR5RWxtLmRhdGFzZXQucHJvZHVjdFByaWNlKSAqIE51bWJlcihxdHlFbG0udmFsdWUpXG4gIHByaWNlRWxzLmZvckVhY2gocHJpY2VFbCA9PiBwcmljZUVsLmlubmVySFRNTCA9IGZvcm1hdE1vbmV5KHRvdGFsUHJpY2UsIGZvcm1hdCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVQcmljZUJ5UXVhbnRpdHk7IiwiY29uc3QgdXBkYXRlVW5pdFF1YW50aXRpZXMgPSAocXR5RWxtOiBFbGVtZW50LCB1bml0RWxzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+LCBhcmVhRWxzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+LCB1cGRhdGVkUXR5OiBzdHJpbmcsIHVwZGF0ZWRBcmVhQ292ZXJlZDogc3RyaW5nKTogdm9pZCA9PiB7XG4gIHF0eUVsbS5pbm5lckhUTUwgPSB1cGRhdGVkUXR5XG4gIHVuaXRFbHMuZm9yRWFjaCh1bml0ID0+IHVuaXQuaW5uZXJIVE1MID0gdXBkYXRlZFF0eSlcbiAgLy9hbHdheXMgKGFuZCBtYXgpIDIgZGVjaW1hbCBwb2ludHMgXG4gIGFyZWFFbHMuZm9yRWFjaCh1bml0ID0+IHVuaXQuaW5uZXJIVE1MID0gJycgKyAoKE1hdGgucm91bmQocGFyc2VGbG9hdCh1cGRhdGVkQXJlYUNvdmVyZWQpICogMTAwKSAvIDEwMCkudG9GaXhlZCgyKSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVVuaXRRdWFudGl0aWVzOyIsIi8qKlxuICogVGhpcyBhbGxvd3MgdGhlIHVzZXIgdG8gY2FsY3VsYXRlIHRoZSByZXF1aXJlZCBudW1iZXIgb2YgYm94ZXMgYmFzZWQgb24gdGhlIGFyZWEgdGhleSBuZWVkIHRvIGZpbGxcbiAqL1xuXG5pbXBvcnQgeyBERUZBVUxUUyB9IGZyb20gJy4vcHJvZHVjdC9DT05TVEFOVFMnO1xuaW1wb3J0IHVwZGF0ZVByaWNlQnlRdWFudGl0eSBmcm9tICcuL3Byb2R1Y3QvdXBkYXRlUHJpY2VCeVF1YW50aXR5J1xuaW1wb3J0IHVwZGF0ZVVuaXRRdWFudGl0aWVzIGZyb20gJy4vcHJvZHVjdC91cGRhdGVVbml0UXVhbnRpdGllcydcblxuZXhwb3J0IGNvbnN0IGluaXRQcm9kdWN0QXJlYVF1YW50aXR5Q2FsYyA9ICgpOiB2b2lkID0+IHtcbiAgY29uc3QgY2FsY0lucHV0ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2R1Y3QtYXJlYS1xdWFudGl0eS1jYWxjXScpXG4gIGNvbnN0IHF1YW50aXR5SW5wdXQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKERFRkFVTFRTLlBST0RVQ1RfUVVBTlRJVFlfU0VMRUNUT1IpXG4gIGNvbnN0IHVuaXRRdWFudGl0aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdW5pdC1xdHldJylcbiAgY29uc3QgdW5pdHNDb3ZlcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdW5pdC1zaXplXScpXG4gIGNvbnN0IHByaWNlRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChERUZBVUxUUy5QUk9EVUNUX1BSSUNFX1NFTEVDVE9SKVxuXG4gIGlmICghY2FsY0lucHV0IHx8ICFxdWFudGl0eUlucHV0KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBjYWxjSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgYm94QXJlYSA9IE51bWJlcihjYWxjSW5wdXQuZGF0YXNldC5wcm9kdWN0QXJlYVF1YW50aXR5Q2FsYylcblxuICAgIGlmIChib3hBcmVhIDw9IDApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRvQ2FydFF1YW50aXR5ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWF0Yy1xdWFudGl0eV0nKVxuICAgIGNvbnN0IGFyZWFUb0ZpbGwgPSBOdW1iZXIoKDxIVE1MVGV4dEFyZWFFbGVtZW50PmUudGFyZ2V0KS52YWx1ZSlcbiAgICBsZXQgcmVxdWlyZWRCb3hRdWFudGl0eSA9IE1hdGguY2VpbChhcmVhVG9GaWxsIC8gYm94QXJlYSlcblxuICAgIGlmIChyZXF1aXJlZEJveFF1YW50aXR5ID09PSAwKSB7XG4gICAgICByZXF1aXJlZEJveFF1YW50aXR5ID0gMVxuICAgIH1cbiAgXG4gICAgY29uc3QgYXJlYUNvdmVyZWQgPSAgcmVxdWlyZWRCb3hRdWFudGl0eSAqIGJveEFyZWFcblxuICAgIHF1YW50aXR5SW5wdXQudmFsdWUgPSByZXF1aXJlZEJveFF1YW50aXR5LnRvU3RyaW5nKClcbiAgICBcbiAgICB1cGRhdGVQcmljZUJ5UXVhbnRpdHkocXVhbnRpdHlJbnB1dCwgcHJpY2VFbHMsIHdpbmRvd1sndGhlbWUnXS5tb25leUZvcm1hdClcbiAgICB1cGRhdGVVbml0UXVhbnRpdGllcyhhZGRUb0NhcnRRdWFudGl0eSwgdW5pdFF1YW50aXRpZXMsIHVuaXRzQ292ZXJlZCwgcmVxdWlyZWRCb3hRdWFudGl0eS50b1N0cmluZygpLCBhcmVhQ292ZXJlZC50b1N0cmluZygpKVxuICB9KTtcbn1cbiIsImNvbnN0IGluaXRQcm9kdWN0T3JkZXJCeUFyZWEgPSAoKSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtb3JkZXItYnktYXJlYS1pbnB1dF0nKVxuICBjb25zdCBzdWZmaXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbnB1dC1zdWZmaXhdJylcbiAgaWYgKCFpbnB1dCB8fCAhc3VmZml4KSB7cmV0dXJufVxuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAvL29uZSBkZWNpbWFsIHBsYWNlcyBtYXhcbiAgICBpZiAoaW5wdXQudmFsdWUuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZS5zbGljZSgwLCBpbnB1dC52YWx1ZS5pbmRleE9mKCcuJykgKyAyKVxuICAgIH1cblxuICAgIC8vbWF4IDEwIGNoYXJhY3RlcnNcbiAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMTApIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUuc2xpY2UoMCwgMTApO1xuICAgIH1cblxuICAgIC8vc3VmZml4IHBvc2l0aW9uaW5nIC0g8J+PjFxuICAgIGNvbnN0IGxlbmd0aCA9IGAke2UudGFyZ2V0LnZhbHVlfWAubGVuZ3RoICsgMVxuICAgIGlmIChsZW5ndGggPD0gMykge1xuICAgICAgc3VmZml4LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwcHgsIC01MCUsIDBweCknO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWZmaXguc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7KGxlbmd0aCAtIDIpICogOH1weCwgLTUwJSwgMHB4KWA7XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0UHJvZHVjdE9yZGVyQnlBcmVhIiwiLyoqXG4gKiBUaGlzIHVwZGF0ZXMgdGhlIEFkZCB0byBDYXJ0IENUQSB3aXRoIHRoZSBxdWFudGl0eSByZXF1ZXN0ZWRcbiAqL1xuXG5pbXBvcnQgeyBERUZBVUxUUyB9IGZyb20gJy4vcHJvZHVjdC9DT05TVEFOVFMnO1xuaW1wb3J0IHVwZGF0ZVByaWNlQnlRdWFudGl0eSBmcm9tICcuL3Byb2R1Y3QvdXBkYXRlUHJpY2VCeVF1YW50aXR5J1xuaW1wb3J0IHVwZGF0ZVVuaXRRdWFudGl0aWVzIGZyb20gJy4vcHJvZHVjdC91cGRhdGVVbml0UXVhbnRpdGllcydcblxuZXhwb3J0IGNvbnN0IGluaXRQcm9kdWN0UXVhbnRpdHlVcGRhdGUgPSAoKTogdm9pZCA9PiB7XG5cbiAgY29uc3QgcXVhbnRpdHlJbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoREVGQVVMVFMuUFJPRFVDVF9RVUFOVElUWV9TRUxFQ1RPUilcbiAgY29uc3QgcXVhbnRpdHlJbnB1dEluYyA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1xdWFudGl0eS1pbmNdJylcbiAgY29uc3QgcXVhbnRpdHlJbnB1dERlYyA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1xdWFudGl0eS1kZWNdJylcbiAgY29uc3QgdW5pdFF1YW50aXRpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11bml0LXF0eV0nKVxuICBjb25zdCB1bml0c0NvdmVyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS11bml0LXNpemVdJylcbiAgY29uc3QgY2FsY0lucHV0ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvZHVjdC1hcmVhLXF1YW50aXR5LWNhbGNdJylcbiAgY29uc3QgcHJpY2VFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKERFRkFVTFRTLlBST0RVQ1RfUFJJQ0VfU0VMRUNUT1IpXG5cbiAgY29uc3QgdXBkYXRlQ1RBUXVhbnRpdHkgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkVG9DYXJ0UXVhbnRpdHkgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYXRjLXF1YW50aXR5XScpXG4gICAgaWYgKCFhZGRUb0NhcnRRdWFudGl0eSkge3JldHVybn1cbiAgICBjb25zdCB1cGRhdGVkUXR5ID0gcXVhbnRpdHlJbnB1dC52YWx1ZSA9PT0gJycgPyAnMScgOiBxdWFudGl0eUlucHV0LnZhbHVlXG5cbiAgICBpZiAoY2FsY0lucHV0KSB7XG4gICAgICBjYWxjSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgY29uc3QgYm94QXJlYSA9IE51bWJlcihjYWxjSW5wdXQuZGF0YXNldC5wcm9kdWN0QXJlYVF1YW50aXR5Q2FsYylcbiAgICAgIGNvbnN0IGFyZWFDb3ZlcmVkID0gIE51bWJlcih1cGRhdGVkUXR5KSAqIGJveEFyZWFcbiAgICAgIHVwZGF0ZVVuaXRRdWFudGl0aWVzKGFkZFRvQ2FydFF1YW50aXR5LCB1bml0UXVhbnRpdGllcywgdW5pdHNDb3ZlcmVkLCB1cGRhdGVkUXR5LCBhcmVhQ292ZXJlZC50b1N0cmluZygpKVxuICAgIH1cbiAgICBhZGRUb0NhcnRRdWFudGl0eS5pbm5lckhUTUwgPSB1cGRhdGVkUXR5XG4gICAgdXBkYXRlUHJpY2VCeVF1YW50aXR5KHF1YW50aXR5SW5wdXQsIHByaWNlRWxzLCB3aW5kb3dbJ3RoZW1lJ10ubW9uZXlGb3JtYXQpXG4gIH1cbiAgXG4gIGlmICghcXVhbnRpdHlJbnB1dCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgcXVhbnRpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZUNUQVF1YW50aXR5KTtcbiAgcXVhbnRpdHlJbnB1dEluYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUNUQVF1YW50aXR5KTtcbiAgcXVhbnRpdHlJbnB1dERlYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUNUQVF1YW50aXR5KTtcbn1cbiAgIiwiaW1wb3J0IHsgcmVhZHkgfSBmcm9tICcuLi9nbG9iYWwvaW5zdGFudGlhdGUnO1xuaW1wb3J0IHJlY2VudGx5Vmlld2VkIGZyb20gJy4uL3NlY3Rpb25zL3Byb2R1Y3QvcmVjZW50bHlWaWV3ZWQnO1xuaW1wb3J0IHsgaW5pdFByb2R1Y3RBcmVhUXVhbnRpdHlDYWxjIH0gZnJvbSAnLi4vc2VjdGlvbnMvcHJvZHVjdEFyZWFRdWFudGl0eUNhbGMnO1xuaW1wb3J0IHsgaW5pdFByb2R1Y3RRdWFudGl0eVVwZGF0ZSB9IGZyb20gJy4uL3NlY3Rpb25zL3Byb2R1Y3RRdWFudGl0eVVwZGF0ZSc7XG5pbXBvcnQgaW5pdFByb2R1Y3RPcmRlckJ5QXJlYSBmcm9tICcuLi9zZWN0aW9ucy9wcm9kdWN0T3JkZXJCeUFyZWEnO1xuaW1wb3J0IGluaXRpYWxpc2Vab29tIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZHVjdFpvb20nO1xuXG4vL2NyZWF0ZSB4eHh4LmpzIGZvciBlYWNoIHNob3BpZnkgdGVtcGxhdGVcbi8vaW1wb3J0IG15IHNjcmlwdHMgaW4gaGVyZSBhbmQgcnVuIHRoZW1cbi8vaWYgaXRzIGdsb2JhbCBwdXQgaXQgaW4gZ2xvYmFsLmpzIGUuZy4gY29va2llIGJhbm5lclxuXG5yZWFkeSgoKT0+IHtcbiAgLy9jYWxsIHlvdXIgc3R1ZmYgaGVyZSgpXG4gIHJlY2VudGx5Vmlld2VkKCk7XG4gIGluaXRQcm9kdWN0QXJlYVF1YW50aXR5Q2FsYygpXG4gIGluaXRQcm9kdWN0UXVhbnRpdHlVcGRhdGUoKVxuICBpbml0UHJvZHVjdE9yZGVyQnlBcmVhKClcbiAgaW5pdGlhbGlzZVpvb20oJ1tkYXRhLW1haW4tcHJvZHVjdC1pbWFnZS13cmFwcGVyXScsIDIpO1xufSkiLCJjb25zdCBzYWZlSlNPTlBhcnNlID0gKHN0cikgPT4ge1xuICBpZih0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGpzb25SZXR1cm4gPSBKU09OLnBhcnNlKHN0cilcbiAgICByZXR1cm4ganNvblJldHVyblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBzYWZlSlNPTlBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==