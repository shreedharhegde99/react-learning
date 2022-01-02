import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";

const ProductBox = styled.div`
  height: 150px;
  width: 150px;
  margin: 15px;
  padding: 10px;
  display:flex
  flex-direction:column;
  flex-wrap: wrap;
  border:solid 3px blue;
  border-radius:10px;
  text-align:center;
  background-color:#fcf1bd;

  `;
const ImageBox = styled.div`
  height: 70px;
  width: 80px;
  margin: 20px;
  padding: 10px;
`;

const Image = {
  height: "70px",
  width: "70px",
  borderRadius: "35px",
  border: "solid 1px blue",
  // cursor:"progress",

}

const Products = (props) => {
  const { data, match } = props;
  const { url } = match;

  return (
    <>
      <div style={{textAlign:"center",fontWeight:"bold"}}>All Products</div>
      
      <div style={{ display: "flex",flexWrap: "wrap" }}>
        {data.map((item) => {
          return (
            <ProductBox key={item.id} >
              {" "}
              <Link to={`${url}/${item.id}`}>
                <ImageBox>
                  <img style={Image} src={item.src} alt="logo" />
                </ImageBox>
                {item.name}
              </Link>
              <Route path={`${url}/${item.id}`}  />
            </ProductBox>
          );
        })}
      </div>
    </>
  );
};

export default Products;
