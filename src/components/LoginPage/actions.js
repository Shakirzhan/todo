import * as types from './constants';
import { userService } from './services';
import { alertActions } from '../../alert';
import { history } from '../../helpers';

export const userActions = {
    login,
    logout,
    changeLogin,
    changePassword
};

function login(login, password) {
    return dispatch => {
        dispatch(loginRequest({login}));
        userService.login(login, password)
        .then(user => {
            dispatch(loginSuccess(user));
            history.push('/');
        }, error => {
            dispatch(loginFailure(error));
            dispatch(alertActions.error(Object.assign({}, error)));
        });
    };  
}

function loginRequest(user) { 
    return { 
        type: types.LOGIN_REQUEST, 
        user 
    } 
}

function loginSuccess(user) { 
    return { 
        type: types.LOGIN_SUCCESS, 
        user 
    } 
}

function loginFailure(error) { 
    return { 
        type: types.LOGIN_FAILURE, 
        error 
    } 
}

function logout() {
    userService.logout();
    history.push('/');
    return { type: types.LOGOUT };
}

export function changeLogin(login) {
    return {
      type: types.CHANGE_LOGIN,
      login
    };
  }

export function changePassword(password) {
    return {
      type: types.CHANGE_PASSWORD,
      password
    };
  }