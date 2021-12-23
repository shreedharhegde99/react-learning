import React from "react";
import {v4 as uuid} from "uuid"
import { ListItem } from "./ListItem";
import Pagination from "./Pagination";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      q: "",
    };
  }

  handleAdd = () => {
    let { q, todo } = this.state;
    let payload = {
      id: uuid(),
      title: q,
      status: false,
    };
    this.setState({
      todo: [...todo, payload],
    });
  };

  handleDelete = (id) => {
    const updatedState = this.state.todo.filter((item) => item.id !== id);
    this.setState({
      todo: updatedState,
    });
  };

  handleToggle = (id) => {
    const updatedState = this.state.todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );

    this.setState({
      todo: updatedState,
    });
  };

  render() {
    return (
      <div style={{ margin: "50px" }}>
        <div>
          <input
            value={this.state.q}
            onChange={(e) => this.setState({ q: e.target.value })}
            type="text"
          />
          <button onClick={this.handleAdd}>Add</button>
        </div>
        <div>
          {this.state.todo?.map((item) => {
            return <ListItem
              key={item.id}
              id={item.id}
              item={item}
              handleDelete={this.handleDelete}
              handleToggle={this.handleToggle} />;
          })}
        </div>
        <Pagination/>
      </div>
    );
  }
}
