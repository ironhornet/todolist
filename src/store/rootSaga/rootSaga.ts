import { all } from 'redux-saga/effects';
import { getTodosWatcher } from '../features/todo/todo.saga';

export function* rootSaga() {
  yield all([
    getTodosWatcher()
  ]);
}
