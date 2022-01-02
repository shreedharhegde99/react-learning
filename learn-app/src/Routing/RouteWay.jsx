import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";
import Product from "./Product";
import Data from "./Data";

const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 80px;
  // background-color: coral;
  padding: 20px;
  div {
    margin-top: 20px;
  }
`;

const RouteWay = () => {
  return (
    <>
      <Container>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <Link to="/products">Products</Link>
        </div>
      </Container>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route
        path="/products"
        render={(props) => <Products {...props} data={Data} />}
      />
      <Route
        path="/products/:id"
        render={(props) => <Product {...props} data={Data} />}
      />
    </>
  );
};

export default RouteWay;
