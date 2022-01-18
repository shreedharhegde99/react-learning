import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import AppProvider from "./React-Hooks/Context";
import { Provider } from "react-redux";
import store from "./Redux-hooks/store";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
