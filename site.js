window.onload = function() {
    loadNews();
};
  
var loadNews = () => {
	let url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=69f14793401d49c1a0d8fc4c0fb6df29';
	
	var myInit = { method: 'GET' }

	fetch(url,myInit).then(function(response) {
		processNews();
	});
};

var processNews = (json) => {
	if (json.status === 'ok'){
		for (let article of json.articles){
			console.log(article.title);
		}
	};
};