import React, { useState } from 'react';



// function useStateExample(initState) {
//   let state = initState
//   function setState(arg) {
//     state = arg
//     // return  state
//   }

//   return  [state,setState]
// }




// export default   useStateExample



// using first hook useState


function HooksExample() {
  const [count, setCount] = useState(0)
  const set = (param = true) => {
    param && setCount(count + 1)
    !param && setCount(count-1)
  }
  return (
    <>
      <h4>Count</h4>
      <div>{count}</div>
      <button onClick={()=>set()} >ADD</button>
      <button onClick={() => set(false)} >REDUCE</button>
    </>
  );
}

export default  HooksExample