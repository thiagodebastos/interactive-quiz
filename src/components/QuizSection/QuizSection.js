// @flow
/* eslint-disable */
import React from 'react';

type Props = {
  progress: number,
  question: Object,
  options: Array<string>,
  onSubmit: any
};

const QuizSection = (props: Props) => {
  const handleClick = optionID => props.onSubmit(optionID);

  return (
    <div>
      <header>
        Question {props.progress + 1}
      </header>
      <div>
        <img src="http://placehold.it/400x200" alt="" />
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

export default QuizSection;
