import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import theme from "../../theme";

const useStyles = makeStyles({
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
    margin: "10px 0",
    padding: "8px 100px",
    color: "white",
    width: "35%",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
  },
});

const LoginForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Log In Form</h3>
      <form>
        <TextField label="Login" variant="outlined" />
        <br />
        <TextField label="Password" variant="outlined" />
        <p>
          Ещё не зарегистрированы ?
          <Link to="/registration">Зарегистрироваться</Link>{" "}
        </p>
        <Button className={classes.btn}>Submit</Button>
      </form>
    </div>
  );
};

export default LoginForm;
