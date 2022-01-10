import { createStore, combineReducers } from "redux";
import { reducer, initState } from "./reducer";
import { saveData } from "./localStorage";
import { authReducer } from "./authReducer";

const mainReducer = combineReducers({ authReducer, reducer });
const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => saveData("state", store.getState()));
// console.log(store.getState());

export default store;
