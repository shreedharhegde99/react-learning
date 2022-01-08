import React from "react";
import { increment, decrement } from "./action";
import Connect from "./connect";

function Counter(props) {
  console.log(props)
  return (
    <>
       <h3>Count</h3>
        {/* <div>{props} </div> */}
        {/* <button onClick={}>ADD</button> */}
        {/* <button onClick={}>REDUCE</button> */}

        <hr />
       
        </>
    )
  }


const mapStateToProps = (state) => ({
  counter:state.count
})


const mapDispatchToProps = (dispatch) => ({
  increment: ()=>dispatch(increment(1)),
  decrement: ()=>dispatch(decrement(1))
})

export default Connect(mapStateToProps, mapDispatchToProps)(Counter)
export  { Counter}