(function() {
var exports = {};
exports.id = "pages/dashboardu";
exports.ids = ["pages/dashboardu"];
exports.modules = {

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ "next-themes");
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\geeks-v2\\components\\Sidebar.js";




function Sidebar() {
  const {
    0: navbarOpen,
    1: setNavbarOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: mounted,
    1: setMounted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    theme,
    setTheme
  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)(); // When mounted on client, now we can show the UI

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => setMounted(true), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("aside", {
      id: "default-sidebar",
      className: "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 justify-items-center",
      "aria-label": "Sidebar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "space-y-2 font-medium",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                "aria-hidden": "true",
                className: "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 245
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 299
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 16
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "ml-3",
                children: "Dashboard"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 16
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 10
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                "aria-hidden": "true",
                className: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 259
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 16
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "flex-1 ml-3 whitespace-nowrap",
                children: "Kanban"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 16
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300",
                children: "Pro"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 16
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 10
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                "aria-hidden": "true",
                className: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 259
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 397
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 16
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "flex-1 ml-3 whitespace-nowrap",
                children: "Inbox"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 16
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300",
                children: "3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 16
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 10
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                "aria-hidden": "true",
                className: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                  "clip-rule": "evenodd"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 259
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 16
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "flex-1 ml-3 whitespace-nowrap",
                children: "Users"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 16
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 10
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                "aria-hidden": "true",
                className: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  "fill-rule": "evenodd",
                  d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
                  "clip-rule": "evenodd"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 259
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 16
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "flex-1 ml-3 whitespace-nowrap",
                children: "Products"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 16
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 10
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                "aria-hidden": "true",
                className: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  "fill-rule": "evenodd",
                  d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
                  "clip-rule": "evenodd"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 259
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 16
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "flex-1 ml-3 whitespace-nowrap ",
                children: "Sign In"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 16
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 10
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                "aria-hidden": "true",
                className: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  "fill-rule": "evenodd",
                  d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
                  "clip-rule": "evenodd"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 259
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 16
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "flex-1 ml-3 whitespace-nowrap",
                children: "Sign Up"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 16
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 10
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "aria-label": "Toggle Dark Mode",
            type: "button",
            className: "w-10 h-10 p-3 ml-5 mr-0 bg-gray-200 rounded md:ml-0 md:mr-5 dark:bg-gray-800",
            onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
            children: mounted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              stroke: "currentColor",
              className: "w-4 h-4 text-gray-800 dark:text-gray-200",
              children: theme === "dark" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                className: "svg-icon",
                viewBox: "0 0 20 20",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  fill: "none",
                  d: "M10.544 8.717l1.166-.855 1.166.855-.467-1.399 1.012-.778h-1.244l-.467-1.243-.466 1.244H10l1.011.778-.467 1.398zm5.442.855l-.467 1.244h-1.244l1.011.777-.467 1.4 1.167-.855 1.165.855-.466-1.4 1.011-.777h-1.244l-.466-1.244zm-8.979-3.02c0-2.259.795-4.33 2.117-5.955A9.418 9.418 0 00.594 9.98c0 5.207 4.211 9.426 9.406 9.426 2.94 0 5.972-1.354 7.696-3.472-.289.026-.987.044-1.283.044-5.194.001-9.406-4.219-9.406-9.426M10 18.55c-4.715 0-8.551-3.845-8.551-8.57 0-3.783 2.407-6.999 5.842-8.131a10.32 10.32 0 00-1.139 4.703c0 5.368 4.125 9.788 9.365 10.245A9.733 9.733 0 0110 18.55m9.406-16.246h-1.71l-.642-1.71-.642 1.71h-1.71l1.39 1.069-.642 1.924 1.604-1.176 1.604 1.176-.642-1.924 1.39-1.069z"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 10
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 1
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./pages/dashboardu.js":
/*!*****************************!*\
  !*** ./pages/dashboardu.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ dashboardu; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");

var _jsxFileName = "F:\\geeks-v2\\pages\\dashboardu.js";


class dashboardu extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "p-4 sm:ml-64",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grid grid-cols-3 gap-4 mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: "1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: "2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: "3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 10
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-2xl text-gray-400 dark:text-gray-500",
              children: "+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grid grid-cols-2 gap-4 mb-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 10
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-2xl text-gray-400 dark:text-gray-500",
              children: "+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 10
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "grid grid-cols-2 gap-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 10
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "text-2xl text-gray-400 dark:text-gray-500",
                children: "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 10
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-themes");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/dashboardu.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbHV0b25pdW0vLi9jb21wb25lbnRzL1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vcGx1dG9uaXVtLy4vcGFnZXMvZGFzaGJvYXJkdS5qcyIsIndlYnBhY2s6Ly9wbHV0b25pdW0vZXh0ZXJuYWwgXCJuZXh0LXRoZW1lc1wiIiwid2VicGFjazovL3BsdXRvbml1bS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcGx1dG9uaXVtL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiU2lkZWJhciIsIm5hdmJhck9wZW4iLCJzZXROYXZiYXJPcGVuIiwidXNlU3RhdGUiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInRoZW1lIiwic2V0VGhlbWUiLCJ1c2VUaGVtZSIsInVzZUVmZmVjdCIsImRhc2hib2FyZHUiLCJDb21wb25lbnQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUMsU0FBU0EsT0FBVCxHQUFtQjtBQUNoQixRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUNGLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFFRyxTQUFGO0FBQVNDO0FBQVQsTUFBc0JDLHFEQUFRLEVBQXBDLENBSGtCLENBS2xCOztBQUNBQyxrREFBUyxDQUFDLE1BQU1KLFVBQVUsQ0FBQyxJQUFELENBQWpCLEVBQXlCLEVBQXpCLENBQVQ7QUFFQSxzQkFDRTtBQUFBLDJCQUdKO0FBQU8sUUFBRSxFQUFDLGlCQUFWO0FBQTRCLGVBQVMsRUFBQyxvSEFBdEM7QUFBMkosb0JBQVcsU0FBdEs7QUFBQSw2QkFDRztBQUFLLGlCQUFTLEVBQUMsOERBQWY7QUFBQSwrQkFDRztBQUFJLG1CQUFTLEVB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QywyQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREgsZUFJRztBQUFLLHVCQUFTLEVBQUMsMkVBQWY7QUFBQSxxQ0FDRztBQUFHLHlCQUFTLEVBQUMsMkNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpILGVBT0c7QUFBSyx1QkFBUyxFQUFDLDJFQUFmO0FBQUEscUNBQ0c7QUFBRyx5QkFBUyxFQUFDLDJDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQSCxlQVVHO0FBQUssdUJBQVMsRUFBQywyRUFBZjtBQUFBLHFDQUNHO0FBQUcseUJBQVMsRUFBQywyQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFzREQ7O0FBeEQrQyxDOzs7Ozs7Ozs7OztBQ0hsRCx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9kYXNoYm9hcmR1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XHJcblxyXG4gZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICAgIGNvbnN0IFtuYXZiYXJPcGVuLCBzZXROYXZiYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIC8vIFdoZW4gbW91bnRlZCBvbiBjbGllbnQsIG5vdyB3ZSBjYW4gc2hvdyB0aGUgVUlcclxuICB1c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICBcclxuXHJcbjxhc2lkZSBpZD1cImRlZmF1bHQtc2lkZWJhclwiIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB6LTQwIHctNjQgaC1zY3JlZW4gdHJhbnNpdGlvbi10cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LWZ1bGwgc206dHJhbnNsYXRlLXgtMCBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiIGFyaWEtbGFiZWw9XCJTaWRlYmFyXCI+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHB4LTMgcHktNCBvdmVyZmxvdy15LWF1dG8gYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwXCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTIgZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbGcgZGFyazp0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtZ3JheS01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi03NSBkYXJrOnRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOmdyb3VwLWhvdmVyOnRleHQtd2hpdGVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTIgMTBhOCA4IDAgMDE4LTh2OGg4YTggOCAwIDExLTE2IDB6XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTIgMi4yNTJBOC4wMTQgOC4wMTQgMCAwMTE3Ljc0OCA4SDEyVjIuMjUyelwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtM1wiPkRhc2hib2FyZDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICA8L2xpPlxyXG4gICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtZ3JheS05MDAgcm91bmRlZC1sZyBkYXJrOnRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy02IGgtNiB0ZXh0LWdyYXktNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNzUgZGFyazp0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS05MDAgZGFyazpncm91cC1ob3Zlcjp0ZXh0LXdoaXRlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk01IDNhMiAyIDAgMDAtMiAydjJhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg1ek01IDExYTIgMiAwIDAwLTIgMnYyYTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJ2LTJhMiAyIDAgMDAtMi0ySDV6TTExIDVhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMmgtMmEyIDIgMCAwMS0yLTJWNXpNMTEgMTNhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMmgtMmEyIDIgMCAwMS0yLTJ2LTJ6XCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LTEgbWwtMyB3aGl0ZXNwYWNlLW5vd3JhcFwiPkthbmJhbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTIgbWwtMyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS04MDAgYmctZ3JheS0yMDAgcm91bmRlZC1mdWxsIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+UHJvPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWxnIGRhcms6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTYgaC02IHRleHQtZ3JheS01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi03NSBkYXJrOnRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOmdyb3VwLWhvdmVyOnRleHQtd2hpdGVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTguNzA3IDcuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDIgMmExIDEgMCAwMDEuNDE0IDBsMi0yYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDExIDcuNTg2VjNhMSAxIDAgMTAtMiAwdjQuNTg2bC0uMjkzLS4yOTN6XCI+PC9wYXRoPjxwYXRoIGQ9XCJNMyA1YTIgMiAwIDAxMi0yaDFhMSAxIDAgMDEwIDJINXY3aDJsMSAyaDRsMS0yaDJWNWgtMWExIDEgMCAxMTAtMmgxYTIgMiAwIDAxMiAydjEwYTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMlY1elwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleC0xIG1sLTMgd2hpdGVzcGFjZS1ub3dyYXBcIj5JbmJveDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMyBoLTMgcC0zIG1sLTMgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWJsdWUtODAwIGJnLWJsdWUtMTAwIHJvdW5kZWQtZnVsbCBkYXJrOmJnLWJsdWUtOTAwIGRhcms6dGV4dC1ibHVlLTMwMFwiPjM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgPC9saT5cclxuICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHAtMiB0ZXh0LWdyYXktOTAwIHJvdW5kZWQtbGcgZGFyazp0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6aG92ZXI6YmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctNiBoLTYgdGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTc1IGRhcms6dGV4dC1ncmF5LTQwMCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktOTAwIGRhcms6Z3JvdXAtaG92ZXI6dGV4dC13aGl0ZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwIDlhMyAzIDAgMTAwLTYgMyAzIDAgMDAwIDZ6bS03IDlhNyA3IDAgMTExNCAwSDN6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleC0xIG1sLTMgd2hpdGVzcGFjZS1ub3dyYXBcIj5Vc2Vyczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICA8L2xpPlxyXG4gICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtZ3JheS05MDAgcm91bmRlZC1sZyBkYXJrOnRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgdy02IGgtNiB0ZXh0LWdyYXktNTAwIHRyYW5zaXRpb24gZHVyYXRpb24tNzUgZGFyazp0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS05MDAgZGFyazpncm91cC1ob3Zlcjp0ZXh0LXdoaXRlXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMmE0IDQgMCAwMC00IDR2MUg1YTEgMSAwIDAwLS45OTQuODlsLTEgOUExIDEgMCAwMDQgMThoMTJhMSAxIDAgMDAuOTk0LTEuMTFsLTEtOUExIDEgMCAwMDE1IDdoLTFWNmE0IDQgMCAwMC00LTR6bTIgNVY2YTIgMiAwIDEwLTQgMHYxaDR6bS02IDNhMSAxIDAgMTEyIDAgMSAxIDAgMDEtMiAwem03LTFhMSAxIDAgMTAwIDIgMSAxIDAgMDAwLTJ6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleC0xIG1sLTMgd2hpdGVzcGFjZS1ub3dyYXBcIj5Qcm9kdWN0czwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICA8L2xpPlxyXG4gICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0yIHRleHQtZ3JheS05MDAgcm91bmRlZC1sZyBkYXJrOnRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS0xMDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBcIj5cclxuICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctNiBoLTYgdGV4dC1ncmF5LTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTc1IGRhcms6dGV4dC1ncmF5LTQwMCBncm91cC1ob3Zlcjp0ZXh0LWdyYXktOTAwIGRhcms6Z3JvdXAtaG92ZXI6dGV4dC13aGl0ZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTMgM2ExIDEgMCAwMC0xIDF2MTJhMSAxIDAgMTAyIDBWNGExIDEgMCAwMC0xLTF6bTEwLjI5MyA5LjI5M2ExIDEgMCAwMDEuNDE0IDEuNDE0bDMtM2ExIDEgMCAwMDAtMS40MTRsLTMtM2ExIDEgMCAxMC0xLjQxNCAxLjQxNEwxNC41ODYgOUg3YTEgMSAwIDEwMCAyaDcuNTg2bC0xLjI5MyAxLjI5M3pcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LTEgbWwtMyB3aGl0ZXNwYWNlLW5vd3JhcCBcIj5TaWduIEluPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTIgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWxnIGRhcms6dGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTEwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTYgaC02IHRleHQtZ3JheS01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi03NSBkYXJrOnRleHQtZ3JheS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTkwMCBkYXJrOmdyb3VwLWhvdmVyOnRleHQtd2hpdGVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk01IDRhMyAzIDAgMDAtMyAzdjZhMyAzIDAgMDAzIDNoMTBhMyAzIDAgMDAzLTNWN2EzIDMgMCAwMC0zLTNINXptLTEgOXYtMWg1djJINWExIDEgMCAwMS0xLTF6bTcgMWg0YTEgMSAwIDAwMS0xdi0xaC01djJ6bTAtNGg1VjhoLTV2MnpNOSA4SDR2Mmg1Vjh6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD48L3N2Zz5cclxuICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleC0xIG1sLTMgd2hpdGVzcGFjZS1ub3dyYXBcIj5TaWduIFVwPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBEYXJrIE1vZGVcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHAtMyBtbC01IG1yLTAgYmctZ3JheS0yMDAgcm91bmRlZCBtZDptbC0wIG1kOm1yLTUgZGFyazpiZy1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21vdW50ZWQgJiYgKFxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktMjAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhlbWUgPT09IFwiZGFya1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMiAzdjFtMCAxNnYxbTktOWgtMU00IDEySDNtMTUuMzY0IDYuMzY0bC0uNzA3LS43MDdNNi4zNDMgNi4zNDNsLS43MDctLjcwN20xMi43MjggMGwtLjcwNy43MDdNNi4zNDMgMTcuNjU3bC0uNzA3LjcwN00xNiAxMmE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwic3ZnLWljb25cIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTAuNTQ0IDguNzE3bDEuMTY2LS44NTUgMS4xNjYuODU1LS40NjctMS4zOTkgMS4wMTItLjc3OGgtMS4yNDRsLS40NjctMS4yNDMtLjQ2NiAxLjI0NEgxMGwxLjAxMS43NzgtLjQ2NyAxLjM5OHptNS40NDIuODU1bC0uNDY3IDEuMjQ0aC0xLjI0NGwxLjAxMS43NzctLjQ2NyAxLjQgMS4xNjctLjg1NSAxLjE2NS44NTUtLjQ2Ni0xLjQgMS4wMTEtLjc3N2gtMS4yNDRsLS40NjYtMS4yNDR6bS04Ljk3OS0zLjAyYzAtMi4yNTkuNzk1LTQuMzMgMi4xMTctNS45NTVBOS40MTggOS40MTggMCAwMC41OTQgOS45OGMwIDUuMjA3IDQuMjExIDkuNDI2IDkuNDA2IDkuNDI2IDIuOTQgMCA1Ljk3Mi0xLjM1NCA3LjY5Ni0zLjQ3Mi0uMjg5LjAyNi0uOTg3LjA0NC0xLjI4My4wNDQtNS4xOTQuMDAxLTkuNDA2LTQuMjE5LTkuNDA2LTkuNDI2TTEwIDE4LjU1Yy00LjcxNSAwLTguNTUxLTMuODQ1LTguNTUxLTguNTcgMC0zLjc4MyAyLjQwNy02Ljk5OSA1Ljg0Mi04LjEzMWExMC4zMiAxMC4zMiAwIDAwLTEuMTM5IDQuNzAzYzAgNS4zNjggNC4xMjUgOS43ODggOS4zNjUgMTAuMjQ1QTkuNzMzIDkuNzMzIDAgMDExMCAxOC41NW05LjQwNi0xNi4yNDZoLTEuNzFsLS42NDItMS43MS0uNjQyIDEuNzFoLTEuNzFsMS4zOSAxLjA2OS0uNjQyIDEuOTI0IDEuNjA0LTEuMTc2IDEuNjA0IDEuMTc2LS42NDItMS45MjQgMS4zOS0xLjA2OXpcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICBcclxuICAgICAgPC91bD5cclxuICAgPC9kaXY+XHJcbjwvYXNpZGU+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGRhc2hib2FyZHUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzbTptbC02NFwiPlxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgYm9yZGVyLWRhc2hlZCByb3VuZGVkLWxnIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNCBtYi00XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC0yNCByb3VuZGVkIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPjE8L3A+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMjQgcm91bmRlZCBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS01MDBcIj4yPC9wPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTI0IHJvdW5kZWQgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+MzwvcD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtNDggbWItNCByb3VuZGVkIGJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPis8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgbWItNFwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYmctZ3JheS01MCBoLTI4IGRhcms6YmctZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS01MDBcIj4rPC9wPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJnLWdyYXktNTAgaC0yOCBkYXJrOmJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+KzwvcD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBiZy1ncmF5LTUwIGgtMjggZGFyazpiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPis8L3A+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYmctZ3JheS01MCBoLTI4IGRhcms6YmctZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS01MDBcIj4rPC9wPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC00OCBtYi00IHJvdW5kZWQgYmctZ3JheS01MCBkYXJrOmJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+KzwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYmctZ3JheS01MCBoLTI4IGRhcms6YmctZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS01MDBcIj4rPC9wPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJnLWdyYXktNTAgaC0yOCBkYXJrOmJnLWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS00MDAgZGFyazp0ZXh0LWdyYXktNTAwXCI+KzwvcD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBiZy1ncmF5LTUwIGgtMjggZGFyazpiZy1ncmF5LTgwMFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktNDAwIGRhcms6dGV4dC1ncmF5LTUwMFwiPis8L3A+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQgYmctZ3JheS01MCBoLTI4IGRhcms6YmctZ3JheS04MDBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS01MDBcIj4rPC9wPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdGhlbWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9