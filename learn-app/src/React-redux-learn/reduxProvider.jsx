import React, { createContext } from "react";
// import store from "./store";

const ReduxContext = createContext();

class ReduxProvider extends React.Component {
  
  render() {
    const { store } = this.props
    // console.log(store)
  
    return ( 
      
      <>
        <ReduxContext.Provider value={ {store}}>
          {this.props.children}
        </ReduxContext.Provider>
      </>
    );
  }
}


export {ReduxContext,ReduxProvider}