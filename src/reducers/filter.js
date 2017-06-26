import * as types from '../actions/types';

const initialState = '';

export default function reducer(state = initialState, action) {
    switch (action.type) {
    case types.FILTER:
        return action.filter;
    default:
        return state;
    }
}
