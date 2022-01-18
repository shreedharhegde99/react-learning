import "./App.css";
import React, { useState } from "react";
import HooksExample from "./React-Hooks/Hooks";
import GitHub from "./React-Hooks/Effect";
import Timer from "./React-Hooks/Timer";
import Consumer from "./React-Hooks/ContextConsumer";
import GitHubSearch from "./React-Hooks/GitHubSearchHooks";
import Custom from "./React-Hooks/CustomExp";

import Todo from "./Redux-hooks/Todo";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* <div>Hello world</div>
      <HooksExample />
      <br />
      <hr />
      <GitHub />
      <br />
      <hr />
      {show && <Timer />}
      <button onClick={() => setShow(true)}>SHOW</button>
      <button onClick={() => setShow(false)}>HIDE</button>
      <br />
      <hr />
      <div>
        <Consumer />
      </div>
      <br />
      <GitHubSearch />
      <br />
      <hr />
      <Custom /> */}
      <Todo />
    </>
  );
}

export default App;

