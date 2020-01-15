import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";

const TilesButton = ({ text }) => {
  const classes = useStyles();

  return <Button className={classes.btn}>{text}</Button>;
};
export default TilesButton;
