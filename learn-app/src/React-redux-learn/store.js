import { createStore } from "redux";
import { reducer } from "./reducer";

const initState = {
  count: 0,
  todo: [],
};
const store = createStore(reducer, initState);

export default store;
