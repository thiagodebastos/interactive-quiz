import * as types from '../actions/types';

const initialState = {
  progress: 1,
  score: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.NEXT_QUESTION:
      return Object.assign({}, state, { progress: state.progress + 1 });

    case types.INCREMENT_SCORE:
      return Object.assign({}, state, { score: state.score + 1 });

    default:
      return state;
  }
}
