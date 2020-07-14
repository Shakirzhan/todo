import { combineReducers } from 'redux';

import { authentication } from '../components/LoginPage/reducer'
import { alert } from '../alert';
import { checkList } from '../components/TodoComponentList/reducer'

const rootReducer = combineReducers({
  authentication,
  alert,
  checkList
});

export default rootReducer;