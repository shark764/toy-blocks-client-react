/* eslint-disable import/no-named-as-default */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nodes from "../containers/Nodes";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Nodes} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
