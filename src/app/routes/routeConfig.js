// @flow

import * as React from 'react';

import Main from '../pages/Main.react';
import Page from '../pages/Page.react';

export type Route = {
  path: string,
  Component: React.Node,
  exact?: boolean,
  title: string,
};

const routeConfig = [
  {
    path: '/',
    Component: Main,
    exact: true,
    title: 'Home',
  },
  {
    path: '/page',
    Component: Page,
    title: 'Page',
  },
];

export default routeConfig;
