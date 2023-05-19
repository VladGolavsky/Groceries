import { combineReducers } from 'redux';

import auth from './auth';
import loading from './loading';
import errors from './errors';
import user from './user';
import list from './list';
import config from './config';
import configModal from './config.modal';

const reducer = combineReducers({
  auth,
  loading,
  errors,
  user,
  list,
  config,
  configModal
});

export default reducer;
