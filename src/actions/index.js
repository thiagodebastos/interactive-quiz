import * as types from './types';

export function filterTable(filter) {
  return {
    type: types.FILTER,
    filter
  };
}

export function nextQuestion() {
  return {
    type: types.NEXT_QUESTION
  };
}

export function incrementScore() {
  return {
    type: types.INCREMENT_SCORE
  };
}
