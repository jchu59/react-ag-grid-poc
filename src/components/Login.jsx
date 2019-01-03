import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      console.log("login complete.  setting redirect.");
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    console.log("login render.  redirect: " + this.state.redirectToReferrer);
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;
    return (
      <div>
        <p>You must log in to view the portal.</p>
        <span className="badge bagde-primary m-2">
          <button className="btn btn-secondary btn-sm" onClick={this.login}>
            Log in
          </button>
        </span>
      </div>
    );
  }
}

// Mock Authentication Service
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    console.log("signout");
    //const { history } = this.props;
    this.isAuthenticated = false;
    //history.push("/");
    setTimeout(cb, 100); // fake async
  }
};

//export const FakeAuth = withRouter(fakeAuth);
export default Login;
