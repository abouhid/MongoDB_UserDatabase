import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Details from "./pages/Details";
import Users from "./pages/Index";
import Insert from "./pages/Insert";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/users/:id" component={Details} />
        <Route path="/createUser" component={Insert} />
      </Switch>
    </Router>
  );
};

export default Routes;
