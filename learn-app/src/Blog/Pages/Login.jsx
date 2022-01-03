import React from "react";
import styled,{css} from "styled-components";
import axios from "axios";
import Data from "./DataProvider";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url("https://i.imgur.com/eUmK64G.jpg");
  background-size: cover;
  height: 500px;
`;

const FormContainer = styled.div`
  background:#e1e8e8  ;
  margin: 50px;
  margin-top:100px;
  height: 300px;
  width: 250px;
  padding:10px 30px 30px 30px;
  border-radius: 10px;
  justify: center;
  text-align:center;
`;



const Input = styled.input`
  margin: 3px 20px 20px 20px;
  padding: 10px;
  border: solid violet 3px;
  border-radius: 50px;
  font-weight: bold;

  ${(props) =>
    props.submit &&
    css`
      // margin-left:100px;
      width: 200px;
      background: #2f7ce0;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 16px;
      :hover {
        background: #0069f2;
      }
    `}
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) =>{
    e.preventDefault()
    const { email, password } = this.state
    const{handleAuth} =this.context

    axios
      .post("https://reqres.in/api/login", {
        
          email,
          password,

        
      })
      .then((res) => {
        if (res.status === 200) {
          handleAuth(true)
          return
        }
      })
    .catch(err=>handleAuth(false))
  }

  render() {
    const { name, password } = this.state;
    const{authorised}=this.context
    return (
      <>
        Login Page
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
          <div>{!authorised&& "Loading......"}</div>
          </FormContainer>
          <div></div>
        </Container>
      </>
    );
  }
}

Login.contextType=Data

export default Login;
