import { constants } from './constants';
import { userService } from './services';
import { alertActions } from '../../alert';
import { history } from '../../helpers';

export const userActions = {
    login,
    logout,
    getAll,
    changeLogin,
    changePassword
};

function login(login, password) {
    return dispatch => {
        userService.login(login, password)
        .then(user => {
            dispatch(loginSuccess(user));
            history.push('/');
        }, error => {
            dispatch(loginFailure(error));
            dispatch(alertActions.error(Object.assign({}, error)));
        });
    };

    //function request(user) { return { type: constants.LOGIN_REQUEST, user } }
    
}

function loginSuccess(user) { 
    return { 
        type: constants.LOGIN_SUCCESS, 
        user 
    } 
}

function loginFailure(error) { 
    return { 
        type: constants.LOGIN_FAILURE, 
        error 
    } 
}

function logout() {
    userService.logout();
    return { type: constants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: constants.GETALL_REQUEST } }
    function success(users) { return { type: constants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: constants.GETALL_FAILURE, error } }
}

export function changeLogin(login) {
    return {
      type: constants.CHANGE_LOGIN,
      login
    };
  }

export function changePassword(password) {
    return {
      type: constants.CHANGE_PASSWORD,
      password
    };
  }