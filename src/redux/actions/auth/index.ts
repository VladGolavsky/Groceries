import { createAction } from "redux-act"

import { ISignInAction, ISignUpAction, ISetTokenAction } from "./auth.interface";

export const signInAction = createAction<ISignInAction>('SIGN_IN_ACTION');
export const setTokensAction = createAction<ISetTokenAction>('SET_TOKENS_ACTION');

export const signUpAction = createAction<ISignUpAction>('SIGN_UP_ACTION');