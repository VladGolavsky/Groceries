import { createReducer } from 'redux-act';
import { IProduct } from 'src/interfaces/list.interface';
import * as actions from 'src/redux/actions';
import { IRemoveFromListAction, IUpdateProductStatusReduxWithoutAccountAction } from '../actions/list/list.interface';

interface IListReducer {
  list: Array<IProduct>;
};

const initialState = {
  list: [],
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
  [actions.logoutAction]: () => ({
    ...initialState,
  }),
}, initialState);

export default listReducer;
