// @flow

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { topBar } from '../../styles/navigation';

const linkSpacing = 5;
const outer = 60;

export const Logo = styled.img`
  height: 50%;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const LinkItem = styled(Link)`
  color: white;
  padding-left: ${linkSpacing}px;
  padding-right: ${linkSpacing}px;

  &:last-child {
    padding-right: 0;
  }
`;

export const TopBar = styled.div`
  ${topBar};
  height: ${({ theme }) => theme.navBar.height}px;
  justify-content: space-between;
  padding-left: ${outer}px;
  padding-right: ${({ theme }) => theme.navBar.height}px;
`;
