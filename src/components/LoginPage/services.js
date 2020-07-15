import API from '../../utils/API';

export const login = (login, password) => {
    const user = API.post('auth', { username: login, password });

    return user.then(user => {
        localStorage.setItem('user', JSON.stringify(user.data));
        return user
    });
}

export const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
