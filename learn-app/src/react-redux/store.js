import { createStore } from "redux";
import { reducer, initState } from "./reducer";
import { saveData } from "../localStorage/localStorage";

const store = createStore(reducer, initState);
store.subscribe(() => saveData("state", store.getState()));

// window.onload = () => saveData("state", store.getState());

export default store;
