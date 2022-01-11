import "./App.css";
import React from "react";
import {
  Header,
  Container,
  Login,
  Div,
  Cart,
  CartLogo,
  Logo,
} from "./Blog/Pages/AppStyles";
import { Link } from "react-router-dom";
import PublicRoute from "./Blog/Routes/PublicRoute";
import Data from "./Blog/Pages/DataProvider";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    const { authorised, handleAuth } = this.context;
    if (authorised) {
      handleAuth(false);
    }
  }

  render() {
    const { authorised, handleAuth, cart } = this.context;
    const length = cart.length || 0;
    return (
      <>
        <Header>
          <Link to="/">
            <Logo src="https://i.imgur.com/a4eedVo.png" alt="Logo" />
          </Link>
          <Div>
            <Link to="/">
              <Container>Home</Container>
            </Link>
            <Link to="/products">
              <Container>Products</Container>
            </Link>
            <Link to="/about">
              <Container>About</Container>
            </Link>
            <Link to="/contact">
              <Container>Contact Us</Container>
            </Link>
          </Div>

          {/* login & cart component        */}
              <Div>
            <Link to="/login">
              <Login onClick={this.handleLogin}>
                {authorised ? "Logout" : "Login"}
              </Login>
            </Link>
            <Cart>
            </Cart>
            <div style={{marginTop:"5px",marginLeft:"-5px"}}>{length}</div>


          
          </Div>
        </Header>

        <PublicRoute />
      </>
    );
  }
}


// link to cart  include {length}
App.contextType = Data;

export default App;
