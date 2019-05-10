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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.jsx":
/*!****************************!*\
  !*** ./client/src/app.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_TokenCol_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TokenCol.jsx */ \"./client/src/components/TokenCol.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.cols = [1, 2, 3, 4, 5, 6, 7];\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var gameboard = this.cols.map(function (num) {\n        return React.createElement(_components_TokenCol_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          \"class\": \"horizontal\",\n          key: num\n        });\n      });\n      var boardStyle = {\n        display: 'flex'\n      };\n      return React.createElement(\"div\", null, React.createElement(\"h4\", null, \"Click a button to drop a token\"), React.createElement(\"div\", {\n        style: boardStyle\n      }, gameboard));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n;\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2FwcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2FwcC5qc3g/ZGI2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9rZW5Db2wgZnJvbSAnLi9jb21wb25lbnRzL1Rva2VuQ29sLmpzeCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jb2xzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDddO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBnYW1lYm9hcmQgPVxuICAgICAgdGhpcy5jb2xzLm1hcChudW0gPT5cbiAgICAgICAgPCBUb2tlbkNvbCBjbGFzcz0naG9yaXpvbnRhbCcga2V5PXtudW19IC8+XG4gICAgICApO1xuXG4gICAgdmFyIGJvYXJkU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoND5DbGljayBhIGJ1dHRvbiB0byBkcm9wIGEgdG9rZW48L2g0PlxuICAgICAgICA8ZGl2IHN0eWxlPXtib2FyZFN0eWxlfT5cbiAgICAgICAgICB7Z2FtZWJvYXJkfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59O1xuXG5SZWFjdERPTS5yZW5kZXIoPCBBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBTEE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBR0E7QUFBQTtBQUtBOzs7O0FBNUJBO0FBQ0E7QUE0QkE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/app.jsx\n");

/***/ }),

/***/ "./client/src/components/Token.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Token.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Token = function Token(props) {\n  var tokenStyle = {\n    borderRadius: '50%',\n    backgroundColor: 'lightgray',\n    height: '70px',\n    width: '70px',\n    margin: '5px'\n  };\n  return React.createElement(\"div\", {\n    style: tokenStyle\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Token);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvVG9rZW4uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Rva2VuLmpzeD9lYWMyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBUb2tlbiA9IChwcm9wcykgPT4ge1xuICB2YXIgdG9rZW5TdHlsZSA9IHtcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Z3JheScsXG4gICAgaGVpZ2h0OiAnNzBweCcsXG4gICAgd2lkdGg6ICc3MHB4JyxcbiAgICBtYXJnaW46ICc1cHgnXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt0b2tlblN0eWxlfT5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9rZW47Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Token.jsx\n");

/***/ }),

/***/ "./client/src/components/TokenCol.jsx":
/*!********************************************!*\
  !*** ./client/src/components/TokenCol.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Token_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Token.jsx */ \"./client/src/components/Token.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar TokenCol =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TokenCol, _React$Component);\n\n  function TokenCol(props) {\n    var _this;\n\n    _classCallCheck(this, TokenCol);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TokenCol).call(this, props));\n    _this.tokens = [1, 2, 3, 4, 5, 6];\n    _this.state = {};\n    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(TokenCol, [{\n    key: \"handleClick\",\n    value: function handleClick(event) {\n      console.log('Button clicked!');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var tokens = this.tokens.map(function (num) {\n        return React.createElement(_Token_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n          key: num\n        });\n      });\n      return React.createElement(\"div\", null, React.createElement(\"button\", {\n        onClick: this.handleClick\n      }, \"Drop Token\"), tokens);\n    }\n  }]);\n\n  return TokenCol;\n}(React.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenCol);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvVG9rZW5Db2wuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1Rva2VuQ29sLmpzeD84NjRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2tlbiBmcm9tICcuL1Rva2VuLmpzeCc7XG5cbmNsYXNzIFRva2VuQ29sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBbMSwyLDMsNCw1LDZdO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ0J1dHRvbiBjbGlja2VkIScpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB0b2tlbnMgPVxuICAgICAgdGhpcy50b2tlbnMubWFwKG51bSA9PlxuICAgICAgICA8IFRva2VuIGtleT17bnVtfSAvPlxuICAgICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkRyb3AgVG9rZW48L2J1dHRvbj5cbiAgICAgICAge3Rva2Vuc31cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9rZW5Db2w7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQURBO0FBSUE7QUFFQTtBQUFBO0FBSUE7Ozs7QUEzQkE7QUFDQTtBQTJCQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/TokenCol.jsx\n");

/***/ })

/******/ });