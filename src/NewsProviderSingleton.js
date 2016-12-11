//Singleton implementation
export default class NewsProvider
{
	constructor(){
		this.url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=69f14793401d49c1a0d8fc4c0fb6df29';
	}

	static getInstance() {
		if (!this.instance) {
			this.instance = new NewsProvider();
		}
		return this.instance;
	}

	getNews(){
		return fetch(this.url,{ method: 'GET' })
	}
}