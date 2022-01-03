import React from "react";
import styled from "styled-components";
import productList from "../Lists/List";
import Data from "./DataProvider";

const ProductContainer = styled.div`
  height: 150px;
  width: 150px;
  margin: 10px;
  padding: 10px;
  border: solid red 2px;
  font-size: 18px;
  color: green;
  text-align: center;
  align-items: center;
`;
const Banner = styled.div`
  height: 80px;
  width: 80px;
  border: solid black 2px;
  margin: 10px;
  padding: 2px;
  justify-content: center;
`;
const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
};

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div style={style}>
          {productList.map((item, id) => {
            return (
              <ProductContainer key={id}>
                <Banner>
                  <img src="https://via.placeholder.com/60" alt="logo" />
                </Banner>
                {item}
              </ProductContainer>
            );
          })}
        </div>
      </>
    );
  }
}

Products.contextType = Data;

export default Products;
