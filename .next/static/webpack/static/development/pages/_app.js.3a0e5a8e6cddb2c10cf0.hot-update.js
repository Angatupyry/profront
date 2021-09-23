webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @n8tb1t/use-scroll-position */ "./node_modules/@n8tb1t/use-scroll-position/lib/index.js");
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./src/hooks/useWindowSize.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _Offcanvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Offcanvas */ "./src/components/Offcanvas/index.js");
/* harmony import */ var _NestedMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../NestedMenu */ "./src/components/NestedMenu/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menuItems */ "./src/components/Header/menuItems.js");
/* harmony import */ var _assets_image_header_profile_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/image/header-profile.png */ "./src/assets/image/header-profile.png");
/* harmony import */ var _assets_image_header_profile_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_header_profile_png__WEBPACK_IMPORTED_MODULE_15__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Header\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  color: ", "!important;\n  border-color: ", "!important;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  .dropdown-toggle::after {\n    opacity: 0;\n  }\n\n  padding: 10px 0 10px 0;\n  position: absolute !important;\n  top: 0;\n  right: 0;\n  width: 100%;\n  z-index: 999;\n  @media ", " {\n    position: fixed !important;\n    transition: 0.6s;\n    &.scrolling {\n      transform: translateY(-100%);\n      transition: 0.6s;\n    }\n    &.reveal-header {\n      transform: translateY(0%);\n      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);\n      z-index: 9999;\n      background: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














var SiteHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header(_templateObject(), _utils__WEBPACK_IMPORTED_MODULE_12__["device"].lg, function (_ref) {
  var dark = _ref.dark,
      theme = _ref.theme;
  return dark ? theme.colors.dark : "#fff";
});
_c = SiteHeader;
var ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button(_templateObject2(), function (_ref2) {
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

  var gContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showScrolling = _useState[0],
      setShowScrolling = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      showReveal = _useState2[0],
      setShowReveal = _useState2[1];

  var size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__["useWindowSize"])();
  Object(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_6__["useScrollPosition"])(function (_ref4) {
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(SiteHeader, {
    className: "site-header site-header--sticky  site-header--absolute py-7 py-xs-0 sticky-header ".concat(gContext.header.bgClass, " ").concat(gContext.header.align === "left" ? "site-header--menu-left " : gContext.header.align === "right" ? "site-header--menu-right " : "site-header--menu-center ", "\n        ").concat(gContext.header.theme === "dark" ? "dark-mode-texts" : " ", " ").concat(showScrolling ? "scrolling" : "", " ").concat(gContext.header.reveal && showReveal && gContext.header.theme === "dark" ? "reveal-header bg-blackish-blue" : gContext.header.reveal && showReveal ? "reveal-header" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
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
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_13__["default"], {
    white: gContext.header.theme === "dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "navbar-nav-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "navbar-nav main-menu d-none d-lg-flex",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, _menuItems__WEBPACK_IMPORTED_MODULE_14__["menuItems"].map(function (_ref5, index) {
    var label = _ref5.label,
        _ref5$isExternal = _ref5.isExternal,
        isExternal = _ref5$isExternal === void 0 ? false : _ref5$isExternal,
        name = _ref5.name,
        items = _ref5.items,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["label", "isExternal", "name", "items"]);

    var hasSubItems = Array.isArray(items);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      key: name + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 25
      }
    }, hasSubItems ? __jsx("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "nav-item dropdown"
    }, rest, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 29
      }
    }), __jsx("a", {
      className: "nav-link dropdown-toggle gr-toggle-arrow",
      role: "button",
      "data-toggle": "dropdown",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      href: "/#",
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 31
      }
    }, label, __jsx("i", {
      className: "icon icon-small-down",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 33
      }
    })), __jsx("ul", {
      className: "gr-menu-dropdown dropdown-menu ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 31
      }
    }, items.map(function (subItem, indexSub) {
      var hasInnerSubItems = Array.isArray(subItem.items);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
        key: subItem.name + indexSub,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 37
        }
      }, hasInnerSubItems ? __jsx("li", {
        className: "drop-menu-item dropdown",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 41
        }
      }, __jsx("a", {
        className: "dropdown-toggle gr-toggle-arrow",
        role: "button",
        "data-toggle": "dropdown",
        "aria-expanded": "false",
        "aria-haspopup": "true",
        href: "/#",
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 43
        }
      }, subItem.label, __jsx("i", {
        className: "icon icon-small-down",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 45
        }
      })), __jsx("ul", {
        className: "gr-menu-dropdown dropdown-menu dropdown-left",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 43
        }
      }, subItem.items.map(function (itemInner, indexInnerMost) {
        return __jsx("li", {
          className: "drop-menu-item",
          key: itemInner.name + indexInnerMost,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 49
          }
        }, itemInner.isExternal ? __jsx("a", {
          href: "".concat(itemInner.name),
          target: "_blank",
          rel: "noopener noreferrer",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 53
          }
        }, itemInner.label) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/".concat(itemInner.name),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 53
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 55
          }
        }, itemInner.label)));
      }))) : __jsx("li", {
        className: "drop-menu-item",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 41
        }
      }, subItem.isExternal ? __jsx("a", {
        href: "".concat(subItem.name),
        target: "_blank",
        rel: "noopener noreferrer",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 45
        }
      }, subItem.label) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/".concat(subItem.name),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 45
        }
      }, __jsx("a", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 47
        }
      }, subItem.label))));
    }))) : __jsx("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: "nav-item"
    }, rest, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 29
      }
    }), isExternal ? __jsx("a", {
      className: "nav-link",
      href: "".concat(name),
      target: "_blank",
      rel: "noopener noreferrer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 33
      }
    }, label) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/".concat(name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 33
      }
    }, __jsx("a", {
      className: "nav-link",
      role: "button",
      "aria-expanded": "false",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 35
      }
    }, label))));
  })))), gContext.header.button === "cta" && __jsx("div", {
    className: "header-btn ml-auto ml-lg-0 mr-6 mr-lg-0 d-none d-xs-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn btn-".concat(gContext.header.variant),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 19
    }
  }, gContext.header.buttonText))), gContext.header.button === "account" && __jsx("div", {
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
  }))))), __jsx(_Offcanvas__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: gContext.visibleOffCanvas,
    onHideOffcanvas: gContext.toggleOffCanvas,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 7
    }
  }, __jsx(_NestedMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
    menuItems: _menuItems__WEBPACK_IMPORTED_MODULE_14__["menuItems"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 9
    }
  })));
};

_s(Header, "aNn3Sl+9OuIVv5gTnfRo+VMazQ4=", false, function () {
  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__["useWindowSize"], _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_6__["useScrollPosition"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlNpdGVIZWFkZXIiLCJzdHlsZWQiLCJoZWFkZXIiLCJkZXZpY2UiLCJsZyIsImRhcmsiLCJ0aGVtZSIsImNvbG9ycyIsIlRvZ2dsZUJ1dHRvbiIsImJ1dHRvbiIsImxpZ2h0U2hhZGUiLCJoZWFkaW5nIiwiSGVhZGVyIiwiZ0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInVzZVN0YXRlIiwic2hvd1Njcm9sbGluZyIsInNldFNob3dTY3JvbGxpbmciLCJzaG93UmV2ZWFsIiwic2V0U2hvd1JldmVhbCIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJwcmV2UG9zIiwiY3VyclBvcyIsInkiLCJiZ0NsYXNzIiwiYWxpZ24iLCJyZXZlYWwiLCJpc0ZsdWlkIiwibWVudUl0ZW1zIiwibWFwIiwiaW5kZXgiLCJsYWJlbCIsImlzRXh0ZXJuYWwiLCJuYW1lIiwiaXRlbXMiLCJyZXN0IiwiaGFzU3ViSXRlbXMiLCJBcnJheSIsImlzQXJyYXkiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdWJJdGVtIiwiaW5kZXhTdWIiLCJoYXNJbm5lclN1Ykl0ZW1zIiwiaXRlbUlubmVyIiwiaW5kZXhJbm5lck1vc3QiLCJ2YXJpYW50IiwiYnV0dG9uVGV4dCIsInRvZ2dsZVNpZ25Jbk1vZGFsIiwidG9nZ2xlU2lnblVwTW9kYWwiLCJ2aXNpYmxlT2ZmQ2FudmFzIiwidG9nZ2xlT2ZmQ2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLE1BQVYsb0JBV0xD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWNFO0FBQUcsYUFBUyxFQUFDLHVDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQW5QRixDQUpGLENBdEJGLENBREYsRUFpU0UsTUFBQyxtREFBRDtBQUNFLFFBQUksRUFBRU8sUUFBUSxDQUFDd0MsZ0JBRGpCO0FBRUUsbUJBQWUsRUFBRXhDLFFBQVEsQ0FBQ3lDLGVBRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLG9EQUFEO0FBQVksYUFBUyxFQUFFdkIscURBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQWpTRixDQURGO0FBMFNELENBOVREOztHQUFNbkIsTTtVQUtTVSxrRSxFQUViQyw2RTs7O01BUElYLE07QUErVFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjNhMGU1YThlNmNkZGIyYzEwY2YwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBEcm9wZG93biB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlU2Nyb2xsUG9zaXRpb24gfSBmcm9tIFwiQG44dGIxdC91c2Utc2Nyb2xsLXBvc2l0aW9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IHVzZVdpbmRvd1NpemUgfSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZVwiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBPZmZjYW52YXMgZnJvbSBcIi4uL09mZmNhbnZhc1wiO1xyXG5pbXBvcnQgTmVzdGVkTWVudSBmcm9tIFwiLi4vTmVzdGVkTWVudVwiO1xyXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL0xvZ29cIjtcclxuaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSBcIi4vbWVudUl0ZW1zXCI7XHJcblxyXG5pbXBvcnQgaW1nUCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL2hlYWRlci1wcm9maWxlLnBuZ1wiO1xyXG5cclxuY29uc3QgU2l0ZUhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBAbWVkaWEgJHtkZXZpY2UubGd9IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgICYuc2Nyb2xsaW5nIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgIH1cclxuICAgICYucmV2ZWFsLWhlYWRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTJweCAzNHB4IC0xMXB4IHJnYmEoNjUsIDYyLCAxMDEsIDAuMSk7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgZGFyaywgdGhlbWUgfSkgPT4gKGRhcmsgPyB0aGVtZS5jb2xvcnMuZGFyayA6IFwiI2ZmZlwiKX07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVG9nZ2xlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjb2xvcjogJHsoeyBkYXJrLCB0aGVtZSB9KSA9PlxyXG4gICAgZGFyayA/IHRoZW1lLmNvbG9ycy5saWdodFNoYWRlIDogdGhlbWUuY29sb3JzLmhlYWRpbmd9IWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICR7KHsgZGFyaywgdGhlbWUgfSkgPT5cclxuICAgIGRhcmsgPyB0aGVtZS5jb2xvcnMubGlnaHRTaGFkZSA6IHRoZW1lLmNvbG9ycy5oZWFkaW5nfSFpbXBvcnRhbnQ7XHJcbmA7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ0NvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIGNvbnN0IFtzaG93U2Nyb2xsaW5nLCBzZXRTaG93U2Nyb2xsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1JldmVhbCwgc2V0U2hvd1JldmVhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNpemUgPSB1c2VXaW5kb3dTaXplKCk7XHJcblxyXG4gIHVzZVNjcm9sbFBvc2l0aW9uKCh7IHByZXZQb3MsIGN1cnJQb3MgfSkgPT4ge1xyXG4gICAgaWYgKGN1cnJQb3MueSA8IDApIHtcclxuICAgICAgc2V0U2hvd1Njcm9sbGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dTY3JvbGxpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJQb3MueSA8IC0zMDApIHtcclxuICAgICAgc2V0U2hvd1JldmVhbCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNob3dSZXZlYWwoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNpdGVIZWFkZXJcclxuICAgICAgICBjbGFzc05hbWU9e2BzaXRlLWhlYWRlciBzaXRlLWhlYWRlci0tc3RpY2t5ICBzaXRlLWhlYWRlci0tYWJzb2x1dGUgcHktNyBweS14cy0wIHN0aWNreS1oZWFkZXIgJHtcclxuICAgICAgICAgIGdDb250ZXh0LmhlYWRlci5iZ0NsYXNzXHJcbiAgICAgICAgfSAke1xyXG4gICAgICAgICAgZ0NvbnRleHQuaGVhZGVyLmFsaWduID09PSBcImxlZnRcIlxyXG4gICAgICAgICAgICA/IFwic2l0ZS1oZWFkZXItLW1lbnUtbGVmdCBcIlxyXG4gICAgICAgICAgICA6IGdDb250ZXh0LmhlYWRlci5hbGlnbiA9PT0gXCJyaWdodFwiXHJcbiAgICAgICAgICAgID8gXCJzaXRlLWhlYWRlci0tbWVudS1yaWdodCBcIlxyXG4gICAgICAgICAgICA6IFwic2l0ZS1oZWFkZXItLW1lbnUtY2VudGVyIFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgICR7Z0NvbnRleHQuaGVhZGVyLnRoZW1lID09PSBcImRhcmtcIiA/IFwiZGFyay1tb2RlLXRleHRzXCIgOiBcIiBcIn0gJHtcclxuICAgICAgICAgIHNob3dTY3JvbGxpbmcgPyBcInNjcm9sbGluZ1wiIDogXCJcIlxyXG4gICAgICAgIH0gJHtcclxuICAgICAgICAgIGdDb250ZXh0LmhlYWRlci5yZXZlYWwgJiZcclxuICAgICAgICAgIHNob3dSZXZlYWwgJiZcclxuICAgICAgICAgIGdDb250ZXh0LmhlYWRlci50aGVtZSA9PT0gXCJkYXJrXCJcclxuICAgICAgICAgICAgPyBcInJldmVhbC1oZWFkZXIgYmctYmxhY2tpc2gtYmx1ZVwiXHJcbiAgICAgICAgICAgIDogZ0NvbnRleHQuaGVhZGVyLnJldmVhbCAmJiBzaG93UmV2ZWFsXHJcbiAgICAgICAgICAgID8gXCJyZXZlYWwtaGVhZGVyXCJcclxuICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGFpbmVyXHJcbiAgICAgICAgICBmbHVpZD17Z0NvbnRleHQuaGVhZGVyLmlzRmx1aWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2dDb250ZXh0LmhlYWRlci5pc0ZsdWlkID8gXCJwci1sZy05IHBsLWxnLTlcIiA6IFwiXCJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgc2l0ZS1uYXZiYXIgb2ZmY2FudmFzLWFjdGl2ZSBuYXZiYXItZXhwYW5kLWxnIHB4LTAgcHktMFwiPlxyXG4gICAgICAgICAgICB7LyogPCEtLSBCcmFuZCBMb2dvLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5cclxuICAgICAgICAgICAgICA8TG9nbyB3aGl0ZT17Z0NvbnRleHQuaGVhZGVyLnRoZW1lID09PSBcImRhcmtcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbmF2LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1haW4tbWVudSBkLW5vbmUgZC1sZy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWwsIGlzRXh0ZXJuYWwgPSBmYWxzZSwgbmFtZSwgaXRlbXMsIC4uLnJlc3QgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNTdWJJdGVtcyA9IEFycmF5LmlzQXJyYXkoaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17bmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzU3ViSXRlbXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gZHJvcGRvd25cIiB7Li4ucmVzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlIGdyLXRvZ2dsZS1hcnJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zbWFsbC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJnci1tZW51LWRyb3Bkb3duIGRyb3Bkb3duLW1lbnUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoc3ViSXRlbSwgaW5kZXhTdWIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc0lubmVyU3ViSXRlbXMgPSBBcnJheS5pc0FycmF5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJJdGVtLml0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJJdGVtLm5hbWUgKyBpbmRleFN1Yn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNJbm5lclN1Ykl0ZW1zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3AtbWVudS1pdGVtIGRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlIGdyLXRvZ2dsZS1hcnJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ykl0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNtYWxsLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyLW1lbnUtZHJvcGRvd24gZHJvcGRvd24tbWVudSBkcm9wZG93bi1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ykl0ZW0uaXRlbXMubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW1Jbm5lciwgaW5kZXhJbm5lck1vc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcC1tZW51LWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSW5uZXIubmFtZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleElubmVyTW9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtSW5uZXIuaXNFeHRlcm5hbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake2l0ZW1Jbm5lci5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbUlubmVyLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7aXRlbUlubmVyLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW1Jbm5lci5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3AtbWVudS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLmlzRXh0ZXJuYWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake3N1Ykl0ZW0ubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7c3ViSXRlbS5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3N1Ykl0ZW0ubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiB7Li4ucmVzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0V4dGVybmFsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7bmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge2dDb250ZXh0LmhlYWRlci5idXR0b24gPT09IFwiY3RhXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0biBtbC1hdXRvIG1sLWxnLTAgbXItNiBtci1sZy0wIGQtbm9uZSBkLXhzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgYnRuIGJ0bi0ke2dDb250ZXh0LmhlYWRlci52YXJpYW50fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uVGV4dH1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uID09PSBcInByb2ZpbGVcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnRuLWRldmlkZXIgbWwtYXV0byBtbC1sZy01IHBsLTIgZC1ub25lIGQteHMtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTMgbWwtNyBmb250LXNpemUtNyBub3RpZmljYXRpb24tYmxvY2sgZmxleC15LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJlbGwgaGVhZGluZy1kZWZhdWx0LWNvbG9yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgY291bnQgZm9udC13ZWlnaHQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IGNpcmNsZS0yNCBib3JkZXIgYm9yZGVyLXdpZHRoLTMgYm9yZGVyIGJvcmRlci13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9XCJzaG93LWdyLWRyb3Bkb3duIHB5LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvaWxlIG1lZGlhIG1sLTcgZmxleC15LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtNDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1B9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd24gaGVhZGluZy1kZWZhdWx0LWNvbG9yIG1sLTZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpemUud2lkdGggPD0gOTkxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3ItbWVudS1kcm9wZG93biBib3JkZXItMCBib3JkZXItd2lkdGgtMiBweS0yIHctYXV0byBiZy1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCIgZHJvcGRvd24taXRlbSBweS0yIHRleHQtcmVkIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZ3ItbWVudS1kcm9wZG93biBkcm9wZG93bi1yaWdodCBib3JkZXItMCBib3JkZXItd2lkdGgtMiBweS0yIHctYXV0byBiZy1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCIgZHJvcGRvd24taXRlbSBweS0yIHRleHQtcmVkIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfSAqL31cclxuXHJcbiAgICAgICAgICAgIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uID09PSBcImFjY291bnRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnRucyBoZWFkZXItYnRuLWRldmlkZXIgbWwtYXV0byBwci0yIG1sLWxnLTYgZC1ub25lIGQteHMtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi10cmFuc3BhcmVudCB0ZXh0LXVwcGVyY2FzZSBmb250LXNpemUtMyBoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9jdXMtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVTaWduSW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2cgSW5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tJHtnQ29udGV4dC5oZWFkZXIudmFyaWFudH0gdGV4dC11cHBlcmNhc2UgZm9udC1zaXplLTNgfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVTaWduVXBNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTaWduIFVwXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8VG9nZ2xlQnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyLXRvZ2dsZXIgYnRuLWNsb3NlLW9mZi1jYW52YXMgbWwtMyAke1xyXG4gICAgICAgICAgICAgICAgZ0NvbnRleHQudmlzaWJsZU9mZkNhbnZhcyA/IFwiY29sbGFwc2VkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbW9iaWxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJtb2JpbGUtbWVudVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2dDb250ZXh0LnRvZ2dsZU9mZkNhbnZhc31cclxuICAgICAgICAgICAgICBkYXJrPXtnQ29udGV4dC5oZWFkZXIudGhlbWUgPT09IFwiZGFya1wiID8gMSA6IDB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNpbXBsZS1yZW1vdmUgaWNvbi1jbG9zZVwiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1lbnUtMzQgaWNvbi1idXJnZXIgZC1ibG9ja1wiPjwvaT5cclxuICAgICAgICAgICAgPC9Ub2dnbGVCdXR0b24+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TaXRlSGVhZGVyPlxyXG4gICAgICA8T2ZmY2FudmFzXHJcbiAgICAgICAgc2hvdz17Z0NvbnRleHQudmlzaWJsZU9mZkNhbnZhc31cclxuICAgICAgICBvbkhpZGVPZmZjYW52YXM9e2dDb250ZXh0LnRvZ2dsZU9mZkNhbnZhc31cclxuICAgICAgPlxyXG4gICAgICAgIDxOZXN0ZWRNZW51IG1lbnVJdGVtcz17bWVudUl0ZW1zfSAvPlxyXG4gICAgICA8L09mZmNhbnZhcz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==