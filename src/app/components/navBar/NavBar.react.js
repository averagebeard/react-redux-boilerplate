// @flow

import * as React from 'react';

import {
  LinkContainer,
  LinkItem,
  Logo,
  TopBar,
} from './styles';

import routes from '../../routes/navRoutes';

const NavBar = () => {
  const renderLinks = routes.map(route => (
    <LinkItem
      key={route.title}
      to={route.path}
    >
      {route.title}
    </LinkItem>
  ));

  return (
    <TopBar>
      <Logo src={null} />
      <LinkContainer>
        {renderLinks}
      </LinkContainer>
    </TopBar>
  );
};

export default NavBar;
