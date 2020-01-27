import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import ProfileMenu from "../Header/ProfileMenu/ProfileMenu";
import useStyles from "./useStyles";

const LoginButton = ({
  isAuthenticated,
  user,
}) => {
  const classes = useStyles();


  return (
    <div className={classes.wrapper}>
      {isAuthenticated ? (
        <div className={classes.wrapper}>
          <div className={classes.span}>
            <Typography component="span">Welcome,</Typography>
            <Typography component="span">{` ${user.firstName} ${user.lastName}`}</Typography>
          </div>
          {/*<Link to="/profile" className={classes.link}>*/}
          {/*  <IconButton>*/}
          {/*    <AccountCircle />*/}
          {/*  </IconButton>*/}
          {/*</Link>*/}
          <ProfileMenu />
        </div>
      ) : (
        <Link to="/login" className={classes.link}>
          <Button className={classes.btn} variant="outlined" type="button">
            Sign In
          </Button>
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps)(
  LoginButton
);
