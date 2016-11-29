/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _articleFormatter = __webpack_require__(2);

	var _articleFormatter2 = _interopRequireDefault(_articleFormatter);

	var _newsLoader = __webpack_require__(3);

	var _newsLoader2 = _interopRequireDefault(_newsLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.onload = function () {
		loadNews();
	};

	var loadNews = function loadNews() {
		(0, _newsLoader2.default)().then(function (response) {
			if (response.status === 200) {
				return response.json();
			} else {
				document.getElementById("content").innerHTML = 'Failed to load News from newsapi.org';
			};
		}).then(function (json) {
			processNews(json);
		});
	};

	var processNews = function processNews(json) {
		var container = document.getElementById("content");
		if (json.status === 'ok') {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = json.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var article = _step.value;

					appendArticle(article, container);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		};
	};

	var appendArticle = function appendArticle(article, container) {
		container.innerHTML = container.innerHTML + (0, _articleFormatter2.default)(article);
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _templateObject = _taggedTemplateLiteral(["\n\t<div class=\"m_article\">\n\t\t<div class=\"m_title\"><a href=\"", "\">", "</a></div>\n\t\t<div class=\"m_author\">by ", " at ", "</div>\n\t\t<div class=\"m_image\"><img src=\"", "\"/></div>\n\t\t<div class=\"m_text\">", "</div>\n\t</div>"], ["\n\t<div class=\"m_article\">\n\t\t<div class=\"m_title\"><a href=\"", "\">", "</a></div>\n\t\t<div class=\"m_author\">by ", " at ", "</div>\n\t\t<div class=\"m_image\"><img src=\"", "\"/></div>\n\t\t<div class=\"m_text\">", "</div>\n\t</div>"]);

	exports.getArticleHtml = getArticleHtml;

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function getArticleHtml(article) {
		return String.raw(_templateObject, article.url, article.title, article.author, new Date(article.publishedAt).toLocaleString(), article.urlToImage, article.description);
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getNews = getNews;
	var url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=69f14793401d49c1a0d8fc4c0fb6df29';

	function getNews() {
		return fetch(url, { method: 'GET' });
	}

/***/ }
/******/ ]);