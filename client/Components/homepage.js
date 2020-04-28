import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import "../../public/stylesheets/reset.css";
import "../../public/stylesheets/style.css";

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      startupName: [],
    };
  }

  componentDidMount() {
    console.log("hello world");
    fetch("http://localhost:3000/api/v1/startup", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(...data.list);
        this.setState({
          ...data.list,
        });
      });
  }
  render() {
    return (
      <Route>
        <div className="heading">
          <h1 className="title">Welcome To Start-up World</h1>
        </div>
        <div>
          <span>List of StartUp</span>
          <ul>
            <li>hello</li>
            <li>World</li>
          </ul>
        </div>
        <Link to="/addStartup">
          <button>Add</button>
        </Link>
      </Route>
    );
  }
}

export default Homepage;
