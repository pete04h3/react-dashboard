import React from "react";
import ReactDOM from "react-dom";
import Myapp from "./components/Data";
import Sidebar from "./components/Sidebar";
/* import Fetchmydata from "./components/Fetch"; */

import "./index.css";

import App from "../src/App";

ReactDOM.render(
  <React.StrictMode>
    <App />

    <div className="logo"></div>

    {/*     <Fetchmydata /> */}
    {/*    <Myapp /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
