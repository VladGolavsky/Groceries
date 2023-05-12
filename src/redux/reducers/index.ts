import { combineReducers } from 'redux';

import auth from './auth';
import loading from './loading';
import errors from './errors';

const reducer = combineReducers({
  auth,
  loading,
  errors,
});

export default reducer;
