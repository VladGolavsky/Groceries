import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';
import { ConfigReducer, SetConfigPayload } from '../actions/config/config.interface';

const initialState: ConfigReducer = {
  isValidApiUrl: true,
  apiUrl: 'https://groceries.up.railway.app',
  deviceId: '',
  isSocketConnected: false,
  isNetConnected: false,
};

const configReducer = createReducer<ConfigReducer>({
  [actions.setConfigAction.getType()]: (state: ConfigReducer, payload: SetConfigPayload) => ({
    ...state,
    ...payload,
  }),
  [actions.setDefaultConfigAction.getType()]: () => ({
    ...initialState,
  }),
  [actions.setShowSettingsModalAction.getType()]: (state: ConfigReducer, showSettingsModal: boolean) => ({
    ...state,
    showSettingsModal,
  }),
  [actions.setDeviceIdAction.getType()]: (state: ConfigReducer, deviceId: string) => ({
    ...state,
    deviceId,
  }),
  [actions.setSocketConnectionStatusAction.getType()]: (state: ConfigReducer, isSocketConnected: boolean) => ({
    ...state,
    isSocketConnected,
  }),
  [actions.setNetConnectionStatusAction.getType()]: (state: ConfigReducer, isNetConnected: boolean) => ({
    ...state,
    isNetConnected,
  }),
}, initialState);

export default configReducer;
