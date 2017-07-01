// @flow
import React from 'react';
import QuizSection from '../QuizSection';

type Props = {
  quiz: Object,
  onSubmitAnswer: Function
};

const Quiz = (props: Props) => {
  const onQuizProgress = (e: SyntheticEvent): Function | void => {
    e.preventDefault();
    props.onSubmitAnswer();
  };

  const handleSubmit = optionID => {
    props.onSubmitAnswer(optionID);
  };

  const { getQuestions, quizApp: { progress } } = props.quiz;
  return (
    <div>
      <QuizSection
        onSubmit={handleSubmit}
        progress={progress}
        question={getQuestions[progress]}
      />

      <button onClick={e => onQuizProgress(e)} disabled>
        Next
      </button>
    </div>
  );
};

export default Quiz;
