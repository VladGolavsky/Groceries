import { combineReducers } from 'redux';

import auth from './auth';
import loading from './loading';
import errors from './errors';
import user from './user';
import list from './list';
import config from './config';

const reducer = combineReducers({
  auth,
  loading,
  errors,
  user,
  list,
  config,
});

export default reducer;
