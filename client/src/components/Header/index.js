import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import TemporaryDrawer from './BurgerMenu/BurgerMenu';
import CustomizedSearch from './Search/Search';
import LoginButton from '../LoginButton/LoginButton';
import LoginForm from '../LoginForm';
import CartMiniButton from './CartMiniButton/CartMiniButton';
import useStyles from './useStyles';


import MobileSearch from './MobileSearch/MobileSearch';

const Header = ({ isAuthenticated, wishlistCounter, cartCounter }) => {
  const classes = useStyles();
  const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <div>
      <AppBar color="inherit" position="fixed">
        <Toolbar className={classes.flex}>
          <div className={classes.flex}>
            <TemporaryDrawer />
            <Link to="/">
              <img src="https://res.cloudinary.com/plantly/image/upload/v1582046905/Logo_d0lwiz.svg" alt="Plantly" className={classes.logo} />
            </Link>
            <MobileSearch />
          </div>
          <div className={classes.searchDesktop}>
            <CustomizedSearch />
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
              <CartMiniButton />
            ) : (
              <Link to="/cart" className={classes.link}>
                <IconButton aria-label="show cart" color="inherit">
                  <Badge badgeContent={cartCounter} color="primary">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <LoginForm />
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
