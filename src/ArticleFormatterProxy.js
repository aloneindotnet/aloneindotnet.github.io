//implement Proxy pattern: add div-wrapper to each article div

import ArticleFormatter from 'ArticleFormatter'

export default class ArticleFormatterProxy
{
	constructor(){
		this.formatter = new ArticleFormatter();
	}
	
	getArticleHtml(article){
		return String.raw`
		<div class="div_wrapper">
			${this.formatter.getArticleHtml(article)}
		</div>`;
	}
}