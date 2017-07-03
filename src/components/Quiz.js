// @flow
import React from 'react';
import QuizItem from './QuizItem';
import Results from './Results';

type Props = {
  quiz: Object,
  onSubmitAnswer: Function,
  onIncrementProgress: Function,
  onIncrementScore: Function,
  onQuizComplete: Function,
  onQuizReset: Function,
  quizApp: Object
};

const Quiz = (props: Props) => {
  const {
    getQuestions,
    quizApp: { progress, answerSubmitted, quizCompleted, score }
  } = props.quiz;

  const totalQuestions = getQuestions.length;

  const onQuizProgress = (e: SyntheticEvent): Function | void => {
    e.preventDefault();
    if (props.quiz.quizApp.progress + 1 <= props.quiz.getQuestions.length)
      props.onIncrementProgress();
  };

  const onQuizComplete = (e: SyntheticEvent): Function | void => {
    e.preventDefault();
    props.onQuizComplete();
  };

  const handleSubmit = optionID => {
    // if an answer has not already been submitted
    if (!props.quiz.quizApp.answerSubmitted) {
      // check if the submitted answer is correct
      if (props.quiz.getQuestions[progress].options[optionID].correct) {
        // dispatch incrementScore
        props.onIncrementScore();
      }
      // dispatch submitAnswer
      props.onSubmitAnswer();
    }
  };

  const handleQuizReset = () => {
    props.onQuizReset();
  };

  return (
    <div>
      {quizCompleted
        ? <Results
            totalQuestions={totalQuestions}
            score={score}
            onClick={handleQuizReset}
          />
        : <QuizItem
            onSubmit={handleSubmit}
            answerSubmitted={answerSubmitted}
            progress={progress}
            totalQuestions={totalQuestions}
            question={getQuestions[progress]}
          />}

      {progress + 1 === totalQuestions
        ? <button
            onClick={e => onQuizComplete(e)}
            disabled={!answerSubmitted || quizCompleted}
          >
            Complete
          </button>
        : <button onClick={e => onQuizProgress(e)} disabled={!answerSubmitted}>
            Next
          </button>}
    </div>
  );
};

export default Quiz;
