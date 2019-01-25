// @flow

import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: lightblue;
  height: 1000px;
  width: 100%;
`;

const Main = () => (
  <Container>
    <h1>Hello, world</h1>
  </Container>
);

export default Main;
