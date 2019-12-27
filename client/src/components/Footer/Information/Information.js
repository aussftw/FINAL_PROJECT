import React from "react";
// import theme from '../../theme';

import {
  Grid,
  Typography,
  Link,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./useStyles";

const Information = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={3} md={12} className={classes}>
      <ExpansionPanel className={classes.bg}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes}>INFORMATION</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Link href="/#" color="secondary">
            About us
          </Link>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Link href="/#" color="secondary">
            Delivery info
          </Link>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Link href="/#" color="secondary">
            ELement
          </Link>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Link href="/#" color="secondary">
            Features
          </Link>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
};

export default Information;
