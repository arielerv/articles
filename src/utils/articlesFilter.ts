import {ArticleInterface, ArticlesInterface} from "../interfaces/articles";

const articlesFilter = (articles: ArticlesInterface) => {
  let newArticles: Array<ArticleInterface> = [];
  if (!articles || articles.length === 0) {
    return [];
  }
  articles.forEach(article => {
    if (!article.promo_items) {
      return;
    }
    if (!article.promo_items.basic) {
      return;
    }
    if (
      !article.promo_items.basic.resized_urls ||
      article.promo_items.basic.resized_urls.length === 0
    ) {
      return;
    }
    if (!article.promo_items.basic.resized_urls[0].resizedUrl) {
      return;
    }
    return newArticles.push(article);
  });
  return newArticles;
};

export default articlesFilter;
