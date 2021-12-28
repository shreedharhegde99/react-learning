import React from "react";
import axios from "axios";

export  const AuthContext = React.createContext();
export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      loading: false,
      error: false,
      email:""
    };
    this.authenticateUser = this.authenticateUser.bind(this);
    this.logout = this.logout.bind(this)
  }

  authenticateUser({ email, password }) {
    this.setState({
      loading:true
    })

   return axios
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then((res) => {
        this.setState({
          isAuth: true,
          loading: false,
          email
        })
      })
      .catch((err) => {
        this.setState({
          isAuth: false,
          loading: false,
          error:true
        });
      });
    
    
    }
    logout(){
      this.setState({
        isAuth:false
      })
    }

  render() {
    const { isAuth, loading, error,email } = this.state;
    const{authenticateUser,logout} = this
    const value = { isAuth, loading, error,authenticateUser,email,logout };
    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
