// @flow
import React from 'react';

type Props = {
  score: number,
  totalQuestions: number,
  onClick: Function
};

const Results = (props: Props) =>
  <div>
    <h2>
      Score: {props.score} out of {props.totalQuestions}
    </h2>
    <button onClick={props.onClick}>Restart quiz</button>
  </div>;

export default Results;
