import React from "react";
import { Link } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ModalHeader from "../../common/Modal/ModalHeader";

import useStyles from "./useStyles";

const LoginContent = ({
  handleOpen,
  submitLogin,
  handleMouseDownPassword,
  handleChange,
  handleClickShowPassword,
  open,
  userData,
  showPassword,
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
            <form>
              <TextField
                label="Login or Email"
                required
                variant="outlined"
                value={userData.loginOrEmail}
                onChange={handleChange("loginOrEmail")}
                className={classes.textField}
              />
              <FormControl
                className={classes.textField}
                variant="outlined"
                required
              >
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  value={userData.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {userData.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              <p className={classes.text}>
                Ещё не зарегистрированы? &nbsp;
                <Link to="/registration">Зарегистрироваться</Link>
              </p>
              <Button className={classes.btn} onClick={submitLogin}>
                Login
              </Button>
            </form>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default LoginContent;
