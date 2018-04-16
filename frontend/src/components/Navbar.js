import React, { Component } from "react";
import SignUpModal from "./SignUpModal.js";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper light-blue accent-2">
            <a href="/" className="brand-logo">
              SevaFund
            </a>
            <a href="" data-target="mobile-demo" className="sidenav-trigger">
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
                <a href="/about">Who we are</a>
              </li>
              <li>
                <a href="/openPo">Open PO's</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <a
            className="waves-effect waves-light btn modal-trigger"
            href="/newPo"
          >
            New Purchase Order
          </a>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/openPo">Open PO's</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
