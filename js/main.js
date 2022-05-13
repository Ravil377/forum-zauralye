/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/components.js":
/*!**************************************!*\
  !*** ./src/components/components.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _who_goes_who_goes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./who-goes/who-goes */ "./src/components/who-goes/who-goes.js");
/* harmony import */ var _who_goes_who_goes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_who_goes_who_goes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _program_program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./program/program */ "./src/components/program/program.js");
/* harmony import */ var _program_program__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_program_program__WEBPACK_IMPORTED_MODULE_1__);
// import simpleParallax from 'simple-parallax-js';
// Form
// import './form/form'

 // Hamburger
//import './hamburger/hamburger'
//import './modal/modal'

/***/ }),

/***/ "./src/components/program/program.js":
/*!*******************************************!*\
  !*** ./src/components/program/program.js ***!
  \*******************************************/
/***/ (() => {

var programContainer = document.querySelector('.-program');
var tabs = programContainer.querySelector('.tabs');
tabs && tabs.addEventListener('click', function (e) {
  var tab = e.target.closest('.tab');
  var id = tab.dataset.day;

  if (tab) {
    tabs.querySelector('.tab_active').classList.remove('tab_active');
    tab.classList.add('tab_active');
    tabContentActive(id);
  }
});

var tabContentActive = function tabContentActive(id) {
  document.querySelector('.tabs__content_active').classList.remove('tabs__content_active');
  document.querySelector("[id = \"".concat(id, "\"]")).classList.add('tabs__content_active');
};

/***/ }),

/***/ "./src/components/who-goes/who-goes.js":
/*!*********************************************!*\
  !*** ./src/components/who-goes/who-goes.js ***!
  \*********************************************/
/***/ (() => {

var image = document.getElementsByClassName('bgparalax');
new simpleParallax(image, {
  orientation: 'down',
  scale: 1.8,
  overflow: true
});

/***/ }),

/***/ "./src/vendor/vendor.js":
/*!******************************!*\
  !*** ./src/vendor/vendor.js ***!
  \******************************/
/***/ (() => {

//import './go-top/go-top'
// Magnific Popup
// import './magnific-popup/init'
// Owl Carousel
// import './owl-carousel/init'
// Simple ajax form
// import './simple-ajax-form-submit/jquery.simple-ajax-form'
// Fixed block
// import './fixedblock'

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/base/js/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/vendor */ "./src/vendor/vendor.js");
/* harmony import */ var _vendor_vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components */ "./src/components/components.js");
// Vendor
 // Components


})();

/******/ })()
;
//# sourceMappingURL=main.js.map