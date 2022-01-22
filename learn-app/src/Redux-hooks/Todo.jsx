import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Add } from "./action";

function Todo(props) {
  const[value,setValue] = useState('')
  
const dispatch = useDispatch()
// console.log(dispatch)
const todo= useSelector(state=>state.todo)
console.log(todo)



  return (
    <>
      <div>
        <input type="text" value={value} onChange={e=>setValue(e.target.value)} />
        <button onClick={()=>dispatch(Add(value))}>ADD</button>
      </div>
      

  </>
)

}

export  default Todo