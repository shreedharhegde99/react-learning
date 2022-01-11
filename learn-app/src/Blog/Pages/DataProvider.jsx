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
    // console.log(product)

    const { cart } = this.state
    let length = cart.length;
    const { name, price, id } = product
     const payload = {name,price,id,count:1}
    let items = length > 0 && cart?.map(item => {
      if (item.id === payload.id) {
       return {...item,count:item.count+1}
      } 
      else return item
    }) 

    console.log(items)

    if (length < 1) {
      this.setState({
          cart:[payload]
        })
    }
    else {
      this.setState({
        cart:[payload,...items]
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
