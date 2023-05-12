import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';

interface IAuthReducer {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState = {
  accessToken: null,
  refreshToken: null,
};

const authReducer = createReducer<IAuthReducer>({
  [actions.setTokensAction]: (state, payload) => ({
    ...payload,
  }),
}, initialState);

export default authReducer;
