import React, { useState, useRef } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {connect} from "react-redux";
import MenuList from "@material-ui/core/MenuList";
import CartMini from "./CartMini/CartMini";
import useStyles from "./useStyles"


const CartMiniButton = ({cartCounter}) => {
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

  return (
    <div className={classes.root}>
      <IconButton
        aria-label="show cart"
        color="inherit"
        className={classes.icon}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Badge badgeContent={cartCounter} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>

      <Popper className={classes.paper} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList className={classes.list} autoFocusItem={open} id="menu-list-grow">
                  <CartMini />
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
    cartCounter: state.cartReducer.cart.length,
  };
}

export default connect(mapStateToProps)(CartMiniButton);