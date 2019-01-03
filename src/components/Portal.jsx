import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Grid from "./Grid.jsx";
import { fakeAuth } from "./Login.jsx";
class Portal extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  onSave = () => {
    this.child.current.save();
  };

  onLogout = () => {
    const { history } = this.props;
    console.log("onLogout");
    fakeAuth.signout();
    history.push("/login");
  };

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: "500px",
          width: "600px"
        }}
      >
        <Grid ref={this.child} />

        <span className="badge bagde-primary m-2">
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={this.onSave}
          >
            Save
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={this.onLogout}
          >
            Logout
          </button>
        </span>
      </div>
    );
  }
}

export default withRouter(Portal);
