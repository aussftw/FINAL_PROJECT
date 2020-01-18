import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import HomePage from "../pages/HomePage/HomePage";
import Cart from "../pages/Cart/Cart";
import Profiler from "../pages/Profiler/Profiler";
import LoginForm from "../components/LoginForm";
import NotFound from "../pages/NotFound/NotFound";
import RegistrationForm from "../components/RegistrationForm";
import ItemDetailsPage from "../pages/ItemDetailsPage/ItemDetailsPage";
import { logIn } from "../store/actions/loginActions";
import setAuthToken from "../components/common/setAuthToken";

// eslint-disable-next-line no-shadow
const Routes = ({ isAuthenticated, logIn }) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const token = localStorage.getItem("authToken");
    // eslint-disable-next-line no-console
    console.log(token);
    if (token !== null) {
      setAuthToken(token);
      axios
        .get("/customers/customer")
        .then(response => {
          // eslint-disable-next-line no-console
          console.log("Our User", response);
          logIn(response.data);
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    }
  }, [logIn]);

  // eslint-disable-next-line no-console
  console.log("МЫ в роутах", isAuthenticated);
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
    isAuthenticated: state.user.isAuthenticated,
  };
}

export default connect(mapStateToProps, { logIn })(Routes);
