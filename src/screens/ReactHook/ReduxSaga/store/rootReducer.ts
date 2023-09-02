import { combineReducers } from "redux";
import { todoReducer } from "../slide";
import { emptySplitApi } from "../../RTKquery/RTK";

const rootReducer = combineReducers({
  todo: todoReducer,
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
