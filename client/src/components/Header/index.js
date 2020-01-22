import React from "react";
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

const Header = () =>
  // { isAuthenticated, wishlistCounter }
  {
    const classes = useStyles();

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
                aria-label="show new products at cart"
                color="inherit"
              >
                <Badge badgeContent={8} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
              {/* <CartMini /> */}
              {/* <IconButton aria-label="show new products at wishlist" color="inherit"> */}
              {/*  <Badge badgeContent={wishlistCounter} color="primary"> */}
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
