import React from "react";

class ItemList extends React.Component{
 


  shouldComponentUpdate(nextprops) {
    if (nextprops.status !== this. props.status) {
    return  true
    }
    else  return  false
}




  render() {
    const { task, id, status ,handleToggle} = this.props
    // console.log(task)
    return (
      <>
        <div  style={{display:"flex"}}>
          <div>{task}</div>
          <div>{status ? "Done" : "Not Done"}</div>
          <div>
            <button onClick={() =>console.log(id)}>Toggle</button>
          </div>
        </div>
      </>
    );
  }
}

export default  ItemList