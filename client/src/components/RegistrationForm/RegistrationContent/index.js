import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useStyles from "./useStyles";

const RegistrationContent = ({
  setSubmitRegistration,
  handleChange,
  handleClickShowPassword,
  newUserData,
  showPassword,
  message,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <div className={classes.wrapper}>
        <h3 className={classes.title}>Registration Form</h3>
        <ValidatorForm
          noValidate={false}
          onSubmit={() => setSubmitRegistration(true)}
          autoComplete="off"
        >
          <TextValidator
            label="First Name"
            variant="outlined"
            name="firstName"
            value={newUserData.firstName}
            onChange={handleChange}
            className={classes.textField}
            validators={["required", "matchRegexp:^[`'\"()A-Za-zd.s_-]{2,50}$"]}
            errorMessages={[
              "this field is required",
              "Your name must be more then 2 characters, including only latin letters",
            ]}
          />
          <TextValidator
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={newUserData.lastName}
            onChange={handleChange}
            className={classes.textField}
            validators={["matchRegexp:^[`'\"()A-Za-zd.s_-]{2,50}$", "required"]}
            errorMessages={[
              "Your name must be more then 2 characters, including only latin letters",
              "this field is required",
            ]}
          />
          <TextValidator
            label="Login"
            variant="outlined"
            name="login"
            value={newUserData.login}
            onChange={handleChange}
            className={classes.textField}
            validators={["required", "matchRegexp:^[a-zA-Z0-9]{3,22}$"]}
            errorMessages={[
              "this field is required",
              "Your login must be 3-22 characters, including only latin letters and numbers",
            ]}
          />
          <TextValidator
            label="Email"
            variant="outlined"
            name="email"
            value={newUserData.email}
            onChange={handleChange}
            className={classes.textField}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />

          <TextValidator
            className={classes.textField}
            variant="outlined"
            label="Password"
            name="password"
            value={newUserData.password}
            onChange={handleChange}
            InputProps={{
              type: showPassword ? "text" : "password",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {newUserData.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            validators={["required", "matchRegexp:^[a-zA-Z0-9]{8,16}$"]}
            errorMessages={[
              "this field is required",
              "Your password must be 8-16 characters, including only latin letters and numbers",
            ]}
          />
          <TextValidator
            label="Telephone"
            variant="outlined"
            name="telephone"
            value={newUserData.telephone}
            onChange={handleChange}
            className={classes.textField}
            validators={["matchRegexp:^3?8?[0-9-+\\s()]{10,18}$"]}
            errorMessages={["phone is not valid, need minimum 10 figures, country code is preferable",]}
          />
          <TextValidator
            label="Address"
            variant="outlined"
            name="address"
            value={newUserData.address}
            onChange={handleChange}
            className={classes.textField}
          />
          <Button type="submit" variant="outlined" className={classes.btn}>
            Registration
          </Button>
        </ValidatorForm>
        {Boolean(message) && <p className={classes.errText}>{message}</p>}
      </div>
    </div>
  );
};

export default RegistrationContent;
