webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/sections/landing1/Hero.js":
/*!***************************************!*\
  !*** ./src/sections/landing1/Hero.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Core */ "./src/components/Core/index.js");
/* harmony import */ var _assets_image_l1_png_hero_image_man_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/l1/png/hero-image-man.png */ "./src/assets/image/l1/png/hero-image-man.png");
/* harmony import */ var _assets_image_l1_png_hero_image_man_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_l1_png_hero_image_man_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_patterns_hero_pattern_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/patterns/hero-pattern.png */ "./src/assets/image/patterns/hero-pattern.png");
/* harmony import */ var _assets_image_patterns_hero_pattern_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_patterns_hero_pattern_png__WEBPACK_IMPORTED_MODULE_7__);





var _this = undefined,
    _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\sections\\landing1\\Hero.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var defaultCountries = [{
  value: "sp",
  label: "Asunción"
}, {
  value: "bd",
  label: "Lambaré"
}, {
  value: "usa",
  label: "Villa Elisa"
}, {
  value: "uae",
  label: "Luque"
}, {
  value: "pk",
  label: "Ñemby"
}];
var defaultServices = [{
  value: "1",
  label: "Manicure"
}, {
  value: "2",
  label: "Enseñanza de inglés"
}, {
  value: "3",
  label: "Personal training"
}, {
  value: "4",
  label: "Psicólogo"
}, {
  value: "5",
  label: "Enseñanza nivel inicial"
}];

var Hero = function Hero() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    loading: true,
    error: null,
    service: "1",
    city: "sp"
  }),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

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

              try {
                //await AuthService.login(state.email, state.password);
                setState({
                  loading: false
                });
                Router.push("/search-list");
              } catch (error) {
                setState({
                  loading: false,
                  error: error
                });
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: "bg-gradient-1 pt-26 pt-md-32 pt-lg-33 pt-xl-35 position-relative z-index-1 overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "pos-abs-tr w-50 z-index-n2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _assets_image_patterns_hero_pattern_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    className: "gr-opacity-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row position-relative align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-xxl-6 col-xl-7 col-lg-8 col-md-12 pt-lg-13 pb-lg-33 pb-xl-34 pb-md-33 pb-10",
    "data-aos": "fade-right",
    "data-aos-duration": "1000",
    "data-aos-delay": "500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-size-11 mb-12 pr-md-30 pr-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "Encuentra al profesional ideal."), __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("form", {
    action: "/",
    className: "search-form shadow-6",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "filter-search-form-1 bg-white rounded-sm shadow-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "filter-inputs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    options: defaultServices,
    className: "pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100",
    border: false,
    id: "service",
    value: {
      label: "Manicure",
      value: state.service
    },
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-business-agent text-primary font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "form-group position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 23
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    options: defaultCountries,
    className: "pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100",
    border: false,
    id: "city",
    value: {
      label: "Asunción",
      value: state.city
    },
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-pin-3 text-primary font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 27
    }
  })))), __jsx("div", {
    className: "button-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 23
    }
  }, "Buscar")))))), __jsx("div", {
    className: "col-lg-6 col-md-4 col-sm-6 col-xs-6 col-8 pos-abs-br z-index-n1 position-static position-md-absolute mx-auto ml-md-auto",
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    "data-aos-delay": "500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " ml-xxl-23 ml-xl-12 ml-md-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _assets_image_l1_png_hero_image_man_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  })))))));
};

_s(Hero, "hEdPjT6mGPw6aWEIAkCYvwxGvOQ=");

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvbGFuZGluZzEvSGVyby5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Q291bnRyaWVzIiwidmFsdWUiLCJsYWJlbCIsImRlZmF1bHRTZXJ2aWNlcyIsIkhlcm8iLCJSZWFjdCIsInVzZVN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic2VydmljZSIsImNpdHkiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsIm5ld1N0YXRlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImlkIiwiaW1nUCIsImltZ0giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxDQUN2QjtBQUFFQyxPQUFLLEVBQUUsSUFBVDtBQUFlQyxPQUFLLEVBQUU7QUFBdEIsQ0FEdUIsRUFFdkI7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsT0FBSyxFQUFFO0FBQXRCLENBRnVCLEVBR3ZCO0FBQUVELE9BQUssRUFBRSxLQUFUO0FBQWdCQyxPQUFLLEVBQUU7QUFBdkIsQ0FIdUIsRUFJdkI7QUFBRUQsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLE9BQUssRUFBRTtBQUF2QixDQUp1QixFQUt2QjtBQUFFRCxPQUFLLEVBQUUsSUFBVDtBQUFlQyxPQUFLLEVBQUU7QUFBdEIsQ0FMdUIsQ0FBekI7QUFRQSxJQUFNQyxlQUFlLEdBQUcsQ0FDdEI7QUFBRUYsT0FBSyxFQUFFLEdBQVQ7QUFBY0MsT0FBSyxFQUFFO0FBQXJCLENBRHNCLEVBRXRCO0FBQUVELE9BQUssRUFBRSxHQUFUO0FBQWNDLE9BQUssRUFBRTtBQUFyQixDQUZzQixFQUd0QjtBQUFFRCxPQUFLLEVBQUUsR0FBVDtBQUFjQyxPQUFLLEVBQUU7QUFBckIsQ0FIc0IsRUFJ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QUFNLGFBQVMsRUFBQyx1RkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLCtDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLENBOUJGLENBREYsRUFnREU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMseUVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQWhERixDQUxGLENBRkYsQ0FURixDQURGLEVBaUZFO0FBQ0UsYUFBUyxFQUFDLHlIQURaO0FBRUUsZ0JBQVMsV0FGWDtBQUdFLHlCQUFrQixNQUhwQjtBQUlFLHNCQUFlLEtBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVPLDhFQUFWO0FBQWdCLE9BQUcsRUFBQyxFQUFwQjtBQUF1QixhQUFTLEVBQUMsT0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTkYsQ0FqRkYsQ0FERixDQU5GLENBRkYsQ0FERjtBQTJHRCxDQXZJRDs7R0FBTXJCLEk7O0tBQUFBLEk7QUF5SVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43ODE0Y2I0MzBhYzNkMGJjMDg5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29yZVwiO1xyXG5pbXBvcnQgaW1nSCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL2wxL3BuZy9oZXJvLWltYWdlLW1hbi5wbmdcIjtcclxuaW1wb3J0IGltZ1AgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9wYXR0ZXJucy9oZXJvLXBhdHRlcm4ucG5nXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0Q291bnRyaWVzID0gW1xyXG4gIHsgdmFsdWU6IFwic3BcIiwgbGFiZWw6IFwiQXN1bmNpw7NuXCIgfSxcclxuICB7IHZhbHVlOiBcImJkXCIsIGxhYmVsOiBcIkxhbWJhcsOpXCIgfSxcclxuICB7IHZhbHVlOiBcInVzYVwiLCBsYWJlbDogXCJWaWxsYSBFbGlzYVwiIH0sXHJcbiAgeyB2YWx1ZTogXCJ1YWVcIiwgbGFiZWw6IFwiTHVxdWVcIiB9LFxyXG4gIHsgdmFsdWU6IFwicGtcIiwgbGFiZWw6IFwiw5FlbWJ5XCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IGRlZmF1bHRTZXJ2aWNlcyA9IFtcclxuICB7IHZhbHVlOiBcIjFcIiwgbGFiZWw6IFwiTWFuaWN1cmVcIiB9LFxyXG4gIHsgdmFsdWU6IFwiMlwiLCBsYWJlbDogXCJFbnNlw7FhbnphIGRlIGluZ2zDqXNcIiB9LFxyXG4gIHsgdmFsdWU6IFwiM1wiLCBsYWJlbDogXCJQZXJzb25hbCB0cmFpbmluZ1wiIH0sXHJcbiAgeyB2YWx1ZTogXCI0XCIsIGxhYmVsOiBcIlBzaWPDs2xvZ29cIiB9LFxyXG4gIHsgdmFsdWU6IFwiNVwiLCBsYWJlbDogXCJFbnNlw7FhbnphIG5pdmVsIGluaWNpYWxcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgSGVybyA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIHNlcnZpY2U6IFwiMVwiLFxyXG4gICAgY2l0eTogXCJzcFwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vYXdhaXQgQXV0aFNlcnZpY2UubG9naW4oc3RhdGUuZW1haWwsIHN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgUm91dGVyLnB1c2goXCIvc2VhcmNoLWxpc3RcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyb3IgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgY29uc29sZS5sb2coXCJpZDpcIiArIGUudGFyZ2V0LmlkICsgXCIgdmFsb3I6IFwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgbmV3U3RhdGVbZS50YXJnZXQuaWRdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdTdGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8IS0tIEhlcm8gQXJlYSAtLT4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtMSBwdC0yNiBwdC1tZC0zMiBwdC1sZy0zMyBwdC14bC0zNSBwb3NpdGlvbi1yZWxhdGl2ZSB6LWluZGV4LTEgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgey8qIDwhLS0gLkhlcm8gcGF0dGVybiAtLT4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3MtYWJzLXRyIHctNTAgei1pbmRleC1uMlwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltZ1B9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImdyLW9wYWNpdHktMVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDwhLS0gLi9IZXJvIHBhdHRlcm4gLS0+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwb3NpdGlvbi1yZWxhdGl2ZSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC14eGwtNiBjb2wteGwtNyBjb2wtbGctOCBjb2wtbWQtMTIgcHQtbGctMTMgcGItbGctMzMgcGIteGwtMzQgcGItbWQtMzMgcGItMTBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjUwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTExIG1iLTEyIHByLW1kLTMwIHByLWxnLTBcIj5cclxuICAgICAgICAgICAgICAgIEVuY3VlbnRyYSBhbCBwcm9mZXNpb25hbCBpZGVhbC5cclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSAuc2VhcmNoLWZvcm0gLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtIHNoYWRvdy02XCJcclxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItc2VhcmNoLWZvcm0tMSBiZy13aGl0ZSByb3VuZGVkLXNtIHNoYWRvdy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb2N1cy1yZXNldCBwbC0xM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwia2V5d29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2IgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLTEwMCB3LXB4LTUwIHBvcy1hYnMtdGwgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZvbnQtc2l6ZS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXpvb20tMiB0ZXh0LXByaW1hcnkgZm9udC13ZWlnaHQtYm9sZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gLnNlbGVjdC1jaXR5IHN0YXJ0cyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RlZmF1bHRTZXJ2aWNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC04IGgtMTAwIGFycm93LTMgZm9udC1zaXplLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNlcnZpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7IGxhYmVsOiBcIk1hbmljdXJlXCIsIHZhbHVlOiBzdGF0ZS5zZXJ2aWNlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtMTAwIHctcHgtNTAgcG9zLWFicy10bCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgZm9udC1zaXplLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYnVzaW5lc3MtYWdlbnQgdGV4dC1wcmltYXJ5IGZvbnQtd2VpZ2h0LWJvbGRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gLi9zZWxlY3QtY2l0eSBlbmRzIC0tPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSAuc2VsZWN0LXNlcnZpY2lvIHN0YXJ0cyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RlZmF1bHRDb3VudHJpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtOCBoLTEwMCBhcnJvdy0zIGZvbnQtc2l6ZS00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17eyBsYWJlbDogXCJBc3VuY2nDs25cIiwgdmFsdWU6IHN0YXRlLmNpdHkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC0xMDAgdy1weC01MCBwb3MtYWJzLXRsIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBmb250LXNpemUtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1waW4tMyB0ZXh0LXByaW1hcnkgZm9udC13ZWlnaHQtYm9sZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSAuL3NlbGVjdC1zZXJ2aWNpbyBlbmRzIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSAuSGVybyBCdXR0b24gLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBsaW5lLWhlaWdodC1yZXNldCBoLTEwMCBidG4tc3VibWl0IHctMTAwIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1c2NhclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gLi9IZXJvIEJ1dHRvbiAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gLi9zZWFyY2gtZm9ybSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS0zIHB0LTdcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbW9rZVwiPlNlYXJjaCBrZXl3b3JkcyBlLmcuPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgUHJvZHVjdCBEZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIEhlcm8gUmlnaHQgSW1hZ2UgLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTQgY29sLXNtLTYgY29sLXhzLTYgY29sLTggcG9zLWFicy1iciB6LWluZGV4LW4xIHBvc2l0aW9uLXN0YXRpYyBwb3NpdGlvbi1tZC1hYnNvbHV0ZSBteC1hdXRvIG1sLW1kLWF1dG9cIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWRlbGF5PVwiNTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1sLXh4bC0yMyBtbC14bC0xMiBtbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nSH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy0xMDBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwhLS0gLi9IZXJvIFJpZ2h0IEltYWdlIC0tPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9