// @flow

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import createRootReducer from './app/reducers';

export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const enhancers = [];

  const middleware = [
    thunk,
    routerMiddleware(history),
    logger,
  ];

  const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middleware),
    ...enhancers,
  );

  const store = createStore(persistedReducer, composedEnhancers);

  const persistor = persistStore(store);

  // To clear browser state
  // persistor.purge();

  return {
    persistor,
    store,
  };
};

export default configureStore;
