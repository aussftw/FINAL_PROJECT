import React from "react";
import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Box,
  Hidden,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./useStyles";

import AmericanExpress from "./pics/AmericanExpress.png";
import Visa from "./pics/visa.png";
import MasterCard from "./pics/mastercard.png";
import PayPal from "./pics/PayPal.png";

const Payment = () => {
  const classes = useStyles();

  return (
    <Hidden mdUp>
      <Grid item xs={12} lg={4} md={12}>
        <ExpansionPanel className={classes.bg}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.containerTittle}>PAYMENT</Typography>
          </ExpansionPanelSummary>
          <Box className={classes.paymentMethods}>
            <ExpansionPanelDetails className={classes.root}>
              <img src={AmericanExpress} alt="American Express" />
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.root}>
              <img src={PayPal} alt="PayPal" />
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.root}>
              <img src={MasterCard} alt="Master Card" />
            </ExpansionPanelDetails>
            <ExpansionPanelDetails className={classes.root}>
              <img src={Visa} alt="Visa" />
            </ExpansionPanelDetails>
          </Box>
        </ExpansionPanel>
      </Grid>
    </Hidden>
  );
};

export default Payment;
