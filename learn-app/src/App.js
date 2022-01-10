import "./App.css";

import React from "react";
import Todo from "./react-redux/Todo";
import Counter from "./react-redux/counter";

class App extends React.Component {
  componentWillUnmount() {
    localStorage.clear();
  }
  render() {
    return (
      <>
        <div className="App">Hello world</div> <br />
        <br />
        <Counter />
        <hr />
        <Todo />
      </>
    );
  }
}



 

export default App;
