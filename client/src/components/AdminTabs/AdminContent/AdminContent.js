import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AdminPartners from "./AdminPartners/AdminPartners";
import useStyles from "./useStyles";
import AdminCategories from "./AdminCategories/AdminCategories";
import AdminColors from "./AdminColors/AdminColors";
import AdminSizes from "./AdminSizes/AdminSizes";
import AdminContacts from "./AdminContacts/AdminContacts";


const AdminContent = () => {
  const classes = useStyles();

  // Modals logic
  const [AddModal, setAddModal] = useState({ isOpened: false, rowData: null });
  const [EditModal, setEditModal] = useState({ isOpened: false, rowData: {} });
  const [DeleteModal, setDeleteModal] = useState({ isOpened: false, id: "" });

  // Snackbar logic
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState({ type: "", message: "" });

  const handleOpenSnackbar = (type) => {
    console.log("setOpenSnackbar");
    setOpenSnackbar(true);
    setSnackbarType(type);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  // snackbar


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  const tabsBox = () => {
    return (
      <Box className={classes.tabsComponent}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          className={classes.tabsList}
          value={value}
          onChange={handleChange}
          aria-label="admin"
          indicatorColor="primary"
        >
          <Tab
            label={<span className={classes.tabText}>Categories</span>}
            {...a11yProps(0)}
          />
          <Tab
            label={<span className={classes.tabText}>Partners</span>}
            {...a11yProps(1)}
          />
          <Tab
            label={<span className={classes.tabText}>Colors</span>}
            {...a11yProps(2)}
          />
          <Tab
            label={<span className={classes.tabText}>Sizes</span>}
            {...a11yProps(3)}
          />
          <Tab
            label={<span className={classes.tabText}>Contacts</span>}
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
          {value === 0 && (
            <AdminCategories
              AddModal={AddModal}
              setAddModal={setAddModal}
              EditModal={EditModal}
              setEditModal={setEditModal}
              DeleteModal={DeleteModal}
              setDeleteModal={setDeleteModal}
              openSnackbar={openSnackbar}
              handleOpenSnackbar={handleOpenSnackbar}
              handleCloseSnackbar={handleCloseSnackbar}
              snackbarType={snackbarType}
            />
          )}
        </Box>
        <Box
          className={classes.contentBox}
          component="div"
          role="tabpanel"
          hidden={value !== 1}
          aria-labelledby={`simple-tab-${1}`}
        >
          {value === 1 && (
            <AdminPartners
              AddModal={AddModal}
              setAddModal={setAddModal}
              EditModal={EditModal}
              setEditModal={setEditModal}
              DeleteModal={DeleteModal}
              setDeleteModal={setDeleteModal}
              openSnackbar={openSnackbar}
              handleOpenSnackbar={handleOpenSnackbar}
              handleCloseSnackbar={handleCloseSnackbar}
              snackbarType={snackbarType}
            />
          )}
        </Box>
        <Box
          className={classes.contentBox}
          component="div"
          role="tabpanel"
          hidden={value !== 2}
          aria-labelledby={`simple-tab-${2}`}
        >
          {value === 2 && (
            <AdminColors
              AddModal={AddModal}
              setAddModal={setAddModal}
              EditModal={EditModal}
              setEditModal={setEditModal}
              DeleteModal={DeleteModal}
              setDeleteModal={setDeleteModal}
              openSnackbar={openSnackbar}
              handleOpenSnackbar={handleOpenSnackbar}
              handleCloseSnackbar={handleCloseSnackbar}
              snackbarType={snackbarType}
            />
          )}
        </Box>
        <Box
          className={classes.contentBox}
          component="div"
          role="tabpanel"
          hidden={value !== 3}
          aria-labelledby={`simple-tab-${3}`}
        >
          {value === 3 && (
            <AdminSizes
              AddModal={AddModal}
              setAddModal={setAddModal}
              EditModal={EditModal}
              setEditModal={setEditModal}
              DeleteModal={DeleteModal}
              setDeleteModal={setDeleteModal}
              openSnackbar={openSnackbar}
              handleOpenSnackbar={handleOpenSnackbar}
              handleCloseSnackbar={handleCloseSnackbar}
              snackbarType={snackbarType}
            />
          )}
        </Box>
        <Box
          className={classes.contentBox}
          component="div"
          role="tabpanel"
          hidden={value !== 4}
          aria-labelledby={`simple-tab-${4}`}
        >
          {value === 4 && (
            <AdminContacts
              AddModal={AddModal}
              setAddModal={setAddModal}
              EditModal={EditModal}
              setEditModal={setEditModal}
              DeleteModal={DeleteModal}
              setDeleteModal={setDeleteModal}
              openSnackbar={openSnackbar}
              handleOpenSnackbar={handleOpenSnackbar}
              handleCloseSnackbar={handleCloseSnackbar}
              snackbarType={snackbarType}
            />
          )}
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Container className={classes.container} maxWidth="lg">
        <Typography variant="h3" style={{ cursor: "default" }}>
          Content
        </Typography>
        {tabsBox()}
      </Container>
    </>
  );
};

export default AdminContent;

