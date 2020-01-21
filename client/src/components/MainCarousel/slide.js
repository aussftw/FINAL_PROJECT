import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: "none",
    marginBottom: 50,
  },
  block: {
    marginTop: -250,
    width: "50%",
  },
  paragraph: {
    // textDecoration: 'none',
    textAlign: "left",
    color: "#989898",
  },
  title: {
    color: "#000000",
    textTransform: "capitalize",
  },
  actionButton: {
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    height: 50,
  },
}));

const Slide = ({ image, title, subTitle }) => {
  const classes = useStyles();

  return (
    <div>
      <img src={image} alt="slide" />
      <Grid
        xs={6}
        justify="center"
        alignItems="center"
        className={classes.block}
      >
        <Box justify="center" alignItems="center" className={classes.paragraph}>
          <p>{title}</p>
          <h1 className={classes.title}>{subTitle}</h1>
          <Button className={classes.actionButton}>shop now</Button>
        </Box>
      </Grid>
    </div>
  );
};

export default Slide;
