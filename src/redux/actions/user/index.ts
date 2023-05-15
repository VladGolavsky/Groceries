import { createAction } from "redux-act";

import { IUser } from "src/interfaces/user.interface";

export const setUserAction = createAction<IUser>('SET_USER_ACTION');