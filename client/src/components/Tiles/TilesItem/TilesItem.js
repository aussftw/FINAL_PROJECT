import React from "react";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import TilesButton from "../TilesButton/TilesButton";
import useStyles from "./useStyles";

const TilesItem = ({ text, img }) => {
  const classes = useStyles();
  const link = text.toLowerCase();

  return (
    <Link to={link} className={classes.mediaWrapper}>
      <CardMedia component="img" src={img} alt={img} className={classes.img} />
      <TilesButton text={text} />
    </Link>
  );
};

export default TilesItem;
