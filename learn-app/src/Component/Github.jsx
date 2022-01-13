import React from 'react';
import connect from "redux"


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
    const{value}= this.state
    return (
      <>
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => this.handleChange(e)}
          />
          <button>Search</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userData:state.userData
})

const mapDispatchToProps = dispatch => ({
  fetchData:
})



export   default  GitHubData
