import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import * as actions from 'src/redux/actions';

import { ISignInAction, ISignUpAction } from '../actions/auth/auth.interface';
import { IUser } from 'src/interfaces/user.interface';
import { ITokens } from 'src/interfaces/token.interface';

import { setLoadingAction } from '../actions/loading';
import { get, post } from 'src/utils/api';
import * as endpoints from 'src/constants/endpoints'
import * as ERRORS from 'src/constants/errors';
import { setAuthHeader } from 'src/utils/apiConfig';
import { navigationRef } from 'src/navigation';
import { StackActions } from '@react-navigation/native';

function* signInSaga({ payload } : { payload: ISignInAction }): Generator {
  try {
    yield put(setLoadingAction({ signIn: true }));

    const { data } = (yield call(post, endpoints.signIn(), { ...payload })) as {
      data: ITokens & IUser;
    };
    
    if (data) {
      const { accessToken, refreshToken, ...user } = data;
      setAuthHeader(accessToken);
      yield put(actions.setTokensAction({ accessToken, refreshToken }));
      yield put(actions.setUserAction(user));

      navigationRef.current?.dispatch(StackActions.replace('SignIn'));

      yield put(setLoadingAction({ signIn: false }));
    }
  } catch (e: any) {
    if (e?.statusCode === 400) {
      yield put(actions.setErrorAction({ signIn: ERRORS.FillCorrectData }));
    } else if (e?.statusCode) {
      yield put(actions.setErrorAction({ signIn: e?.message }));
    } else {
      yield put(actions.setErrorAction({ signIn: ERRORS.SomethingWentWrong }));
    }
    yield put(setLoadingAction({ signIn: false }));
  } finally {
  }
};


function* signUpSaga({ payload } : { payload: ISignUpAction }): Generator {
  try {
    yield put(setLoadingAction({ signUp: true }));

    const { data } = (yield call(post, endpoints.signUp(), { ...payload })) as {
      data: ITokens & IUser;
    };

    if (data?.accessToken) {
      const { accessToken, refreshToken, ...user } = data;
      setAuthHeader(accessToken);
      yield put(actions.setTokensAction({ accessToken, refreshToken }));
      yield put(actions.setUserAction(user));

      navigationRef.current?.dispatch(StackActions.replace('SignIn'));

      yield put(setLoadingAction({ signUp: false }));

    }
  } catch (e: any) {
    console.log('e', e)
    if (e?.statusCode) {
      yield put(actions.setErrorAction({ signUp: e?.message }));
    } else {
      yield put(actions.setErrorAction({ signUp: ERRORS.SomethingWentWrong }));
    }
    yield put(setLoadingAction({ signUp: false }));
  } finally {
  }
};

export default function* activitiesSagas() {
  yield all([
    takeLatest(actions.signInAction, signInSaga),
    takeLatest(actions.signUpAction, signUpSaga),
  ]);
};
