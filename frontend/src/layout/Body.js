import React from "react";

import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from "../pages/Home";
import AllCategories from "../pages/categories/AllCategories";
import CreateCategory from "../pages/categories/CreateCategory";
import DetailCategory from "../pages/categories/DetailCategory";
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
        <Route exact path="/categories/all">
          <AllCategories />
        </Route>
        <Route exact path="/categories/add">
          <CreateCategory />
        </Route>
        <Route exact path="/categories/:id">
          <DetailCategory />
        </Route>
      </Switch>
    </div>
  );
};

export default Body;
