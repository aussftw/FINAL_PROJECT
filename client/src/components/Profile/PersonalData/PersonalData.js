import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  saveUserData,
  editInputsData,
} from "../../../store/actions/userProfile";
import useStyles from "./useStyles";

// eslint-disable-next-line no-shadow
function PersonalData({ user, saveUserData, editInputsData, error }) {
  const classes = useStyles();
  const [isEditable, setIsEditable] = useState(false);
  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const editData = event => {
    event.preventDefault();
    setIsEditable(true);
  };
  const saveData = event => {
    saveUserData(event, user);
    if (!error) {
      setIsEditable(false);
    }
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
            InputLabelProps={{ className: classes.input }}
            value={user.firstName}
            size={matches ? "small" : null}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "firstName",
              minLength: 2,
              maxLength: 25,
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
            InputLabelProps={{ className: classes.input }}
            value={user.lastName}
            size={matches ? "small" : null}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "lastName",
              minLength: 2,
              maxLength: 25,
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
            InputLabelProps={{ className: classes.input }}
            value={user.email}
            size={matches ? "small" : null}
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
            InputLabelProps={{ className: classes.input }}
            type="tel"
            value={user.telephone}
            size={matches ? "small" : null}
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
            <Button className={classes.btn} type="submit">
              SAVE DATA
            </Button>
          ) : (
            <Button className={classes.btn} onClick={editData}>
              EDIT PERSONAL DATA
            </Button>
          )}
        </ValidatorForm>
        {Boolean(error) && (
          <p className={classes.message}>
            {`Data didn't save. Error: ${error.message}`}
          </p>
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
  PersonalData
);
