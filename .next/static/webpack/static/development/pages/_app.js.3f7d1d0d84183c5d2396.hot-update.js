webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/ModalSignIn/ModalSignIn.js":
/*!***************************************************!*\
  !*** ./src/components/ModalSignIn/ModalSignIn.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.js");







var _this = undefined,
    _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\ModalSignIn\\ModalSignIn.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  /* &.modal {\n    z-index: 10050;\n  } */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ModalStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"])(_templateObject());
_c = ModalStyled;

var ModalSignIn = function ModalSignIn(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      showPass = _useState[0],
      setShowPass = _useState[1];

  var gContext = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_10__["default"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState({
    loading: true,
    error: null,
    email: "",
    password: ""
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var handleClose = function handleClose() {
    gContext.toggleSignInModal();
  };

  var togglePassword = function togglePassword() {
    setShowPass(!showPass);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setState({
                loading: true,
                error: null
              });
              _context.prev = 2;
              _context.next = 5;
              return _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["default"].login(state.email, state.password);

            case 5:
              setState({
                loading: false
              });
              handleClose();
              next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/dashboard-main");
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              setState({
                loading: false,
                error: _context.t0
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(e) {
    var newState = _objectSpread({}, state);

    console.log("id:" + e.target.id + " valor: " + e.target.value);
    newState[e.target.id] = e.target.value;
    setState(newState);
    console.log(newState);
  };

  return __jsx(ModalStyled, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    size: "lg",
    centered: true,
    show: gContext.signInModalVisible,
    onHide: gContext.toggleSignInModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"].Body, {
    className: "p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper",
    onClick: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "login-modal-main bg-white rounded-8 overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pb-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "font-size-8 text-white line-height-reset pb-4 line-height-1p4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, "Bienvenido/a"), __jsx("p", {
    className: "mb-0 font-size-4 text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, "Inicie sesi\xF3n para acceder a su cuenta y contratar profesionales.")))), __jsx("div", {
    className: "col-lg-7 col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "bg-white-2 h-100 px-11 pt-11 pb-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx("form", {
    action: "/",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, "E-mail"), __jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "ejemplo@gmail.com",
    id: "email",
    value: state.email,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "password",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, "Contrase\xF1a"), __jsx("div", {
    className: "position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: showPass ? "password" : "text",
    className: "form-control",
    id: "password",
    placeholder: "Ingrese su contrase\xF1a",
    value: state.password,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 23
    }
  }), __jsx("a", {
    href: "/#",
    className: "show-password pos-abs-cr fas mr-6 text-black-2",
    onClick: function onClick(e) {
      e.preventDefault();
      togglePassword();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }, "none")))), __jsx("div", {
    className: "form-group mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-primary btn-medium w-100 rounded-5 text-uppercase",
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  }, "Iniciar sesi\xF3n", " ")), __jsx("p", {
    className: "font-size-4 text-center heading-default-color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 19
    }
  }, "\xBFNo posee una cuenta?", " ", __jsx("a", {
    href: "/#",
    className: "text-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 21
    }
  }, "Cree una cuenta gratuita")))))))));
};

_s(ModalSignIn, "T9Lt/R+WYIoqnRrJT4Wf5QYEwAI=");

_c2 = ModalSignIn;
/* harmony default export */ __webpack_exports__["default"] = (ModalSignIn);

var _c, _c2;

$RefreshReg$(_c, "ModalStyled");
$RefreshReg$(_c2, "ModalSignIn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25Jbi9Nb2RhbFNpZ25Jbi5qcyJdLCJuYW1lcyI6WyJNb2RhbFN0eWxlZCIsInN0eWxlZCIsIk1vZGFsIiwiTW9kYWxTaWduSW4iLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd1Bhc3MiLCJzZXRTaG93UGFzcyIsImdDb250ZXh0IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJSZWFjdCIsImxvYWRpbmciLCJlcnJvciIsImVtYWlsIiwicGFzc3dvcmQiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlQ2xvc2UiLCJ0b2dnbGVTaWduSW5Nb2RhbCIsInRvZ2dsZVBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiQXV0aFNlcnZpY2UiLCJsb2dpbiIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJuZXdTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwic2lnbkluTW9kYWxWaXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0MscURBQUQsQ0FBVCxtQkFBakI7S0FBTUYsVzs7QUFNTixJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxJQUFELENBRFg7QUFBQSxNQUN0QkMsUUFEc0I7QUFBQSxNQUNaQyxXQURZOztBQUU3QixNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLCtEQUFELENBQTNCOztBQUY2Qix3QkFHSEMsNENBQUssQ0FBQ04sUUFBTixDQUFlO0FBQ3ZDTyxXQUFPLEVBQUUsSUFEOEI7QUFFdkNDLFNBQUssRUFBRSxJQUZn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QUEwTlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjNmN2QxZDBkODQxODNjNWQyMzk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkKE1vZGFsKWBcclxuICAvKiAmLm1vZGFsIHtcclxuICAgIHotaW5kZXg6IDEwMDUwO1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IE1vZGFsU2lnbkluID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dQYXNzLCBzZXRTaG93UGFzc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIGdDb250ZXh0LnRvZ2dsZVNpZ25Jbk1vZGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UGFzcyghc2hvd1Bhc3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IEF1dGhTZXJ2aWNlLmxvZ2luKHN0YXRlLmVtYWlsLCBzdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZC1tYWluXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVycm9yIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuICAgIGNvbnNvbGUubG9nKFwiaWQ6XCIgKyBlLnRhcmdldC5pZCArIFwiIHZhbG9yOiBcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIG5ld1N0YXRlW2UudGFyZ2V0LmlkXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgY29uc29sZS5sb2cobmV3U3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxTdHlsZWRcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgICBjZW50ZXJlZFxyXG4gICAgICBzaG93PXtnQ29udGV4dC5zaWduSW5Nb2RhbFZpc2libGV9XHJcbiAgICAgIG9uSGlkZT17Z0NvbnRleHQudG9nZ2xlU2lnbkluTW9kYWx9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLTMyIGJ0bi1yZXNldCBiZy13aGl0ZSBwb3MtYWJzLXRyIG10LW1kLW42IG1yLWxnLW42IGZvY3VzLXJlc2V0IHotaW5kZXgtc3VwcGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLW1vZGFsLW1haW4gYmctd2hpdGUgcm91bmRlZC04IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCBwYi02IHBsLTExIHByLTEyIGJnLWJsYWNrLTIgaC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uIGRhcmstbW9kZS10ZXh0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi05XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtOCB0ZXh0LXdoaXRlIGxpbmUtaGVpZ2h0LXJlc2V0IHBiLTQgbGluZS1oZWlnaHQtMXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQmllbnZlbmlkby9hXHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgZm9udC1zaXplLTQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEluaWNpZSBzZXNpw7NuIHBhcmEgYWNjZWRlciBhIHN1IGN1ZW50YSB5IGNvbnRyYXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Zlc2lvbmFsZXMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItZGVmYXVsdC1jb2xvci0yIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbXgtbjkgcHQtNiBmbGV4LXhzLXJvdyBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBweC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTcgdGV4dC13aGl0ZVwiPjI5NTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LXdoaXRlIGdyLW9wYWNpdHktNSBsaW5lLWhlaWdodC0xcDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IGpvYnMgcG9zdGVkIHRvZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHB4LTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNyB0ZXh0LXdoaXRlXCI+MTQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC13aGl0ZSBnci1vcGFjaXR5LTUgbGluZS1oZWlnaHQtMXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBjb21wYW5pZXMgcmVnaXN0ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLTIgaC0xMDAgcHgtMTEgcHQtMTEgcGItN1wiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLWFsbHBvcnRzIGgtcHgtNDggZmxleC1hbGwtY2VudGVyIHctMTAwIHB4LTYgcm91bmRlZC01IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbiBwb3MteHMtYWJzLWNsIGZvbnQtc2l6ZS03IG1sLXhzLTRcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nIGluIHdpdGggTGlua2VkSW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgdGV4dC13aGl0ZSBiZy1wb3BweSBoLXB4LTQ4IGZsZXgtYWxsLWNlbnRlciB3LTEwMCBweC02IHJvdW5kZWQtNSBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ29vZ2xlIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgaW4gd2l0aCBHb29nbGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgdGV4dC13aGl0ZSBiZy1tYXJpbm8gaC1weC00OCBmbGV4LWFsbC1jZW50ZXIgdy0xMDAgcHgtNiByb3VuZGVkLTUgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZSBwb3MteHMtYWJzLWNsIGZvbnQtc2l6ZS03IG1sLXhzLTRcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nIGluIHdpdGggRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwib3ItZGV2aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtMyBsaW5lLWhlaWdodC1yZXNldCBcIj5Pcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFLW1haWxcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVqZW1wbG9AZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3UgY29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvdy1wYXNzd29yZCBwb3MtYWJzLWNyIGZhcyBtci02IHRleHQtYmxhY2stMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZVwiPm5vbmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0ZXJtcy1jaGVja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnci1jaGVjay1pbnB1dCBkLWZsZXggIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlcm1zLWNoZWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveCBtci01XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgbWItMCBsaW5lLWhlaWdodC1yZXNldCBtYi0xIGQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC1kb2RnZXIgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEZvcmdldCBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbWVkaXVtIHctMTAwIHJvdW5kZWQtNSB0ZXh0LXVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbmljaWFyIHNlc2nDs257XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWNlbnRlciBoZWFkaW5nLWRlZmF1bHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICDCv05vIHBvc2VlIHVuYSBjdWVudGE/e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ3JlZSB1bmEgY3VlbnRhIGdyYXR1aXRhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgIDwvTW9kYWxTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsU2lnbkluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9