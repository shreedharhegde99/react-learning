import { addTodo, toggleTodo } from "./action.js";
import { reducer } from "./reducer.js";

class Store {
  constructor(reducer, initState) {
    this.reducer = reducer;
    this.state = initState;
  }

  //retrieve the state
  getState() {
    return this.state;
  }

  // dispatch the action
  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

// initial state
const initState = {
  todo: [],
};

let store = new Store(reducer, initState);

store.dispatch(addTodo("BUY MILK"));
store.dispatch(addTodo("BUY BREAD"));
store.dispatch(addTodo("BUY BISCUIT"));
store.dispatch(toggleTodo("BUY MILK"));

console.log(store.getState());
