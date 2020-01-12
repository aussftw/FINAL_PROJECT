import React, { useState } from "react";
import Redirect from "react-router-dom/es/Redirect";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ModalHeader from "../common/Modal/ModalHeader";
// import axios from 'axios';
// import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

import theme from "../../theme";

const useStyles = makeStyles({
  textField: {
    width: "90%",
    marginBottom: "20px",
  },
  wrapper: {
    padding: "15px",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    margin: "10px 0 30px 0",
    letterSpacing: "1px",
    textTransform: "uppercase",
    textAlign: "center",
    color: theme.palette.primary.dark,
  },
  btn: {
    letterSpacing: "2px",
    margin: "20px 0",
    padding: "12px 0",
    color: "white",
    width: "50%",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: `5px solid ${theme.palette.primary.main}`,
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    minWidth: "40vw",
  },
  icon: {
    colors: theme.palette.primary.main,
  },
});

const RegistrationForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    login: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    isAdmin: false,
  });

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(() => !showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const submitRegistration = e => {
    e.preventDefault();
    handleClose();
    // const newCustomer = values;
    // console.log(newCustomer);
    // axios.post('http://localhost:5000/customers', newCustomer)
    //   .then(savedCustomer => {console.log(savedCustomer)})
  };

  return (
    <>
      {open ? (
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
                    value={values.firstName}
                    required
                    onChange={handleChange("firstName")}
                    className={classes.textField}
                  />
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    value={values.lastName}
                    required
                    onChange={handleChange("lastName")}
                    className={classes.textField}
                  />
                  <TextField
                    label="Login"
                    variant="outlined"
                    value={values.login}
                    onChange={handleChange("login")}
                    required
                    className={classes.textField}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    value={values.email}
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
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
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
                    type="number"
                    value={values.telephone}
                    onChange={handleChange("telephone")}
                    className={classes.textField}
                  />
                  <TextField
                    label="Address"
                    variant="outlined"
                    value={values.address}
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
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default RegistrationForm;
