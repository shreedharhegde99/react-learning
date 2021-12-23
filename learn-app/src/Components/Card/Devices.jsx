import React from "react";

export default function Devices({label}) {
  return (
    <>
      <div>{label[0]}</div>
      <div>-</div>
      <div>{label[1]}</div>
    </>
  );
  
}