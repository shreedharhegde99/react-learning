import React from "react";
import { Route, Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Contact from "./Contact";


const Container = styled.div`
  margin-left: 40px;
`;
const ImageBox = styled.div`
  height: 70px;
  width: 100px;
  padding: 0px 15px 15px 15px;
`;
const Image = {
  height:" 70px",
  width: "70px",
  border:"black solid 1px", 
  borderRadius:"35px",
}
const Main = {
  display:"flex",
}

const About = () => {
  return (
    <>
      <div style={Main}>
        <Container>
          <div>About Me</div>
          <hr />
          <div>Hii This is Shreedhar . Iam currently learning React.js</div>
          <div>
            Languages that I have learned are
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div>
            {" "}
            <Link to="/contact">Contact Me</Link>
          </div>
        </Container>
        <Container primary>
          <ImageBox>
            <img style={Image} src="./logo512.png" alt="logo" />
          </ImageBox>
        </Container>
      </div>
      <Route path="/contact" render={() => <Contact />} />
    </>
  );
};

export default About;
