import React from "react";
import { connect } from "react-redux";
import { todo, toggle, remove } from "./action ";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  addTodo() {
    const { value } = this.state;
    const { todo } = this.props;
    if (value) {
      todo(value);
      this.setState({
        value:""
      })
    }
  }

  handleKey(e) {
    if (e.code === "Enter") {
      this.addTodo();
    }
  }

  handleRemove(id) {
    const { remove } = this.props;
    remove(id);
  }

  handleToggle = (id) => {
    const { toggle } = this.props;
    toggle(id);
  };

  componentWillUnmount() {
    localStorage.removeItem("state")
  }

  render() {
    const { todoList, length } = this.props;
    let total = length || 0;
    let completed = todoList?.filter((item) =>
      item ? item.status === true : []
    );
    completed = completed.length || 0;
    const incomplete = total - completed || 0;
    const { value } = this.state;
    return (
      <>
        <input
          value={value}
          onChange={(e) => this.setState({ value: e.target.value })}
          onKeyUp={(e) => this.handleKey(e)}
        />
        <button onClick={this.addTodo}>ADD TODO</button>
        <ul>
          {todoList &&
            todoList?.map((item) => {
              return (
                item && (
                  <li key={item.id}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "10px",
                        width: "300px",
                      }}
                    >
                      <div>{item.title}</div>
                      <div
                        style={
                          item.status ? { color: "green" } : { color: "red" }
                        }
                      >
                        {item.status ? "Complete" : "Incomplete"}
                      </div>
                      <div>
                        <button onClick={() => this.handleToggle(item.id)}>
                          Toggle
                        </button>
                        <button onClick={() => this.handleRemove(item.id)}>
                          Delete
                        </button>
                        <br />
                      </div>
                    </div>
                  </li>
                )
              );
            })}
        </ul>
        <div
          style={{
            width: "300px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div style={{ textAlign: "left" }}>Total:{total || 0}</div>
          <div style={{ textAlign: "left" }}>Completed:{completed || 0}</div>
          <div style={{ textAlign: "left" }}>Incomplete:{incomplete || 0}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.reducer.todo,
  length: state.reducer.todo.length,
});

const mapDispatchToProps = (dispatch) => ({
  todo: (payload) => dispatch(todo(payload)),
  toggle: (id) => dispatch(toggle(id)),
  remove: (id) => dispatch(remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
// export {Todo};
