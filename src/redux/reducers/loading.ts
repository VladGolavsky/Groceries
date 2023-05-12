import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';
import { ILoadingReducer, ISetLoadingAction, LoadingEnum } from 'src/redux/actions/loading/loading.interface';

const initialState: ILoadingReducer = {
  signIn: false,
  signUp: false,
};

const loadingReducer = createReducer<ILoadingReducer>({
  [actions.setLoadingAction]: (state: ILoadingReducer, payload: ISetLoadingAction) => ({
    ...state,
    ...payload,
  }),
}, initialState);

export default loadingReducer;
