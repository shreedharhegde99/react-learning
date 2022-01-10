import React from "react";
import { increment, decrement } from "./action ";
import {connect} from "react-redux";

function Counter(props) {
  const{counter,increment,decrement} =props
  return (
    <>
      <h3>Count</h3>
      <div>{counter} </div>
      <button onClick={()=>increment()}>ADD</button>
      <button onClick={()=>decrement()}>REDUCE</button>

      <hr />
    </>
  );
}

const mapStateToProps = (state) => ({
  counter: state.reducer.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment(1)),
  decrement: () => dispatch(decrement(1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
