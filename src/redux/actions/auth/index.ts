import { createAction } from "redux-act"

import { ISignInAction } from "./auth.interface";

export const signInAction = createAction<ISignInAction>('SIGN_IN_ACTION');
export const setTokensAction = createAction('SET_TOKENS_ACTION');