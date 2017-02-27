/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import cocapi from './modules/Cocapi/CocapiReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  cocapi
});
