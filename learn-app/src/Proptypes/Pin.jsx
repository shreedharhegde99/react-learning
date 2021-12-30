import React from "react";
import Proptypes from "prop-types";
import PinItem from "./PinItem";

class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.values = new Array(props.length).fill("");
    this.elements = [];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val, i) {
    this.values[i]=val
  

    if (val.length < 1 && this.elements[i - 1]) {
      this.elements[i - 1].focus();
      
    }
   else if (val.length>0  &&  this.elements[i + 1]) {
      this.elements[i+1].focus()
    }
    this.props?.onChange(this.values.join(""))
    
  }

  


  handlePaste = (e) => {
    e.preventDefault()
    
    const val = e.clipboardData.getData("Text").split("").filter((_, i) => i < this.props.length)

    val.forEach((el, i) => {
      this.handleChange(el,i)
      this.elements[i].input.value=el
    })

  }

  //  123456455 

  render() {
    return (
      <>
        <div onPaste={this.handlePaste}>
          <h3>React Input</h3>
          {/* <div>PIN</div> */}
          {this.values.map((item, i) => {
            return (
              <PinItem
                key={i}
                ref={(n) => (this.elements[i] = n)}
                onChange={val=>this.handleChange(val,i)}
              />
            );
          })}
        </div>
      </>
    );
  }
}

Pin.propTypes = {
  length: Proptypes.number.isRequired,
};
export default Pin;
