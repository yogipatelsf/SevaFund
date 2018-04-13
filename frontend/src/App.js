import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CharityList from "./components/CharityList";
import PageRoute from "./components/PageRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <PageRoute />
      </div>
    );
  }
}

export default App;
