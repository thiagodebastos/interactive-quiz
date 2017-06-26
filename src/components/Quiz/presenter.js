// @flow
import React from 'react';

type Props = {
  quiz: Object,
  onQuizProgress: Function
};

const Quiz = (props: Props) => {
  const onSubmit = e => {
    e.preventDefault();
    props.onQuizProgress();
  };
  return (
    <div>
      <pre>
        <code>{JSON.stringify(props.quiz)}</code>
      </pre>
      <button onClick={e => onSubmit(e)}>Next</button>
    </div>
  );
};

export default Quiz;
