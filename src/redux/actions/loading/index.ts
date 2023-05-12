import { createAction } from "redux-act";
import { ISetLoadingAction } from "./loading.interface";

export const setLoadingAction = createAction<ISetLoadingAction>('SET_LOADING_ACTION');
