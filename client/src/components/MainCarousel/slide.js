import React from "react";

import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import useStyles from "./useStyles";
// import {Carousel} from "react-responsive-carousel";

const Slide = ({ image, title, subTitle }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.slider}
        // classes={{
        //   root: classes.carouselBack,
        //   legend: classes.legend,
        // }}
    >
      <img className={classes.slider} src={image} alt="slide" />
      <Grid
        container
        alignItems="center"
      >
        <Grid item xs={6} className={classes.block}>
          <Box className={classes.paragraph}>
            <p>{title}</p>
            <h1 className={classes.title}>{subTitle}</h1>
            <Button component={Link} to="/shop" className={classes.actionButton}>shop now</Button>
          </Box>
        </Grid>
        <Grid item xs={6} />
      </Grid>
    </div>
  );
};

export default Slide;
