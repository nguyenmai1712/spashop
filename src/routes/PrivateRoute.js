import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import authenticationService from '../services/authentication';

const PrivateRoute = ({
  component: Component, roles, path, topath, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      // const currentUser = authenticationService.currentUserValue;
      // if (!currentUser) {
      //   return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
      // }

      if (topath !== undefined) {
        return <Redirect to={{ pathname: topath }} />;
      }
      return <Component {...props} />;
    }}
  />
);

PrivateRoute.defaultProps = {
  path: undefined,
  topath: undefined,
  location: undefined,
  component: undefined,
  roles: '',
};

PrivateRoute.propTypes = {
  location: PropTypes.shape({}),
  component: PropTypes.func,
  roles: PropTypes.string,
  path: PropTypes.string,
  topath: PropTypes.string,
};
export default PrivateRoute;