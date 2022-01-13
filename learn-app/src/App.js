import "./App.css";
import React from "react";

import store from "./Redux/store";
import { reducer } from "./Redux/reducer";
import { add, reduce, increment, decrement } from "./Redux/action";
import GitHubData from "./Component/Github";

function App() {
  return (
    <>
      <div>Hello World</div>
      <GitHubData />
    </>
  );
}
export default App;
