import React from "react";

export function Stateless(props) {
  return (
    <div>
      Welcome {props.name} <strong>! </strong>
    </div>
  );
}

// either use React.Component or use {Component} along with React in import statement
export default class Stateful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
      // this.handleClick  = this.handleClick.bind(this)
    //  use this if using normal function
  }

  handleClick =  ()=>{
    this.setState({value:this.state.value+1})
  }
  // setState is asynchronous in nature 
  // setState and update React will re-render the DOM

  render() {
    return (
      <>
        <div>Greeting {this.props.name} !</div>
        <div>Clicked {this.state.value} times</div>
        <button onClick={this.handleClick}>CLick me</button>
        
      </>
    );
  }
}
