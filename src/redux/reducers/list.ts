import { createReducer } from 'redux-act';
import { IProduct } from 'src/interfaces/list.interface';
import * as actions from 'src/redux/actions';

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
}, initialState);

export default listReducer;
