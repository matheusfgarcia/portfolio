import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
import { rootReducer } from '../reducers';
import rootSaga from '../saga';

const persistConfig = {
  key: 'portfolio',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  persistedReducer, 
  composeWithDevTools(
    applyMiddleware(sagaMiddleware) 
  ) 
)

const setupStore = () => {
  let persistor = persistStore(store)
  
  return {
    ...store,
    runSaga: sagaMiddleware.run(rootSaga),
    persistor: persistor.purge()
  }
};


export type RootState = ReturnType<typeof store.getState>

export default setupStore()
