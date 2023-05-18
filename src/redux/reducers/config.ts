import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';
import { ConfigReducer, SetConfigPayload } from '../actions/config/config.interface';

const initialState: ConfigReducer = {
  isValidApiUrl: true,
  apiUrl: 'https://web-production-baa0.up.railway.app',
  showSettingsModal: false,
  deviceId: '',
  isSocketConnected: false,
};

const configReducer = createReducer<ConfigReducer>({
  [actions.setConfigAction]: (state: ConfigReducer, payload: SetConfigPayload) => ({
    ...state,
    ...payload,
  }),
  [actions.setDefaultConfigAction]: () => ({
    ...initialState,
  }),
  [actions.setShowSettingsModalAction]: (state: ConfigReducer, showSettingsModal: boolean) => ({
    ...state,
    showSettingsModal,
  }),
  [actions.setDeviceIdAction]: (state: ConfigReducer, deviceId: string) => ({
    ...state,
    deviceId,
  }),
  [actions.setSocketConnectionStatusAction]: (state: ConfigReducer, isSocketConnected: boolean) => ({
    ...state,
    isSocketConnected,
  }),
}, initialState);

export default configReducer;
