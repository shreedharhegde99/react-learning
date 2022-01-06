import React from "react";

const Data = React.createContext()

class DataProvider extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      authorised: false,
      cart:[]
      
    }
   this.handleAuth=this.handleAuth.bind(this) 
  }

  handleAuth(val) {
    this.setState({authorised:val})
  }

  render() {
    const { authorised,cart } = this.state
    const { handleAuth } = this
    const value = {authorised,handleAuth,cart}
    // const { } = this
    // const value={}
    return (
      <Data.Provider value={value }>
        {this.props.children}
       </Data.Provider>
    );
  }
}
 
export   {DataProvider}
export  default Data