import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
// import registerServiceWorker from './registerServiceWorker';
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <App />
    </div>
  </Router>,
  document.getElementById("root")
);

// registerServiceWorker();
