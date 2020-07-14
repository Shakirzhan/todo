import { combineReducers } from 'redux';

import { authentication } from '../components/LoginPage/reducer'
import { alert } from '../alert';
import { friends as friendList } from '../components/TodoComponentList/reducer'

const rootReducer = combineReducers({
  authentication,
  alert,
  friendList
});

export default rootReducer;