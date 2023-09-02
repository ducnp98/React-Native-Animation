import { TodoState } from "./type";
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export const todoInitialState: TodoState = {
  text: 'Init'
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialState,
  reducers: {
    changeTextTodo(state, action: PayloadAction<string>) {
      state.text = action.payload
    },
  }
})

export const { actions: todoAction, reducer: todoReducer } = todoSlice