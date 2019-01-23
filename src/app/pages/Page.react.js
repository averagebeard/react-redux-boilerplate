// @flow

import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: antiquewhite;
  height: 300px;
  width: 100%;
`;

type Props = {
  location: {
    pathname: string,
  },
};

const Page = (props: Props) => {
  const { location } = props;

  return (
    <Container>
      <h1>{location.pathname}</h1>
    </Container>
  );
};

export default Page;
