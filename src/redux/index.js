import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { handleIdeasSaga, ideasReducer } from './ideas';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, ideasReducer)
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

export const persistor = persistStore(store);

sagaMiddleware.run(handleIdeasSaga);
