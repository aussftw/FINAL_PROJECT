import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import useStyles from "./useStyles";
import TextBlock from "./TextBlock";
import GridElem from "./Grids";
import { imagesObj } from "./const";

const images = imagesObj;

export default function Stock() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Typography variant="h4">Our collection</Typography>
      <Grid container className={classes.root} spacing={2}>
        <Grid container justify="center" spacing={spacing}>
          <GridElem xs={12} sm={5} image={images.fst} alt={images.altFirst} />
          <GridElem xs={5} sm={3} image={images.snd} alt={images.altSecond} />
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
