// @flow

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { topBar } from '../../styles/navigation';

const outer = 10;
const burgerBar = 5;
const hamburgerSize = 40;

export const Bar = styled.div`
  background: ${({ theme }) => theme.color.white};
  border-radius: ${burgerBar}px;
  height: ${burgerBar}px;
  width: 100%;
`;

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${hamburgerSize}px;
  justify-content: space-around;
  width: ${hamburgerSize}px;
`;

export const LinkContainer = styled.div`
  background: ${({ theme }) => theme.color.darkBlue};
  height: calc(100vh - ${({ theme }) => theme.hamburger.height}px);
  max-width: 300px;
  padding: ${outer}px;
  position: fixed;
  transform: translateX(${({ open }) => (open ? 0 : -100)}%);
  transition: transform 0.5s ease;
  width: 75%;
  z-index: 99;
`;

export const LinkItem = styled(Link)`
  color: white;
  display: block;
  font-size: 18px;
  padding-top: ${outer}px;
  padding-bottom: ${outer}px;
  text-transform: capitalize;
`;

export const Logo = styled.img`
  height: 75%;
`;

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  margin-right: ${hamburgerSize}px;
`;

export const TopBar = styled.div`
  ${topBar};
  height: ${({ theme }) => theme.hamburger.height}px;
  padding-left: ${outer}px;
  padding-right: ${outer}px;
  position: sticky;
  top: 0;
  z-index: 2;
`;
