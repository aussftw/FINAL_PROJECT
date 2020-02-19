import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import useStyles from "./useStyles";

const LoginContent = ({ handleOpen, submitLogin, open, message }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setValues] = useState({
    loginOrEmail: "",
    password: "",
  });

  const handleChange = prop => event => {
    setValues({ ...user, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

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
          <div className={classes.wrapper}>
            <LockOpenIcon className={classes.icon} />
            <h3 className={classes.title}>LogIn</h3>
            {Boolean(message) && <p className={classes.errMsg}>{message}</p>}
            <ValidatorForm
              noValidate={false}
              onSubmit={e => submitLogin(e, user)}
              autoComplete="off"
            >
              <TextValidator
                label="Login or Email"
                variant="outlined"
                value={user.loginOrEmail}
                onChange={handleChange("loginOrEmail")}
                className={classes.textField}
                validators={[
                  "required",
                  `${"matchRegexp:^[a-zA-Z0-9]{3,22}" ||
                    "matchRegexp: ^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]{2,4}"}`,
                ]}
                errorMessages={[
                  "this field is required",
                  "Your Log in must be 3-22 characters, including latin letters and numbers or use your Email",
                ]}
              />

              <TextValidator
                className={classes.textField}
                variant="outlined"
                label="Password"
                value={user.password}
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
                        {user.showPassword ? <Visibility /> : <VisibilityOff />}
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
                <Link to="/registration" onClick={handleOpen}>
                  <span className={classes.regLink}>Registration</span>
                </Link>
              </p>
              <Button className={classes.btn} type="submit">
                Login
              </Button>
            </ValidatorForm>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default LoginContent;
