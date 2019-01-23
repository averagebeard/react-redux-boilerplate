// @flow

import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import routes from './routeConfig';

type Props = {
  Component: Object => React.Node,
  exact?: boolean,
  path: string,
};

class RenderRoute extends React.Component<Props> {
  static defaultProps = {
    exact: false,
  }

  componentDidMount() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }

  render() {
    const {
      Component,
      path,
      exact,
    } = this.props;

    return (
      <Route
        exact={exact}
        path={path}
        render={props => (
          <Component {...props} />
        )}
      />
    );
  }
}

const Routes = () => (
  <Switch>
    {routes.map(route => (
      <RenderRoute
        key={route.title}
        {...route}
      />
    ))}
  </Switch>
);

export default Routes;
