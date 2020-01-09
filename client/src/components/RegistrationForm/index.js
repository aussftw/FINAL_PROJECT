import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Visibility, VisibilityOff } from "@material-ui/icons";
// import axios from 'axios';
import theme from "../../theme";

const useStyles = makeStyles({
  textField: {
    width: "75%",
    marginBottom: "20px",
  },
  wrapper: {
    padding: "15px",
  },
  title: {
    margin: "10px 0 30px 0",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
  btn: {
    letterSpacing: "2px",
    margin: "20px 0",
    padding: "12px 0",
    color: "white",
    width: "35%",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
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
    // const newCustomer = values;
    // console.log(newCustomer);
    // axios.post('http://localhost:5000/customers', newCustomer)
    //   .then(savedCustomer => {console.log(savedCustomer)})
  };

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Registration Form</h3>
      <div>
        <form>
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
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
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
          <br />
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
  );
};

export default RegistrationForm;
