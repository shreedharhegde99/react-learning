import React from "react";
import Data from "./DataProvider";
import {Image} from "./HomeStyle"


/* component starts here */
class Home extends React.Component {

  constructor(props) {
  super(props)
  }
  
  render() {
    return (
      <>
        <img
          style={Image}
          src="https://i.imgur.com/dHEqZEd.png"
          alt="add to cart"
        />
      </>
    );
  }

}
 

export default Home;
