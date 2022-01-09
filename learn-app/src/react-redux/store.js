import { createStore } from "redux";
import { reducer, initState } from "./reducer";

const store = createStore(reducer);

export default store;
