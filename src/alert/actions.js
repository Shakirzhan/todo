import * as types from './constants';

export const success = message => {
    return { type: types.SUCCESS, message };
}

export const error = message => {
    return { type: types.ERROR, message };
}

export const clear =() => {
    return { type: types.CLEAR };
}