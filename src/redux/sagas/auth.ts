import {
  all,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import * as actions from 'src/redux/actions';

import { ISignInAction, ISignUpAction } from '../actions/auth/auth.interface';
import { setLoadingAction } from '../actions/loading';
import { LoadingEnum } from '../actions/loading/loading.interface';

function* signInSaga({ payload } : { payload: ISignInAction }): Generator {
  try {
    console.log('teste', payload)
    yield put(setLoadingAction({ signIn: true }));
  } catch (e: any) {
  
  } finally {
  }
};

function* signUpSaga({ payload } : { payload: ISignUpAction }): Generator {
  try {
    console.log('teste', payload)
  } catch (e: any) {
  
  } finally {
  }
};

export default function* activitiesSagas() {
  yield all([
    takeLatest(actions.signInAction, signInSaga),
    takeLatest(actions.signUpAction, signUpSaga),
  ]);
};
