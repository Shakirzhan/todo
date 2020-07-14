import * as types from './constants';

const initialState = {
  checkList: [],
  mainList: [
    {
      id: 1,
      name: 'Хлеб'
    },
    {
      id: 2,
      name: 'Молоко'
    },
    {
      id: 3,
      name: 'Спички'
    }
  ]
};

export function checkList(state = initialState, action) {
  switch (action.type) {

    case types.ADD_ITEM:
      const newId = state.mainList.length + 1;
      return {
        ...state,
        mainList: state.mainList.concat({ id: newId, name: action.name })
      }

    case types.DELETE_ITEM:
      return {
        ...state,
        checkList: state.checkList.filter(id => id !== action.id),
        mainList: state.mainList.filter(item => item.id !== action.id)
      }

      case types.DELETE_ITEM_ALL:
        return {
          ...state,
          checkList: state.checkList.filter(item => !state.checkList.includes(item)), 
          mainList: state.mainList.filter(item => !state.checkList.includes(item.id))
        }

      case types.CHECKBOX_ITEM_ADD:
        return {
          ...state,
          checkList: state.checkList.concat(action.id)
        }

      case types.CHECKBOX_ITEM_DELETED:
        return {
          ...state,
          checkList: state.checkList.filter(item => item !== action.id)
        }

    default:
      return state;
  }
}
