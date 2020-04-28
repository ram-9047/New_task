import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class CreateStartups extends Component {
  state = {
    id: null,
    name: null,
    country: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div>
          <h3>Add New Start-up</h3>
        </div>
        <form>
          <input type="number" name="id" onChange={this.handleChange}></input>
          <input type="text" name="name" onChange={this.handleChange}></input>
          <input
            type="text"
            name="country"
            onChange={this.handleChange}
          ></input>

          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}

export default CreateStartups;
