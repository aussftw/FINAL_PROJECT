import React, { useState } from "react";
import Redirect from "react-router-dom/Redirect";
import axios from "axios";
import RegistrationContent from "./RegistrationContent";

const RegistrationForm = () => {
  const [newUserData, setValues] = useState({
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    isAdmin: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(true);
  const [registration, setRegistration] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = prop => event => {
    setValues({ ...newUserData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  const submitRegistration = e => {
    e.preventDefault();
    console.log(newUserData);
    axios
      .post("/customers", newUserData)
      .then(response => {
        console.log(response);
        if (response.statusText === "OK") {
          setRegistration(true);
        }
      })
      .catch(error => {
        setMessage(error.message);
        console.log(error.response.data);
      });
  };

  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {open ? (
        registration ? (
          <Redirect to="/login" />
        ) : (
          <RegistrationContent
            handleClose={handleClose}
            submitRegistration={submitRegistration}
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            open={open}
            newUserData={newUserData}
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

export default RegistrationForm;
