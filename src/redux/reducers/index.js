import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import quiz from './quizReducer';

const rootReducer = combineReducers({
  quiz,
  routing
});

export default rootReducer;
