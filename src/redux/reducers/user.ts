import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';
import { IUser } from 'src/interfaces/user.interface';

const initialState = {
  deviceId: [],
  email: '',
  userName: '',
  firstName: '',
  lastName: '',
  gender: '',
  address: {
    country: '',
    city: '',
    address1: '',
    address2: '',
    postalCode: '',
  },
  roles: [],
  phone: '',
};

const userReducer = createReducer<IUser>({
  [actions.setUserAction]: (state: IUser, payload: IUser) => ({
    ...state,
    ...payload,
  }),
  [actions.logoutAction]: () => ({
    ...initialState,
  }),
}, initialState);

export default userReducer;
