import React from "react";
import { createStore } from "redux";
import { reducer } from "./reducer";
const initial = 0;

const store = createStore(reducer);

export default store;
