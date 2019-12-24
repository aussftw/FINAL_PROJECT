import React from 'react';
import { Container } from '@material-ui/core';

// import { Grid } from '@material-ui/core/Hidden';
// import { ThemeProvider } from '@material-ui/core/Hidden';
import useStyles from "./useStyles";

import ContactUs from "./ContactUs/ContactUs";
import Payment from "./Payment/Payment";
import MyAccount from "./MyAccount/MyAccount";
import Information from "./Information/Information";


import Copy from "./Copy/Copy";

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.bg} maxWidth>
      <Hidden SmDown>
        <Typography>LOGO</Typography>
      </Hidden>
      <Hidden MdUp>
        <Grid container>
          <ContactUs />
          <Payment />
          <MyAccount />
          <Information />
        </Grid>
        <Grid>
          <Copy />
        </Grid>
      </Hidden>
    </Container>
  );
};

export default Footer;
