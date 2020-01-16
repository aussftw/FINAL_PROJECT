import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
// import Badge from "@material-ui/core/Badge";
// import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./BurgerMenu/BurgerMenu";
import CustomizedSearch from "./Search/Search";
import LoginButton from "../LoginButton/LoginButton";
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
            <LoginButton />
            {/* <IconButton aria-label="show 4 new mails" color="inherit"> */}
            {/*  <Badge badgeContent={8} color="secondary"> */}
            {/*    <MailIcon /> */}
            {/*  </Badge> */}
            {/* </IconButton> */}
            {/* <IconButton aria-label="show 17 new notifications" color="inherit"> */}
            {/*  <Badge badgeContent={5} color="secondary"> */}
            {/*    <NotificationsIcon /> */}
            {/*  </Badge> */}
            {/* </IconButton> */}

            {/* <div className={classes.sectionMobile}> */}
            {/*  <IconButton */}
            {/*      aria-label="show more" */}
            {/*      aria-controls={mobileMenuId} */}
            {/*      aria-haspopup="true" */}
            {/*      onClick={handleMobileMenuOpen} */}
            {/*      color="inherit" */}
            {/*  > */}
            {/*    <MoreIcon /> */}
            {/*  </IconButton> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
