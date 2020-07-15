import * as types from './constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : { login: '', password: '', loading: false};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
        loading: true
      };
    case types.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        loading: false
      };
    case types.CHANGE_LOGIN:
      return {
        ...state,
        login: action.login
      };
    case types.CHANGE_PASSWORD:
        return {
          ...state,
          password: action.password
        };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        login: state.user.login,
        loading: false
      };
    case types.LOGOUT:
      return {};
    default:
      return state
  }
}