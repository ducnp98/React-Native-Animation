import { combineReducers } from "redux";
import { todoReducer } from "../slide";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
