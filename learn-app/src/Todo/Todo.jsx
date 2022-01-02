import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      input:e.target.value
    })
  }

  handleSubmit = (e) => {
    const { handleSubmit } = this.props;
    const { input } = this.state
    
    handleSubmit(e,input)
    
  }

 
  render() {
    console.log("once more")
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleChange}/>
          <input type="submit" value="ADD" />
          <hr />
        </form>
      </>
    );
  }
}

export default Todo;
