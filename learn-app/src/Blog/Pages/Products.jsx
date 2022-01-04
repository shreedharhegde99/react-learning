import React from "react";
import productList from "../Lists/List";
import Data from "./DataProvider";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Accessories from "./Accessories";

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
            const path = item.name.toLowerCase();
            return (
              <ProductContainer key={id}>
                <Link to={`${url}/${path}`}>
                  <Banner>
                    <ProductBanner
                      src="https://i.imgur.com/eUmK64G.jpg"
                      alt="logo"
                    />
                  </Banner>
                  {item.name}
                </Link>
              </ProductContainer>
            );
          })}
        </div>
        <Route path="/products/accessories" render=
        {(props) => <Accessories {...props} />}
        />
      </>
    );
    }
  }
  
Products.contextType = Data;

export default Products;
