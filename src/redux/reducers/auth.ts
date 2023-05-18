import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';
import { ISetTokenAction } from '../actions/auth/auth.interface';

interface IAuthReducer {
  accessToken: string | null;
  refreshToken: string | null;
  usingWithoutAccount: boolean;
}

const initialState: IAuthReducer = {
  accessToken: null,
  refreshToken: null,
  usingWithoutAccount: false,
};

const authReducer = createReducer<IAuthReducer>({
  [actions.setTokensAction]: (state: IAuthReducer, payload: ISetTokenAction) => ({
    ...state,
    usingWithoutAccount: false,
    ...payload,
  }),
  [actions.setUsingWithoutAccountAction]: (state: IAuthReducer, usingWithoutAccount: boolean) => ({
    ...initialState,
    usingWithoutAccount,
  }),
  [actions.logoutAction]: () => ({
    ...initialState,
  }),
}, initialState);

export default authReducer;
