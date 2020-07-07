import { combineReducers } from 'redux';

import { authentication } from '../components/LoginPage/reducer'

const rootReducer = combineReducers({
  authentication
});

export default rootReducer;