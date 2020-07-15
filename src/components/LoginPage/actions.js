import * as types from './constants';
import * as userService from './services';
import * as alertActions from '../../alert';
import { history } from '../../helpers';

export const login = (login, password) => {
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

export const loginRequest = user => { 
    return { 
        type: types.LOGIN_REQUEST, 
        user 
    } 
}

export const loginSuccess = user => { 
    return { 
        type: types.LOGIN_SUCCESS, 
        user 
    } 
}

export const loginFailure = error => { 
    return { 
        type: types.LOGIN_FAILURE, 
        error 
    } 
}

export const logout = () => {
    userService.logout();
    history.push('/');
    return { type: types.LOGOUT };
}

export const changeLogin = login => {
    return {
      type: types.CHANGE_LOGIN,
      login
    };
  }

export const changePassword = password => {
    return {
      type: types.CHANGE_PASSWORD,
      password
    };
  }