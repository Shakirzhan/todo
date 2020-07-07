import { constants } from './constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { login: '', password: '' };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case constants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case constants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case constants.CHANGE_LOGIN:
      return {
        ...state,
        login: action.login
      };
    case constants.CHANGE_PASSWORD:
        return {
          ...state,
          password: action.password
        };
    case constants.LOGIN_FAILURE:
      return {};
    case constants.LOGOUT:
      return {};
    default:
      return state
  }
}