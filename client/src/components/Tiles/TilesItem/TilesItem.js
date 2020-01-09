import React from "react";
import { makeStyles } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";

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
    <Link component="a" href="/" className={classes.mediaWrapper}>
      <CardMedia component="img" src={img} alt={img} className={classes.img} />
      <TilesButton text={text} />
    </Link>
  );
};

export default TilesItem;
