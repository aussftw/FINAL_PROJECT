import React from "react";

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
            <Link href="/aboutus" color="secondary">
              About us
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link href="/shop" color="secondary">
              Shop
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link href="/search" color="secondary">
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
            <Link color="secondary" href="/aboutus">
              About us
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" href="/shop">
              Shop
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" href="/search">
              Search
            </Link>
          </Box>
        </Container>
      </Hidden>
    </Grid>
  );
};

export default Information;
