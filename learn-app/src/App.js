import "./App.css";
import React from "react";
import Home from "./Blog/Pages/Home";
import Entry from "./Blog/Routes/PublicRoute";
import Login from "./Blog/Pages/Login";
import Products from "./Blog/Pages/Products";
function App() {
  return (
    <>
      <Home />
      <div style={{ textAlign: "center", fontSize: "30px" }}>
        Welcome <br /> Construction is under process please wait....
      </div>
      <Login />
      {/* <Products /> */}
    </>
  );
}

export default App;
