import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import * as actions from 'src/redux/actions';

import { setLoadingAction } from '../actions/loading';
import { get } from 'src/utils/api';
import * as endpoints from 'src/constants/endpoints';
import { navigationRef } from 'src/navigation';

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

export default function* listSaga() {
  yield all([
    takeLatest(actions.getListAction, getListSaga),
  ]);
};
