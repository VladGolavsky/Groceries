import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import { navigationMiddleware } from '../navigation';
import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'groceries',
  storage: AsyncStorage,
  whitelist: ['auth', 'list'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export type IRootState = ReturnType<typeof reducer>;

export { persistor };
export default store;
