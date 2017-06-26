// @flow

export type Question = {
  text: string,
  id: number
};

export type QuizItem = {
  question: Question,
  options: Array<string>,
  correctOption: number,
  image: string,
  currentQuestion: Question.id,
  complete: boolean
};

declare type QuizActionType = 'NEXT_QUESTION' | 'INCREMENT_SCORE';

declare type QuizActionT<A: QuizActionType, P> = {|
  type: A,
  payload: P
|};

export type QuizAction =
  | QuizActionT<'NEXT_QUESTION', null>
  | QuizActionT<'INCREMENT_SCORE', null>;
