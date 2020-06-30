import Immutable from 'seamless-immutable';
import _ from 'lodash';
import * as types from './actionTypes';

const initialState = Immutable({
  exampleName: {}
});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.EXAMPLE:
            return {
                ...state
            };
        default:
            return state;
    }
}

export function getExample(state) {
    return state.appState.pet.name;
}
