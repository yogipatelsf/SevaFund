import React, { Component } from "react";
import SignUpModal from './SignUpModal.js'
import "./Navbar.css";

class Navbar extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.state = { 
            showModal: false 
        };
    }

    handleShow(){
        console.log("sup");
        this.setState({showModal: true});
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"><h3>SevaFund</h3></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={this.handleShow}>Account</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dashboard</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Donor</a>
                                    <a className="dropdown-item" href="#">Charity</a>
                                </div>
                            </li>
                        </ul>
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.handleShow}>Log-In / Sign-up</button>
                    </div>
                </nav>
                <SignUpModal showing={this.state.showModal}/>
            </div>
        )
    }
    
}

export default Navbar;