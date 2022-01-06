import React from "react";

import { Route, Link } from "./Router";

const arr = [
  { id: 1, name: "pant", price: 100 },
  {
    id: 1,
    name: "shirt",
    price: 1000,
  },

  { id: 1, name: "t-shirt", price: 200 },
];


const Product = (props) => {
  const{id} = props.match.params
  const item = arr.find(item=>item.name===id)
  return (
    <>
      <div>
        {item.name} <br />
        {item.price}
    </div>
    </>
  )
}

const Products = ({ match }) => {
  return (
    <>
      {arr.map((item, id) => {
        return (
          <div key={id}>
            <Link to={`${match.url}/${item.name}`}>
              <div>Name:{item.name}</div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

const CustomRouting = () => {
  
  return (
    <>
      <div >
        <Link to="/"> Home </Link>
        <Link to="/about"> about </Link>
        <Link to="/contact"> contact </Link>
        <Link to="/products"> Products </Link>
      </div>
      <div>
        <Route path="/" exact render={() => <div>home</div>} />
        <Route path="/about" render={() => <div>about</div>} />
        <Route path="/contact" render={() => <div>contact</div>} />
        <Route path="/products"  render={(props) => <Products {...props} />} />
        <Route path="/products/:id" >
        <Product/>
        </Route>
          
      </div>
    </>
  );
};

export default CustomRouting;
