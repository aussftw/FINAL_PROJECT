import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./BurgerMenu/BurgerMenu";
import CustomizedSearch from "./Search/Search";
import MainButton from "../common/buttons/MainButton";
import useStyles from "./useStyles";

const Header = () => {
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
            <Link to="/login">
              <MainButton // Need a new component here
                text="Sign In"
                variant="outline"
                type="button"
              />
            </Link>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={8} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
