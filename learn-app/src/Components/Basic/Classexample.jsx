import React from "react";

export default class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:0,
      value: 0,
      query:0

    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleValueAdd = this.handleValueAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

   handleIncrement() {
    this.setState((currentState) => {
      return {counter: currentState.counter + 1}
    });

    this.setState((currentState)=>{
      return{counter: currentState.counter * 5}
    })
  }
  handleDecrement() {
    this.setState({ counter: this.state.counter- 1 });
  }

  handleValueAdd() {
    let { value, query } = this.state
    query = Number(query)  || 0
    this.setState({
      value:  value+query
    })
  }

  handleChange(e) {
    let { value } = e.target
    this.setState({
      query:(value)
    })
  }

  render() {
    let { counter, query, value } = this.state
    console.log(query)
    return (
      <div>
        <div>Iam a Class Component </div>

        <h1>Counter</h1>
        <div>{this.state.counter}</div>
        <div>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
        <div>
          <h1>Value</h1>
          <p>{value}</p>
          <button onClick={this.handleValueAdd}>Add to value</button>

          <h1>Query</h1>
          <input
            value={query}
            onChange={this.handleChange}
            type="number"
            placeholder="add something"
          />
        </div>
      </div>
    );
  }
}
