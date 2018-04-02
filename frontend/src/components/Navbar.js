import React from "react";
import {Modal} from 'react-bootstrap';
import { Input, FormBtn } from "../components/Form";
// import Wrapper from '../components/Modals/ModalWrapper';


class Nav extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = { 
        show: false 
    };
  }

  handleClose(){
    this.setState({show:false});
  }

  handleShow(){
    this.setState({show:true});
  }

  handleFormSubmit = event =>{
    event.preventDefault();
  };

  render(){
    //  <button id="log-in" className="btn btn-warning">Charity</button>
    const donorBtn = {
      title: "Donor",
      id: "donor-btn",
      className: "btn btn-primary"
    }

    const charityBtn = {
      title: "Charity",
      id: "charity-btn",
      className: "btn btn-primary"
    }

    return(
      <div>
        <nav className="navbar navbar-inverse navbar-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <ul className="nav navbar-nav">
                  <li><a href="/" className="navbar-brand">SevaFund</a></li>
                  <li><a href="/how-it-works" className="navbar-brand">How It Works</a></li>
                  <li><a href="/about-us" className="navbar-brand">About</a></li>
                  <li><a className="donor-login" onClick={this.handleShow}>{donorBtn.title}</a></li>
                  <li><a className="charity-login" onClick={this.handleShow}>{charityBtn.title}</a></li>
                </ul>
                <button type="button" className="collapsed navbar-toggle">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" /> <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
            </div>
        </nav>
        <div className="row">
          <Modal show={this.state.show} onHide={this.handleClose}>
              <div>
                  <Modal.Header closeButton>
                      <Modal.Title className="text-center">
                          Sign up
                      </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <form>
                          <p><strong>Username</strong></p>
                          <Input
                              value={this.state.username}
                              onChange={this.handleInputChange}
                              name="title"
                              placeholder="Enter your username"
                          />
                          <p><strong>Password</strong></p>
                          <Input
                              value={this.state.password}
                              onChange={this.handleInputChange}
                              name="author"
                              placeholder="Enter your password"
                          />
                          <p><strong>Email</strong></p>
                          <Input
                              value={this.state.email}
                              onChange={this.handleInputChange}
                              name="author"
                              placeholder="Enter a valid email"
                          />                                
                      </form>
                  </Modal.Body>
                  <Modal.Footer>
                      <FormBtn
                          // disabled={!(this.state.username && this.state.password && this.state.email)}
                          onClick={this.handleFormSubmit}
                      >
                          Create Account
                      </FormBtn>
                  </Modal.Footer>
              </div>
          </Modal>
        </div>
      </div>
    )
  }
};

export default Nav;