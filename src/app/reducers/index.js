// @flow

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// TODO(averagebeard): Update history flowtype.
export default (history: any) => combineReducers({
  form: formReducer,
  router: connectRouter(history),
});
