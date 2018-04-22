import React from "react";
import { Switch, Route } from "react-router-dom";
import RandForm from "./RandForm";
import CharList from "./CharityList";
import About from "./About";
import Home from "./Home";

const NewHo = () => <Home />;
const NewPo = () => <RandForm />;
const AboutUs = () => <About />;
const OpenPo = () => <CharList />;

const PageRoute = () => (
  <Switch>
    <Route exact path="/" component={NewHo} />
    <Route path="/newPo" component={NewPo} />
    <Route path="/projects" component={OpenPo} />
    <Route path="/about" component={AboutUs} />
  </Switch> 
);

export default PageRoute;
