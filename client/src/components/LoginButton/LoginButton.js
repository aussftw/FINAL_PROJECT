import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { logOut } from "../../store/actions/loginActions";
import useStyles from "./useStyles";
import setAuthToken from "../common/setAuthToken";

// eslint-disable-next-line no-shadow
const LoginButton = ({ logOut, isAuthenticated, userData }) => {
  const classes = useStyles();
  console.log(isAuthenticated);

  const signOut = e => {
    e.preventDefault();
    setAuthToken(false);
    // eslint-disable-next-line no-undef
    localStorage.removeItem("authToken");
    logOut();
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <Link to="/profile" className={classes.link}>
            <span>{`${userData.firstName} ${userData.lastName}`}</span>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </Link>
          <Button
            className={classes.btn}
            variant="outlined"
            type="button"
            onClick={signOut}
          >
            Sign Out
          </Button>
        </>
      ) : (
        <Link to="/login" className={classes.link}>
          <Button className={classes.btn} variant="outlined" type="button">
            Sign In
          </Button>
        </Link>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    userData: state.user.userData,
  };
};

export default connect(mapStateToProps, { logOut })(LoginButton);
