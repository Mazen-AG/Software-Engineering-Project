(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
}

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_Software_project_git_Software_Engineering_Project_THE_Project_Files_geeks_v2_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ "./node_modules/next-themes/dist/index.modern.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\Software project git\\Software-Engineering-Project\\THE Project Files\\geeks-v2\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_Software_project_git_Software_Engineering_Project_THE_Project_Files_geeks_v2_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
    attribute: "class",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next-themes/dist/index.modern.js":
/*!*******************************************************!*\
  !*** ./node_modules/next-themes/dist/index.modern.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeProvider": function() { return /* binding */ f; },
/* harmony export */   "useTheme": function() { return /* binding */ d; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var s=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({setTheme:function(e){},themes:[]}),d=function(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(s)},u=["light","dark"],l="(prefers-color-scheme: dark)",f=function(t){var n=t.forcedTheme,c=t.disableTransitionOnChange,m=void 0!==c&&c,d=t.enableSystem,f=void 0===d||d,g=t.enableColorScheme,T=void 0===g||g,w=t.storageKey,S=void 0===w?"theme":w,b=t.themes,E=void 0===b?["light","dark"]:b,k=t.defaultTheme,x=void 0===k?f?"system":"light":k,L=t.attribute,I=void 0===L?"data-theme":L,C=t.value,M=t.children,_=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){return v(S,x)}),O=_[0],H=_[1],K=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){return v(S)}),N=K[0],j=K[1],A=C?Object.values(C):E,J=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e){var t=p(e);j(t),"system"!==O||n||z(t,!1)},[O,n]),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(J);P.current=J;var z=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==C?void 0:C[e])||e,o=m&&n?y():null;if(t)try{localStorage.setItem(S,e)}catch(e){}if("system"===e&&f){var i=p();r=(null==C?void 0:C[i])||i}if(n){var a,c=document.documentElement;"class"===I?((a=c.classList).remove.apply(a,A),c.classList.add(r)):c.setAttribute(I,r),null==o||o()}},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var e=function(){return P.current.apply(P,[].slice.call(arguments))},t=window.matchMedia(l);return t.addListener(e),e(t),function(){return t.removeListener(e)}},[]);var V=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(e){n?z(e,!0,!1):z(e),H(e)},[n]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var e=function(e){e.key===S&&V(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}},[V]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(T){var e=n&&u.includes(n)?n:O&&u.includes(O)?O:"system"===O&&N||null;document.documentElement.style.setProperty("color-scheme",e)}},[T,O,N,n]),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(s.Provider,{value:{theme:O,setTheme:V,forcedTheme:n,resolvedTheme:"system"===O?N:O,themes:f?[].concat(E,["system"]):E,systemTheme:f?N:void 0}},react__WEBPACK_IMPORTED_MODULE_0___default().createElement(h,{forcedTheme:n,storageKey:S,attribute:I,value:C,enableSystem:f,defaultTheme:x,attrs:A}),M)},h=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function(t){var n=t.forcedTheme,r=t.storageKey,o=t.attribute,i=t.enableSystem,a=t.defaultTheme,c=t.value,s="class"===o?"var d=document.documentElement.classList;d.remove("+t.attrs.map(function(e){return"'"+e+"'"}).join(",")+");":"var d=document.documentElement;",d=function(e,t){e=(null==c?void 0:c[e])||e;var n=t?e:"'"+e+"'";return"class"===o?"d.add("+n+")":"d.setAttribute('"+o+"', "+n+")"},u="system"===a;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_1___default()),null,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",n?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+s+d(n)+"}()"}}:i?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+s+"var e=localStorage.getItem('"+r+"');"+(u?"":d(a)+";")+'if("system"===e||(!e&&'+u+')){var t="'+l+'",m=window.matchMedia(t);m.media!==t||m.matches?'+d("dark")+":"+d("light")+"}else if(e) "+(c?"var x="+JSON.stringify(c)+";":"")+d(c?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+s+'var e=localStorage.getItem("'+r+'");if(e){'+(c?"var x="+JSON.stringify(c)+";":"")+d(c?"x[e]":"e",!0)+"}else{"+d(a)+";}}catch(t){}}();"}}))},function(e,t){return e.forcedTheme===t.forcedTheme}),v=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout(function(){document.head.removeChild(e)},1)}},p=function(e){return e||(e=window.matchMedia(l)),e.matches?"dark":"light"};


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/global.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/global.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./global.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/global.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/global.css":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[6].use[2]!./styles/global.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v2.1.4 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\r\n\r\n/*\r\nDocument\r\n========\r\n*/\r\n\r\n/**\r\nUse a better box model (opinionated).\r\n*/\r\n\r\n*,\r\n::before,\r\n::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n/**\r\nUse a more readable tab size (opinionated).\r\n*/\r\n\r\nhtml {\r\n\t-moz-tab-size: 4;\r\n\t-o-tab-size: 4;\r\n\t   tab-size: 4;\r\n}\r\n\r\n/**\r\n1. Correct the line height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n*/\r\n\r\nhtml {\r\n\tline-height: 1.15; /* 1 */\r\n\t-webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/*\r\nSections\r\n========\r\n*/\r\n\r\n/**\r\nRemove the margin in all browsers.\r\n*/\r\n\r\nbody {\r\n\tmargin: 0;\r\n}\r\n\r\n/**\r\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n*/\r\n\r\nbody {\r\n\tfont-family:\r\n\t\tsystem-ui,\r\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\r\n\t\t'Segoe UI',\r\n\t\tRoboto,\r\n\t\tHelvetica,\r\n\t\tArial,\r\n\t\tsans-serif,\r\n\t\t'Apple Color Emoji',\r\n\t\t'Segoe UI Emoji';\r\n}\r\n\r\n/*\r\nGrouping content\r\n================\r\n*/\r\n\r\n/**\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n*/\r\n\r\nhr {\r\n\theight: 0; /* 1 */\r\n\tcolor: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nText-level semantics\r\n====================\r\n*/\r\n\r\n/**\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\n\r\nabbr[title] {\r\n\t-webkit-text-decoration: underline dotted;\r\n\t        text-decoration: underline dotted;\r\n}\r\n\r\n/**\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\n\tfont-weight: bolder;\r\n}\r\n\r\n/**\r\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n2. Correct the odd 'em' font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n\tfont-family:\r\n\t\tui-monospace,\r\n\t\tSFMono-Regular,\r\n\t\tConsolas,\r\n\t\t'Liberation Mono',\r\n\t\tMenlo,\r\n\t\tmonospace; /* 1 */\r\n\tfont-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\nAdd the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\n\tfont-size: 80%;\r\n}\r\n\r\n/**\r\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\n\tfont-size: 75%;\r\n\tline-height: 0;\r\n\tposition: relative;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nsub {\r\n\tbottom: -0.25em;\r\n}\r\n\r\nsup {\r\n\ttop: -0.5em;\r\n}\r\n\r\n/*\r\nTabular data\r\n============\r\n*/\r\n\r\n/**\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n*/\r\n\r\ntable {\r\n\ttext-indent: 0; /* 1 */\r\n\tborder-color: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nForms\r\n=====\r\n*/\r\n\r\n/**\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n\tfont-family: inherit; /* 1 */\r\n\tfont-size: 100%; /* 1 */\r\n\tline-height: 1.15; /* 1 */\r\n\tmargin: 0; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n1. Remove the inheritance of text transform in Firefox.\r\n*/\r\n\r\nbutton,\r\nselect { /* 1 */\r\n\ttext-transform: none;\r\n}\r\n\r\n/**\r\nCorrect the inability to style clickable types in iOS and Safari.\r\n*/\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n\t-webkit-appearance: button;\r\n}\r\n\r\n/**\r\nRemove the inner border and padding in Firefox.\r\n*/\r\n\r\n::-moz-focus-inner {\r\n\tborder-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nRestore the focus styles unset by the previous rule.\r\n*/\r\n\r\n:-moz-focusring {\r\n\toutline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\nRemove the additional ':invalid' styles in Firefox.\r\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\r\n*/\r\n\r\n:-moz-ui-invalid {\r\n\tbox-shadow: none;\r\n}\r\n\r\n/**\r\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\r\n*/\r\n\r\nlegend {\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\n\r\nprogress {\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/**\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n\theight: auto;\r\n}\r\n\r\n/**\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type='search'] {\r\n\t-webkit-appearance: textfield; /* 1 */\r\n\toutline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n::-webkit-search-decoration {\r\n\t-webkit-appearance: none;\r\n}\r\n\r\n/**\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to 'inherit' in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n\t-webkit-appearance: button; /* 1 */\r\n\tfont: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nInteractive\r\n===========\r\n*/\r\n\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\n\r\nsummary {\r\n\tdisplay: list-item;\r\n}/**\r\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\r\n * A thin layer on top of normalize.css that provides a starting point more\r\n * suitable for web applications.\r\n */\r\n\r\n/**\r\n * Removes the default spacing and border for appropriate elements.\r\n */\r\n\r\nblockquote,\r\ndl,\r\ndd,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nhr,\r\nfigure,\r\np,\r\npre {\r\n  margin: 0;\r\n}\r\n\r\nbutton {\r\n  background-color: transparent;\r\n  background-image: none;\r\n}\r\n\r\n/**\r\n * Work around a Firefox/IE bug where the transparent `button` background\r\n * results in a loss of the default `button` focus styles.\r\n */\r\n\r\nbutton:focus {\r\n  outline: 1px dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n}\r\n\r\nfieldset {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Tailwind custom reset styles\r\n */\r\n\r\n/**\r\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\r\n *    sans-serif font stack as a fallback) as a sane default.\r\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\r\n *    to override it to ensure consistency even when using the default theme.\r\n */\r\n\r\nhtml {\r\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\r\n  line-height: 1.5; /* 2 */\r\n}\r\n\r\n\r\n/**\r\n * Inherit font-family and line-height from `html` so users can set them as\r\n * a class directly on the `html` element.\r\n */\r\n\r\nbody {\r\n  font-family: inherit;\r\n  line-height: inherit;\r\n}\r\n\r\n/**\r\n * 1. Prevent padding and border from affecting element width.\r\n *\r\n *    We used to set this in the html element and inherit from\r\n *    the parent element for everything else. This caused issues\r\n *    in shadow-dom-enhanced elements like <details> where the content\r\n *    is wrapped by a div with box-sizing set to `content-box`.\r\n *\r\n *    https://github.com/mozdevs/cssremedy/issues/4\r\n *\r\n *\r\n * 2. Allow adding a border to an element by just adding a border-width.\r\n *\r\n *    By default, the way the browser specifies that an element should have no\r\n *    border is by setting it's border-style to `none` in the user-agent\r\n *    stylesheet.\r\n *\r\n *    In order to easily add borders to elements by just setting the `border-width`\r\n *    property, we change the default border-style for all elements to `solid`, and\r\n *    use border-width to hide them instead. This way our `border` utilities only\r\n *    need to set the `border-width` property instead of the entire `border`\r\n *    shorthand, making our border utilities much more straightforward to compose.\r\n *\r\n *    https://github.com/tailwindcss/tailwindcss/pull/116\r\n */\r\n\r\n*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box; /* 1 */\r\n  border-width: 0; /* 2 */\r\n  border-style: solid; /* 2 */\r\n  border-color: #e5e7eb; /* 2 */\r\n}\r\n\r\n/*\r\n * Ensure horizontal rules are visible by default\r\n */\r\n\r\nhr {\r\n  border-top-width: 1px;\r\n}\r\n\r\n/**\r\n * Undo the `border-style: none` reset that Normalize applies to images so that\r\n * our `border-{width}` utilities have the expected effect.\r\n *\r\n * The Normalize reset is unnecessary for us since we default the border-width\r\n * to 0 on all elements.\r\n *\r\n * https://github.com/tailwindcss/tailwindcss/issues/362\r\n */\r\n\r\nimg {\r\n  border-style: solid;\r\n}\r\n\r\ntextarea {\r\n  resize: vertical;\r\n}\r\n\r\ninput::-moz-placeholder, textarea::-moz-placeholder {\r\n  opacity: 1;\r\n  color: #9ca3af;\r\n}\r\n\r\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\r\n  opacity: 1;\r\n  color: #9ca3af;\r\n}\r\n\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  opacity: 1;\r\n  color: #9ca3af;\r\n}\r\n\r\nbutton,\r\n[role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n}\r\n\r\n/**\r\n * Reset links to optimize for opt-in styling instead of\r\n * opt-out.\r\n */\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n/**\r\n * Reset form element properties that are easy to forget to\r\n * style explicitly so you don't inadvertently introduce\r\n * styles that deviate from your design system. These styles\r\n * supplement a partial reset that is already applied by\r\n * normalize.css.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  padding: 0;\r\n  line-height: inherit;\r\n  color: inherit;\r\n}\r\n\r\n/**\r\n * Use the configured 'mono' font family for elements that\r\n * are expected to be rendered with a monospace font, falling\r\n * back to the system monospace stack if there is no configured\r\n * 'mono' font family.\r\n */\r\n\r\npre,\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n}\r\n\r\n/**\r\n * Make replaced elements `display: block` by default as that's\r\n * the behavior you want almost all of the time. Inspired by\r\n * CSS Remedy, with `svg` added as well.\r\n *\r\n * https://github.com/mozdevs/cssremedy/issues/14\r\n */\r\n\r\nimg,\r\nsvg,\r\nvideo,\r\ncanvas,\r\naudio,\r\niframe,\r\nembed,\r\nobject {\r\n  display: block;\r\n  vertical-align: middle;\r\n}\r\n\r\n/**\r\n * Constrain images and videos to the parent width and preserve\r\n * their intrinsic aspect ratio.\r\n *\r\n * https://github.com/mozdevs/cssremedy/issues/14\r\n */\r\n\r\nimg,\r\nvideo {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n* {\r\n\t--tw-shadow: 0 0 #0000;\r\n\t--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\r\n\t--tw-ring-offset-width: 0px;\r\n\t--tw-ring-offset-color: #fff;\r\n\t--tw-ring-color: rgba(59, 130, 246, 0.5);\r\n\t--tw-ring-offset-shadow: 0 0 #0000;\r\n\t--tw-ring-shadow: 0 0 #0000;\r\n}\r\n.container {\r\n\twidth: 100%;\r\n}\r\n@media (min-width: 640px) {\r\n\r\n\t.container {\r\n\t\tmax-width: 640px;\r\n\t}\r\n}\r\n@media (min-width: 768px) {\r\n\r\n\t.container {\r\n\t\tmax-width: 768px;\r\n\t}\r\n}\r\n@media (min-width: 1024px) {\r\n\r\n\t.container {\r\n\t\tmax-width: 1024px;\r\n\t}\r\n}\r\n@media (min-width: 1280px) {\r\n\r\n\t.container {\r\n\t\tmax-width: 1280px;\r\n\t}\r\n}\r\n@media (min-width: 1536px) {\r\n\r\n\t.container {\r\n\t\tmax-width: 1536px;\r\n\t}\r\n}\r\n.invisible {\r\n\tvisibility: hidden;\r\n}\r\n.relative {\r\n\tposition: relative;\r\n}\r\n.absolute {\r\n\tposition: absolute;\r\n}\r\n.inset-0 {\r\n\ttop: 0px;\r\n\tright: 0px;\r\n\tbottom: 0px;\r\n\tleft: 0px;\r\n}\r\n.z-10 {\r\n\tz-index: 10;\r\n}\r\n.col-span-1 {\r\n\tgrid-column: span 1 / span 1;\r\n}\r\n.mx-auto {\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n.my-8 {\r\n\tmargin-top: 2rem;\r\n\tmargin-bottom: 2rem;\r\n}\r\n.mx-2 {\r\n\tmargin-left: 0.5rem;\r\n\tmargin-right: 0.5rem;\r\n}\r\n.mb-4 {\r\n\tmargin-bottom: 1rem;\r\n}\r\n.mb-8 {\r\n\tmargin-bottom: 2rem;\r\n}\r\n.mb-2 {\r\n\tmargin-bottom: 0.5rem;\r\n}\r\n.mb-3 {\r\n\tmargin-bottom: 0.75rem;\r\n}\r\n.mt-6 {\r\n\tmargin-top: 1.5rem;\r\n}\r\n.mt-2 {\r\n\tmargin-top: 0.5rem;\r\n}\r\n.ml-0 {\r\n\tmargin-left: 0px;\r\n}\r\n.mb-6 {\r\n\tmargin-bottom: 1.5rem;\r\n}\r\n.mr-2 {\r\n\tmargin-right: 0.5rem;\r\n}\r\n.ml-3 {\r\n\tmargin-left: 0.75rem;\r\n}\r\n.mb-10 {\r\n\tmargin-bottom: 2.5rem;\r\n}\r\n.mt-3 {\r\n\tmargin-top: 0.75rem;\r\n}\r\n.ml-4 {\r\n\tmargin-left: 1rem;\r\n}\r\n.mt-4 {\r\n\tmargin-top: 1rem;\r\n}\r\n.ml-auto {\r\n\tmargin-left: auto;\r\n}\r\n.ml-1 {\r\n\tmargin-left: 0.25rem;\r\n}\r\n.ml-5 {\r\n\tmargin-left: 1.25rem;\r\n}\r\n.mr-0 {\r\n\tmargin-right: 0px;\r\n}\r\n.mr-4 {\r\n\tmargin-right: 1rem;\r\n}\r\n.mb-1 {\r\n\tmargin-bottom: 0.25rem;\r\n}\r\n.mt-5 {\r\n\tmargin-top: 1.25rem;\r\n}\r\n.mt-8 {\r\n\tmargin-top: 2rem;\r\n}\r\n.mb-12 {\r\n\tmargin-bottom: 3rem;\r\n}\r\n.block {\r\n\tdisplay: block;\r\n}\r\n.flex {\r\n\tdisplay: flex;\r\n}\r\n.inline-flex {\r\n\tdisplay: inline-flex;\r\n}\r\n.grid {\r\n\tdisplay: grid;\r\n}\r\n.hidden {\r\n\tdisplay: none;\r\n}\r\n.h-\\[90vh\\] {\r\n\theight: 90vh;\r\n}\r\n.h-full {\r\n\theight: 100%;\r\n}\r\n.h-10 {\r\n\theight: 2.5rem;\r\n}\r\n.h-5 {\r\n\theight: 1.25rem;\r\n}\r\n.h-4 {\r\n\theight: 1rem;\r\n}\r\n.h-auto {\r\n\theight: auto;\r\n}\r\n.h-80 {\r\n\theight: 20rem;\r\n}\r\n.h-6 {\r\n\theight: 1.5rem;\r\n}\r\n.h-14 {\r\n\theight: 3.5rem;\r\n}\r\n.w-full {\r\n\twidth: 100%;\r\n}\r\n.w-20 {\r\n\twidth: 5rem;\r\n}\r\n.w-4 {\r\n\twidth: 1rem;\r\n}\r\n.w-5 {\r\n\twidth: 1.25rem;\r\n}\r\n.w-6 {\r\n\twidth: 1.5rem;\r\n}\r\n.w-10 {\r\n\twidth: 2.5rem;\r\n}\r\n.w-7 {\r\n\twidth: 1.75rem;\r\n}\r\n.max-w-md {\r\n\tmax-width: 28rem;\r\n}\r\n.max-w-sm {\r\n\tmax-width: 24rem;\r\n}\r\n.max-w-screen-md {\r\n\tmax-width: 768px;\r\n}\r\n.max-w-7xl {\r\n\tmax-width: 80rem;\r\n}\r\n.max-w-xl {\r\n\tmax-width: 36rem;\r\n}\r\n.max-w-5xl {\r\n\tmax-width: 64rem;\r\n}\r\n.flex-grow {\r\n\tflex-grow: 1;\r\n}\r\n.transform {\r\n\t--tw-translate-x: 0;\r\n\t--tw-translate-y: 0;\r\n\t--tw-rotate: 0;\r\n\t--tw-skew-x: 0;\r\n\t--tw-skew-y: 0;\r\n\t--tw-scale-x: 1;\r\n\t--tw-scale-y: 1;\r\n\ttransform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r\n}\r\n.grid-cols-1 {\r\n\tgrid-template-columns: repeat(1, minmax(0, 1fr));\r\n}\r\n.grid-cols-2 {\r\n\tgrid-template-columns: repeat(2, minmax(0, 1fr));\r\n}\r\n.flex-col {\r\n\tflex-direction: column;\r\n}\r\n.flex-row {\r\n\tflex-direction: row;\r\n}\r\n.flex-wrap {\r\n\tflex-wrap: wrap;\r\n}\r\n.items-center {\r\n\talign-items: center;\r\n}\r\n.items-start {\r\n\talign-items: flex-start;\r\n}\r\n.justify-center {\r\n\tjustify-content: center;\r\n}\r\n.justify-between {\r\n\tjustify-content: space-between;\r\n}\r\n.justify-items-center {\r\n\tjustify-items: center;\r\n}\r\n.gap-4 {\r\n\tgap: 1rem;\r\n}\r\n.gap-8 {\r\n\tgap: 2rem;\r\n}\r\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\r\n\t--tw-space-x-reverse: 0;\r\n\tmargin-right: calc(0.5rem * var(--tw-space-x-reverse));\r\n\tmargin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\r\n}\r\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\r\n\t--tw-space-y-reverse: 0;\r\n\tmargin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\r\n\tmargin-bottom: calc(2rem * var(--tw-space-y-reverse));\r\n}\r\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\r\n\t--tw-space-y-reverse: 0;\r\n\tmargin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\r\n\tmargin-bottom: calc(1rem * var(--tw-space-y-reverse));\r\n}\r\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\r\n\t--tw-space-y-reverse: 0;\r\n\tmargin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\r\n\tmargin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\r\n}\r\n.space-x-8 > :not([hidden]) ~ :not([hidden]) {\r\n\t--tw-space-x-reverse: 0;\r\n\tmargin-right: calc(2rem * var(--tw-space-x-reverse));\r\n\tmargin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\r\n}\r\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\r\n\t--tw-space-x-reverse: 0;\r\n\tmargin-right: calc(0.75rem * var(--tw-space-x-reverse));\r\n\tmargin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\r\n}\r\n.rounded-lg {\r\n\tborder-radius: 0.5rem;\r\n}\r\n.rounded {\r\n\tborder-radius: 0.25rem;\r\n}\r\n.rounded-xl {\r\n\tborder-radius: 0.75rem;\r\n}\r\n.rounded-2xl {\r\n\tborder-radius: 1rem;\r\n}\r\n.rounded-md {\r\n\tborder-radius: 0.375rem;\r\n}\r\n.border {\r\n\tborder-width: 1px;\r\n}\r\n.border-2 {\r\n\tborder-width: 2px;\r\n}\r\n.border-t {\r\n\tborder-top-width: 1px;\r\n}\r\n.border-l {\r\n\tborder-left-width: 1px;\r\n}\r\n.border-gray-300 {\r\n\t--tw-border-opacity: 1;\r\n\tborder-color: rgba(209, 213, 219, var(--tw-border-opacity));\r\n}\r\n.border-purple-600 {\r\n\t--tw-border-opacity: 1;\r\n\tborder-color: rgba(124, 58, 237, var(--tw-border-opacity));\r\n}\r\n.border-black {\r\n\t--tw-border-opacity: 1;\r\n\tborder-color: rgba(0, 0, 0, var(--tw-border-opacity));\r\n}\r\n.bg-white {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\r\n}\r\n.bg-gray-50 {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(249, 250, 251, var(--tw-bg-opacity));\r\n}\r\n.bg-blue-600 {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(37, 99, 235, var(--tw-bg-opacity));\r\n}\r\n.bg-gray-200 {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(229, 231, 235, var(--tw-bg-opacity));\r\n}\r\n.bg-black {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(0, 0, 0, var(--tw-bg-opacity));\r\n}\r\n.bg-gradient-to-r {\r\n\tbackground-image: linear-gradient(to right, var(--tw-gradient-stops));\r\n}\r\n.from-pink-500 {\r\n\t--tw-gradient-from: #ec4899;\r\n\t--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(236, 72, 153, 0));\r\n}\r\n.from-indigo-500 {\r\n\t--tw-gradient-from: #6366f1;\r\n\t--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(99, 102, 241, 0));\r\n}\r\n.from-rose-500 {\r\n\t--tw-gradient-from: #f43f5e;\r\n\t--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(244, 63, 94, 0));\r\n}\r\n.via-purple-500 {\r\n\t--tw-gradient-stops: var(--tw-gradient-from), #8b5cf6, var(--tw-gradient-to, rgba(139, 92, 246, 0));\r\n}\r\n.via-fuchsia-500 {\r\n\t--tw-gradient-stops: var(--tw-gradient-from), #d946ef, var(--tw-gradient-to, rgba(217, 70, 239, 0));\r\n}\r\n.to-indigo-500 {\r\n\t--tw-gradient-to: #6366f1;\r\n}\r\n.to-rose-500 {\r\n\t--tw-gradient-to: #f43f5e;\r\n}\r\n.bg-cover {\r\n\tbackground-size: cover;\r\n}\r\n.bg-clip-text {\r\n\t-webkit-background-clip: text;\r\n\t        background-clip: text;\r\n}\r\n.bg-bottom {\r\n\tbackground-position: bottom;\r\n}\r\n.bg-no-repeat {\r\n\tbackground-repeat: no-repeat;\r\n}\r\n.fill-current {\r\n\tfill: currentColor;\r\n}\r\n.p-2\\.5 {\r\n\tpadding: 0.625rem;\r\n}\r\n.p-2 {\r\n\tpadding: 0.5rem;\r\n}\r\n.p-3 {\r\n\tpadding: 0.75rem;\r\n}\r\n.p-6 {\r\n\tpadding: 1.5rem;\r\n}\r\n.p-5 {\r\n\tpadding: 1.25rem;\r\n}\r\n.px-10 {\r\n\tpadding-left: 2.5rem;\r\n\tpadding-right: 2.5rem;\r\n}\r\n.px-4 {\r\n\tpadding-left: 1rem;\r\n\tpadding-right: 1rem;\r\n}\r\n.py-2\\.5 {\r\n\tpadding-top: 0.625rem;\r\n\tpadding-bottom: 0.625rem;\r\n}\r\n.py-2 {\r\n\tpadding-top: 0.5rem;\r\n\tpadding-bottom: 0.5rem;\r\n}\r\n.py-8 {\r\n\tpadding-top: 2rem;\r\n\tpadding-bottom: 2rem;\r\n}\r\n.py-3 {\r\n\tpadding-top: 0.75rem;\r\n\tpadding-bottom: 0.75rem;\r\n}\r\n.px-5 {\r\n\tpadding-left: 1.25rem;\r\n\tpadding-right: 1.25rem;\r\n}\r\n.py-10 {\r\n\tpadding-top: 2.5rem;\r\n\tpadding-bottom: 2.5rem;\r\n}\r\n.px-6 {\r\n\tpadding-left: 1.5rem;\r\n\tpadding-right: 1.5rem;\r\n}\r\n.py-12 {\r\n\tpadding-top: 3rem;\r\n\tpadding-bottom: 3rem;\r\n}\r\n.px-3 {\r\n\tpadding-left: 0.75rem;\r\n\tpadding-right: 0.75rem;\r\n}\r\n.py-1 {\r\n\tpadding-top: 0.25rem;\r\n\tpadding-bottom: 0.25rem;\r\n}\r\n.py-1\\.5 {\r\n\tpadding-top: 0.375rem;\r\n\tpadding-bottom: 0.375rem;\r\n}\r\n.pt-10 {\r\n\tpadding-top: 2.5rem;\r\n}\r\n.pb-5 {\r\n\tpadding-bottom: 1.25rem;\r\n}\r\n.pt-5 {\r\n\tpadding-top: 1.25rem;\r\n}\r\n.pb-8 {\r\n\tpadding-bottom: 2rem;\r\n}\r\n.pb-4 {\r\n\tpadding-bottom: 1rem;\r\n}\r\n.pt-1 {\r\n\tpadding-top: 0.25rem;\r\n}\r\n.pl-2 {\r\n\tpadding-left: 0.5rem;\r\n}\r\n.pb-10 {\r\n\tpadding-bottom: 2.5rem;\r\n}\r\n.pb-16 {\r\n\tpadding-bottom: 4rem;\r\n}\r\n.text-center {\r\n\ttext-align: center;\r\n}\r\n.text-6xl {\r\n\tfont-size: 3.75rem;\r\n\tline-height: 1;\r\n}\r\n.text-xl {\r\n\tfont-size: 1.25rem;\r\n\tline-height: 1.75rem;\r\n}\r\n.text-4xl {\r\n\tfont-size: 2.25rem;\r\n\tline-height: 2.5rem;\r\n}\r\n.text-sm {\r\n\tfont-size: 0.875rem;\r\n\tline-height: 1.25rem;\r\n}\r\n.text-5xl {\r\n\tfont-size: 3rem;\r\n\tline-height: 1;\r\n}\r\n.text-lg {\r\n\tfont-size: 1.125rem;\r\n\tline-height: 1.75rem;\r\n}\r\n.text-2xl {\r\n\tfont-size: 1.5rem;\r\n\tline-height: 2rem;\r\n}\r\n.text-base {\r\n\tfont-size: 1rem;\r\n\tline-height: 1.5rem;\r\n}\r\n.font-bold {\r\n\tfont-weight: 700;\r\n}\r\n.font-extrabold {\r\n\tfont-weight: 800;\r\n}\r\n.font-light {\r\n\tfont-weight: 300;\r\n}\r\n.font-medium {\r\n\tfont-weight: 500;\r\n}\r\n.font-semibold {\r\n\tfont-weight: 600;\r\n}\r\n.font-normal {\r\n\tfont-weight: 400;\r\n}\r\n.uppercase {\r\n\ttext-transform: uppercase;\r\n}\r\n.leading-normal {\r\n\tline-height: 1.5;\r\n}\r\n.leading-tight {\r\n\tline-height: 1.25;\r\n}\r\n.tracking-tight {\r\n\tletter-spacing: -0.025em;\r\n}\r\n.tracking-normal {\r\n\tletter-spacing: 0em;\r\n}\r\n.text-gray-900 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\r\n}\r\n.text-black {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(0, 0, 0, var(--tw-text-opacity));\r\n}\r\n.text-gray-500 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(107, 114, 128, var(--tw-text-opacity));\r\n}\r\n.text-white {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\r\n}\r\n.text-transparent {\r\n\tcolor: transparent;\r\n}\r\n.text-gray-600 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(75, 85, 99, var(--tw-text-opacity));\r\n}\r\n.text-gray-700 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\r\n}\r\n.text-gray-800 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(31, 41, 55, var(--tw-text-opacity));\r\n}\r\n.text-blue-500 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(59, 130, 246, var(--tw-text-opacity));\r\n}\r\n.text-blue-600 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(37, 99, 235, var(--tw-text-opacity));\r\n}\r\n.text-green-500 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(16, 185, 129, var(--tw-text-opacity));\r\n}\r\n.text-teal-600 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(13, 148, 136, var(--tw-text-opacity));\r\n}\r\n.text-gray-300 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(209, 213, 219, var(--tw-text-opacity));\r\n}\r\n.text-gray-400 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(156, 163, 175, var(--tw-text-opacity));\r\n}\r\n.shadow {\r\n\t--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\r\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n}\r\n.shadow-sm {\r\n\t--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\r\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n}\r\n.shadow-xl {\r\n\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\r\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n}\r\n.shadow-2xl {\r\n\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\r\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n}\r\n.shadow-md {\r\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\r\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n}\r\n.outline-none {\r\n\toutline: 2px solid transparent;\r\n\toutline-offset: 2px;\r\n}\r\n.ring-1 {\r\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n}\r\n.ring-black {\r\n\t--tw-ring-opacity: 1;\r\n\t--tw-ring-color: rgba(0, 0, 0, var(--tw-ring-opacity));\r\n}\r\n.ring-opacity-5 {\r\n\t--tw-ring-opacity: 0.05;\r\n}\r\n.filter {\r\n\t--tw-blur: var(--tw-empty,/*!*/ /*!*/);\r\n\t--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\r\n\t--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\r\n\t--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\r\n\t--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\r\n\t--tw-invert: var(--tw-empty,/*!*/ /*!*/);\r\n\t--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\r\n\t--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\r\n\t--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\r\n\tfilter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\r\n}\r\n.grayscale {\r\n\t--tw-grayscale: grayscale(100%);\r\n}\r\n.transition {\r\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\r\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\r\n\ttransition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\r\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n\ttransition-duration: 150ms;\r\n}\r\n.transition-colors {\r\n\ttransition-property: background-color, border-color, color, fill, stroke;\r\n\ttransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\r\n\ttransition-duration: 150ms;\r\n}\r\n.duration-300 {\r\n\ttransition-duration: 300ms;\r\n}\r\n.duration-700 {\r\n\ttransition-duration: 700ms;\r\n}\r\n\r\nhtml {\r\n  min-width: 360px;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n#__next {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n.sticky-nav {\r\n  position: sticky;\r\n  z-index: 50;\r\n  top: 0;\r\n  -webkit-backdrop-filter: saturate(180%) blur(20px) !important;\r\n          backdrop-filter: saturate(180%) blur(20px) !important;\r\n  transition: background-color 0.1 ease-in-out !important;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  width: 0.75em;\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb {\r\n  background-color: rgb(39, 39, 39);\r\n  outline: 1px solid rgb(33, 34, 34);\r\n}\r\n\r\n::-moz-selection {\r\n  background-color: #f81ce5;\r\n  color: #fefefe;\r\n}\r\n\r\n::selection {\r\n  background-color: #f81ce5;\r\n  color: #fefefe;\r\n}\r\n\r\n.hover\\:transform:hover {\r\n\t--tw-translate-x: 0;\r\n\t--tw-translate-y: 0;\r\n\t--tw-rotate: 0;\r\n\t--tw-skew-x: 0;\r\n\t--tw-skew-y: 0;\r\n\t--tw-scale-x: 1;\r\n\t--tw-scale-y: 1;\r\n\ttransform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r\n}\r\n\r\n.hover\\:scale-105:hover {\r\n\t--tw-scale-x: 1.05;\r\n\t--tw-scale-y: 1.05;\r\n}\r\n\r\n.hover\\:bg-gray-800:hover {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(31, 41, 55, var(--tw-bg-opacity));\r\n}\r\n\r\n.hover\\:text-gray-300:hover {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(209, 213, 219, var(--tw-text-opacity));\r\n}\r\n\r\n.hover\\:underline:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.hover\\:shadow-md:hover {\r\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\r\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n}\r\n\r\n.hover\\:filter-none:hover {\r\n\tfilter: none;\r\n}\r\n\r\n.hover\\:grayscale-0:hover {\r\n\t--tw-grayscale: grayscale(0);\r\n}\r\n\r\n.focus\\:outline-none:focus {\r\n\toutline: 2px solid transparent;\r\n\toutline-offset: 2px;\r\n}\r\n\r\n.focus\\:ring-4:focus {\r\n\t--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\r\n\t--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\r\n\tbox-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\r\n}\r\n\r\n.dark .dark\\:border {\r\n\tborder-width: 1px;\r\n}\r\n\r\n.dark .dark\\:border-gray-600 {\r\n\t--tw-border-opacity: 1;\r\n\tborder-color: rgba(75, 85, 99, var(--tw-border-opacity));\r\n}\r\n\r\n.dark .dark\\:border-gray-700 {\r\n\t--tw-border-opacity: 1;\r\n\tborder-color: rgba(55, 65, 81, var(--tw-border-opacity));\r\n}\r\n\r\n.dark .dark\\:border-purple-300 {\r\n\t--tw-border-opacity: 1;\r\n\tborder-color: rgba(196, 181, 253, var(--tw-border-opacity));\r\n}\r\n\r\n.dark .dark\\:border-gray-300 {\r\n\t--tw-border-opacity: 1;\r\n\tborder-color: rgba(209, 213, 219, var(--tw-border-opacity));\r\n}\r\n\r\n.dark .dark\\:border-gray-500 {\r\n\t--tw-border-opacity: 1;\r\n\tborder-color: rgba(107, 114, 128, var(--tw-border-opacity));\r\n}\r\n\r\n.dark .dark\\:border-rose-300 {\r\n\t--tw-border-opacity: 1;\r\n\tborder-color: rgba(253, 164, 175, var(--tw-border-opacity));\r\n}\r\n\r\n.dark .dark\\:bg-black {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(0, 0, 0, var(--tw-bg-opacity));\r\n}\r\n\r\n.dark .dark\\:bg-gray-900 {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(17, 24, 39, var(--tw-bg-opacity));\r\n}\r\n\r\n.dark .dark\\:bg-gray-700 {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(55, 65, 81, var(--tw-bg-opacity));\r\n}\r\n\r\n.dark .dark\\:bg-gray-800 {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(31, 41, 55, var(--tw-bg-opacity));\r\n}\r\n\r\n.dark .dark\\:bg-white {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\r\n}\r\n\r\n.dark .dark\\:bg-gradient-to-r {\r\n\tbackground-image: linear-gradient(to right, var(--tw-gradient-stops));\r\n}\r\n\r\n.dark .dark\\:from-pink-500 {\r\n\t--tw-gradient-from: #ec4899;\r\n\t--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(236, 72, 153, 0));\r\n}\r\n\r\n.dark .dark\\:from-blue-400 {\r\n\t--tw-gradient-from: #60a5fa;\r\n\t--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 165, 250, 0));\r\n}\r\n\r\n.dark .dark\\:from-indigo-400 {\r\n\t--tw-gradient-from: #818cf8;\r\n\t--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(129, 140, 248, 0));\r\n}\r\n\r\n.dark .dark\\:from-rose-400 {\r\n\t--tw-gradient-from: #fb7185;\r\n\t--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(251, 113, 133, 0));\r\n}\r\n\r\n.dark .dark\\:via-purple-400 {\r\n\t--tw-gradient-stops: var(--tw-gradient-from), #a78bfa, var(--tw-gradient-to, rgba(167, 139, 250, 0));\r\n}\r\n\r\n.dark .dark\\:via-fuchsia-400 {\r\n\t--tw-gradient-stops: var(--tw-gradient-from), #e879f9, var(--tw-gradient-to, rgba(232, 121, 249, 0));\r\n}\r\n\r\n.dark .dark\\:to-indigo-500 {\r\n\t--tw-gradient-to: #6366f1;\r\n}\r\n\r\n.dark .dark\\:to-indigo-400 {\r\n\t--tw-gradient-to: #818cf8;\r\n}\r\n\r\n.dark .dark\\:to-blue-400 {\r\n\t--tw-gradient-to: #60a5fa;\r\n}\r\n\r\n.dark .dark\\:to-rose-400 {\r\n\t--tw-gradient-to: #fb7185;\r\n}\r\n\r\n.dark .dark\\:text-gray-100 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(243, 244, 246, var(--tw-text-opacity));\r\n}\r\n\r\n.dark .dark\\:text-white {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\r\n}\r\n\r\n.dark .dark\\:text-gray-400 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(156, 163, 175, var(--tw-text-opacity));\r\n}\r\n\r\n.dark .dark\\:text-gray-300 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(209, 213, 219, var(--tw-text-opacity));\r\n}\r\n\r\n.dark .dark\\:text-gray-200 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(229, 231, 235, var(--tw-text-opacity));\r\n}\r\n\r\n.dark .dark\\:text-blue-300 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(147, 197, 253, var(--tw-text-opacity));\r\n}\r\n\r\n.dark .dark\\:text-black {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(0, 0, 0, var(--tw-text-opacity));\r\n}\r\n\r\n.dark .dark\\:text-teal-300 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(94, 234, 212, var(--tw-text-opacity));\r\n}\r\n\r\n.dark .dark\\:text-blue-400 {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(96, 165, 250, var(--tw-text-opacity));\r\n}\r\n\r\n.dark .dark\\:placeholder-gray-400::-moz-placeholder {\r\n\t--tw-placeholder-opacity: 1;\r\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity));\r\n}\r\n\r\n.dark .dark\\:placeholder-gray-400:-ms-input-placeholder {\r\n\t--tw-placeholder-opacity: 1;\r\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity));\r\n}\r\n\r\n.dark .dark\\:placeholder-gray-400::placeholder {\r\n\t--tw-placeholder-opacity: 1;\r\n\tcolor: rgba(156, 163, 175, var(--tw-placeholder-opacity));\r\n}\r\n\r\n.dark .dark\\:ring-offset-gray-800 {\r\n\t--tw-ring-offset-color: #1f2937;\r\n}\r\n\r\n.dark .dark\\:hover\\:border-gray-500:hover {\r\n\t--tw-border-opacity: 1;\r\n\tborder-color: rgba(107, 114, 128, var(--tw-border-opacity));\r\n}\r\n\r\n.dark .dark\\:hover\\:bg-white:hover {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\r\n}\r\n\r\n.dark .dark\\:hover\\:bg-gray-200:hover {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(229, 231, 235, var(--tw-bg-opacity));\r\n}\r\n\r\n.dark .dark\\:hover\\:bg-gray-600:hover {\r\n\t--tw-bg-opacity: 1;\r\n\tbackground-color: rgba(75, 85, 99, var(--tw-bg-opacity));\r\n}\r\n\r\n.dark .dark\\:hover\\:text-black:hover {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(0, 0, 0, var(--tw-text-opacity));\r\n}\r\n\r\n.dark .dark\\:hover\\:text-white:hover {\r\n\t--tw-text-opacity: 1;\r\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\r\n}\r\n\r\n.dark .dark\\:focus\\:border-blue-500:focus {\r\n\t--tw-border-opacity: 1;\r\n\tborder-color: rgba(59, 130, 246, var(--tw-border-opacity));\r\n}\r\n\r\n.dark .dark\\:focus\\:ring-blue-500:focus {\r\n\t--tw-ring-opacity: 1;\r\n\t--tw-ring-color: rgba(59, 130, 246, var(--tw-ring-opacity));\r\n}\r\n\r\n@media (min-width: 640px) {\r\n\r\n\t.sm\\:col-span-2 {\r\n\t\tgrid-column: span 2 / span 2;\r\n\t}\r\n\r\n\t.sm\\:ml-auto {\r\n\t\tmargin-left: auto;\r\n\t}\r\n\r\n\t.sm\\:mt-3 {\r\n\t\tmargin-top: 0.75rem;\r\n\t}\r\n\r\n\t.sm\\:hidden {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.sm\\:max-w-md {\r\n\t\tmax-width: 28rem;\r\n\t}\r\n\r\n\t.sm\\:flex-row {\r\n\t\tflex-direction: row;\r\n\t}\r\n\r\n\t.sm\\:justify-start {\r\n\t\tjustify-content: flex-start;\r\n\t}\r\n\r\n\t.sm\\:p-8 {\r\n\t\tpadding: 2rem;\r\n\t}\r\n\r\n\t.sm\\:px-6 {\r\n\t\tpadding-left: 1.5rem;\r\n\t\tpadding-right: 1.5rem;\r\n\t}\r\n\r\n\t.sm\\:text-left {\r\n\t\ttext-align: left;\r\n\t}\r\n\r\n\t.sm\\:text-xl {\r\n\t\tfont-size: 1.25rem;\r\n\t\tline-height: 1.75rem;\r\n\t}\r\n\r\n\t.sm\\:text-sm {\r\n\t\tfont-size: 0.875rem;\r\n\t\tline-height: 1.25rem;\r\n\t}\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n\t.md\\:visible {\r\n\t\tvisibility: visible;\r\n\t}\r\n\r\n\t.md\\:col-span-2 {\r\n\t\tgrid-column: span 2 / span 2;\r\n\t}\r\n\r\n\t.md\\:my-12 {\r\n\t\tmargin-top: 3rem;\r\n\t\tmargin-bottom: 3rem;\r\n\t}\r\n\r\n\t.md\\:mx-auto {\r\n\t\tmargin-left: auto;\r\n\t\tmargin-right: auto;\r\n\t}\r\n\r\n\t.md\\:ml-6 {\r\n\t\tmargin-left: 1.5rem;\r\n\t}\r\n\r\n\t.md\\:ml-2 {\r\n\t\tmargin-left: 0.5rem;\r\n\t}\r\n\r\n\t.md\\:mt-0 {\r\n\t\tmargin-top: 0px;\r\n\t}\r\n\r\n\t.md\\:ml-3 {\r\n\t\tmargin-left: 0.75rem;\r\n\t}\r\n\r\n\t.md\\:mb-0 {\r\n\t\tmargin-bottom: 0px;\r\n\t}\r\n\r\n\t.md\\:ml-0 {\r\n\t\tmargin-left: 0px;\r\n\t}\r\n\r\n\t.md\\:mr-5 {\r\n\t\tmargin-right: 1.25rem;\r\n\t}\r\n\r\n\t.md\\:flex {\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\t.md\\:hidden {\r\n\t\tdisplay: none;\r\n\t}\r\n\r\n\t.md\\:h-screen {\r\n\t\theight: 100vh;\r\n\t}\r\n\r\n\t.md\\:w-11\\/12 {\r\n\t\twidth: 91.666667%;\r\n\t}\r\n\r\n\t.md\\:w-10\\/12 {\r\n\t\twidth: 83.333333%;\r\n\t}\r\n\r\n\t.md\\:grid-cols-2 {\r\n\t\tgrid-template-columns: repeat(2, minmax(0, 1fr));\r\n\t}\r\n\r\n\t.md\\:grid-cols-3 {\r\n\t\tgrid-template-columns: repeat(3, minmax(0, 1fr));\r\n\t}\r\n\r\n\t.md\\:grid-cols-4 {\r\n\t\tgrid-template-columns: repeat(4, minmax(0, 1fr));\r\n\t}\r\n\r\n\t.md\\:flex-row {\r\n\t\tflex-direction: row;\r\n\t}\r\n\r\n\t.md\\:justify-start {\r\n\t\tjustify-content: flex-start;\r\n\t}\r\n\r\n\t.md\\:space-x-6 > :not([hidden]) ~ :not([hidden]) {\r\n\t\t--tw-space-x-reverse: 0;\r\n\t\tmargin-right: calc(1.5rem * var(--tw-space-x-reverse));\r\n\t\tmargin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\r\n\t}\r\n\r\n\t.md\\:space-y-6 > :not([hidden]) ~ :not([hidden]) {\r\n\t\t--tw-space-y-reverse: 0;\r\n\t\tmargin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\r\n\t\tmargin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\r\n\t}\r\n\r\n\t.md\\:space-x-16 > :not([hidden]) ~ :not([hidden]) {\r\n\t\t--tw-space-x-reverse: 0;\r\n\t\tmargin-right: calc(4rem * var(--tw-space-x-reverse));\r\n\t\tmargin-left: calc(4rem * calc(1 - var(--tw-space-x-reverse)));\r\n\t}\r\n\r\n\t.md\\:border-r-2 {\r\n\t\tborder-right-width: 2px;\r\n\t}\r\n\r\n\t.md\\:p-1 {\r\n\t\tpadding: 0.25rem;\r\n\t}\r\n\r\n\t.md\\:px-6 {\r\n\t\tpadding-left: 1.5rem;\r\n\t\tpadding-right: 1.5rem;\r\n\t}\r\n\r\n\t.md\\:py-32 {\r\n\t\tpadding-top: 8rem;\r\n\t\tpadding-bottom: 8rem;\r\n\t}\r\n\r\n\t.md\\:pt-16 {\r\n\t\tpadding-top: 4rem;\r\n\t}\r\n\r\n\t.md\\:pl-14 {\r\n\t\tpadding-left: 3.5rem;\r\n\t}\r\n\r\n\t.md\\:text-8xl {\r\n\t\tfont-size: 6rem;\r\n\t\tline-height: 1;\r\n\t}\r\n\r\n\t.md\\:text-2xl {\r\n\t\tfont-size: 1.5rem;\r\n\t\tline-height: 2rem;\r\n\t}\r\n\r\n\t.md\\:text-6xl {\r\n\t\tfont-size: 3.75rem;\r\n\t\tline-height: 1;\r\n\t}\r\n\r\n\t.md\\:text-lg {\r\n\t\tfont-size: 1.125rem;\r\n\t\tline-height: 1.75rem;\r\n\t}\r\n\r\n\t.md\\:text-4xl {\r\n\t\tfont-size: 2.25rem;\r\n\t\tline-height: 2.5rem;\r\n\t}\r\n\r\n\t.md\\:leading-tight {\r\n\t\tline-height: 1.25;\r\n\t}\r\n\r\n\t.md\\:tracking-normal {\r\n\t\tletter-spacing: 0em;\r\n\t}\r\n\r\n\t.md\\:hover\\:transform:hover {\r\n\t\t--tw-translate-x: 0;\r\n\t\t--tw-translate-y: 0;\r\n\t\t--tw-rotate: 0;\r\n\t\t--tw-skew-x: 0;\r\n\t\t--tw-skew-y: 0;\r\n\t\t--tw-scale-x: 1;\r\n\t\t--tw-scale-y: 1;\r\n\t\ttransform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\r\n\t}\r\n\r\n\t.md\\:hover\\:scale-105:hover {\r\n\t\t--tw-scale-x: 1.05;\r\n\t\t--tw-scale-y: 1.05;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n\r\n\t.lg\\:col-span-1 {\r\n\t\tgrid-column: span 1 / span 1;\r\n\t}\r\n\r\n\t.lg\\:mb-16 {\r\n\t\tmargin-bottom: 4rem;\r\n\t}\r\n\r\n\t.lg\\:max-w-6xl {\r\n\t\tmax-width: 72rem;\r\n\t}\r\n\r\n\t.lg\\:py-16 {\r\n\t\tpadding-top: 4rem;\r\n\t\tpadding-bottom: 4rem;\r\n\t}\r\n\r\n\t.lg\\:py-0 {\r\n\t\tpadding-top: 0px;\r\n\t\tpadding-bottom: 0px;\r\n\t}\r\n\r\n\t.lg\\:px-8 {\r\n\t\tpadding-left: 2rem;\r\n\t\tpadding-right: 2rem;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1280px) {\r\n\r\n\t.xl\\:p-0 {\r\n\t\tpadding: 0px;\r\n\t}\r\n}\r\n", "",{"version":3,"sources":["<no source>","webpack://styles/%3Cinput%20css%20MevDOk%3E","webpack://styles/%3Cinput%20css%20v29wMP%3E","webpack://styles/global.css"],"names":[],"mappings":"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","sourcesContent":[null,"/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\r\n\r\n/*\r\nDocument\r\n========\r\n*/\r\n\r\n/**\r\nUse a better box model (opinionated).\r\n*/\r\n\r\n*,\r\n::before,\r\n::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n/**\r\nUse a more readable tab size (opinionated).\r\n*/\r\n\r\nhtml {\r\n\t-moz-tab-size: 4;\r\n\ttab-size: 4;\r\n}\r\n\r\n/**\r\n1. Correct the line height in all browsers.\r\n2. Prevent adjustments of font size after orientation changes in iOS.\r\n*/\r\n\r\nhtml {\r\n\tline-height: 1.15; /* 1 */\r\n\t-webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/*\r\nSections\r\n========\r\n*/\r\n\r\n/**\r\nRemove the margin in all browsers.\r\n*/\r\n\r\nbody {\r\n\tmargin: 0;\r\n}\r\n\r\n/**\r\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n*/\r\n\r\nbody {\r\n\tfont-family:\r\n\t\tsystem-ui,\r\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\r\n\t\t'Segoe UI',\r\n\t\tRoboto,\r\n\t\tHelvetica,\r\n\t\tArial,\r\n\t\tsans-serif,\r\n\t\t'Apple Color Emoji',\r\n\t\t'Segoe UI Emoji';\r\n}\r\n\r\n/*\r\nGrouping content\r\n================\r\n*/\r\n\r\n/**\r\n1. Add the correct height in Firefox.\r\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\r\n*/\r\n\r\nhr {\r\n\theight: 0; /* 1 */\r\n\tcolor: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nText-level semantics\r\n====================\r\n*/\r\n\r\n/**\r\nAdd the correct text decoration in Chrome, Edge, and Safari.\r\n*/\r\n\r\nabbr[title] {\r\n\ttext-decoration: underline dotted;\r\n}\r\n\r\n/**\r\nAdd the correct font weight in Edge and Safari.\r\n*/\r\n\r\nb,\r\nstrong {\r\n\tfont-weight: bolder;\r\n}\r\n\r\n/**\r\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\r\n2. Correct the odd 'em' font sizing in all browsers.\r\n*/\r\n\r\ncode,\r\nkbd,\r\nsamp,\r\npre {\r\n\tfont-family:\r\n\t\tui-monospace,\r\n\t\tSFMono-Regular,\r\n\t\tConsolas,\r\n\t\t'Liberation Mono',\r\n\t\tMenlo,\r\n\t\tmonospace; /* 1 */\r\n\tfont-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\nAdd the correct font size in all browsers.\r\n*/\r\n\r\nsmall {\r\n\tfont-size: 80%;\r\n}\r\n\r\n/**\r\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\r\n*/\r\n\r\nsub,\r\nsup {\r\n\tfont-size: 75%;\r\n\tline-height: 0;\r\n\tposition: relative;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nsub {\r\n\tbottom: -0.25em;\r\n}\r\n\r\nsup {\r\n\ttop: -0.5em;\r\n}\r\n\r\n/*\r\nTabular data\r\n============\r\n*/\r\n\r\n/**\r\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\r\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\r\n*/\r\n\r\ntable {\r\n\ttext-indent: 0; /* 1 */\r\n\tborder-color: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nForms\r\n=====\r\n*/\r\n\r\n/**\r\n1. Change the font styles in all browsers.\r\n2. Remove the margin in Firefox and Safari.\r\n*/\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n\tfont-family: inherit; /* 1 */\r\n\tfont-size: 100%; /* 1 */\r\n\tline-height: 1.15; /* 1 */\r\n\tmargin: 0; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inheritance of text transform in Edge and Firefox.\r\n1. Remove the inheritance of text transform in Firefox.\r\n*/\r\n\r\nbutton,\r\nselect { /* 1 */\r\n\ttext-transform: none;\r\n}\r\n\r\n/**\r\nCorrect the inability to style clickable types in iOS and Safari.\r\n*/\r\n\r\nbutton,\r\n[type='button'],\r\n[type='reset'],\r\n[type='submit'] {\r\n\t-webkit-appearance: button;\r\n}\r\n\r\n/**\r\nRemove the inner border and padding in Firefox.\r\n*/\r\n\r\n::-moz-focus-inner {\r\n\tborder-style: none;\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nRestore the focus styles unset by the previous rule.\r\n*/\r\n\r\n:-moz-focusring {\r\n\toutline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\nRemove the additional ':invalid' styles in Firefox.\r\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\r\n*/\r\n\r\n:-moz-ui-invalid {\r\n\tbox-shadow: none;\r\n}\r\n\r\n/**\r\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\r\n*/\r\n\r\nlegend {\r\n\tpadding: 0;\r\n}\r\n\r\n/**\r\nAdd the correct vertical alignment in Chrome and Firefox.\r\n*/\r\n\r\nprogress {\r\n\tvertical-align: baseline;\r\n}\r\n\r\n/**\r\nCorrect the cursor style of increment and decrement buttons in Safari.\r\n*/\r\n\r\n::-webkit-inner-spin-button,\r\n::-webkit-outer-spin-button {\r\n\theight: auto;\r\n}\r\n\r\n/**\r\n1. Correct the odd appearance in Chrome and Safari.\r\n2. Correct the outline style in Safari.\r\n*/\r\n\r\n[type='search'] {\r\n\t-webkit-appearance: textfield; /* 1 */\r\n\toutline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\nRemove the inner padding in Chrome and Safari on macOS.\r\n*/\r\n\r\n::-webkit-search-decoration {\r\n\t-webkit-appearance: none;\r\n}\r\n\r\n/**\r\n1. Correct the inability to style clickable types in iOS and Safari.\r\n2. Change font properties to 'inherit' in Safari.\r\n*/\r\n\r\n::-webkit-file-upload-button {\r\n\t-webkit-appearance: button; /* 1 */\r\n\tfont: inherit; /* 2 */\r\n}\r\n\r\n/*\r\nInteractive\r\n===========\r\n*/\r\n\r\n/*\r\nAdd the correct display in Chrome and Safari.\r\n*/\r\n\r\nsummary {\r\n\tdisplay: list-item;\r\n}\r\n","/**\r\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\r\n * A thin layer on top of normalize.css that provides a starting point more\r\n * suitable for web applications.\r\n */\r\n\r\n/**\r\n * Removes the default spacing and border for appropriate elements.\r\n */\r\n\r\nblockquote,\r\ndl,\r\ndd,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nhr,\r\nfigure,\r\np,\r\npre {\r\n  margin: 0;\r\n}\r\n\r\nbutton {\r\n  background-color: transparent;\r\n  background-image: none;\r\n}\r\n\r\n/**\r\n * Work around a Firefox/IE bug where the transparent `button` background\r\n * results in a loss of the default `button` focus styles.\r\n */\r\n\r\nbutton:focus {\r\n  outline: 1px dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n}\r\n\r\nfieldset {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nol,\r\nul {\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Tailwind custom reset styles\r\n */\r\n\r\n/**\r\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\r\n *    sans-serif font stack as a fallback) as a sane default.\r\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\r\n *    to override it to ensure consistency even when using the default theme.\r\n */\r\n\r\nhtml {\r\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\r\n  line-height: 1.5; /* 2 */\r\n}\r\n\r\n\r\n/**\r\n * Inherit font-family and line-height from `html` so users can set them as\r\n * a class directly on the `html` element.\r\n */\r\n\r\nbody {\r\n  font-family: inherit;\r\n  line-height: inherit;\r\n}\r\n\r\n/**\r\n * 1. Prevent padding and border from affecting element width.\r\n *\r\n *    We used to set this in the html element and inherit from\r\n *    the parent element for everything else. This caused issues\r\n *    in shadow-dom-enhanced elements like <details> where the content\r\n *    is wrapped by a div with box-sizing set to `content-box`.\r\n *\r\n *    https://github.com/mozdevs/cssremedy/issues/4\r\n *\r\n *\r\n * 2. Allow adding a border to an element by just adding a border-width.\r\n *\r\n *    By default, the way the browser specifies that an element should have no\r\n *    border is by setting it's border-style to `none` in the user-agent\r\n *    stylesheet.\r\n *\r\n *    In order to easily add borders to elements by just setting the `border-width`\r\n *    property, we change the default border-style for all elements to `solid`, and\r\n *    use border-width to hide them instead. This way our `border` utilities only\r\n *    need to set the `border-width` property instead of the entire `border`\r\n *    shorthand, making our border utilities much more straightforward to compose.\r\n *\r\n *    https://github.com/tailwindcss/tailwindcss/pull/116\r\n */\r\n\r\n*,\r\n::before,\r\n::after {\r\n  box-sizing: border-box; /* 1 */\r\n  border-width: 0; /* 2 */\r\n  border-style: solid; /* 2 */\r\n  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */\r\n}\r\n\r\n/*\r\n * Ensure horizontal rules are visible by default\r\n */\r\n\r\nhr {\r\n  border-top-width: 1px;\r\n}\r\n\r\n/**\r\n * Undo the `border-style: none` reset that Normalize applies to images so that\r\n * our `border-{width}` utilities have the expected effect.\r\n *\r\n * The Normalize reset is unnecessary for us since we default the border-width\r\n * to 0 on all elements.\r\n *\r\n * https://github.com/tailwindcss/tailwindcss/issues/362\r\n */\r\n\r\nimg {\r\n  border-style: solid;\r\n}\r\n\r\ntextarea {\r\n  resize: vertical;\r\n}\r\n\r\ninput::placeholder,\r\ntextarea::placeholder {\r\n  opacity: 1;\r\n  color: theme('colors.gray.400', #a1a1aa);\r\n}\r\n\r\nbutton,\r\n[role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-size: inherit;\r\n  font-weight: inherit;\r\n}\r\n\r\n/**\r\n * Reset links to optimize for opt-in styling instead of\r\n * opt-out.\r\n */\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: inherit;\r\n}\r\n\r\n/**\r\n * Reset form element properties that are easy to forget to\r\n * style explicitly so you don't inadvertently introduce\r\n * styles that deviate from your design system. These styles\r\n * supplement a partial reset that is already applied by\r\n * normalize.css.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  padding: 0;\r\n  line-height: inherit;\r\n  color: inherit;\r\n}\r\n\r\n/**\r\n * Use the configured 'mono' font family for elements that\r\n * are expected to be rendered with a monospace font, falling\r\n * back to the system monospace stack if there is no configured\r\n * 'mono' font family.\r\n */\r\n\r\npre,\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\r\n}\r\n\r\n/**\r\n * Make replaced elements `display: block` by default as that's\r\n * the behavior you want almost all of the time. Inspired by\r\n * CSS Remedy, with `svg` added as well.\r\n *\r\n * https://github.com/mozdevs/cssremedy/issues/14\r\n */\r\n\r\nimg,\r\nsvg,\r\nvideo,\r\ncanvas,\r\naudio,\r\niframe,\r\nembed,\r\nobject {\r\n  display: block;\r\n  vertical-align: middle;\r\n}\r\n\r\n/**\r\n * Constrain images and videos to the parent width and preserve\r\n * their intrinsic aspect ratio.\r\n *\r\n * https://github.com/mozdevs/cssremedy/issues/14\r\n */\r\n\r\nimg,\r\nvideo {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n","@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\nhtml {\r\n  min-width: 360px;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n#__next {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n}\r\n\r\n.sticky-nav {\r\n  position: sticky;\r\n  z-index: 50;\r\n  top: 0;\r\n  backdrop-filter: saturate(180%) blur(20px) !important;\r\n  transition: background-color 0.1 ease-in-out !important;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  width: 0.75em;\r\n}\r\n\r\nbody::-webkit-scrollbar-thumb {\r\n  background-color: rgb(39, 39, 39);\r\n  outline: 1px solid rgb(33, 34, 34);\r\n}\r\n\r\n::selection {\r\n  background-color: #f81ce5;\r\n  color: #fefefe;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvYW1wLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2FtcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0LXRoZW1lcy9kaXN0L2luZGV4Lm1vZGVybi5qcyIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5jc3M/NjBmMiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiQW1wU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiaXNJbkFtcE1vZGUiLCJ1c2VBbXAiLCJfYW1wQ29udGV4dCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJ1c2VDb250ZXh0IiwiZGVmYXVsdEhlYWQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zaWRlRWZmZWN0IiwiX2hlYWRNYW5hZ2VyQ29udGV4dCIsIl9hbXAiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJpbkFtcE1vZGUiLCJoZWFkIiwiY3JlYXRlRWxlbWVudCIsImNoYXJTZXQiLCJwdXNoIiwibmFtZSIsImNvbnRlbnQiLCJvbmx5UmVhY3RFbGVtZW50IiwibGlzdCIsImNoaWxkIiwidHlwZSIsIkZyYWdtZW50IiwiY29uY2F0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwicHJvcHMiLCJjaGlsZHJlbiIsInJlZHVjZSIsImZyYWdtZW50TGlzdCIsImZyYWdtZW50Q2hpbGQiLCJNRVRBVFlQRVMiLCJ1bmlxdWUiLCJrZXlzIiwiU2V0IiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5IiwiaW5kZXhPZiIsInNsaWNlIiwiYWRkIiwiaSIsImxlbiIsImxlbmd0aCIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwicmVkdWNlQ29tcG9uZW50cyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50IiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsInJldmVyc2UiLCJmaWx0ZXIiLCJtYXAiLCJjIiwiY2xvbmVFbGVtZW50IiwiSGVhZCIsImFtcFN0YXRlIiwiaGVhZE1hbmFnZXIiLCJIZWFkTWFuYWdlckNvbnRleHQiLCJyZWR1Y2VDb21wb25lbnRzVG9TdGF0ZSIsIl9kZWZhdWx0IiwiaXNTZXJ2ZXIiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwidXBkYXRlSGVhZCIsIm1vdW50ZWRJbnN0YW5jZXMiLCJDb21wb25lbnQiLCJNeUFwcCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUFBQSxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsdUJBQUEsR0FBd0IsS0FBSyxDQUE3Qjs7QUFBK0IsSUFBSUMsTUFBTSxHQUFDQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQWpDOztBQUFvRCxTQUFTRCxzQkFBVCxDQUFnQ0UsR0FBaEMsRUFBb0M7QUFBQyxTQUFPQSxHQUFHLElBQUVBLEdBQUcsQ0FBQ0MsVUFBVCxHQUFvQkQsR0FBcEIsR0FBd0I7QUFBQyxlQUFRQTtBQUFULEdBQS9CO0FBQThDOztBQUFBLElBQU1FLGVBQWUsR0FBQyxhQUFhTCxNQUFNLFdBQU4sQ0FBZU0sYUFBZixDQUE2QixFQUE3QixDQUFuQzs7QUFBb0VQLHVCQUFBLEdBQXdCTSxlQUF4Qjs7QUFBd0MsVUFBdUM7QUFBQ0EsaUJBQWUsQ0FBQ0UsV0FBaEIsR0FBNEIsaUJBQTVCO0FBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sUUFBUSxVQUFVLGVBQWUscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLHVCQUF1QixPQUFPLE9BQU8sTUFBTSxPQUFPLE1BQU0sU0FBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sTUFBTSxNQUFNLEtBQUssWUFBWSxlQUFlLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sU0FBUyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLDRCQUE0QixPQUFPLE9BQU8sc0JBQXNCLHFCQUFxQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsTUFBTSxTQUFTLFVBQVUsWUFBWSxXQUFXLE9BQU8sU0FBUyxNQUFNLFFBQVEsWUFBWSxPQUFPLFVBQVUsTUFBTSxZQUFZLFVBQVUsWUFBWSxPQUFPLFNBQVMsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxRQUFRLEtBQUssV0FBVyxPQUFPLEtBQUssUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxRQUFRLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLFFBQVEsS0FBSyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLE9BQU8sTUFBTSxRQUFRLEtBQUssV0FBVyxRQUFRLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLDJEQUEyRCxTQUFTO0FBQ3BFLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNsckNhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsdUpBQXNFO0FBQ3hFIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuQW1wU3RhdGVDb250ZXh0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWNvbnN0IEFtcFN0YXRlQ29udGV4dD0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dCh7fSk7ZXhwb3J0cy5BbXBTdGF0ZUNvbnRleHQ9QW1wU3RhdGVDb250ZXh0O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWU9J0FtcFN0YXRlQ29udGV4dCc7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLWNvbnRleHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0luQW1wTW9kZT1pc0luQW1wTW9kZTtleHBvcnRzLnVzZUFtcD11c2VBbXA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9hbXBDb250ZXh0PXJlcXVpcmUoXCIuL2FtcC1jb250ZXh0XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gaXNJbkFtcE1vZGUoe2FtcEZpcnN0PWZhbHNlLGh5YnJpZD1mYWxzZSxoYXNRdWVyeT1mYWxzZX09e30pe3JldHVybiBhbXBGaXJzdHx8aHlicmlkJiZoYXNRdWVyeTt9ZnVuY3Rpb24gdXNlQW1wKCl7Ly8gRG9uJ3QgYXNzaWduIHRoZSBjb250ZXh0IHZhbHVlIHRvIGEgdmFyaWFibGUgdG8gc2F2ZSBieXRlc1xucmV0dXJuIGlzSW5BbXBNb2RlKF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX2FtcENvbnRleHQuQW1wU3RhdGVDb250ZXh0KSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdEhlYWQ9ZGVmYXVsdEhlYWQ7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9zaWRlRWZmZWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2lkZS1lZmZlY3RcIikpO3ZhciBfYW1wQ29udGV4dD1yZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTt2YXIgX2hlYWRNYW5hZ2VyQ29udGV4dD1yZXF1aXJlKFwiLi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTt2YXIgX2FtcD1yZXF1aXJlKFwiLi9hbXBcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZT1mYWxzZSl7Y29uc3QgaGVhZD1bLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse2NoYXJTZXQ6XCJ1dGYtOFwifSldO2lmKCFpbkFtcE1vZGUpe2hlYWQucHVzaCgvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcInZpZXdwb3J0XCIsY29udGVudDpcIndpZHRoPWRldmljZS13aWR0aFwifSkpO31yZXR1cm4gaGVhZDt9ZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChsaXN0LGNoaWxkKXsvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuaWYodHlwZW9mIGNoaWxkPT09J3N0cmluZyd8fHR5cGVvZiBjaGlsZD09PSdudW1iZXInKXtyZXR1cm4gbGlzdDt9Ly8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuaWYoY2hpbGQudHlwZT09PV9yZWFjdC5kZWZhdWx0LkZyYWdtZW50KXtyZXR1cm4gbGlzdC5jb25jYXQoX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikucmVkdWNlKChmcmFnbWVudExpc3QsZnJhZ21lbnRDaGlsZCk9PntpZih0eXBlb2YgZnJhZ21lbnRDaGlsZD09PSdzdHJpbmcnfHx0eXBlb2YgZnJhZ21lbnRDaGlsZD09PSdudW1iZXInKXtyZXR1cm4gZnJhZ21lbnRMaXN0O31yZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKTt9LFtdKSk7fXJldHVybiBsaXN0LmNvbmNhdChjaGlsZCk7fWNvbnN0IE1FVEFUWVBFUz1bJ25hbWUnLCdodHRwRXF1aXYnLCdjaGFyU2V0JywnaXRlbVByb3AnXTsvKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi9mdW5jdGlvbiB1bmlxdWUoKXtjb25zdCBrZXlzPW5ldyBTZXQoKTtjb25zdCB0YWdzPW5ldyBTZXQoKTtjb25zdCBtZXRhVHlwZXM9bmV3IFNldCgpO2NvbnN0IG1ldGFDYXRlZ29yaWVzPXt9O3JldHVybiBoPT57bGV0IGlzVW5pcXVlPXRydWU7bGV0IGhhc0tleT1mYWxzZTtpZihoLmtleSYmdHlwZW9mIGgua2V5IT09J251bWJlcicmJmgua2V5LmluZGV4T2YoJyQnKT4wKXtoYXNLZXk9dHJ1ZTtjb25zdCBrZXk9aC5rZXkuc2xpY2UoaC5rZXkuaW5kZXhPZignJCcpKzEpO2lmKGtleXMuaGFzKGtleSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle2tleXMuYWRkKGtleSk7fX0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG5zd2l0Y2goaC50eXBlKXtjYXNlJ3RpdGxlJzpjYXNlJ2Jhc2UnOmlmKHRhZ3MuaGFzKGgudHlwZSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle3RhZ3MuYWRkKGgudHlwZSk7fWJyZWFrO2Nhc2UnbWV0YSc6Zm9yKGxldCBpPTAsbGVuPU1FVEFUWVBFUy5sZW5ndGg7aTxsZW47aSsrKXtjb25zdCBtZXRhdHlwZT1NRVRBVFlQRVNbaV07aWYoIWgucHJvcHMuaGFzT3duUHJvcGVydHkobWV0YXR5cGUpKWNvbnRpbnVlO2lmKG1ldGF0eXBlPT09J2NoYXJTZXQnKXtpZihtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSl7aXNVbmlxdWU9ZmFsc2U7fWVsc2V7bWV0YVR5cGVzLmFkZChtZXRhdHlwZSk7fX1lbHNle2NvbnN0IGNhdGVnb3J5PWgucHJvcHNbbWV0YXR5cGVdO2NvbnN0IGNhdGVnb3JpZXM9bWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdfHxuZXcgU2V0KCk7aWYoKG1ldGF0eXBlIT09J25hbWUnfHwhaGFzS2V5KSYmY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXtjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSk7bWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdPWNhdGVnb3JpZXM7fX19YnJlYWs7fXJldHVybiBpc1VuaXF1ZTt9O30vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhoZWFkRWxlbWVudHMscHJvcHMpe3JldHVybiBoZWFkRWxlbWVudHMucmVkdWNlKChsaXN0LGhlYWRFbGVtZW50KT0+e2NvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW49X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlbik7cmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pO30sW10pLnJlZHVjZShvbmx5UmVhY3RFbGVtZW50LFtdKS5yZXZlcnNlKCkuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpLmZpbHRlcih1bmlxdWUoKSkucmV2ZXJzZSgpLm1hcCgoYyxpKT0+e2NvbnN0IGtleT1jLmtleXx8aTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcmJnByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyYmIXByb3BzLmluQW1wTW9kZSl7aWYoYy50eXBlPT09J2xpbmsnJiZjLnByb3BzWydocmVmJ10mJi8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuWydodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzcycsJ2h0dHBzOi8vdXNlLnR5cGVraXQubmV0LyddLnNvbWUodXJsPT5jLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpKSl7Y29uc3QgbmV3UHJvcHM9ey4uLihjLnByb3BzfHx7fSl9O25ld1Byb3BzWydkYXRhLWhyZWYnXT1uZXdQcm9wc1snaHJlZiddO25ld1Byb3BzWydocmVmJ109dW5kZWZpbmVkOy8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBtYWtlIGl0IGVhc3kgdG8gaWRlbnRpZnkgb3B0aW1pemVkIHRhZ3Ncbm5ld1Byb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddPXRydWU7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLG5ld1Byb3BzKTt9fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYyx7a2V5fSk7fSk7fS8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9mdW5jdGlvbiBIZWFkKHtjaGlsZHJlbn0pe2NvbnN0IGFtcFN0YXRlPSgwLF9yZWFjdC51c2VDb250ZXh0KShfYW1wQ29udGV4dC5BbXBTdGF0ZUNvbnRleHQpO2NvbnN0IGhlYWRNYW5hZ2VyPSgwLF9yZWFjdC51c2VDb250ZXh0KShfaGVhZE1hbmFnZXJDb250ZXh0LkhlYWRNYW5hZ2VyQ29udGV4dCk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3NpZGVFZmZlY3QuZGVmYXVsdCx7cmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6cmVkdWNlQ29tcG9uZW50cyxoZWFkTWFuYWdlcjpoZWFkTWFuYWdlcixpbkFtcE1vZGU6KDAsX2FtcC5pc0luQW1wTW9kZSkoYW1wU3RhdGUpfSxjaGlsZHJlbik7fXZhciBfZGVmYXVsdD1IZWFkO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTtjb25zdCBpc1NlcnZlcj10eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc7Y2xhc3MgX2RlZmF1bHQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5faGFzSGVhZE1hbmFnZXI9dm9pZCAwO3RoaXMuZW1pdENoYW5nZT0oKT0+e2lmKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKXt0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLnVwZGF0ZUhlYWQodGhpcy5wcm9wcy5yZWR1Y2VDb21wb25lbnRzVG9TdGF0ZShbLi4udGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXSx0aGlzLnByb3BzKSk7fX07dGhpcy5faGFzSGVhZE1hbmFnZXI9dGhpcy5wcm9wcy5oZWFkTWFuYWdlciYmdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzO2lmKGlzU2VydmVyJiZ0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKTt0aGlzLmVtaXRDaGFuZ2UoKTt9fWNvbXBvbmVudERpZE1vdW50KCl7aWYodGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcyk7fXRoaXMuZW1pdENoYW5nZSgpO31jb21wb25lbnREaWRVcGRhdGUoKXt0aGlzLmVtaXRDaGFuZ2UoKTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXtpZih0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKTt9dGhpcy5lbWl0Q2hhbmdlKCk7fXJlbmRlcigpe3JldHVybiBudWxsO319ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lkZS1lZmZlY3QuanMubWFwIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIGF0dHJpYnV0ZT1cImNsYXNzXCI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiaW1wb3J0IGUse2NyZWF0ZUNvbnRleHQgYXMgdCx1c2VDb250ZXh0IGFzIG4sdXNlU3RhdGUgYXMgcix1c2VDYWxsYmFjayBhcyBvLHVzZVJlZiBhcyBpLHVzZUVmZmVjdCBhcyBhLG1lbW8gYXMgY31mcm9tXCJyZWFjdFwiO2ltcG9ydCBtIGZyb21cIm5leHQvaGVhZFwiO3ZhciBzPXQoe3NldFRoZW1lOmZ1bmN0aW9uKGUpe30sdGhlbWVzOltdfSksZD1mdW5jdGlvbigpe3JldHVybiBuKHMpfSx1PVtcImxpZ2h0XCIsXCJkYXJrXCJdLGw9XCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIsZj1mdW5jdGlvbih0KXt2YXIgbj10LmZvcmNlZFRoZW1lLGM9dC5kaXNhYmxlVHJhbnNpdGlvbk9uQ2hhbmdlLG09dm9pZCAwIT09YyYmYyxkPXQuZW5hYmxlU3lzdGVtLGY9dm9pZCAwPT09ZHx8ZCxnPXQuZW5hYmxlQ29sb3JTY2hlbWUsVD12b2lkIDA9PT1nfHxnLHc9dC5zdG9yYWdlS2V5LFM9dm9pZCAwPT09dz9cInRoZW1lXCI6dyxiPXQudGhlbWVzLEU9dm9pZCAwPT09Yj9bXCJsaWdodFwiLFwiZGFya1wiXTpiLGs9dC5kZWZhdWx0VGhlbWUseD12b2lkIDA9PT1rP2Y/XCJzeXN0ZW1cIjpcImxpZ2h0XCI6ayxMPXQuYXR0cmlidXRlLEk9dm9pZCAwPT09TD9cImRhdGEtdGhlbWVcIjpMLEM9dC52YWx1ZSxNPXQuY2hpbGRyZW4sXz1yKGZ1bmN0aW9uKCl7cmV0dXJuIHYoUyx4KX0pLE89X1swXSxIPV9bMV0sSz1yKGZ1bmN0aW9uKCl7cmV0dXJuIHYoUyl9KSxOPUtbMF0saj1LWzFdLEE9Qz9PYmplY3QudmFsdWVzKEMpOkUsSj1vKGZ1bmN0aW9uKGUpe3ZhciB0PXAoZSk7aih0KSxcInN5c3RlbVwiIT09T3x8bnx8eih0LCExKX0sW08sbl0pLFA9aShKKTtQLmN1cnJlbnQ9Sjt2YXIgej1vKGZ1bmN0aW9uKGUsdCxuKXt2b2lkIDA9PT10JiYodD0hMCksdm9pZCAwPT09biYmKG49ITApO3ZhciByPShudWxsPT1DP3ZvaWQgMDpDW2VdKXx8ZSxvPW0mJm4/eSgpOm51bGw7aWYodCl0cnl7bG9jYWxTdG9yYWdlLnNldEl0ZW0oUyxlKX1jYXRjaChlKXt9aWYoXCJzeXN0ZW1cIj09PWUmJmYpe3ZhciBpPXAoKTtyPShudWxsPT1DP3ZvaWQgMDpDW2ldKXx8aX1pZihuKXt2YXIgYSxjPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcImNsYXNzXCI9PT1JPygoYT1jLmNsYXNzTGlzdCkucmVtb3ZlLmFwcGx5KGEsQSksYy5jbGFzc0xpc3QuYWRkKHIpKTpjLnNldEF0dHJpYnV0ZShJLHIpLG51bGw9PW98fG8oKX19LFtdKTthKGZ1bmN0aW9uKCl7dmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4gUC5jdXJyZW50LmFwcGx5KFAsW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX0sdD13aW5kb3cubWF0Y2hNZWRpYShsKTtyZXR1cm4gdC5hZGRMaXN0ZW5lcihlKSxlKHQpLGZ1bmN0aW9uKCl7cmV0dXJuIHQucmVtb3ZlTGlzdGVuZXIoZSl9fSxbXSk7dmFyIFY9byhmdW5jdGlvbihlKXtuP3ooZSwhMCwhMSk6eihlKSxIKGUpfSxbbl0pO3JldHVybiBhKGZ1bmN0aW9uKCl7dmFyIGU9ZnVuY3Rpb24oZSl7ZS5rZXk9PT1TJiZWKGUubmV3VmFsdWUpfTtyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsZSksZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsZSl9fSxbVl0pLGEoZnVuY3Rpb24oKXtpZihUKXt2YXIgZT1uJiZ1LmluY2x1ZGVzKG4pP246TyYmdS5pbmNsdWRlcyhPKT9POlwic3lzdGVtXCI9PT1PJiZOfHxudWxsO2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcImNvbG9yLXNjaGVtZVwiLGUpfX0sW1QsTyxOLG5dKSxlLmNyZWF0ZUVsZW1lbnQocy5Qcm92aWRlcix7dmFsdWU6e3RoZW1lOk8sc2V0VGhlbWU6Vixmb3JjZWRUaGVtZTpuLHJlc29sdmVkVGhlbWU6XCJzeXN0ZW1cIj09PU8/TjpPLHRoZW1lczpmP1tdLmNvbmNhdChFLFtcInN5c3RlbVwiXSk6RSxzeXN0ZW1UaGVtZTpmP046dm9pZCAwfX0sZS5jcmVhdGVFbGVtZW50KGgse2ZvcmNlZFRoZW1lOm4sc3RvcmFnZUtleTpTLGF0dHJpYnV0ZTpJLHZhbHVlOkMsZW5hYmxlU3lzdGVtOmYsZGVmYXVsdFRoZW1lOngsYXR0cnM6QX0pLE0pfSxoPWMoZnVuY3Rpb24odCl7dmFyIG49dC5mb3JjZWRUaGVtZSxyPXQuc3RvcmFnZUtleSxvPXQuYXR0cmlidXRlLGk9dC5lbmFibGVTeXN0ZW0sYT10LmRlZmF1bHRUaGVtZSxjPXQudmFsdWUscz1cImNsYXNzXCI9PT1vP1widmFyIGQ9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdDtkLnJlbW92ZShcIit0LmF0dHJzLm1hcChmdW5jdGlvbihlKXtyZXR1cm5cIidcIitlK1wiJ1wifSkuam9pbihcIixcIikrXCIpO1wiOlwidmFyIGQ9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1wiLGQ9ZnVuY3Rpb24oZSx0KXtlPShudWxsPT1jP3ZvaWQgMDpjW2VdKXx8ZTt2YXIgbj10P2U6XCInXCIrZStcIidcIjtyZXR1cm5cImNsYXNzXCI9PT1vP1wiZC5hZGQoXCIrbitcIilcIjpcImQuc2V0QXR0cmlidXRlKCdcIitvK1wiJywgXCIrbitcIilcIn0sdT1cInN5c3RlbVwiPT09YTtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KG0sbnVsbCxlLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixuP3trZXk6XCJuZXh0LXRoZW1lcy1zY3JpcHRcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOlwiIWZ1bmN0aW9uKCl7XCIrcytkKG4pK1wifSgpXCJ9fTppP3trZXk6XCJuZXh0LXRoZW1lcy1zY3JpcHRcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOlwiIWZ1bmN0aW9uKCl7dHJ5IHtcIitzK1widmFyIGU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1wiK3IrXCInKTtcIisodT9cIlwiOmQoYSkrXCI7XCIpKydpZihcInN5c3RlbVwiPT09ZXx8KCFlJiYnK3UrJykpe3ZhciB0PVwiJytsKydcIixtPXdpbmRvdy5tYXRjaE1lZGlhKHQpO20ubWVkaWEhPT10fHxtLm1hdGNoZXM/JytkKFwiZGFya1wiKStcIjpcIitkKFwibGlnaHRcIikrXCJ9ZWxzZSBpZihlKSBcIisoYz9cInZhciB4PVwiK0pTT04uc3RyaW5naWZ5KGMpK1wiO1wiOlwiXCIpK2QoYz9cInhbZV1cIjpcImVcIiwhMCkrXCJ9Y2F0Y2goZSl7fX0oKVwifX06e2tleTpcIm5leHQtdGhlbWVzLXNjcmlwdFwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6XCIhZnVuY3Rpb24oKXt0cnl7XCIrcysndmFyIGU9bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCInK3IrJ1wiKTtpZihlKXsnKyhjP1widmFyIHg9XCIrSlNPTi5zdHJpbmdpZnkoYykrXCI7XCI6XCJcIikrZChjP1wieFtlXVwiOlwiZVwiLCEwKStcIn1lbHNle1wiK2QoYSkrXCI7fX1jYXRjaCh0KXt9fSgpO1wifX0pKX0sZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5mb3JjZWRUaGVtZT09PXQuZm9yY2VkVGhlbWV9KSx2PWZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7dmFyIG47dHJ5e249bG9jYWxTdG9yYWdlLmdldEl0ZW0oZSl8fHZvaWQgMH1jYXRjaChlKXt9cmV0dXJuIG58fHR9fSx5PWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiBlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiKnstd2Via2l0LXRyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7LW1vei10cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50Oy1vLXRyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7LW1zLXRyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH1cIikpLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZSksZnVuY3Rpb24oKXt3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChlKX0sMSl9fSxwPWZ1bmN0aW9uKGUpe3JldHVybiBlfHwoZT13aW5kb3cubWF0Y2hNZWRpYShsKSksZS5tYXRjaGVzP1wiZGFya1wiOlwibGlnaHRcIn07ZXhwb3J0e2YgYXMgVGhlbWVQcm92aWRlcixkIGFzIHVzZVRoZW1lfTtcbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2FwcFwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNl0udXNlWzJdIS4vZ2xvYmFsLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMl0hLi9nbG9iYWwuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls2XS51c2VbMl0hLi9nbG9iYWwuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO2NvbnN0IGlzT2xkSUU9ZnVuY3Rpb24gaXNPbGRJRSgpe2xldCBtZW1vO3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpe2lmKHR5cGVvZiBtZW1vPT09J3VuZGVmaW5lZCcpey8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4vLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4vLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4vLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xubWVtbz1Cb29sZWFuKHdpbmRvdyYmZG9jdW1lbnQmJmRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iKTt9cmV0dXJuIG1lbW87fTt9KCk7Y29uc3QgZ2V0VGFyZ2V0PWZ1bmN0aW9uIGdldFRhcmdldCgpe2NvbnN0IG1lbW89e307cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCl7aWYodHlwZW9mIG1lbW9bdGFyZ2V0XT09PSd1bmRlZmluZWQnKXtsZXQgc3R5bGVUYXJnZXQ9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOy8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5pZih3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQmJnN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXt0cnl7Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbi8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5zdHlsZVRhcmdldD1zdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDt9Y2F0Y2goZSl7Ly8gaXN0YW5idWwgaWdub3JlIG5leHRcbnN0eWxlVGFyZ2V0PW51bGw7fX1tZW1vW3RhcmdldF09c3R5bGVUYXJnZXQ7fXJldHVybiBtZW1vW3RhcmdldF07fTt9KCk7Y29uc3Qgc3R5bGVzSW5Eb209W107ZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcil7bGV0IHJlc3VsdD0tMTtmb3IobGV0IGk9MDtpPHN0eWxlc0luRG9tLmxlbmd0aDtpKyspe2lmKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXI9PT1pZGVudGlmaWVyKXtyZXN1bHQ9aTticmVhazt9fXJldHVybiByZXN1bHQ7fWZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpe2NvbnN0IGlkQ291bnRNYXA9e307Y29uc3QgaWRlbnRpZmllcnM9W107Zm9yKGxldCBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspe2NvbnN0IGl0ZW09bGlzdFtpXTtjb25zdCBpZD1vcHRpb25zLmJhc2U/aXRlbVswXStvcHRpb25zLmJhc2U6aXRlbVswXTtjb25zdCBjb3VudD1pZENvdW50TWFwW2lkXXx8MDtjb25zdCBpZGVudGlmaWVyPWlkKycgJytjb3VudC50b1N0cmluZygpO2lkQ291bnRNYXBbaWRdPWNvdW50KzE7Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7Y29uc3Qgb2JqPXtjc3M6aXRlbVsxXSxtZWRpYTppdGVtWzJdLHNvdXJjZU1hcDppdGVtWzNdfTtpZihpbmRleCE9PS0xKXtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7fWVsc2V7c3R5bGVzSW5Eb20ucHVzaCh7aWRlbnRpZmllcjppZGVudGlmaWVyLHVwZGF0ZXI6YWRkU3R5bGUob2JqLG9wdGlvbnMpLHJlZmVyZW5jZXM6MX0pO31pZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO31yZXR1cm4gaWRlbnRpZmllcnM7fWZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKXtjb25zdCBzdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO2NvbnN0IGF0dHJpYnV0ZXM9b3B0aW9ucy5hdHRyaWJ1dGVzfHx7fTtpZih0eXBlb2YgYXR0cmlidXRlcy5ub25jZT09PSd1bmRlZmluZWQnKXtjb25zdCBub25jZT0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbnR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyE9PSd1bmRlZmluZWQnP19fd2VicGFja19ub25jZV9fOm51bGw7aWYobm9uY2Upe2F0dHJpYnV0ZXMubm9uY2U9bm9uY2U7fX1PYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7c3R5bGUuc2V0QXR0cmlidXRlKGtleSxhdHRyaWJ1dGVzW2tleV0pO30pO2lmKHR5cGVvZiBvcHRpb25zLmluc2VydD09PSdmdW5jdGlvbicpe29wdGlvbnMuaW5zZXJ0KHN0eWxlKTt9ZWxzZXtjb25zdCB0YXJnZXQ9Z2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0fHwnaGVhZCcpO2lmKCF0YXJnZXQpe3Rocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7fXRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7fXJldHVybiBzdHlsZTt9ZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbmlmKHN0eWxlLnBhcmVudE5vZGU9PT1udWxsKXtyZXR1cm4gZmFsc2U7fXN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO30vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9jb25zdCByZXBsYWNlVGV4dD1mdW5jdGlvbiByZXBsYWNlVGV4dCgpe2NvbnN0IHRleHRTdG9yZT1bXTtyZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCxyZXBsYWNlbWVudCl7dGV4dFN0b3JlW2luZGV4XT1yZXBsYWNlbWVudDtyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTt9O30oKTtmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLGluZGV4LHJlbW92ZSxvYmope2NvbnN0IGNzcz1yZW1vdmU/Jyc6b2JqLm1lZGlhPydAbWVkaWEgJytvYmoubWVkaWErJyB7JytvYmouY3NzKyd9JzpvYmouY3NzOy8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9cmVwbGFjZVRleHQoaW5kZXgsY3NzKTt9ZWxzZXtjb25zdCBjc3NOb2RlPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7Y29uc3QgY2hpbGROb2Rlcz1zdHlsZS5jaGlsZE5vZGVzO2lmKGNoaWxkTm9kZXNbaW5kZXhdKXtzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7fWlmKGNoaWxkTm9kZXMubGVuZ3RoKXtzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSxjaGlsZE5vZGVzW2luZGV4XSk7fWVsc2V7c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7fX19ZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSxvcHRpb25zLG9iail7bGV0IGNzcz1vYmouY3NzO2NvbnN0IG1lZGlhPW9iai5tZWRpYTtjb25zdCBzb3VyY2VNYXA9b2JqLnNvdXJjZU1hcDtpZihtZWRpYSl7c3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsbWVkaWEpO31lbHNle3N0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTt9aWYoc291cmNlTWFwJiZ0eXBlb2YgYnRvYSE9PSd1bmRlZmluZWQnKXtjc3MrPSdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSsnICovJzt9Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1jc3M7fWVsc2V7d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCl7c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7fXN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO319bGV0IHNpbmdsZXRvbj1udWxsO2xldCBzaW5nbGV0b25Db3VudGVyPTA7ZnVuY3Rpb24gYWRkU3R5bGUob2JqLG9wdGlvbnMpe2xldCBzdHlsZTtsZXQgdXBkYXRlO2xldCByZW1vdmU7aWYob3B0aW9ucy5zaW5nbGV0b24pe2NvbnN0IHN0eWxlSW5kZXg9c2luZ2xldG9uQ291bnRlcisrO3N0eWxlPXNpbmdsZXRvbnx8KHNpbmdsZXRvbj1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO3VwZGF0ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LGZhbHNlKTtyZW1vdmU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCx0cnVlKTt9ZWxzZXtzdHlsZT1pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7dXBkYXRlPWFwcGx5VG9UYWcuYmluZChudWxsLHN0eWxlLG9wdGlvbnMpO3JlbW92ZT1mdW5jdGlvbigpe3JlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7fTt9dXBkYXRlKG9iaik7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iail7aWYobmV3T2JqKXtpZihuZXdPYmouY3NzPT09b2JqLmNzcyYmbmV3T2JqLm1lZGlhPT09b2JqLm1lZGlhJiZuZXdPYmouc291cmNlTWFwPT09b2JqLnNvdXJjZU1hcCl7cmV0dXJuO311cGRhdGUob2JqPW5ld09iaik7fWVsc2V7cmVtb3ZlKCk7fX07fW1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKGxpc3Qsb3B0aW9ucyl7b3B0aW9ucz1vcHRpb25zfHx7fTsvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbmlmKCFvcHRpb25zLnNpbmdsZXRvbiYmdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uIT09J2Jvb2xlYW4nKXtvcHRpb25zLnNpbmdsZXRvbj1pc09sZElFKCk7fWxpc3Q9bGlzdHx8W107bGV0IGxhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3Qpe25ld0xpc3Q9bmV3TGlzdHx8W107aWYoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpIT09J1tvYmplY3QgQXJyYXldJyl7cmV0dXJuO31mb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO31jb25zdCBuZXdMYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKG5ld0xpc3Qsb3B0aW9ucyk7Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7aWYoc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXM9PT0wKXtzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcigpO3N0eWxlc0luRG9tLnNwbGljZShpbmRleCwxKTt9fWxhc3RJZGVudGlmaWVycz1uZXdMYXN0SWRlbnRpZmllcnM7fTt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ezc2MjpmdW5jdGlvbihuKXtuLmV4cG9ydHM9ZnVuY3Rpb24obil7dmFyIHQ9W107dC50b1N0cmluZz1mdW5jdGlvbiB0b1N0cmluZygpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbih0KXt2YXIgcj1jc3NXaXRoTWFwcGluZ1RvU3RyaW5nKHQsbik7aWYodFsyXSl7cmV0dXJuXCJAbWVkaWEgXCIuY29uY2F0KHRbMl0sXCIge1wiKS5jb25jYXQocixcIn1cIil9cmV0dXJuIHJ9KS5qb2luKFwiXCIpfTt0Lmk9ZnVuY3Rpb24obixyLG8pe2lmKHR5cGVvZiBuPT09XCJzdHJpbmdcIil7bj1bW251bGwsbixcIlwiXV19dmFyIGU9e307aWYobyl7Zm9yKHZhciBhPTA7YTx0aGlzLmxlbmd0aDthKyspe3ZhciBjPXRoaXNbYV1bMF07aWYoYyE9bnVsbCl7ZVtjXT10cnVlfX19Zm9yKHZhciBpPTA7aTxuLmxlbmd0aDtpKyspe3ZhciB1PVtdLmNvbmNhdChuW2ldKTtpZihvJiZlW3VbMF1dKXtjb250aW51ZX1pZihyKXtpZighdVsyXSl7dVsyXT1yfWVsc2V7dVsyXT1cIlwiLmNvbmNhdChyLFwiIGFuZCBcIikuY29uY2F0KHVbMl0pfX10LnB1c2godSl9fTtyZXR1cm4gdH07ZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhuLHQpe3ZhciByPW5bMV18fFwiXCI7dmFyIG89blszXTtpZighbyl7cmV0dXJuIHJ9aWYodCYmdHlwZW9mIGJ0b2E9PT1cImZ1bmN0aW9uXCIpe3ZhciBlPXRvQ29tbWVudChvKTt2YXIgYT1vLnNvdXJjZXMubWFwKGZ1bmN0aW9uKG4pe3JldHVyblwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoby5zb3VyY2VSb290fHxcIlwiKS5jb25jYXQobixcIiAqL1wiKX0pO3JldHVybltyXS5jb25jYXQoYSkuY29uY2F0KFtlXSkuam9pbihcIlxcblwiKX1yZXR1cm5bcl0uam9pbihcIlxcblwiKX1mdW5jdGlvbiB0b0NvbW1lbnQobil7dmFyIHQ9YnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobikpKSk7dmFyIHI9XCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQodCk7cmV0dXJuXCIvKiMgXCIuY29uY2F0KHIsXCIgKi9cIil9fX07dmFyIHQ9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyhyKXtpZih0W3JdKXtyZXR1cm4gdFtyXS5leHBvcnRzfXZhciBvPXRbcl09e2V4cG9ydHM6e319O3ZhciBlPXRydWU7dHJ5e25bcl0obyxvLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7ZT1mYWxzZX1maW5hbGx5e2lmKGUpZGVsZXRlIHRbcl19cmV0dXJuIG8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg3NjIpfSgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISB0YWlsd2luZGNzcyB2Mi4xLjQgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tICovLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXHJcXG5cXHJcXG4vKlxcclxcbkRvY3VtZW50XFxyXFxuPT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXHJcXG4qL1xcclxcblxcclxcbiosXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0LW1vei10YWItc2l6ZTogNDtcXHJcXG5cXHQtby10YWItc2l6ZTogNDtcXHJcXG5cXHQgICB0YWItc2l6ZTogNDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5TZWN0aW9uc1xcclxcbj09PT09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTpcXHJcXG5cXHRcXHRzeXN0ZW0tdWksXFxyXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxyXFxuXFx0XFx0J1NlZ29lIFVJJyxcXHJcXG5cXHRcXHRSb2JvdG8sXFxyXFxuXFx0XFx0SGVsdmV0aWNhLFxcclxcblxcdFxcdEFyaWFsLFxcclxcblxcdFxcdHNhbnMtc2VyaWYsXFxyXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXHJcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkdyb3VwaW5nIGNvbnRlbnRcXHJcXG49PT09PT09PT09PT09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxyXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxyXFxuKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcclxcbj09PT09PT09PT09PT09PT09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKipcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG5cXHQtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG5cXHQgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcclxcbjIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAsXFxyXFxucHJlIHtcXHJcXG5cXHRmb250LWZhbWlseTpcXHJcXG5cXHRcXHR1aS1tb25vc3BhY2UsXFxyXFxuXFx0XFx0U0ZNb25vLVJlZ3VsYXIsXFxyXFxuXFx0XFx0Q29uc29sYXMsXFxyXFxuXFx0XFx0J0xpYmVyYXRpb24gTW9ubycsXFxyXFxuXFx0XFx0TWVubG8sXFxyXFxuXFx0XFx0bW9ub3NwYWNlOyAvKiAxICovXFxyXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zbWFsbCB7XFxyXFxuXFx0Zm9udC1zaXplOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5zdWIsXFxyXFxuc3VwIHtcXHJcXG5cXHRmb250LXNpemU6IDc1JTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdWIge1xcclxcblxcdGJvdHRvbTogLTAuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuc3VwIHtcXHJcXG5cXHR0b3A6IC0wLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5UYWJ1bGFyIGRhdGFcXHJcXG49PT09PT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxyXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcclxcbiovXFxyXFxuXFxyXFxudGFibGUge1xcclxcblxcdHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuRm9ybXNcXHJcXG49PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXHJcXG5cXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXHJcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcclxcblxcdG1hcmdpbjogMDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxyXFxuMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcclxcbiovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbnNlbGVjdCB7IC8qIDEgKi9cXHJcXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bdHlwZT0nYnV0dG9uJ10sXFxyXFxuW3R5cGU9J3Jlc2V0J10sXFxyXFxuW3R5cGU9J3N1Ym1pdCddIHtcXHJcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbjo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXHJcXG4qL1xcclxcblxcclxcbjotbW96LWZvY3VzcmluZyB7XFxyXFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cXHJcXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3XFxyXFxuKi9cXHJcXG5cXHJcXG46LW1vei11aS1pbnZhbGlkIHtcXHJcXG5cXHRib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0ICdmaWVsZHNldCcgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxubGVnZW5kIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbnByb2dyZXNzIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXHJcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcblxcdGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5bdHlwZT0nc2VhcmNoJ10ge1xcclxcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxyXFxuXFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXHJcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxyXFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXHJcXG5cXHRmb250OiBpbmhlcml0OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuSW50ZXJhY3RpdmVcXHJcXG49PT09PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbnN1bW1hcnkge1xcclxcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXHJcXG59LyoqXFxyXFxuICogTWFudWFsbHkgZm9ya2VkIGZyb20gU1VJVCBDU1MgQmFzZTogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZVxcclxcbiAqIEEgdGhpbiBsYXllciBvbiB0b3Agb2Ygbm9ybWFsaXplLmNzcyB0aGF0IHByb3ZpZGVzIGEgc3RhcnRpbmcgcG9pbnQgbW9yZVxcclxcbiAqIHN1aXRhYmxlIGZvciB3ZWIgYXBwbGljYXRpb25zLlxcclxcbiAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ibG9ja3F1b3RlLFxcclxcbmRsLFxcclxcbmRkLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2LFxcclxcbmhyLFxcclxcbmZpZ3VyZSxcXHJcXG5wLFxcclxcbnByZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFdvcmsgYXJvdW5kIGEgRmlyZWZveC9JRSBidWcgd2hlcmUgdGhlIHRyYW5zcGFyZW50IGBidXR0b25gIGJhY2tncm91bmRcXHJcXG4gKiByZXN1bHRzIGluIGEgbG9zcyBvZiB0aGUgZGVmYXVsdCBgYnV0dG9uYCBmb2N1cyBzdHlsZXMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XFxyXFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbm9sLFxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBUYWlsd2luZCBjdXN0b20gcmVzZXQgc3R5bGVzXFxyXFxuICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgKHdpdGggVGFpbHdpbmQncyBkZWZhdWx0XFxyXFxuICogICAgc2Fucy1zZXJpZiBmb250IHN0YWNrIGFzIGEgZmFsbGJhY2spIGFzIGEgc2FuZSBkZWZhdWx0LlxcclxcbiAqIDIuIFVzZSBUYWlsd2luZCdzIGRlZmF1bHQgXFxcIm5vcm1hbFxcXCIgbGluZS1oZWlnaHQgc28gdGhlIHVzZXIgaXNuJ3QgZm9yY2VkXFxyXFxuICogICAgdG8gb3ZlcnJpZGUgaXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGV2ZW4gd2hlbiB1c2luZyB0aGUgZGVmYXVsdCB0aGVtZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDEgKi9cXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogSW5oZXJpdCBmb250LWZhbWlseSBhbmQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzXFxyXFxuICogYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLlxcclxcbiAqXFxyXFxuICogICAgV2UgdXNlZCB0byBzZXQgdGhpcyBpbiB0aGUgaHRtbCBlbGVtZW50IGFuZCBpbmhlcml0IGZyb21cXHJcXG4gKiAgICB0aGUgcGFyZW50IGVsZW1lbnQgZm9yIGV2ZXJ5dGhpbmcgZWxzZS4gVGhpcyBjYXVzZWQgaXNzdWVzXFxyXFxuICogICAgaW4gc2hhZG93LWRvbS1lbmhhbmNlZCBlbGVtZW50cyBsaWtlIDxkZXRhaWxzPiB3aGVyZSB0aGUgY29udGVudFxcclxcbiAqICAgIGlzIHdyYXBwZWQgYnkgYSBkaXYgd2l0aCBib3gtc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgLlxcclxcbiAqXFxyXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80XFxyXFxuICpcXHJcXG4gKlxcclxcbiAqIDIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLlxcclxcbiAqXFxyXFxuICogICAgQnkgZGVmYXVsdCwgdGhlIHdheSB0aGUgYnJvd3NlciBzcGVjaWZpZXMgdGhhdCBhbiBlbGVtZW50IHNob3VsZCBoYXZlIG5vXFxyXFxuICogICAgYm9yZGVyIGlzIGJ5IHNldHRpbmcgaXQncyBib3JkZXItc3R5bGUgdG8gYG5vbmVgIGluIHRoZSB1c2VyLWFnZW50XFxyXFxuICogICAgc3R5bGVzaGVldC5cXHJcXG4gKlxcclxcbiAqICAgIEluIG9yZGVyIHRvIGVhc2lseSBhZGQgYm9yZGVycyB0byBlbGVtZW50cyBieSBqdXN0IHNldHRpbmcgdGhlIGBib3JkZXItd2lkdGhgXFxyXFxuICogICAgcHJvcGVydHksIHdlIGNoYW5nZSB0aGUgZGVmYXVsdCBib3JkZXItc3R5bGUgZm9yIGFsbCBlbGVtZW50cyB0byBgc29saWRgLCBhbmRcXHJcXG4gKiAgICB1c2UgYm9yZGVyLXdpZHRoIHRvIGhpZGUgdGhlbSBpbnN0ZWFkLiBUaGlzIHdheSBvdXIgYGJvcmRlcmAgdXRpbGl0aWVzIG9ubHlcXHJcXG4gKiAgICBuZWVkIHRvIHNldCB0aGUgYGJvcmRlci13aWR0aGAgcHJvcGVydHkgaW5zdGVhZCBvZiB0aGUgZW50aXJlIGBib3JkZXJgXFxyXFxuICogICAgc2hvcnRoYW5kLCBtYWtpbmcgb3VyIGJvcmRlciB1dGlsaXRpZXMgbXVjaCBtb3JlIHN0cmFpZ2h0Zm9yd2FyZCB0byBjb21wb3NlLlxcclxcbiAqXFxyXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2XFxyXFxuICovXFxyXFxuXFxyXFxuKixcXHJcXG46OmJlZm9yZSxcXHJcXG46OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXHJcXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdFxcclxcbiAqL1xcclxcblxcclxcbmhyIHtcXHJcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogVW5kbyB0aGUgYGJvcmRlci1zdHlsZTogbm9uZWAgcmVzZXQgdGhhdCBOb3JtYWxpemUgYXBwbGllcyB0byBpbWFnZXMgc28gdGhhdFxcclxcbiAqIG91ciBgYm9yZGVyLXt3aWR0aH1gIHV0aWxpdGllcyBoYXZlIHRoZSBleHBlY3RlZCBlZmZlY3QuXFxyXFxuICpcXHJcXG4gKiBUaGUgTm9ybWFsaXplIHJlc2V0IGlzIHVubmVjZXNzYXJ5IGZvciB1cyBzaW5jZSB3ZSBkZWZhdWx0IHRoZSBib3JkZXItd2lkdGhcXHJcXG4gKiB0byAwIG9uIGFsbCBlbGVtZW50cy5cXHJcXG4gKlxcclxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9pc3N1ZXMvMzYyXFxyXFxuICovXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6ICM5Y2EzYWY7XFxyXFxufVxcclxcblxcclxcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogIzljYTNhZjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcclxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgY29sb3I6ICM5Y2EzYWY7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbixcXHJcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZSB7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2ZcXHJcXG4gKiBvcHQtb3V0LlxcclxcbiAqL1xcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlc2V0IGZvcm0gZWxlbWVudCBwcm9wZXJ0aWVzIHRoYXQgYXJlIGVhc3kgdG8gZm9yZ2V0IHRvXFxyXFxuICogc3R5bGUgZXhwbGljaXRseSBzbyB5b3UgZG9uJ3QgaW5hZHZlcnRlbnRseSBpbnRyb2R1Y2VcXHJcXG4gKiBzdHlsZXMgdGhhdCBkZXZpYXRlIGZyb20geW91ciBkZXNpZ24gc3lzdGVtLiBUaGVzZSBzdHlsZXNcXHJcXG4gKiBzdXBwbGVtZW50IGEgcGFydGlhbCByZXNldCB0aGF0IGlzIGFscmVhZHkgYXBwbGllZCBieVxcclxcbiAqIG5vcm1hbGl6ZS5jc3MuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uLFxcclxcbmlucHV0LFxcclxcbm9wdGdyb3VwLFxcclxcbnNlbGVjdCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogVXNlIHRoZSBjb25maWd1cmVkICdtb25vJyBmb250IGZhbWlseSBmb3IgZWxlbWVudHMgdGhhdFxcclxcbiAqIGFyZSBleHBlY3RlZCB0byBiZSByZW5kZXJlZCB3aXRoIGEgbW9ub3NwYWNlIGZvbnQsIGZhbGxpbmdcXHJcXG4gKiBiYWNrIHRvIHRoZSBzeXN0ZW0gbW9ub3NwYWNlIHN0YWNrIGlmIHRoZXJlIGlzIG5vIGNvbmZpZ3VyZWRcXHJcXG4gKiAnbW9ubycgZm9udCBmYW1pbHkuXFxyXFxuICovXFxyXFxuXFxyXFxucHJlLFxcclxcbmNvZGUsXFxyXFxua2JkLFxcclxcbnNhbXAge1xcclxcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdCBhcyB0aGF0J3NcXHJcXG4gKiB0aGUgYmVoYXZpb3IgeW91IHdhbnQgYWxtb3N0IGFsbCBvZiB0aGUgdGltZS4gSW5zcGlyZWQgYnlcXHJcXG4gKiBDU1MgUmVtZWR5LCB3aXRoIGBzdmdgIGFkZGVkIGFzIHdlbGwuXFxyXFxuICpcXHJcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxyXFxuICovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnN2ZyxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuYXVkaW8sXFxyXFxuaWZyYW1lLFxcclxcbmVtYmVkLFxcclxcbm9iamVjdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZVxcclxcbiAqIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uXFxyXFxuICpcXHJcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxyXFxuICovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnZpZGVvIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuXFx0LS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXHJcXG5cXHQtLXR3LXJpbmctaW5zZXQ6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXHJcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxyXFxuXFx0LS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXHJcXG5cXHQtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xcclxcblxcdC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxyXFxuXFx0LS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxyXFxuXFxyXFxuXFx0LmNvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiA2NDBweDtcXHJcXG5cXHR9XFxyXFxufVxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcblxcdC5jb250YWluZXIge1xcclxcblxcdFxcdG1heC13aWR0aDogNzY4cHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFxyXFxuXFx0LmNvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiAxMDI0cHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxyXFxuXFxyXFxuXFx0LmNvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiAxMjgwcHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxyXFxuXFxyXFxuXFx0LmNvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiAxNTM2cHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4uaW52aXNpYmxlIHtcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcbi5yZWxhdGl2ZSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uYWJzb2x1dGUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuLmluc2V0LTAge1xcclxcblxcdHRvcDogMHB4O1xcclxcblxcdHJpZ2h0OiAwcHg7XFxyXFxuXFx0Ym90dG9tOiAwcHg7XFxyXFxuXFx0bGVmdDogMHB4O1xcclxcbn1cXHJcXG4uei0xMCB7XFxyXFxuXFx0ei1pbmRleDogMTA7XFxyXFxufVxcclxcbi5jb2wtc3Bhbi0xIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogc3BhbiAxIC8gc3BhbiAxO1xcclxcbn1cXHJcXG4ubXgtYXV0byB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4ubXktOCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG4ubXgtMiB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuLm1iLTQge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcbi5tYi04IHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG4ubWItMiB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG4ubWItMyB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXHJcXG59XFxyXFxuLm10LTYge1xcclxcblxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXHJcXG59XFxyXFxuLm10LTIge1xcclxcblxcdG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuLm1sLTAge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxufVxcclxcbi5tYi02IHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcbi5tci0yIHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuLm1sLTMge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcclxcbn1cXHJcXG4ubWItMTAge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDIuNXJlbTtcXHJcXG59XFxyXFxuLm10LTMge1xcclxcblxcdG1hcmdpbi10b3A6IDAuNzVyZW07XFxyXFxufVxcclxcbi5tbC00IHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuLm10LTQge1xcclxcblxcdG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcbi5tbC1hdXRvIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuLm1sLTEge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcclxcbn1cXHJcXG4ubWwtNSB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxyXFxufVxcclxcbi5tci0wIHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IDBweDtcXHJcXG59XFxyXFxuLm1yLTQge1xcclxcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuLm1iLTEge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxyXFxufVxcclxcbi5tdC01IHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxLjI1cmVtO1xcclxcbn1cXHJcXG4ubXQtOCB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuLm1iLTEyIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG4uYmxvY2sge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4uZmxleCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLmlubGluZS1mbGV4IHtcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG59XFxyXFxuLmdyaWQge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcbi5oaWRkZW4ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5oLVxcXFxbOTB2aFxcXFxdIHtcXHJcXG5cXHRoZWlnaHQ6IDkwdmg7XFxyXFxufVxcclxcbi5oLWZ1bGwge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuLmgtMTAge1xcclxcblxcdGhlaWdodDogMi41cmVtO1xcclxcbn1cXHJcXG4uaC01IHtcXHJcXG5cXHRoZWlnaHQ6IDEuMjVyZW07XFxyXFxufVxcclxcbi5oLTQge1xcclxcblxcdGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuLmgtYXV0byB7XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4uaC04MCB7XFxyXFxuXFx0aGVpZ2h0OiAyMHJlbTtcXHJcXG59XFxyXFxuLmgtNiB7XFxyXFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxyXFxufVxcclxcbi5oLTE0IHtcXHJcXG5cXHRoZWlnaHQ6IDMuNXJlbTtcXHJcXG59XFxyXFxuLnctZnVsbCB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi53LTIwIHtcXHJcXG5cXHR3aWR0aDogNXJlbTtcXHJcXG59XFxyXFxuLnctNCB7XFxyXFxuXFx0d2lkdGg6IDFyZW07XFxyXFxufVxcclxcbi53LTUge1xcclxcblxcdHdpZHRoOiAxLjI1cmVtO1xcclxcbn1cXHJcXG4udy02IHtcXHJcXG5cXHR3aWR0aDogMS41cmVtO1xcclxcbn1cXHJcXG4udy0xMCB7XFxyXFxuXFx0d2lkdGg6IDIuNXJlbTtcXHJcXG59XFxyXFxuLnctNyB7XFxyXFxuXFx0d2lkdGg6IDEuNzVyZW07XFxyXFxufVxcclxcbi5tYXgtdy1tZCB7XFxyXFxuXFx0bWF4LXdpZHRoOiAyOHJlbTtcXHJcXG59XFxyXFxuLm1heC13LXNtIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDI0cmVtO1xcclxcbn1cXHJcXG4ubWF4LXctc2NyZWVuLW1kIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDc2OHB4O1xcclxcbn1cXHJcXG4ubWF4LXctN3hsIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDgwcmVtO1xcclxcbn1cXHJcXG4ubWF4LXcteGwge1xcclxcblxcdG1heC13aWR0aDogMzZyZW07XFxyXFxufVxcclxcbi5tYXgtdy01eGwge1xcclxcblxcdG1heC13aWR0aDogNjRyZW07XFxyXFxufVxcclxcbi5mbGV4LWdyb3cge1xcclxcblxcdGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuLnRyYW5zZm9ybSB7XFxyXFxuXFx0LS10dy10cmFuc2xhdGUteDogMDtcXHJcXG5cXHQtLXR3LXRyYW5zbGF0ZS15OiAwO1xcclxcblxcdC0tdHctcm90YXRlOiAwO1xcclxcblxcdC0tdHctc2tldy14OiAwO1xcclxcblxcdC0tdHctc2tldy15OiAwO1xcclxcblxcdC0tdHctc2NhbGUteDogMTtcXHJcXG5cXHQtLXR3LXNjYWxlLXk6IDE7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXR3LXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxyXFxufVxcclxcbi5ncmlkLWNvbHMtMSB7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDAsIDFmcikpO1xcclxcbn1cXHJcXG4uZ3JpZC1jb2xzLTIge1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXHJcXG59XFxyXFxuLmZsZXgtY29sIHtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4uZmxleC1yb3cge1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcbi5mbGV4LXdyYXAge1xcclxcblxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuLml0ZW1zLWNlbnRlciB7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLml0ZW1zLXN0YXJ0IHtcXHJcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuLmp1c3RpZnktY2VudGVyIHtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmp1c3RpZnktYmV0d2VlbiB7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4uanVzdGlmeS1pdGVtcy1jZW50ZXIge1xcclxcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmdhcC00IHtcXHJcXG5cXHRnYXA6IDFyZW07XFxyXFxufVxcclxcbi5nYXAtOCB7XFxyXFxuXFx0Z2FwOiAycmVtO1xcclxcbn1cXHJcXG4uc3BhY2UteC0yID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxyXFxuXFx0LS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDAuNXJlbSAqIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpO1xcclxcblxcdG1hcmdpbi1sZWZ0OiBjYWxjKDAuNXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpKTtcXHJcXG59XFxyXFxuLnNwYWNlLXktOCA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcclxcblxcdC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcclxcblxcdG1hcmdpbi10b3A6IGNhbGMoMnJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDJyZW0gKiB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKTtcXHJcXG59XFxyXFxuLnNwYWNlLXktNCA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcclxcblxcdC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcclxcblxcdG1hcmdpbi10b3A6IGNhbGMoMXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDFyZW0gKiB2YXIoLS10dy1zcGFjZS15LXJldmVyc2UpKTtcXHJcXG59XFxyXFxuLnNwYWNlLXktNiA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcclxcblxcdC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcclxcblxcdG1hcmdpbi10b3A6IGNhbGMoMS41cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpO1xcclxcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMS41cmVtICogdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSk7XFxyXFxufVxcclxcbi5zcGFjZS14LTggPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXHJcXG5cXHQtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IGNhbGMoMnJlbSAqIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpO1xcclxcblxcdG1hcmdpbi1sZWZ0OiBjYWxjKDJyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKSk7XFxyXFxufVxcclxcbi5zcGFjZS14LTMgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXHJcXG5cXHQtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IGNhbGMoMC43NXJlbSAqIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpO1xcclxcblxcdG1hcmdpbi1sZWZ0OiBjYWxjKDAuNzVyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKSk7XFxyXFxufVxcclxcbi5yb3VuZGVkLWxnIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxufVxcclxcbi5yb3VuZGVkIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcclxcbn1cXHJcXG4ucm91bmRlZC14bCB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC43NXJlbTtcXHJcXG59XFxyXFxuLnJvdW5kZWQtMnhsIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG4ucm91bmRlZC1tZCB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxyXFxufVxcclxcbi5ib3JkZXIge1xcclxcblxcdGJvcmRlci13aWR0aDogMXB4O1xcclxcbn1cXHJcXG4uYm9yZGVyLTIge1xcclxcblxcdGJvcmRlci13aWR0aDogMnB4O1xcclxcbn1cXHJcXG4uYm9yZGVyLXQge1xcclxcblxcdGJvcmRlci10b3Atd2lkdGg6IDFweDtcXHJcXG59XFxyXFxuLmJvcmRlci1sIHtcXHJcXG5cXHRib3JkZXItbGVmdC13aWR0aDogMXB4O1xcclxcbn1cXHJcXG4uYm9yZGVyLWdyYXktMzAwIHtcXHJcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyMDksIDIxMywgMjE5LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcclxcbn1cXHJcXG4uYm9yZGVyLXB1cnBsZS02MDAge1xcclxcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDEyNCwgNTgsIDIzNywgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuLmJvcmRlci1ibGFjayB7XFxyXFxuXFx0LS10dy1ib3JkZXItb3BhY2l0eTogMTtcXHJcXG5cXHRib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuLmJnLXdoaXRlIHtcXHJcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcbi5iZy1ncmF5LTUwIHtcXHJcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDksIDI1MCwgMjUxLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcbi5iZy1ibHVlLTYwMCB7XFxyXFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDk5LCAyMzUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuLmJnLWdyYXktMjAwIHtcXHJcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcbi5iZy1ibGFjayB7XFxyXFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG4uYmctZ3JhZGllbnQtdG8tciB7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpO1xcclxcbn1cXHJcXG4uZnJvbS1waW5rLTUwMCB7XFxyXFxuXFx0LS10dy1ncmFkaWVudC1mcm9tOiAjZWM0ODk5O1xcclxcblxcdC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCB2YXIoLS10dy1ncmFkaWVudC10bywgcmdiYSgyMzYsIDcyLCAxNTMsIDApKTtcXHJcXG59XFxyXFxuLmZyb20taW5kaWdvLTUwMCB7XFxyXFxuXFx0LS10dy1ncmFkaWVudC1mcm9tOiAjNjM2NmYxO1xcclxcblxcdC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCB2YXIoLS10dy1ncmFkaWVudC10bywgcmdiYSg5OSwgMTAyLCAyNDEsIDApKTtcXHJcXG59XFxyXFxuLmZyb20tcm9zZS01MDAge1xcclxcblxcdC0tdHctZ3JhZGllbnQtZnJvbTogI2Y0M2Y1ZTtcXHJcXG5cXHQtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8sIHJnYmEoMjQ0LCA2MywgOTQsIDApKTtcXHJcXG59XFxyXFxuLnZpYS1wdXJwbGUtNTAwIHtcXHJcXG5cXHQtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgIzhiNWNmNiwgdmFyKC0tdHctZ3JhZGllbnQtdG8sIHJnYmEoMTM5LCA5MiwgMjQ2LCAwKSk7XFxyXFxufVxcclxcbi52aWEtZnVjaHNpYS01MDAge1xcclxcblxcdC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCAjZDk0NmVmLCB2YXIoLS10dy1ncmFkaWVudC10bywgcmdiYSgyMTcsIDcwLCAyMzksIDApKTtcXHJcXG59XFxyXFxuLnRvLWluZGlnby01MDAge1xcclxcblxcdC0tdHctZ3JhZGllbnQtdG86ICM2MzY2ZjE7XFxyXFxufVxcclxcbi50by1yb3NlLTUwMCB7XFxyXFxuXFx0LS10dy1ncmFkaWVudC10bzogI2Y0M2Y1ZTtcXHJcXG59XFxyXFxuLmJnLWNvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4uYmctY2xpcC10ZXh0IHtcXHJcXG5cXHQtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG5cXHQgICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG59XFxyXFxuLmJnLWJvdHRvbSB7XFxyXFxuXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbn1cXHJcXG4uYmctbm8tcmVwZWF0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG4uZmlsbC1jdXJyZW50IHtcXHJcXG5cXHRmaWxsOiBjdXJyZW50Q29sb3I7XFxyXFxufVxcclxcbi5wLTJcXFxcLjUge1xcclxcblxcdHBhZGRpbmc6IDAuNjI1cmVtO1xcclxcbn1cXHJcXG4ucC0yIHtcXHJcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcbi5wLTMge1xcclxcblxcdHBhZGRpbmc6IDAuNzVyZW07XFxyXFxufVxcclxcbi5wLTYge1xcclxcblxcdHBhZGRpbmc6IDEuNXJlbTtcXHJcXG59XFxyXFxuLnAtNSB7XFxyXFxuXFx0cGFkZGluZzogMS4yNXJlbTtcXHJcXG59XFxyXFxuLnB4LTEwIHtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XFxyXFxufVxcclxcbi5weC00IHtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuLnB5LTJcXFxcLjUge1xcclxcblxcdHBhZGRpbmctdG9wOiAwLjYyNXJlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC42MjVyZW07XFxyXFxufVxcclxcbi5weS0yIHtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcbi5weS04IHtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMnJlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuLnB5LTMge1xcclxcblxcdHBhZGRpbmctdG9wOiAwLjc1cmVtO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcclxcbn1cXHJcXG4ucHgtNSB7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XFxyXFxufVxcclxcbi5weS0xMCB7XFxyXFxuXFx0cGFkZGluZy10b3A6IDIuNXJlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcclxcbn1cXHJcXG4ucHgtNiB7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuXFx0cGFkZGluZy1yaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG4ucHktMTIge1xcclxcblxcdHBhZGRpbmctdG9wOiAzcmVtO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG4ucHgtMyB7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxyXFxufVxcclxcbi5weS0xIHtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMC4yNXJlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcXHJcXG59XFxyXFxuLnB5LTFcXFxcLjUge1xcclxcblxcdHBhZGRpbmctdG9wOiAwLjM3NXJlbTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC4zNzVyZW07XFxyXFxufVxcclxcbi5wdC0xMCB7XFxyXFxuXFx0cGFkZGluZy10b3A6IDIuNXJlbTtcXHJcXG59XFxyXFxuLnBiLTUge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xcclxcbn1cXHJcXG4ucHQtNSB7XFxyXFxuXFx0cGFkZGluZy10b3A6IDEuMjVyZW07XFxyXFxufVxcclxcbi5wYi04IHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuLnBiLTQge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG4ucHQtMSB7XFxyXFxuXFx0cGFkZGluZy10b3A6IDAuMjVyZW07XFxyXFxufVxcclxcbi5wbC0yIHtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuLnBiLTEwIHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcclxcbn1cXHJcXG4ucGItMTYge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiA0cmVtO1xcclxcbn1cXHJcXG4udGV4dC1jZW50ZXIge1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRleHQtNnhsIHtcXHJcXG5cXHRmb250LXNpemU6IDMuNzVyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbi50ZXh0LXhsIHtcXHJcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxyXFxufVxcclxcbi50ZXh0LTR4bCB7XFxyXFxuXFx0Zm9udC1zaXplOiAyLjI1cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxufVxcclxcbi50ZXh0LXNtIHtcXHJcXG5cXHRmb250LXNpemU6IDAuODc1cmVtO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcclxcbn1cXHJcXG4udGV4dC01eGwge1xcclxcblxcdGZvbnQtc2l6ZTogM3JlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuLnRleHQtbGcge1xcclxcblxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxyXFxufVxcclxcbi50ZXh0LTJ4bCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcbi50ZXh0LWJhc2Uge1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41cmVtO1xcclxcbn1cXHJcXG4uZm9udC1ib2xkIHtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG4uZm9udC1leHRyYWJvbGQge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcbi5mb250LWxpZ2h0IHtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG4uZm9udC1tZWRpdW0ge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbi5mb250LXNlbWlib2xkIHtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG4uZm9udC1ub3JtYWwge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcbi51cHBlcmNhc2Uge1xcclxcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcbi5sZWFkaW5nLW5vcm1hbCB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuLmxlYWRpbmctdGlnaHQge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjI1O1xcclxcbn1cXHJcXG4udHJhY2tpbmctdGlnaHQge1xcclxcblxcdGxldHRlci1zcGFjaW5nOiAtMC4wMjVlbTtcXHJcXG59XFxyXFxuLnRyYWNraW5nLW5vcm1hbCB7XFxyXFxuXFx0bGV0dGVyLXNwYWNpbmc6IDBlbTtcXHJcXG59XFxyXFxuLnRleHQtZ3JheS05MDAge1xcclxcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcblxcdGNvbG9yOiByZ2JhKDE3LCAyNCwgMzksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG4udGV4dC1ibGFjayB7XFxyXFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuXFx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcbi50ZXh0LWdyYXktNTAwIHtcXHJcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG5cXHRjb2xvcjogcmdiYSgxMDcsIDExNCwgMTI4LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuLnRleHQtd2hpdGUge1xcclxcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcblxcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG4udGV4dC10cmFuc3BhcmVudCB7XFxyXFxuXFx0Y29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4udGV4dC1ncmF5LTYwMCB7XFxyXFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuXFx0Y29sb3I6IHJnYmEoNzUsIDg1LCA5OSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcbi50ZXh0LWdyYXktNzAwIHtcXHJcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG5cXHRjb2xvcjogcmdiYSg1NSwgNjUsIDgxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuLnRleHQtZ3JheS04MDAge1xcclxcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcblxcdGNvbG9yOiByZ2JhKDMxLCA0MSwgNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG4udGV4dC1ibHVlLTUwMCB7XFxyXFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuXFx0Y29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuLnRleHQtYmx1ZS02MDAge1xcclxcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcblxcdGNvbG9yOiByZ2JhKDM3LCA5OSwgMjM1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuLnRleHQtZ3JlZW4tNTAwIHtcXHJcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG5cXHRjb2xvcjogcmdiYSgxNiwgMTg1LCAxMjksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG4udGV4dC10ZWFsLTYwMCB7XFxyXFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuXFx0Y29sb3I6IHJnYmEoMTMsIDE0OCwgMTM2LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuLnRleHQtZ3JheS0zMDAge1xcclxcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcblxcdGNvbG9yOiByZ2JhKDIwOSwgMjEzLCAyMTksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG4udGV4dC1ncmF5LTQwMCB7XFxyXFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuXFx0Y29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcbi5zaGFkb3cge1xcclxcblxcdC0tdHctc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XFxyXFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXHJcXG59XFxyXFxuLnNoYWRvdy1zbSB7XFxyXFxuXFx0LS10dy1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxyXFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXHJcXG59XFxyXFxuLnNoYWRvdy14bCB7XFxyXFxuXFx0LS10dy1zaGFkb3c6IDAgMjBweCAyNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDEwcHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XFxyXFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXHJcXG59XFxyXFxuLnNoYWRvdy0yeGwge1xcclxcblxcdC0tdHctc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxyXFxufVxcclxcbi5zaGFkb3ctbWQge1xcclxcblxcdC0tdHctc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxyXFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXHJcXG59XFxyXFxuLm91dGxpbmUtbm9uZSB7XFxyXFxuXFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcblxcdG91dGxpbmUtb2Zmc2V0OiAycHg7XFxyXFxufVxcclxcbi5yaW5nLTEge1xcclxcblxcdC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xcclxcblxcdC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMXB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXHJcXG5cXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3cpLCB2YXIoLS10dy1yaW5nLXNoYWRvdyksIHZhcigtLXR3LXNoYWRvdywgMCAwICMwMDAwKTtcXHJcXG59XFxyXFxuLnJpbmctYmxhY2sge1xcclxcblxcdC0tdHctcmluZy1vcGFjaXR5OiAxO1xcclxcblxcdC0tdHctcmluZy1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy1yaW5nLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuLnJpbmctb3BhY2l0eS01IHtcXHJcXG5cXHQtLXR3LXJpbmctb3BhY2l0eTogMC4wNTtcXHJcXG59XFxyXFxuLmZpbHRlciB7XFxyXFxuXFx0LS10dy1ibHVyOiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxyXFxuXFx0LS10dy1icmlnaHRuZXNzOiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxyXFxuXFx0LS10dy1jb250cmFzdDogdmFyKC0tdHctZW1wdHksLyohKi8gLyohKi8pO1xcclxcblxcdC0tdHctZ3JheXNjYWxlOiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxyXFxuXFx0LS10dy1odWUtcm90YXRlOiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxyXFxuXFx0LS10dy1pbnZlcnQ6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXHJcXG5cXHQtLXR3LXNhdHVyYXRlOiB2YXIoLS10dy1lbXB0eSwvKiEqLyAvKiEqLyk7XFxyXFxuXFx0LS10dy1zZXBpYTogdmFyKC0tdHctZW1wdHksLyohKi8gLyohKi8pO1xcclxcblxcdC0tdHctZHJvcC1zaGFkb3c6IHZhcigtLXR3LWVtcHR5LC8qISovIC8qISovKTtcXHJcXG5cXHRmaWx0ZXI6IHZhcigtLXR3LWJsdXIpIHZhcigtLXR3LWJyaWdodG5lc3MpIHZhcigtLXR3LWNvbnRyYXN0KSB2YXIoLS10dy1ncmF5c2NhbGUpIHZhcigtLXR3LWh1ZS1yb3RhdGUpIHZhcigtLXR3LWludmVydCkgdmFyKC0tdHctc2F0dXJhdGUpIHZhcigtLXR3LXNlcGlhKSB2YXIoLS10dy1kcm9wLXNoYWRvdyk7XFxyXFxufVxcclxcbi5ncmF5c2NhbGUge1xcclxcblxcdC0tdHctZ3JheXNjYWxlOiBncmF5c2NhbGUoMTAwJSk7XFxyXFxufVxcclxcbi50cmFuc2l0aW9uIHtcXHJcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCBjb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXHJcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXHJcXG59XFxyXFxuLnRyYW5zaXRpb24tY29sb3JzIHtcXHJcXG5cXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIGNvbG9yLCBmaWxsLCBzdHJva2U7XFxyXFxuXFx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxyXFxuXFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxyXFxufVxcclxcbi5kdXJhdGlvbi0zMDAge1xcclxcblxcdHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xcclxcbn1cXHJcXG4uZHVyYXRpb24tNzAwIHtcXHJcXG5cXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiA3MDBtcztcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBtaW4td2lkdGg6IDM2MHB4O1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbiNfX25leHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0aWNreS1uYXYge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHotaW5kZXg6IDUwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMjBweCkgIWltcG9ydGFudDtcXHJcXG4gICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDIwcHgpICFpbXBvcnRhbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMSBlYXNlLWluLW91dCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMC43NWVtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDM5LCAzOSk7XFxyXFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDMzLCAzNCwgMzQpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi1tb3otc2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmODFjZTU7XFxyXFxuICBjb2xvcjogI2ZlZmVmZTtcXHJcXG59XFxyXFxuXFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4MWNlNTtcXHJcXG4gIGNvbG9yOiAjZmVmZWZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOnRyYW5zZm9ybTpob3ZlciB7XFxyXFxuXFx0LS10dy10cmFuc2xhdGUteDogMDtcXHJcXG5cXHQtLXR3LXRyYW5zbGF0ZS15OiAwO1xcclxcblxcdC0tdHctcm90YXRlOiAwO1xcclxcblxcdC0tdHctc2tldy14OiAwO1xcclxcblxcdC0tdHctc2tldy15OiAwO1xcclxcblxcdC0tdHctc2NhbGUteDogMTtcXHJcXG5cXHQtLXR3LXNjYWxlLXk6IDE7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXR3LXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6c2NhbGUtMTA1OmhvdmVyIHtcXHJcXG5cXHQtLXR3LXNjYWxlLXg6IDEuMDU7XFxyXFxuXFx0LS10dy1zY2FsZS15OiAxLjA1O1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmJnLWdyYXktODAwOmhvdmVyIHtcXHJcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgNDEsIDU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6dGV4dC1ncmF5LTMwMDpob3ZlciB7XFxyXFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuXFx0Y29sb3I6IHJnYmEoMjA5LCAyMTMsIDIxOSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5ob3ZlclxcXFw6dW5kZXJsaW5lOmhvdmVyIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpzaGFkb3ctbWQ6aG92ZXIge1xcclxcblxcdC0tdHctc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxyXFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdmVyXFxcXDpmaWx0ZXItbm9uZTpob3ZlciB7XFxyXFxuXFx0ZmlsdGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaG92ZXJcXFxcOmdyYXlzY2FsZS0wOmhvdmVyIHtcXHJcXG5cXHQtLXR3LWdyYXlzY2FsZTogZ3JheXNjYWxlKDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9jdXNcXFxcOm91dGxpbmUtbm9uZTpmb2N1cyB7XFxyXFxuXFx0b3V0bGluZTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcblxcdG91dGxpbmUtb2Zmc2V0OiAycHg7XFxyXFxufVxcclxcblxcclxcbi5mb2N1c1xcXFw6cmluZy00OmZvY3VzIHtcXHJcXG5cXHQtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXHJcXG5cXHQtLXR3LXJpbmctc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCBjYWxjKDRweCArIHZhcigtLXR3LXJpbmctb2Zmc2V0LXdpZHRoKSkgdmFyKC0tdHctcmluZy1jb2xvcik7XFxyXFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCAjMDAwMCk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpib3JkZXIge1xcclxcblxcdGJvcmRlci13aWR0aDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6Ym9yZGVyLWdyYXktNjAwIHtcXHJcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcblxcdGJvcmRlci1jb2xvcjogcmdiYSg3NSwgODUsIDk5LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6Ym9yZGVyLWdyYXktNzAwIHtcXHJcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcblxcdGJvcmRlci1jb2xvcjogcmdiYSg1NSwgNjUsIDgxLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6Ym9yZGVyLXB1cnBsZS0zMDAge1xcclxcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDE5NiwgMTgxLCAyNTMsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpib3JkZXItZ3JheS0zMDAge1xcclxcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDIwOSwgMjEzLCAyMTksIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpib3JkZXItZ3JheS01MDAge1xcclxcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDEwNywgMTE0LCAxMjgsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpib3JkZXItcm9zZS0zMDAge1xcclxcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI1MywgMTY0LCAxNzUsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpiZy1ibGFjayB7XFxyXFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6YmctZ3JheS05MDAge1xcclxcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3LCAyNCwgMzksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLmRhcmtcXFxcOmJnLWdyYXktNzAwIHtcXHJcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NSwgNjUsIDgxLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpiZy1ncmF5LTgwMCB7XFxyXFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDQxLCA1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6Ymctd2hpdGUge1xcclxcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLmRhcmtcXFxcOmJnLWdyYWRpZW50LXRvLXIge1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLmRhcmtcXFxcOmZyb20tcGluay01MDAge1xcclxcblxcdC0tdHctZ3JhZGllbnQtZnJvbTogI2VjNDg5OTtcXHJcXG5cXHQtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8sIHJnYmEoMjM2LCA3MiwgMTUzLCAwKSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpmcm9tLWJsdWUtNDAwIHtcXHJcXG5cXHQtLXR3LWdyYWRpZW50LWZyb206ICM2MGE1ZmE7XFxyXFxuXFx0LS10dy1ncmFkaWVudC1zdG9wczogdmFyKC0tdHctZ3JhZGllbnQtZnJvbSksIHZhcigtLXR3LWdyYWRpZW50LXRvLCByZ2JhKDk2LCAxNjUsIDI1MCwgMCkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6ZnJvbS1pbmRpZ28tNDAwIHtcXHJcXG5cXHQtLXR3LWdyYWRpZW50LWZyb206ICM4MThjZjg7XFxyXFxuXFx0LS10dy1ncmFkaWVudC1zdG9wczogdmFyKC0tdHctZ3JhZGllbnQtZnJvbSksIHZhcigtLXR3LWdyYWRpZW50LXRvLCByZ2JhKDEyOSwgMTQwLCAyNDgsIDApKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLmRhcmtcXFxcOmZyb20tcm9zZS00MDAge1xcclxcblxcdC0tdHctZ3JhZGllbnQtZnJvbTogI2ZiNzE4NTtcXHJcXG5cXHQtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8sIHJnYmEoMjUxLCAxMTMsIDEzMywgMCkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6dmlhLXB1cnBsZS00MDAge1xcclxcblxcdC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCAjYTc4YmZhLCB2YXIoLS10dy1ncmFkaWVudC10bywgcmdiYSgxNjcsIDEzOSwgMjUwLCAwKSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDp2aWEtZnVjaHNpYS00MDAge1xcclxcblxcdC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCAjZTg3OWY5LCB2YXIoLS10dy1ncmFkaWVudC10bywgcmdiYSgyMzIsIDEyMSwgMjQ5LCAwKSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDp0by1pbmRpZ28tNTAwIHtcXHJcXG5cXHQtLXR3LWdyYWRpZW50LXRvOiAjNjM2NmYxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6dG8taW5kaWdvLTQwMCB7XFxyXFxuXFx0LS10dy1ncmFkaWVudC10bzogIzgxOGNmODtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLmRhcmtcXFxcOnRvLWJsdWUtNDAwIHtcXHJcXG5cXHQtLXR3LWdyYWRpZW50LXRvOiAjNjBhNWZhO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6dG8tcm9zZS00MDAge1xcclxcblxcdC0tdHctZ3JhZGllbnQtdG86ICNmYjcxODU7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDp0ZXh0LWdyYXktMTAwIHtcXHJcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG5cXHRjb2xvcjogcmdiYSgyNDMsIDI0NCwgMjQ2LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLmRhcmtcXFxcOnRleHQtd2hpdGUge1xcclxcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcblxcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6dGV4dC1ncmF5LTQwMCB7XFxyXFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuXFx0Y29sb3I6IHJnYmEoMTU2LCAxNjMsIDE3NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDp0ZXh0LWdyYXktMzAwIHtcXHJcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG5cXHRjb2xvcjogcmdiYSgyMDksIDIxMywgMjE5LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLmRhcmtcXFxcOnRleHQtZ3JheS0yMDAge1xcclxcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcblxcdGNvbG9yOiByZ2JhKDIyOSwgMjMxLCAyMzUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6dGV4dC1ibHVlLTMwMCB7XFxyXFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuXFx0Y29sb3I6IHJnYmEoMTQ3LCAxOTcsIDI1MywgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDp0ZXh0LWJsYWNrIHtcXHJcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG5cXHRjb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLmRhcmtcXFxcOnRleHQtdGVhbC0zMDAge1xcclxcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcclxcblxcdGNvbG9yOiByZ2JhKDk0LCAyMzQsIDIxMiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDp0ZXh0LWJsdWUtNDAwIHtcXHJcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXHJcXG5cXHRjb2xvcjogcmdiYSg5NiwgMTY1LCAyNTAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6cGxhY2Vob2xkZXItZ3JheS00MDA6Oi1tb3otcGxhY2Vob2xkZXIge1xcclxcblxcdC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcXHJcXG5cXHRjb2xvcjogcmdiYSgxNTYsIDE2MywgMTc1LCB2YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpwbGFjZWhvbGRlci1ncmF5LTQwMDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcblxcdC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcXHJcXG5cXHRjb2xvcjogcmdiYSgxNTYsIDE2MywgMTc1LCB2YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpwbGFjZWhvbGRlci1ncmF5LTQwMDo6cGxhY2Vob2xkZXIge1xcclxcblxcdC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcXHJcXG5cXHRjb2xvcjogcmdiYSgxNTYsIDE2MywgMTc1LCB2YXIoLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpyaW5nLW9mZnNldC1ncmF5LTgwMCB7XFxyXFxuXFx0LS10dy1yaW5nLW9mZnNldC1jb2xvcjogIzFmMjkzNztcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLmRhcmtcXFxcOmhvdmVyXFxcXDpib3JkZXItZ3JheS01MDA6aG92ZXIge1xcclxcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDEwNywgMTE0LCAxMjgsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpob3ZlclxcXFw6Ymctd2hpdGU6aG92ZXIge1xcclxcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhcmsgLmRhcmtcXFxcOmhvdmVyXFxcXDpiZy1ncmF5LTIwMDpob3ZlciB7XFxyXFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMzEsIDIzNSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayAuZGFya1xcXFw6aG92ZXJcXFxcOmJnLWdyYXktNjAwOmhvdmVyIHtcXHJcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NSwgODUsIDk5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpob3ZlclxcXFw6dGV4dC1ibGFjazpob3ZlciB7XFxyXFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuXFx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpob3ZlclxcXFw6dGV4dC13aGl0ZTpob3ZlciB7XFxyXFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxyXFxuXFx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpmb2N1c1xcXFw6Ym9yZGVyLWJsdWUtNTAwOmZvY3VzIHtcXHJcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcclxcblxcdGJvcmRlci1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIC5kYXJrXFxcXDpmb2N1c1xcXFw6cmluZy1ibHVlLTUwMDpmb2N1cyB7XFxyXFxuXFx0LS10dy1yaW5nLW9wYWNpdHk6IDE7XFxyXFxuXFx0LS10dy1yaW5nLWNvbG9yOiByZ2JhKDU5LCAxMzAsIDI0NiwgdmFyKC0tdHctcmluZy1vcGFjaXR5KSk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcclxcblxcclxcblxcdC5zbVxcXFw6Y29sLXNwYW4tMiB7XFxyXFxuXFx0XFx0Z3JpZC1jb2x1bW46IHNwYW4gMiAvIHNwYW4gMjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnNtXFxcXDptbC1hdXRvIHtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnNtXFxcXDptdC0zIHtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAwLjc1cmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuc21cXFxcOmhpZGRlbiB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnNtXFxcXDptYXgtdy1tZCB7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiAyOHJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnNtXFxcXDpmbGV4LXJvdyB7XFxyXFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnNtXFxcXDpqdXN0aWZ5LXN0YXJ0IHtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5zbVxcXFw6cC04IHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAycmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuc21cXFxcOnB4LTYge1xcclxcblxcdFxcdHBhZGRpbmctbGVmdDogMS41cmVtO1xcclxcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnNtXFxcXDp0ZXh0LWxlZnQge1xcclxcblxcdFxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5zbVxcXFw6dGV4dC14bCB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuc21cXFxcOnRleHQtc20ge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMjVyZW07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG5cXHQubWRcXFxcOnZpc2libGUge1xcclxcblxcdFxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tZFxcXFw6Y29sLXNwYW4tMiB7XFxyXFxuXFx0XFx0Z3JpZC1jb2x1bW46IHNwYW4gMiAvIHNwYW4gMjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDpteS0xMiB7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogM3JlbTtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOm14LWF1dG8ge1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDptbC02IHtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOm1sLTIge1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tZFxcXFw6bXQtMCB7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOm1sLTMge1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOm1iLTAge1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDptbC0wIHtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOm1yLTUge1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMS4yNXJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDpmbGV4IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOmhpZGRlbiB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDpoLXNjcmVlbiB7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDp3LTExXFxcXC8xMiB7XFxyXFxuXFx0XFx0d2lkdGg6IDkxLjY2NjY2NyU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tZFxcXFw6dy0xMFxcXFwvMTIge1xcclxcblxcdFxcdHdpZHRoOiA4My4zMzMzMzMlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOmdyaWQtY29scy0yIHtcXHJcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tZFxcXFw6Z3JpZC1jb2xzLTMge1xcclxcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDpncmlkLWNvbHMtNCB7XFxyXFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOmZsZXgtcm93IHtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOmp1c3RpZnktc3RhcnQge1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDpzcGFjZS14LTYgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXHJcXG5cXHRcXHQtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IGNhbGMoMS41cmVtICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSk7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IGNhbGMoMS41cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOnNwYWNlLXktNiA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcclxcblxcdFxcdC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcclxcblxcdFxcdG1hcmdpbi10b3A6IGNhbGMoMS41cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpO1xcclxcblxcdFxcdG1hcmdpbi1ib3R0b206IGNhbGMoMS41cmVtICogdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSk7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tZFxcXFw6c3BhY2UteC0xNiA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcclxcblxcdFxcdC0tdHctc3BhY2UteC1yZXZlcnNlOiAwO1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogY2FsYyg0cmVtICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSk7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IGNhbGMoNHJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDpib3JkZXItci0yIHtcXHJcXG5cXHRcXHRib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDpwLTEge1xcclxcblxcdFxcdHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tZFxcXFw6cHgtNiB7XFxyXFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAxLjVyZW07XFxyXFxuXFx0XFx0cGFkZGluZy1yaWdodDogMS41cmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOnB5LTMyIHtcXHJcXG5cXHRcXHRwYWRkaW5nLXRvcDogOHJlbTtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogOHJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDpwdC0xNiB7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IDRyZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tZFxcXFw6cGwtMTQge1xcclxcblxcdFxcdHBhZGRpbmctbGVmdDogMy41cmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOnRleHQtOHhsIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDZyZW07XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tZFxcXFw6dGV4dC0yeGwge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAycmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOnRleHQtNnhsIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDMuNzVyZW07XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tZFxcXFw6dGV4dC1sZyB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG5cXHRcXHRsaW5lLWhlaWdodDogMS43NXJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1kXFxcXDp0ZXh0LTR4bCB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAyLjI1cmVtO1xcclxcblxcdFxcdGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tZFxcXFw6bGVhZGluZy10aWdodCB7XFxyXFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMjU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tZFxcXFw6dHJhY2tpbmctbm9ybWFsIHtcXHJcXG5cXHRcXHRsZXR0ZXItc3BhY2luZzogMGVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOmhvdmVyXFxcXDp0cmFuc2Zvcm06aG92ZXIge1xcclxcblxcdFxcdC0tdHctdHJhbnNsYXRlLXg6IDA7XFxyXFxuXFx0XFx0LS10dy10cmFuc2xhdGUteTogMDtcXHJcXG5cXHRcXHQtLXR3LXJvdGF0ZTogMDtcXHJcXG5cXHRcXHQtLXR3LXNrZXcteDogMDtcXHJcXG5cXHRcXHQtLXR3LXNrZXcteTogMDtcXHJcXG5cXHRcXHQtLXR3LXNjYWxlLXg6IDE7XFxyXFxuXFx0XFx0LS10dy1zY2FsZS15OiAxO1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCh2YXIoLS10dy10cmFuc2xhdGUteCkpIHRyYW5zbGF0ZVkodmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWRcXFxcOmhvdmVyXFxcXDpzY2FsZS0xMDU6aG92ZXIge1xcclxcblxcdFxcdC0tdHctc2NhbGUteDogMS4wNTtcXHJcXG5cXHRcXHQtLXR3LXNjYWxlLXk6IDEuMDU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFxyXFxuXFx0LmxnXFxcXDpjb2wtc3Bhbi0xIHtcXHJcXG5cXHRcXHRncmlkLWNvbHVtbjogc3BhbiAxIC8gc3BhbiAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubGdcXFxcOm1iLTE2IHtcXHJcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubGdcXFxcOm1heC13LTZ4bCB7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiA3MnJlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmxnXFxcXDpweS0xNiB7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IDRyZW07XFxyXFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDRyZW07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5sZ1xcXFw6cHktMCB7XFxyXFxuXFx0XFx0cGFkZGluZy10b3A6IDBweDtcXHJcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMHB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubGdcXFxcOnB4LTgge1xcclxcblxcdFxcdHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcclxcblxcclxcblxcdC54bFxcXFw6cC0wIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCI8bm8gc291cmNlPlwiLFwid2VicGFjazovL3N0eWxlcy8lM0NpbnB1dCUyMGNzcyUyME1ldkRPayUzRVwiLFwid2VicGFjazovL3N0eWxlcy8lM0NpbnB1dCUyMGNzcyUyMHYyOXdNUCUzRVwiLFwid2VicGFjazovL3N0eWxlcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdFQUFBLENBQUEsOEZDQThGOztBQUU5Rjs7O0NBR0M7O0FBRUQ7O0NBRUM7O0FBRUQ7OztDQUdDLHNCQUFzQjtBQUN2Qjs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLGdCQUFnQjtDQUNoQixjQUFXO0lBQVgsV0FBVztBQUNaOztBQUVBOzs7Q0FHQzs7QUFFRDtDQUNDLGlCQUFpQixFQUFFLE1BQU07Q0FDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN2Qzs7QUFFQTs7O0NBR0M7O0FBRUQ7O0NBRUM7O0FBRUQ7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7O0NBRUM7O0FBRUQ7Q0FDQzs7Ozs7Ozs7O2tCQVNpQjtBQUNsQjs7QUFFQTs7O0NBR0M7O0FBRUQ7OztDQUdDOztBQUVEO0NBQ0MsU0FBUyxFQUFFLE1BQU07Q0FDakIsY0FBYyxFQUFFLE1BQU07QUFDdkI7O0FBRUE7OztDQUdDOztBQUVEOztDQUVDOztBQUVEO0NBQ0MseUNBQWlDO1NBQWpDLGlDQUFpQztBQUNsQzs7QUFFQTs7Q0FFQzs7QUFFRDs7Q0FFQyxtQkFBbUI7QUFDcEI7O0FBRUE7OztDQUdDOztBQUVEOzs7O0NBSUM7Ozs7OztXQU1VLEVBQUUsTUFBTTtDQUNsQixjQUFjLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLGNBQWM7QUFDZjs7QUFFQTs7Q0FFQzs7QUFFRDs7Q0FFQyxjQUFjO0NBQ2QsY0FBYztDQUNk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QUFBO0FHaXBCQTtBSGpwQkE7Q0FBQSxtQkFBQTtBR29wQkE7QUhwcEJBO0NBQUEsaUJBQUE7QUd1cEJBO0FIdnBCQTtDQUFBLGdCQUFBO0FHMHBCQTtBSDFwQkE7Q0FBQSxpQkFBQTtBRzZwQkE7QUg3cEJBO0NBQUEsb0JBQUE7QUdncUJBO0FIaHFCQTtDQUFBLG9CQUFBO0FHbXFCQTtBSG5xQkE7Q0FBQSxpQkFBQTtBR3NxQkE7QUh0cUJBO0NBQUEsa0JBQUE7QUd5cUJBO0FIenFCQTtDQUFBLHNCQUFBO0FHNHFCQTtBSDVxQkE7Q0FBQSxtQkFBQTtBRytxQkE7QUgvcUJBO0NBQUEsZ0JBQUE7QUdrckJBO0FIbHJCQTtDQUFBLG1CQUFBO0FHcXJCQTtBSHJyQkE7Q0FBQSxjQUFBO0FHd3JCQTtBSHhyQkE7Q0FBQSxhQUFBO0FHMnJCQTtBSDNyQkE7Q0FBQSxvQkFBQTtBRzhyQkE7QUg5ckJBO0NBQUEsYUFBQTtBR2lzQkE7QUhqc0JBO0NBQUEsYUFBQTtBR29zQkE7QUhwc0JBO0NBQUEsWUFBQTtBR3VzQkE7QUh2c0JBO0NBQUEsWUFBQTtBRzBzQkE7QUgxc0JBO0NBQUEsY0FBQTtBRzZzQkE7QUg3c0JBO0NBQUEsZUFBQTtBR2d0QkE7QUhodEJBO0NBQUEsWUFBQTtBR210QkE7QUhudEJBO0NBQUEsWUFBQTtBR3N0QkE7QUh0dEJBO0NBQUEsYUFBQTtBR3l0QkE7QUh6dEJBO0NBQUEsY0FBQTtBRzR0QkE7QUg1dEJBO0NBQUEsY0FBQTtBRyt0QkE7QUgvdEJBO0NBQUEsV0FBQTtBR2t1QkE7QUhsdUJBO0NBQUEsV0FBQTtBR3F1QkE7QUhydUJBO0NBQUEsV0FBQTtBR3d1QkE7QUh4dUJBO0NBQUEsY0FBQTtBRzJ1QkE7QUgzdUJBO0NBQUEsYUFBQTtBRzh1QkE7QUg5dUJBO0NBQUEsYUFBQTtBR2l2QkE7QUhqdkJBO0NBQUEsY0FBQTtBR292QkE7QUhwdkJBO0NBQUEsZ0JBQUE7QUd1dkJBO0FIdnZCQTtDQUFBLGdCQUFBO0FHMHZCQTtBSDF2QkE7Q0FBQSxnQkFBQTtBRzZ2QkE7QUg3dkJBO0NB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QUFBLGdCQUFBO0NHbXdEQzs7Q0hud0REO0VBQUEsaUJBQUE7RUFBQSxvQkFBQTtDR3d3REM7O0NIeHdERDtFQUFBLGdCQUFBO0VBQUEsbUJBQUE7Q0c2d0RDOztDSDd3REQ7RUFBQSxrQkFBQTtFQUFBLG1CQUFBO0NHa3hEQztBQUNEOztBSG54REE7O0NBQUE7RUFBQSxZQUFBO0NHeXhEQztBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltudWxsLFwiLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXHJcXG5cXHJcXG4vKlxcclxcbkRvY3VtZW50XFxyXFxuPT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXHJcXG4qL1xcclxcblxcclxcbiosXFxyXFxuOjpiZWZvcmUsXFxyXFxuOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0LW1vei10YWItc2l6ZTogNDtcXHJcXG5cXHR0YWItc2l6ZTogNDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5TZWN0aW9uc1xcclxcbj09PT09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKipcXHJcXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxyXFxuKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTpcXHJcXG5cXHRcXHRzeXN0ZW0tdWksXFxyXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxyXFxuXFx0XFx0J1NlZ29lIFVJJyxcXHJcXG5cXHRcXHRSb2JvdG8sXFxyXFxuXFx0XFx0SGVsdmV0aWNhLFxcclxcblxcdFxcdEFyaWFsLFxcclxcblxcdFxcdHNhbnMtc2VyaWYsXFxyXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXHJcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkdyb3VwaW5nIGNvbnRlbnRcXHJcXG49PT09PT09PT09PT09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxyXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxyXFxuKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcclxcbj09PT09PT09PT09PT09PT09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKipcXHJcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmFiYnJbdGl0bGVdIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5iLFxcclxcbnN0cm9uZyB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXHJcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wLFxcclxcbnByZSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6XFxyXFxuXFx0XFx0dWktbW9ub3NwYWNlLFxcclxcblxcdFxcdFNGTW9uby1SZWd1bGFyLFxcclxcblxcdFxcdENvbnNvbGFzLFxcclxcblxcdFxcdCdMaWJlcmF0aW9uIE1vbm8nLFxcclxcblxcdFxcdE1lbmxvLFxcclxcblxcdFxcdG1vbm9zcGFjZTsgLyogMSAqL1xcclxcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuc21hbGwge1xcclxcblxcdGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuXFx0Zm9udC1zaXplOiA3NSU7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuXFxyXFxuc3ViIHtcXHJcXG5cXHRib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbnN1cCB7XFxyXFxuXFx0dG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuVGFidWxhciBkYXRhXFxyXFxuPT09PT09PT09PT09XFxyXFxuKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcclxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXHJcXG4qL1xcclxcblxcclxcbnRhYmxlIHtcXHJcXG5cXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcclxcblxcdGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkZvcm1zXFxyXFxuPT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qKlxcclxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcclxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXHJcXG5cXHRtYXJnaW46IDA7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcclxcbjEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXHJcXG4qL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3QgeyAvKiAxICovXFxyXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbkNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3R5cGU9J2J1dHRvbiddLFxcclxcblt0eXBlPSdyZXNldCddLFxcclxcblt0eXBlPSdzdWJtaXQnXSB7XFxyXFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5SZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxyXFxuKi9cXHJcXG5cXHJcXG46LW1vei1mb2N1c3Jpbmcge1xcclxcblxcdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsICc6aW52YWxpZCcgc3R5bGVzIGluIEZpcmVmb3guXFxyXFxuU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczN1xcclxcbiovXFxyXFxuXFxyXFxuOi1tb3otdWktaW52YWxpZCB7XFxyXFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXHJcXG4qL1xcclxcblxcclxcbmxlZ2VuZCB7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxyXFxuKi9cXHJcXG5cXHJcXG5wcm9ncmVzcyB7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcclxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcclxcbiovXFxyXFxuXFxyXFxuW3R5cGU9J3NlYXJjaCddIHtcXHJcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcclxcblxcdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcclxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gJ2luaGVyaXQnIGluIFNhZmFyaS5cXHJcXG4qL1xcclxcblxcclxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcclxcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxyXFxuXFx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkludGVyYWN0aXZlXFxyXFxuPT09PT09PT09PT1cXHJcXG4qL1xcclxcblxcclxcbi8qXFxyXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxyXFxuKi9cXHJcXG5cXHJcXG5zdW1tYXJ5IHtcXHJcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxyXFxufVxcclxcblwiLFwiLyoqXFxyXFxuICogTWFudWFsbHkgZm9ya2VkIGZyb20gU1VJVCBDU1MgQmFzZTogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZVxcclxcbiAqIEEgdGhpbiBsYXllciBvbiB0b3Agb2Ygbm9ybWFsaXplLmNzcyB0aGF0IHByb3ZpZGVzIGEgc3RhcnRpbmcgcG9pbnQgbW9yZVxcclxcbiAqIHN1aXRhYmxlIGZvciB3ZWIgYXBwbGljYXRpb25zLlxcclxcbiAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ibG9ja3F1b3RlLFxcclxcbmRsLFxcclxcbmRkLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2LFxcclxcbmhyLFxcclxcbmZpZ3VyZSxcXHJcXG5wLFxcclxcbnByZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFdvcmsgYXJvdW5kIGEgRmlyZWZveC9JRSBidWcgd2hlcmUgdGhlIHRyYW5zcGFyZW50IGBidXR0b25gIGJhY2tncm91bmRcXHJcXG4gKiByZXN1bHRzIGluIGEgbG9zcyBvZiB0aGUgZGVmYXVsdCBgYnV0dG9uYCBmb2N1cyBzdHlsZXMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XFxyXFxuICBvdXRsaW5lOiA1cHggYXV0byAtd2Via2l0LWZvY3VzLXJpbmctY29sb3I7XFxyXFxufVxcclxcblxcclxcbmZpZWxkc2V0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbm9sLFxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBUYWlsd2luZCBjdXN0b20gcmVzZXQgc3R5bGVzXFxyXFxuICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgKHdpdGggVGFpbHdpbmQncyBkZWZhdWx0XFxyXFxuICogICAgc2Fucy1zZXJpZiBmb250IHN0YWNrIGFzIGEgZmFsbGJhY2spIGFzIGEgc2FuZSBkZWZhdWx0LlxcclxcbiAqIDIuIFVzZSBUYWlsd2luZCdzIGRlZmF1bHQgXFxcIm5vcm1hbFxcXCIgbGluZS1oZWlnaHQgc28gdGhlIHVzZXIgaXNuJ3QgZm9yY2VkXFxyXFxuICogICAgdG8gb3ZlcnJpZGUgaXQgdG8gZW5zdXJlIGNvbnNpc3RlbmN5IGV2ZW4gd2hlbiB1c2luZyB0aGUgZGVmYXVsdCB0aGVtZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5zYW5zJywgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiKTsgLyogMSAqL1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBJbmhlcml0IGZvbnQtZmFtaWx5IGFuZCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXNcXHJcXG4gKiBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguXFxyXFxuICpcXHJcXG4gKiAgICBXZSB1c2VkIHRvIHNldCB0aGlzIGluIHRoZSBodG1sIGVsZW1lbnQgYW5kIGluaGVyaXQgZnJvbVxcclxcbiAqICAgIHRoZSBwYXJlbnQgZWxlbWVudCBmb3IgZXZlcnl0aGluZyBlbHNlLiBUaGlzIGNhdXNlZCBpc3N1ZXNcXHJcXG4gKiAgICBpbiBzaGFkb3ctZG9tLWVuaGFuY2VkIGVsZW1lbnRzIGxpa2UgPGRldGFpbHM+IHdoZXJlIHRoZSBjb250ZW50XFxyXFxuICogICAgaXMgd3JhcHBlZCBieSBhIGRpdiB3aXRoIGJveC1zaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAuXFxyXFxuICpcXHJcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzRcXHJcXG4gKlxcclxcbiAqXFxyXFxuICogMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguXFxyXFxuICpcXHJcXG4gKiAgICBCeSBkZWZhdWx0LCB0aGUgd2F5IHRoZSBicm93c2VyIHNwZWNpZmllcyB0aGF0IGFuIGVsZW1lbnQgc2hvdWxkIGhhdmUgbm9cXHJcXG4gKiAgICBib3JkZXIgaXMgYnkgc2V0dGluZyBpdCdzIGJvcmRlci1zdHlsZSB0byBgbm9uZWAgaW4gdGhlIHVzZXItYWdlbnRcXHJcXG4gKiAgICBzdHlsZXNoZWV0LlxcclxcbiAqXFxyXFxuICogICAgSW4gb3JkZXIgdG8gZWFzaWx5IGFkZCBib3JkZXJzIHRvIGVsZW1lbnRzIGJ5IGp1c3Qgc2V0dGluZyB0aGUgYGJvcmRlci13aWR0aGBcXHJcXG4gKiAgICBwcm9wZXJ0eSwgd2UgY2hhbmdlIHRoZSBkZWZhdWx0IGJvcmRlci1zdHlsZSBmb3IgYWxsIGVsZW1lbnRzIHRvIGBzb2xpZGAsIGFuZFxcclxcbiAqICAgIHVzZSBib3JkZXItd2lkdGggdG8gaGlkZSB0aGVtIGluc3RlYWQuIFRoaXMgd2F5IG91ciBgYm9yZGVyYCB1dGlsaXRpZXMgb25seVxcclxcbiAqICAgIG5lZWQgdG8gc2V0IHRoZSBgYm9yZGVyLXdpZHRoYCBwcm9wZXJ0eSBpbnN0ZWFkIG9mIHRoZSBlbnRpcmUgYGJvcmRlcmBcXHJcXG4gKiAgICBzaG9ydGhhbmQsIG1ha2luZyBvdXIgYm9yZGVyIHV0aWxpdGllcyBtdWNoIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGNvbXBvc2UuXFxyXFxuICpcXHJcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTZcXHJcXG4gKi9cXHJcXG5cXHJcXG4qLFxcclxcbjo6YmVmb3JlLFxcclxcbjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxyXFxuICBib3JkZXItY29sb3I6IHRoZW1lKCdib3JkZXJDb2xvci5ERUZBVUxUJywgY3VycmVudENvbG9yKTsgLyogMiAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXHJcXG4gKi9cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXHJcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcclxcbiAqXFxyXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxyXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxyXFxuICpcXHJcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcclxcbiAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IHZlcnRpY2FsO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxyXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBjb2xvcjogdGhlbWUoJ2NvbG9ycy5ncmF5LjQwMCcsICNhMWExYWEpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24sXFxyXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mXFxyXFxuICogb3B0LW91dC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZXNldCBmb3JtIGVsZW1lbnQgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIGZvcmdldCB0b1xcclxcbiAqIHN0eWxlIGV4cGxpY2l0bHkgc28geW91IGRvbid0IGluYWR2ZXJ0ZW50bHkgaW50cm9kdWNlXFxyXFxuICogc3R5bGVzIHRoYXQgZGV2aWF0ZSBmcm9tIHlvdXIgZGVzaWduIHN5c3RlbS4gVGhlc2Ugc3R5bGVzXFxyXFxuICogc3VwcGxlbWVudCBhIHBhcnRpYWwgcmVzZXQgdGhhdCBpcyBhbHJlYWR5IGFwcGxpZWQgYnlcXHJcXG4gKiBub3JtYWxpemUuY3NzLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFVzZSB0aGUgY29uZmlndXJlZCAnbW9ubycgZm9udCBmYW1pbHkgZm9yIGVsZW1lbnRzIHRoYXRcXHJcXG4gKiBhcmUgZXhwZWN0ZWQgdG8gYmUgcmVuZGVyZWQgd2l0aCBhIG1vbm9zcGFjZSBmb250LCBmYWxsaW5nXFxyXFxuICogYmFjayB0byB0aGUgc3lzdGVtIG1vbm9zcGFjZSBzdGFjayBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkXFxyXFxuICogJ21vbm8nIGZvbnQgZmFtaWx5LlxcclxcbiAqL1xcclxcblxcclxcbnByZSxcXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5zYW1wIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5tb25vJywgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2UpO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdCBhcyB0aGF0J3NcXHJcXG4gKiB0aGUgYmVoYXZpb3IgeW91IHdhbnQgYWxtb3N0IGFsbCBvZiB0aGUgdGltZS4gSW5zcGlyZWQgYnlcXHJcXG4gKiBDU1MgUmVtZWR5LCB3aXRoIGBzdmdgIGFkZGVkIGFzIHdlbGwuXFxyXFxuICpcXHJcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxyXFxuICovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnN2ZyxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuYXVkaW8sXFxyXFxuaWZyYW1lLFxcclxcbmVtYmVkLFxcclxcbm9iamVjdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZVxcclxcbiAqIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uXFxyXFxuICpcXHJcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0XFxyXFxuICovXFxyXFxuXFxyXFxuaW1nLFxcclxcbnZpZGVvIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXCIsXCJAdGFpbHdpbmQgYmFzZTtcXHJcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXHJcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgbWluLXdpZHRoOiAzNjBweDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG4jX19uZXh0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5zdGlja3ktbmF2IHtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICB6LWluZGV4OiA1MDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KSAhaW1wb3J0YW50O1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjEgZWFzZS1pbi1vdXQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAuNzVlbTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xcclxcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigzMywgMzQsIDM0KTtcXHJcXG59XFxyXFxuXFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4MWNlNTtcXHJcXG4gIGNvbG9yOiAjZmVmZWZlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQnKVxuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9