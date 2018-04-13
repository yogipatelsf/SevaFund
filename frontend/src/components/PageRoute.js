import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RandForm from "./RandForm";
import CharityList from "./CharityList";
import About from "./About";

const NewPo = () => <RandForm />;
const Home = () => <About />;
const OpenPo = () => <CharityList />;

const PageRoute = () => (
  <Switch>
    <Route path="/newPo" component={NewPo} />
    <Route path="/openPo" component={OpenPo} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default PageRoute;
