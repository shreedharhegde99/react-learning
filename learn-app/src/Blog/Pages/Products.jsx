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



class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { url } = this.props.match
    const{props}  = this
    return (
      <>
        <div style={style}>
          {productList.map((item, id) => {
            const path = item.name.toLowerCase();
            return (
              <ProductContainer key={id}>
                <Link to={`${url}/${path}`}>
                  <Banner>
                    <ProductBanner
                      src={item.image}
                      alt="logo"
                    />
                  </Banner>
                  {item.name}
                </Link>
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
