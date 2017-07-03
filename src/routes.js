import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import QuizContainer from './containers/QuizContainer';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/quiz" component={QuizContainer} />
  </Switch>
);
