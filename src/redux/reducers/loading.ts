import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';
import { ILoadingReducer, ISetLoadingAction, LoadingEnum } from 'src/redux/actions/loading/loading.interface';

const initialState: ILoadingReducer = {
  signIn: false,
  signUp: false,
  addToList: false,
  globalApp: false,
};

const loadingReducer = createReducer<ILoadingReducer>({
  [actions.setLoadingAction.getType()]: (state: ILoadingReducer, payload: ISetLoadingAction) => ({
    ...state,
    ...payload,
  }),
  [actions.logoutAction.getType()]: () => ({
    ...initialState,
  }),
}, initialState);

export default loadingReducer;
