import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RandForm from "./RandForm";
import CharityList from "./CharityList";
import About from "./About";
import Home from "./Home";

const NewHo = () => <Home />;
const NewPo = () => <RandForm />;
const AboutUs = () => <About />;
const OpenPo = () => <CharityList />;

const PageRoute = () => (
  <Switch>
    <Route exact path="/" component={NewHo} />
    <Route path="/newPo" component={NewPo} />
    <Route path="/api/projects" component={OpenPo} />
    <Route path="/about" component={AboutUs} />
  </Switch> 
);

export default PageRoute;
