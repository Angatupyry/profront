webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/ModalSignUp/ModalSignUp.js":
/*!***************************************************!*\
  !*** ./src/components/ModalSignUp/ModalSignUp.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.js");






var _this = undefined,
    _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\ModalSignUp\\ModalSignUp.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  /* &.modal {\n    z-index: 10050;\n  } */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var ModalStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"])(_templateObject());
_c = ModalStyled;

var ModalSignUp = function ModalSignUp(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      showPassFirst = _useState[0],
      setShowPassFirst = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      showPassSecond = _useState2[0],
      setShowPassSecond = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    loading: true,
    error: null,
    email2: "",
    password: "",
    name: "",
    lastName: "",
    isProfessional: false
  }),
      state = _useState3[0],
      setState = _useState3[1];

  var gContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_9__["default"]);

  var handleClose = function handleClose() {
    gContext.toggleSignUpModal();
  };

  var togglePasswordFirst = function togglePasswordFirst() {
    setShowPassFirst(!showPassFirst);
  };

  var togglePasswordSecond = function togglePasswordSecond() {
    setShowPassSecond(!showPassSecond);
  };

  var toggleIsProfessional = function toggleIsProfessional() {
    var newState = _objectSpread({}, state);

    if (state.isProfessional) {
      newState[isProfessional] = false;
    } else {
      newState[isProfessional] = true;
    }

    setState(newState);

    if (state.isProfessional) {
      setState({
        isProfessional: false
      });
    } else {
      setState({
        isProfessional: true
      });
    }
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
              return _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["default"].register(state.name, state.lastName, state.email2, state.password, state.isProfessional);

            case 5:
              setState({
                loading: false
              });
              handleClose();
              next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/dashboard-main");
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

    console.log(e.target.value);
    newState[e.target.id] = e.target.value;
    setState(newState);
    console.log(newState);
  };

  return __jsx(ModalStyled, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    size: "lg",
    centered: true,
    show: gContext.signUpModalVisible,
    onHide: gContext.toggleSignUpModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, {
    className: "p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10",
    onClick: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "login-modal-main bg-white rounded-8 overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pb-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "font-size-8 text-white line-height-reset pb-4 line-height-1p4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, "Cree una cuenta gratuita hoy"), __jsx("p", {
    className: "mb-0 font-size-4 text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, "Cree su cuenta para continuar y explorar a los profesionales disponibles.")))), __jsx("div", {
    className: "col-lg-7 col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "bg-white-2 h-100 px-11 pt-11 pb-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, __jsx("form", {
    action: "/",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "name",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  }, "Nombre"), __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "Ingrese su nombre",
    id: "name",
    value: state.name,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "lastName",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }, "Apellido"), __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "Ingrese su apellido",
    id: "lastName",
    value: state.lastName,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "email2",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 21
    }
  }, "E-mail"), __jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "ejemplo@gmail.com",
    id: "email2",
    value: state.email2,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "password",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 21
    }
  }, "Contrase\xF1a"), __jsx("div", {
    className: "position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: showPassFirst ? "password" : "text",
    className: "form-control",
    id: "password",
    placeholder: "Ingrese su contrase\xF1a",
    value: state.password,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 23
    }
  }), __jsx("a", {
    href: "/#",
    className: "show-password pos-abs-cr fas mr-6 text-black-2",
    onClick: function onClick(e) {
      e.preventDefault();
      togglePasswordFirst();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 25
    }
  }, "none")))), __jsx("div", {
    className: "form-group d-flex flex-wrap justify-content-center mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "isProfesional",
    className: "gr-check-input d-flex  mr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 21
    }
  }, __jsx("input", {
    className: "d-none",
    type: "checkbox",
    id: "isProfesional",
    value: state.isProfessional,
    onChange: toggleIsProfessional,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "checkbox mr-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "font-size-4 mb-0 line-height-reset d-block font-weight-semibold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#",
    className: "text-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 25
    }
  }, "Soy profesional")))), __jsx("div", {
    className: "form-group mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-primary btn-medium w-100 rounded-5 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 21
    }
  }, "Registrarse", " ")))))))));
};

_s(ModalSignUp, "oPTlMWbWk+gadzf+ka50ksqUcP0=");

_c2 = ModalSignUp;
/* harmony default export */ __webpack_exports__["default"] = (ModalSignUp);

var _c, _c2;

$RefreshReg$(_c, "ModalStyled");
$RefreshReg$(_c2, "ModalSignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25VcC9Nb2RhbFNpZ25VcC5qcyJdLCJuYW1lcyI6WyJNb2RhbFN0eWxlZCIsInN0eWxlZCIsIk1vZGFsIiwiTW9kYWxTaWduVXAiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd1Bhc3NGaXJzdCIsInNldFNob3dQYXNzRmlyc3QiLCJzaG93UGFzc1NlY29uZCIsInNldFNob3dQYXNzU2Vjb25kIiwibG9hZGluZyIsImVycm9yIiwiZW1haWwyIiwicGFzc3dvcmQiLCJuYW1lIiwibGFzdE5hbWUiLCJpc1Byb2Zlc3Npb25hbCIsInN0YXRlIiwic2V0U3RhdGUiLCJnQ29udGV4dCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiaGFuZGxlQ2xvc2UiLCJ0b2dnbGVTaWduVXBNb2RhbCIsInRvZ2dsZVBhc3N3b3JkRmlyc3QiLCJ0b2dnbGVQYXNzd29yZFNlY29uZCIsInRvZ2dsZUlzUHJvZmVzc2lvbmFsIiwibmV3U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJBdXRoU2VydmljZSIsInJlZ2lzdGVyIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwic2lnblVwTW9kYWxWaXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLGlFQUFNLENBQUNDLHFEQUFELENBQVQsbUJBQWpCO0tBQU1GLFc7O0FBTU4sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsSUFBRCxDQURyQjtBQUFBLE1BQ3RCQyxhQURzQjtBQUFBLE1BQ1BDLGdCQURP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ImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy42NzI5NTlkNzdmYjA0NjIxNjE3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBNb2RhbFN0eWxlZCA9IHN0eWxlZChNb2RhbClgXHJcbiAgLyogJi5tb2RhbCB7XHJcbiAgICB6LWluZGV4OiAxMDA1MDtcclxuICB9ICovXHJcbmA7XHJcblxyXG5jb25zdCBNb2RhbFNpZ25VcCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaG93UGFzc0ZpcnN0LCBzZXRTaG93UGFzc0ZpcnN0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzaG93UGFzc1NlY29uZCwgc2V0U2hvd1Bhc3NTZWNvbmRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBlbWFpbDI6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBsYXN0TmFtZTogXCJcIixcclxuICAgIGlzUHJvZmVzc2lvbmFsOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ0NvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgZ0NvbnRleHQudG9nZ2xlU2lnblVwTW9kYWwoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVQYXNzd29yZEZpcnN0ID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1Bhc3NGaXJzdCghc2hvd1Bhc3NGaXJzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRTZWNvbmQgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UGFzc1NlY29uZCghc2hvd1Bhc3NTZWNvbmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUlzUHJvZmVzc2lvbmFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcbiAgICBpZiAoc3RhdGUuaXNQcm9mZXNzaW9uYWwpIHtcclxuICAgICAgbmV3U3RhdGVbaXNQcm9mZXNzaW9uYWxdID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdTdGF0ZVtpc1Byb2Zlc3Npb25hbF0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2V0U3RhdGUobmV3U3RhdGUpO1xyXG5cclxuICAgIGlmIChzdGF0ZS5pc1Byb2Zlc3Npb25hbCkge1xyXG4gICAgICBzZXRTdGF0ZSh7IGlzUHJvZmVzc2lvbmFsOiBmYWxzZSB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFN0YXRlKHsgaXNQcm9mZXNzaW9uYWw6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IG51bGwgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgQXV0aFNlcnZpY2UucmVnaXN0ZXIoXHJcbiAgICAgICAgc3RhdGUubmFtZSxcclxuICAgICAgICBzdGF0ZS5sYXN0TmFtZSxcclxuICAgICAgICBzdGF0ZS5lbWFpbDIsXHJcbiAgICAgICAgc3RhdGUucGFzc3dvcmQsXHJcbiAgICAgICAgc3RhdGUuaXNQcm9mZXNzaW9uYWxcclxuICAgICAgKTtcclxuICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkLW1haW5cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyb3IgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgbmV3U3RhdGVbZS50YXJnZXQuaWRdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdTdGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFN0eWxlZFxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGNlbnRlcmVkXHJcbiAgICAgIHNob3c9e2dDb250ZXh0LnNpZ25VcE1vZGFsVmlzaWJsZX1cclxuICAgICAgb25IaWRlPXtnQ29udGV4dC50b2dnbGVTaWduVXBNb2RhbH1cclxuICAgID5cclxuICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtMzIgYnRuLXJlc2V0IGJnLXdoaXRlIHBvcy1hYnMtdHIgbXQtbjYgbXItbGctbjYgZm9jdXMtcmVzZXQgc2hhZG93LTEwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLW1vZGFsLW1haW4gYmctd2hpdGUgcm91bmRlZC04IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCBwYi02IHBsLTExIHByLTEyIGJnLWJsYWNrLTIgaC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uIGRhcmstbW9kZS10ZXh0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi05XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtOCB0ZXh0LXdoaXRlIGxpbmUtaGVpZ2h0LXJlc2V0IHBiLTQgbGluZS1oZWlnaHQtMXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlZSB1bmEgY3VlbnRhIGdyYXR1aXRhIGhveVxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIGZvbnQtc2l6ZS00IHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBDcmVlIHN1IGN1ZW50YSBwYXJhIGNvbnRpbnVhciB5IGV4cGxvcmFyIGEgbG9zIHByb2Zlc2lvbmFsZXNcclxuICAgICAgICAgICAgICAgICAgICBkaXNwb25pYmxlcy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdG9wIGJvcmRlci1kZWZhdWx0LWNvbG9yLTIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBteC1uOSBwdC02IGZsZXgteHMtcm93IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHB4LTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNyB0ZXh0LXdoaXRlXCI+Mjk1PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtd2hpdGUgZ3Itb3BhY2l0eS01IGxpbmUtaGVpZ2h0LTFwNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXcgam9icyBwb3N0ZWQgdG9kYXlcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcHgtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS03IHRleHQtd2hpdGVcIj4xNDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LXdoaXRlIGdyLW9wYWNpdHktNSBsaW5lLWhlaWdodC0xcDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IGNvbXBhbmllcyByZWdpc3RlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUtMiBoLTEwMCBweC0xMSBwdC0xMSBwYi03XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHBvc2l0aW9uLXJlbGF0aXZlIHRleHQtd2hpdGUgYmctYWxscG9ydHMgaC1weC00OCBmbGV4LWFsbC1jZW50ZXIgdy0xMDAgcHgtNiByb3VuZGVkLTUgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbXBvcnQgZnJvbSBMaW5rZWRJblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLXBvcHB5IGgtcHgtNDggZmxleC1hbGwtY2VudGVyIHctMTAwIHB4LTYgcm91bmRlZC01IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1nb29nbGUgcG9zLXhzLWFicy1jbCBmb250LXNpemUtNyBtbC14cy00XCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEltcG9ydCBmcm9tIEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLW1hcmlubyBoLXB4LTQ4IGZsZXgtYWxsLWNlbnRlciB3LTEwMCBweC02IHJvdW5kZWQtNSBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbXBvcnQgZnJvbSBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ItZGV2aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtMyBsaW5lLWhlaWdodC1yZXNldFwiPk9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL1wiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtYmxhY2stMiBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTm9tYnJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3Ugbm9tYnJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtYmxhY2stMiBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQXBlbGxpZG9cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSBhcGVsbGlkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEUtbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZWplbXBsb0BnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmVtYWlsMn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtYmxhY2stMiBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29udHJhc2XDsWFcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc0ZpcnN0ID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3UgY29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvdy1wYXNzd29yZCBwb3MtYWJzLWNyIGZhcyBtci02IHRleHQtYmxhY2stMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBhc3N3b3JkRmlyc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lXCI+bm9uZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb25maXJtYXIgQ29udHJhc2XDsWFcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc1NlY29uZCA/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvdy1wYXNzd29yZCBwb3MtYWJzLWNyIGZhcyBtci02IHRleHQtYmxhY2stMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBhc3N3b3JkU2Vjb25kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZVwiPm5vbmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaXNQcm9mZXNpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnci1jaGVjay1pbnB1dCBkLWZsZXggIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlzUHJvZmVzaW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuaXNQcm9mZXNzaW9uYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVJc1Byb2Zlc3Npb25hbH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveCBtci01XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgbWItMCBsaW5lLWhlaWdodC1yZXNldCBkLWJsb2NrIGZvbnQtd2VpZ2h0LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBZ3JlZSB0byB0aGV7XCIgXCJ9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTb3kgcHJvZmVzaW9uYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC1kb2RnZXIgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEZvcmdldCBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1tZWRpdW0gdy0xMDAgcm91bmRlZC01IHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RyYXJzZXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWNlbnRlciBoZWFkaW5nLWRlZmF1bHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBEb27igJl0IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBmcmVlIGFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgIDwvTW9kYWxTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsU2lnblVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9