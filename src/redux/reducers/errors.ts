import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';
import { ISetErrorAction, IErrorReducer } from '../actions/errors/errors.interface';

const initialState: IErrorReducer = {
  signIn: '',
  signUp: '',
};

const errorsReducer = createReducer<IErrorReducer>({
  [actions.setErrorAction.getType()]: (state: IErrorReducer, payload: ISetErrorAction) => ({
    ...state,
    ...payload,
  }),
  [actions.logoutAction.getType()]: () => ({
    ...initialState,
  }),
}, initialState);

export default errorsReducer;
