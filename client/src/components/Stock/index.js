import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import useStyles from "./useStyles";
import TextBlock from "./TextBlock";
import { imagesObj } from "./const";

const images = imagesObj;

export default function Stock() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.root} spacing={2}>
        <Grid container justify="center" spacing={spacing}>
          <Grid item xs={12} sm={5}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={images.fst} width="100%" />
          </Grid>
          <Grid item xs={5} sm={3}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={images.snd} width="100%" />
          </Grid>
          <Grid item xs={7} sm={4}>
            <Paper className={classes.paper}>
              <TextBlock />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
