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
    value: state.service,
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
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-business-agent text-primary font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 27
    }
  }))), __jsx("div", {
    className: "form-group position-relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 23
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    options: defaultCountries,
    className: "pl-8 h-100 arrow-3 font-size-4 d-flex align-items-center w-100",
    border: false,
    value: {
      label: "Ad",
      value: state.city
    },
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-pin-3 text-primary font-weight-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 27
    }
  })))), __jsx("div", {
    className: "button-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
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
      lineNumber: 140,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: " ml-xxl-23 ml-xl-12 ml-md-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _assets_image_l1_png_hero_image_man_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    className: "w-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvbGFuZGluZzEvSGVyby5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Q291bnRyaWVzIiwidmFsdWUiLCJsYWJlbCIsImRlZmF1bHRTZXJ2aWNlcyIsIkhlcm8iLCJSZWFjdCIsInVzZVN0YXRlIiwibG9hZGluZyIsImVycm9yIiwic2VydmljZSIsImNpdHkiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsIm5ld1N0YXRlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImlkIiwiaW1nUCIsImltZ0giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxDQUN2QjtBQUFFQyxPQUFLLEVBQUUsSUFBVDtBQUFlQyxPQUFLLEVBQUU7QUFBdEIsQ0FEdUIsRUFFdkI7QUFBRUQsT0FBSyxFQUFFLElBQVQ7QUFBZUMsT0FBSyxFQUFFO0FBQXRCLENBRnVCLEVBR3ZCO0FBQUVELE9BQUssRUFBRSxLQUFUO0FBQWdCQyxPQUFLLEVBQUU7QUFBdkIsQ0FIdUIsRUFJdkI7QUFBRUQsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLE9BQUssRUFBRTtBQUF2QixDQUp1QixFQUt2QjtBQUFFRCxPQUFLLEVBQUUsSUFBVDtBQUFlQyxPQUFLLEVBQUU7QUFBdEIsQ0FMdUIsQ0FBekI7QUFRQSxJQUFNQyxlQUFlLEdBQUcsQ0FDdEI7QUFBRUYsT0FBSyxFQUFFLEdBQVQ7QUFBY0MsT0FBSyxFQUFFO0FBQXJCLENBRHNCLEVBRXRCO0FBQUVELE9BQUssRUFBRSxHQUFUO0FBQWNDLE9BQUssRUFBRTtBQUFyQixDQUZzQixFQUd0QjtBQUFFRCxPQUFLLEVBQUUsR0FBVDtBQUFjQyxPQUFLLEVBQUU7QUFBckIsQ0FIc0IsRUFJ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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVEYsQ0E3QkYsQ0FERixFQThDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyx5RUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBOUNGLENBTEYsQ0FGRixDQVRGLENBREYsRUErRUU7QUFDRSxhQUFTLEVBQUMseUhBRFo7QUFFRSxnQkFBUyxXQUZYO0FBR0UseUJBQWtCLE1BSHBCO0FBSUUsc0JBQWUsS0FKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRU8sOEVBQVY7QUFBZ0IsT0FBRyxFQUFDLEVBQXBCO0FBQXVCLGFBQVMsRUFBQyxPQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FORixDQS9FRixDQURGLENBTkYsQ0FGRixDQURGO0FBeUdELENBcklEOztHQUFNckIsSTs7S0FBQUEsSTtBQXVJU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQxMGQ1MDM2NTZhMWUxODcyYjA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db3JlXCI7XHJcbmltcG9ydCBpbWdIIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvbDEvcG5nL2hlcm8taW1hZ2UtbWFuLnBuZ1wiO1xyXG5pbXBvcnQgaW1nUCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3BhdHRlcm5zL2hlcm8tcGF0dGVybi5wbmdcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRDb3VudHJpZXMgPSBbXHJcbiAgeyB2YWx1ZTogXCJzcFwiLCBsYWJlbDogXCJBc3VuY2nDs25cIiB9LFxyXG4gIHsgdmFsdWU6IFwiYmRcIiwgbGFiZWw6IFwiTGFtYmFyw6lcIiB9LFxyXG4gIHsgdmFsdWU6IFwidXNhXCIsIGxhYmVsOiBcIlZpbGxhIEVsaXNhXCIgfSxcclxuICB7IHZhbHVlOiBcInVhZVwiLCBsYWJlbDogXCJMdXF1ZVwiIH0sXHJcbiAgeyB2YWx1ZTogXCJwa1wiLCBsYWJlbDogXCLDkWVtYnlcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgZGVmYXVsdFNlcnZpY2VzID0gW1xyXG4gIHsgdmFsdWU6IFwiMVwiLCBsYWJlbDogXCJNYW5pY3VyZVwiIH0sXHJcbiAgeyB2YWx1ZTogXCIyXCIsIGxhYmVsOiBcIkVuc2XDsWFuemEgZGUgaW5nbMOpc1wiIH0sXHJcbiAgeyB2YWx1ZTogXCIzXCIsIGxhYmVsOiBcIlBlcnNvbmFsIHRyYWluaW5nXCIgfSxcclxuICB7IHZhbHVlOiBcIjRcIiwgbGFiZWw6IFwiUHNpY8OzbG9nb1wiIH0sXHJcbiAgeyB2YWx1ZTogXCI1XCIsIGxhYmVsOiBcIkVuc2XDsWFuemEgbml2ZWwgaW5pY2lhbFwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBIZXJvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgc2VydmljZTogXCIxXCIsXHJcbiAgICBjaXR5OiBcInNwXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IG51bGwgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy9hd2FpdCBBdXRoU2VydmljZS5sb2dpbihzdGF0ZS5lbWFpbCwgc3RhdGUucGFzc3dvcmQpO1xyXG4gICAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9zZWFyY2gtbGlzdFwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBlcnJvciB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcbiAgICBjb25zb2xlLmxvZyhcImlkOlwiICsgZS50YXJnZXQuaWQgKyBcIiB2YWxvcjogXCIgKyBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBuZXdTdGF0ZVtlLnRhcmdldC5pZF0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1N0YXRlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDwhLS0gSGVybyBBcmVhIC0tPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC0xIHB0LTI2IHB0LW1kLTMyIHB0LWxnLTMzIHB0LXhsLTM1IHBvc2l0aW9uLXJlbGF0aXZlIHotaW5kZXgtMSBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICB7LyogPCEtLSAuSGVybyBwYXR0ZXJuIC0tPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcy1hYnMtdHIgdy01MCB6LWluZGV4LW4yXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17aW1nUH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiZ3Itb3BhY2l0eS0xXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPCEtLSAuL0hlcm8gcGF0dGVybiAtLT4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHBvc2l0aW9uLXJlbGF0aXZlIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXh4bC02IGNvbC14bC03IGNvbC1sZy04IGNvbC1tZC0xMiBwdC1sZy0xMyBwYi1sZy0zMyBwYi14bC0zNCBwYi1tZC0zMyBwYi0xMFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYW9zLWRlbGF5PVwiNTAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNpemUtMTEgbWItMTIgcHItbWQtMzAgcHItbGctMFwiPlxyXG4gICAgICAgICAgICAgICAgRW5jdWVudHJhIGFsIHByb2Zlc2lvbmFsIGlkZWFsLlxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIC5zZWFyY2gtZm9ybSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgICBhY3Rpb249XCIvXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm0gc2hhZG93LTZcIlxyXG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1zZWFyY2gtZm9ybS0xIGJnLXdoaXRlIHJvdW5kZWQtc20gc2hhZG93LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1pbnB1dHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvY3VzLXJlc2V0IHBsLTEzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJrZXl3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvYiB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtMTAwIHctcHgtNTAgcG9zLWFicy10bCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgZm9udC1zaXplLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tem9vbS0yIHRleHQtcHJpbWFyeSBmb250LXdlaWdodC1ib2xkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSAuc2VsZWN0LWNpdHkgc3RhcnRzIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGVmYXVsdFNlcnZpY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTggaC0xMDAgYXJyb3ctMyBmb250LXNpemUtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zZXJ2aWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoLTEwMCB3LXB4LTUwIHBvcy1hYnMtdGwgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZvbnQtc2l6ZS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWJ1c2luZXNzLWFnZW50IHRleHQtcHJpbWFyeSBmb250LXdlaWdodC1ib2xkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIC4vc2VsZWN0LWNpdHkgZW5kcyAtLT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gLnNlbGVjdC1zZXJ2aWNpbyBzdGFydHMgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtkZWZhdWx0Q291bnRyaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTggaC0xMDAgYXJyb3ctMyBmb250LXNpemUtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7IGxhYmVsOiBcIkFkXCIsIHZhbHVlOiBzdGF0ZS5jaXR5IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgtMTAwIHctcHgtNTAgcG9zLWFicy10bCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgZm9udC1zaXplLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tcGluLTMgdGV4dC1wcmltYXJ5IGZvbnQtd2VpZ2h0LWJvbGRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gLi9zZWxlY3Qtc2VydmljaW8gZW5kcyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gLkhlcm8gQnV0dG9uIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbGluZS1oZWlnaHQtcmVzZXQgaC0xMDAgYnRuLXN1Ym1pdCB3LTEwMCB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCdXNjYXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIC4vSGVybyBCdXR0b24gLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIC4vc2VhcmNoLWZvcm0gLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtMyBwdC03XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc21va2VcIj5TZWFyY2gga2V5d29yZHMgZS5nLjwvc3Bhbj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIFByb2R1Y3QgRGVzaWduZXJcclxuICAgICAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPCEtLSBIZXJvIFJpZ2h0IEltYWdlIC0tPiAqL31cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC00IGNvbC1zbS02IGNvbC14cy02IGNvbC04IHBvcy1hYnMtYnIgei1pbmRleC1uMSBwb3NpdGlvbi1zdGF0aWMgcG9zaXRpb24tbWQtYWJzb2x1dGUgbXgtYXV0byBtbC1tZC1hdXRvXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtbGVmdFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjUwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtbC14eGwtMjMgbWwteGwtMTIgbWwtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ0h9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInctMTAwXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIC4vSGVybyBSaWdodCBJbWFnZSAtLT4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==