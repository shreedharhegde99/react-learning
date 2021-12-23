import React from "react";


const Pagination = ({current,totalPage}) => {
  const arr = new Array(totalPage).fill(0).map((_,i)=>i+1)
  return (
    <div>
      {arr.map((item) => {
        current === item  ?
        <div style ={{backgroundColor:"lightblue"}} key={item}>{item}</div>:
        <div key={item}>{item}</div>;
      })}
      </div>
    )
}


export default  Pagination