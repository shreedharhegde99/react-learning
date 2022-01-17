import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppProvider from "./React-Hooks/Context";

const root = document.getElementById("root");

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  root
);
