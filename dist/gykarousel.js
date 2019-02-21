var GYKarousel =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _scss_gykarousel_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/gykarousel.scss */ \"./src/scss/gykarousel.scss\");\n/* harmony import */ var _scss_gykarousel_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_gykarousel_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/** Global Settings **/\nvar _globals = {\n\t'animSpeed' : 1000,\n\t'autoPlay': true,\n\t'autoPlayInterval': null,\n\t'controlLock': false,\n\t'delay': 5000,\n\t'elements': {},\n\t'container': 'gykarousel',\n\t'wrapper': '.gykarousel__container',\n\t'slide': '.gykarousel__slide',\n\t'selected': '.gykarousel__slide--selected'\n};\n\nvar _utils = {\n\textend: function(out) {\n\t\tout = out || {};\n\n\t\tfor (var i = 1; i < arguments.length; i++) {\n\t\t\tvar obj = arguments[i];\n\n\t\t\tif (!obj)\n\t\t\t\tcontinue;\n\n\t\t\tfor (var key in obj) {\n\t\t\t\tif (obj.hasOwnProperty(key)) {\n\t\t\t\t\tif (typeof obj[key] === 'object')\n\t\t\t\t\t\tout[key] = this.extend(out[key], obj[key]);\n\t\t\t\t\telse\n\t\t\t\t\t\tout[key] = obj[key];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tconsole.log('out:', out);\n\n\t\treturn out;\n\t}\n};\n\n\n/** Container Functions **/\nvar _container = function () {\n\t_initHeight();\n\n\twindow.addEventListener('resize', function (e) {\n\t\t_initHeight();\n\t});\n\n\t_globals.elements.container = document.querySelector(_globals.container);\n\t_globals.elements.wrapper = _globals.elements.container.querySelector(_globals.wrapper);\n\n\t_globals.elements.wrapper.style.transform = 'translateX(0%)';\n};\n\nvar _initHeight = function () {\n\tsetTimeout(function() {\n\t\t_globals.slideHeight = _globals.elements.slides[0].getBoundingClientRect().height;\n\n\t\t_globals.elements.container.style.height = _globals.slideHeight + 'px';\n\t\t_globals.elements.wrapper.style.height = _globals.slideHeight + 'px';\n\t}, 250);\n};\n\n\n/** Control Functions **/\nvar _handlePrevious = function (e) {\n\te.preventDefault();\n\n\tif (_globals.controlLock === false) {\n\t\tclearInterval(_globals.autoPlayInterval);\n\n\t\t_showPrevious();\n\t}\n};\n\nvar _handleNext = function (e) {\n\te.preventDefault();\n\t\n\tif (_globals.controlLock === false) {\n\t\tclearInterval(_globals.autoPlayInterval);\n\n\t\t_showNext();\n\t}\n};\n\nvar _setControlLock = function () {\n\t_globals.controlLock = true;\n\n\tsetTimeout(function () {\n\t\t_globals.controlLock = false;\n\t}, _globals.animSpeed);\n};\n\nvar _showPrevious = function () {\n\tvar _wrap = false;\n\tvar _prevIndex = _globals.selectedIndex - 1;\n\tvar _lastIndex = _globals.slideCount - 1;\n\n\tif (_globals.selectedIndex <= 0) {\n\t\t_wrap = true;\n\t\t_prevIndex = _lastIndex;\n\t\t_globals.elements.slides[_lastIndex].style.left = '-100%';\n\t}\n\n\t_setControlLock();\n\n\t_globals.elements.wrapper.style.transitionProperty = 'transform';\n\t_globals.elements.wrapper.style.transitionDuration = _globals.animSpeed + 'ms';\n\n\n\tif (_wrap) {\n\t\t_globals.elements.wrapper.style.transform = 'translateX(100%)';\n\n\t\tsetTimeout(function () {\n\t\t\t_globals.elements.wrapper.style.transitionProperty = 'none';\n\t\t\t_globals.elements.wrapper.style.transform = 'translateX(-' + ((_lastIndex) * 100) +'%)';\n\t\t\t_globals.elements.slides[_lastIndex].style.left = ((_lastIndex) * 100) +'%';\n\t\t\t_globals.selectedIndex = _lastIndex;\n\t\t}, _globals.animSpeed);\n\t} else {\n\t\t_globals.elements.wrapper.style.transform = 'translateX(-' + (_prevIndex * 100) + '%)';\n\t\t_globals.selectedIndex = _prevIndex;\n\t}\n};\n\nvar _showNext = function () {\n\tvar _wrap = false;\n\tvar _nextIndex = _globals.selectedIndex + 1;\n\n\tif (_nextIndex === _globals.slideCount) {\n\t\t_wrap = true;\n\t\t_globals.selectedIndex = 0;\n\t\t_globals.elements.slides[0].style.left = (_nextIndex * 100) + '%';\n\t}\n\n\t_setControlLock();\n\n\t_globals.elements.wrapper.style.transitionProperty = 'transform';\n\t_globals.elements.wrapper.style.transitionDuration = _globals.animSpeed + 'ms';\n\t_globals.elements.wrapper.style.transform = 'translateX(-' + (_nextIndex * 100) + '%)';\n\n\tif (_wrap) {\n\t\tsetTimeout(function () {\n\t\t\t_globals.elements.wrapper.style.transitionProperty = 'none';\n\t\t\t_globals.elements.wrapper.style.transform = 'translateX(0%)';\n\t\t\t_globals.elements.slides[0].style.left = '0%';\n\t\t}, _globals.animSpeed);\n\t\t//*/\n\t} else {\n\t\t_globals.selectedIndex = _nextIndex;\n\t}\n};\n\nvar _unifyEvent = function (e) {\n\treturn e.changedTouches ? e.changedTouches[0] : e;\n};\n\nvar _touchLock = function (e) {\n\t_globals.touchStart = _unifyEvent(e).clientX;\n};\n\nvar _touchMove = function (e) {\n\tclearInterval(_globals.autoPlayInterval);\n\n\tif(_globals.touchStart || _globals.touchStart === 0) {\n\t\t_globals.touchEnd = _unifyEvent(e).clientX - _globals.touchStart;\n\t\tvar s = Math.sign(_globals.touchEnd);\n\n\t\tif (_globals.touchEnd < 0) {\n\t\t\t_showNext();\n\t\t} else {\n\t\t\t_showPrevious();\n\t\t}\n\t}\n};\n\nvar _initAutoPlay = function () {\n\t_globals.autoPlayInterval = setInterval(function () {\n\t\t_showNext();\n\t}, _globals.delay);\n};\n\nvar _controls = function () {\n\tvar _prev = document.createElement('button');\n\tvar _next = document.createElement('button');\n\n\t_prev.innerHTML = 'Previous';\n\t_next.innerHTML = 'Next';\n\n\t_prev.classList.add('gykarousel__control', 'gykarousel__control--prev');\n\t_next.classList.add('gykarousel__control', 'gykarousel__control--next');\n\n\t_globals.elements.prevButton = _globals.elements.container.appendChild(_prev);\n\t_globals.elements.nextButton = _globals.elements.container.appendChild(_next);\n\n\t_globals.elements.prevButton.addEventListener('click', _handlePrevious);\n\t_globals.elements.nextButton.addEventListener('click', _handleNext);\n\n\t_globals.elements.wrapper.addEventListener('mousedown', _touchLock, false);\n\t_globals.elements.wrapper.addEventListener('touchstart', _touchLock, false);\n\n\t_globals.elements.wrapper.addEventListener('mouseup', _touchMove, false);\n\t_globals.elements.wrapper.addEventListener('touchend', _touchMove, false);\n}\n\n\n/** Slide Functions **/\nvar _slides = function () {\n\t_globals.elements.slides = _globals.elements.container.querySelectorAll(_globals.slide);\n\t_globals.slideCount = _globals.elements.slides.length;\n\t_globals.selectedIndex = 0;\n\n\tfor (var x = 0, len = _globals.slideCount; x < len; x++) {\n\t\t_globals.elements.slides[x].style.left = (x * 100) + '%';\n\t}\n};\n\n\n/** Init Function **/\nvar _init = function(_options) {\n\n\tObject.assign(_globals, _options);\n\n\t_container();\n\t_slides();\n\t_controls();\n\t\n\tif (_globals.autoPlay) {\n\t\t_initAutoPlay();\n\t}\n}\n\nfunction init (_obj) {\n\t_init(_obj);\n};\n\n//# sourceURL=webpack://GYKarousel/./src/js/index.js?");

/***/ }),

/***/ "./src/scss/gykarousel.scss":
/*!**********************************!*\
  !*** ./src/scss/gykarousel.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://GYKarousel/./src/scss/gykarousel.scss?");

/***/ })

/******/ });