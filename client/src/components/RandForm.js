import React, { Component } from "react";
import API from "../utils/API";
import "./RandForm.css";

class RandForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      supplier: "",
      Amount: "",
      poNum: "",
      email: "",
      image: "",
      project: "",
      website: ""
    };
  }

  // componentDidMount() {
  //   this.createProject();
  // }

  // createProject = () => {
  //   API.saveProject().then(res => {
  //     console.log(res);
  //     console.log(this.state);
  //   });
  // };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("form submitted!!");
    API.saveProject({
      title: this.state.title,
      supplier: this.state.supplier,
      Amount: this.state.Amount,
      poNum: this.state.poNum,
      email: this.state.email,
      image: this.state.image,
      project: this.state.project,
      website: this.state.website
    })
      .then(() => {
        console.log(this.state);
        window.location.href = "/projects";
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      title: "",
      supplier: "",
      Amount: "",
      poNum: "",
      email: "",
      image: "",
      project: "",
      website: ""
    });
  };

  render() {
    const {
      title,
      supplier,
      Amount,
      poNum,
      email,
      image,
      project,
      website
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
                id="title"
                type="text"
                placeholder="Institution Name"
                name="title"
                value={title}
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
              <label htmlFor="Amount">Amount ($)</label>
              <input
                id="Amout"
                type="number"
                placeholder="$00,000.00"
                name="Amount"
                value={Amount}
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
              <label htmlFor="website">Website</label>
              <input
                id="website"
                className="validate"
                type="text"
                placeholder="Your Website"
                name="website"
                value={website}
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
