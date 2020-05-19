import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Sidebar from "./components/Sidebar";
import Fetchmydata from "./components/Fetch";

import * as serviceWorker from "./serviceWorker";
import Myapp from "./components/Data";

const items = [
  { name: "home", label: "Home" },
  { name: "sales", label: "Sales" },
  { name: "orders", label: "Orders" },
  { name: "billing", label: "Billing" },
  { name: "settings", label: "Settings" },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*   <Sidebar items={items} /> */}
    <Fetchmydata />
    {/*   <Myapp /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
