import React from "react";
// eslint-disable-next-line import/no-unresolved
import "react-responsive-carousel/lib/styles/carousel.min.css";
// eslint-disable-next-line import/no-unresolved
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";

import { imagesObj } from "./const";
import TextBlock from "./TextBlock";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    border: "none",
    marginBottom: 50,
  },
  block: {
    marginTop: -250,
    width: "50%",
  },
}));

const images = imagesObj;

export default function MainCarousel() {
  // const [spacing] = React.useState(2);
  const classes = useStyles();

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={2500}
      // verticalSwipe="standard"
    >
      <div>
        <img src={images.fst} alt="1" />
        <Grid
          xs={6}
          justify="center"
          alignItems="center"
          className={classes.block}
        >
          <TextBlock />
        </Grid>
      </div>
      <div>
        <img src={images.snd} alt="2" />
        <Grid
          xs={6}
          justify="center"
          alignItems="center"
          className={classes.block}
        >
          <TextBlock />
        </Grid>
      </div>
    </Carousel>
  );
}
