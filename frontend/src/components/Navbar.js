import React, { Component } from "react";
import SignUpModal from "./SignUpModal.js";
import "./Navbar.css";

class Navbar extends Component {
  
  render() {
    return (
      <div>
        <nav className="transparent z-depth-0">
          <div className="row" id="navRow">
            <a href="" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>

            <a href="/" className="brand-logo">
              SevaFund
            </a>

            <ul className="right hide-on-med-and-down">
              <a
                className="waves-effect waves-light btn modal-trigger"
                href="/newPo"
              >
                New Purchase Order
              </a>
              <li>
                <a href="/about" className="nav-words">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="/api/projects" className="nav-words">
                  Projects
                </a>
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
            <a href="/api/projects">Projects</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
