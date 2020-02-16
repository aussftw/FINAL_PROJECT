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
            <Link to="/aboutus" color="secondary" className={classes.informationItem}>
              About us
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link to="/shop" color="secondary" className={classes.informationItem}>
              Shop
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link to="/search" color="secondary" className={classes.informationItem}>
              Search
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
            <Link color="secondary" to="/aboutus" className={classes.informationItem}>
              About us
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" to="/shop" className={classes.informationItem}>
              Shop
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" to="/search" className={classes.informationItem}>
              Search
            </Link>
          </Box>
        </Container>
      </Hidden>
    </Grid>
  );
};

export default Information;
