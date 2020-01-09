import React from "react";
// import theme from "../../../theme";

import {
  Grid,
  Typography,
  Link,
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
    <Grid item xs={12} lg={3} md={12}>
      <Hidden mdUp>
        <ExpansionPanel className={classes.mainContainer}>
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
      </Hidden>
      <Hidden smDown>
        <Container className={classes.mainContainer}>
          <Typography className={classes.containerTittle}>
            MY ACCOUNT
          </Typography>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" href="/">
              Whishlist
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" href="/">
              Checkout
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" href="/">
              Gallery
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" href="/">
              Service
            </Link>
          </Box>
        </Container>
      </Hidden>
    </Grid>
  );
};

export default MyAccount;
