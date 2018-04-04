import React, { Component } from "react";
import SignUpModal from './Modal.js'
import "./Navbar.css";

class Navbar extends Component {

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"><h3>SevaFund</h3></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Account</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dashboard</a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Donor</a>
                                    <a class="dropdown-item" href="#">Charity</a>
                                </div>
                            </li>
                        </ul>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Log-In / Sign-up</button>
                    </div>
                </nav>
                <SignUpModal/>
            </div>
        )
    }
}

export default Navbar;