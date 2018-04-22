import React, { Component } from "react";
import Card from "./Card";
import API from "../utils/API"
import "./CharityList.css";

class CharList extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then(res => {
           this.setState({ projects: res.data})
           console.log(res.data)
           console.log("logging the state")
           console.log(this.state.projects)       
        })
      .catch(err => console.log(err));
  };
  render() {
    const projects = this.state.projects.map((p, index) => (
      <Card key={index} {...p} />
    ));

    return (
      <div className="container">
        <div className="charity-cards">{projects}</div>
      </div>
    );
  }
}

export default CharList;