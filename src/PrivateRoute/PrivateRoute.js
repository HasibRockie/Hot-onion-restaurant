import UseAuth from "./../Context/UseAuth";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const { user } = UseAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
