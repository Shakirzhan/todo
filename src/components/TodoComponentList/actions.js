import * as types from './constants';

export const addItem = name => {
  return {
    type: types.ADD_ITEM,
    name
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

export const getMainList = () => {
  return { 
    type: types.ITEM_FETCHED 
  };
}

