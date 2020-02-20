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

const Information = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={4} md={12} className={classes.informationGrid}>
      <Hidden mdUp>
        <ExpansionPanel className={classes.mainContainer}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.containerTittle}>INFORMATION</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Link to="/about-us" color="secondary" className={classes.informationItem}>
              About us
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link to="/cart" color="secondary" className={classes.informationItem}>
              Cart
            </Link>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Hidden>
      <Hidden smDown>
        <Container className={classes.mainContainer}>
          <Typography className={classes.containerTittle}>
            INFORMATION
          </Typography>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" to="/about-us" className={classes.informationItem}>
              About us
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" to="/cart" className={classes.informationItem}>
              Cart
            </Link>
          </Box>
        </Container>
      </Hidden>
    </Grid>
  );
};

export default Information;
