import { createAction } from "redux-act";
import { SetConfigPayload } from "./config.interface";

export const setConfigAction = createAction<SetConfigPayload>('SET_CONFIG_ACTION');
export const setDefaultConfigAction = createAction('SET_DEFAULT_CONFIG_ACTION');

export const setShowSettingsModalAction = createAction<boolean>('SET_SHOW_SWTTINGS_MODAL_ACTION');
export const logoutAction = createAction('LOGOUT_ACTION');
