import React, { Component } from "react";
import { Link } from "react-router-dom";
import productList from "../Lists/List";
import items from "../Lists/ProductList";
import {
  ProductContainer,
  Banner,
  style,
  ProductBanner,
} from "./ProductStyles";

const Category = (props) => {
  const { category } = props.match.params;
  const param = productList.find((item) => {
    return item.name.toLowerCase() === category ? item : null;
  });
  const { id } = param;
  const { list } = items[Number(id)];
    const { url } = props.match;


  // console.log(url);
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
                {`Rs${item.price}/-`}
            </ProductContainer>
          );
        })}
      </div>
    </>
  );
};
export default Category;
