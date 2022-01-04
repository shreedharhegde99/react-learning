import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Products from "../Pages/Products";
import Cart from "../Pages/Cart"
import Error from "../Pages/Error";
import Accessories from "../Pages/Accessories";

const PublicRoute = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact render={(props) => <Home />} />
        <Route
          path="/products"
          
          render={(props) => <Products {...props} />}
        />
        <Route
          path="products/accessories"
          render={(props)=><Accessories {...props}/>}
        />
        <Route path="/login" render={(props) => <Login />} />
        <Route path="/cart" render={(props) => <Cart {...props} />} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
};

export default PublicRoute;
