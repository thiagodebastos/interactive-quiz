// @flow
/* eslint-disable */
import React from 'react';

type Props = {
  progress: number,
  totalQuestions: number,
  answerSubmitted: boolean,
  question: Object,
  options: Array<string>,
  onSubmit: any
};

const QuizItem = (props: Props) => {
  const handleClick = optionID => props.onSubmit(optionID);

  return (
    <div>
      <header>
        Question {props.progress + 1} of {props.totalQuestions}
      </header>
      <div>
        {props.answerSubmitted
          ? <img src="http://placehold.it/400x200&text=revealed" alt="" />
          : <img src="http://placehold.it/400x200&text=masked" alt="" />}
      </div>
      <div>
        {props.question.options.map((option, index) =>
          <button key={index} onClick={() => handleClick(index)}>
            {option.text}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizItem;
