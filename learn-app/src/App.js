import "./App.css";
import React from "react";
import Pin from "./Proptypes/Pin";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: "",
    };
  }

  render() {
    return (
      <>
        <Pin length={5} onChange={(val) => this.setState({ pin: val })} />

        <div>PIN:{this.state.pin}</div>
      </>
    );
  }
}

export default App;
