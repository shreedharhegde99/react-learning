import React from "react";
import { applyMiddleware, createStore, compose } from "redux";
import { reducer } from "./reducer";

import thunk from "redux-thunk";

// const thunk = (store) => (next) => (action) => {
//   typeof action === "function" ? action(store.dispatch) : next(action);
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
