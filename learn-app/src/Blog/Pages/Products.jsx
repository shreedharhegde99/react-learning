import React from "react";
import productList from "../Lists/List";
import Data from "./DataProvider";
import { Link } from "react-router-dom";

import {
  ProductContainer,
  Banner,
  style,
  ProductBanner,
} from "./ProductStyles";
import ProductRoute from "../Routes/ProductRoute";



class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url } = this.props.match
    const{props}  = this
    // console.log(url)
    return (
      <>
        <div style={style}>
          {productList.map((item, id) => {
            const path = item.toLowerCase()
            return (
              
                <ProductContainer key={id}>
                  <Link to={`${url}/${path}`}>
                    <Banner>
                      <ProductBanner
                        src="https://i.imgur.com/eUmK64G.jpg"
                        alt="logo"
                      />
                    </Banner>
                    {item}
                  </Link>
              </ProductContainer >
                              
              
            );
          })}
        </div>
        {/* <ProductRoute {...props}/> */}
      </>
      );
    }
  }
  
Products.contextType = Data;

export default Products;
