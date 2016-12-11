import ArticleFormatterProxy from 'ArticleFormatterProxy'
import NewsProvider from 'NewsProviderSingleton'
import CreateContainerAfterFooterStrategy from 'CreateContainerAfterFooterStrategy'
import CreateContainerBeforeFooterStrategy from 'CreateContainerBeforeFooterStrategy'

//var createContainerStrategy = new CreateContainerAfterFooterStrategy();
var createContainerStrategy = new CreateContainerBeforeFooterStrategy();

window.onload = function() {
	createContainerStrategy.run();
    loadNews();
};
  
var loadNews = () => {
	
	let provider = NewsProvider.getInstance();
	
	provider.getNews().then(function(response) {
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

var proxy = new ArticleFormatterProxy();

var appendArticle = (article, container) => {
	container.innerHTML = container.innerHTML + proxy.getArticleHtml(article);
};