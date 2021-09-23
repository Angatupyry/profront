webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @n8tb1t/use-scroll-position */ "./node_modules/@n8tb1t/use-scroll-position/lib/index.js");
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./src/hooks/useWindowSize.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _Offcanvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Offcanvas */ "./src/components/Offcanvas/index.js");
/* harmony import */ var _NestedMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../NestedMenu */ "./src/components/NestedMenu/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menuItems */ "./src/components/Header/menuItems.js");
/* harmony import */ var _assets_image_header_profile_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/image/header-profile.png */ "./src/assets/image/header-profile.png");
/* harmony import */ var _assets_image_header_profile_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_header_profile_png__WEBPACK_IMPORTED_MODULE_13__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Header\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: ", "!important;\n  border-color: ", "!important;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .dropdown-toggle::after {\n    opacity: 0;\n  }\n\n  padding: 10px 0 10px 0;\n  position: absolute !important;\n  top: 0;\n  right: 0;\n  width: 100%;\n  z-index: 999;\n  @media ", " {\n    position: fixed !important;\n    transition: 0.6s;\n    &.scrolling {\n      transform: translateY(-100%);\n      transition: 0.6s;\n    }\n    &.reveal-header {\n      transform: translateY(0%);\n      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);\n      z-index: 9999;\n      background: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














var SiteHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header(_templateObject(), _utils__WEBPACK_IMPORTED_MODULE_10__["device"].lg, function (_ref) {
  var dark = _ref.dark,
      theme = _ref.theme;
  return dark ? theme.colors.dark : "#fff";
});
_c = SiteHeader;
var ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject2(), function (_ref2) {
  var dark = _ref2.dark,
      theme = _ref2.theme;
  return dark ? theme.colors.lightShade : theme.colors.heading;
}, function (_ref3) {
  var dark = _ref3.dark,
      theme = _ref3.theme;
  return dark ? theme.colors.lightShade : theme.colors.heading;
});
_c2 = ToggleButton;

var Header = function Header() {
  _s();

  var gContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_7__["default"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showScrolling = _useState[0],
      setShowScrolling = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showReveal = _useState2[0],
      setShowReveal = _useState2[1];

  var size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["useWindowSize"])();
  Object(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_4__["useScrollPosition"])(function (_ref4) {
    var prevPos = _ref4.prevPos,
        currPos = _ref4.currPos;

    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }

    if (currPos.y < -300) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(SiteHeader, {
    className: "site-header site-header--sticky  site-header--absolute py-7 py-xs-0 sticky-header ".concat(gContext.header.bgClass, " ").concat(gContext.header.align === "left" ? "site-header--menu-left " : gContext.header.align === "right" ? "site-header--menu-right " : "site-header--menu-center ", "\n        ").concat(gContext.header.theme === "dark" ? "dark-mode-texts" : " ", " ").concat(showScrolling ? "scrolling" : "", " ").concat(gContext.header.reveal && showReveal && gContext.header.theme === "dark" ? "reveal-header bg-blackish-blue" : gContext.header.reveal && showReveal ? "reveal-header" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: gContext.header.isFluid,
    className: gContext.header.isFluid ? "pr-lg-9 pl-lg-9" : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "navbar site-navbar offcanvas-active navbar-expand-lg px-0 py-0 space-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "brand-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_11__["default"], {
    white: gContext.header.theme === "dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  })), gContext.header.button === "profile" && __jsx("div", {
    className: "header-btn-devider ml-auto ml-lg-5 pl-2 d-none d-xs-flex align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: "px-3 ml-7 font-size-7 notification-block flex-y-center position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fas fa-bell heading-default-color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "font-size-3 count font-weight-semibold text-white bg-primary circle-24 border border-width-3 border border-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 23
    }
  }, "3")))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    className: "show-gr-dropdown py-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Toggle, {
    as: "a",
    className: "proile media ml-7 flex-y-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "circle-40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: _assets_image_header_profile_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 25
    }
  })), __jsx("i", {
    className: "fas fa-chevron-down heading-default-color ml-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 23
    }
  })), size.width <= 991 ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Dropdown"].Menu, {
    className: "gr-menu-dropdown border-0 border-width-2 py-2 w-auto bg-default",
    key: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 27
    }
  }, "Settings")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 27
    }
  }, "Edit Profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: " dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 27
    }
  }, "Log Out"))) : __jsx("div", {
    className: "dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default",
    key: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 27
    }
  }, "Settings")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 27
    }
  }, "Edit Profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: " dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 27
    }
  }, "Log Out")))))), gContext.header.button === "account" && __jsx("div", {
    className: "header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset",
    href: "/#",
    onClick: function onClick(e) {
      e.preventDefault();
      gContext.toggleSignInModal();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 17
    }
  }, "Iniciar sesi\xF3n"), __jsx("a", {
    className: "btn btn-".concat(gContext.header.variant, " text-uppercase font-size-3"),
    href: "/#",
    onClick: function onClick(e) {
      e.preventDefault();
      gContext.toggleSignUpModal();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }
  }, "Registrarse")), __jsx(ToggleButton, {
    className: "navbar-toggler btn-close-off-canvas ml-3 ".concat(gContext.visibleOffCanvas ? "collapsed" : ""),
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#mobile-menu",
    "aria-controls": "mobile-menu",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    onClick: gContext.toggleOffCanvas,
    dark: gContext.header.theme === "dark" ? 1 : 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "icon icon-menu-34 icon-burger d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 15
    }
  }))))), __jsx(_Offcanvas__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: gContext.visibleOffCanvas,
    onHideOffcanvas: gContext.toggleOffCanvas,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 7
    }
  }, __jsx(_NestedMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
    menuItems: _menuItems__WEBPACK_IMPORTED_MODULE_12__["menuItems"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 9
    }
  })));
};

_s(Header, "aNn3Sl+9OuIVv5gTnfRo+VMazQ4=", false, function () {
  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_6__["useWindowSize"], _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_4__["useScrollPosition"]];
});

_c3 = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c, _c2, _c3;

$RefreshReg$(_c, "SiteHeader");
$RefreshReg$(_c2, "ToggleButton");
$RefreshReg$(_c3, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlNpdGVIZWFkZXIiLCJzdHlsZWQiLCJoZWFkZXIiLCJkZXZpY2UiLCJsZyIsImRhcmsiLCJ0aGVtZSIsImNvbG9ycyIsIlRvZ2dsZUJ1dHRvbiIsImJ1dHRvbiIsImxpZ2h0U2hhZGUiLCJoZWFkaW5nIiwiSGVhZGVyIiwiZ0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInVzZVN0YXRlIiwic2hvd1Njcm9sbGluZyIsInNldFNob3dTY3JvbGxpbmciLCJzaG93UmV2ZWFsIiwic2V0U2hvd1JldmVhbCIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJwcmV2UG9zIiwiY3VyclBvcyIsInkiLCJiZ0NsYXNzIiwiYWxpZ24iLCJyZXZlYWwiLCJpc0ZsdWlkIiwiaW1nUCIsIndpZHRoIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlU2lnbkluTW9kYWwiLCJ2YXJpYW50IiwidG9nZ2xlU2lnblVwTW9kYWwiLCJ2aXNpYmxlT2ZmQ2FudmFzIiwidG9nZ2xlT2ZmQ2FudmFzIiwibWVudUl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVixvQkFXTEMsOENBQU0sQ0FBQ0MsRUFYRixFQXNCSTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLFNBQXNCRCxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsTUFBTixDQUFhRixJQUFoQixHQUF1QixNQUFqRDtBQUFBLENBdEJKLENBQWhCO0tBQU1MLFU7QUEyQk4sSUFBTVEsWUFBWSxHQUFHUCx5REFBTSxDQUFDUSxNQUFWLHFCQUNQO0FBQUEsTUFBR0osSUFBSCxTQUFHQSxJQUFIO0FBQUEsTUFBU0MsS0FBVCxTQUFTQSxLQUFUO0FBQUEsU0FDUEQsSUFBSSxHQUFHQyxLQUFLLENBQUNDLE1BQU4sQ0FBYUcsVUFBaEIsR0FBNkJKLEtBQUssQ0FBQ0MsTUFBTixDQUFhSSxPQUR2QztBQUFBLENBRE8sRUFHQTtBQUFBLE1BQUdOLElBQUgsU0FBR0EsSUFBSDtBQUFBLE1BQVNDLEtBQVQsU0FBU0EsS0FBVDtBQUFBLFNBQ2RELElBQUksR0FBR0MsS0FBSyxDQUFDQyxNQUFOLENBQWFHLFVBQWhCLEdBQTZCSixLQUFLLENBQUNDLE1BQU4sQ0FBYUksT0FEaEM7QUFBQSxDQUhBLENBQWxCO01BQU1ILFk7O0FBT04sSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLDhEQUFELENBQTNCOztBQURtQixrQkFFdUJDLHNEQUFRLENBQUMsS0FBRCxDQUYvQjtBQUFBLE1BRVpDLGFBRlk7QUFBQSxNQUVHQyxnQkFGSDs7QUFBQSxtQkFHaUJGLHNEQUFRLENBQUMsS0FBRCxDQUh6QjtBQUFBLE1BR1pHLFVBSFk7QUFBQSxNQUdBQyxhQUhBOztBQUtuQixNQUFNQyxJQUFJLEdBQUdDLDBFQUFhLEVBQTFCO0FBRUFDLHVGQUFpQixDQUFDLGlCQUEwQjtBQUFBLFFBQXZCQyxPQUF1QixTQUF2QkEsT0FBdUI7QUFBQSxRQUFkQyxPQUFjLFNBQWRBLE9BQWM7O0FBQzFDLFFBQUlBLE9BQU8sQ0FBQ0MsQ0FBUixHQUFZLENBQWhCLEVBQW1CO0FBQ2pCUixzQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLHNCQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDRDs7QUFDRCxRQUFJTyxPQUFPLENBQUNDLENBQVIsR0FBWSxDQUFDLEdBQWpCLEVBQXNCO0FBQ3BCTixtQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEtBRkQsTUFFTztBQUNMQSxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNEO0FBQ0YsR0FYZ0IsQ0FBakI7QUFhQSxTQUNFLG1FQUNFLE1BQUMsVUFBRDtBQUNFLGFBQVMsOEZBQ1BQLFFBQVEsQ0FBQ1gsTUFBVCxDQUFnQnlCLE9BRFQsY0FHUGQsUUFBUSxDQUFDWCxNQUFULENBQWdCMEIsS0FBaEIsS0FBMEIsTUFBMUIsR0FDSSx5QkFESixHQUVJZixRQUFRLENBQUNYLE1BQVQsQ0FBZ0IwQixLQUFoQixLQUEwQixPQUExQixHQUNBLDBCQURBLEdBRUEsMkJBUEcsdUJBU1BmLFFBQVEsQ0FBQ1gsTUFBVCxDQUFnQkksS0FBaEIsS0FBMEIsTUFBMUIsR0FBbUMsaUJBQW5DLEdBQXVELEdBVGhELGNBVVBXLGFBQWEsR0FBRyxXQUFILEdBQWlCLEVBVnZCLGNBWVBKLFFBQVEsQ0FBQ1gsTUFBVCxDQUFnQjJCLE1BQWhCLElBQ0FWLFVBREEsSUFFQU4sUUFBUSxDQUFDWCxNQUFULENBQWdCSSxLQUFoQixLQUEwQixNQUYxQixHQUdJLGdDQUhKLEdBSUlPLFFBQVEsQ0FBQ1gsTUFBVCxDQUFnQjJCLE1BQWhCLElBQTBCVixVQUExQixHQUNBLGVBREEsR0FFQSxFQWxCRyxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FzQkUsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBRU4sUUFBUSxDQUFDWCxNQUFULENBQWdCNEIsT0FEekI7QUFFRSxhQUFTLEVBQUVqQixRQUFRLENBQUNYLE1BQVQsQ0FBZ0I0QixPQUFoQixHQUEwQixpQkFBMUIsR0FBOEMsRUFGM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxFQUFDLDhFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQU0sU0FBSyxFQUFFakIsUUFBUSxDQUFDWCxNQUFULENBQWdCSSxLQUFoQixLQUEwQixNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixFQW1KR08sUUFBUSxDQUFDWCxNQUFULENBQWdCTyxNQUFoQixLQUEyQixTQUEzQixJQUNDO0FBQUssYUFBUyxFQUFDLDZFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQywwRUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsbUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTSxhQUFTLEVBQUMsa0hBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRixDQURGLENBREYsQ0FERixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQVUsYUFBUyxFQUFDLHVCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRCxDQUFVLE1BQVY7QUFDRSxNQUFFLEVBQUMsR0FETDtBQUVFLGFBQVMsRUFBQyxpQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVzQix3RUFBVjtBQUFnQixPQUFHLEVBQUMsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPRTtBQUFHLGFBQVMsRUFBQyxnREFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsQ0FERixFQVVHVixJQUFJLENBQUNXLEtBQUwsSUFBYyxHQUFkLEdBQ0MsTUFBQyx3REFBRCxDQUFVLElBQVY7QUFDRSxhQUFTLEVBQUMsaUVBRFo7QUFFRSxPQUFHLEVBQUMsR0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxvRkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBSkYsRUFTRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG9GQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FURixFQWNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsOEZBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBZEYsQ0FERCxHQXNCQztBQUNFLGFBQVMsRUFBQyw4RkFEWjtBQUVFLE9BQUcsRUFBQyxHQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLG9GQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FKRixFQVNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsb0ZBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQVRGLEVBY0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyw4RkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FkRixDQWhDSixDQURGLENBWEYsQ0FwSkosRUEwTkduQixRQUFRLENBQUNYLE1BQVQsQ0FBZ0JPLE1BQWhCLEtBQTJCLFNBQTNCLElBQ0M7QUFBSyxhQUFTLEVBQUMsc0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGtGQURaO0FBRUUsUUFBSSxFQUFDLElBRlA7QUFHRSxXQUFPLEVBQUUsaUJBQUN3QixDQUFELEVBQU87QUFDZEEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FyQixjQUFRLENBQUNzQixpQkFBVDtBQUNELEtBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQVdFO0FBQ0UsYUFBUyxvQkFBYXRCLFFBQVEsQ0FBQ1gsTUFBVCxDQUFnQmtDLE9BQTdCLGdDQURYO0FBRUUsUUFBSSxFQUFDLElBRlA7QUFHRSxXQUFPLEVBQUUsaUJBQUNILENBQUQsRUFBTztBQUNkQSxPQUFDLENBQUNDLGNBQUY7QUFDQXJCLGNBQVEsQ0FBQ3dCLGlCQUFUO0FBQ0QsS0FOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGLENBM05KLEVBbVBFLE1BQUMsWUFBRDtBQUNFLGFBQVMscURBQ1B4QixRQUFRLENBQUN5QixnQkFBVCxHQUE0QixXQUE1QixHQUEwQyxFQURuQyxDQURYO0FBSUUsUUFBSSxFQUFDLFFBSlA7QUFLRSxtQkFBWSxVQUxkO0FBTUUsbUJBQVksY0FOZDtBQU9FLHFCQUFjLGFBUGhCO0FBUUUscUJBQWMsT0FSaEI7QUFTRSxrQkFBVyxtQkFUYjtBQVVFLFdBQU8sRUFBRXpCLFFBQVEsQ0FBQzBCLGVBVnBCO0FBV0UsUUFBSSxFQUFFMUIsUUFBUSxDQUFDWCxNQUFULENBQWdCSSxLQUFoQixLQUEwQixNQUExQixHQUFtQyxDQUFuQyxHQUF1QyxDQVgvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBY0U7QUFBRyxhQUFTLEVBQUMsdUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBblBGLENBSkYsQ0F0QkYsQ0FERixFQWlTRSxNQUFDLGtEQUFEO0FBQ0UsUUFBSSxFQUFFTyxRQUFRLENBQUN5QixnQkFEakI7QUFFRSxtQkFBZSxFQUFFekIsUUFBUSxDQUFDMEIsZUFGNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsbURBQUQ7QUFBWSxhQUFTLEVBQUVDLHFEQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FqU0YsQ0FERjtBQTBTRCxDQTlURDs7R0FBTTVCLE07VUFLU1Usa0UsRUFFYkMsNkU7OztNQVBJWCxNO0FBK1RTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy40NDBkNThiMzkxNmRhMmY1ODBkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRHJvcGRvd24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZVNjcm9sbFBvc2l0aW9uIH0gZnJvbSBcIkBuOHRiMXQvdXNlLXNjcm9sbC1wb3NpdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemVcIjtcclxuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xyXG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gXCIuLi9PZmZjYW52YXNcIjtcclxuaW1wb3J0IE5lc3RlZE1lbnUgZnJvbSBcIi4uL05lc3RlZE1lbnVcIjtcclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Mb2dvXCI7XHJcbmltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gXCIuL21lbnVJdGVtc1wiO1xyXG5cclxuaW1wb3J0IGltZ1AgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9oZWFkZXItcHJvZmlsZS5wbmdcIjtcclxuXHJcbmNvbnN0IFNpdGVIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICAmLnNjcm9sbGluZyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICB9XHJcbiAgICAmLnJldmVhbC1oZWFkZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDEycHggMzRweCAtMTFweCByZ2JhKDY1LCA2MiwgMTAxLCAwLjEpO1xyXG4gICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+IChkYXJrID8gdGhlbWUuY29sb3JzLmRhcmsgOiBcIiNmZmZcIil9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRvZ2dsZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgY29sb3I6ICR7KHsgZGFyaywgdGhlbWUgfSkgPT5cclxuICAgIGRhcmsgPyB0aGVtZS5jb2xvcnMubGlnaHRTaGFkZSA6IHRoZW1lLmNvbG9ycy5oZWFkaW5nfSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+XHJcbiAgICBkYXJrID8gdGhlbWUuY29sb3JzLmxpZ2h0U2hhZGUgOiB0aGVtZS5jb2xvcnMuaGVhZGluZ30haW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBbc2hvd1Njcm9sbGluZywgc2V0U2hvd1Njcm9sbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dSZXZlYWwsIHNldFNob3dSZXZlYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG5cclxuICB1c2VTY3JvbGxQb3NpdGlvbigoeyBwcmV2UG9zLCBjdXJyUG9zIH0pID0+IHtcclxuICAgIGlmIChjdXJyUG9zLnkgPCAwKSB7XHJcbiAgICAgIHNldFNob3dTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93U2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyUG9zLnkgPCAtMzAwKSB7XHJcbiAgICAgIHNldFNob3dSZXZlYWwodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93UmV2ZWFsKGZhbHNlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTaXRlSGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgc2l0ZS1oZWFkZXIgc2l0ZS1oZWFkZXItLXN0aWNreSAgc2l0ZS1oZWFkZXItLWFic29sdXRlIHB5LTcgcHkteHMtMCBzdGlja3ktaGVhZGVyICR7XHJcbiAgICAgICAgICBnQ29udGV4dC5oZWFkZXIuYmdDbGFzc1xyXG4gICAgICAgIH0gJHtcclxuICAgICAgICAgIGdDb250ZXh0LmhlYWRlci5hbGlnbiA9PT0gXCJsZWZ0XCJcclxuICAgICAgICAgICAgPyBcInNpdGUtaGVhZGVyLS1tZW51LWxlZnQgXCJcclxuICAgICAgICAgICAgOiBnQ29udGV4dC5oZWFkZXIuYWxpZ24gPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgICA/IFwic2l0ZS1oZWFkZXItLW1lbnUtcmlnaHQgXCJcclxuICAgICAgICAgICAgOiBcInNpdGUtaGVhZGVyLS1tZW51LWNlbnRlciBcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAke2dDb250ZXh0LmhlYWRlci50aGVtZSA9PT0gXCJkYXJrXCIgPyBcImRhcmstbW9kZS10ZXh0c1wiIDogXCIgXCJ9ICR7XHJcbiAgICAgICAgICBzaG93U2Nyb2xsaW5nID8gXCJzY3JvbGxpbmdcIiA6IFwiXCJcclxuICAgICAgICB9ICR7XHJcbiAgICAgICAgICBnQ29udGV4dC5oZWFkZXIucmV2ZWFsICYmXHJcbiAgICAgICAgICBzaG93UmV2ZWFsICYmXHJcbiAgICAgICAgICBnQ29udGV4dC5oZWFkZXIudGhlbWUgPT09IFwiZGFya1wiXHJcbiAgICAgICAgICAgID8gXCJyZXZlYWwtaGVhZGVyIGJnLWJsYWNraXNoLWJsdWVcIlxyXG4gICAgICAgICAgICA6IGdDb250ZXh0LmhlYWRlci5yZXZlYWwgJiYgc2hvd1JldmVhbFxyXG4gICAgICAgICAgICA/IFwicmV2ZWFsLWhlYWRlclwiXHJcbiAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgZmx1aWQ9e2dDb250ZXh0LmhlYWRlci5pc0ZsdWlkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtnQ29udGV4dC5oZWFkZXIuaXNGbHVpZCA/IFwicHItbGctOSBwbC1sZy05XCIgOiBcIlwifVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHNpdGUtbmF2YmFyIG9mZmNhbnZhcy1hY3RpdmUgbmF2YmFyLWV4cGFuZC1sZyBweC0wIHB5LTAgc3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICB7LyogPCEtLSBCcmFuZCBMb2dvLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5cclxuICAgICAgICAgICAgICA8TG9nbyB3aGl0ZT17Z0NvbnRleHQuaGVhZGVyLnRoZW1lID09PSBcImRhcmtcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtYWluLW1lbnUgZC1ub25lIGQtbGctZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsLCBpc0V4dGVybmFsID0gZmFsc2UsIG5hbWUsIGl0ZW1zLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzU3ViSXRlbXMgPSBBcnJheS5pc0FycmF5KGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e25hbWUgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc1N1Ykl0ZW1zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCIgey4uLnJlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBnci10b2dnbGUtYXJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc21hbGwtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3ItbWVudS1kcm9wZG93biBkcm9wZG93bi1tZW51IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKHN1Ykl0ZW0sIGluZGV4U3ViKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNJbm5lclN1Ykl0ZW1zID0gQXJyYXkuaXNBcnJheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViSXRlbS5pdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViSXRlbS5uYW1lICsgaW5kZXhTdWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzSW5uZXJTdWJJdGVtcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZSBnci10b2dnbGUtYXJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zbWFsbC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJnci1tZW51LWRyb3Bkb3duIGRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLml0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtSW5uZXIsIGluZGV4SW5uZXJNb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3AtbWVudS1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlubmVyLm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhJbm5lck1vc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbUlubmVyLmlzRXh0ZXJuYWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtpdGVtSW5uZXIubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1Jbm5lci5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2l0ZW1Jbm5lci5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtSW5uZXIubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5pc0V4dGVybmFsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtzdWJJdGVtLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3N1Ykl0ZW0ubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzdWJJdGVtLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgey4uLnJlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNFeHRlcm5hbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uID09PSBcImN0YVwiICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idG4gbWwtYXV0byBtbC1sZy0wIG1yLTYgbXItbGctMCBkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGJ0biBidG4tJHtnQ29udGV4dC5oZWFkZXIudmFyaWFudH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z0NvbnRleHQuaGVhZGVyLmJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX0gKi99XHJcblxyXG4gICAgICAgICAgICB7Z0NvbnRleHQuaGVhZGVyLmJ1dHRvbiA9PT0gXCJwcm9maWxlXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0bi1kZXZpZGVyIG1sLWF1dG8gbWwtbGctNSBwbC0yIGQtbm9uZSBkLXhzLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC0zIG1sLTcgZm9udC1zaXplLTcgbm90aWZpY2F0aW9uLWJsb2NrIGZsZXgteS1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iZWxsIGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGNvdW50IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBjaXJjbGUtMjQgYm9yZGVyIGJvcmRlci13aWR0aC0zIGJvcmRlciBib3JkZXItd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd24gY2xhc3NOYW1lPVwic2hvdy1nci1kcm9wZG93biBweS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2lsZSBtZWRpYSBtbC03IGZsZXgteS1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdQfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duIGhlYWRpbmctZGVmYXVsdC1jb2xvciBtbC02XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaXplLndpZHRoIDw9IDk5MSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyLW1lbnUtZHJvcGRvd24gYm9yZGVyLTAgYm9yZGVyLXdpZHRoLTIgcHktMiB3LWF1dG8gYmctZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHB5LTIgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHB5LTIgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0IFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiIGRyb3Bkb3duLWl0ZW0gcHktMiB0ZXh0LXJlZCBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGdyLW1lbnUtZHJvcGRvd24gZHJvcGRvd24tcmlnaHQgYm9yZGVyLTAgYm9yZGVyLXdpZHRoLTIgcHktMiB3LWF1dG8gYmctZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHB5LTIgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHB5LTIgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0IFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiIGRyb3Bkb3duLWl0ZW0gcHktMiB0ZXh0LXJlZCBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uID09PSBcImFjY291bnRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnRucyBoZWFkZXItYnRuLWRldmlkZXIgbWwtYXV0byBwci0yIG1sLWxnLTYgZC1ub25lIGQteHMtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi10cmFuc3BhcmVudCB0ZXh0LXVwcGVyY2FzZSBmb250LXNpemUtMyBoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9jdXMtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVTaWduSW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBJbmljaWFyIHNlc2nDs25cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tJHtnQ29udGV4dC5oZWFkZXIudmFyaWFudH0gdGV4dC11cHBlcmNhc2UgZm9udC1zaXplLTNgfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVTaWduVXBNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZWdpc3RyYXJzZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci10b2dnbGVyIGJ0bi1jbG9zZS1vZmYtY2FudmFzIG1sLTMgJHtcclxuICAgICAgICAgICAgICAgIGdDb250ZXh0LnZpc2libGVPZmZDYW52YXMgPyBcImNvbGxhcHNlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vYmlsZS1tZW51XCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtnQ29udGV4dC50b2dnbGVPZmZDYW52YXN9XHJcbiAgICAgICAgICAgICAgZGFyaz17Z0NvbnRleHQuaGVhZGVyLnRoZW1lID09PSBcImRhcmtcIiA/IDEgOiAwfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zaW1wbGUtcmVtb3ZlIGljb24tY2xvc2VcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZW51LTM0IGljb24tYnVyZ2VyIGQtYmxvY2tcIj48L2k+XHJcbiAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvU2l0ZUhlYWRlcj5cclxuICAgICAgPE9mZmNhbnZhc1xyXG4gICAgICAgIHNob3c9e2dDb250ZXh0LnZpc2libGVPZmZDYW52YXN9XHJcbiAgICAgICAgb25IaWRlT2ZmY2FudmFzPXtnQ29udGV4dC50b2dnbGVPZmZDYW52YXN9XHJcbiAgICAgID5cclxuICAgICAgICA8TmVzdGVkTWVudSBtZW51SXRlbXM9e21lbnVJdGVtc30gLz5cclxuICAgICAgPC9PZmZjYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=