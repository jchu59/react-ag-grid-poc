import React from "react";
import { render } from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import PortalApp from "./App";
import * as serviceWorker from "./serviceWorker";

// setup fake backend
import { configureFakeBackend } from "./helpers";
configureFakeBackend();

render(<PortalApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
