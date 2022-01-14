import React from 'react';
import {connect} from "react-redux"
import {fetchData} from "../Redux/action"


class GitHubData extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value:""
    }
  }


  
  handleChange = (e) => {
    this.setState({
      value:e.target.value
    })
  }


  render() {
    const { value } = this.state
    const { userData, fetchData,loading } = this.props
    // console.log(loading);
    return (
      <>
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => this.handleChange(e)}
          />
          <button onClick={() => fetchData(value)}>Search</button>
        </div>
        <div>
          {loading&& "Loading....."}
          {!loading&&userData && userData.map((item,i) => <img key={i} src={item.avatar_url}  style={{height:"100px",width:"100px"}}/>)}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.userData,
  loading: state.isLoading,
  error:state.iserror
})

const mapDispatchToProps = dispatch => ({
  fetchData:(payload)=>dispatch(fetchData(payload))
})



export   default connect(mapStateToProps,mapDispatchToProps)( GitHubData)
