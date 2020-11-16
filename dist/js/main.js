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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  function slide1() {\n    var trigger = document.querySelectorAll(\".service__slider\");\n\n    var _loop = function _loop(i) {\n      var width = window.getComputedStyle(trigger[i].querySelector(\".service__inner\")).width;\n      var slides = trigger[i].querySelectorAll(\".service__item\");\n      var slidesField = trigger[i].querySelector(\".service__slides\");\n      var p = document.querySelector(\".service__inner\");\n      var scr = document.querySelector(\".service__pagination input\");\n      slidesField.style.width = 100 * slides.length + \"%\";\n      slides.forEach(function (slide) {\n        slide.style.width = width / 2;\n      });\n      var w = +window.getComputedStyle(document.body).width.replace(/\\D/g, \"\");\n      p.addEventListener(\"scroll\", function (e) {\n        if (p.scrollWidth) {\n          if (w < 833 && w > 0) {\n            var a = p.scrollLeft / 6.9;\n            scr.value = a;\n          }\n\n          if (w < 1023 && w > 833) {\n            var _a = p.scrollLeft / 12;\n\n            scr.value = _a;\n          }\n\n          if (w > 1023) {\n            var _a2 = p.scrollLeft / 6;\n\n            scr.value = _a2;\n          }\n        }\n      });\n      scr.addEventListener(\"input\", function (e) {\n        if (scr.value >= 0) {\n          if (w < 833 && w > 0) {\n            var a = scr.value * 6.9;\n            p.scrollLeft = a;\n          }\n\n          if (w < 1023 && w > 833) {\n            var _a3 = scr.value * 12;\n\n            p.scrollLeft = _a3;\n          }\n\n          if (w > 1023) {\n            var _a4 = scr.value * 6;\n\n            p.scrollLeft = _a4;\n          }\n        }\n      });\n    };\n\n    for (var i = 0; i < trigger.length; i++) {\n      _loop(i);\n    }\n  }\n\n  function slide2() {\n    var trigger = document.querySelectorAll(\".location__slider\");\n\n    var _loop2 = function _loop2(i) {\n      var width = window.getComputedStyle(trigger[i].querySelector(\".location__inner\")).width;\n      var slides = trigger[i].querySelectorAll(\".location__item\");\n      var slidesField = trigger[i].querySelector(\".location__slides\");\n      var current = document.querySelector(\".location__current-left\");\n      slidesField.style.height = 100 * slides.length + \"%\";\n      slides.forEach(function (slide) {\n        slide.style.width = width;\n      });\n      var offset = 0;\n      var slideIndex = 0;\n      trigger[i].querySelector('[data-slide=\"next\"]').addEventListener(\"click\", function (e) {\n        e.preventDefault();\n\n        if (offset == +width.replace(/\\D/g, \"\") * (slides.length - 1)) {\n          offset = 0;\n        } else {\n          offset += +width.replace(/\\D/g, \"\");\n        }\n\n        slidesField.style.transform = \"translateX(-\".concat(offset, \"px)\");\n\n        if (slideIndex == slides.length - 1) {\n          slideIndex = 0;\n          current.innerHTML = \"\".concat(slideIndex + 1);\n        } else {\n          slideIndex++;\n          current.innerHTML = \"\".concat(slideIndex + 1);\n        }\n      });\n      trigger[i].querySelector('[data-slide=\"prev\"]').addEventListener(\"click\", function (e) {\n        e.preventDefault();\n\n        if (offset == 0) {\n          offset = +width.replace(/\\D/g, \"\") * (slides.length - 1);\n        } else {\n          offset -= +width.replace(/\\D/g, \"\");\n        }\n\n        slidesField.style.transform = \"translateX(-\".concat(offset, \"px)\");\n\n        if (slideIndex == 0) {\n          slideIndex = slides.length - 1;\n          current.innerHTML = \"\".concat(slideIndex + 1);\n        } else {\n          slideIndex--;\n          current.innerHTML = \"\".concat(slideIndex + 1);\n        }\n      });\n    };\n\n    for (var i = 0; i < trigger.length; i++) {\n      _loop2(i);\n    }\n  }\n\n  function slide3() {\n    var trigger = document.querySelectorAll(\".gallery__slider\");\n\n    var _loop3 = function _loop3(i) {\n      var width = window.getComputedStyle(trigger[i].querySelector(\".gallery__inner\")).width;\n      var slides = trigger[i].querySelectorAll(\".gallery__slide\");\n      var slidesField = trigger[i].querySelector(\".gallery__slides\");\n      var dots = trigger[i].querySelectorAll(\".gallery__btn li\");\n      var input = document.querySelector(\".gallery__slider input\");\n      var inputB = document.querySelector(\".gallery__sliderB input\");\n      var w = +window.getComputedStyle(document.body).width.replace(/\\D/g, \"\");\n      slidesField.style.width = 100 * slides.length + \"%\";\n      slides.forEach(function (slide) {\n        slide.style.width = width;\n      });\n      input.addEventListener(\"input\", function () {\n        if (input.value > 0 && input.value < 20) {\n          slideIndex = 0;\n        }\n\n        if (input.value > 20 && input.value < 35) {\n          slideIndex = 1;\n        }\n\n        if (input.value > 35 && input.value < 68) {\n          slideIndex = 2;\n        }\n\n        if (input.value > 68 && input.value < 100) {\n          slideIndex = 3;\n        }\n\n        offset = +width.replace(/\\D/g, \"\") * slideIndex;\n        slidesField.style.transform = \"translateX(-\".concat(offset, \"px)\");\n        dots.forEach(function (dot) {\n          return dot.classList.remove(\"active\");\n        });\n        dots[slideIndex].classList.add(\"active\");\n      });\n      var offset = 0;\n      var slideIndex = 0;\n      var sliderId = trigger[i].getAttribute(\"id\");\n      var dotsSlide = document.querySelectorAll(\"#\".concat(sliderId, \" .gallery__btn li\"));\n\n      for (var a = 0; a < dotsSlide.length; a++) {\n        dotsSlide[a].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          var slideTo = e.target.getAttribute(\"data-slide-to\");\n          slideIndex = slideTo;\n          inp(slideTo);\n          offset = +width.replace(/\\D/g, \"\") * slideTo;\n          slidesField.style.transform = \"translateX(-\".concat(offset, \"px)\");\n          dots.forEach(function (dot) {\n            return dot.classList.remove(\"active\");\n          });\n          dots[slideIndex].classList.add(\"active\");\n        });\n      }\n    };\n\n    for (var i = 0; i < trigger.length; i++) {\n      _loop3(i);\n    }\n  }\n\n  function slide3B() {\n    var trigger = document.querySelectorAll(\".gallery__sliderB\");\n\n    var _loop4 = function _loop4(i) {\n      var width = window.getComputedStyle(trigger[i].querySelector(\".gallery__inner\")).width;\n      var slides = trigger[i].querySelectorAll(\".gallery__slide\");\n      var slidesField = trigger[i].querySelector(\".gallery__slides\");\n      var dots = trigger[i].querySelectorAll(\".gallery__btn li\");\n      var inputB = document.querySelector(\".gallery__sliderB input\");\n      var w = +window.getComputedStyle(document.body).width.replace(/\\D/g, \"\");\n      slidesField.style.width = 100 * slides.length + \"%\";\n      slides.forEach(function (slide) {\n        slide.style.width = width;\n      });\n      inputB.addEventListener(\"input\", function () {\n        if (w > 833 && w < 1023) {\n          if (inputB.value > 0 && inputB.value < 10) {\n            slideIndex = 0;\n          }\n\n          if (inputB.value > 10 && inputB.value < 37) {\n            slideIndex = 1;\n          }\n\n          if (inputB.value > 37 && inputB.value < 67) {\n            slideIndex = 2;\n          }\n\n          if (inputB.value > 67 && inputB.value < 100) {\n            slideIndex = 3;\n          }\n        }\n\n        if (w > 1023) {\n          if (inputB.value > 0 && inputB.value < 14) {\n            slideIndex = 0;\n          }\n\n          if (inputB.value > 14 && inputB.value < 40) {\n            slideIndex = 1;\n          }\n\n          if (inputB.value > 40 && inputB.value < 71) {\n            slideIndex = 2;\n          }\n\n          if (inputB.value > 71 && inputB.value < 100) {\n            slideIndex = 3;\n          }\n        }\n\n        offset = +width.replace(/\\D/g, \"\") * slideIndex;\n        slidesField.style.transform = \"translateX(-\".concat(offset, \"px)\");\n        dots.forEach(function (dot) {\n          return dot.classList.remove(\"active\");\n        });\n        dots[slideIndex].classList.add(\"active\");\n      });\n      var offset = 0;\n      var slideIndex = 0;\n      var sliderId = trigger[i].getAttribute(\"id\");\n      var dotsSlide = document.querySelectorAll(\"#\".concat(sliderId, \" .gallery__btn li\"));\n\n      for (var a = 0; a < dotsSlide.length; a++) {\n        dotsSlide[a].addEventListener(\"click\", function (e) {\n          e.preventDefault();\n          var slideTo = e.target.getAttribute(\"data-slide-to\");\n          slideIndex = slideTo;\n          inp(slideTo);\n          offset = +width.replace(/\\D/g, \"\") * slideTo;\n          slidesField.style.transform = \"translateX(-\".concat(offset, \"px)\");\n          dots.forEach(function (dot) {\n            return dot.classList.remove(\"active\");\n          });\n          dots[slideIndex].classList.add(\"active\");\n        });\n      }\n    };\n\n    for (var i = 0; i < trigger.length; i++) {\n      _loop4(i);\n    }\n  }\n\n  function inp(idx) {\n    var a = idx;\n    var input = document.querySelector(\".gallery__slider input\");\n    var inputB = document.querySelector(\".gallery__sliderB input\");\n    var w = +window.getComputedStyle(document.body).width.replace(/\\D/g, \"\");\n\n    if (w > 0 && w < 833) {\n      if (a === \"0\") {\n        input.value = \"0\";\n      } else if (a === \"1\") {\n        input.value = \"26\";\n      } else if (a === \"2\") {\n        input.value = \"59\";\n      } else if (a === \"3\") {\n        input.value = \"96\";\n      }\n    }\n\n    if (w > 833 && w < 1023) {\n      if (a === \"0\") {\n        inputB.value = \"4\";\n      } else if (a === \"1\") {\n        inputB.value = \"32\";\n      } else if (a === \"2\") {\n        inputB.value = \"61\";\n      } else if (a === \"3\") {\n        inputB.value = \"93\";\n      }\n    }\n\n    if (w > 1023) {\n      if (a === \"0\") {\n        inputB.value = \"0\";\n      } else if (a === \"1\") {\n        inputB.value = \"30\";\n      } else if (a === \"2\") {\n        inputB.value = \"62\";\n      } else if (a === \"3\") {\n        inputB.value = \"95\";\n      }\n    }\n  }\n\n  function burger() {\n    var btn = document.querySelector(\".menu__btn\");\n    var menu = document.querySelector(\".burger__menu\");\n    var menuA = document.querySelectorAll(\".burger__menu a\");\n    var burger = document.querySelector(\".menu__burger\");\n    var div = document.querySelector(\".burger\");\n    var head = document.querySelector(\".head\");\n    var header = document.querySelector(\".header .container\");\n    div.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      div.classList.toggle(\"active\");\n      menu.classList.toggle(\"active\");\n      burger.classList.toggle(\"active\");\n      head.classList.toggle(\"filt\");\n      header.classList.toggle(\"filt\");\n    });\n\n    for (var i = 0; i < menuA.length; i++) {\n      menuA[i].addEventListener(\"click\", function (e) {\n        div.classList.toggle(\"active\");\n        menu.classList.toggle(\"active\");\n        burger.classList.toggle(\"active\");\n        head.classList.toggle(\"filt\");\n        header.classList.toggle(\"filt\");\n      });\n    }\n  } //phone mask\n\n\n  function phoneInp() {\n    var inp = document.querySelector(\".form__left .phone\");\n    inp.addEventListener(\"click\", function () {\n      inp.value = \"+38\";\n    });\n\n    inp.onkeydown = function () {\n      var curLen = inp.value.length;\n      if (curLen == 3) inp.value = inp.value + \"(\";\n      if (curLen == 7) inp.value = inp.value + \") \";\n      if (curLen == 12) inp.value = inp.value + \"-\";\n      if (curLen > 16) inp.value = inp.value.substring(0, inp.value.length - 1);\n    };\n  } //phone mask\n  //date mask\n\n\n  function dateInp() {\n    var input = document.querySelector(\".form__right .date\");\n    input.addEventListener(\"keypress\", function (e) {\n      if (e.keyCode < 47 || e.keyCode > 57) {\n        e.preventDefault();\n      }\n\n      var len = input.value.length;\n\n      if (len !== 1 || len !== 3) {\n        if (e.keyCode == 47) {\n          e.preventDefault();\n        }\n      }\n\n      if (len === 2) {\n        input.value += \"/\";\n      }\n\n      if (len === 5) {\n        input.value += \"/\";\n      }\n    });\n  } //date mask\n\n\n  phoneInp();\n  dateInp();\n  slide1();\n  slide2();\n  slide3();\n  slide3B();\n  burger();\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ });