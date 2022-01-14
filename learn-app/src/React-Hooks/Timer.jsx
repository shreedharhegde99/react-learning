import React, { useEffect, useState } from "react";


function Timer() {
  const[time,setTime] = useState(new Date())

  useEffect(() => {
  const timer=   setInterval(() => {
    setTime(new Date())
    // console.log(time)
  }, 1000)
    return () => clearInterval(timer)
  }, [])
  

  // we can use multiple useEffect 

//   useEffect(() => {
//     console.log(time)
    
//     return  ()=>clearImmediate
// },[time])

  return (<>
      <div>Time is {time.toLocaleString()}</div>  
  
  </>)
}



export default  Timer