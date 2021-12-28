import React from "react";
import styled,{css} from "styled-components";

const Container = styled.div`
  height: 100px;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const Logo = styled.div`
  padding: 15px;
  width: fit-content;
`;

const Links = styled.div`
  margin-left:  100px;
  display:flex;
  flex-direction:row;
  
  
`;


const DIV = styled.div`
margin-top:30px;


${props => props.primary && css`
margin-top:0px;
  margin-left:50px;

`
}
`;

const A = styled.a`
  color: black;
  margin: 0px 0px 0px 30px;
  padding: 10px;
  :hover {
    color: red;
    background: #fff2f2;
    border-radius: 8px;
    cursor: pointer;
  }
`;




const Button = styled.button`
  color: red;
  width: 100px;
  height: 50px;
  background-color: white;
  margin-top: 20px;
  margin-left: 45px;
  border: red solid 1px;
  border-radius: 8px;
  font-weight: 600;
  :hover {
    cursor:pointer;
    background: #f2aeae77;
  }

  ${(props) =>
    props.primary &&
  css`
    border:none;
      margin-left: 0px;
      width: 250px;
      background: #f22828ea;
      color: white;
      :hover {
        background: #d53b3bd2;
      }
    `}
`;

function StyledComponent() {
  return (
    <>
      <Container>
        <Logo>
          <a href="https://www.masaischool.com/">
            <img
              src="https://www.masaischool.com/img/navbar/logo.svg"
              alt="logo"
              width="150px"
            />
          </a>
        </Logo>
        <Links>
          <DIV>
            <A>COURSES</A>
            <A>FEES & ISA</A>
            <A>ABOUT US</A>
            <A>FAQ</A>
          </DIV>
          <DIV primary>
            <Button primary>APPLY NOW FOR FREE</Button>
            <Button>LOGIN</Button>
          </DIV>
        </Links>
      </Container>
      <Logo>
        <a href="https://economictimes.indiatimes.com/tech/startups/tech-skilling-startup-masai-school-acqui[%E2%80%A6]s-firm-prepleaf-for-1-million/articleshow/88404992.cms">
          <img
            src="https://www.masaischool.com/img/homepage/prepleaf-banner.png"
            alt="masaischool"
          />
        </a>
      </Logo>
    </>
  );
}

export default StyledComponent;
