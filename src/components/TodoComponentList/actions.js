import * as types from './constants';
import * as userService from './services';

export const addItem = name => {
  return dispatch => {
    userService.addItem(name)
    .then(item => {
        dispatch(addItemSuccess(item));
    });
  };
}

export const addItemSuccess = item => {
  return {
    type: types.ADD_ITEM,
    item: item.data
  };
}

export const addItemCheckbox =  id => {
  return {
    type: types.CHECKBOX_ITEM_ADD,
    id
  };
}

export const deleteItem = id => {
  return {
    type: types.DELETE_ITEM,
    id
  };
}

export const deleteItemCheckbox = id => {
  return {
    type: types.CHECKBOX_ITEM_DELETED,
    id
  };
}

export const deleteItemAll = () => {
  return {
    type: types.DELETE_ITEM_ALL
  };
}

export const fetchMainList = () => {
  return dispatch => {
    userService.getMainList()
    .then(list => {
        dispatch(mainList(list));
    });
  }
}

export const mainList = mainList => { 
  return { 
      type: types.ITEM_FETCHED, 
      mainList: mainList.data
  } 
}

