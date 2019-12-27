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
        <ExpansionPanelDetails>
          <DraftsIcon className={classes.contactUsIcon} />
          <Link
            className={classes.contactUsItem}
            color="secondary"
            href="/#"
            draftsIcon={<DraftsIcon />}
          >
            planty@mail.com
          </Link>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <LocationOnSharpIcon className={classes.contactUsIcon} />
          <Link href="/#" color="secondary" className={classes.contactUsItem}>
            Location
          </Link>
        </ExpansionPanelDetails>
        <ExpansionPanelDetails>
          <PhoneSharpIcon className={classes.contactUsIcon} />
          <Link href="/#" color="secondary" className={classes.contactUsItem}>
            Phone
          </Link>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  );
};

export default ContactUs;
