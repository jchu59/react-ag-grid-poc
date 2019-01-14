import React from "react";
import "./App.scss";

import LoginPage from "./LoginPage.jsx";
import NavBar from "./components/NavBar.jsx";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

export default function PortalApp() {
  // console.log("App render.  Authenticated: " + fakeAuth.isAuthenticated);
  return (
    <Router>
      <Route path="/">
        <div>
          <Switch>
            <Route path="/login" component={LoginPage} exact />
            <PrivateRoute path="/" component={NavBar} />
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
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
