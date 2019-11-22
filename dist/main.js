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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _SearchButton = __webpack_require__(/*! ./SearchButton */ \"./src/SearchButton.js\");\n\nvar _SearchButton2 = _interopRequireDefault(_SearchButton);\n\nvar _SearchPanel = __webpack_require__(/*! ./SearchPanel */ \"./src/SearchPanel.js\");\n\nvar _SearchPanel2 = _interopRequireDefault(_SearchPanel);\n\nvar _SearchResultItem = __webpack_require__(/*! ./SearchResultItem */ \"./src/SearchResultItem.js\");\n\nvar _SearchResultItem2 = _interopRequireDefault(_SearchResultItem);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Main = function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  function Main(props) {\n    _classCallCheck(this, Main);\n\n    var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));\n\n    _this.state = {\n      searchPanelOpen: false\n    };\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: \"handleMenuClick\",\n    value: function handleMenuClick() {\n      this.setState({ searchPanelOpen: !this.state.searchPanelOpen });\n    }\n  }, {\n    key: \"handleLinkClick\",\n    value: function handleLinkClick() {\n      this.setState({ searchPanelOpen: false });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var styles = {\n        container: {\n          position: \"fixed\",\n          width: \"40px\",\n          right: 0,\n          top: \"250px\",\n          zIndex: 10000,\n          textAlign: \"center\",\n          marginRight: \"1px\",\n          display: \"block\",\n          cursor: \"pointer\",\n          color: \"#0097ac\",\n          borderRadius: \"3px\",\n          background: \"white !important\",\n          borderLeft: \"2px solid #0097AC\",\n          borderTop: \"2px solid #0097AC\",\n          borderBottom: \"2px solid #0097AC\",\n          padding: \"6px\"\n        },\n        logo: {\n          margin: \"0 auto\"\n        }\n      };\n\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          { style: styles.container },\n          _react2.default.createElement(_SearchButton2.default, {\n            open: this.state.searchPanelOpen,\n            onClick: function onClick() {\n              return _this2.handleMenuClick();\n            },\n            color: \"white\"\n          })\n        ),\n        _react2.default.createElement(\n          _SearchPanel2.default,\n          { open: this.state.searchPanelOpen },\n          _react2.default.createElement(_SearchResultItem2.default, null)\n        )\n      );\n    }\n  }]);\n\n  return Main;\n}(_react2.default.Component);\n\nexports.default = Main;\n\n//# sourceURL=webpack:///./src/Main.js?");

/***/ }),

/***/ "./src/SearchButton.js":
/*!*****************************!*\
  !*** ./src/SearchButton.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SearchButton = function (_React$Component) {\n  _inherits(SearchButton, _React$Component);\n\n  function SearchButton(props) {\n    _classCallCheck(this, SearchButton);\n\n    var _this = _possibleConstructorReturn(this, (SearchButton.__proto__ || Object.getPrototypeOf(SearchButton)).call(this, props));\n\n    _this.state = {\n      open: _this.props.open ? _this.props.open : false,\n      color: _this.props.color ? _this.props.color : \"black\"\n    };\n    return _this;\n  }\n\n  _createClass(SearchButton, [{\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps) {\n      if (nextProps.open !== this.state.open) {\n        this.setState({ open: nextProps.open });\n      }\n    }\n  }, {\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.setState({ open: !this.state.open });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var styles = {\n        logo: {\n          margin: \"0 auto\"\n        }\n      };\n      return _react2.default.createElement(\n        \"div\",\n        {\n          className: \"fa fa-2x fa-search\",\n          style: styles.logo,\n          onClick: this.props.onClick ? this.props.onClick : function () {\n            _this2.handleClick();\n          }\n        },\n        \"Search\"\n      );\n    }\n  }]);\n\n  return SearchButton;\n}(_react2.default.Component);\n\nexports.default = SearchButton;\n\n//# sourceURL=webpack:///./src/SearchButton.js?");

/***/ }),

/***/ "./src/SearchPanel.js":
/*!****************************!*\
  !*** ./src/SearchPanel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SearchPanel = function (_React$Component) {\n  _inherits(SearchPanel, _React$Component);\n\n  function SearchPanel(props) {\n    _classCallCheck(this, SearchPanel);\n\n    var _this = _possibleConstructorReturn(this, (SearchPanel.__proto__ || Object.getPrototypeOf(SearchPanel)).call(this, props));\n\n    _this.state = {\n      open: _this.props.open ? _this.props.open : false\n    };\n    return _this;\n  }\n\n  _createClass(SearchPanel, [{\n    key: \"componentWillReceiveProps\",\n    value: function componentWillReceiveProps(nextProps) {\n      if (nextProps.open !== this.state.open) {\n        this.setState({ open: nextProps.open });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var styles = {\n        container: {\n          height: \"100%\",\n          width: \"300px\",\n          position: \"fixed\",\n          right: \"0px\",\n          top: \"20px\",\n          zIndex: 9999,\n          padding: \"5px\",\n          transition: \"height 0.5s ease\",\n          display: this.state.open ? \"block\" : \"none\",\n          background: \"#373a47\",\n          transform: \"translate3d(0px, 0px, 0px)\"\n        },\n        menuList: {\n          paddingTop: \"3rem\"\n        }\n      };\n      return _react2.default.createElement(\n        \"div\",\n        { style: styles.container },\n        this.state.open ? _react2.default.createElement(\n          \"div\",\n          { style: styles.menuList },\n          this.props.children\n        ) : null\n      );\n    }\n  }]);\n\n  return SearchPanel;\n}(_react2.default.Component);\n\nexports.default = SearchPanel;\n\n//# sourceURL=webpack:///./src/SearchPanel.js?");

/***/ }),

/***/ "./src/SearchResultItem.js":
/*!*********************************!*\
  !*** ./src/SearchResultItem.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SearchResultItem = function (_React$Component) {\n  _inherits(SearchResultItem, _React$Component);\n\n  function SearchResultItem(props) {\n    _classCallCheck(this, SearchResultItem);\n\n    var _this = _possibleConstructorReturn(this, (SearchResultItem.__proto__ || Object.getPrototypeOf(SearchResultItem)).call(this, props));\n\n    _this.state = {\n      hover: false,\n      query: null,\n      peoples: [],\n      data: [],\n      value: \"\",\n      timer: null\n    };\n    return _this;\n  }\n\n  _createClass(SearchResultItem, [{\n    key: \"handleHover\",\n    value: function handleHover() {\n      this.setState({ hover: !this.state.hover });\n    }\n\n    //   timer12 = null;\n\n    //   handleChange = function(e) {\n    //     clearTimeout(this.state.timer);\n    //     let value = e.target.value;\n    //     this.state.timer = setTimeout(() => {\n    //       this.triggerChange(value);\n    //     }, 1000);\n    //   };\n\n    //   triggerChange = targetValue => {\n    //     this.setState({ value: targetValue });\n    //   };\n\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.serachPeople(this.state.query);\n    }\n  }, {\n    key: \"onChange\",\n    value: function onChange(e) {\n      var _this2 = this;\n\n      this.setState({ query: e.target.value }, function () {\n        if (_this2.state.query && _this2.state.query.length > 1) {\n          if (_this2.state.query.length % 2 === 0) {\n            _this2.serachPeople(_this2.state.query);\n          }\n        } else {\n          _this2.serachPeople(_this2.state.query);\n        }\n      });\n    }\n  }, {\n    key: \"serachPeople\",\n    value: function serachPeople(query) {\n      var _this3 = this;\n\n      //const url = \"https://facebook.github.io/react-native/movies.json\";\n      var url = \"https://newsapi.org/v2/everything?q=\" + query + \"&from=2019-04-31&sortBy=popularity&apiKey=3bee3e3e49bb410ab3acfeb61b17cd08\";\n\n      if (query) {\n        console.log(\"url\", url);\n        fetch(url, {\n          method: \"GET\"\n        }).then(function (results) {\n          return results.json();\n        }).then(function (data) {\n          var movies = data.articles;\n          _this3.setState({ data: movies });\n          console.log(\"state\", movies);\n        });\n      } else {\n        this.setState({ data: [] });\n        console.log(\"state\", []);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var styles = {\n        container: {\n          opacity: 0,\n          animation: \"1s appear forwards\",\n          animationDelay: this.props.delay\n        },\n        menuItem: {\n          fontFamily: \"'Open Sans', sans-serif\",\n          fontSize: \"1.2rem\",\n          padding: \"1rem 0\",\n          margin: \"0 5%\",\n          cursor: \"pointer\",\n          color: this.state.hover ? \"gray\" : \"#fafafa\",\n          transition: \"color 0.2s ease-in-out\",\n          animation: \"0.5s slideIn forwards\",\n          animationDelay: this.props.delay\n        },\n        line: {\n          width: \"90%\",\n          height: \"1px\",\n          background: \"gray\",\n          margin: \"0 auto\",\n          animation: \"0.5s shrink forwards\",\n          animationDelay: this.props.delay\n        },\n        redborder: {\n          borderLeft: \"6px solid #54C5D5\",\n          backgroundColor: \"lightgrey\",\n          padding: \"2px\",\n          margin: \"2px\"\n        },\n        fcCardReact: {\n          minHeight: \"15px\",\n          margin: \"5px\",\n          color: \"white\",\n          backgroundColor: \"rgb(85, 85, 85)\"\n        },\n        fcCardHeaderReact: {\n          padding: \"0.25rem 0.25rem\",\n          marginBottom: 0,\n          borderBottom: \"1px solid rgba(0, 0, 0, 0.125)\",\n          fontSize: \"14px\",\n          color: \"rgb(0, 151, 172)\",\n          textAlign: \"left\"\n        },\n        fcCardBodyReact: {\n          width: \"100%\",\n          textAlign: \"left\",\n          padding: \"5px\"\n        }\n      };\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          { className: \"row\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"col-md-12\" },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"form-group\" },\n              _react2.default.createElement(\"input\", {\n                className: \"form-control\",\n                placeholder: \"Please type text...\",\n                defaultValue: this.state.value,\n                onChange: this.onChange.bind(this)\n              })\n            )\n          )\n        ),\n        _react2.default.createElement(\n          \"div\",\n          { className: \"row\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"col-md-12\" },\n            this.state.data.map(function (dynamicdata, index) {\n              return _react2.default.createElement(\n                \"div\",\n                { kay: \"test1\", style: styles.fcCardReact },\n                _react2.default.createElement(\n                  \"div\",\n                  { style: styles.fcCardHeaderReact },\n                  dynamicdata.source.name\n                ),\n                _react2.default.createElement(\n                  \"div\",\n                  { style: styles.fcCardBodyReact },\n                  dynamicdata.title\n                )\n              );\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return SearchResultItem;\n}(_react2.default.Component);\n\nexports.default = SearchResultItem;\n\n//# sourceURL=webpack:///./src/SearchResultItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Main = __webpack_require__(/*! ./Main */ \"./src/Main.js\");\n\nvar _Main2 = _interopRequireDefault(_Main);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Index = function Index() {\n  var styles = {\n    container: {\n      width: \"400px\"\n    }\n  };\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(_Main2.default, null)\n  );\n};\n\n_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById(\"react_search_popover_panel_container\"));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ })

/******/ });