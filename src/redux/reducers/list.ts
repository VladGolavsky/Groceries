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
  [actions.setListAction.getType()]: (state: IListReducer, list: Array<IProduct>) => ({
    ...state,
    list,
  }),
  [actions.addToListReduxAction.getType()]: (state: IListReducer, payload: IProduct) => ({
    ...state,
    list: state?.list?.concat(payload),
  }),
  [actions.removeFromListReduxAction.getType()]: (state: IListReducer, payload: IRemoveFromListAction) => ({
    ...state,
    list: state?.list?.filter(item => item._id !== payload._id)
  }),
  [actions.updateProductStatusReduxAction.getType()]: (state: IListReducer, payload: IProduct) => ({
    ...state,
    list: state?.list?.map((item) => {
      if (item._id === payload._id) {
        return payload;
      }

      return item;
    })
  }),
  [actions.updateProductStatusReduxWithoutAccountAction.getType()]: (state: IListReducer, payload: IUpdateProductStatusReduxWithoutAccountAction) => ({
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
  [actions.updateProductStatusSyncReduxAction.getType()]: (state: IListReducer, payload: IProducShort) => {
    let newSyncList: Array<IProducShort> = state.syncList;
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
  [actions.updateProductStatusReduxAfterSyncAction.getType()]: (state: IListReducer, payload: Array<IProducShort>) => {
    const updateList = state.list.map((item) => {
      const foundItem = payload?.find((payloadItem) => payloadItem._id === item._id);
      if (foundItem) {
        return {
          ...item,
          status: foundItem.status,
        };
      }

      return item;
    });
    return {
      ...state,
      list: updateList,
    };
  },
  [actions.clearSyncAction.getType()]: (state: IListReducer) => ({
    ...state,
    syncList: []
  }),
  [actions.logoutAction.getType()]: () => ({
    ...initialState,
  }),
}, initialState);

export default listReducer;
