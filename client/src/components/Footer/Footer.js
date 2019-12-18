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

const Footer = () => {
  const classes = useStyles();
  // console.log(classes);

  return (
    <ThemeProvider theme={theme}>
      <>
        <p>LOGO</p>
        {/* <Hidden smDown> */}
        <Grid container>
          <Grid item xs={12} lg={3} md={12}>
            <ExpansionPanel className={classes.bg}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes}>CONTACT US</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <IconButton>
                  <DraftsIcon />
                  <Typography color="secondary" draftsIcon={<DraftsIcon />}>
                    {' '}
                    planty@mail.com&icon
                  </Typography>
                </IconButton>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <IconButton>
                  <LocationOnSharpIcon />
                  <Typography color="secondary">Location</Typography>
                </IconButton>
              </ExpansionPanelDetails>

              <ExpansionPanelDetails>
                <IconButton>
                  <PhoneSharpIcon />
                  <Typography color="secondary">Phone</Typography>
                </IconButton>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={12} lg={3} md={12} className={classes}>
            <ExpansionPanel className={classes.bg}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes}>PAYMENT</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>maestropic</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography>american express pic</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography>paypal pic</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography>some pic</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={12} lg={3} md={12} className={classes}>
            <ExpansionPanel className={classes.bg}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes}>INFORMATION</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography color="secondary">About us</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography>About us</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography color="secondary">Delivery info</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography>Element </Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography color="secondary">Features </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={12} lg={3} md={12} className={classes}>
            <ExpansionPanel className={classes.bg}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes}>MY ACCOUNT</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography color="secondary">Whishlist</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography color="secondary">Checkout</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography color="secondary">Gallery</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography color="secondary.[light]">Service</Typography>
              </ExpansionPanelDetails>
              <ExpansionPanelDetails>
                <Typography color="secondary">Terms&Conditions</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
        {/* </Hidden> */}
        {/* <Hidden mdUp> */}
        <Grid container>
          <Grid item xs={12} className={classes}>
            <Typography className={classes.textedFooter}>
              Designed by Webibazaar Theme All rights reserved.
            </Typography>
          </Grid>
        </Grid>
        {/* </Hidden> */}
      </>
    </ThemeProvider>
  );
};

export default Footer;
