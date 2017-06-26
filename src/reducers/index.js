import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import filter from './filter';
import quiz from './quiz';

const rootReducer = combineReducers({
  quiz,
  filter,
  routing
});

export default rootReducer;
