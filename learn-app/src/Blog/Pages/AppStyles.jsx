import styled from "styled-components"


/* Home page related styles start Here */


const Header = styled.div`
  // border: solid 2px black;
  height: 80px;
  border-radius: 10px;
  background: #f7f5b5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  color: blue;
  text-align: center;
  font-weight: bold;
  height: 20px;
  width: 100px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;

const Login = styled(Container)`
  color: green;
`;

const Div = styled.div`
  display: flex;
`;



const CartLogo = styled.img`
  height: 35px;
  width: 35px;
  padding: 10px;
  cursor: pointer;
`;

const Logo = styled(CartLogo)`
  height: 70px;
  width: 70px;
  border-radius: 40px;
`;

export { Header, Container, Login, Div, CartLogo, Logo };


/* Home page related styles end Here */
