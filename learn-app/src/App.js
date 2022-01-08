import "./App.css";
import React from "react";
// import EventHandling from "./Components/Events/EventHandling";
// import List from "./Components/List/List";
// import ClassExample from "./Components/Classexample";
// import Stateful, { Stateless } from "./Components/State";
// import List from "./Components/List";
// import { Button } from "./Components/Button";
// import { PaymentCard } from "./Components/Card/PaymentCard";
import store from "./Redux/store";
import { reducer } from "./Redux/reducer";
import { add, reduce, increment, decrement } from "./Redux/action";
console.log(store.getState());

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div style={{ textAlign: "center" }} className="App">
        <h4>Count</h4>
        <div>{store.getState()}</div>
        <button onClick={() => store.dispatch(increment(1))}>ADD</button>
        <button onClick={() => store.dispatch(decrement(1))}>REDUCE</button>
      </div>
    );
  }
}

export default App;
