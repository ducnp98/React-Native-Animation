import { all, takeLatest } from "redux-saga/effects";

import { todoAction } from ".";
import { Alert } from "react-native";

function* changeTextTodo({
  payload,
}: ReturnType<typeof todoAction.changeTextTodo>) {
  Alert.alert(`Change text to ${payload}`)
}
export default function* todoSaga() {
  yield all([takeLatest(todoAction.changeTextTodo, changeTextTodo)]);
}
