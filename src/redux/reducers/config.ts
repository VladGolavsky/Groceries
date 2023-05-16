import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';
import { ConfigReducer, SetConfigPayload } from '../actions/config/config.interface';

const initialState: ConfigReducer = {
  isValidApiUrl: true,
  apiUrl: '',
};

const configReducer = createReducer<ConfigReducer>({
  [actions.setConfigAction]: (state: ConfigReducer, payload: SetConfigPayload) => ({
    ...state,
    ...payload,
  }),
  [actions.setDefaultConfigAction]: () => ({
    ...initialState,
  })
}, initialState);

export default configReducer;
