import * as types from './constants';
//import omit from 'lodash/omit';
import assign from 'lodash/assign';
import mapValues from 'lodash/mapValues';

const initialState = {
  friends: [],
  friendsById: [
    {
      id: 1,
      name: 'Theodore Roosevelt'
    },
    {
      id: 2,
      name: 'Abraham Lincoln'
    },
    {
      id: 3,
      name: 'George Washington'
    }
  ]
};

export function friends(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const newId = state.friendsById.length + 1;
      console.log('newId', newId);
      return {
        ...state,
        friendsById: state.friendsById.concat({ id: newId, name: action.name })
      }

    case types.DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
        friendsById: state.friendsById.filter(friend => friend.id !== action.id)
      }

      case types.DELETE_FRIEND_ALL:
        return {
          ...state,
          friendsById: state.friendsById.filter(friend => !state.friends.includes(friend.id))
        }

      case types.CHECKBOX_FRIEND_ADD:
        return {
          ...state,
          friends: state.friends.concat(action.id)
        }

      case types.CHECKBOX_FRIEND_DELETED:
        return {
          ...state,
          friends: state.friends.filter(friend => friend !== action.id)
        }

    default:
      return state;
  }
}
