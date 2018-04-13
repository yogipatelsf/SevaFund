import React, { Component } from "react";
import "./RandForm.css";

class RandForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      institution: "",
      supplier: "",
      amount: "",
      poNum: "",
      email: "",
      image: "",
      project: ""
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      institution: "",
      supplier: "",
      amount: "",
      poNum: "",
      email: "",
      image: "",
      project: ""
    });

    console.log(this.state);
  };

  render() {
    const {
      institution,
      supplier,
      amount,
      poNum,
      email,
      image,
      project
    } = this.state;
    return (
      <div className="container">
        <form id="newPo" onSubmit={this.handleFormSubmit} className="z-depth-5">
          <div className="row">
            <div className="col s6">
              <h3>Some info...</h3>
            </div>
          </div>
          <div className="row">
            <div className="col s6 input-field">
              <label htmlFor="institution">Institution's Name</label>
              <input
                id="institution"
                type="text"
                placeholder="Institution Name"
                name="institution"
                value={institution}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col s6 input-field">
              <label htmlFor="supplier">Supplier's Name</label>
              <input
                id="supplier"
                type="text"
                placeholder="Supplier"
                name="supplier"
                value={supplier}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s6 input-field">
              <label htmlFor="amount">Amount ($)</label>
              <input
                id="amout"
                type="number"
                placeholder="$00,000.00"
                name="amount"
                value={amount}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col s6 input-field">
              <label htmlFor="poNum">PO Number</label>
              <input
                id="poNum"
                type="number"
                placeholder="PO Number"
                name="poNum"
                value={poNum}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s6 input-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="validate"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col s6 input-field">
              <label htmlFor="image">Image</label>
              <input
                id="image"
                className="validate"
                type="text"
                placeholder="Image"
                name="image"
                value={image}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="project">Project Description</label>
              <textarea
                id="project"
                className="materialize-textarea"
                data-length="120"
                placeholder="Please tell us what the project is about"
                name="project"
                value={project}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="row">
              <div className="col s4">
                <button className="btn" type="submit">
                  Submit!
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col s12">
            <ol />
          </div>
        </div>
      </div>
    );
  }
}

export default RandForm;
