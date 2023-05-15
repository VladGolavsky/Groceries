import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';

const initialState = {
};

const listReducer = createReducer({
  [actions.setListAction]: (state, payload) => ({
    ...state,
    ...payload,
  }),
}, initialState);

export default listReducer;
