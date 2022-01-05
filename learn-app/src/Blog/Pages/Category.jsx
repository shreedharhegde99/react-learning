import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import productList from "../Lists/List";
import items from "../Lists/ProductList";
import {
  ProductContainer,
  Banner,
  style,
  ProductBanner,
  CartConatiner,
  Add,
} from "./ProductStyles";



class Category extends React.Component{
    

  constructor(props) {
    super(props)
  }
  
  
  
  // console.log(props);
  render(){
  const { category } = this.props.match.params;
  const param = productList.find((item) => {
    return item.name.toLowerCase() === category ? item : null});
  const { id } = param;
  const { list } = items[Number(id)];
    const { url } =this. props.match;
  return (
    <>
      <div style={style}>
        {list?.map((item, i) => {
          return (
            <ProductContainer key={i}>
              <Link to={`${url}/${item.name}`}>
                <Banner>
                  <ProductBanner src={item.image} alt="logo" />
                </Banner>
                {item.name} <br />
              </Link>
              <CartConatiner>
                <div> {`Rs${item.price}/-`}</div>
                <Add >ADD TO Cart</Add>
              </CartConatiner>
            </ProductContainer>
          );
        })}
      </div>
    </>
  );
  } 
};
export default Category;
