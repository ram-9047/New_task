import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import "../../public/stylesheets/reset.css";
import "../../public/stylesheets/style.css";

class Homepage extends Component {
  state = {
    startupName: [],
  };

  render() {
    return (
      <Route>
        <div className="heading">
          <h1 className="title">Welcome To Start-up World</h1>
        </div>
        <div>
          <span>List of StartUp</span>
          <ul>
            {/* {this.state.startupName.map((singleStartup) => {
              <li>{singleStartup}</li>;
            })} */}
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
