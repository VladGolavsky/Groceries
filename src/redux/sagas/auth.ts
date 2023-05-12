import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import * as actions from 'src/redux/actions';

import { ISignInAction, ISignUpAction } from '../actions/auth/auth.interface';
import { setLoadingAction } from '../actions/loading';
import { LoadingEnum } from '../actions/loading/loading.interface';
import { get, post } from 'src/utils/api';
import * as endpoints from 'src/constants/endpoints'
import * as ERRORS from 'src/constants/errors';

function* signInSaga({ payload } : { payload: ISignInAction }): Generator {
  try {
    yield put(setLoadingAction({ signIn: true }));

    const res = yield call(post, endpoints.signIn(), { ...payload })
    
    yield put(setLoadingAction({ signIn: false }));
  } catch (e: any) {
    // console.log('eeeee', e)
    if (e?.data?.statusCode === 400) {
      yield put(actions.setErrorAction({ signIn: ERRORS.FillCorrectData }));
    } else {
      yield put(actions.setErrorAction({ signIn: ERRORS.SomethingWentWrong }));
    }
    yield put(setLoadingAction({ signIn: false }));
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
