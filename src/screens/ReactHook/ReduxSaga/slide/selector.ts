import { createSelector } from "reselect";
import { AppState } from "../store/rootReducer";
import { todoInitialState } from ".";
import { TodoState } from "./type";

const selectDomain = (state: AppState) => state.todo ?? todoInitialState;

export const selectTodoString = createSelector(
  [selectDomain],
  (todoState: TodoState) => todoState.text
);
