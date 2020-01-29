import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
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
            <Typography component="span">Welcome,&nbsp;</Typography>
            <Typography component="span">{` ${user.firstName}`}</Typography>
            {/* className={classes.span} */}
          </div>
          <ProfileMenu />
        </div>
      ) : (
        <Link to="/login" className={classes.link}>
          <Button variant="contained" type="button">
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
