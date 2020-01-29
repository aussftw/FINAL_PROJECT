import React from "react";
// import theme from '../../theme';

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
    <Grid item xs={12} lg={3} md={12}>
      <Hidden mdUp>
        <ExpansionPanel className={classes.mainContainer}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>INFORMATION</Typography>
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
              Element
            </Link>
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <Link href="/#" color="secondary">
              Features
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
            <Link color="secondary" href="/">
              About us
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" href="/">
              Element
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" href="/">
              Delivery info
            </Link>
          </Box>
          <Box className={classes.myAccountItem}>
            <Link color="secondary" href="/">
              Features
            </Link>
          </Box>
        </Container>
      </Hidden>
    </Grid>
  );
};

export default Information;
