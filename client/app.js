import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./Components/homepage";
import CreateStartup from "./Components/createStartup";
import "../public/stylesheets/reset.css";
import "../public/stylesheets/style.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Homepage} />
        <Route path="/addStartup" component={CreateStartup} />
      </BrowserRouter>
    );
  }
}

export default App;
