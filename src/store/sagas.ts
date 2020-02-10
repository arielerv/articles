import { all } from "redux-saga/effects";

import { articlesSaga } from "./articles/saga";

export default function* rootSaga() {
  yield all([articlesSaga()]);
}
