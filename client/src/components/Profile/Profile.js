import React from "react";
// import PropTypes from 'prop-types';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "./useStyles";

import PersonalData from "./PersonalData/PersonalData";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";
import DeliveryAddressForm from "./DeliveryAdressForm/DeliveryAddressForm";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </Typography>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

const Profile = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          label="Personal Details"
          id="vertical-tab-0"
          aria-controls="vertical-tabpanel-0"
        />
        <Tab
          label="Delivery"
          id="vertical-tab-1"
          aria-controls="vertical-tabpanel-1"
        />
        <Tab
          label="Wish list"
          id="vertical-tab-2"
          aria-controls="vertical-tabpanel-2"
        />
        <Tab
          label="Cart"
          id="vertical-tab-3"
          aria-controls="vertical-tabpanel-3"
        />
        <Tab
          label="Password Change"
          id="vertical-tab-4"
          aria-controls="vertical-tabpanel-4"
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <PersonalData />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DeliveryAddressForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Wish List
      </TabPanel>
      <TabPanel value={value} index={3}>
        Cart
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ChangePasswordForm />
      </TabPanel>
    </div>
  );
};

export default Profile;
