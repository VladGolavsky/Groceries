import { createAction } from "redux-act";
import { ISetErrorAction } from "./errors.interface";

export const setErrorAction = createAction<ISetErrorAction>('SET_ERROR_ACTION');