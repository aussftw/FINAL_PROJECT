import React from "react";
// import theme from '../../theme';

import {
  Grid,
  Typography,
  Link,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  IconButton,
} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DraftsIcon from "@material-ui/icons/Drafts";
import LocationOnSharpIcon from "@material-ui/icons/LocationOnSharp";
import PhoneSharpIcon from "@material-ui/icons/PhoneSharp";
import useStyles from "./useStyles";

const ContactUs = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} lg={3} md={12}>
      <ExpansionPanel className={classes.bg}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes}>CONTACT US</Typography>
        </ExpansionPanelSummary>
        <Hidden MdUp>
          <ExpansionPanelDetails>
            <Link href="/#" color="secondary">
              Logo
            </Link>
          </ExpansionPanelDetails>
        </Hidden>
        <ExpansionPanelDetails>
          <IconButton>
            <DraftsIcon />
            <Link
              color="secondary"
              href="/#"
              draftsIcon={<DraftsIcon className={classes.draftsIcon} />}
            >
              planty@mail.com
            </Link>
          </IconButton>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <IconButton>
            <LocationOnSharpIcon />
            <Link href="/#" color="secondary">
              Location
            </Link>
          </IconButton>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <IconButton>
            <PhoneSharpIcon />
            <Link href="/#" color="secondary">
              Phone
            </Link>
          </IconButton>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
};

export default ContactUs;
