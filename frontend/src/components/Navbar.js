import React, { Component } from "react";
import SignUpModal from "./SignUpModal.js";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper light-blue accent-2">
            <a href="/about" className="brand-logo">
              SevaFund
            </a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <a
                className="waves-effect waves-light btn modal-trigger"
                href="/newPo"
              >
                New Purchase Order
              </a>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>
                <a href="/openPo">Open PO's</a>
              </li>
              {/* <li>
                <SignUpModal id="sign-up" className="light-blue accent-2" />
              </li> */}
            </ul>
          </div>
        </nav>
        <ul id="mobile-demo" className="sidenav">
          <a
            className="waves-effect waves-light btn modal-trigger"
            href="/newPo"
          >
            New Purchase Order
          </a>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li />
        </ul>
      </div>
    );
  }
}

export default Navbar;
