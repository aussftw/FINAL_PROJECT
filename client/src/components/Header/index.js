import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./BurgerPanel";
import CustomizedSearch from "./Search";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    height: "45px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="inherit" position="fixed">
        <Toolbar className={classes.flex}>
          <div className={classes.flex}>
            <TemporaryDrawer className={classes.sectionMobile} />
            <Link to="/">
              <img src="./img/Logo.svg" alt="logo" className={classes.logo} />
            </Link>
          </div>
          <div>
            <CustomizedSearch />
          </div>
          <div>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={8} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={5} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
