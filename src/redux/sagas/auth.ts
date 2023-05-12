import {
  all,
  takeEvery,
} from 'redux-saga/effects';
import * as actions from 'src/redux/actions';

import { ISignInAction } from '../actions/auth/auth.interface';

function* signInSaga({ payload } : { payload: ISignInAction }): Generator {
  try {
    console.log('teste', payload)
  } catch (e: any) {
  
  } finally {
  }
};

export default function* activitiesSagas() {
  yield all([
    takeEvery(actions.signInAction, signInSaga),
  ]);
};
