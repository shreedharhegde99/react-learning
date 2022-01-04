import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";
import Error from "../Pages/Error";
import Category from "../Pages/Category";
import productList from "../Lists/List";
import items from "../Lists/ProductList";
import Product from "../Pages/Product";

const PublicRoute = () => {
  return (
    <Fragment>
      <Switch>
        <Route
          path="/products"
          exact
          render={(props) => <Products {...props} />}
        />
        <Route
          exact
          path="/products/:category"
          render={(props) => <Category {...props} product={productList} />}
        />
        <Route
          path="/products/:category/:product"
          render={(props) => <Product {...props} product={items} />}
        />

        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/cart" render={(props) => <Cart {...props} />} />
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
};

export default PublicRoute;
