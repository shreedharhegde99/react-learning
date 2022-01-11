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
    const { cart } = this.state
    const length = cart.length
    const existItem =
    length>0 && cart?.filter((item) => item.id === product.id?{...item,count:product.count+1}:"") || false
    console.log(existItem);

    if (existItem) {
      console.log("often")
      this.setState({
        cart: [
          ...existItem,
          { id:product.id,count:product.count+1 },
        ],
      });
    } else {
      console.log("first time")
      this.setState({
        cart: [...this.state.cart, { id: product.id, count: 1 }],
      });
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
