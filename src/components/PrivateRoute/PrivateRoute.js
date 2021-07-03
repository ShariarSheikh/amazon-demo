import { Redirect, Route } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice/userSlice";

const PrivateRoute = ({ children, ...rest }) => {
  const userAuth = useSelector(selectUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userAuth && userAuth.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
