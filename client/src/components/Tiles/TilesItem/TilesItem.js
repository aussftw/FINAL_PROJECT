import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import TilesButton from "../TilesButton/TilesButton";
import useStyles from "./useStyles";

const TilesItem = ({ text, img }) => {
  const classes = useStyles();

  return (
    <div className={classes.mediaWrapper}>
      <CardMedia component="img" src={img} alt={img} className={classes.img} />
      <TilesButton text={text} />
    </div>
  );
};

export default TilesItem;
