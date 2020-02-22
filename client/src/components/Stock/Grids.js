import Grid from "@material-ui/core/Grid";
import React from "react";
// import Box from "@material-ui/core/Box";
// import { makeStyles } from "@material-ui/core/styles";

export default function GridElem(props) {
  // const classes = useStyles();
  const { xs, sm, image, alt } = props;

  return (
    <Grid item xs={xs} sm={sm}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={image} width="100%" alt={alt} />
    </Grid>
  );
}
