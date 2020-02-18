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
import {getWishlist} from "../store/actions/wishlist";
import SearchPage from "../pages/SearchPage/SearchPage";
// const Shop = React.lazy(() => import('../pages/Shop/Shop')); // Lazy-loaded
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import {AdminHOC} from '../components/common/hoc/AdminHOC';
import {AuthHOC} from '../components/common/hoc/AuthHOC';

const Routes = ({
                  preloaderClose,
                  preloader,
                  userFromJwt,
                  logOut,
                  getWishlist,
                  getUser,
                }) => {
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const isExpiredToken = isExpired(jwt(token));
      if (isExpiredToken) {
        userFromJwt(jwt(token));
        preloaderClose();
        setAuthToken(token);
        getUser();
        getWishlist();
      } else {
        logOut();
        preloaderClose();
      }
    } else {
      preloaderClose();
    }
  }, [preloaderClose, userFromJwt, logOut, getWishlist, getUser]);

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
      <Route path="/profile" component={AuthHOC(ProfilePage)} />
      <Route path="/products/:id" component={ItemDetailsPage} />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/orders/:orderNo" component={OrderDetailsPage} />
      <Route path="/admin" component={AdminHOC(AdminPage)} />
      <Redirect to="/" />
    </Switch>
  )
};

function mapStateToProps(state) {
  return {
    preloader: state.loginReducer.loginPreloader,
  };
}

export default connect(mapStateToProps, {
  preloaderClose,
  userFromJwt,
  logOut,
  getWishlist,
  getUser,
})(Routes);
