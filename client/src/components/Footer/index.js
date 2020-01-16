import React from "react";
import { Container, Grid, Link, Hidden, Box } from "@material-ui/core";

import useStyles from "./useStyles";

import ContactUs from "./ContactUs/ContactUs";
import Payment from "./Payment/Payment";
import MyAccount from "./MyAccount/MyAccount";
import Information from "./Information/Information";

import Copy from "./Copy/Copy";

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.bg} maxWidth="xl">
      <Hidden mdUp>
        <Link href="/#" className={classes.logoContainer}>
          <img src="./img/Logo.svg" alt="logo" className={classes.logo} />
        </Link>
      </Hidden>
      <Box className={classes.footerData}>
        <ContactUs />
        <Payment />
        <Information />
        <MyAccount />
      </Box>
      <Grid>
        <Copy />
      </Grid>
    </Container>
  );
};

export default Footer;
