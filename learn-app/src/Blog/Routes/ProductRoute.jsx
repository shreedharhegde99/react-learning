import React,{Fragment} from "react"
import { Route, Switch } from "react-router-dom";
import Accessories  from "../Pages/Accessories"

const  ProductRoute = () => {
  
  return (
    <>
      { 

        <Route
        path="/products/accessories"
        render={(props) => <Accessories {...props} />}
        />
      }
    </>
  );
};


export default ProductRoute;
