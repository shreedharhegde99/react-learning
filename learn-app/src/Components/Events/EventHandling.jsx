import React from "react";

let user = "admin"
let passphrase  = "admin"

export default class EventHandling extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      password: "",
      isAuth:false
    }
  }

  handleCHange = (e)=>{
    const { name, value } = e.target
    this.setState({
      [name]:value
    })
  }
  
  handleUser = () => {
    const { name, password } = this.state
    if (name === user && password === passphrase) {
      // user is logged in
      this.setState({
        isAuth: true,
        error:""
      })
    } 
    else {
      this.setState({
        error:"Wrong credentials"
      })
    }
  }

  handleLogout = () => {
    this.setState({
      isAuth:false
    })
  }

  render() {
    const { name, email, isAuth,error } = this.state
    if (!isAuth) {
        return (
          <div>
            <input
              value={name}
              placeholder="name"
              type="text"
              name="name"
              onChange={this.handleCHange}
            />
            <input
              value={email}
              placeholder="password"
              type="text"
              name="password"
              onChange={this.handleCHange}
              />
            <button onClick={this.handleUser}>Login</button>
            {
              error &&  `Error :${error}`
            }
          </div>
        );
    }
    else {
      return (
        <div>
          Welcome To Dashboard
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    }
  }
}