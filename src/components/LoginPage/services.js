import API from '../../utils/API';

export const userService = {
    login,
    logout
};

function login(login, password) {
    API.post('auth', { username: login, password });
    API.get('random');
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
