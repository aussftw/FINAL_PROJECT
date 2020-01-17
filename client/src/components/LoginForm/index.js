import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Redirect } from "react-router-dom";
import LoginContent from "./LoginContent";
import setAuthToken from "../common/setAuthToken";
import { logIn } from "../../store/actions";

// eslint-disable-next-line no-shadow
const LoginForm = ({ logIn }) => {
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setValues] = useState({
    loginOrEmail: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleOpen = () => {
    setOpen(false);
  };

  const handleChange = prop => event => {
    setValues({ ...userData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  const getUser = () => {
    axios
      .get("/customers/customer")
      .then(response => {
        // eslint-disable-next-line no-console
        console.log("Our User", response);
        logIn(response.data);
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };

  const submitLogin = e => {
    e.preventDefault();
    axios
      .post("/customers/login", userData)
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response.data.token);
        if (response.statusText === "OK" && response.data.success) {
          setIsLogin(true);
          // eslint-disable-next-line no-console
          console.log(response);
          // eslint-disable-next-line no-undef
          localStorage.setItem("authToken", response.data.token);
          setAuthToken(response.data.token);
          getUser();
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err.response.data);
        setMessage(err.message);
      });
  };

  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {open ? (
        isLogin ? (
          <Redirect to="/" />
        ) : (
          <LoginContent
            handleOpen={handleOpen}
            submitLogin={submitLogin}
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            open={open}
            userData={userData}
            showPassword={showPassword}
            message={message}
          />
        )
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default connect(null, { logIn })(LoginForm);
