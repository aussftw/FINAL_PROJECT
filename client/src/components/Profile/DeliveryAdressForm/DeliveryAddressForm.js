import React from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import useStyles from "./useStyles";
import {
  saveUserData,
  editInputsData,
} from "../../../store/actions/userProfile";

// eslint-disable-next-line no-shadow
function DeliveryAddressForm({ user, saveUserData, editInputsData, error }) {
  const classes = useStyles();

  const saveAddress = event => {
    saveUserData(event, user);
  };

  const handleChange = event => {
    editInputsData(event, user);
  };

  return (
    <div>
      <h2 className={classes.title}>Delivery Address</h2>
      <div className={classes.root}>
        <ValidatorForm
          className={classes.form}
          noValidate={false}
          autoComplete="off"
          onSubmit={saveAddress}
        >
          <TextValidator
            id="delivery-address-input"
            label="Delivery address"
            InputLabelProps={{ className: classes.input }}
            value={user.address}
            variant="outlined"
            multiline
            rowsMax="8"
            inputProps={{ name: "address", minLength: 10, maxLength: 100 }}
            placeholder="Your address"
            onChange={handleChange}
            validators={[
              "required",
              "matchRegexp:^[A-Za-zа-яА-Я0-9'\\.\\-\\s\\,]{10,100}$",
            ]}
            errorMessages={[
              "this field is required",
              "address must be 10-100 characters, including only letters, numbers, commas and points",
            ]}
          />
          <Button className={classes.btn} type="submit">
            ADD ADDRESS
          </Button>
        </ValidatorForm>
        {Boolean(error) && (
          <p
            className={classes.message}
          >{`Data didn't save. Error: ${error.message}`}</p>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.loginReducer.user,
    error: state.loginReducer.error,
  };
}

export default connect(mapStateToProps, { saveUserData, editInputsData })(
  DeliveryAddressForm
);
