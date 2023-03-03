import { combineReducers } from '@reduxjs/toolkit';
import todoSlice from '../features/todo/todo.slice';

export const rootReducer = combineReducers({
  todos: todoSlice,
});
