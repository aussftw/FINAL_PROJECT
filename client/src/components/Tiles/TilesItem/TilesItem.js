import React from "react";
import { makeStyles } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import TilesButton from "../TilesButton/TilesButton";

const useStyles = makeStyles({
  img: {
    height: "100%",
    borderRadius: "10px",
  },
  mediaWrapper: {
    display: "block",
    width: "100%",
    height: "100%",
  },
});

const TilesItem = ({ text, img }) => {
  const classes = useStyles();

  return (
    <a href="/" className={classes.mediaWrapper}>
      <CardMedia component="img" src={img} alt={img} className={classes.img} />
      <TilesButton text={text} />
    </a>
  );
};

export default TilesItem;
