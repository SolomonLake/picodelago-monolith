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
/******/ 	__webpack_require__.p = "/Users/lake/picodelago-monolith/apps/rml-tutorial/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Demo.bs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../.config/yarn/global/node_modules/bs-platform/lib/js/block.js":
/*!********************************************************************************!*\
  !*** /Users/lake/.config/yarn/global/node_modules/bs-platform/lib/js/block.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function __(tag, block) {
  block.tag = tag;
  return block;
}

function record(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsRecord"), {
              value: meta
            });
}

function variant(meta, tag, xs) {
  xs.tag = tag;
  return Object.defineProperty(xs, Symbol.for("BsVariant"), {
              value: meta
            });
}

function simpleVariant(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsVariant"), {
              value: meta
            });
}

function localModule(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsLocalModule"), {
              value: meta
            });
}

function polyVar(meta, xs) {
  return Object.defineProperty(xs, Symbol.for("BsPolyVar"), {
              value: meta
            });
}

exports.__ = __;
exports.record = record;
exports.variant = variant;
exports.simpleVariant = simpleVariant;
exports.localModule = localModule;
exports.polyVar = polyVar;
/* No side effect */


/***/ }),

/***/ "./src/Demo.bs.js":
/*!************************!*\
  !*** ./src/Demo.bs.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE


var Block = __webpack_require__(/*! bs-platform/lib/js/block.js */ "../../../.config/yarn/global/node_modules/bs-platform/lib/js/block.js");

console.log("Hello, BuckleScript and Reason, this is my tutorial!");

function speak(animal) {
  if (animal.tag) {
    return animal[0] + " says: woof";
  } else {
    return animal[0] + " says: meow";
  }
}

console.log(speak(/* Cat */Block.__(0, ["Rooni"])));

exports.speak = speak;
/*  Not a pure module */


/***/ })

/******/ });
//# sourceMappingURL=Demo.js.map