import React from 'react'
import { AuthContext } from "./ContextProvider"




export default class Login extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password:""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]:value
    })
  }


  handleSubmit(e) {
    e.preventDefault()
    const { email, password } = this.state
    const { authenticateUser } = this.context
    authenticateUser({email,password})
    
  }
  
  render() {
    const{loading}  = this.context
    return loading?(<div>Loading.....</div>):  (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />  <br />
          <input type="password" name="password"  value={this.state.password} onChange={this.handleChange}  /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
} 

Login.contextType = AuthContext