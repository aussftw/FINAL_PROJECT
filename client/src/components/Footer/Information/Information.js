import React from "react";
// import theme from '../../theme';
import useStyles from "./useStyles";

import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  IconButton,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
          <Typography color="secondary">Delivery info</Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography color="secondary">Element </Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Typography color="secondary">Features </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
};

export default Information;
