import React from 'react';
// import styled from 'styled-components';
import Form from './Form';






export default class Composition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
    };
  }

  handleChange = (e) => {
    const     { name, value }=  e.target;
    this.setState({
      [name]:   value,
    });
  };

  handleSubmit =  (e) => {
    e.preventDefault();

    const { name,age } = this.state;
    console.log(name, age);
  };

  render() {
    const { name, age } = this.state;
    return (
      <Form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="age"
          value={age}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}


