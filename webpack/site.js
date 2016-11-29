'use strict';

var _templateObject = _taggedTemplateLiteral(['\n\t<div class="m_article">\n\t\t<div class="m_title"><a href="', '">', '</a></div>\n\t\t<div class="m_author">by ', ' at ', '</div>\n\t\t<div class="m_image"><img src="', '"/></div>\n\t\t<div class="m_text">', '</div>\n\t</div>'], ['\n\t<div class="m_article">\n\t\t<div class="m_title"><a href="', '">', '</a></div>\n\t\t<div class="m_author">by ', ' at ', '</div>\n\t\t<div class="m_image"><img src="', '"/></div>\n\t\t<div class="m_text">', '</div>\n\t</div>']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

window.onload = function () {
	loadNews();
};

var loadNews = function loadNews() {
	var url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=69f14793401d49c1a0d8fc4c0fb6df29';

	fetch(url, { method: 'GET' }).then(function (response) {
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
	var formattedArticle = String.raw(_templateObject, article.url, article.title, article.author, new Date(article.publishedAt).toLocaleString(), article.urlToImage, article.description);

	container.innerHTML = container.innerHTML + formattedArticle;
};
