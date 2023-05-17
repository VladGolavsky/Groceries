import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';
import { ConfigReducer, SetConfigPayload } from '../actions/config/config.interface';

const initialState: ConfigReducer = {
  isValidApiUrl: true,
  apiUrl: 'https://2040-212-180-229-1.ngrok-free.app',
  showSettingsModal: false,
  deviceId: '',
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
}, initialState);

export default configReducer;
