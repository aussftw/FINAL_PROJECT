import React from "react";
import { Link } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import ModalHeader from "../../common/ModalHeader";

import useStyles from "./useStyles";

const LoginContent = ({
  handleOpen,
  submitLogin,
  handleChange,
  handleClickShowPassword,
  open,
  userData,
  showPassword,
  message,
}) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleOpen}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <ModalHeader />
          <div className={classes.wrapper}>
            <h3 className={classes.title}>Log In Form</h3>
            <ValidatorForm noValidate={false} onSubmit={submitLogin}>
              <TextValidator
                label="Login or Email"
                variant="outlined"
                value={userData.loginOrEmail}
                onChange={handleChange("loginOrEmail")}
                className={classes.textField}
                validators={["required", "matchRegexp:^[a-zA-Z0-9]{3,22}$"]}
                errorMessages={[
                  "this field is required",
                  "Your password must be 3-22 characters, including only latin letters and numbers",
                ]}
              />

              <TextValidator
                className={classes.textField}
                variant="outlined"
                label="Password"
                value={userData.password}
                onChange={handleChange("password")}
                InputProps={{
                  type: showPassword ? "text" : "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {userData.showPassword ? (
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
              <p className={classes.text}>
                Have not an account yet ? &nbsp;
                <Link to="/registration">
                  <span className={classes.regLink}>Registration</span>
                </Link>
              </p>
              <Button className={classes.btn} type="submit">
                Login
              </Button>
            </ValidatorForm>
            {Boolean(message) && <p className={classes.errMsg}>{message}</p>}
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default LoginContent;
