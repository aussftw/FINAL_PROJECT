import React, {useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import jwt from "jwt-decode";

import HomePage from "../pages/HomePage/HomePage";
import CartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import NotFound from "../pages/NotFound/NotFound";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import ItemDetailsPage from "../pages/ItemDetailsPage/ItemDetailsPage";
import OrderDetailsPage from "../pages/OrderDetailsPage/OrderDetailsPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage"
import AdminPage from "../pages/AdminPage/AdminPage";
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
import Contact from "../pages/Contact/Contact";

const Routes = ({
  isAuthenticated,
  isAdmin,
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

  const ProfileRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated ? <Component {...props} /> : (<Redirect to="/" />)
      )}
    />
  );

  const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
      isAdmin ? <Component {...props} /> : (<Redirect to="/" />)
      )}
    />
  );
  
  return preloader ? (
    <Preloader /> 
  ) : (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/shop" component={Shop} />
      <Route path="/about-us" component={Contact} />
      <Route path="/notfound" component={NotFound} />
      <ProfileRoute path="/profile" component={ProfilePage} />
      <Route path="/products/:id" component={ItemDetailsPage} />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/orders/:orderNo" component={OrderDetailsPage} />
      <AdminRoute path="/admin" component={AdminPage} />
      <Redirect to="/" />
    </Switch>
  )
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    isAdmin: state.loginReducer.user.isAdmin,
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
