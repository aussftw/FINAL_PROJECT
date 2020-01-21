import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginContent from "./LoginContent";
import { logIn } from "../../store/actions/loginActions";
import { getWishlist } from "../../store/actions/Wishlist";

// eslint-disable-next-line no-shadow
const LoginForm = ({ logIn, isAuthenticated, error, getWishlist }) => {
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setValues] = useState({
    loginOrEmail: "",
    password: "",
  });

  // eslint-disable-next-line no-shadow
  const handleError = error => {
    console.log(error);
    if (error.response.data.loginOrEmail) {
      return error.response.data.loginOrEmail;
    }
    if (error.response.data.password) {
      return error.response.data.password;
    }
    return error.message;
  };

  const handleOpen = () => {
    setOpen(false);
  };

  const handleChange = prop => event => {
    setValues({ ...user, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  // eslint-disable-next-line no-shadow
  const submitLogin = e => {
    e.preventDefault();
    logIn(user);
    getWishlist();
  };

  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {open ? (
        isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <LoginContent
            handleOpen={handleOpen}
            submitLogin={submitLogin}
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            open={open}
            user={user}
            showPassword={showPassword}
            message={error !== "" ? handleError(error) : ""}
          />
        )
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    error: state.loginReducer.error,
  };
};

export default connect(mapStateToProps, { logIn, getWishlist })(LoginForm);
