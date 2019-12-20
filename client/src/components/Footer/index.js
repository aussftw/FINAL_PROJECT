import React from 'react';

import theme from '../../theme';
import useStyles from './useStyles';
import { ThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DraftsIcon from '@material-ui/icons/Drafts';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import PhoneSharpIcon from '@material-ui/icons/PhoneSharp';

import ContactUs from './ContactUs/ContactUs';
import Payment from './Payment/Payment';
import MyAccount from './MyAccount/MyAccount';
import Information from './Information/Information';
const Footer = () => {
  const classes = useStyles();
  // console.log(classes);

  return (
    <ThemeProvider theme={theme}>
      <>
        <p>LOGO</p>
        {/* <Hidden smDown> */}
        <Grid container>
          <ContactUs />
          <Payment />
          <MyAccount />
          <Information />
        </Grid>
        {/* </Hidden> */}
        {/* <Hidden mdUp> */}
        <Grid container>
          <Grid item xs={12} className={classes}>
            <Typography className={classes.textedFooter}>
              Designed by Webibazaar Theme All rights reserved. © 2020
            </Typography>
          </Grid>
        </Grid>
        {/* </Hidden> */}
      </>
    </ThemeProvider>
  );
};

export default Footer;
