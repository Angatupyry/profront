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
  })), gContext.header.button === "account" && __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlNpdGVIZWFkZXIiLCJzdHlsZWQiLCJoZWFkZXIiLCJkZXZpY2UiLCJsZyIsImRhcmsiLCJ0aGVtZSIsImNvbG9ycyIsIlRvZ2dsZUJ1dHRvbiIsImJ1dHRvbiIsImxpZ2h0U2hhZGUiLCJoZWFkaW5nIiwiSGVhZGVyIiwiZ0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInVzZVN0YXRlIiwic2hvd1Njcm9sbGluZyIsInNldFNob3dTY3JvbGxpbmciLCJzaG93UmV2ZWFsIiwic2V0U2hvd1JldmVhbCIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJwcmV2UG9zIiwiY3VyclBvcyIsInkiLCJiZ0NsYXNzIiwiYWxpZ24iLCJyZXZlYWwiLCJpc0ZsdWlkIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlU2lnbkluTW9kYWwiLCJ2YXJpYW50IiwidG9nZ2xlU2lnblVwTW9kYWwiLCJ2aXNpYmxlT2ZmQ2FudmFzIiwidG9nZ2xlT2ZmQ2FudmFzIiwibWVudUl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVixvQkFXTEMsOENBQU0sQ0FBQ0MsRUFYRixFQXNCSTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLFNBQXNCRCxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsTUFBTixDQUFhRixJQUFoQixHQUF1QixNQUFqRDtBQUFBLENBdEJKLENBQWhCO0tBQU1MLFU7QUEyQk4sSUFB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L0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWNFO0FBQUcsYUFBUyxFQUFDLHVDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQW5QRixDQUpGLENBdEJGLENBREYsRUFpU0UsTUFBQyxrREFBRDtBQUNFLFFBQUksRUFBRU8sUUFBUSxDQUFDdUIsZ0JBRGpCO0FBRUUsbUJBQWUsRUFBRXZCLFFBQVEsQ0FBQ3dCLGVBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLG1EQUFEO0FBQVksYUFBUyxFQUFFQyxxREFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBalNGLENBREY7QUEwU0QsQ0E5VEQ7O0dBQU0xQixNO1VBS1NVLGtFLEVBRWJDLDZFOzs7TUFQSVgsTTtBQStUU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuN2U3Yjk3NDgwZDQ0NmU4Yjc3NWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIERyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gXCJAbjh0YjF0L3VzZS1zY3JvbGwtcG9zaXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VXaW5kb3dTaXplXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IE9mZmNhbnZhcyBmcm9tIFwiLi4vT2ZmY2FudmFzXCI7XHJcbmltcG9ydCBOZXN0ZWRNZW51IGZyb20gXCIuLi9OZXN0ZWRNZW51XCI7XHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vTG9nb1wiO1xyXG5pbXBvcnQgeyBtZW51SXRlbXMgfSBmcm9tIFwiLi9tZW51SXRlbXNcIjtcclxuXHJcbmltcG9ydCBpbWdQIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvaGVhZGVyLXByb2ZpbGUucG5nXCI7XHJcblxyXG5jb25zdCBTaXRlSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIEBtZWRpYSAke2RldmljZS5sZ30ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgJi5zY3JvbGxpbmcge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgfVxyXG4gICAgJi5yZXZlYWwtaGVhZGVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDM0cHggLTExcHggcmdiYSg2NSwgNjIsIDEwMSwgMC4xKTtcclxuICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgYmFja2dyb3VuZDogJHsoeyBkYXJrLCB0aGVtZSB9KSA9PiAoZGFyayA/IHRoZW1lLmNvbG9ycy5kYXJrIDogXCIjZmZmXCIpfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUb2dnbGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGNvbG9yOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+XHJcbiAgICBkYXJrID8gdGhlbWUuY29sb3JzLmxpZ2h0U2hhZGUgOiB0aGVtZS5jb2xvcnMuaGVhZGluZ30haW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogJHsoeyBkYXJrLCB0aGVtZSB9KSA9PlxyXG4gICAgZGFyayA/IHRoZW1lLmNvbG9ycy5saWdodFNoYWRlIDogdGhlbWUuY29sb3JzLmhlYWRpbmd9IWltcG9ydGFudDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgW3Nob3dTY3JvbGxpbmcsIHNldFNob3dTY3JvbGxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UmV2ZWFsLCBzZXRTaG93UmV2ZWFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgdXNlU2Nyb2xsUG9zaXRpb24oKHsgcHJldlBvcywgY3VyclBvcyB9KSA9PiB7XHJcbiAgICBpZiAoY3VyclBvcy55IDwgMCkge1xyXG4gICAgICBzZXRTaG93U2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd1Njcm9sbGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VyclBvcy55IDwgLTMwMCkge1xyXG4gICAgICBzZXRTaG93UmV2ZWFsKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd1JldmVhbChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2l0ZUhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT17YHNpdGUtaGVhZGVyIHNpdGUtaGVhZGVyLS1zdGlja3kgIHNpdGUtaGVhZGVyLS1hYnNvbHV0ZSBweS03IHB5LXhzLTAgc3RpY2t5LWhlYWRlciAke1xyXG4gICAgICAgICAgZ0NvbnRleHQuaGVhZGVyLmJnQ2xhc3NcclxuICAgICAgICB9ICR7XHJcbiAgICAgICAgICBnQ29udGV4dC5oZWFkZXIuYWxpZ24gPT09IFwibGVmdFwiXHJcbiAgICAgICAgICAgID8gXCJzaXRlLWhlYWRlci0tbWVudS1sZWZ0IFwiXHJcbiAgICAgICAgICAgIDogZ0NvbnRleHQuaGVhZGVyLmFsaWduID09PSBcInJpZ2h0XCJcclxuICAgICAgICAgICAgPyBcInNpdGUtaGVhZGVyLS1tZW51LXJpZ2h0IFwiXHJcbiAgICAgICAgICAgIDogXCJzaXRlLWhlYWRlci0tbWVudS1jZW50ZXIgXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgJHtnQ29udGV4dC5oZWFkZXIudGhlbWUgPT09IFwiZGFya1wiID8gXCJkYXJrLW1vZGUtdGV4dHNcIiA6IFwiIFwifSAke1xyXG4gICAgICAgICAgc2hvd1Njcm9sbGluZyA/IFwic2Nyb2xsaW5nXCIgOiBcIlwiXHJcbiAgICAgICAgfSAke1xyXG4gICAgICAgICAgZ0NvbnRleHQuaGVhZGVyLnJldmVhbCAmJlxyXG4gICAgICAgICAgc2hvd1JldmVhbCAmJlxyXG4gICAgICAgICAgZ0NvbnRleHQuaGVhZGVyLnRoZW1lID09PSBcImRhcmtcIlxyXG4gICAgICAgICAgICA/IFwicmV2ZWFsLWhlYWRlciBiZy1ibGFja2lzaC1ibHVlXCJcclxuICAgICAgICAgICAgOiBnQ29udGV4dC5oZWFkZXIucmV2ZWFsICYmIHNob3dSZXZlYWxcclxuICAgICAgICAgICAgPyBcInJldmVhbC1oZWFkZXJcIlxyXG4gICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIGZsdWlkPXtnQ29udGV4dC5oZWFkZXIuaXNGbHVpZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Z0NvbnRleHQuaGVhZGVyLmlzRmx1aWQgPyBcInByLWxnLTkgcGwtbGctOVwiIDogXCJcIn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBzaXRlLW5hdmJhciBvZmZjYW52YXMtYWN0aXZlIG5hdmJhci1leHBhbmQtbGcgcHgtMCBweS0wIHNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgey8qIDwhLS0gQnJhbmQgTG9nby0tPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgPExvZ28gd2hpdGU9e2dDb250ZXh0LmhlYWRlci50aGVtZSA9PT0gXCJkYXJrXCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1uYXYtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWFpbi1tZW51IGQtbm9uZSBkLWxnLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbCwgaXNFeHRlcm5hbCA9IGZhbHNlLCBuYW1lLCBpdGVtcywgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc1N1Ykl0ZW1zID0gQXJyYXkuaXNBcnJheShpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtuYW1lICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNTdWJJdGVtcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiIHsuLi5yZXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGUgZ3ItdG9nZ2xlLWFycm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNtYWxsLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyLW1lbnUtZHJvcGRvd24gZHJvcGRvd24tbWVudSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChzdWJJdGVtLCBpbmRleFN1YikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzSW5uZXJTdWJJdGVtcyA9IEFycmF5LmlzQXJyYXkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ykl0ZW0uaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Ykl0ZW0ubmFtZSArIGluZGV4U3VifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc0lubmVyU3ViSXRlbXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcC1tZW51LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGUgZ3ItdG9nZ2xlLWFycm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc21hbGwtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3ItbWVudS1kcm9wZG93biBkcm9wZG93bi1tZW51IGRyb3Bkb3duLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5pdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbUlubmVyLCBpbmRleElubmVyTW9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Jbm5lci5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4SW5uZXJNb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1Jbm5lci5pc0V4dGVybmFsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7aXRlbUlubmVyLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtSW5uZXIubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtpdGVtSW5uZXIubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbUlubmVyLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcC1tZW51LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ykl0ZW0uaXNFeHRlcm5hbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7c3ViSXRlbS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ykl0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtzdWJJdGVtLm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57c3ViSXRlbS5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHsuLi5yZXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRXh0ZXJuYWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake25hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7Z0NvbnRleHQuaGVhZGVyLmJ1dHRvbiA9PT0gXCJjdGFcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnRuIG1sLWF1dG8gbWwtbGctMCBtci02IG1yLWxnLTAgZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BidG4gYnRuLSR7Z0NvbnRleHQuaGVhZGVyLnZhcmlhbnR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2dDb250ZXh0LmhlYWRlci5idXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9ICovfVxyXG5cclxuICAgICAgICAgICAgey8qIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uID09PSBcInByb2ZpbGVcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnRuLWRldmlkZXIgbWwtYXV0byBtbC1sZy01IHBsLTIgZC1ub25lIGQteHMtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTMgbWwtNyBmb250LXNpemUtNyBub3RpZmljYXRpb24tYmxvY2sgZmxleC15LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJlbGwgaGVhZGluZy1kZWZhdWx0LWNvbG9yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgY291bnQgZm9udC13ZWlnaHQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IGNpcmNsZS0yNCBib3JkZXIgYm9yZGVyLXdpZHRoLTMgYm9yZGVyIGJvcmRlci13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9XCJzaG93LWdyLWRyb3Bkb3duIHB5LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvaWxlIG1lZGlhIG1sLTcgZmxleC15LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtNDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1B9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd24gaGVhZGluZy1kZWZhdWx0LWNvbG9yIG1sLTZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpemUud2lkdGggPD0gOTkxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3ItbWVudS1kcm9wZG93biBib3JkZXItMCBib3JkZXItd2lkdGgtMiBweS0yIHctYXV0byBiZy1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCIgZHJvcGRvd24taXRlbSBweS0yIHRleHQtcmVkIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZ3ItbWVudS1kcm9wZG93biBkcm9wZG93bi1yaWdodCBib3JkZXItMCBib3JkZXItd2lkdGgtMiBweS0yIHctYXV0byBiZy1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCIgZHJvcGRvd24taXRlbSBweS0yIHRleHQtcmVkIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfSAqL31cclxuXHJcbiAgICAgICAgICAgIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uID09PSBcImFjY291bnRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnRucyBoZWFkZXItYnRuLWRldmlkZXIgbWwtYXV0byBwci0yIG1sLWxnLTYgZC1ub25lIGQteHMtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi10cmFuc3BhcmVudCB0ZXh0LXVwcGVyY2FzZSBmb250LXNpemUtMyBoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9jdXMtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVTaWduSW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBJbmljaWFyIHNlc2nDs25cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tJHtnQ29udGV4dC5oZWFkZXIudmFyaWFudH0gdGV4dC11cHBlcmNhc2UgZm9udC1zaXplLTNgfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVTaWduVXBNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZWdpc3RyYXJzZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci10b2dnbGVyIGJ0bi1jbG9zZS1vZmYtY2FudmFzIG1sLTMgJHtcclxuICAgICAgICAgICAgICAgIGdDb250ZXh0LnZpc2libGVPZmZDYW52YXMgPyBcImNvbGxhcHNlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vYmlsZS1tZW51XCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtnQ29udGV4dC50b2dnbGVPZmZDYW52YXN9XHJcbiAgICAgICAgICAgICAgZGFyaz17Z0NvbnRleHQuaGVhZGVyLnRoZW1lID09PSBcImRhcmtcIiA/IDEgOiAwfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zaW1wbGUtcmVtb3ZlIGljb24tY2xvc2VcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZW51LTM0IGljb24tYnVyZ2VyIGQtYmxvY2tcIj48L2k+XHJcbiAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvU2l0ZUhlYWRlcj5cclxuICAgICAgPE9mZmNhbnZhc1xyXG4gICAgICAgIHNob3c9e2dDb250ZXh0LnZpc2libGVPZmZDYW52YXN9XHJcbiAgICAgICAgb25IaWRlT2ZmY2FudmFzPXtnQ29udGV4dC50b2dnbGVPZmZDYW52YXN9XHJcbiAgICAgID5cclxuICAgICAgICA8TmVzdGVkTWVudSBtZW51SXRlbXM9e21lbnVJdGVtc30gLz5cclxuICAgICAgPC9PZmZjYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=