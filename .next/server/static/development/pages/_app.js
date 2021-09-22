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

module.exports = "data:image/png;base64,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"

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














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
    className: "navbar site-navbar offcanvas-active navbar-expand-lg px-0 py-0",
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
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "navbar-nav-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "navbar-nav main-menu d-none d-lg-flex",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, _menuItems__WEBPACK_IMPORTED_MODULE_11__["menuItems"].map((_ref, index) => {
    let {
      label,
      isExternal = false,
      name,
      items
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["label", "isExternal", "name", "items"]);

    const hasSubItems = Array.isArray(items);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: name + index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 25
      }
    }, hasSubItems ? __jsx("li", _extends({
      className: "nav-item dropdown"
    }, rest, {
      __self: undefined,
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
      onClick: e => e.preventDefault(),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 31
      }
    }, label, __jsx("i", {
      className: "icon icon-small-down",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 33
      }
    })), __jsx("ul", {
      className: "gr-menu-dropdown dropdown-menu ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 31
      }
    }, items.map((subItem, indexSub) => {
      const hasInnerSubItems = Array.isArray(subItem.items);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: subItem.name + indexSub,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 37
        }
      }, hasInnerSubItems ? __jsx("li", {
        className: "drop-menu-item dropdown",
        __self: undefined,
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
        onClick: e => e.preventDefault(),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 43
        }
      }, subItem.label, __jsx("i", {
        className: "icon icon-small-down",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 45
        }
      })), __jsx("ul", {
        className: "gr-menu-dropdown dropdown-menu dropdown-left",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 43
        }
      }, subItem.items.map((itemInner, indexInnerMost) => __jsx("li", {
        className: "drop-menu-item",
        key: itemInner.name + indexInnerMost,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 49
        }
      }, itemInner.isExternal ? __jsx("a", {
        href: `${itemInner.name}`,
        target: "_blank",
        rel: "noopener noreferrer",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 53
        }
      }, itemInner.label) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: `/${itemInner.name}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 53
        }
      }, __jsx("a", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 55
        }
      }, itemInner.label)))))) : __jsx("li", {
        className: "drop-menu-item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 41
        }
      }, subItem.isExternal ? __jsx("a", {
        href: `${subItem.name}`,
        target: "_blank",
        rel: "noopener noreferrer",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 45
        }
      }, subItem.label) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: `/${subItem.name}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 45
        }
      }, __jsx("a", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 47
        }
      }, subItem.label))));
    }))) : __jsx("li", _extends({
      className: "nav-item"
    }, rest, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 29
      }
    }), isExternal ? __jsx("a", {
      className: "nav-link",
      href: `${name}`,
      target: "_blank",
      rel: "noopener noreferrer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 33
      }
    }, label) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: `/${name}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 33
      }
    }, __jsx("a", {
      className: "nav-link",
      role: "button",
      "aria-expanded": "false",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 35
      }
    }, label))));
  })))), gContext.header.button === "cta" && __jsx("div", {
    className: "header-btn ml-auto ml-lg-0 mr-6 mr-lg-0 d-none d-xs-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: `btn btn-${gContext.header.variant}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 19
    }
  }, gContext.header.buttonText))), gContext.header.button === "profile" && __jsx("div", {
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
  }, "Log In"), __jsx("a", {
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
  }, "Sign Up")), __jsx(ToggleButton, {
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\ModalSignIn\\ModalSignIn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ModalStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"])`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalSignIn = props => {
  const {
    0: showPass,
    1: setShowPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__["default"]);

  const handleClose = () => {
    gContext.toggleSignInModal();
  };

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  return __jsx(ModalStyled, _extends({}, props, {
    size: "lg",
    centered: true,
    show: gContext.signInModalVisible,
    onHide: gContext.toggleSignInModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, {
    className: "p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-times",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "login-modal-main bg-white rounded-8 overflow-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pb-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "font-size-8 text-white line-height-reset pb-4 line-height-1p4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, "Welcome Back"), __jsx("p", {
    className: "mb-0 font-size-4 text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, "Log in to continue your account and explore new jobs.")), __jsx("div", {
    className: "border-top border-default-color-2 mt-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "d-flex mx-n9 pt-6 flex-xs-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "pt-5 px-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "font-size-7 text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 23
    }
  }, "295"), __jsx("p", {
    className: "font-size-3 text-white gr-opacity-5 line-height-1p4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }, "New jobs posted today")), __jsx("div", {
    className: "pt-5 px-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "font-size-7 text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 23
    }
  }, "14"), __jsx("p", {
    className: "font-size-3 text-white gr-opacity-5 line-height-1p4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, "New companies registered")))))), __jsx("div", {
    className: "col-lg-7 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "bg-white-2 h-100 px-11 pt-11 pb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-4 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 23
    }
  }), " ", __jsx("span", {
    className: "d-none d-xs-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 23
    }
  }, "Log in with LinkedIn"))), __jsx("div", {
    className: "col-4 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 23
    }
  }), " ", __jsx("span", {
    className: "d-none d-xs-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }, "Log in with Google"))), __jsx("div", {
    className: "col-4 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 23
    }
  }), " ", __jsx("span", {
    className: "d-none d-xs-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 23
    }
  }, "Log in with Facebook")))), __jsx("div", {
    className: "or-devider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "font-size-3 line-height-reset ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, "Or")), __jsx("form", {
    action: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, "E-mail"), __jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "example@gmail.com",
    id: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "password",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, "Password"), __jsx("div", {
    className: "position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: showPass ? "password" : "text",
    className: "form-control",
    id: "password",
    placeholder: "Enter password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
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
      lineNumber: 139,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "d-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, "none")))), __jsx("div", {
    className: "form-group d-flex flex-wrap justify-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "terms-check",
    className: "gr-check-input d-flex  mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 21
    }
  }, __jsx("input", {
    className: "d-none",
    type: "checkbox",
    id: "terms-check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "checkbox mr-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "font-size-3 mb-0 line-height-reset mb-1 d-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }, "Remember password")), __jsx("a", {
    href: "/#",
    className: "font-size-3 text-dodger line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }, "Forget Password")), __jsx("div", {
    className: "form-group mb-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-primary btn-medium w-100 rounded-5 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 21
    }
  }, "Log in", " ")), __jsx("p", {
    className: "font-size-4 text-center heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 19
    }
  }, "Don\u2019t have an account?", " ", __jsx("a", {
    href: "/#",
    className: "text-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 21
    }
  }, "Create a free account")))))))));
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/GlobalContext */ "./src/context/GlobalContext.js");
var _jsxFileName = "C:\\Users\\adri_\\Desktop\\Front Profesionales\\profront\\src\\components\\ModalSignUp\\ModalSignUp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ModalStyled = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"])`
  /* &.modal {
    z-index: 10050;
  } */
`;

const ModalSignUp = props => {
  const {
    0: showPassFirst,
    1: setShowPassFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: showPassSecond,
    1: setShowPassSecond
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const gContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_GlobalContext__WEBPACK_IMPORTED_MODULE_3__["default"]);

  const handleClose = () => {
    gContext.toggleSignUpModal();
  };

  const togglePasswordFirst = () => {
    setShowPassFirst(!showPassFirst);
  };

  const togglePasswordSecond = () => {
    setShowPassSecond(!showPassSecond);
  };

  return __jsx(ModalStyled, _extends({}, props, {
    size: "lg",
    centered: true,
    show: gContext.signUpModalVisible,
    onHide: gContext.toggleSignUpModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"].Body, {
    className: "p-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "circle-32 btn-reset bg-white pos-abs-tr mt-n6 mr-lg-n6 focus-reset shadow-10",
    onClick: handleClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fas fa-times",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "login-modal-main bg-white rounded-8 overflow-hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row no-gutters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-5 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "pb-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "font-size-8 text-white line-height-reset pb-4 line-height-1p4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, "Create a free account today"), __jsx("p", {
    className: "mb-0 font-size-4 text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, "Create your account to continue and explore new jobs.")), __jsx("div", {
    className: "border-top border-default-color-2 mt-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "d-flex mx-n9 pt-6 flex-xs-row flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "pt-5 px-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "font-size-7 text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  }, "295"), __jsx("p", {
    className: "font-size-3 text-white gr-opacity-5 line-height-1p4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 23
    }
  }, "New jobs posted today")), __jsx("div", {
    className: "pt-5 px-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, __jsx("h3", {
    className: "font-size-7 text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 23
    }
  }, "14"), __jsx("p", {
    className: "font-size-3 text-white gr-opacity-5 line-height-1p4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }, "New companies registered")))))), __jsx("div", {
    className: "col-lg-7 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "bg-white-2 h-100 px-11 pt-11 pb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-4 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-4 font-weight-semibold position-relative text-white bg-allports h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fab fa-linkedin pos-xs-abs-cl font-size-7 ml-xs-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 23
    }
  }), " ", __jsx("span", {
    className: "d-none d-xs-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 23
    }
  }, "Import from LinkedIn"))), __jsx("div", {
    className: "col-4 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-4 font-weight-semibold position-relative text-white bg-poppy h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fab fa-google pos-xs-abs-cl font-size-7 ml-xs-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 23
    }
  }), " ", __jsx("span", {
    className: "d-none d-xs-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  }, "Import from Google"))), __jsx("div", {
    className: "col-4 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "/#",
    className: "font-size-4 font-weight-semibold position-relative text-white bg-marino h-px-48 flex-all-center w-100 px-6 rounded-5 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fab fa-facebook-square pos-xs-abs-cl font-size-7 ml-xs-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 23
    }
  }), " ", __jsx("span", {
    className: "d-none d-xs-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 23
    }
  }, "Import from Facebook")))), __jsx("div", {
    className: "or-devider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "font-size-3 line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, "Or")), __jsx("form", {
    action: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "email2",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, "E-mail"), __jsx("input", {
    type: "email",
    className: "form-control",
    placeholder: "example@gmail.com",
    id: "email2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "password",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, "Password"), __jsx("div", {
    className: "position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: showPassFirst ? "password" : "text",
    className: "form-control",
    id: "password",
    placeholder: "Enter password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 144,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "d-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, "none")))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "password2",
    className: "font-size-4 text-black-2 font-weight-semibold line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }, "Confirm Password"), __jsx("div", {
    className: "position-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: showPassSecond ? "password" : "text",
    className: "form-control",
    id: "password2",
    placeholder: "Enter password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 23
    }
  }), __jsx("a", {
    href: "/#",
    className: "show-password pos-abs-cr fas mr-6 text-black-2",
    onClick: e => {
      e.preventDefault();
      togglePasswordSecond();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "d-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }, "none")))), __jsx("div", {
    className: "form-group d-flex flex-wrap justify-content-between mb-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "terms-check2",
    className: "gr-check-input d-flex  mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, __jsx("input", {
    className: "d-none",
    type: "checkbox",
    id: "terms-check2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "checkbox mr-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 23
    }
  }), __jsx("span", {
    className: "font-size-3 mb-0 line-height-reset d-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 23
    }
  }, "Agree to the", " ", __jsx("a", {
    href: "/#",
    className: "text-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 25
    }
  }, "Terms & Conditions"))), __jsx("a", {
    href: "/#",
    className: "font-size-3 text-dodger line-height-reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }, "Forget Password")), __jsx("div", {
    className: "form-group mb-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "btn btn-primary btn-medium w-100 rounded-5 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, "Sign Up", " ")), __jsx("p", {
    className: "font-size-4 text-center heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 19
    }
  }, "Don\u2019t have an account?", " ", __jsx("a", {
    href: "/#",
    className: "text-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 21
    }
  }, "Create a free account")))))))));
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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtYnJhbmRzLTQwMC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS01L3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtc29saWQtOTAwLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ljb24tZm9udC9mb250cy9hdmFzdGEudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvaGVhZGVyLXByb2ZpbGUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvbDEvcG5nL2ZlYXR1cmUtYnJhbmQtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sMS9wbmcvbWVzc2FnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sMi9wbmcvZmVhdHVyZWQtam9iLWxvZ28tMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sMy9wbmcvcHJvLWltZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sb2dvLW1haW4tYmxhY2sucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvbG9nby1tYWluLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3N2Zy9oYXJ2YXJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3N2Zy9pY29uLWxvYWN0aW9uLXBpbi1ibGFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9zdmcvbWl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvbWVudUl0ZW1zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvZ28vTG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsQXBwbGljYXRpb24vTW9kYWxBcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbEFwcGxpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsU2lnbkluL01vZGFsU2lnbkluLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsU2lnbkluL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsU2lnblVwL01vZGFsU2lnblVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsU2lnblVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsVmlkZW8vTW9kYWxWaWRlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFZpZGVvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05lc3RlZE1lbnUvTmVzdGVkTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXN0ZWRNZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09mZmNhbnZhcy9PZmZjYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT2ZmY2FudmFzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVTaWRlYmFyL1Byb2ZpbGVTaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVTaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGViYXJEYXNoYm9hcmQvU2lkZWJhckRhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyRGFzaGJvYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0L0dsb2JhbENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZVdpbmRvd1NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2FkZERheXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2JyZWFrcG9pbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nbG9iYWxTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RoZW1lLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBuOHRiMXQvdXNlLXNjcm9sbC1wb3NpdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBvbGlzaGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wbGF5ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwiZGF0YSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiRm9vdGVyIiwiZ0NvbnRleHQiLCJ1c2VDb250ZXh0IiwiR2xvYmFsQ29udGV4dCIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlU2lnbkluTW9kYWwiLCJ0b2dnbGVTaWduVXBNb2RhbCIsImltZ00iLCJTaXRlSGVhZGVyIiwic3R5bGVkIiwiaGVhZGVyIiwiZGV2aWNlIiwibGciLCJkYXJrIiwidGhlbWUiLCJjb2xvcnMiLCJUb2dnbGVCdXR0b24iLCJidXR0b24iLCJsaWdodFNoYWRlIiwiaGVhZGluZyIsIkhlYWRlciIsInNob3dTY3JvbGxpbmciLCJzZXRTaG93U2Nyb2xsaW5nIiwidXNlU3RhdGUiLCJzaG93UmV2ZWFsIiwic2V0U2hvd1JldmVhbCIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJwcmV2UG9zIiwiY3VyclBvcyIsInkiLCJiZ0NsYXNzIiwiYWxpZ24iLCJyZXZlYWwiLCJpc0ZsdWlkIiwibWVudUl0ZW1zIiwibWFwIiwiaW5kZXgiLCJsYWJlbCIsImlzRXh0ZXJuYWwiLCJpdGVtcyIsInJlc3QiLCJoYXNTdWJJdGVtcyIsIkFycmF5IiwiaXNBcnJheSIsInN1Ykl0ZW0iLCJpbmRleFN1YiIsImhhc0lubmVyU3ViSXRlbXMiLCJpdGVtSW5uZXIiLCJpbmRleElubmVyTW9zdCIsInZhcmlhbnQiLCJidXR0b25UZXh0IiwiaW1nUCIsIndpZHRoIiwidmlzaWJsZU9mZkNhbnZhcyIsInRvZ2dsZU9mZkNhbnZhcyIsIkxvYWRlciIsImRpdiIsIm1vZGVzIiwibGlnaHQiLCJnZXRUaGVtZSIsIm1vZGUiLCJtZXJnZSIsImJhc2VUaGVtZSIsIkxheW91dCIsInBhZ2VDb250ZXh0IiwidmlzaWJsZUxvYWRlciIsInNldFZpc2libGVMb2FkZXIiLCJ1c2VFZmZlY3QiLCJBT1MiLCJpbml0Iiwib25jZSIsImVsZVJlZiIsInVzZVJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZU9mZkNhbnZhcyIsImxheW91dCIsInRoZW1lRGFyayIsImltZ0Zhdmljb24iLCJoZWFkZXJEYXJrIiwiZm9vdGVyRGFyayIsIkxvZ28iLCJ3aGl0ZSIsImhlaWdodCIsImNsYXNzTmFtZSIsImltZ0wxTG9nb1doaXRlIiwiaW1nTDFMb2dvIiwiTW9kYWxTdHlsZWQiLCJNb2RhbCIsIk1vZGFsU2lnbkluIiwiaGFuZGxlQ2xvc2UiLCJ0b2dnbGVBcHBsaWNhdGlvbk1vZGFsIiwiYXBwbGljYXRpb25Nb2RhbFZpc2libGUiLCJpbWdGMSIsImltZ0wiLCJpbWdGMiIsImltZ0YzIiwiaW1nRjQiLCJzaG93UGFzcyIsInNldFNob3dQYXNzIiwidG9nZ2xlUGFzc3dvcmQiLCJzaWduSW5Nb2RhbFZpc2libGUiLCJNb2RhbFNpZ25VcCIsInNob3dQYXNzRmlyc3QiLCJzZXRTaG93UGFzc0ZpcnN0Iiwic2hvd1Bhc3NTZWNvbmQiLCJzZXRTaG93UGFzc1NlY29uZCIsInRvZ2dsZVBhc3N3b3JkRmlyc3QiLCJ0b2dnbGVQYXNzd29yZFNlY29uZCIsInNpZ25VcE1vZGFsVmlzaWJsZSIsIkRpdlN0eWxlZCIsIm1kIiwiQ2xvc2VXcmFwcGVyIiwiQ2xvc2VCdXR0b24iLCJNb2RhbFZpZGVvIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ0b2dnbGVWaWRlb01vZGFsIiwidmlkZW9Nb2RhbFZpc2libGUiLCJOZXN0ZWRNZW51Q29udGFpbmVyIiwicHJpbWFyeSIsImRlZmF1bHRNZW51SXRlbXMiLCJNZW51SXRlbSIsImRlcHRoU3RlcCIsImRlcHRoIiwib3BlbiIsInNldE9wZW4iLCJOZXN0ZWRNZW51IiwibWVudUl0ZW0iLCJPdmVybGF5IiwiRHJhd2VyIiwiTG9nb0NvbnRhaW5lciIsIk9mZmNhbnZhcyIsInNob3ciLCJvbkhpZGVPZmZjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsInJlbW92ZSIsIlNpZGViYXIiLCJzaG93U2lkZWJhckRhc2hib2FyZCIsInRvZ2dsZVNpZGViYXJEYXNoYm9hcmQiLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsUHJvdmlkZXIiLCJzZXRUaGVtZURhcmsiLCJzZXRTaG93U2lkZWJhckRhc2hib2FyZCIsInNldEFwcGxpY2F0aW9uTW9kYWxWaXNpYmxlIiwic2V0U2lnbkluTW9kYWxWaXNpYmxlIiwic2V0U2lnblVwTW9kYWxWaXNpYmxlIiwic2V0VmlkZW9Nb2RhbFZpc2libGUiLCJzZXRWaXNpYmxlT2ZmQ2FudmFzIiwic2V0SGVhZGVyIiwiZm9vdGVyIiwic2V0Rm9vdGVyIiwic3R5bGUiLCJ0b2dnbGVUaGVtZSIsImlzQ2xpZW50IiwiZ2V0U2l6ZSIsInVzZUNhbGxiYWNrIiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImlubmVySGVpZ2h0Iiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJoYW5kbGVSZXNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTXlBcHAiLCJtYXRjaCIsImFkZERheXMiLCJkYXlzIiwiZGF0ZSIsIkRhdGUiLCJub3ciLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImJyZWFrcG9pbnRzIiwic20iLCJ4bCIsImdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJkZWZhdWx0Q29sb3JzIiwicHJpbWFyeUhvdmVyIiwic2Vjb25kYXJ5IiwieWVsbG93IiwiYXNoIiwiZ3JlZW4iLCJpbmZvIiwicmdiYSIsImRhcmtTaGFkZSIsImJnIiwiYmcyIiwiYmczIiwiYmc0IiwiYmc1IiwiYmc2IiwiYmc3IiwiYm9yZGVyIiwic2hhZG93IiwidGV4dCIsIndhcm5pbmciLCJpbml0aWFsQ29sb3JNb2RlTmFtZSIsInNwYWNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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QURGLENBUkYsRUFlRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHNEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsQ0FERixDQWZGLEVBc0JFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsc0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLENBdEJGLENBUEYsQ0FERixDQTFGRixFQW1JRTtBQUFLLGFBQVMsRUFBQyxxQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUcsYUFBUyxFQUFDLGlEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQU1FO0FBQUksYUFBUyxFQUFDLG9EQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHNEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsQ0FERixDQURG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RUFFVixHQUFFRCx3REFBVyxDQUFDakUsRUFBRyxJQUZQLEVBR1YsR0FBRWlFLHdEQUFXLENBQUNySyxFQUFHLElBSFAsRUFJVixHQUFFcUssd0RBQVcsQ0FBQ0UsRUFBRyxJQUpQO0FBMUJELENBQWQ7QUFrQ2VySyxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxnQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIF91cmw6IFVybCxcbiAgICBfYXM6IFVybCxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgIGlmIChTVCkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgICAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgICAgIGxldCB1cmwgPSB0eXBlb2YgX3VybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmxcbiAgICAgIGxldCBhcyA9IHR5cGVvZiBfYXMgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hc1xuXG4gICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpXG4gICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKVxuXG4gICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICBpZiAoX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KSB7XG4gICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcylcblxuICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKVxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybCwgdHJ1ZSlcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gcGFyc2UodXJsKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCIvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9XG59IHtcbiAgLy8gRXNjYXBlIGFsbCBjaGFyYWN0ZXJzIHRoYXQgY291bGQgYmUgY29uc2lkZXJlZCBSZWdFeFxuICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcblxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgIChfLCAkMSkgPT4ge1xuICAgICAgY29uc3QgaXNPcHRpb25hbCA9IC9eXFxcXFxcWy4qXFxcXFxcXSQvLnRlc3QoJDEpXG4gICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDIsIC0yKVxuICAgICAgfVxuICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgaWYgKGlzQ2F0Y2hBbGwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSg2KVxuICAgICAgfVxuICAgICAgZ3JvdXBzW1xuICAgICAgICAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH1cbiAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gKGlzT3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICB9XG4gIClcblxuICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAgIChfLCAkMSkgPT4ge1xuICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICAgIGNvbnN0IGtleSA9ICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcblxuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbFxuICAgICAgICAgID8gYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9Pi4rPylgXG4gICAgICAgICAgOiBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+W14vXSs/KWBcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKCdeJyArIHBhcmFtZXRlcml6ZWRSb3V0ZSArICcoPzovKT8kJywgJ2knKSxcbiAgICBncm91cHMsXG4gICAgbmFtZWRSZWdleDogbmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgID8gYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9ybWF0LCBVUkxGb3JtYXRPcHRpb25zLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIHN0YXRpY01hcmt1cDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGRldkZpbGVzOiBzdHJpbmdbXVxuICBmaWxlczogc3RyaW5nW11cbiAgbG93UHJpb3JpdHlGaWxlczogc3RyaW5nW11cbiAgcG9seWZpbGxGaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBodG1sUHJvcHM6IGFueVxuICBib2R5VGFnczogYW55W11cbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCh1cmwgYXMgVVJMLCBvcHRpb25zKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBZUNBWUFBQUE3TUs2aUFBQUFBWE5TUjBJQXJzNGM2UUFBQURobFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBcUFDQUFRQUFBQUJBQUFBSHFBREFBUUFBQUFCQUFBQUhnQUFBQURwaVJVL0FBQUJOVWxFUVZSSURXTmsyRkR5bjJFQUFOTUEyQW0yY3RSaXVvWDh5QXRxRmtyQ2xwT0poYUZKMHdOdXhJc2ZueGg2N3g2QzgvRXhLTEtZZzVtVm9VVEZIbTcrNVUvUGliWjQ1TVh4cUkvaENZWFdqTkdncG5VSXc4MG5xZ0JKa2pObDBPUVZoMnVhK2VBNHc1MnZieG00bWRuZ1lpREdseisvVVBqNE9FUlpyTUFsaEZKQ3NURXhNeFJmMmN3UUxxMlBZdmErTjNkUStQZzRSRmw4NE0xZGhscDFGN2c1ZVVvMkRDbnlaZ3hjYUQ3ZTl2STZYQTBoQmxHcCtzamIrd3lybjExRU1RdlowbjhNLzhFaGNPemRReFExK0RoRStmalgvNzhNNGFlWE1GeFVlODRRTDJmQ29NSXR6TUFJaEovKy9HQTQ4K0VKdzZTN1J4ZzJ2cmlLeng0TU9VWnlXcG04TE93TVltdzhEUGUrdlFYNmxUeEFsSS9SamY3ODV5Y0RDRk1DaUlwalNpekFwWGZVWWx3aFEzWHhrUmZVQUxkY1RpSEY4VW1FQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ZvbnRzL2ZhLWJyYW5kcy00MDAtZWQyYjhiZjExNzE2MDQ2NmJhNjIyMGE4ZjFkYTU0YTQudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ZvbnRzL2ZhLXJlZ3VsYXItNDAwLTU5MjE1MDMyYTQzOTc1MDdiODBlNTYyNWRjMzIzZGUzLnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2NodW5rcy9mb250cy9mYS1zb2xpZC05MDAtYWNmNTBmNTk4MDJmMjBkOGI0NTIyMGVhYWU1MzJhMWMudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ZvbnRzL2F2YXN0YS00MGExMDg3ZWMwYTkyMDg5NWQwNGY3NzkxZjY5MmU1ZS50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFvQ0FZQUFBQ00vcmh0QUFBQUFYTlNSMElCMmNrc2Z3QUFEYzlKUkVGVWVKeXRtSGx3SEZlZHg3L2RjOC8wM0RPYUdjbXlMbCt5NVVQR01XUk53QzVTRGdHMk5pUlZWTzBmZ0VLeDdNRWZGbG1LS3FoaUVWVUxZV3NYYkdOeUcyd25WQUdCbEozRTJUaEprWmdZWXp0eUlzdXlaY21PTEkybGFIUkxjMC9mL1BxWTFoaWJJMENYM3FpbmovYys3M2Q4Mys4Tmk3L3lFSzQrdVVVWU9yaEhIRDU0bEZxZk9QeVVxalZoNkVscVQyaXRUeHg2NGloOTM2TTkrOWVPdzc2Zmg4dFhIbXNtaUc5Snd3ZEhHWlhwWXhoMUgxMitqOW9XVmUrS0FjTXcxY2ZwbW5hUG5sSFVQbUhvOFZIeHloUGYwdnI0dXdPcW80ZENaSkc5TnNZMnFxcEtqNnFxemRSQWZ6QS9DTTM0RHdQekQzdlEvcHJwalI0Ym1GR0MzYXYyN1EzOVhRRDU0U2Z1RTNsaGxJYnNOZ0FZRThNQVdtWlVxNWQwWEFQVCtLOFB3OVJBcStnV1BaNVJmdkRSKy80bVFHMm1qS29lcGRPUWVzdGRCckxFb0Z5VXdTZ3FwSFB2Z2UrYnd0SnZSeURQRk15SlZBR3RWNnFBSUxlSDZPdFJZZkRSdmU4YlVPMGpsMTU1L0JBVXNwcGxuWnNSTmV2a1JSWTNsbVJJQjY3ZytqZGZ4cGtIbjhIelh6cUV3WDk4QnZtWEwyc1VaaU5MajJkdUMwQzlkdk9YZjNUb2ZRR0tibjR2dmRtbHo3aVdpeUFWVHl1RTJEMFFJbmRqZ1pjUStaKzNNZnFyTThqUGwyQm5YZGdRYk1WU1djYnNOOTZBMGorTHl0T25vTDUwSEV0ZmZSTHpYOXdIL3BWZTFJWUhWSmtnNUM3aDB0N2JRdDRDS0F3K3JtVm0xeTF4RGdlazhEMVF3dHRoYzRWaGt6MW9lbmdNYkhvSjJZVVpoR3grZUJrV0syTjFTRFkyWTBuS1EzMXhCdkNvRUY5K0U4N1pQQ0taS2JpZWVRRVllb3ZnRkJyQ2FMcDNGTFZMR1BqQnZqOEpxQWN0Z3oxV3RHc3ZNMFlIc25NZDRBekNyaWdFSndFMnV1V3dJYmgxUFlwMkIwU0pSeUFTZ2Fka0J5c3VRckZ6UUc4WlpjR05oWEVibkJ3SEljaEJraWs0ZnZVU21HSU9ERm1QMGRWQTFlMUpDckdIdi9oLzk5MFdVRXQ3aG1VUExmdFV0VUpQVWIzZ25RMVFoUkprUllZc0t4QUxaYkNDQkg1MEhGR25IOU5TRnNpU05ZdVRCSkZETnNtamQ2WWZtY2RlaFRySGc0MEtFR1VacW9PRzlBZkJGTEpRRlIxS2J6WEhvVm9Kc2dCRmw3dUhuZ3pWd2xXRG5HRUtZUGswemx4NkNVKzlkZ0RGeFduSWpJcXBlaEhTZEJhSitoWTQ3RUN4T0FjKy94N21LOEFtMTJiWUFnNWNYaERCK1Z6Z0ozaFVKbkpRY3dRcFVyY1hiOUFZc202OTZwaW1Sb1ZFdTl4ekU2Q3U3cnByYXc5RDh6UVhzS3FFeWN3WlBIUjBMMzdSZnh4OFpRNmwzRGhHdUZuODFGZkNsSmVzRUtoSEpoNUhKbGlIYU1OYU9CdUNHTWpPWVh0OUJ4UmJIUGIyTmhTY1hnaGhId29USXVRNzFpK0hFWlJsR1dVMGoyRlB1ZS9oWmd1UVZaU3VaUzdWVWhRalJtaVdGSGRKSjQrTzBqU0UrUVc4ZnZZRUh2bjVEL0RMM1AvaklOT0xMOCtjUlpvdFlBWHJoeEtKSWxMMElYZHRERHVjcmZwb1UySUJUMStZUmJEa2dKQXU0dnFsTW9TS1lNU2RpVWtEMVJpR29GbDcxN0tMR2VienNJTFZlR2c1Z0kwWThYZzR0QVNUQ0pGTEQ3N3dVenozWWk4V0MyNFVTR3BHcEJLK2IwL2pKLzQwUEt2RGVHUG1OM2c5Y3hucDdCaEdGeS9Ea3lyaWJtOFJ2ZmtLTHBaVXJJaTc0ZUJjTkF5QlVFeERVWmExbHE0eGlwYmQ4dWQxUU9IeUkxcWwwV3lneVRWd1NrMk1HT2RmK05TOXFPUWx6TTlMS05EMU45NHFnL3lHTFNFZkh1eEk0SUdQdHlDM0tndjJuMUxJYnZIZ3RjQTA3SUU4RnFadE9KMTNJc3hJV090M1lYQWlpMXhSU3hMWk1JRFpQL1NtR0hhbDlWN28rODRXVm1IVW5Zd1piMGFUVFZQWHJFdmFUT25saGxnY0sxZlpNVThhWTJkdFVPSk9yRm5OWVZOOUFMTGJBMGN3Z3VaMTdkaTRkVE4yN083RTdvK3VoRHZDa29oWDBCemw4WnJYaGxHYTRFQURjT0RrRVV4UnNpa1UzNnJlWkRvbllNZ0dNRFg2M01rU3hrN1ZndEU4YnEvbXNXRTl5L1VLTGs1UG94UmNnMkNVOUl5WEVTMEJPK3I5ZU9Dakhmalk3bnRROGNTaFVwS0UxbXlHNEU5Z0lSeEhYOU1Ldkg1WEZNYy9MbUN3VThKRDlTV2NiQmVSbVdGeDROU2pCRGtJUmlLWGtnUXhwSytHOUJpUnFiQ01CcWcyVmRkTDNYcG03T2xXZzJxNWdBUVFaMjlNd2hPdVE4VHRoa2RTc1l0emdwL2g4Vi9QOXVMY2hTRzQ3VTRnUHdVcHZ3Q3YyNEVOLzdBTEd3bmNab3ZodlhNUjNIbS9GNHNlT3hab1lpMnRQRHBYSi9IOHhSTVVnaUlOWjhEcG9KS2tqOGVLVWhOTE1Gc001OUlGMVdoVzdLbW1EdXFCTE9PekhhdnhtYllZZnZhbEQrT0JOaisycjRwaE8zMS84SzQxYUc5dnB4VmpoSFJ3RVRmNlR1SEd5SFdjTzl1TDB2UVV0cmRHc05MdHhlRkhCTGc0TzBZeUhrZ01oeEpmUVVPS3cvRENHVFB1cW1NYnlVTU1XMWdqYTR5a3VGVUh6YVlZcm5iUjhyWjdaUnhScnd2YjZuMUkraDFvVGNXeE51VURPM2tlYkg0Qy9PdzRnYVloOGtWNEF5RWNmK2Nxemw0YWg1OGxQNVJzbUN1NzBkTEVJaHhQWW5BWUdMaWF4WGhoRkxJbzZGYlVzMXBQR21Oc2Rqa1JxdkdtV0t1ZGFoV25NTFRKekxvS25VcDJGajQ3ZzNEVFJvU28yUlFlVFcxdGNCTVVMZEZVTkhqUm9HVHdpZll3TnF6azlBR0xvZ292SlVRcVF1QW5yMkwxNmhZRS9XVEI0WUtSS0pCcnhqZmluclhpckdwZU00dXFtUXRyclZ5dXBsbXQ3SXI1VVNwVU1IV3RIM1BYem1Qc3hpeW1xR0xKOFhZRWduNUlDbG0zdlJQMXNSZ1NpUVJvNWFaNmlHcU1pb3JmbkYvQ3lFZ0FDeE0yZkhERmV1eGE5eUd3TEd0dEg2QzcyUmlieGxMNmpiU1d6VGhnTEhwZDNhMlhsclBhVHQ5Ymt3Rk1MNGtZdkQ2SnFjbEpwSkl4aEZlMHdVYVZ6ZmhVRmo0UGxXZWxQSnd1SDJhbXFDNmtwSHBvUnlOMnIvSWpFWFZCZEJKY2F5TTIxVzNDbXJvMkkzc3Q5VkFNOFZia2ZsWmxsTEhhQ2tZdnIvUTZqVEZnTFhlYlpxZU9GSEsxbXdBQ3BJdVJaQXRzYlR2aGpIZEF0UVd3VkpEaDVieVltMzRQSThNRHVQSHVJRzVrbHFnUzRoSDBBZC80M0ZaODdBTkovT2V1Tm14cmlGdEpvWXUyb2l3THQ5N1VNUXBkbklTNVpVUVZpcjVYdFc5WmdzeWF6Y2d1aEdJK0ZQa3lmRDU2WGhDUTJINHYydTcvTjJ5Ny80dEk3dmdNM3AyaGhNaUplSGN5aDRsY0JTbVNwSmJPT3JoY2J2enJuV3Z4eng5b29Za3FlbE9yV212MlhhMXdLS0JPc3FRekoyc2hxc3VhVWFncWVnYXJ0VWxrUGhPa3FvUjFVVDFZS2NBN1B3alhZZ2FGM3RPWS9kMXZNVG5RajdhR0NHSjFkWmd0U3VqWUZNSW5QN3NPRFcwUjhwcU1rSk9LV2dibWNscHRadit5YkkybHlBVG8zUEMxQ3dTUk5wS2l1bWlqMXErR2NOY21rM25ENWxBcFViSzBCVkF4OHM0SmpBMy9EaU5EcDFDZXU0b0txK0R0U3lNWVd5eFR0bnJCK1oya3ZhS3h0SmxxVUZNRFdrZDFkMHAzMDl5Ty83MVFsWm5EeXcrcWVuSm9NMkp1U2hCWjc5Z1FibVBHNWJLQ3pHd1dIbjhJZFFtcUE3ME0vQnk5NS9GZ1lDaU5LeGtxQ2lRQnlZVGZpQy9kcFpJZXc5WkNjRE9mR2ZmNjJJY0JzOXlpT0RoY3pWeERZbVI5eWRHRjAxck1henN6Z0YwMkd5Ym5SWnc0ZHczcGlVbXFjbVp4ZlNxUE00TlQ2QnVsb3BiVzY4YUlDemFTRU1WS0FuUEMxZGl6NGx5eE1saUxTMG1ROWxtQW5zNnZqOUdOL2JydWFWQ3lBUVVUMXJDZTBSbFREUU5ObUNRWkhhc1NHSjh2NDhDTDUvR2RYNXpHcytjbmNaMjJvQUczRTUwcDBrUFN2VGRQWnpDUnprSVVSZDBMdWhYTjdHWFY2aGl3Tmsva292M2hYZnVXTEVEdGNDbGlENjAzV1dvNkhLTUJWanRTVEJmckV6Qm1XY2lWVUNCSlNTV2oyTFk2Z1MwTllXeHRqR0ZkSW9nTnFTQjJyazhnUVhzU2lmWWYxd2VLdUhocUJyOStkaGhuWDdtRzhlc3pkSjJuSkpCcXNsZzJkVUxKS2hMYlUrV3lBSm5PbmlWWmxidFV2V0JWbG1YRmV0bklMcGtxamF2OVkzajFsMitERnhrNG5WUVR0aVN4dnRHUGpTMWhkRFJ3dUxPOURxMU5jWGlwL2d1UUlLK01lN0I1YlFxYjFqV0RneHZEcHlmeDZzLzZNUGpPS0NrVXI0dXlvWVdTdG12c3FscnZKa0R0OEczNzcyTXFwUDFHSEpoSlVaVVpPbVltWnZIbTBiT1l1RElEbDhPRGFNaURVcm1NWUlCREtoRkFQT3hDZmR4SDUyRzRLRkZjNU9ZbUt1ODVyd05jS0l4NFF4TmExNnhIKy9wVmFJaUVNZDQvaStPSHptRGdyV3VRZVExVTNoL2I5ZGl4V3FaYmZsbndidnRlTjVuK1NHMFFMMDR2b3ZlVlBsejg5U1dFZkxSVWFSa2JEVkVMNkc3U25uTlRqV2l6TVFpRk9SSnZMd1Y1Q1Y2ZkEydlhKbEhmR0ljdmtvQXpFSVdUTXQ3bDhwS09odEZJMTFNaER1bTNKL0hDajA4ZGlkNzlWUGNmOHR6MnR4bWhJblVYbG5KSExyelpqNWVlT29Feno1MkR1RkJHTWxVSExoaUZ4OHZwOWFQZkgwQWlsZEovdEF4SFl3VEd3VzYzVTN5SjhIRUJORFkxSVV5VzhuZzk0R25WU1Y4ZHdzaEFIeXFWTXR5K0lPM2ZvMGcwMUtPcE9YbmtYNTRiNmJvZHkyMEJ0UmhJM1B0azE4eGdabi9BNDBXMExnS0h3NEZpbmhJam4wVStuME1nNE5jaHZQNGdyY3RldUwwK1JPTDFKTWhodlE3a1F2U08yNGRLcVlMTTJEaXVYYnhNYml3anZxSUowY1kxOENjYXdjVWI0QTBtOXUvYWUrcTJjSDhVc0hyYy8vVGxiaTRVL1RSWkxXdHoraURJRE1HVndSY0xWQkJLRUtoNkxzMU5rU3BRcWpJczdPUm1oa1RlYnFOOWpXekVielM1RW1zMzM0RjFXKzlBWFdNTFZkUkJiYzlMelpGVkdlZW5OMzcxOEMxdS9Zc0J0ZU1qRDc5NnpNM1ltKzBPeDM2WHkwUFc4aUVRU2NMTlJXRW5hQnZ0UTV3MHFFTEFQRmxYcTRGVko0SFNjKzV3QXU1Z25HSXZCcnVMMDhFMFdSRkZZWCtCNVp2WC84ZStZMzl1L0wvb04rck9ubU5MZDMzM2xXNkh5OVBpQ3dTKzdRdkcwOTVnREM0S2VEdTVVYXhVS0c0cmxCZzhGUUVzWktGQ3dNYktvWkFRcXFTdEpNNXBWV1crTFpVcUxSdSsvTVB1emdlWHBlUnZCcXdldTc1M1lteEh6d3M5bXg4NjJNd1g4NTFDTWZ1VjB0TGM4MEtsM0srTHJxcDVYdEsxVXBMSy9XSXA5N3hVTG54RkxCUTcyLzk5WC9QR1BZLzJkSDc5OE5qN0dmUDNxNVpITGRnUFJiTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFWUFBQUJIQ0FZQUFBQzZjakVoQUFBQUFYTlNSMElCMmNrc2Z3QUFDUk5KUkVGVWVKenRuSHRRVTFjZXgvMXJpOU4xbk4zdDdNN3U3Qi85by8vdDlJLys0Y3pTaHpQdDFyNWtLNHE2cUowVmlnVlJWS3pZc2xLQmNhdWdTMTBmdFZtM2dxNjFES21pUUFzK2tBSStXaUhoNFVJVUVTaUlnQW52SkRmdjVMdm4zSHNURlJJNE43bEpjSmJ2ekc4dXlaQ2Jlejc1dmM2NWp6bHpSQUZZUkN5VldQYi9xZEd4TDVyekNKQm5pS2t4Szdjb2kyY29HRVc0ajJRR1NrSEJkSWY3S0dhZ3Vpa1lTN2lQWWdiS01pZmNSekJUTlF2R2gyYkIrRkJZd2JoY1RyamdFTGE4T1I1dXlmc084bmU0RkRJd0xwY0xUakpRbTBHUFlkVTEzRHQxREcwNUdmanZsbmcwcm8xRzNjcTNjR1A1SXRUSHZvV205NWVoWlZzaTd1ekxRcS95T0VhYVZiQ2JqT1R6TGdJc05BbzZHRG9RaTM0TS9kK2RnZVp2S2FoYjhncnFGMGRDdGZoRmZsdlBiNzFaSk5UdnZBalZPK0wvTGYwVGJtZWxZYURxUE94bURzRkdGRFF3OUxDTmZmZlFlWGd2Nm1OZVk0VHh1S2ttZ0JMZWV3a05zVy9qcC84b1lCa2JKdUVXSEVDeWc2Rlp3ekkyaGs1Rkh1cVhMUFFBVVRIQ1lEZmlVU3NYb2JmNEs5aHQ4cmRpc29LaGVVUjc1VElhMWtUSkRHRnF1N2xwTGZSZDdZQ000U1ViR0lmVmdvNURKR3lpcUhld2g0dHN0dXhWOUY4cTQ2dWFISklGakhsa0dDMXBTVjd5UW9pTi9DZy9IVDhDaDlNUjhKZ0NCbVBXUGNETjlhdFJGMDRnb3RFZlJaT2RCcnZWRmo0d2ZCa2VHY0xOcE5WaEIrS0JrdmtoYkJaVHdGQUNBdU93bUVrVHRnNVN5bS93b0VSQzg4bFcwdC9JQThWdk1MUUR2WHR3ajkvNVJDVU9obTdybHI2RzVxUTF1RTJhdnpzN1UzSHI0MlEwclZ0SkdzR0ZUTkJwQTlpNll6TnNacU5zVVB3Q1F6dE9iYzBsdnp6RkRiTGhyMHZRWFhBWVk1cWJ4UE1zWWhmcjlId0RQM1hnREJocHJFUG5rVHlvL3ZLR3p4K2hOVDBGTnBPOFVLZ2tnekdUdktKZS9iYllxa3VEMGtpQTlGOG9oZFZxNWh0QkZsRm9WcU1lUFlYNVVNVzhMdTVQOExhV2p6ZkF5dWtsRDVwRmtzRFFFT280bENzNWhPcElHYjE3WUE4WjRIaEFMUmhIcGhndFd4TjRNSzFwNjJFekdnTFkyOVNTQU1ZRlEyODdpZjJYSlhtTDZ0MkZHRGhmSWt2alJhSGFTZFhwT25tVTk2SmdpaDJNeTRIUmxuVm95M3FPZUVBa0V4elZuMStCN2txbGJOMm9XODRnVFJ3ZkZUTVl1K1UrZExYem9hdWVpeDdGNzZGYXVtRHE4Q0hXVjZxRW5QT1hVSW9SakJQNm5uM1ExVVNRaXZRVXROVVJ1SC82bDJoNjd3VzQxMDBtSmxxNkNDVzNwNFJTVEdDY0xqc0dWUXNJbEFnZUNqVWRzWUVMVDZObHl4OG1oWlU2OWcxKy92UWtpd21NelhTWFFIbWFBSGxLTkRjYyt2ZGN0T2M4QzFYVUh6M1ZxdmYwU2I0WGVaTEZCTWJZbHk5Q2lKaHNKTFIweEhyeWZ3MTF6QUtvVjd3T094ZThNaG9xTVlFWmIwdnlEa1VNS2JmMWxjeEh6OWVaZnVjV2s4V0JjYzRCZlpCc25MUERacWRMRXRNWEJDWXd3K3BJbjJBZWcwUThoeHVxd01QMlhwcnlTNDJJenhvblpnaUt2VStzNmdZbkZ4Zzd0RmQveXdSR1d6c1BEc2VvWDFCNE1DVm14R2R5aU1zeUJzWGlNNDA0VlNFVEdJZHRpT1NSbnorV2RIM1pVTjN6VEY4YUxqQnJzNDM0dklodGFXSWFNQzdZelIzaXdIMkQwWWxKZUtRNXltOG9vUUFUbDhVaHQ4QUlXVHpHYXRSTUM4WmRuVVkxcTJZNEdDT3lGV3hMRkF4Z1d0bnl5eE1DWnVjWE1vR3htenFZd1l3MEw1N3hZTElVYkQwV1cvS3RuaWZrRVo4bWhObmdEWnA4L2U5NFF3Rm05ekVLUnBaeWJZUDIydTg4azhlcHdHaHI1c0ZwSDJMNlltOHE4SUR4MTZhcFN1Ui9EbjR0VS9LbEdsYS96RkN1aGFrQk4vaXQzMkR5UzB4aU0yWmtOaFlnajFhbEUyV3lOWGpBV0Z1eUdFcFRsZXk1MEZUOUN1WHFYTC9CZFBWWm9kTFlKWnZ5QXNkN0F3dVlpcXRtc0lRNzJ5U3kvNFJuUHVTOWg0bEE3WVZuc2VXYnhVZzlzd3FjTmJqTGpoTlZYTW5vTlNSTW0rL0kwdUFKc3BtNytPNTM0Z3lidm41UU14ZUYzejZQNUtKM3NiNG9HdXVWMGFob1VRWTBVQ21pWnhFeWpoaVlRb3FHNmFpZTdmUXQ4MExWRUpsSXVqdGNyZWdsM2QvUFI5NjVsd2dVQXFSb3FjZTJGcS9CS0RjVTBJRFo1TUtkYnJNWVJ0T0I0WkIreUVDQ1NNYlpOWlhoM241aEJhOUdDSitteXQ5Z3grazNCUzk1QklwZzBWQmMyVU9BQm43VmdXKzUrUDNubm1EekZ2by9wOHJaU2pXVmhNWHdmbWl2L0FLRDFUL0R4ZlBQWVpNeXlndVFoNVpNN0tLbW1QbEFwSXBlMVZuYnlJbVZpYzF1ZFZxWjk4OE1oaTQrRGQzYWdQeXlGeWFGamkvYldMUWMxN3VxRUVqVDUrTm8wTkZyUWVKdXQ3ZE1IMGJiL21tQXc4RitISkpPdUduSGU1Q2lYTUVFeFIxU0c1UXhxTHBkS3RzWkF4SkF1TnRyUmtxdVhsTEhXMVpyNHIyTVZSTFBYYnRRcUQ0cUFjeER5NytlQjczWi8wVXNLcWZMaHVxbWRpVCszU0FKU3ZKdUkvU2NYZEozU1Q2cGI3Q000Nk9TZUI5SmQycmJmallPVlcybE1Odlp1ayszYUZXOFBkQ0VmWlhwWkQ4eFNEaDhDbkhaNDU0d21RN00yU3FPNWdKSjQvVHIrcGpHZTlmOThob1BvT0o0RktxT1F0UGZDSlBWSUY0NlQwTk51SFNlbm5xeDJFM28xTFdoblBSRXV5bzJUOXJIQjhkMklXNlhkbG93Mi9iclliWktMd0QrWFZGRkRwd09MQ2tBT05TU1NETzRzV2dGTXNvK1FNNmxOT1JkM29HY2k5dko2eVNTeTFhU1psR29iajQvZjNJRDR2ZmM4dUk1bktlaFkrMTA1UUZEWkhOWWtWZVZFUkNZaVluYXI4OFZya0xDWjVXVHFoQnQrcjRxSHljZUtDMjNCQXlHeW1BWncrN3pxVExDOFFkbU5KOTMxbjN4YjVKM3hqeFE5aFlZeEhOSS9pbkF5MWxkR0RVTjQxTUtSK25uTHk2TExlTzNpUVVaaU4vVmoyeUZIZ2FURFlFMGx6SmNBTzNpSzlXQnFzekFRa0ttVU13dHo0SGV5TjdoQmhHTUlKdlRpbThhdnZUOGV1RUE4K1cxZjhCczQyUVpqN3czV1pCeTIzSy9IanRLRTBuRkNSMlUxRE94cUduL1R0WkpheER1VjNMQlpEUGlYTk1KYkQ0ZHl4OTRvR1hkVzA1eGcvL1gxVnpvREFNUThza012UHZFbTBZNEhjNDBITWVIeGU5NVRaYitoa3dLNlgwb2tLN0J0cUJkdFJXU2V5TE5wSXY5c2ZON2ZGNzdxY2VMbUt1WVVvQ3hVYmtjZXlzL3drWE5XUXdiSHdUOW1FTjRGNjNnNWhhN0dlMFBXbkJKY3c0bmZqeUkvWmMvUVZaNUN0SkxFN0Nkek1IU3l4S1FYYkVKbjEzZWlZSWZEcUM4VlluVyt3MHdrc29uTEYrRTVtTEhNTjFlN1BMTWpjQXZCUWh6SmVGZHB4Z2VEdjUxNk82YmZWeXpONlQ3MEN3WUg1b0Y0ME96ejQveHJ1N1pKdzU1bDJMMkdWV1RKVHlqYXZhcFp0NmZhdlkvWk5xbHhncmJqa01BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ1VBQUFBbENBTUFBQUR5UU5BeEFBQUFNMUJNVkVVQUFBRC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyszbGVLQ0FBQUFFSFJTVGxNQWdEL3d3R0F3bjFBZ0VMQ1E0TkJ3aHNoaXZBQUFBSWxKUkVGVU9Ndmx6enNTZ3pBTVJkRW4vdzBrMGY1WG01a1laeXdRV0QyM1VYT0tKMFRQbC9tSXZZNTAxaFhmTnFoQWFrRXFnaG85UjFYblpxcWRiRkw4SUZYb1hEZ3FZaTJwdHNCVDFiS3BqMU1UeWlmb2plcTlZSzR5OXBJN1Z2OHFvcWY4R3BzYUo2MThMdi9VT0tud1JSQlZKOXNVcFJTOVJTRzlMQXJMYWxFQW1SU0toNlgwQldOMEhKL0M4bkYwQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRWdBQUFCSUNBTUFBQUJpTTBOMUFBQUFBWE5TUjBJQjJja3Nmd0FBQVp0UVRGUkZBQUFBLzFkZS9scGYvbGxmL2xsZi8xVlYvVmxmL2xsZi9WcGYvMXBlL2xsZi8xcGUvbGxnL2xsZi8yTm8vMzZELzJkdC84UEYvL3o4Ly8vLy8ydHgvK3JyLyt6cy8ydHcvMXBnLzlmWS8rZm8vM3VBLzFsZi8zdC8vNUtXLy9qNC8yOTEvMXRoLzZ1dS81bWQvL0x5LzJGbi8xMWovNlNuLzV5Zy8rL3cvMTlsLysvdi8renQvNkdrLzUyaC8rN3UvMTVrLzZDai81eWYvKzd2LzFsZy8zcCsvNWFhLzF4aS82R2wvNEdGLytQay81aWMvL0R3LzRhSy8vZjMvOVBWLytmbi82V3AvOG5MLzJOcC8vUDAvNDJSLyszdS8rRGgvNnl1LzcvQi82eXYvNG1OLzJWcS82NngvN3E4LzdXMy81dWUvOVRWLzM2Qy8vdjgvM1I1Ly92Ny8yUnAvOHJNLzhEQy8rTGovNldvLzNGMi8vNysvLy8rLy9IeC8ySm8vN1c0LzgvUi8rYm4vN2k2LzR5US80ZUwvNFNJLzRhTC80dVEvMlZyLzJCbS83Mi8vMjF5Ly92Ni8yQmwvLzc5L210dy85RFIvOXJiLzZtcy84dk4vL3I2LzVTWS8vbjUvOURTLzJGbS8ycHYvL1gxLzRPSS8ySm4vOW5hLzI5MC81NmgvOW5iLzI1ei8zMkMvVmhnL1ZwZy8xdGgvVmhmL2xsZXNPY2pOUUFBQUlsMFVrNVRBRW5ONy84RGh2NkRRZjFFdU9qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2lJQXFuT0NJSjBTYkFBQUN2VWxFUVZSNG5PMlk2VlBhWUJDSG84WmFiK1ZYRU5LSWdtZXBCM2doaXZIV1d2QkFRVVZCcTdhMktsNG8zcmV0K21mM0RUSGdoNFFCa2kvdHNCK3l1NW5aSnp2NzdtNHlvU2dxS3p1SFZpUTUyVmtVUmVXK3kxT0c0U1h2ZlM2VnJ4eERwS0NRS2xJRlJCZFJ4ZXFBaWlsMU9EU2RBV1ZBR2REL0J5b3BMUzFSQVZSV3JnRTA1V1ZLUVIrMGdFNEhhQ3VVZ2ZRR01COVp0cEtCUWE4SVpFUlZOYStycTJCVUFqSXhNQXVXR1l4SkFhZ0d0WFdDVlZlTG12UkI5Vm8waUhZRHRQVnBneHJ4eVNMYWxzOW9UQmRVMzRUbXVOZU1wa1FwSlFLMW9OVWE5Nnl0YUVrUFJCS3l2ZlZ0Q1ZOS0FHcERPNTlRUjJkWFYyY0huMUk3MnRJQjJiWG9Kc3JSQXlJOURtSjJRMnRQQTlRTEp6bXlQZzI0L240T21qNXljRTcwcGc0eURXQXdXdUdoWVpvZUhvcldmUkFEc3UwdEN6SmloRFQxS01haUIyY2R3eWhwN3hINWlaTURzZVA0UXZNak5pSDRFOUdoKzRweE5rV1FDNXlicUVsTUNmNFVKc25WemNHVkdvZzFZSnJYTS9CRVUyQTltT0gxTkF3eUtjbUFaakVYWFlsZStPWjVQZStEbDljVmM1aE5DYlNBUlNFVFA1WjR2UVMvNEM5aUlSWFFjaURvRmF3YXJLelM5T3FLdUkyOHdjQnlDcUJ2V0h1MTdPdllZTmtOcklzOXZTWVVMemtRcThOMzBmNkJ3T1ptQUQ5Ri94ZDBrdVdXQkcwaHVCMkQ3c0RweEU0c2VEdUlyYVJCSWV6R243cm5CL3g3OFd4M0VVb2FaTm5IUWN5eEh3S0g4YWsvd0w1RktrYTZSbUVjaWJiMUdKRUlqbU9yOGdqaDVHdEVuK0MwVXVpYlVCZ1JseXVDY0Vqd0swOXhJaGtpRGRLZmdiT2QwL1NGbWNQbEZjdGVYWUl6WDlEMHVZM0RtZlM3VzZhenJ6MkFqeUVmRDdpNTVmM2JHMkxxR0IvZ3VaYU9rSnQrMHgxRFFnUDN4dGZuNjQzM0FYS0R1WlBiYlBLcmxuMXdQTHJmM25BL09oN2t0dEUvK2cyWkFXVkFHWkFhSU5WKys2ajJJNnF3UUExT1FUNUYvVllEOUljaTh2VDhvb3p5OHZ4RVVYOEJKK0d0aU5rbzRISUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEWUFBQUEyQ0FZQUFBQ01SV3JkQUFBQUFYTlNSMElCMmNrc2Z3QUFEd2hKUkVGVWVKekZXbnR3WE5WNS85Mjd1OUpxOVg1WmxtUUpTN0pzUTJ3ZWhvWk9ha0lJS1Uwek1LRkRaaUIvWkNhQktZOEVna2tCbHpCSjB5UVFHQmc3cFdBRERuYmFES2xESnNVZUlDYXBrd2FEUTBNeHRxbHNITDFsdmJVcnJhVFZ2dmZlMjk5Mzd0MjFMTXZ5U3RwTWp1ZDQ3OTY5NXp2ZjczdC85MGhIam9mZjc5OFVDQVFlNXR6SitTcS92OFBaemV1d1RMbVdlL0tiODh6RFkyTmpWK1NhRDMyNUJQcjcrd3ZJNkkzajQrTXZrTWtSVGRPTzhQYVRuSGR6M3N6dmY4WFp4R3VmVExtV2UvS2I4OHlUdXE1L3dMV0RwUEU4UVg1T2FDNlhyeVVESXdORlpPYVJnb0tDSVRMNm1tVlpkL0oyelRKNHFTT051d2p5RGRJY0pPMnR5d0c0YUdEY1BJOGFlb0JndW5uOU9HY1pKeTQwbmJYWjNpL25mTUxyOVhaeXJ6dGx6ejhwTUVyeE05eElURzBiWi9WaTFxWkJaSHZmR1hXY1l1THYwVUkrdTVqOXNnWkc0cDhuRS91cHFRM1pQSjlLSlRFMk5JQVRSLzRBLzFBL0xOTmNERjl6eDJYYzl4ZkNRN1lMc2dKR2FUMUtVSy9DRGdBTGpzaE1DTC82ei8vQWc3ZmZoa2Z2dlIzYnZ2dE5QUFh3UGRqNTdmdnc4ck5QNHNnNy93MXphU0I5d29QNGRUWVBMd2lNaERTYTNuWks2L3Y4cWwySVdOdlI5L0dOcjl5S2wzZnR3R1RBRHhncFJLSnhXRnc2UE5pUFB4NzVQWFkrOVQyODhjcFBNRGtSUURRU3poSlRabWppMStUcHFRczl1Q0F3RXRoR1FsdXlDUTZkSDdYaDVYOTlBaDRyaVhnaWdmSEpLY1NpRVlURElRd09qNktqWnhBOS9VUDRxTHNmTDcyd0U0L2VkeWYrNllGN01ORGJkVUhhODh3SGFVWGJsd1RNV2JqbFFwSkpqNS91M0k2eGtSSEVJbEdVZURRMFZwYmdreDlyeHQvLzdTZndwZXV2d28wZnZ3VHI2bFpnZFUwNXdZYlIwZFdEdnA0dS9PanA3eU1SajJXN3pleXhaU0Z3OHdLanBtN0RJa0JGd3pOb1A5bUdvY0FrNnNvTGNmOHRuOFlUOTk2S3IzM3hiM0RMRFgrSnoxMXpPZjd1VTFmaWhrMnR1TGhoSllxOWVUQVpYSUtUMHpqZTFvYjMzdjdkNG1IWlk0dkQ2em5qSEdCOHNKYXEzckVZNmw2ZkQ5ZmNjQ1BXclduQi9iZCtCbGRjdGc0cjYrdmdLU3FEMjFjTXQ3Y1FoYVZsV0gzUktxd2pzRFVOZGFncEswSyt4d1Z4WGYvbzhCSnhxVGl3UTNpK0lEQkdySjFPZ3N6YTVvVzVyMnpaaWkzMzNvM0s2bXE0OGxndzZHNW9MaGMwWFlmdXlZUG05cUN3cUFRdDlUVm9YRkhPV1lIS0loOTBUY05rY0dJcGZwWko1c0x6Z3NCR1IwZWxmc3M2Vjh3ZWJyY2J0WldsU2p1dWZETE1hYmw5aUNRMGhNSUpKSklHc1hxd2V0VktYTEpxQlpvSXNLRzJCcVZGaFVqRW9rdlpjdmI0L053RW5nSFcwZEdSejdEK3pIS285L1gyWW1JeVJQOUpJUlFNWXQrcmIrTDFBNGZRM1RlQy9xRUpoQ014K0h3RldIdFJMZXFyeWxGWFZZYUswbUpvMnJKcmNiRzA3WUloL1QxRHNhaW82SXY4c1VHdXoxZkh6Ujd6bVVVUEk5MEh4LytJOGJGUm1NazR5cjBlQkNOeFJIUWZDdHd1QlVwM2VWQ1FuNGZTZ253MFY1WGcweGV2eHNiRzJubHJ5UFErOC9FeHovUHJCY05ad1BpRGk5cjYxbXhDYzY4WEFwa2VUUnV1eEtscEMwbU5wc2pxb25WOUM2NjlhaU5hNjZ0UVdsNk9mQVlaRDBIbDAyd3JpNzI0YW0wRHJyKzhGVmVXbjF2anpnVXg5N2Y1QmpGSWhlVE9BQnNaR2JtR0g4M3pQcjJJMGJCeEU3NndxUkhsQlN4U0dNNnJpdk94cHJrZU5Rd1cxVFVWOEJKVU1ocEZLQlNtQnQyWW1RNWpKaFNIaTlFelIyTU5zV3lXQ3dXTVBkQ1hjMEhWWXlaUVZseUEvSUpDVmZRbW1LenpYRHBjcVFTTWVBU3g2U0NDZ1hGTVRZWDR0SVh5MGhLbUNpK3M5Ui9QeGZacXBMSG9VZy9TdDI1ZVJyZzlNL044TUEwREo0K2R3UEZqWFloTXo4QXdrZ3FVYUNvWmoyT0tXcUxOME5rTjVCRVUxdjBGdE9LSzVlL3RUR0s1aVorNlBqZzRlQmtCbHVaQ1dscEJDU1ppVXZ1bVVNZHdIazRrTWNDQUVxSG1pQmRHMGtKeFlRRk1NcEF5TGJ4L2VoS3V4bzI1MkhyMnFDQ21TM1dYeTdVNWwxUkhROVJRa0NnbVdOa0hZaGdQVHNJLzVzYzBpK0lVVFZMNnRKU1pvcis1Y2NtMW40WGI0OG5sOW1vSUpqSEZEYmt5QTVtVlRXdmhxL0ppeGhYR2lvWWkxTlpVWW9JK05UQXlockhBQk1hbnB1bC9CcnplZlBocUduTzI3NXk1UVlMSCtseEt5MVBUQk0zblFtbDFLYndscFlnbVV3aEhZNncrb2pqVk40eEFjQXBWRlNYUXFDbmRXNVRMcldlUDlRS3NJWmNVaTZwV1lteHlCbU1Uaytqc09vMlRIZjM0c09NMDJqcjdHQ0c1MmNvS0ZCWVgwaHpOTEZyWEpZOEdNY1hDWEpxQm13V3YyWGdGL3FkckZMODhmQlJ2ZjNCQzlWOU50WlZvckt0Q1JTVXJmbytiQVliK3hpYjBUMlNLaGFLeG5HWEg5TGowK3B0dzNlYXI4Y25MVzdDMm9ScVh0cTVDYTNNZFZyQStaTm1qbm5HejZqZWlNN25lT2ozSzVxMCt6MWV5WkRzMEpsK2RjMTFyQTY2OSttT3M1S3RSVWxTQXdwSkMraDJCV1NZc3pZV3krbVlwZ3hZczA1WTZ4QlJqYzFVcFl6bW1jT3hrTjhyWFgwM3FMdFEyc3FScXFJR3ZyQmplNGlLMk5WNjJLVEY0YTljU25NN3dEOFNaNzVhNzU1dzVLUm9MNVZKU3J4MzhBOTQvMFlQSzFvM3dUNXJxRFZVQkcweHZZUW5jZWZsTTBrbFdIMUZVYkx5R1NkdEE3K0FvdnY3UEw2S3pkeWlYYklSRlkxM0xsWkRKS3FMdFZDOGVlL1puZU81bnYwVVIyeFhEMHRGdzNTMFlHL1FyelVnWnBlc2FwdnpqS0wzNEUvQ1UxYWkxWFQybjBUVVV4TmUrOXhLKzhmaHVIRHg4SExGNFlya2E2eGRncDVZcUZ2LzRGSDZ5N3hCdWYyUUhIdHEyRjRlTzk4Q2c3N1N5dnhMZlNYcVp5emIrTlpJNi9ZcmR0Smt5WWJoTGtDaFpoZjg3L0phcUt6MFNSWFUzNGl4V2pyWVA0WW5kYitCTFczZGcxeXNITVR3V1hCSmZna2tuQTIyTFhJUVR6RTJQdjdBUFgvNzJicno4NW52b0h3OGhTait4ZEE5Y2JQL0xHQ1JtcGliUjNkYUdWSDRackxYWHdhaS9BdkhxUzFHNitUYldpaTVZN2tJTTkvVWhGbzFEMDExcXhtTVI1amRXWStFa1hqbDRGSGQ4Wnc4ZTJiNFhiNzEzRWtseHhpeUhZQkpnNzJTajNwbHdCRzhlT29iN0h2czNQTGp0RmJ4MXRCdEpNbUV5L3JuY2VjZ3JLSmFlZ1I1bEI5b1FTNmY2bG5Xb1huVVJpc3ZZYURadGdLdWlVYlpGMWFvR3JMbmtZcXhxYmtIQ3NPd1hQcVRoSzYxVTF4SytKR29tVFEzdm54ckU0N3NQNEk1dnZZUURoNDVtWllxQ1NhK3ZyLytRZENZV2tvQkVyYnUvdXdmYmZ2b2J0QTlNd05UYzFJNE53QkkyQkZENnZRV3ZJN0VVVnRZekd0YlZFclNiekdyVVRGUWw2aWpMSzE5UklmTHlXU3V5YlVta0xMdU5FYVlJT2tYTnlMdDlDL1ozazNTSkhZT0JLVHk3OTdmWm1PY0FNUjBYamNrSndXc0xQWG44VkIvODAzRnVEaFhDTFJ1UmtyNUcvMUFwZ3N6QkFSZVlDcXUzVnFhVE9nekRPWVJ3NXlPUHhhL0w3WExXVUxPUk9PemxtcUpoazlYVVBYdTFwb0tUUWJEeHBJRlQzUU1YQXZZYjBySjBlMlBqeHd1cDluajdhZHM4bkkza1V4cEZLSmtpcmY1TXNnMU1SWnhvYWFpUUxxMUtuRTFtdnE4UVJhd1R0YlNHT0tkbW9sQW9vTnVsbytYUTVOcTVPVlUwZWZTam5nWE5VTEFvdzVIL21wcWFmc2VQenZPSm9MMTNtQnRaam9tWU5pTkt6UFFIMVEyYmpyWnNZSU9qUVNRazZWcW1BbTlTWXhKVWZJVStaYkwyY3B1UnlYQThvejBSZ2dTUk00eWFpcllJU0V4VXREYmlYOUFVT3gwc1oxNi9rY0JqNTVQQ3dNaEVSbksyNnRMblc1WjZ0NkdZWmZNSXg1eDZoOFlWVTNMZjVXSW9qNFNSNThsWC9wZXU2RzNwbXV6UFpteC9rdS9VTER0ZlIxQ2FNS1gyTXBUZjJSb2NDUVFYeUtmbVkyazhHV0JFS2lwc255dUNtWEFNazZHSWJUNlVxR2trSGMxbDNFd0ZCN21YN2tKR2dpR2FYdElCTmFNaW5TaFV0SzZtQXlUQlowWW1Rb3FRampNMHhBelZYcGF0cldReW9TeEU3by80cHhDTkpjNVJGZWwxT0JqT0J1YjhlUC9jQmNPaStremxvQ09aaUNzdHlUV1VCZG4vUkVQeWpEQTJ6WUF3TkJwUXZ1VmlBclljZjdUU1dsZk1tMnc2UTZvQlZiNlpGcHlGalBrcEFZb1pKbVBLbEdWbFVzcXdnYkZ6alJENCt1d3Zad0VqNGplNThmN1o2aDFobUxXY01DaG1rbUFTdFhWbGcxRlRhVUJ4QzVHNUdHcDczNWdUSUdCSDByUmZ3aGFHcWVwRWZ5WnlXaFNDT1N2Z0tQTlRud1FXaXppK2FTbmc0bWR6ekhDLzhINWVZR3BUVGJ1SEh4a1BIWmQzOFVpN2xpMUoyK1JtdmFWMXdyVnlmczJXK0ludUljV01tSkc4c0VubnBqU1FSQ0tGdnVIeHpIbDBJaDVSNVpVeVM3ZDZtVXQ2S2E2UElaV0laVFF0b1Q4U2k4OW1PZWp3Zk5ZNEI5anExYXZsc09xcjZlOVRNeEVIbEdVN01xdnpkRmkzN2Q1MFRBM3FIU0ljQVp6c0dVVk1NYUJsZ01IeExma1hZK3Npd0J4cHFsTk5NVjN4WVlQQ0VJRUlvQlEvYlMybVZIS1JPUldLekdiNXF3N1BDd09UUWJYdUpRTnkvZ3ovUk1nSnozYkFrTENiVkJJMDB6ckxNQXpMQmlYK2Nwb2gzeCtZZE03SVhDcGhwME9pWGFLRkNTeGdtNnN3YmxvT1RmRmx0d284Y29DaFVnclMrTzJvT3ppV09VL2JKcnpPaCtHODV6Zk56YzMvUUVLN1JhcUtJT3hxd0V6N2xlbmtNeWVhMmNHRHdCTlJ4WDVTdE5ZOXBMWklKM0JZdGluSmc2TE5mb0lYR2drS1N0V0lscFh4Mll6QW5EQ2ZEandDdklmQmc5Yy9GQjdQeC8rQ0IxT1V4aDBrOS9SQ3ovdzVCdUg5c0tXbDVZR0Zucm5naWR0cnU3N3pFSzNoSWMycE1Dd0dDRHVJT0ZwSys0M1NKT3oyd3RIUXlaNWhGcjFScFNYTHRDc1QzV1Z2YVZnYXBwa2psWDlKcEpXSVp4aXpLM1NsZVRGVmd3RWs3Y2RjOE5DQkgvOWdRVkJaQVpOeDZvMW5ubVpXdWRsTXBTSlNIY2hHTXV4azY5aStVK1BwOUtlRTQ0TWZkZ3lxSXlNVmVHeW03RVRQN3lGMkFLWlRNaVZZUjZwd2lqTjV6Zzd2dHJsYmNscGpHQkZLNCtiK1F5OWxaVUZabjVGMi92S1ovZHp5VTJUeVEwTjhBclpQWmY1R3ltRklFcmVFYnZteGp5Mkd0Q2tPSmxXaEtGOGxzTjdCTWVVdjhjaTA4aTlGeTZHQnMzS1VLYlhtQ2ROS2JPNS8rMGY3cytWM1VZZS8vVy90K3Q5dys2OHZvOWJ1NUo3RG1NV0kzY0pvU21NQW0wUUdrU1RiNGFIQXRFcXFEaVRGYkVxUzg1QmZMWTFIblpMTDBhYnFIQnhRdkdJWU4rNUtEUjNaNEg5Mzc5SEY4THFrVSszUlk2L3Zpb2NMV21oSy8waFVRWnNKSzhPY21GVWtIRktmM2F3dVVrbjVNNlNvTWozVnhpUlRDRTdiOWFlWVlYcmRyRGxKa3Q5MEk5a1MvR0RmaTB2aGNjbkg5UVB2Ym85Mi85Zk9KMlBUZWZXMFNqazQzRTEvR1VvN3ZqQXZTYlYzZUFLaG1UQ3JDaTlzbDdHb3lTUWlDVU1sNVhSVlE3OGI0dTh2c2pXNVNVK0Y2b1lQNy9uQndMcy9YL0xmU1N6Nzd4QUVZT2ZCNS9aMy92cTVPOW9QL0V1OVllbWJTSFlyay9MelRPVDcra2FDaHlQUmVFOHFaVWFJS1VMd1BaeUhROUhZdmxoNCtubWE0VlpMTTY0Y2ZmZmY2NGQvditldTBYZjJ2TDRjUU9ueC94WTh2UnJLS213dEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUljQUFBQVpDQVlBQUFBYml6MDVBQUFBQVhOU1IwSUFyczRjNlFBQUFEaGxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQXFBQ0FBUUFBQUFCQUFBQWg2QURBQVFBQUFBQkFBQUFHUUFBQUFDWHdoOW5BQUFLRVVsRVFWUm9CZTFaQzNCVTFSbit6NzJiWkFsSlFEUmpoMUxLSXdwa29Zb3hKSUZBUXJVaVZnaEN3VHFPTXRCT1c1aE9Id0oyMnBtMmFaMjJvQkRzV0VUYktuWHNDeENETU1qVUlteml3SVpYRWNxR2wxTkFXclZXWGdtUGJMSjcvMzduSnZmdU9UZExkakdoT05NOU0zZlAvejczL3VjLy8zL09XYUowUzNzZzdZRzBCOUllU0hzZzdZRzBCNjY5QjBTWFEyeGNkQWRaMW8ydVREUjJrR1k4L2I2TGIxaFFURXg5WFp6TU1GVTkrVjRjQjFTNzZIWXlySHlYeG55WXB0V2NjbkV2c1BGN0E4bHF1NTNZR0VTQ0Q1RkIrMmpLc28rOFlqYStabjRPWmZVcVM4anJpaGpKcmFOWjFhMkpSRWFWbDk5Z1JjMXlFbUtnUmRSaXhNU2VjRGFIS1JpTUpwSy9FaTFRTm42TVpSbDlOTDdBQnpVRXQyZzBEeElZVzFGc3hWU2ZRc0Ewang3YXNmV2tSOVJHaDQwYjE5K0krZ0lxancyK2VEaFV2OE9oQmNySytsbFdacEdENjcxb3Z0eUwzajRSRExib2RDS2ZsNkRoTWV2blJHS1NTelBNUndHLzdPSXhxb0VUeTEyY3JMbUFWOFZ4UUlKL1NpeW14R244VGNBcjRuZ0hWTHRvQmhHdnBGZ01nV1MwRXhteEd3TzRma0VqQW13V1RWMGUxdlN5c29jZ09OL1FhS2tnV1djL0JiRi9xNklGbzhmblovbU5aYkdZbUNrRStTWFBmZ3VUcVRCQ0xhSzA0cTh4eXpmbjhLNDNUNnQ2aWVCQmxaVitqdENiaGtFNVhuNmd1SEowZUhmd2JTL2R3ZGtTTmRCVGZBcXZXTEhONE4vbnlLaTlHY3Q0VWhqMHNFcGpwa2JnYnNBdytVY2JCbC9SVDlrdDNGcFlXcm1QbUo5djNGbm56bC9ITEtpbXJ3TzhmdUZUQ0tKWFNGQTh3Mml2SVFySk1rTlV1MkN5UnU0aFpGakorTTlsK2cxTW1IZ0U0V2dIaG1yYXBna3h4VFJqTzBlV1RoaWg4aExCdlNJOEdUcWRBa1BLc3NrekUra2tvVTBhTm1iQ1lLK01ER2o0N0V0ZSt0WGlRb2hNTElnU1lZZ1hSNVJXUE83b1gvL2drR1dIYUtIelFtN1A1RTM3dWNoU0sxeCtEd0VGSlNWNVBzTjhWWkRvbjRMSm9TekU5djVGUmRsZHlRcnVjc0t1ZWpJeGVZYlBNTDd1SFRNank1aURJTXp5MHJ1REcwSXNDWlJPbUNwdFhQL2dNTGhLK3hpbVkzaXJJZFIyRWhOZ2pRT3ZXZUVQcGxjZnU5WEZJeWZENVBQMTB4NXZXU05lclBHbC9OUmZmdWpZeUNUL0FzQkRIZHp1bWY3TUpPNk9NVTFFcWwwSm1yTGZFRGYwemN6NW9pYXZJQVVGazdPd21wVXlpbXpCak8xTGU4TkUzeW96bFlPbjNBdWVHd2dFTWhWNVZCUDZob0tuRGpLZk9rK1I3RFl5QmxqTTgvRitUYnF5dUZmaVhlODVkSTFyZ3pHTjBRd0xPa05UbHg3dm9PM0FobllPM0R2S2xUR05lTnFmdFZidVNNNjZQQW5VTG16QjVNU2JFQzEwLzJKZFJ1R1NJV2JIVVVCTTY4SU53WWNVV2hEMU9BOXBWNm5yWWhiNGF4VVpGOHk2NlNMMmFFYXVTMkEram95M0Y3aWJNWkFGSkh6QWxVa0pFUG1VZDZQVSs2TVVENVJWeXIxZ3AxSWplY2thdG5MOHoxRG9NdVQraFdkbG9MUmlKUHI1aWw2bGhEOEJ3Y0hINER6bHZhZ0VHMUJKK3hNbXFwNzY5TjVFRTZ2WHFRSTlCYU9PRDhMSW4xWHRJV004cGVJU3h1dFZNNUc3aVdTTEwzbGxISnpKbUtsK0RmUTJRbjRQNnJrYkhMQW85eDAvY25SUzdabU5lWkMxZ3dPcmZSNnlVS3FxWGNwWkpON1hTNGpJa3dxZmhPQjRGdDcvS3Q2bGQvd0xSQUVDNDRjMmZxNzVBb0psRTVuOEM1cFNzejh1MDMzSUo0eFBlNjJjYTJ2NnU1Y1dEZ1hmQVcycGwrN0ZPOUwrRkpXT1lOdkliTzdEc1V0bU9iT0RON3l3ZUdLZ2NmZTJzQ3FiQ0diaXJkZ1BmVjd5RUF2bEk4WldqalFpMFNZZzhkTEd0QjNaVXBiZ3EyN0lRQVVJWU9sL3R3RVBTa1FQR0pmOVB3U20xeHdsWVVtSEhrODRxaERZOVlzSEtXcnNRc240U2tLWmowbU1HZnA5QXB3U2VXL3YzaXRtaFdURHhQTHk3OEVrOVhIa1pDM1BibXV1azhkZkhDOUREdDN1VXp5MUlEaGVnaDEzYzI1WVBJOHlmRitERFR2UXdFTmk0dWMxMjBrUmNYTmhXVVZkWVZtbFhBakh2TmtUODdGVm1yait3U0hmb3FwbUcvWEpLY1J4ZGdZeXh1OVIrRTlJc3RZRVpjTHh2NkxYdmx1ZzBidUJtSUsxdXc0NEtVdGVnbjFjazdnU1VVb0hRcHBvUzB0TGkyalBLQ3p2S3VJdDFTT29SUjlCYWIyamlOUFNvd2hpZHlPS3JGS0h3Sk9aTGVVbXZ4TjZFOURMdlliZW1GYUxwdE9ZZzU0dUt5emltMFZuU0dhL3pJZnhob09lMCtRTloyYnY2VFo2L3FMMDVnVjZZT2tqTm00SGdma3dXYWpOd2cxaVB5NEtab0MveERIUnJiNU5uUElXMW1ocnhsalkzS1RhbGFjTG56Qm55a1dLYjhGREZ4dERRYTNNRkJVVlpiUUlxbEwxSUR1ZDh2SWprcVo2b0FNUHlEdVRndzMxaHpTZEJBZ3l3d3Vtc0RmQjBrNE9mcEJOMnh1YytWc0g3bGJQZkFtMm5tdHNxRnNJTy9ZYytYQ3g5QVFHczJ1YWJaekZpNWlnRjlvSEVqZHJBeHIwZ1lZVHVVZkNkcm8xQi8xS1Y2YjJPNFBnb0lrdTNnNTRkUGdsbHk5dlJGOWJlQnRWTFQxQVZjdmxhdmdKM204OFhIdVhLME0wV0lHN0JlS204b1BDMG9wZDJOaTVKeWJENUdwY1NkY2YyYjY5MlRGdUNuTUZmRlN1YkFEL0FwNFdISmN6Y3U3RzIvZDFkRkxwa1FWa3Bua2ltZXpobmZWYlVBYmV4V29mcU12eTJVdCtzYzUvaVVicjlLVFlPVXovWWltRk0vWnB3eEs3dzd2eUQrSUFKdmRGYnZQaG84L0ErWEsxT0MwUEcwRFVSekVVQVhRYmVvZCtpZkp5MzNJUXV6ZkVBUXpTdnZJbFFZaGk3QXVPUXU5MXdES3c1SEhMSjFsdXN6aCtoSnYxN0FWTS9qOGdPOFRsTTYvRytDL0Q3ajRjTThlUXhaVXVyeDFvOU9EZFFyRmgvQTIrMEEwT0dMdlRqUG4yWWpKZXdUdUFMYXJBRDZpRE1GbHJWTHdEbGllUXEydE1VaWRwY0VER3dsOFFxekFWUDFZSFlCWi9rUCtKREI5VG9aS1R3dmlzSm1TSXBOblhRSjBQYXRhRXJFTWlETm9HT2R0eEhtL0JrVkwvY3lZYS9UWDQ3Z3F6WlFYZEFyVnZBLzR5SGsvOTVnMGtONkI2ZTFwSHhYQ00relBZZUIxVFU0M2VkUG4yclNuZW93Y2IvZ2hEbHRUL2QwQ0d1QVdyOVB2b2Y5QXBNSmczTjRicVYybXZVRmtwRjRCV1VpeWN0bUl4OHliMXNXTGlmazFQaUZIRDdwdzRUS05kQVdIRFdHV1hOWVV2TE5FekpVV3hxWUlHVGEzQitaMDduZTFWSVV4U0hmbnRrcUdSN1g5b0xhTUVWNERlQ2RmbGJJeC9SMzF5SCt6RWVHRFpNOUQvRnVqUlRqd3ZRV0FqTm0xWmoyWU9ESUg2MnZvUWVsa3FralIrb3pWaXpZWVFkT0l0RUJGM0laRDZ4U2xZNmxHeFZwNVMxT2RRTm1NTVBxdktHVDdXTnJFcVQ0WGx2N0pZcXVyQzJCUGV0VzIvS3RQVE1ESUhQblRhc3NleFdtZGprdmJqYWJNSGtUM1Qzd0F2b2JhY2UramU1U2cvQ2RyMEp3OVJWbXN4N01nTXNCMGYzeFNYNGxPQTVlWnVMc2FZMHluek9JSXlRTnJQOHJWMm9ERXJ0WS9Qd2VacUhLL3VvR2xMOVJYcjZIZXpENGRDWjNDWE1SbG53cmtZU3p0eUlnb3U0RFRRWUpFMU94eXFtL1RPdnJmKzAyazQxaWNZSy96WWtUM2JqblNTdzkvK3NMVlpwV1BDVXdvT3FZUDl3WE1vQ2UvS0IzT3pRclZ6TFdDbGJIU1lYMU9kU2IyYWgxQk83b2tyVG1heU4xbi8yR2VvZDBZVGZXSEorV1NpQ2ZuYnF2M1VkSDRBWlVRL3BQdWVVWUl0b1hTUEV3ZVVsZlhLdFRJR3NERGFEamNFVDJJQUxWUDArSUJwZzJrUHBEMlE5a0RhQTJrUHBEMlE5c0Qvc1FmK0M3cDJRMXNRNzB0VkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUljQUFBQVpDQVlBQUFBYml6MDVBQUFBQVhOU1IwSUFyczRjNlFBQUFEaGxXRWxtVFUwQUtnQUFBQWdBQVlkcEFBUUFBQUFCQUFBQUdnQUFBQUFBQXFBQ0FBUUFBQUFCQUFBQWg2QURBQVFBQUFBQkFBQUFHUUFBQUFDWHdoOW5BQUFJZ2tsRVFWUm9CZTJaYTNCZFZSV0ExNzQzYlZxYU5GaGxjTFRXdGp3RXlxdG8yMUdyUXdVcElFMUtxMEdHa1U0cmc4b3dQbWlLb3pOb2xGSDdTRkljTEJWRjBNRVhMWkRTVG1IRUtnME9vRmpvQTlKcXl5aXhvenlrbEtZRiswak85bHZubm5QdVBqczM5eWJrZHRvZmQ4MnM3UFhhNit5Nzl0cDdyWE1pVW9GS0JDb1JxRVNnRW9GS0JDb1JxRVRnNkVmQUZIM0V1a1VYU0JDOE03SHA2WDFlNXQ3MlVzS3ZYVGhGckp5WThKTHRsSWFsLzhuelVPMkx6cGRNY0ZJaXMvWnZNcnR0ZDhMN3hMcXZqNVBneVBsaU0rUEYyQjJTa2MweXEvVTEzeXprVjkxUUk5VWpQMXhRVjB4NHFMWkRHcHNQRnpLeDFyNEQrWFJ3SEhnUTNBUjJHbU42R0FjTStKbUtjWjAzd2VKbmd5ZExzY3liZ3NDSmFhamV5Ynl1bEdIRVlQOGV5RW1lN2szc240eGwySXlCL21ETWUrTisrQzNZNjI5TlFWV0s4NW5lNFBzaVptWWl6bVN2aGI0MzRYdWxUWXpSUUVZUUxJQzRKK2JDMGRqdmlqV3o4ako3SS9TS1BCOVI3WXZtaXRpVjB0dExJbVZ5UWt2dTlrS3VXYmlkQkd1VSt1V2RxWG5WSjB3a09SOU55UWJDVk85OU4yYXZ1S1lFa09kS0svZ1pjSVNyZ3o2SS92ZU04d25pSGsvWGg4Vlc1LzhCclBHVjZDYmpZNHN2ZC9nMmFDZW1vZVlSL2w3dTJMamtVcGhyWEFIMGR0Qk5tTW53eGVKMG1IVnR4dVpPMXBic1g3UUxpSThsckdsYXhpMXh2eGpSRFNvQTVpd0pzazlKKzhMTENpaUhMQ0l3NStKRU4reHpvSjhZNmw5bG11Qi93ZlpNRlpRQVhXZWZ4SWptYVBJTkZtYnkzQW4rSkdRYXIwLzc4cmZCRDJmT05QQnVmTjRjenovMnlhRmxSNlFwWGxBeVd2R3YvVnB1cVJXSnZrd0V3UmlOcXdkQnZaNUx3U2tZUE1HY0Uwb1lGdHV3WXJyKzNPbytmYUdBY2o2eTZnTHlvWWlXOFB2cTFjR3hUNDZNYlVqOUVpdTdXTlZFT2RMRkJnUWZSYWMxTVlZSjh1Qk5wOGVNSE9ycWxLcXFNU24weTVyWXhTbTkydGYvOE5YRWg4aENhTjEwRjM0TGN6RTRBMXdKdXYyRzlpU2ZBZ3NDZ2RYTmNzcG9hQlk0eHFkam96ZlZZR0VCOC9TRWh3Qk56WlV2UnV4Z2g5MU0wQVFmQzk0QWRvTXVYS3BNOFo3RE5UOWF0QlZ0M1BKZzVIV3BiL2xuSkhpU2hwYlRZYzlKRExJWnZlSnowTGhhTzVLOU1SdU83VTBIS1U5NTBFYnJpc1ZwbTBnYkJYaGUzamlrSHFEdVh1M0lObUtudDR0YjF4dmhWenMyTHFrOVdxMGowTi95RE9qZUdFcHZjMndHUXNZbDVOZVJzVDVud2tBbUZyRFJ4dmgveVA4TnJ1VDNuYzJvU1JMRGhVb2NCOGxoZDFFdTRrWHBPSTBHVkdXL29kbDhYT3BHclpjWnpRKzRCbVdreCtQci9aNi9aUjZ2YkRQb05wRnZxYkFmOEh1S2RkaHRBdDNrVUp0djlUTy9tUGhMS09Qa1VMcGM4SkxuU0EvRGNaRWNkNUFJMTdHV1Vma0ZtbE5KakZ0Qy9vMzlCMGlXOVpLMVA1QlpiVnZ6Tm1XaDNsdkF5M08rakZQMkFySVdYKzd6bkVDOTltZDVjazBPZlJQUVd5NGI2YzdBZGhKK095TysyUEJIbEorSURLWkhwMXpMZ0Z2YW5vRFhFanhvd04rcFROTDR1N0JSbVdQZmM4eHAyeWttMElER3BVVFhsUWRqNlByTlZkS1RlVnJhbXo2ZlY1U0ZPdEh6Y29nTkszWXJlT1o5MkV1UTFEbFMzY1FPZk81aGZNcVJLK25mTUo0NllYOEI1VGJuZW1OY0Q4YUpacUh2QkFjREo1TVVIYUFlaEYyZ2YzdHFRaDRIeWFHcmFHaDdUT3BxenVKMWRpNDN4aS9wTVY1VWNRcU1ES2VYK0pFODlEWE45SExCSzU2amFnS21EZWZiQmJkMHFJOE5vTUduM2lqNnJjSUYzOWJWdWZSck1Hc2N3YlhRYmlQYUFhODMyMkNnR3VPUGcyY1htSFFmTXZhZzNHWEZtbnl6R0Q5VlB3aWxlZ3FqbVo0RC9jSTVmTlNja05uM0ptR1VBM0psaTM1cmtGd1NaSytSZ05wc2tpUWVJVFk3RisyUzBHYm9mN1JyOStFakNOYTdRalpYM3k3MHBBY1I2aGZJVkpuQlpoaTZCdEFGL1cySFhJRkRUMkxPbWZqWjRjajZJMytHUXB0Z0JXN1MxRGVVdTBMcDBQL29qZmxqc0lrMWhYdFV4WWVsV3dsK1hOTTR0T1p1TmtnWEE1aVRjMlAwTnlNdnAzZ1I5NVVRVlRDZlB5c1RtL2F2amljeFppUjhqdkRtV0wwMmM2QnZadzgxblNjTkxkdWtZYm1laHUrd3ZvK3hqb3RpRThZSkRqMGtraUM4ekFZOWpaT3BqcU5tWkkrajIrL0lWa0JQZC9qZlFhZVNBLzVpMEM5VHpwU0NwTjRldHhiVXBJVWJZUDhGamt1THd6YzFiZFluZS9KUzdCc1lMSTZNdE9UOUZYeWUzOXdieWNLaGlzUjRuZURyYVlsaE5BMGc5ZEdjUXFhY3h4akwzNUxSdFgrS21YRE1tRzJVZ2R6SlY0RXhVK2dMZGpMdllXaE5ySmxnbGFvU0NPeTJoRzY4NHdDYi93OXNKeVl5YSsvaitmZmlkN05rekZRSjdJV0pMa2RzOS9paHNqL0ZnWnNjSDRKL2hnUzVuMUZQa040R2swQVhWcmxNUk92Tk1salFPU1dUZzAwTFdNODkySDdiZThDdjBPbW5mVTlja3UxbVhzbmJOME5GM0poeVpiUU9oVjMwV3QzdHZNNXU0SlV5L2MrWm5wNmZvSGRQbU9iU2FVejdDdkxQZ2w3OXRtdEZHOUEwM0pabXpSazQrUjQrSG1acm1obXppVDc4YXNvNnlndDZTejdxdVR3Ti9odmdOMEUvTVI1QnBodVZBSnVqQjhBdktiY2dlNWVIVnlTVGNzUTV6UDJBSit1UDFXZHFXWFBoTHBjcE41MlIrcll0SEpCbFJSMWI2WkFSWWNsSW0rbC9hSVBNTkxIVzMvQzBYY2pabjB0ZDdWVjlGRmUyM3M3OEx5UHY2YVB6QllaR2JIWnJXVzhPVHBBZXU2dEJMUldsUUpOb1hqVEh0YjBJWm93cmdGNk4zUjRYa2VrejlucDJBMnBNOGRQRlBQZGdiRUsyMWZOVlZwYWJnL001dS9WbVR1czhObWtyZUNSOGdvNVdub1ZlSWtkcUxwRkxsMU4rQ3NDY3BUdWsrdkFVL09nTndQdTI3YzViMmQzUTY4RUZQR04rbjVzbk50UUVFYU45VDN1WWFOWTZ0YzlTSHlrMUpyaEFacmVrVG13OGZhZ2pRZGJmZGhtNEFLU2twdUFBM0o5QlRZcVo0SDlUMmh6amIvQXU3UDd1MnlIVEE2QTNqd3YrWEZmbjA5b3dhdStocUgzUVVRV25iRVRQV2RVOFhFYnVueWcxdFMvMnU1bWxsclRtcHZmSnFHSGQ4c2tsKzBxWkZ0US8xanhDdXZlTmxXRTlyOHJsdHp2SlZ0QzY3RUt1K3BFNEhRdnFRZWxpVS9WMnFVQWxBcFVJVkNKUWlVQWxBcFVJVkNKUWljQlJpTUQvQWFZc2JKUEZVMTA0QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2hhcnZhcmQtNTg1NWUxNDJhOTUxNTY4M2E3NTE1ZTI5YzFkNTRiMDUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE1pSWdhR1ZwWjJoMFBTSXhOU0lnZG1sbGQwSnZlRDBpTUNBd0lERXlJREUxSWo0OFp6NDhaejQ4Y0dGMGFDQm1hV3hzUFNJak9ESTRNamd5SWlCa1BTSk5OaUE1WVRJdU5qWTNJREl1TmpZM0lEQWdNU0F4SURBdE5TNHpNelJCTWk0Mk5qY2dNaTQyTmpjZ01DQXdJREVnTmlBNWVtMHdMVEV1TXpNMFFURXVNek16SURFdU16TXpJREFnTVNBd0lEWWdOV0V4TGpNek15QXhMak16TXlBd0lEQWdNQ0F3SURJdU5qWTJlbTB3SURjdU1UVXliQzAwTGpJME15MDBMakkwTW1FMklEWWdNQ0F4SURFZ09DNDBPRFlnTUhwdE1DMHhMamc0Tld3ekxqTXRNeTR6WVRRdU5qWTNJRFF1TmpZM0lEQWdNU0F3TFRZdU5pQXdlaUl2UGp3dlp6NDhMMmMrUEM5emRtYytcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9taXQtMWE3ZGJhNGFmMTAzOWUxMDViYjUxYTYyODA4NTdjODcuc3ZnXCI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Mb2dvXCI7XHJcbmltcG9ydCBpbWdNIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvbDEvcG5nL21lc3NhZ2UucG5nXCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ0NvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlciBiZy1lYm9ueS1jbGF5IGRhcmstbW9kZS10ZXh0c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICB7LyogPCEtLSBDdGEgc2VjdGlvbiAtLT4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTExIHB0LWxnLTIwIHBiLTEzIHBiLWxnLTIwIGJvcmRlci1ib3R0b20gYm9yZGVyLXdpZHRoLTEgYm9yZGVyLWRlZmF1bHQtY29sb3ItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC14bC03IGNvbC1sZy0xMlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBjdGEtY29udGVudCBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLXhsLTAgcGItOSB0ZXh0LXhsLWxlZnQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zaXplLTggbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE1vc3QgY29tcHJlaGVuc2l2ZSBqb2IgcG9ydGFsXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtaGl0LWdyYXkgZm9udC1zaXplLTUgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFdlIG11c3QgZXhwbGFpbiB0byB5b3UgaG93IGFsbCB0aGlzIG1pc3Rha2VuIGlkZWEgb2ZcclxuICAgICAgICAgICAgICAgICAgICBkZW5vdW5jaW5nXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gY3RhLWNvbnRlbnQgZW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wteGwtNSBjb2wtbGctMTJcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBjdGEtYnRucyBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bnMgZC1mbGV4IGp1c3RpZnktY29udGVudC14bC1lbmQganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy14bC1jZW50ZXIgZmxleC13cmFwIGgtMTAwICBteC1uNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1nYWxsZXJ5IGJ0bi14bCBteC00IG10LTYgdGV4dC11cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGdDb250ZXh0LnRvZ2dsZVNpZ25Jbk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ncmVlbiBidG4taC02MCBidG4teGwgbXgtNCBtdC02IHRleHQtdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVTaWduVXBNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIGN0YS1idG5zIGVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgIHB0LTEyIHB0LWxnLTE5IHBiLTEwIHBiLWxnLTE5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IG1iLWxnLTAgbWItOVwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIGZvb3RlciBsb2dvIHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICA8TG9nbyB3aGl0ZSBjbGFzc05hbWU9XCJmb290ZXItbG9nbyBtYi0xNFwiIC8+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gZm9vdGVyIGxvZ28gRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICB7LyogPCEtLSBtZWRpYSBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBtYi0xMVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ019IGNsYXNzTmFtZT1cImFsaWduLXNlbGYtY2VudGVyIG1yLTNcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5IHBsLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCBmb250LXNpemUtNCB0ZXh0LXdoaXRlXCI+Q29udGFjdCB1cyBhdDwvcD5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWItMCBmb250LXNpemUtNCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0QHV4dGhlbWUubmV0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBtZWRpYSBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gd2lkZ2V0IHNvY2lhbCBpY29uIHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBsLTAgbGlzdC11bnN0eWxlZCBkLWZsZXggYWxpZ24taXRlbXMtZW5kIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgcHgtMyBtci0zIGZvbnQtc2l6ZS00IGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyB1cyBvbjpcclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB4LTMgbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXItY29sb3ItcHJpbWFyeSBoZWFkaW5nLWRlZmF1bHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWYgZm9udC1zaXplLTMgcHQtMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBweC0zIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyLWNvbG9yLXByaW1hcnkgaGVhZGluZy1kZWZhdWx0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyIGZvbnQtc2l6ZS0zIHB0LTJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgcHgtMyBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3Zlci1jb2xvci1wcmltYXJ5IGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4taW4gZm9udC1zaXplLTMgcHQtMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIHdpZGdldCBzb2NpYWwgaWNvbiBlbmQgLS0+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS0zIGNvbC14cy02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdpZGdldCB3aWRnZXQyIG1iLW1kLTAgbWItMTNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBmb290ZXIgd2lkZ2V0IHRpdGxlIHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgZm9udC1zaXplLTQgdGV4dC1ncmF5IG1iLW1kLTggbWItN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29tcGFueVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBmb290ZXIgd2lkZ2V0IHRpdGxlIGVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gd2lkZ2V0IHNvY2lhbCBtZW51IHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2lkZ2V0LWxpbmtzIHBsLTAgbGlzdC11bnN0eWxlZCBsaXN0LWhvdmVyLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCB1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhcmVlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIHdpZGdldCBzb2NpYWwgbWVudSBlbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tMyBjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXQgd2lkZ2V0MyBtYi1zbS0wIG1iLTEzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gZm9vdGVyIHdpZGdldCB0aXRsZSBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlIGZvbnQtc2l6ZS00IHRleHQtZ3JheSBtYi1tZC04IG1iLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gZm9vdGVyIHdpZGdldCB0aXRsZSBlbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIHdpZGdldCBzb2NpYWwgbWVudSBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndpZGdldC1saW5rcyBwbC0wIGxpc3QtdW5zdHlsZWQgbGlzdC1ob3Zlci1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWF0dXJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaWNpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVscCBkZXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VwcG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIHdpZGdldCBzb2NpYWwgbWVudSBlbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tMyBjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXQgd2lkZ2V0NCBtYi1zbS0wIG1iLTEzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gZm9vdGVyIHdpZGdldCB0aXRsZSBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2lkZ2V0LXRpdGxlIGZvbnQtc2l6ZS00IHRleHQtZ3JheSBtYi1tZC04IG1iLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGZvb3RlciB3aWRnZXQgdGl0bGUgZW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSB3aWRnZXQgc29jaWFsIG1lbnUgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3aWRnZXQtbGlua3MgcGwtMCBsaXN0LXVuc3R5bGVkIGxpc3QtaG92ZXItcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlnaXRhbCBNYXJrZXRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTRU8gZm9yIEJ1c2luZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXZhc3RhIERhc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVSSBEZXNpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSB3aWRnZXQgc29jaWFsIG1lbnUgZW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTMgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0IHdpZGdldDRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBmb290ZXIgd2lkZ2V0IHRpdGxlIHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aWRnZXQtdGl0bGUgZm9udC1zaXplLTQgdGV4dC1ncmF5IG1iLW1kLTggbWItN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTGVnYWxcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gZm9vdGVyIHdpZGdldCB0aXRsZSBlbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3aWRnZXQtbGlua3MgcGwtMCBsaXN0LXVuc3R5bGVkIGxpc3QtaG92ZXItcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXJtcyAmYW1wOyBDb25kaXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV0dXJuIFBvbGljeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Gb290ZXJcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRHJvcGRvd24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZVNjcm9sbFBvc2l0aW9uIH0gZnJvbSBcIkBuOHRiMXQvdXNlLXNjcm9sbC1wb3NpdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemVcIjtcclxuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xyXG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gXCIuLi9PZmZjYW52YXNcIjtcclxuaW1wb3J0IE5lc3RlZE1lbnUgZnJvbSBcIi4uL05lc3RlZE1lbnVcIjtcclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Mb2dvXCI7XHJcbmltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gXCIuL21lbnVJdGVtc1wiO1xyXG5cclxuaW1wb3J0IGltZ1AgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9oZWFkZXItcHJvZmlsZS5wbmdcIjtcclxuXHJcbmNvbnN0IFNpdGVIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICAmLnNjcm9sbGluZyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICB9XHJcbiAgICAmLnJldmVhbC1oZWFkZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDEycHggMzRweCAtMTFweCByZ2JhKDY1LCA2MiwgMTAxLCAwLjEpO1xyXG4gICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+IChkYXJrID8gdGhlbWUuY29sb3JzLmRhcmsgOiBcIiNmZmZcIil9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRvZ2dsZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgY29sb3I6ICR7KHsgZGFyaywgdGhlbWUgfSkgPT5cclxuICAgIGRhcmsgPyB0aGVtZS5jb2xvcnMubGlnaHRTaGFkZSA6IHRoZW1lLmNvbG9ycy5oZWFkaW5nfSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+XHJcbiAgICBkYXJrID8gdGhlbWUuY29sb3JzLmxpZ2h0U2hhZGUgOiB0aGVtZS5jb2xvcnMuaGVhZGluZ30haW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBbc2hvd1Njcm9sbGluZywgc2V0U2hvd1Njcm9sbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dSZXZlYWwsIHNldFNob3dSZXZlYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG5cclxuICB1c2VTY3JvbGxQb3NpdGlvbigoeyBwcmV2UG9zLCBjdXJyUG9zIH0pID0+IHtcclxuICAgIGlmIChjdXJyUG9zLnkgPCAwKSB7XHJcbiAgICAgIHNldFNob3dTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93U2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyUG9zLnkgPCAtMzAwKSB7XHJcbiAgICAgIHNldFNob3dSZXZlYWwodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93UmV2ZWFsKGZhbHNlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTaXRlSGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgc2l0ZS1oZWFkZXIgc2l0ZS1oZWFkZXItLXN0aWNreSAgc2l0ZS1oZWFkZXItLWFic29sdXRlIHB5LTcgcHkteHMtMCBzdGlja3ktaGVhZGVyICR7XHJcbiAgICAgICAgICBnQ29udGV4dC5oZWFkZXIuYmdDbGFzc1xyXG4gICAgICAgIH0gJHtcclxuICAgICAgICAgIGdDb250ZXh0LmhlYWRlci5hbGlnbiA9PT0gXCJsZWZ0XCJcclxuICAgICAgICAgICAgPyBcInNpdGUtaGVhZGVyLS1tZW51LWxlZnQgXCJcclxuICAgICAgICAgICAgOiBnQ29udGV4dC5oZWFkZXIuYWxpZ24gPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgICA/IFwic2l0ZS1oZWFkZXItLW1lbnUtcmlnaHQgXCJcclxuICAgICAgICAgICAgOiBcInNpdGUtaGVhZGVyLS1tZW51LWNlbnRlciBcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAke2dDb250ZXh0LmhlYWRlci50aGVtZSA9PT0gXCJkYXJrXCIgPyBcImRhcmstbW9kZS10ZXh0c1wiIDogXCIgXCJ9ICR7XHJcbiAgICAgICAgICBzaG93U2Nyb2xsaW5nID8gXCJzY3JvbGxpbmdcIiA6IFwiXCJcclxuICAgICAgICB9ICR7XHJcbiAgICAgICAgICBnQ29udGV4dC5oZWFkZXIucmV2ZWFsICYmXHJcbiAgICAgICAgICBzaG93UmV2ZWFsICYmXHJcbiAgICAgICAgICBnQ29udGV4dC5oZWFkZXIudGhlbWUgPT09IFwiZGFya1wiXHJcbiAgICAgICAgICAgID8gXCJyZXZlYWwtaGVhZGVyIGJnLWJsYWNraXNoLWJsdWVcIlxyXG4gICAgICAgICAgICA6IGdDb250ZXh0LmhlYWRlci5yZXZlYWwgJiYgc2hvd1JldmVhbFxyXG4gICAgICAgICAgICA/IFwicmV2ZWFsLWhlYWRlclwiXHJcbiAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgZmx1aWQ9e2dDb250ZXh0LmhlYWRlci5pc0ZsdWlkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtnQ29udGV4dC5oZWFkZXIuaXNGbHVpZCA/IFwicHItbGctOSBwbC1sZy05XCIgOiBcIlwifVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHNpdGUtbmF2YmFyIG9mZmNhbnZhcy1hY3RpdmUgbmF2YmFyLWV4cGFuZC1sZyBweC0wIHB5LTBcIj5cclxuICAgICAgICAgICAgey8qIDwhLS0gQnJhbmQgTG9nby0tPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgPExvZ28gd2hpdGU9e2dDb250ZXh0LmhlYWRlci50aGVtZSA9PT0gXCJkYXJrXCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtYWluLW1lbnUgZC1ub25lIGQtbGctZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsLCBpc0V4dGVybmFsID0gZmFsc2UsIG5hbWUsIGl0ZW1zLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzU3ViSXRlbXMgPSBBcnJheS5pc0FycmF5KGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e25hbWUgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc1N1Ykl0ZW1zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCIgey4uLnJlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBnci10b2dnbGUtYXJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc21hbGwtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3ItbWVudS1kcm9wZG93biBkcm9wZG93bi1tZW51IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKHN1Ykl0ZW0sIGluZGV4U3ViKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNJbm5lclN1Ykl0ZW1zID0gQXJyYXkuaXNBcnJheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViSXRlbS5pdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViSXRlbS5uYW1lICsgaW5kZXhTdWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzSW5uZXJTdWJJdGVtcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZSBnci10b2dnbGUtYXJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zbWFsbC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJnci1tZW51LWRyb3Bkb3duIGRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLml0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtSW5uZXIsIGluZGV4SW5uZXJNb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3AtbWVudS1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlubmVyLm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhJbm5lck1vc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbUlubmVyLmlzRXh0ZXJuYWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtpdGVtSW5uZXIubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1Jbm5lci5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2l0ZW1Jbm5lci5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtSW5uZXIubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5pc0V4dGVybmFsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtzdWJJdGVtLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3N1Ykl0ZW0ubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzdWJJdGVtLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgey4uLnJlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNFeHRlcm5hbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uID09PSBcImN0YVwiICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idG4gbWwtYXV0byBtbC1sZy0wIG1yLTYgbXItbGctMCBkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGJ0biBidG4tJHtnQ29udGV4dC5oZWFkZXIudmFyaWFudH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z0NvbnRleHQuaGVhZGVyLmJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uID09PSBcInByb2ZpbGVcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnRuLWRldmlkZXIgbWwtYXV0byBtbC1sZy01IHBsLTIgZC1ub25lIGQteHMtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTMgbWwtNyBmb250LXNpemUtNyBub3RpZmljYXRpb24tYmxvY2sgZmxleC15LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJlbGwgaGVhZGluZy1kZWZhdWx0LWNvbG9yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgY291bnQgZm9udC13ZWlnaHQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IGNpcmNsZS0yNCBib3JkZXIgYm9yZGVyLXdpZHRoLTMgYm9yZGVyIGJvcmRlci13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBjbGFzc05hbWU9XCJzaG93LWdyLWRyb3Bkb3duIHB5LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24uVG9nZ2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvaWxlIG1lZGlhIG1sLTcgZmxleC15LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaXJjbGUtNDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1B9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd24gaGVhZGluZy1kZWZhdWx0LWNvbG9yIG1sLTZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAge3NpemUud2lkdGggPD0gOTkxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3ItbWVudS1kcm9wZG93biBib3JkZXItMCBib3JkZXItd2lkdGgtMiBweS0yIHctYXV0byBiZy1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCIgZHJvcGRvd24taXRlbSBweS0yIHRleHQtcmVkIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgZ3ItbWVudS1kcm9wZG93biBkcm9wZG93bi1yaWdodCBib3JkZXItMCBib3JkZXItd2lkdGgtMiBweS0yIHctYXV0byBiZy1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gcHktMiBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXQgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCIgZHJvcGRvd24taXRlbSBweS0yIHRleHQtcmVkIGZvbnQtc2l6ZS0zIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LTFwMiB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nIE91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2dDb250ZXh0LmhlYWRlci5idXR0b24gPT09IFwiYWNjb3VudFwiICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idG5zIGhlYWRlci1idG4tZGV2aWRlciBtbC1hdXRvIHByLTIgbWwtbGctNiBkLW5vbmUgZC14cy1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXRyYW5zcGFyZW50IHRleHQtdXBwZXJjYXNlIGZvbnQtc2l6ZS0zIGhlYWRpbmctZGVmYXVsdC1jb2xvciBmb2N1cy1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdDb250ZXh0LnRvZ2dsZVNpZ25Jbk1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZyBJblxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi0ke2dDb250ZXh0LmhlYWRlci52YXJpYW50fSB0ZXh0LXVwcGVyY2FzZSBmb250LXNpemUtM2B9XHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdDb250ZXh0LnRvZ2dsZVNpZ25VcE1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ24gVXBcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxUb2dnbGVCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXZiYXItdG9nZ2xlciBidG4tY2xvc2Utb2ZmLWNhbnZhcyBtbC0zICR7XHJcbiAgICAgICAgICAgICAgICBnQ29udGV4dC52aXNpYmxlT2ZmQ2FudmFzID8gXCJjb2xsYXBzZWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNtb2JpbGUtbWVudVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm1vYmlsZS1tZW51XCJcclxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17Z0NvbnRleHQudG9nZ2xlT2ZmQ2FudmFzfVxyXG4gICAgICAgICAgICAgIGRhcms9e2dDb250ZXh0LmhlYWRlci50aGVtZSA9PT0gXCJkYXJrXCIgPyAxIDogMH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2ltcGxlLXJlbW92ZSBpY29uLWNsb3NlXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudS0zNCBpY29uLWJ1cmdlciBkLWJsb2NrXCI+PC9pPlxyXG4gICAgICAgICAgICA8L1RvZ2dsZUJ1dHRvbj5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L1NpdGVIZWFkZXI+XHJcbiAgICAgIDxPZmZjYW52YXNcclxuICAgICAgICBzaG93PXtnQ29udGV4dC52aXNpYmxlT2ZmQ2FudmFzfVxyXG4gICAgICAgIG9uSGlkZU9mZmNhbnZhcz17Z0NvbnRleHQudG9nZ2xlT2ZmQ2FudmFzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE5lc3RlZE1lbnUgbWVudUl0ZW1zPXttZW51SXRlbXN9IC8+XHJcbiAgICAgIDwvT2ZmY2FudmFzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcbiIsImV4cG9ydCBjb25zdCBtZW51SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJob21lXCIsXHJcbiAgICBsYWJlbDogXCJIb21lXCIsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IG5hbWU6IFwiXCIsIGxhYmVsOiBcIkhvbWUgMVwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJsYW5kaW5nLTJcIiwgbGFiZWw6IFwiSG9tZSAyXCIgfSxcclxuICAgICAgeyBuYW1lOiBcImxhbmRpbmctM1wiLCBsYWJlbDogXCJIb21lIDNcIiB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwicGFnZXNcIixcclxuICAgIGxhYmVsOiBcIlBhZ2VzXCIsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJqb2ItcGFnZXNcIixcclxuICAgICAgICBsYWJlbDogXCJKb2IgUGFnZXNcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcInNlYXJjaC1ncmlkXCIsIGxhYmVsOiBcIkpvYiBHcmlkXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJzZWFyY2gtbGlzdFwiLCBsYWJlbDogXCJKb2IgTGlzdFwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiam9iLWRldGFpbHNcIiwgbGFiZWw6IFwiSm9iIERldGFpbHNcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImRhc2hib2FyZFwiLFxyXG4gICAgICAgIGxhYmVsOiBcIkRhc2hib2FyZFwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwiZGFzaGJvYXJkLW1haW5cIiwgbGFiZWw6IFwiRGFzaGJvYXJkIE1haW5cIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImRhc2hib2FyZC1zZXR0aW5nc1wiLCBsYWJlbDogXCJEYXNoYm9hcmQgU2V0dGluZ3NcIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiBcImRhc2hib2FyZC1hcHBsaWNhbnRzXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkRhc2hib2FyZCBBcHBsaWNhbnRzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImRhc2hib2FyZC1qb2JzXCIsIGxhYmVsOiBcIkRhc2hib2FyZCBQb3N0ZWQgSm9ic1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiY2FuZGlkYXRlXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiQ2FuZGlkYXRlIFBhZ2VzXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgbmFtZTogXCJjYW5kaWRhdGUtcHJvZmlsZVwiLCBsYWJlbDogXCJDYW5kaWRhdGUgUHJvZmlsZSAwMVwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiY2FuZGlkYXRlLXByb2ZpbGUtMlwiLCBsYWJlbDogXCJDYW5kaWRhdGUgUHJvZmlsZSAwMlwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwic2VhcmNoXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiU2VhcmNoIFBhZ2VzXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgbmFtZTogXCJzZWFyY2gtZ3JpZFwiLCBsYWJlbDogXCJTZWFyY2ggR3JpZFwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic2VhcmNoLWxpc3RcIiwgbGFiZWw6IFwiU2VhcmNoIExpc3QgMDFcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInNlYXJjaC1saXN0LTJcIiwgbGFiZWw6IFwiU2VhcmNoIExpc3QgMDJcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImNvbXBhbnktcHJvZmlsZVwiLFxyXG4gICAgICAgIGxhYmVsOiBcIkNvbXBhbnkgUHJvZmlsZVwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiZXNzZW50aWFsXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiRXNzZW50aWFsXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgbmFtZTogXCJmYXFcIiwgbGFiZWw6IFwiRkFRXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCI0MDRcIiwgbGFiZWw6IFwiNDA0XCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJwcmljaW5nXCIsIGxhYmVsOiBcIlByaWNpbmdcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcImNvbnRhY3RcIiwgbGFiZWw6IFwiQ29udGFjdFwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImh0dHBzOi8vdXh0aGVtZS5uZXQvcHJvZHVjdC1zdXBwb3J0L1wiLFxyXG4gICAgbGFiZWw6IFwiU3VwcG9ydFwiLFxyXG4gICAgaXNFeHRlcm5hbDogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEhlbG1ldCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xyXG5cclxuaW1wb3J0IFNpZGViYXJEYXNoYm9hcmQgZnJvbSBcIi4uL1NpZGViYXJEYXNoYm9hcmRcIjtcclxuaW1wb3J0IE1vZGFsVmlkZW8gZnJvbSBcIi4uL01vZGFsVmlkZW9cIjtcclxuaW1wb3J0IE1vZGFsQXBwbGljYXRpb24gZnJvbSBcIi4uL01vZGFsQXBwbGljYXRpb25cIjtcclxuaW1wb3J0IE1vZGFsU2lnbkluIGZyb20gXCIuLi9Nb2RhbFNpZ25JblwiO1xyXG5pbXBvcnQgTW9kYWxTaWduVXAgZnJvbSBcIi4uL01vZGFsU2lnblVwXCI7XHJcblxyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uLy4uL3V0aWxzL2dsb2JhbFN0eWxlXCI7XHJcblxyXG5pbXBvcnQgaW1nRmF2aWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL2Zhdmljb24ucG5nXCI7XHJcblxyXG5pbXBvcnQgeyBnZXQsIG1lcmdlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuLy8gdGhlIGZ1bGwgdGhlbWUgb2JqZWN0XHJcbmltcG9ydCB7IHRoZW1lIGFzIGJhc2VUaGVtZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5cclxuY29uc3QgTG9hZGVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB6LWluZGV4OiA5OTk5OTk5OTk5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQgMC41cztcclxuICAmLmluQWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gb3B0aW9ucyBmb3IgZGlmZmVyZW50IGNvbG9yIG1vZGVzXHJcbmNvbnN0IG1vZGVzID0geyBsaWdodDogXCJsaWdodFwiLCBkYXJrOiBcImRhcmtcIiB9O1xyXG5cclxuLy8gbWVyZ2UgdGhlIGNvbG9yIG1vZGUgd2l0aCB0aGUgYmFzZSB0aGVtZVxyXG4vLyB0byBjcmVhdGUgYSBuZXcgdGhlbWUgb2JqZWN0XHJcbmNvbnN0IGdldFRoZW1lID0gKG1vZGUpID0+XHJcbiAgbWVyZ2Uoe30sIGJhc2VUaGVtZSwge1xyXG4gICAgY29sb3JzOiBnZXQoYmFzZVRoZW1lLmNvbG9ycy5tb2RlcywgbW9kZSwgYmFzZVRoZW1lLmNvbG9ycyksXHJcbiAgfSk7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgcGFnZUNvbnRleHQgfSkgPT4ge1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW3Zpc2libGVMb2FkZXIsIHNldFZpc2libGVMb2FkZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBBT1MuaW5pdCh7IG9uY2U6IHRydWUgfSk7XHJcbiAgICBzZXRWaXNpYmxlTG9hZGVyKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIE5hdmJhciBzdHlsZSBiYXNlZCBvbiBzY3JvbGxcclxuICBjb25zdCBlbGVSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcInBvcHN0YXRlXCIsXHJcbiAgICAgIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIFRoZSBwb3BzdGF0ZSBldmVudCBpcyBmaXJlZCBlYWNoIHRpbWUgd2hlbiB0aGUgY3VycmVudCBoaXN0b3J5IGVudHJ5IGNoYW5nZXMuXHJcbiAgICAgICAgZ0NvbnRleHQuY2xvc2VPZmZDYW52YXMoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJwdXNoU3RhdGVcIixcclxuICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gVGhlIHB1c2hzdGF0ZSBldmVudCBpcyBmaXJlZCBlYWNoIHRpbWUgd2hlbiB0aGUgY3VycmVudCBoaXN0b3J5IGVudHJ5IGNoYW5nZXMuXHJcbiAgICAgICAgZ0NvbnRleHQuY2xvc2VPZmZDYW52YXMoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFsc2VcclxuICAgICk7XHJcbiAgfSwgW2dDb250ZXh0XSk7XHJcblxyXG4gIGlmIChwYWdlQ29udGV4dC5sYXlvdXQgPT09IFwiYmFyZVwiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGhlbWVQcm92aWRlclxyXG4gICAgICAgIHRoZW1lPXtcclxuICAgICAgICAgIGdDb250ZXh0LnRoZW1lRGFyayA/IGdldFRoZW1lKG1vZGVzLmRhcmspIDogZ2V0VGhlbWUobW9kZXMubGlnaHQpXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBkYXRhLXRoZW1lLW1vZGUtcGFuZWwtYWN0aXZlIGRhdGEtdGhlbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICA8dGl0bGU+SnVzdENhbXA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9e2ltZ0Zhdmljb259IC8+XHJcbiAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgIDxMb2FkZXIgaWQ9XCJsb2FkaW5nXCIgY2xhc3NOYW1lPXt2aXNpYmxlTG9hZGVyID8gXCJcIiA6IFwiaW5BY3RpdmVcIn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1jaXJjbGVcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Mb2FkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtd3JhcHBlciBvdmVyZmxvdy1oaWRkZW5cIiByZWY9e2VsZVJlZn0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxNb2RhbFZpZGVvIC8+XHJcbiAgICAgICAgICA8TW9kYWxBcHBsaWNhdGlvbiAvPlxyXG4gICAgICAgICAgPE1vZGFsU2lnbkluIC8+XHJcbiAgICAgICAgICA8TW9kYWxTaWduVXAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChwYWdlQ29udGV4dC5sYXlvdXQgPT09IFwiZGFzaGJvYXJkXCIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyXHJcbiAgICAgICAgdGhlbWU9e1xyXG4gICAgICAgICAgZ0NvbnRleHQudGhlbWVEYXJrID8gZ2V0VGhlbWUobW9kZXMuZGFyaykgOiBnZXRUaGVtZShtb2Rlcy5saWdodClcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGRhdGEtdGhlbWUtbW9kZS1wYW5lbC1hY3RpdmUgZGF0YS10aGVtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5KdXN0Q2FtcDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj17aW1nRmF2aWNvbn0gLz5cclxuICAgICAgICAgIDwvSGVsbWV0PlxyXG4gICAgICAgICAgPExvYWRlciBpZD1cImxvYWRpbmdcIiBjbGFzc05hbWU9e3Zpc2libGVMb2FkZXIgPyBcIlwiIDogXCJpbkFjdGl2ZVwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9uZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xvYWRlcj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS13cmFwcGVyIG92ZXJmbG93LWhpZGRlbiBiZy1kZWZhdWx0LTJcIlxyXG4gICAgICAgICAgICByZWY9e2VsZVJlZn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEhlYWRlciBpc0Rhcms9e2dDb250ZXh0LmhlYWRlckRhcmt9IC8+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaGJvYXJkIC8+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxNb2RhbFZpZGVvIC8+XHJcbiAgICAgICAgICA8TW9kYWxBcHBsaWNhdGlvbiAvPlxyXG4gICAgICAgICAgPE1vZGFsU2lnbkluIC8+XHJcbiAgICAgICAgICA8TW9kYWxTaWduVXAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGhlbWVQcm92aWRlclxyXG4gICAgICAgIHRoZW1lPXtcclxuICAgICAgICAgIGdDb250ZXh0LnRoZW1lRGFyayA/IGdldFRoZW1lKG1vZGVzLmRhcmspIDogZ2V0VGhlbWUobW9kZXMubGlnaHQpXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBkYXRhLXRoZW1lLW1vZGUtcGFuZWwtYWN0aXZlIGRhdGEtdGhlbWU9XCJsaWdodFwiPlxyXG4gICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICA8dGl0bGU+SnVzdENhbXA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9e2ltZ0Zhdmljb259IC8+XHJcbiAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgIDxMb2FkZXIgaWQ9XCJsb2FkaW5nXCIgY2xhc3NOYW1lPXt2aXNpYmxlTG9hZGVyID8gXCJcIiA6IFwiaW5BY3RpdmVcIn0gLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS13cmFwcGVyIG92ZXJmbG93LWhpZGRlblwiIHJlZj17ZWxlUmVmfT5cclxuICAgICAgICAgICAgPEhlYWRlciBpc0Rhcms9e2dDb250ZXh0LmhlYWRlckRhcmt9IC8+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgICAgICAgIDxGb290ZXIgaXNEYXJrPXtnQ29udGV4dC5mb290ZXJEYXJrfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE1vZGFsVmlkZW8gLz5cclxuICAgICAgICAgIDxNb2RhbEFwcGxpY2F0aW9uIC8+XHJcbiAgICAgICAgICA8TW9kYWxTaWduSW4gLz5cclxuICAgICAgICAgIDxNb2RhbFNpZ25VcCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9MYXlvdXQnIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgaW1nTDFMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvbG9nby1tYWluLWJsYWNrLnBuZ1wiO1xyXG5pbXBvcnQgaW1nTDFMb2dvV2hpdGUgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dvLW1haW4td2hpdGUucG5nXCI7XHJcblxyXG5jb25zdCBMb2dvID0gKHsgd2hpdGUsIGhlaWdodCwgY2xhc3NOYW1lID0gXCJcIiwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT17YGQtYmxvY2sgJHtjbGFzc05hbWV9YH0gey4uLnJlc3R9PlxyXG4gICAgICAgIHt3aGl0ZSA/IChcclxuICAgICAgICAgIDxpbWcgc3JjPXtpbWdMMUxvZ29XaGl0ZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltZ0wxTG9nb30gYWx0PVwiXCIgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9Mb2dvJ1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcbmltcG9ydCBQcm9maWxlU2lkZWJhciBmcm9tIFwiLi4vUHJvZmlsZVNpZGViYXJcIjtcclxuXHJcbmltcG9ydCBpbWdGMSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL2wyL3BuZy9mZWF0dXJlZC1qb2ItbG9nby0xLnBuZ1wiO1xyXG5pbXBvcnQgaW1nRjIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9sMS9wbmcvZmVhdHVyZS1icmFuZC0xLnBuZ1wiO1xyXG5pbXBvcnQgaW1nRjMgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9zdmcvaGFydmFyZC5zdmdcIjtcclxuaW1wb3J0IGltZ0Y0IGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2Uvc3ZnL21pdC5zdmdcIjtcclxuaW1wb3J0IGltZ0wgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9zdmcvaWNvbi1sb2FjdGlvbi1waW4tYmxhY2suc3ZnXCI7XHJcblxyXG5jb25zdCBNb2RhbFN0eWxlZCA9IHN0eWxlZChNb2RhbClgXHJcbiAgLyogJi5tb2RhbCB7XHJcbiAgICB6LWluZGV4OiAxMDA1MDtcclxuICB9ICovXHJcbiAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBtYXJnaW46IDEuNzVyZW0gYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTW9kYWxTaWduSW4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgZ0NvbnRleHQudG9nZ2xlQXBwbGljYXRpb25Nb2RhbCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxTdHlsZWRcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgICBjZW50ZXJlZFxyXG4gICAgICBzaG93PXtnQ29udGV4dC5hcHBsaWNhdGlvbk1vZGFsVmlzaWJsZX1cclxuICAgICAgb25IaWRlPXtnQ29udGV4dC50b2dnbGVBcHBsaWNhdGlvbk1vZGFsfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLTMyIGJ0bi1yZXNldCBiZy13aGl0ZSBwb3MtYWJzLXRyIG10LW1kLW42IG1yLWxnLW42IGZvY3VzLXJlc2V0IHotaW5kZXgtc3VwcGVyXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1tb2RhbC1tYWluIGJnLXdoaXRlIHJvdW5kZWQtOCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIExlZnQgU2lkZWJhciBTdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXhsLTMgY29sLWxnLTQgY29sLW1kLTUgbWItMTMgbWItbGctMCBib3JkZXItcmlnaHQgYm9yZGVyLW1lcmN1cnlcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9maWxlU2lkZWJhciAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIExlZnQgU2lkZWJhciBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIE1pZGRsZSBDb250ZW50IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wteGwtNiBjb2wtbGctOCBjb2wtbWQtNyBvcmRlci0yIG9yZGVyLWxnLTEgYm9yZGVyLXJpZ2h0IGJvcmRlci1tZXJjdXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtNCBvdmVyZmxvdy1hdXRvIGgtMTE3M1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBFeGNlcnB0IFN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci14bC0wIHByLXh4bC0xNCBwLTUgcHgteHMtMTIgcHQtNyBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS02IGZvbnQtd2VpZ2h0LXNlbWlib2xkIG1iLTcgbXQtNSB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBIHRhbGVudGVkIHByb2Zlc3Npb25hbCB3aXRoIGFuIGFjYWRlbWljIGJhY2tncm91bmQgaW4gSVRcclxuICAgICAgICAgICAgICAgICAgICAgIGFuZCBwcm92ZW4gY29tbWVyY2lhbCBkZXZlbG9wbWVudCBleHBlcmllbmNlIGFzIEMrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGV2ZWxvcGVyIHNpbmNlIDE5OTkuIEhhcyBhIHNvdW5kIGtub3dsZWRnZSBvZiB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgIHNvZnR3YXJlIGRldmVsb3BtZW50IGxpZmUgY3ljbGUuIFdhcyBpbnZvbHZlZCBpbiBtb3JlIHRoYW5cclxuICAgICAgICAgICAgICAgICAgICAgIDE0MCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBvdXRzb3VyY2luZyBwcm9qZWN0cy5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgbWItOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2VzOiBDL0MrKywgLk5FVCBDKyssIFB5dGhvbiwgQmFzaCxcclxuICAgICAgICAgICAgICAgICAgICAgIFNoZWxsLCBQRVJMLCBSZWd1bGFyIGV4cHJlc3Npb25zLCBQeXRob24sIEFjdGl2ZS1zY3JpcHQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gRXhjZXJwdCBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBTa2lsbHMgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLW1lcmN1cnkgcHIteGwtMCBwci14eGwtMTQgcC01IHBsLXhzLTEyIHB0LTcgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXNpemUtNiBmb250LXdlaWdodC1zZW1pYm9sZCBtYi03IG10LTUgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTa2lsbHNcclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJnLXBvbGFyIHRleHQtYmxhY2stMiAgbXItNiBweC03IG10LTIgbWItMiBmb250LXNpemUtMyByb3VuZGVkLTMgbWluLWhlaWdodC0zMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ2lsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctcG9sYXIgdGV4dC1ibGFjay0yICBtci02IHB4LTcgbXQtMiBtYi0yIGZvbnQtc2l6ZS0zIHJvdW5kZWQtMyBtaW4taGVpZ2h0LTMyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdpcmVmcmFtaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiZy1wb2xhciB0ZXh0LWJsYWNrLTIgIG1yLTYgcHgtNyBtdC0yIG1iLTIgZm9udC1zaXplLTMgcm91bmRlZC0zIG1pbi1oZWlnaHQtMzIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvdG90eXBpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJnLXBvbGFyIHRleHQtYmxhY2stMiAgbXItNiBweC03IG10LTIgbWItMiBmb250LXNpemUtMyByb3VuZGVkLTMgbWluLWhlaWdodC0zMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctcG9sYXIgdGV4dC1ibGFjay0yICBtci02IHB4LTcgbXQtMiBtYi0yIGZvbnQtc2l6ZS0zIHJvdW5kZWQtMyBtaW4taGVpZ2h0LTMyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdhdGVyZmFsbCBNb2RlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctcG9sYXIgdGV4dC1ibGFjay0yICBtci02IHB4LTcgbXQtMiBtYi0yIGZvbnQtc2l6ZS0zIHJvdW5kZWQtMyBtaW4taGVpZ2h0LTMyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBMYXlvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJnLXBvbGFyIHRleHQtYmxhY2stMiAgbXItNiBweC03IG10LTIgbWItMiBmb250LXNpemUtMyByb3VuZGVkLTMgbWluLWhlaWdodC0zMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm93c2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2tpbGxzIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIENhcmQgU2VjdGlvbiBTdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItbWVyY3VyeSBwLTUgcGwteHMtMTIgcHQtNyBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS02IGZvbnQtd2VpZ2h0LXNlbWlib2xkIG1iLTcgbXQtNSB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFdvcmsgRXhwcmVyaWVuY2VcclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBDYXJkIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHItMTEgbWItOSBmbGV4LXdyYXAgZmxleC1zbS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmUtNzIgZC1ibG9jayBtci04IG1iLTcgbWItc20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdGMX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgbXQtbjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS01IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlYWQgUHJvZHVjdCBEZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtZGVmYXVsdC1jb2xvciBsaW5lLWhlaWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFpcmFibmJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCIgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdW4gMjAxNyAtIEFwcmlsIDIwMjAtIDMgeWVhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nTH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IFlvcmssIFVTQVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhcmQgRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgQ2FyZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHByLTExIG1iLTkgZmxleC13cmFwIGZsZXgtc20tbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3F1YXJlLTcyIGQtYmxvY2sgbXItOCBtYi03IG1iLXNtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nRjJ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIG10LW4yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtNSBmb250LXdlaWdodC1zZW1pYm9sZCB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5pb3IgVUkvVVggRGVzaWduZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWRlZmF1bHQtY29sb3IgbGluZS1oZWlnaHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb29nbGUgSW5jXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlbiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdW4gMjAxNyAtIEFwcmlsIDIwMjAtIDMgeWVhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nTH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IFlvcmssIFVTQVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhcmQgRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIENhcmQgU2VjdGlvbiBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBDYXJkIFNlY3Rpb24gU3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLW1lcmN1cnkgcC01IHBsLXhzLTEyIHB0LTcgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LXNpemUtNiBmb250LXdlaWdodC1zZW1pYm9sZCBtYi03IG10LTUgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFZHVjYXRpb25cclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBDYXJkIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHItMTEgbWItOSBmbGV4LXdyYXAgZmxleC1zbS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmUtNzIgZC1ibG9jayBtci04IG1iLTcgbWItc20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdGM30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgbXQtbjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS01IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hc3RlcnMgaW4gQXJ0IERlc2lnblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtZGVmYXVsdC1jb2xvciBsaW5lLWhlaWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhhcnZhcmQgVW5pdmVyc2l0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LW1kLWJldHdlZW4gZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSnVuIDIwMTcgLSBBcHJpbCAyMDIwLSAzIHllYXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ0x9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyeWxpbiwgVVNBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgQ2FyZCBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBDYXJkIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHItMTEgbWItOSBmbGV4LXdyYXAgZmxleC1zbS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmUtNzIgZC1ibG9jayBtci04IG1iLTcgbWItc20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2lyY2xlLTcyXCIgc3JjPXtpbWdGNH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgbXQtbjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS01IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2hlbG9yIGluIFNvZnR3YXJlIEVuZ2luZWVyaW5ne1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtZGVmYXVsdC1jb2xvciBsaW5lLWhlaWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmlwYWwgSW5zdGl0dXRlIG9mIFRlY2hub2xvZ3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlZCAyMDEyIC0gQXByaWwgMjAxNiAtIDQgeWVhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nTH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IFlvcmssIFVTQVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhcmQgRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgQ2FyZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHByLTExIG1iLTkgZmxleC13cmFwIGZsZXgtc20tbm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3F1YXJlLTcyIGQtYmxvY2sgbXItOCBtYi03IG1iLXNtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNpcmNsZS03MlwiIHNyYz17aW1nRjR9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIG10LW4yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtNSBmb250LXdlaWdodC1zZW1pYm9sZCB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYWNoZWxvciBpbiBTb2Z0d2FyZSBFbmdpbmVlcmluZ3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWRlZmF1bHQtY29sb3IgbGluZS1oZWlnaHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYW5pcGFsIEluc3RpdHV0ZSBvZiBUZWNobm9sb2d5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlbiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWQgMjAxMiAtIEFwcmlsIDIwMTYgLSA0IHllYXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3M9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ0x9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBZb3JrLCBVU0FcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBDYXJkIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBDYXJkIFNlY3Rpb24gRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIE1pZGRsZSBDb250ZW50IC0tPiAqL31cclxuICAgICAgICAgICAgICB7LyogPCEtLSBSaWdodCBTaWRlYmFyIFN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wteGwtMyBvcmRlci0zIG9yZGVyLWxnLTIgYmctZGVmYXVsdC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEzIG1iLWxnLTAgbXQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhsIG1iLTcgZC1ibG9jayBteC1hdXRvIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZ3JheSBidG4teGwgbWItNyBkLWJsb2NrIG14LWF1dG8gdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWplY3RcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBSaWdodCBTaWRlYmFyIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgIDwvTW9kYWxTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsU2lnbkluO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vTW9kYWxBcHBsaWNhdGlvblwiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuXHJcbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkKE1vZGFsKWBcclxuICAvKiAmLm1vZGFsIHtcclxuICAgIHotaW5kZXg6IDEwMDUwO1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IE1vZGFsU2lnbkluID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dQYXNzLCBzZXRTaG93UGFzc10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgZ0NvbnRleHQudG9nZ2xlU2lnbkluTW9kYWwoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIHNldFNob3dQYXNzKCFzaG93UGFzcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFN0eWxlZFxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGNlbnRlcmVkXHJcbiAgICAgIHNob3c9e2dDb250ZXh0LnNpZ25Jbk1vZGFsVmlzaWJsZX1cclxuICAgICAgb25IaWRlPXtnQ29udGV4dC50b2dnbGVTaWduSW5Nb2RhbH1cclxuICAgID5cclxuICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtMzIgYnRuLXJlc2V0IGJnLXdoaXRlIHBvcy1hYnMtdHIgbXQtbWQtbjYgbXItbGctbjYgZm9jdXMtcmVzZXQgei1pbmRleC1zdXBwZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbW9kYWwtbWFpbiBiZy13aGl0ZSByb3VuZGVkLTggb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIHBiLTYgcGwtMTEgcHItMTIgYmctYmxhY2stMiBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW4gZGFyay1tb2RlLXRleHRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTlcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS04IHRleHQtd2hpdGUgbGluZS1oZWlnaHQtcmVzZXQgcGItNCBsaW5lLWhlaWdodC0xcDRcIj5cclxuICAgICAgICAgICAgICAgICAgICBXZWxjb21lIEJhY2tcclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCBmb250LXNpemUtNCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nIGluIHRvIGNvbnRpbnVlIHlvdXIgYWNjb3VudCBhbmQgZXhwbG9yZSBuZXcgam9icy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLWRlZmF1bHQtY29sb3ItMiBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG14LW45IHB0LTYgZmxleC14cy1yb3cgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcHgtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS03IHRleHQtd2hpdGVcIj4yOTU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC13aGl0ZSBnci1vcGFjaXR5LTUgbGluZS1oZWlnaHQtMXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBqb2JzIHBvc3RlZCB0b2RheVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBweC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTcgdGV4dC13aGl0ZVwiPjE0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtd2hpdGUgZ3Itb3BhY2l0eS01IGxpbmUtaGVpZ2h0LTFwNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXcgY29tcGFuaWVzIHJlZ2lzdGVyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLTIgaC0xMDAgcHgtMTEgcHQtMTEgcGItN1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHBvc2l0aW9uLXJlbGF0aXZlIHRleHQtd2hpdGUgYmctYWxscG9ydHMgaC1weC00OCBmbGV4LWFsbC1jZW50ZXIgdy0xMDAgcHgtNiByb3VuZGVkLTUgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgaW4gd2l0aCBMaW5rZWRJblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLXBvcHB5IGgtcHgtNDggZmxleC1hbGwtY2VudGVyIHctMTAwIHB4LTYgcm91bmRlZC01IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1nb29nbGUgcG9zLXhzLWFicy1jbCBmb250LXNpemUtNyBtbC14cy00XCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZyBpbiB3aXRoIEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLW1hcmlubyBoLXB4LTQ4IGZsZXgtYWxsLWNlbnRlciB3LTEwMCBweC02IHJvdW5kZWQtNSBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgaW4gd2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ItZGV2aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtMyBsaW5lLWhlaWdodC1yZXNldCBcIj5Pcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEUtbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXhhbXBsZUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtYmxhY2stMiBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzcyA/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvdy1wYXNzd29yZCBwb3MtYWJzLWNyIGZhcyBtci02IHRleHQtYmxhY2stMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZVwiPm5vbmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInRlcm1zLWNoZWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyLWNoZWNrLWlucHV0IGQtZmxleCAgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVybXMtY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94IG1yLTVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtMyBtYi0wIGxpbmUtaGVpZ2h0LXJlc2V0IG1iLTEgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1lbWJlciBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWRvZGdlciBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRm9yZ2V0IFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbWVkaXVtIHctMTAwIHJvdW5kZWQtNSB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTG9nIGlue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1jZW50ZXIgaGVhZGluZy1kZWZhdWx0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRG9u4oCZdCBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgZnJlZSBhY2NvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgIDwvTW9kYWxTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsU2lnbkluO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vTW9kYWxTaWduSW5cIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcblxyXG5jb25zdCBNb2RhbFN0eWxlZCA9IHN0eWxlZChNb2RhbClgXHJcbiAgLyogJi5tb2RhbCB7XHJcbiAgICB6LWluZGV4OiAxMDA1MDtcclxuICB9ICovXHJcbmA7XHJcblxyXG5jb25zdCBNb2RhbFNpZ25VcCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaG93UGFzc0ZpcnN0LCBzZXRTaG93UGFzc0ZpcnN0XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzaG93UGFzc1NlY29uZCwgc2V0U2hvd1Bhc3NTZWNvbmRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIGdDb250ZXh0LnRvZ2dsZVNpZ25VcE1vZGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRGaXJzdCA9ICgpID0+IHtcclxuICAgIHNldFNob3dQYXNzRmlyc3QoIXNob3dQYXNzRmlyc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkU2Vjb25kID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1Bhc3NTZWNvbmQoIXNob3dQYXNzU2Vjb25kKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsU3R5bGVkXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgY2VudGVyZWRcclxuICAgICAgc2hvdz17Z0NvbnRleHQuc2lnblVwTW9kYWxWaXNpYmxlfVxyXG4gICAgICBvbkhpZGU9e2dDb250ZXh0LnRvZ2dsZVNpZ25VcE1vZGFsfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJwLTBcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZS0zMiBidG4tcmVzZXQgYmctd2hpdGUgcG9zLWFicy10ciBtdC1uNiBtci1sZy1uNiBmb2N1cy1yZXNldCBzaGFkb3ctMTBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbW9kYWwtbWFpbiBiZy13aGl0ZSByb3VuZGVkLTggb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIHBiLTYgcGwtMTEgcHItMTIgYmctYmxhY2stMiBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW4gZGFyay1tb2RlLXRleHRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTlcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS04IHRleHQtd2hpdGUgbGluZS1oZWlnaHQtcmVzZXQgcGItNCBsaW5lLWhlaWdodC0xcDRcIj5cclxuICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBmcmVlIGFjY291bnQgdG9kYXlcclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCBmb250LXNpemUtNCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIHlvdXIgYWNjb3VudCB0byBjb250aW51ZSBhbmQgZXhwbG9yZSBuZXcgam9icy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLWRlZmF1bHQtY29sb3ItMiBtdC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG14LW45IHB0LTYgZmxleC14cy1yb3cgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcHgtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS03IHRleHQtd2hpdGVcIj4yOTU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC13aGl0ZSBnci1vcGFjaXR5LTUgbGluZS1oZWlnaHQtMXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBqb2JzIHBvc3RlZCB0b2RheVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBweC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTcgdGV4dC13aGl0ZVwiPjE0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtd2hpdGUgZ3Itb3BhY2l0eS01IGxpbmUtaGVpZ2h0LTFwNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXcgY29tcGFuaWVzIHJlZ2lzdGVyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLTIgaC0xMDAgcHgtMTEgcHQtMTEgcGItN1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHBvc2l0aW9uLXJlbGF0aXZlIHRleHQtd2hpdGUgYmctYWxscG9ydHMgaC1weC00OCBmbGV4LWFsbC1jZW50ZXIgdy0xMDAgcHgtNiByb3VuZGVkLTUgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbXBvcnQgZnJvbSBMaW5rZWRJblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLXBvcHB5IGgtcHgtNDggZmxleC1hbGwtY2VudGVyIHctMTAwIHB4LTYgcm91bmRlZC01IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1nb29nbGUgcG9zLXhzLWFicy1jbCBmb250LXNpemUtNyBtbC14cy00XCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEltcG9ydCBmcm9tIEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLW1hcmlubyBoLXB4LTQ4IGZsZXgtYWxsLWNlbnRlciB3LTEwMCBweC02IHJvdW5kZWQtNSBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbXBvcnQgZnJvbSBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ItZGV2aWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtMyBsaW5lLWhlaWdodC1yZXNldFwiPk9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEUtbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZXhhbXBsZUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbDJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3NGaXJzdCA/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvdy1wYXNzd29yZCBwb3MtYWJzLWNyIGZhcyBtci02IHRleHQtYmxhY2stMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBhc3N3b3JkRmlyc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lXCI+bm9uZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm0gUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc1NlY29uZCA/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3ctcGFzc3dvcmQgcG9zLWFicy1jciBmYXMgbXItNiB0ZXh0LWJsYWNrLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVQYXNzd29yZFNlY29uZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmVcIj5ub25lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInRlcm1zLWNoZWNrMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnci1jaGVjay1pbnB1dCBkLWZsZXggIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlcm1zLWNoZWNrMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3ggbXItNVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIG1iLTAgbGluZS1oZWlnaHQtcmVzZXQgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZ3JlZSB0byB0aGV7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1zICZhbXA7IENvbmRpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWRvZGdlciBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRm9yZ2V0IFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tbWVkaXVtIHctMTAwIHJvdW5kZWQtNSB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtY2VudGVyIGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGZyZWUgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICA8L01vZGFsU3R5bGVkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFNpZ25VcDtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL01vZGFsU2lnblVwXCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcclxuXHJcbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkKE1vZGFsKWBcclxuICAmLm1vZGFsIHtcclxuICAgIHotaW5kZXg6IDEwMDUwO1xyXG4gIH1cclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgICBtYXgtaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICBAbWVkaWEgJHtkZXZpY2UubGd9IHtcclxuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGl2U3R5bGVkID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgQG1lZGlhICR7ZGV2aWNlLm1kfSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICB9XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDJzIGVhc2Utb3V0O1xyXG4gICYubG9hZGVkIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENsb3NlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMXJlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgd2lkdGg6IDEuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIEBtZWRpYSAke2RldmljZS5tZH0ge1xyXG4gICAgcmlnaHQ6IDJyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2xvc2VCdXR0b24gPSAocHJvcHMpID0+IChcclxuICA8Q2xvc2VXcmFwcGVyIHsuLi5wcm9wc30+XHJcbiAgICA8c3ZnXHJcbiAgICAgIHJvbGU9XCJpbWdcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgY3NzPXtgXHJcbiAgICAgICAgZmlsbDogY3VycmVudGNvbG9yO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICBgfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNOS44MiAxMkwwIDIuMTggMi4xOCAwIDEyIDkuODIgMjEuODIgMCAyNCAyLjE4IDE0LjE4IDEyIDI0IDIxLjgyIDIxLjgyIDI0IDEyIDE0LjE4IDIuMTggMjQgMCAyMS44MnpcIlxyXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICA+PC9wYXRoPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9DbG9zZVdyYXBwZXI+XHJcbik7XHJcblxyXG5jb25zdCBNb2RhbFZpZGVvID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgZ0NvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBnQ29udGV4dC50b2dnbGVWaWRlb01vZGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFN0eWxlZFxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGNlbnRlcmVkXHJcbiAgICAgIHNob3c9e2dDb250ZXh0LnZpZGVvTW9kYWxWaXNpYmxlfVxyXG4gICAgICAvLyBvbkhpZGU9e2dDb250ZXh0LnRvZ2dsZVZpZGVvTW9kYWx9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBgfT5cclxuICAgICAgICAgIDxEaXZTdHlsZWQgY2xhc3NOYW1lPXtgJHtsb2FkaW5nID8gXCJsb2FkaW5nXCIgOiBcImxvYWRlZFwifWB9PlxyXG4gICAgICAgICAgICA8UmVhY3RQbGF5ZXJcclxuICAgICAgICAgICAgICB1cmw9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXpsSW5ZbTJKckZ3YH1cclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgIGNvbnRyb2xzXHJcbiAgICAgICAgICAgICAgb25SZWFkeT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRGl2U3R5bGVkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICA8L01vZGFsU3R5bGVkPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFZpZGVvO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vTW9kYWxWaWRlb1wiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTGlzdEdyb3VwLCBDb2xsYXBzZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgRmFBbmdsZVJpZ2h0LCBGYUFuZ2xlRG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuXHJcbmNvbnN0IE5lc3RlZE1lbnVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGEsXHJcbiAgLmxhYmVsIHtcclxuICAgIGNvbG9yOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+XHJcbiAgICAgIGRhcmsgPyB0aGVtZS5jb2xvcnMubGlnaHQgOiB0aGVtZS5jb2xvcnMuaGVhZGluZ30haW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgJjpob3ZlcixcclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICYgKyAuY29sbGFwc2U6bm90KC5zaG93KSB7XHJcbiAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmICsgLmNvbGxhcHNlLnNob3cge1xyXG4gICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbGxhcHNlICsgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gIH1cclxuICAvKiAubGlzdC1ncm91cC1mbHVzaDpsYXN0LWNoaWxkIC5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgfSAqL1xyXG5gO1xyXG5cclxuY29uc3QgZGVmYXVsdE1lbnVJdGVtcyA9IFtcclxuICB7IG5hbWU6IFwiaG9tZVwiLCBsYWJlbDogXCJIb21lXCIgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcImJpbGxpbmdcIixcclxuICAgIGxhYmVsOiBcIkJpbGxpbmdcIixcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgbmFtZTogXCJzdGF0ZW1lbnRzXCIsIGxhYmVsOiBcIlN0YXRlbWVudHNcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwicmVwb3J0c1wiLCBsYWJlbDogXCJSZXBvcnRzXCIgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcInNldHRpbmdzXCIsXHJcbiAgICBsYWJlbDogXCJTZXR0aW5nc1wiLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyBuYW1lOiBcInByb2ZpbGVcIiwgbGFiZWw6IFwiUHJvZmlsZVwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJpbnN1cmFuY2VcIiwgbGFiZWw6IFwiSW5zdXJhbmNlXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwibm90aWZpY2F0aW9uc1wiLFxyXG4gICAgICAgIGxhYmVsOiBcIk5vdGlmaWNhdGlvbnNcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcImVtYWlsXCIsIGxhYmVsOiBcIkVtYWlsXCIgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJkZXNrdG9wXCIsXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkRlc2t0b3BcIixcclxuICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICB7IG5hbWU6IFwic2NoZWR1bGVcIiwgbGFiZWw6IFwiU2NoZWR1bGVcIiB9LFxyXG4gICAgICAgICAgICAgIHsgbmFtZTogXCJmcmVxdWVuY3lcIiwgbGFiZWw6IFwiRnJlcXVlbmN5XCIgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic21zXCIsIGxhYmVsOiBcIlNNU1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IE1lbnVJdGVtID0gKHtcclxuICBsYWJlbCxcclxuICBpc0V4dGVybmFsID0gZmFsc2UsXHJcbiAgbmFtZSxcclxuICBpdGVtcyxcclxuICBkZXB0aFN0ZXAgPSAyMCxcclxuICBkZXB0aCA9IDAsXHJcbiAgLi4ucmVzdFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhc1N1Ykl0ZW1zID0gQXJyYXkuaXNBcnJheShpdGVtcyk7XHJcblxyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoYXNTdWJJdGVtcyA/IChcclxuICAgICAgICA8TGlzdEdyb3VwLkl0ZW1cclxuICAgICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAgICAgY3NzPXtgXHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJHtkZXB0aCAqIGRlcHRoU3RlcH1weCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPntsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57b3BlbiA/IDxGYUFuZ2xlRG93biAvPiA6IDxGYUFuZ2xlUmlnaHQgLz59PC9zcGFuPlxyXG4gICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPExpc3RHcm91cC5JdGVtXHJcbiAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgIGNzcz17YFxyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7ZGVwdGggKiBkZXB0aFN0ZXB9cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzRXh0ZXJuYWwgPyAoXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj17YCR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChnQ29udGV4dC52aXNpYmxlT2ZmQ2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGdDb250ZXh0LnRvZ2dsZU9mZkNhbnZhcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtuYW1lfWB9PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChnQ29udGV4dC52aXNpYmxlT2ZmQ2FudmFzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ0NvbnRleHQudG9nZ2xlT2ZmQ2FudmFzKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2hhc1N1Ykl0ZW1zID8gKFxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0+XHJcbiAgICAgICAgICA8TGlzdEdyb3VwPlxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChzdWJJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9e3N1Ykl0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgIGRlcHRoPXtkZXB0aCArIDF9XHJcbiAgICAgICAgICAgICAgICBkZXB0aFN0ZXA9e2RlcHRoU3RlcH1cclxuICAgICAgICAgICAgICAgIHsuLi5zdWJJdGVtfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9MaXN0R3JvdXA+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTmVzdGVkTWVudSA9ICh7IG1lbnVJdGVtcyA9IGRlZmF1bHRNZW51SXRlbXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmVzdGVkTWVudUNvbnRhaW5lcj5cclxuICAgICAgPExpc3RHcm91cCB2YXJpYW50PVwiZmx1c2hcIj5cclxuICAgICAgICB7bWVudUl0ZW1zLm1hcCgobWVudUl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAga2V5PXtgJHttZW51SXRlbS5uYW1lfSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgZGVwdGhTdGVwPXsyMH1cclxuICAgICAgICAgICAgZGVwdGg9ezB9XHJcbiAgICAgICAgICAgIHsuLi5tZW51SXRlbX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgPC9OZXN0ZWRNZW51Q29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXN0ZWRNZW51O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vTmVzdGVkTWVudVwiO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL0xvZ29cIjtcclxuXHJcbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgJi5oaWRkZW4ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTdyZW07XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5OTk5O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgJi5oaWRkZW4ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIH1cclxuICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7XHJcbiAgICB3aWxsLWNoYW5nZTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ29Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG5gO1xyXG5cclxuY29uc3QgT2ZmY2FudmFzID0gKHsgc2hvdywgb25IaWRlT2ZmY2FudmFzLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgaWYgKHNob3cpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LmFkZChcImhhcy1vZmZjYW52YXNcIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImhhcy1vZmZjYW52YXNcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLW9mZmNhbnZhc1wiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLW9mZmNhbnZhc1wiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHsuLi5yZXN0fT5cclxuICAgICAgPE92ZXJsYXkgY2xhc3NOYW1lPXtzaG93ID8gXCJcIiA6IFwiaGlkZGVuXCJ9IG9uQ2xpY2s9e29uSGlkZU9mZmNhbnZhc30gLz5cclxuICAgICAgPERyYXdlciBjbGFzc05hbWU9e3Nob3cgPyBcIlwiIDogXCJoaWRkZW5cIn0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgIDxMb2dvQ29udGFpbmVyIGNsYXNzTmFtZT1cIm15LTNcIj5cclxuICAgICAgICAgICAgICA8TG9nbyBvbkNsaWNrPXtvbkhpZGVPZmZjYW52YXN9IC8+XHJcbiAgICAgICAgICAgIDwvTG9nb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9mZmNhbnZhcztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL09mZmNhbnZhc1wiO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBpbWdQIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvbDMvcG5nL3Byby1pbWcucG5nXCI7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8IS0tIFNpZGViYXIgU3RhcnQgLS0+ICovfVxyXG5cclxuICAgICAgPGRpdiB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtbGctNVwiPlxyXG4gICAgICAgICAgey8qIDwhLS0gVG9wIFN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LTkgcm91bmRlZC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNSBweS0xMSB0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1tZXJjdXJ5XCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2lyY2xlLTU0XCIgc3JjPXtpbWdQfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmxhY2stMiBmb250LXNpemUtNiBmb250LXdlaWdodC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERhdmlkIEhlbnJpY2tzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLThcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXkgZm9udC1zaXplLTRcIj5Qcm9kdWN0IERlc2lnbmVyPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tbGluayBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zbW9rZSBjaXJjbGUtMzIgYmctY29uY3JldGUgbXItNSBob3Zlci1iZy1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbi1pblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtc21va2UgY2lyY2xlLTMyIGJnLWNvbmNyZXRlIG1yLTUgaG92ZXItYmctZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtc21va2UgY2lyY2xlLTMyIGJnLWNvbmNyZXRlIG1yLTUgaG92ZXItYmctZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtc21va2UgY2lyY2xlLTMyIGJnLWNvbmNyZXRlIG1yLTUgaG92ZXItYmctZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZHJpYmJibGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXNtb2tlIGNpcmNsZS0zMiBiZy1jb25jcmV0ZSBtci01IGhvdmVyLWJnLWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWJlaGFuY2VcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8IS0tIFRvcCBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICB7LyogPCEtLSBCb3R0b20gU3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTkgcHQtbGctNSBwdC05IHB0LXhsLTkgcGItNVwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrLTIgbWItOCBmb250LXNpemUtNVwiPkNvbnRhY3QgSW5mbzwvaDU+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIExpc3QgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItN1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgbWItMFwiPkxvY2F0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIG1iLTAgdGV4dC1ibGFjay0yIHRleHQtYnJlYWtcIj5cclxuICAgICAgICAgICAgICAgICAgTmV3IFlvcmsgLCBVU0FcclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIExpc3QgLS0+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBMaXN0IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTdcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IG1iLTBcIj5FLW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2stMiB0ZXh0LWJyZWFrXCJcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwibWFpbHRvOm5hbWVfYWNAZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVfYWNAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIExpc3QgLS0+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBMaXN0IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTdcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IG1iLTBcIj5QaG9uZTwvcD5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmxhY2stMiB0ZXh0LWJyZWFrXCIgaHJlZj1cInRlbDorOTk5NTY1NTYyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgKzk5OSA1NjUgNTYyXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIExpc3QgLS0+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBMaXN0IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTdcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IG1iLTBcIj5XZWJzaXRlIExpbmtlZDwvcD5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYnJlYWtcIj53d3cubmFtZWFjLmNvbTwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgTGlzdCAtLT4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPCEtLSBCb3R0b20gRW5kIC0tPiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiA8IS0tIFNpZGViYXIgRW5kIC0tPiAqL31cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vUHJvZmlsZVNpZGViYXJcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBDb2xsYXBzZSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xyXG5pbXBvcnQgaW1nTCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL2xvZ28tbWFpbi1ibGFjay5wbmdcIjtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ0NvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbGxhcHNlIGluPXtnQ29udGV4dC5zaG93U2lkZWJhckRhc2hib2FyZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtc2lkZWJhci13cmFwcGVyIHB0LTExXCIgaWQ9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kLWxvZ28gcHgtMTFcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdMfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTE1IHB4LTExXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teGwgdy0xMDAgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTUgZC1pbmxpbmUtYmxvY2tcIj4rPC9zcGFuPlBvc3QgYSBuZXcgam9iXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIGRhc2hib2FyZC1sYXlvdXQtc2lkZWJhclwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQtbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtMTAgcHktMSBteS01IGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIGZsZXgteS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxheW91dC0xMSBtci03XCI+PC9pPkRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkLWpvYnNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTEwIHB5LTEgbXktNSBmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBmbGV4LXktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1icmllZmNhc2UgbXItN1wiPjwvaT5Qb3N0ZWQgSm9ic1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkLWFwcGxpY2FudHNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTEwIHB5LTEgbXktNSBmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBmbGV4LXktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyIG1yLTdcIj48L2k+QXBwbGljYW50c3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtYXV0byBweC0xIGgtMSBiZy1kb2RnZXIgdGV4dC13aGl0ZSBmb250LXNpemUtMyByb3VuZGVkLTUgbWF4LWhlaWdodC1weC0xOCBmbGV4LWFsbC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAxNFxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmQtc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTEwIHB5LTEgbXktNSBmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBmbGV4LXktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jb2cgbXItN1wiPjwvaT5TZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJzaWRlYmFyLW1vYmlsZS1idXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBnQ29udGV4dC50b2dnbGVTaWRlYmFyRGFzaGJvYXJkKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zaWRlYmFyLTJcIj48L2k+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vU2lkZWJhckRhc2hib2FyZFwiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEdsb2JhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBHbG9iYWxQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbdGhlbWVEYXJrLCBzZXRUaGVtZURhcmtdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaG93U2lkZWJhckRhc2hib2FyZCwgc2V0U2hvd1NpZGViYXJEYXNoYm9hcmRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2FwcGxpY2F0aW9uTW9kYWxWaXNpYmxlLCBzZXRBcHBsaWNhdGlvbk1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NpZ25Jbk1vZGFsVmlzaWJsZSwgc2V0U2lnbkluTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2lnblVwTW9kYWxWaXNpYmxlLCBzZXRTaWduVXBNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2aWRlb01vZGFsVmlzaWJsZSwgc2V0VmlkZW9Nb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt2aXNpYmxlT2ZmQ2FudmFzLCBzZXRWaXNpYmxlT2ZmQ2FudmFzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGVhZGVyLCBzZXRIZWFkZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgdGhlbWU6IFwibGlnaHRcIixcclxuICAgIGJnQ2xhc3M6IFwiZGVmYXVsdFwiLFxyXG4gICAgdmFyaWFudDogXCJwcmltYXJ5XCIsXHJcbiAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICBpc0ZsdWlkOiBmYWxzZSxcclxuICAgIGJ1dHRvbjogXCJjdGFcIiwgLy8gcHJvZmlsZSwgYWNjb3VudCwgbnVsbFxyXG4gICAgYnV0dG9uVGV4dDogXCJHZXQgc3RhcnRlZCBmcmVlXCIsIC8vIHByb2ZpbGUsIGFjY291bnQsIG51bGxcclxuICAgIHJldmVhbDogdHJ1ZSxcclxuICB9KTtcclxuICBjb25zdCBbZm9vdGVyLCBzZXRGb290ZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgdGhlbWU6IFwiZGFya1wiLFxyXG4gICAgc3R5bGU6IFwic3R5bGUxXCIsIC8vc3R5bGUxLCBzdHlsZTJcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICBzZXRUaGVtZURhcmsoIXRoZW1lRGFyayk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lkZWJhckRhc2hib2FyZCA9ICgpID0+IHtcclxuICAgIHNldFNob3dTaWRlYmFyRGFzaGJvYXJkKCFzaG93U2lkZWJhckRhc2hib2FyZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlVmlkZW9Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldFZpZGVvTW9kYWxWaXNpYmxlKCF2aWRlb01vZGFsVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlQXBwbGljYXRpb25Nb2RhbCA9ICgpID0+IHtcclxuICAgIHNldEFwcGxpY2F0aW9uTW9kYWxWaXNpYmxlKCFhcHBsaWNhdGlvbk1vZGFsVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lnbkluTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWduSW5Nb2RhbFZpc2libGUoIXNpZ25Jbk1vZGFsVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2lnblVwTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWduVXBNb2RhbFZpc2libGUoIXNpZ25VcE1vZGFsVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlT2ZmQ2FudmFzID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZU9mZkNhbnZhcyghdmlzaWJsZU9mZkNhbnZhcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xvc2VPZmZDYW52YXMgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlT2ZmQ2FudmFzKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICB0aGVtZURhcmssXHJcbiAgICAgICAgdG9nZ2xlVGhlbWUsXHJcbiAgICAgICAgc2hvd1NpZGViYXJEYXNoYm9hcmQsXHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhckRhc2hib2FyZCxcclxuICAgICAgICB2aWRlb01vZGFsVmlzaWJsZSxcclxuICAgICAgICB0b2dnbGVWaWRlb01vZGFsLFxyXG4gICAgICAgIGFwcGxpY2F0aW9uTW9kYWxWaXNpYmxlLFxyXG4gICAgICAgIHRvZ2dsZUFwcGxpY2F0aW9uTW9kYWwsXHJcbiAgICAgICAgc2lnbkluTW9kYWxWaXNpYmxlLFxyXG4gICAgICAgIHRvZ2dsZVNpZ25Jbk1vZGFsLFxyXG4gICAgICAgIHNpZ25VcE1vZGFsVmlzaWJsZSxcclxuICAgICAgICB0b2dnbGVTaWduVXBNb2RhbCxcclxuICAgICAgICB2aXNpYmxlT2ZmQ2FudmFzLFxyXG4gICAgICAgIHRvZ2dsZU9mZkNhbnZhcyxcclxuICAgICAgICBjbG9zZU9mZkNhbnZhcyxcclxuICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgc2V0SGVhZGVyLFxyXG4gICAgICAgIGZvb3RlcixcclxuICAgICAgICBzZXRGb290ZXIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsQ29udGV4dDtcclxuZXhwb3J0IHsgR2xvYmFsUHJvdmlkZXIgfTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIEhvb2tcclxuZXhwb3J0IGNvbnN0IHVzZVdpbmRvd1NpemUgPSAoKSA9PiB7XHJcbiAgY29uc3QgaXNDbGllbnQgPSB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiO1xyXG5cclxuICBjb25zdCBnZXRTaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2lkdGg6IGlzQ2xpZW50ID8gd2luZG93LmlubmVyV2lkdGggOiB1bmRlZmluZWQsXHJcbiAgICAgIGhlaWdodDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB1bmRlZmluZWRcclxuICAgIH07XHJcbiAgfSwgW2lzQ2xpZW50XSk7XHJcblxyXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKGdldFNpemUoKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzQ2xpZW50KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNldFdpbmRvd1NpemUoZ2V0U2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtnZXRTaXplLCBpc0NsaWVudF0pO1xyXG5cclxuICByZXR1cm4gd2luZG93U2l6ZTtcclxufTtcclxuIiwiLy8gaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgR2xvYmFsUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcblxyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvZm9udGF3ZXNvbWUtNS93ZWJmb250cy9mYS1icmFuZHMtNDAwLnR0ZlwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvZm9udGF3ZXNvbWUtNS93ZWJmb250cy9mYS1yZWd1bGFyLTQwMC50dGZcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtc29saWQtOTAwLnR0ZlwiO1xyXG5cclxuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRzL2ljb24tZm9udC9mb250cy9hdmFzdGEudHRmXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy9pY29uLWZvbnQvY3NzL3N0eWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XHJcbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9hb3MvZGlzdC9hb3MuY3NzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvaWNvbi1mb250L2Nzcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvY3NzL2FsbC5jc3NcIjtcclxuXHJcbmltcG9ydCBcIi4uL3Njc3MvYm9vdHN0cmFwLnNjc3NcIjtcclxuaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9KSA9PiB7XHJcbiAgaWYgKHJvdXRlci5wYXRobmFtZS5tYXRjaCgvNDA0LykpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxHbG9iYWxQcm92aWRlcj5cclxuICAgICAgICA8TGF5b3V0IHBhZ2VDb250ZXh0PXt7IGxheW91dDogXCJiYXJlXCIgfX0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvR2xvYmFsUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAocm91dGVyLnBhdGhuYW1lLm1hdGNoKC9kYXNoYm9hcmQvKSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEdsb2JhbFByb3ZpZGVyPlxyXG4gICAgICAgIDxMYXlvdXQgcGFnZUNvbnRleHQ9e3sgbGF5b3V0OiBcImRhc2hib2FyZFwiIH19PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L0dsb2JhbFByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R2xvYmFsUHJvdmlkZXI+XHJcbiAgICAgIDxMYXlvdXQgcGFnZUNvbnRleHQ9e3t9fT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9HbG9iYWxQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImV4cG9ydCBjb25zdCBhZGREYXlzID0gKGRheXMpID0+IHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoRGF0ZS5ub3coKSk7XHJcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGF5cyk7XHJcbiAgcmV0dXJuIGRhdGU7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBicmVha3BvaW50cyA9IHtcclxuICBzbTogNTc2LCAvL1NtYWxsIHNjcmVlbiBzdGFydFxyXG4gIG1kOiA3NjgsIC8vTWVkaXVtIHNjcmVlbiBzdGFydFxyXG4gIGxnOiA5OTIsIC8vTGFyZ2Ugc2NyZWVuIHN0YXJ0XHJcbiAgeGw6IDEyMDAsIC8vRXh0cmEgTGFyZ2Ugc2NyZWVuIHN0YXJ0XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGV2aWNlID0ge1xyXG4gIHNtOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50cy5zbX1weClgLFxyXG4gIG1kOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50cy5tZH1weClgLFxyXG4gIGxnOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50cy5sZ31weClgLFxyXG4gIHhsOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50cy54bH1weClgLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgZ2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICBcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdsb2JhbFN0eWxlO1xyXG4iLCJpbXBvcnQgeyBicmVha3BvaW50cywgZGV2aWNlIH0gZnJvbSBcIi4vYnJlYWtwb2ludHNcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XHJcbmltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiLi9hZGREYXlzXCI7XHJcblxyXG5leHBvcnQgeyBkZXZpY2UsIGJyZWFrcG9pbnRzLCB0aGVtZSwgYWRkRGF5cyB9O1xyXG4iLCJpbXBvcnQgeyByZ2JhIH0gZnJvbSBcInBvbGlzaGVkXCI7XHJcbmltcG9ydCB7IGJyZWFrcG9pbnRzIH0gZnJvbSBcIi4vYnJlYWtwb2ludHNcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRDb2xvcnMgPSB7XHJcbiAgcHJpbWFyeTogXCIjMDBiMDc0XCIsXHJcbiAgcHJpbWFyeUhvdmVyOiBcIiMwMDhhNWJcIixcclxuICBzZWNvbmRhcnk6IFwiIzMzNmVmN1wiLFxyXG4gIGxpZ2h0OiBcIiNGMkYyRjJcIixcclxuICBkYXJrOiBcIiMyYjM5NDBcIixcclxuICB5ZWxsb3c6IFwiI2ZlZGM1YVwiLFxyXG4gIGFzaDogXCIjNDEzZTY1XCIsXHJcbiAgZ3JlZW46IFwiIzY4ZDU4NSBcIixcclxuICBpbmZvOiBcIiMwZTU2N2NcIixcclxufTtcclxuXHJcbmNvbnN0IGNvbG9ycyA9IHtcclxuICBwcmltYXJ5OiBkZWZhdWx0Q29sb3JzLnByaW1hcnksXHJcbiAgcHJpbWFyeUhvdmVyOiBkZWZhdWx0Q29sb3JzLnByaW1hcnlIb3ZlcixcclxuICBzZWNvbmRhcnk6IGRlZmF1bHRDb2xvcnMuc2Vjb25kYXJ5LFxyXG4gIGxpZ2h0OiBkZWZhdWx0Q29sb3JzLmxpZ2h0LFxyXG4gIGxpZ2h0U2hhZGU6IHJnYmEoZGVmYXVsdENvbG9ycy5saWdodCwgMC43KSxcclxuICBkYXJrOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgZGFya1NoYWRlOiByZ2JhKGRlZmF1bHRDb2xvcnMuZGFyaywgMC43KSxcclxuICBhc2g6IGRlZmF1bHRDb2xvcnMuYXNoLFxyXG4gIGJnOiBkZWZhdWx0Q29sb3JzLmxpZ2h0LFxyXG4gIGJnMjogXCIjZjRmN2ZhXCIsXHJcbiAgYmczOiBcIiNmOGY4ZjhcIixcclxuICBiZzQ6IFwiI2ZkZmRmZlwiLFxyXG4gIGJnNTogXCIjZWNmMmY3XCIsXHJcbiAgYmc2OiBcIiNmZmZcIixcclxuICBiZzc6IFwiI0VERjlGMlwiLFxyXG4gIGJvcmRlcjogXCIjZTdlOWVkXCIsXHJcbiAgc2hhZG93OiByZ2JhKGRlZmF1bHRDb2xvcnMuZGFyaywgMC4xNSksXHJcbiAgaGVhZGluZzogZGVmYXVsdENvbG9ycy5kYXJrLFxyXG4gIHRleHQ6IHJnYmEoZGVmYXVsdENvbG9ycy5kYXJrLCAwLjcpLFxyXG4gIHdhcm5pbmc6IGRlZmF1bHRDb2xvcnMueWVsbG93LFxyXG4gIHN1Y2Nlc3M6IGRlZmF1bHRDb2xvcnMuZ3JlZW4sXHJcbiAgaW5mbzogZGVmYXVsdENvbG9ycy5pbmZvLFxyXG5cclxuICBtb2Rlczoge1xyXG4gICAgZGFyazoge1xyXG4gICAgICBwcmltYXJ5OiBkZWZhdWx0Q29sb3JzLnByaW1hcnksXHJcbiAgICAgIHByaW1hcnlIb3ZlcjogZGVmYXVsdENvbG9ycy5wcmltYXJ5SG92ZXIsXHJcbiAgICAgIHNlY29uZGFyeTogZGVmYXVsdENvbG9ycy5zZWNvbmRhcnksXHJcbiAgICAgIGxpZ2h0OiBkZWZhdWx0Q29sb3JzLmxpZ2h0LFxyXG4gICAgICBsaWdodFNoYWRlOiByZ2JhKGRlZmF1bHRDb2xvcnMubGlnaHQsIDAuNyksXHJcbiAgICAgIGRhcms6IGRlZmF1bHRDb2xvcnMuZGFyayxcclxuICAgICAgZGFya1NoYWRlOiByZ2JhKGRlZmF1bHRDb2xvcnMuZGFyaywgMC43KSxcclxuICAgICAgYXNoOiBkZWZhdWx0Q29sb3JzLmFzaCxcclxuICAgICAgYmc6IGRlZmF1bHRDb2xvcnMubGlnaHQsXHJcbiAgICAgIGJnMjogXCIjZjRmN2ZhXCIsXHJcbiAgICAgIGJnMzogXCIjZjhmOGY4XCIsXHJcbiAgICAgIGJnNDogXCIjZmRmZGZmXCIsXHJcbiAgICAgIGJnNTogXCIjZWNmMmY3XCIsXHJcbiAgICAgIGJnNjogXCIjZmZmXCIsXHJcbiAgICAgIGJnNzogXCIjRURGOUYyXCIsXHJcbiAgICAgIGJvcmRlcjogXCIjZTdlOWVkXCIsXHJcbiAgICAgIHNoYWRvdzogcmdiYShkZWZhdWx0Q29sb3JzLmRhcmssIDAuMTUpLFxyXG4gICAgICBoZWFkaW5nOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgICAgIHRleHQ6IHJnYmEoZGVmYXVsdENvbG9ycy5kYXJrLCAwLjcpLFxyXG4gICAgICB3YXJuaW5nOiBkZWZhdWx0Q29sb3JzLnllbGxvdyxcclxuICAgICAgc3VjY2VzczogZGVmYXVsdENvbG9ycy5ncmVlbixcclxuICAgICAgaW5mbzogZGVmYXVsdENvbG9ycy5pbmZvLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgdGhlbWUgPSB7XHJcbiAgaW5pdGlhbENvbG9yTW9kZU5hbWU6IFwibGlnaHRcIixcclxuICBjb2xvcnM6IGNvbG9ycyxcclxuICBzcGFjZTogW1xyXG4gICAgMCxcclxuICAgIDQsXHJcbiAgICA4LFxyXG4gICAgMTIsXHJcbiAgICAxNixcclxuICAgIDIwLFxyXG4gICAgMjQsXHJcbiAgICAyOCxcclxuICAgIDMyLFxyXG4gICAgMzYsXHJcbiAgICA0MCxcclxuICAgIDQ4LFxyXG4gICAgNTIsXHJcbiAgICA1NixcclxuICAgIDYwLFxyXG4gICAgNjQsXHJcbiAgICA3MixcclxuICAgIDg0LFxyXG4gICAgMTAwLFxyXG4gICAgMTIwLFxyXG4gICAgMTQwLFxyXG4gIF0sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgIGAke2JyZWFrcG9pbnRzLnNtfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLm1kfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLmxnfXB4YCxcclxuICAgIGAke2JyZWFrcG9pbnRzLnhsfXB4YCxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuOHRiMXQvdXNlLXNjcm9sbC1wb3NpdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb2xpc2hlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBsYXllclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==