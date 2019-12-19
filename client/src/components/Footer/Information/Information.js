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

const Information = () => {
  const classes = useStyles();
  return (
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
  );
};

export default Information;
