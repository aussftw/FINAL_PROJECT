import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const passwords = {
    password: oldPasswordValue,
    newPassword: newPasswordValue,
  };

  const savePassword = event => {
    event.preventDefault();
    setMessage("");
    if (newPasswordValue === confirmationNewPasswordValue) {
      axios
        .put("/customers/password", passwords)
        .then(updatedCustomer => {
          if (updatedCustomer.data.password) {
            setMessage(updatedCustomer.data.password);
          } else {
            setMessage(updatedCustomer.data.message);
          }
          // eslint-disable-next-line no-console
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
            label="Old password"
            value={oldPasswordValue}
            size={matches ? "small" : null}
            variant="outlined"
            inputProps={{ type: "password", minLength: 8, maxLength: 20 }}
            onChange={event => setOldPasswordValue(event.target.value)}
            validators={["required", "matchRegexp:^[a-zA-Z0-9]{8,20}$"]}
            errorMessages={[
              "this field is required",
              "Your password must be 8-20 characters, including only latin letters and numbers",
            ]}
          />
          <TextValidator
            id="customer-new-password-input"
            label="New password"
            value={newPasswordValue}
            size={matches ? "small" : null}
            variant="outlined"
            inputProps={{ type: "password", minLength: 8, maxLength: 20 }}
            onChange={event => setNewPasswordValue(event.target.value)}
            validators={["required", "matchRegexp:^[a-zA-Z0-9]{8,20}$"]}
            errorMessages={[
              "this field is required",
              "Your password must be 8-20 characters, including only latin letters and numbers",
            ]}
          />
          <TextValidator
            id="customer-confirm-password-input"
            label="Confirm password"
            value={confirmationNewPasswordValue}
            size={matches ? "small" : null}
            variant="outlined"
            inputProps={{ type: "password", minLength: 8, maxLength: 20 }}
            onChange={event =>
              setConfirmationNewPasswordValue(event.target.value)
            }
            validators={[
              "required",
              "matchRegexp:^[a-zA-Z0-9]{8,20}$",
              "isPasswordMatch",
            ]}
            errorMessages={[
              "this field is required",
              "Your password must be 8-20 characters, including only latin letters and numbers",
              "password mismatch",
            ]}
          />
          <Button className={classes.btn} type="submit">
            SAVE PASSWORD
          </Button>
        </ValidatorForm>
        {Boolean(message) && <p className={classes.message}>{message}</p>}
      </div>
    </div>
  );
}
