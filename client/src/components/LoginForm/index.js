import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import LoginContent from "./LoginContent";

const LoginForm = () => {
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

  const submitLogin = e => {
    e.preventDefault();
    axios
      .post("/customers/login", userData)
      .then(response => {
        console.log(response);
        if (response.statusText === "OK") {
          setIsLogin(true);
        }
      })
      .catch(err => {
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

export default LoginForm;
