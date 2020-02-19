import React, { useState } from "react";
import MaterialTable from "material-table";
import axios from "axios";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PreloaderAdaptive from "../../Preloader/Adaptive";
import useStyles from "./useStyles";
import UserModal from "./UserModal/UserModal";

const AdminCustomers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allCustomers, setAllCustomers] = useState([]);
  const [error, setError] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [oneUserData, setOneUserData] = useState({
    isAdmin: "",
  });
  const classes = useStyles();

  const columns = [
    {
      title: "Customer id",
      field: "_id",
      type: "string",
      headerStyle: { minWidth: "150px" },
    },
    {
      title: "Name",
      field: `firstName`,
      type: "string",
      headerStyle: { minWidth: "70px" },
    },
    {
      title: "Surname",
      field: "lastName",
      type: "string",
      headerStyle: { minWidth: "80px" },
    },
    {
      title: "Email",
      field: "email",
      type: "string",
      headerStyle: { minWidth: "100px" },
    },
    {
      title: "Enabled",
      field: "enabled",
      type: "boolean",
      headerStyle: { padding: "16px 0 16px" },
      cellStyle: { padding: "16px 0 16px", textAlign: "center" },
    },
    {
      title: "Admin",
      field: "isAdmin",
      type: "boolean",
      headerStyle: { padding: "16px 0 16px" },
      cellStyle: { padding: "16px 0 16px", textAlign: "center" },
    },
    { title: "Date", field: "date", type: "date" },
    { title: "Phone", field: "telephone", type: "string" },
    {
      title: "Address",
      field: "address",
      type: "string",
      render: rowData => (
        <Typography noWrap className={classes.address}>
          {rowData.address}
        </Typography>
      ),
    },
  ];

  const openModalHandler = data => {
    setOneUserData(data);
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  const getAllCustomers = () => {
    setIsLoading(true);
    axios
      .get("/api/customers")
      .then(response => {
        setAllCustomers(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => getAllCustomers()}
        className={classes.btn}
      >
        GET ALL CUSTOMERS
      </Button>
      <Typography component="h3" align="center" className={classes.message}>
        {error.message}
      </Typography>
      {isLoading ? (
        <PreloaderAdaptive />
      ) : (
        <MaterialTable
          columns={columns}
          data={allCustomers}
          actions={[
            {
              icon: "edit",
              tooltip: "Edit user rights",
              onClick: (event, rowData) => {
                openModalHandler(rowData);
              },
            },
          ]}
          title="Customers"
        />
      )}
      <UserModal
        user={oneUserData}
        isOpen={modalIsOpen}
        onClose={() => {
          closeModalHandler();
        }}
        allCustomers={allCustomers}
        setAllCustomers={setAllCustomers}
        setOneUserData={setOneUserData}
      />
    </Box>
  );
};

export default AdminCustomers;
