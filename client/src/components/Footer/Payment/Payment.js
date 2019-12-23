import React from 'react';
// import theme from '../../theme';
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

const Payment = () => {
  const classes = useStyles();
  return (
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
  );
};

export default Payment;
