import * as types from './constants';

export function addItem(name) {
  return {
    type: types.ADD_ITEM,
    name
  };
}

export function addItemCheckbox(id) {
  return {
    type: types.CHECKBOX_ITEM_ADD,
    id
  };
}

export function deleteItem(id) {
  return {
    type: types.DELETE_ITEM,
    id
  };
}

export function deleteItemCheckbox(id) {
  return {
    type: types.CHECKBOX_ITEM_DELETED,
    id
  };
}

export function deleteItemAll() {
  return {
    type: types.DELETE_ITEM_ALL
  };
}

