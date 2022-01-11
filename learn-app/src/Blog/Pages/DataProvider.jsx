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

  handleAddCart(product) {

    const existItem = this.state.cart?.find(item => item.id === product.id) || false
    console.log(existItem);
    
    if (existItem) { 
    // console.log(existItem)
      this.setState({
        ...this.state,
        cart:[...this.state.cart,{...existItem,count:existItem.count+1}]
      })
   }
    else {
      this.setState({
        ...this.state,
        cart:[...this.state.cart,{id:product.id,count:1}]
      })
      
    }

    
    
   
  }
  
  render() {
    const { authorised, cart } = this.state;
    const { handleAuth, handleAddCart } = this;
    const value = { authorised, handleAuth, cart, handleAddCart };
    console.log(cart);
    return <Data.Provider value={value}>{this.props.children}</Data.Provider>;
  }
}
export { DataProvider };
export default Data;
