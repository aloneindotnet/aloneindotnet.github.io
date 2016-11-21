window.onload = function() {
    loadNews();
};
  
var loadNews = () => {
	let url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=69f14793401d49c1a0d8fc4c0fb6df29';
	
	var myInit = { method: 'GET' }

	fetch(url,myInit).then(function(response) {
		return response.json();
	})
	.then(function(json) {
		processNews(json);
	});
};

var processNews = (json) => {
	if (json.status === 'ok'){
		for (let article of json.articles){
			appendArticle(article, document.getElementById("content"));
		}
	};
};

var appendArticle = (article, container) => {
	let formattedArticle = String.raw`
	<div class="m_article">
		<div class="m_title"><a href="${article.url}">${article.title}</a></div>
		<div class="m_author">by ${article.author} at ${article.publishedAt}</div>
		<div class="m_image"><img src="${article.urlToImage}"/></div>
		<div class="m_text">${article.description}</div>
	</div>`;
	
	container.innerHTML = container.innerHTML + formattedArticle;
};