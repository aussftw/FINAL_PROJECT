import React from "react";
// import theme from "../../../theme";

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

const MyAccount = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={3} md={12}>
      <ExpansionPanel className={classes.bg}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes}>MY ACCOUNT</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Link color="secondary" href="/">
            Whishlist
          </Link>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Link color="secondary" href="/">
            Checkout
          </Link>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Link color="secondary" href="/">
            Gallery
          </Link>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <Link color="secondary" href="/">
            Service
          </Link>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
};

export default MyAccount;
