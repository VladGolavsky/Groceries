import { createAction } from "redux-act";

export const startListeningAction = createAction<{ deviceId: string }>('START_LISTENING_ACTION');