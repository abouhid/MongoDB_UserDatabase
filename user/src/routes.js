import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Details from "./pages/Details";
import Users from "./pages/Users";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/users/:id" component={Details} />
      </Switch>
    </Router>
  );
};

export default Routes;
