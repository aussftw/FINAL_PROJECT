import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { textObj } from "./const";

const text = textObj;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  paragraph: {
    // textDecoration: 'none',
    textAlign: "left",
    color: "#989898",
  },
  title: {
    color: "#000000",
  },
  link: {
    color: "#6ea820",
    textDecoration: "none",
  },
}));

export default function TextBlock() {
  const classes = useStyles();

  return (
    <div className={classes.paragraph}>
      <p>{text.name}</p>
      <Typography variant="h3">{text.title}</Typography>
      <Box display={{ xs: "none", md: "block" }}>
        <p>{text.desc}</p>
      </Box>
      <Link className={classes.link} to="/shop">
        Shop now &#8594;
      </Link>
    </div>
  );
}
