import { createAction } from "redux-act";
import { SetConfigPayload } from "./config.interface";

export const setConfigAction = createAction<SetConfigPayload>('SET_CONFIG_ACTION');
export const setDefaultConfigAction = createAction('SET_DEFAULT_CONFIG_ACTION');

export const setShowSettingsModalAction = createAction<boolean>('SET_SHOW_SWTTINGS_MODAL_ACTION');
export const logoutAction = createAction('LOGOUT_ACTION');
export const setDeviceIdAction = createAction<string>("SET_DEVICE_ID_ACTION");
export const setSocketConnectionStatusAction = createAction<boolean>("SET_SOCKET_CONNECTION_STATUS_ACTION");
export const setNetConnectionStatusAction = createAction<boolean>('SET_NET_CONNECTION_STATUS_ACTION');
