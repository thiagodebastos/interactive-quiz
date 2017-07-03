import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import quiz from './quizReducer';
import gaTracking from './analyticsReducer';

const rootReducer = combineReducers({
  gaTracking,
  quiz,
  routing
});

export default rootReducer;
