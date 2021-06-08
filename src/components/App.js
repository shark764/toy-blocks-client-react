/* eslint-disable import/no-named-as-default */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nodes from "../containers/Nodes";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Nodes} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
