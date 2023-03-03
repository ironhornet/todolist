import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { todoListMock } from '../../../mocks/todoListMock';
import { getTodosRoutine } from './todo.routines';

const URL = 'https://jsonplaceholder.typicode.com/posts/1';

function* getTodosWorker() {
  try {
    const { request, success } = getTodosRoutine;
    yield put(request());
    yield call(() => axios.get(URL));

    yield put(success(todoListMock));
  } catch (error) {
    const { failure } = getTodosRoutine;
    yield put(failure('An error occurred while loading your todos'));
  }
}

export function* getTodosWatcher() {
  yield takeLatest(getTodosRoutine.TRIGGER, getTodosWorker);
}
