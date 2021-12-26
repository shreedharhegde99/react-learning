import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      dept: "",
      marital: true,
      gender:"",
      employees: [],
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val = type === "checkbox" ? checked : value;
    this.setState({ 
      [name]:val
    });
  };

  handleForm = (e) => {
    e.preventDefault();
    const { employees, ...payload } = this.state;
    this.setState({
      employees: [...employees, payload],
    });
    // alert(`Thanks for registering  ${name}  `);
  };

  render() {
    const { name, age, dept, marital,gender } = this.state;
    return (
      <div>
        <h1>Forms</h1>
        <form onSubmit={this.handleForm}>
          <label htmlFor="name">
            Name :
            <input
              required
              type="text"
              name="name"
              value={name}
              placeholder="name"
              onChange={this.handleChange}
            />
          </label>
          <br />

          <label htmlFor="age">
            Age :
            <input
              required="required"
              type="number"
              name="age"
              value={age}
              placeholder="age"
              onChange={this.handleChange}
            />
          </label>

          <br />

          <select name="dept" value={dept} onChange={this.handleChange}>
            <option value="hr">hr</option>
            <option value="marketing">marketing</option>
            <option value="tech">tech</option>
            <option value="management">management</option>
          </select>
          <br />

          <label htmlFor="marital">
            Married :
            <input
              type="checkbox"
              name="marital"
              checked={marital}
              onChange={this.handleChange}
            />
          </label>
          <br />

          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={this.handleChange}
              checked={gender === "male"} />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              name="gender"
              value="female"
              onChange={this.handleChange}
              checked={gender === "female"} />
            <label htmlFor="female">Female</label>

            <input
              type="radio"
              name="gender"
              value="other"
              onChange={this.handleChange}
              checked={gender === "other"} />
            <label htmlFor="other">Other</label>
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
