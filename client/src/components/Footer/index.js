import React from "react";

import theme from "../../theme";
import useStyles from "./useStyles";
// import { ThemeProvider } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { Grid, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ContactUs from "./ContactUs/ContactUs";
import Payment from "./Payment/Payment";
import MyAccount from "./MyAccount/MyAccount";
import Information from "./Information/Information";
const Footer = () => {
  const classes = useStyles();
  // console.log(classes);

  return (
    <>
      <Hidden MdUp>
        <p>LOGO</p>
      </Hidden>
      <Grid container>
        <ContactUs />
        <Payment />
        <MyAccount />
        <Information />
      </Grid>

      <Grid container>
        <Grid item xs={12} className={classes}>
          <Typography className={classes.textedFooter}>
            Designed by Webibazaar Theme All rights reserved. © 2020
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
