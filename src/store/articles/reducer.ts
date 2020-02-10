import { createReducer } from "reduxsauce";

import { initialState, InitialStateInterface } from "./initial-state";
import { ArticlesTypes } from "./actions";
import { ArticlesInterface } from "../../interfaces/articles";

export const fetchArticles = (state: any) => ({
  ...state,
  isLoading: true,
  error: null,
  data: null
});

export const receiveArticles = (
  state: any,
  { data }: { data: ArticlesInterface }
) => ({
  ...state,
  data,
  isLoading: false,
  error: null
});

export const articlesError = (state: any, { error }: { error: string }) => ({
  ...state,
  error,
  isLoading: false,
  data: null
});

export default createReducer<InitialStateInterface, any>(initialState, {
  [ArticlesTypes.FETCH_ARTICLES]: fetchArticles,
  [ArticlesTypes.RECEIVE_ARTICLES]: receiveArticles,
  [ArticlesTypes.ARTICLES_ERROR]: articlesError
});
