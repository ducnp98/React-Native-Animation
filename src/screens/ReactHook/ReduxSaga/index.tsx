import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoPage from "./TodoPage";

const ReduxSaga = () => {
  return (
    <Provider store={store}>
      <TodoPage />
    </Provider>
  );
};

export default ReduxSaga;
