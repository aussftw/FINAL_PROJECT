import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import LoginContent from "./LoginContent";
import { logIn } from "../../store/actions/loginActions";

// eslint-disable-next-line no-shadow
const LoginForm = ({ logIn, isAuthenticatedUser, error }) => {
  const [open, setOpen] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  console.log(history);
  // eslint-disable-next-line no-shadow
  const handleError = error => {
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

  // eslint-disable-next-line no-shadow
  const submitLogin = (e, user) => {
    e.preventDefault();
    logIn(user);
  };

  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {open ? (
        isAuthenticatedUser ? (
          history.goBack()
        ) : (
          <LoginContent
            handleOpen={handleOpen}
            submitLogin={submitLogin}
            open={open}
            message={error !== "" ? handleError(error) : ""}
          />
        )
      ) : (
        history.goBack()
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticatedUser: state.loginReducer.isAuthenticated,
    error: state.loginReducer.error,
  };
};

export default connect(mapStateToProps, { logIn })(LoginForm);
