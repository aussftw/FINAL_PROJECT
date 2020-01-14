import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import axios from "axios";
import useStyles from "./useStyles";

export default function DeliveryAddressForm() {
  const classes = useStyles();
  const [addressValue, setAddressValue] = useState("");
  const [message, setMessage] = useState("");

  const tokenAuth =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMDc1NDlhMGM4OTBhMWQ1ODg3YzY2MCIsImZpcnN0TmFtZSI6IkV1Z2VuaXkiLCJsYXN0TmFtZSI6Ik1hcmtvdiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3ODc0MjA1MCwiZXhwIjoxNTc4Nzc4MDUwfQ.ljSKSegF-2QlO3Eh39tkmFZKLmshZYISFROkHy5AFNg";

  const address = { address: addressValue };

  const addAddress = event => {
    event.preventDefault();
    axios.defaults.headers.common.Authorization = tokenAuth;
    axios
      .put("/customers", address)
      .then(updatedCustomer => {
        setMessage(updatedCustomer.data.message);
        console.log(updatedCustomer);
      })
      .catch(error => setMessage(`Error: ${error.message}`));
  };

  return (
    <div>
      <h2 className={classes.title}>Delivery Address</h2>
      <div className={classes.root}>
        <ValidatorForm
          className={classes.form}
          noValidate={false}
          autoComplete="off"
          onSubmit={addAddress}
        >
          <TextValidator
            id="delivery-address-input"
            label="Delivery address"
            value={addressValue}
            variant="outlined"
            multiline
            rowsMax="4"
            inputProps={{ minLength: 10, maxLength: 100 }}
            placeholder="Your address"
            onChange={event => setAddressValue(event.target.value)}
            validators={[
              "required",
              "matchRegexp:^[A-Za-z0-9'\\.\\-\\s\\,]{10,100}$",
            ]}
            errorMessages={[
              "this field is required",
              "address must be 10-100 characters, including only latin letters, numbers, commas and points",
            ]}
          />
          <Button type="submit">ADD ADDRESS</Button>
        </ValidatorForm>
        {Boolean(message) && <p>{message}</p>}
      </div>
    </div>
  );
}
