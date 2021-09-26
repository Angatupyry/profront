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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./node_modules/aos/dist/aos.css":
/*!***************************************!*\
  !*** ./node_modules/aos/dist/aos.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/favicon.png":
/*!********************************!*\
  !*** ./src/assets/favicon.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADpiRU/AAABNUlEQVRIDWNk2FDyn2EAANMA2Am2ctRiuoX8yAtqFkrClpOJhaFJ0wNuxIsfnxh67x6C8/ExKLKYg5mVoUTFHm7+5U/PibZ45MXxqI/hCYXWjNGgpnUIw80nqgBJkjNl0OQVh2ua+eA4w52vbxm4mdngYiDGlz+/UPj4OERZrMAlhFJCsTExMxRf2cwQLq2PYva+N3dQ+Pg4RFl84M1dhlp1F7g5eUo2DCnyZgxcaD7e9vI6XA0hBlGp+sjb+wyrn11EMQvZ0n8M/8EhcOzdQxQ1+DhE+fjX/78M4aeXMFxUe84QL2fCoMItzMAIhJ/+/GA48+EJw6S7Rxg2vriKzx4MOUZyWpm8LOwMYmw8DPe+vQX6lTxAlI/Rjf785ycDCFMCiIpjSizApXfUYlwhQ3XxkRfUALdcTiHF8UmEAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/fonts/fontawesome-5/css/all.css":
/*!****************************************************!*\
  !*** ./src/assets/fonts/fontawesome-5/css/all.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/fa-brands-400-ed2b8bf117160466ba6220a8f1da54a4.ttf";

/***/ }),

/***/ "./src/assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf":
/*!********************************************************************!*\
  !*** ./src/assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/fa-regular-400-59215032a4397507b80e5625dc323de3.ttf";

/***/ }),

/***/ "./src/assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf":
/*!******************************************************************!*\
  !*** ./src/assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/fa-solid-900-acf50f59802f20d8b45220eaae532a1c.ttf";

/***/ }),

/***/ "./src/assets/fonts/icon-font/css/style.css":
/*!**************************************************!*\
  !*** ./src/assets/fonts/icon-font/css/style.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/fonts/icon-font/fonts/avasta.ttf":
/*!*****************************************************!*\
  !*** ./src/assets/fonts/icon-font/fonts/avasta.ttf ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/chunks/fonts/avasta-40a1087ec0a920895d04f7791f692e5e.ttf";

/***/ }),

/***/ "./src/assets/image/header-profile.png":
/*!*********************************************!*\
  !*** ./src/assets/image/header-profile.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/image/l1/png/feature-brand-1.png":
/*!*****************************************************!*\
  !*** ./src/assets/image/l1/png/feature-brand-1.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/image/l1/png/message.png":
/*!*********************************************!*\
  !*** ./src/assets/image/l1/png/message.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAMAAADyQNAxAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAgD/wwGAwn1AgELCQ4NBwhshivAAAAIlJREFUOMvlzzsSgzAMRdEn/w0k0f5Xm5kYZywQWD23UXOKJ0TPl/mIvY501hXfNqhAakEqgho9R1XnZqqdbFL8IFXoXDgqYi2ptsBT1bKpj1MTyifojeq9YK4y9pI7Vv8qoqf8GpsaJ618Lv/UOKnwRRBVJ9sUpRS9RSG9LArLalEAmRSKh6X0BWN0HJ/C8nF0AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/image/l2/png/featured-job-logo-1.png":
/*!*********************************************************!*\
  !*** ./src/assets/image/l2/png/featured-job-logo-1.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAAXNSR0IB2cksfwAAAZtQTFRFAAAA/1de/lpf/llf/llf/1VV/Vlf/llf/Vpf/1pe/llf/1pe/llg/llf/2No/36D/2dt/8PF//z8/////2tx/+rr/+zs/2tw/1pg/9fY/+fo/3uA/1lf/3t//5KW//j4/291/1th/6uu/5md//Ly/2Fn/11j/6Sn/5yg/+/w/19l/+/v/+zt/6Gk/52h/+7u/15k/6Cj/5yf/+7v/1lg/3p+/5aa/1xi/6Gl/4GF/+Pk/5ic//Dw/4aK//f3/9PV/+fn/6Wp/8nL/2Np//P0/42R/+3u/+Dh/6yu/7/B/6yv/4mN/2Vq/66x/7q8/7W3/5ue/9TV/36C//v8/3R5//v7/2Rp/8rM/8DC/+Lj/6Wo/3F2//7+///+//Hx/2Jo/7W4/8/R/+bn/7i6/4yQ/4eL/4SI/4aL/4uQ/2Vr/2Bm/72//21y//v6/2Bl//79/mtw/9DR/9rb/6ms/8vN//r6/5SY//n5/9DS/2Fm/2pv//X1/4OI/2Jn/9na/290/56h/9nb/25z/32C/Vhg/Vpg/1th/Vhf/llesOcjNQAAAIl0Uk5TAEnN7/8Dhv6DQf1EuOj/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////iIAqnOCIJ0SbAAACvUlEQVR4nO2Y6VPaYBCHo8Zab+VXENKIgmepB3ghivHWWvBAQUVBq7a2Kl4o3ret+mf3DTHgh4QBki/tsB+yu5nZJzv77m4yoSgqKzuHViQ52VkUReW+y1OG4SXvfS6VrxxDpKCQKlIFRBdRxeqAiil1ODSdAWVAGdD/ByopLS1RAVRWrgE05WVKQR+0gE4HaCuUgfQGMB9ZtpKBQa8IZERVNa+rq2BUAjIxMAuWGYxJAagGtXWCVVeLmvRB9Vo0iHYDtPVpgxrxySLals9oTBdU34TmuNeMpkQpJQK1oNUa96ytaEkPRBKyvfVtCVNKAGpDO59QR2dXV2cHn1I72tIB2bXoJsrRAyI9DmJ2Q2tPA9QLJzmyPg24/n4Omj5ycE70pg4yDWAwWuGhYZoeHorWfRADsu0tCzJihDT1KMaiB2cdwyhp7xH5iZMDseP4QvMjNiH4E9Gh+4pxNkWQC5ybqElMCf4UJsnVzcGVGog1YJrXM/BEU2A9mOH1NAwyKcmAZjEXXYle+OZ5Pe+Dl9cVc5hNCbSARSETP5Z4vQS/4C9iIRXQciDoFawarKzS9OqKuI28wcByCqBvWHu17OvYYNkNrIs9vSYULzkQq8N30f6BwOZmAD9F/xd0kuWWBG0huB2D7sDpxE4seDuIraRBIezGn7rnB/x78Wx3EUoaZNnHQcyxHwKH8ak/wL5FKka6RmEcibb1GJEIjmOr8gjh5GtEn+C0UuibUBgRlyuCcEjwK09xIhkiDdKfgbOd0/SFmcPlFcteXYIzX9D0uY3DmfS7W6azrz2AjyEfD7i55f3bG2LqGB/guZaOkJt+0x1DQgP3xtfn6433AXKDuZPbbPKrln1wPLrf3nA/Oh7kttE/+g2ZAWVAGZAaINV++6j2I6qwQA1OQT5F/VYD9Ici8vT8oozy8vxEUX8BJ+GtiNko4HIAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/image/l3/png/pro-img.png":
/*!*********************************************!*\
  !*** ./src/assets/image/l3/png/pro-img.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IB2cksfwAADwhJREFUeJzFWntwXNV5/927u9Jq9X5ZlmQJS7JsQ2wehoZOakIIKU0zMKFDZiB/ZCaBKY8EgkkBlzBJ0yQQGBg7pWADDnbaDKlDJsUeICapkwaDQ0MxtqlsHL1lvbUrraTVvvfe29937t21LMvyStpMjud479695zvf73t/90hHjoff798UCAQe5tzJ+Sq/v8PZzeuwTLmWe/Kb88zDY2NjV+SaD325BPr7+wvI6I3j4+MvkMkRTdOO8PaTnHdz3szvf8XZxGufTLmWe/Kb88yTuq5/wLWDpPE8QX5OaC6XryUDIwNFZOaRgoKCITL6mmVZd/J2zTJ4qSONuwjyDdIcJO2tywG4aGDcPI8aeoBgunn9OGcZJy40nbXZ3i/nfMLr9XZyrztlzz8pMErxM9xITG0bZ/Vi1qZBZHvfGXWcYuLv0UI+u5j9sgZG4p8nE/upqQ3ZPJ9KJTE2NIATR/4A/1A/LNNcDF9zx2Xc9xfCQ7YLsgJGaT1KUK/CDgALjshMCL/6z//Ag7ffhkfvvR3bvvtNPPXwPdj57fvw8rNP4sg7/w1zaSB9woP4dTYPLwiMhDSa3nZK6/v8ql2IWNvR9/GNr9yKl3ftwGTADxgpRKJxWFw6PNiPPx75PXY+9T288cpPMDkRQDQSzhJTZmji1+TpqQs9uCAwEthGQluyCQ6dH7Xh5X99Ah4riXgigfHJKcSiEYTDIQwOj6KjZxA9/UP4qLsfL72wE4/edyf+6YF7MNDbdUHa88wHaUXblwTMWbjlQpJJj5/u3I6xkRHEIlGUeDQ0Vpbgkx9rxt//7Sfwpeuvwo0fvwTr6lZgdU05wYbR0dWDvp4u/Ojp7yMRj2W7zeyxZSFw8wKjpm7DIkBFwzNoP9mGocAk6soLcf8tn8YT996Kr33xb3DLDX+Jz11zOf7uU1fihk2tuLhhJYq9eTAZXIKT0zje1ob33v7d4mHZY4vD6znjHGB8sJaq3rEY6l6fD9fccCPWrWnB/bd+Bldctg4r6+vgKSqD21cMt7cQhaVlWH3RKqwjsDUNdagpK0K+xwVxXf/o8BJxqTiwQ3i+IDBGrJ1Ogsza5oW5r2zZii333o3K6mq48lgw6G5oLhc0XYfuyYPm9qCwqAQt9TVoXFHOWYHKIh90TcNkcGIpfpZJ5sLzgsBGR0elfss6V8webrcbtZWlSjuufDLMabl9iCQ0hMIJJJIGsXqwetVKXLJqBZoIsKG2BqVFhUjEokvZcvb4/NwEngHW0dGRz7D+zHKo9/X2YmIyRP9JIRQMYt+rb+L1A4fQ3TeC/qEJhCMx+HwFWHtRLeqrylFXVYaK0mJo2rJrcbG07YIh/T1Dsaio6Iv8sUGuz1fHzR7zmUUPI90Hx/+I8bFRmMk4yr0eBCNxRHQfCtwuBUp3eVCQn4fSgnw0V5Xg0xevxsbG2nlryPQ+8/Exz/PrBcNZwPiDi9r61mxCc68XApkeTRuuxKlpC0mNpsjqonV9C669aiNa66tQWl6OfAYZD0Hl02wri724am0Drr+8FVeWn1vjzgUx97f5BjFIheTOABsZGbmGH83zPr2I0bBxE76wqRHlBSxSGM6rivOxprkeNQwW1TUV8BJUMhpFKBSmBt2YmQ5jJhSHi9EzR2MNsWyWCwWMPdCXc0HVYyZQVlyA/IJCVfQmmKzzXDpcqQSMeASx6SCCgXFMTYX4tIXy0hKmCi+s9R/PxfZqpLHoUg/St25eRrg9M/N8MA0DJ4+dwPFjXYhMz8AwkgqUaCoZj2OKWqLN0NkN5BEU1v0FtOKK5e/tTGK5iZ+6Pjg4eBkBluZCWlpBCSZiUvumUMdwHk4kMcCAEqHmiBdG0kJxYQFMMpAyLbx/ehKuxo252Hr2qCCmS3WXy7U5l1RHQ9RQkCgmWNkHYhgPTsI/5sc0i+IUTVL6tJSZor+5ccm1n4Xb48nl9moIJjHFDbkyA5mVTWvhq/JixhXGioYi1NZUYoI+NTAyhrHABManpul/BrzefPhqGnO275y5QYLH+lxKy1PTBM3nQml1KbwlpYgmUwhHY6w+ojjVN4xAcApVFSXQqCndW5TLrWeP9QKsIZcUi6pWYmxyBmMTk+jsOo2THf34sOM02jr7GCG52coKFBYX0hzNLFrXJY8GMcXCXJqBmwWv2XgF/qdrFL88fBRvf3BC9V9NtZVorKtCRSUrfo+bAYb+xib0T2SKhaKxnGXH9Lj0+ptw3ear8cnLW7C2oRqXtq5Ca3MdVrA+ZNmjnnGz6jeiM7neOj3K5q0+z1eyZDs0Jl+dc11rA669+mOs5KtRUlSAwpJC+h2BWSYszYWy+mYpgxYs05Y6xBRjc1UpYzmmcOxkN8rXX03qLtQ2sqRqqIGvrBje4iK2NV62KTF4a9cSnM7wD8SZ75a755w5KRoL5VJSrx38A94/0YPK1o3wT5rqDVUBG0xvYQnceflM0klWH1FUbLyGSdtA7+Aovv7PL6KzdyiXbIRFY13LlZDJKqLtVC8ee/ZneO5nv0UR2xXD0tFw3S0YG/QrzUgZpesapvzjKL34E/CU1ai1XT2n0TUUxNe+9xK+8fhuHDx8HLF4Yrka6xdgp5YqFv/4FH6y7xBuf2QHHtq2F4eO98Cg77SyvxLfSXqZyzb+NZI6/YrdtJkyYbhLkChZhf87/JaqKz0SRXU34ixWjrYP4Yndb+BLW3dg1ysHMTwWXBJfgkknA22LXIQTzE2Pv7APX/72brz85nvoHw8hSj+xdA9cbP/LGCRmpibR3daGVH4ZrLXXwai/AvHqS1G6+TbWii5Y7kIM9/UhFo1D011qxmMR5jdWY+EkXjl4FHd8Zw8e2b4Xb713EklxxiyHYBJg72Sj3plwBG8eOob7Hvs3PLjtFbx1tBtJMmEy/rncecgrKJaegR5lB9oQS6f6lnWoXnURisvYaDZtgKuiUbZF1aoGrLnkYqxqbkHCsOwXPqThK61U1xK+JGomTQ3vnxrE47sP4I5vvYQDh45mZYqCSa+vr/+QdCYWkoBErbu/uwfbfvobtA9MwNTc1I4NwBI2BFD6vQWvI7EUVtYzGtbVErSbzGrUTFQl6ijLK19RIfLyWSuybUmkLLuNEaYIOkXNyLt9C/Z3k3SJHYOBKTy797fZmOcAMR0XjckJwWsLPXn8VB/803FuDhXCLRuRkr5G/1ApgszBAReYCqu3VqaTOgzDOYRw5yOPxa/L7XLWULOROOzlmqJhk9XUPXu1poKTQbDxpIFT3QMXAvYb0rJ0e2Pjxwup9nj7ads8nI3kUxpFKJkirf5Msg1MRZxoaaiQLq1KnE1mvq8QRawTtbSGOKdmolAooNulo+XQ5Nq5OVU0efSjngXNULAow5H/mpqafsePzvOJoL13mBtZjomYNiNKzPQH1Q2bjrZsYIOjQSQk6VqmAm9SYxJUfIU+ZbL2cpuRyXA8oz0RggSRM4yairYISExUtDbiX9AUOx0sZ16/kcBj55PCwMhERnK26tLnW5Z6t6GYZfMIx5x6h8YVU3Lf5WIoj4SR58lX/peu6G3pmuzPZmx/ku/ULDtfR1CaMKX2MpTf2RocCQQXyKfmY2k8GWBEKipsnyuCmXAMk6GIbT6UqGkkHc1l3EwFB7mX7kJGgiGaXtIBNaMinShUtK6mAyTBZ0YmQoqQjjM0xAzVXpatrWQyoSxE7o/4pxCNJc5RFel1OBjOBub8eP/cBcOi+kzloCOZiCstyTWUBdn/REPyjDA2zYAwNBpQvuViArYcf7TSWlfMm2w6Q6oBVb6ZFpyFjPkpAYoZJmPKlGVlUsqwgbFzjRD4+uwvZwEj4je58f7Z6h1hmLWcMChmkmAStXVlg1FTaUBxC5G5GGp735gTIGBH0rRfwhaGqepEfyZyWhSCOSvgKPNTnwQWizi+aSng4mdzzHC/8H5eYGpTTbuHHxkPHZd38Ui7li1J2+RmvaV1wrVyfs2W+InuIcWMmJG8sEnnpjSQRCKFvuHxzHl0Ih5R5ZUyS7d6mUt6Ka6PIZWIZTQtoT8Si89mOejwfNY4B9jq1avlsOqr6e9TMxEHlGU7MqvzdFi37d50TA3qHSIcAZzsGUVMMaBlgMHxLfkXY+siwBxpqlNNMV3xYYPCEIEIoBQ/bS2mVHKRORWKzGb5qw7PCwOTQbXuJQNy/gz/RMgJz3bAkLCbVBI00zrLMAzLBiX+cpoh3x+YdM7IXCphp0OiXaKFCSxgm6swbloOTfFltwo8coChUgrS+O2oOziWOU/bJrzOh+G85zfNzc3/QEK7RaqKIOxqwEz7lenkMyea2cGDwBNRxX5StNY9pLZIJ3BYtinJg6LNfoIXGgkKStWIlpXx2YzAnDCfDjwCvIfBg9c/FB7Px/+CB1OUxh0k9/RCz/w5BuH9sKWl5YGFnrngidtru77zEK3hIc2pMCwGCDuIOFpK+43SJOz2wtHQyZ5hFr1RpSXLtCsT3WVvaVgappkjlX9JpJWIZxizK3SleTFVgwEk7cdc8NCBH/9gQVBZAZNx6o1nnmZWudlMpSJSHchGMuxk69i+U+Pp9KeE44MfdgyqIyMVeGym7ETP7yF2AKZTMiVYR6pwijN5zg7vtrlbclpjGBFK4+b+Qy9lZUFZn5F2/vKZ/dzyU2TyQ0N8ArZPZf5GymFIEreEbvmxjy2GtCkOJlWhKF8lsN7BMeUv8ci08i9Fy6GBs3KUKbXmCdNKbO5/+0f7s+V3UYe//W/t+t9w+68vo9bu5J7DmMWI3cJoSmMAm0QGkSTb4aHAtEqqDiTFbEqS85BfLY1HnZLL0abqHBxQvGIYN+5KDR3Z4H9379HF8LqkU+3RY6/viocLWmhK/0hUQZsJK8OcmFUkHFKf3awuUkn5M6SoMj3VxiRTCE7b9aeYYXrdrDlJkt90I9kS/GDfi0vhccnH9QPvbo92/9fOJ2PTefW0Sjk43E1/GUo7vjAvSbV3eAKhmTCrCi9sl7GoySQiCUMl5XRVQ78b4u8vsjW5SU+F6oYP7/nBwLs/X/LfSSz77xAEYOfB5/Z3/vq5O9oP/Eu9YembSHYrk/LzTOT7+kaChyPReE8qZUaIKULwPZyHQ9HYvlh4+nma4VZLM64cffff64d/v+eu0Xf2vL4cQOnx/xY8vRrKKmwtAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/image/logo-main-black.png":
/*!**********************************************!*\
  !*** ./src/assets/image/logo-main-black.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/image/logo-main-white.png":
/*!**********************************************!*\
  !*** ./src/assets/image/logo-main-white.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/image/svg/harvard.svg":
/*!******************************************!*\
  !*** ./src/assets/image/svg/harvard.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/harvard-5855e142a9515683a7515e29c1d54b05.svg";

/***/ }),

/***/ "./src/assets/image/svg/icon-loaction-pin-black.svg":
/*!**********************************************************!*\
  !*** ./src/assets/image/svg/icon-loaction-pin-black.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDEyIDE1Ij48Zz48Zz48cGF0aCBmaWxsPSIjODI4MjgyIiBkPSJNNiA5YTIuNjY3IDIuNjY3IDAgMSAxIDAtNS4zMzRBMi42NjcgMi42NjcgMCAwIDEgNiA5em0wLTEuMzM0QTEuMzMzIDEuMzMzIDAgMSAwIDYgNWExLjMzMyAxLjMzMyAwIDAgMCAwIDIuNjY2em0wIDcuMTUybC00LjI0My00LjI0MmE2IDYgMCAxIDEgOC40ODYgMHptMC0xLjg4NWwzLjMtMy4zYTQuNjY3IDQuNjY3IDAgMSAwLTYuNiAweiIvPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "./src/assets/image/svg/mit.svg":
/*!**************************************!*\
  !*** ./src/assets/image/svg/mit.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mit-1a7dba4af1039e105bb51a6280857c87.svg";

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

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _assets_image_l1_png_message_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/l1/png/message.png */ "./src/assets/image/l1/png/message.png");
/* harmony import */ var _assets_image_l1_png_message_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_l1_png_message_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Footer = () => {
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("footer", {
    className: "footer bg-ebony-clay dark-mode-texts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "pt-11 pt-lg-20 pb-13 pb-lg-20 border-bottom border-width-1 border-default-color-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row justify-content-center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-xl-7 col-lg-12",
    "data-aos": "fade-right",
    "data-aos-duration": "1000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pb-xl-0 pb-9 text-xl-left text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: "text-white font-size-8 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 19
    }
  }, "Most comprehensive job portal"), __jsx("p", {
    className: "text-hit-gray font-size-5 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, "We must explain to you how all this mistaken idea of denouncing"))), __jsx("div", {
    className: "col-xl-5 col-lg-12",
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "btns d-flex justify-content-xl-end justify-content-center align-items-xl-center flex-wrap h-100  mx-n4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "btn btn-outline-gallery btn-xl mx-4 mt-6 text-uppercase",
    href: "/#",
    onClick: e => {
      e.preventDefault();
      gContext.toggleSignInModal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, "Log in"), __jsx("a", {
    className: "btn btn-green btn-h-60 btn-xl mx-4 mt-6 text-uppercase",
    href: "/#",
    onClick: e => {
      e.preventDefault();
      gContext.toggleSignUpModal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, "Register")))))), __jsx("div", {
    className: "container  pt-12 pt-lg-19 pb-10 pb-lg-19",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-4 col-sm-6 mb-lg-0 mb-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    white: true,
    className: "footer-logo mb-14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "media mb-11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _assets_image_l1_png_message_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "align-self-center mr-3",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "media-body pl-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "mb-0 font-size-4 text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, "Contact us at"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: "mb-0 font-size-4 font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, "support@uxtheme.net")))), __jsx("div", {
    className: "social-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "pl-0 list-unstyled d-flex align-items-end ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "d-flex flex-column justify-content-center px-3 mr-3 font-size-4 heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, "Follow us on:"), __jsx("li", {
    className: "d-flex flex-column justify-content-center px-3 mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "hover-color-primary heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fab fa-facebook-f font-size-3 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  })))), __jsx("li", {
    className: "d-flex flex-column justify-content-center px-3 mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "hover-color-primary heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fab fa-twitter font-size-3 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 25
    }
  })))), __jsx("li", {
    className: "d-flex flex-column justify-content-center px-3 mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "hover-color-primary heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fab fa-linkedin-in font-size-3 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }))))))), __jsx("div", {
    className: "col-lg-8 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-3 col-xs-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "footer-widget widget2 mb-md-0 mb-13",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "widget-title font-size-4 text-gray mb-md-8 mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, "Company"), __jsx("ul", {
    className: "widget-links pl-0 list-unstyled list-hover-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 27
    }
  }, "About us"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 27
    }
  }, "Contact us"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 27
    }
  }, "Careers"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 27
    }
  }, "Press")))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-3 col-xs-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "footer-widget widget3 mb-sm-0 mb-13",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "widget-title font-size-4 text-gray mb-md-8 mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, "Product"), __jsx("ul", {
    className: "widget-links pl-0 list-unstyled list-hover-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 27
    }
  }, "Features"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 27
    }
  }, "Pricing"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 27
    }
  }, "News"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 27
    }
  }, "Help desk"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 27
    }
  }, "Support")))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-3 col-xs-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "footer-widget widget4 mb-sm-0 mb-13",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "widget-title font-size-4 text-gray mb-md-8 mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 21
    }
  }, "Services"), __jsx("ul", {
    className: "widget-links pl-0 list-unstyled list-hover-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 27
    }
  }, "Digital Marketing"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 27
    }
  }, "SEO for Business"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 27
    }
  }, "Avasta Dash"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 27
    }
  }, "UI Design")))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-3 col-xs-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "footer-widget widget4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "widget-title font-size-4 text-gray mb-md-8 mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 21
    }
  }, "Legal"), __jsx("ul", {
    className: "widget-links pl-0 list-unstyled list-hover-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 27
    }
  }, "Privacy Policy"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 27
    }
  }, "Terms & Conditions"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 27
    }
  }, "Return Policy"))))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @n8tb1t/use-scroll-position */ "@n8tb1t/use-scroll-position");
/* harmony import */ var _n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./src/hooks/useWindowSize.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _Offcanvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Offcanvas */ "./src/components/Offcanvas/index.js");
/* harmony import */ var _NestedMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../NestedMenu */ "./src/components/NestedMenu/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menuItems */ "./src/components/Header/menuItems.js");
/* harmony import */ var _assets_image_header_profile_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/image/header-profile.png */ "./src/assets/image/header-profile.png");
/* harmony import */ var _assets_image_header_profile_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_header_profile_png__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Header\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const SiteHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header`
  .dropdown-toggle::after {
    opacity: 0;
  }

  padding: 10px 0 10px 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  @media ${_utils__WEBPACK_IMPORTED_MODULE_9__["device"].lg} {
    position: fixed !important;
    transition: 0.6s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.6s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: ${({
  dark,
  theme
}) => dark ? theme.colors.dark : "#fff"};
    }
  }
`;
const ToggleButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  color: ${({
  dark,
  theme
}) => dark ? theme.colors.lightShade : theme.colors.heading}!important;
  border-color: ${({
  dark,
  theme
}) => dark ? theme.colors.lightShade : theme.colors.heading}!important;
`;

const Header = () => {
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const {
    0: showScrolling,
    1: setShowScrolling
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showReveal,
    1: setShowReveal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const size = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_5__["useWindowSize"])();
  Object(_n8tb1t_use_scroll_position__WEBPACK_IMPORTED_MODULE_3__["useScrollPosition"])(({
    prevPos,
    currPos
  }) => {
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(SiteHeader, {
    className: `site-header site-header--sticky  site-header--absolute py-7 py-xs-0 sticky-header ${gContext.header.bgClass} ${gContext.header.align === "left" ? "site-header--menu-left " : gContext.header.align === "right" ? "site-header--menu-right " : "site-header--menu-center "}
        ${gContext.header.theme === "dark" ? "dark-mode-texts" : " "} ${showScrolling ? "scrolling" : ""} ${gContext.header.reveal && showReveal && gContext.header.theme === "dark" ? "reveal-header bg-blackish-blue" : gContext.header.reveal && showReveal ? "reveal-header" : ""}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: gContext.header.isFluid,
    className: gContext.header.isFluid ? "pr-lg-9 pl-lg-9" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("nav", {
    className: "navbar site-navbar offcanvas-active navbar-expand-lg px-0 py-0 space-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "brand-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    white: gContext.header.theme === "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  })), gContext.header.button === "profile" && __jsx("div", {
    className: "header-btn-devider ml-auto ml-lg-5 pl-2 d-none d-xs-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: "px-3 ml-7 font-size-7 notification-block flex-y-center position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fas fa-bell heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "font-size-3 count font-weight-semibold text-white bg-primary circle-24 border border-width-3 border border-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 23
    }
  }, "3")))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    className: "show-gr-dropdown py-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 19
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
    as: "a",
    className: "proile media ml-7 flex-y-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "circle-40",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 23
    }
  }, __jsx("img", {
    src: _assets_image_header_profile_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 25
    }
  })), __jsx("i", {
    className: "fas fa-chevron-down heading-default-color ml-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 23
    }
  })), size.width <= 991 ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
    className: "gr-menu-dropdown border-0 border-width-2 py-2 w-auto bg-default",
    key: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 27
    }
  }, "Settings")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 27
    }
  }, "Edit Profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: " dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 27
    }
  }, "Log Out"))) : __jsx("div", {
    className: "dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default",
    key: "2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 27
    }
  }, "Settings")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 27
    }
  }, "Edit Profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: " dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 27
    }
  }, "Log Out")))))), gContext.header.button === "account" && __jsx("div", {
    className: "header-btns header-btn-devider ml-auto pr-2 ml-lg-6 d-none d-xs-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "btn btn-transparent text-uppercase font-size-3 heading-default-color focus-reset",
    href: "/#",
    onClick: e => {
      e.preventDefault();
      gContext.toggleSignInModal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 17
    }
  }, "Iniciar sesi\xF3n"), __jsx("a", {
    className: `btn btn-${gContext.header.variant} text-uppercase font-size-3`,
    href: "/#",
    onClick: e => {
      e.preventDefault();
      gContext.toggleSignUpModal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 17
    }
  }, "Registrarse")), __jsx(ToggleButton, {
    className: `navbar-toggler btn-close-off-canvas ml-3 ${gContext.visibleOffCanvas ? "collapsed" : ""}`,
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#mobile-menu",
    "aria-controls": "mobile-menu",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    onClick: gContext.toggleOffCanvas,
    dark: gContext.header.theme === "dark" ? 1 : 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "icon icon-menu-34 icon-burger d-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 15
    }
  }))))), __jsx(_Offcanvas__WEBPACK_IMPORTED_MODULE_7__["default"], {
    show: gContext.visibleOffCanvas,
    onHideOffcanvas: gContext.toggleOffCanvas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 7
    }
  }, __jsx(_NestedMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    menuItems: _menuItems__WEBPACK_IMPORTED_MODULE_11__["menuItems"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Header/menuItems.js":
/*!********************************************!*\
  !*** ./src/components/Header/menuItems.js ***!
  \********************************************/
/*! exports provided: menuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
const menuItems = [{
  name: "home",
  label: "Home",
  items: [{
    name: "",
    label: "Home 1"
  }, {
    name: "landing-2",
    label: "Home 2"
  }, {
    name: "landing-3",
    label: "Home 3"
  }]
}, {
  name: "pages",
  label: "Pages",
  items: [{
    name: "job-pages",
    label: "Job Pages",
    items: [{
      name: "search-grid",
      label: "Job Grid"
    }, {
      name: "search-list",
      label: "Job List"
    }, {
      name: "job-details",
      label: "Job Details"
    }]
  }, {
    name: "dashboard",
    label: "Dashboard",
    items: [{
      name: "dashboard-main",
      label: "Dashboard Main"
    }, {
      name: "dashboard-settings",
      label: "Dashboard Settings"
    }, {
      name: "dashboard-applicants",
      label: "Dashboard Applicants"
    }, {
      name: "dashboard-jobs",
      label: "Dashboard Posted Jobs"
    }]
  }, {
    name: "candidate",
    label: "Candidate Pages",
    items: [{
      name: "candidate-profile",
      label: "Candidate Profile 01"
    }, {
      name: "candidate-profile-2",
      label: "Candidate Profile 02"
    }]
  }, {
    name: "search",
    label: "Search Pages",
    items: [{
      name: "search-grid",
      label: "Search Grid"
    }, {
      name: "search-list",
      label: "Search List 01"
    }, {
      name: "search-list-2",
      label: "Search List 02"
    }]
  }, {
    name: "company-profile",
    label: "Company Profile"
  }, {
    name: "essential",
    label: "Essential",
    items: [{
      name: "faq",
      label: "FAQ"
    }, {
      name: "404",
      label: "404"
    }, {
      name: "pricing",
      label: "Pricing"
    }, {
      name: "contact",
      label: "Contact"
    }]
  }]
}, {
  name: "https://uxtheme.net/product-support/",
  label: "Support",
  isExternal: true
}];

/***/ }),

/***/ "./src/components/Layout/Layout.js":
/*!*****************************************!*\
  !*** ./src/components/Layout/Layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ "aos");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _SidebarDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SidebarDashboard */ "./src/components/SidebarDashboard/index.js");
/* harmony import */ var _ModalVideo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ModalVideo */ "./src/components/ModalVideo/index.js");
/* harmony import */ var _ModalApplication__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ModalApplication */ "./src/components/ModalApplication/index.js");
/* harmony import */ var _ModalSignIn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ModalSignIn */ "./src/components/ModalSignIn/index.js");
/* harmony import */ var _ModalSignUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ModalSignUp */ "./src/components/ModalSignUp/index.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _utils_globalStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/globalStyle */ "./src/utils/globalStyle.js");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/favicon.png */ "./src/assets/favicon.png");
/* harmony import */ var _assets_favicon_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_favicon_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Layout\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














 // the full theme object


const Loader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 0.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`; // options for different color modes

const modes = {
  light: "light",
  dark: "dark"
}; // merge the color mode with the base theme
// to create a new theme object

const getTheme = mode => Object(lodash__WEBPACK_IMPORTED_MODULE_14__["merge"])({}, _utils__WEBPACK_IMPORTED_MODULE_15__["theme"], {
  colors: Object(lodash__WEBPACK_IMPORTED_MODULE_14__["get"])(_utils__WEBPACK_IMPORTED_MODULE_15__["theme"].colors.modes, mode, _utils__WEBPACK_IMPORTED_MODULE_15__["theme"].colors)
});

const Layout = ({
  children,
  pageContext
}) => {
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_11__["default"]);
  const {
    0: visibleLoader,
    1: setVisibleLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    aos__WEBPACK_IMPORTED_MODULE_3___default.a.init({
      once: true
    });
    setVisibleLoader(false);
  }, []); // Navbar style based on scroll

  const eleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener("popstate", function (event) {
      // The popstate event is fired each time when the current history entry changes.
      gContext.closeOffCanvas();
    }, false);
    window.addEventListener("pushState", function (event) {
      // The pushstate event is fired each time when the current history entry changes.
      gContext.closeOffCanvas();
    }, false);
  }, [gContext]);

  if (pageContext.layout === "bare") {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      theme: gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 7
      }
    }, __jsx("div", {
      "data-theme-mode-panel-active": true,
      "data-theme": "light",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }, __jsx(_utils_globalStyle__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }, __jsx("title", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }
    }, "JustCamp"), __jsx("link", {
      rel: "icon",
      type: "image/png",
      href: _assets_favicon_png__WEBPACK_IMPORTED_MODULE_13___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    })), __jsx(Loader, {
      id: "loading",
      className: visibleLoader ? "" : "inActive",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "load-circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: "one",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }))), __jsx("div", {
      className: "site-wrapper overflow-hidden",
      ref: eleRef,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }, children), __jsx(_ModalVideo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }), __jsx(_ModalApplication__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }
    }), __jsx(_ModalSignIn__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }), __jsx(_ModalSignUp__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }
    })));
  }

  if (pageContext.layout === "dashboard") {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      theme: gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }
    }, __jsx("div", {
      "data-theme-mode-panel-active": true,
      "data-theme": "light",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    }, __jsx(_utils_globalStyle__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }
    }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }
    }, __jsx("title", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, "JustCamp"), __jsx("link", {
      rel: "icon",
      type: "image/png",
      href: _assets_favicon_png__WEBPACK_IMPORTED_MODULE_13___default.a,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    })), __jsx(Loader, {
      id: "loading",
      className: visibleLoader ? "" : "inActive",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "load-circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: "one",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }
    }))), __jsx("div", {
      className: "site-wrapper overflow-hidden bg-default-2",
      ref: eleRef,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isDark: gContext.headerDark,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }
    }), __jsx(_SidebarDashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }), children), __jsx(_ModalVideo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }
    }), __jsx(_ModalApplication__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }
    }), __jsx(_ModalSignIn__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }
    }), __jsx(_ModalSignUp__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }
    })));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx("div", {
    "data-theme-mode-panel-active": true,
    "data-theme": "light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, __jsx(_utils_globalStyle__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, "JustCamp"), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: _assets_favicon_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  })), __jsx(Loader, {
    id: "loading",
    className: visibleLoader ? "" : "inActive",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "site-wrapper overflow-hidden",
    ref: eleRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isDark: gContext.headerDark,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }), children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isDark: gContext.footerDark,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  })), __jsx(_ModalVideo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  }), __jsx(_ModalApplication__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }), __jsx(_ModalSignIn__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }), __jsx(_ModalSignUp__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./src/components/Layout/Layout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Layout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Logo/Logo.js":
/*!*************************************!*\
  !*** ./src/components/Logo/Logo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_logo_main_black_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/logo-main-black.png */ "./src/assets/image/logo-main-black.png");
/* harmony import */ var _assets_image_logo_main_black_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_logo_main_black_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_logo_main_white_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/logo-main-white.png */ "./src/assets/image/logo-main-white.png");
/* harmony import */ var _assets_image_logo_main_white_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_logo_main_white_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Logo\\Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Logo = (_ref) => {
  let {
    white,
    height,
    className = ""
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["white", "height", "className"]);

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("a", _extends({
    className: `d-block ${className}`
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), white ? __jsx("img", {
    src: _assets_image_logo_main_white_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }) : __jsx("img", {
    src: _assets_image_logo_main_black_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/Logo/index.js":
/*!**************************************!*\
  !*** ./src/components/Logo/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ "./src/components/Logo/Logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Logo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ModalApplication/ModalApplication.js":
/*!*************************************************************!*\
  !*** ./src/components/ModalApplication/ModalApplication.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _ProfileSidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProfileSidebar */ "./src/components/ProfileSidebar/index.js");
/* harmony import */ var _assets_image_l2_png_featured_job_logo_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/l2/png/featured-job-logo-1.png */ "./src/assets/image/l2/png/featured-job-logo-1.png");
/* harmony import */ var _assets_image_l2_png_featured_job_logo_1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_l2_png_featured_job_logo_1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_l1_png_feature_brand_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/l1/png/feature-brand-1.png */ "./src/assets/image/l1/png/feature-brand-1.png");
/* harmony import */ var _assets_image_l1_png_feature_brand_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_l1_png_feature_brand_1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_svg_harvard_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/svg/harvard.svg */ "./src/assets/image/svg/harvard.svg");
/* harmony import */ var _assets_image_svg_harvard_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_svg_harvard_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_svg_mit_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/image/svg/mit.svg */ "./src/assets/image/svg/mit.svg");
/* harmony import */ var _assets_image_svg_mit_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_svg_mit_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_svg_icon_loaction_pin_black_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/image/svg/icon-loaction-pin-black.svg */ "./src/assets/image/svg/icon-loaction-pin-black.svg");
/* harmony import */ var _assets_image_svg_icon_loaction_pin_black_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_svg_icon_loaction_pin_black_svg__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\ModalApplication\\ModalApplication.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const ModalStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"])`
  /* &.modal {
    z-index: 10050;
  } */
  .modal-dialog {
    margin: 1.75rem auto;
    max-width: 100%;
  }
  .modal-content {
    background: transparent;
  }
`;

const ModalSignIn = props => {
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__["default"]);

  const handleClose = () => {
    gContext.toggleApplicationModal();
  };

  return __jsx(ModalStyled, _extends({}, props, {
    size: "lg",
    centered: true,
    show: gContext.applicationModalVisible,
    onHide: gContext.toggleApplicationModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].Body, {
    className: "p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("button", {
    type: "button",
    className: "circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-times",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "login-modal-main bg-white rounded-8 overflow-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-12 col-xl-3 col-lg-4 col-md-5 mb-13 mb-lg-0 border-right border-mercury",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx(_ProfileSidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "col-12 col-xl-6 col-lg-8 col-md-7 order-2 order-lg-1 border-right border-mercury",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "bg-white rounded-4 overflow-auto h-1173",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "pr-xl-0 pr-xxl-14 p-5 px-xs-12 pt-7 pb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, __jsx("h4", {
    className: "font-size-6 font-weight-semibold mb-7 mt-5 text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, "About"), __jsx("p", {
    className: "font-size-4 mb-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "A talented professional with an academic background in IT and proven commercial development experience as C++ developer since 1999. Has a sound knowledge of the software development life cycle. Was involved in more than 140 software development outsourcing projects."), __jsx("p", {
    className: "font-size-4 mb-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, "Programming Languages: C/C++, .NET C++, Python, Bash, Shell, PERL, Regular expressions, Python, Active-script.")), __jsx("div", {
    className: "border-top border-mercury pr-xl-0 pr-xxl-14 p-5 pl-xs-12 pt-7 pb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, __jsx("h4", {
    className: "font-size-6 font-weight-semibold mb-7 mt-5 text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, "Skills"), __jsx("ul", {
    className: "list-unstyled d-flex align-items-center flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 27
    }
  }, "Agile"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 27
    }
  }, "Wireframing"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 27
    }
  }, "Prototyping"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 27
    }
  }, "Information"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 27
    }
  }, "Waterfall Model"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 27
    }
  }, "New Layout"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "bg-polar text-black-2  mr-6 px-7 mt-2 mb-2 font-size-3 rounded-3 min-height-32 d-flex align-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 27
    }
  }, "Browsing"))))), __jsx("div", {
    className: "border-top border-mercury p-5 pl-xs-12 pt-7 pb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 19
    }
  }, __jsx("h4", {
    className: "font-size-6 font-weight-semibold mb-7 mt-5 text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, "Work Exprerience"), __jsx("div", {
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "square-72 d-block mr-8 mb-7 mb-sm-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _assets_image_l2_png_featured_job_logo_1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "w-100 mt-n2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-5 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 31
    }
  }, "Lead Product Designer"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "font-size-4 text-default-color line-height-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 29
    }
  }, "Airabnb")), __jsx("div", {
    className: "d-flex align-items-center justify-content-md-between flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 text-gray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 31
    }
  }, "Jun 2017 - April 2020- 3 years")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 text-gray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 31
    }
  }, __jsx("span", {
    className: "mr-4",
    css: `
                                    margin-top: -2px;
                                  `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _assets_image_svg_icon_loaction_pin_black_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 35
    }
  })), "New York, USA")))))), __jsx("div", {
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "square-72 d-block mr-8 mb-7 mb-sm-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _assets_image_l1_png_feature_brand_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "w-100 mt-n2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-5 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 31
    }
  }, "Senior UI/UX Designer"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "font-size-4 text-default-color line-height-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 29
    }
  }, "Google Inc")), __jsx("div", {
    className: "d-flex align-items-center justify-content-md-between flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 text-gray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 31
    }
  }, "Jun 2017 - April 2020- 3 years")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 text-gray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 31
    }
  }, __jsx("span", {
    className: "mr-4",
    css: `
                                    margin-top: -2px;
                                  `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _assets_image_svg_icon_loaction_pin_black_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 35
    }
  })), "New York, USA"))))))), __jsx("div", {
    className: "border-top border-mercury p-5 pl-xs-12 pt-7 pb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 19
    }
  }, __jsx("h4", {
    className: "font-size-6 font-weight-semibold mb-7 mt-5 text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }, "Education"), __jsx("div", {
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "square-72 d-block mr-8 mb-7 mb-sm-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _assets_image_svg_harvard_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "w-100 mt-n2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-5 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 31
    }
  }, "Masters in Art Design"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "font-size-4 text-default-color line-height-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 29
    }
  }, "Harvard University")), __jsx("div", {
    className: "d-flex align-items-center justify-content-md-between flex-wrap",
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
    className: "font-size-3 text-gray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 31
    }
  }, "Jun 2017 - April 2020- 3 years")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 text-gray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 31
    }
  }, __jsx("span", {
    className: "mr-4",
    css: `
                                    margin-top: -2px;
                                  `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _assets_image_svg_icon_loaction_pin_black_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 35
    }
  })), "Brylin, USA")))))), __jsx("div", {
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "square-72 d-block mr-8 mb-7 mb-sm-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "circle-72",
    src: _assets_image_svg_mit_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "w-100 mt-n2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-5 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 31
    }
  }, "Bachelor in Software Engineering", " "))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "font-size-4 text-default-color line-height-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 29
    }
  }, "Manipal Institute of Technology")), __jsx("div", {
    className: "d-flex align-items-center justify-content-md-between flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 text-gray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 31
    }
  }, "Fed 2012 - April 2016 - 4 years")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 text-gray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 31
    }
  }, __jsx("span", {
    className: "mr-4",
    css: `
                                    margin-top: -2px;
                                  `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _assets_image_svg_icon_loaction_pin_black_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 35
    }
  })), "New York, USA")))))), __jsx("div", {
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-flex align-items-center pr-11 mb-9 flex-wrap flex-sm-nowrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "square-72 d-block mr-8 mb-7 mb-sm-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "circle-72",
    src: _assets_image_svg_mit_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 27
    }
  })), __jsx("div", {
    className: "w-100 mt-n2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-5 font-weight-semibold text-black-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 31
    }
  }, "Bachelor in Software Engineering", " "))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "font-size-4 text-default-color line-height-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 29
    }
  }, "Manipal Institute of Technology")), __jsx("div", {
    className: "d-flex align-items-center justify-content-md-between flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 27
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 text-gray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 31
    }
  }, "Fed 2012 - April 2016 - 4 years")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "font-size-3 text-gray",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 31
    }
  }, __jsx("span", {
    className: "mr-4",
    css: `
                                    margin-top: -2px;
                                  `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 33
    }
  }, __jsx("img", {
    src: _assets_image_svg_icon_loaction_pin_black_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 35
    }
  })), "New York, USA"))))))))), __jsx("div", {
    className: "col-12 col-xl-3 order-3 order-lg-2 bg-default-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "text-center mb-13 mb-lg-0 mt-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btn btn-primary btn-xl mb-7 d-block mx-auto text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 19
    }
  }, "Contact"), __jsx("button", {
    className: "btn btn-outline-gray btn-xl mb-7 d-block mx-auto text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 19
    }
  }, "Reject"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalSignIn);

/***/ }),

/***/ "./src/components/ModalApplication/index.js":
/*!**************************************************!*\
  !*** ./src/components/ModalApplication/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalApplication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalApplication */ "./src/components/ModalApplication/ModalApplication.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ModalApplication__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ModalSignIn/ModalSignIn.js":
/*!***************************************************!*\
  !*** ./src/components/ModalSignIn/ModalSignIn.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\ModalSignIn\\ModalSignIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ModalStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"])`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalSignIn = props => {
  const {
    0: showPass,
    1: setShowPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    loading: true,
    error: null,
    email: "",
    password: ""
  });

  const handleClose = () => {
    gContext.toggleSignInModal();
  };

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setState({
      loading: true,
      error: null
    });

    try {
      await _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["default"].login(state.email, state.password);
      setState({
        loading: false
      });
      handleClose();
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/dashboard-main");
    } catch (error) {
      setState({
        loading: false,
        error: error
      });
    }
  };

  const handleChange = e => {
    const newState = _objectSpread({}, state);

    console.log("id:" + e.target.id + " valor: " + e.target.value);
    newState[e.target.id] = e.target.value;
    setState(newState);
    console.log(newState);
  };

  return __jsx(ModalStyled, _extends({}, props, {
    size: "lg",
    centered: true,
    show: gContext.signInModalVisible,
    onHide: gContext.toggleSignInModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].Body, {
    className: "p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-times",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "login-modal-main bg-white rounded-8 overflow-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pb-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "font-size-8 text-white line-height-reset pb-4 line-height-1p4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, "Bienvenido/a"), __jsx("p", {
    className: "mb-0 font-size-4 text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, "Inicie sesi\xF3n para acceder a su cuenta y contratar profesionales.")))), __jsx("div", {
    className: "col-lg-7 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "bg-white-2 h-100 px-11 pt-11 pb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx("form", {
    action: "/",
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "password",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, "Contrase\xF1a"), __jsx("div", {
    className: "position-relative",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 23
    }
  }), __jsx("a", {
    href: "/#",
    className: "show-password pos-abs-cr fas mr-6 text-black-2",
    onClick: e => {
      e.preventDefault();
      togglePassword();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "d-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }, "none")))), __jsx("div", {
    className: "form-group mb-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-primary btn-medium w-100 rounded-5 text-uppercase",
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  }, "Iniciar sesi\xF3n", " ")), __jsx("p", {
    className: "font-size-4 text-center heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 19
    }
  }, "\xBFNo posee una cuenta?", " ", __jsx("a", {
    href: "/#",
    className: "text-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 21
    }
  }, "Cree una cuenta gratuita")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalSignIn);

/***/ }),

/***/ "./src/components/ModalSignIn/index.js":
/*!*********************************************!*\
  !*** ./src/components/ModalSignIn/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalSignIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalSignIn */ "./src/components/ModalSignIn/ModalSignIn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ModalSignIn__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ModalSignUp/ModalSignUp.js":
/*!***************************************************!*\
  !*** ./src/components/ModalSignUp/ModalSignUp.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.js");
/* harmony import */ var _components_Core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Core */ "./src/components/Core/index.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\ModalSignUp\\ModalSignUp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ModalStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"])`
  /* &.modal {
    z-index: 10050;
  } */
`;
const sexo = [{
  value: "F",
  label: "Femenino"
}, {
  value: "M",
  label: "Masculino"
}];

const ModalSignUp = props => {
  const {
    0: showPassFirst,
    1: setShowPassFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: showPassSecond,
    1: setShowPassSecond
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loading: true,
    error: null,
    email2: "",
    password: "",
    name: "",
    lastName: "",
    birthDate: "",
    sex: "F",
    sexLabel: "Femenino",
    isProfessional: false
  });
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__["default"]);

  const handleClose = () => {
    gContext.toggleSignUpModal();
  };

  const togglePasswordFirst = () => {
    setShowPassFirst(!showPassFirst);
  };

  const togglePasswordSecond = () => {
    setShowPassSecond(!showPassSecond);
  };

  const toggleIsProfessional = () => {
    const newState = _objectSpread({}, state);

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

  const handleSubmit = async e => {
    e.preventDefault();
    setState({
      loading: true,
      error: null
    });

    try {
      await _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["default"].register(state.name, state.lastName, state.email2, state.birthDate, state.sex, state.password, state.isProfessional);
      setState({
        loading: false
      });
      handleClose();
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/dashboard-main");
    } catch (error) {
      setState({
        loading: false,
        error: error
      });
    }
  };

  const handleChange = e => {
    const newState = _objectSpread({}, state);

    console.log(e.target.value);
    newState[e.target.id] = e.target.value;
    setState(newState);
    console.log(newState);
  };

  const handleSelect = e => {
    const newState = _objectSpread({}, state);

    newState["sex"] = e.value;
    newState["sexLabel"] = e.label;
    setState(newState);
  };

  return __jsx(ModalStyled, _extends({}, props, {
    size: "lg",
    centered: true,
    show: gContext.signUpModalVisible,
    onHide: gContext.toggleSignUpModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].Body, {
    className: "p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-times",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "login-modal-main bg-white rounded-8 overflow-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pb-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "font-size-8 text-white line-height-reset pb-4 line-height-1p4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, "Cree una cuenta gratuita hoy"), __jsx("p", {
    className: "mb-0 font-size-4 text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }, "Cree su cuenta para continuar y explorar a los profesionales disponibles.")))), __jsx("div", {
    className: "col-lg-7 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "bg-white-2 h-100 px-11 pt-11 pb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx("form", {
    action: "/",
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "name",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 21
    }
  }, "Nombre"), __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "Ingrese su nombre",
    id: "name",
    value: state.name,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "lastName",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 21
    }
  }, "Apellido"), __jsx("input", {
    type: "text",
    className: "form-control",
    placeholder: "Ingrese su apellido",
    id: "lastName",
    value: state.lastName,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "email2",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 21
    }
  }, "E-mail"), __jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "ejemplo@gmail.com",
    id: "email2",
    value: state.email2,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "name",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  }, "Fecha de nacimiento"), __jsx("input", {
    type: "date",
    className: "form-control",
    placeholder: "Ingrese su fecha de nacimiento",
    id: "birthDate",
    value: state.birthDate,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "select2",
    className: "d-block text-black-2 font-size-4 font-weight-semibold mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 21
    }
  }, "Sexo"), __jsx(_components_Core__WEBPACK_IMPORTED_MODULE_6__["Select"], {
    options: sexo,
    className: "form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 ",
    border: false,
    id: "sex",
    value: {
      label: state.sexLabel,
      value: state.sex
    },
    onChange: handleSelect,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "password",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 21
    }
  }, "Contrase\xF1a"), __jsx("div", {
    className: "position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: showPassFirst ? "password" : "text",
    className: "form-control",
    id: "password",
    placeholder: "Ingrese su contrase\xF1a",
    value: state.password,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 23
    }
  }), __jsx("a", {
    href: "/#",
    className: "show-password pos-abs-cr fas mr-6 text-black-2",
    onClick: e => {
      e.preventDefault();
      togglePasswordFirst();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "d-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 25
    }
  }, "none")))), __jsx("div", {
    className: "form-group d-flex flex-wrap justify-content-center mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "isProfesional",
    className: "gr-check-input d-flex  mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 21
    }
  }, __jsx("input", {
    className: "d-none",
    type: "checkbox",
    id: "isProfesional",
    value: state.isProfessional,
    onChange: toggleIsProfessional,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "checkbox mr-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "font-size-4 mb-0 line-height-reset d-block font-weight-semibold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 23
    }
  }, __jsx("a", {
    href: "/#",
    className: "text-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 25
    }
  }, "Soy profesional")))), __jsx("div", {
    className: "form-group mb-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-primary btn-medium w-100 rounded-5 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 21
    }
  }, "Registrarse", " ")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalSignUp);

/***/ }),

/***/ "./src/components/ModalSignUp/index.js":
/*!*********************************************!*\
  !*** ./src/components/ModalSignUp/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalSignUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalSignUp */ "./src/components/ModalSignUp/ModalSignUp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ModalSignUp__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ModalVideo/ModalVideo.js":
/*!*************************************************!*\
  !*** ./src/components/ModalVideo/ModalVideo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\ModalVideo\\ModalVideo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const ModalStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"])`
  &.modal {
    z-index: 10050;
  }
  .modal-dialog {
    width: 100vw;
    height: 100vh;
    max-width: initial;
    max-height: initial;
    margin: 0;
  }
  .modal-content {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
    padding-top: 15px;
    background: rgba(0, 0, 0, 0.75);
    @media ${_utils__WEBPACK_IMPORTED_MODULE_5__["device"].lg} {
      padding-top: 30px;
    }
  }
`;
const DivStyled = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  margin: 0 auto;
  width: 90%;
  height: 400px;
  @media ${_utils__WEBPACK_IMPORTED_MODULE_5__["device"].md} {
    width: 70%;
    height: 650px;
  }
  opacity: 0;
  visibility: hidden;
  transition: all 2s ease-out;
  &.loaded {
    opacity: 1;
    visibility: visible;
  }
`;
const CloseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  cursor: pointer;
  top: 0;
  right: 1rem;
  position: absolute;
  height: 1.5rem;
  width: 1.5rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  z-index: 10;
  color: #fff;
  @media ${_utils__WEBPACK_IMPORTED_MODULE_5__["device"].md} {
    right: 2rem;
  }
`;

const CloseButton = props => __jsx(CloseWrapper, _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 3
  }
}), __jsx("svg", {
  role: "img",
  viewBox: "0 0 24 24",
  css: `
        fill: currentcolor;
        vertical-align: middle;
        height: 1rem;
        width: 1rem;
      `,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }
}, __jsx("path", {
  d: "M9.82 12L0 2.18 2.18 0 12 9.82 21.82 0 24 2.18 14.18 12 24 21.82 21.82 24 12 14.18 2.18 24 0 21.82z",
  fill: "currentColor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 7
  }
})));

const ModalVideo = props => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_4__["default"]);

  const handleClose = () => {
    setLoading(true);
    gContext.toggleVideoModal();
  };

  return __jsx(ModalStyled, _extends({}, props, {
    size: "lg",
    centered: true,
    show: gContext.videoModalVisible // onHide={gContext.toggleVideoModal}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"].Body, {
    className: "text-center position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx(CloseButton, {
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: `h-100 d-flex align-items-center w-100`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(DivStyled, {
    className: `${loading ? "loading" : "loaded"}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_1___default.a, {
    url: `https://www.youtube.com/watch?v=zlInYm2JrFw`,
    width: "100%",
    height: "100%",
    controls: true,
    onReady: () => {
      setLoading(false);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalVideo);

/***/ }),

/***/ "./src/components/ModalVideo/index.js":
/*!********************************************!*\
  !*** ./src/components/ModalVideo/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalVideo */ "./src/components/ModalVideo/ModalVideo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ModalVideo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/NestedMenu/NestedMenu.js":
/*!*************************************************!*\
  !*** ./src/components/NestedMenu/NestedMenu.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\NestedMenu\\NestedMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const NestedMenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  a,
  .label {
    color: ${({
  dark,
  theme
}) => dark ? theme.colors.light : theme.colors.heading}!important;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.3s ease-out;
    &:hover,
    &:active {
      color: ${({
  theme
}) => theme.colors.primary};
      text-decoration: none;
    }
  }

  .list-group-item {
    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;
const defaultMenuItems = [{
  name: "home",
  label: "Home"
}, {
  name: "billing",
  label: "Billing",
  items: [{
    name: "statements",
    label: "Statements"
  }, {
    name: "reports",
    label: "Reports"
  }]
}, {
  name: "settings",
  label: "Settings",
  items: [{
    name: "profile",
    label: "Profile"
  }, {
    name: "insurance",
    label: "Insurance"
  }, {
    name: "notifications",
    label: "Notifications",
    items: [{
      name: "email",
      label: "Email"
    }, {
      name: "desktop",
      label: "Desktop",
      items: [{
        name: "schedule",
        label: "Schedule"
      }, {
        name: "frequency",
        label: "Frequency"
      }]
    }, {
      name: "sms",
      label: "SMS"
    }]
  }]
}];

const MenuItem = (_ref) => {
  let {
    label,
    isExternal = false,
    name,
    items,
    depthStep = 20,
    depth = 0
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["label", "isExternal", "name", "items", "depthStep", "depth"]);

  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const hasSubItems = Array.isArray(items);
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, hasSubItems ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, _extends({}, rest, {
    css: `
            padding-left: ${depth * depthStep}px !important;
            cursor: pointer;
          `,
    onClick: () => setOpen(!open),
    className: "d-flex align-items-center justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "label",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, label), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, open ? __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaAngleDown"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }) : __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaAngleRight"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 43
    }
  }))) : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"].Item, _extends({}, rest, {
    css: `
            padding-left: ${depth * depthStep}px !important;
          `,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), isExternal ? __jsx("a", {
    href: `${name}`,
    onClick: () => {
      if (gContext.visibleOffCanvas) {
        gContext.toggleOffCanvas();
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, label) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: `/${name}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: () => {
      if (gContext.visibleOffCanvas) {
        gContext.toggleOffCanvas();
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, label))), hasSubItems ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    in: open,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, items.map(subItem => __jsx(MenuItem, _extends({
    key: subItem.name,
    depth: depth + 1,
    depthStep: depthStep
  }, subItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 15
    }
  }))))) : null);
};

const NestedMenu = ({
  menuItems = defaultMenuItems
}) => {
  return __jsx(NestedMenuContainer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ListGroup"], {
    variant: "flush",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, menuItems.map((menuItem, index) => __jsx(MenuItem, _extends({
    key: `${menuItem.name}${index}`,
    depthStep: 20,
    depth: 0
  }, menuItem, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (NestedMenu);

/***/ }),

/***/ "./src/components/NestedMenu/index.js":
/*!********************************************!*\
  !*** ./src/components/NestedMenu/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NestedMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NestedMenu */ "./src/components/NestedMenu/NestedMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NestedMenu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Offcanvas/Offcanvas.js":
/*!***********************************************!*\
  !*** ./src/components/Offcanvas/Offcanvas.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo/index.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\Offcanvas\\Offcanvas.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  visibility: visible;
  transition: all 0.3s ease-out;
  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`;
const Drawer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  position: fixed;
  width: 17rem;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: 999999;
  background: #fff;
  overflow-y: auto;
  transform: translateX(0);
  transition: all 0.3s ease-out;
  &.hidden {
    transform: translateX(100%);
  }
  .dropdown-menu {
    position: static !important;
    will-change: initial !important;
    transform: initial !important;
    float: none !important;
  }
`;
const LogoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  font-weight: 600;
  font-size: 1.25rem;
`;

const Offcanvas = (_ref) => {
  let {
    show,
    onHideOffcanvas,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["show", "onHideOffcanvas", "children"]);

  if (typeof document !== "undefined") {
    if (show) {
      document.querySelector("html").classList.add("has-offcanvas");
      document.body.classList.add("has-offcanvas");
    } else {
      document.querySelector("html").classList.remove("has-offcanvas");
      document.body.classList.remove("has-offcanvas");
    }
  }

  return __jsx("div", _extends({}, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }), __jsx(Overlay, {
    className: show ? "" : "hidden",
    onClick: onHideOffcanvas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx(Drawer, {
    className: show ? "" : "hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(LogoContainer, {
    className: "my-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: onHideOffcanvas,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "pt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, children)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Offcanvas);

/***/ }),

/***/ "./src/components/Offcanvas/index.js":
/*!*******************************************!*\
  !*** ./src/components/Offcanvas/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Offcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Offcanvas */ "./src/components/Offcanvas/Offcanvas.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Offcanvas__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/ProfileSidebar/ProfileSidebar.js":
/*!*********************************************************!*\
  !*** ./src/components/ProfileSidebar/ProfileSidebar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_image_l3_png_pro_img_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/image/l3/png/pro-img.png */ "./src/assets/image/l3/png/pro-img.png");
/* harmony import */ var _assets_image_l3_png_pro_img_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_image_l3_png_pro_img_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\ProfileSidebar\\ProfileSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Sidebar = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "pl-lg-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bg-white shadow-9 rounded-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "px-5 py-11 text-center border-bottom border-mercury",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "circle-54",
    src: _assets_image_l3_png_pro_img_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 19
    }
  }))), __jsx("h4", {
    className: "mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "text-black-2 font-size-6 font-weight-semibold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 19
    }
  }, "David Henricks"))), __jsx("p", {
    className: "mb-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "text-gray font-size-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, "Product Designer"))), __jsx("div", {
    className: "icon-link d-flex align-items-center justify-content-center flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "text-smoke circle-32 bg-concrete mr-5 hover-bg-green",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fab fa-linkedin-in",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "text-smoke circle-32 bg-concrete mr-5 hover-bg-green",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fab fa-facebook-f",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "text-smoke circle-32 bg-concrete mr-5 hover-bg-green",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fab fa-twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "text-smoke circle-32 bg-concrete mr-5 hover-bg-green",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fab fa-dribbble",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "text-smoke circle-32 bg-concrete mr-5 hover-bg-green",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fab fa-behance",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }))))), __jsx("div", {
    className: "px-9 pt-lg-5 pt-9 pt-xl-9 pb-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "text-black-2 mb-8 font-size-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Contact Info"), __jsx("div", {
    className: "mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "font-size-4 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, "Location"), __jsx("h5", {
    className: "font-size-4 font-weight-semibold mb-0 text-black-2 text-break",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "New York , USA")), __jsx("div", {
    className: "mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "font-size-4 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "E-mail"), __jsx("h5", {
    className: "font-size-4 font-weight-semibold mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "text-black-2 text-break",
    href: "mailto:name_ac@gmail.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, "name_ac@gmail.com"))), __jsx("div", {
    className: "mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "font-size-4 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Phone"), __jsx("h5", {
    className: "font-size-4 font-weight-semibold mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "text-black-2 text-break",
    href: "tel:+999565562",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, "+999 565 562"))), __jsx("div", {
    className: "mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "font-size-4 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "Website Linked"), __jsx("h5", {
    className: "font-size-4 font-weight-semibold mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: "text-break",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, "www.nameac.com")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/ProfileSidebar/index.js":
/*!************************************************!*\
  !*** ./src/components/ProfileSidebar/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileSidebar */ "./src/components/ProfileSidebar/ProfileSidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProfileSidebar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/SidebarDashboard/SidebarDashboard.js":
/*!*************************************************************!*\
  !*** ./src/components/SidebarDashboard/SidebarDashboard.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _assets_image_logo_main_black_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/image/logo-main-black.png */ "./src/assets/image/logo-main-black.png");
/* harmony import */ var _assets_image_logo_main_black_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_image_logo_main_black_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\SidebarDashboard\\SidebarDashboard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Sidebar = () => {
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    in: gContext.showSidebarDashboard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "dashboard-sidebar-wrapper pt-11",
    id: "sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "brand-logo px-11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _assets_image_logo_main_black_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })))), __jsx("div", {
    className: "my-15 px-11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn btn-primary btn-xl w-100 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "mr-5 d-inline-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "+"), "Post a new job"))), __jsx("ul", {
    className: "list-unstyled dashboard-layout-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard-main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon icon-layout-11 mr-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }), "Dashboard"))), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard-jobs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-briefcase mr-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }), "Posted Jobs"))), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard-applicants",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-user mr-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }), "Applicants", " ", __jsx("span", {
    className: "ml-auto px-1 h-1 bg-dodger text-white font-size-3 rounded-5 max-height-px-18 flex-all-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "14")))), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard-settings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fas fa-cog mr-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }), "Settings")))))), __jsx("a", {
    href: "/#",
    className: "sidebar-mobile-button",
    onClick: e => {
      e.preventDefault();
      gContext.toggleSidebarDashboard();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "icon icon-sidebar-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./src/components/SidebarDashboard/index.js":
/*!**************************************************!*\
  !*** ./src/components/SidebarDashboard/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarDashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarDashboard */ "./src/components/SidebarDashboard/SidebarDashboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SidebarDashboard__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./src/hooks/useWindowSize.js":
/*!************************************!*\
  !*** ./src/hooks/useWindowSize.js ***!
  \************************************/
/*! exports provided: useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWindowSize", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // Hook

const useWindowSize = () => {
  const isClient = false;
  const getSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }, [isClient]);
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    const handleResize = () => {
      setWindowSize(getSize);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getSize, isClient]);
  return windowSize;
};

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalContext */ "./src/context/GlobalContext.js");
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf */ "./src/assets/fonts/fontawesome-5/webfonts/fa-brands-400.ttf");
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_fontawesome_5_webfonts_fa_brands_400_ttf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf */ "./src/assets/fonts/fontawesome-5/webfonts/fa-regular-400.ttf");
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_fontawesome_5_webfonts_fa_regular_400_ttf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf */ "./src/assets/fonts/fontawesome-5/webfonts/fa-solid-900.ttf");
/* harmony import */ var _assets_fonts_fontawesome_5_webfonts_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_fontawesome_5_webfonts_fa_solid_900_ttf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_fonts_icon_font_fonts_avasta_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/fonts/icon-font/fonts/avasta.ttf */ "./src/assets/fonts/icon-font/fonts/avasta.ttf");
/* harmony import */ var _assets_fonts_icon_font_fonts_avasta_ttf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_icon_font_fonts_avasta_ttf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_fonts_icon_font_css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/fonts/icon-font/css/style.css */ "./src/assets/fonts/icon-font/css/style.css");
/* harmony import */ var _assets_fonts_icon_font_css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_icon_font_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../node_modules/slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var _node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_fonts_fontawesome_5_css_all_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/fonts/fontawesome-5/css/all.css */ "./src/assets/fonts/fontawesome-5/css/all.css");
/* harmony import */ var _assets_fonts_fontawesome_5_css_all_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_fontawesome_5_css_all_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scss/bootstrap.scss */ "./src/scss/bootstrap.scss");
/* harmony import */ var _scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import App from 'next/app'















const MyApp = ({
  Component,
  pageProps,
  router
}) => {
  if (router.pathname.match(/404/)) {
    return __jsx(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalProvider"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      pageContext: {
        layout: "bare"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }))));
  }

  if (router.pathname.match(/dashboard/)) {
    return __jsx(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalProvider"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      pageContext: {
        layout: "dashboard"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }))));
  }

  return __jsx(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_2__["GlobalProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pageContext: {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/scss/bootstrap.scss":
/*!*********************************!*\
  !*** ./src/scss/bootstrap.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/services/auth.service.js":
/*!**************************************!*\
  !*** ./src/services/auth.service.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-common */ "./src/services/http-common.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class AuthService {
  constructor() {
    _defineProperty(this, "login", async (email, password) => {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post("/login", {
        username: email,
        password: password
      });
    });

    _defineProperty(this, "register", async (nombre, apellido, email, fechaNac, sexo, password, esProfesional) => {
      return _http_common__WEBPACK_IMPORTED_MODULE_0__["default"].post("/public/usuario/registro", {
        persona: {
          nombre: nombre,
          apellido: apellido,
          fecha_nacimiento: fechaNac,
          sexo: sexo
        },
        username: email,
        password: password,
        usuario_tipo_id: esProfesional ? 2 : 1
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthService());

/***/ }),

/***/ "./src/services/http-common.js":
/*!*************************************!*\
  !*** ./src/services/http-common.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:8080/v1",
  headers: {
    "Content-type": "application/json"
  }
}));

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

/***/ "./src/utils/globalStyle.js":
/*!**********************************!*\
  !*** ./src/utils/globalStyle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const globalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  
`;
/* harmony default export */ __webpack_exports__["default"] = (globalStyle);

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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "@n8tb1t/use-scroll-position":
/*!**********************************************!*\
  !*** external "@n8tb1t/use-scroll-position" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@n8tb1t/use-scroll-position");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aos");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-player");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtYnJhbmRzLTQwMC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS01L3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtc29saWQtOTAwLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ljb24tZm9udC9mb250cy9hdmFzdGEudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvaGVhZGVyLXByb2ZpbGUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvbDEvcG5nL2ZlYXR1cmUtYnJhbmQtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sMS9wbmcvbWVzc2FnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sMi9wbmcvZmVhdHVyZWQtam9iLWxvZ28tMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sMy9wbmcvcHJvLWltZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sb2dvLW1haW4tYmxhY2sucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvbG9nby1tYWluLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3N2Zy9oYXJ2YXJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3N2Zy9pY29uLWxvYWN0aW9uLXBpbi1ibGFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9zdmcvbWl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9CYWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9JbnB1dEdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9TcGFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvU3dpdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL1RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dvL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9nby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbEFwcGxpY2F0aW9uL01vZGFsQXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxBcHBsaWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25Jbi9Nb2RhbFNpZ25Jbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25Jbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25VcC9Nb2RhbFNpZ25VcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25VcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFZpZGVvL01vZGFsVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxWaWRlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXN0ZWRNZW51L05lc3RlZE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmVzdGVkTWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PZmZjYW52YXMvT2ZmY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09mZmNhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlU2lkZWJhci9Qcm9maWxlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlU2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyRGFzaGJvYXJkL1NpZGViYXJEYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhckRhc2hib2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9HbG9iYWxDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VXaW5kb3dTaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2h0dHAtY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hZGREYXlzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9icmVha3BvaW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2xvYmFsU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90aGVtZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbjh0YjF0L3VzZS1zY3JvbGwtcG9zaXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9saXNoZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBsYXllclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwiZGF0YSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUGFyYWdyYXBoIiwic3R5bGVkIiwiYSIsImNvbG9yIiwic3BhY2UiLCJ0eXBvZ3JhcGh5Iiwic2hhZG93IiwiQSIsIkJhZGdlU29saWQiLCJzcGFuIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImZsZXhib3giLCJsYXlvdXQiLCJCYWRnZSIsImJnIiwicmVzdCIsIkJveCIsImRpdiIsImdyaWQiLCJwb3NpdGlvbiIsIkJ1dHRvblNvbGlkIiwiYnV0dG9uIiwidGhlbWUiLCJyZ2JhIiwiY29sb3JzIiwiZGFya2VuIiwiZGVzYXR1cmF0ZSIsImRldmljZSIsIm1kIiwiQnV0dG9uIiwidmFyaWFudCIsIkNoZWNrU3R5bGVkIiwibGFiZWwiLCJzZWNvbmRhcnkiLCJDaGVjayIsIlRleHQiLCJ0ZXh0IiwiQ2hlY2tib3giLCJ1SUQiLCJ1bmlxdWVJZCIsIklucHV0U29saWQiLCJpbnB1dCIsImZvY3VzQ29sb3IiLCJJbnB1dEFuaW1hdGlvbiIsImxpZ2h0IiwiZGFyayIsImRhcmtTaGFkZSIsIklucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY3NzIiwiSW5wdXRHcm91cFN0eWxlZCIsIkljb24iLCJJbnB1dEdyb3VwIiwiaWNvbiIsIkxpc3QiLCJ1bCIsIlNlY3Rpb24iLCJkZWZhdWx0T3B0aW9ucyIsImdldEN1c3RvbVN0eWxlcyIsImFjY2VudENvbG9yIiwiaW5kaWNhdG9yIiwiZHJvcGRvd25JbmRpY2F0b3IiLCJkaXNwbGF5IiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwib3B0aW9uIiwicHJvdmlkZWQiLCJzdGF0ZSIsImlzU2VsZWN0ZWQiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250cm9sIiwibWVudUlzT3BlbiIsImlzRm9jdXNlZCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJ3aWR0aCIsImhlaWdodCIsIm91dGxpbmUiLCJib3hTaGFkb3ciLCJTZWxlY3RTdHlsZWQiLCJ3aXRoVGhlbWUiLCJTcGFuU3R5bGVkIiwiU3BhbiIsIlN3aXRjaFN0eWxlZCIsImFjdGl2ZSIsIlJvdW5kIiwiU3dpdGNoIiwic2V0QWN0aXZlIiwidXNlU3RhdGUiLCJoYW5kbGVTd2l0Y2giLCJQYXJhZ3JhcGhMYXJnZSIsIlBhcmFncmFwaFNtYWxsIiwiVGV4dFJlbmRlciIsIlNlY3Rpb25UaXRsZSIsImgyIiwieGwiLCJIZXJvVGl0bGUiLCJoMSIsIlByZVRpdGxlIiwiaDQiLCJDYXJkVGl0bGUiLCJoMyIsIlRpdGxlIiwiVGl0bGVTdHlsZWQiLCJGb290ZXIiLCJnQ29udGV4dCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVTaWduSW5Nb2RhbCIsInRvZ2dsZVNpZ25VcE1vZGFsIiwiaW1nTSIsIlNpdGVIZWFkZXIiLCJoZWFkZXIiLCJsZyIsIlRvZ2dsZUJ1dHRvbiIsImxpZ2h0U2hhZGUiLCJoZWFkaW5nIiwiSGVhZGVyIiwic2hvd1Njcm9sbGluZyIsInNldFNob3dTY3JvbGxpbmciLCJzaG93UmV2ZWFsIiwic2V0U2hvd1JldmVhbCIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJwcmV2UG9zIiwiY3VyclBvcyIsInkiLCJiZ0NsYXNzIiwiYWxpZ24iLCJyZXZlYWwiLCJpc0ZsdWlkIiwiaW1nUCIsInZpc2libGVPZmZDYW52YXMiLCJ0b2dnbGVPZmZDYW52YXMiLCJtZW51SXRlbXMiLCJpdGVtcyIsImlzRXh0ZXJuYWwiLCJMb2FkZXIiLCJtb2RlcyIsImdldFRoZW1lIiwibW9kZSIsIm1lcmdlIiwiYmFzZVRoZW1lIiwiTGF5b3V0IiwicGFnZUNvbnRleHQiLCJ2aXNpYmxlTG9hZGVyIiwic2V0VmlzaWJsZUxvYWRlciIsInVzZUVmZmVjdCIsIkFPUyIsImluaXQiLCJvbmNlIiwiZWxlUmVmIiwidXNlUmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlT2ZmQ2FudmFzIiwidGhlbWVEYXJrIiwiaW1nRmF2aWNvbiIsImhlYWRlckRhcmsiLCJmb290ZXJEYXJrIiwiTG9nbyIsIndoaXRlIiwiY2xhc3NOYW1lIiwiaW1nTDFMb2dvV2hpdGUiLCJpbWdMMUxvZ28iLCJNb2RhbFN0eWxlZCIsIk1vZGFsIiwiTW9kYWxTaWduSW4iLCJoYW5kbGVDbG9zZSIsInRvZ2dsZUFwcGxpY2F0aW9uTW9kYWwiLCJhcHBsaWNhdGlvbk1vZGFsVmlzaWJsZSIsImltZ0YxIiwiaW1nTCIsImltZ0YyIiwiaW1nRjMiLCJpbWdGNCIsInNob3dQYXNzIiwic2V0U2hvd1Bhc3MiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJlbWFpbCIsInBhc3N3b3JkIiwidG9nZ2xlUGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJBdXRoU2VydmljZSIsImxvZ2luIiwiaGFuZGxlQ2hhbmdlIiwibmV3U3RhdGUiLCJsb2ciLCJpZCIsInNpZ25Jbk1vZGFsVmlzaWJsZSIsInNleG8iLCJNb2RhbFNpZ25VcCIsInNob3dQYXNzRmlyc3QiLCJzZXRTaG93UGFzc0ZpcnN0Iiwic2hvd1Bhc3NTZWNvbmQiLCJzZXRTaG93UGFzc1NlY29uZCIsImVtYWlsMiIsImxhc3ROYW1lIiwiYmlydGhEYXRlIiwic2V4Iiwic2V4TGFiZWwiLCJpc1Byb2Zlc3Npb25hbCIsInRvZ2dsZVBhc3N3b3JkRmlyc3QiLCJ0b2dnbGVQYXNzd29yZFNlY29uZCIsInRvZ2dsZUlzUHJvZmVzc2lvbmFsIiwicmVnaXN0ZXIiLCJoYW5kbGVTZWxlY3QiLCJzaWduVXBNb2RhbFZpc2libGUiLCJEaXZTdHlsZWQiLCJDbG9zZVdyYXBwZXIiLCJDbG9zZUJ1dHRvbiIsIk1vZGFsVmlkZW8iLCJzZXRMb2FkaW5nIiwidG9nZ2xlVmlkZW9Nb2RhbCIsInZpZGVvTW9kYWxWaXNpYmxlIiwiTmVzdGVkTWVudUNvbnRhaW5lciIsInByaW1hcnkiLCJkZWZhdWx0TWVudUl0ZW1zIiwiTWVudUl0ZW0iLCJkZXB0aFN0ZXAiLCJkZXB0aCIsIm9wZW4iLCJzZXRPcGVuIiwiaGFzU3ViSXRlbXMiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJzdWJJdGVtIiwiTmVzdGVkTWVudSIsIm1lbnVJdGVtIiwiaW5kZXgiLCJPdmVybGF5IiwiRHJhd2VyIiwiTG9nb0NvbnRhaW5lciIsIk9mZmNhbnZhcyIsInNob3ciLCJvbkhpZGVPZmZjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsInJlbW92ZSIsIlNpZGViYXIiLCJzaG93U2lkZWJhckRhc2hib2FyZCIsInRvZ2dsZVNpZGViYXJEYXNoYm9hcmQiLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsUHJvdmlkZXIiLCJzZXRUaGVtZURhcmsiLCJzZXRTaG93U2lkZWJhckRhc2hib2FyZCIsInNldEFwcGxpY2F0aW9uTW9kYWxWaXNpYmxlIiwic2V0U2lnbkluTW9kYWxWaXNpYmxlIiwic2V0U2lnblVwTW9kYWxWaXNpYmxlIiwic2V0VmlkZW9Nb2RhbFZpc2libGUiLCJzZXRWaXNpYmxlT2ZmQ2FudmFzIiwic2V0SGVhZGVyIiwiYnV0dG9uVGV4dCIsImZvb3RlciIsInNldEZvb3RlciIsInN0eWxlIiwidG9nZ2xlVGhlbWUiLCJpc0NsaWVudCIsImdldFNpemUiLCJ1c2VDYWxsYmFjayIsImlubmVyV2lkdGgiLCJ1bmRlZmluZWQiLCJpbm5lckhlaWdodCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwiaGFuZGxlUmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk15QXBwIiwibWF0Y2giLCJodHRwIiwicG9zdCIsInVzZXJuYW1lIiwibm9tYnJlIiwiYXBlbGxpZG8iLCJmZWNoYU5hYyIsImVzUHJvZmVzaW9uYWwiLCJwZXJzb25hIiwiZmVjaGFfbmFjaW1pZW50byIsInVzdWFyaW9fdGlwb19pZCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJhZGREYXlzIiwiZGF5cyIsImRhdGUiLCJEYXRlIiwibm93Iiwic2V0RGF0ZSIsImdldERhdGUiLCJicmVha3BvaW50cyIsInNtIiwiZ2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsImRlZmF1bHRDb2xvcnMiLCJwcmltYXJ5SG92ZXIiLCJ5ZWxsb3ciLCJhc2giLCJncmVlbiIsImluZm8iLCJiZzIiLCJiZzMiLCJiZzQiLCJiZzUiLCJiZzYiLCJiZzciLCJ3YXJuaW5nIiwiaW5pdGlhbENvbG9yTW9kZU5hbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTs7QUFDQTs7QUFFQTs7QUFLQTs7QUFDQTs7QUFFQSx1QkFBd0M7QUFDdEMsUUFBTUEsR0FBRyxHQUFHLDZCQUFaLElBQVksQ0FBWjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxnQkFBTSxXQUFOLGlCQUFNLEdBQU4sU0FBZixJQUFlLENBQWY7QUFFQSxTQUNFLENBQUNELEdBQUcsQ0FBSixRQUFjQSxHQUFHLENBQUhBLGFBQWlCQyxN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bUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsZ0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZGVjbGFyZSBjb25zdCBfX05FWFRfREFUQV9fOiBhbnlcblxuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCByZXNvbHZlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQcmVmZXRjaE9wdGlvbnMgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWY6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCB1cmwgPSBwYXJzZShocmVmLCBmYWxzZSwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gcGFyc2UoZ2V0TG9jYXRpb25PcmlnaW4oKSwgZmFsc2UsIHRydWUpXG5cbiAgcmV0dXJuIChcbiAgICAhdXJsLmhvc3QgfHwgKHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdClcbiAgKVxufVxuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBGb3JtYXRSZXN1bHQgPSB7IGhyZWY6IHN0cmluZzsgYXM/OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBtZW1vaXplZEZvcm1hdFVybChmb3JtYXRGdW5jOiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4gRm9ybWF0UmVzdWx0KSB7XG4gIGxldCBsYXN0SHJlZjogbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RBczogdW5kZWZpbmVkIHwgbnVsbCB8IFVybCA9IG51bGxcbiAgbGV0IGxhc3RSZXN1bHQ6IG51bGwgfCBGb3JtYXRSZXN1bHQgPSBudWxsXG4gIHJldHVybiAoaHJlZjogVXJsLCBhcz86IFVybCkgPT4ge1xuICAgIGlmIChsYXN0UmVzdWx0ICYmIGhyZWYgPT09IGxhc3RIcmVmICYmIGFzID09PSBsYXN0QXMpIHtcbiAgICAgIHJldHVybiBsYXN0UmVzdWx0XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZm9ybWF0RnVuYyhocmVmLCBhcylcbiAgICBsYXN0SHJlZiA9IGhyZWZcbiAgICBsYXN0QXMgPSBhc1xuICAgIGxhc3RSZXN1bHQgPSByZXN1bHRcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0VXJsKHVybDogVXJsKTogc3RyaW5nIHtcbiAgcmV0dXJuIHVybCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCkgOiB1cmxcbn1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChvYnNlcnZlcikge1xuICAgIHJldHVybiBvYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQ8TGlua1Byb3BzPiB7XG4gIHA6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTGlua1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQWVDQVlBQUFBN01LNmlBQUFBQVhOU1IwSUFyczRjNlFBQUFEaGxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQXFBQ0FBUUFBQUFCQUFBQUhxQURBQVFBQUFBQkFBQUFIZ0FBQUFEcGlSVS9BQUFCTlVsRVFWUklEV05rMkZEeW4yRUFBTk1BMkFtMmN0Uml1b1g4eUF0cUZrckNscE9KaGFGSjB3TnV4SXNmbnhoNjd4NkM4L0V4S0xLWWc1bVZvVVRGSG03KzVVL1BpYlo0NU1YeHFJL2hDWVhXak5HZ3BuVUl3ODBucWdCSmtqTmwwT1FWaDJ1YStlQTR3NTJ2YnhtNG1kbmdZaURHbHorL1VQajRPRVJack1BbGhGSkNzVEV4TXhSZjJjd1FMcTJQWXZhK04zZFErUGc0UkZsODRNMWRobHAxRjdnNWVVbzJEQ255Wmd4Y2FEN2U5dkk2WEEwaEJsR3Arc2piK3d5cm4xMUVNUXZaMG44TS84RWhjT3pkUXhRMStEaEUrZmpYLzc4TTRhZVhNRnhVZTg0UUwyZkNvTUl0ek1BSWhKLysvR0E0OCtFSnc2UzdSeGcydnJpS3p4NE1PVVp5V3BtOExPd01ZbXc4RFBlK3ZRWDZsVHhBbEkvUmpmNzg1eWNEQ0ZNQ2lJcGpTaXpBcFhmVVlsd2hRM1h4a1JmVUFMZGNUaUhGOFVtRUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9mb250cy9mYS1icmFuZHMtNDAwLWVkMmI4YmYxMTcxNjA0NjZiYTYyMjBhOGYxZGE1NGE0LnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9mb250cy9mYS1yZWd1bGFyLTQwMC01OTIxNTAzMmE0Mzk3NTA3YjgwZTU2MjVkYzMyM2RlMy50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvZm9udHMvZmEtc29saWQtOTAwLWFjZjUwZjU5ODAyZjIwZDhiNDUyMjBlYWFlNTMyYTFjLnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9mb250cy9hdmFzdGEtNDBhMTA4N2VjMGE5MjA4OTVkMDRmNzc5MWY2OTJlNWUudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQUFBWE5TUjBJQjJja3Nmd0FBRGM5SlJFRlVlSnl0bUhsd0hGZWR4Ny9kYzgvMDNET2FHY215TGwreTVVUEdNV1JOd0M1U0RnRzJOaVJWVk8wZmdFS3g3TUVmRmxtS0txaGlFVlVMWVdzWGJHTnlHMnduVkFHQmxKM0UyVGhKa1pnWVl6dHlJc3V5WmNtT0xJMmxhSFJMYzAvZi9QcVkxaGliSTBDWDNxaW5qL2MrNzNkODMrOE5pNy95RUs0K3VVVVlPcmhISEQ1NGxGcWZPUHlVcWpWaDZFbHFUMml0VHh4NjRpaDkzNk05KzllT3c3NmZoOHRYSG1zbWlHOUp3d2RIR1pYcFl4aDFIMTIrajlvV1ZlK0tBY013MWNmcG1uYVBubEhVUG1IbzhWSHh5aFBmMHZyNHV3T3FvNGRDWkpHOU5zWTJxcXBLajZxcXpkUkFmekEvQ00zNER3UHpEM3ZRL3BycGpSNGJtRkdDM2F2MjdRMzlYUUQ1NFNmdUUzbGhsSWJzTmdBWUU4TUFXbVpVcTVkMFhBUFQrSzhQdzlSQXErZ1dQWjVSZnZEUisvNG1RRzJtaktvZXBkT1Flc3RkQnJMRW9GeVV3U2dxcEhQdmdlK2J3dEp2UnlEUEZNeUpWQUd0VjZxQUlMZUg2T3RSWWZEUnZlOGJVTzBqbDE1NS9CQVVzcHBsblpzUk5ldmtSUlkzbG1SSUI2N2cramRmeHBrSG44SHpYenFFd1g5OEJ2bVhMMnNVWmlOTGoyZHVDMEM5ZHZPWGYzVG9mUUdLYm40dnZkbWx6N2lXaXlBVlR5dUUyRDBRSW5kamdaY1ErWiszTWZxck04alBsMkJuWGRnUWJNVlNXY2JzTjk2QTBqK0x5dE9ub0w1MEhFdGZmUkx6WDl3SC9wVmUxSVlIVkprZzVDN2gwdDdiUXQ0Q0tBdytybVZtMXkxeERnZWs4RDFRd3R0aGM0VmhrejFvZW5nTWJIb0oyWVVaaEd4K2VCa1dLMk4xU0RZMlkwbktRMzF4QnZDb0VGOStFODdaUENLWktiaWVlUUVZZW92Z0ZCckNhTHAzRkxWTEdQakJ2ajhKcUFjdGd6MVd0R3N2TTBZSHNuTWQ0QXpDcmlnRUp3RTJ1dVd3SWJoMVBZcDJCMFNKUnlBU2dhZGtCeXN1UXJGelFHOFpaY0dOaFhFYm5Cd0hJY2hCa2lrNGZ2VVNtR0lPREZtUDBkVkExZTFKQ3JHSHYvaC85OTBXVUV0N2htVVBMZnRVdFVKUFViM2duUTFRaFJKa1JZWXNLeEFMWmJDQ0JINTBIRkduSDlOU0ZzaVNOWXVUQkpGRE5zbWpkNllmbWNkZWhUckhnNDBLRUdVWnFvT0c5QWZCRkxKUUZSMUtielhIb1ZvSnNnQkZsN3VIbmd6VndsV0RuR0VLWVBrMHpseDZDVSs5ZGdERnhXbklqSXFwZWhIU2RCYUoraFk0N0VDeE9BYysveDdtSzhBbTEyYllBZzVjWGhEQitWemdKM2hVSm5KUWN3UXBVcmNYYjlBWXNtNjk2cGltUm9WRXU5eHpFNkN1N3JwcmF3OUQ4elFYc0txRXljd1pQSFIwTDM3UmZ4eDhaUTZsM0RoR3VGbjgxRmZDbEplc0VLaEhKaDVISmxpSGFNTmFPQnVDR01qT1lYdDlCeFJiSFBiMk5oU2NYZ2hoSHdvVEl1UTcxaStIRVpSbEdXVTBqMkZQdWUvaFpndVFWWlN1WlM3VlVoUWpSbWlXRkhkSko0K08walNFK1FXOGZ2WUVIdm41RC9ETDNQL2pJTk9MTDgrY1Jab3RZQVhyaHhLSklsTDBJWGR0RER1Y3JmcG9VMklCVDErWVJiRGtnSkF1NHZxbE1vU0tZTVNkaVVrRDFSaUdvRmw3MTdLTEdlYnpzSUxWZUdnNWdJMFk4WGc0dEFTVENKRkxENzd3VXp6M1lpOFdDMjRVU0dwR3BCSytiMC9qSi80MFBLdkRlR1BtTjNnOWN4bnA3QmhHRnkvRGt5cmlibThSdmZrS0xwWlVySWk3NGVCY05BeUJVRXhEVVphMWxxNHhpcGJkOHVkMVFPSHlJMXFsMFd5Z3lUVndTazJNR09kZitOUzlxT1Fsek05TEtORDFOOTRxZy95R0xTRWZIdXhJNElHUHR5QzNLZ3YybjFMSWJ2SGd0Y0EwN0lFOEZxWnRPSjEzSXN4SVdPdDNZWEFpaTF4UlN4TFpNSURaUC9TbUdIYWw5VjdvKzg0V1ZtSFVuWXdaYjBhVFRWUFhyRXZhVE9ubGhsZ2NLMWZaTVU4YVkyZHRVT0pPckZuTllWTjlBTExiQTBjd2d1WjE3ZGk0ZFROMjdPN0U3byt1aER2Q2tvaFgwQnpsOFpyWGhsR2E0RUFEY09Ea0VVeFJzaWtVMzZyZVpEb25ZTWdHTURYNjNNa1N4azdWZ3RFOGJxL21zV0U5eS9VS0xrNVBveFJjZzJDVTlJeVhFUzBCTytyOWVPQ2pIZmpZN250UThjU2hVcEtFMW15RzRFOWdJUnhIWDlNS3ZINVhGTWMvTG1Dd1U4SkQ5U1djYkJlUm1XRng0TlNqQkRrSVJpS1hrZ1F4cEsrRzlCaVJxYkNNQnFnMlZkZEwzWHBtN09sV2cycTVnQVFRWjI5TXdoT3VROFR0aGtkU3NZdHpncC9oOFYvUDl1TGNoU0c0N1U0Z1B3VXB2d0N2MjRFTi83QUxHd25jWm92aHZYTVIzSG0vRjRzZU94Wm9ZaTJ0UERwWEovSDh4Uk1VZ2lJTlo4RHBvSktrajhlS1VoTkxNRnNNNTlJRjFXaFc3S21tRHVxQkxPT3pIYXZ4bWJZWWZ2YWxEK09CTmorMnI0cGhPMzEvOEs0MWFHOXZweFZqaEhSd0VUZjZUdUhHeUhXY085dUwwdlFVdHJkR3NOTHR4ZUZIQkxnNE8wWXlIa2dNaHhKZlFVT0t3L0RDR1RQdXFtTWJ5VU1NVzFnamE0eWt1RlVIemFZWXJuYlI4clo3WlJ4UnJ3dmI2bjFJK2gxb1RjV3hOdVVETzNrZWJINEMvT3c0Z2FZaDhrVjRBeUVjZitjcXpsNGFoNThsUDVSc21DdTcwZExFSWh4UFluQVlHTGlheFhoaEZMSW82RmJVczFwUEdtTnNkamtScXZHbVdLdWRhaFduTUxUSnpMb0tuVXAyRmo0N2czRFRSb1NvMlJRZVRXMXRjQk1VTGRGVU5IalJvR1R3aWZZd05xems5QUdMb2dvdkpVUXFRdUFucjJMMTZoWUUvV1RCNFlLUktKQnJ4amZpbnJYaXJHcGVNNHVxbVF0cnJWeXVwbG10N0lyNVVTcFVNSFd0SDNQWHptUHN4aXltcUdMSjhYWUVnbjVJQ2xtM3ZSUDFzUmdTaVFSbzVhWjZpR3FNaW9yZm5GL0N5RWdBQ3hNMmZIREZldXhhOXlHd0xHdHRINkM3MlJpYnhsTDZqYlNXelRoZ0xIcGQzYTJYbHJQYVR0OWJrd0ZNTDRrWXZENkpxY2xKcEpJeGhGZTB3VWFWemZoVUZqNFBsV2VsUEp3dUgyYW1xQzZrcEhwb1J5TjJyL0lqRVhWQmRCSmNheU0yMVczQ21ybzJJM3N0OVZBTThWYmtmbFpsbExIYUNrWXZyL1E2alRGZ0xYZWJacWVPRkhLMW13QUNwSXVSWkF0c2JUdmhqSGRBdFFXd1ZKRGg1YnlZbTM0UEk4TUR1UEh1SUc1a2xxZ1M0aEgwQWQvNDNGWjg3QU5KL09ldU5teHJpRnRKb1l1Mm9pd0x0OTdVTVFwZG5JUzVaVVFWaXI1WHRXOVpnc3lhemNndWhHSStGUGt5ZkQ1NlhoQ1EySDR2MnU3L04yeTcvNHRJN3ZnTTNwMmhoTWlKZUhjeWg0bGNCU21TcEpiT09yaGNidnpybld2eHp4OW9vWWtxZWxPcldtdjJYYTF3S0tCT3NxUXpKMnNocXN1YVVhZ3FlZ2FydFVsa1BoT2txb1IxVVQxWUtjQTdQd2pYWWdhRjN0T1kvZDF2TVRuUWo3YUdDR0oxZFpndFN1allGTUluUDdzT0RXMFI4cHFNa0pPS1dnYm1jbHB0WnYreWJJMmx5QVRvM1BDMUN3U1JOcEtpdW1pajFxK0djTmNtazNuRDVsQXBVYkswQlZBeDhzNEpqQTMvRGlORHAxQ2V1NG9LcStEdFN5TVlXeXhUdG5yQitaMmt2YUt4dEpscVVGTURXa2QxZDBwMzA5eU8vNzFRbFpuRHl3K3FlbkpvTTJKdVNoQlo3OWdRYm1QRzViS0N6R3dXSG44SWRRbXFBNzBNL0J5OTUvRmdZQ2lOS3hrcUNpUUJ5WVRmaUMvZHBaSWV3OVpDY0RPZkdmZjYySWNCczl5aU9EaGN6VnhEWW1SOXlkR0YwMXJNYXpzemdGMDJHeWJuUlp3NGR3M3BpVW1xY21aeGZTcVBNNE5UNkJ1bG9wYlc2OGFJQ3phU0VNVktBblBDMWRpejRseXhNbGlMUzBtUTlsbUFuczZ2ajlHTi9icnVhVkN5QVFVVDFyQ2UwUmxURFFOTm1DUVpIYXNTR0o4djQ4Q0w1L0dkWDV6R3MrY25jWjIyb0FHM0U1MHAwa1BTdlRkUFp6Q1J6a0lVUmQwTHVoWE43R1hWNmhpd05rL2tvdjNoWGZ1V0xFRHRjQ2xpRDYwM1dXbzZIS01CVmp0U1RCZnJFekJtV2NpVlVDQkpTU1dqMkxZNmdTME5ZV3h0akdGZElvZ05xU0Iycms4Z1FYc1NpZllmMXdlS3VIaHFCcjkrZGhoblg3bUc4ZXN6ZEoybkpKQnFzbGcyZFVMSktoTGJVK1d5QUpuT25pVlpsYnRVdldCVmxtWEZldG5JTHBrcWphdjlZM2oxbDIrREZ4azRuVlFUdGlTeHZ0R1BqUzFoZERSd3VMTzlEcTFOY1hpcC9ndVFJSytNZTdCNWJRcWIxaldEZ3h2RHB5Zng2cy82TVBqT0tDa1VyNHV5b1lXU3RtdnNxbHJ2SmtEdDhHMzc3Mk1xcFAxR0hKaEpVWlVaT21ZbVp2SG0wYk9ZdURJRGw4T0RhTWlEVXJtTVlJQkRLaEZBUE94Q2ZkeEg1Mkc0S0ZGYzVPWW1LdTg1cndOY0tJeDRReE5hMTZ4SCsvcFZhSWlFTWQ0L2krT0h6bURncld1UWVRMVUzaC9iOWRpeFdxWmJmbG53YnZ0ZU41bitTRzBRTDA0dm92ZVZQbHo4OVNXRWZMUlVhUmtiRFZFTDZHN1Nubk5Ualdpek1RaUZPUkp2THdWNUNWNmZBMnZYSmxIZkdJY3Zrb0F6RUlXVE10N2w4cEtPaHRGSTExTWhEdW0zSi9IQ2owOGRpZDc5VlBjZjh0ejJ0eG1oSW5VWGxuSkhMcnpaajVlZU9vRXp6NTJEdUZCR01sVUhMaGlGeDh2cDlhUGZIMEFpbGRKL3RBeEhZd1RHd1c2M1UzeUo4SEVCTkRZMUlVeVc4bmc5NEduVlNWOGR3c2hBSHlxVk10eStJTzNmbzBnMDFLT3BPWG5rWDU0YjZib2R5MjBCdFJoSTNQdGsxOHhnWm4vQTQwVzBMZ0tIdzRGaW5oSWpuMFUrbjBNZzROY2h2UDRncmN0ZXVMMCtST0wxSk1oaHZRN2tRdlNPMjRkS3FZTE0yRGl1WGJ4TWJpd2p2cUlKMGNZMThDY2F3Y1ViNEEwbTl1L2FlK3EyY0g4VXNIcmMvL1RsYmk0VS9UUlpMV3R6K2lESURNR1Z3UmNMVkJCS0VLaDZMczFOa1NwUXFqSXM3T1JtaGtUZWJxTjlqV3pFYnpTNUVtczMzNEYxVys5QVhXTUxWZFJCYmM5THpaRlZHZWVuTjM3MThDMXUvWXNCdGVNakQ3OTZ6TTNZbSswT3gzNlh5MFBXOGlFUVNjTE5SV0VuYUJ2dFE1dzBxRUxBUEZsWHE0RlZKNEhTYys1d0F1NWduR0l2QnJ1TDA4RTBXUkZGWVgrQjVadlgvOGUrWTM5dS9ML29OK3JPbm1OTGQzMzNsVzZIeTlQaUN3Uys3UXZHMDk1Z0RDNEtlRHU1VWF4VUtHNHJsQmc4RlFFc1pLRkN3TWJLb1pBUXFxU3RKTTVwVldXK0xaVXFMUnUrL01QdXpnZVhwZVJ2QnF3ZXU3NTNZbXhIendzOW14ODYyTXdYODUxQ01mdVYwdExjODBLbDNLK0xycXA1WHRLMVVwTEsvV0lwOTd4VUxueEZMQlE3Mi85OVgvUEdQWS8yZEg3OThOajdHZlAzcTVaSExkZ1BSYk1BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVlBQUFCSENBWUFBQUM2Y2pFaEFBQUFBWE5TUjBJQjJja3Nmd0FBQ1JOSlJFRlVlSnp0bkh0UVUxY2V4LzFyaTlOMW5OM3Q3TTd1N0IvOW8vL3Q5SS8rNGN6U2h6UHQxcjVrSzRxNnFKMFZpZ1ZSVkt6WXNsS0JjYXVnUzEwZnRWbTNncTYxREttaVFBcytrQUkrV2lIaDRVSVVFU2lJZ0FudkpEZnY1THZuM0hzVEZSSTRON2xKY0pidnpHOHV5WkNiZXo3NXZjNjVqemx6UkFGWVJDeVZXUGIvcWRHeEw1cnpDSkJuaUtreEs3Y29pMmNvR0VXNGoyUUdTa0hCZElmN0tHYWd1aWtZUzdpUFlnYktNaWZjUnpCVE5RdkdoMmJCK0ZCWXdiaGNUcmpnRUxhOE9SNXV5ZnNPOG5lNEZESXdMcGNMVGpKUW0wR1BZZFUxM0R0MURHMDVHZmp2bG5nMHJvMUczY3EzY0dQNUl0VEh2b1dtOTVlaFpWc2k3dXpMUXEveU9FYWFWYkNiak9UekxnSXNOQW82R0RvUWkzNE0vZCtkZ2VadkthaGI4Z3JxRjBkQ3RmaEZmbHZQYjcxWkpOVHZ2QWpWTytML0xmMFRibWVsWWFEcVBPeG1Ec0ZHRkRRdzlMQ05mZmZRZVhndjZtTmVZNFR4dUtrbWdCTGVld2tOc1cvanAvOG9ZQmtiSnVFV0hFQ3lnNkZad3pJMmhrNUZIdXFYTFBRQVVUSENZRGZpVVNzWG9iZjRLOWh0OHJkaXNvS2hlVVI3NVRJYTFrVEpER0ZxdTdscExmUmQ3WUNNNFNVYkdJZlZnbzVESkd5aXFIZXdoNHRzdHV4VjlGOHE0NnVhSEpJRmpIbGtHQzFwU1Y3eVFvaU4vQ2cvSFQ4Q2g5TVI4SmdDQm1QV1BjRE45YXRSRjA0Z290RWZSWk9kQnJ2VkZqNHdmQmtlR2NMTnBOVmhCK0tCa3ZraGJCWlR3RkFDQXVPd21Fa1R0ZzVTeW0vd29FUkM4OGxXMHQvSUE4VnZNTFFEdlh0d2o5LzVSQ1VPaG03cmxyNkc1cVExdUUyYXZ6czdVM0hyNDJRMHJWdEpHc0dGVE5CcEE5aTZZek5zWnFOc1VQd0NRenRPYmMwbHZ6ekZEYkxocjB2UVhYQVlZNXFieFBNc1loZnI5SHdEUDNYZ0RCaHByRVBua1R5by92S0d6eCtoTlQwRk5wTzhVS2drZ3pHVHZLSmUvYmJZcWt1RDBraUE5RjhvaGRWcTVodEJGbEZvVnFNZVBZWDVVTVc4THU1UDhMYVdqemZBeXVrbEQ1cEZrc0RRRU9vNGxDczVoT3BJR2IxN1lBOFo0SGhBTFJoSHBoZ3RXeE40TUsxcDYyRXpHZ0xZMjlTU0FNWUZRMjg3aWYyWEpYbUw2dDJGR0RoZklrdmpSYUhhU2RYcE9ubVU5NkpnaWgyTXk0SFJsblZveTNxT2VFQWtFeHpWbjErQjdrcWxiTjJvVzg0Z1RSd2ZGVE1ZdStVK2RMWHpvYXVlaXg3Rjc2RmF1bURxOENIV1Y2cUVuUE9YVUlvUmpCUDZubjNRMVVTUWl2UVV0TlVSdUgvNmwyaDY3d1c0MTAwbUpscTZDQ1czcDRSU1RHQ2NManNHVlFzSWxBZ2VDalVkc1lFTFQ2Tmx5eDhtaFpVNjlnMSsvdlFraXdtTXpYU1hRSG1hQUhsS05EY2MrdmRjdE9jOEMxWFVIejNWcXZmMFNiNFhlWkxGQk1iWWx5OUNpSmhzSkxSMHhIcnlmdzExekFLb1Y3d09PeGU4TWhvcU1ZRVpiMHZ5RGtVTUtiZjFsY3hIejllWmZ1Y1drOFdCY2M0QmZaQnNuTFBEWnFkTEV0TVhCQ1l3dytwSW4yQWVnMFE4aHh1cXdNUDJYcHJ5UzQySXp4b25aZ2lLdlUrczZnWW5GeGc3dEZkL3l3UkdXenNQRHNlb1gxQjRNQ1ZteEdkeWlNc3lCc1hpTTQwNFZTRVRHSWR0aU9TUm56K1dkSDNaVU4zelRGOGFMakJyczQzNHZJaHRhV0lhTUM3WXpSM2l3SDJEMFlsSmVLUTV5bThvb1FBVGw4VWh0OEFJV1R6R2F0Uk1DOFpkblVZMXEyWTRHQ095Rld4TEZBeGdXdG55eXhNQ1p1Y1hNb0d4bXpxWXdZdzBMNTd4WUxJVWJEMFdXL0t0bmlma0VaOG1oTm5nRFpwOC9lOTRRd0ZtOXpFS1JwWnliWVAyMnU4OGs4ZXB3R2hyNXNGcEgyTDZZbThxOElEeDE2YXBTdVIvRG40dFUvS2xHbGEvekZDdWhha0JOL2l0MzJEeVMweGlNMlprTmhZZ2oxYWxFMld5TlhqQVdGdXlHRXBUbGV5NTBGVDlDdVhxWEwvQmRQVlpvZExZSlp2eUFzZDdBd3VZaXF0bXNJUTcyeVN5LzRSblB1UzloNGxBN1lWbnNlV2J4VWc5c3dxY05iakxqaE5WWE1ub05TUk1tKy9JMHVBSnNwbTcrTzUzNGd5YnZuNVFNeGVGM3o2UDVLSjNzYjRvR3V1VjBhaG9VUVkwVUNtaVp4RXlqaGlZUW9xRzZhaWU3ZlF0ODBMVkVKbEl1anRjcmVnbDNkL1BSOTY1bHdnVUFxUm9xY2UyRnEvQktEY1UwSURaNU1LZGJyTVlSdE9CNFpCK3lFQ0NTTWJaTlpYaDNuNWhCYTlHQ0orbXl0OWd4K2szQlM5NUJJcGcwVkJjMlVPQUJuN1ZnVys1K1Azbm5tRHpGdm8vcDhyWlNqV1ZoTVh3Zm1pdi9BS0QxVC9EeGZQUFlaTXl5Z3VRaDVaTTdLS21tUGxBcElwZTFWbmJ5SW1WaWMxdWRWcVo5ODhNaGk0K0RkM2FnUHl5RnlhRmppL2JXTFFjMTd1cUVFalQ1K05vME5GclFlSnV0N2RNSDBiYi9tbUF3OEYrSEpKT3VHbkhlNUNpWE1FRXhSMVNHNVF4cUxwZEt0c1pBeEpBdU50clJrcXVYbExIVzFacjRyMk1WUkxQWGJ0UXFENHFBY3hEeTcrZUI3M1ovMFVzS3FmTGh1cW1kaVQrM1NBSlN2SnVJL1NjWGRKM1NUNnBiN0NNNDZPU2VCOUpkMnJiZmpZT1ZXMmxNTnZadWsrM2FGVzhQZENFZlpYcFpEOHhTRGg4Q25IWjQ1NHdtUTdNMlNxTzVnSko0L1RyK3BqR2U5Zjk4aG9Qb09KNEZLcU9RdFBmQ0pQVklGNDZUME5OdUhTZW5ucXgyRTNvMUxXaG5QUkV1eW8yVDlySEI4ZDJJVzZYZGxvdzIvYnJZYlpLTHdEK1hWRkZEcHdPTENrQU9OU1NTRE80c1dnRk1zbytRTTZsTk9SZDNvR2NpOXZKNnlTU3kxYVNabEdvYmo0L2YzSUQ0dmZjOHVJNW5LZWhZKzEwNVFGRFpITllrVmVWRVJDWWlZbmFyODhWcmtMQ1o1V1RxaEJ0K3I0cUh5Y2VLQzIzQkF5R3ltQVp3Kzd6cVRMQzhRZG1OSjkzMW4zeGI1SjN4anhROWhZWXhITkkvaW5BeTFsZEdEVU40MU1LUitubkx5NkxMZU8zaVFVWmlOL1ZqMnlGSGdhVERZRTBsekpjQU8zaUs5V0Jxc3pBUWtLbVVNd3R6NEhleU43aEJoR01JSnZUaW04YXZ2VDhldUVBOCtXMWY4QnM0MlFaajd3M1daQnkyM0svSGp0S0UwbkZDUjJVMURPeHFHbi9UdFpKYXhEdVYzTEJaRFBpWE5NSmJENGR5eDk0b0dYZFcwNXhnLy9YMVZ6b0RBTVE4c2tNdlB2RW0wWTRIYzQwSE1lSHhlOTVUWmIraGt3SzZYMG9rSzdCdHFCZHRSV1NleUxOcEl2OXNmTjdmRjc3cWNlTG1LdVlVb0N4VWJrY2V5cy93a1hOV1F3Ykh3VDltRU40RjYzZzVoYTdHZTBQV25CSmN3NG5manlJL1pjL1FWWjVDdEpMRTdDZHpNSFN5eEtRWGJFSm4xM2VpWUlmRHFDOFZZblcrdzB3a3NvbkxGK0U1bUxITU4xZTdQTE1qY0F2QlFoekplRmRweGdlRHY1MTZPNmJmVnl6TjZUNzBDd1lINW9GNDBPeno0L3hydTdaSnc1NWwyTDJHVldUSlR5amF2YXBadDZmYXZZL1pOcWx4Z3JiamtNQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNVQUFBQWxDQU1BQUFEeVFOQXhBQUFBTTFCTVZFVUFBQUQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8rM2xlS0NBQUFBRUhSU1RsTUFnRC93d0dBd24xQWdFTENRNE5Cd2hzaGl2QUFBQUlsSlJFRlVPTXZsenpzU2d6QU1SZEVuL3cwazBmNVhtNWtZWnl3UVdEMjNVWE9LSjBUUGwvbUl2WTUwMWhYZk5xaEFha0VxZ2hvOVIxWG5acXFkYkZMOElGWG9YRGdxWWkycHRzQlQxYktwajFNVHlpZm9qZXE5WUs0eTlwSTdWdjhxb3FmOEdwc2FKNjE4THYvVU9LbndSUkJWSjlzVXBSUzlSU0c5TEFyTGFsRUFtUlNLaDZYMEJXTjBISi9DOG5GMEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVnQUFBQklDQU1BQUFCaU0wTjFBQUFBQVhOU1IwSUIyY2tzZndBQUFadFFURlJGQUFBQS8xZGUvbHBmL2xsZi9sbGYvMVZWL1ZsZi9sbGYvVnBmLzFwZS9sbGYvMXBlL2xsZy9sbGYvMk5vLzM2RC8yZHQvOFBGLy96OC8vLy8vMnR4Lytyci8renMvMnR3LzFwZy85ZlkvK2ZvLzN1QS8xbGYvM3QvLzVLVy8vajQvMjkxLzF0aC82dXUvNW1kLy9MeS8yRm4vMTFqLzZTbi81eWcvKy93LzE5bC8rL3YvK3p0LzZHay81MmgvKzd1LzE1ay82Q2ovNXlmLys3di8xbGcvM3ArLzVhYS8xeGkvNkdsLzRHRi8rUGsvNWljLy9Edy80YUsvL2YzLzlQVi8rZm4vNldwLzhuTC8yTnAvL1AwLzQyUi8rM3UvK0RoLzZ5dS83L0IvNnl2LzRtTi8yVnEvNjZ4LzdxOC83VzMvNXVlLzlUVi8zNkMvL3Y4LzNSNS8vdjcvMlJwLzhyTS84REMvK0xqLzZXby8zRjIvLzcrLy8vKy8vSHgvMkpvLzdXNC84L1IvK2JuLzdpNi80eVEvNGVMLzRTSS80YUwvNHVRLzJWci8yQm0vNzIvLzIxeS8vdjYvMkJsLy83OS9tdHcvOURSLzlyYi82bXMvOHZOLy9yNi81U1kvL241LzlEUy8yRm0vMnB2Ly9YMS80T0kvMkpuLzluYS8yOTAvNTZoLzluYi8yNXovMzJDL1ZoZy9WcGcvMXRoL1ZoZi9sbGVzT2NqTlFBQUFJbDBVazVUQUVuTjcvOERodjZEUWYxRXVPai8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9pSUFxbk9DSUowU2JBQUFDdlVsRVFWUjRuTzJZNlZQYVlCQ0hvOFphYitWWEVOS0lnbWVwQjNnaGl2SFdXdkJBUVVWQnE3YTJLbDRvM3JldCttZjNEVEhnaDRRQmtpL3RzQit5dTVuWkp6djc3bTR5b1NncUt6dUhWaVE1MlZrVVJlVyt5MU9HNFNYdmZTNlZyeHhEcEtDUUtsSUZSQmRSeGVxQWlpbDFPRFNkQVdWQUdkRC9CeW9wTFMxUkFWUldyZ0UwNVdWS1FSKzBnRTRIYUN1VWdmUUdNQjladHBLQlFhOElaRVJWTmErcnEyQlVBakl4TUF1V0dZeEpBYWdHdFhXQ1ZWZUxtdlJCOVZvMGlIWUR0UFZwZ3hyeHlTTGFsczlvVEJkVTM0VG11TmVNcGtRcEpRSzFvTlVhOTZ5dGFFa1BSQkt5dmZWdENWTktBR3BETzU5UVIyZFhWMmNIbjFJNzJ0SUIyYlhvSnNyUkF5STlEbUoyUTJ0UEE5UUxKem15UGcyNC9uNE9tajV5Y0U3MHBnNHlEV0F3V3VHaFlab2VIb3JXZlJBRHN1MHRDekppaERUMUtNYWlCMmNkd3locDd4SDVpWk1Ec2VQNFF2TWpOaUg0RTlHaCs0cHhOa1dRQzV5YnFFbE1DZjRVSnNuVnpjR1ZHb2cxWUpyWE0vQkVVMkE5bU9IMU5Bd3lLY21BWmpFWFhZbGUrT1o1UGUrRGw5Y1ZjNWhOQ2JTQVJTRVRQNVo0dlFTLzRDOWlJUlhRY2lEb0Zhd2FyS3pTOU9xS3VJMjh3Y0J5Q3FCdldIdTE3T3ZZWU5rTnJJczl2U1lVTHprUXE4TjMwZjZCd09abUFEOUYveGQwa3VXV0JHMGh1QjJEN3NEcHhFNHNlRHVJcmFSQkllekduN3JuQi94NzhXeDNFVW9hWk5uSFFjeXhId0tIOGFrL3dMNUZLa2E2Um1FY2liYjFHSkVJam1Pcjhnamg1R3RFbitDMFV1aWJVQmdSbHl1Q2NFandLMDl4SWhraURkS2ZnYk9kMC9TRm1jUGxGY3RlWFlJelg5RDB1WTNEbWZTN1c2YXpyejJBanlFZkQ3aTU1ZjNiRzJMcUdCL2d1WmFPa0p0KzB4MURRZ1AzeHRmbjY0MzNBWEtEdVpQYmJQS3JsbjF3UExyZjNuQS9PaDdrdHRFLytnMlpBV1ZBR1pBYUlOVisrNmoySTZxd1FBMU9RVDVGL1ZZRDlJY2k4dlQ4b296eTh2eEVVWDhCSitHdGlOa280SElBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRFlBQUFBMkNBWUFBQUNNUldyZEFBQUFBWE5TUjBJQjJja3Nmd0FBRHdoSlJFRlVlSnpGV250d1hOVjUvOTI3dTlKcTlYNVpsbVFKUzdKc1Eyd2Vob1pPYWtJSUtVMHpNS0ZEWmlCL1pDYUJLWThFZ2trQmx6QkoweVFRR0JnN3BXQUREbmJhREtsREpzVWVJQ2Fwa3dhRFEwTXh0cWxzSEwxbHZiVXJyYVRWdnZmZTI5OTM3dDIxTE12eVN0cE1qdWQ0Nzk2OTV6dmY3M3QvOTBoSGpvZmY3OThVQ0FRZTV0ekorU3EvdjhQWnpldXdUTG1XZS9LYjg4ekRZMk5qVitTYUQzMjVCUHI3K3d2STZJM2o0K012a01rUlRkT084UGFUbkhkejNzenZmOFhaeEd1ZlRMbVdlL0tiODh5VHVxNS93TFdEcFBFOFFYNU9hQzZYcnlVREl3TkZaT2FSZ29LQ0lUTDZtbVZaZC9KMnpUSjRxU09OdXdqeURkSWNKTzJ0eXdHNGFHRGNQSThhZW9CZ3VubjlPR2NaSnk0MG5iWFozaS9uZk1McjlYWnlyenRseno4cE1FcnhNOXhJVEcwYlovVmkxcVpCWkh2ZkdYV2NZdUx2MFVJK3U1ajlzZ1pHNHA4bkUvdXBxUTNaUEo5S0pURTJOSUFUUi80QS8xQS9MTk5jREY5engyWGM5eGZDUTdZTHNnSkdhVDFLVUsvQ0RnQUxqc2hNQ0wvNnovL0FnN2ZmaGtmdnZSM2J2dnROUFBYd1BkajU3ZnZ3OHJOUDRzZzcvdzF6YVNCOXdvUDRkVFlQTHdpTWhEU2EzblpLNi92OHFsMklXTnZSOS9HTnI5eUtsM2Z0d0dUQUR4Z3BSS0p4V0Z3NlBOaVBQeDc1UFhZKzlUMjg4Y3BQTURrUlFEUVN6aEpUWm1qaTErVHBxUXM5dUNBd0V0aEdRbHV5Q1E2ZEg3WGg1WDk5QWg0cmlYZ2lnZkhKS2NTaUVZVERJUXdPajZLalp4QTkvVVA0cUxzZkw3MndFNC9lZHlmKzZZRjdNTkRiZFVIYTg4d0hhVVhibHdUTVdiamxRcEpKajUvdTNJNnhrUkhFSWxHVWVEUTBWcGJna3g5cnh0Ly83U2Z3cGV1dndvMGZ2d1RyNmxaZ2RVMDV3WWJSMGRXRHZwNHUvT2pwN3lNUmoyVzd6ZXl4WlNGdzh3S2pwbTdESWtCRnd6Tm9QOW1Hb2NBazZzb0xjZjh0bjhZVDk5NktyMzN4YjNETERYK0p6MTF6T2Y3dVUxZmloazJ0dUxoaEpZcTllVEFaWElLVDB6amUxb2IzM3Y3ZDRtSFpZNHZENnpuakhHQjhzSmFxM3JFWTZsNmZEOWZjY0NQV3JXbkIvYmQrQmxkY3RnNHI2K3ZnS1NxRDIxY010N2NRaGFWbFdIM1JLcXdqc0RVTmRhZ3BLMEsreHdWeFhmL284Qkp4cVRpd1EzaStJREJHckoxT2dzemE1b1c1cjJ6WmlpMzMzbzNLNm1xNDhsZ3c2RzVvTGhjMFhZZnV5WVBtOXFDd3FBUXQ5VFZvWEZIT1dZSEtJaDkwVGNOa2NHSXBmcFpKNXNMemdzQkdSMGVsZnNzNlY4d2VicmNidFpXbFNqdXVmRExNYWJsOWlDUTBoTUlKSkpJR3NYcXdldFZLWExKcUJab0lzS0cyQnFWRmhVakVva3ZaY3ZiNC9Od0VuZ0hXMGRHUno3RCt6SEtvOS9YMlltSXlSUDlKSVJRTVl0K3JiK0wxQTRmUTNUZUMvcUVKaENNeCtId0ZXSHRSTGVxcnlsRlhWWWFLMG1KbzJySnJjYkcwN1lJaC9UMURzYWlvNkl2OHNVR3V6MWZIelI3em1VVVBJOTBIeC8rSThiRlJtTWs0eXIwZUJDTnhSSFFmQ3R3dUJVcDNlVkNRbjRmU2dudzBWNVhnMHhldnhzYkcybmxyeVBRKzgvRXh6L1ByQmNOWndQaURpOXI2MW14Q2M2OFhBcGtlVFJ1dXhLbHBDMG1OcHNqcW9uVjlDNjY5YWlOYTY2dFFXbDZPZkFZWkQwSGwwMndyaTcyNGFtMERycis4RlZlV24xdmp6Z1V4OTdmNUJqRkloZVRPQUJzWkdibUdIODN6UHIySTBiQnhFNzZ3cVJIbEJTeFNHTTZyaXZPeHBya2VOUXdXMVRVVjhCSlVNaHBGS0JTbUJ0MlltUTVqSmhTSGk5RXpSMk1Oc1d5V0N3V01QZENYYzBIVll5WlFWbHlBL0lKQ1ZmUW1tS3p6WERwY3FRU01lQVN4NlNDQ2dYRk1UWVg0dElYeTBoS21DaStzOVIvUHhmWnFwTEhvVWcvU3QyNWVScmc5TS9OOE1BMERKNCtkd1BGalhZaE16OEF3a2dxVWFDb1pqMk9LV3FMTjBOa041QkVVMXYwRnRPS0s1ZS90VEdLNWlaKzZQamc0ZUJrQmx1WkNXbHBCQ1NaaVV2dW1VTWR3SGs0a01jQ0FFcUhtaUJkRzBrSnhZUUZNTXBBeUxieC9laEt1eG8yNTJIcjJxQ0NtUzNXWHk3VTVsMVJIUTlSUWtDZ21XTmtIWWhnUFRzSS81c2MwaStJVVRWTDZ0SlNab3IrNWNjbTFuNFhiNDhubDltb0lKakhGRGJreUE1bVZUV3ZocS9KaXhoWEdpb1lpMU5aVVlvSStOVEF5aHJIQUJNYW5wdWwvQnJ6ZWZQaHFHbk8yNzV5NVFZTEgrbHhLeTFQVEJNM25RbWwxS2J3bHBZZ21Vd2hIWTZ3K29qalZONHhBY0FwVkZTWFFxQ25kVzVUTHJXZVA5UUtzSVpjVWk2cFdZbXh5Qm1NVGsranNPbzJUSGYzNHNPTTAyanI3R0NHNTJjb0tGQllYMGh6TkxGclhKWThHTWNYQ1hKcUJtd1d2MlhnRi9xZHJGTDg4ZkJSdmYzQkM5VjlOdFpWb3JLdENSU1VyZm8rYkFZYit4aWIwVDJTS2hhS3huR1hIOUxqMCtwdHczZWFyOGNuTFc3QzJvUnFYdHE1Q2EzTWRWckErWk5tam5uR3o2amVpTTduZU9qM0s1cTArejFleVpEczBKbCtkYzExckE2NjkrbU9zNUt0UlVsU0F3cEpDK2gyQldTWXN6WVd5K21ZcGd4WXMwNVk2eEJSamMxVXBZem1tY094a044clhYMDNxTHRRMnNxUnFxSUd2ckJqZTRpSzJOVjYyS1RGNGE5Y1NuTTd3RDhTWjc1YTc1NXc1S1JvTDVWSlNyeDM4QTk0LzBZUEsxbzN3VDVycURWVUJHMHh2WVFuY2VmbE0wa2xXSDFGVWJMeUdTZHRBNytBb3Z2N1BMNkt6ZHlpWGJJUkZZMTNMbFpESktxTHRWQzhlZS9abmVPNW52MFVSMnhYRDB0RnczUzBZRy9RcnpVZ1pwZXNhcHZ6aktMMzRFL0NVMWFpMVhUMm4wVFVVeE5lKzl4Sys4Zmh1SER4OEhMRjRZcmthNnhkZ3A1WXFGdi80Rkg2eTd4QnVmMlFISHRxMkY0ZU85OENnNzdTeXZ4TGZTWHFaeXpiK05aSTYvWXJkdEpreVliaExrQ2haaGY4Ny9KYXFLejBTUlhVMzRpeFdqcllQNFluZGIrQkxXM2RnMXlzSE1Ud1dYQkpmZ2trbkEyMkxYSVFUekUyUHY3QVBYLzcyYnJ6ODVudm9IdzhoU2oreGRBOWNiUC9MR0NSbXBpYlIzZGFHVkg0WnJMWFh3YWkvQXZIcVMxRzYrVGJXaWk1WTdrSU05L1VoRm8xRDAxMXF4bU1SNWpkV1krRWtYamw0RkhkOFp3OGUyYjRYYjcxM0VrbHh4aXlIWUJKZzcyU2ozcGx3Qkc4ZU9vYjdIdnMzUExqdEZieDF0QnRKTW1FeS9ybmNlY2dyS0phZWdSNWxCOW9RUzZmNmxuV29YblVSaXN2WWFEWnRnS3VpVWJaRjFhb0dyTG5rWXF4cWJrSENzT3dYUHFUaEs2MVUxeEsrSkdvbVRRM3ZueHJFNDdzUDRJNXZ2WVFEaDQ1bVpZcUNTYSt2ci8rUWRDWVdrb0JFcmJ1L3V3ZmJmdm9idEE5TXdOVGMxSTROd0JJMkJGRDZ2UVd2STdFVVZ0WXpHdGJWRXJTYnpHclVURlFsNmlqTEsxOVJJZkx5V1N1eWJVbWtMTHVORWFZSU9rWE55THQ5Qy9aM2szU0pIWU9CS1R5Nzk3ZlptT2NBTVIwWGpja0p3V3NMUFhuOFZCLzgwM0Z1RGhYQ0xSdVJrcjVHLzFBcGdzekJBUmVZQ3F1M1ZxYVRPZ3pET1lSdzV5T1B4YS9MN1hMV1VMT1JPT3psbXFKaGs5WFVQWHUxcG9LVFFiRHhwSUZUM1FNWEF2WWIwckowZTJQanh3dXA5bmo3YWRzOG5JM2tVeHBGS0praXJmNU1zZzFNUlp4b2FhaVFMcTFLbkUxbXZxOFFSYXdUdGJTR09LZG1vbEFvb051bG8rWFE1TnE1T1ZVMGVmU2puZ1hOVUxBb3c1SC9tcHFhZnNlUHp2T0pvTDEzbUJ0WmpvbVlOaU5LelBRSDFRMmJqclpzWUlPalFTUWs2VnFtQW05U1l4SlVmSVUrWmJMMmNwdVJ5WEE4b3owUmdnU1JNNHlhaXJZSVNFeFV0RGJpWDlBVU94MHNaMTYva2NCajU1UEN3TWhFUm5LMjZ0TG5XNVo2dDZHWVpmTUl4NXg2aDhZVlUzTGY1V0lvajRTUjU4bFgvcGV1NkczcG11elBabXgva3UvVUxEdGZSMUNhTUtYMk1wVGYyUm9jQ1FRWHlLZm1ZMms4R1dCRUtpcHNueXVDbVhBTWs2R0liVDZVcUdra0hjMWwzRXdGQjdtWDdrSkdnaUdhWHRJQk5hTWluU2hVdEs2bUF5VEJaMFltUW9xUWpqTTB4QXpWWHBhdHJXUXlvU3hFN28vNHB4Q05KYzVSRmVsMU9Cak9CdWI4ZVAvY0JjT2kra3psb0NPWmlDc3R5VFdVQmRuL1JFUHlqREEyellBd05CcFF2dVZpQXJZY2Y3VFNXbGZNbTJ3NlE2b0JWYjZaRnB5RmpQa3BBWW9aSm1QS2xHVmxVc3F3Z2JGempSRDQrdXd2WndFajRqZTU4ZjdaNmgxaG1MV2NNQ2hta21BU3RYVmxnMUZUYVVCeEM1RzVHR3A3MzVnVElHQkgwclJmd2hhR3FlcEVmeVp5V2hTQ09TdmdLUE5UbndRV2l6aSthU25nNG1kenpIQy84SDVlWUdwVFRidUhIeGtQSFpkMzhVaTdsaTFKMitSbXZhVjF3clZ5ZnMyVytJbnVJY1dNbUpHOHNFbm5walNRUkNLRnZ1SHh6SGwwSWg1UjVaVXlTN2Q2bVV0NkthNlBJWldJWlRRdG9UOFNpODltT2Vqd2ZOWTRCOWpxMWF2bHNPcXI2ZTlUTXhFSGxHVTdNcXZ6ZEZpMzdkNTBUQTNxSFNJY0FaenNHVVZNTWFCbGdNSHhMZmtYWStzaXdCeHBxbE5OTVYzeFlZUENFSUVJb0JRL2JTMm1WSEtST1JXS3pHYjVxdzdQQ3dPVFFiWHVKUU55L2d6L1JNZ0p6M2JBa0xDYlZCSTAwenJMTUF6TEJpWCtjcG9oM3grWWRNN0lYQ3BocDBPaVhhS0ZDU3hnbTZzd2Jsb09UZkZsdHdvOGNvQ2hVZ3JTK08yb096aVdPVS9iSnJ6T2grRzg1emZOemMzL1FFSzdSYXFLSU94cXdFejdsZW5rTXllYTJjR0R3Qk5SeFg1U3ROWTlwTFpJSjNCWXRpbkpnNkxOZm9JWEdna0tTdFdJbHBYeDJZekFuRENmRGp3Q3ZJZkJnOWMvRkI3UHgvK0NCMU9VeGgwazkvUkN6L3c1QnVIOXNLV2w1WUdGbnJuZ2lkdHJ1Nzd6RUszaEljMnBNQ3dHQ0R1SU9GcEsrNDNTSk96Mnd0SFF5WjVoRnIxUnBTWEx0Q3NUM1dWdmFWZ2FwcGtqbFg5SnBKV0laeGl6SzNTbGVURlZnd0VrN2NkYzhOQ0JILzlnUVZCWkFaTng2bzFubm1aV3VkbE1wU0pTSGNoR011eGs2OWkrVStQcDlLZUU0NE1mZGd5cUl5TVZlR3ltN0VUUDd5RjJBS1pUTWlWWVI2cHdpak41emc3dnRybGJjbHBqR0JGSzQrYitReTlsWlVGWm41RjIvdktaL2R6eVUyVHlRME44QXJaUFpmNUd5bUZJRXJlRWJ2bXhqeTJHdENrT0psV2hLRjhsc043Qk1lVXY4Y2kwOGk5Rnk2R0JzM0tVS2JYbUNkTktiTzUvKzBmN3MrVjNVWWUvL1cvdCt0OXcrNjh2bzlidTVKN0RtTVdJM2NKb1NtTUFtMFFHa1NUYjRhSEF0RXFxRGlURmJFcVM4NUJmTFkxSG5aTEwwYWJxSEJ4UXZHSVlOKzVLRFIzWjRIOTM3OUhGOExxa1UrM1JZNi92aW9jTFdtaEsvMGhVUVpzSks4T2NtRlVrSEZLZjNhd3VVa241TTZTb01qM1Z4aVJUQ0U3YjlhZVlZWHJkckRsSmt0OTBJOWtTL0dEZmkwdmhjY25IOVFQdmJvOTIvOWZPSjJQVGVmVzBTams0M0UxL0dVbzd2akF2U2JWM2VBS2htVENyQ2k5c2w3R295U1FpQ1VNbDVYUlZRNzhiNHU4dnNqVzVTVStGNm9ZUDcvbkJ3THMvWC9MZlNTejc3eEFFWU9mQjUvWjMvdnE1TzlvUC9FdTlZZW1iU0hZcmsvTHpUT1Q3K2thQ2h5UFJlRThxWlVhSUtVTHdQWnlIUTlIWXZsaDQrbm1hNFZaTE02NGNmZmZmNjRkL3YrZXUwWGYydkw0Y1FPbngveFk4dlJyS0ttd3RBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJY0FBQUFaQ0FZQUFBQWJpejA1QUFBQUFYTlNSMElBcnM0YzZRQUFBRGhsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUFxQUNBQVFBQUFBQkFBQUFoNkFEQUFRQUFBQUJBQUFBR1FBQUFBQ1h3aDluQUFBS0VVbEVRVlJvQmUxWkMzQlUxUm4rejcyYlpBbEpRRFJqaDFMS0l3cGtvWW94SklGQVFyVWlWZ2hDd1RxT010Qk9XNWhPSHdKMjJwbTJhWjIyb0JEc1dFVGJLblhzQ3hDRE1NalVJbXppd0laWEVjcUdsMU5BV3JWV1hnbVBiTEo3LzM3bkp2ZnVPVGRMZGpHaE9OTTlNM2ZQL3o3My91Yy8vMy9PV2FKMFMzc2c3WUcwQjlJZVNIc2c3WUcwQjY2OUIwU1hRMnhjZEFkWjFvMnVURFIya0dZOC9iNkxiMWhRVEV4OVhaek1NRlU5K1Y0Y0IxUzc2SFl5ckh5WHhueVlwdFdjY25FdnNQRjdBOGxxdTUzWUdFU0NENUZCKzJqS3NvKzhZamErWm40T1pmVXFTOGpyaWhqSnJhTloxYTJKUkVhVmw5OWdSYzF5RW1LZ1JkUml4TVNlY0RhSEtSaU1KcEsvRWkxUU5uNk1aUmw5Tkw3QUJ6VUV0MmcwRHhJWVcxRnN4VlNmUXNBMGp4N2FzZldrUjlSR2g0MGIxOStJK2dJcWp3MitlRGhVdjhPaEJjcksrbGxXWnBHRDY3MW92dHlMM2o0UkRMYm9kQ0tmbDZEaE1ldm5SR0tTU3pQTVJ3Ry83T0l4cW9FVHkxMmNyTG1BVjhWeFFJSi9TaXlteEduOFRjQXI0bmdIVkx0b0JoR3ZwRmdNZ1dTMEV4bXhHd080ZmtFakFtd1dUVjBlMXZTeXNvY2dPTi9RYUtrZ1dXYy9CYkYvcTZJRm84Zm5aL21OWmJHWW1Da0UrU1hQZmd1VHFUQkNMYUswNHE4eHl6Zm44SzQzVDZ0NmllQkJsWlYranRDYmhrRTVYbjZndUhKMGVIZndiUy9kd2RrU05kQlRmQXF2V0xITjROL255S2k5R2N0NFVoajBzRXBqcGtiZ2JzQXcrVWNiQmwvUlQ5a3QzRnBZV3JtUG1KOXYzRm5uemwvSExLaW1yd084ZnVGVENLSlhTRkE4dzJpdklRckpNa05VdTJDeVJ1NGhaRmpKK005bCtnMU1tSGdFNFdnSGhtcmFwZ2t4eFRSak8wZVdUaGloOGhMQnZTSThHVHFkQWtQS3Nza3pFK2trb1UwYU5tYkNZSytNREdqNDdFdGUrdFhpUW9oTUxJZ1NZWWdYUjVSV1BPN29YLy9na0dXSGFLSHpRbTdQNUUzN3VjaFNLMXgrRHdFRkpTVjVQc044VlpEb240TEpvU3pFOXY1RlJkbGR5UXJ1Y3NLdWVqSXhlWWJQTUw3dUhUTWp5NWlESU16eTBydURHMElzQ1pST21DcHRYUC9nTUxoSyt4aW1ZM2lySWRSMkVoTmdqUU92V2VFUHBsY2Z1OVhGSXlmRDVQUDEweDV2V1NOZXJQR2wvTlJmZnVqWXlDVC9Bc0JESGR6dW1mN01KTzZPTVUxRXFsMEptckxmRURmMHpjejVvaWF2SUFVRms3T3dtcFV5aW16QmpPMUxlOE5FM3lvemxZT24zQXVlR3dnRU1oVjVWQlA2aG9LbkRqS2ZPaytSN0RZeUJsak04L0YrVGJxeXVGZmlYZTg1ZEkxcmd6R04wUXdMT2tOVGx4N3ZvTzNBaG5ZTzNEdktsVEdOZU5xZnRWYnVTTTY2UEFuVUxtekI1TVNiRUMxMC8ySmRSdUdTSVdiSFVVQk02OElOd1ljVVdoRDFPQTlwVjZuclloYjRheFVaRjh5NjZTTDJhRWF1UzJBK2pveTNGN2liTVpBRkpIekFsVWtKRVBtVWQ2UFUrNk1VRDVSVnlyMWdwMUlqZWNrYXRuTDh6MURvTXVUK2hXZGxvTFJpSlByNWlsNmxoRDhCd2NISDREemx2YWdFRzFCSit4TW1xcDc2OU41RUU2dlhxUUk5QmFPT0Q4TEluMVh0SVdNOHBlSVN4dXRWTTVHN2lXU0xMM2xsSEp6Sm1LbCtEZlEyUW40UDZya2JITEFvOXgwL2NuUlM3Wm1OZVpDMWd3T3JmUjZ5VUtxcVhjcFpKTjdYUzRqSWt3cWZoT0I0RnQ3L0t0NmxkL3dMUkFFQzQ0YzJmcTc1QW9KbEU1bjhDNXBTc3o4dTAzM0lKNHhQZTYyY2EydjZ1NWNXRGdYZkFXMnBsKzdGTzlMK0ZKV09ZTnZJYk83RHNVdG1PYk9ETjd5d2VHS2djZmUyc0NxYkNHYmlyZGdQZlY3eUVBdmxJOFpXampRaTBTWWc4ZExHdEIzWlVwYmdxMjdJUUFVSVlPbC90d0VQU2tRUEdKZjlQd1NtMXh3bFlVbUhIazg0cWhEWTlZc0hLV3JzUXNuNFNrS1pqMG1NR2ZwOUFwd1NlVy92M2l0bWhXVER4UEx5NzhFazlYSGtaQzNQYm11dWs4ZGZIQzlERHQzdVV6eTFJRGhlZ2gxM2MyNVlQSTh5ZkYrRERUdlF3RU5pNHVjMTIwa1JjWE5oV1VWZFlWbWxYQWpIdk5rVDg3RlZtcmord1NIZm9xcG1HL1hKS2NSeGRnWXl4dTlSK0U5SXN0WUVaY0x4djZMWHZsdWcwYnVCbUlLMXV3NDRLVXRlZ24xY2s3Z1NVVW9IUXBwb1MwdExpMmpQS0N6dkt1SXQxU09vUlI5QmFiMmppTlBTb3doaWR5T0tyRktId0pPWkxlVW12eE42RTlETHZZYmVtRmFMcHRPWWc1NHVLeXppbTBWblNHYS96SWZ4aG9PZTArUU5aMmJ2NlRaNi9xTDA1Z1Y2WU9rak5tNEhnZmt3V2FqTndnMWlQeTRLWm9DL3hESFJyYjVOblBJVzFtaHJ4bGpZM0tUYWxhY0xuekJueWtXS2I4RkRGeHREUWEzTUZCVVZaYlFJcWxMMUlEdWQ4dklqa3FaNm9BTVB5RHVUZ3czMWh6U2RCQWd5d3d1bXNEZkIwazRPZnBCTjJ4dWMrVnNIN2xiUGZBbTJubXRzcUZzSU8vWWMrWEN4OUFRR3MydWFiWnpGaTVpZ0Y5b0hFamRyQXhyMGdZWVR1VWZDZHJvMUIvMUtWNmIyTzRQZ29Ja3UzZzU0ZFBnbGx5OXZSRjliZUJ0VkxUMUFWY3ZsYXZnSjNtODhYSHVYSzBNMFdJRzdCZUttOG9QQzBvcGQyTmk1SnliRDVHcGNTZGNmMmI2OTJURnVDbk1GZkZTdWJBRC9BcDRXSEpjemN1N0cyL2QxZEZMcGtRVmtwbmtpbWV6aG5mVmJVQWJleFdvZnFNdnkyVXQrc2M1L2lVYnI5S1RZT1V6L1lpbUZNL1pwd3hLN3c3dnlEK0lBSnZkRmJ2UGhvOC9BK1hLMU9DMFBHMERVUnpFVUFYUWJlb2QraWZKeTMzSVF1emZFQVF6U3Z2SWxRWWhpN0F1T1F1OTF3REt3NUhITEoxbHVzemgraEp2MTdBVk0vajhnTzhUbE02L0crQy9EN2o0Y004ZVF4WlV1cngxbzlPRGRRckZoL0EyKzBBME9HTHZUalBuMllqSmV3VHVBTGFyQUQ2aURNRmxyVkx3RGxpZVFxMnRNVWlkcGNFREd3bDhRcXpBVlAxWUhZQlova1ArSkRCOVRvWktUd3Zpc0ptU0lwTm5YUUowUGF0YUVyRU1pRE5vR09kdHhIbS9Ca1ZML2N5WWEvVFg0N2dxelpRWGRBclZ2QS80eUhrLzk1ZzBrTjZCNmUxcEh4WENNK3pQWWVCMVRVNDNlZFBuMnJTbmVvd2NiL2doRGx0VC9kMENHdUFXcjlQdm9mOUFwTUpnM040YnFWMm12VUZrcEY0QldVaXljdG1JeDh5YjFzV0xpZmsxUGlGSEQ3cHc0VEtOZEFXSERXR1dYTllVdkxORXpKVVd4cVlJR1RhM0IrWjA3bmUxVklVeFNIZm50a3FHUjdYOW9MYU1FVjREZUNkZmxiSXgvUjMxeUgrekVlR0RaTTlEL0Z1alJUand2UVdBak5tMVpqMllPRElINjJ2b1FlbGtxa2pSK296Vml6WVlRZE9JdEVCRjNJWkQ2eFNsWTZsR3hWcDVTMU9kUU5tTU1QcXZLR1Q3V05yRXFUNFhsdjdKWXF1ckMyQlBldFcyL0t0UFRNRElIUG5UYXNzZXhXbWRqa3ZiamFiTUhrVDNUM3dBdm9iYWNlK2plNVNnL0NkcjBKdzlSVm1zeDdNZ01zQjBmM3hTWDRsT0E1ZVp1THNhWTB5bnpPSUl5UU5yUDhyVjJvREVydFkvUHdlWnFISy91b0dsTDlSWHI2SGV6RDRkQ1ozQ1hNUmxud3JrWVN6dHlJZ291NERUUVlKRTFPeHlxbS9UT3ZyZiswMms0MWljWUsvellrVDNiam5TU3c5LytzTFZacFdQQ1V3b09xWVA5d1hNb0NlL0tCM096UXJWekxXQ2xiSFNZWDFPZFNiMmFoMUJPN29rclRtYXlOMW4vMkdlb2QwWVRmV0hKK1dTaUNmbmJxdjNVZEg0QVpVUS9wUHVlVVlJdG9YU1BFd2VVbGZYS3RUSUdzRERhRGpjRVQySUFMVlAwK0lCcGcya1BwRDJROWtEYUEya1BwRDJROXNEL3NRZitDN3AyUTFzUTcwdFZBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJY0FBQUFaQ0FZQUFBQWJpejA1QUFBQUFYTlNSMElBcnM0YzZRQUFBRGhsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUFxQUNBQVFBQUFBQkFBQUFoNkFEQUFRQUFBQUJBQUFBR1FBQUFBQ1h3aDluQUFBSWdrbEVRVlJvQmUyWmEzQmRWUldBMTc0M2JWcWFORmhsY0xUV3Rqd0V5cXRvMjFHclF3VXBJRTFLcTBHR2tVNHJnOG93UG1pS296Tm9sRkg3U0ZJY0xCVkYwTUVYTFpEU1RtSEVLZzBPb0Zqb0E5SnF5eWl4b3p5a2xLWUYrMGpPOWx2bm5uUHVQanMzOXlia2R0b2ZkODJzN1BYYTYreTc5dHA3clhNaVVvRktCQ29ScUVTZ0VvRktCQ29ScUVUZzZFZkFGSDNFdWtVWFNCQzhNN0hwNlgxZTV0NzJVc0t2WFRoRnJKeVk4Skx0bElhbC84bnpVTzJMenBkTWNGSWlzL1p2TXJ0dGQ4TDd4THF2ajVQZ3lQbGlNK1BGMkIyU2tjMHlxL1UxM3l6a1Y5MVFJOVVqUDF4UVYweDRxTFpER3BzUEZ6S3gxcjREK1hSd0hIZ1EzQVIyR21ONkdBY00rSm1LY1owM3dlSm5neWRMc2N5YmdzQ0phYWpleWJ5dWxHSEVZUDhleUVtZTdrM3NuNHhsMkl5Qi9tRE1lK04rK0MzWTYyOU5RVldLODVuZTRQc2labVlpem1TdmhiNDM0WHVsVFl6UlFFWVFMSUM0SitiQzBkanZpald6OGpKN0kvU0tQQjlSN1l2bWl0aVYwdHRMSW1WeVFrdnU5a0t1V2JpZEJHdVUrdVdkcVhuVkowd2tPUjlOeVFiQ1ZPOTlOMmF2dUtZRWtPZEtLL2daY0lTcmd6NkkvdmVNOHduaUhrL1hoOFZXNS84QnJQR1Y2Q2JqWTRzdmQvZzJhQ2Vtb2VZUi9sN3UyTGprVXBoclhBSDBkdEJObU1ud3hlSjBtSFZ0eHVaTzFwYnNYN1FMaUk4bHJHbGF4aTF4dnhqUkRTb0E1aXdKc2s5Sis4TExDaWlITENJdzUrSkVOK3h6b0o4WTZsOWxtdUIvd2ZaTUZaUUFYV2VmeElqbWFQSU5GbWJ5M0FuK0pHUWFyMC83OHJmQkQyZk9OUEJ1Zk40Y3p6LzJ5YUZsUjZRcFhsQXlXdkd2L1ZwdXFSV0p2a3dFd1JpTnF3ZEJ2WjVMd1NrWVBNR2NFMG9ZRnR1d1lyciszT28rZmFHQWNqNnk2Z0x5b1lpVzhQdnExY0d4VDQ2TWJVajlFaXU3V05WRU9kTEZCZ1FmUmFjMU1ZWUo4dUJOcDhlTUhPcnFsS3FxTVNuMHk1cll4U205MnRmLzhOWEVoOGhDYU4xMEYzNExjekU0QTF3SnV2Mkc5aVNmQWdzQ2dkWE5jc3BvYUJZNHhxZGpvemZWWUdFQjgvU0Vod0JOelpVdlJ1eGdoOTFNMEFRZkM5NEFkb011WEtwTThaN0ROVDlhdEJWdDNQSmc1SFdwYi9sbkpIaVNocGJUWWM5SkRMSVp2ZUp6MExoYU81SzlNUnVPN1UwSEtVOTUwRWJyaXNWcG0wZ2JCWGhlM2ppa0hxRHVYdTNJTm1LbnQ0dGIxeHZoVnpzMkxxazlXcTBqME4veURPamVHRXB2YzJ3R1FzWWw1TmVSc1Q1bndrQW1GckRSeHZoL3lQOE5ydVQzbmMyb1NSTERoVW9jQjhsaGQxRXU0a1hwT0kwR1ZHVy9vZGw4WE9wR3JaY1p6USs0Qm1Xa3grUHIvWjYvWlI2dmJEUG9OcEZ2cWJBZjhIdUtkZGh0QXQza1VKdHY5VE8vbVBoTEtPUGtVTHBjOEpMblNBL0RjWkVjZDVBSTE3R1dVZmtGbWxOSmpGdEMvbzM5QjBpVzlaSzFQNUJaYlZ2ek5tV2gzbHZBeTNPK2pGUDJBcklXWCs3em5FQzk5bWQ1Y2swT2ZSUFFXeTRiNmM3QWRoSitPeU8rMlBCSGxKK0lES1pIcDF6TGdGdmFub0RYRWp4b3dOK3BUTkw0dTdCUm1XUGZjOHhwMnlrbTBJREdwVVRYbFFkajZQck5WZEtUZVZyYW16NmZWNVNGT3RIemNvZ05LM1lyZU9aOTJFdVExRGxTM2NRT2ZPNWhmTXFSSytuZk1KNDZZWDhCNVRibmVtTmNEOGFKWnFIdkJBY0RKNU1VSGFBZWhGMmdmM3RxUWg0SHlhR3JhR2g3VE9wcXp1SjFkaTQzeGkvcE1WNVVjUXFNREtlWCtKRTg5RFhOOUhMQks1NmphZ0ttRGVmYkJiZDBxSThOb01HbjNpajZyY0lGMzliVnVmUnJNR3Njd2JYUWJpUGFBYTgzMjJDZ0d1T1BnMmNYbUhRZk12YWczR1hGbW55ekdEOVZQd2lsZWdxam1aNEQvY0k1Zk5TY2tObjNKbUdVQTNKbGkzNXJrRndTWksrUmdOcHNraVFlSVRZN0YrMlMwR2JvZjdScjkrRWpDTmE3UWpaWDN5NzBwQWNSNmhmSVZKbkJaaGk2QnRBRi9XMkhYSUZEVDJMT21malo0Y2o2STMrR1FwdGdCVzdTMURlVXUwTHAwUC9vamZsanNJazFoWHRVeFllbFd3bCtYTk00dE9adU5rZ1hBNWlUYzJQME55TXZwM2dSOTVVUVZUQ2ZQeXNUbS9hdmppY3haaVI4anZEbVdMMDJjNkJ2Wnc4MW5TY05MZHVrWWJtZWh1K3d2byt4am90aUU4WUpEajBra2lDOHpBWTlqWk9wanFObVpJK2oyKy9JVmtCUGQvamZRYWVTQS81aTBDOVR6cFNDcE40ZXR4YlVwSVViWVA4RmprdUx3emMxYmRZbmUvSlM3QnNZTEk2TXRPVDlGWHllMzl3YnljS2hpc1I0bmVEcmFZbGhOQTBnOWRHY1FxYWN4eGpMMzVMUnRYK0ttWERNbUcyVWdkekpWNEV4VStnTGRqTHZZV2hOckpsZ2xhb1NDT3kyaEc2ODR3Q2IvdzlzSnlZeWErL2orZmZpZDdOa3pGUUo3SVdKTGtkczkvaWhzai9GZ1pzY0g0Si9oZ1M1bjFGUGtONEdrMEFYVnJsTVJPdk5NbGpRT1NXVGcwMExXTTg5Mkg3YmU4Q3YwT21uZlU5Y2t1MW1Yc25iTjBORjNKaHlaYlFPaFYzMFd0M3R2TTV1NEpVeS9jK1pucDZmb0hkUG1PYlNhVXo3Q3ZMUGdsNzl0bXRGRzlBMDNKWm16Ums0K1I0K0htWnJtaG16aVQ3OGFzbzZ5Z3Q2U3o3cXVUd04vaHZnTjBFL01SNUJwaHVWQUp1akI4QXZLYmNnZTVlSFZ5U1Rjc1E1elAyQUordVAxV2RxV1hQaExwY3BONTJSK3JZdEhKQmxSUjFiNlpBUlljbEltK2wvYUlQTU5MSFczL0MwWGNqWm4wdGQ3VlY5RkZlMjNzNzhMeVB2NmFQekJZWkdiSFpyV1c4T1RwQWV1NnRCTFJXbFFKTm9YalRIdGIwSVpvd3JnRjZOM1I0WGtla3o5bnAyQTJwTThkUEZQUGRnYkVLMjFmTlZWcGFiZy9NNXUvVm1UdXM4Tm1rcmVDUjhnbzVXbm9WZUlrZHFMcEZMbDFOK0NzQ2NwVHVrK3ZBVS9PZ053UHUyN2M1YjJkM1E2OEVGUEdOK241c25OdFFFRWFOOVQzdVlhTlk2dGM5U0h5azFKcmhBWnJla1RtdzhmYWdqUWRiZmRobTRBS1NrcHVBQTNKOUJUWXFaNEg5VDJoempiL0F1N1A3dTJ5SFRBNkEzand2K1hGZm4wOW93YXUraHFIM1FVUVduYkVUUFdkVThYRWJ1bnlnMXRTLzJ1NW1sbHJUbXB2ZkpxR0hkOHNrbCswcVpGdFEvMWp4Q3V2ZU5sV0U5cjhybHR6dkpWdEM2N0VLdStwRTRIUXZxUWVsaVUvVjJxVUFsQXBVSVZDSlFpVUFsQXBVSVZDSlFpY0JSaU1EL0FhWXNiSlBGVTEwNEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9oYXJ2YXJkLTU4NTVlMTQyYTk1MTU2ODNhNzUxNWUyOWMxZDU0YjA1LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhNaUlnYUdWcFoyaDBQU0l4TlNJZ2RtbGxkMEp2ZUQwaU1DQXdJREV5SURFMUlqNDhaejQ4Wno0OGNHRjBhQ0JtYVd4c1BTSWpPREk0TWpneUlpQmtQU0pOTmlBNVlUSXVOalkzSURJdU5qWTNJREFnTVNBeElEQXROUzR6TXpSQk1pNDJOamNnTWk0Mk5qY2dNQ0F3SURFZ05pQTVlbTB3TFRFdU16TTBRVEV1TXpNeklERXVNek16SURBZ01TQXdJRFlnTldFeExqTXpNeUF4TGpNek15QXdJREFnTUNBd0lESXVOalkyZW0wd0lEY3VNVFV5YkMwMExqSTBNeTAwTGpJME1tRTJJRFlnTUNBeElERWdPQzQwT0RZZ01IcHRNQzB4TGpnNE5Xd3pMak10TXk0ellUUXVOalkzSURRdU5qWTNJREFnTVNBd0xUWXVOaUF3ZWlJdlBqd3ZaejQ4TDJjK1BDOXpkbWMrXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbWl0LTFhN2RiYTRhZjEwMzllMTA1YmI1MWE2MjgwODU3Yzg3LnN2Z1wiOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgY29sb3IsIHNwYWNlLCB0eXBvZ3JhcGh5LCBzaGFkb3cgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkLmFgXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbiAgJjpob3ZlcixcclxuICAmOmFjdGl2ZSxcclxuICAmLmFjdGl2ZSB7XHJcbiAgICAke2NvbG9yfTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBID0gKHsgaHJlZiA9IFwiI1wiLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIDxQYXJhZ3JhcGggaHJlZj17aHJlZn0gY29sb3I9XCJzZWNvbmRhcnlcIiB7Li4ucHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIGNvbG9yLFxyXG4gIGJhY2tncm91bmQsXHJcbiAgc3BhY2UsXHJcbiAgYm9yZGVyLFxyXG4gIHR5cG9ncmFwaHksXHJcbiAgc2hhZG93LFxyXG4gIGZsZXhib3gsXHJcbiAgbGF5b3V0LFxyXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcblxyXG5jb25zdCBCYWRnZVNvbGlkID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDRweCAxMnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAke2NvbG9yfTtcclxuICAke2JhY2tncm91bmR9O1xyXG4gICR7Ym9yZGVyfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuICAke2ZsZXhib3h9O1xyXG4gICR7bGF5b3V0fTtcclxuYDtcclxuXHJcbmNvbnN0IEJhZGdlID0gKHsgY29sb3IgPSBcImxpZ2h0XCIsIGJnID0gXCJwcmltYXJ5XCIsIC4uLnJlc3QgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QmFkZ2VTb2xpZFxyXG4gICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgIGJvcmRlcj17YDFweCBzb2xpZGB9XHJcbiAgICAgIGJvcmRlckNvbG9yPXtiZ31cclxuICAgICAgYmc9e2JnfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhZGdlO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIGNvbG9yLFxyXG4gIHNwYWNlLFxyXG4gIGxheW91dCxcclxuICBmbGV4Ym94LFxyXG4gIGdyaWQsXHJcbiAgdHlwb2dyYXBoeSxcclxuICBiYWNrZ3JvdW5kLFxyXG4gIGJvcmRlcixcclxuICBwb3NpdGlvbixcclxuICBzaGFkb3csXHJcbn0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmNvbnN0IEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHtsYXlvdXR9O1xyXG4gICR7ZmxleGJveH07XHJcbiAgJHtncmlkfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7YmFja2dyb3VuZH07XHJcbiAgJHtib3JkZXJ9O1xyXG4gICR7cG9zaXRpb259O1xyXG4gICR7c2hhZG93fTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJveDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyByZ2JhLCBkYXJrZW4sIGRlc2F0dXJhdGUgfSBmcm9tIFwicG9saXNoZWRcIjtcclxuaW1wb3J0IHtcclxuICBjb2xvcixcclxuICBiYWNrZ3JvdW5kLFxyXG4gIHNwYWNlLFxyXG4gIGJvcmRlcixcclxuICB0eXBvZ3JhcGh5LFxyXG4gIHNoYWRvdyxcclxuICBmbGV4Ym94LFxyXG4gIGxheW91dCxcclxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcblxyXG5jb25zdCBCdXR0b25Tb2xpZCA9IHN0eWxlZC5idXR0b25gXHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDEuNTYyNXJlbTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS44ODtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gIG1pbi13aWR0aDogMTc1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG5cclxuICAmOmFjdGl2ZTpmb2N1cyxcclxuICAmLmFjdGl2ZTpmb2N1cyxcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAkeyh7IHRoZW1lLCBiZyB9KSA9PlxyXG4gICAgICBgMCAwIDAgMC4ycmVtICR7cmdiYSh0aGVtZS5jb2xvcnNbYmddLCAwLjUpfWB9O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSwgYmcgfSkgPT5cclxuICAgICAgZGFya2VuKDAuMDc2NSwgZGVzYXR1cmF0ZSgwLjE4LCB0aGVtZS5jb2xvcnNbYmddKSl9O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBAbWVkaWEgJHtkZXZpY2UubWR9IHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHtjb2xvcn07XHJcbiAgJHtiYWNrZ3JvdW5kfTtcclxuICAke2JvcmRlcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbiAgJHtmbGV4Ym94fTtcclxuICAke2xheW91dH07XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24gPSAoe1xyXG4gIHZhcmlhbnQgPSBcInNvbGlkXCIsXHJcbiAgY29sb3IgPSBcImxpZ2h0XCIsXHJcbiAgYmcgPSBcInByaW1hcnlcIixcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICByZXR1cm4gdmFyaWFudCA9PT0gXCJzb2xpZFwiID8gKFxyXG4gICAgPEJ1dHRvblNvbGlkIGNvbG9yPXtjb2xvcn0gYm9yZGVyQ29sb3I9e2JnfSBiZz17Ymd9IHsuLi5yZXN0fSAvPlxyXG4gICkgOiAoXHJcbiAgICA8QnV0dG9uU29saWRcclxuICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICBib3JkZXI9e2AxcHggc29saWRgfVxyXG4gICAgICBib3JkZXJDb2xvcj17Ymd9XHJcbiAgICAgIGJnPXtiZ31cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7XHJcbiAgc3BhY2UsXHJcbiAgYm9yZGVyLFxyXG4gIHR5cG9ncmFwaHksXHJcbiAgc2hhZG93LFxyXG4gIGZsZXhib3gsXHJcbiAgbGF5b3V0LFxyXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcblxyXG5jb25zdCBDaGVja1N0eWxlZCA9IHN0eWxlZC5sYWJlbGBcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGlucHV0OmNoZWNrZWQgfiAuY2hlY2s6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjE0YVwiO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9O1xyXG4gIH1cclxuXHJcbiAgJHtib3JkZXJ9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG4gICR7ZmxleGJveH07XHJcbiAgJHtsYXlvdXR9O1xyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2sgPSBzdHlsZWQuc3BhbmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjBjOFwiO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgZnJlZVwiO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY29sb3I6ICNlMmU0ZTg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGV4dCA9IHN0eWxlZC5wYFxyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0fTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tib3ggPSAoe1xyXG4gIGNoaWxkcmVuID0gXCJLZWVwIG1lIHNpZ25lZCBpblwiLFxyXG4gIG9uQ2xpY2sgPSAoKSA9PiB7fSxcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICBjb25zdCB1SUQgPSB1bmlxdWVJZChcImNoZWNrX1wiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGVja1N0eWxlZCB7Li4ucmVzdH0gaHRtbEZvcj17dUlEfT5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImQtbm9uZVwiIHR5cGU9XCJjaGVja2JveFwiIGlkPXt1SUR9IC8+XHJcbiAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJjaGVja1wiPjwvQ2hlY2s+XHJcbiAgICAgIDxUZXh0PntjaGlsZHJlbn08L1RleHQ+XHJcbiAgICA8L0NoZWNrU3R5bGVkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIGNvbG9yLFxyXG4gIHNwYWNlLFxyXG4gIHR5cG9ncmFwaHksXHJcbiAgc2hhZG93LFxyXG4gIGxheW91dCxcclxuICBib3JkZXIsXHJcbn0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmNvbnN0IElucHV0U29saWQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjU2cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMS4yNzVyZW0gMS43NXJlbTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogJHsoeyB0aGVtZSB9KSA9PiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlcn1gfTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG4gICR7bGF5b3V0fTtcclxuICAke2JvcmRlcn07XHJcbiAgJjpmb2N1cyxcclxuICAmOmFjdGl2ZSxcclxuICAmLmFjdGl2ZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUsIGZvY3VzQ29sb3IgfSkgPT4gdGhlbWUuY29sb3JzW2ZvY3VzQ29sb3JdfTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IElucHV0QW5pbWF0aW9uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbiAgJHtsYXlvdXR9O1xyXG4gICR7Ym9yZGVyfTtcclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEuMjc1cmVtIDFyZW07XHJcbiAgICBib3JkZXI6ICR7KHsgdGhlbWUgfSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJ9YH07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodH07XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya307XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC41NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXI6ICR7KHsgdGhlbWUgfSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5zZWNvbmRhcnl9YH07XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzIH4gbGFiZWwge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubGlnaHR9O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrU2hhZGV9O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dCA9ICh7XHJcbiAgdmFyaWFudCA9IFwic29saWRcIixcclxuICB0eXBlID0gXCJ0ZXh0XCIsXHJcbiAgZm9jdXNDb2xvciA9IFwic2Vjb25kYXJ5XCIsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgY3NzLFxyXG4gIC4uLnJlc3RcclxufSkgPT4ge1xyXG4gIHJldHVybiB2YXJpYW50ID09PSBcImFuaW1hdGlvblwiID8gKFxyXG4gICAgPElucHV0QW5pbWF0aW9uIGNzcz17Y3NzfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxpbnB1dCB3aWR0aD1cIjEwMCVcIiB0eXBlPXt0eXBlfSBjb2xvcj1cInRleHRcIiBiZz1cImxpZ2h0XCIgLz5cclxuICAgICAgPGxhYmVsPntwbGFjZWhvbGRlcn08L2xhYmVsPlxyXG4gICAgPC9JbnB1dEFuaW1hdGlvbj5cclxuICApIDogKFxyXG4gICAgPElucHV0U29saWRcclxuICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgY29sb3I9XCJ0ZXh0XCJcclxuICAgICAgYmc9XCJsaWdodFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgZm9jdXNDb2xvcj17Zm9jdXNDb2xvcn1cclxuICAgICAgY3NzPXtjc3N9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gXCJwb2xpc2hlZFwiO1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XHJcblxyXG5jb25zdCBJbnB1dEdyb3VwU3R5bGVkID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBJY29uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAyN3B4O1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiByZ2JhKHRoZW1lLmNvbG9ycy5kYXJrLCAwLjQpfTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEdyb3VwID0gKHtcclxuICB0eXBlID0gXCJ0ZXh0XCIsXHJcbiAgZm9jdXNDb2xvciA9IFwic2Vjb25kYXJ5XCIsXHJcbiAgaWNvbiA9IDxzcGFuIGNsYXNzTmFtZT1cImZhciBmYS1lbnZlbG9wZVwiIC8+LFxyXG4gIC4uLnJlc3RcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SW5wdXRHcm91cFN0eWxlZD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgIGNvbG9yPVwidGV4dFwiXHJcbiAgICAgICAgYmc9XCJsaWdodFwiXHJcbiAgICAgICAgZm9jdXNDb2xvcj17Zm9jdXNDb2xvcn1cclxuICAgICAgICBwbD1cIjQuMTI1cmVtXCJcclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgLz5cclxuICAgICAgPEljb24gY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPntpY29ufTwvSWNvbj5cclxuICAgIDwvSW5wdXRHcm91cFN0eWxlZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRHcm91cDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IExpc3QgPSBzdHlsZWQudWxgXHJcbiAgbGkge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHR9O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIG1pbi13aWR0aDogMTBweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5kYXJrfTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xyXG5cclxuY29uc3QgU2VjdGlvbiA9ICh7IHZhcmlhbnQgPSBcInNlY3Rpb25cIiwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgcmV0dXJuIHZhcmlhbnQgPT09IFwiaGVyb1wiID8gKFxyXG4gICAgPEJveFxyXG4gICAgICBwdD17W1wiOC40Mzc1cmVtXCIsIG51bGwsIG51bGwsIFwiMTEuMjVyZW1cIl19XHJcbiAgICAgIHBiPXtbXCIzLjc1cmVtXCIsIG51bGwsIG51bGwsIFwiOC40Mzc1cmVtXCJdfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKSA6IChcclxuICAgIDxCb3ggcHk9e1tcIjMuNzVyZW1cIiwgbnVsbCwgbnVsbCwgXCI3LjVyZW1cIl19IHsuLi5yZXN0fSAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcblxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IFtcclxuICB7IHZhbHVlOiBcImNob2NvbGF0ZVwiLCBsYWJlbDogXCJDaG9jb2xhdGVcIiB9LFxyXG4gIHsgdmFsdWU6IFwic3RyYXdiZXJyeVwiLCBsYWJlbDogXCJTdHJhd2JlcnJ5XCIgfSxcclxuICB7IHZhbHVlOiBcInZhbmlsbGFcIiwgbGFiZWw6IFwiVmFuaWxsYVwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBnZXRDdXN0b21TdHlsZXMgPSAodGhlbWUsIGFjY2VudENvbG9yLCBiZywgYm9yZGVyLCBpbmRpY2F0b3IpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZHJvcGRvd25JbmRpY2F0b3I6ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkaXNwbGF5OiAhaW5kaWNhdG9yICYmIFwibm9uZVwiLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGluZGljYXRvclNlcGFyYXRvcjogKCkgPT4ge30sXHJcbiAgICBvcHRpb246IChwcm92aWRlZCwgc3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgICBjb2xvcjogc3RhdGUuaXNTZWxlY3RlZCA/IHRoZW1lLmNvbG9yc1thY2NlbnRDb2xvcl0gOiB0aGVtZS5jb2xvcnMuZGFyayxcclxuICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYmcsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY29udHJvbDogKHByb3ZpZGVkLCBzdGF0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByb3ZpZGVkLFxyXG4gICAgICAgIGJvcmRlcjogIWJvcmRlclxyXG4gICAgICAgICAgPyBcIm5vbmVcIlxyXG4gICAgICAgICAgOiBzdGF0ZS5tZW51SXNPcGVuIHx8IHN0YXRlLmlzRm9jdXNlZFxyXG4gICAgICAgICAgPyBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzW2FjY2VudENvbG9yXX0gIWltcG9ydGFudGBcclxuICAgICAgICAgIDogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJ9ICFpbXBvcnRhbnRgLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICAgICAgcGFkZGluZzogXCIwLjI1cmVtIDFyZW1cIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjQ1cHhcIixcclxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiZyxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IFNlbGVjdFN0eWxlZCA9ICh7XHJcbiAgdGhlbWUsXHJcbiAgYmcgPSBcIiNmZmZcIixcclxuICBib3JkZXIgPSB0cnVlLFxyXG4gIGFjY2VudENvbG9yID0gXCJzdWNjZXNzXCIsXHJcbiAgbmFtZSA9IFwiaXRlbVwiLFxyXG4gIGluZGljYXRvciA9IHRydWUsXHJcbiAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zLFxyXG4gIC4uLnJlc3RcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VsZWN0XHJcbiAgICAgIHN0eWxlcz17Z2V0Q3VzdG9tU3R5bGVzKHRoZW1lLCBhY2NlbnRDb2xvciwgYmcsIGJvcmRlciwgaW5kaWNhdG9yKX1cclxuICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb25zWzFdfVxyXG4gICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICBpbnN0YW5jZUlkPVwiaW5JZFwiXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFNlbGVjdFN0eWxlZCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgY29sb3IsIHNwYWNlLCB0eXBvZ3JhcGh5LCBzaGFkb3cgfSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxuY29uc3QgU3BhblN0eWxlZCA9IHN0eWxlZC5zcGFuYFxyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG5gO1xyXG5cclxuY29uc3QgU3BhbiA9ICh7IC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gPFNwYW5TdHlsZWQgey4uLnByb3BzfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwYW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIHNwYWNlLFxyXG4gIGJvcmRlcixcclxuICB0eXBvZ3JhcGh5LFxyXG4gIHNoYWRvdyxcclxuICBmbGV4Ym94LFxyXG4gIGxheW91dCxcclxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxuY29uc3QgU3dpdGNoU3R5bGVkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiA3MnB4O1xyXG4gIGhlaWdodDogMzNweDtcclxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYWN0aXZlLCB0aGVtZSwgYmcgfSkgPT5cclxuICAgIGFjdGl2ZSA/IHRoZW1lLmNvbG9yc1tiZ10gOiBgI2VhZTlmMmB9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICR7Ym9yZGVyfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuICAke2ZsZXhib3h9O1xyXG4gICR7bGF5b3V0fTtcclxuYDtcclxuXHJcbmNvbnN0IFJvdW5kID0gc3R5bGVkLnNwYW5gXHJcbiAgd2lkdGg6IDIxcHg7XHJcbiAgaGVpZ2h0OiAyMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIGxlZnQ6ICR7KHsgYWN0aXZlIH0pID0+IChhY3RpdmUgPyBgY2FsYygxMDAlIC0gMzNweClgIDogYDBgKX07XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbmA7XHJcblxyXG5jb25zdCBTd2l0Y2ggPSAoeyBiZyA9IFwic2Vjb25kYXJ5XCIsIG9uQ2xpY2sgPSAoKSA9PiB7fSwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3dpdGNoID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xyXG4gICAgb25DbGljaygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3dpdGNoU3R5bGVkXHJcbiAgICAgIGJnPXtiZ31cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVN3aXRjaH1cclxuICAgICAgYWN0aXZlPXthY3RpdmUgPyAxIDogMH1cclxuICAgID5cclxuICAgICAgPFJvdW5kIGFjdGl2ZT17YWN0aXZlID8gMSA6IDB9IC8+XHJcbiAgICA8L1N3aXRjaFN0eWxlZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbG9yLCBzcGFjZSwgdHlwb2dyYXBoeSwgc2hhZG93IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbmA7XHJcblxyXG5jb25zdCBQYXJhZ3JhcGhMYXJnZSA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjk7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbmA7XHJcblxyXG5jb25zdCBQYXJhZ3JhcGhTbWFsbCA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzM7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0ID0gKHsgdmFyaWFudCwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGxldCBUZXh0UmVuZGVyO1xyXG5cclxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcclxuICAgIGNhc2UgXCJzbVwiOlxyXG4gICAgICBUZXh0UmVuZGVyID0gUGFyYWdyYXBoU21hbGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImxnXCI6XHJcbiAgICAgIFRleHRSZW5kZXIgPSBQYXJhZ3JhcGhMYXJnZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBUZXh0UmVuZGVyID0gUGFyYWdyYXBoO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxUZXh0UmVuZGVyIGNvbG9yPVwidGV4dFwiIHsuLi5wcm9wc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbG9yLCBzcGFjZSwgdHlwb2dyYXBoeSwgc2hhZG93IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcblxyXG5jb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC1zaXplOiBjYWxjKDEuMzVyZW0gKyAxLjJ2dyk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0xLjJweDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UueGx9IHtcclxuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICB9XHJcblxyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG5gO1xyXG5cclxuY29uc3QgSGVyb1RpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAzdncpO1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxuICBsaW5lLWhlaWdodDogMS4wODM7XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS54bH0ge1xyXG4gICAgZm9udC1zaXplOiAzLjc1cmVtO1xyXG4gIH1cclxuICAke2NvbG9yfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuYDtcclxuXHJcbmNvbnN0IFByZVRpdGxlID0gc3R5bGVkLmg0YFxyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjYzO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX0gIWltcG9ydGFudDtcclxuICAke2NvbG9yfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuYDtcclxuXHJcbmNvbnN0IENhcmRUaXRsZSA9IHN0eWxlZC5oM2BcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNjZweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICAke2NvbG9yfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gKHsgdmFyaWFudCwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgbGV0IFRpdGxlU3R5bGVkID0gU2VjdGlvblRpdGxlO1xyXG5cclxuICBzd2l0Y2ggKHZhcmlhbnQpIHtcclxuICAgIGNhc2UgXCJwcmVcIjpcclxuICAgICAgVGl0bGVTdHlsZWQgPSBQcmVUaXRsZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiY2FyZFwiOlxyXG4gICAgICBUaXRsZVN0eWxlZCA9IENhcmRUaXRsZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiaGVyb1wiOlxyXG4gICAgICBUaXRsZVN0eWxlZCA9IEhlcm9UaXRsZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBUaXRsZVN0eWxlZCA9IFNlY3Rpb25UaXRsZTtcclxuICB9XHJcblxyXG4gIHJldHVybiA8VGl0bGVTdHlsZWQgY29sb3I9XCJoZWFkaW5nXCIgey4uLnJlc3R9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XHJcbiIsImltcG9ydCBCb3ggZnJvbSBcIi4vQm94XCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiO1xyXG5pbXBvcnQgVGV4dCBmcm9tIFwiLi9UZXh0XCI7XHJcbmltcG9ydCBBIGZyb20gXCIuL0FcIjtcclxuaW1wb3J0IEJhZGdlIGZyb20gXCIuL0JhZGdlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuL1NlY3Rpb25cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XHJcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi9DaGVja2JveFwiO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tIFwiLi9JbnB1dEdyb3VwXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4vU2VsZWN0XCI7XHJcbmltcG9ydCBTd2l0Y2ggZnJvbSBcIi4vU3dpdGNoXCI7XHJcbmltcG9ydCBTcGFuIGZyb20gXCIuL1NwYW5cIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBCb3gsXHJcbiAgVGl0bGUsXHJcbiAgVGV4dCxcclxuICBBLFxyXG4gIEJhZGdlLFxyXG4gIEJ1dHRvbixcclxuICBTZWN0aW9uLFxyXG4gIElucHV0LFxyXG4gIENoZWNrYm94LFxyXG4gIElucHV0R3JvdXAsXHJcbiAgU2VsZWN0LFxyXG4gIFN3aXRjaCxcclxuICBTcGFuLFxyXG4gIExpc3QsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vTG9nb1wiO1xyXG5pbXBvcnQgaW1nTSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL2wxL3BuZy9tZXNzYWdlLnBuZ1wiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXIgYmctZWJvbnktY2xheSBkYXJrLW1vZGUtdGV4dHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgey8qIDwhLS0gQ3RhIHNlY3Rpb24gLS0+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMSBwdC1sZy0yMCBwYi0xMyBwYi1sZy0yMCBib3JkZXItYm90dG9tIGJvcmRlci13aWR0aC0xIGJvcmRlci1kZWZhdWx0LWNvbG9yLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBcIj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteGwtNyBjb2wtbGctMTJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gY3RhLWNvbnRlbnQgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi14bC0wIHBiLTkgdGV4dC14bC1sZWZ0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2l6ZS04IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICBNb3N0IGNvbXByZWhlbnNpdmUgam9iIHBvcnRhbFxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWhpdC1ncmF5IGZvbnQtc2l6ZS01IG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICBXZSBtdXN0IGV4cGxhaW4gdG8geW91IGhvdyBhbGwgdGhpcyBtaXN0YWtlbiBpZGVhIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgZGVub3VuY2luZ1xyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIGN0YS1jb250ZW50IGVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXhsLTUgY29sLWxnLTEyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1sZWZ0XCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gY3RhLWJ0bnMgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQteGwtZW5kIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMteGwtY2VudGVyIGZsZXgtd3JhcCBoLTEwMCAgbXgtbjRcIj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZ2FsbGVyeSBidG4teGwgbXgtNCBtdC02IHRleHQtdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVTaWduSW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMb2cgaW5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZ3JlZW4gYnRuLWgtNjAgYnRuLXhsIG14LTQgbXQtNiB0ZXh0LXVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZ0NvbnRleHQudG9nZ2xlU2lnblVwTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBjdGEtYnRucyBlbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyICBwdC0xMiBwdC1sZy0xOSBwYi0xMCBwYi1sZy0xOVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tNiBtYi1sZy0wIG1iLTlcIj5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBmb290ZXIgbG9nbyBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPExvZ28gd2hpdGUgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ28gbWItMTRcIiAvPlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIGZvb3RlciBsb2dvIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gbWVkaWEgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEgbWItMTFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdNfSBjbGFzc05hbWU9XCJhbGlnbi1zZWxmLWNlbnRlciBtci0zXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keSBwbC01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgZm9udC1zaXplLTQgdGV4dC13aGl0ZVwiPkNvbnRhY3QgdXMgYXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1iLTAgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydEB1eHRoZW1lLm5ldFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gbWVkaWEgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIHdpZGdldCBzb2NpYWwgaWNvbiBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwbC0wIGxpc3QtdW5zdHlsZWQgZC1mbGV4IGFsaWduLWl0ZW1zLWVuZCBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB4LTMgbXItMyBmb250LXNpemUtNCBoZWFkaW5nLWRlZmF1bHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBGb2xsb3cgdXMgb246XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBweC0zIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyLWNvbG9yLXByaW1hcnkgaGVhZGluZy1kZWZhdWx0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mIGZvbnQtc2l6ZS0zIHB0LTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgcHgtMyBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3Zlci1jb2xvci1wcmltYXJ5IGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlciBmb250LXNpemUtMyBwdC0yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB4LTMgbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXItY29sb3ItcHJpbWFyeSBoZWFkaW5nLWRlZmF1bHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluLWluIGZvbnQtc2l6ZS0zIHB0LTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPCEtLSB3aWRnZXQgc29jaWFsIGljb24gZW5kIC0tPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tMyBjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXQgd2lkZ2V0MiBtYi1tZC0wIG1iLTEzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gZm9vdGVyIHdpZGdldCB0aXRsZSBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlIGZvbnQtc2l6ZS00IHRleHQtZ3JheSBtYi1tZC04IG1iLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnlcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gZm9vdGVyIHdpZGdldCB0aXRsZSBlbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIHdpZGdldCBzb2NpYWwgbWVudSBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndpZGdldC1saW5rcyBwbC0wIGxpc3QtdW5zdHlsZWQgbGlzdC1ob3Zlci1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dCB1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJlZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSB3aWRnZXQgc29jaWFsIG1lbnUgZW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTMgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0IHdpZGdldDMgbWItc20tMCBtYi0xM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGZvb3RlciB3aWRnZXQgdGl0bGUgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBmb250LXNpemUtNCB0ZXh0LWdyYXkgbWItbWQtOCBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGZvb3RlciB3aWRnZXQgdGl0bGUgZW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSB3aWRnZXQgc29jaWFsIG1lbnUgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3aWRnZXQtbGlua3MgcGwtMCBsaXN0LXVuc3R5bGVkIGxpc3QtaG92ZXItcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVhdHVyZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmljaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlbHAgZGVza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1cHBvcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSB3aWRnZXQgc29jaWFsIG1lbnUgZW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTMgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0IHdpZGdldDQgbWItc20tMCBtYi0xM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGZvb3RlciB3aWRnZXQgdGl0bGUgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBmb250LXNpemUtNCB0ZXh0LWdyYXkgbWItbWQtOCBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBmb290ZXIgd2lkZ2V0IHRpdGxlIGVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gd2lkZ2V0IHNvY2lhbCBtZW51IHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2lkZ2V0LWxpbmtzIHBsLTAgbGlzdC11bnN0eWxlZCBsaXN0LWhvdmVyLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpZ2l0YWwgTWFya2V0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU0VPIGZvciBCdXNpbmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF2YXN0YSBEYXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVUkgRGVzaWduXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gd2lkZ2V0IHNvY2lhbCBtZW51IGVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS0zIGNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldCB3aWRnZXQ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gZm9vdGVyIHdpZGdldCB0aXRsZSBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlIGZvbnQtc2l6ZS00IHRleHQtZ3JheSBtYi1tZC04IG1iLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIExlZ2FsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGZvb3RlciB3aWRnZXQgdGl0bGUgZW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2lkZ2V0LWxpbmtzIHBsLTAgbGlzdC11bnN0eWxlZCBsaXN0LWhvdmVyLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaXZhY3kgUG9saWN5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybXMgJmFtcDsgQ29uZGl0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJldHVybiBQb2xpY3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vRm9vdGVyXCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIERyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gXCJAbjh0YjF0L3VzZS1zY3JvbGwtcG9zaXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VXaW5kb3dTaXplXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IE9mZmNhbnZhcyBmcm9tIFwiLi4vT2ZmY2FudmFzXCI7XHJcbmltcG9ydCBOZXN0ZWRNZW51IGZyb20gXCIuLi9OZXN0ZWRNZW51XCI7XHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vTG9nb1wiO1xyXG5pbXBvcnQgeyBtZW51SXRlbXMgfSBmcm9tIFwiLi9tZW51SXRlbXNcIjtcclxuXHJcbmltcG9ydCBpbWdQIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvaGVhZGVyLXByb2ZpbGUucG5nXCI7XHJcblxyXG5jb25zdCBTaXRlSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgcGFkZGluZzogMTBweCAwIDEwcHggMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIEBtZWRpYSAke2RldmljZS5sZ30ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgJi5zY3JvbGxpbmcge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgfVxyXG4gICAgJi5yZXZlYWwtaGVhZGVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDM0cHggLTExcHggcmdiYSg2NSwgNjIsIDEwMSwgMC4xKTtcclxuICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgYmFja2dyb3VuZDogJHsoeyBkYXJrLCB0aGVtZSB9KSA9PiAoZGFyayA/IHRoZW1lLmNvbG9ycy5kYXJrIDogXCIjZmZmXCIpfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBUb2dnbGVCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGNvbG9yOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+XHJcbiAgICBkYXJrID8gdGhlbWUuY29sb3JzLmxpZ2h0U2hhZGUgOiB0aGVtZS5jb2xvcnMuaGVhZGluZ30haW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogJHsoeyBkYXJrLCB0aGVtZSB9KSA9PlxyXG4gICAgZGFyayA/IHRoZW1lLmNvbG9ycy5saWdodFNoYWRlIDogdGhlbWUuY29sb3JzLmhlYWRpbmd9IWltcG9ydGFudDtcclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgW3Nob3dTY3JvbGxpbmcsIHNldFNob3dTY3JvbGxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93UmV2ZWFsLCBzZXRTaG93UmV2ZWFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgdXNlU2Nyb2xsUG9zaXRpb24oKHsgcHJldlBvcywgY3VyclBvcyB9KSA9PiB7XHJcbiAgICBpZiAoY3VyclBvcy55IDwgMCkge1xyXG4gICAgICBzZXRTaG93U2Nyb2xsaW5nKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd1Njcm9sbGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VyclBvcy55IDwgLTMwMCkge1xyXG4gICAgICBzZXRTaG93UmV2ZWFsKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd1JldmVhbChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2l0ZUhlYWRlclxyXG4gICAgICAgIGNsYXNzTmFtZT17YHNpdGUtaGVhZGVyIHNpdGUtaGVhZGVyLS1zdGlja3kgIHNpdGUtaGVhZGVyLS1hYnNvbHV0ZSBweS03IHB5LXhzLTAgc3RpY2t5LWhlYWRlciAke1xyXG4gICAgICAgICAgZ0NvbnRleHQuaGVhZGVyLmJnQ2xhc3NcclxuICAgICAgICB9ICR7XHJcbiAgICAgICAgICBnQ29udGV4dC5oZWFkZXIuYWxpZ24gPT09IFwibGVmdFwiXHJcbiAgICAgICAgICAgID8gXCJzaXRlLWhlYWRlci0tbWVudS1sZWZ0IFwiXHJcbiAgICAgICAgICAgIDogZ0NvbnRleHQuaGVhZGVyLmFsaWduID09PSBcInJpZ2h0XCJcclxuICAgICAgICAgICAgPyBcInNpdGUtaGVhZGVyLS1tZW51LXJpZ2h0IFwiXHJcbiAgICAgICAgICAgIDogXCJzaXRlLWhlYWRlci0tbWVudS1jZW50ZXIgXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgJHtnQ29udGV4dC5oZWFkZXIudGhlbWUgPT09IFwiZGFya1wiID8gXCJkYXJrLW1vZGUtdGV4dHNcIiA6IFwiIFwifSAke1xyXG4gICAgICAgICAgc2hvd1Njcm9sbGluZyA/IFwic2Nyb2xsaW5nXCIgOiBcIlwiXHJcbiAgICAgICAgfSAke1xyXG4gICAgICAgICAgZ0NvbnRleHQuaGVhZGVyLnJldmVhbCAmJlxyXG4gICAgICAgICAgc2hvd1JldmVhbCAmJlxyXG4gICAgICAgICAgZ0NvbnRleHQuaGVhZGVyLnRoZW1lID09PSBcImRhcmtcIlxyXG4gICAgICAgICAgICA/IFwicmV2ZWFsLWhlYWRlciBiZy1ibGFja2lzaC1ibHVlXCJcclxuICAgICAgICAgICAgOiBnQ29udGV4dC5oZWFkZXIucmV2ZWFsICYmIHNob3dSZXZlYWxcclxuICAgICAgICAgICAgPyBcInJldmVhbC1oZWFkZXJcIlxyXG4gICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIGZsdWlkPXtnQ29udGV4dC5oZWFkZXIuaXNGbHVpZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Z0NvbnRleHQuaGVhZGVyLmlzRmx1aWQgPyBcInByLWxnLTkgcGwtbGctOVwiIDogXCJcIn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBzaXRlLW5hdmJhciBvZmZjYW52YXMtYWN0aXZlIG5hdmJhci1leHBhbmQtbGcgcHgtMCBweS0wIHNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgey8qIDwhLS0gQnJhbmQgTG9nby0tPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgPExvZ28gd2hpdGU9e2dDb250ZXh0LmhlYWRlci50aGVtZSA9PT0gXCJkYXJrXCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1uYXYtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWFpbi1tZW51IGQtbm9uZSBkLWxnLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbCwgaXNFeHRlcm5hbCA9IGZhbHNlLCBuYW1lLCBpdGVtcywgLi4ucmVzdCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc1N1Ykl0ZW1zID0gQXJyYXkuaXNBcnJheShpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtuYW1lICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNTdWJJdGVtcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiIHsuLi5yZXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGUgZ3ItdG9nZ2xlLWFycm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNtYWxsLWRvd25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyLW1lbnUtZHJvcGRvd24gZHJvcGRvd24tbWVudSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChzdWJJdGVtLCBpbmRleFN1YikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzSW5uZXJTdWJJdGVtcyA9IEFycmF5LmlzQXJyYXkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ykl0ZW0uaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1Ykl0ZW0ubmFtZSArIGluZGV4U3VifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc0lubmVyU3ViSXRlbXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcC1tZW51LWl0ZW0gZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGUgZ3ItdG9nZ2xlLWFycm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc21hbGwtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3ItbWVudS1kcm9wZG93biBkcm9wZG93bi1tZW51IGRyb3Bkb3duLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5pdGVtcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbUlubmVyLCBpbmRleElubmVyTW9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1Jbm5lci5uYW1lICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4SW5uZXJNb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1Jbm5lci5pc0V4dGVybmFsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7aXRlbUlubmVyLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtSW5uZXIubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtpdGVtSW5uZXIubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbUlubmVyLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcC1tZW51LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ykl0ZW0uaXNFeHRlcm5hbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7c3ViSXRlbS5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ykl0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtzdWJJdGVtLm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57c3ViSXRlbS5sYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIHsuLi5yZXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRXh0ZXJuYWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake25hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7Z0NvbnRleHQuaGVhZGVyLmJ1dHRvbiA9PT0gXCJjdGFcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnRuIG1sLWF1dG8gbWwtbGctMCBtci02IG1yLWxnLTAgZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2BidG4gYnRuLSR7Z0NvbnRleHQuaGVhZGVyLnZhcmlhbnR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2dDb250ZXh0LmhlYWRlci5idXR0b25UZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9ICovfVxyXG5cclxuICAgICAgICAgICAge2dDb250ZXh0LmhlYWRlci5idXR0b24gPT09IFwicHJvZmlsZVwiICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idG4tZGV2aWRlciBtbC1hdXRvIG1sLWxnLTUgcGwtMiBkLW5vbmUgZC14cy1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtMyBtbC03IGZvbnQtc2l6ZS03IG5vdGlmaWNhdGlvbi1ibG9jayBmbGV4LXktY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmVsbCBoZWFkaW5nLWRlZmF1bHQtY29sb3JcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtMyBjb3VudCBmb250LXdlaWdodC1zZW1pYm9sZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgY2lyY2xlLTI0IGJvcmRlciBib3JkZXItd2lkdGgtMyBib3JkZXIgYm9yZGVyLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGNsYXNzTmFtZT1cInNob3ctZ3ItZHJvcGRvd24gcHktNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGVcclxuICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9pbGUgbWVkaWEgbWwtNyBmbGV4LXktY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZS00MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93biBoZWFkaW5nLWRlZmF1bHQtY29sb3IgbWwtNlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICB7c2l6ZS53aWR0aCA8PSA5OTEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uTWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnci1tZW51LWRyb3Bkb3duIGJvcmRlci0wIGJvcmRlci13aWR0aC0yIHB5LTIgdy1hdXRvIGJnLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBweS0yIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBweS0yIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIiBkcm9wZG93bi1pdGVtIHB5LTIgdGV4dC1yZWQgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duLk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBnci1tZW51LWRyb3Bkb3duIGRyb3Bkb3duLXJpZ2h0IGJvcmRlci0wIGJvcmRlci13aWR0aC0yIHB5LTIgdy1hdXRvIGJnLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBweS0yIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBweS0yIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIiBkcm9wZG93bi1pdGVtIHB5LTIgdGV4dC1yZWQgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7Z0NvbnRleHQuaGVhZGVyLmJ1dHRvbiA9PT0gXCJhY2NvdW50XCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0bnMgaGVhZGVyLWJ0bi1kZXZpZGVyIG1sLWF1dG8gcHItMiBtbC1sZy02IGQtbm9uZSBkLXhzLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tdHJhbnNwYXJlbnQgdGV4dC11cHBlcmNhc2UgZm9udC1zaXplLTMgaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvY3VzLXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ0NvbnRleHQudG9nZ2xlU2lnbkluTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgSW5pY2lhciBzZXNpw7NuXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLSR7Z0NvbnRleHQuaGVhZGVyLnZhcmlhbnR9IHRleHQtdXBwZXJjYXNlIGZvbnQtc2l6ZS0zYH1cclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ0NvbnRleHQudG9nZ2xlU2lnblVwTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUmVnaXN0cmFyc2VcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXZiYXItdG9nZ2xlciBidG4tY2xvc2Utb2ZmLWNhbnZhcyBtbC0zICR7XHJcbiAgICAgICAgICAgICAgICBnQ29udGV4dC52aXNpYmxlT2ZmQ2FudmFzID8gXCJjb2xsYXBzZWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2JpbGUtbWVudVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1tZW51XCJcclxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Z0NvbnRleHQudG9nZ2xlT2ZmQ2FudmFzfVxyXG4gICAgICAgICAgICAgIGRhcms9e2dDb250ZXh0LmhlYWRlci50aGVtZSA9PT0gXCJkYXJrXCIgPyAxIDogMH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2ltcGxlLXJlbW92ZSBpY29uLWNsb3NlXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudS0zNCBpY29uLWJ1cmdlciBkLWJsb2NrXCI+PC9pPlxyXG4gICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L1NpdGVIZWFkZXI+XHJcbiAgICAgIDxPZmZjYW52YXNcclxuICAgICAgICBzaG93PXtnQ29udGV4dC52aXNpYmxlT2ZmQ2FudmFzfVxyXG4gICAgICAgIG9uSGlkZU9mZmNhbnZhcz17Z0NvbnRleHQudG9nZ2xlT2ZmQ2FudmFzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE5lc3RlZE1lbnUgbWVudUl0ZW1zPXttZW51SXRlbXN9IC8+XHJcbiAgICAgIDwvT2ZmY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcbiIsImV4cG9ydCBjb25zdCBtZW51SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJob21lXCIsXHJcbiAgICBsYWJlbDogXCJIb21lXCIsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IG5hbWU6IFwiXCIsIGxhYmVsOiBcIkhvbWUgMVwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJsYW5kaW5nLTJcIiwgbGFiZWw6IFwiSG9tZSAyXCIgfSxcclxuICAgICAgeyBuYW1lOiBcImxhbmRpbmctM1wiLCBsYWJlbDogXCJIb21lIDNcIiB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwicGFnZXNcIixcclxuICAgIGxhYmVsOiBcIlBhZ2VzXCIsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJqb2ItcGFnZXNcIixcclxuICAgICAgICBsYWJlbDogXCJKb2IgUGFnZXNcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcInNlYXJjaC1ncmlkXCIsIGxhYmVsOiBcIkpvYiBHcmlkXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJzZWFyY2gtbGlzdFwiLCBsYWJlbDogXCJKb2IgTGlzdFwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiam9iLWRldGFpbHNcIiwgbGFiZWw6IFwiSm9iIERldGFpbHNcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImRhc2hib2FyZFwiLFxyXG4gICAgICAgIGxhYmVsOiBcIkRhc2hib2FyZFwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwiZGFzaGJvYXJkLW1haW5cIiwgbGFiZWw6IFwiRGFzaGJvYXJkIE1haW5cIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImRhc2hib2FyZC1zZXR0aW5nc1wiLCBsYWJlbDogXCJEYXNoYm9hcmQgU2V0dGluZ3NcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImRhc2hib2FyZC1hcHBsaWNhbnRzXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkRhc2hib2FyZCBBcHBsaWNhbnRzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImRhc2hib2FyZC1qb2JzXCIsIGxhYmVsOiBcIkRhc2hib2FyZCBQb3N0ZWQgSm9ic1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiY2FuZGlkYXRlXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiQ2FuZGlkYXRlIFBhZ2VzXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgbmFtZTogXCJjYW5kaWRhdGUtcHJvZmlsZVwiLCBsYWJlbDogXCJDYW5kaWRhdGUgUHJvZmlsZSAwMVwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiY2FuZGlkYXRlLXByb2ZpbGUtMlwiLCBsYWJlbDogXCJDYW5kaWRhdGUgUHJvZmlsZSAwMlwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwic2VhcmNoXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiU2VhcmNoIFBhZ2VzXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgbmFtZTogXCJzZWFyY2gtZ3JpZFwiLCBsYWJlbDogXCJTZWFyY2ggR3JpZFwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic2VhcmNoLWxpc3RcIiwgbGFiZWw6IFwiU2VhcmNoIExpc3QgMDFcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInNlYXJjaC1saXN0LTJcIiwgbGFiZWw6IFwiU2VhcmNoIExpc3QgMDJcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImNvbXBhbnktcHJvZmlsZVwiLFxyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnkgUHJvZmlsZVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiZXNzZW50aWFsXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiRXNzZW50aWFsXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgbmFtZTogXCJmYXFcIiwgbGFiZWw6IFwiRkFRXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCI0MDRcIiwgbGFiZWw6IFwiNDA0XCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJwcmljaW5nXCIsIGxhYmVsOiBcIlByaWNpbmdcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImNvbnRhY3RcIiwgbGFiZWw6IFwiQ29udGFjdFwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImh0dHBzOi8vdXh0aGVtZS5uZXQvcHJvZHVjdC1zdXBwb3J0L1wiLFxyXG4gICAgbGFiZWw6IFwiU3VwcG9ydFwiLFxyXG4gICAgaXNFeHRlcm5hbDogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEhlbG1ldCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xyXG5cclxuaW1wb3J0IFNpZGViYXJEYXNoYm9hcmQgZnJvbSBcIi4uL1NpZGViYXJEYXNoYm9hcmRcIjtcclxuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSBcIi4uL01vZGFsVmlkZW9cIjtcclxuaW1wb3J0IE1vZGFsQXBwbGljYXRpb24gZnJvbSBcIi4uL01vZGFsQXBwbGljYXRpb25cIjtcclxuaW1wb3J0IE1vZGFsU2lnbkluIGZyb20gXCIuLi9Nb2RhbFNpZ25JblwiO1xyXG5pbXBvcnQgTW9kYWxTaWduVXAgZnJvbSBcIi4uL01vZGFsU2lnblVwXCI7XHJcblxyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL2dsb2JhbFN0eWxlXCI7XHJcblxyXG5pbXBvcnQgaW1nRmF2aWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2Zhdmljb24ucG5nXCI7XHJcblxyXG5pbXBvcnQgeyBnZXQsIG1lcmdlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuLy8gdGhlIGZ1bGwgdGhlbWUgb2JqZWN0XHJcbmltcG9ydCB7IHRoZW1lIGFzIGJhc2VUaGVtZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5cclxuY29uc3QgTG9hZGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB6LWluZGV4OiA5OTk5OTk5OTk5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQgMC41cztcclxuICAmLmluQWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gb3B0aW9ucyBmb3IgZGlmZmVyZW50IGNvbG9yIG1vZGVzXHJcbmNvbnN0IG1vZGVzID0geyBsaWdodDogXCJsaWdodFwiLCBkYXJrOiBcImRhcmtcIiB9O1xyXG5cclxuLy8gbWVyZ2UgdGhlIGNvbG9yIG1vZGUgd2l0aCB0aGUgYmFzZSB0aGVtZVxyXG4vLyB0byBjcmVhdGUgYSBuZXcgdGhlbWUgb2JqZWN0XHJcbmNvbnN0IGdldFRoZW1lID0gKG1vZGUpID0+XHJcbiAgbWVyZ2Uoe30sIGJhc2VUaGVtZSwge1xyXG4gICAgY29sb3JzOiBnZXQoYmFzZVRoZW1lLmNvbG9ycy5tb2RlcywgbW9kZSwgYmFzZVRoZW1lLmNvbG9ycyksXHJcbiAgfSk7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgcGFnZUNvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW3Zpc2libGVMb2FkZXIsIHNldFZpc2libGVMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCh7IG9uY2U6IHRydWUgfSk7XHJcbiAgICBzZXRWaXNpYmxlTG9hZGVyKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIE5hdmJhciBzdHlsZSBiYXNlZCBvbiBzY3JvbGxcclxuICBjb25zdCBlbGVSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcInBvcHN0YXRlXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIFRoZSBwb3BzdGF0ZSBldmVudCBpcyBmaXJlZCBlYWNoIHRpbWUgd2hlbiB0aGUgY3VycmVudCBoaXN0b3J5IGVudHJ5IGNoYW5nZXMuXHJcbiAgICAgICAgZ0NvbnRleHQuY2xvc2VPZmZDYW52YXMoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJwdXNoU3RhdGVcIixcclxuICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gVGhlIHB1c2hzdGF0ZSBldmVudCBpcyBmaXJlZCBlYWNoIHRpbWUgd2hlbiB0aGUgY3VycmVudCBoaXN0b3J5IGVudHJ5IGNoYW5nZXMuXHJcbiAgICAgICAgZ0NvbnRleHQuY2xvc2VPZmZDYW52YXMoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgfSwgW2dDb250ZXh0XSk7XHJcblxyXG4gIGlmIChwYWdlQ29udGV4dC5sYXlvdXQgPT09IFwiYmFyZVwiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGhlbWVQcm92aWRlclxyXG4gICAgICAgIHRoZW1lPXtcclxuICAgICAgICAgIGdDb250ZXh0LnRoZW1lRGFyayA/IGdldFRoZW1lKG1vZGVzLmRhcmspIDogZ2V0VGhlbWUobW9kZXMubGlnaHQpXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBkYXRhLXRoZW1lLW1vZGUtcGFuZWwtYWN0aXZlIGRhdGEtdGhlbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICA8dGl0bGU+SnVzdENhbXA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9e2ltZ0Zhdmljb259IC8+XHJcbiAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgIDxMb2FkZXIgaWQ9XCJsb2FkaW5nXCIgY2xhc3NOYW1lPXt2aXNpYmxlTG9hZGVyID8gXCJcIiA6IFwiaW5BY3RpdmVcIn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Mb2FkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtd3JhcHBlciBvdmVyZmxvdy1oaWRkZW5cIiByZWY9e2VsZVJlZn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxNb2RhbFZpZGVvIC8+XHJcbiAgICAgICAgICA8TW9kYWxBcHBsaWNhdGlvbiAvPlxyXG4gICAgICAgICAgPE1vZGFsU2lnbkluIC8+XHJcbiAgICAgICAgICA8TW9kYWxTaWduVXAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChwYWdlQ29udGV4dC5sYXlvdXQgPT09IFwiZGFzaGJvYXJkXCIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyXHJcbiAgICAgICAgdGhlbWU9e1xyXG4gICAgICAgICAgZ0NvbnRleHQudGhlbWVEYXJrID8gZ2V0VGhlbWUobW9kZXMuZGFyaykgOiBnZXRUaGVtZShtb2Rlcy5saWdodClcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGRhdGEtdGhlbWUtbW9kZS1wYW5lbC1hY3RpdmUgZGF0YS10aGVtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5KdXN0Q2FtcDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj17aW1nRmF2aWNvbn0gLz5cclxuICAgICAgICAgIDwvSGVsbWV0PlxyXG4gICAgICAgICAgPExvYWRlciBpZD1cImxvYWRpbmdcIiBjbGFzc05hbWU9e3Zpc2libGVMb2FkZXIgPyBcIlwiIDogXCJpbkFjdGl2ZVwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9uZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xvYWRlcj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS13cmFwcGVyIG92ZXJmbG93LWhpZGRlbiBiZy1kZWZhdWx0LTJcIlxyXG4gICAgICAgICAgICByZWY9e2VsZVJlZn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEhlYWRlciBpc0Rhcms9e2dDb250ZXh0LmhlYWRlckRhcmt9IC8+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaGJvYXJkIC8+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxNb2RhbFZpZGVvIC8+XHJcbiAgICAgICAgICA8TW9kYWxBcHBsaWNhdGlvbiAvPlxyXG4gICAgICAgICAgPE1vZGFsU2lnbkluIC8+XHJcbiAgICAgICAgICA8TW9kYWxTaWduVXAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGhlbWVQcm92aWRlclxyXG4gICAgICAgIHRoZW1lPXtcclxuICAgICAgICAgIGdDb250ZXh0LnRoZW1lRGFyayA/IGdldFRoZW1lKG1vZGVzLmRhcmspIDogZ2V0VGhlbWUobW9kZXMubGlnaHQpXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBkYXRhLXRoZW1lLW1vZGUtcGFuZWwtYWN0aXZlIGRhdGEtdGhlbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICA8dGl0bGU+SnVzdENhbXA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9e2ltZ0Zhdmljb259IC8+XHJcbiAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgIDxMb2FkZXIgaWQ9XCJsb2FkaW5nXCIgY2xhc3NOYW1lPXt2aXNpYmxlTG9hZGVyID8gXCJcIiA6IFwiaW5BY3RpdmVcIn0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS13cmFwcGVyIG92ZXJmbG93LWhpZGRlblwiIHJlZj17ZWxlUmVmfT5cclxuICAgICAgICAgICAgPEhlYWRlciBpc0Rhcms9e2dDb250ZXh0LmhlYWRlckRhcmt9IC8+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgICAgIDxGb290ZXIgaXNEYXJrPXtnQ29udGV4dC5mb290ZXJEYXJrfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE1vZGFsVmlkZW8gLz5cclxuICAgICAgICAgIDxNb2RhbEFwcGxpY2F0aW9uIC8+XHJcbiAgICAgICAgICA8TW9kYWxTaWduSW4gLz5cclxuICAgICAgICAgIDxNb2RhbFNpZ25VcCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9MYXlvdXQnIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgaW1nTDFMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvbG9nby1tYWluLWJsYWNrLnBuZ1wiO1xyXG5pbXBvcnQgaW1nTDFMb2dvV2hpdGUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dvLW1haW4td2hpdGUucG5nXCI7XHJcblxyXG5jb25zdCBMb2dvID0gKHsgd2hpdGUsIGhlaWdodCwgY2xhc3NOYW1lID0gXCJcIiwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT17YGQtYmxvY2sgJHtjbGFzc05hbWV9YH0gey4uLnJlc3R9PlxyXG4gICAgICAgIHt3aGl0ZSA/IChcclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWdMMUxvZ29XaGl0ZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltZ0wxTG9nb30gYWx0PVwiXCIgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9Mb2dvJ1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBQcm9maWxlU2lkZWJhciBmcm9tIFwiLi4vUHJvZmlsZVNpZGViYXJcIjtcclxuXHJcbmltcG9ydCBpbWdGMSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL2wyL3BuZy9mZWF0dXJlZC1qb2ItbG9nby0xLnBuZ1wiO1xyXG5pbXBvcnQgaW1nRjIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9sMS9wbmcvZmVhdHVyZS1icmFuZC0xLnBuZ1wiO1xyXG5pbXBvcnQgaW1nRjMgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9zdmcvaGFydmFyZC5zdmdcIjtcclxuaW1wb3J0IGltZ0Y0IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2Uvc3ZnL21pdC5zdmdcIjtcclxuaW1wb3J0IGltZ0wgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9zdmcvaWNvbi1sb2FjdGlvbi1waW4tYmxhY2suc3ZnXCI7XHJcblxyXG5jb25zdCBNb2RhbFN0eWxlZCA9IHN0eWxlZChNb2RhbClgXHJcbiAgLyogJi5tb2RhbCB7XHJcbiAgICB6LWluZGV4OiAxMDA1MDtcclxuICB9ICovXHJcbiAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTW9kYWxTaWduSW4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgZ0NvbnRleHQudG9nZ2xlQXBwbGljYXRpb25Nb2RhbCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxTdHlsZWRcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgICBjZW50ZXJlZFxyXG4gICAgICBzaG93PXtnQ29udGV4dC5hcHBsaWNhdGlvbk1vZGFsVmlzaWJsZX1cclxuICAgICAgb25IaWRlPXtnQ29udGV4dC50b2dnbGVBcHBsaWNhdGlvbk1vZGFsfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLTMyIGJ0bi1yZXNldCBiZy13aGl0ZSBwb3MtYWJzLXRyIG10LW1kLW42IG1yLWxnLW42IGZvY3VzLXJlc2V0IHotaW5kZXgtc3VwcGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1tb2RhbC1tYWluIGJnLXdoaXRlIHJvdW5kZWQtOCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIExlZnQgU2lkZWJhciBTdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXhsLTMgY29sLWxnLTQgY29sLW1kLTUgbWItMTMgbWItbGctMCBib3JkZXItcmlnaHQgYm9yZGVyLW1lcmN1cnlcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlU2lkZWJhciAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIExlZnQgU2lkZWJhciBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIE1pZGRsZSBDb250ZW50IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wteGwtNiBjb2wtbGctOCBjb2wtbWQtNyBvcmRlci0yIG9yZGVyLWxnLTEgYm9yZGVyLXJpZ2h0IGJvcmRlci1tZXJjdXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtNCBvdmVyZmxvdy1hdXRvIGgtMTE3M1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBFeGNlcnB0IFN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci14bC0wIHByLXh4bC0xNCBwLTUgcHgteHMtMTIgcHQtNyBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS02IGZvbnQtd2VpZ2h0LXNlbWlib2xkIG1iLTcgbXQtNSB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBIHRhbGVudGVkIHByb2Zlc3Npb25hbCB3aXRoIGFuIGFjYWRlbWljIGJhY2tncm91bmQgaW4gSVRcclxuICAgICAgICAgICAgICAgICAgICAgIGFuZCBwcm92ZW4gY29tbWVyY2lhbCBkZXZlbG9wbWVudCBleHBlcmllbmNlIGFzIEMrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGV2ZWxvcGVyIHNpbmNlIDE5OTkuIEhhcyBhIHNvdW5kIGtub3dsZWRnZSBvZiB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgIHNvZnR3YXJlIGRldmVsb3BtZW50IGxpZmUgY3ljbGUuIFdhcyBpbnZvbHZlZCBpbiBtb3JlIHRoYW5cclxuICAgICAgICAgICAgICAgICAgICAgIDE0MCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBvdXRzb3VyY2luZyBwcm9qZWN0cy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VzOiBDL0MrKywgLk5FVCBDKyssIFB5dGhvbiwgQmFzaCxcclxuICAgICAgICAgICAgICAgICAgICAgIFNoZWxsLCBQRVJMLCBSZWd1bGFyIGV4cHJlc3Npb25zLCBQeXRob24sIEFjdGl2ZS1zY3JpcHQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gRXhjZXJwdCBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBTa2lsbHMgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLW1lcmN1cnkgcHIteGwtMCBwci14eGwtMTQgcC01IHBsLXhzLTEyIHB0LTcgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXNpemUtNiBmb250LXdlaWdodC1zZW1pYm9sZCBtYi03IG10LTUgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTa2lsbHNcclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJnLXBvbGFyIHRleHQtYmxhY2stMiAgbXItNiBweC03IG10LTIgbWItMiBmb250LXNpemUtMyByb3VuZGVkLTMgbWluLWhlaWdodC0zMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2lsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctcG9sYXIgdGV4dC1ibGFjay0yICBtci02IHB4LTcgbXQtMiBtYi0yIGZvbnQtc2l6ZS0zIHJvdW5kZWQtMyBtaW4taGVpZ2h0LTMyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpcmVmcmFtaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiZy1wb2xhciB0ZXh0LWJsYWNrLTIgIG1yLTYgcHgtNyBtdC0yIG1iLTIgZm9udC1zaXplLTMgcm91bmRlZC0zIG1pbi1oZWlnaHQtMzIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvdG90eXBpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJnLXBvbGFyIHRleHQtYmxhY2stMiAgbXItNiBweC03IG10LTIgbWItMiBmb250LXNpemUtMyByb3VuZGVkLTMgbWluLWhlaWdodC0zMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctcG9sYXIgdGV4dC1ibGFjay0yICBtci02IHB4LTcgbXQtMiBtYi0yIGZvbnQtc2l6ZS0zIHJvdW5kZWQtMyBtaW4taGVpZ2h0LTMyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhdGVyZmFsbCBNb2RlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctcG9sYXIgdGV4dC1ibGFjay0yICBtci02IHB4LTcgbXQtMiBtYi0yIGZvbnQtc2l6ZS0zIHJvdW5kZWQtMyBtaW4taGVpZ2h0LTMyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBMYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJnLXBvbGFyIHRleHQtYmxhY2stMiAgbXItNiBweC03IG10LTIgbWItMiBmb250LXNpemUtMyByb3VuZGVkLTMgbWluLWhlaWdodC0zMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm93c2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2tpbGxzIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIENhcmQgU2VjdGlvbiBTdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItbWVyY3VyeSBwLTUgcGwteHMtMTIgcHQtNyBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS02IGZvbnQtd2VpZ2h0LXNlbWlib2xkIG1iLTcgbXQtNSB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFdvcmsgRXhwcmVyaWVuY2VcclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBDYXJkIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHItMTEgbWItOSBmbGV4LXdyYXAgZmxleC1zbS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmUtNzIgZC1ibG9jayBtci04IG1iLTcgbWItc20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdGMX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgbXQtbjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS01IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlYWQgUHJvZHVjdCBEZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtZGVmYXVsdC1jb2xvciBsaW5lLWhlaWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFpcmFibmJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCIgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdW4gMjAxNyAtIEFwcmlsIDIwMjAtIDMgeWVhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nTH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IFlvcmssIFVTQVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhcmQgRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgQ2FyZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHByLTExIG1iLTkgZmxleC13cmFwIGZsZXgtc20tbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3F1YXJlLTcyIGQtYmxvY2sgbXItOCBtYi03IG1iLXNtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nRjJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIG10LW4yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtNSBmb250LXdlaWdodC1zZW1pYm9sZCB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5pb3IgVUkvVVggRGVzaWduZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWRlZmF1bHQtY29sb3IgbGluZS1oZWlnaHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb29nbGUgSW5jXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlbiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdW4gMjAxNyAtIEFwcmlsIDIwMjAtIDMgeWVhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nTH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IFlvcmssIFVTQVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhcmQgRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIENhcmQgU2VjdGlvbiBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBDYXJkIFNlY3Rpb24gU3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLW1lcmN1cnkgcC01IHBsLXhzLTEyIHB0LTcgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXNpemUtNiBmb250LXdlaWdodC1zZW1pYm9sZCBtYi03IG10LTUgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFZHVjYXRpb25cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBDYXJkIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHItMTEgbWItOSBmbGV4LXdyYXAgZmxleC1zbS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmUtNzIgZC1ibG9jayBtci04IG1iLTcgbWItc20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdGM30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgbXQtbjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS01IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hc3RlcnMgaW4gQXJ0IERlc2lnblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtZGVmYXVsdC1jb2xvciBsaW5lLWhlaWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhhcnZhcmQgVW5pdmVyc2l0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LW1kLWJldHdlZW4gZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVuIDIwMTcgLSBBcHJpbCAyMDIwLSAzIHllYXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ0x9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyeWxpbiwgVVNBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgQ2FyZCBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBDYXJkIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHItMTEgbWItOSBmbGV4LXdyYXAgZmxleC1zbS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmUtNzIgZC1ibG9jayBtci04IG1iLTcgbWItc20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2lyY2xlLTcyXCIgc3JjPXtpbWdGNH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgbXQtbjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS01IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2hlbG9yIGluIFNvZnR3YXJlIEVuZ2luZWVyaW5ne1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtZGVmYXVsdC1jb2xvciBsaW5lLWhlaWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmlwYWwgSW5zdGl0dXRlIG9mIFRlY2hub2xvZ3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlZCAyMDEyIC0gQXByaWwgMjAxNiAtIDQgeWVhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nTH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IFlvcmssIFVTQVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhcmQgRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgQ2FyZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHByLTExIG1iLTkgZmxleC13cmFwIGZsZXgtc20tbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3F1YXJlLTcyIGQtYmxvY2sgbXItOCBtYi03IG1iLXNtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNpcmNsZS03MlwiIHNyYz17aW1nRjR9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIG10LW4yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtNSBmb250LXdlaWdodC1zZW1pYm9sZCB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNoZWxvciBpbiBTb2Z0d2FyZSBFbmdpbmVlcmluZ3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWRlZmF1bHQtY29sb3IgbGluZS1oZWlnaHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYW5pcGFsIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlbiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWQgMjAxMiAtIEFwcmlsIDIwMTYgLSA0IHllYXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ0x9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBZb3JrLCBVU0FcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBDYXJkIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBDYXJkIFNlY3Rpb24gRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIE1pZGRsZSBDb250ZW50IC0tPiAqL31cclxuICAgICAgICAgICAgICB7LyogPCEtLSBSaWdodCBTaWRlYmFyIFN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wteGwtMyBvcmRlci0zIG9yZGVyLWxnLTIgYmctZGVmYXVsdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEzIG1iLWxnLTAgbXQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhsIG1iLTcgZC1ibG9jayBteC1hdXRvIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZ3JheSBidG4teGwgbWItNyBkLWJsb2NrIG14LWF1dG8gdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWplY3RcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBSaWdodCBTaWRlYmFyIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgIDwvTW9kYWxTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsU2lnbkluO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vTW9kYWxBcHBsaWNhdGlvblwiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuXHJcbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkKE1vZGFsKWBcclxuICAvKiAmLm1vZGFsIHtcclxuICAgIHotaW5kZXg6IDEwMDUwO1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IE1vZGFsU2lnbkluID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dQYXNzLCBzZXRTaG93UGFzc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIGdDb250ZXh0LnRvZ2dsZVNpZ25Jbk1vZGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UGFzcyghc2hvd1Bhc3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiBudWxsIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IEF1dGhTZXJ2aWNlLmxvZ2luKHN0YXRlLmVtYWlsLCBzdGF0ZS5wYXNzd29yZCk7XHJcbiAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZC1tYWluXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVycm9yIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuICAgIGNvbnNvbGUubG9nKFwiaWQ6XCIgKyBlLnRhcmdldC5pZCArIFwiIHZhbG9yOiBcIiArIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIG5ld1N0YXRlW2UudGFyZ2V0LmlkXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgY29uc29sZS5sb2cobmV3U3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxTdHlsZWRcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgICBjZW50ZXJlZFxyXG4gICAgICBzaG93PXtnQ29udGV4dC5zaWduSW5Nb2RhbFZpc2libGV9XHJcbiAgICAgIG9uSGlkZT17Z0NvbnRleHQudG9nZ2xlU2lnbkluTW9kYWx9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLTMyIGJ0bi1yZXNldCBiZy13aGl0ZSBwb3MtYWJzLXRyIG10LW1kLW42IG1yLWxnLW42IGZvY3VzLXJlc2V0IHotaW5kZXgtc3VwcGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLW1vZGFsLW1haW4gYmctd2hpdGUgcm91bmRlZC04IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xMCBwYi02IHBsLTExIHByLTEyIGJnLWJsYWNrLTIgaC0xMDAgZC1mbGV4IGZsZXgtY29sdW1uIGRhcmstbW9kZS10ZXh0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi05XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtOCB0ZXh0LXdoaXRlIGxpbmUtaGVpZ2h0LXJlc2V0IHBiLTQgbGluZS1oZWlnaHQtMXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQmllbnZlbmlkby9hXHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgZm9udC1zaXplLTQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEluaWNpZSBzZXNpw7NuIHBhcmEgYWNjZWRlciBhIHN1IGN1ZW50YSB5IGNvbnRyYXRhclxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Zlc2lvbmFsZXMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItZGVmYXVsdC1jb2xvci0yIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbXgtbjkgcHQtNiBmbGV4LXhzLXJvdyBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBweC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTcgdGV4dC13aGl0ZVwiPjI5NTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LXdoaXRlIGdyLW9wYWNpdHktNSBsaW5lLWhlaWdodC0xcDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IGpvYnMgcG9zdGVkIHRvZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHB4LTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNyB0ZXh0LXdoaXRlXCI+MTQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC13aGl0ZSBnci1vcGFjaXR5LTUgbGluZS1oZWlnaHQtMXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBjb21wYW5pZXMgcmVnaXN0ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLTIgaC0xMDAgcHgtMTEgcHQtMTEgcGItN1wiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLWFsbHBvcnRzIGgtcHgtNDggZmxleC1hbGwtY2VudGVyIHctMTAwIHB4LTYgcm91bmRlZC01IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbiBwb3MteHMtYWJzLWNsIGZvbnQtc2l6ZS03IG1sLXhzLTRcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nIGluIHdpdGggTGlua2VkSW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgdGV4dC13aGl0ZSBiZy1wb3BweSBoLXB4LTQ4IGZsZXgtYWxsLWNlbnRlciB3LTEwMCBweC02IHJvdW5kZWQtNSBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ29vZ2xlIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgaW4gd2l0aCBHb29nbGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgdGV4dC13aGl0ZSBiZy1tYXJpbm8gaC1weC00OCBmbGV4LWFsbC1jZW50ZXIgdy0xMDAgcHgtNiByb3VuZGVkLTUgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZSBwb3MteHMtYWJzLWNsIGZvbnQtc2l6ZS03IG1sLXhzLTRcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9nIGluIHdpdGggRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwib3ItZGV2aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtMyBsaW5lLWhlaWdodC1yZXNldCBcIj5Pcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFLW1haWxcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVqZW1wbG9AZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3UgY29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvdy1wYXNzd29yZCBwb3MtYWJzLWNyIGZhcyBtci02IHRleHQtYmxhY2stMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZVwiPm5vbmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0ZXJtcy1jaGVja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnci1jaGVjay1pbnB1dCBkLWZsZXggIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlcm1zLWNoZWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveCBtci01XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgbWItMCBsaW5lLWhlaWdodC1yZXNldCBtYi0xIGQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgcGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC1kb2RnZXIgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEZvcmdldCBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbWVkaXVtIHctMTAwIHJvdW5kZWQtNSB0ZXh0LXVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBJbmljaWFyIHNlc2nDs257XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWNlbnRlciBoZWFkaW5nLWRlZmF1bHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICDCv05vIHBvc2VlIHVuYSBjdWVudGE/e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ3JlZSB1bmEgY3VlbnRhIGdyYXR1aXRhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgIDwvTW9kYWxTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsU2lnbkluO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vTW9kYWxTaWduSW5cIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBBdXRoU2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvcmVcIjtcclxuXHJcbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkKE1vZGFsKWBcclxuICAvKiAmLm1vZGFsIHtcclxuICAgIHotaW5kZXg6IDEwMDUwO1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IHNleG8gPSBbXHJcbiAgeyB2YWx1ZTogXCJGXCIsIGxhYmVsOiBcIkZlbWVuaW5vXCIgfSxcclxuICB7IHZhbHVlOiBcIk1cIiwgbGFiZWw6IFwiTWFzY3VsaW5vXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IE1vZGFsU2lnblVwID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dQYXNzRmlyc3QsIHNldFNob3dQYXNzRmlyc3RdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3Nob3dQYXNzU2Vjb25kLCBzZXRTaG93UGFzc1NlY29uZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGVtYWlsMjogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgYmlydGhEYXRlOiBcIlwiLFxyXG4gICAgc2V4OiBcIkZcIixcclxuICAgIHNleExhYmVsOiBcIkZlbWVuaW5vXCIsXHJcbiAgICBpc1Byb2Zlc3Npb25hbDogZmFsc2UsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIGdDb250ZXh0LnRvZ2dsZVNpZ25VcE1vZGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRGaXJzdCA9ICgpID0+IHtcclxuICAgIHNldFNob3dQYXNzRmlyc3QoIXNob3dQYXNzRmlyc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkU2Vjb25kID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1Bhc3NTZWNvbmQoIXNob3dQYXNzU2Vjb25kKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVJc1Byb2Zlc3Npb25hbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgaWYgKG5ld1N0YXRlLmlzUHJvZmVzc2lvbmFsKSB7XHJcbiAgICAgIG5ld1N0YXRlW1wiaXNQcm9mZXNzaW9uYWxcIl0gPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1N0YXRlW1wiaXNQcm9mZXNzaW9uYWxcIl0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2V0U3RhdGUobmV3U3RhdGUpO1xyXG5cclxuICAgIC8vIGlmIChzdGF0ZS5pc1Byb2Zlc3Npb25hbCkge1xyXG4gICAgLy8gICBzZXRTdGF0ZSh7IGlzUHJvZmVzc2lvbmFsOiBmYWxzZSB9KTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHNldFN0YXRlKHsgaXNQcm9mZXNzaW9uYWw6IHRydWUgfSk7XHJcbiAgICAvLyB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IG51bGwgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgQXV0aFNlcnZpY2UucmVnaXN0ZXIoXHJcbiAgICAgICAgc3RhdGUubmFtZSxcclxuICAgICAgICBzdGF0ZS5sYXN0TmFtZSxcclxuICAgICAgICBzdGF0ZS5lbWFpbDIsXHJcbiAgICAgICAgc3RhdGUuYmlydGhEYXRlLFxyXG4gICAgICAgIHN0YXRlLnNleCxcclxuICAgICAgICBzdGF0ZS5wYXNzd29yZCxcclxuICAgICAgICBzdGF0ZS5pc1Byb2Zlc3Npb25hbFxyXG4gICAgICApO1xyXG4gICAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9kYXNoYm9hcmQtbWFpblwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIGVycm9yOiBlcnJvciB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBuZXdTdGF0ZVtlLnRhcmdldC5pZF0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1N0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcbiAgICBuZXdTdGF0ZVtcInNleFwiXSA9IGUudmFsdWU7XHJcbiAgICBuZXdTdGF0ZVtcInNleExhYmVsXCJdID0gZS5sYWJlbDtcclxuICAgIHNldFN0YXRlKG5ld1N0YXRlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsU3R5bGVkXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgY2VudGVyZWRcclxuICAgICAgc2hvdz17Z0NvbnRleHQuc2lnblVwTW9kYWxWaXNpYmxlfVxyXG4gICAgICBvbkhpZGU9e2dDb250ZXh0LnRvZ2dsZVNpZ25VcE1vZGFsfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS0zMiBidG4tcmVzZXQgYmctd2hpdGUgcG9zLWFicy10ciBtdC1uNiBtci1sZy1uNiBmb2N1cy1yZXNldCBzaGFkb3ctMTBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbW9kYWwtbWFpbiBiZy13aGl0ZSByb3VuZGVkLTggb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIHBiLTYgcGwtMTEgcHItMTIgYmctYmxhY2stMiBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW4gZGFyay1tb2RlLXRleHRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTlcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS04IHRleHQtd2hpdGUgbGluZS1oZWlnaHQtcmVzZXQgcGItNCBsaW5lLWhlaWdodC0xcDRcIj5cclxuICAgICAgICAgICAgICAgICAgICBDcmVlIHVuYSBjdWVudGEgZ3JhdHVpdGEgaG95XHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgZm9udC1zaXplLTQgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENyZWUgc3UgY3VlbnRhIHBhcmEgY29udGludWFyIHkgZXhwbG9yYXIgYSBsb3MgcHJvZmVzaW9uYWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BvbmlibGVzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLWRlZmF1bHQtY29sb3ItMiBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG14LW45IHB0LTYgZmxleC14cy1yb3cgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcHgtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS03IHRleHQtd2hpdGVcIj4yOTU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC13aGl0ZSBnci1vcGFjaXR5LTUgbGluZS1oZWlnaHQtMXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBqb2JzIHBvc3RlZCB0b2RheVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBweC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTcgdGV4dC13aGl0ZVwiPjE0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtd2hpdGUgZ3Itb3BhY2l0eS01IGxpbmUtaGVpZ2h0LTFwNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXcgY29tcGFuaWVzIHJlZ2lzdGVyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS0yIGgtMTAwIHB4LTExIHB0LTExIHBiLTdcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgdGV4dC13aGl0ZSBiZy1hbGxwb3J0cyBoLXB4LTQ4IGZsZXgtYWxsLWNlbnRlciB3LTEwMCBweC02IHJvdW5kZWQtNSBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4gcG9zLXhzLWFicy1jbCBmb250LXNpemUtNyBtbC14cy00XCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEltcG9ydCBmcm9tIExpbmtlZEluXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHBvc2l0aW9uLXJlbGF0aXZlIHRleHQtd2hpdGUgYmctcG9wcHkgaC1weC00OCBmbGV4LWFsbC1jZW50ZXIgdy0xMDAgcHgtNiByb3VuZGVkLTUgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdvb2dsZSBwb3MteHMtYWJzLWNsIGZvbnQtc2l6ZS03IG1sLXhzLTRcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW1wb3J0IGZyb20gR29vZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHBvc2l0aW9uLXJlbGF0aXZlIHRleHQtd2hpdGUgYmctbWFyaW5vIGgtcHgtNDggZmxleC1hbGwtY2VudGVyIHctMTAwIHB4LTYgcm91bmRlZC01IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1zcXVhcmUgcG9zLXhzLWFicy1jbCBmb250LXNpemUtNyBtbC14cy00XCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEltcG9ydCBmcm9tIEZhY2Vib29rXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvci1kZXZpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGxpbmUtaGVpZ2h0LXJlc2V0XCI+T3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOb21icmVcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSBub21icmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBcGVsbGlkb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IGFwZWxsaWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWwyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtYmxhY2stMiBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRS1tYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlamVtcGxvQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZW1haWwyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEZlY2hhIGRlIG5hY2ltaWVudG9cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSBmZWNoYSBkZSBuYWNpbWllbnRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYmlydGhEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5iaXJ0aERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzZWxlY3QyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdGV4dC1ibGFjay0yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNleG9cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3NleG99XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcGwtMCBhcnJvdy0zIHctMTAwIGZvbnQtc2l6ZS00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17eyBsYWJlbDogc3RhdGUuc2V4TGFiZWwsIHZhbHVlOiBzdGF0ZS5zZXggfX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWxlY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtYmxhY2stMiBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29udHJhc2XDsWFcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc0ZpcnN0ID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3UgY29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvdy1wYXNzd29yZCBwb3MtYWJzLWNyIGZhcyBtci02IHRleHQtYmxhY2stMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBhc3N3b3JkRmlyc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lXCI+bm9uZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb25maXJtYXIgQ29udHJhc2XDsWFcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc1NlY29uZCA/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvdy1wYXNzd29yZCBwb3MtYWJzLWNyIGZhcyBtci02IHRleHQtYmxhY2stMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBhc3N3b3JkU2Vjb25kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZVwiPm5vbmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaXNQcm9mZXNpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnci1jaGVjay1pbnB1dCBkLWZsZXggIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlzUHJvZmVzaW9uYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuaXNQcm9mZXNzaW9uYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVJc1Byb2Zlc3Npb25hbH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveCBtci01XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgbWItMCBsaW5lLWhlaWdodC1yZXNldCBkLWJsb2NrIGZvbnQtd2VpZ2h0LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBZ3JlZSB0byB0aGV7XCIgXCJ9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTb3kgcHJvZmVzaW9uYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC1kb2RnZXIgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEZvcmdldCBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1tZWRpdW0gdy0xMDAgcm91bmRlZC01IHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RyYXJzZXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWNlbnRlciBoZWFkaW5nLWRlZmF1bHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBEb27igJl0IGhhdmUgYW4gYWNjb3VudD97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBmcmVlIGFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgIDwvTW9kYWxTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsU2lnblVwO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vTW9kYWxTaWduVXBcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tIFwicmVhY3QtcGxheWVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5cclxuY29uc3QgTW9kYWxTdHlsZWQgPSBzdHlsZWQoTW9kYWwpYFxyXG4gICYubW9kYWwge1xyXG4gICAgei1pbmRleDogMTAwNTA7XHJcbiAgfVxyXG4gIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgIEBtZWRpYSAke2RldmljZS5sZ30ge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEaXZTdHlsZWQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBAbWVkaWEgJHtkZXZpY2UubWR9IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gIH1cclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMnMgZWFzZS1vdXQ7XHJcbiAgJi5sb2FkZWQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2xvc2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgQG1lZGlhICR7ZGV2aWNlLm1kfSB7XHJcbiAgICByaWdodDogMnJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDbG9zZUJ1dHRvbiA9IChwcm9wcykgPT4gKFxyXG4gIDxDbG9zZVdyYXBwZXIgey4uLnByb3BzfT5cclxuICAgIDxzdmdcclxuICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICBjc3M9e2BcclxuICAgICAgICBmaWxsOiBjdXJyZW50Y29sb3I7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgd2lkdGg6IDFyZW07XHJcbiAgICAgIGB9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk05LjgyIDEyTDAgMi4xOCAyLjE4IDAgMTIgOS44MiAyMS44MiAwIDI0IDIuMTggMTQuMTggMTIgMjQgMjEuODIgMjEuODIgMjQgMTIgMTQuMTggMi4xOCAyNCAwIDIxLjgyelwiXHJcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgID48L3BhdGg+XHJcbiAgICA8L3N2Zz5cclxuICA8L0Nsb3NlV3JhcHBlcj5cclxuKTtcclxuXHJcbmNvbnN0IE1vZGFsVmlkZW8gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGdDb250ZXh0LnRvZ2dsZVZpZGVvTW9kYWwoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsU3R5bGVkXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgY2VudGVyZWRcclxuICAgICAgc2hvdz17Z0NvbnRleHQudmlkZW9Nb2RhbFZpc2libGV9XHJcbiAgICAgIC8vIG9uSGlkZT17Z0NvbnRleHQudG9nZ2xlVmlkZW9Nb2RhbH1cclxuICAgID5cclxuICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgaC0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMGB9PlxyXG4gICAgICAgICAgPERpdlN0eWxlZCBjbGFzc05hbWU9e2Ake2xvYWRpbmcgPyBcImxvYWRpbmdcIiA6IFwibG9hZGVkXCJ9YH0+XHJcbiAgICAgICAgICAgIDxSZWFjdFBsYXllclxyXG4gICAgICAgICAgICAgIHVybD17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9emxJblltMkpyRndgfVxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgY29udHJvbHNcclxuICAgICAgICAgICAgICBvblJlYWR5PXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9EaXZTdHlsZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgIDwvTW9kYWxTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsVmlkZW87XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Nb2RhbFZpZGVvXCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBMaXN0R3JvdXAsIENvbGxhcHNlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBGYUFuZ2xlUmlnaHQsIEZhQW5nbGVEb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xyXG5cclxuY29uc3QgTmVzdGVkTWVudUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYSxcclxuICAubGFiZWwge1xyXG4gICAgY29sb3I6ICR7KHsgZGFyaywgdGhlbWUgfSkgPT5cclxuICAgICAgZGFyayA/IHRoZW1lLmNvbG9ycy5saWdodCA6IHRoZW1lLmNvbG9ycy5oZWFkaW5nfSFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgJiArIC5jb2xsYXBzZTpub3QoLnNob3cpIHtcclxuICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYgKyAuY29sbGFwc2Uuc2hvdyB7XHJcbiAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29sbGFwc2UgKyAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGJvcmRlci10b3Atd2lkdGg6IDA7XHJcbiAgfVxyXG4gIC8qIC5saXN0LWdyb3VwLWZsdXNoOmxhc3QtY2hpbGQgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICB9ICovXHJcbmA7XHJcblxyXG5jb25zdCBkZWZhdWx0TWVudUl0ZW1zID0gW1xyXG4gIHsgbmFtZTogXCJob21lXCIsIGxhYmVsOiBcIkhvbWVcIiB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiYmlsbGluZ1wiLFxyXG4gICAgbGFiZWw6IFwiQmlsbGluZ1wiLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyBuYW1lOiBcInN0YXRlbWVudHNcIiwgbGFiZWw6IFwiU3RhdGVtZW50c1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJyZXBvcnRzXCIsIGxhYmVsOiBcIlJlcG9ydHNcIiB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwic2V0dGluZ3NcIixcclxuICAgIGxhYmVsOiBcIlNldHRpbmdzXCIsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IG5hbWU6IFwicHJvZmlsZVwiLCBsYWJlbDogXCJQcm9maWxlXCIgfSxcclxuICAgICAgeyBuYW1lOiBcImluc3VyYW5jZVwiLCBsYWJlbDogXCJJbnN1cmFuY2VcIiB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJub3RpZmljYXRpb25zXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiTm90aWZpY2F0aW9uc1wiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwiZW1haWxcIiwgbGFiZWw6IFwiRW1haWxcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImRlc2t0b3BcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiRGVza3RvcFwiLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJzY2hlZHVsZVwiLCBsYWJlbDogXCJTY2hlZHVsZVwiIH0sXHJcbiAgICAgICAgICAgICAgeyBuYW1lOiBcImZyZXF1ZW5jeVwiLCBsYWJlbDogXCJGcmVxdWVuY3lcIiB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJzbXNcIiwgbGFiZWw6IFwiU01TXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgTWVudUl0ZW0gPSAoe1xyXG4gIGxhYmVsLFxyXG4gIGlzRXh0ZXJuYWwgPSBmYWxzZSxcclxuICBuYW1lLFxyXG4gIGl0ZW1zLFxyXG4gIGRlcHRoU3RlcCA9IDIwLFxyXG4gIGRlcHRoID0gMCxcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFzU3ViSXRlbXMgPSBBcnJheS5pc0FycmF5KGl0ZW1zKTtcclxuXHJcbiAgY29uc3QgZ0NvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2hhc1N1Ykl0ZW1zID8gKFxyXG4gICAgICAgIDxMaXN0R3JvdXAuSXRlbVxyXG4gICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICBjc3M9e2BcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAke2RlcHRoICogZGVwdGhTdGVwfXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPntvcGVuID8gPEZhQW5nbGVEb3duIC8+IDogPEZhQW5nbGVSaWdodCAvPn08L3NwYW4+XHJcbiAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TGlzdEdyb3VwLkl0ZW1cclxuICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgY3NzPXtgXHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJHtkZXB0aCAqIGRlcHRoU3RlcH1weCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aXNFeHRlcm5hbCA/IChcclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXtgJHtuYW1lfWB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdDb250ZXh0LnZpc2libGVPZmZDYW52YXMpIHtcclxuICAgICAgICAgICAgICAgICAgZ0NvbnRleHQudG9nZ2xlT2ZmQ2FudmFzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGdDb250ZXh0LnZpc2libGVPZmZDYW52YXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVPZmZDYW52YXMoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7aGFzU3ViSXRlbXMgPyAoXHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufT5cclxuICAgICAgICAgIDxMaXN0R3JvdXA+XHJcbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKHN1Ykl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17c3ViSXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgZGVwdGg9e2RlcHRoICsgMX1cclxuICAgICAgICAgICAgICAgIGRlcHRoU3RlcD17ZGVwdGhTdGVwfVxyXG4gICAgICAgICAgICAgICAgey4uLnN1Ykl0ZW19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBOZXN0ZWRNZW51ID0gKHsgbWVudUl0ZW1zID0gZGVmYXVsdE1lbnVJdGVtcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXN0ZWRNZW51Q29udGFpbmVyPlxyXG4gICAgICA8TGlzdEdyb3VwIHZhcmlhbnQ9XCJmbHVzaFwiPlxyXG4gICAgICAgIHttZW51SXRlbXMubWFwKChtZW51SXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICBrZXk9e2Ake21lbnVJdGVtLm5hbWV9JHtpbmRleH1gfVxyXG4gICAgICAgICAgICBkZXB0aFN0ZXA9ezIwfVxyXG4gICAgICAgICAgICBkZXB0aD17MH1cclxuICAgICAgICAgICAgey4uLm1lbnVJdGVtfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9MaXN0R3JvdXA+XHJcbiAgICA8L05lc3RlZE1lbnVDb250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5lc3RlZE1lbnU7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9OZXN0ZWRNZW51XCI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vTG9nb1wiO1xyXG5cclxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAmLmhpZGRlbiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxN3JlbTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk5OTk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAmLmhpZGRlbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxuICAgIHdpbGwtY2hhbmdlOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9nb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbmA7XHJcblxyXG5jb25zdCBPZmZjYW52YXMgPSAoeyBzaG93LCBvbkhpZGVPZmZjYW52YXMsIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IHtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZiAoc2hvdykge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QuYWRkKFwiaGFzLW9mZmNhbnZhc1wiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiaGFzLW9mZmNhbnZhc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoYXMtb2ZmY2FudmFzXCIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJoYXMtb2ZmY2FudmFzXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgey4uLnJlc3R9PlxyXG4gICAgICA8T3ZlcmxheSBjbGFzc05hbWU9e3Nob3cgPyBcIlwiIDogXCJoaWRkZW5cIn0gb25DbGljaz17b25IaWRlT2ZmY2FudmFzfSAvPlxyXG4gICAgICA8RHJhd2VyIGNsYXNzTmFtZT17c2hvdyA/IFwiXCIgOiBcImhpZGRlblwifT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cclxuICAgICAgICAgICAgPExvZ29Db250YWluZXIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgIDxMb2dvIG9uQ2xpY2s9e29uSGlkZU9mZmNhbnZhc30gLz5cclxuICAgICAgICAgICAgPC9Mb2dvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2ZmY2FudmFzO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vT2ZmY2FudmFzXCI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IGltZ1AgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9sMy9wbmcvcHJvLWltZy5wbmdcIjtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIDwhLS0gU2lkZWJhciBTdGFydCAtLT4gKi99XHJcblxyXG4gICAgICA8ZGl2IHsuLi5wcm9wc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC1sZy01XCI+XHJcbiAgICAgICAgICB7LyogPCEtLSBUb3AgU3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctOSByb3VuZGVkLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC01IHB5LTExIHRleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLW1lcmN1cnlcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjaXJjbGUtNTRcIiBzcmM9e2ltZ1B9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ibGFjay0yIGZvbnQtc2l6ZS02IGZvbnQtd2VpZ2h0LXNlbWlib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGF2aWQgSGVucmlja3NcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItOFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtZ3JheSBmb250LXNpemUtNFwiPlByb2R1Y3QgRGVzaWduZXI8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1saW5rIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXNtb2tlIGNpcmNsZS0zMiBiZy1jb25jcmV0ZSBtci01IGhvdmVyLWJnLWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluLWluXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zbW9rZSBjaXJjbGUtMzIgYmctY29uY3JldGUgbXItNSBob3Zlci1iZy1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zbW9rZSBjaXJjbGUtMzIgYmctY29uY3JldGUgbXItNSBob3Zlci1iZy1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zbW9rZSBjaXJjbGUtMzIgYmctY29uY3JldGUgbXItNSBob3Zlci1iZy1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1kcmliYmJsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtc21va2UgY2lyY2xlLTMyIGJnLWNvbmNyZXRlIG1yLTUgaG92ZXItYmctZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtYmVoYW5jZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwhLS0gVG9wIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIEJvdHRvbSBTdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtOSBwdC1sZy01IHB0LTkgcHQteGwtOSBwYi01XCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtYmxhY2stMiBtYi04IGZvbnQtc2l6ZS01XCI+Q29udGFjdCBJbmZvPC9oNT5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgTGlzdCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi03XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi0wXCI+TG9jYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgbWItMCB0ZXh0LWJsYWNrLTIgdGV4dC1icmVha1wiPlxyXG4gICAgICAgICAgICAgICAgICBOZXcgWW9yayAsIFVTQVxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgTGlzdCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIExpc3QgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItN1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgbWItMFwiPkUtbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibGFjay0yIHRleHQtYnJlYWtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJtYWlsdG86bmFtZV9hY0BnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZV9hY0BnbWFpbC5jb21cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgTGlzdCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIExpc3QgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItN1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgbWItMFwiPlBob25lPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ibGFjay0yIHRleHQtYnJlYWtcIiBocmVmPVwidGVsOis5OTk1NjU1NjJcIj5cclxuICAgICAgICAgICAgICAgICAgICArOTk5IDU2NSA1NjJcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgTGlzdCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIExpc3QgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItN1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgbWItMFwiPldlYnNpdGUgTGlua2VkPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1icmVha1wiPnd3dy5uYW1lYWMuY29tPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBMaXN0IC0tPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIEJvdHRvbSBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIDwhLS0gU2lkZWJhciBFbmQgLS0+ICovfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Qcm9maWxlU2lkZWJhclwiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBpbWdMIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvbG9nby1tYWluLWJsYWNrLnBuZ1wiO1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29sbGFwc2UgaW49e2dDb250ZXh0LnNob3dTaWRlYmFyRGFzaGJvYXJkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1zaWRlYmFyLXdyYXBwZXIgcHQtMTFcIiBpZD1cInNpZGViYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyBweC0xMVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ0x9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTUgcHgtMTFcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14bCB3LTEwMCB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItNSBkLWlubGluZS1ibG9ja1wiPis8L3NwYW4+UG9zdCBhIG5ldyBqb2JcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgZGFzaGJvYXJkLWxheW91dC1zaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC0xMCBweS0xIG15LTUgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgZmxleC15LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbGF5b3V0LTExIG1yLTdcIj48L2k+RGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQtam9ic1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtMTAgcHktMSBteS01IGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIGZsZXgteS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJyaWVmY2FzZSBtci03XCI+PC9pPlBvc3RlZCBKb2JzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQtYXBwbGljYW50c1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtMTAgcHktMSBteS01IGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIGZsZXgteS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXIgbXItN1wiPjwvaT5BcHBsaWNhbnRze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC1hdXRvIHB4LTEgaC0xIGJnLWRvZGdlciB0ZXh0LXdoaXRlIGZvbnQtc2l6ZS0zIHJvdW5kZWQtNSBtYXgtaGVpZ2h0LXB4LTE4IGZsZXgtYWxsLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDE0XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtMTAgcHktMSBteS01IGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIGZsZXgteS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNvZyBtci03XCI+PC9pPlNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNpZGViYXItbW9iaWxlLWJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGdDb250ZXh0LnRvZ2dsZVNpZGViYXJEYXNoYm9hcmQoKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNpZGViYXItMlwiPjwvaT5cclxuICAgICAgPC9hPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9TaWRlYmFyRGFzaGJvYXJkXCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgR2xvYmFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IEdsb2JhbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt0aGVtZURhcmssIHNldFRoZW1lRGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dTaWRlYmFyRGFzaGJvYXJkLCBzZXRTaG93U2lkZWJhckRhc2hib2FyZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbYXBwbGljYXRpb25Nb2RhbFZpc2libGUsIHNldEFwcGxpY2F0aW9uTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2lnbkluTW9kYWxWaXNpYmxlLCBzZXRTaWduSW5Nb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaWduVXBNb2RhbFZpc2libGUsIHNldFNpZ25VcE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZpZGVvTW9kYWxWaXNpYmxlLCBzZXRWaWRlb01vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Zpc2libGVPZmZDYW52YXMsIHNldFZpc2libGVPZmZDYW52YXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoZWFkZXIsIHNldEhlYWRlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aGVtZTogXCJsaWdodFwiLFxyXG4gICAgYmdDbGFzczogXCJkZWZhdWx0XCIsXHJcbiAgICB2YXJpYW50OiBcInByaW1hcnlcIixcclxuICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgIGlzRmx1aWQ6IGZhbHNlLFxyXG4gICAgYnV0dG9uOiBcImN0YVwiLCAvLyBwcm9maWxlLCBhY2NvdW50LCBudWxsXHJcbiAgICBidXR0b25UZXh0OiBcIkdldCBzdGFydGVkIGZyZWVcIiwgLy8gcHJvZmlsZSwgYWNjb3VudCwgbnVsbFxyXG4gICAgcmV2ZWFsOiB0cnVlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtmb290ZXIsIHNldEZvb3Rlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0aGVtZTogXCJkYXJrXCIsXHJcbiAgICBzdHlsZTogXCJzdHlsZTFcIiwgLy9zdHlsZTEsIHN0eWxlMlxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHtcclxuICAgIHNldFRoZW1lRGFyayghdGhlbWVEYXJrKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVTaWRlYmFyRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1NpZGViYXJEYXNoYm9hcmQoIXNob3dTaWRlYmFyRGFzaGJvYXJkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVWaWRlb01vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0VmlkZW9Nb2RhbFZpc2libGUoIXZpZGVvTW9kYWxWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVBcHBsaWNhdGlvbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0QXBwbGljYXRpb25Nb2RhbFZpc2libGUoIWFwcGxpY2F0aW9uTW9kYWxWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVTaWduSW5Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFNpZ25Jbk1vZGFsVmlzaWJsZSghc2lnbkluTW9kYWxWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVTaWduVXBNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFNpZ25VcE1vZGFsVmlzaWJsZSghc2lnblVwTW9kYWxWaXNpYmxlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVPZmZDYW52YXMgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlT2ZmQ2FudmFzKCF2aXNpYmxlT2ZmQ2FudmFzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZU9mZkNhbnZhcyA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGVPZmZDYW52YXMoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHRoZW1lRGFyayxcclxuICAgICAgICB0b2dnbGVUaGVtZSxcclxuICAgICAgICBzaG93U2lkZWJhckRhc2hib2FyZCxcclxuICAgICAgICB0b2dnbGVTaWRlYmFyRGFzaGJvYXJkLFxyXG4gICAgICAgIHZpZGVvTW9kYWxWaXNpYmxlLFxyXG4gICAgICAgIHRvZ2dsZVZpZGVvTW9kYWwsXHJcbiAgICAgICAgYXBwbGljYXRpb25Nb2RhbFZpc2libGUsXHJcbiAgICAgICAgdG9nZ2xlQXBwbGljYXRpb25Nb2RhbCxcclxuICAgICAgICBzaWduSW5Nb2RhbFZpc2libGUsXHJcbiAgICAgICAgdG9nZ2xlU2lnbkluTW9kYWwsXHJcbiAgICAgICAgc2lnblVwTW9kYWxWaXNpYmxlLFxyXG4gICAgICAgIHRvZ2dsZVNpZ25VcE1vZGFsLFxyXG4gICAgICAgIHZpc2libGVPZmZDYW52YXMsXHJcbiAgICAgICAgdG9nZ2xlT2ZmQ2FudmFzLFxyXG4gICAgICAgIGNsb3NlT2ZmQ2FudmFzLFxyXG4gICAgICAgIGhlYWRlcixcclxuICAgICAgICBzZXRIZWFkZXIsXHJcbiAgICAgICAgZm9vdGVyLFxyXG4gICAgICAgIHNldEZvb3RlcixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxDb250ZXh0O1xyXG5leHBvcnQgeyBHbG9iYWxQcm92aWRlciB9O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gSG9va1xyXG5leHBvcnQgY29uc3QgdXNlV2luZG93U2l6ZSA9ICgpID0+IHtcclxuICBjb25zdCBpc0NsaWVudCA9IHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCI7XHJcblxyXG4gIGNvbnN0IGdldFNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB3aWR0aDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHVuZGVmaW5lZCxcclxuICAgICAgaGVpZ2h0OiBpc0NsaWVudCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHVuZGVmaW5lZFxyXG4gICAgfTtcclxuICB9LCBbaXNDbGllbnRdKTtcclxuXHJcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoZ2V0U2l6ZSgpKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNDbGllbnQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgc2V0V2luZG93U2l6ZShnZXRTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW2dldFNpemUsIGlzQ2xpZW50XSk7XHJcblxyXG4gIHJldHVybiB3aW5kb3dTaXplO1xyXG59O1xyXG4iLCIvLyBpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBHbG9iYWxQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuXHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS01L3dlYmZvbnRzL2ZhLWJyYW5kcy00MDAudHRmXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS01L3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLnR0ZlwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvZm9udGF3ZXNvbWUtNS93ZWJmb250cy9mYS1zb2xpZC05MDAudHRmXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvaWNvbi1mb250L2ZvbnRzL2F2YXN0YS50dGZcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRzL2ljb24tZm9udC9jc3Mvc3R5bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5jc3NcIjtcclxuXHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy9pY29uLWZvbnQvY3NzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvZm9udGF3ZXNvbWUtNS9jc3MvYWxsLmNzc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vc2Nzcy9ib290c3RyYXAuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH0pID0+IHtcclxuICBpZiAocm91dGVyLnBhdGhuYW1lLm1hdGNoKC80MDQvKSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEdsb2JhbFByb3ZpZGVyPlxyXG4gICAgICAgIDxMYXlvdXQgcGFnZUNvbnRleHQ9e3sgbGF5b3V0OiBcImJhcmVcIiB9fT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9HbG9iYWxQcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChyb3V0ZXIucGF0aG5hbWUubWF0Y2goL2Rhc2hib2FyZC8pKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R2xvYmFsUHJvdmlkZXI+XHJcbiAgICAgICAgPExheW91dCBwYWdlQ29udGV4dD17eyBsYXlvdXQ6IFwiZGFzaGJvYXJkXCIgfX0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvR2xvYmFsUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHbG9iYWxQcm92aWRlcj5cclxuICAgICAgPExheW91dCBwYWdlQ29udGV4dD17e319PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0dsb2JhbFByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiaW1wb3J0IGh0dHAgZnJvbSBcIi4vaHR0cC1jb21tb25cIjtcclxuXHJcbmNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBsb2dpbiA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHJldHVybiBodHRwLnBvc3QoXCIvbG9naW5cIiwge1xyXG4gICAgICB1c2VybmFtZTogZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlZ2lzdGVyID0gYXN5bmMgKFxyXG4gICAgbm9tYnJlLFxyXG4gICAgYXBlbGxpZG8sXHJcbiAgICBlbWFpbCxcclxuICAgIGZlY2hhTmFjLFxyXG4gICAgc2V4byxcclxuICAgIHBhc3N3b3JkLFxyXG4gICAgZXNQcm9mZXNpb25hbFxyXG4gICkgPT4ge1xyXG4gICAgcmV0dXJuIGh0dHAucG9zdChcIi9wdWJsaWMvdXN1YXJpby9yZWdpc3Ryb1wiLCB7XHJcbiAgICAgIHBlcnNvbmE6IHtcclxuICAgICAgICBub21icmU6IG5vbWJyZSxcclxuICAgICAgICBhcGVsbGlkbzogYXBlbGxpZG8sXHJcbiAgICAgICAgZmVjaGFfbmFjaW1pZW50bzogZmVjaGFOYWMsXHJcbiAgICAgICAgc2V4bzogc2V4byxcclxuICAgICAgfSxcclxuICAgICAgdXNlcm5hbWU6IGVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIHVzdWFyaW9fdGlwb19pZDogZXNQcm9mZXNpb25hbCA/IDIgOiAxLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhTZXJ2aWNlKCk7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjgwODAvdjFcIixcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IGFkZERheXMgPSAoZGF5cykgPT4ge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcclxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBkYXlzKTtcclxuICByZXR1cm4gZGF0ZTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGJyZWFrcG9pbnRzID0ge1xyXG4gIHNtOiA1NzYsIC8vU21hbGwgc2NyZWVuIHN0YXJ0XHJcbiAgbWQ6IDc2OCwgLy9NZWRpdW0gc2NyZWVuIHN0YXJ0XHJcbiAgbGc6IDk5MiwgLy9MYXJnZSBzY3JlZW4gc3RhcnRcclxuICB4bDogMTIwMCwgLy9FeHRyYSBMYXJnZSBzY3JlZW4gc3RhcnRcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZXZpY2UgPSB7XHJcbiAgc206IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLnNtfXB4KWAsXHJcbiAgbWQ6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLm1kfXB4KWAsXHJcbiAgbGc6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLmxnfXB4KWAsXHJcbiAgeGw6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLnhsfXB4KWAsXHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBnbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIFxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsU3R5bGU7XHJcbiIsImltcG9ydCB7IGJyZWFrcG9pbnRzLCBkZXZpY2UgfSBmcm9tIFwiLi9icmVha3BvaW50c1wiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgYWRkRGF5cyB9IGZyb20gXCIuL2FkZERheXNcIjtcclxuXHJcbmV4cG9ydCB7IGRldmljZSwgYnJlYWtwb2ludHMsIHRoZW1lLCBhZGREYXlzIH07XHJcbiIsImltcG9ydCB7IHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcclxuaW1wb3J0IHsgYnJlYWtwb2ludHMgfSBmcm9tIFwiLi9icmVha3BvaW50c1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdENvbG9ycyA9IHtcclxuICBwcmltYXJ5OiBcIiMwMGIwNzRcIixcclxuICBwcmltYXJ5SG92ZXI6IFwiIzAwOGE1YlwiLFxyXG4gIHNlY29uZGFyeTogXCIjMzM2ZWY3XCIsXHJcbiAgbGlnaHQ6IFwiI0YyRjJGMlwiLFxyXG4gIGRhcms6IFwiIzJiMzk0MFwiLFxyXG4gIHllbGxvdzogXCIjZmVkYzVhXCIsXHJcbiAgYXNoOiBcIiM0MTNlNjVcIixcclxuICBncmVlbjogXCIjNjhkNTg1IFwiLFxyXG4gIGluZm86IFwiIzBlNTY3Y1wiLFxyXG59O1xyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gIHByaW1hcnk6IGRlZmF1bHRDb2xvcnMucHJpbWFyeSxcclxuICBwcmltYXJ5SG92ZXI6IGRlZmF1bHRDb2xvcnMucHJpbWFyeUhvdmVyLFxyXG4gIHNlY29uZGFyeTogZGVmYXVsdENvbG9ycy5zZWNvbmRhcnksXHJcbiAgbGlnaHQ6IGRlZmF1bHRDb2xvcnMubGlnaHQsXHJcbiAgbGlnaHRTaGFkZTogcmdiYShkZWZhdWx0Q29sb3JzLmxpZ2h0LCAwLjcpLFxyXG4gIGRhcms6IGRlZmF1bHRDb2xvcnMuZGFyayxcclxuICBkYXJrU2hhZGU6IHJnYmEoZGVmYXVsdENvbG9ycy5kYXJrLCAwLjcpLFxyXG4gIGFzaDogZGVmYXVsdENvbG9ycy5hc2gsXHJcbiAgYmc6IGRlZmF1bHRDb2xvcnMubGlnaHQsXHJcbiAgYmcyOiBcIiNmNGY3ZmFcIixcclxuICBiZzM6IFwiI2Y4ZjhmOFwiLFxyXG4gIGJnNDogXCIjZmRmZGZmXCIsXHJcbiAgYmc1OiBcIiNlY2YyZjdcIixcclxuICBiZzY6IFwiI2ZmZlwiLFxyXG4gIGJnNzogXCIjRURGOUYyXCIsXHJcbiAgYm9yZGVyOiBcIiNlN2U5ZWRcIixcclxuICBzaGFkb3c6IHJnYmEoZGVmYXVsdENvbG9ycy5kYXJrLCAwLjE1KSxcclxuICBoZWFkaW5nOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgdGV4dDogcmdiYShkZWZhdWx0Q29sb3JzLmRhcmssIDAuNyksXHJcbiAgd2FybmluZzogZGVmYXVsdENvbG9ycy55ZWxsb3csXHJcbiAgc3VjY2VzczogZGVmYXVsdENvbG9ycy5ncmVlbixcclxuICBpbmZvOiBkZWZhdWx0Q29sb3JzLmluZm8sXHJcblxyXG4gIG1vZGVzOiB7XHJcbiAgICBkYXJrOiB7XHJcbiAgICAgIHByaW1hcnk6IGRlZmF1bHRDb2xvcnMucHJpbWFyeSxcclxuICAgICAgcHJpbWFyeUhvdmVyOiBkZWZhdWx0Q29sb3JzLnByaW1hcnlIb3ZlcixcclxuICAgICAgc2Vjb25kYXJ5OiBkZWZhdWx0Q29sb3JzLnNlY29uZGFyeSxcclxuICAgICAgbGlnaHQ6IGRlZmF1bHRDb2xvcnMubGlnaHQsXHJcbiAgICAgIGxpZ2h0U2hhZGU6IHJnYmEoZGVmYXVsdENvbG9ycy5saWdodCwgMC43KSxcclxuICAgICAgZGFyazogZGVmYXVsdENvbG9ycy5kYXJrLFxyXG4gICAgICBkYXJrU2hhZGU6IHJnYmEoZGVmYXVsdENvbG9ycy5kYXJrLCAwLjcpLFxyXG4gICAgICBhc2g6IGRlZmF1bHRDb2xvcnMuYXNoLFxyXG4gICAgICBiZzogZGVmYXVsdENvbG9ycy5saWdodCxcclxuICAgICAgYmcyOiBcIiNmNGY3ZmFcIixcclxuICAgICAgYmczOiBcIiNmOGY4ZjhcIixcclxuICAgICAgYmc0OiBcIiNmZGZkZmZcIixcclxuICAgICAgYmc1OiBcIiNlY2YyZjdcIixcclxuICAgICAgYmc2OiBcIiNmZmZcIixcclxuICAgICAgYmc3OiBcIiNFREY5RjJcIixcclxuICAgICAgYm9yZGVyOiBcIiNlN2U5ZWRcIixcclxuICAgICAgc2hhZG93OiByZ2JhKGRlZmF1bHRDb2xvcnMuZGFyaywgMC4xNSksXHJcbiAgICAgIGhlYWRpbmc6IGRlZmF1bHRDb2xvcnMuZGFyayxcclxuICAgICAgdGV4dDogcmdiYShkZWZhdWx0Q29sb3JzLmRhcmssIDAuNyksXHJcbiAgICAgIHdhcm5pbmc6IGRlZmF1bHRDb2xvcnMueWVsbG93LFxyXG4gICAgICBzdWNjZXNzOiBkZWZhdWx0Q29sb3JzLmdyZWVuLFxyXG4gICAgICBpbmZvOiBkZWZhdWx0Q29sb3JzLmluZm8sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB0aGVtZSA9IHtcclxuICBpbml0aWFsQ29sb3JNb2RlTmFtZTogXCJsaWdodFwiLFxyXG4gIGNvbG9yczogY29sb3JzLFxyXG4gIHNwYWNlOiBbXHJcbiAgICAwLFxyXG4gICAgNCxcclxuICAgIDgsXHJcbiAgICAxMixcclxuICAgIDE2LFxyXG4gICAgMjAsXHJcbiAgICAyNCxcclxuICAgIDI4LFxyXG4gICAgMzIsXHJcbiAgICAzNixcclxuICAgIDQwLFxyXG4gICAgNDgsXHJcbiAgICA1MixcclxuICAgIDU2LFxyXG4gICAgNjAsXHJcbiAgICA2NCxcclxuICAgIDcyLFxyXG4gICAgODQsXHJcbiAgICAxMDAsXHJcbiAgICAxMjAsXHJcbiAgICAxNDAsXHJcbiAgXSxcclxuICBicmVha3BvaW50czogW1xyXG4gICAgYCR7YnJlYWtwb2ludHMuc219cHhgLFxyXG4gICAgYCR7YnJlYWtwb2ludHMubWR9cHhgLFxyXG4gICAgYCR7YnJlYWtwb2ludHMubGd9cHhgLFxyXG4gICAgYCR7YnJlYWtwb2ludHMueGx9cHhgLFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG44dGIxdC91c2Utc2Nyb2xsLXBvc2l0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBvbGlzaGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGxheWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9