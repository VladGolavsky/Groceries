import { createAction } from "redux-act";
import { SetConfigPayload } from "./config.interface";

export const setConfigAction = createAction<SetConfigPayload>('SET_CONFIG_ACTION');
export const setDefaultConfigAction = createAction('SET_DEFAULT_CONFIG_ACTION');