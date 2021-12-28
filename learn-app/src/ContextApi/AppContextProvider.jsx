import React from "react";

export const AppContext = React.createContext();

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "context info",
      isAuth:false,
    };
  }



  toggleAuth = () => {
    this.setState({
      isAuth:!this.state.isAuth
    })
  }

  render() {
    const { isAuth } = this.state
    const { toggleAuth } = this
    const value = {isAuth,toggleAuth}
    return (
      <AppContext.Provider value={value} >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;
