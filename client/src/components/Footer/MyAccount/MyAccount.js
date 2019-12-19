import React from 'react';
import theme from '../../../theme';
import useStyles from './useStyles';

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

const MyAccount = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} lg={3} md={12}>
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
          <Typography color="secondary">Service</Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography color="secondary">Terms&Conditions © 2020</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
};

export default MyAccount;
