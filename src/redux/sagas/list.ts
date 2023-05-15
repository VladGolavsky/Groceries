import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import * as actions from 'src/redux/actions';

import { setLoadingAction } from '../actions/loading';
import { get, post } from 'src/utils/api';
import * as endpoints from 'src/constants/endpoints';
import { navigationRef } from 'src/navigation';
import { IAddToListAction } from '../actions/list/list.interface';

function* getListSaga(): Generator {
  try {
    // yield put(setLoadingAction({ signIn: true }));

    const { data } = (yield call(get, endpoints.getList()));
    console.log('data', data)
    if (data) {
      
    }
  } catch (e: any) {
    console.log('e', e)
  } finally {
  }
};

function* addToListSaga({ payload } : { payload: IAddToListAction }): Generator {
  try {
    yield put(setLoadingAction({ addToList: true }));

    const { data } = (yield call(post, endpoints.addToList(), { title: payload.title }));
    console.log('data', data)
    if (data) {
      navigationRef?.goBack();

      yield put(setLoadingAction({ addToList: false }));
    }
  } catch (e: any) {
    console.log('e', e)
    yield put(setLoadingAction({ addToList: false }));
  } finally {
  }
};

export default function* listSaga() {
  yield all([
    takeLatest(actions.getListAction, getListSaga),
    takeLatest(actions.addToListAction, addToListSaga)
  ]);
};
