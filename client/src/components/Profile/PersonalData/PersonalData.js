import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  saveUserData,
  editInputsData,
} from "../../../store/actions/UserProfile";
import useStyles from "./useStyles";

// eslint-disable-next-line no-shadow
function PersonalData({ user, saveUserData, editInputsData, error }) {
  const classes = useStyles();
  const [isEditable, setIsEditable] = useState(false);

  const editData = event => {
    event.preventDefault();
    setIsEditable(true);
  };
  const saveData = event => {
    saveUserData(event, user);
    setIsEditable(false);
  };

  const handleChange = event => {
    editInputsData(event, user);
  };

  return (
    <div>
      <h2 className={classes.title}>Personal Details</h2>
      <div className={classes.root}>
        <ValidatorForm
          className={classes.form}
          noValidate={false}
          autoComplete="off"
          onSubmit={saveData}
        >
          <TextValidator
            id="customer-name-input"
            disabled={!isEditable}
            label="First Name"
            value={user.firstName}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "firstName",
            }}
            onChange={handleChange}
            validators={["required", "matchRegexp:^[a-zA-Zа-яА-Я]{2,25}$"]}
            errorMessages={[
              "this field is required",
              "name must be between 2 and 25 characters, only a-z, A-Z, а-я, А-Я.",
            ]}
          />
          <TextValidator
            id="customer-last-name-input"
            disabled={!isEditable}
            label="Last Name"
            value={user.lastName}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "lastName",
            }}
            onChange={handleChange}
            validators={["required", "matchRegexp:^[a-zA-Zа-яА-Я]{2,25}$"]}
            errorMessages={[
              "this field is required",
              "name must be between 2 and 25 characters, only a-z, A-Z, а-я, А-Я.",
            ]}
          />
          <TextValidator
            id="customer-email-input"
            disabled={!isEditable}
            label="Email"
            value={user.email}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "email",
            }}
            onChange={handleChange}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
          <TextValidator
            id="customer-phone-input"
            disabled={!isEditable}
            label="Phone Number"
            type="tel"
            value={user.telephone}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "telephone",
              type: "tel",
            }}
            onChange={handleChange}
            validators={["required", "matchRegexp:^[0-9-+\\s()]{13}$"]}
            errorMessages={[
              "this field is required",
              "phone is not valid, need +380... format",
            ]}
          />
          {isEditable ? (
            <Button type="submit">SAVE DATA</Button>
          ) : (
            <Button onClick={editData}>EDIT PERSONAL DATA</Button>
          )}
        </ValidatorForm>
        {Boolean(error) && <p className={classes.message}>{error.message}</p>}
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
  PersonalData
);
