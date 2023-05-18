import { createReducer } from 'redux-act';
import { IProducShort, IProduct } from 'src/interfaces/list.interface';
import * as actions from 'src/redux/actions';
import { IRemoveFromListAction, IUpdateProductStatusReduxWithoutAccountAction } from '../actions/list/list.interface';

interface IListReducer {
  list: Array<IProduct>;
  syncList: Array<IProducShort>;
};

const initialState = {
  list: [],
  syncList: [],
};

const listReducer = createReducer<IListReducer>({
  [actions.setListAction]: (state: IListReducer, list: Array<IProduct>) => ({
    ...state,
    list,
  }),
  [actions.addToListReduxAction]: (state: IListReducer, payload: IProduct) => ({
    ...state,
    list: state?.list?.concat(payload),
  }),
  [actions.removeFromListReduxAction]: (state: IListReducer, payload: IRemoveFromListAction) => ({
    ...state,
    list: state?.list?.filter(item => item._id !== payload._id)
  }),
  [actions.updateProductStatusReduxAction]: (state: IListReducer, payload: IProduct) => ({
    ...state,
    list: state?.list?.map((item) => {
      if (item._id === payload._id) {
        return payload;
      }

      return item;
    })
  }),
  [actions.updateProductStatusReduxWithoutAccountAction]: (state: IListReducer, payload: IUpdateProductStatusReduxWithoutAccountAction) => ({
    ...state,
    list: state?.list?.map((item) => {
      if (item._id === payload._id) {
        return {
          ...item,
          status: payload.status,
        };
      }

      return item;
    }),
  }),
  [actions.updateProductStatusSyncReduxAction]: (state: IListReducer, payload: IProducShort) => {
    let newSyncList: Array<IProducShort> = [];
    if (state.syncList?.find((item) => item._id === payload._id)) {
      newSyncList = state.syncList?.filter((item) => item._id !== payload._id);
    } else {
      newSyncList = newSyncList.concat(payload);
    }

    return {
      ...state,
      syncList: newSyncList,
    }
  },
  [actions.clearSyncAction]: (state: IListReducer) => ({
    ...state,
    syncList: []
  }),
  [actions.logoutAction]: () => ({
    ...initialState,
  }),
}, initialState);

export default listReducer;
