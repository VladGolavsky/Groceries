import { combineReducers } from 'redux';

import auth from './auth';
import loading from './loading';
import errors from './errors';
import user from './user';

const reducer = combineReducers({
  auth,
  loading,
  errors,
  user,
});

export default reducer;
