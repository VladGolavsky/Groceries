import { createAction } from "redux-act";
import { LoadingEnum } from "./loading.interface";

export const setLoadingAction = createAction<{ [P in keyof LoadingEnum]: boolean }>('SET_LOADING_ACTION');
