// @flow
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import questions from './questions.json';

type Option = {
  +id: number,
  +correct: boolean,
  +text: string
};

type Question = {
  +id: number,
  +question: string,
  +options: Array<Option>
};

type QuizApp = {
  +progress: number
};

type Action = {
  +type: string
};

const quizAppState = {
  progress: 0
};

export function getQuestions(state: Array<Question> = questions) {
  return state;
}

export function quizApp(state: QuizApp = quizAppState, action: Action) {
  if (action.type === types.INCREMENT)
    return Object.assign({}, state, { progress: state.progress + 1 });
  return state;
}

export default combineReducers({
  getQuestions,
  quizApp
});
