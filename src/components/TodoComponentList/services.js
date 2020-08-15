import API from '../../utils/API';

export const getMainList = () => {
    //API.defaults.headers.common['Authorization'] = "Bearer aqY6dWXR3iw1IBDioVcd8NSt7pWwjdqa";

    const list = API.get('list');

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