import React from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import ItemList from  "./ItemList"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px;
  text-align:center;


  div{
    margin-left:30px
  }

 
`;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  handleSubmit = (e, val) => {
    e.preventDefault();
    let payload = {
      task: val,
      id: uuid(),
      status: false,
    };
    this.setState({
      list: [...this.state.list, payload],
    });

    // console.log(val);
  };


  handleToggle = (id)=>{
    let newList = this.state.list?.map((item) => item.id === id ? { ...item, status: !item.status } : item)
    this.setState({
      list:newList
    })
  }

  // shouldComponentUpdate(newprops) {
  //   if (newprops !== this.props) {
  //     return  true
  //   }
  //   else return false
  // }

  render() {
    const { list } = this.state;
    let counter = 0
    console.log(counter++)
    return (
      <>
        <Todo handleSubmit={this.handleSubmit} />
        <div>
          {list?.map((item) => {
            return (
                  <Container  key={item.id} >
                  <div>{item.task}</div>
                <div>{item.status ? "Done" : "Not Done"}</div>
                <div><button  onClick={()=>this.handleToggle(item.id)}>Toggle</button></div>
              </Container>
                // <ItemList key={item.id} {...item} handleToggle={this.handleToggle}/>
            );
          })}
        </div>
      </>
    );
  }
}

export default TodoList;
