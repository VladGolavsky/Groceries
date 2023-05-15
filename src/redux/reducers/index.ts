import { combineReducers } from 'redux';

import auth from './auth';
import loading from './loading';
import errors from './errors';
import user from './user';
import list from './list';

const reducer = combineReducers({
  auth,
  loading,
  errors,
  user,
  list,
});

export default reducer;
