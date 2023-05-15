import { all } from 'redux-saga/effects';

import authSaga from './auth';
import listSaga from './list';

export default function* rootSaga() {
  yield all([
    authSaga(),
    listSaga(),
  ]);
};
