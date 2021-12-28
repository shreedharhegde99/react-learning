import React from "react";
import { AppContext } from "./AppContextProvider";

function ContainerFunc() {
  return (
    <AppContext.Consumer>
      {(value) => {
        return <div>{value.isAuth ? "Logged In" : "Logged Out"}</div>;
      }}
    </AppContext.Consumer>
  );
}

// Container.contextType = AppContext;

export default ContainerFunc;
