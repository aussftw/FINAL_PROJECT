import React from "react";
import { Container } from "@material-ui/core";

// import { Grid } from "@material-ui/core";
// import { ThemeProvider } from '@material-ui/core/styles';
import useStyles from "./useStyles";

import SaukraLike from "./Pics/brand1.png";
import Hermes from "./Pics/brand2.png";
import Versace from "./Pics/brand3.jpg";
import Emirates from "./Pics/brand4.png";

const Brands = () => {
  const classes = useStyles();

  return (
    <Container className={classes.brandsContaier}>
      <img
        src={SaukraLike}
        alt="Sakura-like logo"
        className={classes.brand}
        spacing={5}
      />
      <img
        src={Hermes}
        alt="Sakura-like logo"
        className={classes.brand}
        spacing={3}
      />
      <img
        src={Versace}
        alt="Sakura-like logo"
        className={classes.brand}
        spacing={3}
      />
      <img
        src={Emirates}
        alt="Sakura-like logo"
        className={classes.brand}
        spacing={3}
      />
    </Container>
  );
};

export default Brands;
