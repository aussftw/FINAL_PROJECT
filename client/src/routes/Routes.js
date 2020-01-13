import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "../pages/HomePage/HomePage";
import Cart from "../pages/Cart/Cart";
import Profiler from "../pages/Profiler/Profiler";
import { Products } from "../pages/products/products";

const Routes = ({ isAuthenticated = true }) => {
  return isAuthenticated ? (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/profile">
        <Profiler />
      </Route>
      <Route path="/shop">
        <Products />
      </Route>
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

function mapStateToProps(state) {
  return {
    customer: state.isAuthenticated,
  };
}

export default connect(mapStateToProps)(Routes);
