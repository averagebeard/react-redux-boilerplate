// @flow

import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import Media from 'react-media';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import HamburgerMenu from './components/hamburgerMenu/HamburgerMenu.react';
import NavBar from './components/navBar/NavBar.react';
import Routes from './routes/Routes.react';

import configureStore, { history } from '../store';
import theme from './styles/theme';
import { GlobalStyle } from './styles/globalStyle';

const {
  store,
  persistor,
} = configureStore();

const App = () => {
  const renderNavigation = (
    <Media query={{ maxWidth: 768 }}>
      {matches => (matches
        ? <HamburgerMenu />
        : <NavBar />
      )}
    </Media>
  );

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <ConnectedRouter history={history}>
            <React.Fragment>
              <GlobalStyle />
              {renderNavigation}
              <Routes />
            </React.Fragment>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
