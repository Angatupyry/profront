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

    if (newState.isProfessional) {
      newState["isProfessional"] = false;
    } else {
      newState["isProfessional"] = true;
    }

    setState(newState); // if (state.isProfessional) {
    //   setState({ isProfessional: false });
    // } else {
    //   setState({ isProfessional: true });
    // }
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

    if (e.target.id == "isProfessional") {
      if (newState.isProfessional) {
        newState["isProfessional"] = false;
      } else {
        newState["isProfessional"] = true;
      }
    }

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
      lineNumber: 92,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, {
    className: "p-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10",
    onClick: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-times",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "login-modal-main bg-white rounded-8 overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pb-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "font-size-8 text-white line-height-reset pb-4 line-height-1p4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }, "Cree una cuenta gratuita hoy"), __jsx("p", {
    className: "mb-0 font-size-4 text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, "Cree su cuenta para continuar y explorar a los profesionales disponibles.")))), __jsx("div", {
    className: "col-lg-7 col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "bg-white-2 h-100 px-11 pt-11 pb-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx("form", {
    action: "/",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "name",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
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
      lineNumber: 186,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "lastName",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
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
      lineNumber: 202,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "email2",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
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
      lineNumber: 218,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "password",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }, "Contrase\xF1a"), __jsx("div", {
    className: "position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
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
      lineNumber: 235,
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
      lineNumber: 243,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 25
    }
  }, "none")))), __jsx("div", {
    className: "form-group d-flex flex-wrap justify-content-center mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "isProfesional",
    className: "gr-check-input d-flex  mr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
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
      lineNumber: 286,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "checkbox mr-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "font-size-4 mb-0 line-height-reset d-block font-weight-semibold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#",
    className: "text-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 25
    }
  }, "Soy profesional")))), __jsx("div", {
    className: "form-group mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-primary btn-medium w-100 rounded-5 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25VcC9Nb2RhbFNpZ25VcC5qcyJdLCJuYW1lcyI6WyJNb2RhbFN0eWxlZCIsInN0eWxlZCIsIk1vZGFsIiwiTW9kYWxTaWduVXAiLCJwcm9wcyIsInVzZVN0YXRlIiwic2hvd1Bhc3NGaXJzdCIsInNldFNob3dQYXNzRmlyc3QiLCJzaG93UGFzc1NlY29uZCIsInNldFNob3dQYXNzU2Vjb25kIiwibG9hZGluZyIsImVycm9yIiwiZW1haWwyIiwicGFzc3dvcmQiLCJuYW1lIiwibGFzdE5hbWUiLCJpc1Byb2Zlc3Npb25hbCIsInN0YXRlIiwic2V0U3RhdGUiLCJnQ29udGV4dCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwiaGFuZGxlQ2xvc2UiLCJ0b2dnbGVTaWduVXBNb2RhbCIsInRvZ2dsZVBhc3N3b3JkRmlyc3QiLCJ0b2dnbGVQYXNzd29yZFNlY29uZCIsInRvZ2dsZUlzUHJvZmVzc2lvbmFsIiwibmV3U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJBdXRoU2VydmljZSIsInJlZ2lzdGVyIiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImlkIiwic2lnblVwTW9kYWxWaXNpYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLGlFQUFNLENBQUNDLHFEQUFELENBQVQsbUJBQWpCO0tBQU1GLFc7O0FBTU4sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsSUFBRCxDQURyQjtBQUFBLE1BQ3RCQyxhQURzQjtBQUFBLE1BQ1BDLGdCQURP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LENBREYsQ0E5QkYsQ0FERixDQVJGLENBUEYsQ0FERjtBQTRPRCxDQXpURDs7R0FBTXZCLFc7O01BQUFBLFc7QUEyVFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjRkZTJjMGUyN2JkMDczY2IwMGJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkKE1vZGFsKWBcclxuICAvKiAmLm1vZGFsIHtcclxuICAgIHotaW5kZXg6IDEwMDUwO1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IE1vZGFsU2lnblVwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dQYXNzRmlyc3QsIHNldFNob3dQYXNzRmlyc3RdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3Nob3dQYXNzU2Vjb25kLCBzZXRTaG93UGFzc1NlY29uZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGVtYWlsMjogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgaXNQcm9mZXNzaW9uYWw6IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBnQ29udGV4dC50b2dnbGVTaWduVXBNb2RhbCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkRmlyc3QgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UGFzc0ZpcnN0KCFzaG93UGFzc0ZpcnN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVQYXNzd29yZFNlY29uZCA9ICgpID0+IHtcclxuICAgIHNldFNob3dQYXNzU2Vjb25kKCFzaG93UGFzc1NlY29uZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlSXNQcm9mZXNzaW9uYWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuICAgIGlmIChuZXdTdGF0ZS5pc1Byb2Zlc3Npb25hbCkge1xyXG4gICAgICBuZXdTdGF0ZVtcImlzUHJvZmVzc2lvbmFsXCJdID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdTdGF0ZVtcImlzUHJvZmVzc2lvbmFsXCJdID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcclxuXHJcbiAgICAvLyBpZiAoc3RhdGUuaXNQcm9mZXNzaW9uYWwpIHtcclxuICAgIC8vICAgc2V0U3RhdGUoeyBpc1Byb2Zlc3Npb25hbDogZmFsc2UgfSk7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBzZXRTdGF0ZSh7IGlzUHJvZmVzc2lvbmFsOiB0cnVlIH0pO1xyXG4gICAgLy8gfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IEF1dGhTZXJ2aWNlLnJlZ2lzdGVyKFxyXG4gICAgICAgIHN0YXRlLm5hbWUsXHJcbiAgICAgICAgc3RhdGUubGFzdE5hbWUsXHJcbiAgICAgICAgc3RhdGUuZW1haWwyLFxyXG4gICAgICAgIHN0YXRlLnBhc3N3b3JkLFxyXG4gICAgICAgIHN0YXRlLmlzUHJvZmVzc2lvbmFsXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZC1tYWluXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVycm9yIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImlzUHJvZmVzc2lvbmFsXCIpIHtcclxuICAgICAgaWYgKG5ld1N0YXRlLmlzUHJvZmVzc2lvbmFsKSB7XHJcbiAgICAgICAgbmV3U3RhdGVbXCJpc1Byb2Zlc3Npb25hbFwiXSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld1N0YXRlW1wiaXNQcm9mZXNzaW9uYWxcIl0gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBuZXdTdGF0ZVtlLnRhcmdldC5pZF0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1N0YXRlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsU3R5bGVkXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgY2VudGVyZWRcclxuICAgICAgc2hvdz17Z0NvbnRleHQuc2lnblVwTW9kYWxWaXNpYmxlfVxyXG4gICAgICBvbkhpZGU9e2dDb250ZXh0LnRvZ2dsZVNpZ25VcE1vZGFsfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS0zMiBidG4tcmVzZXQgYmctd2hpdGUgcG9zLWFicy10ciBtdC1uNiBtci1sZy1uNiBmb2N1cy1yZXNldCBzaGFkb3ctMTBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbW9kYWwtbWFpbiBiZy13aGl0ZSByb3VuZGVkLTggb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIHBiLTYgcGwtMTEgcHItMTIgYmctYmxhY2stMiBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW4gZGFyay1tb2RlLXRleHRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTlcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS04IHRleHQtd2hpdGUgbGluZS1oZWlnaHQtcmVzZXQgcGItNCBsaW5lLWhlaWdodC0xcDRcIj5cclxuICAgICAgICAgICAgICAgICAgICBDcmVlIHVuYSBjdWVudGEgZ3JhdHVpdGEgaG95XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgZm9udC1zaXplLTQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENyZWUgc3UgY3VlbnRhIHBhcmEgY29udGludWFyIHkgZXhwbG9yYXIgYSBsb3MgcHJvZmVzaW9uYWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BvbmlibGVzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLWRlZmF1bHQtY29sb3ItMiBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG14LW45IHB0LTYgZmxleC14cy1yb3cgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcHgtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS03IHRleHQtd2hpdGVcIj4yOTU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC13aGl0ZSBnci1vcGFjaXR5LTUgbGluZS1oZWlnaHQtMXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBqb2JzIHBvc3RlZCB0b2RheVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBweC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTcgdGV4dC13aGl0ZVwiPjE0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtd2hpdGUgZ3Itb3BhY2l0eS01IGxpbmUtaGVpZ2h0LTFwNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXcgY29tcGFuaWVzIHJlZ2lzdGVyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS0yIGgtMTAwIHB4LTExIHB0LTExIHBiLTdcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgdGV4dC13aGl0ZSBiZy1hbGxwb3J0cyBoLXB4LTQ4IGZsZXgtYWxsLWNlbnRlciB3LTEwMCBweC02IHJvdW5kZWQtNSBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4gcG9zLXhzLWFicy1jbCBmb250LXNpemUtNyBtbC14cy00XCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEltcG9ydCBmcm9tIExpbmtlZEluXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHBvc2l0aW9uLXJlbGF0aXZlIHRleHQtd2hpdGUgYmctcG9wcHkgaC1weC00OCBmbGV4LWFsbC1jZW50ZXIgdy0xMDAgcHgtNiByb3VuZGVkLTUgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdvb2dsZSBwb3MteHMtYWJzLWNsIGZvbnQtc2l6ZS03IG1sLXhzLTRcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW1wb3J0IGZyb20gR29vZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHBvc2l0aW9uLXJlbGF0aXZlIHRleHQtd2hpdGUgYmctbWFyaW5vIGgtcHgtNDggZmxleC1hbGwtY2VudGVyIHctMTAwIHB4LTYgcm91bmRlZC01IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1zcXVhcmUgcG9zLXhzLWFicy1jbCBmb250LXNpemUtNyBtbC14cy00XCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEltcG9ydCBmcm9tIEZhY2Vib29rXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvci1kZXZpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGxpbmUtaGVpZ2h0LXJlc2V0XCI+T3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSBub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBcGVsbGlkb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IGFwZWxsaWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWwyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtYmxhY2stMiBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRS1tYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlamVtcGxvQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZW1haWwyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzRmlyc3QgPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG93LXBhc3N3b3JkIHBvcy1hYnMtY3IgZmFzIG1yLTYgdGV4dC1ibGFjay0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUGFzc3dvcmRGaXJzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmVcIj5ub25lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1hciBDb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzU2Vjb25kID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG93LXBhc3N3b3JkIHBvcy1hYnMtY3IgZmFzIG1yLTYgdGV4dC1ibGFjay0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUGFzc3dvcmRTZWNvbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lXCI+bm9uZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJpc1Byb2Zlc2lvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyLWNoZWNrLWlucHV0IGQtZmxleCAgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaXNQcm9mZXNpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5pc1Byb2Zlc3Npb25hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RvZ2dsZUlzUHJvZmVzc2lvbmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94IG1yLTVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi0wIGxpbmUtaGVpZ2h0LXJlc2V0IGQtYmxvY2sgZm9udC13ZWlnaHQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFncmVlIHRvIHRoZXtcIiBcIn0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNveSBwcm9mZXNpb25hbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWRvZGdlciBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRm9yZ2V0IFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLW1lZGl1bSB3LTEwMCByb3VuZGVkLTUgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdHJhcnNle1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtY2VudGVyIGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGZyZWUgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgPC9Nb2RhbFN0eWxlZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxTaWduVXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=