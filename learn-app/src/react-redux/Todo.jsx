import React from "react";
import {connect}  from "react-redux"

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    console.log(this.props)
    const{value}  =this.state
    const todo =[]
    return (
      <React.Fragment>
        <input
          value={value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button onClick={this.addTodo}>ADD TODO</button>
        <ul>
          {todo &&
            todo?.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div>
                    <li>{item.title}</li>
                  </div>
                  <div
                    style={item.status ? { color: "green" } : { color: "red" }}
                  >
                    {item.status ? "Complete" : "Incomplete"}
                  </div>
                  <div>
                    <button onClick={() => {}}>Toggle</button>
                  </div>
                </div>
              );
            })}
        </ul>
      </React.Fragment>
    );
  }
}
export default connect()(Todo)
// export {Todo};
