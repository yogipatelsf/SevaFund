import React, { Component } from "react";
import Navbar from "./components/Navbar";
import CharityList from "./components/CharityList";
import Footer from "./components/Footer";
import PageRoute from "./components/PageRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <PageRoute />
        <Footer />
      </div>
    );
  }
}

export default App;
