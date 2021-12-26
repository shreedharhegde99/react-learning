import React from "react";

function Form(props) {
const{handleSubmit,children}  = props
  
  return (
    <>
      <form onSubmit={handleSubmit}>  
        <div>{children}</div>
        <input type="submit" value="Submit"  />
      </form>
    </>
  );
}



export  default Form