import React, { useState, useRef } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import useStyles from "./useStyles"

import setAuthToken from "../../common/setAuthToken";
import {logOut} from "../../../store/actions/loginActions";
import {wishlistLogOut} from "../../../store/actions/wishlist";
import {clearCart} from "../../../store/actions/сart";

const ProfileMenu = ( {isAdmin, logOff, wishlistLogOff, clearPersonalCart } ) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  const profileLogOut = () => {
    setAuthToken(false);
    wishlistLogOff();
    logOff();
    clearPersonalCart();
  };

  return (
    <div className={classes.root}>
      <IconButton
        className={classes.icon}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <AccountCircle />
      </IconButton>
      <Popper className={classes.paper} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList className={classes.list} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <Link to="/profile" className={classes.text}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>
                  {isAdmin && (
                  <Link to="/admin" className={classes.text}>
                    <MenuItem onClick={handleClose}>Admin Panel</MenuItem>
                  </Link>
                  )}
                  <MenuItem className={classes.text} onClick={profileLogOut}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
          )}
      </Popper>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAdmin: state.loginReducer.user.isAdmin,
  };
}

export default connect(mapStateToProps, {
  logOff: logOut,
  wishlistLogOff: wishlistLogOut,
  clearPersonalCart: clearCart,
})(ProfileMenu);
