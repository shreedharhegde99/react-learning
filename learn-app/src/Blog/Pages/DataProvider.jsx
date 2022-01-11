import React from "react";

const Data = React.createContext();

class DataProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorised: false,
      cart: [],
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAuth(val) {
    this.setState({ authorised: val });
  }

  handleAddCart(products) {
    
    
   
  }
  
  render() {
    const { authorised, cart } = this.state;
    const { handleAuth, handleAddCart } = this;
    const value = { authorised, handleAuth, cart, handleAddCart };
    // const { } = this
    // const value={}
    console.log(cart);
    // console.log(this.state)
    return <Data.Provider value={value}>{this.props.children}</Data.Provider>;
  }
}
export { DataProvider };
export default Data;
