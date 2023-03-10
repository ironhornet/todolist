import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import { rootReducer } from './rootReducer/rootReducer';
import { rootSaga } from './rootSaga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
  return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
