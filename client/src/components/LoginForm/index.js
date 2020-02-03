import React from "react";
import {connect} from "react-redux";
import LoginContent from "./LoginContent";
import {logIn, modalClose} from '../../store/actions/loginActions';

const LoginForm = ({logIn, isAuthenticatedUser, error, modal, modalClose}) => {
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
    modalClose();
  };

  const submitLogin = (e, user) => {
    e.preventDefault();
    logIn(user);
  };

  return (
    <>
      <LoginContent
        handleOpen={handleOpen}
        submitLogin={submitLogin}
        open={modal}
        message={error !== "" ? handleError(error) : ""}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticatedUser: state.loginReducer.isAuthenticated,
    error: state.loginReducer.error,
    modal: state.loginReducer.modalOpen,
  };
};

export default connect(mapStateToProps, {logIn, modalClose})(LoginForm);
