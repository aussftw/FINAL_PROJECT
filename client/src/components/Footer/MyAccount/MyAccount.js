import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Hidden,
  Box,
  Container,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./useStyles";

const MyAccount = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={4} md={12} className={classes.accountGrid}>
      <Hidden mdUp>
        <ExpansionPanel className={classes.mainContainer}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.containerTittle}>MY ACCOUNT</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Link color="secondary" to="/profile" className={classes.informationItem}>
              Whishlist
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link color="secondary" to="/checkout" className={classes.informationItem}>
              Checkout
            </Link>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Hidden>
      <Hidden smDown>
        <Container className={classes.mainContainer}>
          <Typography className={classes.containerTittle}>
            MY ACCOUNT
          </Typography>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" to="/profile" className={classes.informationItem}>
              Whishlist
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" to="/checkout" className={classes.informationItem}>
              Checkout
            </Link>
          </Box>
        </Container>
      </Hidden>
    </Grid>
  );
};

export default MyAccount;
