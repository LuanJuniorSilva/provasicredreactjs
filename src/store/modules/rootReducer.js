import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import dragon from './dragon/reducer';

export default combineReducers({
  auth,
  user,
  dragon,
});
