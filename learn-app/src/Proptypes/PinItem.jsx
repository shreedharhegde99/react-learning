import React from "react";
// import Pin from "./Pin";

const style = {
  padding: 10,
  width: 14,
  fontSize: 14,
  margin: 5,
  border: "solid green 2px",
};

class PinItem extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.input.focus();
  }
  onChange(event) {
    // console.log(event.keyCode)
    this.props.onChange(event.target.value);
  }

  // handleKeydown = (e)=>console.log(e.keyCode)



  render() {
    return (
      <input
        style={style}
        ref={(n) => (this.input = n)}
        maxLength={1}
        onChange={this.onChange.bind(this)}
      />
    );
  }
}

export default PinItem;
