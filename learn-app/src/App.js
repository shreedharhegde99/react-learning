import "./App.css";

import { increment, decrement, todo, toggle } from "./React-redux/action";
import store from "./React-redux/store";
import React from "react";
import { Counter } from "./React-redux/Counter";
import Todo from "./React-redux/Todo";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}


 

export default App;
