// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.react';

const rootNode = document.getElementById('root');
if (rootNode == null) {
  throw new Error('No root element to render App');
}

ReactDOM.render(
  <App />,
  rootNode,
);
