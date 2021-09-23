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
    serviceLabel: "Manicure",
    city: "sp",
    cityLabel: "Asunción"
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

  var handleService = function handleService(e) {
    var newState = _objectSpread({}, state);

    newState["service"] = e.value;
    setState(newState);
    console.log(newState);
  };

  var handleCity = function handleCity(e) {
    var newState = _objectSpread({}, state);

    newState["city"] = e.value;
    newState["cityLabel"] = e.label;
    setState(newState);
    console.log(newState);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: "bg-gradient-1 pt-26 pt-md-32 pt-lg-33 pt-xl-35 position-relative z-index-1 overflow-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "pos-abs-tr w-50 z-index-n2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: _assets_image_patterns_hero_pattern_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    className: "gr-opacity-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row position-relative align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "font-size-11 mb-12 pr-md-30 pr-lg-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "Encuentra al profesional ideal."), __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("form", {
    action: "/",
    className: "search-form shadow-6",
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "filter-search-form-1 bg-white rounded-sm shadow-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "filter-inputs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "form-group position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
    onChange: handleService,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-business-agent text-primary font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "form-group position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 23
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    options: defaultCountries,
    className: "pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100",
    border: false,
    id: "city",
    value: {
      label: state.cityLabel,
      value: state.city
    },
    onChange: handleCity,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-pin-3 text-primary font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 27
    }
  })))), __jsx("div", {
    className: "button-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
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
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " ml-xxl-23 ml-xl-12 ml-md-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _assets_image_l1_png_hero_image_man_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  })))))));
};

_s(Hero, "Qmuxb8+4FPxhBY4MHjHYK2NmrMo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvbGFuZGluZzEvSGVyby5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Q291bnRyaWVzIiwidmFsdWUiLCJsYWJlbCIsImRlZmF1bHRTZXJ2aWNlcyIsIkhlcm8iLCJSZWFjdCIsInVzZVN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic2VydmljZSIsInNlcnZpY2VMYWJlbCIsImNpdHkiLCJjaXR5TGFiZWwiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsImhhbmRsZVNlcnZpY2UiLCJuZXdTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaXR5IiwiaW1nUCIsImltZ0giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxDQUN2QjtBQUFFQyxPQUFLLEVBQUUsSUFBVDtBQUFlQyxPQUFLLEVBQUU7QUFBdEIsQ0FEdUIsRUFFdkI7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsT0FBSyxFQUFFO0FBQXRCLENBRnVCLEVBR3ZCO0FBQUVELE9BQUssRUFBRSxLQUFUO0FBQWdCQyxPQUFLLEVBQUU7QUFBdkIsQ0FIdUIsRUFJdkI7QUFBRUQsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLE9BQUssRUFBRTtBQUF2QixDQUp1QixFQUt2QjtBQUFFRCxPQUFLLEVBQUUsSUFBVDtBQUFlQyxPQUFLLEVBQUU7QUFBdEIsQ0FMdUIsQ0FBekI7QUFRQSxJQUFNQyxlQUFlLEdBQUcsQ0FDdEI7QUFBRUYsT0FBSyxFQUFFLEdBQVQ7QUFBY0MsT0FBSyxFQUFFO0FBQXJCLENBRHNCLEVBRXRCO0FBQUVELE9BQUssRUFBRSxHQUFUO0FBQWNDLE9BQUssRUFBRTtBQUFyQixDQUZzQixFQUd0QjtBQUFFRCxPQUFLLEVBQUUsR0FBVDtBQUFj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XFxpbmRleC5qcy5hOWU1ZTNkNzg2MWQ4ZTMzMGFiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29yZVwiO1xyXG5pbXBvcnQgaW1nSCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL2wxL3BuZy9oZXJvLWltYWdlLW1hbi5wbmdcIjtcclxuaW1wb3J0IGltZ1AgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9wYXR0ZXJucy9oZXJvLXBhdHRlcm4ucG5nXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0Q291bnRyaWVzID0gW1xyXG4gIHsgdmFsdWU6IFwic3BcIiwgbGFiZWw6IFwiQXN1bmNpw7NuXCIgfSxcclxuICB7IHZhbHVlOiBcImJkXCIsIGxhYmVsOiBcIkxhbWJhcsOpXCIgfSxcclxuICB7IHZhbHVlOiBcInVzYVwiLCBsYWJlbDogXCJWaWxsYSBFbGlzYVwiIH0sXHJcbiAgeyB2YWx1ZTogXCJ1YWVcIiwgbGFiZWw6IFwiTHVxdWVcIiB9LFxyXG4gIHsgdmFsdWU6IFwicGtcIiwgbGFiZWw6IFwiw5FlbWJ5XCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IGRlZmF1bHRTZXJ2aWNlcyA9IFtcclxuICB7IHZhbHVlOiBcIjFcIiwgbGFiZWw6IFwiTWFuaWN1cmVcIiB9LFxyXG4gIHsgdmFsdWU6IFwiMlwiLCBsYWJlbDogXCJFbnNlw7FhbnphIGRlIGluZ2zDqXNcIiB9LFxyXG4gIHsgdmFsdWU6IFwiM1wiLCBsYWJlbDogXCJQZXJzb25hbCB0cmFpbmluZ1wiIH0sXHJcbiAgeyB2YWx1ZTogXCI0XCIsIGxhYmVsOiBcIlBzaWPDs2xvZ29cIiB9LFxyXG4gIHsgdmFsdWU6IFwiNVwiLCBsYWJlbDogXCJFbnNlw7FhbnphIG5pdmVsIGluaWNpYWxcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgSGVybyA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIHNlcnZpY2U6IFwiMVwiLFxyXG4gICAgc2VydmljZUxhYmVsOiBcIk1hbmljdXJlXCIsXHJcbiAgICBjaXR5OiBcInNwXCIsXHJcbiAgICBjaXR5TGFiZWw6IFwiQXN1bmNpw7NuXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IG51bGwgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy9hd2FpdCBBdXRoU2VydmljZS5sb2dpbihzdGF0ZS5lbWFpbCwgc3RhdGUucGFzc3dvcmQpO1xyXG4gICAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9zZWFyY2gtbGlzdFwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBlcnJvciB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZXJ2aWNlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgbmV3U3RhdGVbXCJzZXJ2aWNlXCJdID0gZS52YWx1ZTtcclxuICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaXR5ID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgbmV3U3RhdGVbXCJjaXR5XCJdID0gZS52YWx1ZTtcclxuICAgIG5ld1N0YXRlW1wiY2l0eUxhYmVsXCJdID0gZS5sYWJlbDtcclxuICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1N0YXRlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDwhLS0gSGVybyBBcmVhIC0tPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC0xIHB0LTI2IHB0LW1kLTMyIHB0LWxnLTMzIHB0LXhsLTM1IHBvc2l0aW9uLXJlbGF0aXZlIHotaW5kZXgtMSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICB7LyogPCEtLSAuSGVybyBwYXR0ZXJuIC0tPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcy1hYnMtdHIgdy01MCB6LWluZGV4LW4yXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17aW1nUH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3Itb3BhY2l0eS0xXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPCEtLSAuL0hlcm8gcGF0dGVybiAtLT4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBvc2l0aW9uLXJlbGF0aXZlIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXh4bC02IGNvbC14bC03IGNvbC1sZy04IGNvbC1tZC0xMiBwdC1sZy0xMyBwYi1sZy0zMyBwYi14bC0zNCBwYi1tZC0zMyBwYi0xMFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWRlbGF5PVwiNTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNpemUtMTEgbWItMTIgcHItbWQtMzAgcHItbGctMFwiPlxyXG4gICAgICAgICAgICAgICAgRW5jdWVudHJhIGFsIHByb2Zlc2lvbmFsIGlkZWFsLlxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIC5zZWFyY2gtZm9ybSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb249XCIvXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm0gc2hhZG93LTZcIlxyXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1zZWFyY2gtZm9ybS0xIGJnLXdoaXRlIHJvdW5kZWQtc20gc2hhZG93LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1pbnB1dHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvY3VzLXJlc2V0IHBsLTEzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJrZXl3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvYiB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtMTAwIHctcHgtNTAgcG9zLWFicy10bCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgZm9udC1zaXplLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tem9vbS0yIHRleHQtcHJpbWFyeSBmb250LXdlaWdodC1ib2xkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSAuc2VsZWN0LWNpdHkgc3RhcnRzIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGVmYXVsdFNlcnZpY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTggaC0xMDAgYXJyb3ctMyBmb250LXNpemUtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VydmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3sgbGFiZWw6IFwiTWFuaWN1cmVcIiwgdmFsdWU6IHN0YXRlLnNlcnZpY2UgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VydmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtMTAwIHctcHgtNTAgcG9zLWFicy10bCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgZm9udC1zaXplLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYnVzaW5lc3MtYWdlbnQgdGV4dC1wcmltYXJ5IGZvbnQtd2VpZ2h0LWJvbGRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gLi9zZWxlY3QtY2l0eSBlbmRzIC0tPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSAuc2VsZWN0LXNlcnZpY2lvIHN0YXJ0cyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RlZmF1bHRDb3VudHJpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtOCBoLTEwMCBhcnJvdy0zIGZvbnQtc2l6ZS00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17eyBsYWJlbDogc3RhdGUuY2l0eUxhYmVsLCB2YWx1ZTogc3RhdGUuY2l0eSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC0xMDAgdy1weC01MCBwb3MtYWJzLXRsIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBmb250LXNpemUtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1waW4tMyB0ZXh0LXByaW1hcnkgZm9udC13ZWlnaHQtYm9sZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSAuL3NlbGVjdC1zZXJ2aWNpbyBlbmRzIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSAuSGVybyBCdXR0b24gLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBsaW5lLWhlaWdodC1yZXNldCBoLTEwMCBidG4tc3VibWl0IHctMTAwIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJ1c2NhclxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gLi9IZXJvIEJ1dHRvbiAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gLi9zZWFyY2gtZm9ybSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS0zIHB0LTdcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbW9rZVwiPlNlYXJjaCBrZXl3b3JkcyBlLmcuPC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgUHJvZHVjdCBEZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIEhlcm8gUmlnaHQgSW1hZ2UgLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTQgY29sLXNtLTYgY29sLXhzLTYgY29sLTggcG9zLWFicy1iciB6LWluZGV4LW4xIHBvc2l0aW9uLXN0YXRpYyBwb3NpdGlvbi1tZC1hYnNvbHV0ZSBteC1hdXRvIG1sLW1kLWF1dG9cIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWRlbGF5PVwiNTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1sLXh4bC0yMyBtbC14bC0xMiBtbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nSH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy0xMDBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwhLS0gLi9IZXJvIFJpZ2h0IEltYWdlIC0tPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9