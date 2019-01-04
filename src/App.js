import React from "react";
import "./App.scss";

import Portal from "./components/Portal.jsx";
import Login, { fakeAuth } from "./components/Login.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

export default function PortalApp() {
  console.log("App render.  Authenticated: " + fakeAuth.isAuthenticated);
  return (
    <Router>
      <Route path="/">
        <div>
          <Switch>
            <Route path="/login" component={Login} exact />
            <PrivateRoute path="/" component={Portal} />
          </Switch>
        </div>
      </Route>

      {/* <div>
        <Route
          path="/login"
          render={props => (
            <ErrorBoundary>
              <Login {...props} />
            </ErrorBoundary>
          )}
        />
        <PrivateRoute path="/portal" component={Portal} />
      </div> */}
    </Router>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
