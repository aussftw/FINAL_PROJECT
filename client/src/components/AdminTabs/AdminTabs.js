import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import AdminProducts from "./AdminProducts/AdminProducts";
import AdminCustomers from "./AdminCustomers/AdminCustomers";
import AdminOrders from "./AdminOrders/AdminOrders";
import AdminContent from "./AdminContent/AdminContent";
import AdminComments from "./AdminComments/AdminComments";

import useStyles from "./useStyles";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const AdminTabs = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography variant="h3" style={{ cursor: "default" }}>
        Admin Page
      </Typography>
      <Box className={classes.tabsComponent}>

        <Tabs
          className={classes.tabsList}
          value={value}
          onChange={handleChange}
          aria-label="admin"
          indicatorColor="primary"
        >
          <Tab
            label={<span className={classes.tabText}>Orders</span>}
            {...a11yProps(0)}
          />
          <Tab
            label={<span className={classes.tabText}>Products</span>}
            {...a11yProps(1)}
          />
          <Tab
            label={<span className={classes.tabText}>Customers</span>}
            {...a11yProps(2)}
          />
          <Tab
            label={<span className={classes.tabText}>Comments</span>}
            {...a11yProps(3)}
          />
          <Tab
            label={<span className={classes.tabText}>Content</span>}
            {...a11yProps(4)}
          />
        </Tabs>
        <Box
          className={classes.contentBox}
          component="div"
          role="tabpanel"
          hidden={value !== 0}
          aria-labelledby={`simple-tab-${0}`}
        >
          {value === 0 && <AdminOrders />}
        </Box>
        <Box
          className={classes.contentBox}
          component="div"
          role="tabpanel"
          hidden={value !== 1}
          aria-labelledby={`simple-tab-${1}`}
        >
          {value === 1 && <AdminProducts />}
        </Box>
        <Box
          className={classes.contentBox}
          component="div"
          role="tabpanel"
          hidden={value !== 2}
          aria-labelledby={`simple-tab-${2}`}
        >
          {value === 2 && <AdminCustomers />}
        </Box>
        <Box
          className={classes.contentBox}
          component="div"
          role="tabpanel"
          hidden={value !== 3}
          aria-labelledby={`simple-tab-${3}`}
        >
          {value === 3 && <AdminComments />}
        </Box>
        <Box
          className={classes.contentBox}
          component="div"
          role="tabpanel"
          hidden={value !== 4}
          aria-labelledby={`simple-tab-${4}`}
        >
          {value === 4 && <AdminContent />}
        </Box>
      </Box>
    </Container>
  );
};

export default AdminTabs;
