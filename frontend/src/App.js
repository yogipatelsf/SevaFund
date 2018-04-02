import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import CharityList from "./components/CharityList";
import Checkout from "./Checkout"
import "./App.css";


class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-center">SevaFund Market Place</h1>
        <CharityList />
        <p className="App-intro">	
               <Checkout	
                name={'The Road to learn React'}	
                    description={'Only the Book'}	
                    amount={1}	
                />	
            </p>
      </div>
    );
  }
}

export default App;
