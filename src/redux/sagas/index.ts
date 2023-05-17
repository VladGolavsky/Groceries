import { all } from 'redux-saga/effects';

import authSaga from './auth';
import listSaga from './list';
import socketSaga from './socket.io';

export default function* rootSaga() {
  yield all([
    authSaga(),
    listSaga(),
    socketSaga(),
  ]);
};
