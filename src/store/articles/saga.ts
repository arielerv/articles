import { takeLatest, call, put } from "redux-saga/effects";

import ArticlesActions, { ArticlesTypes } from "./actions";
import ArticlesService from "../../services/articles";
import { ArticlesInterface } from "../../interfaces/articles";
import articlesFilter from "../../utils/articlesFilter";

export function* fetchArticles() {
  try {
    const response: { data: { articles: ArticlesInterface } } = yield call(ArticlesService.fetch);
    yield put(ArticlesActions.receiveArticles(articlesFilter(response.data.articles)));
  } catch (err) {
    yield put(ArticlesActions.articlesError(err.message || "Network Error"));
  }
}

export function* articlesSaga() {
  yield takeLatest(ArticlesTypes.FETCH_ARTICLES, fetchArticles);
}
