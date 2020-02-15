import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const AdminHOC = (Component ) => {
  const Wrapper = ({ isAuthenticated , isAdmin }) => {
    if (isAuthenticated && isAdmin){
      return <Component />
    }else {
      return <Redirect to="/" />
    }
  };

  const mapStateToProps = state => {
    return{
      isAuthenticated: state.loginReducer.isAuthenticated,
      isAdmin: state.loginReducer.user.isAdmin,
    }
  };

  return connect(mapStateToProps)(Wrapper)
};
