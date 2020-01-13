import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import ModalHeader from "../../common/Modal/ModalHeader";
import useStyles from "./useStyles";

const RegistrationContent = ({
  handleClose,
  submitRegistration,
  handleMouseDownPassword,
  handleChange,
  handleClickShowPassword,
  open,
  newUserData,
  showPassword,
}) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
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
            <h3 className={classes.title}>Registration Form</h3>
            <form className={classes.flexContainer}>
              <TextField
                label="First Name"
                variant="outlined"
                value={newUserData.firstName}
                required
                onChange={handleChange("firstName")}
                className={classes.textField}
              />
              <TextField
                label="Last Name"
                variant="outlined"
                value={newUserData.lastName}
                required
                onChange={handleChange("lastName")}
                className={classes.textField}
              />
              <TextField
                label="Login"
                variant="outlined"
                value={newUserData.login}
                onChange={handleChange("login")}
                required
                className={classes.textField}
              />
              <TextField
                label="Email"
                variant="outlined"
                value={newUserData.email}
                onChange={handleChange("email")}
                required
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
                  value={newUserData.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {newUserData.showPassword ? (
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
              <TextField
                label="Telephone"
                variant="outlined"
                type="tel"
                value={newUserData.telephone}
                onChange={handleChange("telephone")}
                className={classes.textField}
              />
              <TextField
                label="Address"
                variant="outlined"
                value={newUserData.address}
                onChange={handleChange("address")}
                className={classes.textField}
              />
              <Button
                text="Submit"
                variant="outline"
                onClick={submitRegistration}
                className={classes.btn}
              >
                Registration
              </Button>
            </form>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default RegistrationContent;
