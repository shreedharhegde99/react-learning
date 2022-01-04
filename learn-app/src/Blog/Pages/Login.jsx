import React from "react";
import styled,{css} from "styled-components";
import axios from "axios";
import Data from "./DataProvider";
import {Container,FormContainer,Input } from "./LoginStyle"



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      error:null,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    // console.log(this)
    e.preventDefault()
    const { email, password } = this.state
    const{handleAuth} =this.context
    this.setState({
      loading: true,
    })
    axios
      .post("https://reqres.in/api/login", {
        
          email,
          password,

        
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            loading: false,
            error: null,
          });
          handleAuth(true)
          return
        }
      })
      .catch(err => {
        console.log(err)
        handleAuth(false)
        this.setState({
          loading:false,
          error:true
        })
    })
  }

  render() {
    const { name, password,loading,error } = this.state;
    const{authorised}=this.context
    return (
      <>
        <Container>
          <div></div>
          <FormContainer>
            <div
              style={{
                margin: "10px",
                padding: "5px",
                fontSize: "18px",
                fontWeight: "bolder",
              }}
            >
              Sign in
            </div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="Username">Username</label>
                <Input
                  type="text"
                  name="email"
                  value={name}
                  autoComplete="false"
                  onChange={this.handleChange}
                  placeholder="eve.holt@reqres.in"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="cityslicka"
                />
              </div>
              <Input submit type="submit" value="Submit" />
            </form>
          <div>{loading && "Loading..."   ||error && "Something went wrong"}</div>
          </FormContainer>
          <div></div>
        </Container>
      </>
    );
  }
}

Login.contextType=Data

export default Login;
