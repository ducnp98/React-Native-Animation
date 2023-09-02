import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import { emptySplitApi } from "../../RTKquery/RTK";

const reduxSagaMonitorOptions = {}
export const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)

export const middlewares = [sagaMiddleware, emptySplitApi.middleware]

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: { warnAfter: 100 },
      }).concat(middlewares),
  })
  


sagaMiddleware.run(rootSaga);

export default store;
