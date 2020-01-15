import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";
import useStyles from "./useStyles";

export default function ChangePasswordForm() {
  const classes = useStyles();
  const [oldPasswordValue, setOldPasswordValue] = useState("");
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [
    confirmationNewPasswordValue,
    setConfirmationNewPasswordValue,
  ] = useState("");
  const [message, setMessage] = useState("");

  // const tokenAuth = localStorage.getItem("authToken");

  const passwords = {
    password: oldPasswordValue,
    newPassword: newPasswordValue,
  };

  const savePassword = event => {
    event.preventDefault();
    setMessage("");
    if (newPasswordValue === confirmationNewPasswordValue) {
      // axios.defaults.headers.common.Authorization = tokenAuth;
      axios
        .put("/customers/password", passwords)
        .then(updatedCustomer => {
          if (updatedCustomer.data.password) {
            setMessage(updatedCustomer.data.password);
          } else {
            setMessage(updatedCustomer.data.message);
          }
          console.log(updatedCustomer);
        })
        .catch(error => setMessage(`Error: ${error.message}`));
    } else {
      setMessage("Passwords don't match");
    }
  };

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      return value === newPasswordValue;
    });
  }, [newPasswordValue]);

  return (
    <div>
      <h2 className={classes.title}>Password Change</h2>
      <div className={classes.root}>
        <ValidatorForm
          className={classes.form}
          noValidate={false}
          autoComplete="off"
          onSubmit={savePassword}
        >
          <TextValidator
            id="customer-old-password-input"
            label="Input old password"
            value={oldPasswordValue}
            variant="outlined"
            inputProps={{ type: "password", minLength: 8, maxLength: 16 }}
            onChange={event => setOldPasswordValue(event.target.value)}
            validators={["required", "matchRegexp:^[a-zA-Z0-9]{8,16}$"]}
            errorMessages={[
              "this field is required",
              "Your password must be 8-16 characters, including only latin letters and numbers",
            ]}
          />
          <TextValidator
            id="customer-new-password-input"
            label="Input new password"
            value={newPasswordValue}
            variant="outlined"
            inputProps={{ type: "password", minLength: 8, maxLength: 16 }}
            onChange={event => setNewPasswordValue(event.target.value)}
            validators={["required", "matchRegexp:^[a-zA-Z0-9]{8,16}$"]}
            errorMessages={[
              "this field is required",
              "Your password must be 8-16 characters, including only latin letters and numbers",
            ]}
          />
          <TextValidator
            id="customer-confirm-password-input"
            label="Confirm new password"
            value={confirmationNewPasswordValue}
            variant="outlined"
            inputProps={{ type: "password", minLength: 8, maxLength: 16 }}
            onChange={event =>
              setConfirmationNewPasswordValue(event.target.value)
            }
            validators={[
              "required",
              "matchRegexp:^[a-zA-Z0-9]+$",
              "isPasswordMatch",
            ]}
            errorMessages={[
              "this field is required",
              "Your password must be 8-16 characters, including only latin letters and numbers",
              "password mismatch",
            ]}
          />
          {/* <input type="submit" onSubmit={savePassword} value="SAVE PASSWORD" /> */}
          <Button type="submit">SAVE PASSWORD</Button>
        </ValidatorForm>
        {Boolean(message) && <p className={classes.message}>{message}</p>}
      </div>
    </div>
  );
}
