import React from "react";
import ReactDOM from "react-dom";
import Myapp from "./components/Data";

/* import Fetchmydata from "./components/Fetch"; */

import "./index.css";

import App from "../src/App";
import MyComponent from "./components/Fetchthedata";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyComponent />
    <Myapp />

    <div className="logo"></div>
  </React.StrictMode>,
  document.getElementById("root")
);
