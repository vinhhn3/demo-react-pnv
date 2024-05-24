import React from "react";

import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";
const Body = () => {
  return (
    <div>
      <h1>Body Component</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
};

export default Body;
