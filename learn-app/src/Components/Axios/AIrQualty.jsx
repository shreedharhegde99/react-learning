import React from "react";
import axios from "axios";
import cities from "./CityList.json";
import { v4 as uuid } from "uuid";
import keys from "./Key.json"

export default class AirQuality extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      city: value,
    });
    // console.log(value);
  };

  handleQuery = (e) => {
    e.preventDefault()
    console.log("api call")
    const { city } = this.state;
    axios
      .get(
        "http://api.airvisual.com/v2/city",{  
        
          params: {
            city: city,
            state: "Karnataka",
            country: "India",
            key: keys.id,
          },
        }
      )
      .then((res) => console.log(res.data.data.city))
      .catch((err) => console.log(err));
    // http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key={{YOUR_API_KEY}}
  };

  render() {
    return (
      <>
        Get Air Quality Of the cities
        <form onSubmit={this.handleQuery}>
          <label>Select City:</label>

          <select value={this.state.city} onChange={this.handleChange}>
            <option value=""></option>
            {cities.map((item) => {
              return (
                <option key={uuid()} value={item.city}>
                  {item.city}
                </option>
              );
            })}
          </select>
          <button type="submit" >Submit</button>
        </form>
      </>
    );
  }
}
