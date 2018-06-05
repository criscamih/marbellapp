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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "C:\\Users\\Camilo\\Desktop\\Portafolio\\SimplePage\\ApiJS\\marvelapp\\dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(1);\n\n$(document).ready(function () {\n\n\tvar MARVEL_API_KEY = \"54b92ab0ab2348b5c1d7547df8409444\";\n\tvar MARVEL_API_URL = \"https://gateway.marvel.com:443/v1/public/series?title=avengers&apikey=\" + MARVEL_API_KEY;\n\n\t$('#enviar').on('click', getMarvelSeries);\n\n\tfunction getMarvelSeries(event) {\n\t\tevent.preventDefault();\n\t\t$.get(\"https://gateway.marvel.com:443/v1/public/series?title=avengers&apikey=54b92ab0ab2348b5c1d7547df8409444\", function (data) {\n\t\t\tconsole.log(data);\n\t\t});\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiTUFSVkVMX0FQSV9LRVkiLCJNQVJWRUxfQVBJX1VSTCIsIm9uIiwiZ2V0TWFydmVsU2VyaWVzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVTs7QUFFM0IsS0FBTUMsaUJBQWUsa0NBQXJCO0FBQ0EsS0FBTUMsaUJBQWUsMkVBQXlFRCxjQUE5Rjs7QUFFQUgsR0FBRSxTQUFGLEVBQWFLLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBd0JDLGVBQXhCOztBQUVBLFVBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQStCO0FBQzlCQSxRQUFNQyxjQUFOO0FBQ0FSLElBQUVTLEdBQUYsQ0FBTSx3R0FBTixFQUFnSCxVQUFTQyxJQUFULEVBQWU7QUFDOUhDLFdBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUFtQixHQURwQjtBQUdBO0FBSUQsQ0FoQkQiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9lc3RpbG9zLmNzcydcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG5cdGNvbnN0IE1BUlZFTF9BUElfS0VZPVwiNTRiOTJhYjBhYjIzNDhiNWMxZDc1NDdkZjg0MDk0NDRcIjtcclxuXHRjb25zdCBNQVJWRUxfQVBJX1VSTD1cImh0dHBzOi8vZ2F0ZXdheS5tYXJ2ZWwuY29tOjQ0My92MS9wdWJsaWMvc2VyaWVzP3RpdGxlPWF2ZW5nZXJzJmFwaWtleT1cIitNQVJWRUxfQVBJX0tFWVxyXG5cclxuXHQkKCcjZW52aWFyJykub24oJ2NsaWNrJyxnZXRNYXJ2ZWxTZXJpZXMpO1xyXG5cclxuXHRmdW5jdGlvbiBnZXRNYXJ2ZWxTZXJpZXMoZXZlbnQpe1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQuZ2V0KFwiaHR0cHM6Ly9nYXRld2F5Lm1hcnZlbC5jb206NDQzL3YxL3B1YmxpYy9zZXJpZXM/dGl0bGU9YXZlbmdlcnMmYXBpa2V5PTU0YjkyYWIwYWIyMzQ4YjVjMWQ3NTQ3ZGY4NDA5NDQ0XCIsIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7fSlcclxuXHJcblx0fVx0XHJcblxyXG5cclxuXHJcbn0pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9lc3RpbG9zLmNzcz80NDM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZXN0aWxvcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);