import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import SearchIcon from "@material-ui/icons/Search";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TemporaryDrawer from "./BurgerMenu/BurgerMenu";
import CustomizedSearch from "./Search/Search";
import LoginButton from "../LoginButton/LoginButton";

import useStyles from "./useStyles";
import CartMini from "./CartMini/CartMini";

const Header = ({ isAuthenticated, wishlistCounter, cartCounter }) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up("sm"));

  const [isCartOpened, toggleCart] = useState(false);

  function cartToggling() {
    toggleCart(!isCartOpened);
  }

  return (
    <div>
      <AppBar color="inherit" position="fixed">
        <Toolbar className={classes.flex}>
          <div className={classes.flex}>
            <TemporaryDrawer />
            <Link to="/">
              <img src="/img/Logo.svg" alt="logo" className={classes.logo} />
            </Link>
            <IconButton
              className={classes.mobileSearch}
              aria-label="show search"
              color="inherit"
              // onClick={cartToggling}
            >
              <SearchIcon />
            </IconButton>
          </div>
          <div>
            <CustomizedSearch className={classes.searchDesktop} />
          </div>
          <div>
            <LoginButton />
            {isAuthenticated && (
              <Link to="/profile" className={classes.link}>
                <IconButton aria-label="show favourites" color="inherit">
                  <Badge badgeContent={wishlistCounter} color="primary">
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>
              </Link>
            )}
            {matches ? (
              <IconButton aria-label="show cart" color="inherit" onClick={cartToggling}>
                <Badge badgeContent={cartCounter} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            ) : (
              <Link to="/cart" className={classes.link}>
                <IconButton aria-label="show cart" color="inherit">
                  <Badge badgeContent={cartCounter} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
              </Link>
              )}
            {isCartOpened ? <CartMini /> : null}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    wishlistCounter: state.wishlistReducer.wishlist.length,
    cartCounter: state.cartReducer.cart.length,
  };
}

export default connect(mapStateToProps)(Header);
