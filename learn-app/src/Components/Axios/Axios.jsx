import React from "react";
import axios from "axios";

let divStyle = {
  margin: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  height: "200px",
};

export default class Axios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      query: value,
    });
  };

  handleQuery = () => {
    const { query } = this.state;
    // /search/users
    axios
      .get("https://api.github.com/search/users", {
        params: {
          q: query,
          per_page: 15,
        },
      })
      .then((res) =>
        this.setState({
          data: [...res.data.items],
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    // console.log(this.state.data);
    const { data } = this.state;

    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" onClick={this.handleQuery} />
        </div>
        <div>
          { data.map((item,index) => {
                return (
									<div key={item.id} style={divStyle}>
										
                    <div>{item.login}</div>
                    <div>
                      <img
                        src={item.avatar_url}
                        alt="avatar"
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "50px",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
        </div>
      </>
    );
  }
}
