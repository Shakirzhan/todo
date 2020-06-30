import * as types from './actionTypes';

export function debounce(func, delay = 1000) {
  let timeout = null;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    const args1 = args;
    timeout = setTimeout(() => {
      func(...args1);
    }, delay);
  };
};

export function setName(name) {
    return {
      type: types.INFO_PET_NAME,
      name
    };
  }
export function setDate(date) {
    return {
        type: types.INFO_PET_DATE,
        date
    };
}
