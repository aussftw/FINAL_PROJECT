import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { logOut } from "../../store/actions/loginActions";
import { wishlistLogOut } from "../../store/actions/wishlist";
import useStyles from "./useStyles";
import setAuthToken from "../common/setAuthToken";

// eslint-disable-next-line no-shadow
const LoginButton = ({ logOut, isAuthenticated, user, wishlistLogOut }) => {
  const classes = useStyles();

  const signOut = e => {
    e.preventDefault();
    setAuthToken(false);
    logOut();
    wishlistLogOut();
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <span>Welcome, </span>
          <span>{`${user.firstName} ${user.lastName} `}</span>

          <Link to="/api/profile" className={classes.link}>
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
        <Link to="/api/login" className={classes.link}>
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
    isAuthenticated: state.loginReducer.isAuthenticated,
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps, { logOut, wishlistLogOut })(
  LoginButton
);
