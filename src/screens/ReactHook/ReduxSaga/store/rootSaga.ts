import { all, fork } from "redux-saga/effects";
import todoSaga from "../slide/saga";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}