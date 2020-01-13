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
    console.log(userData);
    axios
      .post("/customers/logincddfs", userData)
      .then(response => {
        console.log(response);
        if (response.statusText === "OK") {
          setMessage("Login complete !");
        }
      })
      .catch(err => {
        console.log(err.response.data);
        setMessage(err.message);
      });
  };

  return (
    <>
      {open ? (
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
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default LoginForm;
