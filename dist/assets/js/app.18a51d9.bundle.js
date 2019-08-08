/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app.js","vendor~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _jquery = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\n__webpack_require__(/*! ./assets/styles/_app.scss */ \"./assets/styles/_app.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* src/app.js */\n(0, _jquery2.default)(document).ready(function () {\n  __webpack_require__(/*! ./assets/scripts/jssocials.min */ \"./assets/scripts/jssocials.min.js\");\n  __webpack_require__(/*! ./assets/scripts/demo */ \"./assets/scripts/demo.js\");\n  __webpack_require__(/*! ./assets/scripts/animations */ \"./assets/scripts/animations.js\");\n  __webpack_require__(/*! ./assets/scripts/script */ \"./assets/scripts/script.js\");\n});\n// Styles\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./assets/scripts/animations.js":
/*!**************************************!*\
  !*** ./assets/scripts/animations.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nvar _ScrollMagic = __webpack_require__(/*! ScrollMagic */ \"../node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js\");\n\nvar _ScrollMagic2 = _interopRequireDefault(_ScrollMagic);\n\nvar _gsap = __webpack_require__(/*! gsap */ \"../node_modules/gsap/esm/index.js\");\n\n__webpack_require__(/*! animation.gsap */ \"../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar controller = new _ScrollMagic2.default.Controller();\n\nvar headerScene = new _ScrollMagic2.default.Scene({\n    triggerElement: \"content-wrapper\",\n    offset: 300\n}).setClassToggle('#header', 'hide').addTo(controller).on('update', function (event) {\n    var direction = event.target.controller().info('scrollDirection');\n    if (direction === 'REVERSE') {\n        $('#header').removeClass('hide');\n    } else {\n        setTimeout(function () {\n            if (direction !== 'REVERS') {\n                $('#header').addClass('hide');\n            }\n        }, 400);\n    }\n});\n\n$('.card').each(function (index) {\n    var currentCard = this;\n    var tweenCard = new _gsap.TimelineMax().to(currentCard, 0.5, { css: { transform: \"translateY(0)\", opacity: 1 } }).delay(0.0015 * index);\n\n    var cardScene = new _ScrollMagic2.default.Scene({\n        triggerElement: currentCard,\n        offset: -120,\n        triggerHook: 1\n    }).setTween(tweenCard).addTo(controller);\n});\n\n$('#menuBtn').click(function () {\n    $('#menu').toggleClass('menu-slide-in');\n    $('#header, #menuBtn').toggleClass('menu-opened');\n});\n\n$('.highlight-button').click(function () {\n    var parent = $(this).parent();\n    parent.find('.highlight-content').slideToggle();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/scripts/animations.js?");

/***/ }),

/***/ "./assets/scripts/demo.js":
/*!********************************!*\
  !*** ./assets/scripts/demo.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconsole.log('Demo!');\n\n//# sourceURL=webpack:///./assets/scripts/demo.js?");

/***/ }),

/***/ "./assets/scripts/jssocials.min.js":
/*!*****************************************!*\
  !*** ./assets/scripts/jssocials.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(jQuery) {\n\n/*! jssocials - v1.4.0 - 2016-10-10\n* http://js-socials.com\n* Copyright (c) 2016 Artem Tabalin; Licensed MIT */\n!function (a, b, c) {\n  function d(a, c) {\n    var d = b(a);d.data(f, this), this._$element = d, this.shares = [], this._init(c), this._render();\n  }var e = \"JSSocials\",\n      f = e,\n      g = function g(a, c) {\n    return b.isFunction(a) ? a.apply(c, b.makeArray(arguments).slice(2)) : a;\n  },\n      h = /(\\.(jpeg|png|gif|bmp|svg)$|^data:image\\/(jpeg|png|gif|bmp|svg\\+xml);base64)/i,\n      i = /(&?[a-zA-Z0-9]+=)?\\{([a-zA-Z0-9]+)\\}/g,\n      j = { G: 1e9, M: 1e6, K: 1e3 },\n      k = {};d.prototype = { url: \"\", text: \"\", shareIn: \"blank\", showLabel: function showLabel(a) {\n      return this.showCount === !1 ? a > this.smallScreenWidth : a >= this.largeScreenWidth;\n    }, showCount: function showCount(a) {\n      return a <= this.smallScreenWidth ? \"inside\" : !0;\n    }, smallScreenWidth: 640, largeScreenWidth: 1024, resizeTimeout: 200, elementClass: \"jssocials\", sharesClass: \"jssocials-shares\", shareClass: \"jssocials-share\", shareButtonClass: \"jssocials-share-button\", shareLinkClass: \"jssocials-share-link\", shareLogoClass: \"jssocials-share-logo\", shareLabelClass: \"jssocials-share-label\", shareLinkCountClass: \"jssocials-share-link-count\", shareCountBoxClass: \"jssocials-share-count-box\", shareCountClass: \"jssocials-share-count\", shareZeroCountClass: \"jssocials-share-no-count\", _init: function _init(a) {\n      this._initDefaults(), b.extend(this, a), this._initShares(), this._attachWindowResizeCallback();\n    }, _initDefaults: function _initDefaults() {\n      this.url = a.location.href, this.text = b.trim(b(\"meta[name=description]\").attr(\"content\") || b(\"title\").text());\n    }, _initShares: function _initShares() {\n      this.shares = b.map(this.shares, b.proxy(function (a) {\n        \"string\" == typeof a && (a = { share: a });var c = a.share && k[a.share];if (!c && !a.renderer) throw Error(\"Share '\" + a.share + \"' is not found\");return b.extend({ url: this.url, text: this.text }, c, a);\n      }, this));\n    }, _attachWindowResizeCallback: function _attachWindowResizeCallback() {\n      b(a).on(\"resize\", b.proxy(this._windowResizeHandler, this));\n    }, _detachWindowResizeCallback: function _detachWindowResizeCallback() {\n      b(a).off(\"resize\", this._windowResizeHandler);\n    }, _windowResizeHandler: function _windowResizeHandler() {\n      (b.isFunction(this.showLabel) || b.isFunction(this.showCount)) && (a.clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(b.proxy(this.refresh, this), this.resizeTimeout));\n    }, _render: function _render() {\n      this._clear(), this._defineOptionsByScreen(), this._$element.addClass(this.elementClass), this._$shares = b(\"<div>\").addClass(this.sharesClass).appendTo(this._$element), this._renderShares();\n    }, _defineOptionsByScreen: function _defineOptionsByScreen() {\n      this._screenWidth = b(a).width(), this._showLabel = g(this.showLabel, this, this._screenWidth), this._showCount = g(this.showCount, this, this._screenWidth);\n    }, _renderShares: function _renderShares() {\n      b.each(this.shares, b.proxy(function (a, b) {\n        this._renderShare(b);\n      }, this));\n    }, _renderShare: function _renderShare(a) {\n      var c;c = b.isFunction(a.renderer) ? b(a.renderer()) : this._createShare(a), c.addClass(this.shareClass).addClass(a.share ? \"jssocials-share-\" + a.share : \"\").addClass(a.css).appendTo(this._$shares);\n    }, _createShare: function _createShare(a) {\n      var c = b(\"<div>\"),\n          d = this._createShareLink(a).appendTo(c);if (this._showCount) {\n        var e = \"inside\" === this._showCount,\n            f = e ? d : b(\"<div>\").addClass(this.shareCountBoxClass).appendTo(c);f.addClass(e ? this.shareLinkCountClass : this.shareCountBoxClass), this._renderShareCount(a, f);\n      }return c;\n    }, _createShareLink: function _createShareLink(a) {\n      var c = this._getShareStrategy(a),\n          d = c.call(a, { shareUrl: this._getShareUrl(a) });return d.addClass(this.shareLinkClass).append(this._createShareLogo(a)), this._showLabel && d.append(this._createShareLabel(a)), b.each(this.on || {}, function (c, e) {\n        b.isFunction(e) && d.on(c, b.proxy(e, a));\n      }), d;\n    }, _getShareStrategy: function _getShareStrategy(a) {\n      var b = m[a.shareIn || this.shareIn];if (!b) throw Error(\"Share strategy '\" + this.shareIn + \"' not found\");return b;\n    }, _getShareUrl: function _getShareUrl(a) {\n      var b = g(a.shareUrl, a);return this._formatShareUrl(b, a);\n    }, _createShareLogo: function _createShareLogo(a) {\n      var c = a.logo,\n          d = h.test(c) ? b(\"<img>\").attr(\"src\", a.logo) : b(\"<i>\").addClass(c);return d.addClass(this.shareLogoClass), d;\n    }, _createShareLabel: function _createShareLabel(a) {\n      return b(\"<span>\").addClass(this.shareLabelClass).text(a.label);\n    }, _renderShareCount: function _renderShareCount(a, c) {\n      var d = b(\"<span>\").addClass(this.shareCountClass);c.addClass(this.shareZeroCountClass).append(d), this._loadCount(a).done(b.proxy(function (a) {\n        a && (c.removeClass(this.shareZeroCountClass), d.text(a));\n      }, this));\n    }, _loadCount: function _loadCount(a) {\n      var c = b.Deferred(),\n          d = this._getCountUrl(a);if (!d) return c.resolve(0).promise();var e = b.proxy(function (b) {\n        c.resolve(this._getCountValue(b, a));\n      }, this);return b.getJSON(d).done(e).fail(function () {\n        b.get(d).done(e).fail(function () {\n          c.resolve(0);\n        });\n      }), c.promise();\n    }, _getCountUrl: function _getCountUrl(a) {\n      var b = g(a.countUrl, a);return this._formatShareUrl(b, a);\n    }, _getCountValue: function _getCountValue(a, c) {\n      var d = (b.isFunction(c.getCount) ? c.getCount(a) : a) || 0;return \"string\" == typeof d ? d : this._formatNumber(d);\n    }, _formatNumber: function _formatNumber(a) {\n      return b.each(j, function (b, c) {\n        return a >= c ? (a = parseFloat((a / c).toFixed(2)) + b, !1) : void 0;\n      }), a;\n    }, _formatShareUrl: function _formatShareUrl(b, c) {\n      return b.replace(i, function (b, d, e) {\n        var f = c[e] || \"\";return f ? (d || \"\") + a.encodeURIComponent(f) : \"\";\n      });\n    }, _clear: function _clear() {\n      a.clearTimeout(this._resizeTimer), this._$element.empty();\n    }, _passOptionToShares: function _passOptionToShares(a, c) {\n      var d = this.shares;b.each([\"url\", \"text\"], function (e, f) {\n        f === a && b.each(d, function (b, d) {\n          d[a] = c;\n        });\n      });\n    }, _normalizeShare: function _normalizeShare(a) {\n      return b.isNumeric(a) ? this.shares[a] : \"string\" == typeof a ? b.grep(this.shares, function (b) {\n        return b.share === a;\n      })[0] : a;\n    }, refresh: function refresh() {\n      this._render();\n    }, destroy: function destroy() {\n      this._clear(), this._detachWindowResizeCallback(), this._$element.removeClass(this.elementClass).removeData(f);\n    }, option: function option(a, b) {\n      return 1 === arguments.length ? this[a] : (this[a] = b, this._passOptionToShares(a, b), void this.refresh());\n    }, shareOption: function shareOption(a, b, c) {\n      return a = this._normalizeShare(a), 2 === arguments.length ? a[b] : (a[b] = c, void this.refresh());\n    } }, b.fn.jsSocials = function (a) {\n    var e = b.makeArray(arguments),\n        g = e.slice(1),\n        h = this;return this.each(function () {\n      var e,\n          i = b(this),\n          j = i.data(f);if (j) {\n        if (\"string\" == typeof a) {\n          if (e = j[a].apply(j, g), e !== c && e !== j) return h = e, !1;\n        } else j._detachWindowResizeCallback(), j._init(a), j._render();\n      } else new d(i, a);\n    }), h;\n  };var l = function l(a) {\n    var c;b.isPlainObject(a) ? c = d.prototype : (c = k[a], a = arguments[1] || {}), b.extend(c, a);\n  },\n      m = { popup: function popup(c) {\n      return b(\"<a>\").attr(\"href\", \"#\").on(\"click\", function () {\n        return a.open(c.shareUrl, null, \"width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0\"), !1;\n      });\n    }, blank: function blank(a) {\n      return b(\"<a>\").attr({ target: \"_blank\", href: a.shareUrl });\n    }, self: function self(a) {\n      return b(\"<a>\").attr({ target: \"_self\", href: a.shareUrl });\n    } };a.jsSocials = { Socials: d, shares: k, shareStrategies: m, setDefaults: l };\n}(window, jQuery), function (a, b, c) {\n  b.extend(c.shares, { email: { label: \"E-mail\", logo: \"fa fa-at\", shareUrl: \"mailto:{to}?subject={text}&body={url}\", countUrl: \"\", shareIn: \"self\" }, twitter: { label: \"Tweet\", logo: \"fa fa-twitter\", shareUrl: \"https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}\", countUrl: \"\" }, facebook: { label: \"Like\", logo: \"fa fa-facebook\", shareUrl: \"https://facebook.com/sharer/sharer.php?u={url}\", countUrl: \"https://graph.facebook.com/?id={url}\", getCount: function getCount(a) {\n        return a.share && a.share.share_count || 0;\n      } }, vkontakte: { label: \"Like\", logo: \"fa fa-vk\", shareUrl: \"https://vk.com/share.php?url={url}&title={title}&description={text}\", countUrl: \"https://vk.com/share.php?act=count&index=1&url={url}\", getCount: function getCount(a) {\n        return parseInt(a.slice(15, -2).split(\", \")[1]);\n      } }, googleplus: { label: \"+1\", logo: \"fa fa-google\", shareUrl: \"https://plus.google.com/share?url={url}\", countUrl: \"\" }, linkedin: { label: \"Share\", logo: \"fa fa-linkedin\", shareUrl: \"https://www.linkedin.com/shareArticle?mini=true&url={url}\", countUrl: \"https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?\", getCount: function getCount(a) {\n        return a.count;\n      } }, pinterest: { label: \"Pin it\", logo: \"fa fa-pinterest\", shareUrl: \"https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}\", countUrl: \"https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?\", getCount: function getCount(a) {\n        return a.count;\n      } }, stumbleupon: { label: \"Share\", logo: \"fa fa-stumbleupon\", shareUrl: \"http://www.stumbleupon.com/submit?url={url}&title={title}\", countUrl: \"https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}\", getCount: function getCount(a) {\n        return a.result.views;\n      } }, telegram: { label: \"Telegram\", logo: \"fa fa-paper-plane\", shareUrl: \"tg://msg?text={url} {text}\", countUrl: \"\", shareIn: \"self\" }, whatsapp: { label: \"WhatsApp\", logo: \"fa fa-whatsapp\", shareUrl: \"whatsapp://send?text={url} {text}\", countUrl: \"\", shareIn: \"self\" }, line: { label: \"LINE\", logo: \"fa fa-comment\", shareUrl: \"http://line.me/R/msg/text/?{text} {url}\", countUrl: \"\" }, viber: { label: \"Viber\", logo: \"fa fa-volume-control-phone\", shareUrl: \"viber://forward?text={url} {text}\", countUrl: \"\", shareIn: \"self\" }, pocket: { label: \"Pocket\", logo: \"fa fa-get-pocket\", shareUrl: \"https://getpocket.com/save?url={url}&title={title}\", countUrl: \"\" }, messenger: { label: \"Share\", logo: \"fa fa-commenting\", shareUrl: \"fb-messenger://share?link={url}\", countUrl: \"\", shareIn: \"self\" } });\n}(window, jQuery, window.jsSocials);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/scripts/jssocials.min.js?");

/***/ }),

/***/ "./assets/scripts/script.js":
/*!**********************************!*\
  !*** ./assets/scripts/script.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\n$('.post-socials').jsSocials({\n    shares: [{ share: \"vkontakte\", logo: 'fab fa-vk' }, { share: \"twitter\", logo: 'fab fa-twitter' }, { share: \"facebook\", logo: 'fab fa-facebook-f' }, { share: \"telegram\", logo: 'fab fa-telegram-plane' }]\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/scripts/script.js?");

/***/ }),

/***/ "./assets/styles/_app.scss":
/*!*********************************!*\
  !*** ./assets/styles/_app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/styles/_app.scss?");

/***/ })

/******/ });