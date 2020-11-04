import API from '../../utils/API';

let token = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user'));

token = token ? token.slice(0, token.lenght) : null;

export const getMainList = () => {
    const list = API.get('list', {
        params: {
            hash: token
        }
      });

    return list.then(list => {
        return list
    });
}

export const addItem = name => {
    const item = API.post('create-item', { name });

    return item.then(item => {
        return item
    });
}