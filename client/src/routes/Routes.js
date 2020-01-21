import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "../pages/HomePage/HomePage";
import Cart from "../pages/Cart/Cart";
import Profiler from "../pages/Profiler/Profiler";
import LoginForm from "../components/LoginForm";
import NotFound from "../pages/NotFound/NotFound";
import RegistrationForm from "../components/RegistrationForm";
import ItemDetailsPage from "../pages/ItemDetailsPage/ItemDetailsPage";
import SearchPage from "../pages/SearchPage/SearchPage";

const Routes = ({ customer }) => {
  // eslint-disable-next-line no-console
  console.log("МЫ в роутах", customer);
  return customer ? (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/shop">
        <p>shop</p>
      </Route>
      <Route path="/about-us">
        <p>about us</p>
      </Route>
      <Route path="/notfound">
        <NotFound />
      </Route>
      <Route path="/profile">
        <Profiler />
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
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/shop">
        <p>shop</p>
      </Route>
      {/* <Route path="/about-us"> */}

      {/* </Route> */}
      <Route path="/notfound">
        <NotFound />
      </Route>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/registration">
        <RegistrationForm />
      </Route>
      <Route path="/products/:id">
        <ItemDetailsPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

function mapStateToProps(state) {
  return {
    customer: state.loginReducer.login,
  };
}

export default connect(mapStateToProps)(Routes);
