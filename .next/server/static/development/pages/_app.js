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
  }, "El portal de contrataci\xF3n de profesionales m\xE1s completo"), __jsx("p", {
    className: "text-hit-gray font-size-5 mb-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, "Conoc\xE9 personas ansiosas por trabajar y darte lo mejor"))), __jsx("div", {
    className: "col-xl-5 col-lg-12",
    "data-aos": "fade-left",
    "data-aos-duration": "1000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "btns d-flex justify-content-xl-end justify-content-center align-items-xl-center flex-wrap h-100  mx-n4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 39,
      columnNumber: 19
    }
  }, "Iniciar sesi\xF3n"), __jsx("a", {
    className: "btn btn-green btn-h-60 btn-xl mx-4 mt-6 text-uppercase",
    href: "/#",
    onClick: e => {
      e.preventDefault();
      gContext.toggleSignUpModal();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, "Registrarse")))))), __jsx("div", {
    className: "container  pt-12 pt-lg-19 pb-10 pb-lg-19",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-4 col-sm-6 mb-lg-0 mb-9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    white: true,
    className: "footer-logo mb-14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "media mb-11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _assets_image_l1_png_message_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "align-self-center mr-3",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "media-body pl-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "mb-0 font-size-4 text-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }, "Contactenos:"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, __jsx("a", {
    className: "mb-0 font-size-4 font-weight-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "soporte@pro.net")))), __jsx("div", {
    className: "social-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "pl-0 list-unstyled d-flex align-items-end ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "d-flex flex-column justify-content-center px-3 mr-3 font-size-4 heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, "Seguinos en:"), __jsx("li", {
    className: "d-flex flex-column justify-content-center px-3 mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "hover-color-primary heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fab fa-facebook-f font-size-3 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  })))), __jsx("li", {
    className: "d-flex flex-column justify-content-center px-3 mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "hover-color-primary heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fab fa-twitter font-size-3 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  })))), __jsx("li", {
    className: "d-flex flex-column justify-content-center px-3 mr-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "hover-color-primary heading-default-color",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 23
    }
  }, __jsx("i", {
    className: "fab fa-linkedin-in font-size-3 pt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }))))))), __jsx("div", {
    className: "col-lg-8 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-3 col-xs-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "footer-widget widget2 mb-md-0 mb-13",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "widget-title font-size-4 text-gray mb-md-8 mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  }, "Compa\xF1\xEDa"), __jsx("ul", {
    className: "widget-links pl-0 list-unstyled list-hover-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 27
    }
  }, "Sobre nosotros"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 27
    }
  }, "Contactanos"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 27
    }
  }, "Empleos"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 27
    }
  }, "Prensa")))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-3 col-xs-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "footer-widget widget3 mb-sm-0 mb-13",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "widget-title font-size-4 text-gray mb-md-8 mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, "Producto"), __jsx("ul", {
    className: "widget-links pl-0 list-unstyled list-hover-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 27
    }
  }, "Caracter\xEDsticas"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 27
    }
  }, "Precios"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 27
    }
  }, "Noticias"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 27
    }
  }, "Soporte")))))), __jsx("div", {
    className: "col-lg-3 col-md-6 col-sm-3 col-xs-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "footer-widget widget4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "widget-title font-size-4 text-gray mb-md-8 mb-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  }, "Legal"), __jsx("ul", {
    className: "widget-links pl-0 list-unstyled list-hover-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 27
    }
  }, "Privacidad"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 27
    }
  }, "T\xE9rminos & Condiciones"))), __jsx("li", {
    className: "mb-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 23
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 25
    }
  }, __jsx("a", {
    className: "heading-default-color font-size-4 font-weight-normal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 27
    }
  }, "Pol\xEDtica de reembolso"))))))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mYXZpY29uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtYnJhbmRzLTQwMC50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS01L3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtc29saWQtOTAwLnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ZvbnRzL2ljb24tZm9udC9mb250cy9hdmFzdGEudHRmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvaGVhZGVyLXByb2ZpbGUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvbDEvcG5nL2ZlYXR1cmUtYnJhbmQtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sMS9wbmcvbWVzc2FnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sMi9wbmcvZmVhdHVyZWQtam9iLWxvZ28tMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sMy9wbmcvcHJvLWltZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9sb2dvLW1haW4tYmxhY2sucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2UvbG9nby1tYWluLXdoaXRlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3N2Zy9oYXJ2YXJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlL3N2Zy9pY29uLWxvYWN0aW9uLXBpbi1ibGFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZS9zdmcvbWl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9CYWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0JveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL0NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9JbnB1dEdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29yZS9TcGFuLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvU3dpdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db3JlL1RpdGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dvL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9nby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbEFwcGxpY2F0aW9uL01vZGFsQXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxBcHBsaWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25Jbi9Nb2RhbFNpZ25Jbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25Jbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25VcC9Nb2RhbFNpZ25VcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFNpZ25VcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbFZpZGVvL01vZGFsVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxWaWRlby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXN0ZWRNZW51L05lc3RlZE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmVzdGVkTWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9PZmZjYW52YXMvT2ZmY2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL09mZmNhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlU2lkZWJhci9Qcm9maWxlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlU2lkZWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyRGFzaGJvYXJkL1NpZGViYXJEYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhckRhc2hib2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dC9HbG9iYWxDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VXaW5kb3dTaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2h0dHAtY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hZGREYXlzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9icmVha3BvaW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2xvYmFsU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90aGVtZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbjh0YjF0L3VzZS1zY3JvbGwtcG9zaXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9saXNoZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBsYXllclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNlbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLXN5c3RlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbInVybCIsIm9yaWdpbiIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImhyZWYiLCJhcyIsInJlc3VsdCIsImZvcm1hdEZ1bmMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJvYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImdldE9ic2VydmVyIiwiY29uc29sZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0VXJsIiwiYXNIcmVmIiwiZSIsIm5vZGVOYW1lIiwidGFyZ2V0IiwiaXNMb2NhbCIsInNjcm9sbCIsIlJvdXRlciIsInNoYWxsb3ciLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJSZWFjdCIsIndhcm4iLCJQcm9wVHlwZXMiLCJyZXF1aXJlIiwiZXhhY3QiLCJMaW5rIiwicmVwbGFjZSIsInBhc3NIcmVmIiwidmFsdWUiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudCIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwiZGF0YSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJlc29sdmUiLCJtZXRob2QiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsIm1pc3NpbmdQYXJhbXMiLCJwYXJhbSIsInJlamVjdCIsImFzUGF0aG5hbWUiLCJyb3V0ZUluZm8iLCJlcnJvciIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiY2FuY2VsbGVkIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwiZXNjYXBlZFJvdXRlIiwiZXNjYXBlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiaXNPcHRpb25hbCIsIiQxIiwiaXNDYXRjaEFsbCIsInBvcyIsInJlcGVhdCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUGFyYWdyYXBoIiwic3R5bGVkIiwiYSIsImNvbG9yIiwic3BhY2UiLCJ0eXBvZ3JhcGh5Iiwic2hhZG93IiwiQSIsIkJhZGdlU29saWQiLCJzcGFuIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImZsZXhib3giLCJsYXlvdXQiLCJCYWRnZSIsImJnIiwicmVzdCIsIkJveCIsImRpdiIsImdyaWQiLCJwb3NpdGlvbiIsIkJ1dHRvblNvbGlkIiwiYnV0dG9uIiwidGhlbWUiLCJyZ2JhIiwiY29sb3JzIiwiZGFya2VuIiwiZGVzYXR1cmF0ZSIsImRldmljZSIsIm1kIiwiQnV0dG9uIiwidmFyaWFudCIsIkNoZWNrU3R5bGVkIiwibGFiZWwiLCJzZWNvbmRhcnkiLCJDaGVjayIsIlRleHQiLCJ0ZXh0IiwiQ2hlY2tib3giLCJ1SUQiLCJ1bmlxdWVJZCIsIklucHV0U29saWQiLCJpbnB1dCIsImZvY3VzQ29sb3IiLCJJbnB1dEFuaW1hdGlvbiIsImxpZ2h0IiwiZGFyayIsImRhcmtTaGFkZSIsIklucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY3NzIiwiSW5wdXRHcm91cFN0eWxlZCIsIkljb24iLCJJbnB1dEdyb3VwIiwiaWNvbiIsIkxpc3QiLCJ1bCIsIlNlY3Rpb24iLCJkZWZhdWx0T3B0aW9ucyIsImdldEN1c3RvbVN0eWxlcyIsImFjY2VudENvbG9yIiwiaW5kaWNhdG9yIiwiZHJvcGRvd25JbmRpY2F0b3IiLCJkaXNwbGF5IiwiaW5kaWNhdG9yU2VwYXJhdG9yIiwib3B0aW9uIiwicHJvdmlkZWQiLCJzdGF0ZSIsImlzU2VsZWN0ZWQiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb250cm9sIiwibWVudUlzT3BlbiIsImlzRm9jdXNlZCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJ3aWR0aCIsImhlaWdodCIsIm91dGxpbmUiLCJib3hTaGFkb3ciLCJTZWxlY3RTdHlsZWQiLCJ3aXRoVGhlbWUiLCJTcGFuU3R5bGVkIiwiU3BhbiIsIlN3aXRjaFN0eWxlZCIsImFjdGl2ZSIsIlJvdW5kIiwiU3dpdGNoIiwic2V0QWN0aXZlIiwidXNlU3RhdGUiLCJoYW5kbGVTd2l0Y2giLCJQYXJhZ3JhcGhMYXJnZSIsIlBhcmFncmFwaFNtYWxsIiwiVGV4dFJlbmRlciIsIlNlY3Rpb25UaXRsZSIsImgyIiwieGwiLCJIZXJvVGl0bGUiLCJoMSIsIlByZVRpdGxlIiwiaDQiLCJDYXJkVGl0bGUiLCJoMyIsIlRpdGxlIiwiVGl0bGVTdHlsZWQiLCJGb290ZXIiLCJnQ29udGV4dCIsInVzZUNvbnRleHQiLCJHbG9iYWxDb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVTaWduSW5Nb2RhbCIsInRvZ2dsZVNpZ25VcE1vZGFsIiwiaW1nTSIsIlNpdGVIZWFkZXIiLCJoZWFkZXIiLCJsZyIsIlRvZ2dsZUJ1dHRvbiIsImxpZ2h0U2hhZGUiLCJoZWFkaW5nIiwiSGVhZGVyIiwic2hvd1Njcm9sbGluZyIsInNldFNob3dTY3JvbGxpbmciLCJzaG93UmV2ZWFsIiwic2V0U2hvd1JldmVhbCIsInNpemUiLCJ1c2VXaW5kb3dTaXplIiwidXNlU2Nyb2xsUG9zaXRpb24iLCJwcmV2UG9zIiwiY3VyclBvcyIsInkiLCJiZ0NsYXNzIiwiYWxpZ24iLCJyZXZlYWwiLCJpc0ZsdWlkIiwiaW1nUCIsInZpc2libGVPZmZDYW52YXMiLCJ0b2dnbGVPZmZDYW52YXMiLCJtZW51SXRlbXMiLCJpdGVtcyIsImlzRXh0ZXJuYWwiLCJMb2FkZXIiLCJtb2RlcyIsImdldFRoZW1lIiwibW9kZSIsIm1lcmdlIiwiYmFzZVRoZW1lIiwiTGF5b3V0IiwicGFnZUNvbnRleHQiLCJ2aXNpYmxlTG9hZGVyIiwic2V0VmlzaWJsZUxvYWRlciIsInVzZUVmZmVjdCIsIkFPUyIsImluaXQiLCJvbmNlIiwiZWxlUmVmIiwidXNlUmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlT2ZmQ2FudmFzIiwidGhlbWVEYXJrIiwiaW1nRmF2aWNvbiIsImhlYWRlckRhcmsiLCJmb290ZXJEYXJrIiwiTG9nbyIsIndoaXRlIiwiY2xhc3NOYW1lIiwiaW1nTDFMb2dvV2hpdGUiLCJpbWdMMUxvZ28iLCJNb2RhbFN0eWxlZCIsIk1vZGFsIiwiTW9kYWxTaWduSW4iLCJoYW5kbGVDbG9zZSIsInRvZ2dsZUFwcGxpY2F0aW9uTW9kYWwiLCJhcHBsaWNhdGlvbk1vZGFsVmlzaWJsZSIsImltZ0YxIiwiaW1nTCIsImltZ0YyIiwiaW1nRjMiLCJpbWdGNCIsInNob3dQYXNzIiwic2V0U2hvd1Bhc3MiLCJzZXRTdGF0ZSIsImxvYWRpbmciLCJlbWFpbCIsInBhc3N3b3JkIiwidG9nZ2xlUGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJBdXRoU2VydmljZSIsImxvZ2luIiwiaGFuZGxlQ2hhbmdlIiwibmV3U3RhdGUiLCJsb2ciLCJpZCIsInNpZ25Jbk1vZGFsVmlzaWJsZSIsInNleG8iLCJNb2RhbFNpZ25VcCIsInNob3dQYXNzRmlyc3QiLCJzZXRTaG93UGFzc0ZpcnN0Iiwic2hvd1Bhc3NTZWNvbmQiLCJzZXRTaG93UGFzc1NlY29uZCIsImVtYWlsMiIsImxhc3ROYW1lIiwiYmlydGhEYXRlIiwic2V4Iiwic2V4TGFiZWwiLCJpc1Byb2Zlc3Npb25hbCIsInRvZ2dsZVBhc3N3b3JkRmlyc3QiLCJ0b2dnbGVQYXNzd29yZFNlY29uZCIsInRvZ2dsZUlzUHJvZmVzc2lvbmFsIiwicmVnaXN0ZXIiLCJoYW5kbGVTZWxlY3QiLCJzaWduVXBNb2RhbFZpc2libGUiLCJEaXZTdHlsZWQiLCJDbG9zZVdyYXBwZXIiLCJDbG9zZUJ1dHRvbiIsIk1vZGFsVmlkZW8iLCJzZXRMb2FkaW5nIiwidG9nZ2xlVmlkZW9Nb2RhbCIsInZpZGVvTW9kYWxWaXNpYmxlIiwiTmVzdGVkTWVudUNvbnRhaW5lciIsInByaW1hcnkiLCJkZWZhdWx0TWVudUl0ZW1zIiwiTWVudUl0ZW0iLCJkZXB0aFN0ZXAiLCJkZXB0aCIsIm9wZW4iLCJzZXRPcGVuIiwiaGFzU3ViSXRlbXMiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJzdWJJdGVtIiwiTmVzdGVkTWVudSIsIm1lbnVJdGVtIiwiaW5kZXgiLCJPdmVybGF5IiwiRHJhd2VyIiwiTG9nb0NvbnRhaW5lciIsIk9mZmNhbnZhcyIsInNob3ciLCJvbkhpZGVPZmZjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsInJlbW92ZSIsIlNpZGViYXIiLCJzaG93U2lkZWJhckRhc2hib2FyZCIsInRvZ2dsZVNpZGViYXJEYXNoYm9hcmQiLCJjcmVhdGVDb250ZXh0IiwiR2xvYmFsUHJvdmlkZXIiLCJzZXRUaGVtZURhcmsiLCJzZXRTaG93U2lkZWJhckRhc2hib2FyZCIsInNldEFwcGxpY2F0aW9uTW9kYWxWaXNpYmxlIiwic2V0U2lnbkluTW9kYWxWaXNpYmxlIiwic2V0U2lnblVwTW9kYWxWaXNpYmxlIiwic2V0VmlkZW9Nb2RhbFZpc2libGUiLCJzZXRWaXNpYmxlT2ZmQ2FudmFzIiwic2V0SGVhZGVyIiwiYnV0dG9uVGV4dCIsImZvb3RlciIsInNldEZvb3RlciIsInN0eWxlIiwidG9nZ2xlVGhlbWUiLCJpc0NsaWVudCIsImdldFNpemUiLCJ1c2VDYWxsYmFjayIsImlubmVyV2lkdGgiLCJ1bmRlZmluZWQiLCJpbm5lckhlaWdodCIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwiaGFuZGxlUmVzaXplIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIk15QXBwIiwibWF0Y2giLCJodHRwIiwicG9zdCIsInVzZXJuYW1lIiwibm9tYnJlIiwiYXBlbGxpZG8iLCJmZWNoYU5hYyIsImVzUHJvZmVzaW9uYWwiLCJwZXJzb25hIiwiZmVjaGFfbmFjaW1pZW50byIsInVzdWFyaW9fdGlwb19pZCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJhZGREYXlzIiwiZGF5cyIsImRhdGUiLCJEYXRlIiwibm93Iiwic2V0RGF0ZSIsImdldERhdGUiLCJicmVha3BvaW50cyIsInNtIiwiZ2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsImRlZmF1bHRDb2xvcnMiLCJwcmltYXJ5SG92ZXIiLCJ5ZWxsb3ciLCJhc2giLCJncmVlbiIsImluZm8iLCJiZzIiLCJiZzMiLCJiZzQiLCJiZzUiLCJiZzYiLCJiZzciLCJ3YXJuaW5nIiwiaW5pdGlhbENvbG9yTW9kZU5hbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTs7QUFDQTs7QUFFQTs7QUFLQTs7QUFDQTs7QUFFQSx1QkFBd0M7QUFDdEMsUUFBTUEsR0FBRyxHQUFHLDZCQUFaLElBQVksQ0FBWjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxnQkFBTSxXQUFOLGlCQUFNLEdBQU4sU0FBZixJQUFlLENBQWY7QUFFQSxTQUNFLENBQUNELEdBQUcsQ0FBSixRQUFjQSxHQUFHLENBQUhBLGFBQWlCQyxN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QUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHNEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQURGLENBUkYsRUFlRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHNEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixDQWZGLEVBc0JFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsc0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREYsQ0F0QkYsQ0FQRixDQURGLENBMUNGLEVBb0ZFO0FBQUssYUFBUyxFQUFDLHFDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBRyxhQUFTLEVBQUMsaURBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBTUU7QUFBSSxhQUFTLEVBQUMsb0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxL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RSxDQUNMLENBREssRUFFTCxDQUZLLEVBR0wsQ0FISyxFQUlMLEVBSkssRUFLTCxFQUxLLEVBTUwsRUFOSyxFQU9MLEVBUEssRUFRTCxFQVJLLEVBU0wsRUFUSyxFQVVMLEVBVkssRUFXTCxFQVhLLEVBWUwsRUFaSyxFQWFMLEVBYkssRUFjTCxFQWRLLEVBZUwsRUFmSyxFQWdCTCxFQWhCSyxFQWlCTCxFQWpCSyxFQWtCTCxFQWxCSyxFQW1CTCxHQW5CSyxFQW9CTCxHQXBCSyxFQXFCTCxHQXJCSyxDQUhLO0FBMEJacVMsYUFBVyxFQUFFLENBQ1YsR0FBRUEsd0RBQVcsQ0FBQ0MsRUFBRyxJQURQLEVBRVYsR0FBRUQsd0RBQVcsQ0FBQzVRLEVBQUcsSUFGUCxFQUdWLEdBQUU0USx3REFBVyxDQUFDckwsRUFBRyxJQUhQLEVBSVYsR0FBRXFMLHdEQUFXLENBQUN4TSxFQUFHLElBSlA7QUExQkQsQ0FBZDtBQWtDZTFFLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckdBLHdEOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcbiAgfVxuXG4gIGNsZWFuVXBMaXN0ZW5lcnMgPSAoKSA9PiB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG4gIH1cblxuICBnZXRQYXRocygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgY29uc3QgeyBocmVmOiBwYXJzZWRIcmVmLCBhczogcGFyc2VkQXMgfSA9IHRoaXMuZm9ybWF0VXJscyhcbiAgICAgIHRoaXMucHJvcHMuaHJlZixcbiAgICAgIHRoaXMucHJvcHMuYXNcbiAgICApXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkSHJlZilcbiAgICByZXR1cm4gW3Jlc29sdmVkSHJlZiwgcGFyc2VkQXMgPyByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRBcykgOiByZXNvbHZlZEhyZWZdXG4gIH1cblxuICBoYW5kbGVSZWYocmVmOiBFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiByZWYgJiYgcmVmLnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycygpXG5cbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICAgIHByZWZldGNoZWRbXG4gICAgICAgICAgdGhpcy5nZXRQYXRocygpLmpvaW4oXG4gICAgICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAgICAgJyUnXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMocmVmLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcmVmZXRjaCgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4gIC8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxuICBmb3JtYXRVcmxzID0gbWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsIGFzSHJlZikgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBocmVmOiBhZGRCYXNlUGF0aChmb3JtYXRVcmwoaHJlZikpLFxuICAgICAgYXM6IGFzSHJlZiA/IGFkZEJhc2VQYXRoKGZvcm1hdFVybChhc0hyZWYpKSA6IGFzSHJlZixcbiAgICB9XG4gIH0pXG5cbiAgbGlua0NsaWNrZWQgPSAoZTogUmVhY3QuTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUsIHRhcmdldCB9ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gICAgaWYgKFxuICAgICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICAgKCh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgICAgICBlLm1ldGFLZXkgfHxcbiAgICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICAgIGUuc2hpZnRLZXkgfHxcbiAgICAgICAgKGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpXG4gICAgKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcblxuICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uXG4gICAgaHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIGhyZWYpXG4gICAgYXMgPSBhcyA/IHJlc29sdmUocGF0aG5hbWUsIGFzKSA6IGhyZWZcblxuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gICAgbGV0IHsgc2Nyb2xsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gICAgfVxuXG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgUm91dGVyW3RoaXMucHJvcHMucmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICAgIHNoYWxsb3c6IHRoaXMucHJvcHMuc2hhbGxvdyxcbiAgICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHByZWZldGNoKG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucCB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5nZXRQYXRocygpXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAgIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICAgIFJvdXRlci5wcmVmZXRjaChwYXRoc1svKiBocmVmICovIDBdLCBwYXRoc1svKiBhc1BhdGggKi8gMV0sIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgICAgICB0aHJvdyBlcnJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgICBwcmVmZXRjaGVkW1xuICAgICAgcGF0aHMuam9pbihcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgJyUnXG4gICAgICApXG4gICAgXSA9IHRydWVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG4gICAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgICB9XG5cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICBjb25zdCBwcm9wczoge1xuICAgICAgb25Nb3VzZUVudGVyOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIGhyZWY/OiBzdHJpbmdcbiAgICAgIHJlZj86IGFueVxuICAgIH0gPSB7XG4gICAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVmKGVsKVxuXG4gICAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdXNlRW50ZXI6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVmZXRjaCh7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgICB9LFxuICAgICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgICB9XG4gICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgdGhpcy5saW5rQ2xpY2tlZChlKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH1cblxuICAgIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMucGFzc0hyZWYgfHxcbiAgICAgIChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKVxuICAgICkge1xuICAgICAgcHJvcHMuaHJlZiA9IGFzIHx8IGhyZWZcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5ocmVmICYmXG4gICAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBfX05FWFRfREFUQV9fLm5leHRFeHBvcnRcbiAgICAgICkge1xuICAgICAgICBwcm9wcy5ocmVmID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZilcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3Qgd2FybiA9IGV4ZWNPbmNlKGNvbnNvbGUuZXJyb3IpXG5cbiAgLy8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG4gIGNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKVxuICBjb25zdCBleGFjdCA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKVxuICAvLyBAdHMtaWdub3JlIHRoZSBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQsIHdoZW4gZGVjbGFyaW5nIGl0IG9uIHRoZSBjbGFzcyBpdCBvdXRwdXRzIGFuIGV4dHJhIGJpdCBvZiBjb2RlIHdoaWNoIGlzIG5vdCBuZWVkZWQuXG4gIExpbmsucHJvcFR5cGVzID0gZXhhY3Qoe1xuICAgIGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIGFzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcHJlZmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcGxhY2U6IFByb3BUeXBlcy5ib29sLFxuICAgIHNoYWxsb3c6IFByb3BUeXBlcy5ib29sLFxuICAgIHBhc3NIcmVmOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgKHByb3BzOiBhbnksIHByb3BOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBgV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPmBcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfSxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpID09PSAwXG4gICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgIDogcGF0aFxufVxuXG5mdW5jdGlvbiB0b1JvdXRlKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nXG59XG5cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoOiBzdHJpbmcpID0+XG4gIHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoXG4gIHBhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSB8IG51bGwsXG4gIGlzU2VydmVyUmVuZGVyOiBib29sZWFuLFxuICBjYj86ICguLi5hcmdzOiBhbnkpID0+IGFueVxuKSB7XG4gIGxldCBhdHRlbXB0cyA9IGlzU2VydmVyUmVuZGVyID8gMyA6IDFcbiAgZnVuY3Rpb24gZ2V0UmVzcG9uc2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZmV0Y2goXG4gICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gXG4gICAgICAgICksXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgfVxuICAgICkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAvLyBsb29wLlxuICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXNcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKFxuICAgICAgZS5zdGF0ZSAmJlxuICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgIHBhcnNlKGUuc3RhdGUudXJsKS5wYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZVxuICAgICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IGUuc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICAgIC8vIElmIHNoYWxsb3cgaXMgdHJ1ZSBhbmQgdGhlIHJvdXRlIGV4aXN0cyBpbiB0aGUgcm91dGVyIGNhY2hlIHdlIHJldXNlIHRoZSBwcmV2aW91cyByZXN1bHRcbiAgICAgIHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBzaGFsbG93KS50aGVuKFxuICAgICAgICAocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKVxuICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgdXJsOiBVcmxPYmplY3QsXG4gIG9wdGlvbnM/OiBVUkxGb3JtYXRPcHRpb25zXG4pOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCNEFBQUFlQ0FZQUFBQTdNSzZpQUFBQUFYTlNSMElBcnM0YzZRQUFBRGhsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUFxQUNBQVFBQUFBQkFBQUFIcUFEQUFRQUFBQUJBQUFBSGdBQUFBRHBpUlUvQUFBQk5VbEVRVlJJRFdOazJGRHluMkVBQU5NQTJBbTJjdFJpdW9YOHlBdHFGa3JDbHBPSmhhRkowd051eElzZm54aDY3eDZDOC9FeEtMS1lnNW1Wb1VURkhtNys1VS9QaWJaNDVNWHhxSS9oQ1lYV2pOR2dwblVJdzgwbnFnQkprak5sME9RVmgydWErZUE0dzUydmJ4bTRtZG5nWWlER2x6Ky9VUGo0T0VSWnJNQWxoRkpDc1RFeE14UmYyY3dRTHEyUFl2YStOM2RRK1BnNFJGbDg0TTFkaGxwMUY3ZzVlVW8yRENueVpneGNhRDdlOXZJNlhBMGhCbEdwK3NqYit3eXJuMTFFTVF2WjBuOE0vOEVoY096ZFF4UTErRGhFK2ZqWC83OE00YWVYTUZ4VWU4NFFMMmZDb01JdHpNQUloSi8rL0dBNDgrRUp3NlM3UnhnMnZyaUt6eDRNT1VaeVdwbThMT3dNWW13OERQZSt2UVg2bFR4QWxJL1JqZjc4NXljRENGTUNpSXBqU2l6QXBYZlVZbHdoUTNYeGtSZlVBTGRjVGlIRjhVbUVBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvZm9udHMvZmEtYnJhbmRzLTQwMC1lZDJiOGJmMTE3MTYwNDY2YmE2MjIwYThmMWRhNTRhNC50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvZm9udHMvZmEtcmVndWxhci00MDAtNTkyMTUwMzJhNDM5NzUwN2I4MGU1NjI1ZGMzMjNkZTMudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvY2h1bmtzL2ZvbnRzL2ZhLXNvbGlkLTkwMC1hY2Y1MGY1OTgwMmYyMGQ4YjQ1MjIwZWFhZTUzMmExYy50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9jaHVua3MvZm9udHMvYXZhc3RhLTQwYTEwODdlYzBhOTIwODk1ZDA0Zjc3OTFmNjkyZTVlLnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNnQUFBQW9DQVlBQUFDTS9yaHRBQUFBQVhOU1IwSUIyY2tzZndBQURjOUpSRUZVZUp5dG1IbHdIRmVkeDcvZGM4LzAzRE9hR2NteUxsK3k1VVBHTVdSTndDNVNEZ0cyTmlSVlZPMGZnRUt4N01FZkZsbUtLcWhpRVZVTFlXc1hiR055RzJ3blZBR0JsSjNFMlRoSmtaZ1lZenR5SXN1eVpjbU9MSTJsYUhSTGMwL2YvUHFZMWhpYkkwQ1gzcWluai9jKzczZDgzKzhOaTcveUVLNCt1VVVZT3JoSEhENTRsRnFmT1B5VXFqVmg2RWxxVDJpdFR4eDY0aWg5MzZNOSs5ZU93NzZmaDh0WEhtc21pRzlKd3dkSEdaWHBZeGgxSDEyK2o5b1dWZStLQWNNdzFjZnBtbmFQbmxIVVBtSG84Vkh4eWhQZjB2cjR1d09xbzRkQ1pKRzlOc1kycXFwS2o2cXF6ZFJBZnpBL0NNMzREd1B6RDN2US9wcnBqUjRibUZHQzNhdjI3UTM5WFFENTRTZnVFM2xobElic05nQVlFOE1BV21aVXE1ZDBYQVBUK0s4UHc5UkFxK2dXUFo1UmZ2RFIrLzRtUUcybWpLb2VwZE9RZXN0ZEJyTEVvRnlVd1NncXBIUHZnZStid3RKdlJ5RFBGTXlKVkFHdFY2cUFJTGVINk90UllmRFJ2ZThiVU8wamwxNTUvQkFVc3BwbG5ac1JOZXZrUlJZM2xtUklCNjdnK2pkZnhwa0huOEh6WHpxRXdYOThCdm1YTDJzVVppTkxqMmR1QzBDOWR2T1hmM1RvZlFHS2JuNHZ2ZG1sejdpV2l5QVZUeXVFMkQwUUluZGpnWmNRK1orM01mcXJNOGpQbDJCblhkZ1FiTVZTV2Nic045NkEwaitMeXRPbm9MNTBIRXRmZlJMelg5d0gvcFZlMUlZSFZKa2c1QzdoMHQ3YlF0NENLQXcrcm1WbTF5MXhEZ2VrOEQxUXd0dGhjNFZoa3oxb2VuZ01iSG9KMllVWmhHeCtlQmtXSzJOMVNEWTJZMG5LUTMxeEJ2Q29FRjkrRTg3WlBDS1pLYmllZVFFWWVvdmdGQnJDYUxwM0ZMVkxHUGpCdmo4SnFBY3RnejFXdEdzdk0wWUhzbk1kNEF6Q3JpZ0VKd0UydXVXd0liaDFQWXAyQjBTSlJ5QVNnYWRrQnlzdVFyRnpRRzhaWmNHTmhYRWJuQndISWNoQmtpazRmdlVTbUdJT0RGbVAwZFZBMWUxSkNyR0h2L2gvOTkwV1VFdDdobVVQTGZ0VXRVSlBVYjNnblExUWhSSmtSWVlzS3hBTFpiQ0NCSDUwSEZHbkg5TlNGc2lTTll1VEJKRkROc21qZDZZZm1jZGVoVHJIZzQwS0VHVVpxb09HOUFmQkZMSlFGUjFLYnpYSG9Wb0pzZ0JGbDd1SG5nelZ3bFdEbkdFS1lQazB6bHg2Q1UrOWRnREZ4V25JaklxcGVoSFNkQmFKK2hZNDdFQ3hPQWMrL3g3bUs4QW0xMmJZQWc1Y1hoREIrVnpnSjNoVUpuSlFjd1FwVXJjWGI5QVlzbTY5NnBpbVJvVkV1OXh6RTZDdTdycHJhdzlEOHpRWHNLcUV5Y3daUEhSMEwzN1JmeHg4WlE2bDNEaEd1Rm44MUZmQ2xKZXNFS2hISmg1SEpsaUhhTU5hT0J1Q0dNak9ZWHQ5QnhSYkhQYjJOaFNjWGdoaEh3b1RJdVE3MWkrSEVaUmxHV1UwajJGUHVlL2haZ3VRVlpTdVpTN1ZVaFFqUm1pV0ZIZEpKNCtPMGpTRStRVzhmdllFSHZuNUQvREwzUC9qSU5PTEw4K2NSWm90WUFYcmh4S0pJbEwwSVhkdEREdWNyZnBvVTJJQlQxK1lSYkRrZ0pBdTR2cWxNb1NLWU1TZGlVa0QxUmlHb0ZsNzE3S0xHZWJ6c0lMVmVHZzVnSTBZOFhnNHRBU1RDSkZMRDc3d1V6ejNZaThXQzI0VVNHcEdwQksrYjAvakovNDBQS3ZEZUdQbU4zZzljeG5wN0JoR0Z5L0RreXJpYm04UnZma0tMcFpVcklpNzRlQmNOQXlCVUV4RFVaYTFscTR4aXBiZDh1ZDFRT0h5STFxbDBXeWd5VFZ3U2syTUdPZGYrTlM5cU9RbHpNOUxLTkQxTjk0cWcveUdMU0VmSHV4STRJR1B0eUMzS2d2Mm4xTElidkhndGNBMDdJRThGcVp0T0oxM0lzeElXT3QzWVhBaWkxeFJTeExaTUlEWlAvU21HSGFsOVY3bys4NFdWbUhVbll3WmIwYVRUVlBYckV2YVRPbmxobGdjSzFmWk1VOGFZMmR0VU9KT3JGbk5ZVk45QUxMYkEwY3dndVoxN2RpNGRUTjI3TzdFN28rdWhEdkNrb2hYMEJ6bDhaclhobEdhNEVBRGNPRGtFVXhSc2lrVTM2cmVaRG9uWU1nR01EWDYzTWtTeGs3Vmd0RThicS9tc1dFOXkvVUtMazVQb3hSY2cyQ1U5SXlYRVMwQk8rcjllT0NqSGZqWTdudFE4Y1NoVXBLRTFteUc0RTlnSVJ4SFg5TUt2SDVYRk1jL0xtQ3dVOEpEOVNXY2JCZVJtV0Z4NE5TakJEa0lSaUtYa2dReHBLK0c5QmlScWJDTUJxZzJWZGRMM1hwbTdPbFdnMnE1Z0FRUVoyOU13aE91UThUdGhrZFNzWXR6Z3AvaDhWL1A5dUxjaFNHNDdVNGdQd1VwdndDdjI0RU4vN0FMR3duY1pvdmh2WE1SM0htL0Y0c2VPeFpvWWkydFBEcFhKL0g4eFJNVWdpSU5aOERwb0pLa2o4ZUtVaE5MTUZzTTU5SUYxV2hXN0ttbUR1cUJMT096SGF2eG1iWVlmdmFsRCtPQk5qKzJyNHBoTzMxLzhLNDFhRzl2cHhWamhIUndFVGY2VHVIR3lIV2NPOXVMMHZRVXRyZEdzTkx0eGVGSEJMZzRPMFl5SGtnTWh4SmZRVU9Ldy9EQ0dUUHVxbU1ieVVNTVcxZ2phNHlrdUZVSHphWVlybmJSOHJaN1pSeFJyd3ZiNm4xSStoMW9UY1d4TnVVRE8za2ViSDRDL093NGdhWWg4a1Y0QXlFY2YrY3F6bDRhaDU4bFA1UnNtQ3U3MGRMRUloeFBZbkFZR0xpYXhYaGhGTElvNkZiVXMxcFBHbU5zZGprUnF2R21XS3VkYWhXbk1MVEp6TG9LblVwMkZqNDdnM0RUUm9TbzJSUWVUVzF0Y0JNVUxkRlVOSGpSb0dUd2lmWXdOcXprOUFHTG9nb3ZKVVFxUXVBbnIyTDE2aFlFL1dUQjRZS1JLSkJyeGpmaW5yWGlyR3BlTTR1cW1RdHJyVnl1cGxtdDdJcjVVU3BVTUhXdEgzUFh6bVBzeGl5bXFHTEo4WFlFZ241SUNsbTN2UlAxc1JnU2lRUm81YVo2aUdxTWlvcmZuRi9DeUVnQUN4TTJmSERGZXV4YTl5R3dMR3R0SDZDNzJSaWJ4bEw2amJTV3pUaGdMSHBkM2EyWGxyUGFUdDlia3dGTUw0a1l2RDZKcWNsSnBKSXhoRmUwd1VhVnpmaFVGajRQbFdlbFBKd3VIMmFtcUM2a3BIcG9SeU4yci9JakVYVkJkQkpjYXlNMjFXM0Ntcm8ySTNzdDlWQU04VmJrZmxabGxMSGFDa1l2ci9RNmpURmdMWGViWnFlT0ZISzFtd0FDcEl1UlpBdHNiVHZoakhkQXRRV3dWSkRoNWJ5WW0zNFBJOE1EdVBIdUlHNWtscWdTNGhIMEFkLzQzRlo4N0FOSi9PZXVObXhyaUZ0Sm9ZdTJvaXdMdDk3VU1RcGRuSVM1WlVRVmlyNVh0VzlaZ3N5YXpjZ3VoR0krRlBreWZENTZYaENRMkg0djJ1Ny9OMnk3LzR0STd2Z00zcDJoaE1pSmVIY3loNGxjQlNtU3BKYk9PcmhjYnZ6cm5Xdnh6eDlvb1lrcWVsT3JXbXYyWGExd0tLQk9zcVF6SjJzaHFzdWFVYWdxZWdhcnRVbGtQaE9rcW9SMVVUMVlLY0E3UHdqWFlnYUYzdE9ZL2Qxdk1UblFqN2FHQ0dKMWRaZ3RTdWpZRk1JblA3c09EVzBSOHBxTWtKT0tXZ2JtY2xwdFp2K3liSTJseUFUbzNQQzFDd1NSTnBLaXVtaWoxcStHY05jbWszbkQ1bEFwVWJLMEJWQXg4czRKakEzL0RpTkRwMUNldTRvS3ErRHRTeU1ZV3l4VHRuckIrWjJrdmFLeHRKbHFVRk1EV2tkMWQwcDMwOXlPLzcxUWxabkR5dytxZW5Kb00ySnVTaEJaNzlnUWJtUEc1YktDekd3V0huOElkUW1xQTcwTS9CeTk1L0ZnWUNpTkt4a3FDaVFCeVlUZmlDL2RwWklldzlaQ2NET2ZHZmY2MkljQnM5eWlPRGhjelZ4RFltUjl5ZEdGMDFyTWF6c3pnRjAyR3liblJadzRkdzNwaVVtcWNtWnhmU3FQTTROVDZCdWxvcGJXNjhhSUN6YVNFTVZLQW5QQzFkaXo0bHl4TWxpTFMwbVE5bG1BbnM2dmo5R04vYnJ1YVZDeUFRVVQxckNlMFJsVERRTk5tQ1FaSGFzU0dKOHY0OENMNS9HZFg1ekdzK2NuY1oyMm9BRzNFNTBwMGtQU3ZUZFBaekNSemtJVVJkMEx1aFhON0dYVjZoaXdOay9rb3YzaFhmdVdMRUR0Y0NsaUQ2MDNXV282SEtNQlZqdFNUQmZyRXpCbVdjaVZVQ0JKU1NXajJMWTZnUzBOWVd4dGpHRmRJb2dOcVNCMnJrOGdRWHNTaWZZZjF3ZUt1SGhxQnI5K2RoaG5YN21HOGVzemRKMm5KSkJxc2xnMmRVTEpLaExiVStXeUFKbk9uaVZabGJ0VXZXQlZsbVhGZXRuSUxwa3FqYXY5WTNqMWwyK0RGeGs0blZRVHRpU3h2dEdQalMxaGREUnd1TE85RHExTmNYaXAvZ3VRSUsrTWU3QjViUXFiMWpXRGd4dkRweWZ4NnMvNk1Qak9LQ2tVcjR1eW9ZV1N0bXZzcWxydkprRHQ4RzM3NzJNcXBQMUdISmhKVVpVWk9tWW1adkhtMGJPWXVESURsOE9EYU1pRFVybU1ZSUJES2hGQVBPeENmZHhINTJHNEtGRmM1T1ltS3U4NXJ3TmNLSXg0UXhOYTE2eEgrL3BWYUlpRU1kNC9pK09Iem1EZ3JXdVFlUTFVM2gvYjlkaXhXcVpiZmxud2J2dGVONW4rU0cwUUwwNHZvdmVWUGx6ODlTV0VmTFJVYVJrYkRWRUw2RzdTbm5OVGpXaXpNUWlGT1JKdkx3VjVDVjZmQTJ2WEpsSGZHSWN2a29BekVJV1RNdDdsOHBLT2h0RkkxMU1oRHVtM0ovSENqMDhkaWQ3OVZQY2Y4dHoydHhtaEluVVhsbkpITHJ6Wmo1ZWVPb0V6ejUyRHVGQkdNbFVITGhpRng4dnA5YVBmSDBBaWxkSi90QXhIWXdUR3dXNjNVM3lKOEhFQk5EWTFJVXlXOG5nOTRHblZTVjhkd3NoQUh5cVZNdHkrSU8zZm8wZzAxS09wT1hua1g1NGI2Ym9keTIwQnRSaEkzUHRrMTh4Z1puL0E0MFcwTGdLSHc0RmluaElqbjBVK24wTWc0TmNodlA0Z3JjdGV1TDArUk9MMUpNaGh2UTdrUXZTTzI0ZEtxWUxNMkRpdVhieE1iaXdqdnFJSjBjWTE4Q2Nhd2NVYjRBMG05dS9hZStxMmNIOFVzSHJjLy9UbGJpNFUvVFJaTFd0eitpRElETUdWd1JjTFZCQktFS2g2THMxTmtTcFFxaklzN09SbWhrVGVicU45ald6RWJ6UzVFbXMzMzRGMVcrOUFYV01MVmRSQmJjOUx6WkZWR2Vlbk4zNzE4QzF1L1lzQnRlTWpENzk2ek0zWW0rME94MzZYeTBQVzhpRVFTY0xOUldFbmFCdnRRNXcwcUVMQVBGbFhxNEZWSjRIU2MrNXdBdTVnbkdJdkJydUwwOEUwV1JGRllYK0I1WnZYLzhlK1kzOXUvTC9vTityT25tTkxkMzMzbFc2SHk5UGlDd1MrN1F2RzA5NWdEQzRLZUR1NVVheFVLRzRybEJnOEZRRXNaS0ZDd01iS29aQVFxcVN0Sk01cFZXVytMWlVxTFJ1Ky9NUHV6Z2VYcGVSdkJxd2V1NzUzWW14SHp3czlteDg2Mk13WDg1MUNNZnVWMHRMYzgwS2wzSytMcnFwNVh0SzFVcExLL1dJcDk3eFVMbnhGTEJRNzIvOTlYL1BHUFkvMmRINzk4Tmo3R2ZQM3E1WkhMZGdQUmJNQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkhDQVlBQUFDNmNqRWhBQUFBQVhOU1IwSUIyY2tzZndBQUNSTkpSRUZVZUp6dG5IdFFVMWNleC8xcmk5TjFuTjN0N003dTdCLzlvLy90OUkvKzRjelNoelB0MXI1a0s0cTZxSjBWaWdWUlZLellzbEtCY2F1Z1MxMGZ0Vm0zZ3E2MURLbWlRQXMra0FJK1dpSGg0VUlVRVNpSWdBbnZKRGZ2NUx2bjNIc1RGUkk0TjdsSmNKYnZ6Rzh1eVpDYmV6NzV2YzY1anpselJBRllSQ3lWV1BiL3FkR3hMNXJ6Q0pCbmlLa3hLN2NvaTJjb0dFVzRqMlFHU2tIQmRJZjdLR2FndWlrWVM3aVBZZ2JLTWlmY1J6QlROUXZHaDJiQitGQll3YmhjVHJqZ0VMYThPUjV1eWZzTzhuZTRGREl3THBjTFRqSlFtMEdQWWRVMTNEdDFERzA1R2ZqdmxuZzBybzFHM2NxM2NHUDVJdFRIdm9XbTk1ZWhaVnNpN3V6TFFxL3lPRWFhVmJDYmpPVHpMZ0lzTkFvNkdEb1FpMzRNL2QrZGdlWnZLYWhiOGdycUYwZEN0ZmhGZmx2UGI3MVpKTlR2dkFqVk8rTC9MZjBUYm1lbFlhRHFQT3htRHNGR0ZEUXc5TENOZmZmUWVYZ3Y2bU5lWTRUeHVLa21nQkxlZXdrTnNXL2pwLzhvWUJrYkp1RVdIRUN5ZzZGWnd6STJoazVGSHVxWExQUUFVVEhDWURmaVVTc1hvYmY0SzlodDhyZGlzb0toZVVSNzVUSWExa1RKREdGcXU3bHBMZlJkN1lDTTRTVWJHSWZWZ281REpHeWlxSGV3aDR0c3R1eFY5RjhxNDZ1YUhKSUZqSGxrR0MxcFNWN3lRb2lOL0NnL0hUOENoOU1SOEpnQ0JtUFdQY0ROOWF0UkYwNGdvdEVmUlpPZEJydlZGajR3ZkJrZUdjTE5wTlZoQitLQmt2a2hiQlpUd0ZBQ0F1T3dtRWtUdGc1U3ltL3dvRVJDODhsVzB0L0lBOFZ2TUxRRHZYdHdqOS81UkNVT2htN3JscjZHNXFRMXVFMmF2enM3VTNIcjQyUTByVnRKR3NHRlROQnBBOWk2WXpOc1pxTnNVUHdDUXp0T2JjMGx2enpGRGJMaHIwdlFYWEFZWTVxYnhQTXNZaGZyOUh3RFAzWGdEQmhwckVQbmtUeW8vdktHengraE5UMEZOcE84VUtna2d6R1R2S0plL2JiWXFrdUQwa2lBOUY4b2hkVnE1aHRCRmxGb1ZxTWVQWVg1VU1XOEx1NVA4TGFXanpmQXl1a2xENXBGa3NEUUVPbzRsQ3M1aE9wSUdiMTdZQThaNEhoQUxSaEhwaGd0V3hONE1LMXA2MkV6R2dMWTI5U1NBTVlGUTI4N2lmMlhKWG1MNnQyRkdEaGZJa3ZqUmFIYVNkWHBPbm1VOTZKZ2loMk15NEhSbG5Wb3kzcU9lRUFrRXh6Vm4xK0I3a3FsYk4yb1c4NGdUUndmRlRNWXUrVStkTFh6b2F1ZWl4N0Y3NkZhdW1EcThDSFdWNnFFblBPWFVJb1JqQlA2bm4zUTFVU1FpdlFVdE5VUnVILzZsMmg2N3dXNDEwMG1KbHE2Q0NXM3A0UlNUR0NjTGpzR1ZRc0lsQWdlQ2pVZHNZRUxUNk5seXg4bWhaVTY5ZzErL3ZRa2l3bU16WFNYUUhtYUFIbEtORGNjK3ZkY3RPYzhDMVhVSHozVnF2ZjBTYjRYZVpMRkJNYllseTlDaUpoc0pMUjB4SHJ5ZncxMXpBS29WN3dPT3hlOE1ob3FNWUVaYjB2eURrVU1LYmYxbGN4SHo5ZVpmdWNXazhXQmNjNEJmWkJzbkxQRFpxZExFdE1YQkNZd3crcEluMkFlZzBROGh4dXF3TVAyWHByeVM0Mkl6eG9uWmdpS3ZVK3M2Z1luRnhnN3RGZC95d1JHV3pzUERzZW9YMUI0TUNWbXhHZHlpTXN5QnNYaU00MDRWU0VUR0lkdGlPU1JueitXZEgzWlVOM3pURjhhTGpCcnM0MzR2SWh0YVdJYU1DN1l6UjNpd0gyRDBZbEplS1E1eW04b29RQVRsOFVodDhBSVdUekdhdFJNQzhaZG5VWTFxMlk0R0NPeUZXeExGQXhnV3RueXl4TUNadWNYTW9HeG16cVl3WXcwTDU3eFlMSVViRDBXVy9LdG5pZmtFWjhtaE5uZ0RacDgvZTk0UXdGbTl6RUtScFp5YllQMjJ1ODhrOGVwd0docjVzRnBIMkw2WW04cThJRHgxNmFwU3VSL0RuNHRVL0tsR2xhL3pGQ3VoYWtCTi9pdDMyRHlTMHhpTTJaa05oWWdqMWFsRTJXeU5YakFXRnV5R0VwVGxleTUwRlQ5Q3VYcVhML0JkUFZab2RMWUpadnlBc2Q3QXd1WWlxdG1zSVE3MnlTeS80Um5QdVM5aDRsQTdZVm5zZVdieFVnOXN3cWNOYmpMamhOVlhNbm9OU1JNbSsvSTB1QUpzcG03K081MzRneWJ2bjVRTXhlRjN6NlA1S0ozc2I0b0d1dVYwYWhvVVFZMFVDbWlaeEV5amhpWVFvcUc2YWllN2ZRdDgwTFZFSmxJdWp0Y3JlZ2wzZC9QUjk2NWx3Z1VBcVJvcWNlMkZxL0JLRGNVMElEWjVNS2Rick1ZUnRPQjRaQit5RUNDU01iWk5aWGgzbjVoQmE5R0NKK215dDlneCtrM0JTOTVCSXBnMFZCYzJVT0FCbjdWZ1crNStQM25ubUR6RnZvL3A4clpTaldWaE1Yd2ZtaXYvQUtEMVQvRHhmUFBZWk15eWd1UWg1Wk03S0ttbVBsQXBJcGUxVm5ieUltVmljMXVkVnFaOTg4TWhpNCtEZDNhZ1B5eUZ5YUZqaS9iV0xRYzE3dXFFRWpUNStObzBORnJRZUp1dDdkTUgwYmIvbW1BdzhGK0hKSk91R25IZTVDaVhNRUV4UjFTRzVReHFMcGRLdHNaQXhKQXVOdHJSa3F1WGxMSFcxWnI0cjJNVlJMUFhidFFxRDRxQWN4RHk3K2VCNzNaLzBVc0txZkxodXFtZGlUKzNTQUpTdkp1SS9TY1hkSjNTVDZwYjdDTTQ2T1NlQjlKZDJyYmZqWU9WVzJsTU52WnVrKzNhRlc4UGRDRWZaWHBaRDh4U0RoOENuSFo0NTR3bVE3TTJTcU81Z0pKNC9UcitwakdlOWY5OGhvUG9PSjRGS3FPUXRQZkNKUFZJRjQ2VDBOTnVIU2VubnF4MkUzbzFMV2huUFJFdXlvMlQ5ckhCOGQySVc2WGRsb3cyL2JyWWJaS0x3RCtYVkZGRHB3T0xDa0FPTlNTU0RPNHNXZ0ZNc28rUU02bE5PUmQzb0djaTl2SjZ5U1N5MWFTWmxHb2JqNC9mM0lENHZmYzh1STVuS2VoWSsxMDVRRkRaSE5Za1ZlVkVSQ1lpWW5hcjg4VnJrTENaNVdUcWhCdCtyNHFIeWNlS0MyM0JBeUd5bUFadys3enFUTEM4UWRtTko5MzFuM3hiNUozeGp4UTloWVl4SE5JL2luQXkxbGRHRFVONDFNS1Irbm5MeTZMTGVPM2lRVVppTi9WajJ5RkhnYVREWUUwbHpKY0FPM2lLOVdCcXN6QVFrS21VTXd0ejRIZXlON2hCaEdNSUp2VGltOGF2dlQ4ZXVFQTgrVzFmOEJzNDJRWmo3dzNXWkJ5MjNLL0hqdEtFMG5GQ1IyVTFET3hxR24vVHRaSmF4RHVWM0xCWkRQaVhOTUpiRDRkeXg5NG9HWGRXMDV4Zy8vWDFWem9EQU1ROHNrTXZQdkVtMFk0SGM0MEhNZUh4ZTk1VFpiK2hrd0s2WDBva0s3QnRxQmR0UldTZXlMTnBJdjlzZk43ZkY3N3FjZUxtS3VZVW9DeFVia2NleXMvd2tYTldRd2JId1Q5bUVONEY2M2c1aGE3R2UwUFduQkpjdzRuZmp5SS9aYy9RVlo1Q3RKTEU3Q2R6TUhTeXhLUVhiRUpuMTNlaVlJZkRxQzhWWW5XK3cwd2tzb25MRitFNW1MSE1OMWU3UExNamNBdkJRaHpKZUZkcHhnZUR2NTE2TzZiZlZ5ek42VDcwQ3dZSDVvRjQwT3p6NC94cnU3Wkp3NTVsMkwyR1ZXVEpUeWphdmFwWnQ2ZmF2WS9aTnFseGdyYmprTUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDVUFBQUFsQ0FNQUFBRHlRTkF4QUFBQU0xQk1WRVVBQUFELy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKzNsZUtDQUFBQUVIUlNUbE1BZ0Qvd3dHQXduMUFnRUxDUTROQndoc2hpdkFBQUFJbEpSRUZVT012bHp6c1NnekFNUmRFbi93MGswZjVYbTVrWVp5d1FXRDIzVVhPS0owVFBsL21Jdlk1MDFoWGZOcWhBYWtFcWdobzlSMVhuWnFxZGJGTDhJRlhvWERncVlpMnB0c0JUMWJLcGoxTVR5aWZvamVxOVlLNHk5cEk3VnY4cW9xZjhHcHNhSjYxOEx2L1VPS253UlJCVko5c1VwUlM5UlNHOUxBckxhbEVBbVJTS2g2WDBCV04wSEovQzhuRjBBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFZ0FBQUJJQ0FNQUFBQmlNME4xQUFBQUFYTlNSMElCMmNrc2Z3QUFBWnRRVEZSRkFBQUEvMWRlL2xwZi9sbGYvbGxmLzFWVi9WbGYvbGxmL1ZwZi8xcGUvbGxmLzFwZS9sbGcvbGxmLzJOby8zNkQvMmR0LzhQRi8vejgvLy8vLzJ0eC8rcnIvK3pzLzJ0dy8xcGcvOWZZLytmby8zdUEvMWxmLzN0Ly81S1cvL2o0LzI5MS8xdGgvNnV1LzVtZC8vTHkvMkZuLzExai82U24vNXlnLysvdy8xOWwvKy92Lyt6dC82R2svNTJoLys3dS8xNWsvNkNqLzV5Zi8rN3YvMWxnLzNwKy81YWEvMXhpLzZHbC80R0YvK1BrLzVpYy8vRHcvNGFLLy9mMy85UFYvK2ZuLzZXcC84bkwvMk5wLy9QMC80MlIvKzN1LytEaC82eXUvNy9CLzZ5di80bU4vMlZxLzY2eC83cTgvN1czLzV1ZS85VFYvMzZDLy92OC8zUjUvL3Y3LzJScC84ck0vOERDLytMai82V28vM0YyLy83Ky8vLysvL0h4LzJKby83VzQvOC9SLytibi83aTYvNHlRLzRlTC80U0kvNGFMLzR1US8yVnIvMkJtLzcyLy8yMXkvL3Y2LzJCbC8vNzkvbXR3LzlEUi85cmIvNm1zLzh2Ti8vcjYvNVNZLy9uNS85RFMvMkZtLzJwdi8vWDEvNE9JLzJKbi85bmEvMjkwLzU2aC85bmIvMjV6LzMyQy9WaGcvVnBnLzF0aC9WaGYvbGxlc09jak5RQUFBSWwwVWs1VEFFbk43LzhEaHY2RFFmMUV1T2ovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vaUlBcW5PQ0lKMFNiQUFBQ3ZVbEVRVlI0bk8yWTZWUGFZQkNIbzhaYWIrVlhFTktJZ21lcEIzZ2hpdkhXV3ZCQVFVVkJxN2EyS2w0bzNyZXQrbWYzRFRIZ2g0UUJraS90c0IreXU1blpKenY3N200eW9TZ3FLenVIVmlRNTJWa1VSZVcreTFPRzRTWHZmUzZWcnh4RHBLQ1FLbElGUkJkUnhlcUFpaWwxT0RTZEFXVkFHZEQvQnlvcExTMVJBVlJXcmdFMDVXVktRUiswZ0U0SGFDdVVnZlFHTUI5WnRwS0JRYThJWkVSVk5hK3JxMkJVQWpJeE1BdVdHWXhKQWFnR3RYV0NWVmVMbXZSQjlWbzBpSFlEdFBWcGd4cnh5U0xhbHM5b1RCZFUzNFRtdU5lTXBrUXBKUUsxb05VYTk2eXRhRWtQUkJLeXZmVnRDVk5LQUdwRE81OVFSMmRYVjJjSG4xSTcydElCMmJYb0pzclJBeUk5RG1KMlEydFBBOVFMSnpteVBnMjQvbjRPbWo1eWNFNzBwZzR5RFdBd1d1R2hZWm9lSG9yV2ZSQURzdTB0Q3pKaWhEVDFLTWFpQjJjZHd5aHA3eEg1aVpNRHNlUDRRdk1qTmlINEU5R2grNHB4TmtXUUM1eWJxRWxNQ2Y0VUpzblZ6Y0dWR29nMVlKclhNL0JFVTJBOW1PSDFOQXd5S2NtQVpqRVhYWWxlK09aNVBlK0RsOWNWYzVoTkNiU0FSU0VUUDVaNHZRUy80QzlpSVJYUWNpRG9GYXdhckt6UzlPcUt1STI4d2NCeUNxQnZXSHUxN092WVlOa05ySXM5dlNZVUx6a1FxOE4zMGY2QndPWm1BRDlGL3hkMGt1V1dCRzBodUIyRDdzRHB4RTRzZUR1SXJhUkJJZXpHbjdybkIveDc4V3gzRVVvYVpObkhRY3l4SHdLSDhhay93TDVGS2thNlJtRWNpYmIxR0pFSWptT3I4Z2poNUd0RW4rQzBVdWliVUJnUmx5dUNjRWp3SzA5eEloa2lEZEtmZ2JPZDAvU0ZtY1BsRmN0ZVhZSXpYOUQwdVkzRG1mUzdXNmF6cnoyQWp5RWZEN2k1NWYzYkcyTHFHQi9ndVphT2tKdCsweDFEUWdQM3h0Zm42NDMzQVhLRHVaUGJiUEtybG4xd1BMcmYzbkEvT2g3a3R0RS8rZzJaQVdWQUdaQWFJTlYrKzZqMkk2cXdRQTFPUVQ1Ri9WWUQ5SWNpOHZUOG9venk4dnhFVVg4QkorR3RpTmtvNEhJQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURZQUFBQTJDQVlBQUFDTVJXcmRBQUFBQVhOU1IwSUIyY2tzZndBQUR3aEpSRUZVZUp6RldudHdYTlY1LzkyN3U5SnE5WDVabG1RSlM3SnNRMndlaG9aT2FrSUlLVTB6TUtGRFppQi9aQ2FCS1k4RWdra0JsekJKMHlRUUdCZzdwV0FERG5iYURLbERKc1VlSUNhcGt3YURRME14dHFsc0hMMWx2YlVycmFUVnZ2ZmUyOTkzN3QyMUxNdnlTdHBNanVkNDc5Njk1enZmNzN0LzkwaEhqb2ZmNzk4VUNBUWU1dHpKK1NxL3Y4UFp6ZXV3VExtV2UvS2I4OHpEWTJOalYrU2FEMzI1QlByNyt3dkk2STNqNCtNdmtNa1JUZE9POFBhVG5IZHozc3p2ZjhYWnhHdWZUTG1XZS9LYjg4eVR1cTUvd0xXRHBQRThRWDVPYUM2WHJ5VURJd05GWk9hUmdvS0NJVEw2bW1WWmQvSjJ6VEo0cVNPTnV3anlEZEljSk8ydHl3RzRhR0RjUEk4YWVvQmd1bm45T0djWkp5NDBuYlhaM2kvbmZNTHI5WFp5cnp0bHp6OHBNRXJ4TTl4SVRHMGJaL1ZpMXFaQlpIdmZHWFdjWXVMdjBVSSt1NWo5c2daRzRwOG5FL3VwcVEzWlBKOUtKVEUyTklBVFIvNEEvMUEvTE5OY0RGOXp4MlhjOXhmQ1E3WUxzZ0pHYVQxS1VLL0NEZ0FManNoTUNMLzZ6Ly9BZzdmZmhrZnZ2UjNidnZ0TlBQWHdQZGo1N2Z2dzhyTlA0c2c3L3cxemFTQjl3b1A0ZFRZUEx3aU1oRFNhM25aSzYvdjhxbDJJV052UjkvR05yOXlLbDNmdHdHVEFEeGdwUktKeFdGdzZQTmlQUHg3NVBYWSs5VDI4OGNwUE1Ea1JRRFFTemhKVFptamkxK1RwcVFzOXVDQXdFdGhHUWx1eUNRNmRIN1hoNVg5OUFoNHJpWGdpZ2ZISktjU2lFWVRESVF3T2o2S2paeEE5L1VQNHFMc2ZMNzJ3RTQvZWR5Zis2WUY3TU5EYmRVSGE4OHdIYVVYYmx3VE1XYmpsUXBKSmo1L3UzSTZ4a1JIRUlsR1VlRFEwVnBiZ2t4OXJ4dC8vN1Nmd3BldXZ3bzBmdndUcjZsWmdkVTA1d1liUjBkV0R2cDR1L09qcDd5TVJqMlc3emV5eFpTRnc4d0tqcG03RElrQkZ3ek5vUDltR29jQWs2c29MY2Y4dG44WVQ5OTZLcjMzeGIzRExEWCtKejExek9mN3VVMWZpaGsydHVMaGhKWXE5ZVRBWlhJS1QwemplMW9iMzN2N2Q0bUhaWTR2RDZ6bmpIR0I4c0phcTNyRVk2bDZmRDlmY2NDUFdyV25CL2JkK0JsZGN0ZzRyNit2Z0tTcUQyMWNNdDdjUWhhVmxXSDNSS3F3anNEVU5kYWdwSzBLK3h3VnhYZi9vOEJKeHFUaXdRM2krSURCR3JKMU9nc3phNW9XNXIyelppaTMzM28zSzZtcTQ4bGd3Nkc1b0xoYzBYWWZ1eVlQbTlxQ3dxQVF0OVRWb1hGSE9XWUhLSWg5MFRjTmtjR0lwZnBaSjVzTHpnc0JHUjBlbGZzczZWOHdlYnJjYnRaV2xTanV1ZkRMTWFibDlpQ1EwaE1JSkpKSUdzWHF3ZXRWS1hMSnFCWm9Jc0tHMkJxVkZoVWpFb2t2WmN2YjQvTndFbmdIVzBkR1J6N0QrekhLbzkvWDJZbUl5UlA5SklSUU1ZdCtyYitMMUE0ZlEzVGVDL3FFSmhDTXgrSHdGV0h0UkxlcXJ5bEZYVllhSzBtSm8yckpyY2JHMDdZSWgvVDFEc2FpbzZJdjhzVUd1ejFmSHpSN3ptVVVQSTkwSHgvK0k4YkZSbU1rNHlyMGVCQ054UkhRZkN0d3VCVXAzZVZDUW40ZlNnbncwVjVYZzB4ZXZ4c2JHMm5scnlQUSs4L0V4ei9QckJjTlp3UGlEaTlyNjFteENjNjhYQXBrZVRSdXV4S2xwQzBtTnBzanFvblY5QzY2OWFpTmE2NnRRV2w2T2ZBWVpEMEhsMDJ3cmk3MjRhbTBEcnIrOEZWZVduMXZqemdVeDk3ZjVCakZJaGVUT0FCc1pHYm1HSDgzelByMkkwYkJ4RTc2d3FSSGxCU3hTR002cml2T3hwcmtlTlF3VzFUVVY4QkpVTWhwRktCU21CdDJZbVE1akpoU0hpOUV6UjJNTnNXeVdDd1dNUGRDWGMwSFZZeVpRVmx5QS9JSkNWZlFtbUt6elhEcGNxUVNNZUFTeDZTQ0NnWEZNVFlYNHRJWHkwaEttQ2krczlSL1B4ZlpxcExIb1VnL1N0MjVlUnJnOU0vTjhNQTBESjQrZHdQRmpYWWhNejhBd2tncVVhQ29aajJPS1dxTE4wTmtONUJFVTF2MEZ0T0tLNWUvdFRHSzVpWis2UGpnNGVCa0JsdVpDV2xwQkNTWmlVdnVtVU1kd0hrNGtNY0NBRXFIbWlCZEcwa0p4WVFGTU1wQXlMYngvZWhLdXhvMjUySHIycUNDbVMzV1h5N1U1bDFSSFE5UlFrQ2dtV05rSFloZ1BUc0kvNXNjMGkrSVVUVkw2dEpTWm9yKzVjY20xbjRYYjQ4bmw5bW9JSmpIRkRia3lBNW1WVFd2aHEvSml4aFhHaW9ZaTFOWlVZb0krTlRBeWhySEFCTWFucHVsL0JyemVmUGhxR25PMjc1eTVRWUxIK2x4S3kxUFRCTTNuUW1sMUtid2xwWWdtVXdoSFk2dytvampWTjR4QWNBcFZGU1hRcUNuZFc1VExyV2VQOVFLc0laY1VpNnBXWW14eUJtTVRrK2pzT28yVEhmMzRzT00wMmpyN0dDRzUyY29LRkJZWDBoek5MRnJYSlk4R01jWENYSnFCbXdXdjJYZ0YvcWRyRkw4OGZCUnZmM0JDOVY5TnRaVm9yS3RDUlNVcmZvK2JBWWIreGliMFQyU0toYUt4bkdYSDlMajArcHR3M2VhcjhjbkxXN0Myb1JxWHRxNUNhM01kVnJBK1pObWpubkd6NmplaU03bmVPajNLNXEwK3oxZXlaRHMwSmwrZGMxMXJBNjY5K21PczVLdFJVbFNBd3BKQytoMkJXU1lzellXeSttWXBneFlzMDVZNnhCUmpjMVVwWXptbWNPeGtOOHJYWDAzcUx0UTJzcVJxcUlHdnJCamU0aUsyTlY2MktURjRhOWNTbk03d0Q4U1o3NWE3NTV3NUtSb0w1VkpTcngzOEE5NC8wWVBLMW8zd1Q1cnFEVlVCRzB4dllRbmNlZmxNMGtsV0gxRlViTHlHU2R0QTcrQW92djdQTDZLemR5aVhiSVJGWTEzTGxaREpLcUx0VkM4ZWUvWm5lTzVudjBVUjJ4WEQwdEZ3M1MwWUcvUXJ6VWdacGVzYXB2empLTDM0RS9DVTFhaTFYVDJuMFRVVXhOZSs5eEsrOGZodUhEeDhITEY0WXJrYTZ4ZGdwNVlxRnYvNEZINnk3eEJ1ZjJRSEh0cTJGNGVPOThDZzc3U3l2eExmU1hxWnl6YitOWkk2L1lyZHRKa3lZYmhMa0NoWmhmODcvSmFxS3owU1JYVTM0aXhXanJZUDRZbmRiK0JMVzNkZzF5c0hNVHdXWEJKZmdra25BMjJMWElRVHpFMlB2N0FQWC83MmJyejg1bnZvSHc4aFNqK3hkQTljYlAvTEdDUm1waWJSM2RhR1ZINFpyTFhYd2FpL0F2SHFTMUc2K1RiV2lpNVk3a0lNOS9VaEZvMUQwMTFxeG1NUjVqZFdZK0VrWGpsNEZIZDhadzhlMmI0WGI3MTNFa2x4eGl5SFlCSmc3MlNqM3Bsd0JHOGVPb2I3SHZzM1BManRGYngxdEJ0Sk1tRXkvcm5jZWNncktKYWVnUjVsQjlvUVM2ZjZsbldvWG5VUmlzdllhRFp0Z0t1aVViWkYxYW9Hckxua1lxeHFia0hDc093WFBxVGhLNjFVMXhLK0pHb21UUTN2bnhyRTQ3c1A0STV2dllRRGg0NW1aWXFDU2ErdnIvK1FkQ1lXa29CRXJidS91d2ZiZnZvYnRBOU13TlRjMUk0TndCSTJCRkQ2dlFXdkk3RVVWdFl6R3RiVkVyU2J6R3JVVEZRbDZpakxLMTlSSWZMeVdTdXliVW1rTEx1TkVhWUlPa1hOeUx0OUMvWjNrM1NKSFlPQktUeTc5N2ZabU9jQU1SMFhqY2tKd1dzTFBYbjhWQi84MDNGdURoWENMUnVSa3I1Ry8xQXBnc3pCQVJlWUNxdTNWcWFUT2d6RE9ZUnc1eU9QeGEvTDdYTFdVTE9ST096bG1xSmhrOVhVUFh1MXBvS1RRYkR4cElGVDNRTVhBdlliMHJKMGUyUGp4d3VwOW5qN2FkczhuSTNrVXhwRktKa2lyZjVNc2cxTVJaeG9hYWlRTHExS25FMW12cThRUmF3VHRiU0dPS2Rtb2xBb29OdWxvK1hRNU5xNU9WVTBlZlNqbmdYTlVMQW93NUgvbXBxYWZzZVB6dk9Kb0wxM21CdFpqb21ZTmlOS3pQUUgxUTJianJac1lJT2pRU1FrNlZxbUFtOVNZeEpVZklVK1piTDJjcHVSeVhBOG96MFJnZ1NSTTR5YWlyWUlTRXhVdERiaVg5QVVPeDBzWjE2L2tjQmo1NVBDd01oRVJuSzI2dExuVzVaNnQ2R1laZk1JeDV4Nmg4WVZVM0xmNVdJb2o0U1I1OGxYL3BldTZHM3BtdXpQWm14L2t1L1VMRHRmUjFDYU1LWDJNcFRmMlJvY0NRUVh5S2ZtWTJrOEdXQkVLaXBzbnl1Q21YQU1rNkdJYlQ2VXFHa2tIYzFsM0V3RkI3bVg3a0pHZ2lHYVh0SUJOYU1pblNoVXRLNm1BeVRCWjBZbVFvcVFqak0weEF6VlhwYXRyV1F5b1N4RTdvLzRweENOSmM1UkZlbDFPQmpPQnViOGVQL2NCY09pK2t6bG9DT1ppQ3N0eVRXVUJkbi9SRVB5akRBMnpZQXdOQnBRdnVWaUFyWWNmN1RTV2xmTW0ydzZRNm9CVmI2WkZweUZqUGtwQVlvWkptUEtsR1ZsVXNxd2diRnpqUkQ0K3V3dlp3RWo0amU1OGY3WjZoMWhtTFdjTUNobWttQVN0WFZsZzFGVGFVQnhDNUc1R0dwNzM1Z1RJR0JIMHJSZndoYUdxZXBFZnlaeVdoU0NPU3ZnS1BOVG53UVdpemkrYVNuZzRtZHp6SEMvOEg1ZVlHcFRUYnVISHhrUEhaZDM4VWk3bGkxSjIrUm12YVYxd3JWeWZzMlcrSW51SWNXTW1KRzhzRW5ucGpTUVJDS0Z2dUh4ekhsMEloNVI1WlV5UzdkNm1VdDZLYTZQSVpXSVpUUXRvVDhTaTg5bU9landmTlk0QjlqcTFhdmxzT3FyNmU5VE14RUhsR1U3TXF2emRGaTM3ZDUwVEEzcUhTSWNBWnpzR1VWTU1hQmxnTUh4TGZrWFkrc2l3QnhwcWxOTk1WM3hZWVBDRUlFSW9CUS9iUzJtVkhLUk9SV0t6R2I1cXc3UEN3T1RRYlh1SlFOeS9nei9STWdKejNiQWtMQ2JWQkkwMHpyTE1BekxCaVgrY3BvaDN4K1lkTTdJWENwaHAwT2lYYUtGQ1N4Z202c3dibG9PVGZGbHR3bzhjb0NoVWdyUytPMm9PemlXT1UvYkpyek9oK0c4NXpmTnpjMy9RRUs3UmFxS0lPeHF3RXo3bGVua015ZWEyY0dEd0JOUnhYNVN0Tlk5cExaSUozQll0aW5KZzZMTmZvSVhHZ2tLU3RXSWxwWHgyWXpBbkRDZkRqd0N2SWZCZzljL0ZCN1B4LytDQjFPVXhoMGs5L1JDei93NUJ1SDlzS1dsNVlHRm5ybmdpZHRydTc3ekVLM2hJYzJwTUN3R0NEdUlPRnBLKzQzU0pPejJ3dEhReVo1aEZyMVJwU1hMdENzVDNXVnZhVmdhcHBramxYOUpwSldJWnhpekszU2xlVEZWZ3dFazdjZGM4TkNCSC85Z1FWQlpBWk54Nm8xbm5tWld1ZGxNcFNKU0hjaEdNdXhrNjlpK1UrUHA5S2VFNDRNZmRneXFJeU1WZUd5bTdFVFA3eUYyQUtaVE1pVllSNnB3aWpONXpnN3Z0cmxiY2xwakdCRks0K2IrUXk5bFpVRlpuNUYyL3ZLWi9kenlVMlR5UTBOOEFyWlBaZjVHeW1GSUVyZUVidm14ankyR3RDa09KbFdoS0Y4bHNON0JNZVV2OGNpMDhpOUZ5NkdCczNLVUtiWG1DZE5LYk81LyswZjdzK1YzVVllLy9XL3QrdDl3KzY4dm85YnU1SjdEbU1XSTNjSm9TbU1BbTBRR2tTVGI0YUhBdEVxcURpVEZiRXFTODVCZkxZMUhuWkxMMGFicUhCeFF2R0lZTis1S0RSM1o0SDkzNzlIRjhMcWtVKzNSWTYvdmlvY0xXbWhLLzBoVVFac0pLOE9jbUZVa0hGS2YzYXd1VWtuNU02U29NajNWeGlSVENFN2I5YWVZWVhyZHJEbEprdDkwSTlrUy9HRGZpMHZoY2NuSDlRUHZibzkyLzlmT0oyUFRlZlcwU2prNDNFMS9HVW83dmpBdlNiVjNlQUtobVRDckNpOXNsN0dveVNRaUNVTWw1WFJWUTc4YjR1OHZzalc1U1UrRjZvWVA3L25Cd0xzL1gvTGZTU3o3N3hBRVlPZkI1L1ozL3ZxNU85b1AvRXU5WWVtYlNIWXJrL0x6VE9UNytrYUNoeVBSZUU4cVpVYUlLVUx3UFp5SFE5SFl2bGg0K25tYTRWWkxNNjRjZmZmZjY0ZC92K2V1MFhmMnZMNGNRT254L3hZOHZScktLbXd0QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSWNBQUFBWkNBWUFBQUFiaXowNUFBQUFBWE5TUjBJQXJzNGM2UUFBQURobFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBcUFDQUFRQUFBQUJBQUFBaDZBREFBUUFBQUFCQUFBQUdRQUFBQUNYd2g5bkFBQUtFVWxFUVZSb0JlMVpDM0JVMVJuK3o3MmJaQWxKUURSamgxTEtJd3Brb1lveEpJRkFRclVpVmdoQ3dUcU9NdEJPVzVoT0h3SjIycG0yYVoyMm9CRHNXRVRiS25Yc0N4Q0RNTWpVSW16aXdJWlhFY3FHbDFOQVdyVldYZ21QYkxKNy8zN25KdmZ1T1RkTGRqR2hPTk05TTNmUC96NzMvdWMvLzMvT1dhSjBTM3NnN1lHMEI5SWVTSHNnN1lHMEI2NjlCMFNYUTJ4Y2RBZFoxbzJ1VERSMmtHWTgvYjZMYjFoUVRFeDlYWnpNTUZVOStWNGNCMVM3NkhZeXJIeVh4bnlZcHRXY2NuRXZzUEY3QThscXU1M1lHRVNDRDVGQisyaktzbys4WWphK1puNE9aZlVxUzhqcmloakpyYU5aMWEySlJFYVZsOTlnUmMxeUVtS2dSZFJpeE1TZWNEYUhLUmlNSnBLL0VpMVFObjZNWlJsOU5MN0FCelVFdDJnMER4SVlXMUZzeFZTZlFzQTBqeDdhc2ZXa1I5UkdoNDBiMTkrSStnSXFqdzIrZURoVXY4T2hCY3JLK2xsV1pwR0Q2NzFvdnR5TDNqNFJETGJvZENLZmw2RGhNZXZuUkdLU1N6UE1Sd0cvN09JeHFvRVR5MTJjckxtQVY4VnhRSUovU2l5bXhHbjhUY0FyNG5nSFZMdG9CaEd2cEZnTWdXUzBFeG14R3dPNGZrRWpBbXdXVFYwZTF2U3lzb2NnT04vUWFLa2dXV2MvQmJGL3E2SUZvOGZuWi9tTlpiR1ltQ2tFK1NYUGZndVRxVEJDTGFLMDRxOHh5emZuOEs0M1Q2dDZpZUJCbFpWK2p0Q2Joa0U1WG42Z3VISjBlSGZ3YlMvZHdka1NOZEJUZkFxdldMSE40Ti9ueUtpOUdjdDRVaGowc0VwanBrYmdic0F3K1VjYkJsL1JUOWt0M0ZwWVdybVBtSjl2M0ZubnpsL0hMS2ltcndPOGZ1RlRDS0pYU0ZBOHcyaXZJUXJKTWtOVXUyQ3lSdTRoWkZqSitNOWwrZzFNbUhnRTRXZ0hobXJhcGdreHhUUmpPMGVXVGhpaDhoTEJ2U0k4R1RxZEFrUEtzc2t6RStra29VMGFObWJDWUsrTURHajQ3RXRlK3RYaVFvaE1MSWdTWVlnWFI1UldQTzdvWC8vZ2tHV0hhS0h6UW03UDVFMzd1Y2hTSzF4K0R3RUZKU1Y1UHNOOFZaRG9uNExKb1N6RTl2NUZSZGxkeVFydWNzS3Vlakl4ZVliUE1MN3VIVE1qeTVpRElNenkwcnVERzBJc0NaUk9tQ3B0WFAvZ01MaEsreGltWTNpcklkUjJFaE5nalFPdldlRVBwbGNmdTlYRkl5ZkQ1UFAxMHg1dldTTmVyUEdsL05SZmZ1all5Q1QvQXNCREhkenVtZjdNSk82T01VMUVxbDBKbXJMZkVEZjB6Y3o1b2lhdklBVUZrN093bXBVeWltekJqTzFMZThORTN5b3psWU9uM0F1ZUd3Z0VNaFY1VkJQNmhvS25EaktmT2srUjdEWXlCbGpNOC9GK1RicXl1RmZpWGU4NWRJMXJnekdOMFF3TE9rTlRseDd2b08zQWhuWU8zRHZLbFRHTmVOcWZ0VmJ1U002NlBBblVMbXpCNU1TYkVDMTAvMkpkUnVHU0lXYkhVVUJNNjhJTndZY1VXaEQxT0E5cFY2bnJZaGI0YXhVWkY4eTY2U0wyYUVhdVMyQStqb3kzRjdpYk1aQUZKSHpBbFVrSkVQbVVkNlBVKzZNVUQ1UlZ5cjFncDFJamVja2F0bkw4ejFEb011VCtoV2Rsb0xSaUpQcjVpbDZsaEQ4QndjSEg0RHpsdmFnRUcxQkoreE1tcXA3NjlONUVFNnZYcVFJOUJhT09EOExJbjFYdElXTThwZUlTeHV0Vk01RzdpV1NMTDNsbEhKekptS2wrRGZRMlFuNFA2cmtiSExBbzl4MC9jblJTN1ptTmVaQzFnd09yZlI2eVVLcXFYY3BaSk43WFM0aklrd3FmaE9CNEZ0Ny9LdDZsZC93TFJBRUM0NGMyZnE3NUFvSmxFNW44QzVwU3N6OHUwMzNJSjR4UGU2MmNhMnY2dTVjV0RnWGZBVzJwbCs3Rk85TCtGSldPWU52SWJPN0RzVXRtT2JPRE43eXdlR0tnY2ZlMnNDcWJDR2JpcmRnUGZWN3lFQXZsSThaV2pqUWkwU1lnOGRMR3RCM1pVcGJncTI3SVFBVUlZT2wvdHdFUFNrUVBHSmY5UHdTbTF4d2xZVW1ISGs4NHFoRFk5WXNIS1dyc1FzbjRTa0taajBtTUdmcDlBcHdTZVcvdjNpdG1oV1REeFBMeTc4RWs5WEhrWkMzUGJtdXVrOGRmSEM5RER0M3VVenkxSURoZWdoMTNjMjVZUEk4eWZGK0REVHZRd0VOaTR1YzEyMGtSY1hOaFdVVmRZVm1sWEFqSHZOa1Q4N0ZWbXJqK3dTSGZvcXBtRy9YSktjUnhkZ1l5eHU5UitFOUlzdFlFWmNMeHY2TFh2bHVnMGJ1Qm1JSzF1dzQ0S1V0ZWduMWNrN2dTVVVvSFFwcG9TMHRMaTJqUEtDenZLdUl0MVNPb1JSOUJhYjJqaU5QU293aGlkeU9LckZLSHdKT1pMZVVtdnhONkU5REx2WWJlbUZhTHB0T1lnNTR1S3l6aW0wVm5TR2EveklmeGhvT2UwK1FOWjJidjZUWjYvcUwwNWdWNllPa2pObTRIZ2Zrd1dhak53ZzFpUHk0S1pvQy94REhScmI1Tm5QSVcxbWhyeGxqWTNLVGFsYWNMbnpCbnlrV0tiOEZERnh0RFFhM01GQlVWWmJRSXFsTDFJRHVkOHZJamtxWjZvQU1QeUR1VGd3MzFoelNkQkFneXd3dW1zRGZCMGs0T2ZwQk4yeHVjK1ZzSDdsYlBmQW0ybm10c3FGc0lPL1ljK1hDeDlBUUdzMnVhYlp6Rmk1aWdGOW9IRWpkckF4cjBnWVlUdVVmQ2RybzFCLzFLVjZiMk80UGdvSWt1M2c1NGRQZ2xseTl2UkY5YmVCdFZMVDFBVmN2bGF2Z0ozbTg4WEh1WEswTTBXSUc3QmVLbThvUEMwb3BkMk5pNUp5YkQ1R3BjU2RjZjJiNjkyVEZ1Q25NRmZGU3ViQUQvQXA0V0hKY3pjdTdHMi9kMWRGTHBrUVZrcG5raW1lemhuZlZiVUFiZXhXb2ZxTXZ5MlV0K3NjNS9pVWJyOUtUWU9Vei9ZaW1GTS9acHd4Szd3N3Z5RCtJQUp2ZEZidlBobzgvQStYSzFPQzBQRzBEVVJ6RVVBWFFiZW9kK2lmSnkzM0lRdXpmRUFRelN2dklsUVloaTdBdU9RdTkxd0RLdzVISExKMWx1c3poK2hKdjE3QVZNL2o4Z084VGxNNi9HK0MvRDdqNGNNOGVReFpVdXJ4MW85T0RkUXJGaC9BMiswQTBPR0x2VGpQbjJZakpld1R1QUxhckFENmlETUZsclZMd0RsaWVRcTJ0TVVpZHBjRURHd2w4UXF6QVZQMVlIWUJaL2tQK0pEQjlUb1pLVHd2aXNKbVNJcE5uWFFKMFBhdGFFckVNaUROb0dPZHR4SG0vQmtWTC9jeVlhL1RYNDdncXpaUVhkQXJWdkEvNHlIay85NWcwa042QjZlMXBIeFhDTSt6UFllQjFUVTQzZWRQbjJyU25lb3djYi9naERsdFQvZDBDR3VBV3I5UHZvZjlBcE1KZzNONGJxVjJtdlVGa3BGNEJXVWl5Y3RtSXg4eWIxc1dMaWZrMVBpRkhEN3B3NFRLTmRBV0hEV0dXWE5ZVXZMTkV6SlVXeHFZSUdUYTNCK1owN25lMVZJVXhTSGZudGtxR1I3WDlvTGFNRVY0RGVDZGZsYkl4L1IzMXlIK3pFZUdEWk05RC9GdWpSVGp3dlFXQWpObTFaajJZT0RJSDYydm9RZWxrcWtqUitvelZpellZUWRPSXRFQkYzSVpENnhTbFk2bEd4VnA1UzFPZFFObU1NUHF2S0dUN1dOckVxVDRYbHY3SllxdXJDMkJQZXRXMi9LdFBUTURJSFBuVGFzc2V4V21kamt2YmphYk1Ia1QzVDN3QXZvYmFjZStqZTVTZy9DZHIwSnc5UlZtc3g3TWdNc0IwZjN4U1g0bE9BNWVadUxzYVkweW56T0lJeVFOclA4clYyb0RFcnRZL1B3ZVpxSEsvdW9HbEw5UlhyNkhlekQ0ZENaM0NYTVJsbndya1lTenR5SWdvdTREVFFZSkUxT3h5cW0vVE92cmYrMDJrNDFpY1lLL3pZa1QzYmpuU1N3OS8rc0xWWnBXUENVd29PcVlQOXdYTW9DZS9LQjNPelFyVnpMV0NsYkhTWVgxT2RTYjJhaDFCTzdva3JUbWF5TjFuLzJHZW9kMFlUZldISitXU2lDZm5icXYzVWRINEFaVVEvcFB1ZVVZSXRvWFNQRXdlVWxmWEt0VElHc0REYURqY0VUMklBTFZQMCtJQnBnMmtQcEQyUTlrRGFBMmtQcEQyUTlzRC9zUWYrQzdwMlExc1E3MHRWQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSWNBQUFBWkNBWUFBQUFiaXowNUFBQUFBWE5TUjBJQXJzNGM2UUFBQURobFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBcUFDQUFRQUFBQUJBQUFBaDZBREFBUUFBQUFCQUFBQUdRQUFBQUNYd2g5bkFBQUlna2xFUVZSb0JlMlphM0JkVlJXQTE3NDNiVnFhTkZobGNMVFd0andFeXF0bzIxR3JRd1VwSUUxS3EwR0drVTRyZzhvd1BtaUtvek5vbEZIN1NGSWNMQlZGME1FWExaRFNUbUhFS2cwT29Gam9BOUpxeXlpeG96eWtsS1lGKzBqTzlsdm5ublB1UGpzMzl5YmtkdG9mZDgyczdQWGE2K3k3OXRwN3JYTWlVb0ZLQkNvUnFFU2dFb0ZLQkNvUnFFVGc2RWZBRkgzRXVrVVhTQkM4TTdIcDZYMWU1dDcyVXNLdlhUaEZySnlZOEpMdGxJYWwvOG56VU8yTHpwZE1jRklpcy9adk1ydHRkOEw3eExxdmo1UGd5UGxpTStQRjJCMlNrYzB5cS9VMTN5emtWOTFRSTlValAxeFFWMHg0cUxaREdwc1BGekt4MXI0RCtYUndISGdRM0FSMkdtTjZHQWNNK0ptS2NaMDN3ZUpuZ3lkTHNjeWJnc0NKYWFqZXlieXVsR0hFWVA4ZXlFbWU3azNzbjR4bDJJeUIvbURNZStOKytDM1k2MjlOUVZXSzg1bmU0UHNpWm1ZaXptU3ZoYjQzNFh1bFRZelJRRVlRTElDNEorYkMwZGp2aWpXejhqSjdJL1NLUEI5UjdZdm1pdGlWMHR0TEltVnlRa3Z1OWtLdVdiaWRCR3VVK3VXZHFYblZKMHdrT1I5TnlRYkNWTzk5TjJhdnVLWUVrT2RLSy9nWmNJU3JnejZJL3ZlTTh3bmlIay9YaDhWVzUvOEJyUEdWNkNialk0c3ZkL2cyYUNlbW9lWVIvbDd1Mkxqa1VwaHJYQUgwZHRCTm1Nbnd4ZUowbUhWdHh1Wk8xcGJzWDdRTGlJOGxyR2xheGkxeHZ4alJEU29BNWl3SnNrOUorOExMQ2lpSExDSXc1K0pFTit4em9KOFk2bDlsbXVCL3dmWk1GWlFBWFdlZnhJam1hUElORm1ieTNBbitKR1FhcjAvNzhyZkJEMmZPTlBCdWZONGN6ei8yeWFGbFI2UXBYbEF5V3ZHdi9WcHVxUldKdmt3RXdSaU5xd2RCdlo1THdTa1lQTUdjRTBvWUZ0dXdZcnIrM09vK2ZhR0FjajZ5NmdMeW9ZaVc4UHZxMWNHeFQ0Nk1iVWo5RWl1N1dOVkVPZExGQmdRZlJhYzFNWVlKOHVCTnA4ZU1IT3JxbEtxcU1TbjB5NXJZeFNtOTJ0Zi84TlhFaDhoQ2FOMTBGMzRMY3pFNEExd0p1djJHOWlTZkFnc0NnZFhOY3Nwb2FCWTR4cWRqb3pmVllHRUI4L1NFaHdCTnpaVXZSdXhnaDkxTTBBUWZDOTRBZG9NdVhLcE04WjdETlQ5YXRCVnQzUEpnNUhXcGIvbG5KSGlTaHBiVFljOUpETEladmVKejBMaGFPNUs5TVJ1TzdVMEhLVTk1MEVicmlzVnBtMGdiQlhoZTNqaWtIcUR1WHUzSU5tS250NHRiMXh2aFZ6czJMcWs5V3EwajBOL3lET2plR0VwdmMyd0dRc1lsNU5lUnNUNW53a0FtRnJEUnh2aC95UDhOcnVUM25jMm9TUkxEaFVvY0I4bGhkMUV1NGtYcE9JMEdWR1cvb2RsOFhPcEdyWmNaelErNEJtV2t4K1ByL1o2L1pSNnZiRFBvTnBGdnFiQWY4SHVLZGRodEF0M2tVSnR2OVRPL21QaExLT1BrVUxwYzhKTG5TQS9EY1pFY2Q1QUkxN0dXVWZrRm1sTkpqRnRDL28zOUIwaVc5WksxUDVCWmJWdnpObVdoM2x2QXkzTytqRlAyQXJJV1grN3puRUM5OW1kNWNrME9mUlBRV3k0YjZjN0FkaEorT3lPKzJQQkhsSitJREtaSHAxekxnRnZhbm9EWEVqeG93TitwVE5MNHU3QlJtV1BmYzh4cDJ5a20wSURHcFVUWGxRZGo2UHJOVmRLVGVWcmFtejZmVjVTRk90SHpjb2dOSzNZcmVPWjkyRXVRMURsUzNjUU9mTzVoZk1xUksrbmZNSjQ2WVg4QjVUYm5lbU5jRDhhSlpxSHZCQWNESjVNVUhhQWVoRjJnZjN0cVFoNEh5YUdyYUdoN1RPcHF6dUoxZGk0M3hpL3BNVjVVY1FxTURLZVgrSkU4OURYTjlITEJLNTZqYWdLbURlZmJCYmQwcUk4Tm9NR24zaWo2cmNJRjM5YlZ1ZlJyTUdzY3diWFFiaVBhQWE4MzIyQ2dHdU9QZzJjWG1IUWZNdmFnM0dYRm1ueXpHRDlWUHdpbGVncWptWjREL2NJNWZOU2NrTm4zSm1HVUEzSmxpMzVya0Z3U1pLK1JnTnBza2lRZUlUWTdGKzJTMEdib2Y3UnI5K0VqQ05hN1FqWlgzeTcwcEFjUjZoZklWSm5CWmhpNkJ0QUYvVzJIWElGRFQyTE9tZmpaNGNqNkkzK0dRcHRnQlc3UzFEZVV1MExwMFAvb2pmbGpzSWsxaFh0VXhZZWxXd2wrWE5NNHRPWnVOa2dYQTVpVGMyUDBOeU12cDNnUjk1VVFWVENmUHlzVG0vYXZqaWN4WmlSOGp2RG1XTDAyYzZCdlp3ODFuU2NOTGR1a1libWVodSt3dm8reGpvdGlFOFlKRGowa2tpQzh6QVk5alpPcGpxTm1aSStqMisvSVZrQlBkL2pmUWFlU0EvNWkwQzlUenBTQ3BONGV0eGJVcElVYllQOEZqa3VMd3pjMWJkWW5lL0pTN0JzWUxJNk10T1Q5Rlh5ZTM5d2J5Y0toaXNSNG5lRHJhWWxoTkEwZzlkR2NRcWFjeHhqTDM1TFJ0WCtLbVhETW1HMlVnZHpKVjRFeFUrZ0xkakx2WVdoTnJKbGdsYW9TQ095MmhHNjg0d0NiL3c5c0p5WXlhKy9qK2ZmaWQ3Tmt6RlFKN0lXSkxrZHM5L2loc2ovRmdac2NINEovaGdTNW4xRlBrTjRHazBBWFZybE1ST3ZOTWxqUU9TV1RnMDBMV004OTJIN2JlOEN2ME9tbmZVOWNrdTFtWHNuYk4wTkYzSmh5WmJRT2hWMzBXdDN0dk01dTRKVXkvYytabnA2Zm9IZFBtT2JTYVV6N0N2TFBnbDc5dG10Rkc5QTAzSlptelJrNCtSNCtIbVpybWhtemlUNzhhc282eWd0NlN6N3F1VHdOL2h2Z04wRS9NUjVCcGh1VkFKdWpCOEF2S2JjZ2U1ZUhWeVNUY3NRNXpQMkFKK3VQMVdkcVdYUGhMcGNwTjUyUityWXRISkJsUlIxYjZaQVJZY2xJbStsL2FJUE1OTEhXMy9DMFhjalpuMHRkN1ZWOUZGZTIzczc4THlQdjZhUHpCWVpHYkhacldXOE9UcEFldTZ0QkxSV2xRSk5vWGpUSHRiMElab3dyZ0Y2TjNSNFhrZWt6OW5wMkEycE04ZFBGUFBkZ2JFSzIxZk5WVnBhYmcvTTV1L1ZtVHVzOE5ta3JlQ1I4Z281V25vVmVJa2RxTHBGTGwxTitDc0NjcFR1ayt2QVUvT2dOd1B1MjdjNWIyZDNRNjhFRlBHTituNXNuTnRRRUVhTjlUM3VZYU5ZNnRjOVNIeWsxSnJoQVpyZWtUbXc4ZmFnalFkYmZkaG00QUtTa3B1QUEzSjlCVFlxWjRIOVQyaHpqYi9BdTdQN3UyeUhUQTZBM2p3ditYRmZuMDlvd2F1K2hxSDNRVVFXbmJFVFBXZFU4WEVidW55ZzF0Uy8ydTVtbGxyVG1wdmZKcUdIZDhza2wrMHFaRnRRLzFqeEN1dmVObFdFOXI4cmx0enZKVnRDNjdFS3UrcEU0SFF2cVFlbGlVL1YycVVBbEFwVUlWQ0pRaVVBbEFwVUlWQ0pRaWNCUmlNRC9BYVlzYkpQRlUxMDRBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaGFydmFyZC01ODU1ZTE0MmE5NTE1NjgzYTc1MTVlMjljMWQ1NGIwNS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TWlJZ2FHVnBaMmgwUFNJeE5TSWdkbWxsZDBKdmVEMGlNQ0F3SURFeUlERTFJajQ4Wno0OFp6NDhjR0YwYUNCbWFXeHNQU0lqT0RJNE1qZ3lJaUJrUFNKTk5pQTVZVEl1TmpZM0lESXVOalkzSURBZ01TQXhJREF0TlM0ek16UkJNaTQyTmpjZ01pNDJOamNnTUNBd0lERWdOaUE1ZW0wd0xURXVNek0wUVRFdU16TXpJREV1TXpNeklEQWdNU0F3SURZZ05XRXhMak16TXlBeExqTXpNeUF3SURBZ01DQXdJREl1TmpZMmVtMHdJRGN1TVRVeWJDMDBMakkwTXkwMExqSTBNbUUySURZZ01DQXhJREVnT0M0ME9EWWdNSHB0TUMweExqZzROV3d6TGpNdE15NHpZVFF1TmpZM0lEUXVOalkzSURBZ01TQXdMVFl1TmlBd2VpSXZQand2Wno0OEwyYytQQzl6ZG1jK1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL21pdC0xYTdkYmE0YWYxMDM5ZTEwNWJiNTFhNjI4MDg1N2M4Ny5zdmdcIjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbG9yLCBzcGFjZSwgdHlwb2dyYXBoeSwgc2hhZG93IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5hYFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC42NnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG4gICY6aG92ZXIsXHJcbiAgJjphY3RpdmUsXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgJHtjb2xvcn07XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQSA9ICh7IGhyZWYgPSBcIiNcIiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiA8UGFyYWdyYXBoIGhyZWY9e2hyZWZ9IGNvbG9yPVwic2Vjb25kYXJ5XCIgey4uLnByb3BzfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEE7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBjb2xvcixcclxuICBiYWNrZ3JvdW5kLFxyXG4gIHNwYWNlLFxyXG4gIGJvcmRlcixcclxuICB0eXBvZ3JhcGh5LFxyXG4gIHNoYWRvdyxcclxuICBmbGV4Ym94LFxyXG4gIGxheW91dCxcclxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxuY29uc3QgQmFkZ2VTb2xpZCA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40MXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiA0cHggMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtiYWNrZ3JvdW5kfTtcclxuICAke2JvcmRlcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbiAgJHtmbGV4Ym94fTtcclxuICAke2xheW91dH07XHJcbmA7XHJcblxyXG5jb25zdCBCYWRnZSA9ICh7IGNvbG9yID0gXCJsaWdodFwiLCBiZyA9IFwicHJpbWFyeVwiLCAuLi5yZXN0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJhZGdlU29saWRcclxuICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICBib3JkZXI9e2AxcHggc29saWRgfVxyXG4gICAgICBib3JkZXJDb2xvcj17Ymd9XHJcbiAgICAgIGJnPXtiZ31cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWRnZTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBjb2xvcixcclxuICBzcGFjZSxcclxuICBsYXlvdXQsXHJcbiAgZmxleGJveCxcclxuICBncmlkLFxyXG4gIHR5cG9ncmFwaHksXHJcbiAgYmFja2dyb3VuZCxcclxuICBib3JkZXIsXHJcbiAgcG9zaXRpb24sXHJcbiAgc2hhZG93LFxyXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcblxyXG5jb25zdCBCb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7bGF5b3V0fTtcclxuICAke2ZsZXhib3h9O1xyXG4gICR7Z3JpZH07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke2JhY2tncm91bmR9O1xyXG4gICR7Ym9yZGVyfTtcclxuICAke3Bvc2l0aW9ufTtcclxuICAke3NoYWRvd307XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3g7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgcmdiYSwgZGFya2VuLCBkZXNhdHVyYXRlIH0gZnJvbSBcInBvbGlzaGVkXCI7XHJcbmltcG9ydCB7XHJcbiAgY29sb3IsXHJcbiAgYmFja2dyb3VuZCxcclxuICBzcGFjZSxcclxuICBib3JkZXIsXHJcbiAgdHlwb2dyYXBoeSxcclxuICBzaGFkb3csXHJcbiAgZmxleGJveCxcclxuICBsYXlvdXQsXHJcbn0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5cclxuY29uc3QgQnV0dG9uU29saWQgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjU2MjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuODg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICBtaW4td2lkdGg6IDE3NXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuXHJcbiAgJjphY3RpdmU6Zm9jdXMsXHJcbiAgJi5hY3RpdmU6Zm9jdXMsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSwgYmcgfSkgPT5cclxuICAgICAgYDAgMCAwIDAuMnJlbSAke3JnYmEodGhlbWUuY29sb3JzW2JnXSwgMC41KX1gfTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUsIGJnIH0pID0+XHJcbiAgICAgIGRhcmtlbigwLjA3NjUsIGRlc2F0dXJhdGUoMC4xOCwgdGhlbWUuY29sb3JzW2JnXSkpfTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgQG1lZGlhICR7ZGV2aWNlLm1kfSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICR7Y29sb3J9O1xyXG4gICR7YmFja2dyb3VuZH07XHJcbiAgJHtib3JkZXJ9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG4gICR7ZmxleGJveH07XHJcbiAgJHtsYXlvdXR9O1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHtcclxuICB2YXJpYW50ID0gXCJzb2xpZFwiLFxyXG4gIGNvbG9yID0gXCJsaWdodFwiLFxyXG4gIGJnID0gXCJwcmltYXJ5XCIsXHJcbiAgLi4ucmVzdFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIHZhcmlhbnQgPT09IFwic29saWRcIiA/IChcclxuICAgIDxCdXR0b25Tb2xpZCBjb2xvcj17Y29sb3J9IGJvcmRlckNvbG9yPXtiZ30gYmc9e2JnfSB7Li4ucmVzdH0gLz5cclxuICApIDogKFxyXG4gICAgPEJ1dHRvblNvbGlkXHJcbiAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgYm9yZGVyPXtgMXB4IHNvbGlkYH1cclxuICAgICAgYm9yZGVyQ29sb3I9e2JnfVxyXG4gICAgICBiZz17Ymd9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVuaXF1ZUlkIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIHNwYWNlLFxyXG4gIGJvcmRlcixcclxuICB0eXBvZ3JhcGh5LFxyXG4gIHNoYWRvdyxcclxuICBmbGV4Ym94LFxyXG4gIGxheW91dCxcclxufSBmcm9tIFwic3R5bGVkLXN5c3RlbVwiO1xyXG5cclxuY29uc3QgQ2hlY2tTdHlsZWQgPSBzdHlsZWQubGFiZWxgXHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBpbnB1dDpjaGVja2VkIH4gLmNoZWNrOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYxNGFcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcclxuICB9XHJcblxyXG4gICR7Ym9yZGVyfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuICAke2ZsZXhib3h9O1xyXG4gICR7bGF5b3V0fTtcclxuYDtcclxuXHJcbmNvbnN0IENoZWNrID0gc3R5bGVkLnNwYW5gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRvcDogLTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIG1pbi13aWR0aDogMjBweDtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYwYzhcIjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IGZyZWVcIjtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGNvbG9yOiAjZTJlNGU4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dH07XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuYDtcclxuXHJcbmNvbnN0IENoZWNrYm94ID0gKHtcclxuICBjaGlsZHJlbiA9IFwiS2VlcCBtZSBzaWduZWQgaW5cIixcclxuICBvbkNsaWNrID0gKCkgPT4ge30sXHJcbiAgLi4ucmVzdFxyXG59KSA9PiB7XHJcbiAgY29uc3QgdUlEID0gdW5pcXVlSWQoXCJjaGVja19cIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hlY2tTdHlsZWQgey4uLnJlc3R9IGh0bWxGb3I9e3VJRH0+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJkLW5vbmVcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD17dUlEfSAvPlxyXG4gICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwiY2hlY2tcIj48L0NoZWNrPlxyXG4gICAgICA8VGV4dD57Y2hpbGRyZW59PC9UZXh0PlxyXG4gICAgPC9DaGVja1N0eWxlZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBjb2xvcixcclxuICBzcGFjZSxcclxuICB0eXBvZ3JhcGh5LFxyXG4gIHNoYWRvdyxcclxuICBsYXlvdXQsXHJcbiAgYm9yZGVyLFxyXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcblxyXG5jb25zdCBJbnB1dFNvbGlkID0gc3R5bGVkLmlucHV0YFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC41NnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEuMjc1cmVtIDEuNzVyZW07XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6ICR7KHsgdGhlbWUgfSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJ9YH07XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAke2NvbG9yfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuICAke2xheW91dH07XHJcbiAgJHtib3JkZXJ9O1xyXG4gICY6Zm9jdXMsXHJcbiAgJjphY3RpdmUsXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lLCBmb2N1c0NvbG9yIH0pID0+IHRoZW1lLmNvbG9yc1tmb2N1c0NvbG9yXX07XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEFuaW1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG4gICR7bGF5b3V0fTtcclxuICAke2JvcmRlcn07XHJcbiAgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxLjI3NXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiAkeyh7IHRoZW1lIH0pID0+IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyfWB9O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubGlnaHR9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmRhcmt9O1xyXG4gICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyOiAkeyh7IHRoZW1lIH0pID0+IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fWB9O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBpbnB1dDpmb2N1cyB+IGxhYmVsIHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmxpZ2h0fTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya1NoYWRlfTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSAoe1xyXG4gIHZhcmlhbnQgPSBcInNvbGlkXCIsXHJcbiAgdHlwZSA9IFwidGV4dFwiLFxyXG4gIGZvY3VzQ29sb3IgPSBcInNlY29uZGFyeVwiLFxyXG4gIHBsYWNlaG9sZGVyLFxyXG4gIGNzcyxcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICByZXR1cm4gdmFyaWFudCA9PT0gXCJhbmltYXRpb25cIiA/IChcclxuICAgIDxJbnB1dEFuaW1hdGlvbiBjc3M9e2Nzc30gey4uLnJlc3R9PlxyXG4gICAgICA8aW5wdXQgd2lkdGg9XCIxMDAlXCIgdHlwZT17dHlwZX0gY29sb3I9XCJ0ZXh0XCIgYmc9XCJsaWdodFwiIC8+XHJcbiAgICAgIDxsYWJlbD57cGxhY2Vob2xkZXJ9PC9sYWJlbD5cclxuICAgIDwvSW5wdXRBbmltYXRpb24+XHJcbiAgKSA6IChcclxuICAgIDxJbnB1dFNvbGlkXHJcbiAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIGNvbG9yPVwidGV4dFwiXHJcbiAgICAgIGJnPVwibGlnaHRcIlxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgIGZvY3VzQ29sb3I9e2ZvY3VzQ29sb3J9XHJcbiAgICAgIGNzcz17Y3NzfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tIFwicG9saXNoZWRcIjtcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5cclxuY29uc3QgSW5wdXRHcm91cFN0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMjdweDtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gcmdiYSh0aGVtZS5jb2xvcnMuZGFyaywgMC40KX07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRHcm91cCA9ICh7XHJcbiAgdHlwZSA9IFwidGV4dFwiLFxyXG4gIGZvY3VzQ29sb3IgPSBcInNlY29uZGFyeVwiLFxyXG4gIGljb24gPSA8c3BhbiBjbGFzc05hbWU9XCJmYXIgZmEtZW52ZWxvcGVcIiAvPixcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPElucHV0R3JvdXBTdHlsZWQ+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBjb2xvcj1cInRleHRcIlxyXG4gICAgICAgIGJnPVwibGlnaHRcIlxyXG4gICAgICAgIGZvY3VzQ29sb3I9e2ZvY3VzQ29sb3J9XHJcbiAgICAgICAgcGw9XCI0LjEyNXJlbVwiXHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxJY29uIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj57aWNvbn08L0ljb24+XHJcbiAgICA8L0lucHV0R3JvdXBTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0R3JvdXA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0fTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBtaW4td2lkdGg6IDEwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTBweDtcclxuICAgICAgbWluLWhlaWdodDogMTBweDtcclxuICAgICAgbWF4LWhlaWdodDogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZGFya307XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcclxuXHJcbmNvbnN0IFNlY3Rpb24gPSAoeyB2YXJpYW50ID0gXCJzZWN0aW9uXCIsIC4uLnJlc3QgfSkgPT4ge1xyXG4gIHJldHVybiB2YXJpYW50ID09PSBcImhlcm9cIiA/IChcclxuICAgIDxCb3hcclxuICAgICAgcHQ9e1tcIjguNDM3NXJlbVwiLCBudWxsLCBudWxsLCBcIjExLjI1cmVtXCJdfVxyXG4gICAgICBwYj17W1wiMy43NXJlbVwiLCBudWxsLCBudWxsLCBcIjguNDM3NXJlbVwiXX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAvPlxyXG4gICkgOiAoXHJcbiAgICA8Qm94IHB5PXtbXCIzLjc1cmVtXCIsIG51bGwsIG51bGwsIFwiNy41cmVtXCJdfSB7Li4ucmVzdH0gLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcInJlYWN0LXNlbGVjdFwiO1xyXG5cclxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBbXHJcbiAgeyB2YWx1ZTogXCJjaG9jb2xhdGVcIiwgbGFiZWw6IFwiQ2hvY29sYXRlXCIgfSxcclxuICB7IHZhbHVlOiBcInN0cmF3YmVycnlcIiwgbGFiZWw6IFwiU3RyYXdiZXJyeVwiIH0sXHJcbiAgeyB2YWx1ZTogXCJ2YW5pbGxhXCIsIGxhYmVsOiBcIlZhbmlsbGFcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgZ2V0Q3VzdG9tU3R5bGVzID0gKHRoZW1lLCBhY2NlbnRDb2xvciwgYmcsIGJvcmRlciwgaW5kaWNhdG9yKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRyb3Bkb3duSW5kaWNhdG9yOiAoKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcGxheTogIWluZGljYXRvciAmJiBcIm5vbmVcIixcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBpbmRpY2F0b3JTZXBhcmF0b3I6ICgpID0+IHt9LFxyXG4gICAgb3B0aW9uOiAocHJvdmlkZWQsIHN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJvdmlkZWQsXHJcbiAgICAgICAgY29sb3I6IHN0YXRlLmlzU2VsZWN0ZWQgPyB0aGVtZS5jb2xvcnNbYWNjZW50Q29sb3JdIDogdGhlbWUuY29sb3JzLmRhcmssXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJnLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2w6IChwcm92aWRlZCwgc3RhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcm92aWRlZCxcclxuICAgICAgICBib3JkZXI6ICFib3JkZXJcclxuICAgICAgICAgID8gXCJub25lXCJcclxuICAgICAgICAgIDogc3RhdGUubWVudUlzT3BlbiB8fCBzdGF0ZS5pc0ZvY3VzZWRcclxuICAgICAgICAgID8gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yc1thY2NlbnRDb2xvcl19ICFpbXBvcnRhbnRgXHJcbiAgICAgICAgICA6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyfSAhaW1wb3J0YW50YCxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMC4yNXJlbSAxcmVtXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCI0NXB4XCIsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYmcsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBTZWxlY3RTdHlsZWQgPSAoe1xyXG4gIHRoZW1lLFxyXG4gIGJnID0gXCIjZmZmXCIsXHJcbiAgYm9yZGVyID0gdHJ1ZSxcclxuICBhY2NlbnRDb2xvciA9IFwic3VjY2Vzc1wiLFxyXG4gIG5hbWUgPSBcIml0ZW1cIixcclxuICBpbmRpY2F0b3IgPSB0cnVlLFxyXG4gIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucyxcclxuICAuLi5yZXN0XHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlbGVjdFxyXG4gICAgICBzdHlsZXM9e2dldEN1c3RvbVN0eWxlcyh0aGVtZSwgYWNjZW50Q29sb3IsIGJnLCBib3JkZXIsIGluZGljYXRvcil9XHJcbiAgICAgIGRlZmF1bHRWYWx1ZT17b3B0aW9uc1sxXX1cclxuICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgaW5zdGFuY2VJZD1cImluSWRcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWxlY3RTdHlsZWQpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGNvbG9yLCBzcGFjZSwgdHlwb2dyYXBoeSwgc2hhZG93IH0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmNvbnN0IFNwYW5TdHlsZWQgPSBzdHlsZWQuc3BhbmBcclxuICAke2NvbG9yfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuYDtcclxuXHJcbmNvbnN0IFNwYW4gPSAoeyAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIDxTcGFuU3R5bGVkIHsuLi5wcm9wc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGFuO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBzcGFjZSxcclxuICBib3JkZXIsXHJcbiAgdHlwb2dyYXBoeSxcclxuICBzaGFkb3csXHJcbiAgZmxleGJveCxcclxuICBsYXlvdXQsXHJcbn0gZnJvbSBcInN0eWxlZC1zeXN0ZW1cIjtcclxuXHJcbmNvbnN0IFN3aXRjaFN0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNzJweDtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IGFjdGl2ZSwgdGhlbWUsIGJnIH0pID0+XHJcbiAgICBhY3RpdmUgPyB0aGVtZS5jb2xvcnNbYmddIDogYCNlYWU5ZjJgfTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAke2JvcmRlcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbiAgJHtmbGV4Ym94fTtcclxuICAke2xheW91dH07XHJcbmA7XHJcblxyXG5jb25zdCBSb3VuZCA9IHN0eWxlZC5zcGFuYFxyXG4gIHdpZHRoOiAyMXB4O1xyXG4gIGhlaWdodDogMjFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICBsZWZ0OiAkeyh7IGFjdGl2ZSB9KSA9PiAoYWN0aXZlID8gYGNhbGMoMTAwJSAtIDMzcHgpYCA6IGAwYCl9O1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgdG9wOiAwO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5gO1xyXG5cclxuY29uc3QgU3dpdGNoID0gKHsgYmcgPSBcInNlY29uZGFyeVwiLCBvbkNsaWNrID0gKCkgPT4ge30sIC4uLnJlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN3aXRjaCA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcclxuICAgIG9uQ2xpY2soKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN3aXRjaFN0eWxlZFxyXG4gICAgICBiZz17Ymd9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgICBvbkNsaWNrPXtoYW5kbGVTd2l0Y2h9XHJcbiAgICAgIGFjdGl2ZT17YWN0aXZlID8gMSA6IDB9XHJcbiAgICA+XHJcbiAgICAgIDxSb3VuZCBhY3RpdmU9e2FjdGl2ZSA/IDEgOiAwfSAvPlxyXG4gICAgPC9Td2l0Y2hTdHlsZWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBjb2xvciwgc3BhY2UsIHR5cG9ncmFwaHksIHNoYWRvdyB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcblxyXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDEuMDYyNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjcxO1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG5gO1xyXG5cclxuY29uc3QgUGFyYWdyYXBoTGFyZ2UgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDEuMTg3NXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY5O1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG5gO1xyXG5cclxuY29uc3QgUGFyYWdyYXBoU21hbGwgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDAuOTM3NXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjczO1xyXG4gICR7Y29sb3J9O1xyXG4gICR7c3BhY2V9O1xyXG4gICR7dHlwb2dyYXBoeX07XHJcbiAgJHtzaGFkb3d9O1xyXG5gO1xyXG5cclxuY29uc3QgVGV4dCA9ICh7IHZhcmlhbnQsIC4uLnByb3BzIH0pID0+IHtcclxuICBsZXQgVGV4dFJlbmRlcjtcclxuXHJcbiAgc3dpdGNoICh2YXJpYW50KSB7XHJcbiAgICBjYXNlIFwic21cIjpcclxuICAgICAgVGV4dFJlbmRlciA9IFBhcmFncmFwaFNtYWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJsZ1wiOlxyXG4gICAgICBUZXh0UmVuZGVyID0gUGFyYWdyYXBoTGFyZ2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgVGV4dFJlbmRlciA9IFBhcmFncmFwaDtcclxuICB9XHJcblxyXG4gIHJldHVybiA8VGV4dFJlbmRlciBjb2xvcj1cInRleHRcIiB7Li4ucHJvcHN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBjb2xvciwgc3BhY2UsIHR5cG9ncmFwaHksIHNoYWRvdyB9IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xyXG5cclxuY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtc2l6ZTogY2FsYygxLjM1cmVtICsgMS4ydncpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMS4ycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLnhsfSB7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgfVxyXG5cclxuICAke2NvbG9yfTtcclxuICAke3NwYWNlfTtcclxuICAke3R5cG9ncmFwaHl9O1xyXG4gICR7c2hhZG93fTtcclxuYDtcclxuXHJcbmNvbnN0IEhlcm9UaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6IGNhbGMoMS41cmVtICsgM3Z3KTtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMDgzO1xyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UueGx9IHtcclxuICAgIGZvbnQtc2l6ZTogMy43NXJlbTtcclxuICB9XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbmA7XHJcblxyXG5jb25zdCBQcmVUaXRsZSA9IHN0eWxlZC5oNGBcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS42MztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5zZWNvbmRhcnl9ICFpbXBvcnRhbnQ7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbmA7XHJcblxyXG5jb25zdCBDYXJkVGl0bGUgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgJHtjb2xvcn07XHJcbiAgJHtzcGFjZX07XHJcbiAgJHt0eXBvZ3JhcGh5fTtcclxuICAke3NoYWRvd307XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9ICh7IHZhcmlhbnQsIC4uLnJlc3QgfSkgPT4ge1xyXG4gIGxldCBUaXRsZVN0eWxlZCA9IFNlY3Rpb25UaXRsZTtcclxuXHJcbiAgc3dpdGNoICh2YXJpYW50KSB7XHJcbiAgICBjYXNlIFwicHJlXCI6XHJcbiAgICAgIFRpdGxlU3R5bGVkID0gUHJlVGl0bGU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImNhcmRcIjpcclxuICAgICAgVGl0bGVTdHlsZWQgPSBDYXJkVGl0bGU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcImhlcm9cIjpcclxuICAgICAgVGl0bGVTdHlsZWQgPSBIZXJvVGl0bGU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgVGl0bGVTdHlsZWQgPSBTZWN0aW9uVGl0bGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPFRpdGxlU3R5bGVkIGNvbG9yPVwiaGVhZGluZ1wiIHsuLi5yZXN0fSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xyXG4iLCJpbXBvcnQgQm94IGZyb20gXCIuL0JveFwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4vVGl0bGVcIjtcclxuaW1wb3J0IFRleHQgZnJvbSBcIi4vVGV4dFwiO1xyXG5pbXBvcnQgQSBmcm9tIFwiLi9BXCI7XHJcbmltcG9ydCBCYWRnZSBmcm9tIFwiLi9CYWRnZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9TZWN0aW9uXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4vQ2hlY2tib3hcIjtcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSBcIi4vSW5wdXRHcm91cFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuL1NlbGVjdFwiO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gXCIuL1N3aXRjaFwiO1xyXG5pbXBvcnQgU3BhbiBmcm9tIFwiLi9TcGFuXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQm94LFxyXG4gIFRpdGxlLFxyXG4gIFRleHQsXHJcbiAgQSxcclxuICBCYWRnZSxcclxuICBCdXR0b24sXHJcbiAgU2VjdGlvbixcclxuICBJbnB1dCxcclxuICBDaGVja2JveCxcclxuICBJbnB1dEdyb3VwLFxyXG4gIFNlbGVjdCxcclxuICBTd2l0Y2gsXHJcbiAgU3BhbixcclxuICBMaXN0LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL0xvZ29cIjtcclxuaW1wb3J0IGltZ00gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9sMS9wbmcvbWVzc2FnZS5wbmdcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyIGJnLWVib255LWNsYXkgZGFyay1tb2RlLXRleHRzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIHsvKiA8IS0tIEN0YSBzZWN0aW9uIC0tPiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTEgcHQtbGctMjAgcGItMTMgcGItbGctMjAgYm9yZGVyLWJvdHRvbSBib3JkZXItd2lkdGgtMSBib3JkZXItZGVmYXVsdC1jb2xvci0yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXhsLTcgY29sLWxnLTEyXCJcclxuICAgICAgICAgICAgICAgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIGN0YS1jb250ZW50IHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGIteGwtMCBwYi05IHRleHQteGwtbGVmdCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNpemUtOCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRWwgcG9ydGFsIGRlIGNvbnRyYXRhY2nDs24gZGUgcHJvZmVzaW9uYWxlcyBtw6FzIGNvbXBsZXRvXHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtaGl0LWdyYXkgZm9udC1zaXplLTUgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbm9jw6kgcGVyc29uYXMgYW5zaW9zYXMgcG9yIHRyYWJhamFyIHkgZGFydGUgbG8gbWVqb3JcclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPCEtLSBjdGEtY29udGVudCBlbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC14bC01IGNvbC1sZy0xMlwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcz1cImZhZGUtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHsvKiA8IS0tIGN0YS1idG5zIHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRucyBkLWZsZXgganVzdGlmeS1jb250ZW50LXhsLWVuZCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLXhsLWNlbnRlciBmbGV4LXdyYXAgaC0xMDAgIG14LW40XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWdhbGxlcnkgYnRuLXhsIG14LTQgbXQtNiB0ZXh0LXVwcGVyY2FzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZ0NvbnRleHQudG9nZ2xlU2lnbkluTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgSW5pY2lhciBzZXNpw7NuXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWdyZWVuIGJ0bi1oLTYwIGJ0bi14bCBteC00IG10LTYgdGV4dC11cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGdDb250ZXh0LnRvZ2dsZVNpZ25VcE1vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlZ2lzdHJhcnNlXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDwhLS0gY3RhLWJ0bnMgZW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciAgcHQtMTIgcHQtbGctMTkgcGItMTAgcGItbGctMTlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgbWItbGctMCBtYi05XCI+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gZm9vdGVyIGxvZ28gc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDxMb2dvIHdoaXRlIGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvIG1iLTE0XCIgLz5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBmb290ZXIgbG9nbyBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIG1lZGlhIHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIG1iLTExXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nTX0gY2xhc3NOYW1lPVwiYWxpZ24tc2VsZi1jZW50ZXIgbXItM1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHkgcGwtNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wIGZvbnQtc2l6ZS00IHRleHQtd2hpdGVcIj5Db250YWN0ZW5vczo8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1iLTAgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgc29wb3J0ZUBwcm8ubmV0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogPCEtLSBtZWRpYSBzdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gd2lkZ2V0IHNvY2lhbCBpY29uIHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBsLTAgbGlzdC11bnN0eWxlZCBkLWZsZXggYWxpZ24taXRlbXMtZW5kIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgcHgtMyBtci0zIGZvbnQtc2l6ZS00IGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlZ3Vpbm9zIGVuOlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgcHgtMyBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3Zlci1jb2xvci1wcmltYXJ5IGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZiBmb250LXNpemUtMyBwdC0yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB4LTMgbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXItY29sb3ItcHJpbWFyeSBoZWFkaW5nLWRlZmF1bHQtY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXIgZm9udC1zaXplLTMgcHQtMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBweC0zIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyLWNvbG9yLXByaW1hcnkgaGVhZGluZy1kZWZhdWx0LWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbi1pbiBmb250LXNpemUtMyBwdC0yXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gd2lkZ2V0IHNvY2lhbCBpY29uIGVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTMgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0IHdpZGdldDIgbWItbWQtMCBtYi0xM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGZvb3RlciB3aWRnZXQgdGl0bGUgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBmb250LXNpemUtNCB0ZXh0LWdyYXkgbWItbWQtOCBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb21wYcOxw61hXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGZvb3RlciB3aWRnZXQgdGl0bGUgZW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSB3aWRnZXQgc29jaWFsIG1lbnUgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3aWRnZXQtbGlua3MgcGwtMCBsaXN0LXVuc3R5bGVkIGxpc3QtaG92ZXItcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU29icmUgbm9zb3Ryb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0YW5vc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtcGxlb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVuc2FcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSB3aWRnZXQgc29jaWFsIG1lbnUgZW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTMgY29sLXhzLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItd2lkZ2V0IHdpZGdldDMgbWItc20tMCBtYi0xM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGZvb3RlciB3aWRnZXQgdGl0bGUgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBmb250LXNpemUtNCB0ZXh0LWdyYXkgbWItbWQtOCBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0b1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBmb290ZXIgd2lkZ2V0IHRpdGxlIGVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gd2lkZ2V0IHNvY2lhbCBtZW51IHN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwid2lkZ2V0LWxpbmtzIHBsLTAgbGlzdC11bnN0eWxlZCBsaXN0LWhvdmVyLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhlYWRpbmctZGVmYXVsdC1jb2xvciBmb250LXNpemUtNCBmb250LXdlaWdodC1ub3JtYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhcmFjdGVyw61zdGljYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVjaW9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm90aWNpYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb3BvcnRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gd2lkZ2V0IHNvY2lhbCBtZW51IGVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wtc20tMyBjb2wteHMtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci13aWRnZXQgd2lkZ2V0NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGZvb3RlciB3aWRnZXQgdGl0bGUgc3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndpZGdldC10aXRsZSBmb250LXNpemUtNCB0ZXh0LWdyYXkgbWItbWQtOCBtYi03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMZWdhbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBmb290ZXIgd2lkZ2V0IHRpdGxlIGVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndpZGdldC1saW5rcyBwbC0wIGxpc3QtdW5zdHlsZWQgbGlzdC1ob3Zlci1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcml2YWNpZGFkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVMOpcm1pbm9zICZhbXA7IENvbmRpY2lvbmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaGVhZGluZy1kZWZhdWx0LWNvbG9yIGZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9sw610aWNhIGRlIHJlZW1ib2xzb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Gb290ZXJcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgRHJvcGRvd24gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IHVzZVNjcm9sbFBvc2l0aW9uIH0gZnJvbSBcIkBuOHRiMXQvdXNlLXNjcm9sbC1wb3NpdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VXaW5kb3dTaXplIH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd1NpemVcIjtcclxuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xyXG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gXCIuLi9PZmZjYW52YXNcIjtcclxuaW1wb3J0IE5lc3RlZE1lbnUgZnJvbSBcIi4uL05lc3RlZE1lbnVcIjtcclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Mb2dvXCI7XHJcbmltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gXCIuL21lbnVJdGVtc1wiO1xyXG5cclxuaW1wb3J0IGltZ1AgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9oZWFkZXItcHJvZmlsZS5wbmdcIjtcclxuXHJcbmNvbnN0IFNpdGVIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICAmLnNjcm9sbGluZyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICB9XHJcbiAgICAmLnJldmVhbC1oZWFkZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDEycHggMzRweCAtMTFweCByZ2JhKDY1LCA2MiwgMTAxLCAwLjEpO1xyXG4gICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+IChkYXJrID8gdGhlbWUuY29sb3JzLmRhcmsgOiBcIiNmZmZcIil9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRvZ2dsZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgY29sb3I6ICR7KHsgZGFyaywgdGhlbWUgfSkgPT5cclxuICAgIGRhcmsgPyB0aGVtZS5jb2xvcnMubGlnaHRTaGFkZSA6IHRoZW1lLmNvbG9ycy5oZWFkaW5nfSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkeyh7IGRhcmssIHRoZW1lIH0pID0+XHJcbiAgICBkYXJrID8gdGhlbWUuY29sb3JzLmxpZ2h0U2hhZGUgOiB0aGVtZS5jb2xvcnMuaGVhZGluZ30haW1wb3J0YW50O1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBbc2hvd1Njcm9sbGluZywgc2V0U2hvd1Njcm9sbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dSZXZlYWwsIHNldFNob3dSZXZlYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xyXG5cclxuICB1c2VTY3JvbGxQb3NpdGlvbigoeyBwcmV2UG9zLCBjdXJyUG9zIH0pID0+IHtcclxuICAgIGlmIChjdXJyUG9zLnkgPCAwKSB7XHJcbiAgICAgIHNldFNob3dTY3JvbGxpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93U2Nyb2xsaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyUG9zLnkgPCAtMzAwKSB7XHJcbiAgICAgIHNldFNob3dSZXZlYWwodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTaG93UmV2ZWFsKGZhbHNlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTaXRlSGVhZGVyXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgc2l0ZS1oZWFkZXIgc2l0ZS1oZWFkZXItLXN0aWNreSAgc2l0ZS1oZWFkZXItLWFic29sdXRlIHB5LTcgcHkteHMtMCBzdGlja3ktaGVhZGVyICR7XHJcbiAgICAgICAgICBnQ29udGV4dC5oZWFkZXIuYmdDbGFzc1xyXG4gICAgICAgIH0gJHtcclxuICAgICAgICAgIGdDb250ZXh0LmhlYWRlci5hbGlnbiA9PT0gXCJsZWZ0XCJcclxuICAgICAgICAgICAgPyBcInNpdGUtaGVhZGVyLS1tZW51LWxlZnQgXCJcclxuICAgICAgICAgICAgOiBnQ29udGV4dC5oZWFkZXIuYWxpZ24gPT09IFwicmlnaHRcIlxyXG4gICAgICAgICAgICA/IFwic2l0ZS1oZWFkZXItLW1lbnUtcmlnaHQgXCJcclxuICAgICAgICAgICAgOiBcInNpdGUtaGVhZGVyLS1tZW51LWNlbnRlciBcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAke2dDb250ZXh0LmhlYWRlci50aGVtZSA9PT0gXCJkYXJrXCIgPyBcImRhcmstbW9kZS10ZXh0c1wiIDogXCIgXCJ9ICR7XHJcbiAgICAgICAgICBzaG93U2Nyb2xsaW5nID8gXCJzY3JvbGxpbmdcIiA6IFwiXCJcclxuICAgICAgICB9ICR7XHJcbiAgICAgICAgICBnQ29udGV4dC5oZWFkZXIucmV2ZWFsICYmXHJcbiAgICAgICAgICBzaG93UmV2ZWFsICYmXHJcbiAgICAgICAgICBnQ29udGV4dC5oZWFkZXIudGhlbWUgPT09IFwiZGFya1wiXHJcbiAgICAgICAgICAgID8gXCJyZXZlYWwtaGVhZGVyIGJnLWJsYWNraXNoLWJsdWVcIlxyXG4gICAgICAgICAgICA6IGdDb250ZXh0LmhlYWRlci5yZXZlYWwgJiYgc2hvd1JldmVhbFxyXG4gICAgICAgICAgICA/IFwicmV2ZWFsLWhlYWRlclwiXHJcbiAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgIH1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgICAgZmx1aWQ9e2dDb250ZXh0LmhlYWRlci5pc0ZsdWlkfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtnQ29udGV4dC5oZWFkZXIuaXNGbHVpZCA/IFwicHItbGctOSBwbC1sZy05XCIgOiBcIlwifVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHNpdGUtbmF2YmFyIG9mZmNhbnZhcy1hY3RpdmUgbmF2YmFyLWV4cGFuZC1sZyBweC0wIHB5LTAgc3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICB7LyogPCEtLSBCcmFuZCBMb2dvLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5cclxuICAgICAgICAgICAgICA8TG9nbyB3aGl0ZT17Z0NvbnRleHQuaGVhZGVyLnRoZW1lID09PSBcImRhcmtcIn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdi13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtYWluLW1lbnUgZC1ub25lIGQtbGctZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsLCBpc0V4dGVybmFsID0gZmFsc2UsIG5hbWUsIGl0ZW1zLCAuLi5yZXN0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzU3ViSXRlbXMgPSBBcnJheS5pc0FycmF5KGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e25hbWUgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2hhc1N1Ykl0ZW1zID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGRyb3Bkb3duXCIgey4uLnJlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGRyb3Bkb3duLXRvZ2dsZSBnci10b2dnbGUtYXJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc21hbGwtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3ItbWVudS1kcm9wZG93biBkcm9wZG93bi1tZW51IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKHN1Ykl0ZW0sIGluZGV4U3ViKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNJbm5lclN1Ykl0ZW1zID0gQXJyYXkuaXNBcnJheShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViSXRlbS5pdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViSXRlbS5uYW1lICsgaW5kZXhTdWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzSW5uZXJTdWJJdGVtcyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZSBnci10b2dnbGUtYXJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zbWFsbC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJnci1tZW51LWRyb3Bkb3duIGRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJJdGVtLml0ZW1zLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtSW5uZXIsIGluZGV4SW5uZXJNb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3AtbWVudS1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlubmVyLm5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhJbm5lck1vc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbUlubmVyLmlzRXh0ZXJuYWwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtpdGVtSW5uZXIubmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1Jbm5lci5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2l0ZW1Jbm5lci5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntpdGVtSW5uZXIubGFiZWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wLW1lbnUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5pc0V4dGVybmFsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHtzdWJJdGVtLm5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViSXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3N1Ykl0ZW0ubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzdWJJdGVtLmxhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgey4uLnJlc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNFeHRlcm5hbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7bmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke25hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uID09PSBcImN0YVwiICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1idG4gbWwtYXV0byBtbC1sZy0wIG1yLTYgbXItbGctMCBkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGJ0biBidG4tJHtnQ29udGV4dC5oZWFkZXIudmFyaWFudH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7Z0NvbnRleHQuaGVhZGVyLmJ1dHRvblRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX0gKi99XHJcblxyXG4gICAgICAgICAgICB7Z0NvbnRleHQuaGVhZGVyLmJ1dHRvbiA9PT0gXCJwcm9maWxlXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWJ0bi1kZXZpZGVyIG1sLWF1dG8gbWwtbGctNSBwbC0yIGQtbm9uZSBkLXhzLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC0zIG1sLTcgZm9udC1zaXplLTcgbm90aWZpY2F0aW9uLWJsb2NrIGZsZXgteS1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iZWxsIGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGNvdW50IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBjaXJjbGUtMjQgYm9yZGVyIGJvcmRlci13aWR0aC0zIGJvcmRlciBib3JkZXItd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgM1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd24gY2xhc3NOYW1lPVwic2hvdy1nci1kcm9wZG93biBweS01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2lsZSBtZWRpYSBtbC03IGZsZXgteS1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdQfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duIGhlYWRpbmctZGVmYXVsdC1jb2xvciBtbC02XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaXplLndpZHRoIDw9IDk5MSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyLW1lbnUtZHJvcGRvd24gYm9yZGVyLTAgYm9yZGVyLXdpZHRoLTIgcHktMiB3LWF1dG8gYmctZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHB5LTIgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHB5LTIgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0IFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiIGRyb3Bkb3duLWl0ZW0gcHktMiB0ZXh0LXJlZCBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uTWVudT5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGdyLW1lbnUtZHJvcGRvd24gZHJvcGRvd24tcmlnaHQgYm9yZGVyLTAgYm9yZGVyLXdpZHRoLTIgcHktMiB3LWF1dG8gYmctZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHB5LTIgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXR0aW5nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIHB5LTIgZm9udC1zaXplLTMgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtMXAyIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0IFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiIGRyb3Bkb3duLWl0ZW0gcHktMiB0ZXh0LXJlZCBmb250LXNpemUtMyBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC0xcDIgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZyBPdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtnQ29udGV4dC5oZWFkZXIuYnV0dG9uID09PSBcImFjY291bnRcIiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYnRucyBoZWFkZXItYnRuLWRldmlkZXIgbWwtYXV0byBwci0yIG1sLWxnLTYgZC1ub25lIGQteHMtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi10cmFuc3BhcmVudCB0ZXh0LXVwcGVyY2FzZSBmb250LXNpemUtMyBoZWFkaW5nLWRlZmF1bHQtY29sb3IgZm9jdXMtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVTaWduSW5Nb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBJbmljaWFyIHNlc2nDs25cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tJHtnQ29udGV4dC5oZWFkZXIudmFyaWFudH0gdGV4dC11cHBlcmNhc2UgZm9udC1zaXplLTNgfVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVTaWduVXBNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZWdpc3RyYXJzZVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPFRvZ2dsZUJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdmJhci10b2dnbGVyIGJ0bi1jbG9zZS1vZmYtY2FudmFzIG1sLTMgJHtcclxuICAgICAgICAgICAgICAgIGdDb250ZXh0LnZpc2libGVPZmZDYW52YXMgPyBcImNvbGxhcHNlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI21vYmlsZS1tZW51XCJcclxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibW9iaWxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtnQ29udGV4dC50b2dnbGVPZmZDYW52YXN9XHJcbiAgICAgICAgICAgICAgZGFyaz17Z0NvbnRleHQuaGVhZGVyLnRoZW1lID09PSBcImRhcmtcIiA/IDEgOiAwfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1zaW1wbGUtcmVtb3ZlIGljb24tY2xvc2VcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZW51LTM0IGljb24tYnVyZ2VyIGQtYmxvY2tcIj48L2k+XHJcbiAgICAgICAgICAgIDwvVG9nZ2xlQnV0dG9uPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvU2l0ZUhlYWRlcj5cclxuICAgICAgPE9mZmNhbnZhc1xyXG4gICAgICAgIHNob3c9e2dDb250ZXh0LnZpc2libGVPZmZDYW52YXN9XHJcbiAgICAgICAgb25IaWRlT2ZmY2FudmFzPXtnQ29udGV4dC50b2dnbGVPZmZDYW52YXN9XHJcbiAgICAgID5cclxuICAgICAgICA8TmVzdGVkTWVudSBtZW51SXRlbXM9e21lbnVJdGVtc30gLz5cclxuICAgICAgPC9PZmZjYW52YXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuIiwiZXhwb3J0IGNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcImhvbWVcIixcclxuICAgIGxhYmVsOiBcIkhvbWVcIixcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgbmFtZTogXCJcIiwgbGFiZWw6IFwiSG9tZSAxXCIgfSxcclxuICAgICAgeyBuYW1lOiBcImxhbmRpbmctMlwiLCBsYWJlbDogXCJIb21lIDJcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwibGFuZGluZy0zXCIsIGxhYmVsOiBcIkhvbWUgM1wiIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJwYWdlc1wiLFxyXG4gICAgbGFiZWw6IFwiUGFnZXNcIixcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcImpvYi1wYWdlc1wiLFxyXG4gICAgICAgIGxhYmVsOiBcIkpvYiBQYWdlc1wiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IG5hbWU6IFwic2VhcmNoLWdyaWRcIiwgbGFiZWw6IFwiSm9iIEdyaWRcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInNlYXJjaC1saXN0XCIsIGxhYmVsOiBcIkpvYiBMaXN0XCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJqb2ItZGV0YWlsc1wiLCBsYWJlbDogXCJKb2IgRGV0YWlsc1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiZGFzaGJvYXJkXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiRGFzaGJvYXJkXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgbmFtZTogXCJkYXNoYm9hcmQtbWFpblwiLCBsYWJlbDogXCJEYXNoYm9hcmQgTWFpblwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiZGFzaGJvYXJkLXNldHRpbmdzXCIsIGxhYmVsOiBcIkRhc2hib2FyZCBTZXR0aW5nc1wiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZGFzaGJvYXJkLWFwcGxpY2FudHNcIixcclxuICAgICAgICAgICAgbGFiZWw6IFwiRGFzaGJvYXJkIEFwcGxpY2FudHNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiZGFzaGJvYXJkLWpvYnNcIiwgbGFiZWw6IFwiRGFzaGJvYXJkIFBvc3RlZCBKb2JzXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJjYW5kaWRhdGVcIixcclxuICAgICAgICBsYWJlbDogXCJDYW5kaWRhdGUgUGFnZXNcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcImNhbmRpZGF0ZS1wcm9maWxlXCIsIGxhYmVsOiBcIkNhbmRpZGF0ZSBQcm9maWxlIDAxXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJjYW5kaWRhdGUtcHJvZmlsZS0yXCIsIGxhYmVsOiBcIkNhbmRpZGF0ZSBQcm9maWxlIDAyXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJzZWFyY2hcIixcclxuICAgICAgICBsYWJlbDogXCJTZWFyY2ggUGFnZXNcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcInNlYXJjaC1ncmlkXCIsIGxhYmVsOiBcIlNlYXJjaCBHcmlkXCIgfSxcclxuICAgICAgICAgIHsgbmFtZTogXCJzZWFyY2gtbGlzdFwiLCBsYWJlbDogXCJTZWFyY2ggTGlzdCAwMVwiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwic2VhcmNoLWxpc3QtMlwiLCBsYWJlbDogXCJTZWFyY2ggTGlzdCAwMlwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiY29tcGFueS1wcm9maWxlXCIsXHJcbiAgICAgICAgbGFiZWw6IFwiQ29tcGFueSBQcm9maWxlXCIsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCJlc3NlbnRpYWxcIixcclxuICAgICAgICBsYWJlbDogXCJFc3NlbnRpYWxcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyBuYW1lOiBcImZhcVwiLCBsYWJlbDogXCJGQVFcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcIjQwNFwiLCBsYWJlbDogXCI0MDRcIiB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInByaWNpbmdcIiwgbGFiZWw6IFwiUHJpY2luZ1wiIH0sXHJcbiAgICAgICAgICB7IG5hbWU6IFwiY29udGFjdFwiLCBsYWJlbDogXCJDb250YWN0XCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiaHR0cHM6Ly91eHRoZW1lLm5ldC9wcm9kdWN0LXN1cHBvcnQvXCIsXHJcbiAgICBsYWJlbDogXCJTdXBwb3J0XCIsXHJcbiAgICBpc0V4dGVybmFsOiB0cnVlLFxyXG4gIH0sXHJcbl07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgSGVsbWV0IGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XHJcblxyXG5pbXBvcnQgU2lkZWJhckRhc2hib2FyZCBmcm9tIFwiLi4vU2lkZWJhckRhc2hib2FyZFwiO1xyXG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tIFwiLi4vTW9kYWxWaWRlb1wiO1xyXG5pbXBvcnQgTW9kYWxBcHBsaWNhdGlvbiBmcm9tIFwiLi4vTW9kYWxBcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgTW9kYWxTaWduSW4gZnJvbSBcIi4uL01vZGFsU2lnbkluXCI7XHJcbmltcG9ydCBNb2RhbFNpZ25VcCBmcm9tIFwiLi4vTW9kYWxTaWduVXBcIjtcclxuXHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuXHJcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsU3R5bGVcIjtcclxuXHJcbmltcG9ydCBpbWdGYXZpY29uIGZyb20gXCIuLi8uLi9hc3NldHMvZmF2aWNvbi5wbmdcIjtcclxuXHJcbmltcG9ydCB7IGdldCwgbWVyZ2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG4vLyB0aGUgZnVsbCB0aGVtZSBvYmplY3RcclxuaW1wb3J0IHsgdGhlbWUgYXMgYmFzZVRoZW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcblxyXG5jb25zdCBMb2FkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHotaW5kZXg6IDk5OTk5OTk5OTk7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dCAwLjVzO1xyXG4gICYuaW5BY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbmA7XHJcblxyXG4vLyBvcHRpb25zIGZvciBkaWZmZXJlbnQgY29sb3IgbW9kZXNcclxuY29uc3QgbW9kZXMgPSB7IGxpZ2h0OiBcImxpZ2h0XCIsIGRhcms6IFwiZGFya1wiIH07XHJcblxyXG4vLyBtZXJnZSB0aGUgY29sb3IgbW9kZSB3aXRoIHRoZSBiYXNlIHRoZW1lXHJcbi8vIHRvIGNyZWF0ZSBhIG5ldyB0aGVtZSBvYmplY3RcclxuY29uc3QgZ2V0VGhlbWUgPSAobW9kZSkgPT5cclxuICBtZXJnZSh7fSwgYmFzZVRoZW1lLCB7XHJcbiAgICBjb2xvcnM6IGdldChiYXNlVGhlbWUuY29sb3JzLm1vZGVzLCBtb2RlLCBiYXNlVGhlbWUuY29sb3JzKSxcclxuICB9KTtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBwYWdlQ29udGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgZ0NvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG5cclxuICBjb25zdCBbdmlzaWJsZUxvYWRlciwgc2V0VmlzaWJsZUxvYWRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEFPUy5pbml0KHsgb25jZTogdHJ1ZSB9KTtcclxuICAgIHNldFZpc2libGVMb2FkZXIoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gTmF2YmFyIHN0eWxlIGJhc2VkIG9uIHNjcm9sbFxyXG4gIGNvbnN0IGVsZVJlZiA9IHVzZVJlZigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwicG9wc3RhdGVcIixcclxuICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gVGhlIHBvcHN0YXRlIGV2ZW50IGlzIGZpcmVkIGVhY2ggdGltZSB3aGVuIHRoZSBjdXJyZW50IGhpc3RvcnkgZW50cnkgY2hhbmdlcy5cclxuICAgICAgICBnQ29udGV4dC5jbG9zZU9mZkNhbnZhcygpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcInB1c2hTdGF0ZVwiLFxyXG4gICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyBUaGUgcHVzaHN0YXRlIGV2ZW50IGlzIGZpcmVkIGVhY2ggdGltZSB3aGVuIHRoZSBjdXJyZW50IGhpc3RvcnkgZW50cnkgY2hhbmdlcy5cclxuICAgICAgICBnQ29udGV4dC5jbG9zZU9mZkNhbnZhcygpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICB9LCBbZ0NvbnRleHRdKTtcclxuXHJcbiAgaWYgKHBhZ2VDb250ZXh0LmxheW91dCA9PT0gXCJiYXJlXCIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyXHJcbiAgICAgICAgdGhlbWU9e1xyXG4gICAgICAgICAgZ0NvbnRleHQudGhlbWVEYXJrID8gZ2V0VGhlbWUobW9kZXMuZGFyaykgOiBnZXRUaGVtZShtb2Rlcy5saWdodClcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGRhdGEtdGhlbWUtbW9kZS1wYW5lbC1hY3RpdmUgZGF0YS10aGVtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5KdXN0Q2FtcDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj17aW1nRmF2aWNvbn0gLz5cclxuICAgICAgICAgIDwvSGVsbWV0PlxyXG4gICAgICAgICAgPExvYWRlciBpZD1cImxvYWRpbmdcIiBjbGFzc05hbWU9e3Zpc2libGVMb2FkZXIgPyBcIlwiIDogXCJpbkFjdGl2ZVwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9uZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xvYWRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS13cmFwcGVyIG92ZXJmbG93LWhpZGRlblwiIHJlZj17ZWxlUmVmfT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE1vZGFsVmlkZW8gLz5cclxuICAgICAgICAgIDxNb2RhbEFwcGxpY2F0aW9uIC8+XHJcbiAgICAgICAgICA8TW9kYWxTaWduSW4gLz5cclxuICAgICAgICAgIDxNb2RhbFNpZ25VcCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBhZ2VDb250ZXh0LmxheW91dCA9PT0gXCJkYXNoYm9hcmRcIikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRoZW1lUHJvdmlkZXJcclxuICAgICAgICB0aGVtZT17XHJcbiAgICAgICAgICBnQ29udGV4dC50aGVtZURhcmsgPyBnZXRUaGVtZShtb2Rlcy5kYXJrKSA6IGdldFRoZW1lKG1vZGVzLmxpZ2h0KVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgZGF0YS10aGVtZS1tb2RlLXBhbmVsLWFjdGl2ZSBkYXRhLXRoZW1lPVwibGlnaHRcIj5cclxuICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgPHRpdGxlPkp1c3RDYW1wPC90aXRsZT5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPXtpbWdGYXZpY29ufSAvPlxyXG4gICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICA8TG9hZGVyIGlkPVwibG9hZGluZ1wiIGNsYXNzTmFtZT17dmlzaWJsZUxvYWRlciA/IFwiXCIgOiBcImluQWN0aXZlXCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtY2lyY2xlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib25lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTG9hZGVyPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLXdyYXBwZXIgb3ZlcmZsb3ctaGlkZGVuIGJnLWRlZmF1bHQtMlwiXHJcbiAgICAgICAgICAgIHJlZj17ZWxlUmVmfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SGVhZGVyIGlzRGFyaz17Z0NvbnRleHQuaGVhZGVyRGFya30gLz5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoYm9hcmQgLz5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPE1vZGFsVmlkZW8gLz5cclxuICAgICAgICAgIDxNb2RhbEFwcGxpY2F0aW9uIC8+XHJcbiAgICAgICAgICA8TW9kYWxTaWduSW4gLz5cclxuICAgICAgICAgIDxNb2RhbFNpZ25VcCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyXHJcbiAgICAgICAgdGhlbWU9e1xyXG4gICAgICAgICAgZ0NvbnRleHQudGhlbWVEYXJrID8gZ2V0VGhlbWUobW9kZXMuZGFyaykgOiBnZXRUaGVtZShtb2Rlcy5saWdodClcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGRhdGEtdGhlbWUtbW9kZS1wYW5lbC1hY3RpdmUgZGF0YS10aGVtZT1cImxpZ2h0XCI+XHJcbiAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5KdXN0Q2FtcDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj17aW1nRmF2aWNvbn0gLz5cclxuICAgICAgICAgIDwvSGVsbWV0PlxyXG4gICAgICAgICAgPExvYWRlciBpZD1cImxvYWRpbmdcIiBjbGFzc05hbWU9e3Zpc2libGVMb2FkZXIgPyBcIlwiIDogXCJpbkFjdGl2ZVwifSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLXdyYXBwZXIgb3ZlcmZsb3ctaGlkZGVuXCIgcmVmPXtlbGVSZWZ9PlxyXG4gICAgICAgICAgICA8SGVhZGVyIGlzRGFyaz17Z0NvbnRleHQuaGVhZGVyRGFya30gLz5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG5cclxuICAgICAgICAgICAgPEZvb3RlciBpc0Rhcms9e2dDb250ZXh0LmZvb3RlckRhcmt9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8TW9kYWxWaWRlbyAvPlxyXG4gICAgICAgICAgPE1vZGFsQXBwbGljYXRpb24gLz5cclxuICAgICAgICAgIDxNb2RhbFNpZ25JbiAvPlxyXG4gICAgICAgICAgPE1vZGFsU2lnblVwIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xheW91dCciLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBpbWdMMUxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dvLW1haW4tYmxhY2sucG5nXCI7XHJcbmltcG9ydCBpbWdMMUxvZ29XaGl0ZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL2xvZ28tbWFpbi13aGl0ZS5wbmdcIjtcclxuXHJcbmNvbnN0IExvZ28gPSAoeyB3aGl0ZSwgaGVpZ2h0LCBjbGFzc05hbWUgPSBcIlwiLCAuLi5yZXN0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgPGEgY2xhc3NOYW1lPXtgZC1ibG9jayAke2NsYXNzTmFtZX1gfSB7Li4ucmVzdH0+XHJcbiAgICAgICAge3doaXRlID8gKFxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltZ0wxTG9nb1doaXRlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8aW1nIHNyYz17aW1nTDFMb2dvfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbztcclxuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0xvZ28nXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IFByb2ZpbGVTaWRlYmFyIGZyb20gXCIuLi9Qcm9maWxlU2lkZWJhclwiO1xyXG5cclxuaW1wb3J0IGltZ0YxIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2UvbDIvcG5nL2ZlYXR1cmVkLWpvYi1sb2dvLTEucG5nXCI7XHJcbmltcG9ydCBpbWdGMiBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL2wxL3BuZy9mZWF0dXJlLWJyYW5kLTEucG5nXCI7XHJcbmltcG9ydCBpbWdGMyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3N2Zy9oYXJ2YXJkLnN2Z1wiO1xyXG5pbXBvcnQgaW1nRjQgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9zdmcvbWl0LnN2Z1wiO1xyXG5pbXBvcnQgaW1nTCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL3N2Zy9pY29uLWxvYWN0aW9uLXBpbi1ibGFjay5zdmdcIjtcclxuXHJcbmNvbnN0IE1vZGFsU3R5bGVkID0gc3R5bGVkKE1vZGFsKWBcclxuICAvKiAmLm1vZGFsIHtcclxuICAgIHotaW5kZXg6IDEwMDUwO1xyXG4gIH0gKi9cclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1hcmdpbjogMS43NXJlbSBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBNb2RhbFNpZ25JbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBnQ29udGV4dC50b2dnbGVBcHBsaWNhdGlvbk1vZGFsKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFN0eWxlZFxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGNlbnRlcmVkXHJcbiAgICAgIHNob3c9e2dDb250ZXh0LmFwcGxpY2F0aW9uTW9kYWxWaXNpYmxlfVxyXG4gICAgICBvbkhpZGU9e2dDb250ZXh0LnRvZ2dsZUFwcGxpY2F0aW9uTW9kYWx9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtMzIgYnRuLXJlc2V0IGJnLXdoaXRlIHBvcy1hYnMtdHIgbXQtbWQtbjYgbXItbGctbjYgZm9jdXMtcmVzZXQgei1pbmRleC1zdXBwZXJcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLW1vZGFsLW1haW4gYmctd2hpdGUgcm91bmRlZC04IG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gTGVmdCBTaWRlYmFyIFN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wteGwtMyBjb2wtbGctNCBjb2wtbWQtNSBtYi0xMyBtYi1sZy0wIGJvcmRlci1yaWdodCBib3JkZXItbWVyY3VyeVwiPlxyXG4gICAgICAgICAgICAgICAgPFByb2ZpbGVTaWRlYmFyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gTGVmdCBTaWRlYmFyIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gTWlkZGxlIENvbnRlbnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC14bC02IGNvbC1sZy04IGNvbC1tZC03IG9yZGVyLTIgb3JkZXItbGctMSBib3JkZXItcmlnaHQgYm9yZGVyLW1lcmN1cnlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC00IG92ZXJmbG93LWF1dG8gaC0xMTczXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIEV4Y2VycHQgU3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByLXhsLTAgcHIteHhsLTE0IHAtNSBweC14cy0xMiBwdC03IHBiLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zaXplLTYgZm9udC13ZWlnaHQtc2VtaWJvbGQgbWItNyBtdC01IHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IG1iLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEEgdGFsZW50ZWQgcHJvZmVzc2lvbmFsIHdpdGggYW4gYWNhZGVtaWMgYmFja2dyb3VuZCBpbiBJVFxyXG4gICAgICAgICAgICAgICAgICAgICAgYW5kIHByb3ZlbiBjb21tZXJjaWFsIGRldmVsb3BtZW50IGV4cGVyaWVuY2UgYXMgQysrXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXZlbG9wZXIgc2luY2UgMTk5OS4gSGFzIGEgc291bmQga25vd2xlZGdlIG9mIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc29mdHdhcmUgZGV2ZWxvcG1lbnQgbGlmZSBjeWNsZS4gV2FzIGludm9sdmVkIGluIG1vcmUgdGhhblxyXG4gICAgICAgICAgICAgICAgICAgICAgMTQwIHNvZnR3YXJlIGRldmVsb3BtZW50IG91dHNvdXJjaW5nIHByb2plY3RzLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9ncmFtbWluZyBMYW5ndWFnZXM6IEMvQysrLCAuTkVUIEMrKywgUHl0aG9uLCBCYXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgU2hlbGwsIFBFUkwsIFJlZ3VsYXIgZXhwcmVzc2lvbnMsIFB5dGhvbiwgQWN0aXZlLXNjcmlwdC5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBFeGNlcnB0IEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNraWxscyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItbWVyY3VyeSBwci14bC0wIHByLXh4bC0xNCBwLTUgcGwteHMtMTIgcHQtNyBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS02IGZvbnQtd2VpZ2h0LXNlbWlib2xkIG1iLTcgbXQtNSB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNraWxsc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctcG9sYXIgdGV4dC1ibGFjay0yICBtci02IHB4LTcgbXQtMiBtYi0yIGZvbnQtc2l6ZS0zIHJvdW5kZWQtMyBtaW4taGVpZ2h0LTMyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiZy1wb2xhciB0ZXh0LWJsYWNrLTIgIG1yLTYgcHgtNyBtdC0yIG1iLTIgZm9udC1zaXplLTMgcm91bmRlZC0zIG1pbi1oZWlnaHQtMzIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2lyZWZyYW1pbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJnLXBvbGFyIHRleHQtYmxhY2stMiAgbXItNiBweC03IG10LTIgbWItMiBmb250LXNpemUtMyByb3VuZGVkLTMgbWluLWhlaWdodC0zMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm90b3R5cGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctcG9sYXIgdGV4dC1ibGFjay0yICBtci02IHB4LTcgbXQtMiBtYi0yIGZvbnQtc2l6ZS0zIHJvdW5kZWQtMyBtaW4taGVpZ2h0LTMyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiZy1wb2xhciB0ZXh0LWJsYWNrLTIgIG1yLTYgcHgtNyBtdC0yIG1iLTIgZm9udC1zaXplLTMgcm91bmRlZC0zIG1pbi1oZWlnaHQtMzIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2F0ZXJmYWxsIE1vZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJiZy1wb2xhciB0ZXh0LWJsYWNrLTIgIG1yLTYgcHgtNyBtdC0yIG1iLTIgZm9udC1zaXplLTMgcm91bmRlZC0zIG1pbi1oZWlnaHQtMzIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IExheW91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctcG9sYXIgdGV4dC1ibGFjay0yICBtci02IHB4LTcgbXQtMiBtYi0yIGZvbnQtc2l6ZS0zIHJvdW5kZWQtMyBtaW4taGVpZ2h0LTMyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb3dzaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyogPCEtLSBTa2lsbHMgRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gQ2FyZCBTZWN0aW9uIFN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdG9wIGJvcmRlci1tZXJjdXJ5IHAtNSBwbC14cy0xMiBwdC03IHBiLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1zaXplLTYgZm9udC13ZWlnaHQtc2VtaWJvbGQgbWItNyBtdC01IHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgV29yayBFeHByZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhcmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwci0xMSBtYi05IGZsZXgtd3JhcCBmbGV4LXNtLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNxdWFyZS03MiBkLWJsb2NrIG1yLTggbWItNyBtYi1zbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ0YxfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBtdC1uMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTUgZm9udC13ZWlnaHQtc2VtaWJvbGQgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVhZCBQcm9kdWN0IERlc2lnbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1kZWZhdWx0LWNvbG9yIGxpbmUtaGVpZ2h0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWlyYWJuYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LW1kLWJldHdlZW4gZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIiBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1biAyMDE3IC0gQXByaWwgMjAyMC0gMyB5ZWFyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdMfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXcgWW9yaywgVVNBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgQ2FyZCBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBDYXJkIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHItMTEgbWItOSBmbGV4LXdyYXAgZmxleC1zbS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmUtNzIgZC1ibG9jayBtci04IG1iLTcgbWItc20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdGMn0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgbXQtbjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS01IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbmlvciBVSS9VWCBEZXNpZ25lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtZGVmYXVsdC1jb2xvciBsaW5lLWhlaWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvb2dsZSBJbmNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEp1biAyMDE3IC0gQXByaWwgMjAyMC0gMyB5ZWFyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdMfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXcgWW9yaywgVVNBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgQ2FyZCBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDwhLS0gQ2FyZCBTZWN0aW9uIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIENhcmQgU2VjdGlvbiBTdGFydCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItbWVyY3VyeSBwLTUgcGwteHMtMTIgcHQtNyBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS02IGZvbnQtd2VpZ2h0LXNlbWlib2xkIG1iLTcgbXQtNSB0ZXh0LWJsYWNrLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEVkdWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhcmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwci0xMSBtYi05IGZsZXgtd3JhcCBmbGV4LXNtLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNxdWFyZS03MiBkLWJsb2NrIG1yLTggbWItNyBtYi1zbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ0YzfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBtdC1uMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTUgZm9udC13ZWlnaHQtc2VtaWJvbGQgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFzdGVycyBpbiBBcnQgRGVzaWduXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1kZWZhdWx0LWNvbG9yIGxpbmUtaGVpZ2h0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGFydmFyZCBVbml2ZXJzaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbWQtYmV0d2VlbiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWdyYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdW4gMjAxNyAtIEFwcmlsIDIwMjAtIDMgeWVhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nTH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJ5bGluLCBVU0FcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBDYXJkIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhcmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwci0xMSBtYi05IGZsZXgtd3JhcCBmbGV4LXNtLW5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNxdWFyZS03MiBkLWJsb2NrIG1yLTggbWItNyBtYi1zbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjaXJjbGUtNzJcIiBzcmM9e2ltZ0Y0fSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBtdC1uMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTUgZm9udC13ZWlnaHQtc2VtaWJvbGQgdGV4dC1ibGFjay0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFjaGVsb3IgaW4gU29mdHdhcmUgRW5naW5lZXJpbmd7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1kZWZhdWx0LWNvbG9yIGxpbmUtaGVpZ2h0LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFuaXBhbCBJbnN0aXR1dGUgb2YgVGVjaG5vbG9neVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LW1kLWJldHdlZW4gZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmVkIDIwMTIgLSBBcHJpbCAyMDE2IC0gNCB5ZWFyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC1ncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdMfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXcgWW9yaywgVVNBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgQ2FyZCBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBDYXJkIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHItMTEgbWItOSBmbGV4LXdyYXAgZmxleC1zbS1ub3dyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcXVhcmUtNzIgZC1ibG9jayBtci04IG1iLTcgbWItc20tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2lyY2xlLTcyXCIgc3JjPXtpbWdGNH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgbXQtbjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS01IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHRleHQtYmxhY2stMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2hlbG9yIGluIFNvZnR3YXJlIEVuZ2luZWVyaW5ne1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtZGVmYXVsdC1jb2xvciBsaW5lLWhlaWdodC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbmlwYWwgSW5zdGl0dXRlIG9mIFRlY2hub2xvZ3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1tZC1iZXR3ZWVuIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlZCAyMDEyIC0gQXByaWwgMjAxNiAtIDQgeWVhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nTH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IFlvcmssIFVTQVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIENhcmQgRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIENhcmQgU2VjdGlvbiBFbmQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gTWlkZGxlIENvbnRlbnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFJpZ2h0IFNpZGViYXIgU3RhcnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC14bC0zIG9yZGVyLTMgb3JkZXItbGctMiBiZy1kZWZhdWx0LTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTMgbWItbGctMCBtdC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teGwgbWItNyBkLWJsb2NrIG14LWF1dG8gdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1ncmF5IGJ0bi14bCBtYi03IGQtYmxvY2sgbXgtYXV0byB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlamVjdFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFJpZ2h0IFNpZGViYXIgRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgPC9Nb2RhbFN0eWxlZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxTaWduSW47XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Nb2RhbEFwcGxpY2F0aW9uXCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xyXG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xyXG5cclxuY29uc3QgTW9kYWxTdHlsZWQgPSBzdHlsZWQoTW9kYWwpYFxyXG4gIC8qICYubW9kYWwge1xyXG4gICAgei1pbmRleDogMTAwNTA7XHJcbiAgfSAqL1xyXG5gO1xyXG5cclxuY29uc3QgTW9kYWxTaWduSW4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2hvd1Bhc3MsIHNldFNob3dQYXNzXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgZ0NvbnRleHQudG9nZ2xlU2lnbkluTW9kYWwoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIHNldFNob3dQYXNzKCFzaG93UGFzcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IG51bGwgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgQXV0aFNlcnZpY2UubG9naW4oc3RhdGUuZW1haWwsIHN0YXRlLnBhc3N3b3JkKTtcclxuICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkLW1haW5cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyb3IgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0geyAuLi5zdGF0ZSB9O1xyXG4gICAgY29uc29sZS5sb2coXCJpZDpcIiArIGUudGFyZ2V0LmlkICsgXCIgdmFsb3I6IFwiICsgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgbmV3U3RhdGVbZS50YXJnZXQuaWRdID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdTdGF0ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFN0eWxlZFxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgIGNlbnRlcmVkXHJcbiAgICAgIHNob3c9e2dDb250ZXh0LnNpZ25Jbk1vZGFsVmlzaWJsZX1cclxuICAgICAgb25IaWRlPXtnQ29udGV4dC50b2dnbGVTaWduSW5Nb2RhbH1cclxuICAgID5cclxuICAgICAgPE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGUtMzIgYnRuLXJlc2V0IGJnLXdoaXRlIHBvcy1hYnMtdHIgbXQtbWQtbjYgbXItbGctbjYgZm9jdXMtcmVzZXQgei1pbmRleC1zdXBwZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbW9kYWwtbWFpbiBiZy13aGl0ZSByb3VuZGVkLTggb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEwIHBiLTYgcGwtMTEgcHItMTIgYmctYmxhY2stMiBoLTEwMCBkLWZsZXggZmxleC1jb2x1bW4gZGFyay1tb2RlLXRleHRzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTlcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS04IHRleHQtd2hpdGUgbGluZS1oZWlnaHQtcmVzZXQgcGItNCBsaW5lLWhlaWdodC0xcDRcIj5cclxuICAgICAgICAgICAgICAgICAgICBCaWVudmVuaWRvL2FcclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCBmb250LXNpemUtNCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW5pY2llIHNlc2nDs24gcGFyYSBhY2NlZGVyIGEgc3UgY3VlbnRhIHkgY29udHJhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZmVzaW9uYWxlcy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdG9wIGJvcmRlci1kZWZhdWx0LWNvbG9yLTIgbXQtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBteC1uOSBwdC02IGZsZXgteHMtcm93IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHB4LTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNyB0ZXh0LXdoaXRlXCI+Mjk1PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIHRleHQtd2hpdGUgZ3Itb3BhY2l0eS01IGxpbmUtaGVpZ2h0LTFwNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXcgam9icyBwb3N0ZWQgdG9kYXlcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTUgcHgtOVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS03IHRleHQtd2hpdGVcIj4xNDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LXdoaXRlIGdyLW9wYWNpdHktNSBsaW5lLWhlaWdodC0xcDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IGNvbXBhbmllcyByZWdpc3RlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUtMiBoLTEwMCBweC0xMSBwdC0xMSBwYi03XCI+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8jXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIHBvc2l0aW9uLXJlbGF0aXZlIHRleHQtd2hpdGUgYmctYWxscG9ydHMgaC1weC00OCBmbGV4LWFsbC1jZW50ZXIgdy0xMDAgcHgtNiByb3VuZGVkLTUgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgaW4gd2l0aCBMaW5rZWRJblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLXBvcHB5IGgtcHgtNDggZmxleC1hbGwtY2VudGVyIHctMTAwIHB4LTYgcm91bmRlZC01IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1nb29nbGUgcG9zLXhzLWFicy1jbCBmb250LXNpemUtNyBtbC14cy00XCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZyBpbiB3aXRoIEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLW1hcmlubyBoLXB4LTQ4IGZsZXgtYWxsLWNlbnRlciB3LTEwMCBweC02IHJvdW5kZWQtNSBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgaW4gd2l0aCBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJvci1kZXZpZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS0zIGxpbmUtaGVpZ2h0LXJlc2V0IFwiPk9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL1wiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEUtbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZWplbXBsb0BnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbnRyYXNlw7FhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3MgPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG93LXBhc3N3b3JkIHBvcy1hYnMtY3IgZmFzIG1yLTYgdGV4dC1ibGFjay0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lXCI+bm9uZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInRlcm1zLWNoZWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyLWNoZWNrLWlucHV0IGQtZmxleCAgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVybXMtY2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94IG1yLTVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtMyBtYi0wIGxpbmUtaGVpZ2h0LXJlc2V0IG1iLTEgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1lbWJlciBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWRvZGdlciBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRm9yZ2V0IFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1tZWRpdW0gdy0xMDAgcm91bmRlZC01IHRleHQtdXBwZXJjYXNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEluaWNpYXIgc2VzacOzbntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtY2VudGVyIGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIMK/Tm8gcG9zZWUgdW5hIGN1ZW50YT97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDcmVlIHVuYSBjdWVudGEgZ3JhdHVpdGFcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgPC9Nb2RhbFN0eWxlZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxTaWduSW47XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Nb2RhbFNpZ25JblwiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29yZVwiO1xyXG5cclxuY29uc3QgTW9kYWxTdHlsZWQgPSBzdHlsZWQoTW9kYWwpYFxyXG4gIC8qICYubW9kYWwge1xyXG4gICAgei1pbmRleDogMTAwNTA7XHJcbiAgfSAqL1xyXG5gO1xyXG5cclxuY29uc3Qgc2V4byA9IFtcclxuICB7IHZhbHVlOiBcIkZcIiwgbGFiZWw6IFwiRmVtZW5pbm9cIiB9LFxyXG4gIHsgdmFsdWU6IFwiTVwiLCBsYWJlbDogXCJNYXNjdWxpbm9cIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgTW9kYWxTaWduVXAgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2hvd1Bhc3NGaXJzdCwgc2V0U2hvd1Bhc3NGaXJzdF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc2hvd1Bhc3NTZWNvbmQsIHNldFNob3dQYXNzU2Vjb25kXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gICAgZW1haWwyOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBiaXJ0aERhdGU6IFwiXCIsXHJcbiAgICBzZXg6IFwiRlwiLFxyXG4gICAgc2V4TGFiZWw6IFwiRmVtZW5pbm9cIixcclxuICAgIGlzUHJvZmVzc2lvbmFsOiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ0NvbnRleHQgPSB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgZ0NvbnRleHQudG9nZ2xlU2lnblVwTW9kYWwoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVQYXNzd29yZEZpcnN0ID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1Bhc3NGaXJzdCghc2hvd1Bhc3NGaXJzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRTZWNvbmQgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UGFzc1NlY29uZCghc2hvd1Bhc3NTZWNvbmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUlzUHJvZmVzc2lvbmFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XHJcbiAgICBpZiAobmV3U3RhdGUuaXNQcm9mZXNzaW9uYWwpIHtcclxuICAgICAgbmV3U3RhdGVbXCJpc1Byb2Zlc3Npb25hbFwiXSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3U3RhdGVbXCJpc1Byb2Zlc3Npb25hbFwiXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZShuZXdTdGF0ZSk7XHJcblxyXG4gICAgLy8gaWYgKHN0YXRlLmlzUHJvZmVzc2lvbmFsKSB7XHJcbiAgICAvLyAgIHNldFN0YXRlKHsgaXNQcm9mZXNzaW9uYWw6IGZhbHNlIH0pO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgc2V0U3RhdGUoeyBpc1Byb2Zlc3Npb25hbDogdHJ1ZSB9KTtcclxuICAgIC8vIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvcjogbnVsbCB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBBdXRoU2VydmljZS5yZWdpc3RlcihcclxuICAgICAgICBzdGF0ZS5uYW1lLFxyXG4gICAgICAgIHN0YXRlLmxhc3ROYW1lLFxyXG4gICAgICAgIHN0YXRlLmVtYWlsMixcclxuICAgICAgICBzdGF0ZS5iaXJ0aERhdGUsXHJcbiAgICAgICAgc3RhdGUuc2V4LFxyXG4gICAgICAgIHN0YXRlLnBhc3N3b3JkLFxyXG4gICAgICAgIHN0YXRlLmlzUHJvZmVzc2lvbmFsXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZC1tYWluXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVycm9yIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIG5ld1N0YXRlW2UudGFyZ2V0LmlkXSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gICAgY29uc29sZS5sb2cobmV3U3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcclxuICAgIG5ld1N0YXRlW1wic2V4XCJdID0gZS52YWx1ZTtcclxuICAgIG5ld1N0YXRlW1wic2V4TGFiZWxcIl0gPSBlLmxhYmVsO1xyXG4gICAgc2V0U3RhdGUobmV3U3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxTdHlsZWRcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgICBjZW50ZXJlZFxyXG4gICAgICBzaG93PXtnQ29udGV4dC5zaWduVXBNb2RhbFZpc2libGV9XHJcbiAgICAgIG9uSGlkZT17Z0NvbnRleHQudG9nZ2xlU2lnblVwTW9kYWx9XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2lyY2xlLTMyIGJ0bi1yZXNldCBiZy13aGl0ZSBwb3MtYWJzLXRyIG10LW42IG1yLWxnLW42IGZvY3VzLXJlc2V0IHNoYWRvdy0xMFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1tb2RhbC1tYWluIGJnLXdoaXRlIHJvdW5kZWQtOCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTAgcGItNiBwbC0xMSBwci0xMiBiZy1ibGFjay0yIGgtMTAwIGQtZmxleCBmbGV4LWNvbHVtbiBkYXJrLW1vZGUtdGV4dHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItOVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTggdGV4dC13aGl0ZSBsaW5lLWhlaWdodC1yZXNldCBwYi00IGxpbmUtaGVpZ2h0LTFwNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIENyZWUgdW5hIGN1ZW50YSBncmF0dWl0YSBob3lcclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMCBmb250LXNpemUtNCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlZSBzdSBjdWVudGEgcGFyYSBjb250aW51YXIgeSBleHBsb3JhciBhIGxvcyBwcm9mZXNpb25hbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcG9uaWJsZXMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXRvcCBib3JkZXItZGVmYXVsdC1jb2xvci0yIG10LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggbXgtbjkgcHQtNiBmbGV4LXhzLXJvdyBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNSBweC05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zaXplLTcgdGV4dC13aGl0ZVwiPjI5NTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LXdoaXRlIGdyLW9wYWNpdHktNSBsaW5lLWhlaWdodC0xcDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV3IGpvYnMgcG9zdGVkIHRvZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC01IHB4LTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNpemUtNyB0ZXh0LXdoaXRlXCI+MTQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgdGV4dC13aGl0ZSBnci1vcGFjaXR5LTUgbGluZS1oZWlnaHQtMXA0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5ldyBjb21wYW5pZXMgcmVnaXN0ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlLTIgaC0xMDAgcHgtMTEgcHQtMTEgcGItN1wiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBwb3NpdGlvbi1yZWxhdGl2ZSB0ZXh0LXdoaXRlIGJnLWFsbHBvcnRzIGgtcHgtNDggZmxleC1hbGwtY2VudGVyIHctMTAwIHB4LTYgcm91bmRlZC01IG1iLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbiBwb3MteHMtYWJzLWNsIGZvbnQtc2l6ZS03IG1sLXhzLTRcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW1wb3J0IGZyb20gTGlua2VkSW5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgdGV4dC13aGl0ZSBiZy1wb3BweSBoLXB4LTQ4IGZsZXgtYWxsLWNlbnRlciB3LTEwMCBweC02IHJvdW5kZWQtNSBtYi00XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ29vZ2xlIHBvcy14cy1hYnMtY2wgZm9udC1zaXplLTcgbWwteHMtNFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmUgZC14cy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBJbXBvcnQgZnJvbSBHb29nbGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC14cy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgcG9zaXRpb24tcmVsYXRpdmUgdGV4dC13aGl0ZSBiZy1tYXJpbm8gaC1weC00OCBmbGV4LWFsbC1jZW50ZXIgdy0xMDAgcHgtNiByb3VuZGVkLTUgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZSBwb3MteHMtYWJzLWNsIGZvbnQtc2l6ZS03IG1sLXhzLTRcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQteHMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW1wb3J0IGZyb20gRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yLWRldmlkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zaXplLTMgbGluZS1oZWlnaHQtcmVzZXRcIj5Pcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIE5vbWJyZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IG5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEFwZWxsaWRvXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluZ3Jlc2Ugc3UgYXBlbGxpZG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFLW1haWxcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVqZW1wbG9AZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWwyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5lbWFpbDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtYmxhY2stMiBmb250LXdlaWdodC1zZW1pYm9sZCBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRmVjaGEgZGUgbmFjaW1pZW50b1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IGZlY2hhIGRlIG5hY2ltaWVudG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJiaXJ0aERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmJpcnRoRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInNlbGVjdDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB0ZXh0LWJsYWNrLTIgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2V4b1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c2V4b31cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBwbC0wIGFycm93LTMgdy0xMDAgZm9udC1zaXplLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2V4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7IGxhYmVsOiBzdGF0ZS5zZXhMYWJlbCwgdmFsdWU6IHN0YXRlLnNleCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlbGVjdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgdGV4dC1ibGFjay0yIGZvbnQtd2VpZ2h0LXNlbWlib2xkIGxpbmUtaGVpZ2h0LXJlc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzRmlyc3QgPyBcInBhc3N3b3JkXCIgOiBcInRleHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzZSBzdSBjb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG93LXBhc3N3b3JkIHBvcy1hYnMtY3IgZmFzIG1yLTYgdGV4dC1ibGFjay0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUGFzc3dvcmRGaXJzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLW5vbmVcIj5ub25lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtNCB0ZXh0LWJsYWNrLTIgZm9udC13ZWlnaHQtc2VtaWJvbGQgbGluZS1oZWlnaHQtcmVzZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm1hciBDb250cmFzZcOxYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzU2Vjb25kID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNlIHN1IGNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiLyNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG93LXBhc3N3b3JkIHBvcy1hYnMtY3IgZmFzIG1yLTYgdGV4dC1ibGFjay0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUGFzc3dvcmRTZWNvbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lXCI+bm9uZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZC1mbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJpc1Byb2Zlc2lvbmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyLWNoZWNrLWlucHV0IGQtZmxleCAgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaXNQcm9mZXNpb25hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5pc1Byb2Zlc3Npb25hbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RvZ2dsZUlzUHJvZmVzc2lvbmFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94IG1yLTVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi0wIGxpbmUtaGVpZ2h0LXJlc2V0IGQtYmxvY2sgZm9udC13ZWlnaHQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIEFncmVlIHRvIHRoZXtcIiBcIn0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI1wiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNveSBwcm9mZXNpb25hbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtMyB0ZXh0LWRvZGdlciBsaW5lLWhlaWdodC1yZXNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRm9yZ2V0IFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLW1lZGl1bSB3LTEwMCByb3VuZGVkLTUgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdHJhcnNle1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IHRleHQtY2VudGVyIGhlYWRpbmctZGVmYXVsdC1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50P3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIGZyZWUgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9wPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgPC9Nb2RhbFN0eWxlZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxTaWduVXA7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9Nb2RhbFNpZ25VcFwiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gXCJyZWFjdC1wbGF5ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XHJcblxyXG5jb25zdCBNb2RhbFN0eWxlZCA9IHN0eWxlZChNb2RhbClgXHJcbiAgJi5tb2RhbCB7XHJcbiAgICB6LWluZGV4OiAxMDA1MDtcclxuICB9XHJcbiAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gICAgbWF4LWhlaWdodDogaW5pdGlhbDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgQG1lZGlhICR7ZGV2aWNlLmxnfSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERpdlN0eWxlZCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIEBtZWRpYSAke2RldmljZS5tZH0ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogNjUwcHg7XHJcbiAgfVxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAycyBlYXNlLW91dDtcclxuICAmLmxvYWRlZCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDbG9zZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBAbWVkaWEgJHtkZXZpY2UubWR9IHtcclxuICAgIHJpZ2h0OiAycmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENsb3NlQnV0dG9uID0gKHByb3BzKSA9PiAoXHJcbiAgPENsb3NlV3JhcHBlciB7Li4ucHJvcHN9PlxyXG4gICAgPHN2Z1xyXG4gICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgIGNzcz17YFxyXG4gICAgICAgIGZpbGw6IGN1cnJlbnRjb2xvcjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgICAgICB3aWR0aDogMXJlbTtcclxuICAgICAgYH1cclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTkuODIgMTJMMCAyLjE4IDIuMTggMCAxMiA5LjgyIDIxLjgyIDAgMjQgMi4xOCAxNC4xOCAxMiAyNCAyMS44MiAyMS44MiAyNCAxMiAxNC4xOCAyLjE4IDI0IDAgMjEuODJ6XCJcclxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gIDwvQ2xvc2VXcmFwcGVyPlxyXG4pO1xyXG5cclxuY29uc3QgTW9kYWxWaWRlbyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgZ0NvbnRleHQudG9nZ2xlVmlkZW9Nb2RhbCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWxTdHlsZWRcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgICBjZW50ZXJlZFxyXG4gICAgICBzaG93PXtnQ29udGV4dC52aWRlb01vZGFsVmlzaWJsZX1cclxuICAgICAgLy8gb25IaWRlPXtnQ29udGV4dC50b2dnbGVWaWRlb01vZGFsfVxyXG4gICAgPlxyXG4gICAgICA8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoLTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwYH0+XHJcbiAgICAgICAgICA8RGl2U3R5bGVkIGNsYXNzTmFtZT17YCR7bG9hZGluZyA/IFwibG9hZGluZ1wiIDogXCJsb2FkZWRcIn1gfT5cclxuICAgICAgICAgICAgPFJlYWN0UGxheWVyXHJcbiAgICAgICAgICAgICAgdXJsPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj16bEluWW0ySnJGd2B9XHJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICBjb250cm9sc1xyXG4gICAgICAgICAgICAgIG9uUmVhZHk9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0RpdlN0eWxlZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgPC9Nb2RhbFN0eWxlZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxWaWRlbztcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL01vZGFsVmlkZW9cIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpc3RHcm91cCwgQ29sbGFwc2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IEZhQW5nbGVSaWdodCwgRmFBbmdsZURvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9HbG9iYWxDb250ZXh0XCI7XHJcblxyXG5jb25zdCBOZXN0ZWRNZW51Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBhLFxyXG4gIC5sYWJlbCB7XHJcbiAgICBjb2xvcjogJHsoeyBkYXJrLCB0aGVtZSB9KSA9PlxyXG4gICAgICBkYXJrID8gdGhlbWUuY29sb3JzLmxpZ2h0IDogdGhlbWUuY29sb3JzLmhlYWRpbmd9IWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAmICsgLmNvbGxhcHNlOm5vdCguc2hvdykge1xyXG4gICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiArIC5jb2xsYXBzZS5zaG93IHtcclxuICAgICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xsYXBzZSArIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcclxuICB9XHJcbiAgLyogLmxpc3QtZ3JvdXAtZmx1c2g6bGFzdC1jaGlsZCAubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gIH0gKi9cclxuYDtcclxuXHJcbmNvbnN0IGRlZmF1bHRNZW51SXRlbXMgPSBbXHJcbiAgeyBuYW1lOiBcImhvbWVcIiwgbGFiZWw6IFwiSG9tZVwiIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJiaWxsaW5nXCIsXHJcbiAgICBsYWJlbDogXCJCaWxsaW5nXCIsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IG5hbWU6IFwic3RhdGVtZW50c1wiLCBsYWJlbDogXCJTdGF0ZW1lbnRzXCIgfSxcclxuICAgICAgeyBuYW1lOiBcInJlcG9ydHNcIiwgbGFiZWw6IFwiUmVwb3J0c1wiIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJzZXR0aW5nc1wiLFxyXG4gICAgbGFiZWw6IFwiU2V0dGluZ3NcIixcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgbmFtZTogXCJwcm9maWxlXCIsIGxhYmVsOiBcIlByb2ZpbGVcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiaW5zdXJhbmNlXCIsIGxhYmVsOiBcIkluc3VyYW5jZVwiIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIm5vdGlmaWNhdGlvbnNcIixcclxuICAgICAgICBsYWJlbDogXCJOb3RpZmljYXRpb25zXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgbmFtZTogXCJlbWFpbFwiLCBsYWJlbDogXCJFbWFpbFwiIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiZGVza3RvcFwiLFxyXG4gICAgICAgICAgICBsYWJlbDogXCJEZXNrdG9wXCIsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgeyBuYW1lOiBcInNjaGVkdWxlXCIsIGxhYmVsOiBcIlNjaGVkdWxlXCIgfSxcclxuICAgICAgICAgICAgICB7IG5hbWU6IFwiZnJlcXVlbmN5XCIsIGxhYmVsOiBcIkZyZXF1ZW5jeVwiIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeyBuYW1lOiBcInNtc1wiLCBsYWJlbDogXCJTTVNcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBNZW51SXRlbSA9ICh7XHJcbiAgbGFiZWwsXHJcbiAgaXNFeHRlcm5hbCA9IGZhbHNlLFxyXG4gIG5hbWUsXHJcbiAgaXRlbXMsXHJcbiAgZGVwdGhTdGVwID0gMjAsXHJcbiAgZGVwdGggPSAwLFxyXG4gIC4uLnJlc3RcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYXNTdWJJdGVtcyA9IEFycmF5LmlzQXJyYXkoaXRlbXMpO1xyXG5cclxuICBjb25zdCBnQ29udGV4dCA9IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aGFzU3ViSXRlbXMgPyAoXHJcbiAgICAgICAgPExpc3RHcm91cC5JdGVtXHJcbiAgICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgICAgIGNzcz17YFxyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7ZGVwdGggKiBkZXB0aFN0ZXB9cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e29wZW4gPyA8RmFBbmdsZURvd24gLz4gOiA8RmFBbmdsZVJpZ2h0IC8+fTwvc3Bhbj5cclxuICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxMaXN0R3JvdXAuSXRlbVxyXG4gICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgICBjc3M9e2BcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAke2RlcHRoICogZGVwdGhTdGVwfXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0V4dGVybmFsID8gKFxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e2Ake25hbWV9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ0NvbnRleHQudmlzaWJsZU9mZkNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgICBnQ29udGV4dC50b2dnbGVPZmZDYW52YXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgLyR7bmFtZX1gfT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZ0NvbnRleHQudmlzaWJsZU9mZkNhbnZhcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdDb250ZXh0LnRvZ2dsZU9mZkNhbnZhcygpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtoYXNTdWJJdGVtcyA/IChcclxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59PlxyXG4gICAgICAgICAgPExpc3RHcm91cD5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoc3ViSXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXtzdWJJdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBkZXB0aD17ZGVwdGggKyAxfVxyXG4gICAgICAgICAgICAgICAgZGVwdGhTdGVwPXtkZXB0aFN0ZXB9XHJcbiAgICAgICAgICAgICAgICB7Li4uc3ViSXRlbX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5lc3RlZE1lbnUgPSAoeyBtZW51SXRlbXMgPSBkZWZhdWx0TWVudUl0ZW1zIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5lc3RlZE1lbnVDb250YWluZXI+XHJcbiAgICAgIDxMaXN0R3JvdXAgdmFyaWFudD1cImZsdXNoXCI+XHJcbiAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgIGtleT17YCR7bWVudUl0ZW0ubmFtZX0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIGRlcHRoU3RlcD17MjB9XHJcbiAgICAgICAgICAgIGRlcHRoPXswfVxyXG4gICAgICAgICAgICB7Li4ubWVudUl0ZW19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3RHcm91cD5cclxuICAgIDwvTmVzdGVkTWVudUNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmVzdGVkTWVudTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL05lc3RlZE1lbnVcIjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9Mb2dvXCI7XHJcblxyXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICYuaGlkZGVuIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRHJhd2VyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDE3cmVtO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTk5OTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICYuaGlkZGVuIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB9XHJcbiAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYyAhaW1wb3J0YW50O1xyXG4gICAgd2lsbC1jaGFuZ2U6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBMb2dvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IE9mZmNhbnZhcyA9ICh7IHNob3csIG9uSGlkZU9mZmNhbnZhcywgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4ge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGlmIChzaG93KSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLmNsYXNzTGlzdC5hZGQoXCJoYXMtb2ZmY2FudmFzXCIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoYXMtb2ZmY2FudmFzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIikuY2xhc3NMaXN0LnJlbW92ZShcImhhcy1vZmZjYW52YXNcIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImhhcy1vZmZjYW52YXNcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiB7Li4ucmVzdH0+XHJcbiAgICAgIDxPdmVybGF5IGNsYXNzTmFtZT17c2hvdyA/IFwiXCIgOiBcImhpZGRlblwifSBvbkNsaWNrPXtvbkhpZGVPZmZjYW52YXN9IC8+XHJcbiAgICAgIDxEcmF3ZXIgY2xhc3NOYW1lPXtzaG93ID8gXCJcIiA6IFwiaGlkZGVuXCJ9PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxyXG4gICAgICAgICAgICA8TG9nb0NvbnRhaW5lciBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgICAgPExvZ28gb25DbGljaz17b25IaWRlT2ZmY2FudmFzfSAvPlxyXG4gICAgICAgICAgICA8L0xvZ29Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9PZmZjYW52YXNcIjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgaW1nUCBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlL2wzL3BuZy9wcm8taW1nLnBuZ1wiO1xyXG5cclxuY29uc3QgU2lkZWJhciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPCEtLSBTaWRlYmFyIFN0YXJ0IC0tPiAqL31cclxuXHJcbiAgICAgIDxkaXYgey4uLnByb3BzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLWxnLTVcIj5cclxuICAgICAgICAgIHsvKiA8IS0tIFRvcCBTdGFydCAtLT4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy05IHJvdW5kZWQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHktMTEgdGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItbWVyY3VyeVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNpcmNsZS01NFwiIHNyYz17aW1nUH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrLTIgZm9udC1zaXplLTYgZm9udC13ZWlnaHQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICBEYXZpZCBIZW5yaWNrc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi04XCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ncmF5IGZvbnQtc2l6ZS00XCI+UHJvZHVjdCBEZXNpZ25lcjwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWxpbmsgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtc21va2UgY2lyY2xlLTMyIGJnLWNvbmNyZXRlIG1yLTUgaG92ZXItYmctZ3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4taW5cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXNtb2tlIGNpcmNsZS0zMiBiZy1jb25jcmV0ZSBtci01IGhvdmVyLWJnLWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXNtb2tlIGNpcmNsZS0zMiBiZy1jb25jcmV0ZSBtci01IGhvdmVyLWJnLWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXNtb2tlIGNpcmNsZS0zMiBiZy1jb25jcmV0ZSBtci01IGhvdmVyLWJnLWdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWRyaWJiYmxlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zbW9rZSBjaXJjbGUtMzIgYmctY29uY3JldGUgbXItNSBob3Zlci1iZy1ncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1iZWhhbmNlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPCEtLSBUb3AgRW5kIC0tPiAqL31cclxuICAgICAgICAgICAgey8qIDwhLS0gQm90dG9tIFN0YXJ0IC0tPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC05IHB0LWxnLTUgcHQtOSBwdC14bC05IHBiLTVcIj5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1ibGFjay0yIG1iLTggZm9udC1zaXplLTVcIj5Db250YWN0IEluZm88L2g1PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBMaXN0IC0tPiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTdcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IG1iLTBcIj5Mb2NhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBtYi0wIHRleHQtYmxhY2stMiB0ZXh0LWJyZWFrXCI+XHJcbiAgICAgICAgICAgICAgICAgIE5ldyBZb3JrICwgVVNBXHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBMaXN0IC0tPiAqL31cclxuICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgTGlzdCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi03XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi0wXCI+RS1tYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvbnQtc2l6ZS00IGZvbnQtd2VpZ2h0LXNlbWlib2xkIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrLTIgdGV4dC1icmVha1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpuYW1lX2FjQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBuYW1lX2FjQGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBMaXN0IC0tPiAqL31cclxuICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgTGlzdCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi03XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi0wXCI+UGhvbmU8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrLTIgdGV4dC1icmVha1wiIGhyZWY9XCJ0ZWw6Kzk5OTU2NTU2MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICs5OTkgNTY1IDU2MlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8IS0tIFNpbmdsZSBMaXN0IC0tPiAqL31cclxuICAgICAgICAgICAgICB7LyogPCEtLSBTaW5nbGUgTGlzdCAtLT4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi03XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNpemUtNCBtYi0wXCI+V2Vic2l0ZSBMaW5rZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWJyZWFrXCI+d3d3Lm5hbWVhYy5jb208L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDwhLS0gU2luZ2xlIExpc3QgLS0+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDwhLS0gQm90dG9tIEVuZCAtLT4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogPCEtLSBTaWRlYmFyIEVuZCAtLT4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL1Byb2ZpbGVTaWRlYmFyXCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L0dsb2JhbENvbnRleHRcIjtcclxuaW1wb3J0IGltZ0wgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dvLW1haW4tYmxhY2sucG5nXCI7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdDb250ZXh0ID0gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb2xsYXBzZSBpbj17Z0NvbnRleHQuc2hvd1NpZGViYXJEYXNoYm9hcmR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXNpZGViYXItd3JhcHBlciBwdC0xMVwiIGlkPVwic2lkZWJhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIHB4LTExXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nTH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xNSBweC0xMVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhsIHctMTAwIHRleHQtdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci01IGQtaW5saW5lLWJsb2NrXCI+Kzwvc3Bhbj5Qb3N0IGEgbmV3IGpvYlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBkYXNoYm9hcmQtbGF5b3V0LXNpZGViYXJcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkLW1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB4LTEwIHB5LTEgbXktNSBmb250LXNpemUtNCBmb250LXdlaWdodC1zZW1pYm9sZCBmbGV4LXktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1sYXlvdXQtMTEgbXItN1wiPjwvaT5EYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC1qb2JzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC0xMCBweS0xIG15LTUgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgZmxleC15LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYnJpZWZjYXNlIG1yLTdcIj48L2k+UG9zdGVkIEpvYnNcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZC1hcHBsaWNhbnRzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC0xMCBweS0xIG15LTUgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgZmxleC15LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlciBtci03XCI+PC9pPkFwcGxpY2FudHN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLWF1dG8gcHgtMSBoLTEgYmctZG9kZ2VyIHRleHQtd2hpdGUgZm9udC1zaXplLTMgcm91bmRlZC01IG1heC1oZWlnaHQtcHgtMTggZmxleC1hbGwtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgMTRcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC0xMCBweS0xIG15LTUgZm9udC1zaXplLTQgZm9udC13ZWlnaHQtc2VtaWJvbGQgZmxleC15LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29nIG1yLTdcIj48L2k+U2V0dGluZ3NcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCIvI1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhci1tb2JpbGUtYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgZ0NvbnRleHQudG9nZ2xlU2lkZWJhckRhc2hib2FyZCgpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2lkZWJhci0yXCI+PC9pPlxyXG4gICAgICA8L2E+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL1NpZGViYXJEYXNoYm9hcmRcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBHbG9iYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgR2xvYmFsUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3RoZW1lRGFyaywgc2V0VGhlbWVEYXJrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1NpZGViYXJEYXNoYm9hcmQsIHNldFNob3dTaWRlYmFyRGFzaGJvYXJkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFthcHBsaWNhdGlvbk1vZGFsVmlzaWJsZSwgc2V0QXBwbGljYXRpb25Nb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzaWduSW5Nb2RhbFZpc2libGUsIHNldFNpZ25Jbk1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NpZ25VcE1vZGFsVmlzaWJsZSwgc2V0U2lnblVwTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlkZW9Nb2RhbFZpc2libGUsIHNldFZpZGVvTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdmlzaWJsZU9mZkNhbnZhcywgc2V0VmlzaWJsZU9mZkNhbnZhc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2hlYWRlciwgc2V0SGVhZGVyXSA9IHVzZVN0YXRlKHtcclxuICAgIHRoZW1lOiBcImxpZ2h0XCIsXHJcbiAgICBiZ0NsYXNzOiBcImRlZmF1bHRcIixcclxuICAgIHZhcmlhbnQ6IFwicHJpbWFyeVwiLFxyXG4gICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgaXNGbHVpZDogZmFsc2UsXHJcbiAgICBidXR0b246IFwiY3RhXCIsIC8vIHByb2ZpbGUsIGFjY291bnQsIG51bGxcclxuICAgIGJ1dHRvblRleHQ6IFwiR2V0IHN0YXJ0ZWQgZnJlZVwiLCAvLyBwcm9maWxlLCBhY2NvdW50LCBudWxsXHJcbiAgICByZXZlYWw6IHRydWUsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Zvb3Rlciwgc2V0Rm9vdGVyXSA9IHVzZVN0YXRlKHtcclxuICAgIHRoZW1lOiBcImRhcmtcIixcclxuICAgIHN0eWxlOiBcInN0eWxlMVwiLCAvL3N0eWxlMSwgc3R5bGUyXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgc2V0VGhlbWVEYXJrKCF0aGVtZURhcmspO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXJEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93U2lkZWJhckRhc2hib2FyZCghc2hvd1NpZGViYXJEYXNoYm9hcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVZpZGVvTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRWaWRlb01vZGFsVmlzaWJsZSghdmlkZW9Nb2RhbFZpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUFwcGxpY2F0aW9uTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRBcHBsaWNhdGlvbk1vZGFsVmlzaWJsZSghYXBwbGljYXRpb25Nb2RhbFZpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZ25Jbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0U2lnbkluTW9kYWxWaXNpYmxlKCFzaWduSW5Nb2RhbFZpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZ25VcE1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0U2lnblVwTW9kYWxWaXNpYmxlKCFzaWduVXBNb2RhbFZpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZU9mZkNhbnZhcyA9ICgpID0+IHtcclxuICAgIHNldFZpc2libGVPZmZDYW52YXMoIXZpc2libGVPZmZDYW52YXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlT2ZmQ2FudmFzID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZU9mZkNhbnZhcyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgdGhlbWVEYXJrLFxyXG4gICAgICAgIHRvZ2dsZVRoZW1lLFxyXG4gICAgICAgIHNob3dTaWRlYmFyRGFzaGJvYXJkLFxyXG4gICAgICAgIHRvZ2dsZVNpZGViYXJEYXNoYm9hcmQsXHJcbiAgICAgICAgdmlkZW9Nb2RhbFZpc2libGUsXHJcbiAgICAgICAgdG9nZ2xlVmlkZW9Nb2RhbCxcclxuICAgICAgICBhcHBsaWNhdGlvbk1vZGFsVmlzaWJsZSxcclxuICAgICAgICB0b2dnbGVBcHBsaWNhdGlvbk1vZGFsLFxyXG4gICAgICAgIHNpZ25Jbk1vZGFsVmlzaWJsZSxcclxuICAgICAgICB0b2dnbGVTaWduSW5Nb2RhbCxcclxuICAgICAgICBzaWduVXBNb2RhbFZpc2libGUsXHJcbiAgICAgICAgdG9nZ2xlU2lnblVwTW9kYWwsXHJcbiAgICAgICAgdmlzaWJsZU9mZkNhbnZhcyxcclxuICAgICAgICB0b2dnbGVPZmZDYW52YXMsXHJcbiAgICAgICAgY2xvc2VPZmZDYW52YXMsXHJcbiAgICAgICAgaGVhZGVyLFxyXG4gICAgICAgIHNldEhlYWRlcixcclxuICAgICAgICBmb290ZXIsXHJcbiAgICAgICAgc2V0Rm9vdGVyLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbENvbnRleHQ7XHJcbmV4cG9ydCB7IEdsb2JhbFByb3ZpZGVyIH07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBIb29rXHJcbmV4cG9ydCBjb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIjtcclxuXHJcbiAgY29uc3QgZ2V0U2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoOiBpc0NsaWVudCA/IHdpbmRvdy5pbm5lcldpZHRoIDogdW5kZWZpbmVkLFxyXG4gICAgICBoZWlnaHQ6IGlzQ2xpZW50ID8gd2luZG93LmlubmVySGVpZ2h0IDogdW5kZWZpbmVkXHJcbiAgICB9O1xyXG4gIH0sIFtpc0NsaWVudF0pO1xyXG5cclxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZShnZXRTaXplKCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0NsaWVudCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzZXRXaW5kb3dTaXplKGdldFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbZ2V0U2l6ZSwgaXNDbGllbnRdKTtcclxuXHJcbiAgcmV0dXJuIHdpbmRvd1NpemU7XHJcbn07XHJcbiIsIi8vIGltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IEdsb2JhbFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvR2xvYmFsQ29udGV4dFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtYnJhbmRzLTQwMC50dGZcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRzL2ZvbnRhd2Vzb21lLTUvd2ViZm9udHMvZmEtcmVndWxhci00MDAudHRmXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS01L3dlYmZvbnRzL2ZhLXNvbGlkLTkwMC50dGZcIjtcclxuXHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy9pY29uLWZvbnQvZm9udHMvYXZhc3RhLnR0ZlwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvZm9udHMvaWNvbi1mb250L2Nzcy9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9zbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcclxuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYW9zL2Rpc3QvYW9zLmNzc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRzL2ljb24tZm9udC9jc3Mvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9mb250cy9mb250YXdlc29tZS01L2Nzcy9hbGwuY3NzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zY3NzL2Jvb3RzdHJhcC5zY3NzXCI7XHJcbmltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSkgPT4ge1xyXG4gIGlmIChyb3V0ZXIucGF0aG5hbWUubWF0Y2goLzQwNC8pKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R2xvYmFsUHJvdmlkZXI+XHJcbiAgICAgICAgPExheW91dCBwYWdlQ29udGV4dD17eyBsYXlvdXQ6IFwiYmFyZVwiIH19PlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8L0dsb2JhbFByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKHJvdXRlci5wYXRobmFtZS5tYXRjaCgvZGFzaGJvYXJkLykpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxHbG9iYWxQcm92aWRlcj5cclxuICAgICAgICA8TGF5b3V0IHBhZ2VDb250ZXh0PXt7IGxheW91dDogXCJkYXNoYm9hcmRcIiB9fT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9HbG9iYWxQcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdsb2JhbFByb3ZpZGVyPlxyXG4gICAgICA8TGF5b3V0IHBhZ2VDb250ZXh0PXt7fX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvR2xvYmFsUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQgaHR0cCBmcm9tIFwiLi9odHRwLWNvbW1vblwiO1xyXG5cclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGxvZ2luID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgcmV0dXJuIGh0dHAucG9zdChcIi9sb2dpblwiLCB7XHJcbiAgICAgIHVzZXJuYW1lOiBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVnaXN0ZXIgPSBhc3luYyAoXHJcbiAgICBub21icmUsXHJcbiAgICBhcGVsbGlkbyxcclxuICAgIGVtYWlsLFxyXG4gICAgZmVjaGFOYWMsXHJcbiAgICBzZXhvLFxyXG4gICAgcGFzc3dvcmQsXHJcbiAgICBlc1Byb2Zlc2lvbmFsXHJcbiAgKSA9PiB7XHJcbiAgICByZXR1cm4gaHR0cC5wb3N0KFwiL3B1YmxpYy91c3VhcmlvL3JlZ2lzdHJvXCIsIHtcclxuICAgICAgcGVyc29uYToge1xyXG4gICAgICAgIG5vbWJyZTogbm9tYnJlLFxyXG4gICAgICAgIGFwZWxsaWRvOiBhcGVsbGlkbyxcclxuICAgICAgICBmZWNoYV9uYWNpbWllbnRvOiBmZWNoYU5hYyxcclxuICAgICAgICBzZXhvOiBzZXhvLFxyXG4gICAgICB9LFxyXG4gICAgICB1c2VybmFtZTogZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgdXN1YXJpb190aXBvX2lkOiBlc1Byb2Zlc2lvbmFsID8gMiA6IDEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aFNlcnZpY2UoKTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC92MVwiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJleHBvcnQgY29uc3QgYWRkRGF5cyA9IChkYXlzKSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xyXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRheXMpO1xyXG4gIHJldHVybiBkYXRlO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgYnJlYWtwb2ludHMgPSB7XHJcbiAgc206IDU3NiwgLy9TbWFsbCBzY3JlZW4gc3RhcnRcclxuICBtZDogNzY4LCAvL01lZGl1bSBzY3JlZW4gc3RhcnRcclxuICBsZzogOTkyLCAvL0xhcmdlIHNjcmVlbiBzdGFydFxyXG4gIHhsOiAxMjAwLCAvL0V4dHJhIExhcmdlIHNjcmVlbiBzdGFydFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRldmljZSA9IHtcclxuICBzbTogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHMuc219cHgpYCxcclxuICBtZDogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHMubWR9cHgpYCxcclxuICBsZzogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHMubGd9cHgpYCxcclxuICB4bDogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludHMueGx9cHgpYCxcclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IGdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgXHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxTdHlsZTtcclxuIiwiaW1wb3J0IHsgYnJlYWtwb2ludHMsIGRldmljZSB9IGZyb20gXCIuL2JyZWFrcG9pbnRzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBhZGREYXlzIH0gZnJvbSBcIi4vYWRkRGF5c1wiO1xyXG5cclxuZXhwb3J0IHsgZGV2aWNlLCBicmVha3BvaW50cywgdGhlbWUsIGFkZERheXMgfTtcclxuIiwiaW1wb3J0IHsgcmdiYSB9IGZyb20gXCJwb2xpc2hlZFwiO1xyXG5pbXBvcnQgeyBicmVha3BvaW50cyB9IGZyb20gXCIuL2JyZWFrcG9pbnRzXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0Q29sb3JzID0ge1xyXG4gIHByaW1hcnk6IFwiIzAwYjA3NFwiLFxyXG4gIHByaW1hcnlIb3ZlcjogXCIjMDA4YTViXCIsXHJcbiAgc2Vjb25kYXJ5OiBcIiMzMzZlZjdcIixcclxuICBsaWdodDogXCIjRjJGMkYyXCIsXHJcbiAgZGFyazogXCIjMmIzOTQwXCIsXHJcbiAgeWVsbG93OiBcIiNmZWRjNWFcIixcclxuICBhc2g6IFwiIzQxM2U2NVwiLFxyXG4gIGdyZWVuOiBcIiM2OGQ1ODUgXCIsXHJcbiAgaW5mbzogXCIjMGU1NjdjXCIsXHJcbn07XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgcHJpbWFyeTogZGVmYXVsdENvbG9ycy5wcmltYXJ5LFxyXG4gIHByaW1hcnlIb3ZlcjogZGVmYXVsdENvbG9ycy5wcmltYXJ5SG92ZXIsXHJcbiAgc2Vjb25kYXJ5OiBkZWZhdWx0Q29sb3JzLnNlY29uZGFyeSxcclxuICBsaWdodDogZGVmYXVsdENvbG9ycy5saWdodCxcclxuICBsaWdodFNoYWRlOiByZ2JhKGRlZmF1bHRDb2xvcnMubGlnaHQsIDAuNyksXHJcbiAgZGFyazogZGVmYXVsdENvbG9ycy5kYXJrLFxyXG4gIGRhcmtTaGFkZTogcmdiYShkZWZhdWx0Q29sb3JzLmRhcmssIDAuNyksXHJcbiAgYXNoOiBkZWZhdWx0Q29sb3JzLmFzaCxcclxuICBiZzogZGVmYXVsdENvbG9ycy5saWdodCxcclxuICBiZzI6IFwiI2Y0ZjdmYVwiLFxyXG4gIGJnMzogXCIjZjhmOGY4XCIsXHJcbiAgYmc0OiBcIiNmZGZkZmZcIixcclxuICBiZzU6IFwiI2VjZjJmN1wiLFxyXG4gIGJnNjogXCIjZmZmXCIsXHJcbiAgYmc3OiBcIiNFREY5RjJcIixcclxuICBib3JkZXI6IFwiI2U3ZTllZFwiLFxyXG4gIHNoYWRvdzogcmdiYShkZWZhdWx0Q29sb3JzLmRhcmssIDAuMTUpLFxyXG4gIGhlYWRpbmc6IGRlZmF1bHRDb2xvcnMuZGFyayxcclxuICB0ZXh0OiByZ2JhKGRlZmF1bHRDb2xvcnMuZGFyaywgMC43KSxcclxuICB3YXJuaW5nOiBkZWZhdWx0Q29sb3JzLnllbGxvdyxcclxuICBzdWNjZXNzOiBkZWZhdWx0Q29sb3JzLmdyZWVuLFxyXG4gIGluZm86IGRlZmF1bHRDb2xvcnMuaW5mbyxcclxuXHJcbiAgbW9kZXM6IHtcclxuICAgIGRhcms6IHtcclxuICAgICAgcHJpbWFyeTogZGVmYXVsdENvbG9ycy5wcmltYXJ5LFxyXG4gICAgICBwcmltYXJ5SG92ZXI6IGRlZmF1bHRDb2xvcnMucHJpbWFyeUhvdmVyLFxyXG4gICAgICBzZWNvbmRhcnk6IGRlZmF1bHRDb2xvcnMuc2Vjb25kYXJ5LFxyXG4gICAgICBsaWdodDogZGVmYXVsdENvbG9ycy5saWdodCxcclxuICAgICAgbGlnaHRTaGFkZTogcmdiYShkZWZhdWx0Q29sb3JzLmxpZ2h0LCAwLjcpLFxyXG4gICAgICBkYXJrOiBkZWZhdWx0Q29sb3JzLmRhcmssXHJcbiAgICAgIGRhcmtTaGFkZTogcmdiYShkZWZhdWx0Q29sb3JzLmRhcmssIDAuNyksXHJcbiAgICAgIGFzaDogZGVmYXVsdENvbG9ycy5hc2gsXHJcbiAgICAgIGJnOiBkZWZhdWx0Q29sb3JzLmxpZ2h0LFxyXG4gICAgICBiZzI6IFwiI2Y0ZjdmYVwiLFxyXG4gICAgICBiZzM6IFwiI2Y4ZjhmOFwiLFxyXG4gICAgICBiZzQ6IFwiI2ZkZmRmZlwiLFxyXG4gICAgICBiZzU6IFwiI2VjZjJmN1wiLFxyXG4gICAgICBiZzY6IFwiI2ZmZlwiLFxyXG4gICAgICBiZzc6IFwiI0VERjlGMlwiLFxyXG4gICAgICBib3JkZXI6IFwiI2U3ZTllZFwiLFxyXG4gICAgICBzaGFkb3c6IHJnYmEoZGVmYXVsdENvbG9ycy5kYXJrLCAwLjE1KSxcclxuICAgICAgaGVhZGluZzogZGVmYXVsdENvbG9ycy5kYXJrLFxyXG4gICAgICB0ZXh0OiByZ2JhKGRlZmF1bHRDb2xvcnMuZGFyaywgMC43KSxcclxuICAgICAgd2FybmluZzogZGVmYXVsdENvbG9ycy55ZWxsb3csXHJcbiAgICAgIHN1Y2Nlc3M6IGRlZmF1bHRDb2xvcnMuZ3JlZW4sXHJcbiAgICAgIGluZm86IGRlZmF1bHRDb2xvcnMuaW5mbyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHRoZW1lID0ge1xyXG4gIGluaXRpYWxDb2xvck1vZGVOYW1lOiBcImxpZ2h0XCIsXHJcbiAgY29sb3JzOiBjb2xvcnMsXHJcbiAgc3BhY2U6IFtcclxuICAgIDAsXHJcbiAgICA0LFxyXG4gICAgOCxcclxuICAgIDEyLFxyXG4gICAgMTYsXHJcbiAgICAyMCxcclxuICAgIDI0LFxyXG4gICAgMjgsXHJcbiAgICAzMixcclxuICAgIDM2LFxyXG4gICAgNDAsXHJcbiAgICA0OCxcclxuICAgIDUyLFxyXG4gICAgNTYsXHJcbiAgICA2MCxcclxuICAgIDY0LFxyXG4gICAgNzIsXHJcbiAgICA4NCxcclxuICAgIDEwMCxcclxuICAgIDEyMCxcclxuICAgIDE0MCxcclxuICBdLFxyXG4gIGJyZWFrcG9pbnRzOiBbXHJcbiAgICBgJHticmVha3BvaW50cy5zbX1weGAsXHJcbiAgICBgJHticmVha3BvaW50cy5tZH1weGAsXHJcbiAgICBgJHticmVha3BvaW50cy5sZ31weGAsXHJcbiAgICBgJHticmVha3BvaW50cy54bH1weGAsXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbjh0YjF0L3VzZS1zY3JvbGwtcG9zaXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicG9saXNoZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1wbGF5ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=