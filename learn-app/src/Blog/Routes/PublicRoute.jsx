import React from "react";
import { Link, Route } from "react-router-dom"
import Home from "../Pages/Home";


function Entry() {
  return (
    <>
      <Link to="/">{Home}</Link>
    </>
  );
}

export default  Entry