// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactHamburger } from 'react-hamburger';

import navRoutes from '../../routes/navRoutes';

export const LinkItem = styled(Link)`
  color: white;
  display: block;
  font-size: 18px;
  text-transform: capitalize;
`;

const HamburgerMenu = () => (
  <ReactHamburger
    barColor="orange"
    routes={navRoutes}
    TopContent={<div>Hello</div>}
    locked
    LinkComponent={LinkItem}
  />
);

export default HamburgerMenu;
