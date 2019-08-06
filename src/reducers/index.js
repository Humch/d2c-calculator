import { combineReducers } from 'redux';

import firstScreenReducer from './firstScreen';

export default combineReducers({
  firstScreen: firstScreenReducer,
});
