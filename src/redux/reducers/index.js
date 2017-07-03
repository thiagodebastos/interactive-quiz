import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import quiz from './quizReducer';
import analyticsReducer from './analyticsReducer';

const rootReducer = combineReducers({
  analyticsReducer,
  quiz,
  routing
});

export default rootReducer;
