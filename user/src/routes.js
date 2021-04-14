import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Details from "./pages/Details";
import Users from "./pages/Index";
import Insert from "./pages/Insert";
import Update from "./pages/Update";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/users/:id" component={Details} />
        <Route path="/createUser" component={Insert} />
        <Route path="/editUser/:id" component={Update} />
      </Switch>
    </Router>
  );
};

export default Routes;
