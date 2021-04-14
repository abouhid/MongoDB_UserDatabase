import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Users from "./pages/index";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Users} />
      </Switch>
    </Router>
  );
};

export default Routes;
