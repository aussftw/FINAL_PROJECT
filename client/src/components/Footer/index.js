import React from "react";
import { Container, Grid, Hidden, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

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
        <Link to="/" className={classes.logoContainer}>
          <img src="https://res.cloudinary.com/plantly/image/upload/v1582046905/Logo_d0lwiz.svg" alt="logo" className={classes.logo} />
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
