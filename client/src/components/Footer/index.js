import React from "react";

// import { ThemeProvider } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { Grid, Box } from "@material-ui/core";
import useStyles from "./useStyles";
// import theme from "../../theme";

// import Hidden from '@material-ui/core/Hidden';
import ContactUs from "./ContactUs/ContactUs";
import Payment from "./Payment/Payment";
import MyAccount from "./MyAccount/MyAccount";
import Information from "./Information/Information";

import Copy from "./Copy/Copy";

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.bg}>
      <Hidden SmDown>
        <p>LOGO</p>
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
    </Box>
  );
};

export default Footer;
