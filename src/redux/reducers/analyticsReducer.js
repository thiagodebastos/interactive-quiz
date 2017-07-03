import * as types from '../actions/actionTypes';

export function gaTracking(state = {}, action) {
  switch (action.type) {
    case types.GA_CORRECT:
      console.info('correct');
      return state;
    default:
      return state;
  }
}

export default gaTracking;
