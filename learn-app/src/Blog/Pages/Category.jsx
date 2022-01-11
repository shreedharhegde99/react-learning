import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import productList from "../Lists/List";
import items from "../Lists/ProductList";
import Data from "./DataProvider"
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
  

  handleAdd = (item) => {
    // console.log(item)
    // console.log(this.context)
    const { handleAddCart } = this.context
    handleAddCart(item)

    
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
                <Add onClick={()=>this.handleAdd(item)}>ADD TO Cart</Add>
              </CartConatiner>
            </ProductContainer>
          );
        })}
      </div>
    </>
  );
  } 
};
Category.contextType= Data
export default Category;
