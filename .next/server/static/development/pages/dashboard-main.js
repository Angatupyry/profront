module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/assets/image/table-one-profile-image-1.png":
/*!********************************************************!*\
  !*** ./src/assets/image/table-one-profile-image-1.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/image/table-one-profile-image-2.png":
/*!********************************************************!*\
  !*** ./src/assets/image/table-one-profile-image-2.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/image/table-one-profile-image-3.png":
/*!********************************************************!*\
  !*** ./src/assets/image/table-one-profile-image-3.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/image/table-one-profile-image-4.png":
/*!********************************************************!*\
  !*** ./src/assets/image/table-one-profile-image-4.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IB2cksfwAADEVJREFUeJytWFlsVOcZPXef3TNeMXjHbGUzENqEoHpSRUnUpIqJ1CYPlcpjHipBn/oY56VSpaohSh/60BbShyqtVEEbGnVJyzghTUJwDGYLGGyDwXgbz77eree/YxsICQlS72i2O/+9//m/73znO/+oeMhjYmIiKmu+513LHQCcqOPYUce1+yTXhuM4Z1zHSbuuMwnICb1c/kv3jh3ph7m/+nUHplKpgXzBPOACcRcOoPCTI0PmbxI/ulD4YvcBNk/YcB1rf9VQceXiaMKuVF7dtGN34v8CyDRLcdeVXllMF+OOJEF2JQ/E/MICTn10CrembmFudg4LiynU18fQ1dWBrdu2Yu3aTsgykcKNS5oRPz9yOuHCfHXrjsceCOyBgAqF5OFqtbhfdlW4rgWZgNxqFW/+5nc4/vbbqJo2srkiTNuGzZTJsgq/3w/DCKCruxM/ePEF7Nq1jdfxZrIUlxyVwD45tGXH7p88FKBUaiLqmtrRfCYbJy+g6wGmR8HizG389tAbGB0+A7tSRb5Y4kQKbLPCdw2WbaHER7Xi4NLFK3jtl2/g2e8+jZde2kc8TClD67ruwYtnTvdVXGXfji/g132ABGkzC5UTQLlPfBeAbJtckfwY/fhDBBipjsYGTNy+DaOhHrfn5+HXFRSrJkxHAOMtHZNzG0jNl3D8r++gs2MN9uzdKW4GSUTZdeOGZJ8YGRl54vOg7gOk2JWjriT1LV3o3SBWF8N7776PiUsXsao5yqlsRg3QQ3XwaTLS+QLK6UWopIxBQBG/j5yXYVoONNfBO387jl3f3IqAoXj3FE8efT7ZPcr3J74U0I2rlw8TQVxwRRwyky+xYv5x/B38+fd/xJbeVvSu70Z46zqMXbqCuWQK+ZQPAUVGtVhmpbnwKSpawiGEAxokVcVsuoTR08MYHTmHRx/t8xa4vFhWZXx4+INDu3Y9fvA+QBNjl+KQlP21C9yVC8Vx6/pN1IeCaG9pZvV0QNNVRMMaUgsZBA0Dp4YvoN6vgNOgtSGCLes60dHWhCpl4T8fnuMsrRi/Mo49jzFtEpYjxAo2RbUe2P/j/ceO/OpI4h5Amqq+4s0vXiTZExehL1apjIWpafT2rMLOvd9CU1MjKplZMBQwGgMI9XWjLaTg5kwSjbE6hAIqwhEffEE/JD2CZCqHm++PYPjUafxw//eXFumiapUxPjWOD/47jN7kZ6/w5B1A0xNXB8ibuDd46elK3mIwNzdHraugva0LwboI1GAE5bzgoQzJoRySI6saomgK61BZcTwJlYIIpksjl9atXwv/J+exuJCEbVnkngGHKxV0ELo2O3UZu810PDf4XDw8eDxRi5AkH/RweBDkGih4ooZ8Po9w2I+mlkZO5IOs+6D6Q1CKAUgsfYtP2zaZbVmQjpOocFQfdI4RE0YiQcSiYVANoJBfYtFcCocqWEhlkGa0YzEDGSs5yAnjqihzSZL7PVx3R4gP8eowCkbAj1AkwtXpXKUNxedjjg2UWeqWZRIIV6zyN5vjyQ95uZWoCvxBDfXRCAJ1QRi83hHLdB0vDgFFwTqRdj0F+9ZE/0gfoqpPUQZqGGoEdpfIrLJsxalwIISKacFHUIqiwbuXrENj6gTQQDCEEkXP5A8yI6UpktDIWq9jhYb9AayibqUlXit+E62O0dQkHZvW70Q9tQkz52BmbpIKUwMqJx/AMpm9MHlJIzAX1EP4mS7GA5FQSASa4ufAqtqolIGiraPIicqSSf2y2Gt9sBmpqsNo5WXohouYz0Ak2oSg3+D1DhTqlE1UKlHHmmII1e+FYu6CZlaxxrTiIqnRFSxeqNylCpOgsz8FrCpTpXgimEklKZAncOvWFGXiGgymZ+eGbnSvbiJfZKq1hQtXPsPI6BiqroJIYxBPPvsMfCR3hc1XKVcgBX2MouJNY1sudNkPm73P1mUGQe5ihFC3AsaLjDAQsvcwyA+FxGvrXA2TepO7eRO97OjqbIb9S0frmmb09LCKWsIoJXMkeRYRcqslFkVdy2r0rG2HyvKup2bJFRU5tpvw+igjpZBnNqqiEFwBziVFbJ4360SV9S1rkQDlyZsrwiqjpHGVqxvQUS7CUAzUs3fNXR1DmeV/nip9a3EWjbQZW77zFK59moCZlnF5bArn59KoYyqDdT7sWf8IcnQIYQINGToLmksV/GT6ZEk4K1HNbCkMAJ99qiu6cA0NavopE634xKEsYZQtmFn2KUEuTce6vp2QOemODZ2wsmms/cZmKNQdyWExsKpCXPW2VU1o29iN9T1trMIKIoaM6QtX0fPs85Cd2r1FPERk5Fot10SPLypPn+X79pX+skRo712M87EsG5tF34Gu+cgBmarNVDzxOBQ1gLZN21jqVZDXJGgMfXt2olIy0dTWglBdAC7bjEKQflaapGkrC/ea7IrauctJOssG7aYl3AHjKZDseoOEh/G3rEKpKsSvSuPlpwTYsJwqmjvXcNJ1UCJRyNWMN1YOkj8dLbBp2iSZUXBs+HxhZPi965Hd1CrVE88VinDFy45iaf40I4RJfuhfGXR3hGxCDUehN5RYESXqh+alUWLpCv2plrPQKJi0uIyE5PkgVYSflkRojej2lHdUXBORnl56PGlFXRyvyeKeg9AmRZWJpvajZVJLy6VWWwJcVUNTZyfmr495uRfndN2P3PQ4itOT6K6rZ6sr0s6WoRFOsVT0uOELUHd0URwSNuzaDSPSUOuPd1FjiTh3HVJC1cq+Y6avcvhusLLHelH+jkckidwx+VFXLPKGDoC/lbMp+CgFczdvQLVL1Jk8quxPDv21KGE5yObB+Odpb7VotMYdx1mJ/p2wSMvhESk+psa6Y+mZmZkhCmG/xyACEKZdcMhiK7Atg4ONmo9xbG9NJlMTbG6mA/RhlruP2Rvj3O6MoVgoYuOGdfRKfohiUsmXalW4S18tIUsdYcU13o3NxVB3d3fa6/auqwwyzidcb7zslaFJUXSo0nzxtEJnQ61kkjBYKQ4jMp/JwC0tIjczj+mxcRRSBbYKA+PXr7MygY3bNiFcNigJ9R7nvEJfItCKa4R7J32uNCjePECtrU2JmZn5IQ7t9/o0yejQzAvmKR4RqdqU/+Qsic3oOZUCpq+NQ6P6BgsmQlnuuNLUK6mKKsGEuxrotTVuo4pQ9Ppaw76XvZ//PtTe3Z5YAVSLEgZpXU8IBgnUCqvJFa2ZORZGLBhuwkTuHLlheRzavHsXG24jzJkMC2kUiubCT/sa6Wimt8kwIg5KeerRaqZPIvdoZ2tyqEGjhIh7iL0JlVJMP7iMYwWQiNLU1PTrmWzpQDKZxTydYjabZenbtD6sHzOH9WtiSBVzvBNbiU9HNp9EOj2HsZlrBJFHOx2BptCJWTIyGRML2QJaGZ3RT89BCTRxN8KNJG0LzSUNpQRL8fZqr3e316JzDyBxtLevPvi9F17uY0T7hQYptAii60cjBp7v34ierk5cu3wZMrv0bTbK5lXN0IMK6lpjnnELBQPeDjZfJpiFRXT1tkMpLeD6yGn86e8naVVicHz0UZq4ZwDBUGToD0d+cfBuDPfty3KL5QEjHEqoirJdJqB8vsgVqXhkcy/5ZGNVWwcmL54ngSMkgkr1pq1lj4vU06hVHZQJZp6NN0z/E6RbhFPG1haatH2P4Wdvvo9cyUaRdmN+oXBWd+YGPj//fYASiSPpvr6BOLv9saaG5n6HVZbN8yYldmyXXprg2nu6cOXqVcxcmUSE2+zp2UV6Y1bdfAoZbhjFTnV1awvlwyVIC362ogbuxtfw5cz1aaiRxqHWxrYBMddXAhLHmTPHxMD4c/t+emhxce5AjlU28tkknmlvoRZV2JMUbNq2BWnuyy4MjzA9SVZUAY2NMezYvpFk93t7O5omuBWLWmQhnbNxaXyK6XRen71x5uDlL5r4ywAtH8eP/vzg3idfPpYpWIP//ni0/6mnH6cv0pC1ChB6Xcd92JZN62GU8sgVstydhDyZ8P6FEVXFjaDFiiqXZPzrvfNDiwVzcDY9mXjQnF/5/9DJd38tbhDXlZfi7yZGBr+9c22/+HulUi5Qd2obSrNS8SqrUhSthV2foFw/W4gitlHm0IVrC4OH/v7PBwL52oCWj49OvpV48eRb8aOHX4tu7uoaqJRKcRrcrlxyMVoqm9urFZFK6awpVWgh5EnbNBNaBcf2DR56qL/0/gch7Xl35aWUjwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/image/table-one-profile-image-5.png":
/*!********************************************************!*\
  !*** ./src/assets/image/table-one-profile-image-5.png ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/Core/A.js":
/*!**********************************!*\
  !*** ./src/components/Core/A.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\A.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 35px;
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
  &:hover,
  &:active,
  &.active {
    ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
    text-decoration: none;
  }
`;

const A = (_ref) => {
  let {
    href = "#"
  } = _ref,
      props = _objectWithoutProperties(_ref, ["href"]);

  return __jsx(Paragraph, _extends({
    href: href,
    color: "secondary"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (A);

/***/ }),

/***/ "./src/components/Core/Badge.js":
/*!**************************************!*\
  !*** ./src/components/Core/Badge.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\Badge.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const BadgeSolid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.41px;
  border-radius: 5px;
  padding: 4px 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["background"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["border"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["flexbox"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"]};
`;

const Badge = (_ref) => {
  let {
    color = "light",
    bg = "primary"
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["color", "bg"]);

  return __jsx(BadgeSolid, _extends({
    color: color,
    border: `1px solid`,
    borderColor: bg,
    bg: bg
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./src/components/Core/Box.js":
/*!************************************!*\
  !*** ./src/components/Core/Box.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  box-sizing: border-box;
  min-width: 0;
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["flexbox"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["grid"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["background"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["border"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["position"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_1__["shadow"]};
`;
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./src/components/Core/Button.js":
/*!***************************************!*\
  !*** ./src/components/Core/Button.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ButtonSolid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.75rem 1.5625rem;
  font-size: 1.1rem;
  line-height: 1.88;
  border-radius: 8px;

  min-width: 175px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;

  &:active:focus,
  &.active:focus,
  &:focus {
    outline: none;
    box-shadow: ${({
  theme,
  bg
}) => `0 0 0 0.2rem ${Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])(theme.colors[bg], 0.5)}`};
    background-color: ${({
  theme,
  bg
}) => Object(polished__WEBPACK_IMPORTED_MODULE_2__["darken"])(0.0765, Object(polished__WEBPACK_IMPORTED_MODULE_2__["desaturate"])(0.18, theme.colors[bg]))};
  }

  &:hover {
    @media ${_utils__WEBPACK_IMPORTED_MODULE_4__["device"].md} {
      transform: translateY(-8px);
    }
  }

  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["background"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["border"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["shadow"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["flexbox"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["layout"]};
`;

const Button = (_ref) => {
  let {
    variant = "solid",
    color = "light",
    bg = "primary"
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["variant", "color", "bg"]);

  return variant === "solid" ? __jsx(ButtonSolid, _extends({
    color: color,
    borderColor: bg,
    bg: bg
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  })) : __jsx(ButtonSolid, _extends({
    color: color,
    border: `1px solid`,
    borderColor: bg,
    bg: bg
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Core/Checkbox.js":
/*!*****************************************!*\
  !*** ./src/components/Core/Checkbox.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\Checkbox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const CheckStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.label`
  display: inline-flex;
  cursor: pointer;

  input:checked ~ .check::before {
    content: "\f14a";
    font-family: "Font Awesome 5 free";
    font-weight: 900;
    color: ${({
  theme
}) => theme.colors.secondary};
  }

  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["border"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["shadow"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["flexbox"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_3__["layout"]};
`;
const Check = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span`
  position: relative;
  line-height: 1;
  top: -2px;
  margin-right: 8px;
  min-height: 20px;
  min-width: 20px;
  &::before {
    content: "\f0c8";
    font-family: "Font Awesome 5 free";
    font-size: 19px;
    color: #e2e4e8;
  }
`;
const Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p`
  color: ${({
  theme
}) => theme.colors.text};
  font-size: 16px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 0;
`;

const Checkbox = (_ref) => {
  let {
    children = "Keep me signed in",
    onClick = () => {}
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "onClick"]);

  const uID = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniqueId"])("check_");
  return __jsx(CheckStyled, _extends({}, rest, {
    htmlFor: uID,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }), __jsx("input", {
    className: "d-none",
    type: "checkbox",
    id: uID,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }), __jsx(Check, {
    className: "check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx(Text, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./src/components/Core/Input.js":
/*!**************************************!*\
  !*** ./src/components/Core/Input.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\Input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const InputSolid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`
  font-size: 18px;
  font-weight: 300;
  letter-spacing: -0.56px;
  display: block;
  padding: 1.275rem 1.75rem;
  background-clip: padding-box;
  border: ${({
  theme
}) => `1px solid ${theme.colors.border}`};
  border-radius: 10px;
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["border"]};
  &:focus,
  &:active,
  &.active {
    border-color: ${({
  theme,
  focusColor
}) => theme.colors[focusColor]};
    outline: 0;
    box-shadow: none;
  }
`;
const InputAnimation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["border"]};
  input {
    width: 100%;
    padding: 1.275rem 1rem;
    border: ${({
  theme
}) => `1px solid ${theme.colors.border}`};
    background-color: ${({
  theme
}) => theme.colors.light};
    color: ${({
  theme
}) => theme.colors.dark};
    font-size: 21px;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: -0.56px;
    border-radius: 10px;
    background-clip: padding-box;
    transition: all 0.3s ease-out;
    &:focus {
      border: ${({
  theme
}) => `1px solid ${theme.colors.secondary}`};
      outline: none;
    }
  }
  input:focus ~ label {
    top: 0px;
    left: 15px;
  }

  label {
    background-color: ${({
  theme
}) => theme.colors.light};
    font-size: 18px;
    font-weight: 300;
    color: ${({
  theme
}) => theme.colors.darkShade};
    top: 50%;
    padding: 0 10px;
    left: 15px;
    border-radius: 5px;
    margin-bottom: 0;
    transform: translateY(-50%);
    position: absolute;
    transition: 0.4s;
    pointer-events: none;
  }
`;

const Input = (_ref) => {
  let {
    variant = "solid",
    type = "text",
    focusColor = "secondary",
    placeholder,
    css
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["variant", "type", "focusColor", "placeholder", "css"]);

  return variant === "animation" ? __jsx(InputAnimation, _extends({
    css: css
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }), __jsx("input", {
    width: "100%",
    type: type,
    color: "text",
    bg: "light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, placeholder)) : __jsx(InputSolid, _extends({
    width: "100%",
    type: type,
    color: "text",
    bg: "light",
    placeholder: placeholder,
    focusColor: focusColor,
    css: css
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/components/Core/InputGroup.js":
/*!*******************************************!*\
  !*** ./src/components/Core/InputGroup.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./src/components/Core/Input.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\InputGroup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const InputGroupStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: relative;
`;
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: absolute;
  margin-top: -2px;
  top: 50%;
  left: 27px;
  font-size: 19px;
  color: ${({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])(theme.colors.dark, 0.4)};
  transform: translateY(-50%);
`;

const InputGroup = (_ref) => {
  let {
    type = "text",
    focusColor = "secondary",
    icon = __jsx("span", {
      className: "far fa-envelope",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }
    })
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["type", "focusColor", "icon"]);

  return __jsx(InputGroupStyled, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    width: "100%",
    type: type,
    color: "text",
    bg: "light",
    focusColor: focusColor,
    pl: "4.125rem"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  })), __jsx(Icon, {
    className: "d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, icon));
};

/* harmony default export */ __webpack_exports__["default"] = (InputGroup);

/***/ }),

/***/ "./src/components/Core/List.js":
/*!*************************************!*\
  !*** ./src/components/Core/List.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul`
  li {
    color: ${({
  theme
}) => theme.colors.text};
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 28px;
    margin-left: 20px;
    margin-bottom: 17px;
    display: flex;
    &:before {
      content: "";
      min-width: 10px;
      max-width: 10px;
      min-height: 10px;
      max-height: 10px;
      background-color: ${({
  theme
}) => theme.colors.dark};
      display: block;
      border-radius: 500px;
      margin-right: 15px;
      margin-top: 10px;
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/components/Core/Section.js":
/*!****************************************!*\
  !*** ./src/components/Core/Section.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box */ "./src/components/Core/Box.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\Section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Section = (_ref) => {
  let {
    variant = "section"
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["variant"]);

  return variant === "hero" ? __jsx(_Box__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    pt: ["8.4375rem", null, null, "11.25rem"],
    pb: ["3.75rem", null, null, "8.4375rem"]
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  })) : __jsx(_Box__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    py: ["3.75rem", null, null, "7.5rem"]
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/components/Core/Select.js":
/*!***************************************!*\
  !*** ./src/components/Core/Select.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\Select.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const defaultOptions = [{
  value: "chocolate",
  label: "Chocolate"
}, {
  value: "strawberry",
  label: "Strawberry"
}, {
  value: "vanilla",
  label: "Vanilla"
}];

const getCustomStyles = (theme, accentColor, bg, border, indicator) => {
  return {
    dropdownIndicator: () => {
      return {
        display: !indicator && "none"
      };
    },
    indicatorSeparator: () => {},
    option: (provided, state) => {
      return _objectSpread(_objectSpread({}, provided), {}, {
        color: state.isSelected ? theme.colors[accentColor] : theme.colors.dark,
        textAlign: "left",
        backgroundColor: bg
      });
    },
    control: (provided, state) => {
      return _objectSpread(_objectSpread({}, provided), {}, {
        border: !border ? "none" : state.menuIsOpen || state.isFocused ? `1px solid ${theme.colors[accentColor]} !important` : `1px solid ${theme.colors.border} !important`,
        borderRadius: 10,
        padding: "0.25rem 1rem",
        width: "100%",
        height: "45px",
        outline: "none",
        boxShadow: "none",
        textAlign: "left",
        backgroundColor: bg
      });
    }
  };
};

const SelectStyled = (_ref) => {
  let {
    theme,
    bg = "#fff",
    border = true,
    accentColor = "success",
    name = "item",
    indicator = true,
    options = defaultOptions
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["theme", "bg", "border", "accentColor", "name", "indicator", "options"]);

  return __jsx(react_select__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    styles: getCustomStyles(theme, accentColor, bg, border, indicator),
    defaultValue: options[1],
    name: name,
    options: options,
    instanceId: "inId"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(SelectStyled));

/***/ }),

/***/ "./src/components/Core/Span.js":
/*!*************************************!*\
  !*** ./src/components/Core/Span.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\Span.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const SpanStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
`;

const Span = (_ref) => {
  let props = Object.assign({}, _ref);
  return __jsx(SpanStyled, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Span);

/***/ }),

/***/ "./src/components/Core/Switch.js":
/*!***************************************!*\
  !*** ./src/components/Core/Switch.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\Switch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const SwitchStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: inline-block;
  cursor: pointer;
  width: 72px;
  height: 33px;
  border-radius: 17px;
  transition: all 0.3s ease-out;
  background: ${({
  active,
  theme,
  bg
}) => active ? theme.colors[bg] : `#eae9f2`};
  position: relative;
  margin: 0 15px;
  white-space: nowrap;
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["border"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["flexbox"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"]};
`;
const Round = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`
  width: 21px;
  height: 21px;
  background-color: #ffffff;
  position: absolute;
  transition: all 0.3s ease-out;
  left: ${({
  active
}) => active ? `calc(100% - 33px)` : `0`};
  margin-left: 6px;
  top: 0;
  margin-top: 6px;
  transition: 0.4s;
  border-radius: 500px;
  pointer-events: none;
`;

const Switch = (_ref) => {
  let {
    bg = "secondary",
    onClick = () => {}
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["bg", "onClick"]);

  const {
    0: active,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleSwitch = () => {
    setActive(!active);
    onClick();
  };

  return __jsx(SwitchStyled, _extends({
    bg: bg
  }, rest, {
    onClick: handleSwitch,
    active: active ? 1 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }), __jsx(Round, {
    active: active ? 1 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./src/components/Core/Text.js":
/*!*************************************!*\
  !*** ./src/components/Core/Text.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\Text.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  font-size: 1.0625rem;
  letter-spacing: -0.2px;
  line-height: 1.71;
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
`;
const ParagraphLarge = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  font-size: 1.1875rem;
  letter-spacing: -0.2px;
  line-height: 1.69;
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
`;
const ParagraphSmall = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p`
  font-size: 0.9375rem;
  letter-spacing: -0.1px;
  line-height: 1.73;
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
`;

const Text = (_ref) => {
  let {
    variant
  } = _ref,
      props = _objectWithoutProperties(_ref, ["variant"]);

  let TextRender;

  switch (variant) {
    case "sm":
      TextRender = ParagraphSmall;
      break;

    case "lg":
      TextRender = ParagraphLarge;
      break;

    default:
      TextRender = Paragraph;
  }

  return __jsx(TextRender, _extends({
    color: "text"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./src/components/Core/Title.js":
/*!**************************************!*\
  !*** ./src/components/Core/Title.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Core\\Title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2`
  font-size: calc(1.35rem + 1.2vw);
  letter-spacing: -1.2px;
  line-height: 1.3;

  @media ${_utils__WEBPACK_IMPORTED_MODULE_3__["device"].xl} {
    font-size: 2.25rem;
  }

  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
`;
const HeroTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`
  font-size: calc(1.5rem + 3vw);

  letter-spacing: -2px;
  line-height: 1.083;

  @media ${_utils__WEBPACK_IMPORTED_MODULE_3__["device"].xl} {
    font-size: 3.75rem;
  }
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
`;
const PreTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h4`
  font-size: 0.8125rem;
  line-height: 1.63;
  text-transform: uppercase;
  color: ${({
  theme
}) => theme.colors.secondary} !important;
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
`;
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.66px;
  line-height: 28px;
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["color"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["typography"]};
  ${styled_system__WEBPACK_IMPORTED_MODULE_2__["shadow"]};
`;

const Title = (_ref) => {
  let {
    variant
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["variant"]);

  let TitleStyled = SectionTitle;

  switch (variant) {
    case "pre":
      TitleStyled = PreTitle;
      break;

    case "card":
      TitleStyled = CardTitle;
      break;

    case "hero":
      TitleStyled = HeroTitle;
      break;

    default:
      TitleStyled = SectionTitle;
  }

  return __jsx(TitleStyled, _extends({
    color: "heading"
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./src/components/Core/index.js":
/*!**************************************!*\
  !*** ./src/components/Core/index.js ***!
  \**************************************/
/*! exports provided: Box, Title, Text, A, Badge, Button, Section, Input, Checkbox, InputGroup, Select, Switch, Span, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ "./src/components/Core/Box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _Box__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title */ "./src/components/Core/Title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _Title__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text */ "./src/components/Core/Text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _A__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./A */ "./src/components/Core/A.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A", function() { return _A__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Badge */ "./src/components/Core/Badge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _Badge__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./src/components/Core/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Section */ "./src/components/Core/Section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Input */ "./src/components/Core/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Checkbox */ "./src/components/Core/Checkbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _InputGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./InputGroup */ "./src/components/Core/InputGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return _InputGroup__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Select */ "./src/components/Core/Select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _Select__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Switch */ "./src/components/Core/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _Span__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Span */ "./src/components/Core/Span.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return _Span__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./List */ "./src/components/Core/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _List__WEBPACK_IMPORTED_MODULE_13__["default"]; });

















/***/ }),

/***/ "./src/components/PageWrapper/PageWrapper.js":
/*!***************************************************!*\
  !*** ./src/components/PageWrapper/PageWrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const headerConfigDefault = {
  theme: "light",
  bgClass: "dynamic-sticky-bg",
  variant: "primary",
  align: "right",
  isFluid: false,
  button: "account",
  // profile, cart, cta, account, null
  buttonText: "Get started free",
  // profile, cart, cta, account, null
  reveal: true
};
const footerConfigDefault = {
  theme: "dark",
  style: "style1" //style1, style2, style3

};

const PageWrapper = ({
  children,
  headerConfig = null,
  footerConfig = null
}) => {
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (gContext.themeDark) {
      gContext.setHeader(_objectSpread(_objectSpread(_objectSpread({}, headerConfigDefault), headerConfig), {}, {
        theme: "dark"
      }));
      gContext.setFooter(_objectSpread(_objectSpread(_objectSpread({}, footerConfigDefault), footerConfig), {}, {
        theme: "dark"
      }));
    } else {
      gContext.setHeader(_objectSpread(_objectSpread({}, headerConfigDefault), headerConfig));
      gContext.setFooter(_objectSpread(_objectSpread({}, footerConfigDefault), footerConfig));
    }
  }, [gContext.themeDark]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
};

/* harmony default export */ __webpack_exports__["default"] = (PageWrapper);

/***/ }),

/***/ "./src/components/PageWrapper/index.js":
/*!*********************************************!*\
  !*** ./src/components/PageWrapper/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageWrapper */ "./src/components/PageWrapper/PageWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PageWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/context/GlobalContext.js":
/*!**************************************!*\
  !*** ./src/context/GlobalContext.js ***!
  \**************************************/
/*! exports provided: default, GlobalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalProvider", function() { return GlobalProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\context\\GlobalContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const GlobalContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

const GlobalProvider = ({
  children
}) => {
  const {
    0: themeDark,
    1: setThemeDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showSidebarDashboard,
    1: setShowSidebarDashboard
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: applicationModalVisible,
    1: setApplicationModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: signInModalVisible,
    1: setSignInModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: signUpModalVisible,
    1: setSignUpModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: videoModalVisible,
    1: setVideoModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: visibleOffCanvas,
    1: setVisibleOffCanvas
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: header,
    1: setHeader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    theme: "light",
    bgClass: "default",
    variant: "primary",
    align: "left",
    isFluid: false,
    button: "cta",
    // profile, account, null
    buttonText: "Get started free",
    // profile, account, null
    reveal: true
  });
  const {
    0: footer,
    1: setFooter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    theme: "dark",
    style: "style1" //style1, style2

  });

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  const toggleSidebarDashboard = () => {
    setShowSidebarDashboard(!showSidebarDashboard);
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleApplicationModal = () => {
    setApplicationModalVisible(!applicationModalVisible);
  };

  const toggleSignInModal = () => {
    setSignInModalVisible(!signInModalVisible);
  };

  const toggleSignUpModal = () => {
    setSignUpModalVisible(!signUpModalVisible);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  const closeOffCanvas = () => {
    setVisibleOffCanvas(false);
  };

  return __jsx(GlobalContext.Provider, {
    value: {
      themeDark,
      toggleTheme,
      showSidebarDashboard,
      toggleSidebarDashboard,
      videoModalVisible,
      toggleVideoModal,
      applicationModalVisible,
      toggleApplicationModal,
      signInModalVisible,
      toggleSignInModal,
      signUpModalVisible,
      toggleSignUpModal,
      visibleOffCanvas,
      toggleOffCanvas,
      closeOffCanvas,
      header,
      setHeader,
      footer,
      setFooter
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (GlobalContext);


/***/ }),

/***/ "./src/pages/dashboard-main.js":
/*!*************************************!*\
  !*** ./src/pages/dashboard-main.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PageWrapper */ "./src/components/PageWrapper/index.js");
/* harmony import */ var _components_Core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Core */ "./src/components/Core/index.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _assets_image_table_one_profile_image_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/image/table-one-profile-image-1.png */ "./src/assets/image/table-one-profile-image-1.png");
/* harmony import */ var _assets_image_table_one_profile_image_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_table_one_profile_image_1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_table_one_profile_image_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/image/table-one-profile-image-2.png */ "./src/assets/image/table-one-profile-image-2.png");
/* harmony import */ var _assets_image_table_one_profile_image_2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_table_one_profile_image_2_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_table_one_profile_image_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/image/table-one-profile-image-3.png */ "./src/assets/image/table-one-profile-image-3.png");
/* harmony import */ var _assets_image_table_one_profile_image_3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_table_one_profile_image_3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_table_one_profile_image_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/image/table-one-profile-image-4.png */ "./src/assets/image/table-one-profile-image-4.png");
/* harmony import */ var _assets_image_table_one_profile_image_4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_table_one_profile_image_4_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_image_table_one_profile_image_5_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/image/table-one-profile-image-5.png */ "./src/assets/image/table-one-profile-image-5.png");
/* harmony import */ var _assets_image_table_one_profile_image_5_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_table_one_profile_image_5_png__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\pages\\dashboard-main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const defaultJobs = [{
  value: "pd",
  label: "Product Designer"
}, {
  value: "gd",
  label: "Graphics Designer"
}, {
  value: "fd",
  label: "Frontend Developer"
}, {
  value: "bd",
  label: "Backend Developer"
}, {
  value: "cw",
  label: "Content Writer"
}];

const DashboardMain = () => {
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    headerConfig: {
      button: "profile",
      isFluid: true,
      bgClass: "bg-default",
      reveal: false
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "dashboard-main-container mt-25 mt-lg-31",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-xxl-3 col-xl-4 col-lg-6 col-sm-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/#",
    className: "media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "text-blue bg-blue-opacity-1 circle-56 font-size-6 mr-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-briefcase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, __jsx("h5", {
    className: "font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "counter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 6,
    end: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 27
    }
  })))), __jsx("p", {
    className: "font-size-4 font-weight-normal text-gray mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "Posted Jobs")))), __jsx("div", {
    className: "col-xxl-3 col-xl-4 col-lg-6 col-sm-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/#",
    className: "media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "text-pink bg-pink-opacity-1 circle-56 font-size-6 mr-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, __jsx("h5", {
    className: "font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "counter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 4,
    end: 256,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 27
    }
  })))), __jsx("p", {
    className: "font-size-4 font-weight-normal text-gray mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, "Total Applicants")))), __jsx("div", {
    className: "col-xxl-3 col-xl-4 col-lg-6 col-sm-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/#",
    className: "media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "text-orange bg-orange-opacity-1 circle-56 font-size-6 mr-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-eye",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx("h5", {
    className: "font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "counter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 4,
    decimal: ".",
    decimals: 1,
    end: 16.5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 27
    }
  })), "K")), __jsx("p", {
    className: "font-size-4 font-weight-normal text-gray mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, "Jobs View")))), __jsx("div", {
    className: "col-xxl-3 col-xl-4 col-lg-6 col-sm-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "/#",
    className: "media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "text-egg-blue bg-egg-blue-opacity-1 circle-56 font-size-6 mr-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-mouse-pointer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, __jsx("h5", {
    className: "font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "counter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 4,
    decimal: ".",
    decimals: 1,
    end: 18.6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 27
    }
  })), "%")), __jsx("p", {
    className: "font-size-4 font-weight-normal text-gray mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, "Applied Rate"))))), __jsx("div", {
    className: "mb-14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row mb-11 align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6 mb-lg-0 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "font-size-6 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }, "Applicants List (12)")), __jsx("div", {
    className: "col-lg-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "d-flex flex-wrap align-items-center justify-content-lg-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "font-size-4 mb-0 mr-6 py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, "Filter by Job:"), __jsx("div", {
    className: "h-px-48",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    options: defaultJobs,
    className: "pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100",
    border: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }))))), __jsx("div", {
    className: "bg-white shadow-8 pt-7 rounded pb-8 px-11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "table-responsive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx("table", {
    className: "table table-striped",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 19
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 21
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 23
    }
  }, __jsx("th", {
    scope: "col",
    className: "pl-0  border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 25
    }
  }, "Name"), __jsx("th", {
    scope: "col",
    className: "border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 25
    }
  }, "Applied as"), __jsx("th", {
    scope: "col",
    className: "border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }, "Applied on"), __jsx("th", {
    scope: "col",
    className: "border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 25
    }
  }), __jsx("th", {
    scope: "col",
    className: "border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 25
    }
  }), __jsx("th", {
    scope: "col",
    className: "border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 25
    }
  }))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  }, __jsx("tr", {
    className: "border border-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 23
    }
  }, __jsx("th", {
    scope: "row",
    className: "pl-6 border-0 py-7 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/candidate-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "media min-width-px-235 align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "circle-36 mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 31
    }
  }, __jsx("img", {
    src: _assets_image_table_one_profile_image_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 33
    }
  })), __jsx("h4", {
    className: "font-size-4 mb-0 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 31
    }
  }, "Nicolas Bradley")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-235 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 27
    }
  }, "Senior Project Manager")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-170 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 27
    }
  }, "12 July, 2020")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-170 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-black-2 text-uppercase",
    onClick: e => {
      e.preventDefault();
      gContext.toggleApplicationModal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 29
    }
  }, "View Application"))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-110 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 font-weight-bold text-green text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 31
    }
  }, "Contact")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-100 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 font-weight-bold text-red-2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 31
    }
  }, "Reject"))))), __jsx("tr", {
    className: "border border-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 23
    }
  }, __jsx("th", {
    scope: "row",
    className: "pl-6 border-0 py-7 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/candidate-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "media min-width-px-235 align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "circle-36 mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 31
    }
  }, __jsx("img", {
    src: _assets_image_table_one_profile_image_2_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "",
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 33
    }
  })), __jsx("h4", {
    className: "font-size-4 mb-0 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 31
    }
  }, "Elizabeth Gomez")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-235 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 27
    }
  }, "Senior Project Manager")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-170 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 27
    }
  }, "14 July, 2020")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-170 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-black-2 text-uppercase",
    onClick: e => {
      e.preventDefault();
      gContext.toggleApplicationModal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 29
    }
  }, "View Application"))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-110 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 font-weight-bold text-green text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 31
    }
  }, "Contact")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-100 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 font-weight-bold text-red-2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 31
    }
  }, "Reject"))))), __jsx("tr", {
    className: "border border-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 23
    }
  }, __jsx("th", {
    scope: "row",
    className: "pl-6 border-0 py-7 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/candidate-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "media min-width-px-235 align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "circle-36 mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 31
    }
  }, __jsx("img", {
    src: _assets_image_table_one_profile_image_3_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "",
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 33
    }
  })), __jsx("h4", {
    className: "font-size-4 mb-0 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 31
    }
  }, "Joe Wade")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-235 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 27
    }
  }, "Head of Marketing")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-170 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 27
    }
  }, "14 July, 2020")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-170 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-black-2 text-uppercase",
    onClick: e => {
      e.preventDefault();
      gContext.toggleApplicationModal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 29
    }
  }, "View Application"))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-110 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 font-weight-bold text-green text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 31
    }
  }, "Contact")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-100 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 font-weight-bold text-red-2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 31
    }
  }, "Reject"))))), __jsx("tr", {
    className: "border border-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 23
    }
  }, __jsx("th", {
    scope: "row",
    className: "pl-6 border-0 py-7 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/candidate-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "media min-width-px-235 align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "circle-36 mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 31
    }
  }, __jsx("img", {
    src: _assets_image_table_one_profile_image_4_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 33
    }
  })), __jsx("h4", {
    className: "font-size-4 mb-0 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 31
    }
  }, "Roger Hawkins")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-235 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 27
    }
  }, "UI Designer")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-170 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 27
    }
  }, "16 July, 2020")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-170 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-black-2 text-uppercase",
    onClick: e => {
      e.preventDefault();
      gContext.toggleApplicationModal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 29
    }
  }, "View Application"))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-110 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 font-weight-bold text-green text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 31
    }
  }, "Contact")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-100 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 font-weight-bold text-red-2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 31
    }
  }, "Reject"))))), __jsx("tr", {
    className: "border border-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 23
    }
  }, __jsx("th", {
    scope: "row",
    className: "pl-6 border-0 py-7 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/candidate-profile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "media min-width-px-235 align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "circle-36 mr-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 31
    }
  }, __jsx("img", {
    src: _assets_image_table_one_profile_image_5_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "",
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 33
    }
  })), __jsx("h4", {
    className: "font-size-4 mb-0 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 31
    }
  }, "Marie Green")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-235 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 27
    }
  }, "Senior Project Manager")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-170 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 27
    }
  }, "21 July, 2020")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-170 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 27
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-black-2 text-uppercase",
    onClick: e => {
      e.preventDefault();
      gContext.toggleApplicationModal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 29
    }
  }, "View Application"))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-110 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 font-weight-bold text-green text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 31
    }
  }, "Contact")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-100 pr-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 font-weight-bold text-red-2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 31
    }
  }, "Reject")))))))), __jsx("div", {
    className: "pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 17
    }
  }, __jsx("nav", {
    "aria-label": "Page navigation example",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 19
    }
  }, __jsx("ul", {
    className: "pagination pagination-hover-primary rounded-0 ml-n2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "page-item rounded-0 flex-all-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#",
    className: "page-link rounded-0 border-0 px-3active",
    "aria-label": "Previous",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fas fa-chevron-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 27
    }
  }))), __jsx("li", {
    className: "page-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#",
    className: "page-link border-0 font-size-4 font-weight-semibold px-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 25
    }
  }, "1")), __jsx("li", {
    className: "page-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#",
    className: "page-link border-0 font-size-4 font-weight-semibold px-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 25
    }
  }, "2")), __jsx("li", {
    className: "page-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#",
    className: "page-link border-0 font-size-4 font-weight-semibold px-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 25
    }
  }, "3")), __jsx("li", {
    className: "page-item disabled",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#",
    className: "page-link border-0 font-size-4 font-weight-semibold px-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 25
    }
  }, "...")), __jsx("li", {
    className: "page-item ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#",
    className: "page-link border-0 font-size-4 font-weight-semibold px-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 25
    }
  }, "7")), __jsx("li", {
    className: "page-item rounded-0 flex-all-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#",
    className: "page-link rounded-0 border-0 px-3",
    "aria-label": "Next",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fas fa-chevron-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 27
    }
  })))))))), __jsx("div", {
    className: "mb-18",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row mb-11 align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-6 mb-lg-0 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "font-size-6 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 19
    }
  }, "Posted Jobs (4)")), __jsx("div", {
    className: "col-lg-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "d-flex flex-wrap align-items-center justify-content-lg-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "font-size-4 mb-0 mr-6 py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 21
    }
  }, "Filter by Job:"), __jsx("div", {
    className: "h-px-48",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 21
    }
  }, __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    options: defaultJobs,
    className: "pl-0 h-100 arrow-3 arrow-3-black min-width-px-273  text-black-2 d-flex align-items-center w-100",
    border: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 23
    }
  }))))), __jsx("div", {
    className: "bg-white shadow-8 pt-7 rounded pb-9 px-11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "table-responsive ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 17
    }
  }, __jsx("table", {
    className: "table table-striped",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 19
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 21
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 23
    }
  }, __jsx("th", {
    scope: "col",
    className: "pl-0 border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 25
    }
  }, "Name"), __jsx("th", {
    scope: "col",
    className: "pl-4 border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 25
    }
  }, "Job Type"), __jsx("th", {
    scope: "col",
    className: "pl-4 border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 25
    }
  }, "City"), __jsx("th", {
    scope: "col",
    className: "pl-4 border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 25
    }
  }, "Created on"), __jsx("th", {
    scope: "col",
    className: "pl-4 border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 25
    }
  }, "Total Applicants"), __jsx("th", {
    scope: "col",
    className: "pl-4 border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 25
    }
  }), __jsx("th", {
    scope: "col",
    className: "pl-4 border-0 font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 25
    }
  }))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 21
    }
  }, __jsx("tr", {
    className: "border border-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 23
    }
  }, __jsx("th", {
    scope: "row",
    className: "pl-6 border-0 py-7 min-width-px-235",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/job-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-4 mb-0 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 31
    }
  }, "Senior Project Manager")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-135",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 27
    }
  }, "Full-Time")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-125",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639,
      columnNumber: 27
    }
  }, "New York")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-155",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 27
    }
  }, "12 July, 2020")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-205",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-bold text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 27
    }
  }, "47")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-80",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-green text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 27
    }
  }, "Edit")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-red-2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 27
    }
  }, "Delete"))), __jsx("tr", {
    className: "border border-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 23
    }
  }, __jsx("th", {
    scope: "row",
    className: "pl-6 border-0 py-7 min-width-px-235",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/job-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-4 mb-0 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 31
    }
  }, "UI Designer")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-135",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 27
    }
  }, "Full-Time")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-125",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 27
    }
  }, "Remote")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-155",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 27
    }
  }, "24 June, 2020")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-205",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-bold text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 27
    }
  }, "145")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-80",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-green text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 27
    }
  }, "Edit")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-red-2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 27
    }
  }, "Delete"))), __jsx("tr", {
    className: "border border-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720,
      columnNumber: 23
    }
  }, __jsx("th", {
    scope: "row",
    className: "pl-6 border-0 py-7 min-width-px-235",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 721,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/job-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-4 mb-0 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 31
    }
  }, "Head of Marketing")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-135",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 733,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 734,
      columnNumber: 27
    }
  }, "Full-Time")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-125",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 738,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 739,
      columnNumber: 27
    }
  }, "London")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-155",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 743,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 744,
      columnNumber: 27
    }
  }, "15 June, 2020")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-205",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 748,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-bold text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 749,
      columnNumber: 27
    }
  }, "62")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-80",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 753,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-green text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 754,
      columnNumber: 27
    }
  }, "Edit")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 761,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-red-2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 762,
      columnNumber: 27
    }
  }, "Delete"))), __jsx("tr", {
    className: "border border-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 770,
      columnNumber: 23
    }
  }, __jsx("th", {
    scope: "row",
    className: "pl-6 border-0 py-7 min-width-px-235",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 771,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 775,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/job-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-4 mb-0 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 777,
      columnNumber: 31
    }
  }, "Full-Stack Developer")))), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-135",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 783,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 784,
      columnNumber: 27
    }
  }, "Part-Time")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-125",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 788,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 789,
      columnNumber: 27
    }
  }, "California")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-155",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 793,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-normal text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 794,
      columnNumber: 27
    }
  }, "29 May, 2020")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-205",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 798,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-size-4 font-weight-bold text-black-2 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 799,
      columnNumber: 27
    }
  }, "184")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-80",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 803,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-green text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 27
    }
  }, "Edit")), __jsx("td", {
    className: "table-y-middle py-7 min-width-px-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 811,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-3 font-weight-bold text-red-2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 812,
      columnNumber: 27
    }
  }, "Delete"))))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardMain);

/***/ }),

/***/ "./src/utils/addDays.js":
/*!******************************!*\
  !*** ./src/utils/addDays.js ***!
  \******************************/
/*! exports provided: addDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
const addDays = days => {
  const date = new Date(Date.now());
  date.setDate(date.getDate() + days);
  return date;
};

/***/ }),

/***/ "./src/utils/breakpoints.js":
/*!**********************************!*\
  !*** ./src/utils/breakpoints.js ***!
  \**********************************/
/*! exports provided: breakpoints, device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
const breakpoints = {
  sm: 576,
  //Small screen start
  md: 768,
  //Medium screen start
  lg: 992,
  //Large screen start
  xl: 1200 //Extra Large screen start

};
const device = {
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: device, breakpoints, theme, addDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpoints */ "./src/utils/breakpoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "device", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_0__["device"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return _breakpoints__WEBPACK_IMPORTED_MODULE_0__["breakpoints"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./src/utils/theme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _addDays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays */ "./src/utils/addDays.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return _addDays__WEBPACK_IMPORTED_MODULE_2__["addDays"]; });






/***/ }),

/***/ "./src/utils/theme.js":
/*!****************************!*\
  !*** ./src/utils/theme.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints */ "./src/utils/breakpoints.js");


const defaultColors = {
  primary: "#00b074",
  primaryHover: "#008a5b",
  secondary: "#336ef7",
  light: "#F2F2F2",
  dark: "#2b3940",
  yellow: "#fedc5a",
  ash: "#413e65",
  green: "#68d585 ",
  info: "#0e567c"
};
const colors = {
  primary: defaultColors.primary,
  primaryHover: defaultColors.primaryHover,
  secondary: defaultColors.secondary,
  light: defaultColors.light,
  lightShade: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.light, 0.7),
  dark: defaultColors.dark,
  darkShade: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.dark, 0.7),
  ash: defaultColors.ash,
  bg: defaultColors.light,
  bg2: "#f4f7fa",
  bg3: "#f8f8f8",
  bg4: "#fdfdff",
  bg5: "#ecf2f7",
  bg6: "#fff",
  bg7: "#EDF9F2",
  border: "#e7e9ed",
  shadow: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.dark, 0.15),
  heading: defaultColors.dark,
  text: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.dark, 0.7),
  warning: defaultColors.yellow,
  success: defaultColors.green,
  info: defaultColors.info,
  modes: {
    dark: {
      primary: defaultColors.primary,
      primaryHover: defaultColors.primaryHover,
      secondary: defaultColors.secondary,
      light: defaultColors.light,
      lightShade: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.light, 0.7),
      dark: defaultColors.dark,
      darkShade: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.dark, 0.7),
      ash: defaultColors.ash,
      bg: defaultColors.light,
      bg2: "#f4f7fa",
      bg3: "#f8f8f8",
      bg4: "#fdfdff",
      bg5: "#ecf2f7",
      bg6: "#fff",
      bg7: "#EDF9F2",
      border: "#e7e9ed",
      shadow: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.dark, 0.15),
      heading: defaultColors.dark,
      text: Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgba"])(defaultColors.dark, 0.7),
      warning: defaultColors.yellow,
      success: defaultColors.green,
      info: defaultColors.info
    }
  }
};
const theme = {
  initialColorModeName: "light",
  colors: colors,
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 52, 56, 60, 64, 72, 84, 100, 120, 140],
  breakpoints: [`${_breakpoints__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].sm}px`, `${_breakpoints__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].md}px`, `${_breakpoints__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].lg}px`, `${_breakpoints__WEBPACK_IMPORTED_MODULE_1__["breakpoints"].xl}px`]
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 4:
/*!*******************************************!*\
  !*** multi ./src/pages/dashboard-main.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adri_\Desktop\Front Profesionales\profront\src\pages\dashboard-main.js */"./src/pages/dashboard-main.js");


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-lazyload":
/*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS90YWJsZS1vbmUtcHJvZmlsZS1pbWFnZS0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3RhYmxlLW9uZS1wcm9maWxlLWltYWdlLTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvdGFibGUtb25lLXByb2ZpbGUtaW1hZ2UtMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS90YWJsZS1vbmUtcHJvZmlsZS1pbWFnZS00LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3RhYmxlLW9uZS1wcm9maWxlLWltYWdlLTUucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvQS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0JhZGdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0lucHV0R3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL1NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL1NwYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9UZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYWdlV3JhcHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9HbG9iYWxDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9kYXNoYm9hcmQtbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYWRkRGF5cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYnJlYWtwb2ludHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90aGVtZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb2xpc2hlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb3VudHVwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5bG9hZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwiZGF0YSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUGFyYWdyYXBoIiwic3R5bGVkIiwiYSIsImNvbG9yIiwic3BhY2UiLCJ0eXBvZ3JhcGh5Iiwic2hhZG93IiwiQSIsIkJhZGdlU29saWQiLCJzcGFuIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImZsZXhib3giLCJsYXlvdXQiLCJCYWRnZSIsImJnIiwicmVzdCIsIkJveCIsImRpdiIsImdyaWQiLCJwb3NpdGlvbiIsIkJ1dHRvblNvbGlkIiwiYnV0dG9uIiwidGhlbWUiLCJyZ2JhIiwiY29sb3JzIiwiZGFya2VuIiwiZGVzYXR1cmF0ZSIsImRldmljZSIsIm1kIiwiQnV0dG9uIiwidmFyaWFudCIsIkNoZWNrU3R5bGVkIiwibGFiZWwiLCJzZWNvbmRhcnkiLCJDaGVjayIsIlRleHQiLCJ0ZXh0IiwiQ2hlY2tib3giLCJ1SUQiLCJ1bmlxdWVJZCIsIklucHV0U29saWQiLCJpbnB1dCIsImZvY3VzQ29sb3IiLCJJbnB1dEFuaW1hdGlvbiIsImxpZ2h0IiwiZGFyayIsImRhcmtTaGFkZSIsIklucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY3NzIiwiSW5wdXRHcm91cFN0eWxlZCIsIkljb24iLCJJbnB1dEdyb3VwIiwiaWNvbiIsIkxpc3QiLCJ1bCIsIlNlY3Rpb24iLCJkZWZhdWx0T3B0aW9ucyIsImdldEN1c3RvbVN0eWxlcyIsImFjY2VudENvbG9yIiwiaW5kaWNhdG9yIiwiZHJvcGRvd25JbmRpY2F0b3IiLCJkaXNwbGF5IiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwib3B0aW9uIiwicHJvdmlkZWQiLCJzdGF0ZSIsImlzU2VsZWN0ZWQiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250cm9sIiwibWVudUlzT3BlbiIsImlzRm9jdXNlZCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJ3aWR0aCIsImhlaWdodCIsIm91dGxpbmUiLCJib3hTaGFkb3ciLCJTZWxlY3RTdHlsZWQiLCJ3aXRoVGhlbWUiLCJTcGFuU3R5bGVkIiwiU3BhbiIsIlN3aXRjaFN0eWxlZCIsImFjdGl2ZSIsIlJvdW5kIiwiU3dpdGNoIiwic2V0QWN0aXZlIiwidXNlU3RhdGUiLCJoYW5kbGVTd2l0Y2giLCJQYXJhZ3JhcGhMYXJnZSIsIlBhcmFncmFwaFNtYWxsIiwiVGV4dFJlbmRlciIsIlNlY3Rpb25UaXRsZSIsImgyIiwieGwiLCJIZXJvVGl0bGUiLCJoMSIsIlByZVRpdGxlIiwiaDQiLCJDYXJkVGl0bGUiLCJoMyIsIlRpdGxlIiwiVGl0bGVTdHlsZWQiLCJoZWFkZXJDb25maWdEZWZhdWx0IiwiYmdDbGFzcyIsImFsaWduIiwiaXNGbHVpZCIsImJ1dHRvblRleHQiLCJyZXZlYWwiLCJmb290ZXJDb25maWdEZWZhdWx0Iiwic3R5bGUiLCJQYWdlV3JhcHBlciIsImhlYWRlckNvbmZpZyIsImZvb3RlckNvbmZpZyIsImdDb250ZXh0IiwidXNlQ29udGV4dCIsIkdsb2JhbENvbnRleHQiLCJ1c2VFZmZlY3QiLCJ0aGVtZURhcmsiLCJzZXRIZWFkZXIiLCJzZXRGb290ZXIiLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsUHJvdmlkZXIiLCJzZXRUaGVtZURhcmsiLCJzaG93U2lkZWJhckRhc2hib2FyZCIsInNldFNob3dTaWRlYmFyRGFzaGJvYXJkIiwiYXBwbGljYXRpb25Nb2RhbFZpc2libGUiLCJzZXRBcHBsaWNhdGlvbk1vZGFsVmlzaWJsZSIsInNpZ25Jbk1vZGFsVmlzaWJsZSIsInNldFNpZ25Jbk1vZGFsVmlzaWJsZSIsInNpZ25VcE1vZGFsVmlzaWJsZSIsInNldFNpZ25VcE1vZGFsVmlzaWJsZSIsInZpZGVvTW9kYWxWaXNpYmxlIiwic2V0VmlkZW9Nb2RhbFZpc2libGUiLCJ2aXNpYmxlT2ZmQ2FudmFzIiwic2V0VmlzaWJsZU9mZkNhbnZhcyIsImhlYWRlciIsImZvb3RlciIsInRvZ2dsZVRoZW1lIiwidG9nZ2xlU2lkZWJhckRhc2hib2FyZCIsInRvZ2dsZVZpZGVvTW9kYWwiLCJ0b2dnbGVBcHBsaWNhdGlvbk1vZGFsIiwidG9nZ2xlU2lnbkluTW9kYWwiLCJ0b2dnbGVTaWduVXBNb2RhbCIsInRvZ2dsZU9mZkNhbnZhcyIsImNsb3NlT2ZmQ2FudmFzIiwiZGVmYXVsdEpvYnMiLCJEYXNoYm9hcmRNYWluIiwiaW1nUDEiLCJwcmV2ZW50RGVmYXVsdCIsImltZ1AyIiwiaW1nUDMiLCJpbWdQNCIsImltZ1A1IiwiYWRkRGF5cyIsImRheXMiLCJkYXRlIiwiRGF0ZSIsIm5vdyIsInNldERhdGUiLCJnZXREYXRlIiwiYnJlYWtwb2ludHMiLCJzbSIsImxnIiwiZGVmYXVsdENvbG9ycyIsInByaW1hcnkiLCJwcmltYXJ5SG92ZXIiLCJ5ZWxsb3ciLCJhc2giLCJncmVlbiIsImluZm8iLCJsaWdodFNoYWRlIiwiYmcyIiwiYmczIiwiYmc0IiwiYmc1IiwiYmc2IiwiYmc3Iiwi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VixHQUFFRix3REFBVyxDQUFDbkUsRUFBRyxJQUpQO0FBMUJELENBQWQ7QUFrQ2UxRSxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGFzaGJvYXJkLW1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWtDQVlBQUFEaEFKaVlBQUFBQVhOU1IwSUIyY2tzZndBQUM1QkpSRUZVZUp5dFdGbHpWTWNaUFhlYmZUU0xkZ2trRm1NMmxTM2lCSnN5RGhlOEFCWTQrZ2UyZjBINEIrWTFMMGw0ell2eFV4NXhxbEtWU2lVVlNVbWNTb2l4V1l3bElZbVJqSllaYVVhenIzZkw2WjRSaTNFQnJzcElyWjY1OTA1L3A4OTN2cVdsNGtlK3hpY240MitjbS9qdzVQc1hyNzAxY1dIS25Manc5Wm1KQ2UrOWlRKzhkeWMrK1ByMHhZdFQ1c1dMbi81ODRvTVBUVDc3WTlkWFh4akllK2NuZjNyKy9GVEFhdVVOSFZmOXFqc1owaFV6RnRUSHd6NE5RWitLY0VBZkQ2bUs2VmU4ajRLcWQ5V3czZnpiRndqd3dnWHovd1pvN053NWMvenN1U2xkd3pWZFUwMU5WZENvbHRHc2xXRTNxcWhYU29EVFJIOTNEQVBKTHV3ZDdFVmZLSUNJQmdSVUQ4UnBhbENtVHAyL01IWHkzUE9CUFJQUWtYZlBmYXA2MnBUT1hRc2duSkZlWDhOeWFobXo4d3RZdkwrTXVYc0xXRmk4ajRXNWIxREpiNkdlendIMUtnekhnczVoS09KN0dqUmRNelVOVTIrZVBmK2JIdzFvajJuR0Q3eno3cFNpcWgrcG1ncU5DNHBGMCtzYnlHNXRvVndxb1Zsdm9sd3NROWNNaEFKQkRIYjNvcnNyaG1EUUQwWHpZT2dlQm50aVNQcnBUcmh0VUlvS1ZWVXV2WEgyN05RNGJid1FJQUZHTmZRcFRkTk1YUk9MS0hBZEYvVmFEYVZpQ2JabEE2N0w2MEEwSE9RQ0x2dytBNm0xRGR5ZXU0ZFpzbFczYldpOEJxdUpvVVFYUXNKMWZGNG5JRjBWb0ZSVDl4cy9DT29wUUlxaVg5TVZiVndYVkxzMmlsc1ozTDF6QzVuMEJnaU5ZR3lvdW9wRVR3S0tvYUszdncrNXdqWlNmRzQ5bjBmVGRtallnRXJjZ2hYYnR0RGYwdzJmNjhCUWQ5Z1dzenF1R2ZxMVp3SWFNYzk4S3RDckJHTndSOXVaRGF6TXo4R3hXbWcxNmh3MXVraEJzaXVLbmpqZEVZMmlrTXNTQUw5TFlBZjNqdUxZNFVQWU56aUE0ZDQrQ2FqUnJJTmVRemRkeWFDUUxGSGswR2xhVlZSei9NeVozLzRnb0YwblRWTlJsSThVQ2xjQWFqVWFXRTJsNkJvSFBrT1RvSVNvWTEwUjlDUVNpUG9EU0lSQ0dJakhzWGRnQUtQeExvenQzb1VSTXRmWEZVS0kzM0hwT29janY1MEY3SllFSWlTZ0NpMHBiVHUwK2NzeDB6U2Zaa2pCSnhLOThERS9WQXNsT0s0SE5SaUVqenN6cUlORXlJODRjMDUvTElyZEFnQkZlMkozUDM0eTFJdkR2UW4wOC82ZXZtNE1KOFB3S2hsb3pTSktCRk1qUzdsS0hoNDMxRFpLWUI3a2tPNVRsRStlQURUMDFsdVRaRVl3Qk5vVnFPSEFnNTlnZ29FQVAzdUloSVNBQ2RDaFJwbzFKRHdMbzVFZ0R2WW5NVFl5Z05mR0R1RFV6OFp4Yk44b1hoa2F4QzlPdkk0alpDdk81eFErWDZlN3hicU1YQWd2S0IyV2xQWXd4OHlUNWtOQW5xZGNla0xZL0lrbEtWcXQ3Vyt1QVVQNDMyTkVjYUV3NTE2R1RVOUFRVGZIYUg4TXJ4eDhDY213SHo2bmhRZzNFS2R1VHI4MmhuZU9qOU85Qm9LaHFOZ3BsTTc2RXBTcWR1d1JnNnRlbG9EaUREMWVPTlVHNXJVWkloTytZQURScmk3bW1pSnppaWJEM0NDWWlNK0hPTU05SGcwakdna2hUSlo4QVFNZW1mUG9Zb1BmMDhJQnVIU3RRLzI5ZkhBZit2b0hVV3VKOWR2c28vMzcvZGVwZHNwcHRDYTl4NjU2YmNiNGgxcnBIWUpWdDFGck5DRXVpU2lKVWN3Q21PSDNvU3NaUjVUUkZnNkhZVkc4bm5DRFFVQStwa0xtTUZYWDBXbzJzTUZJdEZWREx1N2hhVEE3OW8xV1kxSWxLNU1TdXZmWWJjbVVqbEE0Q3QzblI3UFpRdE95bVA1MStEbDhaSUlYNFRRc0RoZGVuUUlsYzRwR0FDMkx5WlA1U3ZFaDRDY3cyK1YzNi9BeGQ3Vjk4Mmo3VDdIa0tTWVZwc1M5Nzk4UW9sYTVLRGNWN1k3S3pDeEMxZVhzY3BVQTNSS09ka0VQUm1CMGRVT0w5OU5WTVFsZUJFSWdsdUQxQkN5Q1VzaE1sKzdESVVhZmlxY3NkWUI0T3dqM3FOUmZUR2hIL25CMjNmYXNjbmFaREgyZXcycnVTbTI1Zk45aTVpMHlHMitRQ1pmNUtEdzhEQzhTSnJnb0hENnp2cG5CdmRWMWJKU3FLTFU4c2hiQVNIY1M3ek1DSWRaK2pCK3ZvMXM1eTc5dWpIYThjWTg3bHpjNEhNanZRYUZJbFhvZGZTeWN3azBpWHhoMFNVOHYyNHVoRVpTckx1N04zY2RhYWdYVjNEWjFacUhGT3JkQlFQLzh6M1dzWmJlaEJzS0lKWHB3OUtVRDZQVUxEVDJ5NDNuZUkvVjBQdFB1T0VzTzNjQVFkQ1VZWHVSUXhIdTZwcTRUR0NNc1FDRkhtSG1QRFEzQlJ5MTlSd0RyTlJ1K25tSDhaZnBmK09yNmRhak5NbFRlSzJWTENJZkNUS0pCbEdzc0d4RVdWNjZ4M2FTMnBBZGNNdWxLT3lMeDdvQVJFVXB2TWM5NTNpM1A5UjVEN25iQVVhaCtzV2hEaGp4RkJJTWEwUmx1U1c3MjZGQUNoYlVWYk9keStPck9YYXpQM29YR1B1alF5QzY4ZWV4VnZMUjdOM2JSblRMZnNNWGNMRlVlYlZxeTRYWkc1M09iakZ0Q3FRVUpRaUFYdWNScjcwRHN4bVp4RE1XNzRiS08xVnN0RktzTjdqeU00YkFQM1FwclU2VW9pMjJGdWtLbENwMXpUektHYU1BbncxMlVJWjJWVjZQYk41bUlCT3NkdzdRaFpwWTRZVTkrbG5PQnd2ZVczY2RvY3lTbERpd3hLMndWZ21FTTl2ZUMwY3VoMEZnUU1lWVpQM040Z00yWnJoc290NXFvVk9vb00xOFowUWpkRkdGbWpzankwQ1F3bThCeXdtVnUyN0RkY1p2TmxzVFpjYUVFNkM2cnJ1Tk5Tekh2SUJWZllsUkpvUXUvQlVKdzlBQWFGR3pGYWRBb0k0OE14SmdRSTVFb3RndEY5czUrSkVmMlFtR2t0VWlEUXNDZXdaQ0hEWXMxN081aUNyZnZMMGsyMm1DOGg3UHJvajFFdCtXbzA4d1M3dWZTWGE3YnBrL2tHcUVwb2hkUFdvd3NJOUdMR2tPOXhDSlpkZGtuVTdCQlVUSWlMQy94Q0ViN2VoRWRIa0E0RVVPanprTEtBd0JYNDhaYXFMSFRUS1czVUdTYWtHeTRiV0c3YmdjTU5lbDBRQm1XOWJsYXVIbFRhR2hHUHVRNEhXQ2RtWjhGeUJiRDN1R084OVU2NnBiRDVHaGc2YnMxektjVzZESUgwU0JRS3VlUnpxeGg5Y0VTTXVzcE5Hb0ZHbUcreWhaUXFEWGI2VVFDNmJoSjJPcU05blYzWnBsWVpMa2xmWmZseFk3NkJaM3Q0VWhReEVCeEoxSGltelRGdXlpYWZVWk5jbkFJaHc2UDRaVURSK0Z2QXN6YnJQZ1JoSmh6ckdZVnVlMGNzdVVLdnJoeGt3RlJhMWNvRDUwRTdNcGUvV0grODl6TEFvc0UxTGg1YzVwWForUU5TYXNqaGIzejNtMVJDeTBIRmRLZXltMWhzMUpHcExzYmQrZVc4Tzh2Ym1CNWZnM1p4WFVVVnJPb2JKY0p4cEluaytYbEZPN016bU5sTFlQMDV0WkQ0KzRPS3gweEN3K2x2L3h5K2lFZzhhS2dMenRzNEYxcXhPWEJUeHdDYSt6MjBrczhkOTM4RXVuRkJTYTlBbktzL25lcGlhOFhGOUdYak9ENDBmM1lkMlFFOGIxOVNCd1p4ZkNyUjFubEExaWNXOFhpd2lKTEJ6VVhEcUZXck1xeUkwTytFKzdzRDJDSmlPNnc4d1Fnd1pKU2IxeHBaTFpRV2xsRmJ1RSt0cGRYMEdBSjBCbnpYcU1sSzNteFZzVWNYWGFieDU0U1Z3N1RSUXFqcjFUYmdsTXJvcmFWUldwOUhiTnJ5N0l5N0VvTXNVR0xzaCtxWTNiaEhqTFpMVVpzU3dLeEhSSmdPMWQyMkhrQ2tIaFZaMmN2T2R2NUdZV0ZVV2R0MHVrcWpkRWxSZVM0c2wwSU1nOVZXU0pXeTFWOHU1SEZVanFMSnUvcEVUOEJ0NUJhV2NIUzJpcHpqNGZqSjA1Z2ZtbVYyYjVGNDAyNnZjbmpWQnBwSHFsYWJGL292cG0xRy85OW9sdDk2bHptVkN1VG5tUGZjanlidEhJSGlraVFuV0pJdjBkOEFaNVF1NlRZTStVYUNwb1BaVjZyMlQ2c2s4VUh0WXJzaTk0KzhTWkxqdzkvL2VZdXlxSVZwb3RVdXozcXhRcHk2NWxiNWMydHllL2IvNkdqZE1HMm1pWUZQU01GSjA2dU1rTzZuV09OaFdFS2VsZXlHK0ZBaE5IVHhQeUREU3l1YmlLVnljaGNkUEw0NjlSWEwvNzBqK3RJNVV0eVE1cG9PVHRaVUxXZEdaNkV6Y0x5Y3VGRkFFbFFiUHRNOWtSWGZLeG55cU1HQ3FWS0NVRWVrL2YwOU9EZzBBQU9qNDdneU12N3NmL0FQcng2NUJERzl1OUZsSWx6ZGlXTnEzLzRHN1hpYi9kV25hTEs4TDdTek9kTUZBcFBnWGtXSVBseVhmdVMxYkpQODBBMUk1cHFnY3NoNWRWS0RWMDBPcFNJWWpnUlJoOGIvaVFiZTUrNHp5NXRjU09EWC8zdUtuSXRGYmFpdFZzeHg1MWhDamx0Ylc5ZmVwYk41LzUveUxZYjA0N2ROTm1Nbk9iak15VW14TTFzSGxWbWJUK0Y2N0RsMkdiazVITjVGQXNWM0xpemdGOWYvVDN1ckdZSVJod1dIRzdHTzIwVmk2WmRLRXcvejk0TC93ZU4wS1o1MURIdGxwMVkvbTc5WXlyMk04ZHlac3FseXExMEpvc0hxMm5jdkQxMzY0OS8vdnZNamZrSG56bTYvbkZZc1JKMmNZdEFzczhGc3ZQNkg0MnNzS09ZZ3FrYkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWtDQVlBQUFEaEFKaVlBQUFBQVhOU1IwSUIyY2tzZndBQURJMUpSRUZVZUp5dFdGdHZYTmQ1WGVjK1orN0RJVGtjWGtSUkYwcTBiSkZ5SGN1SmtuSVVPQUVTeEFqdEFIa0lBbFIrOEVNZUNpdlBlUWlEQmdINlpnTUZXcUJBSFNBL2dFb0R1QzhOUktKVjA2Q3BHVXFKVEVteFNGRVU3MFBPY0s1bjVseXl2azJ6VGFORWlZRWVhWEI0NXB5OTk3Zlh0NzcxclRNbVB1RXhVeXBsMC9uRVYvdGNjOFlPL0d3cUhzdm1jcm1wZUNJRnk5Ui8rZVRKZXVWbkg2NnUzbDNabkcvcitvOVhWMWNybjJSKzg4OTk4TnJYdnpiejBjUDdiOE1JU2lrdFJKOFo0TXpZQ1ZodUhKR3V3elJOZExyK1ZHODZqYk1ET1J4VXF0ZWVsS3M0TnpJMC82V3Z2dmE5ZC83dUgrYi9Yd0thKzVlZmxCek4rTzdmLyszZmxCQUNqZ0Vrd2pZbXowOGhGblBoZFh6NFVRUWpDcUZGSEtCcnlLZmpHTWtuc0YrdHd0ZU0wc1A3OTBvLyt0RS96ZGZyamU5OTYxdC8vY3pBbmhuUXpmbWZ2bWRZMWpWVE42QnpvYmhwSUdvME1QWHlpK2d0RHNMdmVJalFCS0VoU2dZTWl3SGJGckpFYWJqUWg3WHRNc3FORGhxSFZUU2J6Wkx0MktYM2Z2aVA3N3g1N2ExdmY2S0E1dWJtc29haHplMlg5MHV1RzBPcjFZREYxU0lyZ3FsMWNIN2lBcndBNkFadFJHSElzdytONTNiYng4WitEVS8yRHVDWUZ2cXpLZFJhWldReUtWeSsvQW8wcGxiWDlldDM3OTZaY2wzLzliR3hTMC94NjZtQUpCaXYwN2pKZEV5NWNRZTJaVEUxUFNnVUI3QzJ2SU5DWHg0a0tuNSsrd0VxdFVPTUZySVlIZWhERUVaWXZQY0k5emZLU0RDVjU0YnpHT0gzeStzN0tBNE9vaWVmaDlmMkVESnczKytXbWkzOUpvK3JQQ3JQREdoNHVEaW5HL3FVYmRsd0hBZEJFTUF3REp3K080N041ZHRjUElmeTdnR1dkNXM0ckxVUU1HM25Sb2RRYlhWUmJiUlJpMnhVMmlIaUIwMWNQRDFFNU80Z21VcWoxV3lqWHE4enFEWjUxNEZoR2xPUkZzMXh5YXQvTktEYnQvLzd2V2FyWFFxamdJSDRhSHN0VmtzRkJxSE9Gd3JrTkt1cnI0alB2UHBGWkVmdVlIbjVBWXE5T1p5LzlDazhlUFFFNDNVZnAwTU5CalRrc25FRW5vZTA2MkJ3Y0lnb1MrcGJDaUdDcVFwQTE0M1NyVnUzM3JseTVjcjFwd0lpZktWNnZYbk5KeUxDQzlkMVpRQTY1RVhFQU5PNVBMK0xvOFVkSnB3NEpwKy9nRUltZ1Z4UER2bGlFWTkzcXVSTWhxbnBSUlIwVVdPRlZkb3Q1SE5wWEppYzRnbzZkY3FCYVhVQXc0WXFTQmFLb1dsdkx5NHUzcmgwNmRMODd5RVVmWmR4cXdjN3JCcUxLVE5KVEpJUTNTNnJpTnNhUFQyT3RwQzR1b1d3NmNIaXdnZmJHeWdPVTQ4MG9ObW9JWmRPSGttQTMwR0xrNzM0bDErQUcwK29PYndPaTRBU0lid1VxZUNrSUQzSUtaOXI0MzhEZXYvOTkyYzBEU1g1bXpmVklQbG8vTkptR1V1bEpXTUZ4TDd5Qmgvb29McS9nOTJOZFd6dTdlUE14QVNXL3YxZjhjSFNYZmgyQXVXOVBRWVh3bU42bnIvOFdmaVpQc3BCakJUb3lxWTVwd1RpdzJzMkZVZDEzcU9zbEloU1NWQlNBVm1XY1YzSUt4L1hpVUYzajFDaGRnajUwTXMwZEVuZWVDcUxKQkVJSHg2aVFTbElzS3pUT1ZaWVY4UFk2Q2xxRGhIZ3Z4cVIwc21sV0phVlpjWmd4OGtmVnBoQjZTQTQvSmhJcFpJOFd5cVZtcVlMQUxPOEtKbmtUaFlJcDM4WEZUa2ZJOVhwZGxSZ3pVYWRsS1lNdGp1dzhrUG83OXRBbS9kWGJpL2o4WWRyZUxDMmpXcmc0Y3pGUVNSc0c0bitQdlNkT01ucTZyRFNBTS8zMU56SEg2R0QwRUtSUEZTY21WNVpXY2tTb1hCR3JxUzBqMU4yUEVnQzByVWp0T1RhRURXV251WDB3U3lPSVZrckk5c1hZNkJkdEdNaFRpWmpNSWd1ZFIyVFgzeUQ1Q1luVEYwbXBiQnlLZklsL0hqajhnay9qdVQ0bXNjTW40cG1ET09JMi9LQWtQZ0l5cVBnSkZBSmhqS3JncEg3bW03Q0hSa0h0aDZRdkQ0S1k4UHdZOVNmV2szTndUcENzcjlBSHJHMWRMU1BLNHBwNFR5NlFzZFU5T2gyL2FNeTRoaHFFdnl1WGpLWjE2d1ExeWJNRGZhcDQ2QkVOK1M3TnN0Y0pwQnJqdVpPMmMrSWdNc0pBc2ZGWVgyWEFsbERzOVdFSHdZOHQ5blFZb2lKd3NlVHJOaU9RamdJSWhXRWFKeHNVRFJKTm15VG80S2d5ZWNqd3pocFJsR1lrVVVGQ1hsQVBoS1E2SkFFSlB5Uit4S294Y0FkeTZHZWFIQzR1eTRYbGcwS2NpS2l0WG9ETm9QME9NZmFSL2RSUEQyaHhzbDkyOVpScVJ4MUNZK0JIYThWOG04OUlFS2NweHUxTXlZSFRCMFJLMVJsYU5pT1FrU09OaXVydzkycCs3STdEc3lrTWtpWlBzREZSYzBGTmVuNkRuY1k1OWlBcWZXb1k3LysyYjhobHM0am1ldGxXVFBOM0hEWDQ4YTVJU1crSEdoTFJTdHVkRm4rSmpRdm1qS0ZUQUtsUjVtWEVyZklma0Vya0tqcGRTUlZoaFhudzAwVTJDVGxXalNrMGxoRFdDZG5XSVVkbHJTSW5lTUVPUFNZbnRCQSthQ0NEMyt6amt5dmo3NmVEUHJ5R2FZd3hRMW9SOElwZkdLZ29hU1RTRUdRNHZkbWYzLy9FdE15ZVlSU29OZ3VlaUc4U3FSN3lDdm11bDVGcGtmMGhqRHJiVFFQOW1BWHgxRWpFdW5CSEZxZENIR09qZFVxcU83eTJXdy9lczljUktwd2dtbUpzSGZZd2ZyNlBSUUt2Wnd6U1Jub0VLSGdLQ0NwTUhZQlFkQ3dyU1V6bVV4V2pydTZWSUFUUzZKRnM5TTRwSy81OVIzMGo1eENoK1hiWmpBNnlSdGptNENkUkp2aWx6NHh3YjlqYkIzUG9kdHVJbDZySWt0Qk5OME1tb0dHeXZZV1RISnFtM2JsMUlVcHprTkI2SnFvazBzWnVrcS82OEhuT00wUFZKVVJ0b3BKZEZZWjBMUVEySFZTRkw0R0RqYlhTTXdJNmQ1QlZYbk44aVl0eEdubEJtdmxNdW5UUkNxUjREUHNYNGQ3aXJUN0svZlJPMzRSVVRmQzV0b3EzSmlEbUdNaHBQYWNlbUdLNkhaUlhydUxVNWMralRpcnI4MkFtL3QxakkzMHFMWWkvWlBLdEdxdXJ6K2U1NHgvTlRZOGhNYldCb0o0Qm9sTWptbnk4T2hYLzRsVFU1OUZRSTBSRFRGVE9WUTJIb3ZZc3gza2xTdlkvOVVpQ2hNWE1UeDVHZnZiMjVTbXU4aWRQSWVBTzA4d3pXMXlhdnZlTDFFOGV3RWo1MStnSjlleDhYQUpBK2RmeEJiOTBhUDFMc2JQanNFaUY1bTllWlovN0FaTTQ3MDArMDZGWE9nUXZsWjFqeFZTeE5qVUZXWGFzeFRCcUhXQVJya0dOMStVd3NLanBROVFQUGNjc21lZVUrMmt0ZnNFVnE2STdFQVI4V1FLSWEzSzRjRVdXZ2Y3R0pxWUlsOHNITzQ4UmlZUngvakxuOFBXMWc0Mjd0MkdkdUVscGpKVXhSTDR3UTFUTE9UaWYvM0hRbTNyOFhTWkhWelU5ZVJMbjhQMitnb2FlN3VJRFp4aDVabm9HVGpCMkNJYzdGZVFUTVl4K3RJcnFwVnNySHdBcTZlZ0VCUmlaZ1pQMGhXMnNQL1JYUlNldjR4V2ZoZ2hhUkJMMmVnZEhvWEZSdnRvNmVjVVZYcW5vVkhVeTNRT093bU1qZ3d0bkJnN1VWR0NrNHlsWm5YSHZ0bHo2aUtOVlFXSHU1dkk5ZmFqUzlVMVJBWVlrSGdkVyt3Q3IxbTA3UFllRXR4dDRmd2ttaDZiQmZYR01oZ1VpWnFrbVV2UUJYamtEVG9HVXYxRkpYeWtsTEt2aWFGeFBMejlDMWJoU1ZSMk51a09hSDFydGRuLzhVTm5YM2hoZnVtbi83eFFxN2VuSXplSHJkOHM0dUpyMzBSeVlCUWVDUnlHWXRSc2hpSEpDcFJ1aUoxdzQzRXg3T2d3SU9XOVUzeDd0ZU9xWGRSWmtSWXJVS2VxaXhFek5mWEdvY2I1RWF1NXR3aUg0M2RYbGlrRnFZV0pWNmYvcjJPMGUwWm1MYWQxTTZCL0dYcjVTOWhhWDBXZ2kzSW5QbTRidHRxbHRKSk1obkRuY21xaEJyWEhjVk5NbDZ1Q0V2c3F3cHBnRmZyVUZ6M1VoUnVzekNyZlhBb3dHYVJIMGFRc1ltTjVDZWMrOHlwMjFoN01QdVdwSitqV2ZuSHIxcnNIU3pmZjFwNTdoVHlQa01yM1U4RTdxdE52Yld5Z1FNSm1XSUhTdmF1VkdoS3BCRG1SNW0xRDZaTEZWcUNhczFnWk9vS0FIcWhkYnpLYlBYeTJvRVIzZmZVakJzcE1pc2ZhSldjTGcrKys5ZGFiODMvd3JlTWx1ditGbi94NFNqUHRhU2NSUTl5bDkyVVhOMkp4eFB0bzNvbElqVytoTG5WRW1sRElhL1lKMVFZa1RSYmZ4NXlFcE14VC9MUDV4a0VGVkdwY1piV2xzem1rS1FYMzdpeFIweHlNWFhsdDRiWFAvOFgxMzQzaHFmZXlNSGxpcHZMZ2cvbHF1bWN5bnNnb3p5dFNZTE1wQnVKYkpHK2FPQXgrejE0bk5pS2J5eUtyTktlTlJ2V1EzSENwMW83cVc4cmNBUXBGai9MUUlDZTNpWFovb2JqVVdibzk4L3ZyUHhYUTFhdVhLamZuNWtxK0hiL2h4T3pwMEFnSUwzZk14YVhGSk5qdHBadTNEdytSU21mZ0psTHFyYlZLWHJoRVIvMGFJZzJibXdoSllrUGFrVTFqUjQ2MUtBY0hMUE5hczcwd29Mc3piMzc3RzMvNlZWb0Y5ZnJyOG1CcGZXUHZIVDN5Mzg0a2hOalJrZGxTZm9tbHpMZFI4VE50dWdSWGp5a2lLMDhsdmx4UUpNRnRDVVJ6K080Zm9VWHkrN1FybHVPKys0UHZmK2Y2SDFyM2p3WjBmQXdQOWw3ZjNOeTkwV2g3czJHb1RZc0RWcjhEK1lGNlUranlMQWlFUE1kWjh1SVdPdVNPeTVScHJNcEFtakwxU295ZFpwZ0xnZGVkZmVQTFYrZWZ0ZWFmL0gyb1dPeVRDVW9mUG5oY29yR2E5WU5vMmhmdU5Pc2tjRUxlcVpnS2NtTjNoNmhsbFR4SVNuMmlLY0ZicHJHZ2g5SHNweWZQUERPUVB6dWc0MlBpN0lnS2JIRnhKVXRxejZSVG1WSTNDazZTMUZrbWFGSWNJUDh2K2QxdWhXcTAybXEwNW50UzJSdVhKc2MrMFU5NnZ3VnRiV1Jhc3E4MmJRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDUUFBQUFrQ0FZQUFBRGhBSmlZQUFBQUFYTlNSMElCMmNrc2Z3QUFEYVJKUkVGVWVKeXRXRmxzWE9kNVBYZS9NM2RXem5DbnlCRXAwNUpsU2JSaXdYSnNsZVBLVnBNNFJXa2dSWU9pZHRRZ0xWSzBnV1dnUUIvYXdEUzZvRVg3SVBlbFFWdkFlZ2lDRmkxc0JVbUJJQXMwQXVyR1VieVFXa2hLWEVTSklzVVp6cjdmdmVkTzBTMXk3QnJvRUpkRERPL01mLzd2Tzk4NTV4OFpuL0F4azBra1BBKy9JZ2pTWENRU1NZUkRlaUlVMG1jaVVRMThYbEFVc2FwbzBxWXNJdWY3N3JmUFg4aFZQOG5ueS8vWEc3TkhCdWFpdXZxeXJLaFpUOWFnR0RHb0lRT1dDMnpmTDZEWWFFQVNXelAxWmhXeFdBU1p6TWhadzFEd3V5OCtsMnMxR3E5ZHVQaE83djhGME1FaFBjczFYM1VjTjZ0cUJLSnEwT09qU0F4T1FqV2kyTGg3SHgzWHd1VDRFRmFXYitEMm5TSTB0WWFySzVzNGR2UmhURTZNWktIbzJSZm5UdVkwNExXLy94aGdId25vK0ZUc2pYYkxQYXRMTXRwdEYzdXlnMEtsQmdzMU9GaUZyR2l3SFJlVGs1TllYVjlIdmxqc0FSYlpMOStYOGY0SE43RnhpOEFPN2Nmb1lEeWJpb3JaUC96dE0rZi85RysvLzhvbkFwU2RTU1JreUc4NXJwOE5LUXBFVDBhekRXemw2L0RacmxxbGluaEV3K1RvQlByVFNSU0x1eEJhVlVRVkViWVNnbWwySUVnS1RGOUVzMlBoL2FzcjJFbEZjUHFKZ3hpTXg4LzkyU3R6TTRWSzlZVVA0OWNEZ09iSVdrRnpMbm53WjBSQmdNREw4U1hrQ1VMUkZQaGs5SFRtSVh6bHBWL0hZRUtENUp0b3Q1cG9kRjNrcXkxY1g5M0Ewc29LaXVVaW9xa2tQTitGNjVoOGZ4dVZob1AwZ0FoVkViT1NwRjA2T3pmenpJV0xDOVdQQk9ScTdsdUtvTXhJL0ZzVVJZaVNpRDBTMW5STmpQYjFvOVcwOEp1LzlYc1lIUjFHcUxzTHQ5NkdMRXRJcGhPWTJEZUo2WWNleG9tamorTHExYXZZdnJlRlNNVEFUbUVQTzhVeVZyWjJ5YjBVVkVsQXBkeVpnUnQ2aThzODgzTUJQVEdaZXFOVWJtY1ZWZXlCa1dVWm1xNmpZd21JR2drMEcyMDhkdUlVVG1aL0VlWHREYWdjc1piWmhPTjRmSGNJdWlZZ29vVXh2ZjhoakF5Tmt1VFhBYnNORVI3MnloWGMzYW5nbU9sRGo4aElSSFE0bHBvOTkydlo4K2YvTVhmdUFVQmZlUHBBMW5idHM2Ym5jeEVIZFZiRk1Ealdwb1d3bXNUWS9nRkl1b3huUHpjSEl4WkhhYXNGdTF0ak83b3NwUTVKVXVGNkFvbXVRdGNWeE5MREdNdGtjUDJubHhGSVFiWFZ4bnRMdDdCODR4WmUrT3luZ1VRWXJ1dXc4dDJYLytpcnoxNzhrMi84TVBlL0FFVU01VlZSMEhvdmRHeWd4Q29OSk9Qd3RDUTZRZ3J4cUk3eDhReU1TQktLd0FxeUtpRTFCQzFLbm9ncVBDTU8yK3JDYnRWaG16cFVjbTk0YkF5SFpwNkVTNEpmV1ZqQW9mMWpHRWpIdUlMRHRqbndCUitTSUVHTmFLL3l4ZjhHOUJ0bnB1ZTRSaGE4Z2VNQmhidFZPaTJvZ2VZa2g5R243ME02bFVCZktvMysxQURjZG9WWERVMlMyVzdXdVZOK01Odm51UjZYNHZ0allZU05NRHpQUVN3ZXhlRFFFQVlIQmxGck5wSHVUNk5wc2NXdXkzVUVVZ1Bja0pUOTQzT2Z6Mzc5L0hkelBVQzFxbnRPVlNTV1d3b21nRHBqa2N5a05YY2VHeGhEdytldTRtbjhkUGttY2xkK2pGK1ltY2J1cld1NHVYUURrdDNoK0E5aWxJQlRxUlRrY0JTeTZFSWFTSEZ6WWVxUlMrV09ZV0lpUTYyNnliK2p5QmRLQk8reVNoTFZYWUxEVm5jdGR6NVFISGt1bTBtb2dqN3IrOXlkWjhPMUJiaThLUUJVclRXUmlmV3pFbDFPelFMU1lRM2ovV0dVTjY5UkNyajc0WEhVOW5aeHIxakI2c1lkSEQ5MkZMNVlCbmJLT0NBb0dPY0dRMVQzUURwY0FpQzdFWXNhRUp3R1d5T3k0a21RZkxBc0VSM1RucDAvTzVlUW83b3hsK3lMOC9WQWM0Z3grRVhFanVEQnNFT3dTanZZM2RuRm9lbmpHSVNMRzFlK2owcXJoTUd4S1d4dTNHWHBIWFJFRytsWUdsYW9EMnVyeStpMjFyQjRiUUZUMHdmeFZQWjU4aTZDVnIwR1dkWDUrUjU1STJBdzNjY0pKa2pKaFJBS0ZGOUN4N0RuWkVQRVhDUVljWGFJUENLRlJPZ0VaSEYzRHd0eDNGeCtEMDgrbWNWblhub1JoY1VQWU5mdllyZDBILzJKSkZLZk9vYmlYaEVoWGNKVWZ3eVpFMC9qK28ycnFKUUtHQmtiZ1NKN3lPL2N3VmFwak0xeUNUb3IzNldLT3o2NVEzQytZTUozWlFqa0hjdEJERnBXRm1VdFlidXNTdEFtL3ZoOFZyZ0RtUzJwM3Q1QXFMaUhzWEFJQWhlVisyTElQbmtTOTI0dkVlZ1NSYkdEUnltUVBzMTFlSEFZNC9zUDR1U3BNN2g2NVcxRStsSW9WcHVJN3E2ejRBbzI4eVZNSmFOUVJhNUZmU3NScEVPVkQvampVV3FDaDIxYkdYbXYxWW1YNkRlaXFIQkhDandGMEZoVzNaRFFIMUVoVkIwY09uSUVuQ09LWTRoVFZjUklpRHNjU21PbHZvbWR0V1djT1BrNEJ5SU1QWnpFSTRkbkVLWVltaDJ6UjRQdHUrc1E0d25vMUxOOXczR004UEtjZUk5VEpqWE1vbnlZbGtYN3NWRXB0T0x5MktBeHc3QkYxZ3U5OGZVRUdpbDMxdko5eXZ3b3VwVVNEWk9lUlcxeUt4VzBTbHNRdXcxVWQvS29sMHJJL3RLek1EMlQ3WllKUUtFT05aQkpSZEZxeWVqZlA0MlR6ejJINWJXYitNbkNJbzRlM2c5ZGRlR3JNcXZDVHJoU1QweGRSMGRJRHFGZGNXZmtxRUZSSXhDVkZSSkpJcGNYOVpOQzJJZms1SDZFSGF1bkdXSzFDS3U2aTNhM2c2c0xOeGcxQWc4ejhJTkwvMFoveStQVXFkUDQ5b1cveG1SU3cvcjc3K0t4MDEvQThMR1RzRWo0Nk5KMS9NNW5aMUUzZ0c0M21CdTNOM20wV1Q3YnBBazdSTTU2a29lZ1NZdUNLQjVUcEVBMVdUNXFsczhTU3I2TjlhMmJVTHVjS0RwOHMxYml1SFk1UGRlWUVuMGtCeElZSFJ0RnJXNmgyUnlpTGF4aTlsZS9BcWVTUjZId0w5aGF1WUwwNFNtMlBveW9aMkZ6YXhORk8wV3JvRVp4MUlWZWt2QklYWGFGMHh0OFRxTnRMc3FyMisycXFpcTBBUmxoblg3RTBwZmJGRWV4UzlQME1ab2U0ZDhzY2IwRU5QWmcyU1kyeWpidTdkM0hFZnFkU2c2TWowMWphdVE0N1NrT2k5UG5qdlJqWS9zNnB2SWJpQ1ZHY0ordVAzNWdESElpaEFySFg5ZERiSmxMcS9GZ2RXM21KeWZRRzBRaldsWFd3MzJiam1QT0JydTJHaTJ5dnR2ektvODMxUWlrNjNmeEtTWkdqd0hNcWhlWmIzd005eWNZdEJMb041SVlHaDFCZjJZZkJDV05oWGN2WWIxUTVnZjNvYnRib3ZxYUNEUFFQWGI2RE80VmJrQjFHd2hyRW95dzBrdVV2dTdETndJTkNwRkxQbXpQM1pRUFRXZHk3WHI1U3lHVlBXVUpRVkxibGtQNUY3bUlCbDh6a0VxbnNidDNEK1ZpaVpQb1kySkF3ZVR3ZnR5NlZVTjFqNTRVVlpBWWpXQjA0aUMyZHQ1QitWNEJqejkrRXJhb2NiUnQxTndPOHFTQjJYV29RejZEWGxBUGFpSTNSd0x6Y3VDWVhWcXBUeTlUY1RFYUZ0OFF5UStGY1ZXbWwwbU1wejByWWFVaWxIZVZxbW5iekQ2MkNDTWFEd1FNWlU0aVpBdXR5bDEwcnBVaHU4ZHhLUHNNSmhnNXZ2VjNmNEdodzQvQW9hYjk4QWZmNGFDWXBBSkhKVEJnN3JuWmRIdUlSUHFjRkNDanFBVGVwZ25TUmZtVitRdlYxNzcyK2N0aFJaczFtWjFsUnc3K3dWc29XSElZY25RSVpvTlptajlLSWcyREFWNWhKVnRzYjRmM3lhaytFcFVTSDJGK2R1cTBqUWFPUGZFVVF2RWtWbGJYR1BoOUtqa3RneE1rY1pKdGdySnRyMWV0WnF0RFRqS3lPTFNmcm5YNWI5NzhjYlhuOWcwN010KzAzVXQ2Sk1ZM01EdEpVU1Npa2VBbXJHMldNUnhlUlozVEkrcGhPalQ1WkZaUnpHOGowVCtKek5RSm1MYUs1RWdLRnJPM1MxWHVHNW1rdjVaUUp1Y0NXZEZKQjU4SlFPSGx5RzZQRW1HVlFOa1IyNWJaVnBGNXV6SC9YM25vcjc3eEQ3bmZmK2x6bHhubVo0MW9QOEpLRkVzZkxMS3ZKdlhsRk96aU5tcjVMWVNacWJ1Mmp5ckQvTjNkUEErSFhkckRIbzgrQmc0bXprRFY0K2k2RlpydkRncjFBbHJkZGsvd2ZBTDF5UlhCbzhEeU9hZzJ0UVdFUTk3eWRWKzQvT2NYZmlZeGJ0NjZOYStweWlXTm1WampBYkJhYi9LZkhzSlNHODNkVmJRSndHUDJRVGlOUXRORHhUSElveHAycU9ReDNpOHRHVWlrOXNFbTkxS0RPcmIzR2dRcW84NnhyamZObmxVNG5MS0FLNTRUZ0tBWTA5QmxNWUFuenorUXFmLzVuYlhjQzA5TXZlNzY0c3Y1Y3BXanFUT0lrN3piNjRnNFplN1VSNGRhcEFwVVYrNU9DNDVFTG5YTEVlaEpQbXBVOEZSSVIvL2dHRVNPOVRpcjY5WjJFQ2dNRXlFOXkwV3Axa0tKazZyelBwUGUxcUlzME5CZi84c0wzODE5NktuanJaK3NuM3ZoMDRkbkxNZVpWUjJiZmtRUlpNbzdPdDZIQkpPZXp3SUpQQTRsQXRQMUtJSXQ2aFdKUGJndmd5R2VOQXhxVTNLWXA0MmRFdmE4TWZSUkdqcjErOURCUUdiWEVhV0lOcW8reG1td01sdmxXczdsTDcvNnJYUC9FOE1ENTdKS2Uzc3VFdXJQbGVyTlkwTGN3SjFpQTFORENVVGlPdEljK1dEMFhUcHRpMjBMTVhoRkVnTVl5RXdUekFBamJBSmFTRUdsYThKVWtsZ3YxckY4ZlJ1Ly9Ka3MyOVFpdjI3RFZ0djByQkQ1MDFuMC9QcmN6NjcvQUtEY1FyWEtXSnZ0RkNzWEcxNXMxdXI2V0w1YnhDTVA5N0ZkTnNWQWhjTUZnMU9IUW9XTEoxTUloU0s5a0JVbWwyeWJFeFFPbzE2b1lHUHhiWnAwQ25ab0JPdXJTMmhVQk93N21JVWEweTduOCt0enIvekJHeDkvbEE0ZUYzTzk0MjEyUnRIUDkrbjZ5eDlzOGhnZHJTRnRkSHFhSWpFMnNFd29kVG9ZcFUyNG5LUmt3aUJYUkJRcVBJbHdFb1BNZGZ2MkdrNmZPWVRWMVZXWXRUMXNiZDVoWG5yczlTOTk4Zmx6SDdidXp3WDBuNCtGNVh2bm5wNDVjTEVKWS80N2IxK2JmZXJJRklialFibDk5dCtsWjhXWWt3VldpZU5PMCszV0dsaGMyMFpzWkFwNytWMjJMNElZaytQNm5idll1TGwwZWVibzRmbXZmdkg1M0VldCtiSGZELzNyd2xxdVY2MkRCN0wvOUtOMzU0OCt0Ry8yNEw0QjlFVkRWRjRCblU2RDVDOGp6OUZlM3JpTzZPQUVZdlNIYllheTBZbEp0RzNuY21IcjF2ejMzdnhtN250dmZ0eHFuK0FidElXVi93RDJvNnNiaWZmV2QrWXlvOFBac1pIQnpHMXpMVkY5NThZeFh6Y3dkZWo0b2kvSlZhZlQzS3p0N2VRZVBYSGs0dGUvOXVWUDlKWGV2d05RQTFyOG56bm5HUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1FBQUFBa0NBWUFBQURoQUppWUFBQUFBWE5TUjBJQjJja3Nmd0FBREVWSlJFRlVlSnl0V0Zsc1ZPY1pQWGVmM1ROZU1YakhiR1V6RU5xRW9IcFNSVW5VcElxSjFDWVBsY3BqSGlwQm4vb1k1NlZTcGFvaFNoLzYwQmJTaHlxdFZFRWJHblZKeXpnaFRVSndER1lMR0d5RHdYZ2J6NzdlcmVlL1l4c0lDUWxTNzJpMk8vKzkvL20vNzN6bk8vK29lTWhqWW1JaUttdSs1MTNMSFFDY3FPUFlVY2UxK3lUWGh1TTRaMXpIU2J1dU13bklDYjFjL2t2M2poM3BoN20vK25VSHBsS3BnWHpCUE9BQ2NSY09vUENUSTBQbWJ4SS91bEQ0WXZjQk5rL1ljQjFyZjlWUWNlWGlhTUt1VkY3ZHRHTjM0djhDeURSTGNkZVZYbGxNRitPT0pFRjJKUS9FL01JQ1RuMTBDcmVtYm1GdWRnNExpeW5VMThmUTFkV0JyZHUyWXUzYVRzZ3lrY0tOUzVvUlB6OXlPdUhDZkhYcmpzY2VDT3lCZ0FxRjVPRnF0YmhmZGxXNHJnV1pnTnhxRlcvKzVuYzQvdmJicUpvMnNya2lUTnVHelpUSnNncS8zdy9EQ0tDcnV4TS9lUEVGN05xMWpkZnhacklVbHh5VndENDV0R1hIN3A4OEZLQlVhaUxxbXRyUmZDWWJKeStnNndHbVI4SGl6RzM4OXRBYkdCMCtBN3RTUmI1WTRrUUtiTFBDZHcyV2JhSEVSN1hpNE5MRkszanRsMi9nMmU4K2paZGUya2M4VENsRDY3cnV3WXRuVHZkVlhHWGZqaS9nMTMyQUJHa3pDNVVUUUxsUGZCZUFiSnRja2Z3WS9maERCQmlwanNZR1ROeStEYU9oSHJmbjUrSFhGUlNySmt4SEFPTXRIWk56RzBqTmwzRDhyKytnczJNTjl1emRLVzRHU1VUWmRlT0daSjhZR1JsNTR2T2c3Z09rMkpXanJpVDFMVjNvM1NCV0Y4Tjc3NzZQaVVzWHNhbzV5cWxzUmczUVEzWHdhVExTK1FMSzZVV29wSXhCUUJHL2o1eVhZVm9PTk5mQk8zODdqbDNmM0lxQW9YajNGRThlZlQ3WlBjcjNKNzRVMEkycmx3OFRRVnh3UlJ3eWt5K3hZdjV4L0IzOCtmZC94SmJlVnZTdTcwWjQ2enFNWGJxQ3VXUUsrWlFQQVVWR3RWaG1wYm53S1NwYXdpR0VBeG9rVmNWc3VvVFIwOE1ZSFRtSFJ4L3Q4eGE0dkZoV1pYeDQrSU5EdTNZOWZ2QStRQk5qbCtLUWxQMjFDOXlWQzhWeDYvcE4xSWVDYUc5cFp2VjBRTk5WUk1NYVVnc1pCQTBEcDRZdm9ONnZnTk9ndFNHQ0xlczYwZEhXaENwbDRUOGZudU1zclJpL01vNDlqekZ0RXBZanhBbzJSYlVlMlAvai9jZU8vT3BJNGg1QW1xcSs0czB2WGlUWkV4ZWhMMWFwaklXcGFmVDJyTUxPdmQ5Q1UxTWpLcGxaTUJRd0dnTUk5WFdqTGFUZzVrd1NqYkU2aEFJcXdoRWZmRUUvSkQyQ1pDcUhtKytQWVBqVWFmeHcvL2VYRnVtaWFwVXhQaldPRC80N2pON2taNi93NUIxQTB4TlhCOGlidURkNDZlbEszbUl3TnpkSHJhdWd2YTBMd2JvSTFHQUU1Ynpnb1F6Sm9SeVNJNnNhb21nSzYxQlpjVHdKbFlJSXBrc2psOWF0WHd2L0orZXh1SkNFYlZua25nR0hLeFYwRUxvMk8zVVp1ODEwUERmNFhEdzhlRHhSaTVBa0gvUndlQkRrR2loNG9vWjhQbzl3MkkrbWxrWk81SU9zKzZENlExQ0tBVWdzZll0UDJ6YVpiVm1RanBPb2NGUWZkSTRSRTBZaVFjU2lZVkFOb0pCZll0RmNDb2NxV0VobGtHYTBZekVER1NzNXlBbmpxaWh6U1pMN1BWeDNSNGdQOGVvd0NrYkFqMUFrd3RYcFhLVU54ZWRqamcyVVdlcVdaUklJVjZ6eU41dmp5UTk1dVpXb0N2eEJEZlhSQ0FKMVFSaTgzaEhMZEIwdkRnRkZ3VHFSZGowRis5WkUvMGdmb3FwUFVRWnFHR29FZHBmSXJMSnN4YWx3SUlTS2FjRkhVSXFpd2J1WHJFTmo2Z1RRUURDRUVrWFA1QTh5STZVcGt0RElXcTlqaFliOUFheWlicVVsWGl0K0U2Mk8wZFFrSFp2VzcwUTl0UWt6NTJCbWJwSUtVd01xSngvQU1wbTlNSGxKSXpBWDFFUDRtUzdHQTVGUVNBU2E0dWZBcXRxb2xJR2lyYVBJaWNxU1NmMnkyR3Q5c0JtcHFzTm81V1hvaG91WXowQWsyb1NnMytEMURoVHFsRTFVS2xISG1tSUkxZStGWXU2Q1psYXh4clRpSXFuUkZTeGVxTnlsQ3BPZ3N6OEZyQ3BUcFhnaW1Fa2xLWkFuY092V0ZHWGlHZ3ltWitlR2JuU3ZiaUpmWktxMWhRdFhQc1BJNkJpcXJvSklZeEJQUHZzTWZDUjNoYzFYS1ZjZ0JYMk1vdUpOWTFzdWROa1BtNzNQMW1VR1FlNWloRkMzQXNhTGpEQVFzdmN3eUErRnhHdnJYQTJUZXBPN2VSTzk3T2pxYkliOVMwZnJtbWIwOUxDS1dzSW9KWE1rZVJZUmNxc2xGa1ZkeTJyMHJHMkh5dkt1cDJiSkZSVTV0cHZ3K2lnanBaQm5OcXFpRUZ3QnppVkZiSjQzNjBTVjlTMXJrUURseVpzcndpcWpwSEdWcXh2UVVTN0NVQXpVczNmTlhSMURtZVYvbmlwOWEzRVdqYlFaVzc3ekZLNTltb0NabG5GNWJBcm41OUtvWXlxRGRUN3NXZjhJY25RSVlRSU5HVG9MbWtzVi9HVDZaRWs0SzFITmJDa01BSjk5cWl1NmNBME5hdm9wRTYzNHhLRXNZWlF0bUZuMktVRXVUY2U2dnAyUU9lbU9EWjJ3c21tcy9jWm1LTlFkeVdFeHNLcENYUFcyVlUxbzI5aU45VDF0ck1JS0lvYU02UXRYMGZQczg1Q2QycjFGUEVSazVGb3QxMFNQTHlwUG4rWDc5cFgrc2tSbzcxMk04N0VzRzV0RjM0R3UrY2dCbWFyTlZEenhPQlExZ0xaTjIxanFWWkRYSkdnTWZYdDJvbEl5MGRUV2dsQmRBQzdiakVLUWZsYWFwR2tyQy9lYTdJcmF1Y3RKT3NzRzdhWWwzQUhqS1pEc2VvT0VoL0czckVLcEtzU3ZTdVBscHdUWXNKd3FtanZYY05KMVVDSlJ5TldNTjFZT2tqOGRMYkJwMmlTWlVYQnMrSHhoWlBpOTY1SGQxQ3JWRTg4VmluREZ5NDVpYWY0MEk0UkpmdWhmR1hSM2hHeENEVWVoTjVSWUVTWHFoK2FsVVdMcEN2MnBsclBRS0ppMHVJeUU1UGtnVllTZmxrUm9qZWoybEhkVVhCT1JubDU2UEdsRlhSeXZ5ZUtlZzlBbVJaV0pwdmFqWlZKTHk2VldXd0pjVlVOVFp5Zm1yNDk1dVJmbmROMlAzUFE0aXRPVDZLNnJaNnNyMHM2V29SRk9zVlQwdU9FTFVIZDBVUndTTnV6YURTUFNVT3VQZDFGamlUaDNIVkpDMWNxK1k2YXZjdmh1c0xMSGVsSCtqa2NraWR3eCtWRlhMUEtHRG9DL2xiTXArQ2dGY3pkdlFMVkwxSms4cXV4UER2MjFLR0U1eU9iQitPZHBiN1ZvdE1ZZHgxbUovcDJ3U012aEVTaytwc2E2WSttWm1aa2hDbUcveHlBQ0VLWmRjTWhpSzdBdGc0T05tbzl4Ykc5TkpsTVRiRzZtQS9SaGxydVAyUnZqM082TW9WZ29ZdU9HZGZSS2ZvaGlVc21YYWxXNFMxOHRJVXNkWWNVMTNvM054VkIzZDNmYTYvYXVxd3d5emlkY2I3enNsYUZKVVhTbzBuenh0RUpuUTYxa2tqQllLUTRqTXAvSndDMHRJamN6aitteGNSUlNCYllLQStQWHI3TXlnWTNiTmlGY05pZ0o5UjdudkVKZkl0Q0thNFI3SjMydU5DamVQRUN0clUySm1abjVJUTd0OS9vMHllalF6QXZtS1I0UnFkcVUvK1FzaWMzb09aVUNwcStOUTZQNkJnc21RbG51dU5MVUs2bUtLc0dFdXhyb3RUVnVvNHBROVBwYXc3Nlh2Wi8vUHRUZTNaNVlBVlNMRWdacFhVOElCZ25VQ3F2SkZhMlpPUlpHTEJodXdrVHVITGxoZVJ6YXZIc1hHMjRqekprTUMya1VpdWJDVC9zYTZXaW10OGt3SWc1S2VlclJhcVpQSXZkb1oydHlxRUdqaEloN2lMMEpsVkpNUDdpTVl3V1FpTkxVMVBUcm1XenBRREtaeFR5ZFlqYWJaZW5idEQ2c0h6T0g5V3RpU0JWenZCTmJpVTlITnA5RU9qMkhzWmxyQkpGSE94MkJwdENKV1RJeUdSTUwyUUphR1ozUlQ4OUJDVFJ4TjhLTkpHMEx6U1VOcFFSTDhmWnFyM2UzMTZKekR5Qnh0TGV2UHZpOUYxN3VZMFQ3aFFZcHRBaWk2MGNqQnA3djM0aWVyazVjdTN3Wk1ydjBiVGJLNWxYTjBJTUs2bHBqbm5FTEJRUGVEalpmSnBpRlJYVDF0a01wTGVENnlHbjg2ZThuYVZWaWNIejBVWnE0WndEQlVHVG9EMGQrY2ZCdURQZnR5M0tMNVFFakhFcW9pckpkSnFCOHZzZ1ZxWGhrY3kvNVpHTlZXd2NtTDU0bmdTTWtna3IxcHExbGo0dlUwNmhWSFpRSlpwNk5OMHovRTZSYmhGUEcxaGFhdEgyUDRXZHZ2bzljeVVhUmRtTitvWEJXZCtZR1BqLy9mWUFTaVNQcHZyNkJPTHY5c2FhRzVuNkhWWmJOOHlZbGRteVhYcHJnMm51NmNPWHFWY3hjbVVTRTIrenAyVVY2WTFiZGZBb1piaGpGVG5WMWF3dmx3eVZJQzM2Mm9nYnV4dGZ3NWN6MWFhaVJ4cUhXeHJZQk1kZFhBaExIbVRQSHhNRDRjL3QrZW1oeGNlNUFqbFUyOHRra25tbHZvUlpWMkpNVWJOcTJCV251eXk0TWp6QTlTVlpVQVkyTk1lell2cEZrOTN0N081b211QldMV21RaG5iTnhhWHlLNlhSZW43MXg1dURsTDVyNHl3QXRIOGVQL3Z6ZzNpZGZQcFlwV0lQLy9uaTAvNm1uSDZjdjBwQzFDaEI2WGNkOTJKWk42MkdVOHNnVnN0eWRoRHlaOFA2RkVWWEZqYURGaWlxWFpQenJ2Zk5EaXdWemNEWTltWGpRbkYvNS85REpkMzh0YmhEWGxaZmk3eVpHQnIrOWMyMi8rSHVsVWk1UWQyb2JTck5TOFNxclVoU3RoVjJmb0Z3L1c0Z2l0bEhtMElWckM0T0gvdjdQQndMNTJvQ1dqNDlPdnBWNDhlUmI4YU9IWDR0dTd1b2FxSlJLY1JyY3JseHlNVm9xbTl1ckZaRks2YXdwVldnaDVFbmJOQk5hQmNmMkRSNTZxTC8wL2djaDdYbDM1YVdVandBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNRQUFBQWtDQVlBQUFEaEFKaVlBQUFBQVhOU1IwSUIyY2tzZndBQURQcEpSRUZVZUp5dFdHbHNYT2QxUFcrWk54dEhuQm1STkNsVHNpekxsR1VwTm1OSnRhckZlb3JWVms3aG1rNWlPRUdjUkVJU3lFRmJoR2tDRkdqUWhDaGFCQVdLdUVyN28wVmRLRExhT0VoaVViRmRtSElTa3lOTDFzYUlGR2xUQzBWeXVJajdjR1k0KzF0N3ZqZFMwSlNwRjZBemVIenpadm0rYys4OTU5ejdLT01qUHZvNk82SjlwNzd6cGI2dXYrdnNmZVA3M2FmKzh6dDlQL2oySWZmcm56L29mdTNweC9xKytzYzd1cjk2Y051eHorc3RYenFrcjQ5KzFQWGxEL3ZGM3RjNjJpNisvdGZkcG9iMGNsNzY0WVhleWJaakx5WDBvLy9jMWZyVFZ5OWljdGFFNjI5c1ZXdlc2VzVvelNFNXZQNkhSYWtoL2N6ZWU3dWYyOU9zLzc4QnV2VGE5L1RlMS8rbUc0cmI2VXArZld6Q3dzbWYzOFFidjdpQk03M3ZZanFUUmNNOUd3QTFnbHZ6ZVl4T3BienpYTnJBc2hsQXpvenBCVHZjL2JuZGE3cy8reUdBdlMrZ3ZxN3ZIWk1WdHh1U3BGdU9ncUdyT1p3NU40V2JrL01ZbVJxRkpibjQrTFk5eUM3YlNPV3lXTXBuc1Z3cElwTmZSb25uWExtQ3NoMUd0aHhFM2dyb2txUjJQN3Q3N1FzZkdkQlk5d3ZScXowdmRHdSt3Q0dmcXNJRndRd1ZNRENVeHRUQ0FtN056Y0N3Z1IzYmRjek1MS0pZTGlCWExLQmlXNmlZSmd6WHdUS3ZUYk1DMDY3QWx2MVl6TXNvbWdva1YycC9abWR6ZDF2cjcrYlhDa0FDaktQNXVoV2ZxcXV5REZsV2NITTBnNnMzVXR3a0Q2dWNSMWkxOGZEV0xWalQwSURVMGd3M05hQ3BQc0J4b2ZuOHNHd1hzdUpETVYrQVRaRGxDdm1sK0RHZk5XQkNoZTA2dXFOVUNDcTZBdFFLUUVvdzNFa1FyYkxrY0ZFTCtXSUZBd1BUY0V3YnVma0poTzA4Mmc0OGhpT0h2NGd3TWZqZ1FMTDVYZGVGU3ZDR1pVT1dGRGdXMzVja0dFYUZaeGtXcnl1MkQ1bWlEWmZYRXVSV3k2M3BmRjlBNCtmLzVaamoycnFJeXJVWmxTdWhyeStKM0hJWmt5TURDTG9tbmoveUZYejUrWFpzMzdrWEIvL29JTzV1V0kzVk5VR0VneG9Nc3d6SHNaa2gwOHVhdzJlWlhCSWx0ZmsrWVNPMVhPRk9HZ0VCdGlMcGo3YzIvZVB2QkRSNTZkOTBXWllQdVdBRS9LbkxxRlB6eXhnY25NUjhhb0VSVjNEa2E4OWo1NEZub1RYZUJ5VWN4NGFOTFhobzYyWUVGV1pLc3NtWkVreWpqR0loQjRlQUJCRExNVkhtdVdJSVB0a29HeTRKNzNnN1cySXYxL242Z2RZNmZRVWdTVkcvQzRXWHNnUlYwU0NyQWJ6eHl3dVltRjVBTnJ1RVJ4N1lpcFp0ajBFT1JPR1M2TElyUXdrRXNPdlJSNUhQcEtCYUJaVHpHWmFXbWExVVVDemxXRDZEQVBqYTRHY0VXelpLWHRaVEJaTWJrbWUzbjdZdGZmZTNBSTMxSFdzalZ0MFJsVlg5a0RVVk0zTVpuTDl3RGFabFFlSkMyM2J1UWpBV0oxNXF6akxoc2NEMW9XWFRac1JxUTdRcEczYTVqQXBMNURKanhWS0pHOW5ra01reXNuVDhyTXpzR1U3RkU0ZFFyNCs3U3dJWWJlWGc3U3g1Z0NSWmFYZEp3T3BCUXZMbyt0VkZwRElHaVMxajNib05hTjE3Z0U2OENxYklJc0Y0WldVMi9aRVlkdXpjQVl1WkNLa0tLdVVpTE5lQ3l0ZUdRVlZaZ2s4V2VVVU8wUTdFWnlXcVRwSlYrSW5JeHpVVVNUQks2dkFBTVR0UnlYWDNTUjdOK0plbmRDYVBycTV6SHNEbGJCcjFzUmo4bExWYXlqTUw1QWVqbHJpb1FrVXBjZ0I3ZHhFc0pWKy9PczVzbUNRd3hVM0xFTmtWMlJHWkVzQnNLazJBTXgyUlFRTXFBV2tFNUpORVpxUjl3cHRrSDVRMkZ2WTJrUWlJWHhnYW1zRGNmQTRLVTYrUUU4M1JDRTc5OUNVTXZ0VUpLejJGMHRJa0p2b1QrUG54NytQRThSOWdZdXdxd3Y2Z3B5UWZKYzFFOEhBSVZxYnl6R3AyS0JLSFo1ZEIyUHdzWFNBZ1QvN1ZwM2dGbjlsR2JzcHQvTGxnTzArU2QvUmVHb1FXRENDYnlhQ0dpNzV4N2h4TzlRMmdmN0FmcFdVU3Q1VEJ0WXR2d3BnWlJ0Z3NJQklPWS9ldVhjaVEvRkYvZ053Q0NXMTV2dVF3V0FGSVpFa0FFU1FXQnBvcnNaU0c3VmtENkhtUzdCRkJseGxWMUswbWgxOTFQWU5ycUNkWHlBbXJiR0RiMXEzWXQzc2ZkdTM0QTB4Tkw4TjBxVUEzREVtdFJieHBJNXEyYnNmeFU2ZHhvdXNVQXZ4OWZTUU12d3ZQRkcwQlNsRlpOc0U0eXB4L0hCRTNXMUd4YkZOOTd1M0NTTGNQZWIxZ2FLMG9tZXU2SGxyaFFnOC92QWwreGFFU2ZQakVnVS9pdVNOSDhPblBQSTMyYjNkZzlUMmJHTDJLNWkzYnNlM0FuNkRsd1cwNHVFZkhucjJQNDZHTkQwS2hLY2I4R3ZsbGtYY0sxU2NjWFBJeUpUTGtkUU5lbDRuT2NGZ3FyejNSUXNnUEFxcWxpdDFXNlRkbUpHeFJ3dVlITjJLLy92dUkxOVZoaC80RVl2RVdCR0sxQ0VXaTdFUkJGTmpQL094Ti9uZ1RRdEZHZk9xcFQrTmIzL2dyZk9HWjV6d2ZDbkxEQ0VHNUpMQ215bFVWa1JJaWFBRkdvVkl0WnMxd2JsZEdyb3BKa3AxV2xsdWtUWFJoRlo2QmVDYXA0UENoSjZIdjNJWkFKTUtGNlI5enQyRFJXeXFGTExJelUwejVNdFZXUmpBVWdsd2I1YUlCckE1R2NGOURFOUxzOUNVQ3EzRFRpbUVKaXREZlZFL0ZvSXpvTzZRSE0yUmEzbDUzQUtHcU52bUtjRThoTkp0ZFdxaEJZam9qN0UrcllpRllxVGtzWGs1Zy9QUXB5S0pmc1lOTG1reWVXSmdZT0V1ZUZDRVgyVGdwQUpNcWE5MzBBQnJEb2Vyb1FVV1ZtWm15NkdPQ1J5eVo2bE85WmlzVWFCcG1WZUJTdFhUazBSWFpkYVNNeHgrM0NrYjRpV05YOHpZNmNoMlQxd2N3UFhnWkRTMzNZM0Y2Qk8rY2VCRnYvZmhGbk8zNkJZb0xPY3hmNjBNbE5VNUEweHdyRExwMkJDM05UWWlHZzU2aVNCUHZFTW9TeEJWNzNkNmN3ZGllTnd0UXJxZDBaR1NhWDlMMTNuSHYwTWhUUklYb2MwdHBqTjBhUStDdU9IeWhDT3BDVVh6ODBaM1lmK0FQc2Z1Skp4Qyt1eEhMODBrc2psM0diTElmVStQWFVYSkthR3lxUStPcUtMa0QxR2grQklXcEtyTEhIZWVPNXdrb3N0QzFWQVVGejNHU0xLZmNJd25xZUhWVVBUNEpPeXJsaTlBbzJiZjcrOURZK2pHTUR0OUVzbThVeG9RQis1YUp4Y0ViR0x0OEVRT1hMbUJ5OUQzTVQ0OWlNVDJMQ2tzWld4MURQTG9Ld1lDRyttZ3R3bHFBcitsUFhFOVlnUmM0TTBZUmVoVzVyU2lSa3g2NXAyZjQ1T1JNbWVwaWcvUnBIc0dFV2N5TXo5UGVIYngxcmhkWm04cGpjNjNmY0IvcTkrN0N1cWVmUk1NajI2SDY0eWdzUzJocTJZSzFXeDdBM2Zldm95S2o1Q0tRclpRUnBtR3VpdFRBVDdQMCtkZ1RoRE5MVlJjWE9Ra0hoSkJFMmFybGREVGxwSHo0R3gyWmIvN2xQeVgrNFlVZjRmcU5XU0V4Rk5qTFJvZkhzWmdyWVh4NkJxK2VlTld6ZDN0aUFlbnV5ekJPRDZGMGFRUnJhaHV4NTVOUG9xWmhEUWN2dGhvdXZjeno5Y2xwekdSeVhvTVZiVmcwYU1ITE94enlISnNPR0FyNHFDa2FqZXhSSm5HeUo1bnh1bjB1WCtrNGUvNGFPdjcyWC9IeVQzNkp5WWs1TEMxbE9XN212Q0hxK01zdll6WTFnOEQ2TU54NkYza3BCYWRaZ3RWSWRRUk56STRNWVdsOGdsbWR3ZUR3S0M2enZDWXpFV1R6RkEzWWN0anRxVFJSRTFFMklSN2hSN0xzVnYzSG81SFM4WnZ4NDFyeVprL0ZNaE81a292LzZqcVB6czV1TEtaeTFmbVl6MHcyaHpmZlBnMjErUzdVYlg4SWF6NnhGODNiZDZDeGVSMkttU1VraC9veFB6K0w4d09EdUhCOW1NUzJVVWNPcWR4SThRelJtd3k5RElrdHhSZ2kzRnRNQkFwOVNYS1Z4TS9PSkh0K2EyTGtlTmtoUm9OaXhjYlVmQlpqcy9NUWNGUXVFcWJydm4zNnJMamlsQmlCeFBIVlh4UEIzTlFJQm52UDRkMmhZZlQ4dWcvdmpVK2pyamFHalkzMTVDRXpJL3lOYTBkRDVBOS83ZWNkaVUwZWlmWVVpWkRrcXV3QmRXVzdZOFVJbTV4SzlyQWZIN1dZenVWQ2RkUVVFYWlVckk4cTZYazdnZGRmK3dueUM2T1l2OUdMN2hNdm9mTkh4NUE0ZXdibnI0MGdreTdoN3NZR3hHT3JSUHJwNUFZSHZLeG5qaG9EaWNXaUhwZkVEWVNQcGFvVDN4Tmc0Qjc5MlptcG5oV0F4R01rbVd5dm1FWkNERkNoVUEzN2tjK1RxNDhMaWJ1SVAvMkxkanoxN0xQNHlwLy9HWWJIUjNIdjJyV0lCNEpZRjQ5aFEvTmEzbjBFWVBIT1kzR0pyczNiSm9ta3pqSzRTSmp0aDlPam1LLzhOS2MxZFRIVTBCS1kvTVFyNzB5MS8wOE1LKzdMVEVscEk1NHJRVTFEbkc3clp3OVNWY21iYld4YTdwWGhFZkprRk9NWnp0bTc5a0xYZFR5K2J3OWFIOXJNMHRKbnhKQXZSTTBCWDJRcVZTekNUOUNiMXE5SGdBRERiRHMxSkx0aldWY01SV3I3My91dkFKUk1Kak51eU5IanF5S0pHa1pXc2NYOHEzaGMwaGlpY0Z1T3c3ZzVOc2w1YUQzdWZmZ1IzUDk3ZTNEUC9mZlJ0empBNXdvSWFqN1BrVVdXREpMM3huaVM5MjkzWVMwUGkxa3MxTllrRm9xTHVwRDVCd0lTai83K1pPYkZydE82cldoSHkzUldqUTFSWTNUQ1YzeUNWenh1elU3RFplUnh6a2RORzdkQW92RVZ5N3l2cDhlSUpwb3BsTDN1cmRCLzBtVUxvek1UQ0szbThQYlVFMGN2dlhOZDcrblByQUR6ZndLNjgzamwzT1YyVzViMzB5MFMzcEF2VkVzaSttVFJBa3BZV0p4alZZTGVjQ1hHM1V3MkQ0VzlLMDNlVkNpS3NyakZaakErVGNLbGhYUkNxVis3LytyZi8zdjcrKzM1Z2Y4ZlNzNW1lazYvTzZKcnFyby9vUGtTbWs5QmdPYTJ2cjRSK1ZRS0x1ZWkyZEVibUp4aXR4ZWQyZXZrbERpQkdVVURmbGxOT00wTis5TWpTZjNrZi95NDU0UDIrOUQvUWV1Zld1eTVlbXRSOTB2K1dMUTJmSGpMNXMzSFYwZmppYkdiL1ZmZWZQMFZ2SGQxQ0w2QS8wckFyeVVpQWYveHVzaXF3MnFnRXB0SlpmVEYvcHNmQ09UTzQ3OEJNYkdkV2Y4TFZOVUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbG9yLCBzcGFjZSwgdHlwb2dyYXBoeSwgc2hhZG93IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5hYFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC42NnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG4gICY6aG92ZXIsXHJcbiAgJjphY3RpdmUsXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgJHtjb2xvcn07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQSA9ICh7IGhyZWYgPSBcIiNcIiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8UGFyYWdyYXBoIGhyZWY9e2hyZWZ9IGNvbG9yPVwic2Vjb25kYXJ5XCIgey4uLnByb3BzfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEE7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBjb2xvcixcclxuICBiYWNrZ3JvdW5kLFxyXG4gIHNwYWNlLFxyXG4gIGJvcmRlcixcclxuICB0eXBvZ3JhcGh5LFxyXG4gIHNoYWRvdyxcclxuICBmbGV4Ym94LFxyXG4gIGxheW91dCxcclxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxuY29uc3QgQmFkZ2VTb2xpZCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA0cHggMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtiYWNrZ3JvdW5kfTtcclxuICAke2JvcmRlcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbiAgJHtmbGV4Ym94fTtcclxuICAke2xheW91dH07XHJcbmA7XHJcblxyXG5jb25zdCBCYWRnZSA9ICh7IGNvbG9yID0gXCJsaWdodFwiLCBiZyA9IFwicHJpbWFyeVwiLCAuLi5yZXN0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJhZGdlU29saWRcclxuICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICBib3JkZXI9e2AxcHggc29saWRgfVxyXG4gICAgICBib3JkZXJDb2xvcj17Ymd9XHJcbiAgICAgIGJnPXtiZ31cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWRnZTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBjb2xvcixcclxuICBzcGFjZSxcclxuICBsYXlvdXQsXHJcbiAgZmxleGJveCxcclxuICBncmlkLFxyXG4gIHR5cG9ncmFwaHksXHJcbiAgYmFja2dyb3VuZCxcclxuICBib3JkZXIsXHJcbiAgcG9zaXRpb24sXHJcbiAgc2hhZG93LFxyXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcblxyXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7bGF5b3V0fTtcclxuICAke2ZsZXhib3h9O1xyXG4gICR7Z3JpZH07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke2JhY2tncm91bmR9O1xyXG4gICR7Ym9yZGVyfTtcclxuICAke3Bvc2l0aW9ufTtcclxuICAke3NoYWRvd307XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3g7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgcmdiYSwgZGFya2VuLCBkZXNhdHVyYXRlIH0gZnJvbSBcInBvbGlzaGVkXCI7XHJcbmltcG9ydCB7XHJcbiAgY29sb3IsXHJcbiAgYmFja2dyb3VuZCxcclxuICBzcGFjZSxcclxuICBib3JkZXIsXHJcbiAgdHlwb2dyYXBoeSxcclxuICBzaGFkb3csXHJcbiAgZmxleGJveCxcclxuICBsYXlvdXQsXHJcbn0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5cclxuY29uc3QgQnV0dG9uU29saWQgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjU2MjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuODg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICBtaW4td2lkdGg6IDE3NXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuXHJcbiAgJjphY3RpdmU6Zm9jdXMsXHJcbiAgJi5hY3RpdmU6Zm9jdXMsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSwgYmcgfSkgPT5cclxuICAgICAgYDAgMCAwIDAuMnJlbSAke3JnYmEodGhlbWUuY29sb3JzW2JnXSwgMC41KX1gfTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUsIGJnIH0pID0+XHJcbiAgICAgIGRhcmtlbigwLjA3NjUsIGRlc2F0dXJhdGUoMC4xOCwgdGhlbWUuY29sb3JzW2JnXSkpfTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgQG1lZGlhICR7ZGV2aWNlLm1kfSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7Y29sb3J9O1xyXG4gICR7YmFja2dyb3VuZH07XHJcbiAgJHtib3JkZXJ9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG4gICR7ZmxleGJveH07XHJcbiAgJHtsYXlvdXR9O1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHtcclxuICB2YXJpYW50ID0gXCJzb2xpZFwiLFxyXG4gIGNvbG9yID0gXCJsaWdodFwiLFxyXG4gIGJnID0gXCJwcmltYXJ5XCIsXHJcbiAgLi4ucmVzdFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIHZhcmlhbnQgPT09IFwic29saWRcIiA/IChcclxuICAgIDxCdXR0b25Tb2xpZCBjb2xvcj17Y29sb3J9IGJvcmRlckNvbG9yPXtiZ30gYmc9e2JnfSB7Li4ucmVzdH0gLz5cclxuICApIDogKFxyXG4gICAgPEJ1dHRvblNvbGlkXHJcbiAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgYm9yZGVyPXtgMXB4IHNvbGlkYH1cclxuICAgICAgYm9yZGVyQ29sb3I9e2JnfVxyXG4gICAgICBiZz17Ymd9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIHNwYWNlLFxyXG4gIGJvcmRlcixcclxuICB0eXBvZ3JhcGh5LFxyXG4gIHNoYWRvdyxcclxuICBmbGV4Ym94LFxyXG4gIGxheW91dCxcclxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxuY29uc3QgQ2hlY2tTdHlsZWQgPSBzdHlsZWQubGFiZWxgXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBpbnB1dDpjaGVja2VkIH4gLmNoZWNrOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYxNGFcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcclxuICB9XHJcblxyXG4gICR7Ym9yZGVyfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuICAke2ZsZXhib3h9O1xyXG4gICR7bGF5b3V0fTtcclxuYDtcclxuXHJcbmNvbnN0IENoZWNrID0gc3R5bGVkLnNwYW5gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRvcDogLTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIG1pbi13aWR0aDogMjBweDtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYwYzhcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIjtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAjZTJlNGU4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dH07XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuYDtcclxuXHJcbmNvbnN0IENoZWNrYm94ID0gKHtcclxuICBjaGlsZHJlbiA9IFwiS2VlcCBtZSBzaWduZWQgaW5cIixcclxuICBvbkNsaWNrID0gKCkgPT4ge30sXHJcbiAgLi4ucmVzdFxyXG59KSA9PiB7XHJcbiAgY29uc3QgdUlEID0gdW5pcXVlSWQoXCJjaGVja19cIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hlY2tTdHlsZWQgey4uLnJlc3R9IGh0bWxGb3I9e3VJRH0+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJkLW5vbmVcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD17dUlEfSAvPlxyXG4gICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwiY2hlY2tcIj48L0NoZWNrPlxyXG4gICAgICA8VGV4dD57Y2hpbGRyZW59PC9UZXh0PlxyXG4gICAgPC9DaGVja1N0eWxlZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBjb2xvcixcclxuICBzcGFjZSxcclxuICB0eXBvZ3JhcGh5LFxyXG4gIHNoYWRvdyxcclxuICBsYXlvdXQsXHJcbiAgYm9yZGVyLFxyXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcblxyXG5jb25zdCBJbnB1dFNvbGlkID0gc3R5bGVkLmlucHV0YFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC41NnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEuMjc1cmVtIDEuNzVyZW07XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6ICR7KHsgdGhlbWUgfSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJ9YH07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAke2NvbG9yfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuICAke2xheW91dH07XHJcbiAgJHtib3JkZXJ9O1xyXG4gICY6Zm9jdXMsXHJcbiAgJjphY3RpdmUsXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lLCBmb2N1c0NvbG9yIH0pID0+IHRoZW1lLmNvbG9yc1tmb2N1c0NvbG9yXX07XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEFuaW1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG4gICR7bGF5b3V0fTtcclxuICAke2JvcmRlcn07XHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxLjI3NXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiAkeyh7IHRoZW1lIH0pID0+IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyfWB9O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubGlnaHR9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmt9O1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyOiAkeyh7IHRoZW1lIH0pID0+IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fWB9O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBpbnB1dDpmb2N1cyB+IGxhYmVsIHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmxpZ2h0fTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya1NoYWRlfTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSAoe1xyXG4gIHZhcmlhbnQgPSBcInNvbGlkXCIsXHJcbiAgdHlwZSA9IFwidGV4dFwiLFxyXG4gIGZvY3VzQ29sb3IgPSBcInNlY29uZGFyeVwiLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIGNzcyxcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICByZXR1cm4gdmFyaWFudCA9PT0gXCJhbmltYXRpb25cIiA/IChcclxuICAgIDxJbnB1dEFuaW1hdGlvbiBjc3M9e2Nzc30gey4uLnJlc3R9PlxyXG4gICAgICA8aW5wdXQgd2lkdGg9XCIxMDAlXCIgdHlwZT17dHlwZX0gY29sb3I9XCJ0ZXh0XCIgYmc9XCJsaWdodFwiIC8+XHJcbiAgICAgIDxsYWJlbD57cGxhY2Vob2xkZXJ9PC9sYWJlbD5cclxuICAgIDwvSW5wdXRBbmltYXRpb24+XHJcbiAgKSA6IChcclxuICAgIDxJbnB1dFNvbGlkXHJcbiAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIGNvbG9yPVwidGV4dFwiXHJcbiAgICAgIGJnPVwibGlnaHRcIlxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgIGZvY3VzQ29sb3I9e2ZvY3VzQ29sb3J9XHJcbiAgICAgIGNzcz17Y3NzfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5cclxuY29uc3QgSW5wdXRHcm91cFN0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMjdweDtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gcmdiYSh0aGVtZS5jb2xvcnMuZGFyaywgMC40KX07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRHcm91cCA9ICh7XHJcbiAgdHlwZSA9IFwidGV4dFwiLFxyXG4gIGZvY3VzQ29sb3IgPSBcInNlY29uZGFyeVwiLFxyXG4gIGljb24gPSA8c3BhbiBjbGFzc05hbWU9XCJmYXIgZmEtZW52ZWxvcGVcIiAvPixcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPElucHV0R3JvdXBTdHlsZWQ+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBjb2xvcj1cInRleHRcIlxyXG4gICAgICAgIGJnPVwibGlnaHRcIlxyXG4gICAgICAgIGZvY3VzQ29sb3I9e2ZvY3VzQ29sb3J9XHJcbiAgICAgICAgcGw9XCI0LjEyNXJlbVwiXHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxJY29uIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj57aWNvbn08L0ljb24+XHJcbiAgICA8L0lucHV0R3JvdXBTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0R3JvdXA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0fTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTBweDtcclxuICAgICAgbWluLWhlaWdodDogMTBweDtcclxuICAgICAgbWF4LWhlaWdodDogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya307XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcclxuXHJcbmNvbnN0IFNlY3Rpb24gPSAoeyB2YXJpYW50ID0gXCJzZWN0aW9uXCIsIC4uLnJlc3QgfSkgPT4ge1xyXG4gIHJldHVybiB2YXJpYW50ID09PSBcImhlcm9cIiA/IChcclxuICAgIDxCb3hcclxuICAgICAgcHQ9e1tcIjguNDM3NXJlbVwiLCBudWxsLCBudWxsLCBcIjExLjI1cmVtXCJdfVxyXG4gICAgICBwYj17W1wiMy43NXJlbVwiLCBudWxsLCBudWxsLCBcIjguNDM3NXJlbVwiXX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICkgOiAoXHJcbiAgICA8Qm94IHB5PXtbXCIzLjc1cmVtXCIsIG51bGwsIG51bGwsIFwiNy41cmVtXCJdfSB7Li4ucmVzdH0gLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5cclxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBbXHJcbiAgeyB2YWx1ZTogXCJjaG9jb2xhdGVcIiwgbGFiZWw6IFwiQ2hvY29sYXRlXCIgfSxcclxuICB7IHZhbHVlOiBcInN0cmF3YmVycnlcIiwgbGFiZWw6IFwiU3RyYXdiZXJyeVwiIH0sXHJcbiAgeyB2YWx1ZTogXCJ2YW5pbGxhXCIsIGxhYmVsOiBcIlZhbmlsbGFcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgZ2V0Q3VzdG9tU3R5bGVzID0gKHRoZW1lLCBhY2NlbnRDb2xvciwgYmcsIGJvcmRlciwgaW5kaWNhdG9yKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRyb3Bkb3duSW5kaWNhdG9yOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcGxheTogIWluZGljYXRvciAmJiBcIm5vbmVcIixcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+IHt9LFxyXG4gICAgb3B0aW9uOiAocHJvdmlkZWQsIHN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgICAgY29sb3I6IHN0YXRlLmlzU2VsZWN0ZWQgPyB0aGVtZS5jb2xvcnNbYWNjZW50Q29sb3JdIDogdGhlbWUuY29sb3JzLmRhcmssXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2w6IChwcm92aWRlZCwgc3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgICBib3JkZXI6ICFib3JkZXJcclxuICAgICAgICAgID8gXCJub25lXCJcclxuICAgICAgICAgIDogc3RhdGUubWVudUlzT3BlbiB8fCBzdGF0ZS5pc0ZvY3VzZWRcclxuICAgICAgICAgID8gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yc1thY2NlbnRDb2xvcl19ICFpbXBvcnRhbnRgXHJcbiAgICAgICAgICA6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyfSAhaW1wb3J0YW50YCxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMC4yNXJlbSAxcmVtXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0NXB4XCIsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYmcsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBTZWxlY3RTdHlsZWQgPSAoe1xyXG4gIHRoZW1lLFxyXG4gIGJnID0gXCIjZmZmXCIsXHJcbiAgYm9yZGVyID0gdHJ1ZSxcclxuICBhY2NlbnRDb2xvciA9IFwic3VjY2Vzc1wiLFxyXG4gIG5hbWUgPSBcIml0ZW1cIixcclxuICBpbmRpY2F0b3IgPSB0cnVlLFxyXG4gIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucyxcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlbGVjdFxyXG4gICAgICBzdHlsZXM9e2dldEN1c3RvbVN0eWxlcyh0aGVtZSwgYWNjZW50Q29sb3IsIGJnLCBib3JkZXIsIGluZGljYXRvcil9XHJcbiAgICAgIGRlZmF1bHRWYWx1ZT17b3B0aW9uc1sxXX1cclxuICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgaW5zdGFuY2VJZD1cImluSWRcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWxlY3RTdHlsZWQpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbG9yLCBzcGFjZSwgdHlwb2dyYXBoeSwgc2hhZG93IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmNvbnN0IFNwYW5TdHlsZWQgPSBzdHlsZWQuc3BhbmBcclxuICAke2NvbG9yfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuYDtcclxuXHJcbmNvbnN0IFNwYW4gPSAoeyAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIDxTcGFuU3R5bGVkIHsuLi5wcm9wc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGFuO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBzcGFjZSxcclxuICBib3JkZXIsXHJcbiAgdHlwb2dyYXBoeSxcclxuICBzaGFkb3csXHJcbiAgZmxleGJveCxcclxuICBsYXlvdXQsXHJcbn0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmNvbnN0IFN3aXRjaFN0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNzJweDtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IGFjdGl2ZSwgdGhlbWUsIGJnIH0pID0+XHJcbiAgICBhY3RpdmUgPyB0aGVtZS5jb2xvcnNbYmddIDogYCNlYWU5ZjJgfTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAke2JvcmRlcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbiAgJHtmbGV4Ym94fTtcclxuICAke2xheW91dH07XHJcbmA7XHJcblxyXG5jb25zdCBSb3VuZCA9IHN0eWxlZC5zcGFuYFxyXG4gIHdpZHRoOiAyMXB4O1xyXG4gIGhlaWdodDogMjFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICBsZWZ0OiAkeyh7IGFjdGl2ZSB9KSA9PiAoYWN0aXZlID8gYGNhbGMoMTAwJSAtIDMzcHgpYCA6IGAwYCl9O1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5gO1xyXG5cclxuY29uc3QgU3dpdGNoID0gKHsgYmcgPSBcInNlY29uZGFyeVwiLCBvbkNsaWNrID0gKCkgPT4ge30sIC4uLnJlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN3aXRjaCA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcclxuICAgIG9uQ2xpY2soKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN3aXRjaFN0eWxlZFxyXG4gICAgICBiZz17Ymd9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVTd2l0Y2h9XHJcbiAgICAgIGFjdGl2ZT17YWN0aXZlID8gMSA6IDB9XHJcbiAgICA+XHJcbiAgICAgIDxSb3VuZCBhY3RpdmU9e2FjdGl2ZSA/IDEgOiAwfSAvPlxyXG4gICAgPC9Td2l0Y2hTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBjb2xvciwgc3BhY2UsIHR5cG9ncmFwaHksIHNoYWRvdyB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcblxyXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDEuMDYyNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjcxO1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG5gO1xyXG5cclxuY29uc3QgUGFyYWdyYXBoTGFyZ2UgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDEuMTg3NXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY5O1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG5gO1xyXG5cclxuY29uc3QgUGFyYWdyYXBoU21hbGwgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDAuOTM3NXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjczO1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG5gO1xyXG5cclxuY29uc3QgVGV4dCA9ICh7IHZhcmlhbnQsIC4uLnByb3BzIH0pID0+IHtcclxuICBsZXQgVGV4dFJlbmRlcjtcclxuXHJcbiAgc3dpdGNoICh2YXJpYW50KSB7XHJcbiAgICBjYXNlIFwic21cIjpcclxuICAgICAgVGV4dFJlbmRlciA9IFBhcmFncmFwaFNtYWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJsZ1wiOlxyXG4gICAgICBUZXh0UmVuZGVyID0gUGFyYWdyYXBoTGFyZ2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgVGV4dFJlbmRlciA9IFBhcmFncmFwaDtcclxuICB9XHJcblxyXG4gIHJldHVybiA8VGV4dFJlbmRlciBjb2xvcj1cInRleHRcIiB7Li4ucHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBjb2xvciwgc3BhY2UsIHR5cG9ncmFwaHksIHNoYWRvdyB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5cclxuY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogY2FsYygxLjM1cmVtICsgMS4ydncpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMS4ycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLnhsfSB7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgfVxyXG5cclxuICAke2NvbG9yfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuYDtcclxuXHJcbmNvbnN0IEhlcm9UaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6IGNhbGMoMS41cmVtICsgM3Z3KTtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMDgzO1xyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UueGx9IHtcclxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcclxuICB9XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbmA7XHJcblxyXG5jb25zdCBQcmVUaXRsZSA9IHN0eWxlZC5oNGBcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS42MztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9ICFpbXBvcnRhbnQ7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkVGl0bGUgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9ICh7IHZhcmlhbnQsIC4uLnJlc3QgfSkgPT4ge1xyXG4gIGxldCBUaXRsZVN0eWxlZCA9IFNlY3Rpb25UaXRsZTtcclxuXHJcbiAgc3dpdGNoICh2YXJpYW50KSB7XHJcbiAgICBjYXNlIFwicHJlXCI6XHJcbiAgICAgIFRpdGxlU3R5bGVkID0gUHJlVGl0bGU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImNhcmRcIjpcclxuICAgICAgVGl0bGVTdHlsZWQgPSBDYXJkVGl0bGU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImhlcm9cIjpcclxuICAgICAgVGl0bGVTdHlsZWQgPSBIZXJvVGl0bGU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgVGl0bGVTdHlsZWQgPSBTZWN0aW9uVGl0bGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPFRpdGxlU3R5bGVkIGNvbG9yPVwiaGVhZGluZ1wiIHsuLi5yZXN0fSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xyXG4iLCJpbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIjtcclxuaW1wb3J0IFRleHQgZnJvbSBcIi4vVGV4dFwiO1xyXG5pbXBvcnQgQSBmcm9tIFwiLi9BXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwiLi9CYWRnZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9TZWN0aW9uXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4vQ2hlY2tib3hcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcIi4vSW5wdXRHcm91cFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuL1NlbGVjdFwiO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xyXG5pbXBvcnQgU3BhbiBmcm9tIFwiLi9TcGFuXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQm94LFxyXG4gIFRpdGxlLFxyXG4gIFRleHQsXHJcbiAgQSxcclxuICBCYWRnZSxcclxuICBCdXR0b24sXHJcbiAgU2VjdGlvbixcclxuICBJbnB1dCxcclxuICBDaGVja2JveCxcclxuICBJbnB1dEdyb3VwLFxyXG4gIFNlbGVjdCxcclxuICBTd2l0Y2gsXHJcbiAgU3BhbixcclxuICBMaXN0LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcblxyXG5jb25zdCBoZWFkZXJDb25maWdEZWZhdWx0ID0ge1xyXG4gIHRoZW1lOiBcImxpZ2h0XCIsXHJcbiAgYmdDbGFzczogXCJkeW5hbWljLXN0aWNreS1iZ1wiLFxyXG4gIHZhcmlhbnQ6IFwicHJpbWFyeVwiLFxyXG4gIGFsaWduOiBcInJpZ2h0XCIsXHJcbiAgaXNGbHVpZDogZmFsc2UsXHJcbiAgYnV0dG9uOiBcImFjY291bnRcIiwgLy8gcHJvZmlsZSwgY2FydCwgY3RhLCBhY2NvdW50LCBudWxsXHJcbiAgYnV0dG9uVGV4dDogXCJHZXQgc3RhcnRlZCBmcmVlXCIsIC8vIHByb2ZpbGUsIGNhcnQsIGN0YSwgYWNjb3VudCwgbnVsbFxyXG4gIHJldmVhbDogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IGZvb3RlckNvbmZpZ0RlZmF1bHQgPSB7XHJcbiAgdGhlbWU6IFwiZGFya1wiLFxyXG4gIHN0eWxlOiBcInN0eWxlMVwiLCAvL3N0eWxlMSwgc3R5bGUyLCBzdHlsZTNcclxufTtcclxuXHJcbmNvbnN0IFBhZ2VXcmFwcGVyID0gKHtcclxuICBjaGlsZHJlbixcclxuICBoZWFkZXJDb25maWcgPSBudWxsLFxyXG4gIGZvb3RlckNvbmZpZyA9IG51bGwsXHJcbn0pID0+IHtcclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZ0NvbnRleHQudGhlbWVEYXJrKSB7XHJcbiAgICAgIGdDb250ZXh0LnNldEhlYWRlcih7XHJcbiAgICAgICAgLi4uaGVhZGVyQ29uZmlnRGVmYXVsdCxcclxuICAgICAgICAuLi5oZWFkZXJDb25maWcsXHJcbiAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgICB9KTtcclxuICAgICAgZ0NvbnRleHQuc2V0Rm9vdGVyKHtcclxuICAgICAgICAuLi5mb290ZXJDb25maWdEZWZhdWx0LFxyXG4gICAgICAgIC4uLmZvb3RlckNvbmZpZyxcclxuICAgICAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ0NvbnRleHQuc2V0SGVhZGVyKHsgLi4uaGVhZGVyQ29uZmlnRGVmYXVsdCwgLi4uaGVhZGVyQ29uZmlnIH0pO1xyXG4gICAgICBnQ29udGV4dC5zZXRGb290ZXIoeyAuLi5mb290ZXJDb25maWdEZWZhdWx0LCAuLi5mb290ZXJDb25maWcgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2dDb250ZXh0LnRoZW1lRGFya10pO1xyXG5cclxuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVdyYXBwZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9QYWdlV3JhcHBlclwiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEdsb2JhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdGhlbWVEYXJrLCBzZXRUaGVtZURhcmtdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93U2lkZWJhckRhc2hib2FyZCwgc2V0U2hvd1NpZGViYXJEYXNoYm9hcmRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2FwcGxpY2F0aW9uTW9kYWxWaXNpYmxlLCBzZXRBcHBsaWNhdGlvbk1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NpZ25Jbk1vZGFsVmlzaWJsZSwgc2V0U2lnbkluTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2lnblVwTW9kYWxWaXNpYmxlLCBzZXRTaWduVXBNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2aWRlb01vZGFsVmlzaWJsZSwgc2V0VmlkZW9Nb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2aXNpYmxlT2ZmQ2FudmFzLCBzZXRWaXNpYmxlT2ZmQ2FudmFzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgdGhlbWU6IFwibGlnaHRcIixcclxuICAgIGJnQ2xhc3M6IFwiZGVmYXVsdFwiLFxyXG4gICAgdmFyaWFudDogXCJwcmltYXJ5XCIsXHJcbiAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICBpc0ZsdWlkOiBmYWxzZSxcclxuICAgIGJ1dHRvbjogXCJjdGFcIiwgLy8gcHJvZmlsZSwgYWNjb3VudCwgbnVsbFxyXG4gICAgYnV0dG9uVGV4dDogXCJHZXQgc3RhcnRlZCBmcmVlXCIsIC8vIHByb2ZpbGUsIGFjY291bnQsIG51bGxcclxuICAgIHJldmVhbDogdHJ1ZSxcclxuICB9KTtcclxuICBjb25zdCBbZm9vdGVyLCBzZXRGb290ZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgc3R5bGU6IFwic3R5bGUxXCIsIC8vc3R5bGUxLCBzdHlsZTJcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBzZXRUaGVtZURhcmsoIXRoZW1lRGFyayk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lkZWJhckRhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIHNldFNob3dTaWRlYmFyRGFzaGJvYXJkKCFzaG93U2lkZWJhckRhc2hib2FyZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlVmlkZW9Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFZpZGVvTW9kYWxWaXNpYmxlKCF2aWRlb01vZGFsVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQXBwbGljYXRpb25Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldEFwcGxpY2F0aW9uTW9kYWxWaXNpYmxlKCFhcHBsaWNhdGlvbk1vZGFsVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lnbkluTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWduSW5Nb2RhbFZpc2libGUoIXNpZ25Jbk1vZGFsVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lnblVwTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWduVXBNb2RhbFZpc2libGUoIXNpZ25VcE1vZGFsVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlT2ZmQ2FudmFzID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZU9mZkNhbnZhcyghdmlzaWJsZU9mZkNhbnZhcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VPZmZDYW52YXMgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlT2ZmQ2FudmFzKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICB0aGVtZURhcmssXHJcbiAgICAgICAgdG9nZ2xlVGhlbWUsXHJcbiAgICAgICAgc2hvd1NpZGViYXJEYXNoYm9hcmQsXHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhckRhc2hib2FyZCxcclxuICAgICAgICB2aWRlb01vZGFsVmlzaWJsZSxcclxuICAgICAgICB0b2dnbGVWaWRlb01vZGFsLFxyXG4gICAgICAgIGFwcGxpY2F0aW9uTW9kYWxWaXNpYmxlLFxyXG4gICAgICAgIHRvZ2dsZUFwcGxpY2F0aW9uTW9kYWwsXHJcbiAgICAgICAgc2lnbkluTW9kYWxWaXNpYmxlLFxyXG4gICAgICAgIHRvZ2dsZVNpZ25Jbk1vZGFsLFxyXG4gICAgICAgIHNpZ25VcE1vZGFsVmlzaWJsZSxcclxuICAgICAgICB0b2dnbGVTaWduVXBNb2RhbCxcclxuICAgICAgICB2aXNpYmxlT2ZmQ2FudmFzLFxyXG4gICAgICAgIHRvZ2dsZU9mZkNhbnZhcyxcclxuICAgICAgICBjbG9zZU9mZkNhbnZhcyxcclxuICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgc2V0SGVhZGVyLFxyXG4gICAgICAgIGZvb3RlcixcclxuICAgICAgICBzZXRGb290ZXIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsQ29udGV4dDtcclxuZXhwb3J0IHsgR2xvYmFsUHJvdmlkZXIgfTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQ291bnRVcCBmcm9tIFwicmVhY3QtY291bnR1cFwiO1xyXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSBcInJlYWN0LWxhenlsb2FkXCI7XHJcbmltcG9ydCBQYWdlV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWdlV3JhcHBlclwiO1xyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3JlXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuXHJcbmltcG9ydCBpbWdQMSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlL3RhYmxlLW9uZS1wcm9maWxlLWltYWdlLTEucG5nXCI7XHJcbmltcG9ydCBpbWdQMiBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlL3RhYmxlLW9uZS1wcm9maWxlLWltYWdlLTIucG5nXCI7XHJcbmltcG9ydCBpbWdQMyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlL3RhYmxlLW9uZS1wcm9maWxlLWltYWdlLTMucG5nXCI7XHJcbmltcG9ydCBpbWdQNCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlL3RhYmxlLW9uZS1wcm9maWxlLWltYWdlLTQucG5nXCI7XHJcbmltcG9ydCBpbWdQNSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlL3RhYmxlLW9uZS1wcm9maWxlLWltYWdlLTUucG5nXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0Sm9icyA9IFtcclxuICB7IHZhbHVlOiBcInBkXCIsIGxhYmVsOiBcIlByb2R1Y3QgRGVzaWduZXJcIiB9LFxyXG4gIHsgdmFsdWU6IFwiZ2RcIiwgbGFiZWw6IFwiR3JhcGhpY3MgRGVzaWduZXJcIiB9LFxyXG4gIHsgdmFsdWU6IFwiZmRcIiwgbGFiZWw6IFwiRnJvbnRlbmQgRGV2ZWxvcGVyXCIgfSxcclxuICB7IHZhbHVlOiBcImJkXCIsIGxhYmVsOiBcIkJhY2tlbmQgRGV2ZWxvcGVyXCIgfSxcclxuICB7IHZhbHVlOiBcImN3XCIsIGxhYmVsOiBcIkNvbnRlbnQgV3JpdGVyXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IERhc2hib2FyZE1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgZ0NvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGFnZVdyYXBwZXJcclxuICAgICAgICBoZWFkZXJDb25maWc9e3tcclxuICAgICAgICAgIGJ1dHRvbjogXCJwcm9maWxlXCIsXHJcbiAgICAgICAgICBpc0ZsdWlkOiB0cnVlLFxyXG4gICAgICAgICAgYmdDbGFzczogXCJiZy1kZWZhdWx0XCIsXHJcbiAgICAgICAgICByZXZlYWw6IGZhbHNlLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1tYWluLWNvbnRhaW5lciBtdC0yNSBtdC1sZy0zMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItN1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXh4bC0zIGNvbC14bC00IGNvbC1sZy02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgQ2F0ZWdvcnkgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEgYmctd2hpdGUgcm91bmRlZC00IHBsLTggcHQtOSBwYi05IHByLTcgaG92ZXItc2hhZG93LTEgbWItOSBzaGFkb3ctOFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlIGJnLWJsdWUtb3BhY2l0eS0xIGNpcmNsZS01NiBmb250LXNpemUtNiBtci03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJyaWVmY2FzZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIENhdGVnb3J5IENvbnRlbnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXNpemUtOCBmb250LXdlaWdodC1zZW1pYm9sZCB0ZXh0LWJsYWNrLTIgbGluZS1oZWlnaHQtcmVzZXQgZm9udC13ZWlnaHQtYm9sZCBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcCBkdXJhdGlvbj17Nn0gZW5kPXs1fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xhenlMb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsIHRleHQtZ3JheSBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQb3N0ZWQgSm9ic1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBFbmQgU2luZ2xlIENhdGVnb3J5IC0tPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14eGwtMyBjb2wteGwtNCBjb2wtbGctNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhdGVnb3J5IC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhIGJnLXdoaXRlIHJvdW5kZWQtNCBwbC04IHB0LTkgcGItOSBwci03IGhvdmVyLXNoYWRvdy0xIG1iLTkgc2hhZG93LThcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcGluayBiZy1waW5rLW9wYWNpdHktMSBjaXJjbGUtNTYgZm9udC1zaXplLTYgbXItN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gQ2F0ZWdvcnkgQ29udGVudCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS04IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMiBsaW5lLWhlaWdodC1yZXNldCBmb250LXdlaWdodC1ib2xkIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwIGR1cmF0aW9uPXs0fSBlbmQ9ezI1Nn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbCB0ZXh0LWdyYXkgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVG90YWwgQXBwbGljYW50c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBFbmQgU2luZ2xlIENhdGVnb3J5IC0tPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14eGwtMyBjb2wteGwtNCBjb2wtbGctNiBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhdGVnb3J5IC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhIGJnLXdoaXRlIHJvdW5kZWQtNCBwbC04IHB0LTkgcGItOSBwci03IGhvdmVyLXNoYWRvdy0xIG1iLTkgc2hhZG93LThcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtb3JhbmdlIGJnLW9yYW5nZS1vcGFjaXR5LTEgY2lyY2xlLTU2IGZvbnQtc2l6ZS02IG1yLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXllXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gQ2F0ZWdvcnkgQ29udGVudCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS04IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMiBsaW5lLWhlaWdodC1yZXNldCBmb250LXdlaWdodC1ib2xkIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3VudFVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWw9XCIuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kPXsxNi41fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgS1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbCB0ZXh0LWdyYXkgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSm9icyBWaWV3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIEVuZCBTaW5nbGUgQ2F0ZWdvcnkgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXh4bC0zIGNvbC14bC00IGNvbC1sZy02IGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgQ2F0ZWdvcnkgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEgYmctd2hpdGUgcm91bmRlZC00IHBsLTggcHQtOSBwYi05IHByLTcgaG92ZXItc2hhZG93LTEgbWItOSBzaGFkb3ctOFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1lZ2ctYmx1ZSBiZy1lZ2ctYmx1ZS1vcGFjaXR5LTEgY2lyY2xlLTU2IGZvbnQtc2l6ZS02IG1yLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW91c2UtcG9pbnRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIENhdGVnb3J5IENvbnRlbnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXNpemUtOCBmb250LXdlaWdodC1zZW1pYm9sZCB0ZXh0LWJsYWNrLTIgbGluZS1oZWlnaHQtcmVzZXQgZm9udC13ZWlnaHQtYm9sZCBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q291bnRVcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsPVwiLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFscz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZD17MTguNn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWwgdGV4dC1ncmF5IG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEFwcGxpZWQgUmF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBFbmQgU2luZ2xlIENhdGVnb3J5IC0tPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi0xMSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgbWItbGctMCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNiBtYi0wXCI+QXBwbGljYW50cyBMaXN0ICgxMik8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWxnLWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IG1iLTAgbXItNiBweS0yXCI+RmlsdGVyIGJ5IEpvYjo8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXB4LTQ4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2RlZmF1bHRKb2JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC0wIGgtMTAwIGFycm93LTMgYXJyb3ctMy1ibGFjayBtaW4td2lkdGgtcHgtMjczICB0ZXh0LWJsYWNrLTIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LTggcHQtNyByb3VuZGVkIHBiLTggcHgtMTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTAgIGJvcmRlci0wIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMCBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwbGllZCBhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTAgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFwcGxpZWQgb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci0wIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTAgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItMCBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1jb2xvci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInBsLTYgYm9yZGVyLTAgcHktNyBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYW5kaWRhdGUtcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVkaWEgbWluLXdpZHRoLXB4LTIzNSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtMzYgbXItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdQMX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy0xMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IG1iLTAgZm9udC13ZWlnaHQtc2VtaWJvbGQgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmljb2xhcyBCcmFkbGV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMjM1IHByLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsIHRleHQtYmxhY2stMiBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5pb3IgUHJvamVjdCBNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTE3MCBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbCB0ZXh0LWJsYWNrLTIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTIgSnVseSwgMjAyMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xNzAgcHItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtMyBmb250LXdlaWdodC1ib2xkIHRleHQtYmxhY2stMiB0ZXh0LXVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdDb250ZXh0LnRvZ2dsZUFwcGxpY2F0aW9uTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBBcHBsaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMTEwIHByLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ncmVlbiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMTAwIHByLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1yZWQtMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItY29sb3ItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJwbC02IGJvcmRlci0wIHB5LTcgcHItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FuZGlkYXRlLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1lZGlhIG1pbi13aWR0aC1weC0yMzUgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLTM2IG1yLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUDJ9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInctMTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi0wIGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVsaXphYmV0aCBHb21lelxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTIzNSBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbCB0ZXh0LWJsYWNrLTIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuaW9yIFByb2plY3QgTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xNzAgcHItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWwgdGV4dC1ibGFjay0yIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE0IEp1bHksIDIwMjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMTcwIHByLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWJsYWNrLTIgdGV4dC11cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVBcHBsaWNhdGlvbk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgQXBwbGljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTExMCBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyBmb250LXdlaWdodC1ib2xkIHRleHQtZ3JlZW4gdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTEwMCBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyBmb250LXdlaWdodC1ib2xkIHRleHQtcmVkLTIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWplY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWNvbG9yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCIgY2xhc3NOYW1lPVwicGwtNiBib3JkZXItMCBweS03IHByLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NhbmRpZGF0ZS1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtZWRpYSBtaW4td2lkdGgtcHgtMjM1IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS0zNiBtci02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1AzfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJ3LTEwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgbWItMCBmb250LXdlaWdodC1zZW1pYm9sZCB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKb2UgV2FkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTIzNSBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbCB0ZXh0LWJsYWNrLTIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVhZCBvZiBNYXJrZXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMTcwIHByLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsIHRleHQtYmxhY2stMiBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNCBKdWx5LCAyMDIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTE3MCBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ibGFjay0yIHRleHQtdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ0NvbnRleHQudG9nZ2xlQXBwbGljYXRpb25Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IEFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xMTAgcHItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWdyZWVuIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xMDAgcHItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXJlZC0yIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1jb2xvci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInBsLTYgYm9yZGVyLTAgcHktNyBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYW5kaWRhdGUtcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVkaWEgbWluLXdpZHRoLXB4LTIzNSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtMzYgbXItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdQNH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy0xMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IG1iLTAgZm9udC13ZWlnaHQtc2VtaWJvbGQgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9nZXIgSGF3a2luc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTIzNSBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbCB0ZXh0LWJsYWNrLTIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkgRGVzaWduZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMTcwIHByLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsIHRleHQtYmxhY2stMiBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNiBKdWx5LCAyMDIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTE3MCBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ibGFjay0yIHRleHQtdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ0NvbnRleHQudG9nZ2xlQXBwbGljYXRpb25Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IEFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xMTAgcHItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWdyZWVuIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xMDAgcHItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXJlZC0yIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1jb2xvci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInBsLTYgYm9yZGVyLTAgcHktNyBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYW5kaWRhdGUtcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWVkaWEgbWluLXdpZHRoLXB4LTIzNSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtMzYgbXItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdQNX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwidy0xMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IG1iLTAgZm9udC13ZWlnaHQtc2VtaWJvbGQgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFyaWUgR3JlZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0yMzUgcHItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWwgdGV4dC1ibGFjay0yIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmlvciBQcm9qZWN0IE1hbmFnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMTcwIHByLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsIHRleHQtYmxhY2stMiBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMSBKdWx5LCAyMDIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTE3MCBwci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ibGFjay0yIHRleHQtdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ0NvbnRleHQudG9nZ2xlQXBwbGljYXRpb25Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IEFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xMTAgcHItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWdyZWVuIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xMDAgcHItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXJlZC0yIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIlBhZ2UgbmF2aWdhdGlvbiBleGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb24gcGFnaW5hdGlvbi1ob3Zlci1wcmltYXJ5IHJvdW5kZWQtMCBtbC1uMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbSByb3VuZGVkLTAgZmxleC1hbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcm91bmRlZC0wIGJvcmRlci0wIHB4LTNhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJvcmRlci0wIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHB4LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJvcmRlci0wIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHB4LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJvcmRlci0wIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHB4LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbSBkaXNhYmxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJvcmRlci0wIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHB4LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicGFnZS1pdGVtIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIGJvcmRlci0wIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHB4LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgN1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbSByb3VuZGVkLTAgZmxleC1hbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcm91bmRlZC0wIGJvcmRlci0wIHB4LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTE4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbWItMTEgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IG1iLWxnLTAgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTYgbWItMFwiPlBvc3RlZCBKb2JzICg0KTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbGctZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgbWItMCBtci02IHB5LTJcIj5GaWx0ZXIgYnkgSm9iOjwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtcHgtNDhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGVmYXVsdEpvYnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTAgaC0xMDAgYXJyb3ctMyBhcnJvdy0zLWJsYWNrIG1pbi13aWR0aC1weC0yNzMgIHRleHQtYmxhY2stMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctOCBwdC03IHJvdW5kZWQgcGItOSBweC0xMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTAgYm9yZGVyLTAgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTQgYm9yZGVyLTAgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEpvYiBUeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC00IGJvcmRlci0wIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC00IGJvcmRlci0wIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVkIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC00IGJvcmRlci0wIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbCBBcHBsaWNhbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC00IGJvcmRlci0wIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtNCBib3JkZXItMCBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1jb2xvci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC02IGJvcmRlci0wIHB5LTcgbWluLXdpZHRoLXB4LTIzNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9qb2ItZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi0wIGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmlvciBQcm9qZWN0IE1hbmFnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMTM1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbCB0ZXh0LWJsYWNrLTIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVsbC1UaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTEyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWwgdGV4dC1ibGFjay0yIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBZb3JrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTE1NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWwgdGV4dC1ibGFjay0yIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEyIEp1bHksIDIwMjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMjA1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ibGFjay0yIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQ3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTgwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtMyBmb250LXdlaWdodC1ib2xkIHRleHQtZ3JlZW4gdGV4dC11cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1yZWQtMiB0ZXh0LXVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWNvbG9yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTYgYm9yZGVyLTAgcHktNyBtaW4td2lkdGgtcHgtMjM1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2pvYi1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IG1iLTAgZm9udC13ZWlnaHQtc2VtaWJvbGQgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkgRGVzaWduZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMTM1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbCB0ZXh0LWJsYWNrLTIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVsbC1UaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTEyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWwgdGV4dC1ibGFjay0yIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xNTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsIHRleHQtYmxhY2stMiBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNCBKdW5lLCAyMDIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTIwNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1ib2xkIHRleHQtYmxhY2stMiBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxNDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ncmVlbiB0ZXh0LXVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXJlZC0yIHRleHQtdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItY29sb3ItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtNiBib3JkZXItMCBweS03IG1pbi13aWR0aC1weC0yMzVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvam9iLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgbWItMCBmb250LXdlaWdodC1zZW1pYm9sZCB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWFkIG9mIE1hcmtldGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xMzVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsIHRleHQtYmxhY2stMiBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdWxsLVRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMTI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbCB0ZXh0LWJsYWNrLTIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9uZG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTE1NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWwgdGV4dC1ibGFjay0yIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDE1IEp1bmUsIDIwMjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMjA1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ibGFjay0yIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDYyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTgwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtMyBmb250LXdlaWdodC1ib2xkIHRleHQtZ3JlZW4gdGV4dC11cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZS15LW1pZGRsZSBweS03IG1pbi13aWR0aC1weC0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1yZWQtMiB0ZXh0LXVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWNvbG9yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTYgYm9yZGVyLTAgcHktNyBtaW4td2lkdGgtcHgtMjM1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2pvYi1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IG1iLTAgZm9udC13ZWlnaHQtc2VtaWJvbGQgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVsbC1TdGFjayBEZXZlbG9wZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMTM1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbCB0ZXh0LWJsYWNrLTIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFydC1UaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTEyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWwgdGV4dC1ibGFjay0yIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbGlmb3JuaWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtMTU1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbCB0ZXh0LWJsYWNrLTIgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjkgTWF5LCAyMDIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTIwNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1ib2xkIHRleHQtYmxhY2stMiBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxODRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGUteS1taWRkbGUgcHktNyBtaW4td2lkdGgtcHgtODBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ncmVlbiB0ZXh0LXVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlLXktbWlkZGxlIHB5LTcgbWluLXdpZHRoLXB4LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXJlZC0yIHRleHQtdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9QYWdlV3JhcHBlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZE1haW47XHJcbiIsImV4cG9ydCBjb25zdCBhZGREYXlzID0gKGRheXMpID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGF5cyk7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBicmVha3BvaW50cyA9IHtcclxuICBzbTogNTc2LCAvL1NtYWxsIHNjcmVlbiBzdGFydFxyXG4gIG1kOiA3NjgsIC8vTWVkaXVtIHNjcmVlbiBzdGFydFxyXG4gIGxnOiA5OTIsIC8vTGFyZ2Ugc2NyZWVuIHN0YXJ0XHJcbiAgeGw6IDEyMDAsIC8vRXh0cmEgTGFyZ2Ugc2NyZWVuIHN0YXJ0XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGV2aWNlID0ge1xyXG4gIHNtOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50cy5zbX1weClgLFxyXG4gIG1kOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50cy5tZH1weClgLFxyXG4gIGxnOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50cy5sZ31weClgLFxyXG4gIHhsOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50cy54bH1weClgLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBicmVha3BvaW50cywgZGV2aWNlIH0gZnJvbSBcIi4vYnJlYWtwb2ludHNcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XHJcbmltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiLi9hZGREYXlzXCI7XHJcblxyXG5leHBvcnQgeyBkZXZpY2UsIGJyZWFrcG9pbnRzLCB0aGVtZSwgYWRkRGF5cyB9O1xyXG4iLCJpbXBvcnQgeyByZ2JhIH0gZnJvbSBcInBvbGlzaGVkXCI7XHJcbmltcG9ydCB7IGJyZWFrcG9pbnRzIH0gZnJvbSBcIi4vYnJlYWtwb2ludHNcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRDb2xvcnMgPSB7XHJcbiAgcHJpbWFyeTogXCIjMDBiMDc0XCIsXHJcbiAgcHJpbWFyeUhvdmVyOiBcIiMwMDhhNWJcIixcclxuICBzZWNvbmRhcnk6IFwiIzMzNmVmN1wiLFxyXG4gIGxpZ2h0OiBcIiNGMkYyRjJcIixcclxuICBkYXJrOiBcIiMyYjM5NDBcIixcclxuICB5ZWxsb3c6IFwiI2ZlZGM1YVwiLFxyXG4gIGFzaDogXCIjNDEzZTY1XCIsXHJcbiAgZ3JlZW46IFwiIzY4ZDU4NSBcIixcclxuICBpbmZvOiBcIiMwZTU2N2NcIixcclxufTtcclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICBwcmltYXJ5OiBkZWZhdWx0Q29sb3JzLnByaW1hcnksXHJcbiAgcHJpbWFyeUhvdmVyOiBkZWZhdWx0Q29sb3JzLnByaW1hcnlIb3ZlcixcclxuICBzZWNvbmRhcnk6IGRlZmF1bHRDb2xvcnMuc2Vjb25kYXJ5LFxyXG4gIGxpZ2h0OiBkZWZhdWx0Q29sb3JzLmxpZ2h0LFxyXG4gIGxpZ2h0U2hhZGU6IHJnYmEoZGVmYXVsdENvbG9ycy5saWdodCwgMC43KSxcclxuICBkYXJrOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgZGFya1NoYWRlOiByZ2JhKGRlZmF1bHRDb2xvcnMuZGFyaywgMC43KSxcclxuICBhc2g6IGRlZmF1bHRDb2xvcnMuYXNoLFxyXG4gIGJnOiBkZWZhdWx0Q29sb3JzLmxpZ2h0LFxyXG4gIGJnMjogXCIjZjRmN2ZhXCIsXHJcbiAgYmczOiBcIiNmOGY4ZjhcIixcclxuICBiZzQ6IFwiI2ZkZmRmZlwiLFxyXG4gIGJnNTogXCIjZWNmMmY3XCIsXHJcbiAgYmc2OiBcIiNmZmZcIixcclxuICBiZzc6IFwiI0VERjlGMlwiLFxyXG4gIGJvcmRlcjogXCIjZTdlOWVkXCIsXHJcbiAgc2hhZG93OiByZ2JhKGRlZmF1bHRDb2xvcnMuZGFyaywgMC4xNSksXHJcbiAgaGVhZGluZzogZGVmYXVsdENvbG9ycy5kYXJrLFxyXG4gIHRleHQ6IHJnYmEoZGVmYXVsdENvbG9ycy5kYXJrLCAwLjcpLFxyXG4gIHdhcm5pbmc6IGRlZmF1bHRDb2xvcnMueWVsbG93LFxyXG4gIHN1Y2Nlc3M6IGRlZmF1bHRDb2xvcnMuZ3JlZW4sXHJcbiAgaW5mbzogZGVmYXVsdENvbG9ycy5pbmZvLFxyXG5cclxuICBtb2Rlczoge1xyXG4gICAgZGFyazoge1xyXG4gICAgICBwcmltYXJ5OiBkZWZhdWx0Q29sb3JzLnByaW1hcnksXHJcbiAgICAgIHByaW1hcnlIb3ZlcjogZGVmYXVsdENvbG9ycy5wcmltYXJ5SG92ZXIsXHJcbiAgICAgIHNlY29uZGFyeTogZGVmYXVsdENvbG9ycy5zZWNvbmRhcnksXHJcbiAgICAgIGxpZ2h0OiBkZWZhdWx0Q29sb3JzLmxpZ2h0LFxyXG4gICAgICBsaWdodFNoYWRlOiByZ2JhKGRlZmF1bHRDb2xvcnMubGlnaHQsIDAuNyksXHJcbiAgICAgIGRhcms6IGRlZmF1bHRDb2xvcnMuZGFyayxcclxuICAgICAgZGFya1NoYWRlOiByZ2JhKGRlZmF1bHRDb2xvcnMuZGFyaywgMC43KSxcclxuICAgICAgYXNoOiBkZWZhdWx0Q29sb3JzLmFzaCxcclxuICAgICAgYmc6IGRlZmF1bHRDb2xvcnMubGlnaHQsXHJcbiAgICAgIGJnMjogXCIjZjRmN2ZhXCIsXHJcbiAgICAgIGJnMzogXCIjZjhmOGY4XCIsXHJcbiAgICAgIGJnNDogXCIjZmRmZGZmXCIsXHJcbiAgICAgIGJnNTogXCIjZWNmMmY3XCIsXHJcbiAgICAgIGJnNjogXCIjZmZmXCIsXHJcbiAgICAgIGJnNzogXCIjRURGOUYyXCIsXHJcbiAgICAgIGJvcmRlcjogXCIjZTdlOWVkXCIsXHJcbiAgICAgIHNoYWRvdzogcmdiYShkZWZhdWx0Q29sb3JzLmRhcmssIDAuMTUpLFxyXG4gICAgICBoZWFkaW5nOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgICAgIHRleHQ6IHJnYmEoZGVmYXVsdENvbG9ycy5kYXJrLCAwLjcpLFxyXG4gICAgICB3YXJuaW5nOiBkZWZhdWx0Q29sb3JzLnllbGxvdyxcclxuICAgICAgc3VjY2VzczogZGVmYXVsdENvbG9ycy5ncmVlbixcclxuICAgICAgaW5mbzogZGVmYXVsdENvbG9ycy5pbmZvLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgaW5pdGlhbENvbG9yTW9kZU5hbWU6IFwibGlnaHRcIixcclxuICBjb2xvcnM6IGNvbG9ycyxcclxuICBzcGFjZTogW1xyXG4gICAgMCxcclxuICAgIDQsXHJcbiAgICA4LFxyXG4gICAgMTIsXHJcbiAgICAxNixcclxuICAgIDIwLFxyXG4gICAgMjQsXHJcbiAgICAyOCxcclxuICAgIDMyLFxyXG4gICAgMzYsXHJcbiAgICA0MCxcclxuICAgIDQ4LFxyXG4gICAgNTIsXHJcbiAgICA1NixcclxuICAgIDYwLFxyXG4gICAgNjQsXHJcbiAgICA3MixcclxuICAgIDg0LFxyXG4gICAgMTAwLFxyXG4gICAgMTIwLFxyXG4gICAgMTQwLFxyXG4gIF0sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgIGAke2JyZWFrcG9pbnRzLnNtfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLm1kfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLmxnfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLnhsfXB4YCxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb2xpc2hlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY291bnR1cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sYXp5bG9hZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==