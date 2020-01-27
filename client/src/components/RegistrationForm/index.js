import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import RegistrationContent from './RegistrationContent';

const RegistrationForm = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    telephone: '',
    address: '',
    isAdmin: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(true);
  const [registration, setRegistration] = useState(false);
  const [message, setMessage] = useState('');
  const [submitRegistration, setSubmitRegistration] = useState(false);

  const updateUser = useCallback(() => {
    const newUserData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      login: userData.login,
      email: userData.email,
      password: userData.password,
      isAdmin: false,
    };

    if (userData.telephone) {
      newUserData.telephone = userData.telephone;
    }

    if (userData.address) {
      newUserData.address = userData.address;
    }
    return newUserData;
  },[userData]);

  const handleError = error => {
    switch (error) {
      case error.response.data.firstName:
        return error.response.data.firstName;
      case error.response.data.lastName:
        return error.response.data.lastName;
      case error.response.data.login:
        return error.response.data.login;
      case error.response.data.email:
        return error.response.data.email;
      case error.response.data.password:
        return error.response.data.password;
      case error.response.data.telephone:
        return error.response.data.telephone;
      case error.response.data.address:
        return error.response.data.address;
      default:
        return error.response.data.message;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  useEffect(() => {
    if (submitRegistration) {
      const user = updateUser();
      axios
        .post('/api/customers', user)
        .then(response => {
          if (response.statusText === 'OK') {
            setRegistration(true);
          }
        })
        .catch(error => {
          if (error.statusText === "Not Found" && error.status === 404){
            setMessage(error.message);
          }else {
            setMessage(handleError(error));
          }
         setSubmitRegistration(false);
        });
    }
  }, [submitRegistration , updateUser]);

  return (
    <>
      {/* eslint-disable-next-line no-nested-ternary */}
      {open ? (
        registration ? (
          history.push("login")
        ) : (
          <RegistrationContent
            handleClose={handleClose}
            setSubmitRegistration={setSubmitRegistration}
            handleChange={handleChange}
            handleClickShowPassword={handleClickShowPassword}
            open={open}
            newUserData={userData}
            showPassword={showPassword}
            message={message}
          />
        )
      ) : (
        history.push("/")
      )}
    </>
  );
};

export default RegistrationForm;
