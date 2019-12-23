import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import useStyles from "./useStyles";

const Copy = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes}>
      <Divider variant="middle" />
      <Typography className={classes.textedFooter}>
        Designed by Webibazaar Theme All rights reserved. © 2020
      </Typography>
    </Grid>
  );
};

export default Copy;
