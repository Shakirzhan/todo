import API from '../../utils/API';

export const getMainList = (login, password) => {
    const list = API.get('list', { username: login, password });

    return list.then(list => {
        return list
    });
}