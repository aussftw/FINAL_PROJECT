import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import jwt from "jwt-decode";

import HomePage from "../pages/HomePage/HomePage";
import CartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import NotFound from "../pages/NotFound/NotFound";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ItemDetailsPage from "../pages/ItemDetailsPage/ItemDetailsPage";
import OrderDetailsPage from "../pages/OrderDetailsPage/OrderDetailsPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage"
import setAuthToken from "../components/common/setAuthToken";
import isExpired from "../components/common/isExpired/isExpired";
import Preloader from "../components/Preloader";
import {
  getUser,
  logOut,
  preloaderClose,
  userFromJwt,
} from "../store/actions/loginActions";
import { getWishlist } from "../store/actions/wishlist";

import SearchPage from "../pages/SearchPage/SearchPage";
// const Shop = React.lazy(() => import('../pages/Shop/Shop')); // Lazy-loaded
import Shop from "../pages/Shop/Shop";
import Orders from "../pages/AdminOrders/Orders";

const Routes = ({
  isAuthenticated,
  getUserData,
  getWishlistData,
  preloaderClosing,
  preloader,
  userDataFromJwt,
  LogOutUser,
}) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const token = localStorage.getItem("authToken");
    if (token) {
      const isExpiredToken = isExpired(jwt(token));
      if (isExpiredToken) {
        userDataFromJwt(jwt(token));
        preloaderClosing();
        setAuthToken(token);
        getWishlistData();
        getUserData();
      } else {
        LogOutUser();
        preloaderClosing();
      }
    } else {
      preloaderClosing();
    }
  }, [
    getUserData,
    getWishlistData,
    preloaderClosing,
    userDataFromJwt,
    LogOutUser,
  ]);

  // eslint-disable-next-line no-nested-ternary
  return preloader ? (
    <Preloader />
  ) : isAuthenticated ? (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/orders">
        <Orders />
      </Route>

      <Route path="/cart">
        <CartPage />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/notfound">
        <NotFound />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/products/:id">
        <ItemDetailsPage />
      </Route>
      <Route path="/registration">
        <RegistrationPage />
      </Route>
      <Route path="/checkout">
        <CheckoutPage />
      </Route>
      <Route path="/orders/:orderNo">
        <OrderDetailsPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>

      <Route path="/orders">
        <Orders />
      </Route>

      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/shop">
        {/* <Suspense fallback={<Preloader />}> */}
        {/* <Shop /> */}
        {/* </Suspense> */}
        <Shop />
      </Route>
      {/* <Route path="/about-us"> */}

      {/* </Route> */}
      <Route path="/notfound">
        <NotFound />
      </Route>
      <Route path="/registration">
        <RegistrationPage />
      </Route>
      <Route path="/products/:id">
        <ItemDetailsPage />
      </Route>
      <Route path="/checkout">
        <CheckoutPage />
      </Route>
      <Route path="/orders/:orderNo">
        <OrderDetailsPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    user: state.loginReducer.user,
    preloader: state.loginReducer.loginPreloader,
  };
}

export default connect(mapStateToProps, {
  getUserData: getUser,
  getWishlistData: getWishlist,
  preloaderClosing: preloaderClose,
  userDataFromJwt: userFromJwt,
  LogOutUser: logOut,
})(Routes);
