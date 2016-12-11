export default class NewsProvider
{
	static instance;
	
	static getInstance() {
		if (instance) {
			return instance;
		}
		return new NewsProvider();
	}
	
	var url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=69f14793401d49c1a0d8fc4c0fb6df29';

	export function getNews(){
		return fetch(url,{ method: 'GET' })
	}
}