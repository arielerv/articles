import { ArticlesInterface } from "../../interfaces/articles";

export const getArticles = (state: {
  articles: { data: ArticlesInterface | null };
}) => state.articles.data;

export const isLoading = (state: { articles: { isLoading: boolean } }) =>
  state.articles.isLoading;

export const getError = (state: { articles: { error: boolean } }) =>
  state.articles.error;
