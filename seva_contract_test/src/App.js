import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import config from './config';

class App extends Component {
  render() {
    const web3 = new Web3('http://localhost:8545');

    const mycontract = new  web3.eth.Contract(config.contractAbi, config.contractAddress, {
      from: '0x7aa80d7f6a90438d2643e8a1574f6d5dc14c94fe',
      gasPrice: '200000000000'
    })
    console.log(mycontract);
    console.log('-----------------------------------------------------------------------------------------')
   
    
     
   
    // get test accounts 
   
    
    const getaccounts = async () => {
      const  accounts = await  web3.eth.getAccounts()
      return console.log(accounts);
   }
    
   
   // get contract balance
    const bal = async () => {
       const b = await web3.eth.getBalance(config.contractAddress)
        console.log(`Project Balance in wei: ${b} wei`);
        console.log(`Project Balance in eth: ${web3.utils.fromWei(b, 'ether')} ether`);
        console.log(`Project Balance in USD: ${web3.utils.fromWei(b, 'ether') * 640} $`);
        console.log('-----------------------------------------------------------------')
     }

    // get donors from contract
    
     const donors = async () => {
        const donor =  await mycontract.methods.getDonors().call()
          console.log('donors of the project :', donor);
     }

     

     const $fundIt = async () =>{
      var val = web3.utils.toWei('2', 'ether');
       const  accounts = await  web3.eth.getAccounts()
       const fundit = await mycontract.methods.fundIt().send({
                                                        from: accounts[1], 
                                                        value: val,
                                                        gas: 2000000,
                                                        
                                                       }, (err, res) => {
                                                        if (!err) {
                                                          console.log('Success', res);
                                                          alert(`Transaction succeeded :${res}`)
                                                        }
                                                        console.log(err);
                                                      })                                                
                                                              
     }

    const target = async () =>{
       let tar = await mycontract.methods.goal().call();
             tar = web3.utils.fromWei(tar, 'ether');
       return console.log(`Target amount ${tar * 640} $`);
    }
    const remaining = async () =>{
      let tar = await mycontract.methods.fundNeeded().call();
            tar = web3.utils.fromWei(tar, 'ether');
      return console.log(`Money needed ${tar * 640} $`);
    }
    const ownership = async () =>{
      const own = await mycontract.methods.charity().call();
      return console.log('Owner address ', own);
    }
 
  
        
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SevaFund Contract</h1>
        </header>
        <div>
          <div className="container">
            <div className="input-group">
              <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)"/>
              <div className="input-group-append">
                <span className="input-group-text">$</span>
              </div>
            
              <button type="button" className="btn btn-success" onClick = { $fundIt }> FundIt</button>
            </div>
          </div>
          
          <button type="button" className="btn btn-info" onClick = { remaining }> Fund needed</button>
          <button type="button" className="btn btn-info" onClick = { target }> Project goal</button>
          <button type="button" className="btn btn-info" onClick = { bal }> Balance</button>
          <button type="button" className="btn btn-info" onClick = { donors }> Donors</button>        
          <button type="button" className="btn btn-info" onClick = { getaccounts }>Accounts</button>
          <button type="button" className="btn btn-danger" onClick = { ownership }>Owner</button>
        </div>
      </div>
    );
  }
}

export default App;
