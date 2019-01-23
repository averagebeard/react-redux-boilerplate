// @flow

import * as React from 'react';

import {
  Bar,
  Container,
  LinkContainer,
  LinkItem,
  Logo,
  LogoContainer,
  TopBar,
} from './styles';

import routes from '../../routes/navRoutes';

type Props = {};

type State = {
  open: boolean,
};

class HamburgerMenu extends React.Component<Props, State> {
  state = {
    open: false,
  }

  toggleLinks = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  renderLinks = routes.map<{}>(route => (
    <LinkItem
      key={route.title}
      onClick={this.toggleLinks}
      to={route.path}
    >
      {route.title}
    </LinkItem>
  ))

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <TopBar>
          <Container onClick={this.toggleLinks}>
            <Bar />
            <Bar />
            <Bar />
          </Container>
          <LogoContainer>
            <Logo src={null} />
          </LogoContainer>
        </TopBar>
        <LinkContainer open={open}>
          {this.renderLinks}
        </LinkContainer>
      </React.Fragment>
    );
  }
}

export default HamburgerMenu;
