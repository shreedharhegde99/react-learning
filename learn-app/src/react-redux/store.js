import { createStore } from "redux";
import { reducer, initState } from "./reducer";

const store = createStore(reducer, initState);

export default store;
