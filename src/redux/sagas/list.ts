import {
  all,
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import * as actions from 'src/redux/actions';

import { setLoadingAction } from '../actions/loading';
import { del, get, patch, post } from 'src/utils/api';
import * as endpoints from 'src/constants/endpoints';
import { navigationRef } from 'src/navigation';
import { IAddToListAction, IRemoveFromListAction, IUpdateProductStatusAction } from '../actions/list/list.interface';
import { IProducShort, IProduct } from 'src/interfaces/list.interface';
import { deviceIdSelector } from '../selectors/config';
import { syncListStateSelector } from '../selectors/list';

function* getListSaga(): Generator {
  try {
    // yield put(setLoadingAction({ signIn: true }));

    const { data } = (yield call(get, endpoints.getList())) as { data: Array<IProduct> };
    
    if (data) {
      console.log('dagt', data)
      yield put(actions.setListAction(data));
    }
  } catch (e: any) {
  } finally {
  }
};

function* addToListSaga({ payload } : { payload: IAddToListAction }): Generator {
  try {
    yield put(setLoadingAction({ addToList: true }));
    const excludeId = yield select(deviceIdSelector);

    const { data } = (yield call(post, endpoints.addToList(), { title: payload.title, excludeId })) as { data: IProduct };

    if (data) {
      navigationRef?.goBack();

      yield put(actions.addToListReduxAction(data));

      yield put(setLoadingAction({ addToList: false }));
    }
  } catch (e: any) {
    yield put(setLoadingAction({ addToList: false }));
  } finally {
  }
};

function* removeFromListSaga({ payload } : { payload: IRemoveFromListAction }): Generator {
  try {
    yield put(setLoadingAction({ globalApp: true }));
    const excludeId = (yield select(deviceIdSelector)) as string;

    const { data } = (yield call(del, endpoints.removeFromList(payload._id, excludeId))) as { data: boolean };

    if (data) {
      yield put(actions.removeFromListReduxAction({ ...payload }));

      yield put(setLoadingAction({ globalApp: false }));
    }
  } catch (e: any) {
    console.log('e', e)
      yield put(setLoadingAction({ globalApp: false }));
  } finally {
  }
};

function* updateProductStatusSaga({ payload } : { payload: IUpdateProductStatusAction }): Generator {
  try {
    yield put(setLoadingAction({ globalApp: true }));
    const excludeId = (yield select(deviceIdSelector)) as string;

    const { data } = (yield call(patch, endpoints.updateProductStatus(), { ...payload, excludeId })) as { data: IProduct };

    if (data) {
      yield put(actions.updateProductStatusReduxAction(data));

      yield put(setLoadingAction({ globalApp: false }));
    }
  } catch (e: any) {
    if (payload?.undoChanges) {
      payload.undoChanges();
    }
    yield put(setLoadingAction({ globalApp: false }));
  } finally {
  }
};

function* uploadProductStatusesFromReduxSaga(): Generator {
  try {
    yield put(setLoadingAction({ globalApp: true }));

    const syncList = (yield select(syncListStateSelector)) as Array<IProducShort>;
    const excludeId = (yield select(deviceIdSelector)) as string;

    if (syncList.length) {
      const { data } = (yield call(post, endpoints.updateProductStatusAfterOfflie(), { list: syncList, excludeId })) as { data: Array<IProducShort> };

      if (data?.length) {
        yield put(actions.updateProductStatusReduxAfterSyncAction(data));
        yield put(actions.clearSyncAction());
      }

    } else {
      yield getListSaga();
    }


    yield put(setLoadingAction({ globalApp: false }));
  } catch (e: any) {
    yield put(setLoadingAction({ globalApp: false }));
  } finally {
  }
};

export default function* listSaga() {
  yield all([
    takeLatest(actions.getListAction, getListSaga),
    takeLatest(actions.addToListAction, addToListSaga),
    takeLatest(actions.removeFromListAction, removeFromListSaga),
    takeLatest(actions.updateProductStatusAction, updateProductStatusSaga),
    takeLatest(actions.uploadProductStatusesFromReduxAction, uploadProductStatusesFromReduxSaga),
  ]);
};
