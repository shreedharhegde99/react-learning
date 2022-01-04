import React from "react"
import Data from "./DataProvider"




class Cart extends React.Component{
  constructor(props) {
    super(props)
    
  }



  render() {
    return (
      <>
      <div>Your cart is empty.</div>
      </>
    )
  }
}
Cart.contextType=Data
export default  Cart