// @flow

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

// TODO(averagebeard): Update history flowtype.
export default (history: any) => combineReducers({
  router: connectRouter(history),
});
