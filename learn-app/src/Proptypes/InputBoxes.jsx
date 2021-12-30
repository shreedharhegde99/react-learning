import React from "react";
import PropTypes from "prop-types"


class InputBoxes extends React.Component{
  constructor(props) {
    super(props)
    this.values=new Array(this.props.length).fill("")
    this.elements=[]

  }

  handleChange = (e, i) => {
    this.values[i] = e.target.value
    console.log(this.values)
    this.props.onChange(this.values.join(""))
  }
  
  componentDidMount() {
    console.log(this.elements)
  }



  render() {
    const{label}  = this.props
    return <>
      {this.values.map((item,i) => {
        return <input
          label={item}
          key={i}
          ref={n => this.elements[i] = n}
          onChange={e => this.handleChange(e, i)}
          style={{width:40,padding:10,margin:10}}
        />
      })}
    </>;
  }
}


export default  InputBoxes


