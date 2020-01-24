import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
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
  const [submitRegistration, setSubmitRegistration] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = prop => event => {
    setValues({ ...newUserData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  useEffect(() => {
    if (submitRegistration) {
      axios
        .post("/api/customers", newUserData)
        .then(response => {
          // eslint-disable-next-line no-console
          console.log(response);
          if (response.statusText === "OK") {
            setRegistration(true);
          }
        })
        .catch(error => {
          setMessage(error);
        });
    }
  }, [submitRegistration, newUserData]);

  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {open ? (
        registration ? (
          <Redirect to="/login" />
        ) : (
          <RegistrationContent
            handleClose={handleClose}
            setSubmitRegistration={setSubmitRegistration}
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
