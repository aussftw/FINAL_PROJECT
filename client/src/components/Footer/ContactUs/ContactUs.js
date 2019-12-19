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

const ContactUs = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} lg={3} md={12}>
      <ExpansionPanel className={classes.bg}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes}>CONTACT US</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <IconButton>
            <DraftsIcon />
            <Typography color="secondary" draftsIcon={<DraftsIcon />}>
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
      </ExpansionPanel>
    </Grid>
  );
};

export default ContactUs;
