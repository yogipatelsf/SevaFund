import React, { Component } from "react";
import SignUpModal from "./SignUpModal.js";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }
  
  render() {

    const overStyle = {
      color: 'black',
      position: 'fixed',
      zIndex: '2',
      margin: '0'
    };

    const navColor = {
      backgroundColor: 'white'
    }

    const colorWords = {
      color: 'black'
    };

    return (
      <div>
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper" style={overStyle}>
            
            <div className="row" style={navColor}>
              <a href="" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons" style={colorWords}>menu</i>
              </a>

              <a href="/" className="brand-logo" style={colorWords}>
                SevaFund
              </a>
              
              <ul className="right hide-on-med-and-down">
                <a
                  className="waves-effect waves-light btn modal-trigger"
                  href="/newPo"
                >
                  New Purchase Order
                </a>
                <li className="nav-words">
                  <a 
                    href="/about"
                    style={colorWords}
                  >
                  Who we are
                  </a>
                </li>
                <li className="nav-words">
                  <a 
                    href="/api/projects"
                    style={colorWords}
                  >
                  Projects
                  </a>
                </li>
              </ul>
            </div>
        
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <a
            className="waves-effect waves-light btn modal-trigger"
            style={colorWords}
            href="/newPo"
          >
            New Purchase Order
          </a>
          <li>
            <a 
              href="/about"
              style={colorWords}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="/api/projects"
              style={colorWords}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
