import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { saveUserData } from "../../../store/actions/userProfile";
import useStyles from "./useStyles";

function PersonalData({
  user,
  saveUserPersonalData,
  error,
}) {
  const classes = useStyles();
  const [isEditable, setIsEditable] = useState(false);
  const [userData, setUserData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    telephone: user.telephone,
  });

  const matches = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const editData = event => {
    event.preventDefault();
    setIsEditable(true);
  };

  const saveData = event => {
    saveUserPersonalData(event, userData);
    if (!error) {
      setIsEditable(false);
    }
  };

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Typography className={classes.title} variant="h3">Personal details</Typography>
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
            value={userData.firstName}
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
            value={userData.lastName}
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
            value={userData.email}
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
            value={userData.telephone}
            size={matches ? "small" : null}
            variant={isEditable ? "outlined" : "standard"}
            inputProps={{
              name: "telephone",
              type: "tel",
            }}
            onChange={handleChange}
            validators={["matchRegexp:^3?8?[0-9-+\\s()]{10,18}$"]}
            errorMessages={["phone is not valid, need minimum 10 figures, country code is preferable",]}
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
          <Typography className={classes.message}>
            {`Data didn't save. Error: ${error.message}`}
          </Typography>
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

export default connect(mapStateToProps, { saveUserPersonalData: saveUserData })(PersonalData);
