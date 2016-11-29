import getArticleHtml from 'articleFormatter'
import getNews from 'newsLoader'

window.onload = function() {
    loadNews();
};
  
var loadNews = () => {
	getNews().then(function(response) {
		if (response.status === 200) {
			return response.json();
		}
		else {
			document.getElementById("content").innerHTML = 'Failed to load News from newsapi.org';
		};
	})
	.then(function(json) {
		processNews(json);
	});
};

var processNews = (json) => {
	let container = document.getElementById("content");
	if (json.status === 'ok'){
		for (let article of json.articles){
			appendArticle(article, container);
		}
	};
};

var appendArticle = (article, container) => {
	container.innerHTML = container.innerHTML + getArticleHtml(article);
};