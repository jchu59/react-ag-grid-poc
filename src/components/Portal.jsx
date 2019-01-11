import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import Grid from "./Grid.jsx";
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
          <button className="btn btn-primary m-2" onClick={this.onSave}>
            Save
          </button>
          <Link to="/login">
            <button className="btn btn-primary m-2">Logout</button>
          </Link>
        </span>
      </div>
    );
  }
}

export default withRouter(Portal);
