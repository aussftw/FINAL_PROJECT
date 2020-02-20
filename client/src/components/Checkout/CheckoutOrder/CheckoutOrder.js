import React from "react";
import { TextValidator } from "react-material-ui-form-validator";
import { Typography } from "@material-ui/core";
import CheckoutPayments from "./CheckoutPayment/CheckoutPayment";
import useStyles from "./useStyles";

const CheckoutOrder = ({ user, isAuthenticated, handleChange }) => {
  const classes = useStyles();

  return (
    <>
      {isAuthenticated ? (
        <>
          <Typography className={classes.infoForUser}>
            {`${user.firstName}, fill in this form, please.`}
          </Typography>
        </>
      ) : (
        <>
          <Typography className={classes.infoForUser}>
            You are new User.
          </Typography>
          <Typography className={classes.infoForUser}>
            Fill in this form, please.
          </Typography>
        </>
      )}
      <TextValidator
        label="First Name"
        variant="outlined"
        name="firstName"
        value={user.firstName}
        onChange={e => handleChange(e)}
        className={classes.textField}
        validators={["required", "matchRegexp:^[a-zA-Zа-яА-Я]{2,25}$"]}
        errorMessages={[
          "this field is required",
          "Your name must be more then 2 characters, including only latin letters",
        ]}
      />
      <TextValidator
        label="Email"
        variant="outlined"
        name="email"
        value={user.email}
        onChange={e => handleChange(e)}
        className={classes.textField}
        validators={["required", "isEmail"]}
        errorMessages={["this field is required", "email is not valid"]}
      />
      <TextValidator
        label="Telephone"
        variant="outlined"
        name="telephone"
        value={user.telephone}
        onChange={e => handleChange(e)}
        className={classes.textField}
        validators={["matchRegexp:^3?8?[0-9-+\\s()]{10,18}$"]}
        errorMessages={["phone is not valid, need minimum 10 figures, country code is preferable",]}
      />
      <TextValidator
        label="Delivery address"
        variant="outlined"
        name="address"
        value={user.address}
        onChange={e => handleChange(e)}
        className={classes.textField}
        validators={[
          "required",
          "matchRegexp:^[A-Za-zа-яА-Я0-9'\\.\\-\\s\\,]{10,100}$",
        ]}
        errorMessages={[
          "this field is required",
          "address must be 10-100 characters, including only letters, numbers, commas and points",
        ]}
      />
      <CheckoutPayments />
    </>
  );
};

export default CheckoutOrder;
