import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import theme from "../../theme";

const useStyles = makeStyles({
  textField: {
    width: "90%",
    marginBottom: "20px",
  },
  title: {
    margin: "10px 0 30px 0",
    letterSpacing: "1px",
    textTransform: "uppercase",
    textAlign: "center",
    color: theme.palette.primary.dark,
  },
  wrapper: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    marginTop: "0",
    fontSize: "20px",
  },
  btn: {
    letterSpacing: "2px",
    margin: "10px 0",
    padding: "8px 100px",
    color: "white",
    width: "50%",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
  },
});

const LoginForm = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    login: "",
    password: "",
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

  const submitLogin = e => {
    e.preventDefault();
    // console.log(values);
  };

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Log In Form</h3>
      <form>
        <TextField
          label="Login"
          required
          variant="outlined"
          value={values.login}
          onChange={handleChange("login")}
          className={classes.textField}
        />
        <FormControl className={classes.textField} variant="outlined" required>
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
        <p className={classes.text}>
          Ещё не зарегистрированы? &nbsp;
          <Link to="/registration">Зарегистрироваться</Link>
        </p>
        <Button className={classes.btn} onClick={submitLogin}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
