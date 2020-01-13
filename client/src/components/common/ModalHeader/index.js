import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import theme from "../../../theme";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: theme.palette.primary.light,
    padding: "10px",
  },
  link: {
    fontSize: "24px",
    textDecoration: "none",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: theme.palette.primary.dark,
  },
});

const ModalHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <NavLink exact to="/login" className={classes.link}>
        Log in
      </NavLink>
      <NavLink to="/registration" className={classes.link}>
        Registration
      </NavLink>
    </div>
  );
};

export default ModalHeader;
