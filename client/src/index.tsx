import * as React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from 'serviceWorker';

import "styles/index.scss";

import App from "./app";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
