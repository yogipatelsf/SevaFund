import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import CharityList from "./components/CharityList";
import "./App.css";


class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-center">SevaFund Market Place</h1>
        <CharityList />
      </div>
    );
  }
}

export default App;
