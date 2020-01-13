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

  const handleOpen = () => {
    setOpen(false);
  };

  const handleChange = prop => event => {
    setValues({ ...userData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const submitLogin = e => {
    e.preventDefault();
    handleOpen();
    console.log(userData);
    axios
      .post("/customers/login", userData)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      {open ? (
        <LoginContent
          handleOpen={handleOpen}
          submitLogin={submitLogin}
          handleMouseDownPassword={handleMouseDownPassword}
          handleChange={handleChange}
          handleClickShowPassword={handleClickShowPassword}
          open={open}
          userData={userData}
          showPassword={showPassword}
        />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default LoginForm;
