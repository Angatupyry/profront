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
    className: "navbar site-navbar offcanvas-active navbar-expand-lg px-0 py-0",
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
  }, "Log In"), __jsx("a", {
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
  }, "Sign Up")), __jsx(ToggleButton, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlNpdGVIZWFkZXIiLCJzdHlsZWQiLCJoZWFkZXIiLCJkZXZpY2UiLCJsZyIsImRhcmsiLCJ0aGVtZSIsImNvbG9ycyIsIlRvZ2dsZUJ1dHRvbiIsImJ1dHRvbiIsImxpZ2h0U2hhZGUiLCJoZWFkaW5nIiwiSGVhZGVyIiwiZ0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInVzZVN0YXRlIiwic2hvd1Njcm9sbGluZyIsInNldFNob3dTY3JvbGxpbmciLCJzaG93UmV2ZWFsIiwic2V0U2hvd1JldmVhbCIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJwcmV2UG9zIiwiY3VyclBvcyIsInkiLCJiZ0NsYXNzIiwiYWxpZ24iLCJyZXZlYWwiLCJpc0ZsdWlkIiwiZSIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlU2lnbkluTW9kYWwiLCJ2YXJpYW50IiwidG9nZ2xlU2lnblVwTW9kYWwiLCJ2aXNpYmxlT2ZmQ2FudmFzIiwidG9nZ2xlT2ZmQ2FudmFzIiwibWVudUl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVixvQkFXTEMsOENBQU0sQ0FBQ0MsRUFYRixFQXNCSTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLE1BQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLFNBQXNCRCxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsTUFBTixDQUFhRixJQUFoQixHQUF1QixNQUFqRDtBQUFBLENBdEJKLENBQWhCO0tBQU1MLFU7QUEyQk4sSUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FjRTtBQUFHLGFBQVMsRUFBQyx1Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FuUEYsQ0FKRixDQXRCRixDQURGLEVBaVNFLE1BQUMsa0RBQUQ7QUFDRSxRQUFJLEVBQUVPLFFBQVEsQ0FBQ3VCLGdCQURqQjtBQUVFLG1CQUFlLEVBQUV2QixRQUFRLENBQUN3QixlQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyxtREFBRDtBQUFZLGFBQVMsRUFBRUMscURBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQWpTRixDQURGO0FBMFNELENBOVREOztHQUFNMUIsTTtVQUtTVSxrRSxFQUViQyw2RTs7O01BUElYLE07QUErVFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjkyNWRmOGE0NGRmZjdhOGRhYThiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBEcm9wZG93biB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiQG44dGIxdC91c2Utc2Nyb2xsLXBvc2l0aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZVwiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBPZmZjYW52YXMgZnJvbSBcIi4uL09mZmNhbnZhc1wiO1xyXG5pbXBvcnQgTmVzdGVkTWVudSBmcm9tIFwiLi4vTmVzdGVkTWVudVwiO1xyXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL0xvZ29cIjtcclxuaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSBcIi4vbWVudUl0ZW1zXCI7XHJcblxyXG5pbXBvcnQgaW1nUCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL2hlYWRlci1wcm9maWxlLnBuZ1wiO1xyXG5cclxuY29uc3QgU2l0ZUhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBAbWVkaWEgJHtkZXZpY2UubGd9IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgICYuc2Nyb2xsaW5nIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgIH1cclxuICAgICYucmV2ZWFsLWhlYWRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAzNHB4IC0xMXB4IHJnYmEoNjUsIDYyLCAxMDEsIDAuMSk7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgZGFyaywgdGhlbWUgfSkgPT4gKGRhcmsgPyB0aGVtZS5jb2xvcnMuZGFyayA6IFwiI2ZmZlwiKX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVG9nZ2xlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjb2xvcjogJHsoeyBkYXJrLCB0aGVtZSB9KSA9PlxyXG4gICAgZGFyayA/IHRoZW1lLmNvbG9ycy5saWdodFNoYWRlIDogdGhlbWUuY29sb3JzLmhlYWRpbmd9IWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICR7KHsgZGFyaywgdGhlbWUgfSkgPT5cclxuICAgIGRhcmsgPyB0aGVtZS5jb2xvcnMubGlnaHRTaGFkZSA6IHRoZW1lLmNvbG9ycy5oZWFkaW5nfSFpbXBvcnRhbnQ7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ0NvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIGNvbnN0IFtzaG93U2Nyb2xsaW5nLCBzZXRTaG93U2Nyb2xsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1JldmVhbCwgc2V0U2hvd1JldmVhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG4gIHVzZVNjcm9sbFBvc2l0aW9uKCh7IHByZXZQb3MsIGN1cnJQb3MgfSkgPT4ge1xyXG4gICAgaWYgKGN1cnJQb3MueSA8IDApIHtcclxuICAgICAgc2V0U2hvd1Njcm9sbGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJQb3MueSA8IC0zMDApIHtcclxuICAgICAgc2V0U2hvd1JldmVhbCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dSZXZlYWwoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNpdGVIZWFkZXJcclxuICAgICAgICBjbGFzc05hbWU9e2BzaXRlLWhlYWRlciBzaXRlLWhlYWRlci0tc3RpY2t5ICBzaXRlLWhlYWRlci0tYWJzb2x1dGUgcHktNyBweS14cy0wIHN0aWNreS1oZWFkZXIgJHtcclxuICAgICAgICAgIGdDb250ZXh0LmhlYWRlci5iZ0NsYXNzXHJcbiAgICAgICAgfSAke1xyXG4gICAgICAgICAgZ0NvbnRleHQuaGVhZGVyLmFsaWduID09PSBcImxlZnRcIlxyXG4gICAgICAgICAgICA/IFwic2l0ZS1oZWFkZXItLW1lbnUtbGVmdCBcIlxyXG4gICAgICAgICAgICA6IGdDb250ZXh0LmhlYWRlci5hbGlnbiA9PT0gXCJyaWdodFwiXHJcbiAgICAgICAgICAgID8gXCJzaXRlLWhlYWRlci0tbWVudS1yaWdodCBcIlxyXG4gICAgICAgICAgICA6IFwic2l0ZS1oZWFkZXItLW1lbnUtY2VudGVyIFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgICR7Z0NvbnRleHQuaGVhZGVyLnRoZW1lID09PSBcImRhcmtcIiA/IFwiZGFyay1tb2RlLXRleHRzXCIgOiBcIiBcIn0gJHtcclxuICAgICAgICAgIHNob3dTY3JvbGxpbmcgPyBcInNjcm9sbGluZ1wiIDogXCJcIlxyXG4gICAgICAgIH0gJHtcclxuICAgICAgICAgIGdDb250ZXh0LmhlYWRlci5yZXZlYWwgJiZcclxuICAgICAgICAgIHNob3dSZXZlYWwgJiZcclxuICAgICAgICAgIGdDb250ZXh0LmhlYWRlci50aGVtZSA9PT0gXCJkYXJrXCJcclxuICAgICAgICAgICAgPyBcInJldmVhbC1oZWFkZXIgYmctYmxhY2tpc2gtYmx1ZVwiXHJcbiAgICAgICAgICAgIDogZ0NvbnRleHQuaGVhZGVyLnJldmVhbCAmJiBzaG93UmV2ZWFsXHJcbiAgICAgICAgICAgID8gXCJyZXZlYWwtaGVhZGVyXCJcclxuICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICBmbHVpZD17Z0NvbnRleHQuaGVhZGVyLmlzRmx1aWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2dDb250ZXh0LmhlYWRlci5pc0ZsdWlkID8gXCJwci1sZy05IHBsLWxnLTlcIiA6IFwiXCJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgc2l0ZS1uYXZiYXIgb2ZmY2FudmFzLWFjdGl2ZSBuYXZiYXItZXhwYW5kLWxnIHB4LTAgcHktMFwiPlxyXG4gICAgICAgICAgICB7LyogPCEtLSBCcmFuZCBMb2dvLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5cclxuICAgICAgICAgICAgICA8TG9nbyB3aGl0ZT17Z0NvbnRleHQuaGVhZGVyLnRoZW1lID09PSBcImRhcmtcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtYWluLW1lbnUgZC1ub25lIGQtbGctZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsLCBpc0V4dGVybmFsID0gZmFsc2UsIG5hbWUsIGl0ZW1zLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzU3ViSXRlbXMgPSBBcnJheS5pc0FycmF5KGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e25hbWUgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc1N1Ykl0ZW1zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCIgey4uLnJlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBnci10b2dnbGUtYXJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc21hbGwtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3ItbWVudS1kcm9wZG93biBkcm9wZG93bi1tZW51IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKHN1Ykl0ZW0sIGluZGV4U3ViKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNJbm5lclN1Ykl0ZW1zID0gQXJyYXkuaXNBcnJheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViSXRlbS5pdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViSXRlbS5uYW1lICsgaW5kZXhTdWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzSW5uZXJTdWJJdGVtcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZSBnci10b2dnbGUtYXJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zbWFsbC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJnci1tZW51LWRyb3Bkb3duIGRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLml0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtSW5uZXIsIGluZGV4SW5uZXJNb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3AtbWVudS1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlubmVyLm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhJbm5lck1vc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbUlubmVyLmlzRXh0ZXJuYWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtpdGVtSW5uZXIubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1Jbm5lci5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2l0ZW1Jbm5lci5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtSW5uZXIubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5pc0V4dGVybmFsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtzdWJJdGVtLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3N1Ykl0ZW0ubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzdWJJdGVtLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgey4uLnJlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNFeHRlcm5hbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uID09PSBcImN0YVwiICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idG4gbWwtYXV0byBtbC1sZy0wIG1yLTYgbXItbGctMCBkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGJ0biBidG4tJHtnQ29udGV4dC5oZWFkZXIudmFyaWFudH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z0NvbnRleHQuaGVhZGVyLmJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX0gKi99XHJcblxyXG4gICAgICAgICAgICB7Lyoge2dDb250ZXh0LmhlYWRlci5idXR0b24gPT09IFwicHJvZmlsZVwiICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idG4tZGV2aWRlciBtbC1hdXRvIG1sLWxnLTUgcGwtMiBkLW5vbmUgZC14cy1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtMyBtbC03IGZvbnQtc2l6ZS03IG5vdGlmaWNhdGlvbi1ibG9jayBmbGV4LXktY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmVsbCBoZWFkaW5nLWRlZmF1bHQtY29sb3JcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtMyBjb3VudCBmb250LXdlaWdodC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgY2lyY2xlLTI0IGJvcmRlciBib3JkZXItd2lkdGgtMyBib3JkZXIgYm9yZGVyLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGNsYXNzTmFtZT1cInNob3ctZ3ItZHJvcGRvd24gcHktNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGVcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9pbGUgbWVkaWEgbWwtNyBmbGV4LXktY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS00MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93biBoZWFkaW5nLWRlZmF1bHQtY29sb3IgbWwtNlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICB7c2l6ZS53aWR0aCA8PSA5OTEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnci1tZW51LWRyb3Bkb3duIGJvcmRlci0wIGJvcmRlci13aWR0aC0yIHB5LTIgdy1hdXRvIGJnLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBweS0yIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBweS0yIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIiBkcm9wZG93bi1pdGVtIHB5LTIgdGV4dC1yZWQgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBnci1tZW51LWRyb3Bkb3duIGRyb3Bkb3duLXJpZ2h0IGJvcmRlci0wIGJvcmRlci13aWR0aC0yIHB5LTIgdy1hdXRvIGJnLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBweS0yIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBweS0yIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIiBkcm9wZG93bi1pdGVtIHB5LTIgdGV4dC1yZWQgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9ICovfVxyXG5cclxuICAgICAgICAgICAge2dDb250ZXh0LmhlYWRlci5idXR0b24gPT09IFwiYWNjb3VudFwiICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idG5zIGhlYWRlci1idG4tZGV2aWRlciBtbC1hdXRvIHByLTIgbWwtbGctNiBkLW5vbmUgZC14cy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXRyYW5zcGFyZW50IHRleHQtdXBwZXJjYXNlIGZvbnQtc2l6ZS0zIGhlYWRpbmctZGVmYXVsdC1jb2xvciBmb2N1cy1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdDb250ZXh0LnRvZ2dsZVNpZ25Jbk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZyBJblxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi0ke2dDb250ZXh0LmhlYWRlci52YXJpYW50fSB0ZXh0LXVwcGVyY2FzZSBmb250LXNpemUtM2B9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdDb250ZXh0LnRvZ2dsZVNpZ25VcE1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXZiYXItdG9nZ2xlciBidG4tY2xvc2Utb2ZmLWNhbnZhcyBtbC0zICR7XHJcbiAgICAgICAgICAgICAgICBnQ29udGV4dC52aXNpYmxlT2ZmQ2FudmFzID8gXCJjb2xsYXBzZWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2JpbGUtbWVudVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1tZW51XCJcclxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Z0NvbnRleHQudG9nZ2xlT2ZmQ2FudmFzfVxyXG4gICAgICAgICAgICAgIGRhcms9e2dDb250ZXh0LmhlYWRlci50aGVtZSA9PT0gXCJkYXJrXCIgPyAxIDogMH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2ltcGxlLXJlbW92ZSBpY29uLWNsb3NlXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudS0zNCBpY29uLWJ1cmdlciBkLWJsb2NrXCI+PC9pPlxyXG4gICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L1NpdGVIZWFkZXI+XHJcbiAgICAgIDxPZmZjYW52YXNcclxuICAgICAgICBzaG93PXtnQ29udGV4dC52aXNpYmxlT2ZmQ2FudmFzfVxyXG4gICAgICAgIG9uSGlkZU9mZmNhbnZhcz17Z0NvbnRleHQudG9nZ2xlT2ZmQ2FudmFzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE5lc3RlZE1lbnUgbWVudUl0ZW1zPXttZW51SXRlbXN9IC8+XHJcbiAgICAgIDwvT2ZmY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9