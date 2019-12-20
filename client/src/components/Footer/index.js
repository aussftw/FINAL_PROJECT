import React from "react";

// import theme from "../../theme";
import useStyles from "./useStyles";
// import { ThemeProvider } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { Grid } from "@material-ui/core";

import ContactUs from "./ContactUs/ContactUs";
import Payment from "./Payment/Payment";
import MyAccount from "./MyAccount/MyAccount";
import Information from "./Information/Information";
import Copy from "./Copy/Copy";

const Footer = () => {
  const classes = useStyles();

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
        <Copy />
      </Grid>
    </>
  );
};

export default Footer;
