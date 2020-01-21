import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import TemporaryDrawer from "./BurgerMenu/BurgerMenu";
import CustomizedSearch from "./Search/Search";
import LoginButton from "../LoginButton/LoginButton";

import useStyles from "./useStyles";
import CartMini from "./CartMini/CartMini";

const Header = () =>
  // { isAuthenticated, wishlistCounter }
  {
    const classes = useStyles();

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
                <img src="./img/Logo.svg" alt="logo" className={classes.logo} />
              </Link>
            </div>
            <div>
              <CustomizedSearch className={classes.searchDesktop} />
            </div>
            <div>
              <LoginButton />
              <IconButton
                aria-label="show new mails"
                color="inherit"
                onClick={cartToggling}
              >
                <Badge badgeContent={8} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
              {isCartOpened ? <CartMini /> : <div />}
              {/* <IconButton aria-label="show 17 new notifications" color="inherit"> */}
              {/*  <Badge badgeContent={5} color="primary"> */}
              {/*    <FavoriteBorderIcon /> */}
              {/*  </Badge> */}
              {/* </IconButton> */}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  };

// function mapStateToProps(state) {
//   return {
//     isAuthenticated: state.loginReducer.isAuthenticated,
//     wishlistCounter: state.wishlistReducer.wishlist.length,
//     error: state.wishlistReducer.error,
//   };
// }

export default connect()(Header);
// mapStateToProps
