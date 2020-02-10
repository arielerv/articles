import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import articles from "./articles/reducer";

export default (history: any) =>
  combineReducers({
    router: connectRouter(history),
    articles
  });
