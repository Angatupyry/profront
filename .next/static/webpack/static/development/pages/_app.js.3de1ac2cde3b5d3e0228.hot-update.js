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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    setState({
      isProfessional: true
    });
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
      lineNumber: 73,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, {
    className: "p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10",
    onClick: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "login-modal-main bg-white rounded-8 overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pb-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "font-size-8 text-white line-height-reset pb-4 line-height-1p4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, "Cree una cuenta gratuita hoy"), __jsx("p", {
    className: "mb-0 font-size-4 text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, "Cree su cuenta para continuar y explorar a los profesionales disponibles.")))), __jsx("div", {
    className: "col-lg-7 col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "bg-white-2 h-100 px-11 pt-11 pb-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, __jsx("form", {
    action: "/",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "name",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 167,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "lastName",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
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
      lineNumber: 183,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "email2",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 199,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "password",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  }, "Contrase\xF1a"), __jsx("div", {
    className: "position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
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
      lineNumber: 216,
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
      lineNumber: 224,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 25
    }
  }, "none")))), __jsx("div", {
    className: "form-group d-flex flex-wrap justify-content-center mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "isProfesional",
    className: "gr-check-input d-flex  mr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 21
    }
  }, __jsx("input", {
    className: "d-none",
    type: "checkbox",
    id: "isProfesional",
    value: state.isProfessional,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "checkbox mr-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "font-size-4 mb-0 line-height-reset d-block font-weight-semibold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#",
    className: "text-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 25
    }
  }, "Soy profesional")))), __jsx("div", {
    className: "form-group mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-primary btn-medium w-100 rounded-5 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25VcC9Nb2RhbFNpZ25VcC5qcyJdLCJuYW1lcyI6WyJNb2RhbFN0eWxlZCIsInN0eWxlZCIsIk1vZGFsIiwiTW9kYWxTaWduVXAiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd1Bhc3NGaXJzdCIsInNldFNob3dQYXNzRmlyc3QiLCJzaG93UGFzc1NlY29uZCIsInNldFNob3dQYXNzU2Vjb25kIiwibG9hZGluZyIsImVycm9yIiwiZW1haWwyIiwicGFzc3dvcmQiLCJuYW1lIiwibGFzdE5hbWUiLCJpc1Byb2Zlc3Npb25hbCIsInN0YXRlIiwic2V0U3RhdGUiLCJnQ29udGV4dCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiaGFuZGxlQ2xvc2UiLCJ0b2dnbGVTaWduVXBNb2RhbCIsInRvZ2dsZVBhc3N3b3JkRmlyc3QiLCJ0b2dnbGVQYXNzd29yZFNlY29uZCIsInRvZ2dsZUlzUHJvZmVzc2lvbmFsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiQXV0aFNlcnZpY2UiLCJyZWdpc3RlciIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJuZXdTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwic2lnblVwTW9kYWxWaXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLGlFQUFNLENBQUNDLHFEQUFELENBQVQsbUJBQWpCO0tBQU1GLFc7O0FBTU4sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsSUFBRCxDQURyQjtBQUFBLE1BQ3RCQyxhQURzQjtBQUFBLE1BQ1BDLGdCQURP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QUFDLFFBRFo7QUFFRSxRQUFJLEVBQUMsVUFGUDtBQUdFLE1BQUUsRUFBQyxlQUhMO0FBSUUsU0FBSyxFQUFFUCxLQUFLLENBQUNELGNBSmY7QUFLRSxZQUFRLEVBQUVrQixZQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQVdFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlFO0FBQU0sYUFBUyxFQUFDLGlFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBRyxRQUFJLEVBQUMsSUFBUjtBQUFhLGFBQVMsRUFBQyxjQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLENBWkYsQ0FERixDQXZHRixFQWtJRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsMkRBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ2MsR0FEZCxDQURGLENBbElGLENBdkNGLENBREYsQ0E5QkYsQ0FERixDQVJGLENBUEYsQ0FERjtBQTRPRCxDQXRTRDs7R0FBTS9CLFc7O01BQUFBLFc7QUF3U1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjNkZTFhYzJjZGUzYjVkM2UwMjI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkKE1vZGFsKWBcclxuICAvKiAmLm1vZGFsIHtcclxuICAgIHotaW5kZXg6IDEwMDUwO1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IE1vZGFsU2lnblVwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dQYXNzRmlyc3QsIHNldFNob3dQYXNzRmlyc3RdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3Nob3dQYXNzU2Vjb25kLCBzZXRTaG93UGFzc1NlY29uZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGVtYWlsMjogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgaXNQcm9mZXNzaW9uYWw6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBnQ29udGV4dC50b2dnbGVTaWduVXBNb2RhbCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkRmlyc3QgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UGFzc0ZpcnN0KCFzaG93UGFzc0ZpcnN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVQYXNzd29yZFNlY29uZCA9ICgpID0+IHtcclxuICAgIHNldFNob3dQYXNzU2Vjb25kKCFzaG93UGFzc1NlY29uZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlSXNQcm9mZXNzaW9uYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7IGlzUHJvZmVzc2lvbmFsOiB0cnVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IEF1dGhTZXJ2aWNlLnJlZ2lzdGVyKFxyXG4gICAgICAgIHN0YXRlLm5hbWUsXHJcbiAgICAgICAgc3RhdGUubGFzdE5hbWUsXHJcbiAgICAgICAgc3RhdGUuZW1haWwyLFxyXG4gICAgICAgIHN0YXRlLnBhc3N3b3JkLFxyXG4gICAgICAgIHN0YXRlLmlzUHJvZmVzc2lvbmFsXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZC1tYWluXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVycm9yIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIG5ld1N0YXRlW2UudGFyZ2V0LmlkXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgY29uc29sZS5sb2cobmV3U3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxTdHlsZWRcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgICBjZW50ZXJlZFxyXG4gICAgICBzaG93PXtnQ29udGV4dC5zaWduVXBNb2RhbFZpc2libGV9XHJcbiAgICAgIG9uSGlkZT17Z0NvbnRleHQudG9nZ2xlU2lnblVwTW9kYWx9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLTMyIGJ0bi1yZXNldCBiZy13aGl0ZSBwb3MtYWJzLXRyIG10LW42IG1yLWxnLW42IGZvY3VzLXJlc2V0IHNoYWRvdy0xMFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1tb2RhbC1tYWluIGJnLXdoaXRlIHJvdW5kZWQtOCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTAgcGItNiBwbC0xMSBwci0xMiBiZy1ibGFjay0yIGgtMTAwIGQtZmxleCBmbGV4LWNvbHVtbiBkYXJrLW1vZGUtdGV4dHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItOVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTggdGV4dC13aGl0ZSBsaW5lLWhlaWdodC1yZXNldCBwYi00IGxpbmUtaGVpZ2h0LTFwNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENyZWUgdW5hIGN1ZW50YSBncmF0dWl0YSBob3lcclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCBmb250LXNpemUtNCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlZSBzdSBjdWVudGEgcGFyYSBjb250aW51YXIgeSBleHBsb3JhciBhIGxvcyBwcm9mZXNpb25hbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcG9uaWJsZXMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItZGVmYXVsdC1jb2xvci0yIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbXgtbjkgcHQtNiBmbGV4LXhzLXJvdyBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBweC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTcgdGV4dC13aGl0ZVwiPjI5NTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LXdoaXRlIGdyLW9wYWNpdHktNSBsaW5lLWhlaWdodC0xcDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IGpvYnMgcG9zdGVkIHRvZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHB4LTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNyB0ZXh0LXdoaXRlXCI+MTQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC13aGl0ZSBnci1vcGFjaXR5LTUgbGluZS1oZWlnaHQtMXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBjb21wYW5pZXMgcmVnaXN0ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLTIgaC0xMDAgcHgtMTEgcHQtMTEgcGItN1wiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLWFsbHBvcnRzIGgtcHgtNDggZmxleC1hbGwtY2VudGVyIHctMTAwIHB4LTYgcm91bmRlZC01IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbiBwb3MteHMtYWJzLWNsIGZvbnQtc2l6ZS03IG1sLXhzLTRcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW1wb3J0IGZyb20gTGlua2VkSW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgdGV4dC13aGl0ZSBiZy1wb3BweSBoLXB4LTQ4IGZsZXgtYWxsLWNlbnRlciB3LTEwMCBweC02IHJvdW5kZWQtNSBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ29vZ2xlIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbXBvcnQgZnJvbSBHb29nbGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgdGV4dC13aGl0ZSBiZy1tYXJpbm8gaC1weC00OCBmbGV4LWFsbC1jZW50ZXIgdy0xMDAgcHgtNiByb3VuZGVkLTUgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZSBwb3MteHMtYWJzLWNsIGZvbnQtc2l6ZS03IG1sLXhzLTRcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW1wb3J0IGZyb20gRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yLWRldmlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgbGluZS1oZWlnaHQtcmVzZXRcIj5Pcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIE5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IG5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEFwZWxsaWRvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3UgYXBlbGxpZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFLW1haWxcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVqZW1wbG9AZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWwyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5lbWFpbDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbnRyYXNlw7FhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3NGaXJzdCA/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3ctcGFzc3dvcmQgcG9zLWFicy1jciBmYXMgbXItNiB0ZXh0LWJsYWNrLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVQYXNzd29yZEZpcnN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZVwiPm5vbmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmQyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtYmxhY2stMiBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29uZmlybWFyIENvbnRyYXNlw7FhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3NTZWNvbmQgPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3UgY29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3ctcGFzc3dvcmQgcG9zLWFicy1jciBmYXMgbXItNiB0ZXh0LWJsYWNrLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVQYXNzd29yZFNlY29uZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmVcIj5ub25lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImlzUHJvZmVzaW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3ItY2hlY2staW5wdXQgZC1mbGV4ICBtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJpc1Byb2Zlc2lvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmlzUHJvZmVzc2lvbmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94IG1yLTVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi0wIGxpbmUtaGVpZ2h0LXJlc2V0IGQtYmxvY2sgZm9udC13ZWlnaHQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFncmVlIHRvIHRoZXtcIiBcIn0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNveSBwcm9mZXNpb25hbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWRvZGdlciBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRm9yZ2V0IFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLW1lZGl1bSB3LTEwMCByb3VuZGVkLTUgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdHJhcnNle1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtY2VudGVyIGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGZyZWUgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgPC9Nb2RhbFN0eWxlZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=