import React from "react";

// import { ThemeProvider } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { Grid, Container, Typography } from "@material-ui/core";
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
