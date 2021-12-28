import React from "react";
import { AppContext } from "./AppContextProvider";

class Container extends React.Component {
  render() {
    console.log(this.context);
    const { isAuth, toggleAuth } = this.context;
    return (
      <div>
        <button onClick={toggleAuth}>{isAuth?"Log Out":"Log In"}</button>
      </div>
    );
  }
}

Container.contextType = AppContext;

export default Container;
