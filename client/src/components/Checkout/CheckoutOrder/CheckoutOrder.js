import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button, Typography } from "@material-ui/core";
import CheckoutPayments from "./CheckoutPayment/CheckoutPayment";
import useStyles from "./useStyles";

const CheckoutOrder = ({ user, isAuthenticated, handleChange, handleSubmit }) => {
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
            <Typography className={classes.infoForUser}>You are new User.</Typography>
            <Typography className={classes.infoForUser}>Fill in this form, please.</Typography>
          </>
        )}
      <ValidatorForm
        noValidate={false}
        autoComplete="off"
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <TextValidator
          label="First Name"
          variant="outlined"
          name="firstName"
          value={user.firstName}
          onChange={e => handleChange(e)}
          className={classes.textField}
          validators={[
              "required",
            "matchRegexp:^[a-zA-Zа-яА-Я]{2,25}$",
            ]}
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
          onChange={handleChange}
          className={classes.textField}
          validators={["required", "matchRegexp:^[0-9-+\\s()]{13}$"]}
          errorMessages={[
              "this field is required",
              "phone is not valid, need +380... format",
            ]}
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
        <Button className={classes.submitBtn} type="submit">place order</Button>
      </ValidatorForm>
    </>
  );
};

export default CheckoutOrder;
