import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import contact from "./ContactData";

const ContactBox = styled.div`
  height: 250px;
  width: 200px;
  margin-left: 100px;
  padding: 15px;
  border: ridge blue 5px;
  border-radius:
  display:flex;
  flex-direction:column;
  flex-wrap:wrap
  font-weight:bold;
  font-size:16px;
  border-radius: 50px;
  background-color: #fcf1bd

  
`;

const Details = styled.div`
margin:5px;
padding:5px;

`
const ImageBox = styled.div`
  height: 100px;
  width: 100px;
  margin: 20px;
  padding: 20px;
`;
const Image = {
  height: "100px",
  width: "100px",
  borderRadius: "50px",
  border: "thick double #32a1ce ",
};

const Contact = () => {
  return (
    <>
      <div style={{display:"flex",marginLeft:"200px"}}>
        {contact.map((item) => {
          return (
            <ContactBox>
              <ImageBox>
                <img style={Image} src={item.avatar} alt="contact" />
              </ImageBox>
              <Details>
              <div>{item.name}</div>
              <div>{item.contact}</div>
              <div>{item.email}</div>
              </Details>
            </ContactBox>
          );
        })}
      </div>
    </>
  );
};

export default Contact;
