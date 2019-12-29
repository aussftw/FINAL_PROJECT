import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import useStyles from "./useStyles";

// const setAuthToken = token => {
//   if (token) {
// Apply to every request
// axios.defaults.headers.common['Authorization'] = token;
// } else {
// Delete auth header
//     delete axios.defaults.headers.common['Authorization'];
//   }
// };

export default function ChangePasswordForm() {
  const classes = useStyles();
  const [oldPasswordValue, setOldPasswordValue] = useState("");
  const [newPasswordValue, setNewPasswordValue] = useState("");
  const [
    confirmationNewPasswordValue,
    setConfirmationNewPasswordValue,
  ] = useState("");

  const tokenAuth =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMDc1NDlhMGM4OTBhMWQ1ODg3YzY2MCIsImZpcnN0TmFtZSI6IkV1Z2VuIiwibGFzdE5hbWUiOiJNYXJrb3YiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Nzc2MzQ1NTMsImV4cCI6MTU3NzY3MDU1M30.DEBvb_6o-65wjXpLKZQgi5i5RLE4u2zLkNbuoWyVlFo";

  const passwords = {
    password: oldPasswordValue,
    newPassword: newPasswordValue,
  };
  const savePassword = event => {
    event.preventDefault();
    if (newPasswordValue === confirmationNewPasswordValue) {
      axios.defaults.headers.common.Authorization = tokenAuth;
      axios
        .put("/customers/password", passwords)
        .then(updatedCustomer => console.log(updatedCustomer));
    } else {
      console.log(
        oldPasswordValue,
        newPasswordValue,
        confirmationNewPasswordValue
      );
    }
  };

  return (
    <div>
      <h2 className={classes.title}>Password Change</h2>
      <div className={classes.root}>
        <form className={classes.form} noValidate={false} autoComplete="off">
          <TextField
            id="customer-old-password-input"
            required
            label="Input old password"
            value={oldPasswordValue}
            variant="outlined"
            inputProps={{ type: "password", minlength: 8, maxlength: 16 }}
            onChange={event => setOldPasswordValue(event.target.value)}
          />
          <TextField
            id="customer-new-password-input"
            required
            label="Input new password"
            value={newPasswordValue}
            variant="outlined"
            inputProps={{ type: "password", minlength: 8, maxlength: 16 }}
            onChange={event => setNewPasswordValue(event.target.value)}
          />
          <TextField
            id="customer-confirm-password-input"
            required
            label="Confirm new password"
            value={confirmationNewPasswordValue}
            variant="outlined"
            inputProps={{ type: "password", minlength: 8, maxlength: 16 }}
            helperText="Your password must be 8-16 characters, and include..."
            onChange={event =>
              setConfirmationNewPasswordValue(event.target.value)
            }
          />
          {/* <input type="submit" onSubmit={savePassword} value="SAVE PASSWORD" /> */}
          <Button type="submit" onClick={savePassword}>
            SAVE PASSWORD
          </Button>
        </form>
      </div>
    </div>
  );
}
