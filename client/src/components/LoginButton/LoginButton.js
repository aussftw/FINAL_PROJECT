import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { logOut } from "../../store/actions/loginActions";
import { wishlistLogOut } from "../../store/actions/wishlist";
import { clearCart } from "../../store/actions/сart";
import useStyles from "./useStyles";
// import setAuthToken from "../common/setAuthToken";

// eslint-disable-next-line no-shadow
const LoginButton = ({
  isAuthenticated,
  user,
  // logOut, wishlistLogOut, clearCart
}) => {
  const classes = useStyles();

  // const signOut = e => {
  //   e.preventDefault();
  //   setAuthToken(false);
  //   logOut();
  //   wishlistLogOut();
  //   clearCart();
  // };

  return (
    <>
      {isAuthenticated ? (
        <>
          <span>Welcome, </span>
          <span>{`${user.firstName} ${user.lastName} `}</span>

          <Link to="/profile" className={classes.link}>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </Link>
          {/* <Button */}
          {/* className={classes.btn} */}
          {/* variant="outlined" */}
          {/* type="button" */}
          {/* onClick={signOut} */}
          {/* > */}
          {/* Sign Out */}
          {/* </Button> */}
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
    isAuthenticated: state.loginReducer.isAuthenticated,
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps, { logOut, wishlistLogOut, clearCart })(
  LoginButton
);
