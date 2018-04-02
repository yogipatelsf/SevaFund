import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Navbar.js';
import Welcome from './components/Welcome.js';
import Footer from './components/Footer.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Welcome />
        <Footer />
      </div>
    );
  }
}

export default App;
