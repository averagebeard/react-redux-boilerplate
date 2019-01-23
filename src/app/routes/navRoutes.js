// @flow

import * as React from 'react';

export type Route = {
  path: string,
  component: React.Node,
  exact?: boolean,
  title: string,
};

const routeConfig = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/page',
    title: 'Page',
  },
];

export default routeConfig;
