import * as types from './types';

export function submitAnswer(optionID) {
  return {
    type: types.SUBMIT_ANSWER,
    optionID
  };
}
export function submitQuiz() {
  return {
    type: types.SUBMIT_QUIZ
  };
}

export function incrementScore() {
  return {
    type: types.INCREMENT_SCORE
  };
}

export function incrementProgress() {
  return {
    type: types.INCREMENT_PROGRESS
  };
}

export function resetQuiz() {
  return {
    type: types.RESET_QUIZ
  };
}

export function gaCorrect(questionID) {
  return {
    type: types.GA_CORRECT,
    questionID
  };
}

export function gaIncorrect(questionID) {
  return {
    type: types.GA_INCORRECT,
    questionID
  };
}

export function gaNextQuestion(progress) {
  return {
    type: types.GA_NEXT_QUESTION,
    progress
  };
}

export function gaResults(results) {
  return {
    type: types.GA_RESULTS,
    results
  };
}
