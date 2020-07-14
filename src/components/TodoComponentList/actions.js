import * as types from './constants';

export function addFriend(name) {
  return {
    type: types.ADD_FRIEND,
    name
  };
}

export function addFriendCheckbox(id) {
  return {
    type: types.CHECKBOX_FRIEND_ADD,
    id
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function deleteFriendCheckbox(id) {
  return {
    type: types.CHECKBOX_FRIEND_DELETED,
    id
  };
}

export function deleteFriendAll(ids) {
  return {
    type: types.DELETE_FRIEND_ALL,
    ids
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}
