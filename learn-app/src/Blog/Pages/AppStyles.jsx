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
  color: #000000d9;
  text-align: center;
  font-weight: bold;
  height: 20px;
  width: 100px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  underline:none;
  :hover {
    background: #b5aeaea6;
    border-radius: 20px;
    color: blue;
  }
`;

const Login = styled(Container)`
width:80px;
  color: green;
  :hover{
    color:green;
  }
`;

const Div = styled.div`
  display: flex;
`;
const CartLength = styled(Div)`
  display: block;
  margin-top: 13px;
  height: 35px;
  width: 35px;
  padding: 10px;
  cursor: pointer;
  background-image: url("https://i.imgur.com/s6godLW.png");
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

export { Header, Container, Login, Div, CartLength, CartLogo, Logo };


/* Home page related styles end Here */
