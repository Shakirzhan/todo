import { combineReducers } from 'redux';

import { authentication } from '../components/LoginPage/reducer'
import { alert } from '../alert';

const rootReducer = combineReducers({
  authentication,
  alert
});

export default rootReducer;