import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({
  children,
  isAuthenticated,
  redirectTo,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthenticatedRoute;
