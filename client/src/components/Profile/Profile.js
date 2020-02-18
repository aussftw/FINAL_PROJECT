import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import useStyles from "./useStyles";

import PersonalData from "./PersonalData/PersonalData";
import ChangePasswordForm from "./ChangePasswordForm/ChangePasswordForm";
import DeliveryAddressForm from "./DeliveryAdressForm/DeliveryAddressForm";
import WishList from "./WishList/WishList";
import OrdersHistory from "./OrdersHistory/OrdersHistory";

import { getUser, logOut } from "../../store/actions/loginActions";
import { getWishlist, wishlistLogOut } from "../../store/actions/wishlist";
import { clearCart } from "../../store/actions/сart";
import setAuthToken from "../common/setAuthToken";

function TabPanel(props) {
  const { children, value, index } = props;
  const classes = useStyles();

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={classes.tabpanel}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </Typography>
  );
}

const Profile = ({
  isAdmin,
  getUserData,
  getWishlistData,
  logOff,
  wishlistLogOff,
  clearPersonalCart,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const profileLogOut = () => {
    setAuthToken(false);
    wishlistLogOff();
    logOff();
    clearPersonalCart();
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        className={classes.tabs}
      >
        <Tab
          label="Wishlist"
          id="vertical-tab-0"
          aria-controls="vertical-tabpanel-0"
          onClick={() => getWishlistData()}
        />
        <Tab
          label="Personal Details"
          id="vertical-tab-1"
          aria-controls="vertical-tabpanel-1"
          onClick={() => getUserData()}
        />
        <Tab
          label="Delivery Address"
          id="vertical-tab-2"
          aria-controls="vertical-tabpanel-2"
          onClick={() => getUserData()}
        />
        <Tab
          label="AdminOrders History"
          id="vertical-tab-3"
          aria-controls="vertical-tabpanel-3"
        />
        <Tab
          label="Password Change"
          id="vertical-tab-4"
          aria-controls="vertical-tabpanel-4"
        />
        {isAdmin && (
          <Tab
            label="Admin panel"
            id="vertical-tab-5"
            aria-controls="vertical-tabpanel-5"
          />
        )}
        <Tab
          label="Log Out"
          id="vertical-tab-6"
          aria-controls="vertical-tabpanel-6"
          onClick={() => profileLogOut()}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <WishList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PersonalData />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DeliveryAddressForm />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OrdersHistory />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ChangePasswordForm />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Redirect to="/admin" />
      </TabPanel>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAdmin: state.loginReducer.user.isAdmin,
  };
}

export default connect(mapStateToProps, {
  getUserData: getUser,
  getWishlistData: getWishlist,
  logOff: logOut,
  wishlistLogOff: wishlistLogOut,
  clearPersonalCart: clearCart,
})(Profile);
