import React from "react";
import { connect } from "react-redux";
import { todo, toggle, remove } from "./action ";
import {input} from "../style/style"

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  addTodo() {
    const { value } = this.state;
    const { todo } = this.props;
    if (value) {
      todo(value);
    }
    else {
      alert("add something")
    }

    this.setState({
      value: "",
    });
  }

  handleEnter(e) {
    e.preventDefault();
    if (e.code == "Enter") {
      this.addTodo();
    } else if (e.code === "NumpadEnter") {
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

  
  render() {
    const { todoList } = this.props;
    let total = todoList?.length || 0;
    let completed = todoList?.filter((item) =>
      item ? item.status === true : []
    );
    completed = completed?.length || 0;
    const incomplete = total - completed || 0;
    const { value } = this.state;
    return (
      <>
        <h3>Simple Todo App</h3>
        <input
          placeholder="add something...."
          value={value}
          onChange={(e) => this.setState({ value: e.target.value })}
          onKeyUp={(e) => this.handleEnter(e)}
          style={ input}
          />
          <button onClick={() => this.addTodo()}>ADD TODO</button>
        <div style={{width:"50%",margin:"2% 10% 0 20%",padding:"2%",justifyContent:"center"}}>
          <ul style={{ listStyle: "square" }}>
            {todoList &&
              todoList?.map((item) => {
                return (
                  item && (
                    <li key={item.id}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                            justifyContent: "space-evenly",
                          margin: "10px",
                          // width: "300px",
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
                          
                        </div>
                      </div>
                      <hr />
                    </li>
                  )
                );
              })}
          </ul>
          <div
            style={{
              // width: "300px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ textAlign: "left" }}>Total:{total || 0}</div>
            <div style={{ textAlign: "left" }}>Completed:{completed || 0}</div>
            <div style={{ textAlign: "left" }}>
              Incomplete:{incomplete || 0}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todoList: state.todo,
  
});

const mapDispatchToProps = (dispatch) => ({
  todo: (payload) => dispatch(todo(payload)),
  toggle: (id) => dispatch(toggle(id)),
  remove: (id) => dispatch(remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
// export {Todo};
