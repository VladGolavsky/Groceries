import { createReducer } from 'redux-act';
import * as actions from 'src/redux/actions';
import { ISetErrorAction, IErrorReducer } from '../actions/errors/errors.interface';

const initialState: IErrorReducer = {
  signIn: '',
  signUp: '',
};

const errorsReducer = createReducer<IErrorReducer>({
  [actions.setErrorAction]: (state: IErrorReducer, payload: ISetErrorAction) => ({
    ...state,
    ...payload,
  }),
}, initialState);

export default errorsReducer;
