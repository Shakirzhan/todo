import API from '../../utils/API';

export const getMainList = (login, password) => {
    const list = API.get('list');

    return list.then(list => {
        return list
    });
}