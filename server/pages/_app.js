module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./style/index.scss
var style = __webpack_require__("JuI/");

// EXTERNAL MODULE: ./style/index.css
var style_0 = __webpack_require__("GFNa");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Navbar.js




function Navbar() {
  const {
    0: path,
    1: setPath
  } = Object(external_react_["useState"])(null);
  let location = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    setPath(location.pathname);
  }, [location.pathname]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
    className: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: "navbar-brand",
        href: "/",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "/images/logo.png",
          width: "30",
          height: "30",
          alt: ""
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: " Minecode"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarResponsive",
        "aria-controls": "navbarResponsive",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "navbar-toggler-icon"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "collapse navbar-collapse",
        id: "navbarResponsive",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
          className: "navbar-nav ml-auto",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: path && path === '/' ? 'nav-item active' : 'nav-item',
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "nav-link",
              href: "/",
              children: "Home"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: path && path.includes('/blog') ? 'nav-item active' : 'nav-item',
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "nav-link",
              href: "/blog",
              children: "Blog"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
            className: path && path.includes('/release') ? 'nav-item active' : 'nav-item',
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: "nav-link",
              href: "/releases",
              children: "Releases"
            })
          })]
        })
      })]
    })
  });
}
// CONCATENATED MODULE: ./components/Footer.js



function Footer() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
    className: "py-5 bg-dark",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "m-0 text-center text-white",
        children: "Copyright \xA9 Minecode 2020"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "text-center mt-2",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "http://www.freepik.com",
          children: "Designed by slidesgo, stories and macrovector / Freepik"
        })
      })]
    })
  });
}
// CONCATENATED MODULE: ./components/Layout.js






const Layout = props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Navbar, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "content",
      children: props.children
    })]
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer, {})]
});

/* harmony default export */ var components_Layout = (Layout);
// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class _app_MyApp extends app_default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
          children: "Minecode"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Layout, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
      })]
    });
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GFNa":
/***/ (function(module, exports) {



/***/ }),

/***/ "JuI/":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });