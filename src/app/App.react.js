// @flow

import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Routes from './routes/Routes.react';

import configureStore, { history } from '../store';
import theme from './styles/theme';
import { GlobalStyle } from './styles/globalStyle';

const {
  store,
  persistor,
} = configureStore();

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <ConnectedRouter history={history}>
          <React.Fragment>
            <GlobalStyle />
            <Routes />
          </React.Fragment>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
);

export default App;
