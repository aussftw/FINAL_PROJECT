import React, { useState } from "react";
import Redirect from "react-router-dom/es/Redirect";
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

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = prop => event => {
    setValues({ ...newUserData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const submitRegistration = e => {
    e.preventDefault();
    handleClose();
    console.log(newUserData);
    axios
      .post("/customers", newUserData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };

  return (
    <>
      {open ? (
        <RegistrationContent
          handleClose={handleClose}
          submitRegistration={submitRegistration}
          handleMouseDownPassword={handleMouseDownPassword}
          handleChange={handleChange}
          handleClickShowPassword={handleClickShowPassword}
          open={open}
          newUserData={newUserData}
          showPassword={showPassword}
        />
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default RegistrationForm;
