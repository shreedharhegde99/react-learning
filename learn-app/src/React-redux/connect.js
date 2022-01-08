import React from "react";
import { ReduxContext } from "./reduxProvider";

function Connect(mapStateToProps, mapDispatchToProps) {
  return function (WrapperComponent) {
    return class extends React.Component {
      render() {
        return (
          <ReduxContext.Consumer>
            {({ store }) => (
              <WrapperComponent
                {...mapStateToProps(store.getState())}
                {...mapDispatchToProps(store.dispatch)}
              />
            )}
          </ReduxContext.Consumer>
        );
      }
    };
  };
}

export default Connect;
