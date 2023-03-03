import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  update,
  findIndex,
  propEq,
  reject,
  append,
} from 'ramda';

import { ITodoDto } from '../../../types/todoList/todoList.interface';
import { IInitialState } from './todo.interface';
import { getTodosRoutine } from './todo.routines';

const initialState = (): IInitialState => ({
  todoList: [],
  isLoading: false,
  error: null,
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState(),
  reducers: {
    updateTodo(state, action: PayloadAction<ITodoDto>) {
      const index = findIndex(propEq('id', action.payload.id), state.todoList);

      state.todoList = update(index, action.payload, state.todoList);
    },

    deleteTodo(state, action: PayloadAction<string>) {
      state.todoList = reject(propEq('id', action.payload), state.todoList);
    },

    addTodo(state, action: PayloadAction<ITodoDto>) {
      state.todoList = append(action.payload, state.todoList);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTodosRoutine.REQUEST, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodosRoutine.SUCCESS, (state, action: PayloadAction<ITodoDto[]>) => {
        state.todoList = action.payload;
        state.error = '';
        state.isLoading = false;
      })
      .addCase(getTodosRoutine.FAILURE, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  updateTodo,
  deleteTodo,
  addTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
