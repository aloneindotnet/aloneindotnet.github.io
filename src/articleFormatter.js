export default class ArticleFormatter
{
	getArticleHtml(article){
		return String.raw`
		<div class="m_article">
			<div class="m_title"><a href="${article.url}">${article.title}</a></div>
			<div class="m_author">by ${article.author} at ${new Date(article.publishedAt).toLocaleString()}</div>
			<div class="m_image"><img src="${article.urlToImage}"/></div>
			<div class="m_text">${article.description}</div>
		</div>`;
	}
}