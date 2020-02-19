import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const AuthHOC = (Component ) => {
    const Wrapper = ({ isAuthenticated }) => {
      if (isAuthenticated){
        return <Component />
      }else {
        return <Redirect to="/" />
      }
    };

    const mapStateToProps = state => {
      return{
        isAuthenticated: state.loginReducer.isAuthenticated,
      }
    };

    return connect(mapStateToProps)(Wrapper)
};
