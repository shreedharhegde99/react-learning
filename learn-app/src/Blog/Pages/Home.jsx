import React from "react";
import Data from "./DataProvider";
import styled, { css } from "styled-components";

const Header = styled.div`
  // border: solid 2px black;
  height: 80px;
  border-radius:10px;
  background: #f7f5b5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  color: #24e9ff;
  text-align: center;
  font-weight: bold;
  height: 20px;
  width: 100px;
  padding: 10px;
  margin: 10px;
  cursor:pointer;
`;


const Login = styled(Container)`
  color: green;
`;


const Div = styled.div`
  display: flex;
`;

const Image = {
  height: "250px",
  width: "250px",
};

const CartLogo = styled.img`
  height:35px;
  width:35px;
  padding:10px;
  cursor:pointer;
`

const Logo = styled(CartLogo)`
height:70px;
width:70px;
border-radius:40px;
`


/* component starts here */
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin=this.handleLogin.bind(this)
  }

  handleLogin(e) {
    const { authorised, handleAuth } = this.context;
    if (authorised) {
      handleAuth(false)
    }
  }

  render() {
    const{authorised,handleAuth} = this.context
    return (
      <>
        <Header>
          <Logo src="https://i.imgur.com/Ac3Od4e.png" alt="Logo" />

          <Div>
            <Container>Home</Container>
            <Container>Products</Container>
            <Container>About</Container>
            <Container>Contact Us</Container>
          </Div>
          <Div>
            <Login onClick={this.handleLogin}>{authorised ?"Logout":"Login"}</Login>

            <CartLogo src="https://i.imgur.com/jInY31O.png" alt="cart logo" />
          </Div>
        </Header>

        <img
          style={Image}
          src="https://i.imgur.com/sEGZOik.png"
          alt="add to cart"
        />
      </>
    );
  }
}

Home.contextType = Data;

export default Home;
