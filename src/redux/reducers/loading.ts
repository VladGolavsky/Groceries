import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';

const initialState = {
  
};

const authReducer = createReducer({
  [actions.setLoadingAction]: (state, { type, value }) => ({
    ...state,
    [type]: value 
  }),
}, initialState);

export default authReducer;
